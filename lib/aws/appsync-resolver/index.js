"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsyncResolver = exports.AppsyncResolverSyncConfigOutputReference = exports.appsyncResolverSyncConfigToHclTerraform = exports.appsyncResolverSyncConfigToTerraform = exports.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference = exports.appsyncResolverSyncConfigLambdaConflictHandlerConfigToHclTerraform = exports.appsyncResolverSyncConfigLambdaConflictHandlerConfigToTerraform = exports.AppsyncResolverPipelineConfigOutputReference = exports.appsyncResolverPipelineConfigToHclTerraform = exports.appsyncResolverPipelineConfigToTerraform = exports.AppsyncResolverCachingConfigOutputReference = exports.appsyncResolverCachingConfigToHclTerraform = exports.appsyncResolverCachingConfigToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function appsyncResolverCachingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        caching_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.cachingKeys),
        ttl: cdktf.numberToTerraform(struct.ttl),
    };
}
exports.appsyncResolverCachingConfigToTerraform = appsyncResolverCachingConfigToTerraform;
function appsyncResolverCachingConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        caching_keys: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.cachingKeys),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        ttl: {
            value: cdktf.numberToHclTerraform(struct.ttl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appsyncResolverCachingConfigToHclTerraform = appsyncResolverCachingConfigToHclTerraform;
class AppsyncResolverCachingConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._cachingKeys !== undefined) {
            hasAnyValues = true;
            internalValueResult.cachingKeys = this._cachingKeys;
        }
        if (this._ttl !== undefined) {
            hasAnyValues = true;
            internalValueResult.ttl = this._ttl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cachingKeys = undefined;
            this._ttl = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cachingKeys = value.cachingKeys;
            this._ttl = value.ttl;
        }
    }
    get cachingKeys() {
        return cdktf.Fn.tolist(this.getListAttribute('caching_keys'));
    }
    set cachingKeys(value) {
        this._cachingKeys = value;
    }
    resetCachingKeys() {
        this._cachingKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cachingKeysInput() {
        return this._cachingKeys;
    }
    get ttl() {
        return this.getNumberAttribute('ttl');
    }
    set ttl(value) {
        this._ttl = value;
    }
    resetTtl() {
        this._ttl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ttlInput() {
        return this._ttl;
    }
}
exports.AppsyncResolverCachingConfigOutputReference = AppsyncResolverCachingConfigOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AppsyncResolverCachingConfigOutputReference[_a] = { fqn: "@cdktf/aws-cdk.appsyncResolver.AppsyncResolverCachingConfigOutputReference", version: "0.0.0" };
function appsyncResolverPipelineConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        functions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.functions),
    };
}
exports.appsyncResolverPipelineConfigToTerraform = appsyncResolverPipelineConfigToTerraform;
function appsyncResolverPipelineConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        functions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.functions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appsyncResolverPipelineConfigToHclTerraform = appsyncResolverPipelineConfigToHclTerraform;
class AppsyncResolverPipelineConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._functions !== undefined) {
            hasAnyValues = true;
            internalValueResult.functions = this._functions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._functions = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._functions = value.functions;
        }
    }
    get functions() {
        return this.getListAttribute('functions');
    }
    set functions(value) {
        this._functions = value;
    }
    resetFunctions() {
        this._functions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get functionsInput() {
        return this._functions;
    }
}
exports.AppsyncResolverPipelineConfigOutputReference = AppsyncResolverPipelineConfigOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AppsyncResolverPipelineConfigOutputReference[_b] = { fqn: "@cdktf/aws-cdk.appsyncResolver.AppsyncResolverPipelineConfigOutputReference", version: "0.0.0" };
function appsyncResolverSyncConfigLambdaConflictHandlerConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lambda_conflict_handler_arn: cdktf.stringToTerraform(struct.lambdaConflictHandlerArn),
    };
}
exports.appsyncResolverSyncConfigLambdaConflictHandlerConfigToTerraform = appsyncResolverSyncConfigLambdaConflictHandlerConfigToTerraform;
function appsyncResolverSyncConfigLambdaConflictHandlerConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        lambda_conflict_handler_arn: {
            value: cdktf.stringToHclTerraform(struct.lambdaConflictHandlerArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appsyncResolverSyncConfigLambdaConflictHandlerConfigToHclTerraform = appsyncResolverSyncConfigLambdaConflictHandlerConfigToHclTerraform;
class AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._lambdaConflictHandlerArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaConflictHandlerArn = this._lambdaConflictHandlerArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._lambdaConflictHandlerArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._lambdaConflictHandlerArn = value.lambdaConflictHandlerArn;
        }
    }
    get lambdaConflictHandlerArn() {
        return this.getStringAttribute('lambda_conflict_handler_arn');
    }
    set lambdaConflictHandlerArn(value) {
        this._lambdaConflictHandlerArn = value;
    }
    resetLambdaConflictHandlerArn() {
        this._lambdaConflictHandlerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaConflictHandlerArnInput() {
        return this._lambdaConflictHandlerArn;
    }
}
exports.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference = AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference;
_c = JSII_RTTI_SYMBOL_1;
AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference[_c] = { fqn: "@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference", version: "0.0.0" };
function appsyncResolverSyncConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        conflict_detection: cdktf.stringToTerraform(struct.conflictDetection),
        conflict_handler: cdktf.stringToTerraform(struct.conflictHandler),
        lambda_conflict_handler_config: appsyncResolverSyncConfigLambdaConflictHandlerConfigToTerraform(struct.lambdaConflictHandlerConfig),
    };
}
exports.appsyncResolverSyncConfigToTerraform = appsyncResolverSyncConfigToTerraform;
function appsyncResolverSyncConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        conflict_detection: {
            value: cdktf.stringToHclTerraform(struct.conflictDetection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        conflict_handler: {
            value: cdktf.stringToHclTerraform(struct.conflictHandler),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lambda_conflict_handler_config: {
            value: appsyncResolverSyncConfigLambdaConflictHandlerConfigToHclTerraform(struct.lambdaConflictHandlerConfig),
            isBlock: true,
            type: "list",
            storageClassType: "AppsyncResolverSyncConfigLambdaConflictHandlerConfigList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appsyncResolverSyncConfigToHclTerraform = appsyncResolverSyncConfigToHclTerraform;
class AppsyncResolverSyncConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // lambda_conflict_handler_config - computed: false, optional: true, required: false
        this._lambdaConflictHandlerConfig = new AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference(this, "lambda_conflict_handler_config");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._conflictDetection !== undefined) {
            hasAnyValues = true;
            internalValueResult.conflictDetection = this._conflictDetection;
        }
        if (this._conflictHandler !== undefined) {
            hasAnyValues = true;
            internalValueResult.conflictHandler = this._conflictHandler;
        }
        if (this._lambdaConflictHandlerConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaConflictHandlerConfig = this._lambdaConflictHandlerConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._conflictDetection = undefined;
            this._conflictHandler = undefined;
            this._lambdaConflictHandlerConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._conflictDetection = value.conflictDetection;
            this._conflictHandler = value.conflictHandler;
            this._lambdaConflictHandlerConfig.internalValue = value.lambdaConflictHandlerConfig;
        }
    }
    get conflictDetection() {
        return this.getStringAttribute('conflict_detection');
    }
    set conflictDetection(value) {
        this._conflictDetection = value;
    }
    resetConflictDetection() {
        this._conflictDetection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get conflictDetectionInput() {
        return this._conflictDetection;
    }
    get conflictHandler() {
        return this.getStringAttribute('conflict_handler');
    }
    set conflictHandler(value) {
        this._conflictHandler = value;
    }
    resetConflictHandler() {
        this._conflictHandler = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get conflictHandlerInput() {
        return this._conflictHandler;
    }
    get lambdaConflictHandlerConfig() {
        return this._lambdaConflictHandlerConfig;
    }
    putLambdaConflictHandlerConfig(value) {
        this._lambdaConflictHandlerConfig.internalValue = value;
    }
    resetLambdaConflictHandlerConfig() {
        this._lambdaConflictHandlerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaConflictHandlerConfigInput() {
        return this._lambdaConflictHandlerConfig.internalValue;
    }
}
exports.AppsyncResolverSyncConfigOutputReference = AppsyncResolverSyncConfigOutputReference;
_d = JSII_RTTI_SYMBOL_1;
AppsyncResolverSyncConfigOutputReference[_d] = { fqn: "@cdktf/aws-cdk.appsyncResolver.AppsyncResolverSyncConfigOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver aws_appsync_resolver}
*/
class AppsyncResolver extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AppsyncResolver resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppsyncResolver to import
    * @param importFromId The id of the existing AppsyncResolver that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppsyncResolver to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appsync_resolver", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_resolver aws_appsync_resolver} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncResolverConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_appsync_resolver',
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
        // caching_config - computed: false, optional: true, required: false
        this._cachingConfig = new AppsyncResolverCachingConfigOutputReference(this, "caching_config");
        // pipeline_config - computed: false, optional: true, required: false
        this._pipelineConfig = new AppsyncResolverPipelineConfigOutputReference(this, "pipeline_config");
        // sync_config - computed: false, optional: true, required: false
        this._syncConfig = new AppsyncResolverSyncConfigOutputReference(this, "sync_config");
        this._apiId = config.apiId;
        this._dataSource = config.dataSource;
        this._field = config.field;
        this._id = config.id;
        this._kind = config.kind;
        this._maxBatchSize = config.maxBatchSize;
        this._requestTemplate = config.requestTemplate;
        this._responseTemplate = config.responseTemplate;
        this._type = config.type;
        this._cachingConfig.internalValue = config.cachingConfig;
        this._pipelineConfig.internalValue = config.pipelineConfig;
        this._syncConfig.internalValue = config.syncConfig;
    }
    get apiId() {
        return this.getStringAttribute('api_id');
    }
    set apiId(value) {
        this._apiId = value;
    }
    // Temporarily expose input value. Use with caution.
    get apiIdInput() {
        return this._apiId;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get dataSource() {
        return this.getStringAttribute('data_source');
    }
    set dataSource(value) {
        this._dataSource = value;
    }
    resetDataSource() {
        this._dataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dataSourceInput() {
        return this._dataSource;
    }
    get field() {
        return this.getStringAttribute('field');
    }
    set field(value) {
        this._field = value;
    }
    // Temporarily expose input value. Use with caution.
    get fieldInput() {
        return this._field;
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
    get kind() {
        return this.getStringAttribute('kind');
    }
    set kind(value) {
        this._kind = value;
    }
    resetKind() {
        this._kind = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kindInput() {
        return this._kind;
    }
    get maxBatchSize() {
        return this.getNumberAttribute('max_batch_size');
    }
    set maxBatchSize(value) {
        this._maxBatchSize = value;
    }
    resetMaxBatchSize() {
        this._maxBatchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxBatchSizeInput() {
        return this._maxBatchSize;
    }
    get requestTemplate() {
        return this.getStringAttribute('request_template');
    }
    set requestTemplate(value) {
        this._requestTemplate = value;
    }
    resetRequestTemplate() {
        this._requestTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestTemplateInput() {
        return this._requestTemplate;
    }
    get responseTemplate() {
        return this.getStringAttribute('response_template');
    }
    set responseTemplate(value) {
        this._responseTemplate = value;
    }
    resetResponseTemplate() {
        this._responseTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get responseTemplateInput() {
        return this._responseTemplate;
    }
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    get cachingConfig() {
        return this._cachingConfig;
    }
    putCachingConfig(value) {
        this._cachingConfig.internalValue = value;
    }
    resetCachingConfig() {
        this._cachingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cachingConfigInput() {
        return this._cachingConfig.internalValue;
    }
    get pipelineConfig() {
        return this._pipelineConfig;
    }
    putPipelineConfig(value) {
        this._pipelineConfig.internalValue = value;
    }
    resetPipelineConfig() {
        this._pipelineConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pipelineConfigInput() {
        return this._pipelineConfig.internalValue;
    }
    get syncConfig() {
        return this._syncConfig;
    }
    putSyncConfig(value) {
        this._syncConfig.internalValue = value;
    }
    resetSyncConfig() {
        this._syncConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get syncConfigInput() {
        return this._syncConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            data_source: cdktf.stringToTerraform(this._dataSource),
            field: cdktf.stringToTerraform(this._field),
            id: cdktf.stringToTerraform(this._id),
            kind: cdktf.stringToTerraform(this._kind),
            max_batch_size: cdktf.numberToTerraform(this._maxBatchSize),
            request_template: cdktf.stringToTerraform(this._requestTemplate),
            response_template: cdktf.stringToTerraform(this._responseTemplate),
            type: cdktf.stringToTerraform(this._type),
            caching_config: appsyncResolverCachingConfigToTerraform(this._cachingConfig.internalValue),
            pipeline_config: appsyncResolverPipelineConfigToTerraform(this._pipelineConfig.internalValue),
            sync_config: appsyncResolverSyncConfigToTerraform(this._syncConfig.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            api_id: {
                value: cdktf.stringToHclTerraform(this._apiId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data_source: {
                value: cdktf.stringToHclTerraform(this._dataSource),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            field: {
                value: cdktf.stringToHclTerraform(this._field),
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
            kind: {
                value: cdktf.stringToHclTerraform(this._kind),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_batch_size: {
                value: cdktf.numberToHclTerraform(this._maxBatchSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            request_template: {
                value: cdktf.stringToHclTerraform(this._requestTemplate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            response_template: {
                value: cdktf.stringToHclTerraform(this._responseTemplate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            caching_config: {
                value: appsyncResolverCachingConfigToHclTerraform(this._cachingConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AppsyncResolverCachingConfigList",
            },
            pipeline_config: {
                value: appsyncResolverPipelineConfigToHclTerraform(this._pipelineConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AppsyncResolverPipelineConfigList",
            },
            sync_config: {
                value: appsyncResolverSyncConfigToHclTerraform(this._syncConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AppsyncResolverSyncConfigList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.AppsyncResolver = AppsyncResolver;
_e = JSII_RTTI_SYMBOL_1;
AppsyncResolver[_e] = { fqn: "@cdktf/aws-cdk.appsyncResolver.AppsyncResolver", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
AppsyncResolver.tfResourceType = "aws_appsync_resolver";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2FwcHN5bmMtcmVzb2x2ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSwrQkFBK0I7QUEwRS9CLFNBQWdCLHVDQUF1QyxDQUFDLE1BQW1GO0lBQ3pJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUNuRixHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7S0FDMUMsQ0FBQTtBQUNILENBQUM7QUFURCwwRkFTQztBQUdELFNBQWdCLDBDQUEwQyxDQUFDLE1BQW1GO0lBQzVJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHO1FBQ1osWUFB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QyxjQUFjLENBQUMsYUFBYSxDQUFDO2dCQUNwRixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSxrQ0FBa0M7YUFDckQ7WUFDRCxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLDJDQUEyQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO2dCQUN0RixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSxtQ0FBbUM7YUFDdEQ7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLHVDQUF1QyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO2dCQUM5RSxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSwrQkFBK0I7YUFDbEQ7U0FDRixDQUFDO1FBRUYsOEJBQThCO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQWpXSCwwQ0FrV0M7OztBQWhXQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLDhCQUFjLEdBQUcsc0JBQXNCLEFBQXpCLENBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19yZXNvbHZlclxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcHN5bmNSZXNvbHZlckNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBzeW5jX3Jlc29sdmVyI2FwaV9pZCBBcHBzeW5jUmVzb2x2ZXIjYXBpX2lkfVxuICAqL1xuICByZWFkb25seSBhcGlJZDogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBzeW5jX3Jlc29sdmVyI2RhdGFfc291cmNlIEFwcHN5bmNSZXNvbHZlciNkYXRhX3NvdXJjZX1cbiAgKi9cbiAgcmVhZG9ubHkgZGF0YVNvdXJjZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19yZXNvbHZlciNmaWVsZCBBcHBzeW5jUmVzb2x2ZXIjZmllbGR9XG4gICovXG4gIHJlYWRvbmx5IGZpZWxkOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfcmVzb2x2ZXIjaWQgQXBwc3luY1Jlc29sdmVyI2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBzeW5jX3Jlc29sdmVyI2tpbmQgQXBwc3luY1Jlc29sdmVyI2tpbmR9XG4gICovXG4gIHJlYWRvbmx5IGtpbmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfcmVzb2x2ZXIjbWF4X2JhdGNoX3NpemUgQXBwc3luY1Jlc29sdmVyI21heF9iYXRjaF9zaXplfVxuICAqL1xuICByZWFkb25seSBtYXhCYXRjaFNpemU/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfcmVzb2x2ZXIjcmVxdWVzdF90ZW1wbGF0ZSBBcHBzeW5jUmVzb2x2ZXIjcmVxdWVzdF90ZW1wbGF0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgcmVxdWVzdFRlbXBsYXRlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBzeW5jX3Jlc29sdmVyI3Jlc3BvbnNlX3RlbXBsYXRlIEFwcHN5bmNSZXNvbHZlciNyZXNwb25zZV90ZW1wbGF0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgcmVzcG9uc2VUZW1wbGF0ZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19yZXNvbHZlciN0eXBlIEFwcHN5bmNSZXNvbHZlciN0eXBlfVxuICAqL1xuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gIC8qKlxuICAqIGNhY2hpbmdfY29uZmlnIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBzeW5jX3Jlc29sdmVyI2NhY2hpbmdfY29uZmlnIEFwcHN5bmNSZXNvbHZlciNjYWNoaW5nX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgY2FjaGluZ0NvbmZpZz86IEFwcHN5bmNSZXNvbHZlckNhY2hpbmdDb25maWc7XG4gIC8qKlxuICAqIHBpcGVsaW5lX2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19yZXNvbHZlciNwaXBlbGluZV9jb25maWcgQXBwc3luY1Jlc29sdmVyI3BpcGVsaW5lX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgcGlwZWxpbmVDb25maWc/OiBBcHBzeW5jUmVzb2x2ZXJQaXBlbGluZUNvbmZpZztcbiAgLyoqXG4gICogc3luY19jb25maWcgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfcmVzb2x2ZXIjc3luY19jb25maWcgQXBwc3luY1Jlc29sdmVyI3N5bmNfY29uZmlnfVxuICAqL1xuICByZWFkb25seSBzeW5jQ29uZmlnPzogQXBwc3luY1Jlc29sdmVyU3luY0NvbmZpZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwc3luY1Jlc29sdmVyQ2FjaGluZ0NvbmZpZyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfcmVzb2x2ZXIjY2FjaGluZ19rZXlzIEFwcHN5bmNSZXNvbHZlciNjYWNoaW5nX2tleXN9XG4gICovXG4gIHJlYWRvbmx5IGNhY2hpbmdLZXlzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfcmVzb2x2ZXIjdHRsIEFwcHN5bmNSZXNvbHZlciN0dGx9XG4gICovXG4gIHJlYWRvbmx5IHR0bD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHN5bmNSZXNvbHZlckNhY2hpbmdDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBzeW5jUmVzb2x2ZXJDYWNoaW5nQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgQXBwc3luY1Jlc29sdmVyQ2FjaGluZ0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjYWNoaW5nX2tleXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmNhY2hpbmdLZXlzKSxcbiAgICB0dGw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudHRsKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBzeW5jUmVzb2x2ZXJDYWNoaW5nQ29uZmlnVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwc3luY1Jlc29sdmVyQ2FjaGluZ0NvbmZpZ091dHB1dFJlZmVyZW5jZSB8IEFwcHN5bmNSZXNvbHZlckNhY2hpbmdDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNhY2hpbmdfa2V5czoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmNhY2hpbmdLZXlzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gICAgdHRsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50dGwpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwc3luY1Jlc29sdmVyQ2FjaGluZ0NvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwc3luY1Jlc29sdmVyQ2FjaGluZ0NvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2FjaGluZ0tleXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2FjaGluZ0tleXMgPSB0aGlzLl9jYWNoaW5nS2V5cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3R0bCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50dGwgPSB0aGlzLl90dGw7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBzeW5jUmVzb2x2ZXJDYWNoaW5nQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2FjaGluZ0tleXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90dGwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NhY2hpbmdLZXlzID0gdmFsdWUuY2FjaGluZ0tleXM7XG4gICAgICB0aGlzLl90dGwgPSB2YWx1ZS50dGw7XG4gICAgfVxuICB9XG5cbiAgLy8gY2FjaGluZ19rZXlzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NhY2hpbmdLZXlzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGNhY2hpbmdLZXlzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjYWNoaW5nX2tleXMnKSk7XG4gIH1cbiAgcHVibGljIHNldCBjYWNoaW5nS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jYWNoaW5nS2V5cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhY2hpbmdLZXlzKCkge1xuICAgIHRoaXMuX2NhY2hpbmdLZXlzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYWNoaW5nS2V5c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoaW5nS2V5cztcbiAgfVxuXG4gIC8vIHR0bCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dGw/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHR0bCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3R0bCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHRsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90dGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdGwoKSB7XG4gICAgdGhpcy5fdHRsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHRsO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHN5bmNSZXNvbHZlclBpcGVsaW5lQ29uZmlnIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19yZXNvbHZlciNmdW5jdGlvbnMgQXBwc3luY1Jlc29sdmVyI2Z1bmN0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgZnVuY3Rpb25zPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBzeW5jUmVzb2x2ZXJQaXBlbGluZUNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcHN5bmNSZXNvbHZlclBpcGVsaW5lQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgQXBwc3luY1Jlc29sdmVyUGlwZWxpbmVDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZnVuY3Rpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5mdW5jdGlvbnMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHN5bmNSZXNvbHZlclBpcGVsaW5lQ29uZmlnVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwc3luY1Jlc29sdmVyUGlwZWxpbmVDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBBcHBzeW5jUmVzb2x2ZXJQaXBlbGluZUNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZnVuY3Rpb25zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuZnVuY3Rpb25zKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwc3luY1Jlc29sdmVyUGlwZWxpbmVDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcHN5bmNSZXNvbHZlclBpcGVsaW5lQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9mdW5jdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZnVuY3Rpb25zID0gdGhpcy5fZnVuY3Rpb25zO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwc3luY1Jlc29sdmVyUGlwZWxpbmVDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9mdW5jdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Z1bmN0aW9ucyA9IHZhbHVlLmZ1bmN0aW9ucztcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZnVuY3Rpb25zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGZ1bmN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdmdW5jdGlvbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZ1bmN0aW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9mdW5jdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGdW5jdGlvbnMoKSB7XG4gICAgdGhpcy5fZnVuY3Rpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmdW5jdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnVuY3Rpb25zO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHN5bmNSZXNvbHZlclN5bmNDb25maWdMYW1iZGFDb25mbGljdEhhbmRsZXJDb25maWcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBzeW5jX3Jlc29sdmVyI2xhbWJkYV9jb25mbGljdF9oYW5kbGVyX2FybiBBcHBzeW5jUmVzb2x2ZXIjbGFtYmRhX2NvbmZsaWN0X2hhbmRsZXJfYXJufVxuICAqL1xuICByZWFkb25seSBsYW1iZGFDb25mbGljdEhhbmRsZXJBcm4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBzeW5jUmVzb2x2ZXJTeW5jQ29uZmlnTGFtYmRhQ29uZmxpY3RIYW5kbGVyQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwc3luY1Jlc29sdmVyU3luY0NvbmZpZ0xhbWJkYUNvbmZsaWN0SGFuZGxlckNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IEFwcHN5bmNSZXNvbHZlclN5bmNDb25maWdMYW1iZGFDb25mbGljdEhhbmRsZXJDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGFtYmRhX2NvbmZsaWN0X2hhbmRsZXJfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhbWJkYUNvbmZsaWN0SGFuZGxlckFybiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwc3luY1Jlc29sdmVyU3luY0NvbmZpZ0xhbWJkYUNvbmZsaWN0SGFuZGxlckNvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcHN5bmNSZXNvbHZlclN5bmNDb25maWdMYW1iZGFDb25mbGljdEhhbmRsZXJDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBBcHBzeW5jUmVzb2x2ZXJTeW5jQ29uZmlnTGFtYmRhQ29uZmxpY3RIYW5kbGVyQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBsYW1iZGFfY29uZmxpY3RfaGFuZGxlcl9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxhbWJkYUNvbmZsaWN0SGFuZGxlckFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBzeW5jUmVzb2x2ZXJTeW5jQ29uZmlnTGFtYmRhQ29uZmxpY3RIYW5kbGVyQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBzeW5jUmVzb2x2ZXJTeW5jQ29uZmlnTGFtYmRhQ29uZmxpY3RIYW5kbGVyQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9sYW1iZGFDb25mbGljdEhhbmRsZXJBcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGFtYmRhQ29uZmxpY3RIYW5kbGVyQXJuID0gdGhpcy5fbGFtYmRhQ29uZmxpY3RIYW5kbGVyQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwc3luY1Jlc29sdmVyU3luY0NvbmZpZ0xhbWJkYUNvbmZsaWN0SGFuZGxlckNvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xhbWJkYUNvbmZsaWN0SGFuZGxlckFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbGFtYmRhQ29uZmxpY3RIYW5kbGVyQXJuID0gdmFsdWUubGFtYmRhQ29uZmxpY3RIYW5kbGVyQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxhbWJkYV9jb25mbGljdF9oYW5kbGVyX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYW1iZGFDb25mbGljdEhhbmRsZXJBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxhbWJkYUNvbmZsaWN0SGFuZGxlckFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhbWJkYV9jb25mbGljdF9oYW5kbGVyX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGFtYmRhQ29uZmxpY3RIYW5kbGVyQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYW1iZGFDb25mbGljdEhhbmRsZXJBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYW1iZGFDb25mbGljdEhhbmRsZXJBcm4oKSB7XG4gICAgdGhpcy5fbGFtYmRhQ29uZmxpY3RIYW5kbGVyQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYW1iZGFDb25mbGljdEhhbmRsZXJBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFtYmRhQ29uZmxpY3RIYW5kbGVyQXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHN5bmNSZXNvbHZlclN5bmNDb25maWcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBzeW5jX3Jlc29sdmVyI2NvbmZsaWN0X2RldGVjdGlvbiBBcHBzeW5jUmVzb2x2ZXIjY29uZmxpY3RfZGV0ZWN0aW9ufVxuICAqL1xuICByZWFkb25seSBjb25mbGljdERldGVjdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19yZXNvbHZlciNjb25mbGljdF9oYW5kbGVyIEFwcHN5bmNSZXNvbHZlciNjb25mbGljdF9oYW5kbGVyfVxuICAqL1xuICByZWFkb25seSBjb25mbGljdEhhbmRsZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGxhbWJkYV9jb25mbGljdF9oYW5kbGVyX2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19yZXNvbHZlciNsYW1iZGFfY29uZmxpY3RfaGFuZGxlcl9jb25maWcgQXBwc3luY1Jlc29sdmVyI2xhbWJkYV9jb25mbGljdF9oYW5kbGVyX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgbGFtYmRhQ29uZmxpY3RIYW5kbGVyQ29uZmlnPzogQXBwc3luY1Jlc29sdmVyU3luY0NvbmZpZ0xhbWJkYUNvbmZsaWN0SGFuZGxlckNvbmZpZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHN5bmNSZXNvbHZlclN5bmNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBzeW5jUmVzb2x2ZXJTeW5jQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgQXBwc3luY1Jlc29sdmVyU3luY0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb25mbGljdF9kZXRlY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29uZmxpY3REZXRlY3Rpb24pLFxuICAgIGNvbmZsaWN0X2hhbmRsZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29uZmxpY3RIYW5kbGVyKSxcbiAgICBsYW1iZGFfY29uZmxpY3RfaGFuZGxlcl9jb25maWc6IGFwcHN5bmNSZXNvbHZlclN5bmNDb25maWdMYW1iZGFDb25mbGljdEhhbmRsZXJDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhbWJkYUNvbmZsaWN0SGFuZGxlckNvbmZpZyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwc3luY1Jlc29sdmVyU3luY0NvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcHN5bmNSZXNvbHZlclN5bmNDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBBcHBzeW5jUmVzb2x2ZXJTeW5jQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjb25mbGljdF9kZXRlY3Rpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvbmZsaWN0RGV0ZWN0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjb25mbGljdF9oYW5kbGVyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb25mbGljdEhhbmRsZXIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGxhbWJkYV9jb25mbGljdF9oYW5kbGVyX2NvbmZpZzoge1xuICAgICAgdmFsdWU6IGFwcHN5bmNSZXNvbHZlclN5bmNDb25maWdMYW1iZGFDb25mbGljdEhhbmRsZXJDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxhbWJkYUNvbmZsaWN0SGFuZGxlckNvbmZpZyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwcHN5bmNSZXNvbHZlclN5bmNDb25maWdMYW1iZGFDb25mbGljdEhhbmRsZXJDb25maWdMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcHN5bmNSZXNvbHZlclN5bmNDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcHN5bmNSZXNvbHZlclN5bmNDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NvbmZsaWN0RGV0ZWN0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbmZsaWN0RGV0ZWN0aW9uID0gdGhpcy5fY29uZmxpY3REZXRlY3Rpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb25mbGljdEhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29uZmxpY3RIYW5kbGVyID0gdGhpcy5fY29uZmxpY3RIYW5kbGVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGFtYmRhQ29uZmxpY3RIYW5kbGVyQ29uZmlnPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxhbWJkYUNvbmZsaWN0SGFuZGxlckNvbmZpZyA9IHRoaXMuX2xhbWJkYUNvbmZsaWN0SGFuZGxlckNvbmZpZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcHN5bmNSZXNvbHZlclN5bmNDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb25mbGljdERldGVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvbmZsaWN0SGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xhbWJkYUNvbmZsaWN0SGFuZGxlckNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb25mbGljdERldGVjdGlvbiA9IHZhbHVlLmNvbmZsaWN0RGV0ZWN0aW9uO1xuICAgICAgdGhpcy5fY29uZmxpY3RIYW5kbGVyID0gdmFsdWUuY29uZmxpY3RIYW5kbGVyO1xuICAgICAgdGhpcy5fbGFtYmRhQ29uZmxpY3RIYW5kbGVyQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZS5sYW1iZGFDb25mbGljdEhhbmRsZXJDb25maWc7XG4gICAgfVxuICB9XG5cbiAgLy8gY29uZmxpY3RfZGV0ZWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbmZsaWN0RGV0ZWN0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb25mbGljdERldGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbmZsaWN0X2RldGVjdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29uZmxpY3REZXRlY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbmZsaWN0RGV0ZWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29uZmxpY3REZXRlY3Rpb24oKSB7XG4gICAgdGhpcy5fY29uZmxpY3REZXRlY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbmZsaWN0RGV0ZWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZsaWN0RGV0ZWN0aW9uO1xuICB9XG5cbiAgLy8gY29uZmxpY3RfaGFuZGxlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb25mbGljdEhhbmRsZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbmZsaWN0SGFuZGxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbmZsaWN0X2hhbmRsZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbmZsaWN0SGFuZGxlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29uZmxpY3RIYW5kbGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29uZmxpY3RIYW5kbGVyKCkge1xuICAgIHRoaXMuX2NvbmZsaWN0SGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uZmxpY3RIYW5kbGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZsaWN0SGFuZGxlcjtcbiAgfVxuXG4gIC8vIGxhbWJkYV9jb25mbGljdF9oYW5kbGVyX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYW1iZGFDb25mbGljdEhhbmRsZXJDb25maWcgPSBuZXcgQXBwc3luY1Jlc29sdmVyU3luY0NvbmZpZ0xhbWJkYUNvbmZsaWN0SGFuZGxlckNvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImxhbWJkYV9jb25mbGljdF9oYW5kbGVyX2NvbmZpZ1wiKTtcbiAgcHVibGljIGdldCBsYW1iZGFDb25mbGljdEhhbmRsZXJDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbWJkYUNvbmZsaWN0SGFuZGxlckNvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0TGFtYmRhQ29uZmxpY3RIYW5kbGVyQ29uZmlnKHZhbHVlOiBBcHBzeW5jUmVzb2x2ZXJTeW5jQ29uZmlnTGFtYmRhQ29uZmxpY3RIYW5kbGVyQ29uZmlnKSB7XG4gICAgdGhpcy5fbGFtYmRhQ29uZmxpY3RIYW5kbGVyQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYW1iZGFDb25mbGljdEhhbmRsZXJDb25maWcoKSB7XG4gICAgdGhpcy5fbGFtYmRhQ29uZmxpY3RIYW5kbGVyQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhbWJkYUNvbmZsaWN0SGFuZGxlckNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYW1iZGFDb25mbGljdEhhbmRsZXJDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19yZXNvbHZlciBhd3NfYXBwc3luY19yZXNvbHZlcn1cbiovXG5leHBvcnQgY2xhc3MgQXBwc3luY1Jlc29sdmVyIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19hcHBzeW5jX3Jlc29sdmVyXCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIEFwcHN5bmNSZXNvbHZlciByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBBcHBzeW5jUmVzb2x2ZXIgdG8gaW1wb3J0XG4gICogQHBhcmFtIGltcG9ydEZyb21JZCBUaGUgaWQgb2YgdGhlIGV4aXN0aW5nIEFwcHN5bmNSZXNvbHZlciB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19yZXNvbHZlciNpbXBvcnQgaW1wb3J0IHNlY3Rpb259IGluIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UgZm9yIHRoZSBpZCB0byB1c2VcbiAgKiBAcGFyYW0gcHJvdmlkZXI/IE9wdGlvbmFsIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciB3aGVyZSB0aGUgQXBwc3luY1Jlc29sdmVyIHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19hcHBzeW5jX3Jlc29sdmVyXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19yZXNvbHZlciBhd3NfYXBwc3luY19yZXNvbHZlcn0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgQXBwc3luY1Jlc29sdmVyQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEFwcHN5bmNSZXNvbHZlckNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2FwcHN5bmNfcmVzb2x2ZXInLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9hcGlJZCA9IGNvbmZpZy5hcGlJZDtcbiAgICB0aGlzLl9kYXRhU291cmNlID0gY29uZmlnLmRhdGFTb3VyY2U7XG4gICAgdGhpcy5fZmllbGQgPSBjb25maWcuZmllbGQ7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gICAgdGhpcy5fa2luZCA9IGNvbmZpZy5raW5kO1xuICAgIHRoaXMuX21heEJhdGNoU2l6ZSA9IGNvbmZpZy5tYXhCYXRjaFNpemU7XG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlID0gY29uZmlnLnJlcXVlc3RUZW1wbGF0ZTtcbiAgICB0aGlzLl9yZXNwb25zZVRlbXBsYXRlID0gY29uZmlnLnJlc3BvbnNlVGVtcGxhdGU7XG4gICAgdGhpcy5fdHlwZSA9IGNvbmZpZy50eXBlO1xuICAgIHRoaXMuX2NhY2hpbmdDb25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5jYWNoaW5nQ29uZmlnO1xuICAgIHRoaXMuX3BpcGVsaW5lQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcucGlwZWxpbmVDb25maWc7XG4gICAgdGhpcy5fc3luY0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnN5bmNDb25maWc7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFwaV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hcGlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXBpSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcGlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFwaUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcGlJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcGlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcGlJZDtcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZGF0YV9zb3VyY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGF0YVNvdXJjZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFfc291cmNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYXRhU291cmNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhU291cmNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGF0YVNvdXJjZSgpIHtcbiAgICB0aGlzLl9kYXRhU291cmNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhU291cmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2U7XG4gIH1cblxuICAvLyBmaWVsZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9maWVsZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZmllbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmaWVsZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmllbGQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpZWxkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpZWxkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8ga2luZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9raW5kPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBraW5kKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2luZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQga2luZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2luZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEtpbmQoKSB7XG4gICAgdGhpcy5fa2luZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2luZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9raW5kO1xuICB9XG5cbiAgLy8gbWF4X2JhdGNoX3NpemUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4QmF0Y2hTaXplPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhCYXRjaFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfYmF0Y2hfc2l6ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4QmF0Y2hTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhCYXRjaFNpemUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhCYXRjaFNpemUoKSB7XG4gICAgdGhpcy5fbWF4QmF0Y2hTaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhCYXRjaFNpemVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4QmF0Y2hTaXplO1xuICB9XG5cbiAgLy8gcmVxdWVzdF90ZW1wbGF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1ZXN0VGVtcGxhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlcXVlc3RUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcXVlc3RfdGVtcGxhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcXVlc3RUZW1wbGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVxdWVzdFRlbXBsYXRlKCkge1xuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWVzdFRlbXBsYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZTtcbiAgfVxuXG4gIC8vIHJlc3BvbnNlX3RlbXBsYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc3BvbnNlVGVtcGxhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc3BvbnNlVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNwb25zZV90ZW1wbGF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzcG9uc2VUZW1wbGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzcG9uc2VUZW1wbGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc3BvbnNlVGVtcGxhdGUoKSB7XG4gICAgdGhpcy5fcmVzcG9uc2VUZW1wbGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzcG9uc2VUZW1wbGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRlbXBsYXRlO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvLyBjYWNoaW5nX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYWNoaW5nQ29uZmlnID0gbmV3IEFwcHN5bmNSZXNvbHZlckNhY2hpbmdDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJjYWNoaW5nX2NvbmZpZ1wiKTtcbiAgcHVibGljIGdldCBjYWNoaW5nQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoaW5nQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRDYWNoaW5nQ29uZmlnKHZhbHVlOiBBcHBzeW5jUmVzb2x2ZXJDYWNoaW5nQ29uZmlnKSB7XG4gICAgdGhpcy5fY2FjaGluZ0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2FjaGluZ0NvbmZpZygpIHtcbiAgICB0aGlzLl9jYWNoaW5nQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhY2hpbmdDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGluZ0NvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcGlwZWxpbmVfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BpcGVsaW5lQ29uZmlnID0gbmV3IEFwcHN5bmNSZXNvbHZlclBpcGVsaW5lQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwicGlwZWxpbmVfY29uZmlnXCIpO1xuICBwdWJsaWMgZ2V0IHBpcGVsaW5lQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9waXBlbGluZUNvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0UGlwZWxpbmVDb25maWcodmFsdWU6IEFwcHN5bmNSZXNvbHZlclBpcGVsaW5lQ29uZmlnKSB7XG4gICAgdGhpcy5fcGlwZWxpbmVDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBpcGVsaW5lQ29uZmlnKCkge1xuICAgIHRoaXMuX3BpcGVsaW5lQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBpcGVsaW5lQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzeW5jX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zeW5jQ29uZmlnID0gbmV3IEFwcHN5bmNSZXNvbHZlclN5bmNDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJzeW5jX2NvbmZpZ1wiKTtcbiAgcHVibGljIGdldCBzeW5jQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9zeW5jQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRTeW5jQ29uZmlnKHZhbHVlOiBBcHBzeW5jUmVzb2x2ZXJTeW5jQ29uZmlnKSB7XG4gICAgdGhpcy5fc3luY0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3luY0NvbmZpZygpIHtcbiAgICB0aGlzLl9zeW5jQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN5bmNDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3luY0NvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhcGlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FwaUlkKSxcbiAgICAgIGRhdGFfc291cmNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kYXRhU291cmNlKSxcbiAgICAgIGZpZWxkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9maWVsZCksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAga2luZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fa2luZCksXG4gICAgICBtYXhfYmF0Y2hfc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWF4QmF0Y2hTaXplKSxcbiAgICAgIHJlcXVlc3RfdGVtcGxhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSksXG4gICAgICByZXNwb25zZV90ZW1wbGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVzcG9uc2VUZW1wbGF0ZSksXG4gICAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90eXBlKSxcbiAgICAgIGNhY2hpbmdfY29uZmlnOiBhcHBzeW5jUmVzb2x2ZXJDYWNoaW5nQ29uZmlnVG9UZXJyYWZvcm0odGhpcy5fY2FjaGluZ0NvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHBpcGVsaW5lX2NvbmZpZzogYXBwc3luY1Jlc29sdmVyUGlwZWxpbmVDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9waXBlbGluZUNvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHN5bmNfY29uZmlnOiBhcHBzeW5jUmVzb2x2ZXJTeW5jQ29uZmlnVG9UZXJyYWZvcm0odGhpcy5fc3luY0NvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGFwaV9pZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fYXBpSWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBkYXRhX3NvdXJjZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZGF0YVNvdXJjZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGZpZWxkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9maWVsZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGtpbmQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2tpbmQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBtYXhfYmF0Y2hfc2l6ZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fbWF4QmF0Y2hTaXplKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgcmVxdWVzdF90ZW1wbGF0ZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fcmVxdWVzdFRlbXBsYXRlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgcmVzcG9uc2VfdGVtcGxhdGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3Jlc3BvbnNlVGVtcGxhdGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl90eXBlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgY2FjaGluZ19jb25maWc6IHtcbiAgICAgICAgdmFsdWU6IGFwcHN5bmNSZXNvbHZlckNhY2hpbmdDb25maWdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jYWNoaW5nQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBzeW5jUmVzb2x2ZXJDYWNoaW5nQ29uZmlnTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHBpcGVsaW5lX2NvbmZpZzoge1xuICAgICAgICB2YWx1ZTogYXBwc3luY1Jlc29sdmVyUGlwZWxpbmVDb25maWdUb0hjbFRlcnJhZm9ybSh0aGlzLl9waXBlbGluZUNvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwc3luY1Jlc29sdmVyUGlwZWxpbmVDb25maWdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgc3luY19jb25maWc6IHtcbiAgICAgICAgdmFsdWU6IGFwcHN5bmNSZXNvbHZlclN5bmNDb25maWdUb0hjbFRlcnJhZm9ybSh0aGlzLl9zeW5jQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBzeW5jUmVzb2x2ZXJTeW5jQ29uZmlnTGlzdFwiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19