"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbListener = exports.AlbListenerTimeoutsOutputReference = exports.albListenerTimeoutsToHclTerraform = exports.albListenerTimeoutsToTerraform = exports.AlbListenerDefaultActionList = exports.AlbListenerDefaultActionOutputReference = exports.albListenerDefaultActionToHclTerraform = exports.albListenerDefaultActionToTerraform = exports.AlbListenerDefaultActionRedirectOutputReference = exports.albListenerDefaultActionRedirectToHclTerraform = exports.albListenerDefaultActionRedirectToTerraform = exports.AlbListenerDefaultActionForwardOutputReference = exports.albListenerDefaultActionForwardToHclTerraform = exports.albListenerDefaultActionForwardToTerraform = exports.AlbListenerDefaultActionForwardTargetGroupList = exports.AlbListenerDefaultActionForwardTargetGroupOutputReference = exports.albListenerDefaultActionForwardTargetGroupToHclTerraform = exports.albListenerDefaultActionForwardTargetGroupToTerraform = exports.AlbListenerDefaultActionForwardStickinessOutputReference = exports.albListenerDefaultActionForwardStickinessToHclTerraform = exports.albListenerDefaultActionForwardStickinessToTerraform = exports.AlbListenerDefaultActionFixedResponseOutputReference = exports.albListenerDefaultActionFixedResponseToHclTerraform = exports.albListenerDefaultActionFixedResponseToTerraform = exports.AlbListenerDefaultActionAuthenticateOidcOutputReference = exports.albListenerDefaultActionAuthenticateOidcToHclTerraform = exports.albListenerDefaultActionAuthenticateOidcToTerraform = exports.AlbListenerDefaultActionAuthenticateCognitoOutputReference = exports.albListenerDefaultActionAuthenticateCognitoToHclTerraform = exports.albListenerDefaultActionAuthenticateCognitoToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function albListenerDefaultActionAuthenticateCognitoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authentication_request_extra_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct.authenticationRequestExtraParams),
        on_unauthenticated_request: cdktf.stringToTerraform(struct.onUnauthenticatedRequest),
        scope: cdktf.stringToTerraform(struct.scope),
        session_cookie_name: cdktf.stringToTerraform(struct.sessionCookieName),
        session_timeout: cdktf.numberToTerraform(struct.sessionTimeout),
        user_pool_arn: cdktf.stringToTerraform(struct.userPoolArn),
        user_pool_client_id: cdktf.stringToTerraform(struct.userPoolClientId),
        user_pool_domain: cdktf.stringToTerraform(struct.userPoolDomain),
    };
}
exports.albListenerDefaultActionAuthenticateCognitoToTerraform = albListenerDefaultActionAuthenticateCognitoToTerraform;
function albListenerDefaultActionAuthenticateCognitoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        authentication_request_extra_params: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.authenticationRequestExtraParams),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        on_unauthenticated_request: {
            value: cdktf.stringToHclTerraform(struct.onUnauthenticatedRequest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope: {
            value: cdktf.stringToHclTerraform(struct.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_cookie_name: {
            value: cdktf.stringToHclTerraform(struct.sessionCookieName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_timeout: {
            value: cdktf.numberToHclTerraform(struct.sessionTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        user_pool_arn: {
            value: cdktf.stringToHclTerraform(struct.userPoolArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_pool_client_id: {
            value: cdktf.stringToHclTerraform(struct.userPoolClientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_pool_domain: {
            value: cdktf.stringToHclTerraform(struct.userPoolDomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.albListenerDefaultActionAuthenticateCognitoToHclTerraform = albListenerDefaultActionAuthenticateCognitoToHclTerraform;
class AlbListenerDefaultActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
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
        if (this._authenticationRequestExtraParams !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
        }
        if (this._onUnauthenticatedRequest !== undefined) {
            hasAnyValues = true;
            internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
        }
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        if (this._sessionCookieName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionCookieName = this._sessionCookieName;
        }
        if (this._sessionTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionTimeout = this._sessionTimeout;
        }
        if (this._userPoolArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPoolArn = this._userPoolArn;
        }
        if (this._userPoolClientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPoolClientId = this._userPoolClientId;
        }
        if (this._userPoolDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.userPoolDomain = this._userPoolDomain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._authenticationRequestExtraParams = undefined;
            this._onUnauthenticatedRequest = undefined;
            this._scope = undefined;
            this._sessionCookieName = undefined;
            this._sessionTimeout = undefined;
            this._userPoolArn = undefined;
            this._userPoolClientId = undefined;
            this._userPoolDomain = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
            this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
            this._scope = value.scope;
            this._sessionCookieName = value.sessionCookieName;
            this._sessionTimeout = value.sessionTimeout;
            this._userPoolArn = value.userPoolArn;
            this._userPoolClientId = value.userPoolClientId;
            this._userPoolDomain = value.userPoolDomain;
        }
    }
    get authenticationRequestExtraParams() {
        return this.getStringMapAttribute('authentication_request_extra_params');
    }
    set authenticationRequestExtraParams(value) {
        this._authenticationRequestExtraParams = value;
    }
    resetAuthenticationRequestExtraParams() {
        this._authenticationRequestExtraParams = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authenticationRequestExtraParamsInput() {
        return this._authenticationRequestExtraParams;
    }
    get onUnauthenticatedRequest() {
        return this.getStringAttribute('on_unauthenticated_request');
    }
    set onUnauthenticatedRequest(value) {
        this._onUnauthenticatedRequest = value;
    }
    resetOnUnauthenticatedRequest() {
        this._onUnauthenticatedRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onUnauthenticatedRequestInput() {
        return this._onUnauthenticatedRequest;
    }
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
    get sessionCookieName() {
        return this.getStringAttribute('session_cookie_name');
    }
    set sessionCookieName(value) {
        this._sessionCookieName = value;
    }
    resetSessionCookieName() {
        this._sessionCookieName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionCookieNameInput() {
        return this._sessionCookieName;
    }
    get sessionTimeout() {
        return this.getNumberAttribute('session_timeout');
    }
    set sessionTimeout(value) {
        this._sessionTimeout = value;
    }
    resetSessionTimeout() {
        this._sessionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionTimeoutInput() {
        return this._sessionTimeout;
    }
    get userPoolArn() {
        return this.getStringAttribute('user_pool_arn');
    }
    set userPoolArn(value) {
        this._userPoolArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get userPoolArnInput() {
        return this._userPoolArn;
    }
    get userPoolClientId() {
        return this.getStringAttribute('user_pool_client_id');
    }
    set userPoolClientId(value) {
        this._userPoolClientId = value;
    }
    // Temporarily expose input value. Use with caution.
    get userPoolClientIdInput() {
        return this._userPoolClientId;
    }
    get userPoolDomain() {
        return this.getStringAttribute('user_pool_domain');
    }
    set userPoolDomain(value) {
        this._userPoolDomain = value;
    }
    // Temporarily expose input value. Use with caution.
    get userPoolDomainInput() {
        return this._userPoolDomain;
    }
}
exports.AlbListenerDefaultActionAuthenticateCognitoOutputReference = AlbListenerDefaultActionAuthenticateCognitoOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AlbListenerDefaultActionAuthenticateCognitoOutputReference[_a] = { fqn: "@cdktf/aws-cdk.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference", version: "0.0.0" };
function albListenerDefaultActionAuthenticateOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authentication_request_extra_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct.authenticationRequestExtraParams),
        authorization_endpoint: cdktf.stringToTerraform(struct.authorizationEndpoint),
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        issuer: cdktf.stringToTerraform(struct.issuer),
        on_unauthenticated_request: cdktf.stringToTerraform(struct.onUnauthenticatedRequest),
        scope: cdktf.stringToTerraform(struct.scope),
        session_cookie_name: cdktf.stringToTerraform(struct.sessionCookieName),
        session_timeout: cdktf.numberToTerraform(struct.sessionTimeout),
        token_endpoint: cdktf.stringToTerraform(struct.tokenEndpoint),
        user_info_endpoint: cdktf.stringToTerraform(struct.userInfoEndpoint),
    };
}
exports.albListenerDefaultActionAuthenticateOidcToTerraform = albListenerDefaultActionAuthenticateOidcToTerraform;
function albListenerDefaultActionAuthenticateOidcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        authentication_request_extra_params: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.authenticationRequestExtraParams),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        authorization_endpoint: {
            value: cdktf.stringToHclTerraform(struct.authorizationEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_id: {
            value: cdktf.stringToHclTerraform(struct.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_secret: {
            value: cdktf.stringToHclTerraform(struct.clientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        issuer: {
            value: cdktf.stringToHclTerraform(struct.issuer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        on_unauthenticated_request: {
            value: cdktf.stringToHclTerraform(struct.onUnauthenticatedRequest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope: {
            value: cdktf.stringToHclTerraform(struct.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_cookie_name: {
            value: cdktf.stringToHclTerraform(struct.sessionCookieName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_timeout: {
            value: cdktf.numberToHclTerraform(struct.sessionTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        token_endpoint: {
            value: cdktf.stringToHclTerraform(struct.tokenEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_info_endpoint: {
            value: cdktf.stringToHclTerraform(struct.userInfoEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.albListenerDefaultActionAuthenticateOidcToHclTerraform = albListenerDefaultActionAuthenticateOidcToHclTerraform;
class AlbListenerDefaultActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
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
        if (this._authenticationRequestExtraParams !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
        }
        if (this._authorizationEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
        }
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._issuer !== undefined) {
            hasAnyValues = true;
            internalValueResult.issuer = this._issuer;
        }
        if (this._onUnauthenticatedRequest !== undefined) {
            hasAnyValues = true;
            internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
        }
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        if (this._sessionCookieName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionCookieName = this._sessionCookieName;
        }
        if (this._sessionTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionTimeout = this._sessionTimeout;
        }
        if (this._tokenEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.tokenEndpoint = this._tokenEndpoint;
        }
        if (this._userInfoEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.userInfoEndpoint = this._userInfoEndpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._authenticationRequestExtraParams = undefined;
            this._authorizationEndpoint = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._issuer = undefined;
            this._onUnauthenticatedRequest = undefined;
            this._scope = undefined;
            this._sessionCookieName = undefined;
            this._sessionTimeout = undefined;
            this._tokenEndpoint = undefined;
            this._userInfoEndpoint = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
            this._authorizationEndpoint = value.authorizationEndpoint;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._issuer = value.issuer;
            this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
            this._scope = value.scope;
            this._sessionCookieName = value.sessionCookieName;
            this._sessionTimeout = value.sessionTimeout;
            this._tokenEndpoint = value.tokenEndpoint;
            this._userInfoEndpoint = value.userInfoEndpoint;
        }
    }
    get authenticationRequestExtraParams() {
        return this.getStringMapAttribute('authentication_request_extra_params');
    }
    set authenticationRequestExtraParams(value) {
        this._authenticationRequestExtraParams = value;
    }
    resetAuthenticationRequestExtraParams() {
        this._authenticationRequestExtraParams = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authenticationRequestExtraParamsInput() {
        return this._authenticationRequestExtraParams;
    }
    get authorizationEndpoint() {
        return this.getStringAttribute('authorization_endpoint');
    }
    set authorizationEndpoint(value) {
        this._authorizationEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    get authorizationEndpointInput() {
        return this._authorizationEndpoint;
    }
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    set clientId(value) {
        this._clientId = value;
    }
    // Temporarily expose input value. Use with caution.
    get clientIdInput() {
        return this._clientId;
    }
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    set clientSecret(value) {
        this._clientSecret = value;
    }
    // Temporarily expose input value. Use with caution.
    get clientSecretInput() {
        return this._clientSecret;
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
    get onUnauthenticatedRequest() {
        return this.getStringAttribute('on_unauthenticated_request');
    }
    set onUnauthenticatedRequest(value) {
        this._onUnauthenticatedRequest = value;
    }
    resetOnUnauthenticatedRequest() {
        this._onUnauthenticatedRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onUnauthenticatedRequestInput() {
        return this._onUnauthenticatedRequest;
    }
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
    get sessionCookieName() {
        return this.getStringAttribute('session_cookie_name');
    }
    set sessionCookieName(value) {
        this._sessionCookieName = value;
    }
    resetSessionCookieName() {
        this._sessionCookieName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionCookieNameInput() {
        return this._sessionCookieName;
    }
    get sessionTimeout() {
        return this.getNumberAttribute('session_timeout');
    }
    set sessionTimeout(value) {
        this._sessionTimeout = value;
    }
    resetSessionTimeout() {
        this._sessionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionTimeoutInput() {
        return this._sessionTimeout;
    }
    get tokenEndpoint() {
        return this.getStringAttribute('token_endpoint');
    }
    set tokenEndpoint(value) {
        this._tokenEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    get tokenEndpointInput() {
        return this._tokenEndpoint;
    }
    get userInfoEndpoint() {
        return this.getStringAttribute('user_info_endpoint');
    }
    set userInfoEndpoint(value) {
        this._userInfoEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    get userInfoEndpointInput() {
        return this._userInfoEndpoint;
    }
}
exports.AlbListenerDefaultActionAuthenticateOidcOutputReference = AlbListenerDefaultActionAuthenticateOidcOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AlbListenerDefaultActionAuthenticateOidcOutputReference[_b] = { fqn: "@cdktf/aws-cdk.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference", version: "0.0.0" };
function albListenerDefaultActionFixedResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_type: cdktf.stringToTerraform(struct.contentType),
        message_body: cdktf.stringToTerraform(struct.messageBody),
        status_code: cdktf.stringToTerraform(struct.statusCode),
    };
}
exports.albListenerDefaultActionFixedResponseToTerraform = albListenerDefaultActionFixedResponseToTerraform;
function albListenerDefaultActionFixedResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        content_type: {
            value: cdktf.stringToHclTerraform(struct.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_body: {
            value: cdktf.stringToHclTerraform(struct.messageBody),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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
exports.albListenerDefaultActionFixedResponseToHclTerraform = albListenerDefaultActionFixedResponseToHclTerraform;
class AlbListenerDefaultActionFixedResponseOutputReference extends cdktf.ComplexObject {
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
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._messageBody !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageBody = this._messageBody;
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
            this._contentType = undefined;
            this._messageBody = undefined;
            this._statusCode = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._contentType = value.contentType;
            this._messageBody = value.messageBody;
            this._statusCode = value.statusCode;
        }
    }
    get contentType() {
        return this.getStringAttribute('content_type');
    }
    set contentType(value) {
        this._contentType = value;
    }
    // Temporarily expose input value. Use with caution.
    get contentTypeInput() {
        return this._contentType;
    }
    get messageBody() {
        return this.getStringAttribute('message_body');
    }
    set messageBody(value) {
        this._messageBody = value;
    }
    resetMessageBody() {
        this._messageBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get messageBodyInput() {
        return this._messageBody;
    }
    get statusCode() {
        return this.getStringAttribute('status_code');
    }
    set statusCode(value) {
        this._statusCode = value;
    }
    resetStatusCode() {
        this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusCodeInput() {
        return this._statusCode;
    }
}
exports.AlbListenerDefaultActionFixedResponseOutputReference = AlbListenerDefaultActionFixedResponseOutputReference;
_c = JSII_RTTI_SYMBOL_1;
AlbListenerDefaultActionFixedResponseOutputReference[_c] = { fqn: "@cdktf/aws-cdk.albListener.AlbListenerDefaultActionFixedResponseOutputReference", version: "0.0.0" };
function albListenerDefaultActionForwardStickinessToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        duration: cdktf.numberToTerraform(struct.duration),
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.albListenerDefaultActionForwardStickinessToTerraform = albListenerDefaultActionForwardStickinessToTerraform;
function albListenerDefaultActionForwardStickinessToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        duration: {
            value: cdktf.numberToHclTerraform(struct.duration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.albListenerDefaultActionForwardStickinessToHclTerraform = albListenerDefaultActionForwardStickinessToHclTerraform;
class AlbListenerDefaultActionForwardStickinessOutputReference extends cdktf.ComplexObject {
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
        if (this._duration !== undefined) {
            hasAnyValues = true;
            internalValueResult.duration = this._duration;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._duration = undefined;
            this._enabled = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._duration = value.duration;
            this._enabled = value.enabled;
        }
    }
    get duration() {
        return this.getNumberAttribute('duration');
    }
    set duration(value) {
        this._duration = value;
    }
    // Temporarily expose input value. Use with caution.
    get durationInput() {
        return this._duration;
    }
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
}
exports.AlbListenerDefaultActionForwardStickinessOutputReference = AlbListenerDefaultActionForwardStickinessOutputReference;
_d = JSII_RTTI_SYMBOL_1;
AlbListenerDefaultActionForwardStickinessOutputReference[_d] = { fqn: "@cdktf/aws-cdk.albListener.AlbListenerDefaultActionForwardStickinessOutputReference", version: "0.0.0" };
function albListenerDefaultActionForwardTargetGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
exports.albListenerDefaultActionForwardTargetGroupToTerraform = albListenerDefaultActionForwardTargetGroupToTerraform;
function albListenerDefaultActionForwardTargetGroupToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        arn: {
            value: cdktf.stringToHclTerraform(struct.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weight: {
            value: cdktf.numberToHclTerraform(struct.weight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.albListenerDefaultActionForwardTargetGroupToHclTerraform = albListenerDefaultActionForwardTargetGroupToHclTerraform;
class AlbListenerDefaultActionForwardTargetGroupOutputReference extends cdktf.ComplexObject {
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
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._weight !== undefined) {
            hasAnyValues = true;
            internalValueResult.weight = this._weight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
            this._weight = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
            this._weight = value.weight;
        }
    }
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    get weight() {
        return this.getNumberAttribute('weight');
    }
    set weight(value) {
        this._weight = value;
    }
    resetWeight() {
        this._weight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get weightInput() {
        return this._weight;
    }
}
exports.AlbListenerDefaultActionForwardTargetGroupOutputReference = AlbListenerDefaultActionForwardTargetGroupOutputReference;
_e = JSII_RTTI_SYMBOL_1;
AlbListenerDefaultActionForwardTargetGroupOutputReference[_e] = { fqn: "@cdktf/aws-cdk.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference", version: "0.0.0" };
class AlbListenerDefaultActionForwardTargetGroupList extends cdktf.ComplexList {
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
        return new AlbListenerDefaultActionForwardTargetGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.AlbListenerDefaultActionForwardTargetGroupList = AlbListenerDefaultActionForwardTargetGroupList;
_f = JSII_RTTI_SYMBOL_1;
AlbListenerDefaultActionForwardTargetGroupList[_f] = { fqn: "@cdktf/aws-cdk.albListener.AlbListenerDefaultActionForwardTargetGroupList", version: "0.0.0" };
function albListenerDefaultActionForwardToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        stickiness: albListenerDefaultActionForwardStickinessToTerraform(struct.stickiness),
        target_group: cdktf.listMapper(albListenerDefaultActionForwardTargetGroupToTerraform, true)(struct.targetGroup),
    };
}
exports.albListenerDefaultActionForwardToTerraform = albListenerDefaultActionForwardToTerraform;
function albListenerDefaultActionForwardToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        stickiness: {
            value: albListenerDefaultActionForwardStickinessToHclTerraform(struct.stickiness),
            isBlock: true,
            type: "list",
            storageClassType: "AlbListenerDefaultActionForwardStickinessList",
        },
        target_group: {
            value: cdktf.listMapperHcl(albListenerDefaultActionForwardTargetGroupToHclTerraform, true)(struct.targetGroup),
            isBlock: true,
            type: "set",
            storageClassType: "AlbListenerDefaultActionForwardTargetGroupList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.albListenerDefaultActionForwardToHclTerraform = albListenerDefaultActionForwardToHclTerraform;
class AlbListenerDefaultActionForwardOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // stickiness - computed: false, optional: true, required: false
        this._stickiness = new AlbListenerDefaultActionForwardStickinessOutputReference(this, "stickiness");
        // target_group - computed: false, optional: false, required: true
        this._targetGroup = new AlbListenerDefaultActionForwardTargetGroupList(this, "target_group", true);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._stickiness?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stickiness = this._stickiness?.internalValue;
        }
        if (this._targetGroup?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroup = this._targetGroup?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._stickiness.internalValue = undefined;
            this._targetGroup.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._stickiness.internalValue = value.stickiness;
            this._targetGroup.internalValue = value.targetGroup;
        }
    }
    get stickiness() {
        return this._stickiness;
    }
    putStickiness(value) {
        this._stickiness.internalValue = value;
    }
    resetStickiness() {
        this._stickiness.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stickinessInput() {
        return this._stickiness.internalValue;
    }
    get targetGroup() {
        return this._targetGroup;
    }
    putTargetGroup(value) {
        this._targetGroup.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetGroupInput() {
        return this._targetGroup.internalValue;
    }
}
exports.AlbListenerDefaultActionForwardOutputReference = AlbListenerDefaultActionForwardOutputReference;
_g = JSII_RTTI_SYMBOL_1;
AlbListenerDefaultActionForwardOutputReference[_g] = { fqn: "@cdktf/aws-cdk.albListener.AlbListenerDefaultActionForwardOutputReference", version: "0.0.0" };
function albListenerDefaultActionRedirectToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        path: cdktf.stringToTerraform(struct.path),
        port: cdktf.stringToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol),
        query: cdktf.stringToTerraform(struct.query),
        status_code: cdktf.stringToTerraform(struct.statusCode),
    };
}
exports.albListenerDefaultActionRedirectToTerraform = albListenerDefaultActionRedirectToTerraform;
function albListenerDefaultActionRedirectToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktf.stringToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktf.stringToHclTerraform(struct.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        query: {
            value: cdktf.stringToHclTerraform(struct.query),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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
exports.albListenerDefaultActionRedirectToHclTerraform = albListenerDefaultActionRedirectToHclTerraform;
class AlbListenerDefaultActionRedirectOutputReference extends cdktf.ComplexObject {
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
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._query !== undefined) {
            hasAnyValues = true;
            internalValueResult.query = this._query;
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
            this._host = undefined;
            this._path = undefined;
            this._port = undefined;
            this._protocol = undefined;
            this._query = undefined;
            this._statusCode = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._host = value.host;
            this._path = value.path;
            this._port = value.port;
            this._protocol = value.protocol;
            this._query = value.query;
            this._statusCode = value.statusCode;
        }
    }
    get host() {
        return this.getStringAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
    get port() {
        return this.getStringAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    set protocol(value) {
        this._protocol = value;
    }
    resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get protocolInput() {
        return this._protocol;
    }
    get query() {
        return this.getStringAttribute('query');
    }
    set query(value) {
        this._query = value;
    }
    resetQuery() {
        this._query = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryInput() {
        return this._query;
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
exports.AlbListenerDefaultActionRedirectOutputReference = AlbListenerDefaultActionRedirectOutputReference;
_h = JSII_RTTI_SYMBOL_1;
AlbListenerDefaultActionRedirectOutputReference[_h] = { fqn: "@cdktf/aws-cdk.albListener.AlbListenerDefaultActionRedirectOutputReference", version: "0.0.0" };
function albListenerDefaultActionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        order: cdktf.numberToTerraform(struct.order),
        target_group_arn: cdktf.stringToTerraform(struct.targetGroupArn),
        type: cdktf.stringToTerraform(struct.type),
        authenticate_cognito: albListenerDefaultActionAuthenticateCognitoToTerraform(struct.authenticateCognito),
        authenticate_oidc: albListenerDefaultActionAuthenticateOidcToTerraform(struct.authenticateOidc),
        fixed_response: albListenerDefaultActionFixedResponseToTerraform(struct.fixedResponse),
        forward: albListenerDefaultActionForwardToTerraform(struct.forward),
        redirect: albListenerDefaultActionRedirectToTerraform(struct.redirect),
    };
}
exports.albListenerDefaultActionToTerraform = albListenerDefaultActionToTerraform;
function albListenerDefaultActionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        order: {
            value: cdktf.numberToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        target_group_arn: {
            value: cdktf.stringToHclTerraform(struct.targetGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        authenticate_cognito: {
            value: albListenerDefaultActionAuthenticateCognitoToHclTerraform(struct.authenticateCognito),
            isBlock: true,
            type: "list",
            storageClassType: "AlbListenerDefaultActionAuthenticateCognitoList",
        },
        authenticate_oidc: {
            value: albListenerDefaultActionAuthenticateOidcToHclTerraform(struct.authenticateOidc),
            isBlock: true,
            type: "list",
            storageClassType: "AlbListenerDefaultActionAuthenticateOidcList",
        },
        fixed_response: {
            value: albListenerDefaultActionFixedResponseToHclTerraform(struct.fixedResponse),
            isBlock: true,
            type: "list",
            storageClassType: "AlbListenerDefaultActionFixedResponseList",
        },
        forward: {
            value: albListenerDefaultActionForwardToHclTerraform(struct.forward),
            isBlock: true,
            type: "list",
            storageClassType: "AlbListenerDefaultActionForwardList",
        },
        redirect: {
            value: albListenerDefaultActionRedirectToHclTerraform(struct.redirect),
            isBlock: true,
            type: "list",
            storageClassType: "AlbListenerDefaultActionRedirectList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.albListenerDefaultActionToHclTerraform = albListenerDefaultActionToHclTerraform;
class AlbListenerDefaultActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // authenticate_cognito - computed: false, optional: true, required: false
        this._authenticateCognito = new AlbListenerDefaultActionAuthenticateCognitoOutputReference(this, "authenticate_cognito");
        // authenticate_oidc - computed: false, optional: true, required: false
        this._authenticateOidc = new AlbListenerDefaultActionAuthenticateOidcOutputReference(this, "authenticate_oidc");
        // fixed_response - computed: false, optional: true, required: false
        this._fixedResponse = new AlbListenerDefaultActionFixedResponseOutputReference(this, "fixed_response");
        // forward - computed: false, optional: true, required: false
        this._forward = new AlbListenerDefaultActionForwardOutputReference(this, "forward");
        // redirect - computed: false, optional: true, required: false
        this._redirect = new AlbListenerDefaultActionRedirectOutputReference(this, "redirect");
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._order !== undefined) {
            hasAnyValues = true;
            internalValueResult.order = this._order;
        }
        if (this._targetGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetGroupArn = this._targetGroupArn;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._authenticateCognito?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticateCognito = this._authenticateCognito?.internalValue;
        }
        if (this._authenticateOidc?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticateOidc = this._authenticateOidc?.internalValue;
        }
        if (this._fixedResponse?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fixedResponse = this._fixedResponse?.internalValue;
        }
        if (this._forward?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.forward = this._forward?.internalValue;
        }
        if (this._redirect?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirect = this._redirect?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._order = undefined;
            this._targetGroupArn = undefined;
            this._type = undefined;
            this._authenticateCognito.internalValue = undefined;
            this._authenticateOidc.internalValue = undefined;
            this._fixedResponse.internalValue = undefined;
            this._forward.internalValue = undefined;
            this._redirect.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._order = value.order;
            this._targetGroupArn = value.targetGroupArn;
            this._type = value.type;
            this._authenticateCognito.internalValue = value.authenticateCognito;
            this._authenticateOidc.internalValue = value.authenticateOidc;
            this._fixedResponse.internalValue = value.fixedResponse;
            this._forward.internalValue = value.forward;
            this._redirect.internalValue = value.redirect;
        }
    }
    get order() {
        return this.getNumberAttribute('order');
    }
    set order(value) {
        this._order = value;
    }
    resetOrder() {
        this._order = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get orderInput() {
        return this._order;
    }
    get targetGroupArn() {
        return this.getStringAttribute('target_group_arn');
    }
    set targetGroupArn(value) {
        this._targetGroupArn = value;
    }
    resetTargetGroupArn() {
        this._targetGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetGroupArnInput() {
        return this._targetGroupArn;
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
    get authenticateCognito() {
        return this._authenticateCognito;
    }
    putAuthenticateCognito(value) {
        this._authenticateCognito.internalValue = value;
    }
    resetAuthenticateCognito() {
        this._authenticateCognito.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authenticateCognitoInput() {
        return this._authenticateCognito.internalValue;
    }
    get authenticateOidc() {
        return this._authenticateOidc;
    }
    putAuthenticateOidc(value) {
        this._authenticateOidc.internalValue = value;
    }
    resetAuthenticateOidc() {
        this._authenticateOidc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authenticateOidcInput() {
        return this._authenticateOidc.internalValue;
    }
    get fixedResponse() {
        return this._fixedResponse;
    }
    putFixedResponse(value) {
        this._fixedResponse.internalValue = value;
    }
    resetFixedResponse() {
        this._fixedResponse.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fixedResponseInput() {
        return this._fixedResponse.internalValue;
    }
    get forward() {
        return this._forward;
    }
    putForward(value) {
        this._forward.internalValue = value;
    }
    resetForward() {
        this._forward.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forwardInput() {
        return this._forward.internalValue;
    }
    get redirect() {
        return this._redirect;
    }
    putRedirect(value) {
        this._redirect.internalValue = value;
    }
    resetRedirect() {
        this._redirect.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get redirectInput() {
        return this._redirect.internalValue;
    }
}
exports.AlbListenerDefaultActionOutputReference = AlbListenerDefaultActionOutputReference;
_j = JSII_RTTI_SYMBOL_1;
AlbListenerDefaultActionOutputReference[_j] = { fqn: "@cdktf/aws-cdk.albListener.AlbListenerDefaultActionOutputReference", version: "0.0.0" };
class AlbListenerDefaultActionList extends cdktf.ComplexList {
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
        return new AlbListenerDefaultActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.AlbListenerDefaultActionList = AlbListenerDefaultActionList;
_k = JSII_RTTI_SYMBOL_1;
AlbListenerDefaultActionList[_k] = { fqn: "@cdktf/aws-cdk.albListener.AlbListenerDefaultActionList", version: "0.0.0" };
function albListenerTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        read: cdktf.stringToTerraform(struct.read),
    };
}
exports.albListenerTimeoutsToTerraform = albListenerTimeoutsToTerraform;
function albListenerTimeoutsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        read: {
            value: cdktf.stringToHclTerraform(struct.read),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.albListenerTimeoutsToHclTerraform = albListenerTimeoutsToHclTerraform;
class AlbListenerTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
        this.isEmptyObject = false;
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._read !== undefined) {
            hasAnyValues = true;
            internalValueResult.read = this._read;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._read = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._read = value.read;
        }
    }
    get read() {
        return this.getStringAttribute('read');
    }
    set read(value) {
        this._read = value;
    }
    resetRead() {
        this._read = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readInput() {
        return this._read;
    }
}
exports.AlbListenerTimeoutsOutputReference = AlbListenerTimeoutsOutputReference;
_l = JSII_RTTI_SYMBOL_1;
AlbListenerTimeoutsOutputReference[_l] = { fqn: "@cdktf/aws-cdk.albListener.AlbListenerTimeoutsOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener aws_alb_listener}
*/
class AlbListener extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AlbListener resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AlbListener to import
    * @param importFromId The id of the existing AlbListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AlbListener to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_alb_listener", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener aws_alb_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbListenerConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_alb_listener',
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
        // default_action - computed: false, optional: false, required: true
        this._defaultAction = new AlbListenerDefaultActionList(this, "default_action", false);
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new AlbListenerTimeoutsOutputReference(this, "timeouts");
        this._alpnPolicy = config.alpnPolicy;
        this._certificateArn = config.certificateArn;
        this._id = config.id;
        this._loadBalancerArn = config.loadBalancerArn;
        this._port = config.port;
        this._protocol = config.protocol;
        this._sslPolicy = config.sslPolicy;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._defaultAction.internalValue = config.defaultAction;
        this._timeouts.internalValue = config.timeouts;
    }
    get alpnPolicy() {
        return this.getStringAttribute('alpn_policy');
    }
    set alpnPolicy(value) {
        this._alpnPolicy = value;
    }
    resetAlpnPolicy() {
        this._alpnPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get alpnPolicyInput() {
        return this._alpnPolicy;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    set certificateArn(value) {
        this._certificateArn = value;
    }
    resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateArnInput() {
        return this._certificateArn;
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
    get loadBalancerArn() {
        return this.getStringAttribute('load_balancer_arn');
    }
    set loadBalancerArn(value) {
        this._loadBalancerArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get loadBalancerArnInput() {
        return this._loadBalancerArn;
    }
    get port() {
        return this.getNumberAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    set protocol(value) {
        this._protocol = value;
    }
    resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get protocolInput() {
        return this._protocol;
    }
    get sslPolicy() {
        return this.getStringAttribute('ssl_policy');
    }
    set sslPolicy(value) {
        this._sslPolicy = value;
    }
    resetSslPolicy() {
        this._sslPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sslPolicyInput() {
        return this._sslPolicy;
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
    get defaultAction() {
        return this._defaultAction;
    }
    putDefaultAction(value) {
        this._defaultAction.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get defaultActionInput() {
        return this._defaultAction.internalValue;
    }
    get timeouts() {
        return this._timeouts;
    }
    putTimeouts(value) {
        this._timeouts.internalValue = value;
    }
    resetTimeouts() {
        this._timeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutsInput() {
        return this._timeouts.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            alpn_policy: cdktf.stringToTerraform(this._alpnPolicy),
            certificate_arn: cdktf.stringToTerraform(this._certificateArn),
            id: cdktf.stringToTerraform(this._id),
            load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
            port: cdktf.numberToTerraform(this._port),
            protocol: cdktf.stringToTerraform(this._protocol),
            ssl_policy: cdktf.stringToTerraform(this._sslPolicy),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            default_action: cdktf.listMapper(albListenerDefaultActionToTerraform, true)(this._defaultAction.internalValue),
            timeouts: albListenerTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            alpn_policy: {
                value: cdktf.stringToHclTerraform(this._alpnPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate_arn: {
                value: cdktf.stringToHclTerraform(this._certificateArn),
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
            load_balancer_arn: {
                value: cdktf.stringToHclTerraform(this._loadBalancerArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            port: {
                value: cdktf.numberToHclTerraform(this._port),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            protocol: {
                value: cdktf.stringToHclTerraform(this._protocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ssl_policy: {
                value: cdktf.stringToHclTerraform(this._sslPolicy),
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
            default_action: {
                value: cdktf.listMapperHcl(albListenerDefaultActionToHclTerraform, true)(this._defaultAction.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AlbListenerDefaultActionList",
            },
            timeouts: {
                value: albListenerTimeoutsToHclTerraform(this._timeouts.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AlbListenerTimeouts",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.AlbListener = AlbListener;
_m = JSII_RTTI_SYMBOL_1;
AlbListener[_m] = { fqn: "@cdktf/aws-cdk.albListener.AlbListener", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
AlbListener.tfResourceType = "aws_alb_listener";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2FsYi1saXN0ZW5lci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQTRGL0IsU0FBZ0Isc0RBQXNELENBQUMsTUFBaUg7SUFDdEwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLG1DQUFtQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLGdDQUFnQyxDQUFDO1FBQ3hILDBCQUEwQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsd0JBQXdCLENBQUM7UUFDckYsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO1FBQzdDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdkUsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2hFLGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUMzRCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3RFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIs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Q0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztnQkFDdEUsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUscUJBQXFCO2FBQ3hDO1NBQ0YsQ0FBQztRQUVGLDhCQUE4QjtRQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBRSxDQUFDLENBQUE7SUFDNUgsQ0FBQzs7QUE1VUgsa0NBNlVDOzs7QUEzVUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRywwQkFBYyxHQUFHLGtCQUFrQixBQUFyQixDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lclxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYkxpc3RlbmVyQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciNhbHBuX3BvbGljeSBBbGJMaXN0ZW5lciNhbHBuX3BvbGljeX1cbiAgKi9cbiAgcmVhZG9ubHkgYWxwblBvbGljeT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYWxiX2xpc3RlbmVyI2NlcnRpZmljYXRlX2FybiBBbGJMaXN0ZW5lciNjZXJ0aWZpY2F0ZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjaWQgQWxiTGlzdGVuZXIjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciNsb2FkX2JhbGFuY2VyX2FybiBBbGJMaXN0ZW5lciNsb2FkX2JhbGFuY2VyX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgbG9hZEJhbGFuY2VyQXJuOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciNwb3J0IEFsYkxpc3RlbmVyI3BvcnR9XG4gICovXG4gIHJlYWRvbmx5IHBvcnQ/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciNwcm90b2NvbCBBbGJMaXN0ZW5lciNwcm90b2NvbH1cbiAgKi9cbiAgcmVhZG9ubHkgcHJvdG9jb2w/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciNzc2xfcG9saWN5IEFsYkxpc3RlbmVyI3NzbF9wb2xpY3l9XG4gICovXG4gIHJlYWRvbmx5IHNzbFBvbGljeT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYWxiX2xpc3RlbmVyI3RhZ3MgQWxiTGlzdGVuZXIjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciN0YWdzX2FsbCBBbGJMaXN0ZW5lciN0YWdzX2FsbH1cbiAgKi9cbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIGRlZmF1bHRfYWN0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjZGVmYXVsdF9hY3Rpb24gQWxiTGlzdGVuZXIjZGVmYXVsdF9hY3Rpb259XG4gICovXG4gIHJlYWRvbmx5IGRlZmF1bHRBY3Rpb246IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbltdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHRpbWVvdXRzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjdGltZW91dHMgQWxiTGlzdGVuZXIjdGltZW91dHN9XG4gICovXG4gIHJlYWRvbmx5IHRpbWVvdXRzPzogQWxiTGlzdGVuZXJUaW1lb3V0cztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uQXV0aGVudGljYXRlQ29nbml0byB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciNhdXRoZW50aWNhdGlvbl9yZXF1ZXN0X2V4dHJhX3BhcmFtcyBBbGJMaXN0ZW5lciNhdXRoZW50aWNhdGlvbl9yZXF1ZXN0X2V4dHJhX3BhcmFtc31cbiAgKi9cbiAgcmVhZG9ubHkgYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjb25fdW5hdXRoZW50aWNhdGVkX3JlcXVlc3QgQWxiTGlzdGVuZXIjb25fdW5hdXRoZW50aWNhdGVkX3JlcXVlc3R9XG4gICovXG4gIHJlYWRvbmx5IG9uVW5hdXRoZW50aWNhdGVkUmVxdWVzdD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYWxiX2xpc3RlbmVyI3Njb3BlIEFsYkxpc3RlbmVyI3Njb3BlfVxuICAqL1xuICByZWFkb25seSBzY29wZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYWxiX2xpc3RlbmVyI3Nlc3Npb25fY29va2llX25hbWUgQWxiTGlzdGVuZXIjc2Vzc2lvbl9jb29raWVfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgc2Vzc2lvbkNvb2tpZU5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciNzZXNzaW9uX3RpbWVvdXQgQWxiTGlzdGVuZXIjc2Vzc2lvbl90aW1lb3V0fVxuICAqL1xuICByZWFkb25seSBzZXNzaW9uVGltZW91dD86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYWxiX2xpc3RlbmVyI3VzZXJfcG9vbF9hcm4gQWxiTGlzdGVuZXIjdXNlcl9wb29sX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgdXNlclBvb2xBcm46IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYWxiX2xpc3RlbmVyI3VzZXJfcG9vbF9jbGllbnRfaWQgQWxiTGlzdGVuZXIjdXNlcl9wb29sX2NsaWVudF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgdXNlclBvb2xDbGllbnRJZDogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjdXNlcl9wb29sX2RvbWFpbiBBbGJMaXN0ZW5lciN1c2VyX3Bvb2xfZG9tYWlufVxuICAqL1xuICByZWFkb25seSB1c2VyUG9vbERvbWFpbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uQXV0aGVudGljYXRlQ29nbml0b1RvVGVycmFmb3JtKHN0cnVjdD86IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkF1dGhlbnRpY2F0ZUNvZ25pdG9PdXRwdXRSZWZlcmVuY2UgfCBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVDb2duaXRvKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGF1dGhlbnRpY2F0aW9uX3JlcXVlc3RfZXh0cmFfcGFyYW1zOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmF1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zKSxcbiAgICBvbl91bmF1dGhlbnRpY2F0ZWRfcmVxdWVzdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vblVuYXV0aGVudGljYXRlZFJlcXVlc3QpLFxuICAgIHNjb3BlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjb3BlKSxcbiAgICBzZXNzaW9uX2Nvb2tpZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlc3Npb25Db29raWVOYW1lKSxcbiAgICBzZXNzaW9uX3RpbWVvdXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2Vzc2lvblRpbWVvdXQpLFxuICAgIHVzZXJfcG9vbF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlclBvb2xBcm4pLFxuICAgIHVzZXJfcG9vbF9jbGllbnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlclBvb2xDbGllbnRJZCksXG4gICAgdXNlcl9wb29sX2RvbWFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51c2VyUG9vbERvbWFpbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uQXV0aGVudGljYXRlQ29nbml0b1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkF1dGhlbnRpY2F0ZUNvZ25pdG9PdXRwdXRSZWZlcmVuY2UgfCBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVDb2duaXRvKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhdXRoZW50aWNhdGlvbl9yZXF1ZXN0X2V4dHJhX3BhcmFtczoge1xuICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHN0cnVjdCEuYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICB9LFxuICAgIG9uX3VuYXV0aGVudGljYXRlZF9yZXF1ZXN0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5vblVuYXV0aGVudGljYXRlZFJlcXVlc3QpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNjb3BlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zY29wZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2Vzc2lvbl9jb29raWVfbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2Vzc2lvbkNvb2tpZU5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNlc3Npb25fdGltZW91dDoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2Vzc2lvblRpbWVvdXQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHVzZXJfcG9vbF9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnVzZXJQb29sQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB1c2VyX3Bvb2xfY2xpZW50X2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS51c2VyUG9vbENsaWVudElkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB1c2VyX3Bvb2xfZG9tYWluOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS51c2VyUG9vbERvbWFpbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVDb2duaXRvT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVDb2duaXRvIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcyA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm9uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCA9IHRoaXMuX29uVW5hdXRoZW50aWNhdGVkUmVxdWVzdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Njb3BlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNjb3BlID0gdGhpcy5fc2NvcGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZXNzaW9uQ29va2llTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZXNzaW9uQ29va2llTmFtZSA9IHRoaXMuX3Nlc3Npb25Db29raWVOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2Vzc2lvblRpbWVvdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2Vzc2lvblRpbWVvdXQgPSB0aGlzLl9zZXNzaW9uVGltZW91dDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VzZXJQb29sQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVzZXJQb29sQXJuID0gdGhpcy5fdXNlclBvb2xBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl91c2VyUG9vbENsaWVudElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVzZXJQb29sQ2xpZW50SWQgPSB0aGlzLl91c2VyUG9vbENsaWVudElkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlclBvb2xEb21haW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXNlclBvb2xEb21haW4gPSB0aGlzLl91c2VyUG9vbERvbWFpbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkF1dGhlbnRpY2F0ZUNvZ25pdG8gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX29uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Njb3BlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2Vzc2lvbkNvb2tpZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZXNzaW9uVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VzZXJQb29sQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXNlclBvb2xDbGllbnRJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VzZXJQb29sRG9tYWluID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcyA9IHZhbHVlLmF1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zO1xuICAgICAgdGhpcy5fb25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0ID0gdmFsdWUub25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0O1xuICAgICAgdGhpcy5fc2NvcGUgPSB2YWx1ZS5zY29wZTtcbiAgICAgIHRoaXMuX3Nlc3Npb25Db29raWVOYW1lID0gdmFsdWUuc2Vzc2lvbkNvb2tpZU5hbWU7XG4gICAgICB0aGlzLl9zZXNzaW9uVGltZW91dCA9IHZhbHVlLnNlc3Npb25UaW1lb3V0O1xuICAgICAgdGhpcy5fdXNlclBvb2xBcm4gPSB2YWx1ZS51c2VyUG9vbEFybjtcbiAgICAgIHRoaXMuX3VzZXJQb29sQ2xpZW50SWQgPSB2YWx1ZS51c2VyUG9vbENsaWVudElkO1xuICAgICAgdGhpcy5fdXNlclBvb2xEb21haW4gPSB2YWx1ZS51c2VyUG9vbERvbWFpbjtcbiAgICB9XG4gIH1cblxuICAvLyBhdXRoZW50aWNhdGlvbl9yZXF1ZXN0X2V4dHJhX3BhcmFtcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IGF1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgnYXV0aGVudGljYXRpb25fcmVxdWVzdF9leHRyYV9wYXJhbXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcygpIHtcbiAgICB0aGlzLl9hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXM7XG4gIH1cblxuICAvLyBvbl91bmF1dGhlbnRpY2F0ZWRfcmVxdWVzdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29uVW5hdXRoZW50aWNhdGVkUmVxdWVzdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb25fdW5hdXRoZW50aWNhdGVkX3JlcXVlc3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KCkge1xuICAgIHRoaXMuX29uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uVW5hdXRoZW50aWNhdGVkUmVxdWVzdDtcbiAgfVxuXG4gIC8vIHNjb3BlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NvcGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNjb3BlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2NvcGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjb3BlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zY29wZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNjb3BlKCkge1xuICAgIHRoaXMuX3Njb3BlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY29wZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY29wZTtcbiAgfVxuXG4gIC8vIHNlc3Npb25fY29va2llX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXNzaW9uQ29va2llTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2Vzc2lvbkNvb2tpZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXNzaW9uX2Nvb2tpZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXNzaW9uQ29va2llTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2Vzc2lvbkNvb2tpZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXNzaW9uQ29va2llTmFtZSgpIHtcbiAgICB0aGlzLl9zZXNzaW9uQ29va2llTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2Vzc2lvbkNvb2tpZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbkNvb2tpZU5hbWU7XG4gIH1cblxuICAvLyBzZXNzaW9uX3RpbWVvdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXNzaW9uVGltZW91dD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgc2Vzc2lvblRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzZXNzaW9uX3RpbWVvdXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlc3Npb25UaW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zZXNzaW9uVGltZW91dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlc3Npb25UaW1lb3V0KCkge1xuICAgIHRoaXMuX3Nlc3Npb25UaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXNzaW9uVGltZW91dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uVGltZW91dDtcbiAgfVxuXG4gIC8vIHVzZXJfcG9vbF9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdXNlclBvb2xBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVzZXJQb29sQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9wb29sX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlclBvb2xBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJQb29sQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJQb29sQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJQb29sQXJuO1xuICB9XG5cbiAgLy8gdXNlcl9wb29sX2NsaWVudF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91c2VyUG9vbENsaWVudElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1c2VyUG9vbENsaWVudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9wb29sX2NsaWVudF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlclBvb2xDbGllbnRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlclBvb2xDbGllbnRJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VyUG9vbENsaWVudElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJQb29sQ2xpZW50SWQ7XG4gIH1cblxuICAvLyB1c2VyX3Bvb2xfZG9tYWluIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VzZXJQb29sRG9tYWluPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1c2VyUG9vbERvbWFpbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzZXJfcG9vbF9kb21haW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZXJQb29sRG9tYWluKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91c2VyUG9vbERvbWFpbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VyUG9vbERvbWFpbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyUG9vbERvbWFpbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVPaWRjIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYWxiX2xpc3RlbmVyI2F1dGhlbnRpY2F0aW9uX3JlcXVlc3RfZXh0cmFfcGFyYW1zIEFsYkxpc3RlbmVyI2F1dGhlbnRpY2F0aW9uX3JlcXVlc3RfZXh0cmFfcGFyYW1zfVxuICAqL1xuICByZWFkb25seSBhdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciNhdXRob3JpemF0aW9uX2VuZHBvaW50IEFsYkxpc3RlbmVyI2F1dGhvcml6YXRpb25fZW5kcG9pbnR9XG4gICovXG4gIHJlYWRvbmx5IGF1dGhvcml6YXRpb25FbmRwb2ludDogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjY2xpZW50X2lkIEFsYkxpc3RlbmVyI2NsaWVudF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgY2xpZW50SWQ6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYWxiX2xpc3RlbmVyI2NsaWVudF9zZWNyZXQgQWxiTGlzdGVuZXIjY2xpZW50X3NlY3JldH1cbiAgKi9cbiAgcmVhZG9ubHkgY2xpZW50U2VjcmV0OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciNpc3N1ZXIgQWxiTGlzdGVuZXIjaXNzdWVyfVxuICAqL1xuICByZWFkb25seSBpc3N1ZXI6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYWxiX2xpc3RlbmVyI29uX3VuYXV0aGVudGljYXRlZF9yZXF1ZXN0IEFsYkxpc3RlbmVyI29uX3VuYXV0aGVudGljYXRlZF9yZXF1ZXN0fVxuICAqL1xuICByZWFkb25seSBvblVuYXV0aGVudGljYXRlZFJlcXVlc3Q/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciNzY29wZSBBbGJMaXN0ZW5lciNzY29wZX1cbiAgKi9cbiAgcmVhZG9ubHkgc2NvcGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciNzZXNzaW9uX2Nvb2tpZV9uYW1lIEFsYkxpc3RlbmVyI3Nlc3Npb25fY29va2llX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IHNlc3Npb25Db29raWVOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjc2Vzc2lvbl90aW1lb3V0IEFsYkxpc3RlbmVyI3Nlc3Npb25fdGltZW91dH1cbiAgKi9cbiAgcmVhZG9ubHkgc2Vzc2lvblRpbWVvdXQ/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciN0b2tlbl9lbmRwb2ludCBBbGJMaXN0ZW5lciN0b2tlbl9lbmRwb2ludH1cbiAgKi9cbiAgcmVhZG9ubHkgdG9rZW5FbmRwb2ludDogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjdXNlcl9pbmZvX2VuZHBvaW50IEFsYkxpc3RlbmVyI3VzZXJfaW5mb19lbmRwb2ludH1cbiAgKi9cbiAgcmVhZG9ubHkgdXNlckluZm9FbmRwb2ludDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uQXV0aGVudGljYXRlT2lkY1RvVGVycmFmb3JtKHN0cnVjdD86IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkF1dGhlbnRpY2F0ZU9pZGNPdXRwdXRSZWZlcmVuY2UgfCBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVPaWRjKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGF1dGhlbnRpY2F0aW9uX3JlcXVlc3RfZXh0cmFfcGFyYW1zOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmF1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zKSxcbiAgICBhdXRob3JpemF0aW9uX2VuZHBvaW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1dGhvcml6YXRpb25FbmRwb2ludCksXG4gICAgY2xpZW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsaWVudElkKSxcbiAgICBjbGllbnRfc2VjcmV0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsaWVudFNlY3JldCksXG4gICAgaXNzdWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlzc3VlciksXG4gICAgb25fdW5hdXRoZW50aWNhdGVkX3JlcXVlc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KSxcbiAgICBzY29wZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zY29wZSksXG4gICAgc2Vzc2lvbl9jb29raWVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXNzaW9uQ29va2llTmFtZSksXG4gICAgc2Vzc2lvbl90aW1lb3V0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlc3Npb25UaW1lb3V0KSxcbiAgICB0b2tlbl9lbmRwb2ludDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50b2tlbkVuZHBvaW50KSxcbiAgICB1c2VyX2luZm9fZW5kcG9pbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlckluZm9FbmRwb2ludCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uQXV0aGVudGljYXRlT2lkY1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkF1dGhlbnRpY2F0ZU9pZGNPdXRwdXRSZWZlcmVuY2UgfCBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVPaWRjKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhdXRoZW50aWNhdGlvbl9yZXF1ZXN0X2V4dHJhX3BhcmFtczoge1xuICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHN0cnVjdCEuYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICB9LFxuICAgIGF1dGhvcml6YXRpb25fZW5kcG9pbnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmF1dGhvcml6YXRpb25FbmRwb2ludCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY2xpZW50X2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jbGllbnRJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY2xpZW50X3NlY3JldDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2xpZW50U2VjcmV0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpc3N1ZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlzc3VlciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgb25fdW5hdXRoZW50aWNhdGVkX3JlcXVlc3Q6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm9uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2NvcGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNjb3BlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzZXNzaW9uX2Nvb2tpZV9uYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zZXNzaW9uQ29va2llTmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2Vzc2lvbl90aW1lb3V0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zZXNzaW9uVGltZW91dCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgdG9rZW5fZW5kcG9pbnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRva2VuRW5kcG9pbnQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHVzZXJfaW5mb19lbmRwb2ludDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudXNlckluZm9FbmRwb2ludCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVPaWRjT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVPaWRjIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcyA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXV0aG9yaXphdGlvbkVuZHBvaW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF1dGhvcml6YXRpb25FbmRwb2ludCA9IHRoaXMuX2F1dGhvcml6YXRpb25FbmRwb2ludDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NsaWVudElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNsaWVudElkID0gdGhpcy5fY2xpZW50SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jbGllbnRTZWNyZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xpZW50U2VjcmV0ID0gdGhpcy5fY2xpZW50U2VjcmV0O1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNzdWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmlzc3VlciA9IHRoaXMuX2lzc3VlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX29uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vblVuYXV0aGVudGljYXRlZFJlcXVlc3QgPSB0aGlzLl9vblVuYXV0aGVudGljYXRlZFJlcXVlc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zY29wZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zY29wZSA9IHRoaXMuX3Njb3BlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2Vzc2lvbkNvb2tpZU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2Vzc2lvbkNvb2tpZU5hbWUgPSB0aGlzLl9zZXNzaW9uQ29va2llTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Nlc3Npb25UaW1lb3V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlc3Npb25UaW1lb3V0ID0gdGhpcy5fc2Vzc2lvblRpbWVvdXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl90b2tlbkVuZHBvaW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRva2VuRW5kcG9pbnQgPSB0aGlzLl90b2tlbkVuZHBvaW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlckluZm9FbmRwb2ludCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51c2VySW5mb0VuZHBvaW50ID0gdGhpcy5fdXNlckluZm9FbmRwb2ludDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkF1dGhlbnRpY2F0ZU9pZGMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2F1dGhvcml6YXRpb25FbmRwb2ludCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NsaWVudElkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2xpZW50U2VjcmV0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faXNzdWVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2NvcGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZXNzaW9uQ29va2llTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nlc3Npb25UaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdG9rZW5FbmRwb2ludCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VzZXJJbmZvRW5kcG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zID0gdmFsdWUuYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXM7XG4gICAgICB0aGlzLl9hdXRob3JpemF0aW9uRW5kcG9pbnQgPSB2YWx1ZS5hdXRob3JpemF0aW9uRW5kcG9pbnQ7XG4gICAgICB0aGlzLl9jbGllbnRJZCA9IHZhbHVlLmNsaWVudElkO1xuICAgICAgdGhpcy5fY2xpZW50U2VjcmV0ID0gdmFsdWUuY2xpZW50U2VjcmV0O1xuICAgICAgdGhpcy5faXNzdWVyID0gdmFsdWUuaXNzdWVyO1xuICAgICAgdGhpcy5fb25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0ID0gdmFsdWUub25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0O1xuICAgICAgdGhpcy5fc2NvcGUgPSB2YWx1ZS5zY29wZTtcbiAgICAgIHRoaXMuX3Nlc3Npb25Db29raWVOYW1lID0gdmFsdWUuc2Vzc2lvbkNvb2tpZU5hbWU7XG4gICAgICB0aGlzLl9zZXNzaW9uVGltZW91dCA9IHZhbHVlLnNlc3Npb25UaW1lb3V0O1xuICAgICAgdGhpcy5fdG9rZW5FbmRwb2ludCA9IHZhbHVlLnRva2VuRW5kcG9pbnQ7XG4gICAgICB0aGlzLl91c2VySW5mb0VuZHBvaW50ID0gdmFsdWUudXNlckluZm9FbmRwb2ludDtcbiAgICB9XG4gIH1cblxuICAvLyBhdXRoZW50aWNhdGlvbl9yZXF1ZXN0X2V4dHJhX3BhcmFtcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IGF1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgnYXV0aGVudGljYXRpb25fcmVxdWVzdF9leHRyYV9wYXJhbXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcygpIHtcbiAgICB0aGlzLl9hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXM7XG4gIH1cblxuICAvLyBhdXRob3JpemF0aW9uX2VuZHBvaW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2F1dGhvcml6YXRpb25FbmRwb2ludD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXV0aG9yaXphdGlvbkVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0aG9yaXphdGlvbl9lbmRwb2ludCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0aG9yaXphdGlvbkVuZHBvaW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdXRob3JpemF0aW9uRW5kcG9pbnQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0aG9yaXphdGlvbkVuZHBvaW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhvcml6YXRpb25FbmRwb2ludDtcbiAgfVxuXG4gIC8vIGNsaWVudF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jbGllbnRJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2xpZW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbGllbnRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNsaWVudElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGllbnRJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbGllbnRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRJZDtcbiAgfVxuXG4gIC8vIGNsaWVudF9zZWNyZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY2xpZW50U2VjcmV0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjbGllbnRTZWNyZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbGllbnRfc2VjcmV0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjbGllbnRTZWNyZXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsaWVudFNlY3JldCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbGllbnRTZWNyZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50U2VjcmV0O1xuICB9XG5cbiAgLy8gaXNzdWVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lzc3Vlcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaXNzdWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaXNzdWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBpc3N1ZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lzc3VlciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpc3N1ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNzdWVyO1xuICB9XG5cbiAgLy8gb25fdW5hdXRoZW50aWNhdGVkX3JlcXVlc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vblVuYXV0aGVudGljYXRlZFJlcXVlc3Q/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG9uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29uX3VuYXV0aGVudGljYXRlZF9yZXF1ZXN0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBvblVuYXV0aGVudGljYXRlZFJlcXVlc3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX29uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCgpIHtcbiAgICB0aGlzLl9vblVuYXV0aGVudGljYXRlZFJlcXVlc3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9uVW5hdXRoZW50aWNhdGVkUmVxdWVzdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vblVuYXV0aGVudGljYXRlZFJlcXVlc3Q7XG4gIH1cblxuICAvLyBzY29wZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Njb3BlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzY29wZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Njb3BlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzY29wZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2NvcGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTY29wZSgpIHtcbiAgICB0aGlzLl9zY29wZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NvcGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcGU7XG4gIH1cblxuICAvLyBzZXNzaW9uX2Nvb2tpZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2Vzc2lvbkNvb2tpZU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlc3Npb25Db29raWVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2Vzc2lvbl9jb29raWVfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2Vzc2lvbkNvb2tpZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Nlc3Npb25Db29raWVOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2Vzc2lvbkNvb2tpZU5hbWUoKSB7XG4gICAgdGhpcy5fc2Vzc2lvbkNvb2tpZU5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlc3Npb25Db29raWVOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25Db29raWVOYW1lO1xuICB9XG5cbiAgLy8gc2Vzc2lvbl90aW1lb3V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2Vzc2lvblRpbWVvdXQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHNlc3Npb25UaW1lb3V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc2Vzc2lvbl90aW1lb3V0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXNzaW9uVGltZW91dCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2Vzc2lvblRpbWVvdXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXNzaW9uVGltZW91dCgpIHtcbiAgICB0aGlzLl9zZXNzaW9uVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2Vzc2lvblRpbWVvdXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblRpbWVvdXQ7XG4gIH1cblxuICAvLyB0b2tlbl9lbmRwb2ludCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90b2tlbkVuZHBvaW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0b2tlbkVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndG9rZW5fZW5kcG9pbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRva2VuRW5kcG9pbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Rva2VuRW5kcG9pbnQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdG9rZW5FbmRwb2ludElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90b2tlbkVuZHBvaW50O1xuICB9XG5cbiAgLy8gdXNlcl9pbmZvX2VuZHBvaW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VzZXJJbmZvRW5kcG9pbnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVzZXJJbmZvRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VyX2luZm9fZW5kcG9pbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZXJJbmZvRW5kcG9pbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJJbmZvRW5kcG9pbnQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlckluZm9FbmRwb2ludElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VySW5mb0VuZHBvaW50O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZpeGVkUmVzcG9uc2Uge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjY29udGVudF90eXBlIEFsYkxpc3RlbmVyI2NvbnRlbnRfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgY29udGVudFR5cGU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYWxiX2xpc3RlbmVyI21lc3NhZ2VfYm9keSBBbGJMaXN0ZW5lciNtZXNzYWdlX2JvZHl9XG4gICovXG4gIHJlYWRvbmx5IG1lc3NhZ2VCb2R5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjc3RhdHVzX2NvZGUgQWxiTGlzdGVuZXIjc3RhdHVzX2NvZGV9XG4gICovXG4gIHJlYWRvbmx5IHN0YXR1c0NvZGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25GaXhlZFJlc3BvbnNlVG9UZXJyYWZvcm0oc3RydWN0PzogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRml4ZWRSZXNwb25zZU91dHB1dFJlZmVyZW5jZSB8IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZpeGVkUmVzcG9uc2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29udGVudF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRlbnRUeXBlKSxcbiAgICBtZXNzYWdlX2JvZHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWVzc2FnZUJvZHkpLFxuICAgIHN0YXR1c19jb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXR1c0NvZGUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZpeGVkUmVzcG9uc2VUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25GaXhlZFJlc3BvbnNlT3V0cHV0UmVmZXJlbmNlIHwgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRml4ZWRSZXNwb25zZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgY29udGVudF90eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb250ZW50VHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbWVzc2FnZV9ib2R5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tZXNzYWdlQm9keSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc3RhdHVzX2NvZGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN0YXR1c0NvZGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRml4ZWRSZXNwb25zZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRml4ZWRSZXNwb25zZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29udGVudFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29udGVudFR5cGUgPSB0aGlzLl9jb250ZW50VHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21lc3NhZ2VCb2R5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1lc3NhZ2VCb2R5ID0gdGhpcy5fbWVzc2FnZUJvZHk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGF0dXNDb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXR1c0NvZGUgPSB0aGlzLl9zdGF0dXNDb2RlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRml4ZWRSZXNwb25zZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvbnRlbnRUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWVzc2FnZUJvZHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGF0dXNDb2RlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb250ZW50VHlwZSA9IHZhbHVlLmNvbnRlbnRUeXBlO1xuICAgICAgdGhpcy5fbWVzc2FnZUJvZHkgPSB2YWx1ZS5tZXNzYWdlQm9keTtcbiAgICAgIHRoaXMuX3N0YXR1c0NvZGUgPSB2YWx1ZS5zdGF0dXNDb2RlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbnRlbnRfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jb250ZW50VHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29udGVudFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250ZW50X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnRlbnRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb250ZW50VHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb250ZW50VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50VHlwZTtcbiAgfVxuXG4gIC8vIG1lc3NhZ2VfYm9keSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXNzYWdlQm9keT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWVzc2FnZUJvZHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXNzYWdlX2JvZHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lc3NhZ2VCb2R5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXNzYWdlQm9keSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1lc3NhZ2VCb2R5KCkge1xuICAgIHRoaXMuX21lc3NhZ2VCb2R5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXNzYWdlQm9keUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlQm9keTtcbiAgfVxuXG4gIC8vIHN0YXR1c19jb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhdHVzQ29kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RhdHVzQ29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1c19jb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0dXNDb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0dXNDb2RlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RhdHVzQ29kZSgpIHtcbiAgICB0aGlzLl9zdGF0dXNDb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0dXNDb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1c0NvZGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFN0aWNraW5lc3Mge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjZHVyYXRpb24gQWxiTGlzdGVuZXIjZHVyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGR1cmF0aW9uOiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciNlbmFibGVkIEFsYkxpc3RlbmVyI2VuYWJsZWR9XG4gICovXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkU3RpY2tpbmVzc1RvVGVycmFmb3JtKHN0cnVjdD86IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRTdGlja2luZXNzT3V0cHV0UmVmZXJlbmNlIHwgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFN0aWNraW5lc3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZHVyYXRpb246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZHVyYXRpb24pLFxuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRTdGlja2luZXNzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFN0aWNraW5lc3NPdXRwdXRSZWZlcmVuY2UgfCBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkU3RpY2tpbmVzcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZHVyYXRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmR1cmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBlbmFibGVkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFN0aWNraW5lc3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRTdGlja2luZXNzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kdXJhdGlvbiA9IHRoaXMuX2R1cmF0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVkID0gdGhpcy5fZW5hYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRTdGlja2luZXNzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZHVyYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kdXJhdGlvbiA9IHZhbHVlLmR1cmF0aW9uO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlLmVuYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZHVyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZHVyYXRpb24/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZHVyYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGR1cmF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kdXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkdXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kdXJhdGlvbjtcbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlZCgpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFRhcmdldEdyb3VwIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYWxiX2xpc3RlbmVyI2FybiBBbGJMaXN0ZW5lciNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjd2VpZ2h0IEFsYkxpc3RlbmVyI3dlaWdodH1cbiAgKi9cbiAgcmVhZG9ubHkgd2VpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFRhcmdldEdyb3VwVG9UZXJyYWZvcm0oc3RydWN0PzogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFRhcmdldEdyb3VwIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgd2VpZ2h0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLndlaWdodCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFRhcmdldEdyb3VwVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFRhcmdldEdyb3VwIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB3ZWlnaHQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLndlaWdodCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkVGFyZ2V0R3JvdXBPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFRhcmdldEdyb3VwIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXJuID0gdGhpcy5fYXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fd2VpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LndlaWdodCA9IHRoaXMuX3dlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRUYXJnZXRHcm91cCB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl93ZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXJuID0gdmFsdWUuYXJuO1xuICAgICAgdGhpcy5fd2VpZ2h0ID0gdmFsdWUud2VpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FybjtcbiAgfVxuXG4gIC8vIHdlaWdodCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93ZWlnaHQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHdlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3dlaWdodCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgd2VpZ2h0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl93ZWlnaHQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXZWlnaHQoKSB7XG4gICAgdGhpcy5fd2VpZ2h0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3ZWlnaHRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2VpZ2h0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkVGFyZ2V0R3JvdXBMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkVGFyZ2V0R3JvdXBbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFRhcmdldEdyb3VwT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRUYXJnZXRHcm91cE91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmQge1xuICAvKipcbiAgKiBzdGlja2luZXNzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjc3RpY2tpbmVzcyBBbGJMaXN0ZW5lciNzdGlja2luZXNzfVxuICAqL1xuICByZWFkb25seSBzdGlja2luZXNzPzogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFN0aWNraW5lc3M7XG4gIC8qKlxuICAqIHRhcmdldF9ncm91cCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYWxiX2xpc3RlbmVyI3RhcmdldF9ncm91cCBBbGJMaXN0ZW5lciN0YXJnZXRfZ3JvdXB9XG4gICovXG4gIHJlYWRvbmx5IHRhcmdldEdyb3VwOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkVGFyZ2V0R3JvdXBbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFRvVGVycmFmb3JtKHN0cnVjdD86IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRPdXRwdXRSZWZlcmVuY2UgfCBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHN0aWNraW5lc3M6IGFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRTdGlja2luZXNzVG9UZXJyYWZvcm0oc3RydWN0IS5zdGlja2luZXNzKSxcbiAgICB0YXJnZXRfZ3JvdXA6IGNka3RmLmxpc3RNYXBwZXIoYWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFRhcmdldEdyb3VwVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEudGFyZ2V0R3JvdXApLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkT3V0cHV0UmVmZXJlbmNlIHwgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgc3RpY2tpbmVzczoge1xuICAgICAgdmFsdWU6IGFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRTdGlja2luZXNzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zdGlja2luZXNzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFN0aWNraW5lc3NMaXN0XCIsXG4gICAgfSxcbiAgICB0YXJnZXRfZ3JvdXA6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRUYXJnZXRHcm91cFRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnRhcmdldEdyb3VwKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkVGFyZ2V0R3JvdXBMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3N0aWNraW5lc3M/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RpY2tpbmVzcyA9IHRoaXMuX3N0aWNraW5lc3M/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXJnZXRHcm91cD8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YXJnZXRHcm91cCA9IHRoaXMuX3RhcmdldEdyb3VwPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N0aWNraW5lc3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhcmdldEdyb3VwLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3N0aWNraW5lc3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnN0aWNraW5lc3M7XG4gICAgICB0aGlzLl90YXJnZXRHcm91cC5pbnRlcm5hbFZhbHVlID0gdmFsdWUudGFyZ2V0R3JvdXA7XG4gICAgfVxuICB9XG5cbiAgLy8gc3RpY2tpbmVzcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGlja2luZXNzID0gbmV3IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRTdGlja2luZXNzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwic3RpY2tpbmVzc1wiKTtcbiAgcHVibGljIGdldCBzdGlja2luZXNzKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGlja2luZXNzO1xuICB9XG4gIHB1YmxpYyBwdXRTdGlja2luZXNzKHZhbHVlOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkU3RpY2tpbmVzcykge1xuICAgIHRoaXMuX3N0aWNraW5lc3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0aWNraW5lc3MoKSB7XG4gICAgdGhpcy5fc3RpY2tpbmVzcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGlja2luZXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0aWNraW5lc3MuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRhcmdldF9ncm91cCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90YXJnZXRHcm91cCA9IG5ldyBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkVGFyZ2V0R3JvdXBMaXN0KHRoaXMsIFwidGFyZ2V0X2dyb3VwXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRhcmdldEdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRHcm91cDtcbiAgfVxuICBwdWJsaWMgcHV0VGFyZ2V0R3JvdXAodmFsdWU6IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRUYXJnZXRHcm91cFtdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YXJnZXRHcm91cC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldEdyb3VwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldEdyb3VwLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uUmVkaXJlY3Qge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjaG9zdCBBbGJMaXN0ZW5lciNob3N0fVxuICAqL1xuICByZWFkb25seSBob3N0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjcGF0aCBBbGJMaXN0ZW5lciNwYXRofVxuICAqL1xuICByZWFkb25seSBwYXRoPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjcG9ydCBBbGJMaXN0ZW5lciNwb3J0fVxuICAqL1xuICByZWFkb25seSBwb3J0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjcHJvdG9jb2wgQWxiTGlzdGVuZXIjcHJvdG9jb2x9XG4gICovXG4gIHJlYWRvbmx5IHByb3RvY29sPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjcXVlcnkgQWxiTGlzdGVuZXIjcXVlcnl9XG4gICovXG4gIHJlYWRvbmx5IHF1ZXJ5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjc3RhdHVzX2NvZGUgQWxiTGlzdGVuZXIjc3RhdHVzX2NvZGV9XG4gICovXG4gIHJlYWRvbmx5IHN0YXR1c0NvZGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvblJlZGlyZWN0VG9UZXJyYWZvcm0oc3RydWN0PzogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uUmVkaXJlY3RPdXRwdXRSZWZlcmVuY2UgfCBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25SZWRpcmVjdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBob3N0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3QpLFxuICAgIHBhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGF0aCksXG4gICAgcG9ydDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgcXVlcnk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucXVlcnkpLFxuICAgIHN0YXR1c19jb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXR1c0NvZGUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvblJlZGlyZWN0VG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uUmVkaXJlY3RPdXRwdXRSZWZlcmVuY2UgfCBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25SZWRpcmVjdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgaG9zdDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaG9zdCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcGF0aDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucGF0aCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcG9ydDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcHJvdG9jb2w6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByb3RvY29sKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBxdWVyeToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucXVlcnkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHN0YXR1c19jb2RlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zdGF0dXNDb2RlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvblJlZGlyZWN0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25SZWRpcmVjdCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faG9zdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ob3N0ID0gdGhpcy5faG9zdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGF0aCA9IHRoaXMuX3BhdGg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wb3J0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBvcnQgPSB0aGlzLl9wb3J0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvdG9jb2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvdG9jb2wgPSB0aGlzLl9wcm90b2NvbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3F1ZXJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnF1ZXJ5ID0gdGhpcy5fcXVlcnk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGF0dXNDb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXR1c0NvZGUgPSB0aGlzLl9zdGF0dXNDb2RlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uUmVkaXJlY3QgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9ob3N0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGF0aCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BvcnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcm90b2NvbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3F1ZXJ5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RhdHVzQ29kZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faG9zdCA9IHZhbHVlLmhvc3Q7XG4gICAgICB0aGlzLl9wYXRoID0gdmFsdWUucGF0aDtcbiAgICAgIHRoaXMuX3BvcnQgPSB2YWx1ZS5wb3J0O1xuICAgICAgdGhpcy5fcHJvdG9jb2wgPSB2YWx1ZS5wcm90b2NvbDtcbiAgICAgIHRoaXMuX3F1ZXJ5ID0gdmFsdWUucXVlcnk7XG4gICAgICB0aGlzLl9zdGF0dXNDb2RlID0gdmFsdWUuc3RhdHVzQ29kZTtcbiAgICB9XG4gIH1cblxuICAvLyBob3N0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hvc3Q/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBob3N0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ob3N0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SG9zdCgpIHtcbiAgICB0aGlzLl9ob3N0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBob3N0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3Q7XG4gIH1cblxuICAvLyBwYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXRoJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXRoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGF0aCgpIHtcbiAgICB0aGlzLl9wYXRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BvcnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwb3J0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wb3J0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UG9ydCgpIHtcbiAgICB0aGlzLl9wb3J0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnQ7XG4gIH1cblxuICAvLyBwcm90b2NvbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm90b2NvbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm90b2NvbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvdG9jb2wodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb3RvY29sID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvdG9jb2woKSB7XG4gICAgdGhpcy5fcHJvdG9jb2wgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3RvY29sSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3RvY29sO1xuICB9XG5cbiAgLy8gcXVlcnkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcXVlcnk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncXVlcnknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHF1ZXJ5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9xdWVyeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFF1ZXJ5KCkge1xuICAgIHRoaXMuX3F1ZXJ5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBxdWVyeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeTtcbiAgfVxuXG4gIC8vIHN0YXR1c19jb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N0YXR1c0NvZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0YXR1c0NvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXNfY29kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhdHVzQ29kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdHVzQ29kZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0dXNDb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1c0NvZGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYWxiX2xpc3RlbmVyI29yZGVyIEFsYkxpc3RlbmVyI29yZGVyfVxuICAqL1xuICByZWFkb25seSBvcmRlcj86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYWxiX2xpc3RlbmVyI3RhcmdldF9ncm91cF9hcm4gQWxiTGlzdGVuZXIjdGFyZ2V0X2dyb3VwX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgdGFyZ2V0R3JvdXBBcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciN0eXBlIEFsYkxpc3RlbmVyI3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgLyoqXG4gICogYXV0aGVudGljYXRlX2NvZ25pdG8gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciNhdXRoZW50aWNhdGVfY29nbml0byBBbGJMaXN0ZW5lciNhdXRoZW50aWNhdGVfY29nbml0b31cbiAgKi9cbiAgcmVhZG9ubHkgYXV0aGVudGljYXRlQ29nbml0bz86IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkF1dGhlbnRpY2F0ZUNvZ25pdG87XG4gIC8qKlxuICAqIGF1dGhlbnRpY2F0ZV9vaWRjIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjYXV0aGVudGljYXRlX29pZGMgQWxiTGlzdGVuZXIjYXV0aGVudGljYXRlX29pZGN9XG4gICovXG4gIHJlYWRvbmx5IGF1dGhlbnRpY2F0ZU9pZGM/OiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVPaWRjO1xuICAvKipcbiAgKiBmaXhlZF9yZXNwb25zZSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYWxiX2xpc3RlbmVyI2ZpeGVkX3Jlc3BvbnNlIEFsYkxpc3RlbmVyI2ZpeGVkX3Jlc3BvbnNlfVxuICAqL1xuICByZWFkb25seSBmaXhlZFJlc3BvbnNlPzogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRml4ZWRSZXNwb25zZTtcbiAgLyoqXG4gICogZm9yd2FyZCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYWxiX2xpc3RlbmVyI2ZvcndhcmQgQWxiTGlzdGVuZXIjZm9yd2FyZH1cbiAgKi9cbiAgcmVhZG9ubHkgZm9yd2FyZD86IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmQ7XG4gIC8qKlxuICAqIHJlZGlyZWN0IGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIjcmVkaXJlY3QgQWxiTGlzdGVuZXIjcmVkaXJlY3R9XG4gICovXG4gIHJlYWRvbmx5IHJlZGlyZWN0PzogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uUmVkaXJlY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBvcmRlcjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5vcmRlciksXG4gICAgdGFyZ2V0X2dyb3VwX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXRHcm91cEFybiksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICBhdXRoZW50aWNhdGVfY29nbml0bzogYWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uQXV0aGVudGljYXRlQ29nbml0b1RvVGVycmFmb3JtKHN0cnVjdCEuYXV0aGVudGljYXRlQ29nbml0byksXG4gICAgYXV0aGVudGljYXRlX29pZGM6IGFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkF1dGhlbnRpY2F0ZU9pZGNUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1dGhlbnRpY2F0ZU9pZGMpLFxuICAgIGZpeGVkX3Jlc3BvbnNlOiBhbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25GaXhlZFJlc3BvbnNlVG9UZXJyYWZvcm0oc3RydWN0IS5maXhlZFJlc3BvbnNlKSxcbiAgICBmb3J3YXJkOiBhbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkVG9UZXJyYWZvcm0oc3RydWN0IS5mb3J3YXJkKSxcbiAgICByZWRpcmVjdDogYWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uUmVkaXJlY3RUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlZGlyZWN0KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgb3JkZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm9yZGVyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICB0YXJnZXRfZ3JvdXBfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50YXJnZXRHcm91cEFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYXV0aGVudGljYXRlX2NvZ25pdG86IHtcbiAgICAgIHZhbHVlOiBhbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVDb2duaXRvVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hdXRoZW50aWNhdGVDb2duaXRvKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uQXV0aGVudGljYXRlQ29nbml0b0xpc3RcIixcbiAgICB9LFxuICAgIGF1dGhlbnRpY2F0ZV9vaWRjOiB7XG4gICAgICB2YWx1ZTogYWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uQXV0aGVudGljYXRlT2lkY1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXV0aGVudGljYXRlT2lkYyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkF1dGhlbnRpY2F0ZU9pZGNMaXN0XCIsXG4gICAgfSxcbiAgICBmaXhlZF9yZXNwb25zZToge1xuICAgICAgdmFsdWU6IGFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZpeGVkUmVzcG9uc2VUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmZpeGVkUmVzcG9uc2UpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25GaXhlZFJlc3BvbnNlTGlzdFwiLFxuICAgIH0sXG4gICAgZm9yd2FyZDoge1xuICAgICAgdmFsdWU6IGFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmZvcndhcmQpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkTGlzdFwiLFxuICAgIH0sXG4gICAgcmVkaXJlY3Q6IHtcbiAgICAgIHZhbHVlOiBhbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25SZWRpcmVjdFRvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVkaXJlY3QpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25SZWRpcmVjdExpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fb3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3JkZXIgPSB0aGlzLl9vcmRlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhcmdldEdyb3VwQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhcmdldEdyb3VwQXJuID0gdGhpcy5fdGFyZ2V0R3JvdXBBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl90eXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnR5cGUgPSB0aGlzLl90eXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXV0aGVudGljYXRlQ29nbml0bz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRoZW50aWNhdGVDb2duaXRvID0gdGhpcy5fYXV0aGVudGljYXRlQ29nbml0bz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2F1dGhlbnRpY2F0ZU9pZGM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXV0aGVudGljYXRlT2lkYyA9IHRoaXMuX2F1dGhlbnRpY2F0ZU9pZGM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9maXhlZFJlc3BvbnNlPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpeGVkUmVzcG9uc2UgPSB0aGlzLl9maXhlZFJlc3BvbnNlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZm9yd2FyZD8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5mb3J3YXJkID0gdGhpcy5fZm9yd2FyZD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlZGlyZWN0Py5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlZGlyZWN0ID0gdGhpcy5fcmVkaXJlY3Q/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb3JkZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YXJnZXRHcm91cEFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hdXRoZW50aWNhdGVDb2duaXRvLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hdXRoZW50aWNhdGVPaWRjLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9maXhlZFJlc3BvbnNlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9mb3J3YXJkLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZWRpcmVjdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX29yZGVyID0gdmFsdWUub3JkZXI7XG4gICAgICB0aGlzLl90YXJnZXRHcm91cEFybiA9IHZhbHVlLnRhcmdldEdyb3VwQXJuO1xuICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlLnR5cGU7XG4gICAgICB0aGlzLl9hdXRoZW50aWNhdGVDb2duaXRvLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hdXRoZW50aWNhdGVDb2duaXRvO1xuICAgICAgdGhpcy5fYXV0aGVudGljYXRlT2lkYy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYXV0aGVudGljYXRlT2lkYztcbiAgICAgIHRoaXMuX2ZpeGVkUmVzcG9uc2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmZpeGVkUmVzcG9uc2U7XG4gICAgICB0aGlzLl9mb3J3YXJkLmludGVybmFsVmFsdWUgPSB2YWx1ZS5mb3J3YXJkO1xuICAgICAgdGhpcy5fcmVkaXJlY3QuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnJlZGlyZWN0O1xuICAgIH1cbiAgfVxuXG4gIC8vIG9yZGVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3JkZXI/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG9yZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnb3JkZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9yZGVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vcmRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9yZGVyKCkge1xuICAgIHRoaXMuX29yZGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvcmRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vcmRlcjtcbiAgfVxuXG4gIC8vIHRhcmdldF9ncm91cF9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFyZ2V0R3JvdXBBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRhcmdldEdyb3VwQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFyZ2V0X2dyb3VwX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFyZ2V0R3JvdXBBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RhcmdldEdyb3VwQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFyZ2V0R3JvdXBBcm4oKSB7XG4gICAgdGhpcy5fdGFyZ2V0R3JvdXBBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldEdyb3VwQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldEdyb3VwQXJuO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvLyBhdXRoZW50aWNhdGVfY29nbml0byAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRoZW50aWNhdGVDb2duaXRvID0gbmV3IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkF1dGhlbnRpY2F0ZUNvZ25pdG9PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJhdXRoZW50aWNhdGVfY29nbml0b1wiKTtcbiAgcHVibGljIGdldCBhdXRoZW50aWNhdGVDb2duaXRvKCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRoZW50aWNhdGVDb2duaXRvO1xuICB9XG4gIHB1YmxpYyBwdXRBdXRoZW50aWNhdGVDb2duaXRvKHZhbHVlOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVDb2duaXRvKSB7XG4gICAgdGhpcy5fYXV0aGVudGljYXRlQ29nbml0by5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0aGVudGljYXRlQ29nbml0bygpIHtcbiAgICB0aGlzLl9hdXRoZW50aWNhdGVDb2duaXRvLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhlbnRpY2F0ZUNvZ25pdG9JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aGVudGljYXRlQ29nbml0by5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gYXV0aGVudGljYXRlX29pZGMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0aGVudGljYXRlT2lkYyA9IG5ldyBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVPaWRjT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiYXV0aGVudGljYXRlX29pZGNcIik7XG4gIHB1YmxpYyBnZXQgYXV0aGVudGljYXRlT2lkYygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aGVudGljYXRlT2lkYztcbiAgfVxuICBwdWJsaWMgcHV0QXV0aGVudGljYXRlT2lkYyh2YWx1ZTogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uQXV0aGVudGljYXRlT2lkYykge1xuICAgIHRoaXMuX2F1dGhlbnRpY2F0ZU9pZGMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dGhlbnRpY2F0ZU9pZGMoKSB7XG4gICAgdGhpcy5fYXV0aGVudGljYXRlT2lkYy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRoZW50aWNhdGVPaWRjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhlbnRpY2F0ZU9pZGMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGZpeGVkX3Jlc3BvbnNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpeGVkUmVzcG9uc2UgPSBuZXcgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRml4ZWRSZXNwb25zZU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImZpeGVkX3Jlc3BvbnNlXCIpO1xuICBwdWJsaWMgZ2V0IGZpeGVkUmVzcG9uc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpeGVkUmVzcG9uc2U7XG4gIH1cbiAgcHVibGljIHB1dEZpeGVkUmVzcG9uc2UodmFsdWU6IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZpeGVkUmVzcG9uc2UpIHtcbiAgICB0aGlzLl9maXhlZFJlc3BvbnNlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaXhlZFJlc3BvbnNlKCkge1xuICAgIHRoaXMuX2ZpeGVkUmVzcG9uc2UuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZml4ZWRSZXNwb25zZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maXhlZFJlc3BvbnNlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBmb3J3YXJkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZvcndhcmQgPSBuZXcgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZE91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImZvcndhcmRcIik7XG4gIHB1YmxpYyBnZXQgZm9yd2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yd2FyZDtcbiAgfVxuICBwdWJsaWMgcHV0Rm9yd2FyZCh2YWx1ZTogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZCkge1xuICAgIHRoaXMuX2ZvcndhcmQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZvcndhcmQoKSB7XG4gICAgdGhpcy5fZm9yd2FyZC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmb3J3YXJkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcndhcmQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHJlZGlyZWN0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlZGlyZWN0ID0gbmV3IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvblJlZGlyZWN0T3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwicmVkaXJlY3RcIik7XG4gIHB1YmxpYyBnZXQgcmVkaXJlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0O1xuICB9XG4gIHB1YmxpYyBwdXRSZWRpcmVjdCh2YWx1ZTogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uUmVkaXJlY3QpIHtcbiAgICB0aGlzLl9yZWRpcmVjdC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVkaXJlY3QoKSB7XG4gICAgdGhpcy5fcmVkaXJlY3QuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVkaXJlY3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3QuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbk91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25PdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBbGJMaXN0ZW5lclRpbWVvdXRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYWxiX2xpc3RlbmVyI3JlYWQgQWxiTGlzdGVuZXIjcmVhZH1cbiAgKi9cbiAgcmVhZG9ubHkgcmVhZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsYkxpc3RlbmVyVGltZW91dHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBbGJMaXN0ZW5lclRpbWVvdXRzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVhZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWFkKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhbGJMaXN0ZW5lclRpbWVvdXRzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQWxiTGlzdGVuZXJUaW1lb3V0cyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICByZWFkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZWFkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFsYkxpc3RlbmVyVGltZW91dHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFsYkxpc3RlbmVyVGltZW91dHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3JlYWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVhZCA9IHRoaXMuX3JlYWQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBbGJMaXN0ZW5lclRpbWVvdXRzIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlYWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVhZCA9IHZhbHVlLnJlYWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVhZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWFkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVhZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVhZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVhZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlYWQoKSB7XG4gICAgdGhpcy5fcmVhZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVhZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWFkO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hbGJfbGlzdGVuZXIgYXdzX2FsYl9saXN0ZW5lcn1cbiovXG5leHBvcnQgY2xhc3MgQWxiTGlzdGVuZXIgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiYXdzX2FsYl9saXN0ZW5lclwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBBbGJMaXN0ZW5lciByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBBbGJMaXN0ZW5lciB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgQWxiTGlzdGVuZXIgdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciNpbXBvcnQgaW1wb3J0IHNlY3Rpb259IGluIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UgZm9yIHRoZSBpZCB0byB1c2VcbiAgKiBAcGFyYW0gcHJvdmlkZXI/IE9wdGlvbmFsIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciB3aGVyZSB0aGUgQWxiTGlzdGVuZXIgdG8gaW1wb3J0IGlzIGZvdW5kXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVDb25maWdGb3JJbXBvcnQoc2NvcGU6IENvbnN0cnVjdCwgaW1wb3J0VG9JZDogc3RyaW5nLCBpbXBvcnRGcm9tSWQ6IHN0cmluZywgcHJvdmlkZXI/OiBjZGt0Zi5UZXJyYWZvcm1Qcm92aWRlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNka3RmLkltcG9ydGFibGVSZXNvdXJjZShzY29wZSwgaW1wb3J0VG9JZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwiYXdzX2FsYl9saXN0ZW5lclwiLCBpbXBvcnRJZDogaW1wb3J0RnJvbUlkLCBwcm92aWRlciB9KTtcbiAgICAgIH1cblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2FsYl9saXN0ZW5lciBhd3NfYWxiX2xpc3RlbmVyfSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBBbGJMaXN0ZW5lckNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBbGJMaXN0ZW5lckNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2FsYl9saXN0ZW5lcicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnLFxuICAgICAgICBwcm92aWRlclZlcnNpb246ICczLjc2LjEnLFxuICAgICAgICBwcm92aWRlclZlcnNpb25Db25zdHJhaW50OiAnfj4gMy4wJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlLFxuICAgICAgcHJvdmlzaW9uZXJzOiBjb25maWcucHJvdmlzaW9uZXJzLFxuICAgICAgY29ubmVjdGlvbjogY29uZmlnLmNvbm5lY3Rpb24sXG4gICAgICBmb3JFYWNoOiBjb25maWcuZm9yRWFjaFxuICAgIH0pO1xuICAgIHRoaXMuX2FscG5Qb2xpY3kgPSBjb25maWcuYWxwblBvbGljeTtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUFybiA9IGNvbmZpZy5jZXJ0aWZpY2F0ZUFybjtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9sb2FkQmFsYW5jZXJBcm4gPSBjb25maWcubG9hZEJhbGFuY2VyQXJuO1xuICAgIHRoaXMuX3BvcnQgPSBjb25maWcucG9ydDtcbiAgICB0aGlzLl9wcm90b2NvbCA9IGNvbmZpZy5wcm90b2NvbDtcbiAgICB0aGlzLl9zc2xQb2xpY3kgPSBjb25maWcuc3NsUG9saWN5O1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fZGVmYXVsdEFjdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmRlZmF1bHRBY3Rpb247XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy50aW1lb3V0cztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWxwbl9wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxwblBvbGljeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWxwblBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FscG5fcG9saWN5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBhbHBuUG9saWN5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hbHBuUG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxwblBvbGljeSgpIHtcbiAgICB0aGlzLl9hbHBuUG9saWN5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbHBuUG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FscG5Qb2xpY3k7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENlcnRpZmljYXRlQXJuKCkge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZUFybjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIGxvYWRfYmFsYW5jZXJfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2xvYWRCYWxhbmNlckFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2VyQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9hZF9iYWxhbmNlcl9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvYWRCYWxhbmNlckFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VyQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvYWRCYWxhbmNlckFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2FkQmFsYW5jZXJBcm47XG4gIH1cblxuICAvLyBwb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BvcnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwb3J0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wb3J0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UG9ydCgpIHtcbiAgICB0aGlzLl9wb3J0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnQ7XG4gIH1cblxuICAvLyBwcm90b2NvbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb3RvY29sPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3RvY29sJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm90b2NvbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvdG9jb2wgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcm90b2NvbCgpIHtcbiAgICB0aGlzLl9wcm90b2NvbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2xJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvdG9jb2w7XG4gIH1cblxuICAvLyBzc2xfcG9saWN5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3NsUG9saWN5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzc2xQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzc2xfcG9saWN5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzc2xQb2xpY3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NzbFBvbGljeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNzbFBvbGljeSgpIHtcbiAgICB0aGlzLl9zc2xQb2xpY3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNzbFBvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zc2xQb2xpY3k7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFncycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzX2FsbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIGRlZmF1bHRfYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RlZmF1bHRBY3Rpb24gPSBuZXcgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uTGlzdCh0aGlzLCBcImRlZmF1bHRfYWN0aW9uXCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCBkZWZhdWx0QWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0QWN0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXREZWZhdWx0QWN0aW9uKHZhbHVlOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGVmYXVsdEFjdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmF1bHRBY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdEFjdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGltZW91dHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dHMgPSBuZXcgQWxiTGlzdGVuZXJUaW1lb3V0c091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInRpbWVvdXRzXCIpO1xuICBwdWJsaWMgZ2V0IHRpbWVvdXRzKCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cztcbiAgfVxuICBwdWJsaWMgcHV0VGltZW91dHModmFsdWU6IEFsYkxpc3RlbmVyVGltZW91dHMpIHtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGltZW91dHMoKSB7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWxwbl9wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FscG5Qb2xpY3kpLFxuICAgICAgY2VydGlmaWNhdGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jZXJ0aWZpY2F0ZUFybiksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgbG9hZF9iYWxhbmNlcl9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2xvYWRCYWxhbmNlckFybiksXG4gICAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9wb3J0KSxcbiAgICAgIHByb3RvY29sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wcm90b2NvbCksXG4gICAgICBzc2xfcG9saWN5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zc2xQb2xpY3kpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBkZWZhdWx0X2FjdGlvbjogY2RrdGYubGlzdE1hcHBlcihhbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Ub1RlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fZGVmYXVsdEFjdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHRpbWVvdXRzOiBhbGJMaXN0ZW5lclRpbWVvdXRzVG9UZXJyYWZvcm0odGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBhbHBuX3BvbGljeToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fYWxwblBvbGljeSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGNlcnRpZmljYXRlX2Fybjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fY2VydGlmaWNhdGVBcm4pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBsb2FkX2JhbGFuY2VyX2Fybjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbG9hZEJhbGFuY2VyQXJuKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgcG9ydDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fcG9ydCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHByb3RvY29sOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9wcm90b2NvbCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHNzbF9wb2xpY3k6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3NzbFBvbGljeSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHRhZ3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0YWdzX2FsbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIGRlZmF1bHRfYWN0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvblRvSGNsVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9kZWZhdWx0QWN0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25MaXN0XCIsXG4gICAgICB9LFxuICAgICAgdGltZW91dHM6IHtcbiAgICAgICAgdmFsdWU6IGFsYkxpc3RlbmVyVGltZW91dHNUb0hjbFRlcnJhZm9ybSh0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzdHJ1Y3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBbGJMaXN0ZW5lclRpbWVvdXRzXCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=