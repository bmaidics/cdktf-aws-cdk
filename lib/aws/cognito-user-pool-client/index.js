"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CognitoUserPoolClient = exports.CognitoUserPoolClientTokenValidityUnitsOutputReference = exports.cognitoUserPoolClientTokenValidityUnitsToHclTerraform = exports.cognitoUserPoolClientTokenValidityUnitsToTerraform = exports.CognitoUserPoolClientAnalyticsConfigurationOutputReference = exports.cognitoUserPoolClientAnalyticsConfigurationToHclTerraform = exports.cognitoUserPoolClientAnalyticsConfigurationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function cognitoUserPoolClientAnalyticsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        application_arn: cdktf.stringToTerraform(struct.applicationArn),
        application_id: cdktf.stringToTerraform(struct.applicationId),
        external_id: cdktf.stringToTerraform(struct.externalId),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        user_data_shared: cdktf.booleanToTerraform(struct.userDataShared),
    };
}
exports.cognitoUserPoolClientAnalyticsConfigurationToTerraform = cognitoUserPoolClientAnalyticsConfigurationToTerraform;
function cognitoUserPoolClientAnalyticsConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        application_arn: {
            value: cdktf.stringToHclTerraform(struct.applicationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        application_id: {
            value: cdktf.stringToHclTerraform(struct.applicationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        external_id: {
            value: cdktf.stringToHclTerraform(struct.externalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktf.stringToHclTerraform(struct.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_data_shared: {
            value: cdktf.booleanToHclTerraform(struct.userDataShared),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolClientAnalyticsConfigurationToHclTerraform = cognitoUserPoolClientAnalyticsConfigurationToHclTerraform;
class CognitoUserPoolClientAnalyticsConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._applicationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationArn = this._applicationArn;
        }
        if (this._applicationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationId = this._applicationId;
        }
        if (this._externalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalId = this._externalId;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._userDataShared !== undefined) {
            hasAnyValues = true;
            internalValueResult.userDataShared = this._userDataShared;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._applicationArn = undefined;
            this._applicationId = undefined;
            this._externalId = undefined;
            this._roleArn = undefined;
            this._userDataShared = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._applicationArn = value.applicationArn;
            this._applicationId = value.applicationId;
            this._externalId = value.externalId;
            this._roleArn = value.roleArn;
            this._userDataShared = value.userDataShared;
        }
    }
    get applicationArn() {
        return this.getStringAttribute('application_arn');
    }
    set applicationArn(value) {
        this._applicationArn = value;
    }
    resetApplicationArn() {
        this._applicationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationArnInput() {
        return this._applicationArn;
    }
    get applicationId() {
        return this.getStringAttribute('application_id');
    }
    set applicationId(value) {
        this._applicationId = value;
    }
    resetApplicationId() {
        this._applicationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationIdInput() {
        return this._applicationId;
    }
    get externalId() {
        return this.getStringAttribute('external_id');
    }
    set externalId(value) {
        this._externalId = value;
    }
    resetExternalId() {
        this._externalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get externalIdInput() {
        return this._externalId;
    }
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
    get userDataShared() {
        return this.getBooleanAttribute('user_data_shared');
    }
    set userDataShared(value) {
        this._userDataShared = value;
    }
    resetUserDataShared() {
        this._userDataShared = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userDataSharedInput() {
        return this._userDataShared;
    }
}
exports.CognitoUserPoolClientAnalyticsConfigurationOutputReference = CognitoUserPoolClientAnalyticsConfigurationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
CognitoUserPoolClientAnalyticsConfigurationOutputReference[_a] = { fqn: "@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference", version: "0.0.0" };
function cognitoUserPoolClientTokenValidityUnitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_token: cdktf.stringToTerraform(struct.accessToken),
        id_token: cdktf.stringToTerraform(struct.idToken),
        refresh_token: cdktf.stringToTerraform(struct.refreshToken),
    };
}
exports.cognitoUserPoolClientTokenValidityUnitsToTerraform = cognitoUserPoolClientTokenValidityUnitsToTerraform;
function cognitoUserPoolClientTokenValidityUnitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access_token: {
            value: cdktf.stringToHclTerraform(struct.accessToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id_token: {
            value: cdktf.stringToHclTerraform(struct.idToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        refresh_token: {
            value: cdktf.stringToHclTerraform(struct.refreshToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolClientTokenValidityUnitsToHclTerraform = cognitoUserPoolClientTokenValidityUnitsToHclTerraform;
class CognitoUserPoolClientTokenValidityUnitsOutputReference extends cdktf.ComplexObject {
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
        if (this._accessToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessToken = this._accessToken;
        }
        if (this._idToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.idToken = this._idToken;
        }
        if (this._refreshToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.refreshToken = this._refreshToken;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accessToken = undefined;
            this._idToken = undefined;
            this._refreshToken = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accessToken = value.accessToken;
            this._idToken = value.idToken;
            this._refreshToken = value.refreshToken;
        }
    }
    get accessToken() {
        return this.getStringAttribute('access_token');
    }
    set accessToken(value) {
        this._accessToken = value;
    }
    resetAccessToken() {
        this._accessToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessTokenInput() {
        return this._accessToken;
    }
    get idToken() {
        return this.getStringAttribute('id_token');
    }
    set idToken(value) {
        this._idToken = value;
    }
    resetIdToken() {
        this._idToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idTokenInput() {
        return this._idToken;
    }
    get refreshToken() {
        return this.getStringAttribute('refresh_token');
    }
    set refreshToken(value) {
        this._refreshToken = value;
    }
    resetRefreshToken() {
        this._refreshToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get refreshTokenInput() {
        return this._refreshToken;
    }
}
exports.CognitoUserPoolClientTokenValidityUnitsOutputReference = CognitoUserPoolClientTokenValidityUnitsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
CognitoUserPoolClientTokenValidityUnitsOutputReference[_b] = { fqn: "@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client aws_cognito_user_pool_client}
*/
class CognitoUserPoolClient extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CognitoUserPoolClient resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CognitoUserPoolClient to import
    * @param importFromId The id of the existing CognitoUserPoolClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CognitoUserPoolClient to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cognito_user_pool_client", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client aws_cognito_user_pool_client} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserPoolClientConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cognito_user_pool_client',
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
        // analytics_configuration - computed: false, optional: true, required: false
        this._analyticsConfiguration = new CognitoUserPoolClientAnalyticsConfigurationOutputReference(this, "analytics_configuration");
        // token_validity_units - computed: false, optional: true, required: false
        this._tokenValidityUnits = new CognitoUserPoolClientTokenValidityUnitsOutputReference(this, "token_validity_units");
        this._accessTokenValidity = config.accessTokenValidity;
        this._allowedOauthFlows = config.allowedOauthFlows;
        this._allowedOauthFlowsUserPoolClient = config.allowedOauthFlowsUserPoolClient;
        this._allowedOauthScopes = config.allowedOauthScopes;
        this._callbackUrls = config.callbackUrls;
        this._defaultRedirectUri = config.defaultRedirectUri;
        this._enableTokenRevocation = config.enableTokenRevocation;
        this._explicitAuthFlows = config.explicitAuthFlows;
        this._generateSecret = config.generateSecret;
        this._id = config.id;
        this._idTokenValidity = config.idTokenValidity;
        this._logoutUrls = config.logoutUrls;
        this._name = config.name;
        this._preventUserExistenceErrors = config.preventUserExistenceErrors;
        this._readAttributes = config.readAttributes;
        this._refreshTokenValidity = config.refreshTokenValidity;
        this._supportedIdentityProviders = config.supportedIdentityProviders;
        this._userPoolId = config.userPoolId;
        this._writeAttributes = config.writeAttributes;
        this._analyticsConfiguration.internalValue = config.analyticsConfiguration;
        this._tokenValidityUnits.internalValue = config.tokenValidityUnits;
    }
    get accessTokenValidity() {
        return this.getNumberAttribute('access_token_validity');
    }
    set accessTokenValidity(value) {
        this._accessTokenValidity = value;
    }
    resetAccessTokenValidity() {
        this._accessTokenValidity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessTokenValidityInput() {
        return this._accessTokenValidity;
    }
    get allowedOauthFlows() {
        return cdktf.Fn.tolist(this.getListAttribute('allowed_oauth_flows'));
    }
    set allowedOauthFlows(value) {
        this._allowedOauthFlows = value;
    }
    resetAllowedOauthFlows() {
        this._allowedOauthFlows = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedOauthFlowsInput() {
        return this._allowedOauthFlows;
    }
    get allowedOauthFlowsUserPoolClient() {
        return this.getBooleanAttribute('allowed_oauth_flows_user_pool_client');
    }
    set allowedOauthFlowsUserPoolClient(value) {
        this._allowedOauthFlowsUserPoolClient = value;
    }
    resetAllowedOauthFlowsUserPoolClient() {
        this._allowedOauthFlowsUserPoolClient = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedOauthFlowsUserPoolClientInput() {
        return this._allowedOauthFlowsUserPoolClient;
    }
    get allowedOauthScopes() {
        return cdktf.Fn.tolist(this.getListAttribute('allowed_oauth_scopes'));
    }
    set allowedOauthScopes(value) {
        this._allowedOauthScopes = value;
    }
    resetAllowedOauthScopes() {
        this._allowedOauthScopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedOauthScopesInput() {
        return this._allowedOauthScopes;
    }
    get callbackUrls() {
        return cdktf.Fn.tolist(this.getListAttribute('callback_urls'));
    }
    set callbackUrls(value) {
        this._callbackUrls = value;
    }
    resetCallbackUrls() {
        this._callbackUrls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get callbackUrlsInput() {
        return this._callbackUrls;
    }
    // client_secret - computed: true, optional: false, required: false
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    get defaultRedirectUri() {
        return this.getStringAttribute('default_redirect_uri');
    }
    set defaultRedirectUri(value) {
        this._defaultRedirectUri = value;
    }
    resetDefaultRedirectUri() {
        this._defaultRedirectUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultRedirectUriInput() {
        return this._defaultRedirectUri;
    }
    get enableTokenRevocation() {
        return this.getBooleanAttribute('enable_token_revocation');
    }
    set enableTokenRevocation(value) {
        this._enableTokenRevocation = value;
    }
    resetEnableTokenRevocation() {
        this._enableTokenRevocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableTokenRevocationInput() {
        return this._enableTokenRevocation;
    }
    get explicitAuthFlows() {
        return cdktf.Fn.tolist(this.getListAttribute('explicit_auth_flows'));
    }
    set explicitAuthFlows(value) {
        this._explicitAuthFlows = value;
    }
    resetExplicitAuthFlows() {
        this._explicitAuthFlows = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get explicitAuthFlowsInput() {
        return this._explicitAuthFlows;
    }
    get generateSecret() {
        return this.getBooleanAttribute('generate_secret');
    }
    set generateSecret(value) {
        this._generateSecret = value;
    }
    resetGenerateSecret() {
        this._generateSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get generateSecretInput() {
        return this._generateSecret;
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
    get idTokenValidity() {
        return this.getNumberAttribute('id_token_validity');
    }
    set idTokenValidity(value) {
        this._idTokenValidity = value;
    }
    resetIdTokenValidity() {
        this._idTokenValidity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idTokenValidityInput() {
        return this._idTokenValidity;
    }
    get logoutUrls() {
        return cdktf.Fn.tolist(this.getListAttribute('logout_urls'));
    }
    set logoutUrls(value) {
        this._logoutUrls = value;
    }
    resetLogoutUrls() {
        this._logoutUrls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logoutUrlsInput() {
        return this._logoutUrls;
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
    get preventUserExistenceErrors() {
        return this.getStringAttribute('prevent_user_existence_errors');
    }
    set preventUserExistenceErrors(value) {
        this._preventUserExistenceErrors = value;
    }
    resetPreventUserExistenceErrors() {
        this._preventUserExistenceErrors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preventUserExistenceErrorsInput() {
        return this._preventUserExistenceErrors;
    }
    get readAttributes() {
        return cdktf.Fn.tolist(this.getListAttribute('read_attributes'));
    }
    set readAttributes(value) {
        this._readAttributes = value;
    }
    resetReadAttributes() {
        this._readAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readAttributesInput() {
        return this._readAttributes;
    }
    get refreshTokenValidity() {
        return this.getNumberAttribute('refresh_token_validity');
    }
    set refreshTokenValidity(value) {
        this._refreshTokenValidity = value;
    }
    resetRefreshTokenValidity() {
        this._refreshTokenValidity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get refreshTokenValidityInput() {
        return this._refreshTokenValidity;
    }
    get supportedIdentityProviders() {
        return cdktf.Fn.tolist(this.getListAttribute('supported_identity_providers'));
    }
    set supportedIdentityProviders(value) {
        this._supportedIdentityProviders = value;
    }
    resetSupportedIdentityProviders() {
        this._supportedIdentityProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportedIdentityProvidersInput() {
        return this._supportedIdentityProviders;
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
    get writeAttributes() {
        return cdktf.Fn.tolist(this.getListAttribute('write_attributes'));
    }
    set writeAttributes(value) {
        this._writeAttributes = value;
    }
    resetWriteAttributes() {
        this._writeAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get writeAttributesInput() {
        return this._writeAttributes;
    }
    get analyticsConfiguration() {
        return this._analyticsConfiguration;
    }
    putAnalyticsConfiguration(value) {
        this._analyticsConfiguration.internalValue = value;
    }
    resetAnalyticsConfiguration() {
        this._analyticsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get analyticsConfigurationInput() {
        return this._analyticsConfiguration.internalValue;
    }
    get tokenValidityUnits() {
        return this._tokenValidityUnits;
    }
    putTokenValidityUnits(value) {
        this._tokenValidityUnits.internalValue = value;
    }
    resetTokenValidityUnits() {
        this._tokenValidityUnits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tokenValidityUnitsInput() {
        return this._tokenValidityUnits.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            access_token_validity: cdktf.numberToTerraform(this._accessTokenValidity),
            allowed_oauth_flows: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOauthFlows),
            allowed_oauth_flows_user_pool_client: cdktf.booleanToTerraform(this._allowedOauthFlowsUserPoolClient),
            allowed_oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOauthScopes),
            callback_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._callbackUrls),
            default_redirect_uri: cdktf.stringToTerraform(this._defaultRedirectUri),
            enable_token_revocation: cdktf.booleanToTerraform(this._enableTokenRevocation),
            explicit_auth_flows: cdktf.listMapper(cdktf.stringToTerraform, false)(this._explicitAuthFlows),
            generate_secret: cdktf.booleanToTerraform(this._generateSecret),
            id: cdktf.stringToTerraform(this._id),
            id_token_validity: cdktf.numberToTerraform(this._idTokenValidity),
            logout_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logoutUrls),
            name: cdktf.stringToTerraform(this._name),
            prevent_user_existence_errors: cdktf.stringToTerraform(this._preventUserExistenceErrors),
            read_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readAttributes),
            refresh_token_validity: cdktf.numberToTerraform(this._refreshTokenValidity),
            supported_identity_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedIdentityProviders),
            user_pool_id: cdktf.stringToTerraform(this._userPoolId),
            write_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._writeAttributes),
            analytics_configuration: cognitoUserPoolClientAnalyticsConfigurationToTerraform(this._analyticsConfiguration.internalValue),
            token_validity_units: cognitoUserPoolClientTokenValidityUnitsToTerraform(this._tokenValidityUnits.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            access_token_validity: {
                value: cdktf.numberToHclTerraform(this._accessTokenValidity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            allowed_oauth_flows: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedOauthFlows),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            allowed_oauth_flows_user_pool_client: {
                value: cdktf.booleanToHclTerraform(this._allowedOauthFlowsUserPoolClient),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allowed_oauth_scopes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedOauthScopes),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            callback_urls: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._callbackUrls),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            default_redirect_uri: {
                value: cdktf.stringToHclTerraform(this._defaultRedirectUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_token_revocation: {
                value: cdktf.booleanToHclTerraform(this._enableTokenRevocation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            explicit_auth_flows: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._explicitAuthFlows),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            generate_secret: {
                value: cdktf.booleanToHclTerraform(this._generateSecret),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id_token_validity: {
                value: cdktf.numberToHclTerraform(this._idTokenValidity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            logout_urls: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logoutUrls),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            prevent_user_existence_errors: {
                value: cdktf.stringToHclTerraform(this._preventUserExistenceErrors),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            read_attributes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._readAttributes),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            refresh_token_validity: {
                value: cdktf.numberToHclTerraform(this._refreshTokenValidity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            supported_identity_providers: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportedIdentityProviders),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            user_pool_id: {
                value: cdktf.stringToHclTerraform(this._userPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            write_attributes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._writeAttributes),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            analytics_configuration: {
                value: cognitoUserPoolClientAnalyticsConfigurationToHclTerraform(this._analyticsConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CognitoUserPoolClientAnalyticsConfigurationList",
            },
            token_validity_units: {
                value: cognitoUserPoolClientTokenValidityUnitsToHclTerraform(this._tokenValidityUnits.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CognitoUserPoolClientTokenValidityUnitsList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.CognitoUserPoolClient = CognitoUserPoolClient;
_c = JSII_RTTI_SYMBOL_1;
CognitoUserPoolClient[_c] = { fqn: "@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
CognitoUserPoolClient.tfResourceType = "aws_cognito_user_pool_client";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2NvZ25pdG8tdXNlci1wb29sLWNsaWVudC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQXdIL0IsU0FBZ0Isc0RBQXNELENBQUMsTUFBaUg7SUFDdEwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztRQUNoRSxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDOUQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztLQUNuRSxDQUFBO0FBQ0gsQ0FBQztBQVpELHdIQVlDO0FBR0QsU0FBZ0IseURBQXlELENBQUMsTUFBaUg7SUFDekwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxD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QUU7Z0JBQ3BCLEtBQUssRUFBRSxxREFBcUQsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO2dCQUNwRyxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSw2Q0FBNkM7YUFDaEU7U0FDRixDQUFDO1FBRUYsOEJBQThCO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQTVqQkgsc0RBNmpCQzs7O0FBM2pCQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLG9DQUFjLEdBQUcsOEJBQThCLEFBQWpDLENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2xfY2xpZW50XG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sQ2xpZW50Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sX2NsaWVudCNhY2Nlc3NfdG9rZW5fdmFsaWRpdHkgQ29nbml0b1VzZXJQb29sQ2xpZW50I2FjY2Vzc190b2tlbl92YWxpZGl0eX1cbiAgKi9cbiAgcmVhZG9ubHkgYWNjZXNzVG9rZW5WYWxpZGl0eT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2xfY2xpZW50I2FsbG93ZWRfb2F1dGhfZmxvd3MgQ29nbml0b1VzZXJQb29sQ2xpZW50I2FsbG93ZWRfb2F1dGhfZmxvd3N9XG4gICovXG4gIHJlYWRvbmx5IGFsbG93ZWRPYXV0aEZsb3dzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sX2NsaWVudCNhbGxvd2VkX29hdXRoX2Zsb3dzX3VzZXJfcG9vbF9jbGllbnQgQ29nbml0b1VzZXJQb29sQ2xpZW50I2FsbG93ZWRfb2F1dGhfZmxvd3NfdXNlcl9wb29sX2NsaWVudH1cbiAgKi9cbiAgcmVhZG9ubHkgYWxsb3dlZE9hdXRoRmxvd3NVc2VyUG9vbENsaWVudD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2xfY2xpZW50I2FsbG93ZWRfb2F1dGhfc2NvcGVzIENvZ25pdG9Vc2VyUG9vbENsaWVudCNhbGxvd2VkX29hdXRoX3Njb3Blc31cbiAgKi9cbiAgcmVhZG9ubHkgYWxsb3dlZE9hdXRoU2NvcGVzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sX2NsaWVudCNjYWxsYmFja191cmxzIENvZ25pdG9Vc2VyUG9vbENsaWVudCNjYWxsYmFja191cmxzfVxuICAqL1xuICByZWFkb25seSBjYWxsYmFja1VybHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2xfY2xpZW50I2RlZmF1bHRfcmVkaXJlY3RfdXJpIENvZ25pdG9Vc2VyUG9vbENsaWVudCNkZWZhdWx0X3JlZGlyZWN0X3VyaX1cbiAgKi9cbiAgcmVhZG9ubHkgZGVmYXVsdFJlZGlyZWN0VXJpPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbF9jbGllbnQjZW5hYmxlX3Rva2VuX3Jldm9jYXRpb24gQ29nbml0b1VzZXJQb29sQ2xpZW50I2VuYWJsZV90b2tlbl9yZXZvY2F0aW9ufVxuICAqL1xuICByZWFkb25seSBlbmFibGVUb2tlblJldm9jYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sX2NsaWVudCNleHBsaWNpdF9hdXRoX2Zsb3dzIENvZ25pdG9Vc2VyUG9vbENsaWVudCNleHBsaWNpdF9hdXRoX2Zsb3dzfVxuICAqL1xuICByZWFkb25seSBleHBsaWNpdEF1dGhGbG93cz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbF9jbGllbnQjZ2VuZXJhdGVfc2VjcmV0IENvZ25pdG9Vc2VyUG9vbENsaWVudCNnZW5lcmF0ZV9zZWNyZXR9XG4gICovXG4gIHJlYWRvbmx5IGdlbmVyYXRlU2VjcmV0PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbF9jbGllbnQjaWQgQ29nbml0b1VzZXJQb29sQ2xpZW50I2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbF9jbGllbnQjaWRfdG9rZW5fdmFsaWRpdHkgQ29nbml0b1VzZXJQb29sQ2xpZW50I2lkX3Rva2VuX3ZhbGlkaXR5fVxuICAqL1xuICByZWFkb25seSBpZFRva2VuVmFsaWRpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sX2NsaWVudCNsb2dvdXRfdXJscyBDb2duaXRvVXNlclBvb2xDbGllbnQjbG9nb3V0X3VybHN9XG4gICovXG4gIHJlYWRvbmx5IGxvZ291dFVybHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2xfY2xpZW50I25hbWUgQ29nbml0b1VzZXJQb29sQ2xpZW50I25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2xfY2xpZW50I3ByZXZlbnRfdXNlcl9leGlzdGVuY2VfZXJyb3JzIENvZ25pdG9Vc2VyUG9vbENsaWVudCNwcmV2ZW50X3VzZXJfZXhpc3RlbmNlX2Vycm9yc31cbiAgKi9cbiAgcmVhZG9ubHkgcHJldmVudFVzZXJFeGlzdGVuY2VFcnJvcnM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sX2NsaWVudCNyZWFkX2F0dHJpYnV0ZXMgQ29nbml0b1VzZXJQb29sQ2xpZW50I3JlYWRfYXR0cmlidXRlc31cbiAgKi9cbiAgcmVhZG9ubHkgcmVhZEF0dHJpYnV0ZXM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2xfY2xpZW50I3JlZnJlc2hfdG9rZW5fdmFsaWRpdHkgQ29nbml0b1VzZXJQb29sQ2xpZW50I3JlZnJlc2hfdG9rZW5fdmFsaWRpdHl9XG4gICovXG4gIHJlYWRvbmx5IHJlZnJlc2hUb2tlblZhbGlkaXR5PzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbF9jbGllbnQjc3VwcG9ydGVkX2lkZW50aXR5X3Byb3ZpZGVycyBDb2duaXRvVXNlclBvb2xDbGllbnQjc3VwcG9ydGVkX2lkZW50aXR5X3Byb3ZpZGVyc31cbiAgKi9cbiAgcmVhZG9ubHkgc3VwcG9ydGVkSWRlbnRpdHlQcm92aWRlcnM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2xfY2xpZW50I3VzZXJfcG9vbF9pZCBDb2duaXRvVXNlclBvb2xDbGllbnQjdXNlcl9wb29sX2lkfVxuICAqL1xuICByZWFkb25seSB1c2VyUG9vbElkOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sX2NsaWVudCN3cml0ZV9hdHRyaWJ1dGVzIENvZ25pdG9Vc2VyUG9vbENsaWVudCN3cml0ZV9hdHRyaWJ1dGVzfVxuICAqL1xuICByZWFkb25seSB3cml0ZUF0dHJpYnV0ZXM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogYW5hbHl0aWNzX2NvbmZpZ3VyYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sX2NsaWVudCNhbmFseXRpY3NfY29uZmlndXJhdGlvbiBDb2duaXRvVXNlclBvb2xDbGllbnQjYW5hbHl0aWNzX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGFuYWx5dGljc0NvbmZpZ3VyYXRpb24/OiBDb2duaXRvVXNlclBvb2xDbGllbnRBbmFseXRpY3NDb25maWd1cmF0aW9uO1xuICAvKipcbiAgKiB0b2tlbl92YWxpZGl0eV91bml0cyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2xfY2xpZW50I3Rva2VuX3ZhbGlkaXR5X3VuaXRzIENvZ25pdG9Vc2VyUG9vbENsaWVudCN0b2tlbl92YWxpZGl0eV91bml0c31cbiAgKi9cbiAgcmVhZG9ubHkgdG9rZW5WYWxpZGl0eVVuaXRzPzogQ29nbml0b1VzZXJQb29sQ2xpZW50VG9rZW5WYWxpZGl0eVVuaXRzO1xufVxuZXhwb3J0IGludGVyZmFjZSBDb2duaXRvVXNlclBvb2xDbGllbnRBbmFseXRpY3NDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2xfY2xpZW50I2FwcGxpY2F0aW9uX2FybiBDb2duaXRvVXNlclBvb2xDbGllbnQjYXBwbGljYXRpb25fYXJufVxuICAqL1xuICByZWFkb25seSBhcHBsaWNhdGlvbkFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2xfY2xpZW50I2FwcGxpY2F0aW9uX2lkIENvZ25pdG9Vc2VyUG9vbENsaWVudCNhcHBsaWNhdGlvbl9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgYXBwbGljYXRpb25JZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2xfY2xpZW50I2V4dGVybmFsX2lkIENvZ25pdG9Vc2VyUG9vbENsaWVudCNleHRlcm5hbF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgZXh0ZXJuYWxJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2xfY2xpZW50I3JvbGVfYXJuIENvZ25pdG9Vc2VyUG9vbENsaWVudCNyb2xlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgcm9sZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2xfY2xpZW50I3VzZXJfZGF0YV9zaGFyZWQgQ29nbml0b1VzZXJQb29sQ2xpZW50I3VzZXJfZGF0YV9zaGFyZWR9XG4gICovXG4gIHJlYWRvbmx5IHVzZXJEYXRhU2hhcmVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29nbml0b1VzZXJQb29sQ2xpZW50QW5hbHl0aWNzQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbENsaWVudEFuYWx5dGljc0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBDb2duaXRvVXNlclBvb2xDbGllbnRBbmFseXRpY3NDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFwcGxpY2F0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcHBsaWNhdGlvbkFybiksXG4gICAgYXBwbGljYXRpb25faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXBwbGljYXRpb25JZCksXG4gICAgZXh0ZXJuYWxfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXh0ZXJuYWxJZCksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgdXNlcl9kYXRhX3NoYXJlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEudXNlckRhdGFTaGFyZWQpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbENsaWVudEFuYWx5dGljc0NvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xDbGllbnRBbmFseXRpY3NDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQ29nbml0b1VzZXJQb29sQ2xpZW50QW5hbHl0aWNzQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYXBwbGljYXRpb25fYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hcHBsaWNhdGlvbkFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYXBwbGljYXRpb25faWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFwcGxpY2F0aW9uSWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGV4dGVybmFsX2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5leHRlcm5hbElkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICByb2xlX2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdXNlcl9kYXRhX3NoYXJlZDoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnVzZXJEYXRhU2hhcmVkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2xDbGllbnRBbmFseXRpY3NDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2duaXRvVXNlclBvb2xDbGllbnRBbmFseXRpY3NDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hcHBsaWNhdGlvbkFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hcHBsaWNhdGlvbkFybiA9IHRoaXMuX2FwcGxpY2F0aW9uQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXBwbGljYXRpb25JZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hcHBsaWNhdGlvbklkID0gdGhpcy5fYXBwbGljYXRpb25JZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2V4dGVybmFsSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZXh0ZXJuYWxJZCA9IHRoaXMuX2V4dGVybmFsSWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yb2xlQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJvbGVBcm4gPSB0aGlzLl9yb2xlQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlckRhdGFTaGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXNlckRhdGFTaGFyZWQgPSB0aGlzLl91c2VyRGF0YVNoYXJlZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZ25pdG9Vc2VyUG9vbENsaWVudEFuYWx5dGljc0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hcHBsaWNhdGlvbkFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uSWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9leHRlcm5hbElkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VzZXJEYXRhU2hhcmVkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hcHBsaWNhdGlvbkFybiA9IHZhbHVlLmFwcGxpY2F0aW9uQXJuO1xuICAgICAgdGhpcy5fYXBwbGljYXRpb25JZCA9IHZhbHVlLmFwcGxpY2F0aW9uSWQ7XG4gICAgICB0aGlzLl9leHRlcm5hbElkID0gdmFsdWUuZXh0ZXJuYWxJZDtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZS5yb2xlQXJuO1xuICAgICAgdGhpcy5fdXNlckRhdGFTaGFyZWQgPSB2YWx1ZS51c2VyRGF0YVNoYXJlZDtcbiAgICB9XG4gIH1cblxuICAvLyBhcHBsaWNhdGlvbl9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXBwbGljYXRpb25Bcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXBwbGljYXRpb25fYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcHBsaWNhdGlvbkFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25Bcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBcHBsaWNhdGlvbkFybigpIHtcbiAgICB0aGlzLl9hcHBsaWNhdGlvbkFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25Bcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb25Bcm47XG4gIH1cblxuICAvLyBhcHBsaWNhdGlvbl9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hcHBsaWNhdGlvbklkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhcHBsaWNhdGlvbklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXBwbGljYXRpb25faWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFwcGxpY2F0aW9uSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBcHBsaWNhdGlvbklkKCkge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb25JZDtcbiAgfVxuXG4gIC8vIGV4dGVybmFsX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4dGVybmFsSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV4dGVybmFsSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleHRlcm5hbF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXh0ZXJuYWxJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXh0ZXJuYWxJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4dGVybmFsSWQoKSB7XG4gICAgdGhpcy5fZXh0ZXJuYWxJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXh0ZXJuYWxJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leHRlcm5hbElkO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSb2xlQXJuKCkge1xuICAgIHRoaXMuX3JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZUFybjtcbiAgfVxuXG4gIC8vIHVzZXJfZGF0YV9zaGFyZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlckRhdGFTaGFyZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHVzZXJEYXRhU2hhcmVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3VzZXJfZGF0YV9zaGFyZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZXJEYXRhU2hhcmVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl91c2VyRGF0YVNoYXJlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJEYXRhU2hhcmVkKCkge1xuICAgIHRoaXMuX3VzZXJEYXRhU2hhcmVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VyRGF0YVNoYXJlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyRGF0YVNoYXJlZDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2duaXRvVXNlclBvb2xDbGllbnRUb2tlblZhbGlkaXR5VW5pdHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbF9jbGllbnQjYWNjZXNzX3Rva2VuIENvZ25pdG9Vc2VyUG9vbENsaWVudCNhY2Nlc3NfdG9rZW59XG4gICovXG4gIHJlYWRvbmx5IGFjY2Vzc1Rva2VuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbF9jbGllbnQjaWRfdG9rZW4gQ29nbml0b1VzZXJQb29sQ2xpZW50I2lkX3Rva2VufVxuICAqL1xuICByZWFkb25seSBpZFRva2VuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbF9jbGllbnQjcmVmcmVzaF90b2tlbiBDb2duaXRvVXNlclBvb2xDbGllbnQjcmVmcmVzaF90b2tlbn1cbiAgKi9cbiAgcmVhZG9ubHkgcmVmcmVzaFRva2VuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29nbml0b1VzZXJQb29sQ2xpZW50VG9rZW5WYWxpZGl0eVVuaXRzVG9UZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sQ2xpZW50VG9rZW5WYWxpZGl0eVVuaXRzT3V0cHV0UmVmZXJlbmNlIHwgQ29nbml0b1VzZXJQb29sQ2xpZW50VG9rZW5WYWxpZGl0eVVuaXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjY2Vzc190b2tlbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NUb2tlbiksXG4gICAgaWRfdG9rZW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWRUb2tlbiksXG4gICAgcmVmcmVzaF90b2tlbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWZyZXNoVG9rZW4pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbENsaWVudFRva2VuVmFsaWRpdHlVbml0c1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbENsaWVudFRva2VuVmFsaWRpdHlVbml0c091dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbENsaWVudFRva2VuVmFsaWRpdHlVbml0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYWNjZXNzX3Rva2VuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NUb2tlbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaWRfdG9rZW46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlkVG9rZW4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHJlZnJlc2hfdG9rZW46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlZnJlc2hUb2tlbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2xDbGllbnRUb2tlblZhbGlkaXR5VW5pdHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZ25pdG9Vc2VyUG9vbENsaWVudFRva2VuVmFsaWRpdHlVbml0cyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWNjZXNzVG9rZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWNjZXNzVG9rZW4gPSB0aGlzLl9hY2Nlc3NUb2tlbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lkVG9rZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaWRUb2tlbiA9IHRoaXMuX2lkVG9rZW47XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWZyZXNoVG9rZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVmcmVzaFRva2VuID0gdGhpcy5fcmVmcmVzaFRva2VuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29nbml0b1VzZXJQb29sQ2xpZW50VG9rZW5WYWxpZGl0eVVuaXRzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWNjZXNzVG9rZW4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pZFRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVmcmVzaFRva2VuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hY2Nlc3NUb2tlbiA9IHZhbHVlLmFjY2Vzc1Rva2VuO1xuICAgICAgdGhpcy5faWRUb2tlbiA9IHZhbHVlLmlkVG9rZW47XG4gICAgICB0aGlzLl9yZWZyZXNoVG9rZW4gPSB2YWx1ZS5yZWZyZXNoVG9rZW47XG4gICAgfVxuICB9XG5cbiAgLy8gYWNjZXNzX3Rva2VuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjY2Vzc1Rva2VuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhY2Nlc3NUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjY2Vzc190b2tlbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWNjZXNzVG9rZW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjY2Vzc1Rva2VuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjZXNzVG9rZW4oKSB7XG4gICAgdGhpcy5fYWNjZXNzVG9rZW4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY2Vzc1Rva2VuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc1Rva2VuO1xuICB9XG5cbiAgLy8gaWRfdG9rZW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWRUb2tlbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkX3Rva2VuJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZFRva2VuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZFRva2VuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWRUb2tlbigpIHtcbiAgICB0aGlzLl9pZFRva2VuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZFRva2VuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkVG9rZW47XG4gIH1cblxuICAvLyByZWZyZXNoX3Rva2VuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlZnJlc2hUb2tlbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVmcmVzaFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVmcmVzaF90b2tlbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVmcmVzaFRva2VuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWZyZXNoVG9rZW4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWZyZXNoVG9rZW4oKSB7XG4gICAgdGhpcy5fcmVmcmVzaFRva2VuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWZyZXNoVG9rZW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVmcmVzaFRva2VuO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbF9jbGllbnQgYXdzX2NvZ25pdG9fdXNlcl9wb29sX2NsaWVudH1cbiovXG5leHBvcnQgY2xhc3MgQ29nbml0b1VzZXJQb29sQ2xpZW50IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19jb2duaXRvX3VzZXJfcG9vbF9jbGllbnRcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgQ29nbml0b1VzZXJQb29sQ2xpZW50IHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIENvZ25pdG9Vc2VyUG9vbENsaWVudCB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgQ29nbml0b1VzZXJQb29sQ2xpZW50IHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbF9jbGllbnQjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIENvZ25pdG9Vc2VyUG9vbENsaWVudCB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfY29nbml0b191c2VyX3Bvb2xfY2xpZW50XCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2xfY2xpZW50IGF3c19jb2duaXRvX3VzZXJfcG9vbF9jbGllbnR9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIENvZ25pdG9Vc2VyUG9vbENsaWVudENvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBDb2duaXRvVXNlclBvb2xDbGllbnRDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19jb2duaXRvX3VzZXJfcG9vbF9jbGllbnQnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9hY2Nlc3NUb2tlblZhbGlkaXR5ID0gY29uZmlnLmFjY2Vzc1Rva2VuVmFsaWRpdHk7XG4gICAgdGhpcy5fYWxsb3dlZE9hdXRoRmxvd3MgPSBjb25maWcuYWxsb3dlZE9hdXRoRmxvd3M7XG4gICAgdGhpcy5fYWxsb3dlZE9hdXRoRmxvd3NVc2VyUG9vbENsaWVudCA9IGNvbmZpZy5hbGxvd2VkT2F1dGhGbG93c1VzZXJQb29sQ2xpZW50O1xuICAgIHRoaXMuX2FsbG93ZWRPYXV0aFNjb3BlcyA9IGNvbmZpZy5hbGxvd2VkT2F1dGhTY29wZXM7XG4gICAgdGhpcy5fY2FsbGJhY2tVcmxzID0gY29uZmlnLmNhbGxiYWNrVXJscztcbiAgICB0aGlzLl9kZWZhdWx0UmVkaXJlY3RVcmkgPSBjb25maWcuZGVmYXVsdFJlZGlyZWN0VXJpO1xuICAgIHRoaXMuX2VuYWJsZVRva2VuUmV2b2NhdGlvbiA9IGNvbmZpZy5lbmFibGVUb2tlblJldm9jYXRpb247XG4gICAgdGhpcy5fZXhwbGljaXRBdXRoRmxvd3MgPSBjb25maWcuZXhwbGljaXRBdXRoRmxvd3M7XG4gICAgdGhpcy5fZ2VuZXJhdGVTZWNyZXQgPSBjb25maWcuZ2VuZXJhdGVTZWNyZXQ7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gICAgdGhpcy5faWRUb2tlblZhbGlkaXR5ID0gY29uZmlnLmlkVG9rZW5WYWxpZGl0eTtcbiAgICB0aGlzLl9sb2dvdXRVcmxzID0gY29uZmlnLmxvZ291dFVybHM7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3ByZXZlbnRVc2VyRXhpc3RlbmNlRXJyb3JzID0gY29uZmlnLnByZXZlbnRVc2VyRXhpc3RlbmNlRXJyb3JzO1xuICAgIHRoaXMuX3JlYWRBdHRyaWJ1dGVzID0gY29uZmlnLnJlYWRBdHRyaWJ1dGVzO1xuICAgIHRoaXMuX3JlZnJlc2hUb2tlblZhbGlkaXR5ID0gY29uZmlnLnJlZnJlc2hUb2tlblZhbGlkaXR5O1xuICAgIHRoaXMuX3N1cHBvcnRlZElkZW50aXR5UHJvdmlkZXJzID0gY29uZmlnLnN1cHBvcnRlZElkZW50aXR5UHJvdmlkZXJzO1xuICAgIHRoaXMuX3VzZXJQb29sSWQgPSBjb25maWcudXNlclBvb2xJZDtcbiAgICB0aGlzLl93cml0ZUF0dHJpYnV0ZXMgPSBjb25maWcud3JpdGVBdHRyaWJ1dGVzO1xuICAgIHRoaXMuX2FuYWx5dGljc0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5hbmFseXRpY3NDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3Rva2VuVmFsaWRpdHlVbml0cy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnRva2VuVmFsaWRpdHlVbml0cztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWNjZXNzX3Rva2VuX3ZhbGlkaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjY2Vzc1Rva2VuVmFsaWRpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGFjY2Vzc1Rva2VuVmFsaWRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdhY2Nlc3NfdG9rZW5fdmFsaWRpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjY2Vzc1Rva2VuVmFsaWRpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2FjY2Vzc1Rva2VuVmFsaWRpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2Nlc3NUb2tlblZhbGlkaXR5KCkge1xuICAgIHRoaXMuX2FjY2Vzc1Rva2VuVmFsaWRpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY2Vzc1Rva2VuVmFsaWRpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzVG9rZW5WYWxpZGl0eTtcbiAgfVxuXG4gIC8vIGFsbG93ZWRfb2F1dGhfZmxvd3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dlZE9hdXRoRmxvd3M/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgYWxsb3dlZE9hdXRoRmxvd3MoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2FsbG93ZWRfb2F1dGhfZmxvd3MnKSk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd2VkT2F1dGhGbG93cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hbGxvd2VkT2F1dGhGbG93cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG93ZWRPYXV0aEZsb3dzKCkge1xuICAgIHRoaXMuX2FsbG93ZWRPYXV0aEZsb3dzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd2VkT2F1dGhGbG93c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd2VkT2F1dGhGbG93cztcbiAgfVxuXG4gIC8vIGFsbG93ZWRfb2F1dGhfZmxvd3NfdXNlcl9wb29sX2NsaWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd2VkT2F1dGhGbG93c1VzZXJQb29sQ2xpZW50PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhbGxvd2VkT2F1dGhGbG93c1VzZXJQb29sQ2xpZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2FsbG93ZWRfb2F1dGhfZmxvd3NfdXNlcl9wb29sX2NsaWVudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb3dlZE9hdXRoRmxvd3NVc2VyUG9vbENsaWVudCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYWxsb3dlZE9hdXRoRmxvd3NVc2VyUG9vbENsaWVudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG93ZWRPYXV0aEZsb3dzVXNlclBvb2xDbGllbnQoKSB7XG4gICAgdGhpcy5fYWxsb3dlZE9hdXRoRmxvd3NVc2VyUG9vbENsaWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb3dlZE9hdXRoRmxvd3NVc2VyUG9vbENsaWVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd2VkT2F1dGhGbG93c1VzZXJQb29sQ2xpZW50O1xuICB9XG5cbiAgLy8gYWxsb3dlZF9vYXV0aF9zY29wZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dlZE9hdXRoU2NvcGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGFsbG93ZWRPYXV0aFNjb3BlcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWxsb3dlZF9vYXV0aF9zY29wZXMnKSk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd2VkT2F1dGhTY29wZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYWxsb3dlZE9hdXRoU2NvcGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb3dlZE9hdXRoU2NvcGVzKCkge1xuICAgIHRoaXMuX2FsbG93ZWRPYXV0aFNjb3BlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb3dlZE9hdXRoU2NvcGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93ZWRPYXV0aFNjb3BlcztcbiAgfVxuXG4gIC8vIGNhbGxiYWNrX3VybHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYWxsYmFja1VybHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY2FsbGJhY2tVcmxzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjYWxsYmFja191cmxzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2FsbGJhY2tVcmxzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2NhbGxiYWNrVXJscyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhbGxiYWNrVXJscygpIHtcbiAgICB0aGlzLl9jYWxsYmFja1VybHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhbGxiYWNrVXJsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYWxsYmFja1VybHM7XG4gIH1cblxuICAvLyBjbGllbnRfc2VjcmV0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xpZW50U2VjcmV0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2xpZW50X3NlY3JldCcpO1xuICB9XG5cbiAgLy8gZGVmYXVsdF9yZWRpcmVjdF91cmkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVmYXVsdFJlZGlyZWN0VXJpPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWZhdWx0UmVkaXJlY3RVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWZhdWx0X3JlZGlyZWN0X3VyaScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdFJlZGlyZWN0VXJpKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0UmVkaXJlY3RVcmkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWZhdWx0UmVkaXJlY3RVcmkoKSB7XG4gICAgdGhpcy5fZGVmYXVsdFJlZGlyZWN0VXJpID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0UmVkaXJlY3RVcmlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFJlZGlyZWN0VXJpO1xuICB9XG5cbiAgLy8gZW5hYmxlX3Rva2VuX3Jldm9jYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVUb2tlblJldm9jYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZVRva2VuUmV2b2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfdG9rZW5fcmV2b2NhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlVG9rZW5SZXZvY2F0aW9uKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVUb2tlblJldm9jYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVUb2tlblJldm9jYXRpb24oKSB7XG4gICAgdGhpcy5fZW5hYmxlVG9rZW5SZXZvY2F0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVUb2tlblJldm9jYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlVG9rZW5SZXZvY2F0aW9uO1xuICB9XG5cbiAgLy8gZXhwbGljaXRfYXV0aF9mbG93cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leHBsaWNpdEF1dGhGbG93cz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBleHBsaWNpdEF1dGhGbG93cygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZXhwbGljaXRfYXV0aF9mbG93cycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4cGxpY2l0QXV0aEZsb3dzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2V4cGxpY2l0QXV0aEZsb3dzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXhwbGljaXRBdXRoRmxvd3MoKSB7XG4gICAgdGhpcy5fZXhwbGljaXRBdXRoRmxvd3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4cGxpY2l0QXV0aEZsb3dzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGxpY2l0QXV0aEZsb3dzO1xuICB9XG5cbiAgLy8gZ2VuZXJhdGVfc2VjcmV0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dlbmVyYXRlU2VjcmV0PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBnZW5lcmF0ZVNlY3JldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdnZW5lcmF0ZV9zZWNyZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGdlbmVyYXRlU2VjcmV0KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9nZW5lcmF0ZVNlY3JldCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdlbmVyYXRlU2VjcmV0KCkge1xuICAgIHRoaXMuX2dlbmVyYXRlU2VjcmV0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBnZW5lcmF0ZVNlY3JldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9nZW5lcmF0ZVNlY3JldDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIGlkX3Rva2VuX3ZhbGlkaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkVG9rZW5WYWxpZGl0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgaWRUb2tlblZhbGlkaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaWRfdG9rZW5fdmFsaWRpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkVG9rZW5WYWxpZGl0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faWRUb2tlblZhbGlkaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWRUb2tlblZhbGlkaXR5KCkge1xuICAgIHRoaXMuX2lkVG9rZW5WYWxpZGl0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRUb2tlblZhbGlkaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkVG9rZW5WYWxpZGl0eTtcbiAgfVxuXG4gIC8vIGxvZ291dF91cmxzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9nb3V0VXJscz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBsb2dvdXRVcmxzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdsb2dvdXRfdXJscycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ291dFVybHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fbG9nb3V0VXJscyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvZ291dFVybHMoKSB7XG4gICAgdGhpcy5fbG9nb3V0VXJscyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nb3V0VXJsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2dvdXRVcmxzO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBwcmV2ZW50X3VzZXJfZXhpc3RlbmNlX2Vycm9ycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZXZlbnRVc2VyRXhpc3RlbmNlRXJyb3JzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmV2ZW50VXNlckV4aXN0ZW5jZUVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZXZlbnRfdXNlcl9leGlzdGVuY2VfZXJyb3JzJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmV2ZW50VXNlckV4aXN0ZW5jZUVycm9ycyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJldmVudFVzZXJFeGlzdGVuY2VFcnJvcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmV2ZW50VXNlckV4aXN0ZW5jZUVycm9ycygpIHtcbiAgICB0aGlzLl9wcmV2ZW50VXNlckV4aXN0ZW5jZUVycm9ycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJldmVudFVzZXJFeGlzdGVuY2VFcnJvcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJldmVudFVzZXJFeGlzdGVuY2VFcnJvcnM7XG4gIH1cblxuICAvLyByZWFkX2F0dHJpYnV0ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVhZEF0dHJpYnV0ZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgcmVhZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3JlYWRfYXR0cmlidXRlcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlYWRBdHRyaWJ1dGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3JlYWRBdHRyaWJ1dGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVhZEF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5fcmVhZEF0dHJpYnV0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlYWRBdHRyaWJ1dGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRBdHRyaWJ1dGVzO1xuICB9XG5cbiAgLy8gcmVmcmVzaF90b2tlbl92YWxpZGl0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWZyZXNoVG9rZW5WYWxpZGl0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcmVmcmVzaFRva2VuVmFsaWRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdyZWZyZXNoX3Rva2VuX3ZhbGlkaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCByZWZyZXNoVG9rZW5WYWxpZGl0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcmVmcmVzaFRva2VuVmFsaWRpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWZyZXNoVG9rZW5WYWxpZGl0eSgpIHtcbiAgICB0aGlzLl9yZWZyZXNoVG9rZW5WYWxpZGl0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVmcmVzaFRva2VuVmFsaWRpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVmcmVzaFRva2VuVmFsaWRpdHk7XG4gIH1cblxuICAvLyBzdXBwb3J0ZWRfaWRlbnRpdHlfcHJvdmlkZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1cHBvcnRlZElkZW50aXR5UHJvdmlkZXJzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZElkZW50aXR5UHJvdmlkZXJzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdXBwb3J0ZWRfaWRlbnRpdHlfcHJvdmlkZXJzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VwcG9ydGVkSWRlbnRpdHlQcm92aWRlcnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3VwcG9ydGVkSWRlbnRpdHlQcm92aWRlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdXBwb3J0ZWRJZGVudGl0eVByb3ZpZGVycygpIHtcbiAgICB0aGlzLl9zdXBwb3J0ZWRJZGVudGl0eVByb3ZpZGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VwcG9ydGVkSWRlbnRpdHlQcm92aWRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VwcG9ydGVkSWRlbnRpdHlQcm92aWRlcnM7XG4gIH1cblxuICAvLyB1c2VyX3Bvb2xfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdXNlclBvb2xJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXNlclBvb2xJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzZXJfcG9vbF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlclBvb2xJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlclBvb2xJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VyUG9vbElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJQb29sSWQ7XG4gIH1cblxuICAvLyB3cml0ZV9hdHRyaWJ1dGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3dyaXRlQXR0cmlidXRlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB3cml0ZUF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3dyaXRlX2F0dHJpYnV0ZXMnKSk7XG4gIH1cbiAgcHVibGljIHNldCB3cml0ZUF0dHJpYnV0ZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fd3JpdGVBdHRyaWJ1dGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V3JpdGVBdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuX3dyaXRlQXR0cmlidXRlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd3JpdGVBdHRyaWJ1dGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dyaXRlQXR0cmlidXRlcztcbiAgfVxuXG4gIC8vIGFuYWx5dGljc19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FuYWx5dGljc0NvbmZpZ3VyYXRpb24gPSBuZXcgQ29nbml0b1VzZXJQb29sQ2xpZW50QW5hbHl0aWNzQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImFuYWx5dGljc19jb25maWd1cmF0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGFuYWx5dGljc0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FuYWx5dGljc0NvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEFuYWx5dGljc0NvbmZpZ3VyYXRpb24odmFsdWU6IENvZ25pdG9Vc2VyUG9vbENsaWVudEFuYWx5dGljc0NvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9hbmFseXRpY3NDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbmFseXRpY3NDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2FuYWx5dGljc0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYW5hbHl0aWNzQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbmFseXRpY3NDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0b2tlbl92YWxpZGl0eV91bml0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90b2tlblZhbGlkaXR5VW5pdHMgPSBuZXcgQ29nbml0b1VzZXJQb29sQ2xpZW50VG9rZW5WYWxpZGl0eVVuaXRzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwidG9rZW5fdmFsaWRpdHlfdW5pdHNcIik7XG4gIHB1YmxpYyBnZXQgdG9rZW5WYWxpZGl0eVVuaXRzKCkge1xuICAgIHJldHVybiB0aGlzLl90b2tlblZhbGlkaXR5VW5pdHM7XG4gIH1cbiAgcHVibGljIHB1dFRva2VuVmFsaWRpdHlVbml0cyh2YWx1ZTogQ29nbml0b1VzZXJQb29sQ2xpZW50VG9rZW5WYWxpZGl0eVVuaXRzKSB7XG4gICAgdGhpcy5fdG9rZW5WYWxpZGl0eVVuaXRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUb2tlblZhbGlkaXR5VW5pdHMoKSB7XG4gICAgdGhpcy5fdG9rZW5WYWxpZGl0eVVuaXRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRva2VuVmFsaWRpdHlVbml0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90b2tlblZhbGlkaXR5VW5pdHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWNjZXNzX3Rva2VuX3ZhbGlkaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9hY2Nlc3NUb2tlblZhbGlkaXR5KSxcbiAgICAgIGFsbG93ZWRfb2F1dGhfZmxvd3M6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9hbGxvd2VkT2F1dGhGbG93cyksXG4gICAgICBhbGxvd2VkX29hdXRoX2Zsb3dzX3VzZXJfcG9vbF9jbGllbnQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hbGxvd2VkT2F1dGhGbG93c1VzZXJQb29sQ2xpZW50KSxcbiAgICAgIGFsbG93ZWRfb2F1dGhfc2NvcGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fYWxsb3dlZE9hdXRoU2NvcGVzKSxcbiAgICAgIGNhbGxiYWNrX3VybHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9jYWxsYmFja1VybHMpLFxuICAgICAgZGVmYXVsdF9yZWRpcmVjdF91cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RlZmF1bHRSZWRpcmVjdFVyaSksXG4gICAgICBlbmFibGVfdG9rZW5fcmV2b2NhdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2VuYWJsZVRva2VuUmV2b2NhdGlvbiksXG4gICAgICBleHBsaWNpdF9hdXRoX2Zsb3dzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fZXhwbGljaXRBdXRoRmxvd3MpLFxuICAgICAgZ2VuZXJhdGVfc2VjcmV0OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZ2VuZXJhdGVTZWNyZXQpLFxuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIGlkX3Rva2VuX3ZhbGlkaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9pZFRva2VuVmFsaWRpdHkpLFxuICAgICAgbG9nb3V0X3VybHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9sb2dvdXRVcmxzKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgcHJldmVudF91c2VyX2V4aXN0ZW5jZV9lcnJvcnM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ByZXZlbnRVc2VyRXhpc3RlbmNlRXJyb3JzKSxcbiAgICAgIHJlYWRfYXR0cmlidXRlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3JlYWRBdHRyaWJ1dGVzKSxcbiAgICAgIHJlZnJlc2hfdG9rZW5fdmFsaWRpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3JlZnJlc2hUb2tlblZhbGlkaXR5KSxcbiAgICAgIHN1cHBvcnRlZF9pZGVudGl0eV9wcm92aWRlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9zdXBwb3J0ZWRJZGVudGl0eVByb3ZpZGVycyksXG4gICAgICB1c2VyX3Bvb2xfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3VzZXJQb29sSWQpLFxuICAgICAgd3JpdGVfYXR0cmlidXRlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3dyaXRlQXR0cmlidXRlcyksXG4gICAgICBhbmFseXRpY3NfY29uZmlndXJhdGlvbjogY29nbml0b1VzZXJQb29sQ2xpZW50QW5hbHl0aWNzQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2FuYWx5dGljc0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0b2tlbl92YWxpZGl0eV91bml0czogY29nbml0b1VzZXJQb29sQ2xpZW50VG9rZW5WYWxpZGl0eVVuaXRzVG9UZXJyYWZvcm0odGhpcy5fdG9rZW5WYWxpZGl0eVVuaXRzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgYWNjZXNzX3Rva2VuX3ZhbGlkaXR5OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9hY2Nlc3NUb2tlblZhbGlkaXR5KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgYWxsb3dlZF9vYXV0aF9mbG93czoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2FsbG93ZWRPYXV0aEZsb3dzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGFsbG93ZWRfb2F1dGhfZmxvd3NfdXNlcl9wb29sX2NsaWVudDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX2FsbG93ZWRPYXV0aEZsb3dzVXNlclBvb2xDbGllbnQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgYWxsb3dlZF9vYXV0aF9zY29wZXM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9hbGxvd2VkT2F1dGhTY29wZXMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgY2FsbGJhY2tfdXJsczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2NhbGxiYWNrVXJscyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0X3JlZGlyZWN0X3VyaToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZGVmYXVsdFJlZGlyZWN0VXJpKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgZW5hYmxlX3Rva2VuX3Jldm9jYXRpb246IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9lbmFibGVUb2tlblJldm9jYXRpb24pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgZXhwbGljaXRfYXV0aF9mbG93czoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2V4cGxpY2l0QXV0aEZsb3dzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGdlbmVyYXRlX3NlY3JldDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX2dlbmVyYXRlU2VjcmV0KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGlkX3Rva2VuX3ZhbGlkaXR5OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZFRva2VuVmFsaWRpdHkpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBsb2dvdXRfdXJsczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2xvZ291dFVybHMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHByZXZlbnRfdXNlcl9leGlzdGVuY2VfZXJyb3JzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9wcmV2ZW50VXNlckV4aXN0ZW5jZUVycm9ycyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHJlYWRfYXR0cmlidXRlczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3JlYWRBdHRyaWJ1dGVzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHJlZnJlc2hfdG9rZW5fdmFsaWRpdHk6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX3JlZnJlc2hUb2tlblZhbGlkaXR5KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgc3VwcG9ydGVkX2lkZW50aXR5X3Byb3ZpZGVyczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3N1cHBvcnRlZElkZW50aXR5UHJvdmlkZXJzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHVzZXJfcG9vbF9pZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fdXNlclBvb2xJZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHdyaXRlX2F0dHJpYnV0ZXM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl93cml0ZUF0dHJpYnV0ZXMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgYW5hbHl0aWNzX2NvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgdmFsdWU6IGNvZ25pdG9Vc2VyUG9vbENsaWVudEFuYWx5dGljc0NvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybSh0aGlzLl9hbmFseXRpY3NDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDb2duaXRvVXNlclBvb2xDbGllbnRBbmFseXRpY3NDb25maWd1cmF0aW9uTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHRva2VuX3ZhbGlkaXR5X3VuaXRzOiB7XG4gICAgICAgIHZhbHVlOiBjb2duaXRvVXNlclBvb2xDbGllbnRUb2tlblZhbGlkaXR5VW5pdHNUb0hjbFRlcnJhZm9ybSh0aGlzLl90b2tlblZhbGlkaXR5VW5pdHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNvZ25pdG9Vc2VyUG9vbENsaWVudFRva2VuVmFsaWRpdHlVbml0c0xpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==