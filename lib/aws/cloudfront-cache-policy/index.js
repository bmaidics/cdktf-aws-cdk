"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudfrontCachePolicy = exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToHclTerraform = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform = exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToHclTerraform = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform = exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToHclTerraform = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform = exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToHclTerraform = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform = exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToHclTerraform = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform = exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToHclTerraform = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform = exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToHclTerraform = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.items),
    };
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform;
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        items: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.items),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToHclTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToHclTerraform;
class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference extends cdktf.ComplexObject {
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
        if (this._items !== undefined) {
            hasAnyValues = true;
            internalValueResult.items = this._items;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._items = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._items = value.items;
        }
    }
    get items() {
        return cdktf.Fn.tolist(this.getListAttribute('items'));
    }
    set items(value) {
        this._items = value;
    }
    resetItems() {
        this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get itemsInput() {
        return this._items;
    }
}
exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference = CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference;
_a = JSII_RTTI_SYMBOL_1;
CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference[_a] = { fqn: "@cdktf/aws-cdk.cloudfrontCachePolicy.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference", version: "0.0.0" };
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cookie_behavior: cdktf.stringToTerraform(struct.cookieBehavior),
        cookies: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct.cookies),
    };
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform;
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cookie_behavior: {
            value: cdktf.stringToHclTerraform(struct.cookieBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cookies: {
            value: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToHclTerraform(struct.cookies),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToHclTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToHclTerraform;
class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // cookies - computed: false, optional: true, required: false
        this._cookies = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference(this, "cookies");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._cookieBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.cookieBehavior = this._cookieBehavior;
        }
        if (this._cookies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cookies = this._cookies?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cookieBehavior = undefined;
            this._cookies.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cookieBehavior = value.cookieBehavior;
            this._cookies.internalValue = value.cookies;
        }
    }
    get cookieBehavior() {
        return this.getStringAttribute('cookie_behavior');
    }
    set cookieBehavior(value) {
        this._cookieBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get cookieBehaviorInput() {
        return this._cookieBehavior;
    }
    get cookies() {
        return this._cookies;
    }
    putCookies(value) {
        this._cookies.internalValue = value;
    }
    resetCookies() {
        this._cookies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cookiesInput() {
        return this._cookies.internalValue;
    }
}
exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference = CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference;
_b = JSII_RTTI_SYMBOL_1;
CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference[_b] = { fqn: "@cdktf/aws-cdk.cloudfrontCachePolicy.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference", version: "0.0.0" };
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.items),
    };
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform;
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        items: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.items),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToHclTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToHclTerraform;
class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference extends cdktf.ComplexObject {
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
        if (this._items !== undefined) {
            hasAnyValues = true;
            internalValueResult.items = this._items;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._items = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._items = value.items;
        }
    }
    get items() {
        return cdktf.Fn.tolist(this.getListAttribute('items'));
    }
    set items(value) {
        this._items = value;
    }
    resetItems() {
        this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get itemsInput() {
        return this._items;
    }
}
exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference = CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference;
_c = JSII_RTTI_SYMBOL_1;
CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference[_c] = { fqn: "@cdktf/aws-cdk.cloudfrontCachePolicy.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference", version: "0.0.0" };
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        header_behavior: cdktf.stringToTerraform(struct.headerBehavior),
        headers: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct.headers),
    };
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform;
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        header_behavior: {
            value: cdktf.stringToHclTerraform(struct.headerBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        headers: {
            value: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToHclTerraform(struct.headers),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToHclTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToHclTerraform;
class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // headers - computed: false, optional: true, required: false
        this._headers = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference(this, "headers");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._headerBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerBehavior = this._headerBehavior;
        }
        if (this._headers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._headerBehavior = undefined;
            this._headers.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._headerBehavior = value.headerBehavior;
            this._headers.internalValue = value.headers;
        }
    }
    get headerBehavior() {
        return this.getStringAttribute('header_behavior');
    }
    set headerBehavior(value) {
        this._headerBehavior = value;
    }
    resetHeaderBehavior() {
        this._headerBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headerBehaviorInput() {
        return this._headerBehavior;
    }
    get headers() {
        return this._headers;
    }
    putHeaders(value) {
        this._headers.internalValue = value;
    }
    resetHeaders() {
        this._headers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headersInput() {
        return this._headers.internalValue;
    }
}
exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference = CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference;
_d = JSII_RTTI_SYMBOL_1;
CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference[_d] = { fqn: "@cdktf/aws-cdk.cloudfrontCachePolicy.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference", version: "0.0.0" };
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.items),
    };
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform;
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        items: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.items),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToHclTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToHclTerraform;
class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference extends cdktf.ComplexObject {
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
        if (this._items !== undefined) {
            hasAnyValues = true;
            internalValueResult.items = this._items;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._items = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._items = value.items;
        }
    }
    get items() {
        return cdktf.Fn.tolist(this.getListAttribute('items'));
    }
    set items(value) {
        this._items = value;
    }
    resetItems() {
        this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get itemsInput() {
        return this._items;
    }
}
exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference = CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference;
_e = JSII_RTTI_SYMBOL_1;
CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference[_e] = { fqn: "@cdktf/aws-cdk.cloudfrontCachePolicy.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference", version: "0.0.0" };
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        query_string_behavior: cdktf.stringToTerraform(struct.queryStringBehavior),
        query_strings: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct.queryStrings),
    };
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform;
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        query_string_behavior: {
            value: cdktf.stringToHclTerraform(struct.queryStringBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        query_strings: {
            value: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToHclTerraform(struct.queryStrings),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToHclTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToHclTerraform;
class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // query_strings - computed: false, optional: true, required: false
        this._queryStrings = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference(this, "query_strings");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._queryStringBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStringBehavior = this._queryStringBehavior;
        }
        if (this._queryStrings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStrings = this._queryStrings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._queryStringBehavior = undefined;
            this._queryStrings.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._queryStringBehavior = value.queryStringBehavior;
            this._queryStrings.internalValue = value.queryStrings;
        }
    }
    get queryStringBehavior() {
        return this.getStringAttribute('query_string_behavior');
    }
    set queryStringBehavior(value) {
        this._queryStringBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringBehaviorInput() {
        return this._queryStringBehavior;
    }
    get queryStrings() {
        return this._queryStrings;
    }
    putQueryStrings(value) {
        this._queryStrings.internalValue = value;
    }
    resetQueryStrings() {
        this._queryStrings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringsInput() {
        return this._queryStrings.internalValue;
    }
}
exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference = CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference;
_f = JSII_RTTI_SYMBOL_1;
CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference[_f] = { fqn: "@cdktf/aws-cdk.cloudfrontCachePolicy.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference", version: "0.0.0" };
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enable_accept_encoding_brotli: cdktf.booleanToTerraform(struct.enableAcceptEncodingBrotli),
        enable_accept_encoding_gzip: cdktf.booleanToTerraform(struct.enableAcceptEncodingGzip),
        cookies_config: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct.cookiesConfig),
        headers_config: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct.headersConfig),
        query_strings_config: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct.queryStringsConfig),
    };
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform;
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enable_accept_encoding_brotli: {
            value: cdktf.booleanToHclTerraform(struct.enableAcceptEncodingBrotli),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enable_accept_encoding_gzip: {
            value: cdktf.booleanToHclTerraform(struct.enableAcceptEncodingGzip),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cookies_config: {
            value: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToHclTerraform(struct.cookiesConfig),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList",
        },
        headers_config: {
            value: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToHclTerraform(struct.headersConfig),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList",
        },
        query_strings_config: {
            value: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToHclTerraform(struct.queryStringsConfig),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToHclTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToHclTerraform;
class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // cookies_config - computed: false, optional: false, required: true
        this._cookiesConfig = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference(this, "cookies_config");
        // headers_config - computed: false, optional: false, required: true
        this._headersConfig = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference(this, "headers_config");
        // query_strings_config - computed: false, optional: false, required: true
        this._queryStringsConfig = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference(this, "query_strings_config");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._enableAcceptEncodingBrotli !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableAcceptEncodingBrotli = this._enableAcceptEncodingBrotli;
        }
        if (this._enableAcceptEncodingGzip !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableAcceptEncodingGzip = this._enableAcceptEncodingGzip;
        }
        if (this._cookiesConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cookiesConfig = this._cookiesConfig?.internalValue;
        }
        if (this._headersConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headersConfig = this._headersConfig?.internalValue;
        }
        if (this._queryStringsConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStringsConfig = this._queryStringsConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enableAcceptEncodingBrotli = undefined;
            this._enableAcceptEncodingGzip = undefined;
            this._cookiesConfig.internalValue = undefined;
            this._headersConfig.internalValue = undefined;
            this._queryStringsConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enableAcceptEncodingBrotli = value.enableAcceptEncodingBrotli;
            this._enableAcceptEncodingGzip = value.enableAcceptEncodingGzip;
            this._cookiesConfig.internalValue = value.cookiesConfig;
            this._headersConfig.internalValue = value.headersConfig;
            this._queryStringsConfig.internalValue = value.queryStringsConfig;
        }
    }
    get enableAcceptEncodingBrotli() {
        return this.getBooleanAttribute('enable_accept_encoding_brotli');
    }
    set enableAcceptEncodingBrotli(value) {
        this._enableAcceptEncodingBrotli = value;
    }
    resetEnableAcceptEncodingBrotli() {
        this._enableAcceptEncodingBrotli = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableAcceptEncodingBrotliInput() {
        return this._enableAcceptEncodingBrotli;
    }
    get enableAcceptEncodingGzip() {
        return this.getBooleanAttribute('enable_accept_encoding_gzip');
    }
    set enableAcceptEncodingGzip(value) {
        this._enableAcceptEncodingGzip = value;
    }
    resetEnableAcceptEncodingGzip() {
        this._enableAcceptEncodingGzip = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableAcceptEncodingGzipInput() {
        return this._enableAcceptEncodingGzip;
    }
    get cookiesConfig() {
        return this._cookiesConfig;
    }
    putCookiesConfig(value) {
        this._cookiesConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get cookiesConfigInput() {
        return this._cookiesConfig.internalValue;
    }
    get headersConfig() {
        return this._headersConfig;
    }
    putHeadersConfig(value) {
        this._headersConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get headersConfigInput() {
        return this._headersConfig.internalValue;
    }
    get queryStringsConfig() {
        return this._queryStringsConfig;
    }
    putQueryStringsConfig(value) {
        this._queryStringsConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringsConfigInput() {
        return this._queryStringsConfig.internalValue;
    }
}
exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference = CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference;
_g = JSII_RTTI_SYMBOL_1;
CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference[_g] = { fqn: "@cdktf/aws-cdk.cloudfrontCachePolicy.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_cache_policy aws_cloudfront_cache_policy}
*/
class CloudfrontCachePolicy extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CloudfrontCachePolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudfrontCachePolicy to import
    * @param importFromId The id of the existing CloudfrontCachePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_cache_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudfrontCachePolicy to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_cache_policy", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_cache_policy aws_cloudfront_cache_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontCachePolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudfront_cache_policy',
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
        // parameters_in_cache_key_and_forwarded_to_origin - computed: false, optional: false, required: true
        this._parametersInCacheKeyAndForwardedToOrigin = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference(this, "parameters_in_cache_key_and_forwarded_to_origin");
        this._comment = config.comment;
        this._defaultTtl = config.defaultTtl;
        this._id = config.id;
        this._maxTtl = config.maxTtl;
        this._minTtl = config.minTtl;
        this._name = config.name;
        this._parametersInCacheKeyAndForwardedToOrigin.internalValue = config.parametersInCacheKeyAndForwardedToOrigin;
    }
    get comment() {
        return this.getStringAttribute('comment');
    }
    set comment(value) {
        this._comment = value;
    }
    resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commentInput() {
        return this._comment;
    }
    get defaultTtl() {
        return this.getNumberAttribute('default_ttl');
    }
    set defaultTtl(value) {
        this._defaultTtl = value;
    }
    resetDefaultTtl() {
        this._defaultTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultTtlInput() {
        return this._defaultTtl;
    }
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
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
    get maxTtl() {
        return this.getNumberAttribute('max_ttl');
    }
    set maxTtl(value) {
        this._maxTtl = value;
    }
    resetMaxTtl() {
        this._maxTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxTtlInput() {
        return this._maxTtl;
    }
    get minTtl() {
        return this.getNumberAttribute('min_ttl');
    }
    set minTtl(value) {
        this._minTtl = value;
    }
    resetMinTtl() {
        this._minTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minTtlInput() {
        return this._minTtl;
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
    get parametersInCacheKeyAndForwardedToOrigin() {
        return this._parametersInCacheKeyAndForwardedToOrigin;
    }
    putParametersInCacheKeyAndForwardedToOrigin(value) {
        this._parametersInCacheKeyAndForwardedToOrigin.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get parametersInCacheKeyAndForwardedToOriginInput() {
        return this._parametersInCacheKeyAndForwardedToOrigin.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            comment: cdktf.stringToTerraform(this._comment),
            default_ttl: cdktf.numberToTerraform(this._defaultTtl),
            id: cdktf.stringToTerraform(this._id),
            max_ttl: cdktf.numberToTerraform(this._maxTtl),
            min_ttl: cdktf.numberToTerraform(this._minTtl),
            name: cdktf.stringToTerraform(this._name),
            parameters_in_cache_key_and_forwarded_to_origin: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform(this._parametersInCacheKeyAndForwardedToOrigin.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            comment: {
                value: cdktf.stringToHclTerraform(this._comment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_ttl: {
                value: cdktf.numberToHclTerraform(this._defaultTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_ttl: {
                value: cdktf.numberToHclTerraform(this._maxTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            min_ttl: {
                value: cdktf.numberToHclTerraform(this._minTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parameters_in_cache_key_and_forwarded_to_origin: {
                value: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToHclTerraform(this._parametersInCacheKeyAndForwardedToOrigin.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.CloudfrontCachePolicy = CloudfrontCachePolicy;
_h = JSII_RTTI_SYMBOL_1;
CloudfrontCachePolicy[_h] = { fqn: "@cdktf/aws-cdk.cloudfrontCachePolicy.CloudfrontCachePolicy", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
CloudfrontCachePolicy.tfResourceType = "aws_cloudfront_cache_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2Nsb3VkZnJvbnQtY2FjaGUtcG9saWN5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBOEMvQixTQUFnQiw0RkFBNEYsQ0FBQyxNQUE2TDtJQUN4UyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDdkUsQ0FBQTtBQUNILENBQUM7QUFSRCxvTUFRQztBQUdELFNBQWdCLCtGQUErRixDQUFDLE1BQTZMO0lBQzNTLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHO1FBQ1osS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFD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Ozs7QUEzT0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxvQ0FBYyxHQUFHLDZCQUE2QixBQUFoQyxDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfY2FjaGVfcG9saWN5XG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udENhY2hlUG9saWN5Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfY2FjaGVfcG9saWN5I2NvbW1lbnQgQ2xvdWRmcm9udENhY2hlUG9saWN5I2NvbW1lbnR9XG4gICovXG4gIHJlYWRvbmx5IGNvbW1lbnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfY2FjaGVfcG9saWN5I2RlZmF1bHRfdHRsIENsb3VkZnJvbnRDYWNoZVBvbGljeSNkZWZhdWx0X3R0bH1cbiAgKi9cbiAgcmVhZG9ubHkgZGVmYXVsdFR0bD86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9jYWNoZV9wb2xpY3kjaWQgQ2xvdWRmcm9udENhY2hlUG9saWN5I2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X2NhY2hlX3BvbGljeSNtYXhfdHRsIENsb3VkZnJvbnRDYWNoZVBvbGljeSNtYXhfdHRsfVxuICAqL1xuICByZWFkb25seSBtYXhUdGw/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfY2FjaGVfcG9saWN5I21pbl90dGwgQ2xvdWRmcm9udENhY2hlUG9saWN5I21pbl90dGx9XG4gICovXG4gIHJlYWRvbmx5IG1pblR0bD86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9jYWNoZV9wb2xpY3kjbmFtZSBDbG91ZGZyb250Q2FjaGVQb2xpY3kjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBwYXJhbWV0ZXJzX2luX2NhY2hlX2tleV9hbmRfZm9yd2FyZGVkX3RvX29yaWdpbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9jYWNoZV9wb2xpY3kjcGFyYW1ldGVyc19pbl9jYWNoZV9rZXlfYW5kX2ZvcndhcmRlZF90b19vcmlnaW4gQ2xvdWRmcm9udENhY2hlUG9saWN5I3BhcmFtZXRlcnNfaW5fY2FjaGVfa2V5X2FuZF9mb3J3YXJkZWRfdG9fb3JpZ2lufVxuICAqL1xuICByZWFkb25seSBwYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luOiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luO1xufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZ0Nvb2tpZXMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X2NhY2hlX3BvbGljeSNpdGVtcyBDbG91ZGZyb250Q2FjaGVQb2xpY3kjaXRlbXN9XG4gICovXG4gIHJlYWRvbmx5IGl0ZW1zPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZ0Nvb2tpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZ0Nvb2tpZXNPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZ0Nvb2tpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaXRlbXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLml0ZW1zKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZ0Nvb2tpZXNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZ0Nvb2tpZXNPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZ0Nvb2tpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGl0ZW1zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuaXRlbXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5Db29raWVzQ29uZmlnQ29va2llc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWdDb29raWVzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pdGVtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pdGVtcyA9IHRoaXMuX2l0ZW1zO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWdDb29raWVzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faXRlbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdmFsdWUuaXRlbXM7XG4gICAgfVxuICB9XG5cbiAgLy8gaXRlbXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaXRlbXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2l0ZW1zJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgaXRlbXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJdGVtcygpIHtcbiAgICB0aGlzLl9pdGVtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXRlbXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X2NhY2hlX3BvbGljeSNjb29raWVfYmVoYXZpb3IgQ2xvdWRmcm9udENhY2hlUG9saWN5I2Nvb2tpZV9iZWhhdmlvcn1cbiAgKi9cbiAgcmVhZG9ubHkgY29va2llQmVoYXZpb3I6IHN0cmluZztcbiAgLyoqXG4gICogY29va2llcyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9jYWNoZV9wb2xpY3kjY29va2llcyBDbG91ZGZyb250Q2FjaGVQb2xpY3kjY29va2llc31cbiAgKi9cbiAgcmVhZG9ubHkgY29va2llcz86IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5Db29raWVzQ29uZmlnQ29va2llcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5Db29raWVzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb29raWVfYmVoYXZpb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29va2llQmVoYXZpb3IpLFxuICAgIGNvb2tpZXM6IGNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5Db29raWVzQ29uZmlnQ29va2llc1RvVGVycmFmb3JtKHN0cnVjdCEuY29va2llcyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5Db29raWVzQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjb29raWVfYmVoYXZpb3I6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvb2tpZUJlaGF2aW9yKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjb29raWVzOiB7XG4gICAgICB2YWx1ZTogY2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWdDb29raWVzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb29raWVzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWdDb29raWVzTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Nvb2tpZUJlaGF2aW9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvb2tpZUJlaGF2aW9yID0gdGhpcy5fY29va2llQmVoYXZpb3I7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb29raWVzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvb2tpZXMgPSB0aGlzLl9jb29raWVzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb29raWVCZWhhdmlvciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Nvb2tpZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY29va2llQmVoYXZpb3IgPSB2YWx1ZS5jb29raWVCZWhhdmlvcjtcbiAgICAgIHRoaXMuX2Nvb2tpZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmNvb2tpZXM7XG4gICAgfVxuICB9XG5cbiAgLy8gY29va2llX2JlaGF2aW9yIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Nvb2tpZUJlaGF2aW9yPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb29raWVCZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nvb2tpZV9iZWhhdmlvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29va2llQmVoYXZpb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Nvb2tpZUJlaGF2aW9yID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvb2tpZUJlaGF2aW9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvb2tpZUJlaGF2aW9yO1xuICB9XG5cbiAgLy8gY29va2llcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb29raWVzID0gbmV3IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5Db29raWVzQ29uZmlnQ29va2llc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImNvb2tpZXNcIik7XG4gIHB1YmxpYyBnZXQgY29va2llcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29va2llcztcbiAgfVxuICBwdWJsaWMgcHV0Q29va2llcyh2YWx1ZTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWdDb29raWVzKSB7XG4gICAgdGhpcy5fY29va2llcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29va2llcygpIHtcbiAgICB0aGlzLl9jb29raWVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvb2tpZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29va2llcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnSGVhZGVycyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfY2FjaGVfcG9saWN5I2l0ZW1zIENsb3VkZnJvbnRDYWNoZVBvbGljeSNpdGVtc31cbiAgKi9cbiAgcmVhZG9ubHkgaXRlbXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnSGVhZGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnSGVhZGVyc091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnSGVhZGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpdGVtczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuaXRlbXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnSGVhZGVyc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnSGVhZGVyc091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnSGVhZGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgaXRlbXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5pdGVtcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWdIZWFkZXJzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luSGVhZGVyc0NvbmZpZ0hlYWRlcnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2l0ZW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lml0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luSGVhZGVyc0NvbmZpZ0hlYWRlcnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pdGVtcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faXRlbXMgPSB2YWx1ZS5pdGVtcztcbiAgICB9XG4gIH1cblxuICAvLyBpdGVtcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pdGVtcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaXRlbXMnKSk7XG4gIH1cbiAgcHVibGljIHNldCBpdGVtcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEl0ZW1zKCkge1xuICAgIHRoaXMuX2l0ZW1zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpdGVtc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luSGVhZGVyc0NvbmZpZyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfY2FjaGVfcG9saWN5I2hlYWRlcl9iZWhhdmlvciBDbG91ZGZyb250Q2FjaGVQb2xpY3kjaGVhZGVyX2JlaGF2aW9yfVxuICAqL1xuICByZWFkb25seSBoZWFkZXJCZWhhdmlvcj86IHN0cmluZztcbiAgLyoqXG4gICogaGVhZGVycyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9jYWNoZV9wb2xpY3kjaGVhZGVycyBDbG91ZGZyb250Q2FjaGVQb2xpY3kjaGVhZGVyc31cbiAgKi9cbiAgcmVhZG9ubHkgaGVhZGVycz86IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnSGVhZGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luSGVhZGVyc0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBoZWFkZXJfYmVoYXZpb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaGVhZGVyQmVoYXZpb3IpLFxuICAgIGhlYWRlcnM6IGNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnSGVhZGVyc1RvVGVycmFmb3JtKHN0cnVjdCEuaGVhZGVycyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luSGVhZGVyc0NvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBoZWFkZXJfYmVoYXZpb3I6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmhlYWRlckJlaGF2aW9yKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICB2YWx1ZTogY2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWdIZWFkZXJzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5oZWFkZXJzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWdIZWFkZXJzTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luSGVhZGVyc0NvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2hlYWRlckJlaGF2aW9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmhlYWRlckJlaGF2aW9yID0gdGhpcy5faGVhZGVyQmVoYXZpb3I7XG4gICAgfVxuICAgIGlmICh0aGlzLl9oZWFkZXJzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmhlYWRlcnMgPSB0aGlzLl9oZWFkZXJzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9oZWFkZXJCZWhhdmlvciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2hlYWRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faGVhZGVyQmVoYXZpb3IgPSB2YWx1ZS5oZWFkZXJCZWhhdmlvcjtcbiAgICAgIHRoaXMuX2hlYWRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmhlYWRlcnM7XG4gICAgfVxuICB9XG5cbiAgLy8gaGVhZGVyX2JlaGF2aW9yIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hlYWRlckJlaGF2aW9yPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBoZWFkZXJCZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hlYWRlcl9iZWhhdmlvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaGVhZGVyQmVoYXZpb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hlYWRlckJlaGF2aW9yID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SGVhZGVyQmVoYXZpb3IoKSB7XG4gICAgdGhpcy5faGVhZGVyQmVoYXZpb3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlYWRlckJlaGF2aW9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlckJlaGF2aW9yO1xuICB9XG5cbiAgLy8gaGVhZGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9oZWFkZXJzID0gbmV3IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnSGVhZGVyc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImhlYWRlcnNcIik7XG4gIHB1YmxpYyBnZXQgaGVhZGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVycztcbiAgfVxuICBwdWJsaWMgcHV0SGVhZGVycyh2YWx1ZTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWdIZWFkZXJzKSB7XG4gICAgdGhpcy5faGVhZGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SGVhZGVycygpIHtcbiAgICB0aGlzLl9oZWFkZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlYWRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVycy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWdRdWVyeVN0cmluZ3Mge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X2NhY2hlX3BvbGljeSNpdGVtcyBDbG91ZGZyb250Q2FjaGVQb2xpY3kjaXRlbXN9XG4gICovXG4gIHJlYWRvbmx5IGl0ZW1zPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnUXVlcnlTdHJpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblF1ZXJ5U3RyaW5nc0NvbmZpZ1F1ZXJ5U3RyaW5nc091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWdRdWVyeVN0cmluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaXRlbXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLml0ZW1zKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnUXVlcnlTdHJpbmdzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblF1ZXJ5U3RyaW5nc0NvbmZpZ1F1ZXJ5U3RyaW5nc091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWdRdWVyeVN0cmluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGl0ZW1zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuaXRlbXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWdRdWVyeVN0cmluZ3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWdRdWVyeVN0cmluZ3MgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2l0ZW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lml0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnUXVlcnlTdHJpbmdzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faXRlbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdmFsdWUuaXRlbXM7XG4gICAgfVxuICB9XG5cbiAgLy8gaXRlbXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaXRlbXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2l0ZW1zJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgaXRlbXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJdGVtcygpIHtcbiAgICB0aGlzLl9pdGVtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXRlbXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblF1ZXJ5U3RyaW5nc0NvbmZpZyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfY2FjaGVfcG9saWN5I3F1ZXJ5X3N0cmluZ19iZWhhdmlvciBDbG91ZGZyb250Q2FjaGVQb2xpY3kjcXVlcnlfc3RyaW5nX2JlaGF2aW9yfVxuICAqL1xuICByZWFkb25seSBxdWVyeVN0cmluZ0JlaGF2aW9yOiBzdHJpbmc7XG4gIC8qKlxuICAqIHF1ZXJ5X3N0cmluZ3MgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfY2FjaGVfcG9saWN5I3F1ZXJ5X3N0cmluZ3MgQ2xvdWRmcm9udENhY2hlUG9saWN5I3F1ZXJ5X3N0cmluZ3N9XG4gICovXG4gIHJlYWRvbmx5IHF1ZXJ5U3RyaW5ncz86IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWdRdWVyeVN0cmluZ3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblF1ZXJ5U3RyaW5nc0NvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcXVlcnlfc3RyaW5nX2JlaGF2aW9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnF1ZXJ5U3RyaW5nQmVoYXZpb3IpLFxuICAgIHF1ZXJ5X3N0cmluZ3M6IGNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWdRdWVyeVN0cmluZ3NUb1RlcnJhZm9ybShzdHJ1Y3QhLnF1ZXJ5U3RyaW5ncyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblF1ZXJ5U3RyaW5nc0NvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBxdWVyeV9zdHJpbmdfYmVoYXZpb3I6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnF1ZXJ5U3RyaW5nQmVoYXZpb3IpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHF1ZXJ5X3N0cmluZ3M6IHtcbiAgICAgIHZhbHVlOiBjbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnUXVlcnlTdHJpbmdzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5xdWVyeVN0cmluZ3MpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnUXVlcnlTdHJpbmdzTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9xdWVyeVN0cmluZ0JlaGF2aW9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnF1ZXJ5U3RyaW5nQmVoYXZpb3IgPSB0aGlzLl9xdWVyeVN0cmluZ0JlaGF2aW9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcXVlcnlTdHJpbmdzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnF1ZXJ5U3RyaW5ncyA9IHRoaXMuX3F1ZXJ5U3RyaW5ncz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9xdWVyeVN0cmluZ0JlaGF2aW9yID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcXVlcnlTdHJpbmdzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3F1ZXJ5U3RyaW5nQmVoYXZpb3IgPSB2YWx1ZS5xdWVyeVN0cmluZ0JlaGF2aW9yO1xuICAgICAgdGhpcy5fcXVlcnlTdHJpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5xdWVyeVN0cmluZ3M7XG4gICAgfVxuICB9XG5cbiAgLy8gcXVlcnlfc3RyaW5nX2JlaGF2aW9yIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3F1ZXJ5U3RyaW5nQmVoYXZpb3I/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHF1ZXJ5U3RyaW5nQmVoYXZpb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdxdWVyeV9zdHJpbmdfYmVoYXZpb3InKTtcbiAgfVxuICBwdWJsaWMgc2V0IHF1ZXJ5U3RyaW5nQmVoYXZpb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3F1ZXJ5U3RyaW5nQmVoYXZpb3IgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcXVlcnlTdHJpbmdCZWhhdmlvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVN0cmluZ0JlaGF2aW9yO1xuICB9XG5cbiAgLy8gcXVlcnlfc3RyaW5ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9xdWVyeVN0cmluZ3MgPSBuZXcgQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblF1ZXJ5U3RyaW5nc0NvbmZpZ1F1ZXJ5U3RyaW5nc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInF1ZXJ5X3N0cmluZ3NcIik7XG4gIHB1YmxpYyBnZXQgcXVlcnlTdHJpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVN0cmluZ3M7XG4gIH1cbiAgcHVibGljIHB1dFF1ZXJ5U3RyaW5ncyh2YWx1ZTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblF1ZXJ5U3RyaW5nc0NvbmZpZ1F1ZXJ5U3RyaW5ncykge1xuICAgIHRoaXMuX3F1ZXJ5U3RyaW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UXVlcnlTdHJpbmdzKCkge1xuICAgIHRoaXMuX3F1ZXJ5U3RyaW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBxdWVyeVN0cmluZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTdHJpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfY2FjaGVfcG9saWN5I2VuYWJsZV9hY2NlcHRfZW5jb2RpbmdfYnJvdGxpIENsb3VkZnJvbnRDYWNoZVBvbGljeSNlbmFibGVfYWNjZXB0X2VuY29kaW5nX2Jyb3RsaX1cbiAgKi9cbiAgcmVhZG9ubHkgZW5hYmxlQWNjZXB0RW5jb2RpbmdCcm90bGk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfY2FjaGVfcG9saWN5I2VuYWJsZV9hY2NlcHRfZW5jb2RpbmdfZ3ppcCBDbG91ZGZyb250Q2FjaGVQb2xpY3kjZW5hYmxlX2FjY2VwdF9lbmNvZGluZ19nemlwfVxuICAqL1xuICByZWFkb25seSBlbmFibGVBY2NlcHRFbmNvZGluZ0d6aXA/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIGNvb2tpZXNfY29uZmlnIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X2NhY2hlX3BvbGljeSNjb29raWVzX2NvbmZpZyBDbG91ZGZyb250Q2FjaGVQb2xpY3kjY29va2llc19jb25maWd9XG4gICovXG4gIHJlYWRvbmx5IGNvb2tpZXNDb25maWc6IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5Db29raWVzQ29uZmlnO1xuICAvKipcbiAgKiBoZWFkZXJzX2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9jYWNoZV9wb2xpY3kjaGVhZGVyc19jb25maWcgQ2xvdWRmcm9udENhY2hlUG9saWN5I2hlYWRlcnNfY29uZmlnfVxuICAqL1xuICByZWFkb25seSBoZWFkZXJzQ29uZmlnOiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luSGVhZGVyc0NvbmZpZztcbiAgLyoqXG4gICogcXVlcnlfc3RyaW5nc19jb25maWcgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfY2FjaGVfcG9saWN5I3F1ZXJ5X3N0cmluZ3NfY29uZmlnIENsb3VkZnJvbnRDYWNoZVBvbGljeSNxdWVyeV9zdHJpbmdzX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgcXVlcnlTdHJpbmdzQ29uZmlnOiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblRvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5PdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZV9hY2NlcHRfZW5jb2RpbmdfYnJvdGxpOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVBY2NlcHRFbmNvZGluZ0Jyb3RsaSksXG4gICAgZW5hYmxlX2FjY2VwdF9lbmNvZGluZ19nemlwOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVBY2NlcHRFbmNvZGluZ0d6aXApLFxuICAgIGNvb2tpZXNfY29uZmlnOiBjbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29va2llc0NvbmZpZyksXG4gICAgaGVhZGVyc19jb25maWc6IGNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5oZWFkZXJzQ29uZmlnKSxcbiAgICBxdWVyeV9zdHJpbmdzX2NvbmZpZzogY2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblF1ZXJ5U3RyaW5nc0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEucXVlcnlTdHJpbmdzQ29uZmlnKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbk91dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW4pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGVuYWJsZV9hY2NlcHRfZW5jb2RpbmdfYnJvdGxpOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlQWNjZXB0RW5jb2RpbmdCcm90bGkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBlbmFibGVfYWNjZXB0X2VuY29kaW5nX2d6aXA6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lbmFibGVBY2NlcHRFbmNvZGluZ0d6aXApLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBjb29raWVzX2NvbmZpZzoge1xuICAgICAgdmFsdWU6IGNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5Db29raWVzQ29uZmlnVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb29raWVzQ29uZmlnKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWdMaXN0XCIsXG4gICAgfSxcbiAgICBoZWFkZXJzX2NvbmZpZzoge1xuICAgICAgdmFsdWU6IGNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5oZWFkZXJzQ29uZmlnKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWdMaXN0XCIsXG4gICAgfSxcbiAgICBxdWVyeV9zdHJpbmdzX2NvbmZpZzoge1xuICAgICAgdmFsdWU6IGNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnF1ZXJ5U3RyaW5nc0NvbmZpZyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWdMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW4gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2VuYWJsZUFjY2VwdEVuY29kaW5nQnJvdGxpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZUFjY2VwdEVuY29kaW5nQnJvdGxpID0gdGhpcy5fZW5hYmxlQWNjZXB0RW5jb2RpbmdCcm90bGk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbmFibGVBY2NlcHRFbmNvZGluZ0d6aXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5hYmxlQWNjZXB0RW5jb2RpbmdHemlwID0gdGhpcy5fZW5hYmxlQWNjZXB0RW5jb2RpbmdHemlwO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29va2llc0NvbmZpZz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb29raWVzQ29uZmlnID0gdGhpcy5fY29va2llc0NvbmZpZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hlYWRlcnNDb25maWc/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaGVhZGVyc0NvbmZpZyA9IHRoaXMuX2hlYWRlcnNDb25maWc/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9xdWVyeVN0cmluZ3NDb25maWc/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucXVlcnlTdHJpbmdzQ29uZmlnID0gdGhpcy5fcXVlcnlTdHJpbmdzQ29uZmlnPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VuYWJsZUFjY2VwdEVuY29kaW5nQnJvdGxpID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW5hYmxlQWNjZXB0RW5jb2RpbmdHemlwID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29va2llc0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faGVhZGVyc0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcXVlcnlTdHJpbmdzQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2VuYWJsZUFjY2VwdEVuY29kaW5nQnJvdGxpID0gdmFsdWUuZW5hYmxlQWNjZXB0RW5jb2RpbmdCcm90bGk7XG4gICAgICB0aGlzLl9lbmFibGVBY2NlcHRFbmNvZGluZ0d6aXAgPSB2YWx1ZS5lbmFibGVBY2NlcHRFbmNvZGluZ0d6aXA7XG4gICAgICB0aGlzLl9jb29raWVzQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jb29raWVzQ29uZmlnO1xuICAgICAgdGhpcy5faGVhZGVyc0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuaGVhZGVyc0NvbmZpZztcbiAgICAgIHRoaXMuX3F1ZXJ5U3RyaW5nc0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWUucXVlcnlTdHJpbmdzQ29uZmlnO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuYWJsZV9hY2NlcHRfZW5jb2RpbmdfYnJvdGxpIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZUFjY2VwdEVuY29kaW5nQnJvdGxpPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVBY2NlcHRFbmNvZGluZ0Jyb3RsaSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfYWNjZXB0X2VuY29kaW5nX2Jyb3RsaScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlQWNjZXB0RW5jb2RpbmdCcm90bGkodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZUFjY2VwdEVuY29kaW5nQnJvdGxpID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlQWNjZXB0RW5jb2RpbmdCcm90bGkoKSB7XG4gICAgdGhpcy5fZW5hYmxlQWNjZXB0RW5jb2RpbmdCcm90bGkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZUFjY2VwdEVuY29kaW5nQnJvdGxpSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZUFjY2VwdEVuY29kaW5nQnJvdGxpO1xuICB9XG5cbiAgLy8gZW5hYmxlX2FjY2VwdF9lbmNvZGluZ19nemlwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZUFjY2VwdEVuY29kaW5nR3ppcD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlQWNjZXB0RW5jb2RpbmdHemlwKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9hY2NlcHRfZW5jb2RpbmdfZ3ppcCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlQWNjZXB0RW5jb2RpbmdHemlwKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVBY2NlcHRFbmNvZGluZ0d6aXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVBY2NlcHRFbmNvZGluZ0d6aXAoKSB7XG4gICAgdGhpcy5fZW5hYmxlQWNjZXB0RW5jb2RpbmdHemlwID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVBY2NlcHRFbmNvZGluZ0d6aXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlQWNjZXB0RW5jb2RpbmdHemlwO1xuICB9XG5cbiAgLy8gY29va2llc19jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29va2llc0NvbmZpZyA9IG5ldyBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImNvb2tpZXNfY29uZmlnXCIpO1xuICBwdWJsaWMgZ2V0IGNvb2tpZXNDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvb2tpZXNDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dENvb2tpZXNDb25maWcodmFsdWU6IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5Db29raWVzQ29uZmlnKSB7XG4gICAgdGhpcy5fY29va2llc0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvb2tpZXNDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29va2llc0NvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaGVhZGVyc19jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaGVhZGVyc0NvbmZpZyA9IG5ldyBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luSGVhZGVyc0NvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImhlYWRlcnNfY29uZmlnXCIpO1xuICBwdWJsaWMgZ2V0IGhlYWRlcnNDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcnNDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dEhlYWRlcnNDb25maWcodmFsdWU6IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnKSB7XG4gICAgdGhpcy5faGVhZGVyc0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlYWRlcnNDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVyc0NvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcXVlcnlfc3RyaW5nc19jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcXVlcnlTdHJpbmdzQ29uZmlnID0gbmV3IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJxdWVyeV9zdHJpbmdzX2NvbmZpZ1wiKTtcbiAgcHVibGljIGdldCBxdWVyeVN0cmluZ3NDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U3RyaW5nc0NvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0UXVlcnlTdHJpbmdzQ29uZmlnKHZhbHVlOiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnKSB7XG4gICAgdGhpcy5fcXVlcnlTdHJpbmdzQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcXVlcnlTdHJpbmdzQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U3RyaW5nc0NvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X2NhY2hlX3BvbGljeSBhd3NfY2xvdWRmcm9udF9jYWNoZV9wb2xpY3l9XG4qL1xuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRDYWNoZVBvbGljeSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfY2xvdWRmcm9udF9jYWNoZV9wb2xpY3lcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgQ2xvdWRmcm9udENhY2hlUG9saWN5IHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIENsb3VkZnJvbnRDYWNoZVBvbGljeSB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgQ2xvdWRmcm9udENhY2hlUG9saWN5IHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X2NhY2hlX3BvbGljeSNpbXBvcnQgaW1wb3J0IHNlY3Rpb259IGluIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UgZm9yIHRoZSBpZCB0byB1c2VcbiAgKiBAcGFyYW0gcHJvdmlkZXI/IE9wdGlvbmFsIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciB3aGVyZSB0aGUgQ2xvdWRmcm9udENhY2hlUG9saWN5IHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19jbG91ZGZyb250X2NhY2hlX3BvbGljeVwiLCBpbXBvcnRJZDogaW1wb3J0RnJvbUlkLCBwcm92aWRlciB9KTtcbiAgICAgIH1cblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfY2FjaGVfcG9saWN5IGF3c19jbG91ZGZyb250X2NhY2hlX3BvbGljeX0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgQ2xvdWRmcm9udENhY2hlUG9saWN5Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IENsb3VkZnJvbnRDYWNoZVBvbGljeUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2Nsb3VkZnJvbnRfY2FjaGVfcG9saWN5JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fY29tbWVudCA9IGNvbmZpZy5jb21tZW50O1xuICAgIHRoaXMuX2RlZmF1bHRUdGwgPSBjb25maWcuZGVmYXVsdFR0bDtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9tYXhUdGwgPSBjb25maWcubWF4VHRsO1xuICAgIHRoaXMuX21pblR0bCA9IGNvbmZpZy5taW5UdGw7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3BhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW4uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5wYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBjb21tZW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbW1lbnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21tZW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21tZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb21tZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29tbWVudCgpIHtcbiAgICB0aGlzLl9jb21tZW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb21tZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbW1lbnQ7XG4gIH1cblxuICAvLyBkZWZhdWx0X3R0bCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWZhdWx0VHRsPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBkZWZhdWx0VHRsKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGVmYXVsdF90dGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmF1bHRUdGwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2RlZmF1bHRUdGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWZhdWx0VHRsKCkge1xuICAgIHRoaXMuX2RlZmF1bHRUdGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmF1bHRUdGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFR0bDtcbiAgfVxuXG4gIC8vIGV0YWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBldGFnKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXRhZycpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gbWF4X3R0bCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhUdGw/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heFR0bCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF90dGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heFR0bCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4VHRsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4VHRsKCkge1xuICAgIHRoaXMuX21heFR0bCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4VHRsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heFR0bDtcbiAgfVxuXG4gIC8vIG1pbl90dGwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWluVHRsPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtaW5UdGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5fdHRsJyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5UdGwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21pblR0bCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1pblR0bCgpIHtcbiAgICB0aGlzLl9taW5UdGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1pblR0bElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9taW5UdGw7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHBhcmFtZXRlcnNfaW5fY2FjaGVfa2V5X2FuZF9mb3J3YXJkZWRfdG9fb3JpZ2luIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3BhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW4gPSBuZXcgQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInBhcmFtZXRlcnNfaW5fY2FjaGVfa2V5X2FuZF9mb3J3YXJkZWRfdG9fb3JpZ2luXCIpO1xuICBwdWJsaWMgZ2V0IHBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW47XG4gIH1cbiAgcHVibGljIHB1dFBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW4odmFsdWU6IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW4pIHtcbiAgICB0aGlzLl9wYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbW1lbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvbW1lbnQpLFxuICAgICAgZGVmYXVsdF90dGw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2RlZmF1bHRUdGwpLFxuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIG1heF90dGw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21heFR0bCksXG4gICAgICBtaW5fdHRsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9taW5UdGwpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBwYXJhbWV0ZXJzX2luX2NhY2hlX2tleV9hbmRfZm9yd2FyZGVkX3RvX29yaWdpbjogY2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblRvVGVycmFmb3JtKHRoaXMuX3BhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW4uaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBjb21tZW50OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jb21tZW50KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgZGVmYXVsdF90dGw6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX2RlZmF1bHRUdGwpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBtYXhfdHRsOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9tYXhUdGwpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBtaW5fdHRsOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9taW5UdGwpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgcGFyYW1ldGVyc19pbl9jYWNoZV9rZXlfYW5kX2ZvcndhcmRlZF90b19vcmlnaW46IHtcbiAgICAgICAgdmFsdWU6IGNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9wYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luTGlzdFwiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19