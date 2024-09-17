"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsyncGraphqlApi = exports.AppsyncGraphqlApiUserPoolConfigOutputReference = exports.appsyncGraphqlApiUserPoolConfigToHclTerraform = exports.appsyncGraphqlApiUserPoolConfigToTerraform = exports.AppsyncGraphqlApiOpenidConnectConfigOutputReference = exports.appsyncGraphqlApiOpenidConnectConfigToHclTerraform = exports.appsyncGraphqlApiOpenidConnectConfigToTerraform = exports.AppsyncGraphqlApiLogConfigOutputReference = exports.appsyncGraphqlApiLogConfigToHclTerraform = exports.appsyncGraphqlApiLogConfigToTerraform = exports.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference = exports.appsyncGraphqlApiLambdaAuthorizerConfigToHclTerraform = exports.appsyncGraphqlApiLambdaAuthorizerConfigToTerraform = exports.AppsyncGraphqlApiAdditionalAuthenticationProviderList = exports.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference = exports.appsyncGraphqlApiAdditionalAuthenticationProviderToHclTerraform = exports.appsyncGraphqlApiAdditionalAuthenticationProviderToTerraform = exports.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference = exports.appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToHclTerraform = exports.appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToTerraform = exports.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference = exports.appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToHclTerraform = exports.appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToTerraform = exports.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference = exports.appsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigToHclTerraform = exports.appsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function appsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authorizer_result_ttl_in_seconds: cdktf.numberToTerraform(struct.authorizerResultTtlInSeconds),
        authorizer_uri: cdktf.stringToTerraform(struct.authorizerUri),
        identity_validation_expression: cdktf.stringToTerraform(struct.identityValidationExpression),
    };
}
exports.appsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigToTerraform = appsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigToTerraform;
function appsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        authorizer_result_ttl_in_seconds: {
            value: cdktf.numberToHclTerraform(struct.authorizerResultTtlInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        authorizer_uri: {
            value: cdktf.stringToHclTerraform(struct.authorizerUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_validation_expression: {
            value: cdktf.stringToHclTerraform(struct.identityValidationExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigToHclTerraform = appsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigToHclTerraform;
class AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._authorizerResultTtlInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizerResultTtlInSeconds = this._authorizerResultTtlInSeconds;
        }
        if (this._authorizerUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizerUri = this._authorizerUri;
        }
        if (this._identityValidationExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityValidationExpression = this._identityValidationExpression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._authorizerResultTtlInSeconds = undefined;
            this._authorizerUri = undefined;
            this._identityValidationExpression = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._authorizerResultTtlInSeconds = value.authorizerResultTtlInSeconds;
            this._authorizerUri = value.authorizerUri;
            this._identityValidationExpression = value.identityValidationExpression;
        }
    }
    get authorizerResultTtlInSeconds() {
        return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
    }
    set authorizerResultTtlInSeconds(value) {
        this._authorizerResultTtlInSeconds = value;
    }
    resetAuthorizerResultTtlInSeconds() {
        this._authorizerResultTtlInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authorizerResultTtlInSecondsInput() {
        return this._authorizerResultTtlInSeconds;
    }
    get authorizerUri() {
        return this.getStringAttribute('authorizer_uri');
    }
    set authorizerUri(value) {
        this._authorizerUri = value;
    }
    // Temporarily expose input value. Use with caution.
    get authorizerUriInput() {
        return this._authorizerUri;
    }
    get identityValidationExpression() {
        return this.getStringAttribute('identity_validation_expression');
    }
    set identityValidationExpression(value) {
        this._identityValidationExpression = value;
    }
    resetIdentityValidationExpression() {
        this._identityValidationExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get identityValidationExpressionInput() {
        return this._identityValidationExpression;
    }
}
exports.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference = AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference[_a] = { fqn: "@cdktf/aws-cdk.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference", version: "0.0.0" };
function appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auth_ttl: cdktf.numberToTerraform(struct.authTtl),
        client_id: cdktf.stringToTerraform(struct.clientId),
        iat_ttl: cdktf.numberToTerraform(struct.iatTtl),
        issuer: cdktf.stringToTerraform(struct.issuer),
    };
}
exports.appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToTerraform = appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToTerraform;
function appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        auth_ttl: {
            value: cdktf.numberToHclTerraform(struct.authTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        client_id: {
            value: cdktf.stringToHclTerraform(struct.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iat_ttl: {
            value: cdktf.numberToHclTerraform(struct.iatTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        issuer: {
            value: cdktf.stringToHclTerraform(struct.issuer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToHclTerraform = appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToHclTerraform;
class AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._authTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.authTtl = this._authTtl;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._iatTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.iatTtl = this._iatTtl;
        }
        if (this._issuer !== undefined) {
            hasAnyValues = true;
            internalValueResult.issuer = this._issuer;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._authTtl = undefined;
            this._clientId = undefined;
            this._iatTtl = undefined;
            this._issuer = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._authTtl = value.authTtl;
            this._clientId = value.clientId;
            this._iatTtl = value.iatTtl;
            this._issuer = value.issuer;
        }
    }
    get authTtl() {
        return this.getNumberAttribute('auth_ttl');
    }
    set authTtl(value) {
        this._authTtl = value;
    }
    resetAuthTtl() {
        this._authTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authTtlInput() {
        return this._authTtl;
    }
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    set clientId(value) {
        this._clientId = value;
    }
    resetClientId() {
        this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientIdInput() {
        return this._clientId;
    }
    get iatTtl() {
        return this.getNumberAttribute('iat_ttl');
    }
    set iatTtl(value) {
        this._iatTtl = value;
    }
    resetIatTtl() {
        this._iatTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iatTtlInput() {
        return this._iatTtl;
    }
    get issuer() {
        return this.getStringAttribute('issuer');
    }
    set issuer(value) {
        this._issuer = value;
    }
    // Temporarily expose input value. Use with caution.
    get issuerInput() {
        return this._issuer;
    }
}
exports.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference = AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference[_b] = { fqn: "@cdktf/aws-cdk.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference", version: "0.0.0" };
function appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        app_id_client_regex: cdktf.stringToTerraform(struct.appIdClientRegex),
        aws_region: cdktf.stringToTerraform(struct.awsRegion),
        user_pool_id: cdktf.stringToTerraform(struct.userPoolId),
    };
}
exports.appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToTerraform = appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToTerraform;
function appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        app_id_client_regex: {
            value: cdktf.stringToHclTerraform(struct.appIdClientRegex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        aws_region: {
            value: cdktf.stringToHclTerraform(struct.awsRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_pool_id: {
            value: cdktf.stringToHclTerraform(struct.userPoolId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToHclTerraform = appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToHclTerraform;
class AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._appIdClientRegex !== undefined) {
            hasAnyValues = true;
            internalValueResult.appIdClientRegex = this._appIdClientRegex;
        }
        if (this._awsRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsRegion = this._awsRegion;
        }
        if (this._userPoolId !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPoolId = this._userPoolId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._appIdClientRegex = undefined;
            this._awsRegion = undefined;
            this._userPoolId = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._appIdClientRegex = value.appIdClientRegex;
            this._awsRegion = value.awsRegion;
            this._userPoolId = value.userPoolId;
        }
    }
    get appIdClientRegex() {
        return this.getStringAttribute('app_id_client_regex');
    }
    set appIdClientRegex(value) {
        this._appIdClientRegex = value;
    }
    resetAppIdClientRegex() {
        this._appIdClientRegex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get appIdClientRegexInput() {
        return this._appIdClientRegex;
    }
    get awsRegion() {
        return this.getStringAttribute('aws_region');
    }
    set awsRegion(value) {
        this._awsRegion = value;
    }
    resetAwsRegion() {
        this._awsRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get awsRegionInput() {
        return this._awsRegion;
    }
    get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    set userPoolId(value) {
        this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    get userPoolIdInput() {
        return this._userPoolId;
    }
}
exports.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference = AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference;
_c = JSII_RTTI_SYMBOL_1;
AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference[_c] = { fqn: "@cdktf/aws-cdk.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference", version: "0.0.0" };
function appsyncGraphqlApiAdditionalAuthenticationProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authentication_type: cdktf.stringToTerraform(struct.authenticationType),
        lambda_authorizer_config: appsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigToTerraform(struct.lambdaAuthorizerConfig),
        openid_connect_config: appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToTerraform(struct.openidConnectConfig),
        user_pool_config: appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToTerraform(struct.userPoolConfig),
    };
}
exports.appsyncGraphqlApiAdditionalAuthenticationProviderToTerraform = appsyncGraphqlApiAdditionalAuthenticationProviderToTerraform;
function appsyncGraphqlApiAdditionalAuthenticationProviderToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        authentication_type: {
            value: cdktf.stringToHclTerraform(struct.authenticationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lambda_authorizer_config: {
            value: appsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigToHclTerraform(struct.lambdaAuthorizerConfig),
            isBlock: true,
            type: "list",
            storageClassType: "AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigList",
        },
        openid_connect_config: {
            value: appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToHclTerraform(struct.openidConnectConfig),
            isBlock: true,
            type: "list",
            storageClassType: "AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigList",
        },
        user_pool_config: {
            value: appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToHclTerraform(struct.userPoolConfig),
            isBlock: true,
            type: "list",
            storageClassType: "AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appsyncGraphqlApiAdditionalAuthenticationProviderToHclTerraform = appsyncGraphqlApiAdditionalAuthenticationProviderToHclTerraform;
class AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // lambda_authorizer_config - computed: false, optional: true, required: false
        this._lambdaAuthorizerConfig = new AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference(this, "lambda_authorizer_config");
        // openid_connect_config - computed: false, optional: true, required: false
        this._openidConnectConfig = new AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference(this, "openid_connect_config");
        // user_pool_config - computed: false, optional: true, required: false
        this._userPoolConfig = new AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference(this, "user_pool_config");
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._authenticationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationType = this._authenticationType;
        }
        if (this._lambdaAuthorizerConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaAuthorizerConfig = this._lambdaAuthorizerConfig?.internalValue;
        }
        if (this._openidConnectConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.openidConnectConfig = this._openidConnectConfig?.internalValue;
        }
        if (this._userPoolConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPoolConfig = this._userPoolConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationType = undefined;
            this._lambdaAuthorizerConfig.internalValue = undefined;
            this._openidConnectConfig.internalValue = undefined;
            this._userPoolConfig.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationType = value.authenticationType;
            this._lambdaAuthorizerConfig.internalValue = value.lambdaAuthorizerConfig;
            this._openidConnectConfig.internalValue = value.openidConnectConfig;
            this._userPoolConfig.internalValue = value.userPoolConfig;
        }
    }
    get authenticationType() {
        return this.getStringAttribute('authentication_type');
    }
    set authenticationType(value) {
        this._authenticationType = value;
    }
    // Temporarily expose input value. Use with caution.
    get authenticationTypeInput() {
        return this._authenticationType;
    }
    get lambdaAuthorizerConfig() {
        return this._lambdaAuthorizerConfig;
    }
    putLambdaAuthorizerConfig(value) {
        this._lambdaAuthorizerConfig.internalValue = value;
    }
    resetLambdaAuthorizerConfig() {
        this._lambdaAuthorizerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaAuthorizerConfigInput() {
        return this._lambdaAuthorizerConfig.internalValue;
    }
    get openidConnectConfig() {
        return this._openidConnectConfig;
    }
    putOpenidConnectConfig(value) {
        this._openidConnectConfig.internalValue = value;
    }
    resetOpenidConnectConfig() {
        this._openidConnectConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get openidConnectConfigInput() {
        return this._openidConnectConfig.internalValue;
    }
    get userPoolConfig() {
        return this._userPoolConfig;
    }
    putUserPoolConfig(value) {
        this._userPoolConfig.internalValue = value;
    }
    resetUserPoolConfig() {
        this._userPoolConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userPoolConfigInput() {
        return this._userPoolConfig.internalValue;
    }
}
exports.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference = AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference;
_d = JSII_RTTI_SYMBOL_1;
AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference[_d] = { fqn: "@cdktf/aws-cdk.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference", version: "0.0.0" };
class AppsyncGraphqlApiAdditionalAuthenticationProviderList extends cdktf.ComplexList {
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
        return new AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.AppsyncGraphqlApiAdditionalAuthenticationProviderList = AppsyncGraphqlApiAdditionalAuthenticationProviderList;
_e = JSII_RTTI_SYMBOL_1;
AppsyncGraphqlApiAdditionalAuthenticationProviderList[_e] = { fqn: "@cdktf/aws-cdk.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList", version: "0.0.0" };
function appsyncGraphqlApiLambdaAuthorizerConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authorizer_result_ttl_in_seconds: cdktf.numberToTerraform(struct.authorizerResultTtlInSeconds),
        authorizer_uri: cdktf.stringToTerraform(struct.authorizerUri),
        identity_validation_expression: cdktf.stringToTerraform(struct.identityValidationExpression),
    };
}
exports.appsyncGraphqlApiLambdaAuthorizerConfigToTerraform = appsyncGraphqlApiLambdaAuthorizerConfigToTerraform;
function appsyncGraphqlApiLambdaAuthorizerConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        authorizer_result_ttl_in_seconds: {
            value: cdktf.numberToHclTerraform(struct.authorizerResultTtlInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        authorizer_uri: {
            value: cdktf.stringToHclTerraform(struct.authorizerUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_validation_expression: {
            value: cdktf.stringToHclTerraform(struct.identityValidationExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appsyncGraphqlApiLambdaAuthorizerConfigToHclTerraform = appsyncGraphqlApiLambdaAuthorizerConfigToHclTerraform;
class AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._authorizerResultTtlInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizerResultTtlInSeconds = this._authorizerResultTtlInSeconds;
        }
        if (this._authorizerUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizerUri = this._authorizerUri;
        }
        if (this._identityValidationExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityValidationExpression = this._identityValidationExpression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._authorizerResultTtlInSeconds = undefined;
            this._authorizerUri = undefined;
            this._identityValidationExpression = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._authorizerResultTtlInSeconds = value.authorizerResultTtlInSeconds;
            this._authorizerUri = value.authorizerUri;
            this._identityValidationExpression = value.identityValidationExpression;
        }
    }
    get authorizerResultTtlInSeconds() {
        return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
    }
    set authorizerResultTtlInSeconds(value) {
        this._authorizerResultTtlInSeconds = value;
    }
    resetAuthorizerResultTtlInSeconds() {
        this._authorizerResultTtlInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authorizerResultTtlInSecondsInput() {
        return this._authorizerResultTtlInSeconds;
    }
    get authorizerUri() {
        return this.getStringAttribute('authorizer_uri');
    }
    set authorizerUri(value) {
        this._authorizerUri = value;
    }
    // Temporarily expose input value. Use with caution.
    get authorizerUriInput() {
        return this._authorizerUri;
    }
    get identityValidationExpression() {
        return this.getStringAttribute('identity_validation_expression');
    }
    set identityValidationExpression(value) {
        this._identityValidationExpression = value;
    }
    resetIdentityValidationExpression() {
        this._identityValidationExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get identityValidationExpressionInput() {
        return this._identityValidationExpression;
    }
}
exports.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference = AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference;
_f = JSII_RTTI_SYMBOL_1;
AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference[_f] = { fqn: "@cdktf/aws-cdk.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference", version: "0.0.0" };
function appsyncGraphqlApiLogConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudwatch_logs_role_arn: cdktf.stringToTerraform(struct.cloudwatchLogsRoleArn),
        exclude_verbose_content: cdktf.booleanToTerraform(struct.excludeVerboseContent),
        field_log_level: cdktf.stringToTerraform(struct.fieldLogLevel),
    };
}
exports.appsyncGraphqlApiLogConfigToTerraform = appsyncGraphqlApiLogConfigToTerraform;
function appsyncGraphqlApiLogConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudwatch_logs_role_arn: {
            value: cdktf.stringToHclTerraform(struct.cloudwatchLogsRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exclude_verbose_content: {
            value: cdktf.booleanToHclTerraform(struct.excludeVerboseContent),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        field_log_level: {
            value: cdktf.stringToHclTerraform(struct.fieldLogLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appsyncGraphqlApiLogConfigToHclTerraform = appsyncGraphqlApiLogConfigToHclTerraform;
class AppsyncGraphqlApiLogConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudwatchLogsRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogsRoleArn = this._cloudwatchLogsRoleArn;
        }
        if (this._excludeVerboseContent !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeVerboseContent = this._excludeVerboseContent;
        }
        if (this._fieldLogLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldLogLevel = this._fieldLogLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cloudwatchLogsRoleArn = undefined;
            this._excludeVerboseContent = undefined;
            this._fieldLogLevel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cloudwatchLogsRoleArn = value.cloudwatchLogsRoleArn;
            this._excludeVerboseContent = value.excludeVerboseContent;
            this._fieldLogLevel = value.fieldLogLevel;
        }
    }
    get cloudwatchLogsRoleArn() {
        return this.getStringAttribute('cloudwatch_logs_role_arn');
    }
    set cloudwatchLogsRoleArn(value) {
        this._cloudwatchLogsRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchLogsRoleArnInput() {
        return this._cloudwatchLogsRoleArn;
    }
    get excludeVerboseContent() {
        return this.getBooleanAttribute('exclude_verbose_content');
    }
    set excludeVerboseContent(value) {
        this._excludeVerboseContent = value;
    }
    resetExcludeVerboseContent() {
        this._excludeVerboseContent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeVerboseContentInput() {
        return this._excludeVerboseContent;
    }
    get fieldLogLevel() {
        return this.getStringAttribute('field_log_level');
    }
    set fieldLogLevel(value) {
        this._fieldLogLevel = value;
    }
    // Temporarily expose input value. Use with caution.
    get fieldLogLevelInput() {
        return this._fieldLogLevel;
    }
}
exports.AppsyncGraphqlApiLogConfigOutputReference = AppsyncGraphqlApiLogConfigOutputReference;
_g = JSII_RTTI_SYMBOL_1;
AppsyncGraphqlApiLogConfigOutputReference[_g] = { fqn: "@cdktf/aws-cdk.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference", version: "0.0.0" };
function appsyncGraphqlApiOpenidConnectConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auth_ttl: cdktf.numberToTerraform(struct.authTtl),
        client_id: cdktf.stringToTerraform(struct.clientId),
        iat_ttl: cdktf.numberToTerraform(struct.iatTtl),
        issuer: cdktf.stringToTerraform(struct.issuer),
    };
}
exports.appsyncGraphqlApiOpenidConnectConfigToTerraform = appsyncGraphqlApiOpenidConnectConfigToTerraform;
function appsyncGraphqlApiOpenidConnectConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        auth_ttl: {
            value: cdktf.numberToHclTerraform(struct.authTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        client_id: {
            value: cdktf.stringToHclTerraform(struct.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iat_ttl: {
            value: cdktf.numberToHclTerraform(struct.iatTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        issuer: {
            value: cdktf.stringToHclTerraform(struct.issuer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appsyncGraphqlApiOpenidConnectConfigToHclTerraform = appsyncGraphqlApiOpenidConnectConfigToHclTerraform;
class AppsyncGraphqlApiOpenidConnectConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._authTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.authTtl = this._authTtl;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._iatTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.iatTtl = this._iatTtl;
        }
        if (this._issuer !== undefined) {
            hasAnyValues = true;
            internalValueResult.issuer = this._issuer;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._authTtl = undefined;
            this._clientId = undefined;
            this._iatTtl = undefined;
            this._issuer = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._authTtl = value.authTtl;
            this._clientId = value.clientId;
            this._iatTtl = value.iatTtl;
            this._issuer = value.issuer;
        }
    }
    get authTtl() {
        return this.getNumberAttribute('auth_ttl');
    }
    set authTtl(value) {
        this._authTtl = value;
    }
    resetAuthTtl() {
        this._authTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authTtlInput() {
        return this._authTtl;
    }
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    set clientId(value) {
        this._clientId = value;
    }
    resetClientId() {
        this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientIdInput() {
        return this._clientId;
    }
    get iatTtl() {
        return this.getNumberAttribute('iat_ttl');
    }
    set iatTtl(value) {
        this._iatTtl = value;
    }
    resetIatTtl() {
        this._iatTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iatTtlInput() {
        return this._iatTtl;
    }
    get issuer() {
        return this.getStringAttribute('issuer');
    }
    set issuer(value) {
        this._issuer = value;
    }
    // Temporarily expose input value. Use with caution.
    get issuerInput() {
        return this._issuer;
    }
}
exports.AppsyncGraphqlApiOpenidConnectConfigOutputReference = AppsyncGraphqlApiOpenidConnectConfigOutputReference;
_h = JSII_RTTI_SYMBOL_1;
AppsyncGraphqlApiOpenidConnectConfigOutputReference[_h] = { fqn: "@cdktf/aws-cdk.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference", version: "0.0.0" };
function appsyncGraphqlApiUserPoolConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        app_id_client_regex: cdktf.stringToTerraform(struct.appIdClientRegex),
        aws_region: cdktf.stringToTerraform(struct.awsRegion),
        default_action: cdktf.stringToTerraform(struct.defaultAction),
        user_pool_id: cdktf.stringToTerraform(struct.userPoolId),
    };
}
exports.appsyncGraphqlApiUserPoolConfigToTerraform = appsyncGraphqlApiUserPoolConfigToTerraform;
function appsyncGraphqlApiUserPoolConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        app_id_client_regex: {
            value: cdktf.stringToHclTerraform(struct.appIdClientRegex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        aws_region: {
            value: cdktf.stringToHclTerraform(struct.awsRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        default_action: {
            value: cdktf.stringToHclTerraform(struct.defaultAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_pool_id: {
            value: cdktf.stringToHclTerraform(struct.userPoolId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.appsyncGraphqlApiUserPoolConfigToHclTerraform = appsyncGraphqlApiUserPoolConfigToHclTerraform;
class AppsyncGraphqlApiUserPoolConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._appIdClientRegex !== undefined) {
            hasAnyValues = true;
            internalValueResult.appIdClientRegex = this._appIdClientRegex;
        }
        if (this._awsRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsRegion = this._awsRegion;
        }
        if (this._defaultAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultAction = this._defaultAction;
        }
        if (this._userPoolId !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPoolId = this._userPoolId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._appIdClientRegex = undefined;
            this._awsRegion = undefined;
            this._defaultAction = undefined;
            this._userPoolId = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._appIdClientRegex = value.appIdClientRegex;
            this._awsRegion = value.awsRegion;
            this._defaultAction = value.defaultAction;
            this._userPoolId = value.userPoolId;
        }
    }
    get appIdClientRegex() {
        return this.getStringAttribute('app_id_client_regex');
    }
    set appIdClientRegex(value) {
        this._appIdClientRegex = value;
    }
    resetAppIdClientRegex() {
        this._appIdClientRegex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get appIdClientRegexInput() {
        return this._appIdClientRegex;
    }
    get awsRegion() {
        return this.getStringAttribute('aws_region');
    }
    set awsRegion(value) {
        this._awsRegion = value;
    }
    resetAwsRegion() {
        this._awsRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get awsRegionInput() {
        return this._awsRegion;
    }
    get defaultAction() {
        return this.getStringAttribute('default_action');
    }
    set defaultAction(value) {
        this._defaultAction = value;
    }
    // Temporarily expose input value. Use with caution.
    get defaultActionInput() {
        return this._defaultAction;
    }
    get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    set userPoolId(value) {
        this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    get userPoolIdInput() {
        return this._userPoolId;
    }
}
exports.AppsyncGraphqlApiUserPoolConfigOutputReference = AppsyncGraphqlApiUserPoolConfigOutputReference;
_j = JSII_RTTI_SYMBOL_1;
AppsyncGraphqlApiUserPoolConfigOutputReference[_j] = { fqn: "@cdktf/aws-cdk.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_graphql_api aws_appsync_graphql_api}
*/
class AppsyncGraphqlApi extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AppsyncGraphqlApi resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppsyncGraphqlApi to import
    * @param importFromId The id of the existing AppsyncGraphqlApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_graphql_api#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppsyncGraphqlApi to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appsync_graphql_api", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_graphql_api aws_appsync_graphql_api} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncGraphqlApiConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_appsync_graphql_api',
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
        // uris - computed: true, optional: false, required: false
        this._uris = new cdktf.StringMap(this, "uris");
        // additional_authentication_provider - computed: false, optional: true, required: false
        this._additionalAuthenticationProvider = new AppsyncGraphqlApiAdditionalAuthenticationProviderList(this, "additional_authentication_provider", false);
        // lambda_authorizer_config - computed: false, optional: true, required: false
        this._lambdaAuthorizerConfig = new AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference(this, "lambda_authorizer_config");
        // log_config - computed: false, optional: true, required: false
        this._logConfig = new AppsyncGraphqlApiLogConfigOutputReference(this, "log_config");
        // openid_connect_config - computed: false, optional: true, required: false
        this._openidConnectConfig = new AppsyncGraphqlApiOpenidConnectConfigOutputReference(this, "openid_connect_config");
        // user_pool_config - computed: false, optional: true, required: false
        this._userPoolConfig = new AppsyncGraphqlApiUserPoolConfigOutputReference(this, "user_pool_config");
        this._authenticationType = config.authenticationType;
        this._id = config.id;
        this._name = config.name;
        this._schema = config.schema;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._xrayEnabled = config.xrayEnabled;
        this._additionalAuthenticationProvider.internalValue = config.additionalAuthenticationProvider;
        this._lambdaAuthorizerConfig.internalValue = config.lambdaAuthorizerConfig;
        this._logConfig.internalValue = config.logConfig;
        this._openidConnectConfig.internalValue = config.openidConnectConfig;
        this._userPoolConfig.internalValue = config.userPoolConfig;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get authenticationType() {
        return this.getStringAttribute('authentication_type');
    }
    set authenticationType(value) {
        this._authenticationType = value;
    }
    // Temporarily expose input value. Use with caution.
    get authenticationTypeInput() {
        return this._authenticationType;
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
    get schema() {
        return this.getStringAttribute('schema');
    }
    set schema(value) {
        this._schema = value;
    }
    resetSchema() {
        this._schema = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get schemaInput() {
        return this._schema;
    }
    get tags() {
        return this.getStringMapAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    get tagsAll() {
        return this.getStringMapAttribute('tags_all');
    }
    set tagsAll(value) {
        this._tagsAll = value;
    }
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsAllInput() {
        return this._tagsAll;
    }
    get uris() {
        return this._uris;
    }
    get xrayEnabled() {
        return this.getBooleanAttribute('xray_enabled');
    }
    set xrayEnabled(value) {
        this._xrayEnabled = value;
    }
    resetXrayEnabled() {
        this._xrayEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get xrayEnabledInput() {
        return this._xrayEnabled;
    }
    get additionalAuthenticationProvider() {
        return this._additionalAuthenticationProvider;
    }
    putAdditionalAuthenticationProvider(value) {
        this._additionalAuthenticationProvider.internalValue = value;
    }
    resetAdditionalAuthenticationProvider() {
        this._additionalAuthenticationProvider.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get additionalAuthenticationProviderInput() {
        return this._additionalAuthenticationProvider.internalValue;
    }
    get lambdaAuthorizerConfig() {
        return this._lambdaAuthorizerConfig;
    }
    putLambdaAuthorizerConfig(value) {
        this._lambdaAuthorizerConfig.internalValue = value;
    }
    resetLambdaAuthorizerConfig() {
        this._lambdaAuthorizerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaAuthorizerConfigInput() {
        return this._lambdaAuthorizerConfig.internalValue;
    }
    get logConfig() {
        return this._logConfig;
    }
    putLogConfig(value) {
        this._logConfig.internalValue = value;
    }
    resetLogConfig() {
        this._logConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logConfigInput() {
        return this._logConfig.internalValue;
    }
    get openidConnectConfig() {
        return this._openidConnectConfig;
    }
    putOpenidConnectConfig(value) {
        this._openidConnectConfig.internalValue = value;
    }
    resetOpenidConnectConfig() {
        this._openidConnectConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get openidConnectConfigInput() {
        return this._openidConnectConfig.internalValue;
    }
    get userPoolConfig() {
        return this._userPoolConfig;
    }
    putUserPoolConfig(value) {
        this._userPoolConfig.internalValue = value;
    }
    resetUserPoolConfig() {
        this._userPoolConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userPoolConfigInput() {
        return this._userPoolConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            authentication_type: cdktf.stringToTerraform(this._authenticationType),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            schema: cdktf.stringToTerraform(this._schema),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            xray_enabled: cdktf.booleanToTerraform(this._xrayEnabled),
            additional_authentication_provider: cdktf.listMapper(appsyncGraphqlApiAdditionalAuthenticationProviderToTerraform, true)(this._additionalAuthenticationProvider.internalValue),
            lambda_authorizer_config: appsyncGraphqlApiLambdaAuthorizerConfigToTerraform(this._lambdaAuthorizerConfig.internalValue),
            log_config: appsyncGraphqlApiLogConfigToTerraform(this._logConfig.internalValue),
            openid_connect_config: appsyncGraphqlApiOpenidConnectConfigToTerraform(this._openidConnectConfig.internalValue),
            user_pool_config: appsyncGraphqlApiUserPoolConfigToTerraform(this._userPoolConfig.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            authentication_type: {
                value: cdktf.stringToHclTerraform(this._authenticationType),
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
            schema: {
                value: cdktf.stringToHclTerraform(this._schema),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            tags_all: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            xray_enabled: {
                value: cdktf.booleanToHclTerraform(this._xrayEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            additional_authentication_provider: {
                value: cdktf.listMapperHcl(appsyncGraphqlApiAdditionalAuthenticationProviderToHclTerraform, true)(this._additionalAuthenticationProvider.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AppsyncGraphqlApiAdditionalAuthenticationProviderList",
            },
            lambda_authorizer_config: {
                value: appsyncGraphqlApiLambdaAuthorizerConfigToHclTerraform(this._lambdaAuthorizerConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AppsyncGraphqlApiLambdaAuthorizerConfigList",
            },
            log_config: {
                value: appsyncGraphqlApiLogConfigToHclTerraform(this._logConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AppsyncGraphqlApiLogConfigList",
            },
            openid_connect_config: {
                value: appsyncGraphqlApiOpenidConnectConfigToHclTerraform(this._openidConnectConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AppsyncGraphqlApiOpenidConnectConfigList",
            },
            user_pool_config: {
                value: appsyncGraphqlApiUserPoolConfigToHclTerraform(this._userPoolConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AppsyncGraphqlApiUserPoolConfigList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.AppsyncGraphqlApi = AppsyncGraphqlApi;
_k = JSII_RTTI_SYMBOL_1;
AppsyncGraphqlApi[_k] = { fqn: "@cdktf/aws-cdk.appsyncGraphqlApi.AppsyncGraphqlApi", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
AppsyncGraphqlApi.tfResourceType = "aws_appsync_graphql_api";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2FwcHN5bmMtZ3JhcGhxbC1hcGkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSwrQkFBK0I7QUFrRi9CLFNBQWdCLGtGQUFrRixDQUFDLE1BQXlLO0lBQzFRLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLDRCQUE0QixDQUFDO1FBQy9GLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUM5RCw4QkFBOEIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLDRCQUE0QixDQUFDO0tBQzlGLENBQUE7QUFDSCxDQUFDO0FBVkQsZ0xBVUM7QUFHRCxTQUFnQixxRkFBcUYsQ0FBQyxNQUF5SztJQUM3USxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJ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QyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQTFXSCw4Q0EyV0M7OztBQXpXQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLGdDQUFjLEdBQUcseUJBQXlCLEFBQTVCLENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaVxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcHN5bmNHcmFwaHFsQXBpQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfZ3JhcGhxbF9hcGkjYXV0aGVudGljYXRpb25fdHlwZSBBcHBzeW5jR3JhcGhxbEFwaSNhdXRoZW50aWNhdGlvbl90eXBlfVxuICAqL1xuICByZWFkb25seSBhdXRoZW50aWNhdGlvblR5cGU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSNpZCBBcHBzeW5jR3JhcGhxbEFwaSNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSNuYW1lIEFwcHN5bmNHcmFwaHFsQXBpI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSNzY2hlbWEgQXBwc3luY0dyYXBocWxBcGkjc2NoZW1hfVxuICAqL1xuICByZWFkb25seSBzY2hlbWE/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfZ3JhcGhxbF9hcGkjdGFncyBBcHBzeW5jR3JhcGhxbEFwaSN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSN0YWdzX2FsbCBBcHBzeW5jR3JhcGhxbEFwaSN0YWdzX2FsbH1cbiAgKi9cbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfZ3JhcGhxbF9hcGkjeHJheV9lbmFibGVkIEFwcHN5bmNHcmFwaHFsQXBpI3hyYXlfZW5hYmxlZH1cbiAgKi9cbiAgcmVhZG9ubHkgeHJheUVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIGFkZGl0aW9uYWxfYXV0aGVudGljYXRpb25fcHJvdmlkZXIgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfZ3JhcGhxbF9hcGkjYWRkaXRpb25hbF9hdXRoZW50aWNhdGlvbl9wcm92aWRlciBBcHBzeW5jR3JhcGhxbEFwaSNhZGRpdGlvbmFsX2F1dGhlbnRpY2F0aW9uX3Byb3ZpZGVyfVxuICAqL1xuICByZWFkb25seSBhZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlcj86IEFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBsYW1iZGFfYXV0aG9yaXplcl9jb25maWcgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfZ3JhcGhxbF9hcGkjbGFtYmRhX2F1dGhvcml6ZXJfY29uZmlnIEFwcHN5bmNHcmFwaHFsQXBpI2xhbWJkYV9hdXRob3JpemVyX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgbGFtYmRhQXV0aG9yaXplckNvbmZpZz86IEFwcHN5bmNHcmFwaHFsQXBpTGFtYmRhQXV0aG9yaXplckNvbmZpZztcbiAgLyoqXG4gICogbG9nX2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSNsb2dfY29uZmlnIEFwcHN5bmNHcmFwaHFsQXBpI2xvZ19jb25maWd9XG4gICovXG4gIHJlYWRvbmx5IGxvZ0NvbmZpZz86IEFwcHN5bmNHcmFwaHFsQXBpTG9nQ29uZmlnO1xuICAvKipcbiAgKiBvcGVuaWRfY29ubmVjdF9jb25maWcgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfZ3JhcGhxbF9hcGkjb3BlbmlkX2Nvbm5lY3RfY29uZmlnIEFwcHN5bmNHcmFwaHFsQXBpI29wZW5pZF9jb25uZWN0X2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgb3BlbmlkQ29ubmVjdENvbmZpZz86IEFwcHN5bmNHcmFwaHFsQXBpT3BlbmlkQ29ubmVjdENvbmZpZztcbiAgLyoqXG4gICogdXNlcl9wb29sX2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSN1c2VyX3Bvb2xfY29uZmlnIEFwcHN5bmNHcmFwaHFsQXBpI3VzZXJfcG9vbF9jb25maWd9XG4gICovXG4gIHJlYWRvbmx5IHVzZXJQb29sQ29uZmlnPzogQXBwc3luY0dyYXBocWxBcGlVc2VyUG9vbENvbmZpZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlckxhbWJkYUF1dGhvcml6ZXJDb25maWcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBzeW5jX2dyYXBocWxfYXBpI2F1dGhvcml6ZXJfcmVzdWx0X3R0bF9pbl9zZWNvbmRzIEFwcHN5bmNHcmFwaHFsQXBpI2F1dGhvcml6ZXJfcmVzdWx0X3R0bF9pbl9zZWNvbmRzfVxuICAqL1xuICByZWFkb25seSBhdXRob3JpemVyUmVzdWx0VHRsSW5TZWNvbmRzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBzeW5jX2dyYXBocWxfYXBpI2F1dGhvcml6ZXJfdXJpIEFwcHN5bmNHcmFwaHFsQXBpI2F1dGhvcml6ZXJfdXJpfVxuICAqL1xuICByZWFkb25seSBhdXRob3JpemVyVXJpOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfZ3JhcGhxbF9hcGkjaWRlbnRpdHlfdmFsaWRhdGlvbl9leHByZXNzaW9uIEFwcHN5bmNHcmFwaHFsQXBpI2lkZW50aXR5X3ZhbGlkYXRpb25fZXhwcmVzc2lvbn1cbiAgKi9cbiAgcmVhZG9ubHkgaWRlbnRpdHlWYWxpZGF0aW9uRXhwcmVzc2lvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJMYW1iZGFBdXRob3JpemVyQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlckxhbWJkYUF1dGhvcml6ZXJDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBBcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyTGFtYmRhQXV0aG9yaXplckNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdXRob3JpemVyX3Jlc3VsdF90dGxfaW5fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRob3JpemVyUmVzdWx0VHRsSW5TZWNvbmRzKSxcbiAgICBhdXRob3JpemVyX3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRob3JpemVyVXJpKSxcbiAgICBpZGVudGl0eV92YWxpZGF0aW9uX2V4cHJlc3Npb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWRlbnRpdHlWYWxpZGF0aW9uRXhwcmVzc2lvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlckxhbWJkYUF1dGhvcml6ZXJDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyTGFtYmRhQXV0aG9yaXplckNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IEFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJMYW1iZGFBdXRob3JpemVyQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhdXRob3JpemVyX3Jlc3VsdF90dGxfaW5fc2Vjb25kczoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXV0aG9yaXplclJlc3VsdFR0bEluU2Vjb25kcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgYXV0aG9yaXplcl91cmk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmF1dGhvcml6ZXJVcmkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGlkZW50aXR5X3ZhbGlkYXRpb25fZXhwcmVzc2lvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaWRlbnRpdHlWYWxpZGF0aW9uRXhwcmVzc2lvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyTGFtYmRhQXV0aG9yaXplckNvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlckxhbWJkYUF1dGhvcml6ZXJDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2F1dGhvcml6ZXJSZXN1bHRUdGxJblNlY29uZHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXV0aG9yaXplclJlc3VsdFR0bEluU2Vjb25kcyA9IHRoaXMuX2F1dGhvcml6ZXJSZXN1bHRUdGxJblNlY29uZHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hdXRob3JpemVyVXJpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF1dGhvcml6ZXJVcmkgPSB0aGlzLl9hdXRob3JpemVyVXJpO1xuICAgIH1cbiAgICBpZiAodGhpcy5faWRlbnRpdHlWYWxpZGF0aW9uRXhwcmVzc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pZGVudGl0eVZhbGlkYXRpb25FeHByZXNzaW9uID0gdGhpcy5faWRlbnRpdHlWYWxpZGF0aW9uRXhwcmVzc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJMYW1iZGFBdXRob3JpemVyQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXV0aG9yaXplclJlc3VsdFR0bEluU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2F1dGhvcml6ZXJVcmkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pZGVudGl0eVZhbGlkYXRpb25FeHByZXNzaW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hdXRob3JpemVyUmVzdWx0VHRsSW5TZWNvbmRzID0gdmFsdWUuYXV0aG9yaXplclJlc3VsdFR0bEluU2Vjb25kcztcbiAgICAgIHRoaXMuX2F1dGhvcml6ZXJVcmkgPSB2YWx1ZS5hdXRob3JpemVyVXJpO1xuICAgICAgdGhpcy5faWRlbnRpdHlWYWxpZGF0aW9uRXhwcmVzc2lvbiA9IHZhbHVlLmlkZW50aXR5VmFsaWRhdGlvbkV4cHJlc3Npb247XG4gICAgfVxuICB9XG5cbiAgLy8gYXV0aG9yaXplcl9yZXN1bHRfdHRsX2luX3NlY29uZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0aG9yaXplclJlc3VsdFR0bEluU2Vjb25kcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYXV0aG9yaXplclJlc3VsdFR0bEluU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2F1dGhvcml6ZXJfcmVzdWx0X3R0bF9pbl9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRob3JpemVyUmVzdWx0VHRsSW5TZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9hdXRob3JpemVyUmVzdWx0VHRsSW5TZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0aG9yaXplclJlc3VsdFR0bEluU2Vjb25kcygpIHtcbiAgICB0aGlzLl9hdXRob3JpemVyUmVzdWx0VHRsSW5TZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRob3JpemVyUmVzdWx0VHRsSW5TZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhvcml6ZXJSZXN1bHRUdGxJblNlY29uZHM7XG4gIH1cblxuICAvLyBhdXRob3JpemVyX3VyaSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hdXRob3JpemVyVXJpPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhdXRob3JpemVyVXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0aG9yaXplcl91cmknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dGhvcml6ZXJVcmkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F1dGhvcml6ZXJVcmkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0aG9yaXplclVyaUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRob3JpemVyVXJpO1xuICB9XG5cbiAgLy8gaWRlbnRpdHlfdmFsaWRhdGlvbl9leHByZXNzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkZW50aXR5VmFsaWRhdGlvbkV4cHJlc3Npb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkZW50aXR5VmFsaWRhdGlvbkV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZGVudGl0eV92YWxpZGF0aW9uX2V4cHJlc3Npb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkZW50aXR5VmFsaWRhdGlvbkV4cHJlc3Npb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkZW50aXR5VmFsaWRhdGlvbkV4cHJlc3Npb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZGVudGl0eVZhbGlkYXRpb25FeHByZXNzaW9uKCkge1xuICAgIHRoaXMuX2lkZW50aXR5VmFsaWRhdGlvbkV4cHJlc3Npb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkZW50aXR5VmFsaWRhdGlvbkV4cHJlc3Npb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRlbnRpdHlWYWxpZGF0aW9uRXhwcmVzc2lvbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyT3BlbmlkQ29ubmVjdENvbmZpZyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfZ3JhcGhxbF9hcGkjYXV0aF90dGwgQXBwc3luY0dyYXBocWxBcGkjYXV0aF90dGx9XG4gICovXG4gIHJlYWRvbmx5IGF1dGhUdGw/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfZ3JhcGhxbF9hcGkjY2xpZW50X2lkIEFwcHN5bmNHcmFwaHFsQXBpI2NsaWVudF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgY2xpZW50SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfZ3JhcGhxbF9hcGkjaWF0X3R0bCBBcHBzeW5jR3JhcGhxbEFwaSNpYXRfdHRsfVxuICAqL1xuICByZWFkb25seSBpYXRUdGw/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfZ3JhcGhxbF9hcGkjaXNzdWVyIEFwcHN5bmNHcmFwaHFsQXBpI2lzc3Vlcn1cbiAgKi9cbiAgcmVhZG9ubHkgaXNzdWVyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyT3BlbmlkQ29ubmVjdENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJPcGVuaWRDb25uZWN0Q29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgQXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlck9wZW5pZENvbm5lY3RDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXV0aF90dGw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuYXV0aFR0bCksXG4gICAgY2xpZW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsaWVudElkKSxcbiAgICBpYXRfdHRsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlhdFR0bCksXG4gICAgaXNzdWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlzc3VlciksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlck9wZW5pZENvbm5lY3RDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyT3BlbmlkQ29ubmVjdENvbmZpZ091dHB1dFJlZmVyZW5jZSB8IEFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJPcGVuaWRDb25uZWN0Q29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhdXRoX3R0bDoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXV0aFR0bCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgY2xpZW50X2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jbGllbnRJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaWF0X3R0bDoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaWF0VHRsKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBpc3N1ZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlzc3VlciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyT3BlbmlkQ29ubmVjdENvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlck9wZW5pZENvbm5lY3RDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2F1dGhUdGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXV0aFR0bCA9IHRoaXMuX2F1dGhUdGw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jbGllbnRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbGllbnRJZCA9IHRoaXMuX2NsaWVudElkO1xuICAgIH1cbiAgICBpZiAodGhpcy5faWF0VHRsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlhdFR0bCA9IHRoaXMuX2lhdFR0bDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzc3VlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pc3N1ZXIgPSB0aGlzLl9pc3N1ZXI7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyT3BlbmlkQ29ubmVjdENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2F1dGhUdGwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jbGllbnRJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lhdFR0bCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lzc3VlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYXV0aFR0bCA9IHZhbHVlLmF1dGhUdGw7XG4gICAgICB0aGlzLl9jbGllbnRJZCA9IHZhbHVlLmNsaWVudElkO1xuICAgICAgdGhpcy5faWF0VHRsID0gdmFsdWUuaWF0VHRsO1xuICAgICAgdGhpcy5faXNzdWVyID0gdmFsdWUuaXNzdWVyO1xuICAgIH1cbiAgfVxuXG4gIC8vIGF1dGhfdHRsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dGhUdGw/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGF1dGhUdGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdhdXRoX3R0bCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0aFR0bCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYXV0aFR0bCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dGhUdGwoKSB7XG4gICAgdGhpcy5fYXV0aFR0bCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0aFR0bElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRoVHRsO1xuICB9XG5cbiAgLy8gY2xpZW50X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NsaWVudElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjbGllbnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsaWVudF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2xpZW50SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsaWVudElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xpZW50SWQoKSB7XG4gICAgdGhpcy5fY2xpZW50SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsaWVudElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudElkO1xuICB9XG5cbiAgLy8gaWF0X3R0bCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pYXRUdGw/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGlhdFR0bCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2lhdF90dGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlhdFR0bCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faWF0VHRsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWF0VHRsKCkge1xuICAgIHRoaXMuX2lhdFR0bCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWF0VHRsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lhdFR0bDtcbiAgfVxuXG4gIC8vIGlzc3VlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pc3N1ZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlzc3VlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lzc3VlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaXNzdWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pc3N1ZXIgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXNzdWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzc3VlcjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyVXNlclBvb2xDb25maWcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBzeW5jX2dyYXBocWxfYXBpI2FwcF9pZF9jbGllbnRfcmVnZXggQXBwc3luY0dyYXBocWxBcGkjYXBwX2lkX2NsaWVudF9yZWdleH1cbiAgKi9cbiAgcmVhZG9ubHkgYXBwSWRDbGllbnRSZWdleD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSNhd3NfcmVnaW9uIEFwcHN5bmNHcmFwaHFsQXBpI2F3c19yZWdpb259XG4gICovXG4gIHJlYWRvbmx5IGF3c1JlZ2lvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSN1c2VyX3Bvb2xfaWQgQXBwc3luY0dyYXBocWxBcGkjdXNlcl9wb29sX2lkfVxuICAqL1xuICByZWFkb25seSB1c2VyUG9vbElkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyVXNlclBvb2xDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyVXNlclBvb2xDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBBcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyVXNlclBvb2xDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXBwX2lkX2NsaWVudF9yZWdleDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcHBJZENsaWVudFJlZ2V4KSxcbiAgICBhd3NfcmVnaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF3c1JlZ2lvbiksXG4gICAgdXNlcl9wb29sX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVzZXJQb29sSWQpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJVc2VyUG9vbENvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJVc2VyUG9vbENvbmZpZ091dHB1dFJlZmVyZW5jZSB8IEFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJVc2VyUG9vbENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYXBwX2lkX2NsaWVudF9yZWdleDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXBwSWRDbGllbnRSZWdleCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYXdzX3JlZ2lvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXdzUmVnaW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB1c2VyX3Bvb2xfaWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnVzZXJQb29sSWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlclVzZXJQb29sQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyVXNlclBvb2xDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FwcElkQ2xpZW50UmVnZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXBwSWRDbGllbnRSZWdleCA9IHRoaXMuX2FwcElkQ2xpZW50UmVnZXg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hd3NSZWdpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXdzUmVnaW9uID0gdGhpcy5fYXdzUmVnaW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlclBvb2xJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51c2VyUG9vbElkID0gdGhpcy5fdXNlclBvb2xJZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJVc2VyUG9vbENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FwcElkQ2xpZW50UmVnZXggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hd3NSZWdpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91c2VyUG9vbElkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hcHBJZENsaWVudFJlZ2V4ID0gdmFsdWUuYXBwSWRDbGllbnRSZWdleDtcbiAgICAgIHRoaXMuX2F3c1JlZ2lvbiA9IHZhbHVlLmF3c1JlZ2lvbjtcbiAgICAgIHRoaXMuX3VzZXJQb29sSWQgPSB2YWx1ZS51c2VyUG9vbElkO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFwcF9pZF9jbGllbnRfcmVnZXggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXBwSWRDbGllbnRSZWdleD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXBwSWRDbGllbnRSZWdleCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwcF9pZF9jbGllbnRfcmVnZXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFwcElkQ2xpZW50UmVnZXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FwcElkQ2xpZW50UmVnZXggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBcHBJZENsaWVudFJlZ2V4KCkge1xuICAgIHRoaXMuX2FwcElkQ2xpZW50UmVnZXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcElkQ2xpZW50UmVnZXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwSWRDbGllbnRSZWdleDtcbiAgfVxuXG4gIC8vIGF3c19yZWdpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hd3NSZWdpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF3c1JlZ2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F3c19yZWdpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF3c1JlZ2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXdzUmVnaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXdzUmVnaW9uKCkge1xuICAgIHRoaXMuX2F3c1JlZ2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXdzUmVnaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F3c1JlZ2lvbjtcbiAgfVxuXG4gIC8vIHVzZXJfcG9vbF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91c2VyUG9vbElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1c2VyUG9vbElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9wb29sX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VyUG9vbElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91c2VyUG9vbElkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJQb29sSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlclBvb2xJZDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSNhdXRoZW50aWNhdGlvbl90eXBlIEFwcHN5bmNHcmFwaHFsQXBpI2F1dGhlbnRpY2F0aW9uX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGF1dGhlbnRpY2F0aW9uVHlwZTogc3RyaW5nO1xuICAvKipcbiAgKiBsYW1iZGFfYXV0aG9yaXplcl9jb25maWcgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfZ3JhcGhxbF9hcGkjbGFtYmRhX2F1dGhvcml6ZXJfY29uZmlnIEFwcHN5bmNHcmFwaHFsQXBpI2xhbWJkYV9hdXRob3JpemVyX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgbGFtYmRhQXV0aG9yaXplckNvbmZpZz86IEFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJMYW1iZGFBdXRob3JpemVyQ29uZmlnO1xuICAvKipcbiAgKiBvcGVuaWRfY29ubmVjdF9jb25maWcgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfZ3JhcGhxbF9hcGkjb3BlbmlkX2Nvbm5lY3RfY29uZmlnIEFwcHN5bmNHcmFwaHFsQXBpI29wZW5pZF9jb25uZWN0X2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgb3BlbmlkQ29ubmVjdENvbmZpZz86IEFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJPcGVuaWRDb25uZWN0Q29uZmlnO1xuICAvKipcbiAgKiB1c2VyX3Bvb2xfY29uZmlnIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBzeW5jX2dyYXBocWxfYXBpI3VzZXJfcG9vbF9jb25maWcgQXBwc3luY0dyYXBocWxBcGkjdXNlcl9wb29sX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgdXNlclBvb2xDb25maWc/OiBBcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyVXNlclBvb2xDb25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlciB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGF1dGhlbnRpY2F0aW9uX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXV0aGVudGljYXRpb25UeXBlKSxcbiAgICBsYW1iZGFfYXV0aG9yaXplcl9jb25maWc6IGFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJMYW1iZGFBdXRob3JpemVyQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5sYW1iZGFBdXRob3JpemVyQ29uZmlnKSxcbiAgICBvcGVuaWRfY29ubmVjdF9jb25maWc6IGFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJPcGVuaWRDb25uZWN0Q29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5vcGVuaWRDb25uZWN0Q29uZmlnKSxcbiAgICB1c2VyX3Bvb2xfY29uZmlnOiBhcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyVXNlclBvb2xDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVzZXJQb29sQ29uZmlnKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlciB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhdXRoZW50aWNhdGlvbl90eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hdXRoZW50aWNhdGlvblR5cGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGxhbWJkYV9hdXRob3JpemVyX2NvbmZpZzoge1xuICAgICAgdmFsdWU6IGFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJMYW1iZGFBdXRob3JpemVyQ29uZmlnVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sYW1iZGFBdXRob3JpemVyQ29uZmlnKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlckxhbWJkYUF1dGhvcml6ZXJDb25maWdMaXN0XCIsXG4gICAgfSxcbiAgICBvcGVuaWRfY29ubmVjdF9jb25maWc6IHtcbiAgICAgIHZhbHVlOiBhcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyT3BlbmlkQ29ubmVjdENvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEub3BlbmlkQ29ubmVjdENvbmZpZyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJPcGVuaWRDb25uZWN0Q29uZmlnTGlzdFwiLFxuICAgIH0sXG4gICAgdXNlcl9wb29sX2NvbmZpZzoge1xuICAgICAgdmFsdWU6IGFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJVc2VyUG9vbENvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudXNlclBvb2xDb25maWcpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyVXNlclBvb2xDb25maWdMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlciB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXV0aGVudGljYXRpb25UeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF1dGhlbnRpY2F0aW9uVHlwZSA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xhbWJkYUF1dGhvcml6ZXJDb25maWc/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGFtYmRhQXV0aG9yaXplckNvbmZpZyA9IHRoaXMuX2xhbWJkYUF1dGhvcml6ZXJDb25maWc/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vcGVuaWRDb25uZWN0Q29uZmlnPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm9wZW5pZENvbm5lY3RDb25maWcgPSB0aGlzLl9vcGVuaWRDb25uZWN0Q29uZmlnPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlclBvb2xDb25maWc/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXNlclBvb2xDb25maWcgPSB0aGlzLl91c2VyUG9vbENvbmZpZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXIgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25UeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbGFtYmRhQXV0aG9yaXplckNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb3BlbmlkQ29ubmVjdENvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXNlclBvb2xDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hdXRoZW50aWNhdGlvblR5cGUgPSB2YWx1ZS5hdXRoZW50aWNhdGlvblR5cGU7XG4gICAgICB0aGlzLl9sYW1iZGFBdXRob3JpemVyQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZS5sYW1iZGFBdXRob3JpemVyQ29uZmlnO1xuICAgICAgdGhpcy5fb3BlbmlkQ29ubmVjdENvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWUub3BlbmlkQ29ubmVjdENvbmZpZztcbiAgICAgIHRoaXMuX3VzZXJQb29sQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZS51c2VyUG9vbENvbmZpZztcbiAgICB9XG4gIH1cblxuICAvLyBhdXRoZW50aWNhdGlvbl90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXV0aGVudGljYXRpb25UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0aGVudGljYXRpb25fdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0aGVudGljYXRpb25UeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdXRoZW50aWNhdGlvblR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0aGVudGljYXRpb25UeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhlbnRpY2F0aW9uVHlwZTtcbiAgfVxuXG4gIC8vIGxhbWJkYV9hdXRob3JpemVyX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYW1iZGFBdXRob3JpemVyQ29uZmlnID0gbmV3IEFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJMYW1iZGFBdXRob3JpemVyQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwibGFtYmRhX2F1dGhvcml6ZXJfY29uZmlnXCIpO1xuICBwdWJsaWMgZ2V0IGxhbWJkYUF1dGhvcml6ZXJDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbWJkYUF1dGhvcml6ZXJDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dExhbWJkYUF1dGhvcml6ZXJDb25maWcodmFsdWU6IEFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJMYW1iZGFBdXRob3JpemVyQ29uZmlnKSB7XG4gICAgdGhpcy5fbGFtYmRhQXV0aG9yaXplckNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGFtYmRhQXV0aG9yaXplckNvbmZpZygpIHtcbiAgICB0aGlzLl9sYW1iZGFBdXRob3JpemVyQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhbWJkYUF1dGhvcml6ZXJDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFtYmRhQXV0aG9yaXplckNvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gb3BlbmlkX2Nvbm5lY3RfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29wZW5pZENvbm5lY3RDb25maWcgPSBuZXcgQXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlck9wZW5pZENvbm5lY3RDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJvcGVuaWRfY29ubmVjdF9jb25maWdcIik7XG4gIHB1YmxpYyBnZXQgb3BlbmlkQ29ubmVjdENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbmlkQ29ubmVjdENvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0T3BlbmlkQ29ubmVjdENvbmZpZyh2YWx1ZTogQXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlck9wZW5pZENvbm5lY3RDb25maWcpIHtcbiAgICB0aGlzLl9vcGVuaWRDb25uZWN0Q29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPcGVuaWRDb25uZWN0Q29uZmlnKCkge1xuICAgIHRoaXMuX29wZW5pZENvbm5lY3RDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3BlbmlkQ29ubmVjdENvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuaWRDb25uZWN0Q29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB1c2VyX3Bvb2xfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZXJQb29sQ29uZmlnID0gbmV3IEFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJVc2VyUG9vbENvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInVzZXJfcG9vbF9jb25maWdcIik7XG4gIHB1YmxpYyBnZXQgdXNlclBvb2xDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJQb29sQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRVc2VyUG9vbENvbmZpZyh2YWx1ZTogQXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlclVzZXJQb29sQ29uZmlnKSB7XG4gICAgdGhpcy5fdXNlclBvb2xDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJQb29sQ29uZmlnKCkge1xuICAgIHRoaXMuX3VzZXJQb29sQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJQb29sQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJQb29sQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBBcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IEFwcHN5bmNHcmFwaHFsQXBpQWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXJPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgQXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlck91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHN5bmNHcmFwaHFsQXBpTGFtYmRhQXV0aG9yaXplckNvbmZpZyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfZ3JhcGhxbF9hcGkjYXV0aG9yaXplcl9yZXN1bHRfdHRsX2luX3NlY29uZHMgQXBwc3luY0dyYXBocWxBcGkjYXV0aG9yaXplcl9yZXN1bHRfdHRsX2luX3NlY29uZHN9XG4gICovXG4gIHJlYWRvbmx5IGF1dGhvcml6ZXJSZXN1bHRUdGxJblNlY29uZHM/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfZ3JhcGhxbF9hcGkjYXV0aG9yaXplcl91cmkgQXBwc3luY0dyYXBocWxBcGkjYXV0aG9yaXplcl91cml9XG4gICovXG4gIHJlYWRvbmx5IGF1dGhvcml6ZXJVcmk6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSNpZGVudGl0eV92YWxpZGF0aW9uX2V4cHJlc3Npb24gQXBwc3luY0dyYXBocWxBcGkjaWRlbnRpdHlfdmFsaWRhdGlvbl9leHByZXNzaW9ufVxuICAqL1xuICByZWFkb25seSBpZGVudGl0eVZhbGlkYXRpb25FeHByZXNzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwc3luY0dyYXBocWxBcGlMYW1iZGFBdXRob3JpemVyQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwc3luY0dyYXBocWxBcGlMYW1iZGFBdXRob3JpemVyQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgQXBwc3luY0dyYXBocWxBcGlMYW1iZGFBdXRob3JpemVyQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGF1dGhvcml6ZXJfcmVzdWx0X3R0bF9pbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1dGhvcml6ZXJSZXN1bHRUdGxJblNlY29uZHMpLFxuICAgIGF1dGhvcml6ZXJfdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1dGhvcml6ZXJVcmkpLFxuICAgIGlkZW50aXR5X3ZhbGlkYXRpb25fZXhwcmVzc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZGVudGl0eVZhbGlkYXRpb25FeHByZXNzaW9uKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBzeW5jR3JhcGhxbEFwaUxhbWJkYUF1dGhvcml6ZXJDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBzeW5jR3JhcGhxbEFwaUxhbWJkYUF1dGhvcml6ZXJDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBBcHBzeW5jR3JhcGhxbEFwaUxhbWJkYUF1dGhvcml6ZXJDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGF1dGhvcml6ZXJfcmVzdWx0X3R0bF9pbl9zZWNvbmRzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hdXRob3JpemVyUmVzdWx0VHRsSW5TZWNvbmRzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBhdXRob3JpemVyX3VyaToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXV0aG9yaXplclVyaSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaWRlbnRpdHlfdmFsaWRhdGlvbl9leHByZXNzaW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pZGVudGl0eVZhbGlkYXRpb25FeHByZXNzaW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcHN5bmNHcmFwaHFsQXBpTGFtYmRhQXV0aG9yaXplckNvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwc3luY0dyYXBocWxBcGlMYW1iZGFBdXRob3JpemVyQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hdXRob3JpemVyUmVzdWx0VHRsSW5TZWNvbmRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF1dGhvcml6ZXJSZXN1bHRUdGxJblNlY29uZHMgPSB0aGlzLl9hdXRob3JpemVyUmVzdWx0VHRsSW5TZWNvbmRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXV0aG9yaXplclVyaSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRob3JpemVyVXJpID0gdGhpcy5fYXV0aG9yaXplclVyaTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lkZW50aXR5VmFsaWRhdGlvbkV4cHJlc3Npb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaWRlbnRpdHlWYWxpZGF0aW9uRXhwcmVzc2lvbiA9IHRoaXMuX2lkZW50aXR5VmFsaWRhdGlvbkV4cHJlc3Npb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBzeW5jR3JhcGhxbEFwaUxhbWJkYUF1dGhvcml6ZXJDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hdXRob3JpemVyUmVzdWx0VHRsSW5TZWNvbmRzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXV0aG9yaXplclVyaSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lkZW50aXR5VmFsaWRhdGlvbkV4cHJlc3Npb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F1dGhvcml6ZXJSZXN1bHRUdGxJblNlY29uZHMgPSB2YWx1ZS5hdXRob3JpemVyUmVzdWx0VHRsSW5TZWNvbmRzO1xuICAgICAgdGhpcy5fYXV0aG9yaXplclVyaSA9IHZhbHVlLmF1dGhvcml6ZXJVcmk7XG4gICAgICB0aGlzLl9pZGVudGl0eVZhbGlkYXRpb25FeHByZXNzaW9uID0gdmFsdWUuaWRlbnRpdHlWYWxpZGF0aW9uRXhwcmVzc2lvbjtcbiAgICB9XG4gIH1cblxuICAvLyBhdXRob3JpemVyX3Jlc3VsdF90dGxfaW5fc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRob3JpemVyUmVzdWx0VHRsSW5TZWNvbmRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBhdXRob3JpemVyUmVzdWx0VHRsSW5TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYXV0aG9yaXplcl9yZXN1bHRfdHRsX2luX3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dGhvcml6ZXJSZXN1bHRUdGxJblNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2F1dGhvcml6ZXJSZXN1bHRUdGxJblNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRob3JpemVyUmVzdWx0VHRsSW5TZWNvbmRzKCkge1xuICAgIHRoaXMuX2F1dGhvcml6ZXJSZXN1bHRUdGxJblNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhvcml6ZXJSZXN1bHRUdGxJblNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXplclJlc3VsdFR0bEluU2Vjb25kcztcbiAgfVxuXG4gIC8vIGF1dGhvcml6ZXJfdXJpIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2F1dGhvcml6ZXJVcmk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF1dGhvcml6ZXJVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRob3JpemVyX3VyaScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0aG9yaXplclVyaSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXV0aG9yaXplclVyaSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRob3JpemVyVXJpSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhvcml6ZXJVcmk7XG4gIH1cblxuICAvLyBpZGVudGl0eV92YWxpZGF0aW9uX2V4cHJlc3Npb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWRlbnRpdHlWYWxpZGF0aW9uRXhwcmVzc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWRlbnRpdHlWYWxpZGF0aW9uRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkZW50aXR5X3ZhbGlkYXRpb25fZXhwcmVzc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWRlbnRpdHlWYWxpZGF0aW9uRXhwcmVzc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWRlbnRpdHlWYWxpZGF0aW9uRXhwcmVzc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkZW50aXR5VmFsaWRhdGlvbkV4cHJlc3Npb24oKSB7XG4gICAgdGhpcy5faWRlbnRpdHlWYWxpZGF0aW9uRXhwcmVzc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRlbnRpdHlWYWxpZGF0aW9uRXhwcmVzc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZGVudGl0eVZhbGlkYXRpb25FeHByZXNzaW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHN5bmNHcmFwaHFsQXBpTG9nQ29uZmlnIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSNjbG91ZHdhdGNoX2xvZ3Nfcm9sZV9hcm4gQXBwc3luY0dyYXBocWxBcGkjY2xvdWR3YXRjaF9sb2dzX3JvbGVfYXJufVxuICAqL1xuICByZWFkb25seSBjbG91ZHdhdGNoTG9nc1JvbGVBcm46IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSNleGNsdWRlX3ZlcmJvc2VfY29udGVudCBBcHBzeW5jR3JhcGhxbEFwaSNleGNsdWRlX3ZlcmJvc2VfY29udGVudH1cbiAgKi9cbiAgcmVhZG9ubHkgZXhjbHVkZVZlcmJvc2VDb250ZW50PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBzeW5jX2dyYXBocWxfYXBpI2ZpZWxkX2xvZ19sZXZlbCBBcHBzeW5jR3JhcGhxbEFwaSNmaWVsZF9sb2dfbGV2ZWx9XG4gICovXG4gIHJlYWRvbmx5IGZpZWxkTG9nTGV2ZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHN5bmNHcmFwaHFsQXBpTG9nQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwc3luY0dyYXBocWxBcGlMb2dDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBBcHBzeW5jR3JhcGhxbEFwaUxvZ0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjbG91ZHdhdGNoX2xvZ3Nfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaExvZ3NSb2xlQXJuKSxcbiAgICBleGNsdWRlX3ZlcmJvc2VfY29udGVudDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZXhjbHVkZVZlcmJvc2VDb250ZW50KSxcbiAgICBmaWVsZF9sb2dfbGV2ZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZmllbGRMb2dMZXZlbCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwc3luY0dyYXBocWxBcGlMb2dDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBzeW5jR3JhcGhxbEFwaUxvZ0NvbmZpZ091dHB1dFJlZmVyZW5jZSB8IEFwcHN5bmNHcmFwaHFsQXBpTG9nQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjbG91ZHdhdGNoX2xvZ3Nfcm9sZV9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hMb2dzUm9sZUFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZXhjbHVkZV92ZXJib3NlX2NvbnRlbnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5leGNsdWRlVmVyYm9zZUNvbnRlbnQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBmaWVsZF9sb2dfbGV2ZWw6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmZpZWxkTG9nTGV2ZWwpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwc3luY0dyYXBocWxBcGlMb2dDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcHN5bmNHcmFwaHFsQXBpTG9nQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jbG91ZHdhdGNoTG9nc1JvbGVBcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xvdWR3YXRjaExvZ3NSb2xlQXJuID0gdGhpcy5fY2xvdWR3YXRjaExvZ3NSb2xlQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZXhjbHVkZVZlcmJvc2VDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmV4Y2x1ZGVWZXJib3NlQ29udGVudCA9IHRoaXMuX2V4Y2x1ZGVWZXJib3NlQ29udGVudDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZpZWxkTG9nTGV2ZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmllbGRMb2dMZXZlbCA9IHRoaXMuX2ZpZWxkTG9nTGV2ZWw7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBzeW5jR3JhcGhxbEFwaUxvZ0NvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dzUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2V4Y2x1ZGVWZXJib3NlQ29udGVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpZWxkTG9nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dzUm9sZUFybiA9IHZhbHVlLmNsb3Vkd2F0Y2hMb2dzUm9sZUFybjtcbiAgICAgIHRoaXMuX2V4Y2x1ZGVWZXJib3NlQ29udGVudCA9IHZhbHVlLmV4Y2x1ZGVWZXJib3NlQ29udGVudDtcbiAgICAgIHRoaXMuX2ZpZWxkTG9nTGV2ZWwgPSB2YWx1ZS5maWVsZExvZ0xldmVsO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfbG9nc19yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jbG91ZHdhdGNoTG9nc1JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dzUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nsb3Vkd2F0Y2hfbG9nc19yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2xvdWR3YXRjaExvZ3NSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoTG9nc1JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ3NSb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dzUm9sZUFybjtcbiAgfVxuXG4gIC8vIGV4Y2x1ZGVfdmVyYm9zZV9jb250ZW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4Y2x1ZGVWZXJib3NlQ29udGVudD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZXhjbHVkZVZlcmJvc2VDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2V4Y2x1ZGVfdmVyYm9zZV9jb250ZW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBleGNsdWRlVmVyYm9zZUNvbnRlbnQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2V4Y2x1ZGVWZXJib3NlQ29udGVudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4Y2x1ZGVWZXJib3NlQ29udGVudCgpIHtcbiAgICB0aGlzLl9leGNsdWRlVmVyYm9zZUNvbnRlbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4Y2x1ZGVWZXJib3NlQ29udGVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leGNsdWRlVmVyYm9zZUNvbnRlbnQ7XG4gIH1cblxuICAvLyBmaWVsZF9sb2dfbGV2ZWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZmllbGRMb2dMZXZlbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZmllbGRMb2dMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZpZWxkX2xvZ19sZXZlbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmllbGRMb2dMZXZlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmllbGRMb2dMZXZlbCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWVsZExvZ0xldmVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkTG9nTGV2ZWw7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwc3luY0dyYXBocWxBcGlPcGVuaWRDb25uZWN0Q29uZmlnIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSNhdXRoX3R0bCBBcHBzeW5jR3JhcGhxbEFwaSNhdXRoX3R0bH1cbiAgKi9cbiAgcmVhZG9ubHkgYXV0aFR0bD86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSNjbGllbnRfaWQgQXBwc3luY0dyYXBocWxBcGkjY2xpZW50X2lkfVxuICAqL1xuICByZWFkb25seSBjbGllbnRJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSNpYXRfdHRsIEFwcHN5bmNHcmFwaHFsQXBpI2lhdF90dGx9XG4gICovXG4gIHJlYWRvbmx5IGlhdFR0bD86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSNpc3N1ZXIgQXBwc3luY0dyYXBocWxBcGkjaXNzdWVyfVxuICAqL1xuICByZWFkb25seSBpc3N1ZXI6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHN5bmNHcmFwaHFsQXBpT3BlbmlkQ29ubmVjdENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcHN5bmNHcmFwaHFsQXBpT3BlbmlkQ29ubmVjdENvbmZpZ091dHB1dFJlZmVyZW5jZSB8IEFwcHN5bmNHcmFwaHFsQXBpT3BlbmlkQ29ubmVjdENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdXRoX3R0bDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRoVHRsKSxcbiAgICBjbGllbnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xpZW50SWQpLFxuICAgIGlhdF90dGw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaWF0VHRsKSxcbiAgICBpc3N1ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaXNzdWVyKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBzeW5jR3JhcGhxbEFwaU9wZW5pZENvbm5lY3RDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBzeW5jR3JhcGhxbEFwaU9wZW5pZENvbm5lY3RDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBBcHBzeW5jR3JhcGhxbEFwaU9wZW5pZENvbm5lY3RDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGF1dGhfdHRsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hdXRoVHRsKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBjbGllbnRfaWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNsaWVudElkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpYXRfdHRsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pYXRUdGwpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIGlzc3Vlcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaXNzdWVyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcHN5bmNHcmFwaHFsQXBpT3BlbmlkQ29ubmVjdENvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwc3luY0dyYXBocWxBcGlPcGVuaWRDb25uZWN0Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hdXRoVHRsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF1dGhUdGwgPSB0aGlzLl9hdXRoVHRsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2xpZW50SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xpZW50SWQgPSB0aGlzLl9jbGllbnRJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lhdFR0bCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pYXRUdGwgPSB0aGlzLl9pYXRUdGw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pc3N1ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaXNzdWVyID0gdGhpcy5faXNzdWVyO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwc3luY0dyYXBocWxBcGlPcGVuaWRDb25uZWN0Q29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXV0aFR0bCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NsaWVudElkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faWF0VHRsID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faXNzdWVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hdXRoVHRsID0gdmFsdWUuYXV0aFR0bDtcbiAgICAgIHRoaXMuX2NsaWVudElkID0gdmFsdWUuY2xpZW50SWQ7XG4gICAgICB0aGlzLl9pYXRUdGwgPSB2YWx1ZS5pYXRUdGw7XG4gICAgICB0aGlzLl9pc3N1ZXIgPSB2YWx1ZS5pc3N1ZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gYXV0aF90dGwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0aFR0bD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYXV0aFR0bCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2F1dGhfdHRsJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRoVHRsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9hdXRoVHRsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0aFR0bCgpIHtcbiAgICB0aGlzLl9hdXRoVHRsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRoVHRsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhUdGw7XG4gIH1cblxuICAvLyBjbGllbnRfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2xpZW50SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsaWVudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2xpZW50X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbGllbnRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2xpZW50SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbGllbnRJZCgpIHtcbiAgICB0aGlzLl9jbGllbnRJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xpZW50SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50SWQ7XG4gIH1cblxuICAvLyBpYXRfdHRsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lhdFR0bD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgaWF0VHRsKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaWF0X3R0bCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWF0VHRsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pYXRUdGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJYXRUdGwoKSB7XG4gICAgdGhpcy5faWF0VHRsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpYXRUdGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWF0VHRsO1xuICB9XG5cbiAgLy8gaXNzdWVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lzc3Vlcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaXNzdWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaXNzdWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBpc3N1ZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lzc3VlciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpc3N1ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNzdWVyO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHN5bmNHcmFwaHFsQXBpVXNlclBvb2xDb25maWcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBzeW5jX2dyYXBocWxfYXBpI2FwcF9pZF9jbGllbnRfcmVnZXggQXBwc3luY0dyYXBocWxBcGkjYXBwX2lkX2NsaWVudF9yZWdleH1cbiAgKi9cbiAgcmVhZG9ubHkgYXBwSWRDbGllbnRSZWdleD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSNhd3NfcmVnaW9uIEFwcHN5bmNHcmFwaHFsQXBpI2F3c19yZWdpb259XG4gICovXG4gIHJlYWRvbmx5IGF3c1JlZ2lvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSNkZWZhdWx0X2FjdGlvbiBBcHBzeW5jR3JhcGhxbEFwaSNkZWZhdWx0X2FjdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGVmYXVsdEFjdGlvbjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBzeW5jX2dyYXBocWxfYXBpI3VzZXJfcG9vbF9pZCBBcHBzeW5jR3JhcGhxbEFwaSN1c2VyX3Bvb2xfaWR9XG4gICovXG4gIHJlYWRvbmx5IHVzZXJQb29sSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHN5bmNHcmFwaHFsQXBpVXNlclBvb2xDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBzeW5jR3JhcGhxbEFwaVVzZXJQb29sQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgQXBwc3luY0dyYXBocWxBcGlVc2VyUG9vbENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhcHBfaWRfY2xpZW50X3JlZ2V4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFwcElkQ2xpZW50UmVnZXgpLFxuICAgIGF3c19yZWdpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXdzUmVnaW9uKSxcbiAgICBkZWZhdWx0X2FjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWZhdWx0QWN0aW9uKSxcbiAgICB1c2VyX3Bvb2xfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlclBvb2xJZCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwc3luY0dyYXBocWxBcGlVc2VyUG9vbENvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFwcHN5bmNHcmFwaHFsQXBpVXNlclBvb2xDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBBcHBzeW5jR3JhcGhxbEFwaVVzZXJQb29sQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhcHBfaWRfY2xpZW50X3JlZ2V4OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hcHBJZENsaWVudFJlZ2V4KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBhd3NfcmVnaW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hd3NSZWdpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRlZmF1bHRfYWN0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kZWZhdWx0QWN0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB1c2VyX3Bvb2xfaWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnVzZXJQb29sSWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwc3luY0dyYXBocWxBcGlVc2VyUG9vbENvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwc3luY0dyYXBocWxBcGlVc2VyUG9vbENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXBwSWRDbGllbnRSZWdleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hcHBJZENsaWVudFJlZ2V4ID0gdGhpcy5fYXBwSWRDbGllbnRSZWdleDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2F3c1JlZ2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hd3NSZWdpb24gPSB0aGlzLl9hd3NSZWdpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZWZhdWx0QWN0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlZmF1bHRBY3Rpb24gPSB0aGlzLl9kZWZhdWx0QWN0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlclBvb2xJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51c2VyUG9vbElkID0gdGhpcy5fdXNlclBvb2xJZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcHN5bmNHcmFwaHFsQXBpVXNlclBvb2xDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hcHBJZENsaWVudFJlZ2V4ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXdzUmVnaW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGVmYXVsdEFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VzZXJQb29sSWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FwcElkQ2xpZW50UmVnZXggPSB2YWx1ZS5hcHBJZENsaWVudFJlZ2V4O1xuICAgICAgdGhpcy5fYXdzUmVnaW9uID0gdmFsdWUuYXdzUmVnaW9uO1xuICAgICAgdGhpcy5fZGVmYXVsdEFjdGlvbiA9IHZhbHVlLmRlZmF1bHRBY3Rpb247XG4gICAgICB0aGlzLl91c2VyUG9vbElkID0gdmFsdWUudXNlclBvb2xJZDtcbiAgICB9XG4gIH1cblxuICAvLyBhcHBfaWRfY2xpZW50X3JlZ2V4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FwcElkQ2xpZW50UmVnZXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFwcElkQ2xpZW50UmVnZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcHBfaWRfY2xpZW50X3JlZ2V4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBhcHBJZENsaWVudFJlZ2V4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcHBJZENsaWVudFJlZ2V4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXBwSWRDbGllbnRSZWdleCgpIHtcbiAgICB0aGlzLl9hcHBJZENsaWVudFJlZ2V4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcHBJZENsaWVudFJlZ2V4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcElkQ2xpZW50UmVnZXg7XG4gIH1cblxuICAvLyBhd3NfcmVnaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXdzUmVnaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhd3NSZWdpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhd3NfcmVnaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBhd3NSZWdpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F3c1JlZ2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF3c1JlZ2lvbigpIHtcbiAgICB0aGlzLl9hd3NSZWdpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF3c1JlZ2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hd3NSZWdpb247XG4gIH1cblxuICAvLyBkZWZhdWx0X2FjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZWZhdWx0QWN0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWZhdWx0QWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVmYXVsdF9hY3Rpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmF1bHRBY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHRBY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdEFjdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0QWN0aW9uO1xuICB9XG5cbiAgLy8gdXNlcl9wb29sX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VzZXJQb29sSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVzZXJQb29sSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VyX3Bvb2xfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZXJQb29sSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJQb29sSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlclBvb2xJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyUG9vbElkO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hcHBzeW5jX2dyYXBocWxfYXBpIGF3c19hcHBzeW5jX2dyYXBocWxfYXBpfVxuKi9cbmV4cG9ydCBjbGFzcyBBcHBzeW5jR3JhcGhxbEFwaSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfYXBwc3luY19ncmFwaHFsX2FwaVwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBBcHBzeW5jR3JhcGhxbEFwaSByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBBcHBzeW5jR3JhcGhxbEFwaSB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgQXBwc3luY0dyYXBocWxBcGkgdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FwcHN5bmNfZ3JhcGhxbF9hcGkjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIEFwcHN5bmNHcmFwaHFsQXBpIHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19hcHBzeW5jX2dyYXBocWxfYXBpXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXBwc3luY19ncmFwaHFsX2FwaSBhd3NfYXBwc3luY19ncmFwaHFsX2FwaX0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgQXBwc3luY0dyYXBocWxBcGlDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQXBwc3luY0dyYXBocWxBcGlDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19hcHBzeW5jX2dyYXBocWxfYXBpJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fYXV0aGVudGljYXRpb25UeXBlID0gY29uZmlnLmF1dGhlbnRpY2F0aW9uVHlwZTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fc2NoZW1hID0gY29uZmlnLnNjaGVtYTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3hyYXlFbmFibGVkID0gY29uZmlnLnhyYXlFbmFibGVkO1xuICAgIHRoaXMuX2FkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyLmludGVybmFsVmFsdWUgPSBjb25maWcuYWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXI7XG4gICAgdGhpcy5fbGFtYmRhQXV0aG9yaXplckNvbmZpZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmxhbWJkYUF1dGhvcml6ZXJDb25maWc7XG4gICAgdGhpcy5fbG9nQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcubG9nQ29uZmlnO1xuICAgIHRoaXMuX29wZW5pZENvbm5lY3RDb25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5vcGVuaWRDb25uZWN0Q29uZmlnO1xuICAgIHRoaXMuX3VzZXJQb29sQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcudXNlclBvb2xDb25maWc7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXV0aGVudGljYXRpb25fdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF1dGhlbnRpY2F0aW9uVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F1dGhlbnRpY2F0aW9uX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dGhlbnRpY2F0aW9uVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXV0aGVudGljYXRpb25UeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhlbnRpY2F0aW9uVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRoZW50aWNhdGlvblR5cGU7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHNjaGVtYSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zY2hlbWE/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNjaGVtYSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NjaGVtYScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2NoZW1hKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zY2hlbWEgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTY2hlbWEoKSB7XG4gICAgdGhpcy5fc2NoZW1hID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY2hlbWFJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NoZW1hO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB1cmlzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VyaXMgPSBuZXcgY2RrdGYuU3RyaW5nTWFwKHRoaXMsIFwidXJpc1wiKTtcbiAgcHVibGljIGdldCB1cmlzKCkge1xuICAgIHJldHVybiB0aGlzLl91cmlzO1xuICB9XG5cbiAgLy8geHJheV9lbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3hyYXlFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB4cmF5RW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd4cmF5X2VuYWJsZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHhyYXlFbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl94cmF5RW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFhyYXlFbmFibGVkKCkge1xuICAgIHRoaXMuX3hyYXlFbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB4cmF5RW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl94cmF5RW5hYmxlZDtcbiAgfVxuXG4gIC8vIGFkZGl0aW9uYWxfYXV0aGVudGljYXRpb25fcHJvdmlkZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXIgPSBuZXcgQXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlckxpc3QodGhpcywgXCJhZGRpdGlvbmFsX2F1dGhlbnRpY2F0aW9uX3Byb3ZpZGVyXCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCBhZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fYWRkaXRpb25hbEF1dGhlbnRpY2F0aW9uUHJvdmlkZXI7XG4gIH1cbiAgcHVibGljIHB1dEFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyKHZhbHVlOiBBcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlcigpIHtcbiAgICB0aGlzLl9hZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlci5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbGFtYmRhX2F1dGhvcml6ZXJfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhbWJkYUF1dGhvcml6ZXJDb25maWcgPSBuZXcgQXBwc3luY0dyYXBocWxBcGlMYW1iZGFBdXRob3JpemVyQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwibGFtYmRhX2F1dGhvcml6ZXJfY29uZmlnXCIpO1xuICBwdWJsaWMgZ2V0IGxhbWJkYUF1dGhvcml6ZXJDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbWJkYUF1dGhvcml6ZXJDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dExhbWJkYUF1dGhvcml6ZXJDb25maWcodmFsdWU6IEFwcHN5bmNHcmFwaHFsQXBpTGFtYmRhQXV0aG9yaXplckNvbmZpZykge1xuICAgIHRoaXMuX2xhbWJkYUF1dGhvcml6ZXJDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhbWJkYUF1dGhvcml6ZXJDb25maWcoKSB7XG4gICAgdGhpcy5fbGFtYmRhQXV0aG9yaXplckNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYW1iZGFBdXRob3JpemVyQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbWJkYUF1dGhvcml6ZXJDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGxvZ19jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9nQ29uZmlnID0gbmV3IEFwcHN5bmNHcmFwaHFsQXBpTG9nQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwibG9nX2NvbmZpZ1wiKTtcbiAgcHVibGljIGdldCBsb2dDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0NvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0TG9nQ29uZmlnKHZhbHVlOiBBcHBzeW5jR3JhcGhxbEFwaUxvZ0NvbmZpZykge1xuICAgIHRoaXMuX2xvZ0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nQ29uZmlnKCkge1xuICAgIHRoaXMuX2xvZ0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBvcGVuaWRfY29ubmVjdF9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3BlbmlkQ29ubmVjdENvbmZpZyA9IG5ldyBBcHBzeW5jR3JhcGhxbEFwaU9wZW5pZENvbm5lY3RDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJvcGVuaWRfY29ubmVjdF9jb25maWdcIik7XG4gIHB1YmxpYyBnZXQgb3BlbmlkQ29ubmVjdENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbmlkQ29ubmVjdENvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0T3BlbmlkQ29ubmVjdENvbmZpZyh2YWx1ZTogQXBwc3luY0dyYXBocWxBcGlPcGVuaWRDb25uZWN0Q29uZmlnKSB7XG4gICAgdGhpcy5fb3BlbmlkQ29ubmVjdENvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3BlbmlkQ29ubmVjdENvbmZpZygpIHtcbiAgICB0aGlzLl9vcGVuaWRDb25uZWN0Q29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9wZW5pZENvbm5lY3RDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbmlkQ29ubmVjdENvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdXNlcl9wb29sX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91c2VyUG9vbENvbmZpZyA9IG5ldyBBcHBzeW5jR3JhcGhxbEFwaVVzZXJQb29sQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwidXNlcl9wb29sX2NvbmZpZ1wiKTtcbiAgcHVibGljIGdldCB1c2VyUG9vbENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlclBvb2xDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dFVzZXJQb29sQ29uZmlnKHZhbHVlOiBBcHBzeW5jR3JhcGhxbEFwaVVzZXJQb29sQ29uZmlnKSB7XG4gICAgdGhpcy5fdXNlclBvb2xDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJQb29sQ29uZmlnKCkge1xuICAgIHRoaXMuX3VzZXJQb29sQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJQb29sQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJQb29sQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF1dGhlbnRpY2F0aW9uX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2F1dGhlbnRpY2F0aW9uVHlwZSksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBzY2hlbWE6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NjaGVtYSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHhyYXlfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3hyYXlFbmFibGVkKSxcbiAgICAgIGFkZGl0aW9uYWxfYXV0aGVudGljYXRpb25fcHJvdmlkZXI6IGNka3RmLmxpc3RNYXBwZXIoYXBwc3luY0dyYXBocWxBcGlBZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlclRvVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9hZGRpdGlvbmFsQXV0aGVudGljYXRpb25Qcm92aWRlci5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGxhbWJkYV9hdXRob3JpemVyX2NvbmZpZzogYXBwc3luY0dyYXBocWxBcGlMYW1iZGFBdXRob3JpemVyQ29uZmlnVG9UZXJyYWZvcm0odGhpcy5fbGFtYmRhQXV0aG9yaXplckNvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGxvZ19jb25maWc6IGFwcHN5bmNHcmFwaHFsQXBpTG9nQ29uZmlnVG9UZXJyYWZvcm0odGhpcy5fbG9nQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgb3BlbmlkX2Nvbm5lY3RfY29uZmlnOiBhcHBzeW5jR3JhcGhxbEFwaU9wZW5pZENvbm5lY3RDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9vcGVuaWRDb25uZWN0Q29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgdXNlcl9wb29sX2NvbmZpZzogYXBwc3luY0dyYXBocWxBcGlVc2VyUG9vbENvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX3VzZXJQb29sQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgYXV0aGVudGljYXRpb25fdHlwZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fYXV0aGVudGljYXRpb25UeXBlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fc2NoZW1hKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgdGFnczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHRhZ3NfYWxsOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgeHJheV9lbmFibGVkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5feHJheUVuYWJsZWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgYWRkaXRpb25hbF9hdXRoZW50aWNhdGlvbl9wcm92aWRlcjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChhcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyVG9IY2xUZXJyYWZvcm0sIHRydWUpKHRoaXMuX2FkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBzeW5jR3JhcGhxbEFwaUFkZGl0aW9uYWxBdXRoZW50aWNhdGlvblByb3ZpZGVyTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGxhbWJkYV9hdXRob3JpemVyX2NvbmZpZzoge1xuICAgICAgICB2YWx1ZTogYXBwc3luY0dyYXBocWxBcGlMYW1iZGFBdXRob3JpemVyQ29uZmlnVG9IY2xUZXJyYWZvcm0odGhpcy5fbGFtYmRhQXV0aG9yaXplckNvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXBwc3luY0dyYXBocWxBcGlMYW1iZGFBdXRob3JpemVyQ29uZmlnTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGxvZ19jb25maWc6IHtcbiAgICAgICAgdmFsdWU6IGFwcHN5bmNHcmFwaHFsQXBpTG9nQ29uZmlnVG9IY2xUZXJyYWZvcm0odGhpcy5fbG9nQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBcHBzeW5jR3JhcGhxbEFwaUxvZ0NvbmZpZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBvcGVuaWRfY29ubmVjdF9jb25maWc6IHtcbiAgICAgICAgdmFsdWU6IGFwcHN5bmNHcmFwaHFsQXBpT3BlbmlkQ29ubmVjdENvbmZpZ1RvSGNsVGVycmFmb3JtKHRoaXMuX29wZW5pZENvbm5lY3RDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwcHN5bmNHcmFwaHFsQXBpT3BlbmlkQ29ubmVjdENvbmZpZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICB1c2VyX3Bvb2xfY29uZmlnOiB7XG4gICAgICAgIHZhbHVlOiBhcHBzeW5jR3JhcGhxbEFwaVVzZXJQb29sQ29uZmlnVG9IY2xUZXJyYWZvcm0odGhpcy5fdXNlclBvb2xDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFwcHN5bmNHcmFwaHFsQXBpVXNlclBvb2xDb25maWdMaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=