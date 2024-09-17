"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsTerraformAdapter = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
// originally from https://github.com/skorfmann/cfn2tf/blob/6ff9f366462b270229b7415f68c13a7bea28c144/aws-adapter.ts
const aws_cdk_lib_1 = require("aws-cdk-lib");
const cdktf_1 = require("cdktf");
const tfExpression_1 = require("cdktf/lib/tfExpression");
const codemaker_1 = require("codemaker");
const constructs_1 = require("constructs");
const data_aws_availability_zones_1 = require("./aws/data-aws-availability-zones");
const data_aws_caller_identity_1 = require("./aws/data-aws-caller-identity");
const data_aws_partition_1 = require("./aws/data-aws-partition");
const data_aws_region_1 = require("./aws/data-aws-region");
const provider_1 = require("./aws/provider");
const mapping_1 = require("./mapping");
function toTerraformIdentifier(identifier) {
    return (0, codemaker_1.toSnakeCase)(identifier).replace(/-/g, "_");
}
function getConditionConstructId(conditionId) {
    return `condition_${conditionId}`;
}
class AwsTerraformAdapter extends aws_cdk_lib_1.Stack {
    constructor(scope, id) {
        super(undefined, id);
        const host = new TerraformHost(scope, id, this);
        cdktf_1.Aspects.of(scope).add({
            visit: (node) => {
                if (node === scope) {
                    // TODO: invokeAWSAspects(this); -> find usages of AWSAspects in AWS constructs
                    host.convert();
                }
            },
        });
    }
}
exports.AwsTerraformAdapter = AwsTerraformAdapter;
_a = JSII_RTTI_SYMBOL_1;
AwsTerraformAdapter[_a] = { fqn: "@cdktf/aws-cdk.AwsTerraformAdapter", version: "0.0.0" };
class TerraformHost extends constructs_1.Construct {
    constructor(scope, id, host) {
        super(scope, id);
        this.host = host;
        this.awsAvailabilityZones = {};
        this.regionalAwsProviders = {};
        // TODO: expose this via some method?
        this.mappingForLogicalId = {};
    }
    convert() {
        for (const r of this.host.node.findAll()) {
            if (r instanceof aws_cdk_lib_1.CfnElement) {
                const cfn = this.host.resolve(r._toCloudFormation());
                for (const [logical, value] of Object.entries(cfn.Resources || {})) {
                    this.newTerraformResource(this, logical, value);
                }
                for (const [conditionId, condition] of Object.entries(cfn.Conditions || {})) {
                    this.newTerraformLocalFromCondition(this, conditionId, condition);
                }
                for (const [outputId, args] of Object.entries(cfn.Outputs || {})) {
                    this.newTerraformOutput(this, outputId, args);
                }
            }
        }
    }
    getRegionalAwsProvider(region) {
        if (!this.regionalAwsProviders[region]) {
            this.regionalAwsProviders[region] = new provider_1.AwsProvider(this, `aws_${toTerraformIdentifier(region)}`, {
                region,
                alias: toTerraformIdentifier(region),
            });
        }
        return this.regionalAwsProviders[region];
    }
    getAvailabilityZones(region) {
        const DEFAULT_REGION_KEY = "default_region";
        if (!region) {
            region = DEFAULT_REGION_KEY;
        }
        if (!this.awsAvailabilityZones[region]) {
            this.awsAvailabilityZones[region] = new data_aws_availability_zones_1.DataAwsAvailabilityZones(this, `aws_azs_${toTerraformIdentifier(region)}`, {
                provider: region === DEFAULT_REGION_KEY
                    ? undefined
                    : this.getRegionalAwsProvider(region),
            });
        }
        return this.awsAvailabilityZones[region];
    }
    newTerraformResource(scope, logicalId, resource) {
        // TODO: add debug log console.log(JSON.stringify(resource, null, 2));
        const m = (0, mapping_1.findMapping)(resource.Type);
        if (!m) {
            throw new Error(`no mapping for ${resource.Type}`);
        }
        const props = this.processIntrinsics(resource.Properties ?? {});
        const conditionId = resource.Condition;
        this.mappingForLogicalId[logicalId] = {
            resourceType: resource.Type,
            mapping: m,
        };
        const res = m.resource(scope, logicalId, props);
        if (conditionId) {
            if (!res) {
                throw new Error(`Condition has been found on resource that has no representation in Terraform: ${resource.Type}. Mapper function returned null`);
            }
            res.count = cdktf_1.Token.asNumber((0, tfExpression_1.conditional)(this.getConditionTerraformLocal(conditionId), 1, 0));
        }
        const keys = Object.keys(props).filter((k) => props[k] !== undefined);
        if (keys.length > 0) {
            throw new Error(`cannot map some properties of ${resource.Type}: ${JSON.stringify(props, undefined, 2)}`);
        }
        return res;
    }
    newTerraformOutput(scope, outputId, args) {
        return new cdktf_1.TerraformOutput(scope, outputId, {
            value: this.processIntrinsics(args.Value),
            description: args.Description || undefined,
        });
    }
    newTerraformLocalFromCondition(scope, conditionId, condition) {
        const local = new cdktf_1.TerraformLocal(scope, getConditionConstructId(conditionId), this.processIntrinsics(condition));
        return local;
    }
    getConditionTerraformLocal(conditionId) {
        return cdktf_1.Lazy.anyValue({
            produce: () => {
                const local = this.node.tryFindChild(getConditionConstructId(conditionId));
                if (!local)
                    throw new Error(`Could not find TerraformLocal for condition with id=${conditionId}`);
                return local.expression;
            },
        });
    }
    /**
     * will replace { Condition: 'MyCondition' } with Terraform Local for "MyCondition"
     */
    processConditions(obj) {
        if (typeof obj !== "object") {
            return obj;
        }
        if (Array.isArray(obj)) {
            return obj.map((x) => this.processConditions(x));
        }
        if (Object.keys(obj).length === 1 && typeof obj.Condition === "string") {
            return this.getConditionTerraformLocal(obj.Condition);
        }
        return obj;
    }
    processIntrinsics(obj) {
        if (typeof obj === "string") {
            const escapeString = (str) => {
                // we wrap strings if they contain stringified json (e.g. for step functions)
                // (which contains quotes (") which need to be escaped)
                // or if they contain `${` which needs to be escaped for Terraform strings as well
                if (!cdktf_1.Token.isUnresolved(str) && // only if there is no token in them
                    (str.includes('"') || str.includes("${"))) {
                    return cdktf_1.Fn.rawString(str);
                }
                else {
                    return str; // e.g. a single Token in a string will be returned as is
                }
            };
            // find tokens in string
            const tokenizedFragments = cdktf_1.Tokenization.reverseString(obj);
            // zero or one fragments won't enter the join() function below
            // so we directly escape the whole string
            if (tokenizedFragments.length < 2) {
                return escapeString(obj);
            }
            // if there are more parts, join them into an array
            const parts = tokenizedFragments.join({
                join: (left, right) => {
                    const acc = Array.isArray(left) ? [...left] : [];
                    // on the initial invocation left is still a single string and not an array
                    if (!Array.isArray(left)) {
                        acc.push(escapeString(left));
                    }
                    acc.push(escapeString(right));
                    return acc;
                },
            });
            return cdktf_1.Fn.join("", parts); // we return a TF function to be able to combine rawStrings and unescaped tokens
        }
        if (typeof obj !== "object") {
            return obj;
        }
        if (Array.isArray(obj)) {
            return obj.map((x) => this.processIntrinsics(x));
        }
        const ref = obj.Ref;
        if (ref) {
            return this.resolveRef(ref);
        }
        const intrinsic = Object.keys(obj)[0];
        if (intrinsic?.startsWith("Fn::") && Object.keys(obj).length === 1) {
            return this.resolveIntrinsic(intrinsic, obj[intrinsic]);
        }
        else if (intrinsic?.startsWith("Fn:") && !intrinsic?.startsWith("Fn::")) {
            console.warn('Found possible intrinsic function starting with "Fn:" instead of "Fn::". Typo?');
        }
        const result = {};
        for (const [k, v] of Object.entries(obj)) {
            result[k] = this.processIntrinsics(v);
        }
        return result;
    }
    resolveAtt(logicalId, attribute) {
        const child = this.node.tryFindChild(logicalId);
        if (!child) {
            throw new Error(`unable to resolve a "Ref" to a resource with the logical ID ${logicalId}`);
        }
        const mapping = this.mappingForLogicalId[logicalId];
        const att = typeof mapping.mapping.attributes === "function"
            ? mapping.mapping.attributes.bind(null, attribute)
            : mapping.mapping.attributes[attribute];
        if (!att) {
            throw new Error(`no "${attribute}" attribute mapping for resource of type ${mapping.resourceType}`);
        }
        return att(child);
    }
    resolvePseudo(ref) {
        switch (ref) {
            case "AWS::Partition": {
                this.awsPartition =
                    this.awsPartition ?? new data_aws_partition_1.DataAwsPartition(this, "aws-partition");
                return this.awsPartition.partition;
            }
            case "AWS::Region": {
                this.awsRegion =
                    this.awsRegion ?? new data_aws_region_1.DataAwsRegion(this, "aws-region");
                return this.awsRegion.name;
            }
            case "AWS::AccountId": {
                this.awsCallerIdentity =
                    this.awsCallerIdentity ??
                        new data_aws_caller_identity_1.DataAwsCallerIdentity(this, "aws-caller-identity");
                return this.awsCallerIdentity.accountId;
            }
            case "AWS::NoValue": {
                return undefined;
            }
            case "AWS::URLSuffix": {
                this.awsPartition =
                    this.awsPartition ?? new data_aws_partition_1.DataAwsPartition(this, "aws-partition");
                return this.awsPartition.dnsSuffix;
            }
            default:
                throw new Error(`unable to resolve pseudo reference ${ref}`);
        }
    }
    resolveRef(ref) {
        if (ref?.startsWith("AWS::")) {
            return this.resolvePseudo(ref);
        }
        return cdktf_1.Lazy.stringValue({ produce: () => this.resolveAtt(ref, "Ref") });
    }
    resolveIntrinsic(fn, params) {
        switch (fn) {
            case "Fn::GetAtt": {
                return cdktf_1.Lazy.stringValue({
                    produce: () => this.resolveAtt(params[0], params[1]),
                });
            }
            case "Fn::Join": {
                const [delim, strings] = params;
                return cdktf_1.Fn.join(this.processIntrinsics(delim), this.processIntrinsics(strings));
            }
            case "Fn::Select": {
                const [index, list] = params;
                const i = this.processIntrinsics(index);
                const ll = this.processIntrinsics(list);
                return cdktf_1.Fn.element(ll, i);
            }
            case "Fn::GetAZs": {
                let [region] = params;
                // AWS::Region or undefined fall back to default region for the stack
                if (region === "AWS::Region") {
                    region = undefined;
                }
                return this.getAvailabilityZones(region).names;
            }
            case "Fn::Base64": {
                const [input] = params;
                return cdktf_1.Fn.base64encode(this.processIntrinsics(input));
            }
            case "Fn::Cidr": {
                // https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-cidr.html
                // https://www.terraform.io/docs/language/functions/cidrsubnets.html
                const [ipBlock, count, cidrBits] = this.processIntrinsics(params);
                const prefix = ipBlock;
                // given count=4 bits=8 this will be [8, 8, 8, 8] to match the Fn.cidrsubnets interface
                const newBits = Array(Number(count)).fill(cidrBits, 0);
                return cdktf_1.Fn.cidrsubnets(prefix, newBits);
            }
            case "Fn::FindInMap": {
                const [rawMap, ...rawParams] = params;
                const map = this.processIntrinsics(rawMap);
                const processedParams = this.processIntrinsics(rawParams);
                return (0, tfExpression_1.propertyAccess)(map, processedParams);
            }
            case "Fn::Split": {
                const [separator, string] = params;
                return cdktf_1.Fn.split(this.processIntrinsics(separator), this.processIntrinsics(string));
            }
            case "Fn::Sub": {
                const [rawString, replacementMap] = params;
                let resultString = rawString;
                // replacementMap is an object
                Object.entries(replacementMap).map(([rawVarName, rawVarValue]) => {
                    if (typeof rawVarName !== "string")
                        throw new Error(`Only strings are supported as VarName in Sub function. Encountered ${JSON.stringify(rawVarName)} instead.`);
                    const varName = rawVarName; // we use this as object key
                    const varValue = this.processIntrinsics(rawVarValue);
                    resultString = cdktf_1.Fn.replace(cdktf_1.Token.asString(resultString), cdktf_1.Fn.rawString("${" + varName + "}"), varValue);
                });
                // replace ${!Literal} with ${Literal}
                // see: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-sub.html
                resultString = cdktf_1.Fn.replace(resultString, cdktf_1.Fn.rawString("/\\\\$\\\\{!(\\\\w+)\\\\}/"), cdktf_1.Fn.rawString("${$1}"));
                // in HCL: replace(local.template, "/\\$\\{!(\\w+)\\}/", "$${$1}")
                return resultString;
            }
            case "Fn::Equals": {
                const [left, right] = this.processIntrinsics(params);
                return cdktf_1.Op.eq(left, right);
            }
            case "Fn::And": {
                const [first, ...additional] = this.processConditions(this.processIntrinsics(params));
                // Fn:And supports 2-10 parameters to chain
                return additional.reduce((current, expression) => cdktf_1.Op.and(current, expression), first);
            }
            case "Fn::Or": {
                const [first, ...additional] = this.processConditions(this.processIntrinsics(params));
                // Fn:Or supports 2-10 parameters to chain
                return additional.reduce((current, expression) => cdktf_1.Op.or(current, expression), first);
            }
            case "Fn::If": {
                const [conditionId, trueExpression, falseExpression] = this.processIntrinsics(params);
                return (0, tfExpression_1.conditional)(this.getConditionTerraformLocal(conditionId), trueExpression, falseExpression);
            }
            case "Fn::Not": {
                let [condition] = this.processIntrinsics(params);
                if (typeof condition === "string") {
                    condition = this.getConditionTerraformLocal(condition);
                }
                return cdktf_1.Op.not(condition);
            }
            case "Fn::Transform": {
                // https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html
                throw new Error("Fn::Transform is not supported – Cfn Template Macros are not supported yet");
            }
            case "Fn::ImportValue": {
                // TODO: support cross cfn stack references?
                // This is related to the Export Name from outputs https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/outputs-section-structure.html
                // We might revisit this once the CDKTF supports cross stack references
                throw new Error(`Fn::ImportValue is not yet supported.`);
            }
            default:
                throw new Error(`unsupported intrinsic function ${fn} (params: ${JSON.stringify(params)})`);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXdzLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0dBR0c7QUFFSCxtSEFBbUg7QUFFbkgsNkNBQTZEO0FBQzdELGlDQVVlO0FBQ2YseURBQXFFO0FBQ3JFLHlDQUF3QztBQUN4QywyQ0FBdUM7QUFFdkMsbUZBQTZFO0FBQzdFLDZFQUF1RTtBQUN2RSxpRUFBNEQ7QUFDNUQsMkRBQXNEO0FBQ3RELDZDQUE2QztBQUU3Qyx1Q0FBaUQ7QUFFakQsU0FBUyxxQkFBcUIsQ0FBQyxVQUFrQjtJQUMvQyxPQUFPLElBQUEsdUJBQVcsRUFBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFFRCxTQUFTLHVCQUF1QixDQUFDLFdBQW1CO0lBQ2xELE9BQU8sYUFBYSxXQUFXLEVBQUUsQ0FBQztBQUNwQyxDQUFDO0FBRUQsTUFBYSxtQkFBb0IsU0FBUSxtQkFBSztJQUM1QyxZQUFZLEtBQWdCLEVBQUUsRUFBVTtRQUN0QyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXJCLE1BQU0sSUFBSSxHQUFHLElBQUksYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFaEQsZUFBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ2QsSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFLENBQUM7b0JBQ25CLCtFQUErRTtvQkFDL0UsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNqQixDQUFDO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBZEgsa0RBZUM7OztBQUVELE1BQU0sYUFBYyxTQUFRLHNCQUFTO0lBaUJuQyxZ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QyxFQUM1QyxjQUFjLEVBQ2QsZUFBZSxDQUNoQixDQUFDO1lBQ0osQ0FBQztZQUVELEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRSxDQUFDO29CQUNsQyxTQUFTLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDO2dCQUVELE9BQU8sVUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzQixDQUFDO1lBRUQsS0FBSyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixzRkFBc0Y7Z0JBQ3RGLE1BQU0sSUFBSSxLQUFLLENBQ2IsNEVBQTRFLENBQzdFLENBQUM7WUFDSixDQUFDO1lBRUQsS0FBSyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLDRDQUE0QztnQkFDNUMsZ0pBQWdKO2dCQUNoSix1RUFBdUU7Z0JBQ3ZFLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztZQUMzRCxDQUFDO1lBRUQ7Z0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FDYixrQ0FBa0MsRUFBRSxhQUFhLElBQUksQ0FBQyxTQUFTLENBQzdELE1BQU0sQ0FDUCxHQUFHLENBQ0wsQ0FBQztRQUNOLENBQUM7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIG9yaWdpbmFsbHkgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2tvcmZtYW5uL2NmbjJ0Zi9ibG9iLzZmZjlmMzY2NDYyYjI3MDIyOWI3NDE1ZjY4YzEzYTdiZWEyOGMxNDQvYXdzLWFkYXB0ZXIudHNcblxuaW1wb3J0IHsgU3RhY2ssIENmbkVsZW1lbnQsIElSZXNvbHZhYmxlIH0gZnJvbSBcImF3cy1jZGstbGliXCI7XG5pbXBvcnQge1xuICBUZXJyYWZvcm1SZXNvdXJjZSxcbiAgTGF6eSxcbiAgQXNwZWN0cyxcbiAgRm4sXG4gIE9wLFxuICBUZXJyYWZvcm1Mb2NhbCxcbiAgVGVycmFmb3JtT3V0cHV0LFxuICBUb2tlbixcbiAgVG9rZW5pemF0aW9uLFxufSBmcm9tIFwiY2RrdGZcIjtcbmltcG9ydCB7IGNvbmRpdGlvbmFsLCBwcm9wZXJ0eUFjY2VzcyB9IGZyb20gXCJjZGt0Zi9saWIvdGZFeHByZXNzaW9uXCI7XG5pbXBvcnQgeyB0b1NuYWtlQ2FzZSB9IGZyb20gXCJjb2RlbWFrZXJcIjtcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5cbmltcG9ydCB7IERhdGFBd3NBdmFpbGFiaWxpdHlab25lcyB9IGZyb20gXCIuL2F3cy9kYXRhLWF3cy1hdmFpbGFiaWxpdHktem9uZXNcIjtcbmltcG9ydCB7IERhdGFBd3NDYWxsZXJJZGVudGl0eSB9IGZyb20gXCIuL2F3cy9kYXRhLWF3cy1jYWxsZXItaWRlbnRpdHlcIjtcbmltcG9ydCB7IERhdGFBd3NQYXJ0aXRpb24gfSBmcm9tIFwiLi9hd3MvZGF0YS1hd3MtcGFydGl0aW9uXCI7XG5pbXBvcnQgeyBEYXRhQXdzUmVnaW9uIH0gZnJvbSBcIi4vYXdzL2RhdGEtYXdzLXJlZ2lvblwiO1xuaW1wb3J0IHsgQXdzUHJvdmlkZXIgfSBmcm9tIFwiLi9hd3MvcHJvdmlkZXJcIjtcbmltcG9ydCB7IENsb3VkRm9ybWF0aW9uUmVzb3VyY2UsIENsb3VkRm9ybWF0aW9uVGVtcGxhdGUgfSBmcm9tIFwiLi9jZm5cIjtcbmltcG9ydCB7IGZpbmRNYXBwaW5nLCBNYXBwaW5nIH0gZnJvbSBcIi4vbWFwcGluZ1wiO1xuXG5mdW5jdGlvbiB0b1RlcnJhZm9ybUlkZW50aWZpZXIoaWRlbnRpZmllcjogc3RyaW5nKSB7XG4gIHJldHVybiB0b1NuYWtlQ2FzZShpZGVudGlmaWVyKS5yZXBsYWNlKC8tL2csIFwiX1wiKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29uZGl0aW9uQ29uc3RydWN0SWQoY29uZGl0aW9uSWQ6IHN0cmluZykge1xuICByZXR1cm4gYGNvbmRpdGlvbl8ke2NvbmRpdGlvbklkfWA7XG59XG5cbmV4cG9ydCBjbGFzcyBBd3NUZXJyYWZvcm1BZGFwdGVyIGV4dGVuZHMgU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nKSB7XG4gICAgc3VwZXIodW5kZWZpbmVkLCBpZCk7XG5cbiAgICBjb25zdCBob3N0ID0gbmV3IFRlcnJhZm9ybUhvc3Qoc2NvcGUsIGlkLCB0aGlzKTtcblxuICAgIEFzcGVjdHMub2Yoc2NvcGUpLmFkZCh7XG4gICAgICB2aXNpdDogKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUgPT09IHNjb3BlKSB7XG4gICAgICAgICAgLy8gVE9ETzogaW52b2tlQVdTQXNwZWN0cyh0aGlzKTsgLT4gZmluZCB1c2FnZXMgb2YgQVdTQXNwZWN0cyBpbiBBV1MgY29uc3RydWN0c1xuICAgICAgICAgIGhvc3QuY29udmVydCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbmNsYXNzIFRlcnJhZm9ybUhvc3QgZXh0ZW5kcyBDb25zdHJ1Y3Qge1xuICBwcml2YXRlIGF3c1BhcnRpdGlvbj86IERhdGFBd3NQYXJ0aXRpb247XG4gIHByaXZhdGUgYXdzUmVnaW9uPzogRGF0YUF3c1JlZ2lvbjtcbiAgcHJpdmF0ZSBhd3NDYWxsZXJJZGVudGl0eT86IERhdGFBd3NDYWxsZXJJZGVudGl0eTtcbiAgcHJpdmF0ZSBhd3NBdmFpbGFiaWxpdHlab25lczoge1xuICAgIFtyZWdpb246IHN0cmluZ106IERhdGFBd3NBdmFpbGFiaWxpdHlab25lcztcbiAgfSA9IHt9O1xuICBwcml2YXRlIHJlZ2lvbmFsQXdzUHJvdmlkZXJzOiB7IFtyZWdpb246IHN0cmluZ106IEF3c1Byb3ZpZGVyIH0gPSB7fTtcblxuICAvLyBUT0RPOiBleHBvc2UgdGhpcyB2aWEgc29tZSBtZXRob2Q/XG4gIHByaXZhdGUgcmVhZG9ubHkgbWFwcGluZ0ZvckxvZ2ljYWxJZDoge1xuICAgIFtsb2dpY2FsSWQ6IHN0cmluZ106IHtcbiAgICAgIHJlc291cmNlVHlwZTogc3RyaW5nO1xuICAgICAgbWFwcGluZzogTWFwcGluZzxUZXJyYWZvcm1SZXNvdXJjZT47XG4gICAgfTtcbiAgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNjb3BlOiBDb25zdHJ1Y3QsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhvc3Q6IEF3c1RlcnJhZm9ybUFkYXB0ZXIsXG4gICkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gIH1cblxuICBjb252ZXJ0KCkge1xuICAgIGZvciAoY29uc3QgciBvZiB0aGlzLmhvc3Qubm9kZS5maW5kQWxsKCkpIHtcbiAgICAgIGlmIChyIGluc3RhbmNlb2YgQ2ZuRWxlbWVudCkge1xuICAgICAgICBjb25zdCBjZm4gPSB0aGlzLmhvc3QucmVzb2x2ZShcbiAgICAgICAgICAociBhcyBhbnkpLl90b0Nsb3VkRm9ybWF0aW9uKCksXG4gICAgICAgICkgYXMgQ2xvdWRGb3JtYXRpb25UZW1wbGF0ZTtcbiAgICAgICAgZm9yIChjb25zdCBbbG9naWNhbCwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNmbi5SZXNvdXJjZXMgfHwge30pKSB7XG4gICAgICAgICAgdGhpcy5uZXdUZXJyYWZvcm1SZXNvdXJjZSh0aGlzLCBsb2dpY2FsLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBbY29uZGl0aW9uSWQsIGNvbmRpdGlvbl0gb2YgT2JqZWN0LmVudHJpZXMoXG4gICAgICAgICAgY2ZuLkNvbmRpdGlvbnMgfHwge30sXG4gICAgICAgICkpIHtcbiAgICAgICAgICB0aGlzLm5ld1RlcnJhZm9ybUxvY2FsRnJvbUNvbmRpdGlvbih0aGlzLCBjb25kaXRpb25JZCwgY29uZGl0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IFtvdXRwdXRJZCwgYXJnc10gb2YgT2JqZWN0LmVudHJpZXMoY2ZuLk91dHB1dHMgfHwge30pKSB7XG4gICAgICAgICAgdGhpcy5uZXdUZXJyYWZvcm1PdXRwdXQodGhpcywgb3V0cHV0SWQsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZWdpb25hbEF3c1Byb3ZpZGVyKHJlZ2lvbjogc3RyaW5nKTogQXdzUHJvdmlkZXIge1xuICAgIGlmICghdGhpcy5yZWdpb25hbEF3c1Byb3ZpZGVyc1tyZWdpb25dKSB7XG4gICAgICB0aGlzLnJlZ2lvbmFsQXdzUHJvdmlkZXJzW3JlZ2lvbl0gPSBuZXcgQXdzUHJvdmlkZXIoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIGBhd3NfJHt0b1RlcnJhZm9ybUlkZW50aWZpZXIocmVnaW9uKX1gLFxuICAgICAgICB7XG4gICAgICAgICAgcmVnaW9uLFxuICAgICAgICAgIGFsaWFzOiB0b1RlcnJhZm9ybUlkZW50aWZpZXIocmVnaW9uKSxcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlZ2lvbmFsQXdzUHJvdmlkZXJzW3JlZ2lvbl07XG4gIH1cblxuICBwcml2YXRlIGdldEF2YWlsYWJpbGl0eVpvbmVzKHJlZ2lvbj86IHN0cmluZyk6IERhdGFBd3NBdmFpbGFiaWxpdHlab25lcyB7XG4gICAgY29uc3QgREVGQVVMVF9SRUdJT05fS0VZID0gXCJkZWZhdWx0X3JlZ2lvblwiO1xuICAgIGlmICghcmVnaW9uKSB7XG4gICAgICByZWdpb24gPSBERUZBVUxUX1JFR0lPTl9LRVk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmF3c0F2YWlsYWJpbGl0eVpvbmVzW3JlZ2lvbl0pIHtcbiAgICAgIHRoaXMuYXdzQXZhaWxhYmlsaXR5Wm9uZXNbcmVnaW9uXSA9IG5ldyBEYXRhQXdzQXZhaWxhYmlsaXR5Wm9uZXMoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIGBhd3NfYXpzXyR7dG9UZXJyYWZvcm1JZGVudGlmaWVyKHJlZ2lvbil9YCxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGVyOlxuICAgICAgICAgICAgcmVnaW9uID09PSBERUZBVUxUX1JFR0lPTl9LRVlcbiAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgOiB0aGlzLmdldFJlZ2lvbmFsQXdzUHJvdmlkZXIocmVnaW9uKSxcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmF3c0F2YWlsYWJpbGl0eVpvbmVzW3JlZ2lvbl07XG4gIH1cblxuICBwcml2YXRlIG5ld1RlcnJhZm9ybVJlc291cmNlKFxuICAgIHNjb3BlOiBDb25zdHJ1Y3QsXG4gICAgbG9naWNhbElkOiBzdHJpbmcsXG4gICAgcmVzb3VyY2U6IENsb3VkRm9ybWF0aW9uUmVzb3VyY2UsXG4gICk6IFRlcnJhZm9ybVJlc291cmNlIHwgbnVsbCB7XG4gICAgLy8gVE9ETzogYWRkIGRlYnVnIGxvZyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNvdXJjZSwgbnVsbCwgMikpO1xuICAgIGNvbnN0IG0gPSBmaW5kTWFwcGluZyhyZXNvdXJjZS5UeXBlKTtcbiAgICBpZiAoIW0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbm8gbWFwcGluZyBmb3IgJHtyZXNvdXJjZS5UeXBlfWApO1xuICAgIH1cblxuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9jZXNzSW50cmluc2ljcyhyZXNvdXJjZS5Qcm9wZXJ0aWVzID8/IHt9KTtcbiAgICBjb25zdCBjb25kaXRpb25JZCA9IHJlc291cmNlLkNvbmRpdGlvbjtcblxuICAgIHRoaXMubWFwcGluZ0ZvckxvZ2ljYWxJZFtsb2dpY2FsSWRdID0ge1xuICAgICAgcmVzb3VyY2VUeXBlOiByZXNvdXJjZS5UeXBlLFxuICAgICAgbWFwcGluZzogbSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzID0gbS5yZXNvdXJjZShzY29wZSwgbG9naWNhbElkLCBwcm9wcyk7XG5cbiAgICBpZiAoY29uZGl0aW9uSWQpIHtcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ29uZGl0aW9uIGhhcyBiZWVuIGZvdW5kIG9uIHJlc291cmNlIHRoYXQgaGFzIG5vIHJlcHJlc2VudGF0aW9uIGluIFRlcnJhZm9ybTogJHtyZXNvdXJjZS5UeXBlfS4gTWFwcGVyIGZ1bmN0aW9uIHJldHVybmVkIG51bGxgLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXMuY291bnQgPSBUb2tlbi5hc051bWJlcihcbiAgICAgICAgY29uZGl0aW9uYWwodGhpcy5nZXRDb25kaXRpb25UZXJyYWZvcm1Mb2NhbChjb25kaXRpb25JZCksIDEsIDApLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpLmZpbHRlcigoaykgPT4gcHJvcHNba10gIT09IHVuZGVmaW5lZCk7XG4gICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgY2Fubm90IG1hcCBzb21lIHByb3BlcnRpZXMgb2YgJHtyZXNvdXJjZS5UeXBlfTogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgMixcbiAgICAgICAgKX1gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBuZXdUZXJyYWZvcm1PdXRwdXQoc2NvcGU6IENvbnN0cnVjdCwgb3V0cHV0SWQ6IHN0cmluZywgYXJnczogYW55KSB7XG4gICAgcmV0dXJuIG5ldyBUZXJyYWZvcm1PdXRwdXQoc2NvcGUsIG91dHB1dElkLCB7XG4gICAgICB2YWx1ZTogdGhpcy5wcm9jZXNzSW50cmluc2ljcyhhcmdzLlZhbHVlKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBhcmdzLkRlc2NyaXB0aW9uIHx8IHVuZGVmaW5lZCxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbmV3VGVycmFmb3JtTG9jYWxGcm9tQ29uZGl0aW9uKFxuICAgIHNjb3BlOiBDb25zdHJ1Y3QsXG4gICAgY29uZGl0aW9uSWQ6IHN0cmluZyxcbiAgICBjb25kaXRpb246IGFueSxcbiAgKSB7XG4gICAgY29uc3QgbG9jYWwgPSBuZXcgVGVycmFmb3JtTG9jYWwoXG4gICAgICBzY29wZSxcbiAgICAgIGdldENvbmRpdGlvbkNvbnN0cnVjdElkKGNvbmRpdGlvbklkKSxcbiAgICAgIHRoaXMucHJvY2Vzc0ludHJpbnNpY3MoY29uZGl0aW9uKSxcbiAgICApO1xuXG4gICAgcmV0dXJuIGxvY2FsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb25kaXRpb25UZXJyYWZvcm1Mb2NhbChjb25kaXRpb25JZDogc3RyaW5nKTogSVJlc29sdmFibGUge1xuICAgIHJldHVybiBMYXp5LmFueVZhbHVlKHtcbiAgICAgIHByb2R1Y2U6ICgpID0+IHtcbiAgICAgICAgY29uc3QgbG9jYWwgPSB0aGlzLm5vZGUudHJ5RmluZENoaWxkKFxuICAgICAgICAgIGdldENvbmRpdGlvbkNvbnN0cnVjdElkKGNvbmRpdGlvbklkKSxcbiAgICAgICAgKSBhcyBUZXJyYWZvcm1Mb2NhbDtcbiAgICAgICAgaWYgKCFsb2NhbClcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgQ291bGQgbm90IGZpbmQgVGVycmFmb3JtTG9jYWwgZm9yIGNvbmRpdGlvbiB3aXRoIGlkPSR7Y29uZGl0aW9uSWR9YCxcbiAgICAgICAgICApO1xuICAgICAgICByZXR1cm4gbG9jYWwuZXhwcmVzc2lvbjtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogd2lsbCByZXBsYWNlIHsgQ29uZGl0aW9uOiAnTXlDb25kaXRpb24nIH0gd2l0aCBUZXJyYWZvcm0gTG9jYWwgZm9yIFwiTXlDb25kaXRpb25cIlxuICAgKi9cbiAgcHJpdmF0ZSBwcm9jZXNzQ29uZGl0aW9ucyhvYmo6IGFueSk6IGFueSB7XG4gICAgaWYgKHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgcmV0dXJuIG9iai5tYXAoKHgpID0+IHRoaXMucHJvY2Vzc0NvbmRpdGlvbnMoeCkpO1xuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2Ygb2JqLkNvbmRpdGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29uZGl0aW9uVGVycmFmb3JtTG9jYWwob2JqLkNvbmRpdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc0ludHJpbnNpY3Mob2JqOiBhbnkpOiBhbnkge1xuICAgIGlmICh0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCBlc2NhcGVTdHJpbmcgPSAoc3RyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgLy8gd2Ugd3JhcCBzdHJpbmdzIGlmIHRoZXkgY29udGFpbiBzdHJpbmdpZmllZCBqc29uIChlLmcuIGZvciBzdGVwIGZ1bmN0aW9ucylcbiAgICAgICAgLy8gKHdoaWNoIGNvbnRhaW5zIHF1b3RlcyAoXCIpIHdoaWNoIG5lZWQgdG8gYmUgZXNjYXBlZClcbiAgICAgICAgLy8gb3IgaWYgdGhleSBjb250YWluIGAke2Agd2hpY2ggbmVlZHMgdG8gYmUgZXNjYXBlZCBmb3IgVGVycmFmb3JtIHN0cmluZ3MgYXMgd2VsbFxuICAgICAgICBpZiAoXG4gICAgICAgICAgIVRva2VuLmlzVW5yZXNvbHZlZChzdHIpICYmIC8vIG9ubHkgaWYgdGhlcmUgaXMgbm8gdG9rZW4gaW4gdGhlbVxuICAgICAgICAgIChzdHIuaW5jbHVkZXMoJ1wiJykgfHwgc3RyLmluY2x1ZGVzKFwiJHtcIikpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBGbi5yYXdTdHJpbmcoc3RyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc3RyOyAvLyBlLmcuIGEgc2luZ2xlIFRva2VuIGluIGEgc3RyaW5nIHdpbGwgYmUgcmV0dXJuZWQgYXMgaXNcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gZmluZCB0b2tlbnMgaW4gc3RyaW5nXG4gICAgICBjb25zdCB0b2tlbml6ZWRGcmFnbWVudHMgPSBUb2tlbml6YXRpb24ucmV2ZXJzZVN0cmluZyhvYmopO1xuXG4gICAgICAvLyB6ZXJvIG9yIG9uZSBmcmFnbWVudHMgd29uJ3QgZW50ZXIgdGhlIGpvaW4oKSBmdW5jdGlvbiBiZWxvd1xuICAgICAgLy8gc28gd2UgZGlyZWN0bHkgZXNjYXBlIHRoZSB3aG9sZSBzdHJpbmdcbiAgICAgIGlmICh0b2tlbml6ZWRGcmFnbWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gZXNjYXBlU3RyaW5nKG9iaik7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHRoZXJlIGFyZSBtb3JlIHBhcnRzLCBqb2luIHRoZW0gaW50byBhbiBhcnJheVxuICAgICAgY29uc3QgcGFydHMgPSB0b2tlbml6ZWRGcmFnbWVudHMuam9pbih7XG4gICAgICAgIGpvaW46IChsZWZ0LCByaWdodCk6IHN0cmluZ1tdID0+IHtcbiAgICAgICAgICBjb25zdCBhY2M6IHN0cmluZ1tdID0gQXJyYXkuaXNBcnJheShsZWZ0KSA/IFsuLi5sZWZ0XSA6IFtdO1xuXG4gICAgICAgICAgLy8gb24gdGhlIGluaXRpYWwgaW52b2NhdGlvbiBsZWZ0IGlzIHN0aWxsIGEgc2luZ2xlIHN0cmluZyBhbmQgbm90IGFuIGFycmF5XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGxlZnQpKSB7XG4gICAgICAgICAgICBhY2MucHVzaChlc2NhcGVTdHJpbmcobGVmdCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhY2MucHVzaChlc2NhcGVTdHJpbmcocmlnaHQpKTtcblxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIEZuLmpvaW4oXCJcIiwgcGFydHMpOyAvLyB3ZSByZXR1cm4gYSBURiBmdW5jdGlvbiB0byBiZSBhYmxlIHRvIGNvbWJpbmUgcmF3U3RyaW5ncyBhbmQgdW5lc2NhcGVkIHRva2Vuc1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybiBvYmoubWFwKCh4KSA9PiB0aGlzLnByb2Nlc3NJbnRyaW5zaWNzKHgpKTtcbiAgICB9XG5cbiAgICBjb25zdCByZWYgPSBvYmouUmVmO1xuICAgIGlmIChyZWYpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmVSZWYocmVmKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnRyaW5zaWMgPSBPYmplY3Qua2V5cyhvYmopWzBdO1xuICAgIGlmIChpbnRyaW5zaWM/LnN0YXJ0c1dpdGgoXCJGbjo6XCIpICYmIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZlSW50cmluc2ljKGludHJpbnNpYywgb2JqW2ludHJpbnNpY10pO1xuICAgIH0gZWxzZSBpZiAoaW50cmluc2ljPy5zdGFydHNXaXRoKFwiRm46XCIpICYmICFpbnRyaW5zaWM/LnN0YXJ0c1dpdGgoXCJGbjo6XCIpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdGb3VuZCBwb3NzaWJsZSBpbnRyaW5zaWMgZnVuY3Rpb24gc3RhcnRpbmcgd2l0aCBcIkZuOlwiIGluc3RlYWQgb2YgXCJGbjo6XCIuIFR5cG8/JyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhvYmopKSB7XG4gICAgICByZXN1bHRba10gPSB0aGlzLnByb2Nlc3NJbnRyaW5zaWNzKHYpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVBdHQobG9naWNhbElkOiBzdHJpbmcsIGF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLm5vZGUudHJ5RmluZENoaWxkKGxvZ2ljYWxJZCkgYXMgVGVycmFmb3JtUmVzb3VyY2U7XG4gICAgaWYgKCFjaGlsZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgdW5hYmxlIHRvIHJlc29sdmUgYSBcIlJlZlwiIHRvIGEgcmVzb3VyY2Ugd2l0aCB0aGUgbG9naWNhbCBJRCAke2xvZ2ljYWxJZH1gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXBwaW5nID0gdGhpcy5tYXBwaW5nRm9yTG9naWNhbElkW2xvZ2ljYWxJZF07XG4gICAgY29uc3QgYXR0ID1cbiAgICAgIHR5cGVvZiBtYXBwaW5nLm1hcHBpbmcuYXR0cmlidXRlcyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gbWFwcGluZy5tYXBwaW5nLmF0dHJpYnV0ZXMuYmluZChudWxsLCBhdHRyaWJ1dGUpXG4gICAgICAgIDogbWFwcGluZy5tYXBwaW5nLmF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcbiAgICBpZiAoIWF0dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgbm8gXCIke2F0dHJpYnV0ZX1cIiBhdHRyaWJ1dGUgbWFwcGluZyBmb3IgcmVzb3VyY2Ugb2YgdHlwZSAke21hcHBpbmcucmVzb3VyY2VUeXBlfWAsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBhdHQoY2hpbGQpIGFzIHN0cmluZztcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZVBzZXVkbyhyZWY6IHN0cmluZykge1xuICAgIHN3aXRjaCAocmVmKSB7XG4gICAgICBjYXNlIFwiQVdTOjpQYXJ0aXRpb25cIjoge1xuICAgICAgICB0aGlzLmF3c1BhcnRpdGlvbiA9XG4gICAgICAgICAgdGhpcy5hd3NQYXJ0aXRpb24gPz8gbmV3IERhdGFBd3NQYXJ0aXRpb24odGhpcywgXCJhd3MtcGFydGl0aW9uXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5hd3NQYXJ0aXRpb24ucGFydGl0aW9uO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFwiQVdTOjpSZWdpb25cIjoge1xuICAgICAgICB0aGlzLmF3c1JlZ2lvbiA9XG4gICAgICAgICAgdGhpcy5hd3NSZWdpb24gPz8gbmV3IERhdGFBd3NSZWdpb24odGhpcywgXCJhd3MtcmVnaW9uXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5hd3NSZWdpb24ubmFtZTtcbiAgICAgIH1cblxuICAgICAgY2FzZSBcIkFXUzo6QWNjb3VudElkXCI6IHtcbiAgICAgICAgdGhpcy5hd3NDYWxsZXJJZGVudGl0eSA9XG4gICAgICAgICAgdGhpcy5hd3NDYWxsZXJJZGVudGl0eSA/P1xuICAgICAgICAgIG5ldyBEYXRhQXdzQ2FsbGVySWRlbnRpdHkodGhpcywgXCJhd3MtY2FsbGVyLWlkZW50aXR5XCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5hd3NDYWxsZXJJZGVudGl0eS5hY2NvdW50SWQ7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJBV1M6Ok5vVmFsdWVcIjoge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFwiQVdTOjpVUkxTdWZmaXhcIjoge1xuICAgICAgICB0aGlzLmF3c1BhcnRpdGlvbiA9XG4gICAgICAgICAgdGhpcy5hd3NQYXJ0aXRpb24gPz8gbmV3IERhdGFBd3NQYXJ0aXRpb24odGhpcywgXCJhd3MtcGFydGl0aW9uXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5hd3NQYXJ0aXRpb24uZG5zU3VmZml4O1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVuYWJsZSB0byByZXNvbHZlIHBzZXVkbyByZWZlcmVuY2UgJHtyZWZ9YCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlUmVmKHJlZjogc3RyaW5nKSB7XG4gICAgaWYgKHJlZj8uc3RhcnRzV2l0aChcIkFXUzo6XCIpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZlUHNldWRvKHJlZik7XG4gICAgfVxuXG4gICAgcmV0dXJuIExhenkuc3RyaW5nVmFsdWUoeyBwcm9kdWNlOiAoKSA9PiB0aGlzLnJlc29sdmVBdHQocmVmLCBcIlJlZlwiKSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUludHJpbnNpYyhmbjogc3RyaW5nLCBwYXJhbXM6IGFueSkge1xuICAgIHN3aXRjaCAoZm4pIHtcbiAgICAgIGNhc2UgXCJGbjo6R2V0QXR0XCI6IHtcbiAgICAgICAgcmV0dXJuIExhenkuc3RyaW5nVmFsdWUoe1xuICAgICAgICAgIHByb2R1Y2U6ICgpID0+IHRoaXMucmVzb2x2ZUF0dChwYXJhbXNbMF0sIHBhcmFtc1sxXSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFwiRm46OkpvaW5cIjoge1xuICAgICAgICBjb25zdCBbZGVsaW0sIHN0cmluZ3NdID0gcGFyYW1zO1xuICAgICAgICByZXR1cm4gRm4uam9pbihcbiAgICAgICAgICB0aGlzLnByb2Nlc3NJbnRyaW5zaWNzKGRlbGltKSxcbiAgICAgICAgICB0aGlzLnByb2Nlc3NJbnRyaW5zaWNzKHN0cmluZ3MpLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFwiRm46OlNlbGVjdFwiOiB7XG4gICAgICAgIGNvbnN0IFtpbmRleCwgbGlzdF0gPSBwYXJhbXM7XG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLnByb2Nlc3NJbnRyaW5zaWNzKGluZGV4KTtcbiAgICAgICAgY29uc3QgbGwgPSB0aGlzLnByb2Nlc3NJbnRyaW5zaWNzKGxpc3QpO1xuICAgICAgICByZXR1cm4gRm4uZWxlbWVudChsbCwgaSk7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJGbjo6R2V0QVpzXCI6IHtcbiAgICAgICAgbGV0IFtyZWdpb25dOiBbc3RyaW5nIHwgdW5kZWZpbmVkIHwgXCJBV1M6OlJlZ2lvblwiXSA9IHBhcmFtcztcblxuICAgICAgICAvLyBBV1M6OlJlZ2lvbiBvciB1bmRlZmluZWQgZmFsbCBiYWNrIHRvIGRlZmF1bHQgcmVnaW9uIGZvciB0aGUgc3RhY2tcbiAgICAgICAgaWYgKHJlZ2lvbiA9PT0gXCJBV1M6OlJlZ2lvblwiKSB7XG4gICAgICAgICAgcmVnaW9uID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF2YWlsYWJpbGl0eVpvbmVzKHJlZ2lvbikubmFtZXM7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJGbjo6QmFzZTY0XCI6IHtcbiAgICAgICAgY29uc3QgW2lucHV0XSA9IHBhcmFtcztcbiAgICAgICAgcmV0dXJuIEZuLmJhc2U2NGVuY29kZSh0aGlzLnByb2Nlc3NJbnRyaW5zaWNzKGlucHV0KSk7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJGbjo6Q2lkclwiOiB7XG4gICAgICAgIC8vIGh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9BV1NDbG91ZEZvcm1hdGlvbi9sYXRlc3QvVXNlckd1aWRlL2ludHJpbnNpYy1mdW5jdGlvbi1yZWZlcmVuY2UtY2lkci5odG1sXG4gICAgICAgIC8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL2xhbmd1YWdlL2Z1bmN0aW9ucy9jaWRyc3VibmV0cy5odG1sXG4gICAgICAgIGNvbnN0IFtpcEJsb2NrLCBjb3VudCwgY2lkckJpdHNdOiBbYW55LCBudW1iZXIgfCBzdHJpbmcsIGFueV0gPVxuICAgICAgICAgIHRoaXMucHJvY2Vzc0ludHJpbnNpY3MocGFyYW1zKTtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gaXBCbG9jaztcbiAgICAgICAgLy8gZ2l2ZW4gY291bnQ9NCBiaXRzPTggdGhpcyB3aWxsIGJlIFs4LCA4LCA4LCA4XSB0byBtYXRjaCB0aGUgRm4uY2lkcnN1Ym5ldHMgaW50ZXJmYWNlXG4gICAgICAgIGNvbnN0IG5ld0JpdHMgPSBBcnJheShOdW1iZXIoY291bnQpKS5maWxsKGNpZHJCaXRzLCAwKTtcbiAgICAgICAgcmV0dXJuIEZuLmNpZHJzdWJuZXRzKHByZWZpeCwgbmV3Qml0cyk7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJGbjo6RmluZEluTWFwXCI6IHtcbiAgICAgICAgY29uc3QgW3Jhd01hcCwgLi4ucmF3UGFyYW1zXSA9IHBhcmFtcztcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5wcm9jZXNzSW50cmluc2ljcyhyYXdNYXApO1xuICAgICAgICBjb25zdCBwcm9jZXNzZWRQYXJhbXMgPSB0aGlzLnByb2Nlc3NJbnRyaW5zaWNzKHJhd1BhcmFtcyk7XG4gICAgICAgIHJldHVybiBwcm9wZXJ0eUFjY2VzcyhtYXAsIHByb2Nlc3NlZFBhcmFtcyk7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJGbjo6U3BsaXRcIjoge1xuICAgICAgICBjb25zdCBbc2VwYXJhdG9yLCBzdHJpbmddID0gcGFyYW1zO1xuICAgICAgICByZXR1cm4gRm4uc3BsaXQoXG4gICAgICAgICAgdGhpcy5wcm9jZXNzSW50cmluc2ljcyhzZXBhcmF0b3IpLFxuICAgICAgICAgIHRoaXMucHJvY2Vzc0ludHJpbnNpY3Moc3RyaW5nKSxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgY2FzZSBcIkZuOjpTdWJcIjoge1xuICAgICAgICBjb25zdCBbcmF3U3RyaW5nLCByZXBsYWNlbWVudE1hcF06IFtzdHJpbmcsIG9iamVjdF0gPSBwYXJhbXM7XG5cbiAgICAgICAgbGV0IHJlc3VsdFN0cmluZzogc3RyaW5nIHwgSVJlc29sdmFibGUgPSByYXdTdHJpbmc7XG5cbiAgICAgICAgLy8gcmVwbGFjZW1lbnRNYXAgaXMgYW4gb2JqZWN0XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHJlcGxhY2VtZW50TWFwKS5tYXAoKFtyYXdWYXJOYW1lLCByYXdWYXJWYWx1ZV0pID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHJhd1Zhck5hbWUgIT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBPbmx5IHN0cmluZ3MgYXJlIHN1cHBvcnRlZCBhcyBWYXJOYW1lIGluIFN1YiBmdW5jdGlvbi4gRW5jb3VudGVyZWQgJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICByYXdWYXJOYW1lLFxuICAgICAgICAgICAgICApfSBpbnN0ZWFkLmAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IHZhck5hbWUgPSByYXdWYXJOYW1lOyAvLyB3ZSB1c2UgdGhpcyBhcyBvYmplY3Qga2V5XG4gICAgICAgICAgY29uc3QgdmFyVmFsdWUgPSB0aGlzLnByb2Nlc3NJbnRyaW5zaWNzKHJhd1ZhclZhbHVlKTtcblxuICAgICAgICAgIHJlc3VsdFN0cmluZyA9IEZuLnJlcGxhY2UoXG4gICAgICAgICAgICBUb2tlbi5hc1N0cmluZyhyZXN1bHRTdHJpbmcpLFxuICAgICAgICAgICAgRm4ucmF3U3RyaW5nKFwiJHtcIiArIHZhck5hbWUgKyBcIn1cIiksXG4gICAgICAgICAgICB2YXJWYWx1ZSxcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyByZXBsYWNlICR7IUxpdGVyYWx9IHdpdGggJHtMaXRlcmFsfVxuICAgICAgICAvLyBzZWU6IGh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9BV1NDbG91ZEZvcm1hdGlvbi9sYXRlc3QvVXNlckd1aWRlL2ludHJpbnNpYy1mdW5jdGlvbi1yZWZlcmVuY2Utc3ViLmh0bWxcbiAgICAgICAgcmVzdWx0U3RyaW5nID0gRm4ucmVwbGFjZShcbiAgICAgICAgICByZXN1bHRTdHJpbmcsXG4gICAgICAgICAgRm4ucmF3U3RyaW5nKFwiL1xcXFxcXFxcJFxcXFxcXFxceyEoXFxcXFxcXFx3KylcXFxcXFxcXH0vXCIpLFxuICAgICAgICAgIEZuLnJhd1N0cmluZyhcIiR7JDF9XCIpLFxuICAgICAgICApO1xuICAgICAgICAvLyBpbiBIQ0w6IHJlcGxhY2UobG9jYWwudGVtcGxhdGUsIFwiL1xcXFwkXFxcXHshKFxcXFx3KylcXFxcfS9cIiwgXCIkJHskMX1cIilcblxuICAgICAgICByZXR1cm4gcmVzdWx0U3RyaW5nO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFwiRm46OkVxdWFsc1wiOiB7XG4gICAgICAgIGNvbnN0IFtsZWZ0LCByaWdodF0gPSB0aGlzLnByb2Nlc3NJbnRyaW5zaWNzKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBPcC5lcShsZWZ0LCByaWdodCk7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJGbjo6QW5kXCI6IHtcbiAgICAgICAgY29uc3QgW2ZpcnN0LCAuLi5hZGRpdGlvbmFsXTogW2FueSwgYW55W11dID0gdGhpcy5wcm9jZXNzQ29uZGl0aW9ucyhcbiAgICAgICAgICB0aGlzLnByb2Nlc3NJbnRyaW5zaWNzKHBhcmFtcyksXG4gICAgICAgICk7XG4gICAgICAgIC8vIEZuOkFuZCBzdXBwb3J0cyAyLTEwIHBhcmFtZXRlcnMgdG8gY2hhaW5cbiAgICAgICAgcmV0dXJuIGFkZGl0aW9uYWwucmVkdWNlKFxuICAgICAgICAgIChjdXJyZW50LCBleHByZXNzaW9uKSA9PiBPcC5hbmQoY3VycmVudCwgZXhwcmVzc2lvbiksXG4gICAgICAgICAgZmlyc3QsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJGbjo6T3JcIjoge1xuICAgICAgICBjb25zdCBbZmlyc3QsIC4uLmFkZGl0aW9uYWxdOiBbYW55LCBhbnlbXV0gPSB0aGlzLnByb2Nlc3NDb25kaXRpb25zKFxuICAgICAgICAgIHRoaXMucHJvY2Vzc0ludHJpbnNpY3MocGFyYW1zKSxcbiAgICAgICAgKTtcbiAgICAgICAgLy8gRm46T3Igc3VwcG9ydHMgMi0xMCBwYXJhbWV0ZXJzIHRvIGNoYWluXG4gICAgICAgIHJldHVybiBhZGRpdGlvbmFsLnJlZHVjZShcbiAgICAgICAgICAoY3VycmVudCwgZXhwcmVzc2lvbikgPT4gT3Aub3IoY3VycmVudCwgZXhwcmVzc2lvbiksXG4gICAgICAgICAgZmlyc3QsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJGbjo6SWZcIjoge1xuICAgICAgICBjb25zdCBbY29uZGl0aW9uSWQsIHRydWVFeHByZXNzaW9uLCBmYWxzZUV4cHJlc3Npb25dID1cbiAgICAgICAgICB0aGlzLnByb2Nlc3NJbnRyaW5zaWNzKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBjb25kaXRpb25hbChcbiAgICAgICAgICB0aGlzLmdldENvbmRpdGlvblRlcnJhZm9ybUxvY2FsKGNvbmRpdGlvbklkKSxcbiAgICAgICAgICB0cnVlRXhwcmVzc2lvbixcbiAgICAgICAgICBmYWxzZUV4cHJlc3Npb24sXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJGbjo6Tm90XCI6IHtcbiAgICAgICAgbGV0IFtjb25kaXRpb25dID0gdGhpcy5wcm9jZXNzSW50cmluc2ljcyhwYXJhbXMpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmRpdGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGNvbmRpdGlvbiA9IHRoaXMuZ2V0Q29uZGl0aW9uVGVycmFmb3JtTG9jYWwoY29uZGl0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPcC5ub3QoY29uZGl0aW9uKTtcbiAgICAgIH1cblxuICAgICAgY2FzZSBcIkZuOjpUcmFuc2Zvcm1cIjoge1xuICAgICAgICAvLyBodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vQVdTQ2xvdWRGb3JtYXRpb24vbGF0ZXN0L1VzZXJHdWlkZS90ZW1wbGF0ZS1tYWNyb3MuaHRtbFxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJGbjo6VHJhbnNmb3JtIGlzIG5vdCBzdXBwb3J0ZWQg4oCTIENmbiBUZW1wbGF0ZSBNYWNyb3MgYXJlIG5vdCBzdXBwb3J0ZWQgeWV0XCIsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJGbjo6SW1wb3J0VmFsdWVcIjoge1xuICAgICAgICAvLyBUT0RPOiBzdXBwb3J0IGNyb3NzIGNmbiBzdGFjayByZWZlcmVuY2VzP1xuICAgICAgICAvLyBUaGlzIGlzIHJlbGF0ZWQgdG8gdGhlIEV4cG9ydCBOYW1lIGZyb20gb3V0cHV0cyBodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vQVdTQ2xvdWRGb3JtYXRpb24vbGF0ZXN0L1VzZXJHdWlkZS9vdXRwdXRzLXNlY3Rpb24tc3RydWN0dXJlLmh0bWxcbiAgICAgICAgLy8gV2UgbWlnaHQgcmV2aXNpdCB0aGlzIG9uY2UgdGhlIENES1RGIHN1cHBvcnRzIGNyb3NzIHN0YWNrIHJlZmVyZW5jZXNcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGbjo6SW1wb3J0VmFsdWUgaXMgbm90IHlldCBzdXBwb3J0ZWQuYCk7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgdW5zdXBwb3J0ZWQgaW50cmluc2ljIGZ1bmN0aW9uICR7Zm59IChwYXJhbXM6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgKX0pYCxcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==