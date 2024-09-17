"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apigatewayv2Integration = exports.Apigatewayv2IntegrationTlsConfigOutputReference = exports.apigatewayv2IntegrationTlsConfigToHclTerraform = exports.apigatewayv2IntegrationTlsConfigToTerraform = exports.Apigatewayv2IntegrationResponseParametersList = exports.Apigatewayv2IntegrationResponseParametersOutputReference = exports.apigatewayv2IntegrationResponseParametersToHclTerraform = exports.apigatewayv2IntegrationResponseParametersToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function apigatewayv2IntegrationResponseParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mappings: cdktf.hashMapper(cdktf.stringToTerraform)(struct.mappings),
        status_code: cdktf.stringToTerraform(struct.statusCode),
    };
}
exports.apigatewayv2IntegrationResponseParametersToTerraform = apigatewayv2IntegrationResponseParametersToTerraform;
function apigatewayv2IntegrationResponseParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        mappings: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.mappings),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        status_code: {
            value: cdktf.stringToHclTerraform(struct.statusCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.apigatewayv2IntegrationResponseParametersToHclTerraform = apigatewayv2IntegrationResponseParametersToHclTerraform;
class Apigatewayv2IntegrationResponseParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._mappings !== undefined) {
            hasAnyValues = true;
            internalValueResult.mappings = this._mappings;
        }
        if (this._statusCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mappings = undefined;
            this._statusCode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mappings = value.mappings;
            this._statusCode = value.statusCode;
        }
    }
    get mappings() {
        return this.getStringMapAttribute('mappings');
    }
    set mappings(value) {
        this._mappings = value;
    }
    // Temporarily expose input value. Use with caution.
    get mappingsInput() {
        return this._mappings;
    }
    get statusCode() {
        return this.getStringAttribute('status_code');
    }
    set statusCode(value) {
        this._statusCode = value;
    }
    // Temporarily expose input value. Use with caution.
    get statusCodeInput() {
        return this._statusCode;
    }
}
exports.Apigatewayv2IntegrationResponseParametersOutputReference = Apigatewayv2IntegrationResponseParametersOutputReference;
_a = JSII_RTTI_SYMBOL_1;
Apigatewayv2IntegrationResponseParametersOutputReference[_a] = { fqn: "@cdktf/aws-cdk.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference", version: "0.0.0" };
class Apigatewayv2IntegrationResponseParametersList extends cdktf.ComplexList {
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
        return new Apigatewayv2IntegrationResponseParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.Apigatewayv2IntegrationResponseParametersList = Apigatewayv2IntegrationResponseParametersList;
_b = JSII_RTTI_SYMBOL_1;
Apigatewayv2IntegrationResponseParametersList[_b] = { fqn: "@cdktf/aws-cdk.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList", version: "0.0.0" };
function apigatewayv2IntegrationTlsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        server_name_to_verify: cdktf.stringToTerraform(struct.serverNameToVerify),
    };
}
exports.apigatewayv2IntegrationTlsConfigToTerraform = apigatewayv2IntegrationTlsConfigToTerraform;
function apigatewayv2IntegrationTlsConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        server_name_to_verify: {
            value: cdktf.stringToHclTerraform(struct.serverNameToVerify),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.apigatewayv2IntegrationTlsConfigToHclTerraform = apigatewayv2IntegrationTlsConfigToHclTerraform;
class Apigatewayv2IntegrationTlsConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._serverNameToVerify !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverNameToVerify = this._serverNameToVerify;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._serverNameToVerify = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._serverNameToVerify = value.serverNameToVerify;
        }
    }
    get serverNameToVerify() {
        return this.getStringAttribute('server_name_to_verify');
    }
    set serverNameToVerify(value) {
        this._serverNameToVerify = value;
    }
    resetServerNameToVerify() {
        this._serverNameToVerify = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serverNameToVerifyInput() {
        return this._serverNameToVerify;
    }
}
exports.Apigatewayv2IntegrationTlsConfigOutputReference = Apigatewayv2IntegrationTlsConfigOutputReference;
_c = JSII_RTTI_SYMBOL_1;
Apigatewayv2IntegrationTlsConfigOutputReference[_c] = { fqn: "@cdktf/aws-cdk.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration aws_apigatewayv2_integration}
*/
class Apigatewayv2Integration extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Apigatewayv2Integration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Apigatewayv2Integration to import
    * @param importFromId The id of the existing Apigatewayv2Integration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Apigatewayv2Integration to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_apigatewayv2_integration", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration aws_apigatewayv2_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2IntegrationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_apigatewayv2_integration',
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
        // response_parameters - computed: false, optional: true, required: false
        this._responseParameters = new Apigatewayv2IntegrationResponseParametersList(this, "response_parameters", true);
        // tls_config - computed: false, optional: true, required: false
        this._tlsConfig = new Apigatewayv2IntegrationTlsConfigOutputReference(this, "tls_config");
        this._apiId = config.apiId;
        this._connectionId = config.connectionId;
        this._connectionType = config.connectionType;
        this._contentHandlingStrategy = config.contentHandlingStrategy;
        this._credentialsArn = config.credentialsArn;
        this._description = config.description;
        this._id = config.id;
        this._integrationMethod = config.integrationMethod;
        this._integrationSubtype = config.integrationSubtype;
        this._integrationType = config.integrationType;
        this._integrationUri = config.integrationUri;
        this._passthroughBehavior = config.passthroughBehavior;
        this._payloadFormatVersion = config.payloadFormatVersion;
        this._requestParameters = config.requestParameters;
        this._requestTemplates = config.requestTemplates;
        this._templateSelectionExpression = config.templateSelectionExpression;
        this._timeoutMilliseconds = config.timeoutMilliseconds;
        this._responseParameters.internalValue = config.responseParameters;
        this._tlsConfig.internalValue = config.tlsConfig;
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
    get connectionId() {
        return this.getStringAttribute('connection_id');
    }
    set connectionId(value) {
        this._connectionId = value;
    }
    resetConnectionId() {
        this._connectionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get connectionIdInput() {
        return this._connectionId;
    }
    get connectionType() {
        return this.getStringAttribute('connection_type');
    }
    set connectionType(value) {
        this._connectionType = value;
    }
    resetConnectionType() {
        this._connectionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get connectionTypeInput() {
        return this._connectionType;
    }
    get contentHandlingStrategy() {
        return this.getStringAttribute('content_handling_strategy');
    }
    set contentHandlingStrategy(value) {
        this._contentHandlingStrategy = value;
    }
    resetContentHandlingStrategy() {
        this._contentHandlingStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentHandlingStrategyInput() {
        return this._contentHandlingStrategy;
    }
    get credentialsArn() {
        return this.getStringAttribute('credentials_arn');
    }
    set credentialsArn(value) {
        this._credentialsArn = value;
    }
    resetCredentialsArn() {
        this._credentialsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get credentialsArnInput() {
        return this._credentialsArn;
    }
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
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
    get integrationMethod() {
        return this.getStringAttribute('integration_method');
    }
    set integrationMethod(value) {
        this._integrationMethod = value;
    }
    resetIntegrationMethod() {
        this._integrationMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get integrationMethodInput() {
        return this._integrationMethod;
    }
    // integration_response_selection_expression - computed: true, optional: false, required: false
    get integrationResponseSelectionExpression() {
        return this.getStringAttribute('integration_response_selection_expression');
    }
    get integrationSubtype() {
        return this.getStringAttribute('integration_subtype');
    }
    set integrationSubtype(value) {
        this._integrationSubtype = value;
    }
    resetIntegrationSubtype() {
        this._integrationSubtype = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get integrationSubtypeInput() {
        return this._integrationSubtype;
    }
    get integrationType() {
        return this.getStringAttribute('integration_type');
    }
    set integrationType(value) {
        this._integrationType = value;
    }
    // Temporarily expose input value. Use with caution.
    get integrationTypeInput() {
        return this._integrationType;
    }
    get integrationUri() {
        return this.getStringAttribute('integration_uri');
    }
    set integrationUri(value) {
        this._integrationUri = value;
    }
    resetIntegrationUri() {
        this._integrationUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get integrationUriInput() {
        return this._integrationUri;
    }
    get passthroughBehavior() {
        return this.getStringAttribute('passthrough_behavior');
    }
    set passthroughBehavior(value) {
        this._passthroughBehavior = value;
    }
    resetPassthroughBehavior() {
        this._passthroughBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get passthroughBehaviorInput() {
        return this._passthroughBehavior;
    }
    get payloadFormatVersion() {
        return this.getStringAttribute('payload_format_version');
    }
    set payloadFormatVersion(value) {
        this._payloadFormatVersion = value;
    }
    resetPayloadFormatVersion() {
        this._payloadFormatVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get payloadFormatVersionInput() {
        return this._payloadFormatVersion;
    }
    get requestParameters() {
        return this.getStringMapAttribute('request_parameters');
    }
    set requestParameters(value) {
        this._requestParameters = value;
    }
    resetRequestParameters() {
        this._requestParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestParametersInput() {
        return this._requestParameters;
    }
    get requestTemplates() {
        return this.getStringMapAttribute('request_templates');
    }
    set requestTemplates(value) {
        this._requestTemplates = value;
    }
    resetRequestTemplates() {
        this._requestTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestTemplatesInput() {
        return this._requestTemplates;
    }
    get templateSelectionExpression() {
        return this.getStringAttribute('template_selection_expression');
    }
    set templateSelectionExpression(value) {
        this._templateSelectionExpression = value;
    }
    resetTemplateSelectionExpression() {
        this._templateSelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get templateSelectionExpressionInput() {
        return this._templateSelectionExpression;
    }
    get timeoutMilliseconds() {
        return this.getNumberAttribute('timeout_milliseconds');
    }
    set timeoutMilliseconds(value) {
        this._timeoutMilliseconds = value;
    }
    resetTimeoutMilliseconds() {
        this._timeoutMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutMillisecondsInput() {
        return this._timeoutMilliseconds;
    }
    get responseParameters() {
        return this._responseParameters;
    }
    putResponseParameters(value) {
        this._responseParameters.internalValue = value;
    }
    resetResponseParameters() {
        this._responseParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get responseParametersInput() {
        return this._responseParameters.internalValue;
    }
    get tlsConfig() {
        return this._tlsConfig;
    }
    putTlsConfig(value) {
        this._tlsConfig.internalValue = value;
    }
    resetTlsConfig() {
        this._tlsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tlsConfigInput() {
        return this._tlsConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            connection_id: cdktf.stringToTerraform(this._connectionId),
            connection_type: cdktf.stringToTerraform(this._connectionType),
            content_handling_strategy: cdktf.stringToTerraform(this._contentHandlingStrategy),
            credentials_arn: cdktf.stringToTerraform(this._credentialsArn),
            description: cdktf.stringToTerraform(this._description),
            id: cdktf.stringToTerraform(this._id),
            integration_method: cdktf.stringToTerraform(this._integrationMethod),
            integration_subtype: cdktf.stringToTerraform(this._integrationSubtype),
            integration_type: cdktf.stringToTerraform(this._integrationType),
            integration_uri: cdktf.stringToTerraform(this._integrationUri),
            passthrough_behavior: cdktf.stringToTerraform(this._passthroughBehavior),
            payload_format_version: cdktf.stringToTerraform(this._payloadFormatVersion),
            request_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._requestParameters),
            request_templates: cdktf.hashMapper(cdktf.stringToTerraform)(this._requestTemplates),
            template_selection_expression: cdktf.stringToTerraform(this._templateSelectionExpression),
            timeout_milliseconds: cdktf.numberToTerraform(this._timeoutMilliseconds),
            response_parameters: cdktf.listMapper(apigatewayv2IntegrationResponseParametersToTerraform, true)(this._responseParameters.internalValue),
            tls_config: apigatewayv2IntegrationTlsConfigToTerraform(this._tlsConfig.internalValue),
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
            connection_id: {
                value: cdktf.stringToHclTerraform(this._connectionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connection_type: {
                value: cdktf.stringToHclTerraform(this._connectionType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_handling_strategy: {
                value: cdktf.stringToHclTerraform(this._contentHandlingStrategy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            credentials_arn: {
                value: cdktf.stringToHclTerraform(this._credentialsArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
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
            integration_method: {
                value: cdktf.stringToHclTerraform(this._integrationMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            integration_subtype: {
                value: cdktf.stringToHclTerraform(this._integrationSubtype),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            integration_type: {
                value: cdktf.stringToHclTerraform(this._integrationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            integration_uri: {
                value: cdktf.stringToHclTerraform(this._integrationUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            passthrough_behavior: {
                value: cdktf.stringToHclTerraform(this._passthroughBehavior),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            payload_format_version: {
                value: cdktf.stringToHclTerraform(this._payloadFormatVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            request_parameters: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._requestParameters),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            request_templates: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._requestTemplates),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            template_selection_expression: {
                value: cdktf.stringToHclTerraform(this._templateSelectionExpression),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            timeout_milliseconds: {
                value: cdktf.numberToHclTerraform(this._timeoutMilliseconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            response_parameters: {
                value: cdktf.listMapperHcl(apigatewayv2IntegrationResponseParametersToHclTerraform, true)(this._responseParameters.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "Apigatewayv2IntegrationResponseParametersList",
            },
            tls_config: {
                value: apigatewayv2IntegrationTlsConfigToHclTerraform(this._tlsConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "Apigatewayv2IntegrationTlsConfigList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.Apigatewayv2Integration = Apigatewayv2Integration;
_d = JSII_RTTI_SYMBOL_1;
Apigatewayv2Integration[_d] = { fqn: "@cdktf/aws-cdk.apigatewayv2Integration.Apigatewayv2Integration", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
Apigatewayv2Integration.tfResourceType = "aws_apigatewayv2_integration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2FwaWdhdGV3YXl2Mi1pbnRlZ3JhdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQW9HL0IsU0FBZ0Isb0RBQW9ELENBQUMsTUFBc0U7SUFDekksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDckUsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO0tBQ3pELENBQUE7QUFDSCxDQUFDO0FBVEQsb0hBU0M7QUFHRCxTQUFnQix1REFBdUQsQ0FBQyxNQUFzRTtJQUM1SSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7WUFDeEUsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsS0FBSztZQUNYLGdCQUFnQixFQUFFLFdBQVc7U0FDOUI7UUFDRCxXQUFXLEVBQUU7WUFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7WUFDckQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7S0FDRixDQUFDO0lBRUYsOEJBQThCO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBdEJELDBIQXNCQztBQUVELE1BQWEsd0RBQXlELFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFJL0Y7Ozs7O01BS0U7SUFDRixZQUFtQixpQkFBNkMsRUFBRSxrQkFBMEIsRUFBRSxrQkFBMEIsRUFBRSxzQkFBK0I7UUFDdkosS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFWbkYsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFXOUIsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDOUIsQ0FBQztRQUNELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ2pDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEQsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNuQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BELENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBZ0Y7UUFDdkcsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDL0IsQ0FBQzthQUNJLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO2FBQ0ksQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFJRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELElBQVcsUUFBUSxDQUFDLEtBQWdDO1FBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBSUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxJQUFXLFVBQVUsQ0FBQyxLQUFhO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOztBQTFFSCw0SEEyRUM7OztBQUVELE1BQWEsNkNBQThDLFNBQVEsS0FBSyxDQUFDLFdBQVc7SUFHbEY7Ozs7TUFJRTtJQUNGLFlBQXNCLGlCQUE2QyxFQUFZLGtCQUEwQixFQUFZLFFBQWlCO1FBQ3BJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQURsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRCO1FBQVksdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFRO1FBQVksYUFBUSxHQUFSLFFBQVEsQ0FBUztJQUV0SSxDQUFDO0lBRUQ7O01BRUU7SUFDSyxHQUFHLENBQUMsS0FBYTtRQUN0QixPQUFPLElBQUksd0RBQXdELENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdJLENBQUM7O0FBakJILHNHQWtCQzs7O0FBUUQsU0FBZ0IsMkNBQTJDLENBQUMsTUFBMkY7SUFDckosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7S0FDM0UsQ0FBQTtBQUNILENBQUM7QUFSRCxrR0FRQztBQUdELFNBQWdCLDhDQUE4QyxDQUFDLE1BQTJGO0lBQ3hKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHO1FBQ1oscUJBQXFCLEVBQUU7WUFDckIsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7WUFDN0QsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7S0FDRixDQUFDO0lBRUYsOEJBQThCO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBaEJELHdHQWdCQztBQUVELE1BQWEsK0NBQWdELFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFHdEY7OztNQUdFO0lBQ0YsWUFBbUIsaUJBQTZDLEVBQUUsa0JBQTBCO1FBQzFGLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFQakQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFROUIsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLG1CQUFtQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzNDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3BFLENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBbUQ7UUFDMUUsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQztRQUN2QyxDQUFDO2FBQ0ksQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUM7UUFDdEQsQ0FBQztJQUNILENBQUM7SUFJRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCxJQUFXLGtCQUFrQixDQUFDLEtBQWE7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ00sdUJBQXVCO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDOztBQTlDSCwwR0ErQ0M7OztBQUVEOztFQUVFO0FBQ0YsTUFBYSx1QkFBd0IsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT2xFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCOzs7Ozs7TUFNRTtJQUNLLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxLQUFnQixFQUFFLFVBQWtCLEVBQUUsWUFBb0IsRUFBRSxRQUFrQztRQUM5SCxPQUFPLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSw4QkFBOEIsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdEosQ0FBQztJQUVMLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQXFDO1FBQ3BGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsOEJBQThCO1lBQ3JELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSztnQkFDbkIsZUFBZSxFQUFFLFFBQVE7Z0JBQ3pCLHlCQUF5QixFQUFFLFFBQVE7YUFDcEM7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZO1lBQ2pDLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtZQUM3QixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87U0FDeEIsQ0FBQyxDQUFDO1FBeVNMLHlFQUF5RTtRQUNqRSx3QkFBbUIsR0FBRyxJQUFJLDZDQUE2QyxDQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQWVuSCxnRUFBZ0U7UUFDeEQsZUFBVSxHQUFHLElBQUksK0NBQStDLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBelQzRixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixDQUFDO1FBQy9ELElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUMvQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUN2RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ3pELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsNEJBQTRCLEdBQUcsTUFBTSxDQUFDLDJCQUEyQixDQUFDO1FBQ3ZFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7UUFDdkQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuRCxDQUFDO0lBUUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELElBQVcsS0FBSyxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBSUQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0QsSUFBVyx1QkFBdUIsQ0FBQyxLQUFhO1FBQzlDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUNNLDRCQUE0QjtRQUNqQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDO0lBQzVDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFDdkMsQ0FBQztJQUlELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxJQUFXLGNBQWMsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDTSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ00sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFJRCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsSUFBVyxFQUFFLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBQ00sT0FBTztRQUNaLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBSUQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBVyxpQkFBaUIsQ0FBQyxLQUFhO1FBQ3hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUNNLHNCQUFzQjtRQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUVELCtGQUErRjtJQUMvRixJQUFXLHNDQUFzQztRQUMvQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFJRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCxJQUFXLGtCQUFrQixDQUFDLEtBQWE7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ00sdUJBQXVCO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDO0lBSUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNELElBQVcsZUFBZSxDQUFDLEtBQWE7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFJRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ00sbUJBQW1CO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFJRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRCxJQUFXLG1CQUFtQixDQUFDLEtBQWE7UUFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBQ00sd0JBQXdCO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDO0lBSUQsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsSUFBVyxvQkFBb0IsQ0FBQyxLQUFhO1FBQzNDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUNNLHlCQUF5QjtRQUM5QixJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDcEMsQ0FBQztJQUlELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBZ0M7UUFDM0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDO0lBSUQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0QsSUFBVyxnQkFBZ0IsQ0FBQyxLQUFnQztRQUMxRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFDTSxxQkFBcUI7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFJRCxJQUFXLDJCQUEyQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFDRCxJQUFXLDJCQUEyQixDQUFDLEtBQWE7UUFDbEQsSUFBSSxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQztJQUM1QyxDQUFDO0lBQ00sZ0NBQWdDO1FBQ3JDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxTQUFTLENBQUM7SUFDaEQsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGdDQUFnQztRQUN6QyxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztJQUMzQyxDQUFDO0lBSUQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0QsSUFBVyxtQkFBbUIsQ0FBQyxLQUFhO1FBQzFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUNNLHdCQUF3QjtRQUM3QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQztJQUlELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7SUFDTSxxQkFBcUIsQ0FBQyxLQUFzRTtRQUNqRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNqRCxDQUFDO0lBQ00sdUJBQXVCO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ3JELENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO0lBQ2hELENBQUM7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDTSxZQUFZLENBQUMsS0FBdUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUM1QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM1QyxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDMUQsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQzlELHlCQUF5QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7WUFDakYsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQzlELFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN2RCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDckMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNwRSxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3RFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDaEUsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQzlELG9CQUFvQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDeEUsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUMzRSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUN0RixpQkFBaUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNwRiw2QkFBNkIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDO1lBQ3pGLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDeEUsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxvREFBb0QsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO1lBQ3pJLFVBQVUsRUFBRSwyQ0FBMkMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztTQUN2RixDQUFDO0lBQ0osQ0FBQztJQUVTLHVCQUF1QjtRQUMvQixNQUFNLEtBQUssR0FBRztZQUNaLE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzlDLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7WUFDRCxhQUFhLEVBQUU7Z0JBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUNyRCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDdkQsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELHlCQUF5QixFQUFFO2dCQUN6QixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztnQkFDaEUsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQ3ZELE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNwRCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDM0MsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELGtCQUFrQixFQUFFO2dCQUNsQixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDMUQsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELG1CQUFtQixFQUFFO2dCQUNuQixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztnQkFDM0QsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELGdCQUFnQixFQUFFO2dCQUNoQixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDeEQsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQ3ZELE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7WUFDRCxvQkFBb0IsRUFBRTtnQkFDcEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7Z0JBQzVELE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7WUFDRCxzQkFBc0IsRUFBRTtnQkFDdEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7Z0JBQzdELE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7WUFDRCxrQkFBa0IsRUFBRTtnQkFDbEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2dCQUMvRSxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSztnQkFDWCxnQkFBZ0IsRUFBRSxXQUFXO2FBQzlCO1lBQ0QsaUJBQWlCLEVBQUU7Z0JBQ2pCLEtBQUssRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDOUUsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsZ0JBQWdCLEVBQUUsV0FBVzthQUM5QjtZQUNELDZCQUE2QixFQUFFO2dCQUM3QixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztnQkFDcEUsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELG9CQUFvQixFQUFFO2dCQUNwQixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztnQkFDNUQsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELG1CQUFtQixFQUFFO2dCQUNuQixLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyx1REFBdUQsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO2dCQUNqSSxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSztnQkFDWCxnQkFBZ0IsRUFBRSwrQ0FBK0M7YUFDbEU7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLDhDQUE4QyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO2dCQUNwRixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSxzQ0FBc0M7YUFDekQ7U0FDRixDQUFDO1FBRUYsOEJBQThCO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQTVnQkgsMERBNmdCQzs7O0FBM2dCQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHNDQUFjLEdBQUcsOEJBQThCLEFBQWpDLENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBpZ2F0ZXdheXYyX2ludGVncmF0aW9uXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBpZ2F0ZXdheXYyX2ludGVncmF0aW9uI2FwaV9pZCBBcGlnYXRld2F5djJJbnRlZ3JhdGlvbiNhcGlfaWR9XG4gICovXG4gIHJlYWRvbmx5IGFwaUlkOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwaWdhdGV3YXl2Ml9pbnRlZ3JhdGlvbiNjb25uZWN0aW9uX2lkIEFwaWdhdGV3YXl2MkludGVncmF0aW9uI2Nvbm5lY3Rpb25faWR9XG4gICovXG4gIHJlYWRvbmx5IGNvbm5lY3Rpb25JZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBpZ2F0ZXdheXYyX2ludGVncmF0aW9uI2Nvbm5lY3Rpb25fdHlwZSBBcGlnYXRld2F5djJJbnRlZ3JhdGlvbiNjb25uZWN0aW9uX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGNvbm5lY3Rpb25UeXBlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlnYXRld2F5djJfaW50ZWdyYXRpb24jY29udGVudF9oYW5kbGluZ19zdHJhdGVneSBBcGlnYXRld2F5djJJbnRlZ3JhdGlvbiNjb250ZW50X2hhbmRsaW5nX3N0cmF0ZWd5fVxuICAqL1xuICByZWFkb25seSBjb250ZW50SGFuZGxpbmdTdHJhdGVneT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBpZ2F0ZXdheXYyX2ludGVncmF0aW9uI2NyZWRlbnRpYWxzX2FybiBBcGlnYXRld2F5djJJbnRlZ3JhdGlvbiNjcmVkZW50aWFsc19hcm59XG4gICovXG4gIHJlYWRvbmx5IGNyZWRlbnRpYWxzQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlnYXRld2F5djJfaW50ZWdyYXRpb24jZGVzY3JpcHRpb24gQXBpZ2F0ZXdheXYySW50ZWdyYXRpb24jZGVzY3JpcHRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlnYXRld2F5djJfaW50ZWdyYXRpb24jaWQgQXBpZ2F0ZXdheXYySW50ZWdyYXRpb24jaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwaWdhdGV3YXl2Ml9pbnRlZ3JhdGlvbiNpbnRlZ3JhdGlvbl9tZXRob2QgQXBpZ2F0ZXdheXYySW50ZWdyYXRpb24jaW50ZWdyYXRpb25fbWV0aG9kfVxuICAqL1xuICByZWFkb25seSBpbnRlZ3JhdGlvbk1ldGhvZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBpZ2F0ZXdheXYyX2ludGVncmF0aW9uI2ludGVncmF0aW9uX3N1YnR5cGUgQXBpZ2F0ZXdheXYySW50ZWdyYXRpb24jaW50ZWdyYXRpb25fc3VidHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgaW50ZWdyYXRpb25TdWJ0eXBlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlnYXRld2F5djJfaW50ZWdyYXRpb24jaW50ZWdyYXRpb25fdHlwZSBBcGlnYXRld2F5djJJbnRlZ3JhdGlvbiNpbnRlZ3JhdGlvbl90eXBlfVxuICAqL1xuICByZWFkb25seSBpbnRlZ3JhdGlvblR5cGU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBpZ2F0ZXdheXYyX2ludGVncmF0aW9uI2ludGVncmF0aW9uX3VyaSBBcGlnYXRld2F5djJJbnRlZ3JhdGlvbiNpbnRlZ3JhdGlvbl91cml9XG4gICovXG4gIHJlYWRvbmx5IGludGVncmF0aW9uVXJpPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlnYXRld2F5djJfaW50ZWdyYXRpb24jcGFzc3Rocm91Z2hfYmVoYXZpb3IgQXBpZ2F0ZXdheXYySW50ZWdyYXRpb24jcGFzc3Rocm91Z2hfYmVoYXZpb3J9XG4gICovXG4gIHJlYWRvbmx5IHBhc3N0aHJvdWdoQmVoYXZpb3I/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwaWdhdGV3YXl2Ml9pbnRlZ3JhdGlvbiNwYXlsb2FkX2Zvcm1hdF92ZXJzaW9uIEFwaWdhdGV3YXl2MkludGVncmF0aW9uI3BheWxvYWRfZm9ybWF0X3ZlcnNpb259XG4gICovXG4gIHJlYWRvbmx5IHBheWxvYWRGb3JtYXRWZXJzaW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlnYXRld2F5djJfaW50ZWdyYXRpb24jcmVxdWVzdF9wYXJhbWV0ZXJzIEFwaWdhdGV3YXl2MkludGVncmF0aW9uI3JlcXVlc3RfcGFyYW1ldGVyc31cbiAgKi9cbiAgcmVhZG9ubHkgcmVxdWVzdFBhcmFtZXRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlnYXRld2F5djJfaW50ZWdyYXRpb24jcmVxdWVzdF90ZW1wbGF0ZXMgQXBpZ2F0ZXdheXYySW50ZWdyYXRpb24jcmVxdWVzdF90ZW1wbGF0ZXN9XG4gICovXG4gIHJlYWRvbmx5IHJlcXVlc3RUZW1wbGF0ZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlnYXRld2F5djJfaW50ZWdyYXRpb24jdGVtcGxhdGVfc2VsZWN0aW9uX2V4cHJlc3Npb24gQXBpZ2F0ZXdheXYySW50ZWdyYXRpb24jdGVtcGxhdGVfc2VsZWN0aW9uX2V4cHJlc3Npb259XG4gICovXG4gIHJlYWRvbmx5IHRlbXBsYXRlU2VsZWN0aW9uRXhwcmVzc2lvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBpZ2F0ZXdheXYyX2ludGVncmF0aW9uI3RpbWVvdXRfbWlsbGlzZWNvbmRzIEFwaWdhdGV3YXl2MkludGVncmF0aW9uI3RpbWVvdXRfbWlsbGlzZWNvbmRzfVxuICAqL1xuICByZWFkb25seSB0aW1lb3V0TWlsbGlzZWNvbmRzPzogbnVtYmVyO1xuICAvKipcbiAgKiByZXNwb25zZV9wYXJhbWV0ZXJzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlnYXRld2F5djJfaW50ZWdyYXRpb24jcmVzcG9uc2VfcGFyYW1ldGVycyBBcGlnYXRld2F5djJJbnRlZ3JhdGlvbiNyZXNwb25zZV9wYXJhbWV0ZXJzfVxuICAqL1xuICByZWFkb25seSByZXNwb25zZVBhcmFtZXRlcnM/OiBBcGlnYXRld2F5djJJbnRlZ3JhdGlvblJlc3BvbnNlUGFyYW1ldGVyc1tdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHRsc19jb25maWcgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwaWdhdGV3YXl2Ml9pbnRlZ3JhdGlvbiN0bHNfY29uZmlnIEFwaWdhdGV3YXl2MkludGVncmF0aW9uI3Rsc19jb25maWd9XG4gICovXG4gIHJlYWRvbmx5IHRsc0NvbmZpZz86IEFwaWdhdGV3YXl2MkludGVncmF0aW9uVGxzQ29uZmlnO1xufVxuZXhwb3J0IGludGVyZmFjZSBBcGlnYXRld2F5djJJbnRlZ3JhdGlvblJlc3BvbnNlUGFyYW1ldGVycyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwaWdhdGV3YXl2Ml9pbnRlZ3JhdGlvbiNtYXBwaW5ncyBBcGlnYXRld2F5djJJbnRlZ3JhdGlvbiNtYXBwaW5nc31cbiAgKi9cbiAgcmVhZG9ubHkgbWFwcGluZ3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwaWdhdGV3YXl2Ml9pbnRlZ3JhdGlvbiNzdGF0dXNfY29kZSBBcGlnYXRld2F5djJJbnRlZ3JhdGlvbiNzdGF0dXNfY29kZX1cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdHVzQ29kZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBpZ2F0ZXdheXYySW50ZWdyYXRpb25SZXNwb25zZVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcGlnYXRld2F5djJJbnRlZ3JhdGlvblJlc3BvbnNlUGFyYW1ldGVycyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1hcHBpbmdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLm1hcHBpbmdzKSxcbiAgICBzdGF0dXNfY29kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0dXNDb2RlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcGlnYXRld2F5djJJbnRlZ3JhdGlvblJlc3BvbnNlUGFyYW1ldGVyc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwaWdhdGV3YXl2MkludGVncmF0aW9uUmVzcG9uc2VQYXJhbWV0ZXJzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIG1hcHBpbmdzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkoc3RydWN0IS5tYXBwaW5ncyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgIH0sXG4gICAgc3RhdHVzX2NvZGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN0YXR1c0NvZGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25SZXNwb25zZVBhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25SZXNwb25zZVBhcmFtZXRlcnMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21hcHBpbmdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1hcHBpbmdzID0gdGhpcy5fbWFwcGluZ3M7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGF0dXNDb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXR1c0NvZGUgPSB0aGlzLl9zdGF0dXNDb2RlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25SZXNwb25zZVBhcmFtZXRlcnMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWFwcGluZ3MgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGF0dXNDb2RlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21hcHBpbmdzID0gdmFsdWUubWFwcGluZ3M7XG4gICAgICB0aGlzLl9zdGF0dXNDb2RlID0gdmFsdWUuc3RhdHVzQ29kZTtcbiAgICB9XG4gIH1cblxuICAvLyBtYXBwaW5ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tYXBwaW5ncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IG1hcHBpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgnbWFwcGluZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1hcHBpbmdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fbWFwcGluZ3MgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWFwcGluZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwcGluZ3M7XG4gIH1cblxuICAvLyBzdGF0dXNfY29kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zdGF0dXNDb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGF0dXNDb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzX2NvZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXR1c0NvZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXR1c0NvZGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdHVzQ29kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXNDb2RlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcGlnYXRld2F5djJJbnRlZ3JhdGlvblJlc3BvbnNlUGFyYW1ldGVyc0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IEFwaWdhdGV3YXl2MkludGVncmF0aW9uUmVzcG9uc2VQYXJhbWV0ZXJzW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IEFwaWdhdGV3YXl2MkludGVncmF0aW9uUmVzcG9uc2VQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IEFwaWdhdGV3YXl2MkludGVncmF0aW9uUmVzcG9uc2VQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25UbHNDb25maWcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlnYXRld2F5djJfaW50ZWdyYXRpb24jc2VydmVyX25hbWVfdG9fdmVyaWZ5IEFwaWdhdGV3YXl2MkludGVncmF0aW9uI3NlcnZlcl9uYW1lX3RvX3ZlcmlmeX1cbiAgKi9cbiAgcmVhZG9ubHkgc2VydmVyTmFtZVRvVmVyaWZ5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBpZ2F0ZXdheXYySW50ZWdyYXRpb25UbHNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcGlnYXRld2F5djJJbnRlZ3JhdGlvblRsc0NvbmZpZ091dHB1dFJlZmVyZW5jZSB8IEFwaWdhdGV3YXl2MkludGVncmF0aW9uVGxzQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNlcnZlcl9uYW1lX3RvX3ZlcmlmeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXJ2ZXJOYW1lVG9WZXJpZnkpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwaWdhdGV3YXl2MkludGVncmF0aW9uVGxzQ29uZmlnVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25UbHNDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBBcGlnYXRld2F5djJJbnRlZ3JhdGlvblRsc0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgc2VydmVyX25hbWVfdG9fdmVyaWZ5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zZXJ2ZXJOYW1lVG9WZXJpZnkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25UbHNDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwaWdhdGV3YXl2MkludGVncmF0aW9uVGxzQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zZXJ2ZXJOYW1lVG9WZXJpZnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2VydmVyTmFtZVRvVmVyaWZ5ID0gdGhpcy5fc2VydmVyTmFtZVRvVmVyaWZ5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25UbHNDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9zZXJ2ZXJOYW1lVG9WZXJpZnkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3NlcnZlck5hbWVUb1ZlcmlmeSA9IHZhbHVlLnNlcnZlck5hbWVUb1ZlcmlmeTtcbiAgICB9XG4gIH1cblxuICAvLyBzZXJ2ZXJfbmFtZV90b192ZXJpZnkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VydmVyTmFtZVRvVmVyaWZ5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZXJ2ZXJOYW1lVG9WZXJpZnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2ZXJfbmFtZV90b192ZXJpZnknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZlck5hbWVUb1ZlcmlmeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmVyTmFtZVRvVmVyaWZ5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VydmVyTmFtZVRvVmVyaWZ5KCkge1xuICAgIHRoaXMuX3NlcnZlck5hbWVUb1ZlcmlmeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmVyTmFtZVRvVmVyaWZ5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZlck5hbWVUb1ZlcmlmeTtcbiAgfVxufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBpZ2F0ZXdheXYyX2ludGVncmF0aW9uIGF3c19hcGlnYXRld2F5djJfaW50ZWdyYXRpb259XG4qL1xuZXhwb3J0IGNsYXNzIEFwaWdhdGV3YXl2MkludGVncmF0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19hcGlnYXRld2F5djJfaW50ZWdyYXRpb25cIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgQXBpZ2F0ZXdheXYySW50ZWdyYXRpb24gcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgQXBpZ2F0ZXdheXYySW50ZWdyYXRpb24gdG8gaW1wb3J0XG4gICogQHBhcmFtIGltcG9ydEZyb21JZCBUaGUgaWQgb2YgdGhlIGV4aXN0aW5nIEFwaWdhdGV3YXl2MkludGVncmF0aW9uIHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlnYXRld2F5djJfaW50ZWdyYXRpb24jaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIEFwaWdhdGV3YXl2MkludGVncmF0aW9uIHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19hcGlnYXRld2F5djJfaW50ZWdyYXRpb25cIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcGlnYXRld2F5djJfaW50ZWdyYXRpb24gYXdzX2FwaWdhdGV3YXl2Ml9pbnRlZ3JhdGlvbn0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25Db25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19hcGlnYXRld2F5djJfaW50ZWdyYXRpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9hcGlJZCA9IGNvbmZpZy5hcGlJZDtcbiAgICB0aGlzLl9jb25uZWN0aW9uSWQgPSBjb25maWcuY29ubmVjdGlvbklkO1xuICAgIHRoaXMuX2Nvbm5lY3Rpb25UeXBlID0gY29uZmlnLmNvbm5lY3Rpb25UeXBlO1xuICAgIHRoaXMuX2NvbnRlbnRIYW5kbGluZ1N0cmF0ZWd5ID0gY29uZmlnLmNvbnRlbnRIYW5kbGluZ1N0cmF0ZWd5O1xuICAgIHRoaXMuX2NyZWRlbnRpYWxzQXJuID0gY29uZmlnLmNyZWRlbnRpYWxzQXJuO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gY29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX2ludGVncmF0aW9uTWV0aG9kID0gY29uZmlnLmludGVncmF0aW9uTWV0aG9kO1xuICAgIHRoaXMuX2ludGVncmF0aW9uU3VidHlwZSA9IGNvbmZpZy5pbnRlZ3JhdGlvblN1YnR5cGU7XG4gICAgdGhpcy5faW50ZWdyYXRpb25UeXBlID0gY29uZmlnLmludGVncmF0aW9uVHlwZTtcbiAgICB0aGlzLl9pbnRlZ3JhdGlvblVyaSA9IGNvbmZpZy5pbnRlZ3JhdGlvblVyaTtcbiAgICB0aGlzLl9wYXNzdGhyb3VnaEJlaGF2aW9yID0gY29uZmlnLnBhc3N0aHJvdWdoQmVoYXZpb3I7XG4gICAgdGhpcy5fcGF5bG9hZEZvcm1hdFZlcnNpb24gPSBjb25maWcucGF5bG9hZEZvcm1hdFZlcnNpb247XG4gICAgdGhpcy5fcmVxdWVzdFBhcmFtZXRlcnMgPSBjb25maWcucmVxdWVzdFBhcmFtZXRlcnM7XG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlcyA9IGNvbmZpZy5yZXF1ZXN0VGVtcGxhdGVzO1xuICAgIHRoaXMuX3RlbXBsYXRlU2VsZWN0aW9uRXhwcmVzc2lvbiA9IGNvbmZpZy50ZW1wbGF0ZVNlbGVjdGlvbkV4cHJlc3Npb247XG4gICAgdGhpcy5fdGltZW91dE1pbGxpc2Vjb25kcyA9IGNvbmZpZy50aW1lb3V0TWlsbGlzZWNvbmRzO1xuICAgIHRoaXMuX3Jlc3BvbnNlUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnJlc3BvbnNlUGFyYW1ldGVycztcbiAgICB0aGlzLl90bHNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy50bHNDb25maWc7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFwaV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hcGlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXBpSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcGlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFwaUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcGlJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcGlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcGlJZDtcbiAgfVxuXG4gIC8vIGNvbm5lY3Rpb25faWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29ubmVjdGlvbklkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb25uZWN0aW9uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25uZWN0aW9uX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb25uZWN0aW9uSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Nvbm5lY3Rpb25JZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbm5lY3Rpb25JZCgpIHtcbiAgICB0aGlzLl9jb25uZWN0aW9uSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25JZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uSWQ7XG4gIH1cblxuICAvLyBjb25uZWN0aW9uX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29ubmVjdGlvblR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29ubmVjdGlvbl90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb25uZWN0aW9uVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvblR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb25uZWN0aW9uVHlwZSgpIHtcbiAgICB0aGlzLl9jb25uZWN0aW9uVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29ubmVjdGlvblR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvblR5cGU7XG4gIH1cblxuICAvLyBjb250ZW50X2hhbmRsaW5nX3N0cmF0ZWd5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbnRlbnRIYW5kbGluZ1N0cmF0ZWd5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb250ZW50SGFuZGxpbmdTdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRlbnRfaGFuZGxpbmdfc3RyYXRlZ3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnRlbnRIYW5kbGluZ1N0cmF0ZWd5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb250ZW50SGFuZGxpbmdTdHJhdGVneSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRlbnRIYW5kbGluZ1N0cmF0ZWd5KCkge1xuICAgIHRoaXMuX2NvbnRlbnRIYW5kbGluZ1N0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb250ZW50SGFuZGxpbmdTdHJhdGVneUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50SGFuZGxpbmdTdHJhdGVneTtcbiAgfVxuXG4gIC8vIGNyZWRlbnRpYWxzX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcmVkZW50aWFsc0Fybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3JlZGVudGlhbHNBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVkZW50aWFsc19hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWRlbnRpYWxzQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jcmVkZW50aWFsc0FybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENyZWRlbnRpYWxzQXJuKCkge1xuICAgIHRoaXMuX2NyZWRlbnRpYWxzQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcmVkZW50aWFsc0FybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcmVkZW50aWFsc0FybjtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBpbnRlZ3JhdGlvbl9tZXRob2QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW50ZWdyYXRpb25NZXRob2Q/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGludGVncmF0aW9uTWV0aG9kKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW50ZWdyYXRpb25fbWV0aG9kJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnRlZ3JhdGlvbk1ldGhvZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW50ZWdyYXRpb25NZXRob2QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnRlZ3JhdGlvbk1ldGhvZCgpIHtcbiAgICB0aGlzLl9pbnRlZ3JhdGlvbk1ldGhvZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW50ZWdyYXRpb25NZXRob2RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZWdyYXRpb25NZXRob2Q7XG4gIH1cblxuICAvLyBpbnRlZ3JhdGlvbl9yZXNwb25zZV9zZWxlY3Rpb25fZXhwcmVzc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGludGVncmF0aW9uUmVzcG9uc2VTZWxlY3Rpb25FeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW50ZWdyYXRpb25fcmVzcG9uc2Vfc2VsZWN0aW9uX2V4cHJlc3Npb24nKTtcbiAgfVxuXG4gIC8vIGludGVncmF0aW9uX3N1YnR5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW50ZWdyYXRpb25TdWJ0eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnRlZ3JhdGlvblN1YnR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnRlZ3JhdGlvbl9zdWJ0eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnRlZ3JhdGlvblN1YnR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ludGVncmF0aW9uU3VidHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEludGVncmF0aW9uU3VidHlwZSgpIHtcbiAgICB0aGlzLl9pbnRlZ3JhdGlvblN1YnR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGludGVncmF0aW9uU3VidHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlZ3JhdGlvblN1YnR5cGU7XG4gIH1cblxuICAvLyBpbnRlZ3JhdGlvbl90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ludGVncmF0aW9uVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW50ZWdyYXRpb25UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW50ZWdyYXRpb25fdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW50ZWdyYXRpb25UeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnRlZ3JhdGlvblR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW50ZWdyYXRpb25UeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVncmF0aW9uVHlwZTtcbiAgfVxuXG4gIC8vIGludGVncmF0aW9uX3VyaSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnRlZ3JhdGlvblVyaT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW50ZWdyYXRpb25VcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnRlZ3JhdGlvbl91cmknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGludGVncmF0aW9uVXJpKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnRlZ3JhdGlvblVyaSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEludGVncmF0aW9uVXJpKCkge1xuICAgIHRoaXMuX2ludGVncmF0aW9uVXJpID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnRlZ3JhdGlvblVyaUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlZ3JhdGlvblVyaTtcbiAgfVxuXG4gIC8vIHBhc3N0aHJvdWdoX2JlaGF2aW9yIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Bhc3N0aHJvdWdoQmVoYXZpb3I/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBhc3N0aHJvdWdoQmVoYXZpb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXNzdGhyb3VnaF9iZWhhdmlvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFzc3Rocm91Z2hCZWhhdmlvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFzc3Rocm91Z2hCZWhhdmlvciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhc3N0aHJvdWdoQmVoYXZpb3IoKSB7XG4gICAgdGhpcy5fcGFzc3Rocm91Z2hCZWhhdmlvciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFzc3Rocm91Z2hCZWhhdmlvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXNzdGhyb3VnaEJlaGF2aW9yO1xuICB9XG5cbiAgLy8gcGF5bG9hZF9mb3JtYXRfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXlsb2FkRm9ybWF0VmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGF5bG9hZEZvcm1hdFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXlsb2FkX2Zvcm1hdF92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXlsb2FkRm9ybWF0VmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGF5bG9hZEZvcm1hdFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXlsb2FkRm9ybWF0VmVyc2lvbigpIHtcbiAgICB0aGlzLl9wYXlsb2FkRm9ybWF0VmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGF5bG9hZEZvcm1hdFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGF5bG9hZEZvcm1hdFZlcnNpb247XG4gIH1cblxuICAvLyByZXF1ZXN0X3BhcmFtZXRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVxdWVzdFBhcmFtZXRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCByZXF1ZXN0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3JlcXVlc3RfcGFyYW1ldGVycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWVzdFBhcmFtZXRlcnModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl9yZXF1ZXN0UGFyYW1ldGVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcXVlc3RQYXJhbWV0ZXJzKCkge1xuICAgIHRoaXMuX3JlcXVlc3RQYXJhbWV0ZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1ZXN0UGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0UGFyYW1ldGVycztcbiAgfVxuXG4gIC8vIHJlcXVlc3RfdGVtcGxhdGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcXVlc3RUZW1wbGF0ZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCByZXF1ZXN0VGVtcGxhdGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgncmVxdWVzdF90ZW1wbGF0ZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcXVlc3RUZW1wbGF0ZXModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVxdWVzdFRlbXBsYXRlcygpIHtcbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1ZXN0VGVtcGxhdGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZXM7XG4gIH1cblxuICAvLyB0ZW1wbGF0ZV9zZWxlY3Rpb25fZXhwcmVzc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90ZW1wbGF0ZVNlbGVjdGlvbkV4cHJlc3Npb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRlbXBsYXRlU2VsZWN0aW9uRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RlbXBsYXRlX3NlbGVjdGlvbl9leHByZXNzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCB0ZW1wbGF0ZVNlbGVjdGlvbkV4cHJlc3Npb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RlbXBsYXRlU2VsZWN0aW9uRXhwcmVzc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRlbXBsYXRlU2VsZWN0aW9uRXhwcmVzc2lvbigpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZVNlbGVjdGlvbkV4cHJlc3Npb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRlbXBsYXRlU2VsZWN0aW9uRXhwcmVzc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZVNlbGVjdGlvbkV4cHJlc3Npb247XG4gIH1cblxuICAvLyB0aW1lb3V0X21pbGxpc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXRNaWxsaXNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRpbWVvdXRNaWxsaXNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0aW1lb3V0X21pbGxpc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGltZW91dE1pbGxpc2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGltZW91dE1pbGxpc2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRNaWxsaXNlY29uZHMoKSB7XG4gICAgdGhpcy5fdGltZW91dE1pbGxpc2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dE1pbGxpc2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0TWlsbGlzZWNvbmRzO1xuICB9XG5cbiAgLy8gcmVzcG9uc2VfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXNwb25zZVBhcmFtZXRlcnMgPSBuZXcgQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25SZXNwb25zZVBhcmFtZXRlcnNMaXN0KHRoaXMsIFwicmVzcG9uc2VfcGFyYW1ldGVyc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCByZXNwb25zZVBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlUGFyYW1ldGVycztcbiAgfVxuICBwdWJsaWMgcHV0UmVzcG9uc2VQYXJhbWV0ZXJzKHZhbHVlOiBBcGlnYXRld2F5djJJbnRlZ3JhdGlvblJlc3BvbnNlUGFyYW1ldGVyc1tdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9yZXNwb25zZVBhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc3BvbnNlUGFyYW1ldGVycygpIHtcbiAgICB0aGlzLl9yZXNwb25zZVBhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzcG9uc2VQYXJhbWV0ZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGxzX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90bHNDb25maWcgPSBuZXcgQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25UbHNDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJ0bHNfY29uZmlnXCIpO1xuICBwdWJsaWMgZ2V0IHRsc0NvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGxzQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRUbHNDb25maWcodmFsdWU6IEFwaWdhdGV3YXl2MkludGVncmF0aW9uVGxzQ29uZmlnKSB7XG4gICAgdGhpcy5fdGxzQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUbHNDb25maWcoKSB7XG4gICAgdGhpcy5fdGxzQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRsc0NvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90bHNDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBpX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hcGlJZCksXG4gICAgICBjb25uZWN0aW9uX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jb25uZWN0aW9uSWQpLFxuICAgICAgY29ubmVjdGlvbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jb25uZWN0aW9uVHlwZSksXG4gICAgICBjb250ZW50X2hhbmRsaW5nX3N0cmF0ZWd5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jb250ZW50SGFuZGxpbmdTdHJhdGVneSksXG4gICAgICBjcmVkZW50aWFsc19hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NyZWRlbnRpYWxzQXJuKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgaW50ZWdyYXRpb25fbWV0aG9kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pbnRlZ3JhdGlvbk1ldGhvZCksXG4gICAgICBpbnRlZ3JhdGlvbl9zdWJ0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pbnRlZ3JhdGlvblN1YnR5cGUpLFxuICAgICAgaW50ZWdyYXRpb25fdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW50ZWdyYXRpb25UeXBlKSxcbiAgICAgIGludGVncmF0aW9uX3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW50ZWdyYXRpb25VcmkpLFxuICAgICAgcGFzc3Rocm91Z2hfYmVoYXZpb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Bhc3N0aHJvdWdoQmVoYXZpb3IpLFxuICAgICAgcGF5bG9hZF9mb3JtYXRfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGF5bG9hZEZvcm1hdFZlcnNpb24pLFxuICAgICAgcmVxdWVzdF9wYXJhbWV0ZXJzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9yZXF1ZXN0UGFyYW1ldGVycyksXG4gICAgICByZXF1ZXN0X3RlbXBsYXRlczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fcmVxdWVzdFRlbXBsYXRlcyksXG4gICAgICB0ZW1wbGF0ZV9zZWxlY3Rpb25fZXhwcmVzc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdGVtcGxhdGVTZWxlY3Rpb25FeHByZXNzaW9uKSxcbiAgICAgIHRpbWVvdXRfbWlsbGlzZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90aW1lb3V0TWlsbGlzZWNvbmRzKSxcbiAgICAgIHJlc3BvbnNlX3BhcmFtZXRlcnM6IGNka3RmLmxpc3RNYXBwZXIoYXBpZ2F0ZXdheXYySW50ZWdyYXRpb25SZXNwb25zZVBhcmFtZXRlcnNUb1RlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fcmVzcG9uc2VQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUpLFxuICAgICAgdGxzX2NvbmZpZzogYXBpZ2F0ZXdheXYySW50ZWdyYXRpb25UbHNDb25maWdUb1RlcnJhZm9ybSh0aGlzLl90bHNDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBhcGlfaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2FwaUlkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgY29ubmVjdGlvbl9pZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fY29ubmVjdGlvbklkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgY29ubmVjdGlvbl90eXBlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jb25uZWN0aW9uVHlwZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGNvbnRlbnRfaGFuZGxpbmdfc3RyYXRlZ3k6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2NvbnRlbnRIYW5kbGluZ1N0cmF0ZWd5KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgY3JlZGVudGlhbHNfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jcmVkZW50aWFsc0FybiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGludGVncmF0aW9uX21ldGhvZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faW50ZWdyYXRpb25NZXRob2QpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpbnRlZ3JhdGlvbl9zdWJ0eXBlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pbnRlZ3JhdGlvblN1YnR5cGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpbnRlZ3JhdGlvbl90eXBlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pbnRlZ3JhdGlvblR5cGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpbnRlZ3JhdGlvbl91cmk6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2ludGVncmF0aW9uVXJpKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgcGFzc3Rocm91Z2hfYmVoYXZpb3I6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3Bhc3N0aHJvdWdoQmVoYXZpb3IpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBwYXlsb2FkX2Zvcm1hdF92ZXJzaW9uOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9wYXlsb2FkRm9ybWF0VmVyc2lvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHJlcXVlc3RfcGFyYW1ldGVyczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fcmVxdWVzdFBhcmFtZXRlcnMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICByZXF1ZXN0X3RlbXBsYXRlczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fcmVxdWVzdFRlbXBsYXRlcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlX3NlbGVjdGlvbl9leHByZXNzaW9uOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl90ZW1wbGF0ZVNlbGVjdGlvbkV4cHJlc3Npb24pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0aW1lb3V0X21pbGxpc2Vjb25kczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fdGltZW91dE1pbGxpc2Vjb25kcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHJlc3BvbnNlX3BhcmFtZXRlcnM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woYXBpZ2F0ZXdheXYySW50ZWdyYXRpb25SZXNwb25zZVBhcmFtZXRlcnNUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fcmVzcG9uc2VQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwaWdhdGV3YXl2MkludGVncmF0aW9uUmVzcG9uc2VQYXJhbWV0ZXJzTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHRsc19jb25maWc6IHtcbiAgICAgICAgdmFsdWU6IGFwaWdhdGV3YXl2MkludGVncmF0aW9uVGxzQ29uZmlnVG9IY2xUZXJyYWZvcm0odGhpcy5fdGxzQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcGlnYXRld2F5djJJbnRlZ3JhdGlvblRsc0NvbmZpZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==