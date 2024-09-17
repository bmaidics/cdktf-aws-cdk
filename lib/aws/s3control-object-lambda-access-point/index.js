"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3ControlObjectLambdaAccessPoint = exports.S3ControlObjectLambdaAccessPointConfigurationOutputReference = exports.s3ControlObjectLambdaAccessPointConfigurationToHclTerraform = exports.s3ControlObjectLambdaAccessPointConfigurationToTerraform = exports.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList = exports.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference = exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToHclTerraform = exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToTerraform = exports.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference = exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToHclTerraform = exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToTerraform = exports.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference = exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToHclTerraform = exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        function_arn: cdktf.stringToTerraform(struct.functionArn),
        function_payload: cdktf.stringToTerraform(struct.functionPayload),
    };
}
exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToTerraform = s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToTerraform;
function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        function_arn: {
            value: cdktf.stringToHclTerraform(struct.functionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        function_payload: {
            value: cdktf.stringToHclTerraform(struct.functionPayload),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToHclTerraform = s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToHclTerraform;
class S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._functionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.functionArn = this._functionArn;
        }
        if (this._functionPayload !== undefined) {
            hasAnyValues = true;
            internalValueResult.functionPayload = this._functionPayload;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._functionArn = undefined;
            this._functionPayload = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._functionArn = value.functionArn;
            this._functionPayload = value.functionPayload;
        }
    }
    get functionArn() {
        return this.getStringAttribute('function_arn');
    }
    set functionArn(value) {
        this._functionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get functionArnInput() {
        return this._functionArn;
    }
    get functionPayload() {
        return this.getStringAttribute('function_payload');
    }
    set functionPayload(value) {
        this._functionPayload = value;
    }
    resetFunctionPayload() {
        this._functionPayload = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get functionPayloadInput() {
        return this._functionPayload;
    }
}
exports.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference = S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference;
_a = JSII_RTTI_SYMBOL_1;
S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference[_a] = { fqn: "@cdktf/aws-cdk.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference", version: "0.0.0" };
function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_lambda: s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToTerraform(struct.awsLambda),
    };
}
exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToTerraform = s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToTerraform;
function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        aws_lambda: {
            value: s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToHclTerraform(struct.awsLambda),
            isBlock: true,
            type: "list",
            storageClassType: "S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToHclTerraform = s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToHclTerraform;
class S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // aws_lambda - computed: false, optional: false, required: true
        this._awsLambda = new S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference(this, "aws_lambda");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._awsLambda?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsLambda = this._awsLambda?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._awsLambda.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._awsLambda.internalValue = value.awsLambda;
        }
    }
    get awsLambda() {
        return this._awsLambda;
    }
    putAwsLambda(value) {
        this._awsLambda.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get awsLambdaInput() {
        return this._awsLambda.internalValue;
    }
}
exports.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference = S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference[_b] = { fqn: "@cdktf/aws-cdk.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference", version: "0.0.0" };
function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.actions),
        content_transformation: s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToTerraform(struct.contentTransformation),
    };
}
exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToTerraform = s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToTerraform;
function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        actions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.actions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        content_transformation: {
            value: s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToHclTerraform(struct.contentTransformation),
            isBlock: true,
            type: "list",
            storageClassType: "S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToHclTerraform = s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToHclTerraform;
class S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // content_transformation - computed: false, optional: false, required: true
        this._contentTransformation = new S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference(this, "content_transformation");
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._actions !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions;
        }
        if (this._contentTransformation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentTransformation = this._contentTransformation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions = undefined;
            this._contentTransformation.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions = value.actions;
            this._contentTransformation.internalValue = value.contentTransformation;
        }
    }
    get actions() {
        return cdktf.Fn.tolist(this.getListAttribute('actions'));
    }
    set actions(value) {
        this._actions = value;
    }
    // Temporarily expose input value. Use with caution.
    get actionsInput() {
        return this._actions;
    }
    get contentTransformation() {
        return this._contentTransformation;
    }
    putContentTransformation(value) {
        this._contentTransformation.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get contentTransformationInput() {
        return this._contentTransformation.internalValue;
    }
}
exports.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference = S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference[_c] = { fqn: "@cdktf/aws-cdk.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference", version: "0.0.0" };
class S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList extends cdktf.ComplexList {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList = S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList;
_d = JSII_RTTI_SYMBOL_1;
S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList[_d] = { fqn: "@cdktf/aws-cdk.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList", version: "0.0.0" };
function s3ControlObjectLambdaAccessPointConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedFeatures),
        cloud_watch_metrics_enabled: cdktf.booleanToTerraform(struct.cloudWatchMetricsEnabled),
        supporting_access_point: cdktf.stringToTerraform(struct.supportingAccessPoint),
        transformation_configuration: cdktf.listMapper(s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToTerraform, true)(struct.transformationConfiguration),
    };
}
exports.s3ControlObjectLambdaAccessPointConfigurationToTerraform = s3ControlObjectLambdaAccessPointConfigurationToTerraform;
function s3ControlObjectLambdaAccessPointConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allowed_features: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedFeatures),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        cloud_watch_metrics_enabled: {
            value: cdktf.booleanToHclTerraform(struct.cloudWatchMetricsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        supporting_access_point: {
            value: cdktf.stringToHclTerraform(struct.supportingAccessPoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transformation_configuration: {
            value: cdktf.listMapperHcl(s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToHclTerraform, true)(struct.transformationConfiguration),
            isBlock: true,
            type: "set",
            storageClassType: "S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3ControlObjectLambdaAccessPointConfigurationToHclTerraform = s3ControlObjectLambdaAccessPointConfigurationToHclTerraform;
class S3ControlObjectLambdaAccessPointConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // transformation_configuration - computed: false, optional: false, required: true
        this._transformationConfiguration = new S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList(this, "transformation_configuration", true);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allowedFeatures !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedFeatures = this._allowedFeatures;
        }
        if (this._cloudWatchMetricsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudWatchMetricsEnabled = this._cloudWatchMetricsEnabled;
        }
        if (this._supportingAccessPoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportingAccessPoint = this._supportingAccessPoint;
        }
        if (this._transformationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transformationConfiguration = this._transformationConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allowedFeatures = undefined;
            this._cloudWatchMetricsEnabled = undefined;
            this._supportingAccessPoint = undefined;
            this._transformationConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allowedFeatures = value.allowedFeatures;
            this._cloudWatchMetricsEnabled = value.cloudWatchMetricsEnabled;
            this._supportingAccessPoint = value.supportingAccessPoint;
            this._transformationConfiguration.internalValue = value.transformationConfiguration;
        }
    }
    get allowedFeatures() {
        return cdktf.Fn.tolist(this.getListAttribute('allowed_features'));
    }
    set allowedFeatures(value) {
        this._allowedFeatures = value;
    }
    resetAllowedFeatures() {
        this._allowedFeatures = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedFeaturesInput() {
        return this._allowedFeatures;
    }
    get cloudWatchMetricsEnabled() {
        return this.getBooleanAttribute('cloud_watch_metrics_enabled');
    }
    set cloudWatchMetricsEnabled(value) {
        this._cloudWatchMetricsEnabled = value;
    }
    resetCloudWatchMetricsEnabled() {
        this._cloudWatchMetricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudWatchMetricsEnabledInput() {
        return this._cloudWatchMetricsEnabled;
    }
    get supportingAccessPoint() {
        return this.getStringAttribute('supporting_access_point');
    }
    set supportingAccessPoint(value) {
        this._supportingAccessPoint = value;
    }
    // Temporarily expose input value. Use with caution.
    get supportingAccessPointInput() {
        return this._supportingAccessPoint;
    }
    get transformationConfiguration() {
        return this._transformationConfiguration;
    }
    putTransformationConfiguration(value) {
        this._transformationConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get transformationConfigurationInput() {
        return this._transformationConfiguration.internalValue;
    }
}
exports.S3ControlObjectLambdaAccessPointConfigurationOutputReference = S3ControlObjectLambdaAccessPointConfigurationOutputReference;
_e = JSII_RTTI_SYMBOL_1;
S3ControlObjectLambdaAccessPointConfigurationOutputReference[_e] = { fqn: "@cdktf/aws-cdk.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPointConfigurationOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3control_object_lambda_access_point aws_s3control_object_lambda_access_point}
*/
class S3ControlObjectLambdaAccessPoint extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a S3ControlObjectLambdaAccessPoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3ControlObjectLambdaAccessPoint to import
    * @param importFromId The id of the existing S3ControlObjectLambdaAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3control_object_lambda_access_point#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3ControlObjectLambdaAccessPoint to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3control_object_lambda_access_point", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3control_object_lambda_access_point aws_s3control_object_lambda_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlObjectLambdaAccessPointConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_s3control_object_lambda_access_point',
            terraformGeneratorMetadata: {
                providerName: 'aws',
                providerVersion: '3.76.1',
                providerVersionConstraint: '~> 3.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        // configuration - computed: false, optional: false, required: true
        this._configuration = new S3ControlObjectLambdaAccessPointConfigurationOutputReference(this, "configuration");
        this._accountId = config.accountId;
        this._id = config.id;
        this._name = config.name;
        this._configuration.internalValue = config.configuration;
    }
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get configuration() {
        return this._configuration;
    }
    putConfiguration(value) {
        this._configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get configurationInput() {
        return this._configuration.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            configuration: s3ControlObjectLambdaAccessPointConfigurationToTerraform(this._configuration.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration: {
                value: s3ControlObjectLambdaAccessPointConfigurationToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "S3ControlObjectLambdaAccessPointConfigurationList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.S3ControlObjectLambdaAccessPoint = S3ControlObjectLambdaAccessPoint;
_f = JSII_RTTI_SYMBOL_1;
S3ControlObjectLambdaAccessPoint[_f] = { fqn: "@cdktf/aws-cdk.s3ControlObjectLambdaAccessPoint.S3ControlObjectLambdaAccessPoint", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
S3ControlObjectLambdaAccessPoint.tfResourceType = "aws_s3control_object_lambda_access_point";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3MzY29udHJvbC1vYmplY3QtbGFtYmRhLWFjY2Vzcy1wb2ludC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQXNDL0IsU0FBZ0IsaUhBQWlILENBQUMsTUFBdU87SUFDdlcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUMxRCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztLQUNuRSxDQUFBO0FBQ0gsQ0FBQztBQVRELDhPQVNDO0FBR0QsU0FBZ0Isb0hBQW9ILENBQUMsTUFBdU87SUFDMVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWixZQUFZLEVBQUU7WUFDWixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7WUFDdEQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7WUFDMUQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7S0FDRixDQUFDO0lBRUYsOEJBQThCO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBdEJELG9QQXNCQztBQUVELE1BQWEscUhBQXNILFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFHNUo7OztNQUdFO0lBQ0YsWUFBbUIsaUJBQTZDLEVBQUUsa0JBQTBCO1FBQzFGLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFQakQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFROUIsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNwQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RELENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDOUQsQ0FBQztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUF5SDtRQUNoSixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztZQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1FBQ3BDLENBQUM7YUFDSSxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO1FBQ2hELENBQUM7SUFDSCxDQUFDO0lBSUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFJRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBVyxlQUFlLENBQUMsS0FBYTtRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDTSxvQkFBb0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7O0FBakVILHNQQWtFQzs7O0FBVUQsU0FBZ0Isd0dBQXdHLENBQUMsTUFBcU47SUFDNVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxpSEFBaUgsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO0tBQ2pKLENBQUE7QUFDSCxDQUFDO0FBUkQsNE5BUUM7QUFHRCxTQUFnQiwyR0FBMkcsQ0FBQyxNQUFxTjtJQUMvVSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxvSEFBb0gsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1lBQzlJLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixnQkFBZ0IsRUFBRSw0R0FBNEc7U0FDL0g7S0FDRixDQUFDO0lBRUYsOEJBQThCO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBaEJELGtPQWdCQztBQUVELE1BQWEsNEdBQTZHLFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFHbko7OztNQUdFO0lBQ0YsWUFBbUIsaUJBQTZDLEVBQUUsa0JBQTBCO1FBQzFGLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFQakQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUErQjlCLGdFQUFnRTtRQUN4RCxlQUFVLEdBQUcsSUFBSSxxSEFBcUgsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7SUF4Qm5LLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ2pELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDO1FBQ2pFLENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBZ0g7UUFDdkksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQzVDLENBQUM7YUFDSSxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNsRCxDQUFDO0lBQ0gsQ0FBQztJQUlELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNNLFlBQVksQ0FBQyxLQUE2RztRQUMvSCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDOztBQTNDSCxvT0E0Q0M7OztBQWNELFNBQWdCLG1GQUFtRixDQUFDLE1BQXFHO0lBQ3ZNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUMxRSxzQkFBc0IsRUFBRSx3R0FBd0csQ0FBQyxNQUFPLENBQUMscUJBQXFCLENBQUM7S0FDaEssQ0FBQTtBQUNILENBQUM7QUFURCxrTEFTQztBQUdELFNBQWdCLHNGQUFzRixDQUFDLE1BQXFHO0lBQzFNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHO1FBQ1osT0FBTyxFQUFFO1lBQ1AsS0FBSyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7WUFDOUUsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsS0FBSztZQUNYLGdCQUFnQixFQUFFLFlBQVk7U0FDL0I7UUFDRCxzQkFBc0IsRUFBRTtZQUN0QixLQUFLLEVBQUUsMkdBQTJHLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDO1lBQ2pKLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixnQkFBZ0IsRUFBRSxtR0FBbUc7U0FDdEg7S0FDRixDQUFDO0lBRUYsOEJBQThCO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBdEJELHdMQXNCQztBQUVELE1BQWEsdUZBQXdGLFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFJOUg7Ozs7O01BS0U7SUFDRixZQUFtQixpQkFBNkMsRUFBRSxrQkFBMEIsRUFBRSxrQkFBMEIsRUFBRSxzQkFBK0I7UUFDdkosS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFWbkYsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUE4RDlCLDRFQUE0RTtRQUNwRSwyQkFBc0IsR0FBRyxJQUFJLDRHQUE0RyxDQUFDLElBQUksRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBcERsTCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDaEMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzdELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLGFBQWEsQ0FBQztRQUN6RixDQUFDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQStHO1FBQ3RJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1lBQzFCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQ3hELENBQUM7YUFDSSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQzthQUNJLENBQUM7WUFDSixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7UUFDMUUsQ0FBQztJQUNILENBQUM7SUFJRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBZTtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUlELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDLENBQUM7SUFDTSx3QkFBd0IsQ0FBQyxLQUFvRztRQUNsSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNwRCxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQztJQUNuRCxDQUFDOztBQTFFSCwwTEEyRUM7OztBQUVELE1BQWEsNEVBQTZFLFNBQVEsS0FBSyxDQUFDLFdBQVc7SUFHakg7Ozs7TUFJRTtJQUNGLFlBQXNCLGlCQUE2QyxFQUFZLGtCQUEwQixFQUFZLFFBQWlCO1FBQ3BJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQURsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRCO1FBQVksdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFRO1FBQVksYUFBUSxHQUFSLFFBQVEsQ0FBUztJQUV0SSxDQUFDO0lBRUQ7O01BRUU7SUFDSyxHQUFHLENBQUMsS0FBYTtRQUN0QixPQUFPLElBQUksdUZBQXVGLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVLLENBQUM7O0FBakJILG9LQWtCQzs7O0FBc0JELFNBQWdCLHdEQUF3RCxDQUFDLE1BQXFIO0lBQzVMLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO1FBQzNGLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsd0JBQXdCLENBQUM7UUFDdkYsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUMvRSw0QkFBNEIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLG1GQUFtRixFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU8sQ0FBQywyQkFBMkIsQ0FBQztLQUMvSyxDQUFBO0FBQ0gsQ0FBQztBQVhELDRIQVdDO0FBR0QsU0FBZ0IsMkRBQTJELENBQUMsTUFBcUg7SUFDL0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWixnQkFBZ0IsRUFBRTtZQUNoQixLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztZQUN0RixPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxLQUFLO1lBQ1gsZ0JBQWdCLEVBQUUsWUFBWTtTQUMvQjtRQUNELDJCQUEyQixFQUFFO1lBQzNCLEtBQUssRUFBRSxLQUFLLENBQUMscUJBQXFCLENBQUMsTUFBTyxDQUFDLHdCQUF3QixDQUFDO1lBQ3BFLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxTQUFTO1NBQzVCO1FBQ0QsdUJBQXVCLEVBQUU7WUFDdkIsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMscUJBQXFCLENBQUM7WUFDaEUsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCw0QkFBNEIsRUFBRTtZQUM1QixLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxzRkFBc0YsRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFPLENBQUMsMkJBQTJCLENBQUM7WUFDN0osT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsS0FBSztZQUNYLGdCQUFnQixFQUFFLDhFQUE4RTtTQUNqRztLQUNGLENBQUM7SUFFRiw4QkFBOEI7SUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzVILENBQUM7QUFsQ0Qsa0lBa0NDO0FBRUQsTUFBYSw0REFBNkQsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUduRzs7O01BR0U7SUFDRixZQUFtQixpQkFBNkMsRUFBRSxrQkFBMEI7UUFDMUYsS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQVBqRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQThGOUIsa0ZBQWtGO1FBQzFFLGlDQUE0QixHQUFHLElBQUksNEVBQTRFLENBQUMsSUFBSSxFQUFFLDhCQUE4QixFQUFFLElBQUksQ0FBQyxDQUFDO0lBdkZwSyxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDeEMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQzlELENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyx5QkFBeUIsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNqRCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztRQUNoRixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDOUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7UUFDMUUsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLDRCQUE0QixFQUFFLGFBQWEsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNuRSxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxhQUFhLENBQUM7UUFDckcsQ0FBQztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFnRTtRQUN2RixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1lBQ2xDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxTQUFTLENBQUM7WUFDM0MsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFNBQVMsQ0FBQztZQUN4QyxJQUFJLENBQUMsNEJBQTRCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUM5RCxDQUFDO2FBQ0ksQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQzlDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUMsd0JBQXdCLENBQUM7WUFDaEUsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztZQUMxRCxJQUFJLENBQUMsNEJBQTRCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztRQUN0RixDQUFDO0lBQ0gsQ0FBQztJQUlELElBQVcsZUFBZTtRQUN4QixPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNELElBQVcsZUFBZSxDQUFDLEtBQWU7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBQ00sb0JBQW9CO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBSUQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsSUFBVyx3QkFBd0IsQ0FBQyxLQUFrQztRQUNwRSxJQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDO0lBQ3pDLENBQUM7SUFDTSw2QkFBNkI7UUFDbEMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLFNBQVMsQ0FBQztJQUM3QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsNkJBQTZCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ3hDLENBQUM7SUFJRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDRCxJQUFXLHFCQUFxQixDQUFDLEtBQWE7UUFDNUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDLENBQUM7SUFJRCxJQUFXLDJCQUEyQjtRQUNwQyxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztJQUMzQyxDQUFDO0lBQ00sOEJBQThCLENBQUMsS0FBcUc7UUFDekksSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDMUQsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGdDQUFnQztRQUN6QyxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLENBQUM7SUFDekQsQ0FBQzs7QUExR0gsb0lBMkdDOzs7QUFFRDs7RUFFRTtBQUNGLE1BQWEsZ0NBQWlDLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU8zRSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQjs7Ozs7O01BTUU7SUFDSyxNQUFNLENBQUMsdUJBQXVCLENBQUMsS0FBZ0IsRUFBRSxVQUFrQixFQUFFLFlBQW9CLEVBQUUsUUFBa0M7UUFDOUgsT0FBTyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsMENBQTBDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2xLLENBQUM7SUFFTCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUE4QztRQUM3RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLDBDQUEwQztZQUNqRSwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLGVBQWUsRUFBRSxRQUFRO2dCQUN6Qix5QkFBeUIsRUFBRSxRQUFRO2FBQ3BDO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWTtZQUNqQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7WUFDN0IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1NBQ3hCLENBQUMsQ0FBQztRQTZETCxtRUFBbUU7UUFDM0QsbUJBQWMsR0FBRyxJQUFJLDREQUE0RCxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztRQTdEL0csSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUMzRCxDQUFDO0lBUUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQseURBQXlEO0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFJRCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsSUFBVyxFQUFFLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBQ00sT0FBTztRQUNaLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFJRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDTSxnQkFBZ0IsQ0FBQyxLQUFvRDtRQUMxRSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwRCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDckMsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLGFBQWEsRUFBRSx3REFBd0QsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztTQUMzRyxDQUFDO0lBQ0osQ0FBQztJQUVTLHVCQUF1QjtRQUMvQixNQUFNLEtBQUssR0FBRztZQUNaLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ2xELE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUMzQyxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDN0MsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELGFBQWEsRUFBRTtnQkFDYixLQUFLLEVBQUUsMkRBQTJELENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7Z0JBQ3JHLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLGdCQUFnQixFQUFFLG1EQUFtRDthQUN0RTtTQUNGLENBQUM7UUFFRiw4QkFBOEI7UUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUUsQ0FBQyxDQUFBO0lBQzVILENBQUM7O0FBcEtILDRFQXFLQzs7O0FBbktDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csK0NBQWMsR0FBRywwQ0FBMEMsQUFBN0MsQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM2NvbnRyb2xfb2JqZWN0X2xhbWJkYV9hY2Nlc3NfcG9pbnRcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM2NvbnRyb2xfb2JqZWN0X2xhbWJkYV9hY2Nlc3NfcG9pbnQjYWNjb3VudF9pZCBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludCNhY2NvdW50X2lkfVxuICAqL1xuICByZWFkb25seSBhY2NvdW50SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzY29udHJvbF9vYmplY3RfbGFtYmRhX2FjY2Vzc19wb2ludCNpZCBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludCNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNjb250cm9sX29iamVjdF9sYW1iZGFfYWNjZXNzX3BvaW50I25hbWUgUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnQjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBjb25maWd1cmF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM2NvbnRyb2xfb2JqZWN0X2xhbWJkYV9hY2Nlc3NfcG9pbnQjY29uZmlndXJhdGlvbiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludCNjb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBjb25maWd1cmF0aW9uOiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb247XG59XG5leHBvcnQgaW50ZXJmYWNlIFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbkNvbnRlbnRUcmFuc2Zvcm1hdGlvbkF3c0xhbWJkYSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzY29udHJvbF9vYmplY3RfbGFtYmRhX2FjY2Vzc19wb2ludCNmdW5jdGlvbl9hcm4gUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnQjZnVuY3Rpb25fYXJufVxuICAqL1xuICByZWFkb25seSBmdW5jdGlvbkFybjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM2NvbnRyb2xfb2JqZWN0X2xhbWJkYV9hY2Nlc3NfcG9pbnQjZnVuY3Rpb25fcGF5bG9hZCBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludCNmdW5jdGlvbl9wYXlsb2FkfVxuICAqL1xuICByZWFkb25seSBmdW5jdGlvblBheWxvYWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Db250ZW50VHJhbnNmb3JtYXRpb25Bd3NMYW1iZGFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Db250ZW50VHJhbnNmb3JtYXRpb25Bd3NMYW1iZGFPdXRwdXRSZWZlcmVuY2UgfCBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Db250ZW50VHJhbnNmb3JtYXRpb25Bd3NMYW1iZGEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZnVuY3Rpb25fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZ1bmN0aW9uQXJuKSxcbiAgICBmdW5jdGlvbl9wYXlsb2FkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZ1bmN0aW9uUGF5bG9hZCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gczNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uQXdzTGFtYmRhVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uQXdzTGFtYmRhT3V0cHV0UmVmZXJlbmNlIHwgUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uQXdzTGFtYmRhKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBmdW5jdGlvbl9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmZ1bmN0aW9uQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBmdW5jdGlvbl9wYXlsb2FkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5mdW5jdGlvblBheWxvYWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uQXdzTGFtYmRhT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Db250ZW50VHJhbnNmb3JtYXRpb25Bd3NMYW1iZGEgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Z1bmN0aW9uQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZ1bmN0aW9uQXJuID0gdGhpcy5fZnVuY3Rpb25Bcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9mdW5jdGlvblBheWxvYWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZnVuY3Rpb25QYXlsb2FkID0gdGhpcy5fZnVuY3Rpb25QYXlsb2FkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uQXdzTGFtYmRhIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZnVuY3Rpb25Bcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9mdW5jdGlvblBheWxvYWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Z1bmN0aW9uQXJuID0gdmFsdWUuZnVuY3Rpb25Bcm47XG4gICAgICB0aGlzLl9mdW5jdGlvblBheWxvYWQgPSB2YWx1ZS5mdW5jdGlvblBheWxvYWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb25fYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Z1bmN0aW9uQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmdW5jdGlvbkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Z1bmN0aW9uX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZnVuY3Rpb25Bcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Z1bmN0aW9uQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZ1bmN0aW9uQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z1bmN0aW9uQXJuO1xuICB9XG5cbiAgLy8gZnVuY3Rpb25fcGF5bG9hZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mdW5jdGlvblBheWxvYWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZ1bmN0aW9uUGF5bG9hZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Z1bmN0aW9uX3BheWxvYWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZ1bmN0aW9uUGF5bG9hZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZnVuY3Rpb25QYXlsb2FkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RnVuY3Rpb25QYXlsb2FkKCkge1xuICAgIHRoaXMuX2Z1bmN0aW9uUGF5bG9hZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZnVuY3Rpb25QYXlsb2FkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z1bmN0aW9uUGF5bG9hZDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Db250ZW50VHJhbnNmb3JtYXRpb24ge1xuICAvKipcbiAgKiBhd3NfbGFtYmRhIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM2NvbnRyb2xfb2JqZWN0X2xhbWJkYV9hY2Nlc3NfcG9pbnQjYXdzX2xhbWJkYSBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludCNhd3NfbGFtYmRhfVxuICAqL1xuICByZWFkb25seSBhd3NMYW1iZGE6IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbkNvbnRlbnRUcmFuc2Zvcm1hdGlvbkF3c0xhbWJkYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbkNvbnRlbnRUcmFuc2Zvcm1hdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbkNvbnRlbnRUcmFuc2Zvcm1hdGlvbk91dHB1dFJlZmVyZW5jZSB8IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbkNvbnRlbnRUcmFuc2Zvcm1hdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhd3NfbGFtYmRhOiBzM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Db250ZW50VHJhbnNmb3JtYXRpb25Bd3NMYW1iZGFUb1RlcnJhZm9ybShzdHJ1Y3QhLmF3c0xhbWJkYSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gczNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhd3NfbGFtYmRhOiB7XG4gICAgICB2YWx1ZTogczNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uQXdzTGFtYmRhVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hd3NMYW1iZGEpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Db250ZW50VHJhbnNmb3JtYXRpb25Bd3NMYW1iZGFMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbkNvbnRlbnRUcmFuc2Zvcm1hdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hd3NMYW1iZGE/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXdzTGFtYmRhID0gdGhpcy5fYXdzTGFtYmRhPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXdzTGFtYmRhLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F3c0xhbWJkYS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYXdzTGFtYmRhO1xuICAgIH1cbiAgfVxuXG4gIC8vIGF3c19sYW1iZGEgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXdzTGFtYmRhID0gbmV3IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbkNvbnRlbnRUcmFuc2Zvcm1hdGlvbkF3c0xhbWJkYU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImF3c19sYW1iZGFcIik7XG4gIHB1YmxpYyBnZXQgYXdzTGFtYmRhKCkge1xuICAgIHJldHVybiB0aGlzLl9hd3NMYW1iZGE7XG4gIH1cbiAgcHVibGljIHB1dEF3c0xhbWJkYSh2YWx1ZTogUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uQXdzTGFtYmRhKSB7XG4gICAgdGhpcy5fYXdzTGFtYmRhLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXdzTGFtYmRhSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F3c0xhbWJkYS5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzY29udHJvbF9vYmplY3RfbGFtYmRhX2FjY2Vzc19wb2ludCNhY3Rpb25zIFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50I2FjdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IGFjdGlvbnM6IHN0cmluZ1tdO1xuICAvKipcbiAgKiBjb250ZW50X3RyYW5zZm9ybWF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM2NvbnRyb2xfb2JqZWN0X2xhbWJkYV9hY2Nlc3NfcG9pbnQjY29udGVudF90cmFuc2Zvcm1hdGlvbiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludCNjb250ZW50X3RyYW5zZm9ybWF0aW9ufVxuICAqL1xuICByZWFkb25seSBjb250ZW50VHJhbnNmb3JtYXRpb246IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbkNvbnRlbnRUcmFuc2Zvcm1hdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmFjdGlvbnMpLFxuICAgIGNvbnRlbnRfdHJhbnNmb3JtYXRpb246IHMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbkNvbnRlbnRUcmFuc2Zvcm1hdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuY29udGVudFRyYW5zZm9ybWF0aW9uKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYWN0aW9uczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmFjdGlvbnMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgICBjb250ZW50X3RyYW5zZm9ybWF0aW9uOiB7XG4gICAgICB2YWx1ZTogczNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb250ZW50VHJhbnNmb3JtYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25Db250ZW50VHJhbnNmb3JtYXRpb25MaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWN0aW9ucyA9IHRoaXMuX2FjdGlvbnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb250ZW50VHJhbnNmb3JtYXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29udGVudFRyYW5zZm9ybWF0aW9uID0gdGhpcy5fY29udGVudFRyYW5zZm9ybWF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FjdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb250ZW50VHJhbnNmb3JtYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hY3Rpb25zID0gdmFsdWUuYWN0aW9ucztcbiAgICAgIHRoaXMuX2NvbnRlbnRUcmFuc2Zvcm1hdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY29udGVudFRyYW5zZm9ybWF0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWN0aW9ucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBhY3Rpb25zKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhY3Rpb25zJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWN0aW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hY3Rpb25zID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9ucztcbiAgfVxuXG4gIC8vIGNvbnRlbnRfdHJhbnNmb3JtYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29udGVudFRyYW5zZm9ybWF0aW9uID0gbmV3IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbkNvbnRlbnRUcmFuc2Zvcm1hdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImNvbnRlbnRfdHJhbnNmb3JtYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgY29udGVudFRyYW5zZm9ybWF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50VHJhbnNmb3JtYXRpb247XG4gIH1cbiAgcHVibGljIHB1dENvbnRlbnRUcmFuc2Zvcm1hdGlvbih2YWx1ZTogUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uQ29udGVudFRyYW5zZm9ybWF0aW9uKSB7XG4gICAgdGhpcy5fY29udGVudFRyYW5zZm9ybWF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGVudFRyYW5zZm9ybWF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRUcmFuc2Zvcm1hdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25MaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzY29udHJvbF9vYmplY3RfbGFtYmRhX2FjY2Vzc19wb2ludCNhbGxvd2VkX2ZlYXR1cmVzIFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50I2FsbG93ZWRfZmVhdHVyZXN9XG4gICovXG4gIHJlYWRvbmx5IGFsbG93ZWRGZWF0dXJlcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM2NvbnRyb2xfb2JqZWN0X2xhbWJkYV9hY2Nlc3NfcG9pbnQjY2xvdWRfd2F0Y2hfbWV0cmljc19lbmFibGVkIFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50I2Nsb3VkX3dhdGNoX21ldHJpY3NfZW5hYmxlZH1cbiAgKi9cbiAgcmVhZG9ubHkgY2xvdWRXYXRjaE1ldHJpY3NFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM2NvbnRyb2xfb2JqZWN0X2xhbWJkYV9hY2Nlc3NfcG9pbnQjc3VwcG9ydGluZ19hY2Nlc3NfcG9pbnQgUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnQjc3VwcG9ydGluZ19hY2Nlc3NfcG9pbnR9XG4gICovXG4gIHJlYWRvbmx5IHN1cHBvcnRpbmdBY2Nlc3NQb2ludDogc3RyaW5nO1xuICAvKipcbiAgKiB0cmFuc2Zvcm1hdGlvbl9jb25maWd1cmF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM2NvbnRyb2xfb2JqZWN0X2xhbWJkYV9hY2Nlc3NfcG9pbnQjdHJhbnNmb3JtYXRpb25fY29uZmlndXJhdGlvbiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludCN0cmFuc2Zvcm1hdGlvbl9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSB0cmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb246IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbltdIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWxsb3dlZF9mZWF0dXJlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuYWxsb3dlZEZlYXR1cmVzKSxcbiAgICBjbG91ZF93YXRjaF9tZXRyaWNzX2VuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3VkV2F0Y2hNZXRyaWNzRW5hYmxlZCksXG4gICAgc3VwcG9ydGluZ19hY2Nlc3NfcG9pbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3VwcG9ydGluZ0FjY2Vzc1BvaW50KSxcbiAgICB0cmFuc2Zvcm1hdGlvbl9jb25maWd1cmF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKHMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gczNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhbGxvd2VkX2ZlYXR1cmVzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuYWxsb3dlZEZlYXR1cmVzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gICAgY2xvdWRfd2F0Y2hfbWV0cmljc19lbmFibGVkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2xvdWRXYXRjaE1ldHJpY3NFbmFibGVkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgc3VwcG9ydGluZ19hY2Nlc3NfcG9pbnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN1cHBvcnRpbmdBY2Nlc3NQb2ludCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdHJhbnNmb3JtYXRpb25fY29uZmlndXJhdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woczNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uVHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEudHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25UcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hbGxvd2VkRmVhdHVyZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWxsb3dlZEZlYXR1cmVzID0gdGhpcy5fYWxsb3dlZEZlYXR1cmVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2xvdWRXYXRjaE1ldHJpY3NFbmFibGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNsb3VkV2F0Y2hNZXRyaWNzRW5hYmxlZCA9IHRoaXMuX2Nsb3VkV2F0Y2hNZXRyaWNzRW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N1cHBvcnRpbmdBY2Nlc3NQb2ludCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdXBwb3J0aW5nQWNjZXNzUG9pbnQgPSB0aGlzLl9zdXBwb3J0aW5nQWNjZXNzUG9pbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl90cmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uID0gdGhpcy5fdHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWxsb3dlZEZlYXR1cmVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2xvdWRXYXRjaE1ldHJpY3NFbmFibGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3VwcG9ydGluZ0FjY2Vzc1BvaW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FsbG93ZWRGZWF0dXJlcyA9IHZhbHVlLmFsbG93ZWRGZWF0dXJlcztcbiAgICAgIHRoaXMuX2Nsb3VkV2F0Y2hNZXRyaWNzRW5hYmxlZCA9IHZhbHVlLmNsb3VkV2F0Y2hNZXRyaWNzRW5hYmxlZDtcbiAgICAgIHRoaXMuX3N1cHBvcnRpbmdBY2Nlc3NQb2ludCA9IHZhbHVlLnN1cHBvcnRpbmdBY2Nlc3NQb2ludDtcbiAgICAgIHRoaXMuX3RyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUudHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFsbG93ZWRfZmVhdHVyZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dlZEZlYXR1cmVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGFsbG93ZWRGZWF0dXJlcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWxsb3dlZF9mZWF0dXJlcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG93ZWRGZWF0dXJlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hbGxvd2VkRmVhdHVyZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvd2VkRmVhdHVyZXMoKSB7XG4gICAgdGhpcy5fYWxsb3dlZEZlYXR1cmVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd2VkRmVhdHVyZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dlZEZlYXR1cmVzO1xuICB9XG5cbiAgLy8gY2xvdWRfd2F0Y2hfbWV0cmljc19lbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nsb3VkV2F0Y2hNZXRyaWNzRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgY2xvdWRXYXRjaE1ldHJpY3NFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Nsb3VkX3dhdGNoX21ldHJpY3NfZW5hYmxlZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2xvdWRXYXRjaE1ldHJpY3NFbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9jbG91ZFdhdGNoTWV0cmljc0VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbG91ZFdhdGNoTWV0cmljc0VuYWJsZWQoKSB7XG4gICAgdGhpcy5fY2xvdWRXYXRjaE1ldHJpY3NFbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbG91ZFdhdGNoTWV0cmljc0VuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWRXYXRjaE1ldHJpY3NFbmFibGVkO1xuICB9XG5cbiAgLy8gc3VwcG9ydGluZ19hY2Nlc3NfcG9pbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3VwcG9ydGluZ0FjY2Vzc1BvaW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdXBwb3J0aW5nQWNjZXNzUG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdXBwb3J0aW5nX2FjY2Vzc19wb2ludCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VwcG9ydGluZ0FjY2Vzc1BvaW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdXBwb3J0aW5nQWNjZXNzUG9pbnQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VwcG9ydGluZ0FjY2Vzc1BvaW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRpbmdBY2Nlc3NQb2ludDtcbiAgfVxuXG4gIC8vIHRyYW5zZm9ybWF0aW9uX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uID0gbmV3IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbkxpc3QodGhpcywgXCJ0cmFuc2Zvcm1hdGlvbl9jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRUcmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb24odmFsdWU6IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRyYW5zZm9ybWF0aW9uQ29uZmlndXJhdGlvbltdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0cmFuc2Zvcm1hdGlvbkNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtYXRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzY29udHJvbF9vYmplY3RfbGFtYmRhX2FjY2Vzc19wb2ludCBhd3NfczNjb250cm9sX29iamVjdF9sYW1iZGFfYWNjZXNzX3BvaW50fVxuKi9cbmV4cG9ydCBjbGFzcyBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfczNjb250cm9sX29iamVjdF9sYW1iZGFfYWNjZXNzX3BvaW50XCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50IHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50IHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludCB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNjb250cm9sX29iamVjdF9sYW1iZGFfYWNjZXNzX3BvaW50I2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludCB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfczNjb250cm9sX29iamVjdF9sYW1iZGFfYWNjZXNzX3BvaW50XCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNjb250cm9sX29iamVjdF9sYW1iZGFfYWNjZXNzX3BvaW50IGF3c19zM2NvbnRyb2xfb2JqZWN0X2xhbWJkYV9hY2Nlc3NfcG9pbnR9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfczNjb250cm9sX29iamVjdF9sYW1iZGFfYWNjZXNzX3BvaW50JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fYWNjb3VudElkID0gY29uZmlnLmFjY291bnRJZDtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmNvbmZpZ3VyYXRpb247XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFjY291bnRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2NvdW50SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFjY291bnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjY291bnRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjY291bnRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWNjb3VudElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjb3VudElkKCkge1xuICAgIHRoaXMuX2FjY291bnRJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjb3VudElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY291bnRJZDtcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBjb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NvbmZpZ3VyYXRpb24gPSBuZXcgUzNDb250cm9sT2JqZWN0TGFtYmRhQWNjZXNzUG9pbnRDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiY29uZmlndXJhdGlvblwiKTtcbiAgcHVibGljIGdldCBjb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRDb25maWd1cmF0aW9uKHZhbHVlOiBTM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9jb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjY291bnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FjY291bnRJZCksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBjb25maWd1cmF0aW9uOiBzM0NvbnRyb2xPYmplY3RMYW1iZGFBY2Nlc3NQb2ludENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9jb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgYWNjb3VudF9pZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fYWNjb3VudElkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgdmFsdWU6IHMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHRoaXMuX2NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlMzQ29udHJvbE9iamVjdExhbWJkYUFjY2Vzc1BvaW50Q29uZmlndXJhdGlvbkxpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==