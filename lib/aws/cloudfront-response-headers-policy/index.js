"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudfrontResponseHeadersPolicy = exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigToHclTerraform = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform = exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToHclTerraform = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform = exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToHclTerraform = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform = exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToHclTerraform = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform = exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToHclTerraform = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform = exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToHclTerraform = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform = exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToHclTerraform = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform = exports.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference = exports.cloudfrontResponseHeadersPolicyCustomHeadersConfigToHclTerraform = exports.cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform = exports.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList = exports.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference = exports.cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToHclTerraform = exports.cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform = exports.CloudfrontResponseHeadersPolicyCorsConfigOutputReference = exports.cloudfrontResponseHeadersPolicyCorsConfigToHclTerraform = exports.cloudfrontResponseHeadersPolicyCorsConfigToTerraform = exports.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference = exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToHclTerraform = exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform = exports.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference = exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToHclTerraform = exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform = exports.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference = exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToHclTerraform = exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform = exports.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference = exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToHclTerraform = exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform(struct) {
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
exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform = cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform;
function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToHclTerraform(struct) {
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
exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToHclTerraform = cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToHclTerraform;
class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference extends cdktf.ComplexObject {
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
exports.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference = CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference;
_a = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference[_a] = { fqn: "@cdktf/aws-cdk.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference", version: "0.0.0" };
function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform(struct) {
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
exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform = cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform;
function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToHclTerraform(struct) {
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
exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToHclTerraform = cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToHclTerraform;
class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference extends cdktf.ComplexObject {
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
exports.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference = CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference[_b] = { fqn: "@cdktf/aws-cdk.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference", version: "0.0.0" };
function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform(struct) {
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
exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform = cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform;
function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToHclTerraform(struct) {
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
exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToHclTerraform = cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToHclTerraform;
class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference extends cdktf.ComplexObject {
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
exports.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference = CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference;
_c = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference[_c] = { fqn: "@cdktf/aws-cdk.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference", version: "0.0.0" };
function cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform(struct) {
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
exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform = cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform;
function cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToHclTerraform(struct) {
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
exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToHclTerraform = cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToHclTerraform;
class CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference extends cdktf.ComplexObject {
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
exports.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference = CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference;
_d = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference[_d] = { fqn: "@cdktf/aws-cdk.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference", version: "0.0.0" };
function cloudfrontResponseHeadersPolicyCorsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_control_allow_credentials: cdktf.booleanToTerraform(struct.accessControlAllowCredentials),
        access_control_max_age_sec: cdktf.numberToTerraform(struct.accessControlMaxAgeSec),
        origin_override: cdktf.booleanToTerraform(struct.originOverride),
        access_control_allow_headers: cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform(struct.accessControlAllowHeaders),
        access_control_allow_methods: cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform(struct.accessControlAllowMethods),
        access_control_allow_origins: cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform(struct.accessControlAllowOrigins),
        access_control_expose_headers: cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform(struct.accessControlExposeHeaders),
    };
}
exports.cloudfrontResponseHeadersPolicyCorsConfigToTerraform = cloudfrontResponseHeadersPolicyCorsConfigToTerraform;
function cloudfrontResponseHeadersPolicyCorsConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access_control_allow_credentials: {
            value: cdktf.booleanToHclTerraform(struct.accessControlAllowCredentials),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        access_control_max_age_sec: {
            value: cdktf.numberToHclTerraform(struct.accessControlMaxAgeSec),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        origin_override: {
            value: cdktf.booleanToHclTerraform(struct.originOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        access_control_allow_headers: {
            value: cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToHclTerraform(struct.accessControlAllowHeaders),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersList",
        },
        access_control_allow_methods: {
            value: cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToHclTerraform(struct.accessControlAllowMethods),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsList",
        },
        access_control_allow_origins: {
            value: cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToHclTerraform(struct.accessControlAllowOrigins),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsList",
        },
        access_control_expose_headers: {
            value: cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToHclTerraform(struct.accessControlExposeHeaders),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontResponseHeadersPolicyCorsConfigToHclTerraform = cloudfrontResponseHeadersPolicyCorsConfigToHclTerraform;
class CloudfrontResponseHeadersPolicyCorsConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // access_control_allow_headers - computed: false, optional: false, required: true
        this._accessControlAllowHeaders = new CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference(this, "access_control_allow_headers");
        // access_control_allow_methods - computed: false, optional: false, required: true
        this._accessControlAllowMethods = new CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference(this, "access_control_allow_methods");
        // access_control_allow_origins - computed: false, optional: false, required: true
        this._accessControlAllowOrigins = new CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference(this, "access_control_allow_origins");
        // access_control_expose_headers - computed: false, optional: true, required: false
        this._accessControlExposeHeaders = new CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference(this, "access_control_expose_headers");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._accessControlAllowCredentials !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessControlAllowCredentials = this._accessControlAllowCredentials;
        }
        if (this._accessControlMaxAgeSec !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessControlMaxAgeSec = this._accessControlMaxAgeSec;
        }
        if (this._originOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.originOverride = this._originOverride;
        }
        if (this._accessControlAllowHeaders?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessControlAllowHeaders = this._accessControlAllowHeaders?.internalValue;
        }
        if (this._accessControlAllowMethods?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessControlAllowMethods = this._accessControlAllowMethods?.internalValue;
        }
        if (this._accessControlAllowOrigins?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessControlAllowOrigins = this._accessControlAllowOrigins?.internalValue;
        }
        if (this._accessControlExposeHeaders?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessControlExposeHeaders = this._accessControlExposeHeaders?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accessControlAllowCredentials = undefined;
            this._accessControlMaxAgeSec = undefined;
            this._originOverride = undefined;
            this._accessControlAllowHeaders.internalValue = undefined;
            this._accessControlAllowMethods.internalValue = undefined;
            this._accessControlAllowOrigins.internalValue = undefined;
            this._accessControlExposeHeaders.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accessControlAllowCredentials = value.accessControlAllowCredentials;
            this._accessControlMaxAgeSec = value.accessControlMaxAgeSec;
            this._originOverride = value.originOverride;
            this._accessControlAllowHeaders.internalValue = value.accessControlAllowHeaders;
            this._accessControlAllowMethods.internalValue = value.accessControlAllowMethods;
            this._accessControlAllowOrigins.internalValue = value.accessControlAllowOrigins;
            this._accessControlExposeHeaders.internalValue = value.accessControlExposeHeaders;
        }
    }
    get accessControlAllowCredentials() {
        return this.getBooleanAttribute('access_control_allow_credentials');
    }
    set accessControlAllowCredentials(value) {
        this._accessControlAllowCredentials = value;
    }
    // Temporarily expose input value. Use with caution.
    get accessControlAllowCredentialsInput() {
        return this._accessControlAllowCredentials;
    }
    get accessControlMaxAgeSec() {
        return this.getNumberAttribute('access_control_max_age_sec');
    }
    set accessControlMaxAgeSec(value) {
        this._accessControlMaxAgeSec = value;
    }
    resetAccessControlMaxAgeSec() {
        this._accessControlMaxAgeSec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessControlMaxAgeSecInput() {
        return this._accessControlMaxAgeSec;
    }
    get originOverride() {
        return this.getBooleanAttribute('origin_override');
    }
    set originOverride(value) {
        this._originOverride = value;
    }
    // Temporarily expose input value. Use with caution.
    get originOverrideInput() {
        return this._originOverride;
    }
    get accessControlAllowHeaders() {
        return this._accessControlAllowHeaders;
    }
    putAccessControlAllowHeaders(value) {
        this._accessControlAllowHeaders.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get accessControlAllowHeadersInput() {
        return this._accessControlAllowHeaders.internalValue;
    }
    get accessControlAllowMethods() {
        return this._accessControlAllowMethods;
    }
    putAccessControlAllowMethods(value) {
        this._accessControlAllowMethods.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get accessControlAllowMethodsInput() {
        return this._accessControlAllowMethods.internalValue;
    }
    get accessControlAllowOrigins() {
        return this._accessControlAllowOrigins;
    }
    putAccessControlAllowOrigins(value) {
        this._accessControlAllowOrigins.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get accessControlAllowOriginsInput() {
        return this._accessControlAllowOrigins.internalValue;
    }
    get accessControlExposeHeaders() {
        return this._accessControlExposeHeaders;
    }
    putAccessControlExposeHeaders(value) {
        this._accessControlExposeHeaders.internalValue = value;
    }
    resetAccessControlExposeHeaders() {
        this._accessControlExposeHeaders.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessControlExposeHeadersInput() {
        return this._accessControlExposeHeaders.internalValue;
    }
}
exports.CloudfrontResponseHeadersPolicyCorsConfigOutputReference = CloudfrontResponseHeadersPolicyCorsConfigOutputReference;
_e = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicyCorsConfigOutputReference[_e] = { fqn: "@cdktf/aws-cdk.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference", version: "0.0.0" };
function cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        header: cdktf.stringToTerraform(struct.header),
        override: cdktf.booleanToTerraform(struct.override),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform = cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform;
function cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        header: {
            value: cdktf.stringToHclTerraform(struct.header),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        override: {
            value: cdktf.booleanToHclTerraform(struct.override),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToHclTerraform = cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToHclTerraform;
class CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference extends cdktf.ComplexObject {
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
        if (this._header !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header;
        }
        if (this._override !== undefined) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._header = undefined;
            this._override = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._header = value.header;
            this._override = value.override;
            this._value = value.value;
        }
    }
    get header() {
        return this.getStringAttribute('header');
    }
    set header(value) {
        this._header = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerInput() {
        return this._header;
    }
    get override() {
        return this.getBooleanAttribute('override');
    }
    set override(value) {
        this._override = value;
    }
    // Temporarily expose input value. Use with caution.
    get overrideInput() {
        return this._override;
    }
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
exports.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference = CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference;
_f = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference[_f] = { fqn: "@cdktf/aws-cdk.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference", version: "0.0.0" };
class CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList extends cdktf.ComplexList {
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
        return new CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList = CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList;
_g = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList[_g] = { fqn: "@cdktf/aws-cdk.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList", version: "0.0.0" };
function cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        items: cdktf.listMapper(cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform, true)(struct.items),
    };
}
exports.cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform = cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform;
function cloudfrontResponseHeadersPolicyCustomHeadersConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        items: {
            value: cdktf.listMapperHcl(cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToHclTerraform, true)(struct.items),
            isBlock: true,
            type: "set",
            storageClassType: "CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontResponseHeadersPolicyCustomHeadersConfigToHclTerraform = cloudfrontResponseHeadersPolicyCustomHeadersConfigToHclTerraform;
class CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // items - computed: false, optional: true, required: false
        this._items = new CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList(this, "items", true);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._items?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.items = this._items?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._items.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._items.internalValue = value.items;
        }
    }
    get items() {
        return this._items;
    }
    putItems(value) {
        this._items.internalValue = value;
    }
    resetItems() {
        this._items.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get itemsInput() {
        return this._items.internalValue;
    }
}
exports.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference = CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference;
_h = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference[_h] = { fqn: "@cdktf/aws-cdk.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference", version: "0.0.0" };
function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_security_policy: cdktf.stringToTerraform(struct.contentSecurityPolicy),
        override: cdktf.booleanToTerraform(struct.override),
    };
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform;
function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        content_security_policy: {
            value: cdktf.stringToHclTerraform(struct.contentSecurityPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        override: {
            value: cdktf.booleanToHclTerraform(struct.override),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToHclTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToHclTerraform;
class CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference extends cdktf.ComplexObject {
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
        if (this._contentSecurityPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentSecurityPolicy = this._contentSecurityPolicy;
        }
        if (this._override !== undefined) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._contentSecurityPolicy = undefined;
            this._override = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._contentSecurityPolicy = value.contentSecurityPolicy;
            this._override = value.override;
        }
    }
    get contentSecurityPolicy() {
        return this.getStringAttribute('content_security_policy');
    }
    set contentSecurityPolicy(value) {
        this._contentSecurityPolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    get contentSecurityPolicyInput() {
        return this._contentSecurityPolicy;
    }
    get override() {
        return this.getBooleanAttribute('override');
    }
    set override(value) {
        this._override = value;
    }
    // Temporarily expose input value. Use with caution.
    get overrideInput() {
        return this._override;
    }
}
exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference = CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference;
_j = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference[_j] = { fqn: "@cdktf/aws-cdk.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference", version: "0.0.0" };
function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        override: cdktf.booleanToTerraform(struct.override),
    };
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform;
function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        override: {
            value: cdktf.booleanToHclTerraform(struct.override),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToHclTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToHclTerraform;
class CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._override !== undefined) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._override = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._override = value.override;
        }
    }
    get override() {
        return this.getBooleanAttribute('override');
    }
    set override(value) {
        this._override = value;
    }
    // Temporarily expose input value. Use with caution.
    get overrideInput() {
        return this._override;
    }
}
exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference = CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference;
_k = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference[_k] = { fqn: "@cdktf/aws-cdk.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference", version: "0.0.0" };
function cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        frame_option: cdktf.stringToTerraform(struct.frameOption),
        override: cdktf.booleanToTerraform(struct.override),
    };
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform;
function cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        frame_option: {
            value: cdktf.stringToHclTerraform(struct.frameOption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        override: {
            value: cdktf.booleanToHclTerraform(struct.override),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToHclTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToHclTerraform;
class CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._frameOption !== undefined) {
            hasAnyValues = true;
            internalValueResult.frameOption = this._frameOption;
        }
        if (this._override !== undefined) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._frameOption = undefined;
            this._override = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._frameOption = value.frameOption;
            this._override = value.override;
        }
    }
    get frameOption() {
        return this.getStringAttribute('frame_option');
    }
    set frameOption(value) {
        this._frameOption = value;
    }
    // Temporarily expose input value. Use with caution.
    get frameOptionInput() {
        return this._frameOption;
    }
    get override() {
        return this.getBooleanAttribute('override');
    }
    set override(value) {
        this._override = value;
    }
    // Temporarily expose input value. Use with caution.
    get overrideInput() {
        return this._override;
    }
}
exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference = CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference;
_l = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference[_l] = { fqn: "@cdktf/aws-cdk.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference", version: "0.0.0" };
function cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        override: cdktf.booleanToTerraform(struct.override),
        referrer_policy: cdktf.stringToTerraform(struct.referrerPolicy),
    };
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform;
function cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        override: {
            value: cdktf.booleanToHclTerraform(struct.override),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        referrer_policy: {
            value: cdktf.stringToHclTerraform(struct.referrerPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToHclTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToHclTerraform;
class CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference extends cdktf.ComplexObject {
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
        if (this._override !== undefined) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        if (this._referrerPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.referrerPolicy = this._referrerPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._override = undefined;
            this._referrerPolicy = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._override = value.override;
            this._referrerPolicy = value.referrerPolicy;
        }
    }
    get override() {
        return this.getBooleanAttribute('override');
    }
    set override(value) {
        this._override = value;
    }
    // Temporarily expose input value. Use with caution.
    get overrideInput() {
        return this._override;
    }
    get referrerPolicy() {
        return this.getStringAttribute('referrer_policy');
    }
    set referrerPolicy(value) {
        this._referrerPolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    get referrerPolicyInput() {
        return this._referrerPolicy;
    }
}
exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference = CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference;
_m = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference[_m] = { fqn: "@cdktf/aws-cdk.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference", version: "0.0.0" };
function cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_control_max_age_sec: cdktf.numberToTerraform(struct.accessControlMaxAgeSec),
        include_subdomains: cdktf.booleanToTerraform(struct.includeSubdomains),
        override: cdktf.booleanToTerraform(struct.override),
        preload: cdktf.booleanToTerraform(struct.preload),
    };
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform;
function cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access_control_max_age_sec: {
            value: cdktf.numberToHclTerraform(struct.accessControlMaxAgeSec),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        include_subdomains: {
            value: cdktf.booleanToHclTerraform(struct.includeSubdomains),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        override: {
            value: cdktf.booleanToHclTerraform(struct.override),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        preload: {
            value: cdktf.booleanToHclTerraform(struct.preload),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToHclTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToHclTerraform;
class CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference extends cdktf.ComplexObject {
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
        if (this._accessControlMaxAgeSec !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessControlMaxAgeSec = this._accessControlMaxAgeSec;
        }
        if (this._includeSubdomains !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeSubdomains = this._includeSubdomains;
        }
        if (this._override !== undefined) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        if (this._preload !== undefined) {
            hasAnyValues = true;
            internalValueResult.preload = this._preload;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accessControlMaxAgeSec = undefined;
            this._includeSubdomains = undefined;
            this._override = undefined;
            this._preload = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accessControlMaxAgeSec = value.accessControlMaxAgeSec;
            this._includeSubdomains = value.includeSubdomains;
            this._override = value.override;
            this._preload = value.preload;
        }
    }
    get accessControlMaxAgeSec() {
        return this.getNumberAttribute('access_control_max_age_sec');
    }
    set accessControlMaxAgeSec(value) {
        this._accessControlMaxAgeSec = value;
    }
    // Temporarily expose input value. Use with caution.
    get accessControlMaxAgeSecInput() {
        return this._accessControlMaxAgeSec;
    }
    get includeSubdomains() {
        return this.getBooleanAttribute('include_subdomains');
    }
    set includeSubdomains(value) {
        this._includeSubdomains = value;
    }
    resetIncludeSubdomains() {
        this._includeSubdomains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeSubdomainsInput() {
        return this._includeSubdomains;
    }
    get override() {
        return this.getBooleanAttribute('override');
    }
    set override(value) {
        this._override = value;
    }
    // Temporarily expose input value. Use with caution.
    get overrideInput() {
        return this._override;
    }
    get preload() {
        return this.getBooleanAttribute('preload');
    }
    set preload(value) {
        this._preload = value;
    }
    resetPreload() {
        this._preload = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preloadInput() {
        return this._preload;
    }
}
exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference = CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference;
_o = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference[_o] = { fqn: "@cdktf/aws-cdk.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference", version: "0.0.0" };
function cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode_block: cdktf.booleanToTerraform(struct.modeBlock),
        override: cdktf.booleanToTerraform(struct.override),
        protection: cdktf.booleanToTerraform(struct.protection),
        report_uri: cdktf.stringToTerraform(struct.reportUri),
    };
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform;
function cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        mode_block: {
            value: cdktf.booleanToHclTerraform(struct.modeBlock),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        override: {
            value: cdktf.booleanToHclTerraform(struct.override),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        protection: {
            value: cdktf.booleanToHclTerraform(struct.protection),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        report_uri: {
            value: cdktf.stringToHclTerraform(struct.reportUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToHclTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToHclTerraform;
class CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference extends cdktf.ComplexObject {
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
        if (this._modeBlock !== undefined) {
            hasAnyValues = true;
            internalValueResult.modeBlock = this._modeBlock;
        }
        if (this._override !== undefined) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        if (this._protection !== undefined) {
            hasAnyValues = true;
            internalValueResult.protection = this._protection;
        }
        if (this._reportUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.reportUri = this._reportUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._modeBlock = undefined;
            this._override = undefined;
            this._protection = undefined;
            this._reportUri = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._modeBlock = value.modeBlock;
            this._override = value.override;
            this._protection = value.protection;
            this._reportUri = value.reportUri;
        }
    }
    get modeBlock() {
        return this.getBooleanAttribute('mode_block');
    }
    set modeBlock(value) {
        this._modeBlock = value;
    }
    resetModeBlock() {
        this._modeBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modeBlockInput() {
        return this._modeBlock;
    }
    get override() {
        return this.getBooleanAttribute('override');
    }
    set override(value) {
        this._override = value;
    }
    // Temporarily expose input value. Use with caution.
    get overrideInput() {
        return this._override;
    }
    get protection() {
        return this.getBooleanAttribute('protection');
    }
    set protection(value) {
        this._protection = value;
    }
    // Temporarily expose input value. Use with caution.
    get protectionInput() {
        return this._protection;
    }
    get reportUri() {
        return this.getStringAttribute('report_uri');
    }
    set reportUri(value) {
        this._reportUri = value;
    }
    resetReportUri() {
        this._reportUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get reportUriInput() {
        return this._reportUri;
    }
}
exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference = CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference;
_p = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference[_p] = { fqn: "@cdktf/aws-cdk.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference", version: "0.0.0" };
function cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_security_policy: cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform(struct.contentSecurityPolicy),
        content_type_options: cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform(struct.contentTypeOptions),
        frame_options: cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform(struct.frameOptions),
        referrer_policy: cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform(struct.referrerPolicy),
        strict_transport_security: cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform(struct.strictTransportSecurity),
        xss_protection: cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform(struct.xssProtection),
    };
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform;
function cloudfrontResponseHeadersPolicySecurityHeadersConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        content_security_policy: {
            value: cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToHclTerraform(struct.contentSecurityPolicy),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyList",
        },
        content_type_options: {
            value: cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToHclTerraform(struct.contentTypeOptions),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsList",
        },
        frame_options: {
            value: cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToHclTerraform(struct.frameOptions),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsList",
        },
        referrer_policy: {
            value: cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToHclTerraform(struct.referrerPolicy),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyList",
        },
        strict_transport_security: {
            value: cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToHclTerraform(struct.strictTransportSecurity),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityList",
        },
        xss_protection: {
            value: cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToHclTerraform(struct.xssProtection),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigToHclTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigToHclTerraform;
class CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // content_security_policy - computed: false, optional: true, required: false
        this._contentSecurityPolicy = new CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference(this, "content_security_policy");
        // content_type_options - computed: false, optional: true, required: false
        this._contentTypeOptions = new CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference(this, "content_type_options");
        // frame_options - computed: false, optional: true, required: false
        this._frameOptions = new CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference(this, "frame_options");
        // referrer_policy - computed: false, optional: true, required: false
        this._referrerPolicy = new CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference(this, "referrer_policy");
        // strict_transport_security - computed: false, optional: true, required: false
        this._strictTransportSecurity = new CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference(this, "strict_transport_security");
        // xss_protection - computed: false, optional: true, required: false
        this._xssProtection = new CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference(this, "xss_protection");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._contentSecurityPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentSecurityPolicy = this._contentSecurityPolicy?.internalValue;
        }
        if (this._contentTypeOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentTypeOptions = this._contentTypeOptions?.internalValue;
        }
        if (this._frameOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.frameOptions = this._frameOptions?.internalValue;
        }
        if (this._referrerPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.referrerPolicy = this._referrerPolicy?.internalValue;
        }
        if (this._strictTransportSecurity?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.strictTransportSecurity = this._strictTransportSecurity?.internalValue;
        }
        if (this._xssProtection?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.xssProtection = this._xssProtection?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._contentSecurityPolicy.internalValue = undefined;
            this._contentTypeOptions.internalValue = undefined;
            this._frameOptions.internalValue = undefined;
            this._referrerPolicy.internalValue = undefined;
            this._strictTransportSecurity.internalValue = undefined;
            this._xssProtection.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._contentSecurityPolicy.internalValue = value.contentSecurityPolicy;
            this._contentTypeOptions.internalValue = value.contentTypeOptions;
            this._frameOptions.internalValue = value.frameOptions;
            this._referrerPolicy.internalValue = value.referrerPolicy;
            this._strictTransportSecurity.internalValue = value.strictTransportSecurity;
            this._xssProtection.internalValue = value.xssProtection;
        }
    }
    get contentSecurityPolicy() {
        return this._contentSecurityPolicy;
    }
    putContentSecurityPolicy(value) {
        this._contentSecurityPolicy.internalValue = value;
    }
    resetContentSecurityPolicy() {
        this._contentSecurityPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentSecurityPolicyInput() {
        return this._contentSecurityPolicy.internalValue;
    }
    get contentTypeOptions() {
        return this._contentTypeOptions;
    }
    putContentTypeOptions(value) {
        this._contentTypeOptions.internalValue = value;
    }
    resetContentTypeOptions() {
        this._contentTypeOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentTypeOptionsInput() {
        return this._contentTypeOptions.internalValue;
    }
    get frameOptions() {
        return this._frameOptions;
    }
    putFrameOptions(value) {
        this._frameOptions.internalValue = value;
    }
    resetFrameOptions() {
        this._frameOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get frameOptionsInput() {
        return this._frameOptions.internalValue;
    }
    get referrerPolicy() {
        return this._referrerPolicy;
    }
    putReferrerPolicy(value) {
        this._referrerPolicy.internalValue = value;
    }
    resetReferrerPolicy() {
        this._referrerPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get referrerPolicyInput() {
        return this._referrerPolicy.internalValue;
    }
    get strictTransportSecurity() {
        return this._strictTransportSecurity;
    }
    putStrictTransportSecurity(value) {
        this._strictTransportSecurity.internalValue = value;
    }
    resetStrictTransportSecurity() {
        this._strictTransportSecurity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get strictTransportSecurityInput() {
        return this._strictTransportSecurity.internalValue;
    }
    get xssProtection() {
        return this._xssProtection;
    }
    putXssProtection(value) {
        this._xssProtection.internalValue = value;
    }
    resetXssProtection() {
        this._xssProtection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get xssProtectionInput() {
        return this._xssProtection.internalValue;
    }
}
exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference = CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference;
_q = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference[_q] = { fqn: "@cdktf/aws-cdk.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_response_headers_policy aws_cloudfront_response_headers_policy}
*/
class CloudfrontResponseHeadersPolicy extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CloudfrontResponseHeadersPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudfrontResponseHeadersPolicy to import
    * @param importFromId The id of the existing CloudfrontResponseHeadersPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_response_headers_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudfrontResponseHeadersPolicy to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_response_headers_policy", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_response_headers_policy aws_cloudfront_response_headers_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontResponseHeadersPolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudfront_response_headers_policy',
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
        // cors_config - computed: false, optional: true, required: false
        this._corsConfig = new CloudfrontResponseHeadersPolicyCorsConfigOutputReference(this, "cors_config");
        // custom_headers_config - computed: false, optional: true, required: false
        this._customHeadersConfig = new CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference(this, "custom_headers_config");
        // security_headers_config - computed: false, optional: true, required: false
        this._securityHeadersConfig = new CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference(this, "security_headers_config");
        this._comment = config.comment;
        this._etag = config.etag;
        this._id = config.id;
        this._name = config.name;
        this._corsConfig.internalValue = config.corsConfig;
        this._customHeadersConfig.internalValue = config.customHeadersConfig;
        this._securityHeadersConfig.internalValue = config.securityHeadersConfig;
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
    get etag() {
        return this.getStringAttribute('etag');
    }
    set etag(value) {
        this._etag = value;
    }
    resetEtag() {
        this._etag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get etagInput() {
        return this._etag;
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
    get corsConfig() {
        return this._corsConfig;
    }
    putCorsConfig(value) {
        this._corsConfig.internalValue = value;
    }
    resetCorsConfig() {
        this._corsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get corsConfigInput() {
        return this._corsConfig.internalValue;
    }
    get customHeadersConfig() {
        return this._customHeadersConfig;
    }
    putCustomHeadersConfig(value) {
        this._customHeadersConfig.internalValue = value;
    }
    resetCustomHeadersConfig() {
        this._customHeadersConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customHeadersConfigInput() {
        return this._customHeadersConfig.internalValue;
    }
    get securityHeadersConfig() {
        return this._securityHeadersConfig;
    }
    putSecurityHeadersConfig(value) {
        this._securityHeadersConfig.internalValue = value;
    }
    resetSecurityHeadersConfig() {
        this._securityHeadersConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityHeadersConfigInput() {
        return this._securityHeadersConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            comment: cdktf.stringToTerraform(this._comment),
            etag: cdktf.stringToTerraform(this._etag),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            cors_config: cloudfrontResponseHeadersPolicyCorsConfigToTerraform(this._corsConfig.internalValue),
            custom_headers_config: cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform(this._customHeadersConfig.internalValue),
            security_headers_config: cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform(this._securityHeadersConfig.internalValue),
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
            etag: {
                value: cdktf.stringToHclTerraform(this._etag),
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
            cors_config: {
                value: cloudfrontResponseHeadersPolicyCorsConfigToHclTerraform(this._corsConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CloudfrontResponseHeadersPolicyCorsConfigList",
            },
            custom_headers_config: {
                value: cloudfrontResponseHeadersPolicyCustomHeadersConfigToHclTerraform(this._customHeadersConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CloudfrontResponseHeadersPolicyCustomHeadersConfigList",
            },
            security_headers_config: {
                value: cloudfrontResponseHeadersPolicySecurityHeadersConfigToHclTerraform(this._securityHeadersConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CloudfrontResponseHeadersPolicySecurityHeadersConfigList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.CloudfrontResponseHeadersPolicy = CloudfrontResponseHeadersPolicy;
_r = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicy[_r] = { fqn: "@cdktf/aws-cdk.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
CloudfrontResponseHeadersPolicy.tfResourceType = "aws_cloudfront_response_headers_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2Nsb3VkZnJvbnQtcmVzcG9uc2UtaGVhZGVycy1wb2xpY3kvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSwrQkFBK0I7QUFrRC9CLFNBQWdCLDZFQUE2RSxDQUFDLE1BQStKO0lBQzNQLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUN2RSxDQUFBO0FBQ0gsQ0FBQztBQVJELHNLQVFDO0FBR0QsU0FBZ0IsZ0ZBQWdGLENBQUMsTUFBK0o7SUFDOVAsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWixLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FB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QUEzQyxDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3lcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjY29tbWVudCBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5I2NvbW1lbnR9XG4gICovXG4gIHJlYWRvbmx5IGNvbW1lbnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjZXRhZyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5I2V0YWd9XG4gICovXG4gIHJlYWRvbmx5IGV0YWc/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjaWQgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeSNuYW1lIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3kjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBjb3JzX2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeSNjb3JzX2NvbmZpZyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5I2NvcnNfY29uZmlnfVxuICAqL1xuICByZWFkb25seSBjb3JzQ29uZmlnPzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWc7XG4gIC8qKlxuICAqIGN1c3RvbV9oZWFkZXJzX2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeSNjdXN0b21faGVhZGVyc19jb25maWcgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSNjdXN0b21faGVhZGVyc19jb25maWd9XG4gICovXG4gIHJlYWRvbmx5IGN1c3RvbUhlYWRlcnNDb25maWc/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZztcbiAgLyoqXG4gICogc2VjdXJpdHlfaGVhZGVyc19jb25maWcgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjc2VjdXJpdHlfaGVhZGVyc19jb25maWcgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSNzZWN1cml0eV9oZWFkZXJzX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgc2VjdXJpdHlIZWFkZXJzQ29uZmlnPzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeSNpdGVtcyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5I2l0ZW1zfVxuICAqL1xuICByZWFkb25seSBpdGVtcz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGl0ZW1zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5pdGVtcyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBpdGVtczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLml0ZW1zKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93SGVhZGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faXRlbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaXRlbXMgPSB0aGlzLl9pdGVtcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93SGVhZGVycyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pdGVtcyA9IHZhbHVlLml0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIC8vIGl0ZW1zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2l0ZW1zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpdGVtcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGl0ZW1zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2l0ZW1zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXRlbXMoKSB7XG4gICAgdGhpcy5faXRlbXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGl0ZW1zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kcyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjaXRlbXMgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSNpdGVtc31cbiAgKi9cbiAgcmVhZG9ubHkgaXRlbXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kc1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kc091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpdGVtczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuaXRlbXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kc091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgaXRlbXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5pdGVtcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2l0ZW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lml0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pdGVtcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faXRlbXMgPSB2YWx1ZS5pdGVtcztcbiAgICB9XG4gIH1cblxuICAvLyBpdGVtcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pdGVtcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaXRlbXMnKSk7XG4gIH1cbiAgcHVibGljIHNldCBpdGVtcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEl0ZW1zKCkge1xuICAgIHRoaXMuX2l0ZW1zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpdGVtc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5I2l0ZW1zIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3kjaXRlbXN9XG4gICovXG4gIHJlYWRvbmx5IGl0ZW1zPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnNPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaXRlbXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLml0ZW1zKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnNPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGl0ZW1zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuaXRlbXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93T3JpZ2luc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pdGVtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pdGVtcyA9IHRoaXMuX2l0ZW1zO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faXRlbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdmFsdWUuaXRlbXM7XG4gICAgfVxuICB9XG5cbiAgLy8gaXRlbXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaXRlbXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2l0ZW1zJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgaXRlbXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJdGVtcygpIHtcbiAgICB0aGlzLl9pdGVtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXRlbXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjaXRlbXMgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSNpdGVtc31cbiAgKi9cbiAgcmVhZG9ubHkgaXRlbXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpdGVtczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuaXRlbXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgaXRlbXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5pdGVtcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVyc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faXRlbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaXRlbXMgPSB0aGlzLl9pdGVtcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pdGVtcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faXRlbXMgPSB2YWx1ZS5pdGVtcztcbiAgICB9XG4gIH1cblxuICAvLyBpdGVtcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pdGVtcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaXRlbXMnKSk7XG4gIH1cbiAgcHVibGljIHNldCBpdGVtcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEl0ZW1zKCkge1xuICAgIHRoaXMuX2l0ZW1zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpdGVtc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjYWNjZXNzX2NvbnRyb2xfYWxsb3dfY3JlZGVudGlhbHMgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSNhY2Nlc3NfY29udHJvbF9hbGxvd19jcmVkZW50aWFsc31cbiAgKi9cbiAgcmVhZG9ubHkgYWNjZXNzQ29udHJvbEFsbG93Q3JlZGVudGlhbHM6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeSNhY2Nlc3NfY29udHJvbF9tYXhfYWdlX3NlYyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5I2FjY2Vzc19jb250cm9sX21heF9hZ2Vfc2VjfVxuICAqL1xuICByZWFkb25seSBhY2Nlc3NDb250cm9sTWF4QWdlU2VjPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5I29yaWdpbl9vdmVycmlkZSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5I29yaWdpbl9vdmVycmlkZX1cbiAgKi9cbiAgcmVhZG9ubHkgb3JpZ2luT3ZlcnJpZGU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogYWNjZXNzX2NvbnRyb2xfYWxsb3dfaGVhZGVycyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeSNhY2Nlc3NfY29udHJvbF9hbGxvd19oZWFkZXJzIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3kjYWNjZXNzX2NvbnRyb2xfYWxsb3dfaGVhZGVyc31cbiAgKi9cbiAgcmVhZG9ubHkgYWNjZXNzQ29udHJvbEFsbG93SGVhZGVyczogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzO1xuICAvKipcbiAgKiBhY2Nlc3NfY29udHJvbF9hbGxvd19tZXRob2RzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5I2FjY2Vzc19jb250cm9sX2FsbG93X21ldGhvZHMgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSNhY2Nlc3NfY29udHJvbF9hbGxvd19tZXRob2RzfVxuICAqL1xuICByZWFkb25seSBhY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHM7XG4gIC8qKlxuICAqIGFjY2Vzc19jb250cm9sX2FsbG93X29yaWdpbnMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjYWNjZXNzX2NvbnRyb2xfYWxsb3dfb3JpZ2lucyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5I2FjY2Vzc19jb250cm9sX2FsbG93X29yaWdpbnN9XG4gICovXG4gIHJlYWRvbmx5IGFjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnM6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93T3JpZ2lucztcbiAgLyoqXG4gICogYWNjZXNzX2NvbnRyb2xfZXhwb3NlX2hlYWRlcnMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjYWNjZXNzX2NvbnRyb2xfZXhwb3NlX2hlYWRlcnMgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSNhY2Nlc3NfY29udHJvbF9leHBvc2VfaGVhZGVyc31cbiAgKi9cbiAgcmVhZG9ubHkgYWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnM/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjY2Vzc19jb250cm9sX2FsbG93X2NyZWRlbnRpYWxzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NDb250cm9sQWxsb3dDcmVkZW50aWFscyksXG4gICAgYWNjZXNzX2NvbnRyb2xfbWF4X2FnZV9zZWM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzQ29udHJvbE1heEFnZVNlYyksXG4gICAgb3JpZ2luX292ZXJyaWRlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5vcmlnaW5PdmVycmlkZSksXG4gICAgYWNjZXNzX2NvbnRyb2xfYWxsb3dfaGVhZGVyczogY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzKSxcbiAgICBhY2Nlc3NfY29udHJvbF9hbGxvd19tZXRob2RzOiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHNUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHMpLFxuICAgIGFjY2Vzc19jb250cm9sX2FsbG93X29yaWdpbnM6IGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93T3JpZ2luc1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzQ29udHJvbEFsbG93T3JpZ2lucyksXG4gICAgYWNjZXNzX2NvbnRyb2xfZXhwb3NlX2hlYWRlcnM6IGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFjY2Vzc19jb250cm9sX2FsbG93X2NyZWRlbnRpYWxzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzQ29udHJvbEFsbG93Q3JlZGVudGlhbHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBhY2Nlc3NfY29udHJvbF9tYXhfYWdlX3NlYzoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzQ29udHJvbE1heEFnZVNlYyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgb3JpZ2luX292ZXJyaWRlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEub3JpZ2luT3ZlcnJpZGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBhY2Nlc3NfY29udHJvbF9hbGxvd19oZWFkZXJzOiB7XG4gICAgICB2YWx1ZTogY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzTGlzdFwiLFxuICAgIH0sXG4gICAgYWNjZXNzX2NvbnRyb2xfYWxsb3dfbWV0aG9kczoge1xuICAgICAgdmFsdWU6IGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kc1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzQ29udHJvbEFsbG93TWV0aG9kcyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kc0xpc3RcIixcbiAgICB9LFxuICAgIGFjY2Vzc19jb250cm9sX2FsbG93X29yaWdpbnM6IHtcbiAgICAgIHZhbHVlOiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnNMaXN0XCIsXG4gICAgfSxcbiAgICBhY2Nlc3NfY29udHJvbF9leHBvc2VfaGVhZGVyczoge1xuICAgICAgdmFsdWU6IGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVyc0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dDcmVkZW50aWFscyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hY2Nlc3NDb250cm9sQWxsb3dDcmVkZW50aWFscyA9IHRoaXMuX2FjY2Vzc0NvbnRyb2xBbGxvd0NyZWRlbnRpYWxzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYWNjZXNzQ29udHJvbE1heEFnZVNlYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hY2Nlc3NDb250cm9sTWF4QWdlU2VjID0gdGhpcy5fYWNjZXNzQ29udHJvbE1heEFnZVNlYztcbiAgICB9XG4gICAgaWYgKHRoaXMuX29yaWdpbk92ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm9yaWdpbk92ZXJyaWRlID0gdGhpcy5fb3JpZ2luT3ZlcnJpZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnMgPSB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYWNjZXNzQ29udHJvbEFsbG93TWV0aG9kcz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzID0gdGhpcy5fYWNjZXNzQ29udHJvbEFsbG93TWV0aG9kcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWNjZXNzQ29udHJvbEFsbG93T3JpZ2lucyA9IHRoaXMuX2FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycyA9IHRoaXMuX2FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dDcmVkZW50aWFscyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xNYXhBZ2VTZWMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vcmlnaW5PdmVycmlkZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xBbGxvd0NyZWRlbnRpYWxzID0gdmFsdWUuYWNjZXNzQ29udHJvbEFsbG93Q3JlZGVudGlhbHM7XG4gICAgICB0aGlzLl9hY2Nlc3NDb250cm9sTWF4QWdlU2VjID0gdmFsdWUuYWNjZXNzQ29udHJvbE1heEFnZVNlYztcbiAgICAgIHRoaXMuX29yaWdpbk92ZXJyaWRlID0gdmFsdWUub3JpZ2luT3ZlcnJpZGU7XG4gICAgICB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzO1xuICAgICAgdGhpcy5fYWNjZXNzQ29udHJvbEFsbG93TWV0aG9kcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYWNjZXNzQ29udHJvbEFsbG93TWV0aG9kcztcbiAgICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnM7XG4gICAgICB0aGlzLl9hY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnM7XG4gICAgfVxuICB9XG5cbiAgLy8gYWNjZXNzX2NvbnRyb2xfYWxsb3dfY3JlZGVudGlhbHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWNjZXNzQ29udHJvbEFsbG93Q3JlZGVudGlhbHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFjY2Vzc0NvbnRyb2xBbGxvd0NyZWRlbnRpYWxzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2FjY2Vzc19jb250cm9sX2FsbG93X2NyZWRlbnRpYWxzJyk7XG4gIH1cbiAgcHVibGljIHNldCBhY2Nlc3NDb250cm9sQWxsb3dDcmVkZW50aWFscyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYWNjZXNzQ29udHJvbEFsbG93Q3JlZGVudGlhbHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbEFsbG93Q3JlZGVudGlhbHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzQ29udHJvbEFsbG93Q3JlZGVudGlhbHM7XG4gIH1cblxuICAvLyBhY2Nlc3NfY29udHJvbF9tYXhfYWdlX3NlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2Nlc3NDb250cm9sTWF4QWdlU2VjPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBhY2Nlc3NDb250cm9sTWF4QWdlU2VjKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYWNjZXNzX2NvbnRyb2xfbWF4X2FnZV9zZWMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjY2Vzc0NvbnRyb2xNYXhBZ2VTZWModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xNYXhBZ2VTZWMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2Nlc3NDb250cm9sTWF4QWdlU2VjKCkge1xuICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xNYXhBZ2VTZWMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY2Vzc0NvbnRyb2xNYXhBZ2VTZWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzQ29udHJvbE1heEFnZVNlYztcbiAgfVxuXG4gIC8vIG9yaWdpbl9vdmVycmlkZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9vcmlnaW5PdmVycmlkZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgb3JpZ2luT3ZlcnJpZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnb3JpZ2luX292ZXJyaWRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBvcmlnaW5PdmVycmlkZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fb3JpZ2luT3ZlcnJpZGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3JpZ2luT3ZlcnJpZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JpZ2luT3ZlcnJpZGU7XG4gIH1cblxuICAvLyBhY2Nlc3NfY29udHJvbF9hbGxvd19oZWFkZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnMgPSBuZXcgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiYWNjZXNzX2NvbnRyb2xfYWxsb3dfaGVhZGVyc1wiKTtcbiAgcHVibGljIGdldCBhY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzO1xuICB9XG4gIHB1YmxpYyBwdXRBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnMpIHtcbiAgICB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbEFsbG93SGVhZGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBhY2Nlc3NfY29udHJvbF9hbGxvd19tZXRob2RzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHMgPSBuZXcgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiYWNjZXNzX2NvbnRyb2xfYWxsb3dfbWV0aG9kc1wiKTtcbiAgcHVibGljIGdldCBhY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzKCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzO1xuICB9XG4gIHB1YmxpYyBwdXRBY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHMpIHtcbiAgICB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbEFsbG93TWV0aG9kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBhY2Nlc3NfY29udHJvbF9hbGxvd19vcmlnaW5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnMgPSBuZXcgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiYWNjZXNzX2NvbnRyb2xfYWxsb3dfb3JpZ2luc1wiKTtcbiAgcHVibGljIGdldCBhY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zKCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zO1xuICB9XG4gIHB1YmxpYyBwdXRBY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnMpIHtcbiAgICB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbEFsbG93T3JpZ2luc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBhY2Nlc3NfY29udHJvbF9leHBvc2VfaGVhZGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycyA9IG5ldyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiYWNjZXNzX2NvbnRyb2xfZXhwb3NlX2hlYWRlcnNcIik7XG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzO1xuICB9XG4gIHB1YmxpYyBwdXRBY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycyh2YWx1ZTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycykge1xuICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycygpIHtcbiAgICB0aGlzLl9hY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnSXRlbXMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5I2hlYWRlciBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5I2hlYWRlcn1cbiAgKi9cbiAgcmVhZG9ubHkgaGVhZGVyOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjb3ZlcnJpZGUgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSNvdmVycmlkZX1cbiAgKi9cbiAgcmVhZG9ubHkgb3ZlcnJpZGU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeSN2YWx1ZSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5I3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWdJdGVtc1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnSXRlbXMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBoZWFkZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaGVhZGVyKSxcbiAgICBvdmVycmlkZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEub3ZlcnJpZGUpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ0l0ZW1zVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWdJdGVtcyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmhlYWRlciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgb3ZlcnJpZGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5vdmVycmlkZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIHZhbHVlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ0l0ZW1zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnSXRlbXMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2hlYWRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5oZWFkZXIgPSB0aGlzLl9oZWFkZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vdmVycmlkZSA9IHRoaXMuX292ZXJyaWRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnSXRlbXMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faGVhZGVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb3ZlcnJpZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9oZWFkZXIgPSB2YWx1ZS5oZWFkZXI7XG4gICAgICB0aGlzLl9vdmVycmlkZSA9IHZhbHVlLm92ZXJyaWRlO1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBoZWFkZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaGVhZGVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBoZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdoZWFkZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhlYWRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faGVhZGVyID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlYWRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXI7XG4gIH1cblxuICAvLyBvdmVycmlkZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9vdmVycmlkZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnb3ZlcnJpZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG92ZXJyaWRlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9vdmVycmlkZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvdmVycmlkZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vdmVycmlkZTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbHVlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnSXRlbXNMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ0l0ZW1zW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnSXRlbXNPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWdJdGVtc091dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnIHtcbiAgLyoqXG4gICogaXRlbXMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjaXRlbXMgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSNpdGVtc31cbiAgKi9cbiAgcmVhZG9ubHkgaXRlbXM/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ0l0ZW1zW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpdGVtczogY2RrdGYubGlzdE1hcHBlcihjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ0l0ZW1zVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuaXRlbXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgaXRlbXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnSXRlbXNUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5pdGVtcyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWdJdGVtc0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pdGVtcz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pdGVtcyA9IHRoaXMuX2l0ZW1zPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pdGVtcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pdGVtcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuaXRlbXM7XG4gICAgfVxuICB9XG5cbiAgLy8gaXRlbXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaXRlbXMgPSBuZXcgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWdJdGVtc0xpc3QodGhpcywgXCJpdGVtc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cbiAgcHVibGljIHB1dEl0ZW1zKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ0l0ZW1zW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2l0ZW1zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJdGVtcygpIHtcbiAgICB0aGlzLl9pdGVtcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpdGVtc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50U2VjdXJpdHlQb2xpY3kge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5I2NvbnRlbnRfc2VjdXJpdHlfcG9saWN5IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3kjY29udGVudF9zZWN1cml0eV9wb2xpY3l9XG4gICovXG4gIHJlYWRvbmx5IGNvbnRlbnRTZWN1cml0eVBvbGljeTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5I292ZXJyaWRlIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3kjb3ZlcnJpZGV9XG4gICovXG4gIHJlYWRvbmx5IG92ZXJyaWRlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFNlY3VyaXR5UG9saWN5VG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRTZWN1cml0eVBvbGljeU91dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50U2VjdXJpdHlQb2xpY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29udGVudF9zZWN1cml0eV9wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGVudFNlY3VyaXR5UG9saWN5KSxcbiAgICBvdmVycmlkZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEub3ZlcnJpZGUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50U2VjdXJpdHlQb2xpY3lUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFNlY3VyaXR5UG9saWN5T3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRTZWN1cml0eVBvbGljeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgY29udGVudF9zZWN1cml0eV9wb2xpY3k6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvbnRlbnRTZWN1cml0eVBvbGljeSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgb3ZlcnJpZGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5vdmVycmlkZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRTZWN1cml0eVBvbGljeU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRTZWN1cml0eVBvbGljeSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29udGVudFNlY3VyaXR5UG9saWN5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbnRlbnRTZWN1cml0eVBvbGljeSA9IHRoaXMuX2NvbnRlbnRTZWN1cml0eVBvbGljeTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX292ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm92ZXJyaWRlID0gdGhpcy5fb3ZlcnJpZGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFNlY3VyaXR5UG9saWN5IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29udGVudFNlY3VyaXR5UG9saWN5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb3ZlcnJpZGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NvbnRlbnRTZWN1cml0eVBvbGljeSA9IHZhbHVlLmNvbnRlbnRTZWN1cml0eVBvbGljeTtcbiAgICAgIHRoaXMuX292ZXJyaWRlID0gdmFsdWUub3ZlcnJpZGU7XG4gICAgfVxuICB9XG5cbiAgLy8gY29udGVudF9zZWN1cml0eV9wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29udGVudFNlY3VyaXR5UG9saWN5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb250ZW50U2VjdXJpdHlQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250ZW50X3NlY3VyaXR5X3BvbGljeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29udGVudFNlY3VyaXR5UG9saWN5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb250ZW50U2VjdXJpdHlQb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGVudFNlY3VyaXR5UG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRTZWN1cml0eVBvbGljeTtcbiAgfVxuXG4gIC8vIG92ZXJyaWRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX292ZXJyaWRlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBvdmVycmlkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdvdmVycmlkZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgb3ZlcnJpZGUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX292ZXJyaWRlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG92ZXJyaWRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJyaWRlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50VHlwZU9wdGlvbnMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5I292ZXJyaWRlIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3kjb3ZlcnJpZGV9XG4gICovXG4gIHJlYWRvbmx5IG92ZXJyaWRlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFR5cGVPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50VHlwZU9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgb3ZlcnJpZGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm92ZXJyaWRlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFR5cGVPcHRpb25zVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50VHlwZU9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIG92ZXJyaWRlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEub3ZlcnJpZGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50VHlwZU9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50VHlwZU9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX292ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm92ZXJyaWRlID0gdGhpcy5fb3ZlcnJpZGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFR5cGVPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fb3ZlcnJpZGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX292ZXJyaWRlID0gdmFsdWUub3ZlcnJpZGU7XG4gICAgfVxuICB9XG5cbiAgLy8gb3ZlcnJpZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfb3ZlcnJpZGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IG92ZXJyaWRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ292ZXJyaWRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBvdmVycmlkZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fb3ZlcnJpZGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcnJpZGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0ZyYW1lT3B0aW9ucyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjZnJhbWVfb3B0aW9uIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3kjZnJhbWVfb3B0aW9ufVxuICAqL1xuICByZWFkb25seSBmcmFtZU9wdGlvbjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5I292ZXJyaWRlIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3kjb3ZlcnJpZGV9XG4gICovXG4gIHJlYWRvbmx5IG92ZXJyaWRlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0ZyYW1lT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdGcmFtZU9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZnJhbWVfb3B0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZyYW1lT3B0aW9uKSxcbiAgICBvdmVycmlkZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEub3ZlcnJpZGUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdGcmFtZU9wdGlvbnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0ZyYW1lT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZnJhbWVfb3B0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5mcmFtZU9wdGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgb3ZlcnJpZGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5vdmVycmlkZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0ZyYW1lT3B0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0ZyYW1lT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZnJhbWVPcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZnJhbWVPcHRpb24gPSB0aGlzLl9mcmFtZU9wdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX292ZXJyaWRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm92ZXJyaWRlID0gdGhpcy5fb3ZlcnJpZGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZnJhbWVPcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vdmVycmlkZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZnJhbWVPcHRpb24gPSB2YWx1ZS5mcmFtZU9wdGlvbjtcbiAgICAgIHRoaXMuX292ZXJyaWRlID0gdmFsdWUub3ZlcnJpZGU7XG4gICAgfVxuICB9XG5cbiAgLy8gZnJhbWVfb3B0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ZyYW1lT3B0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmcmFtZU9wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZyYW1lX29wdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZnJhbWVPcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZyYW1lT3B0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZyYW1lT3B0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZyYW1lT3B0aW9uO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfb3ZlcnJpZGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IG92ZXJyaWRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ292ZXJyaWRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBvdmVycmlkZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fb3ZlcnJpZGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcnJpZGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1JlZmVycmVyUG9saWN5IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeSNvdmVycmlkZSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5I292ZXJyaWRlfVxuICAqL1xuICByZWFkb25seSBvdmVycmlkZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5I3JlZmVycmVyX3BvbGljeSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5I3JlZmVycmVyX3BvbGljeX1cbiAgKi9cbiAgcmVhZG9ubHkgcmVmZXJyZXJQb2xpY3k6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdSZWZlcnJlclBvbGljeVRvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdSZWZlcnJlclBvbGljeU91dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdSZWZlcnJlclBvbGljeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBvdmVycmlkZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEub3ZlcnJpZGUpLFxuICAgIHJlZmVycmVyX3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWZlcnJlclBvbGljeSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1JlZmVycmVyUG9saWN5VG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1JlZmVycmVyUG9saWN5T3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1JlZmVycmVyUG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBvdmVycmlkZToge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm92ZXJyaWRlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgcmVmZXJyZXJfcG9saWN5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZWZlcnJlclBvbGljeSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnUmVmZXJyZXJQb2xpY3lPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdSZWZlcnJlclBvbGljeSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fb3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3ZlcnJpZGUgPSB0aGlzLl9vdmVycmlkZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlZmVycmVyUG9saWN5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlZmVycmVyUG9saWN5ID0gdGhpcy5fcmVmZXJyZXJQb2xpY3k7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnUmVmZXJyZXJQb2xpY3kgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9vdmVycmlkZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlZmVycmVyUG9saWN5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9vdmVycmlkZSA9IHZhbHVlLm92ZXJyaWRlO1xuICAgICAgdGhpcy5fcmVmZXJyZXJQb2xpY3kgPSB2YWx1ZS5yZWZlcnJlclBvbGljeTtcbiAgICB9XG4gIH1cblxuICAvLyBvdmVycmlkZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9vdmVycmlkZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnb3ZlcnJpZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG92ZXJyaWRlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9vdmVycmlkZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvdmVycmlkZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vdmVycmlkZTtcbiAgfVxuXG4gIC8vIHJlZmVycmVyX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWZlcnJlclBvbGljeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVmZXJyZXJQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWZlcnJlcl9wb2xpY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlZmVycmVyUG9saWN5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWZlcnJlclBvbGljeSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWZlcnJlclBvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWZlcnJlclBvbGljeTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnU3RyaWN0VHJhbnNwb3J0U2VjdXJpdHkge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5I2FjY2Vzc19jb250cm9sX21heF9hZ2Vfc2VjIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3kjYWNjZXNzX2NvbnRyb2xfbWF4X2FnZV9zZWN9XG4gICovXG4gIHJlYWRvbmx5IGFjY2Vzc0NvbnRyb2xNYXhBZ2VTZWM6IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeSNpbmNsdWRlX3N1YmRvbWFpbnMgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSNpbmNsdWRlX3N1YmRvbWFpbnN9XG4gICovXG4gIHJlYWRvbmx5IGluY2x1ZGVTdWJkb21haW5zPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5I292ZXJyaWRlIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3kjb3ZlcnJpZGV9XG4gICovXG4gIHJlYWRvbmx5IG92ZXJyaWRlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjcHJlbG9hZCBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5I3ByZWxvYWR9XG4gICovXG4gIHJlYWRvbmx5IHByZWxvYWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnU3RyaWN0VHJhbnNwb3J0U2VjdXJpdHlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnU3RyaWN0VHJhbnNwb3J0U2VjdXJpdHlPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnU3RyaWN0VHJhbnNwb3J0U2VjdXJpdHkpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWNjZXNzX2NvbnRyb2xfbWF4X2FnZV9zZWM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzQ29udHJvbE1heEFnZVNlYyksXG4gICAgaW5jbHVkZV9zdWJkb21haW5zOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlU3ViZG9tYWlucyksXG4gICAgb3ZlcnJpZGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm92ZXJyaWRlKSxcbiAgICBwcmVsb2FkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVsb2FkKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnU3RyaWN0VHJhbnNwb3J0U2VjdXJpdHlUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnU3RyaWN0VHJhbnNwb3J0U2VjdXJpdHlPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnU3RyaWN0VHJhbnNwb3J0U2VjdXJpdHkpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFjY2Vzc19jb250cm9sX21heF9hZ2Vfc2VjOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NDb250cm9sTWF4QWdlU2VjKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBpbmNsdWRlX3N1YmRvbWFpbnM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlU3ViZG9tYWlucyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIG92ZXJyaWRlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEub3ZlcnJpZGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBwcmVsb2FkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEucHJlbG9hZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnU3RyaWN0VHJhbnNwb3J0U2VjdXJpdHkgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjY2Vzc0NvbnRyb2xNYXhBZ2VTZWMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWNjZXNzQ29udHJvbE1heEFnZVNlYyA9IHRoaXMuX2FjY2Vzc0NvbnRyb2xNYXhBZ2VTZWM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbmNsdWRlU3ViZG9tYWlucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbmNsdWRlU3ViZG9tYWlucyA9IHRoaXMuX2luY2x1ZGVTdWJkb21haW5zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3ZlcnJpZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3ZlcnJpZGUgPSB0aGlzLl9vdmVycmlkZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZWxvYWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlbG9hZCA9IHRoaXMuX3ByZWxvYWQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnU3RyaWN0VHJhbnNwb3J0U2VjdXJpdHkgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY2Nlc3NDb250cm9sTWF4QWdlU2VjID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5jbHVkZVN1YmRvbWFpbnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vdmVycmlkZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByZWxvYWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xNYXhBZ2VTZWMgPSB2YWx1ZS5hY2Nlc3NDb250cm9sTWF4QWdlU2VjO1xuICAgICAgdGhpcy5faW5jbHVkZVN1YmRvbWFpbnMgPSB2YWx1ZS5pbmNsdWRlU3ViZG9tYWlucztcbiAgICAgIHRoaXMuX292ZXJyaWRlID0gdmFsdWUub3ZlcnJpZGU7XG4gICAgICB0aGlzLl9wcmVsb2FkID0gdmFsdWUucHJlbG9hZDtcbiAgICB9XG4gIH1cblxuICAvLyBhY2Nlc3NfY29udHJvbF9tYXhfYWdlX3NlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hY2Nlc3NDb250cm9sTWF4QWdlU2VjPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBhY2Nlc3NDb250cm9sTWF4QWdlU2VjKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYWNjZXNzX2NvbnRyb2xfbWF4X2FnZV9zZWMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjY2Vzc0NvbnRyb2xNYXhBZ2VTZWModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xNYXhBZ2VTZWMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbE1heEFnZVNlY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NDb250cm9sTWF4QWdlU2VjO1xuICB9XG5cbiAgLy8gaW5jbHVkZV9zdWJkb21haW5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luY2x1ZGVTdWJkb21haW5zPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbmNsdWRlU3ViZG9tYWlucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX3N1YmRvbWFpbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluY2x1ZGVTdWJkb21haW5zKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbmNsdWRlU3ViZG9tYWlucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVTdWJkb21haW5zKCkge1xuICAgIHRoaXMuX2luY2x1ZGVTdWJkb21haW5zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmNsdWRlU3ViZG9tYWluc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlU3ViZG9tYWlucztcbiAgfVxuXG4gIC8vIG92ZXJyaWRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX292ZXJyaWRlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBvdmVycmlkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdvdmVycmlkZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgb3ZlcnJpZGUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX292ZXJyaWRlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG92ZXJyaWRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJyaWRlO1xuICB9XG5cbiAgLy8gcHJlbG9hZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVsb2FkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBwcmVsb2FkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3ByZWxvYWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWxvYWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3ByZWxvYWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVsb2FkKCkge1xuICAgIHRoaXMuX3ByZWxvYWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWxvYWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlbG9hZDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnWHNzUHJvdGVjdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjbW9kZV9ibG9jayBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5I21vZGVfYmxvY2t9XG4gICovXG4gIHJlYWRvbmx5IG1vZGVCbG9jaz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeSNvdmVycmlkZSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5I292ZXJyaWRlfVxuICAqL1xuICByZWFkb25seSBvdmVycmlkZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5I3Byb3RlY3Rpb24gQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSNwcm90ZWN0aW9ufVxuICAqL1xuICByZWFkb25seSBwcm90ZWN0aW9uOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjcmVwb3J0X3VyaSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5I3JlcG9ydF91cml9XG4gICovXG4gIHJlYWRvbmx5IHJlcG9ydFVyaT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdYc3NQcm90ZWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1hzc1Byb3RlY3Rpb25PdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnWHNzUHJvdGVjdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtb2RlX2Jsb2NrOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5tb2RlQmxvY2spLFxuICAgIG92ZXJyaWRlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5vdmVycmlkZSksXG4gICAgcHJvdGVjdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucHJvdGVjdGlvbiksXG4gICAgcmVwb3J0X3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXBvcnRVcmkpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdYc3NQcm90ZWN0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1hzc1Byb3RlY3Rpb25PdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnWHNzUHJvdGVjdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbW9kZV9ibG9jazoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1vZGVCbG9jayksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIG92ZXJyaWRlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEub3ZlcnJpZGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBwcm90ZWN0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEucHJvdGVjdGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIHJlcG9ydF91cmk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlcG9ydFVyaSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnWHNzUHJvdGVjdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1hzc1Byb3RlY3Rpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21vZGVCbG9jayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tb2RlQmxvY2sgPSB0aGlzLl9tb2RlQmxvY2s7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vdmVycmlkZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vdmVycmlkZSA9IHRoaXMuX292ZXJyaWRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvdGVjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm90ZWN0aW9uID0gdGhpcy5fcHJvdGVjdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlcG9ydFVyaSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXBvcnRVcmkgPSB0aGlzLl9yZXBvcnRVcmk7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnWHNzUHJvdGVjdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21vZGVCbG9jayA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX292ZXJyaWRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJvdGVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlcG9ydFVyaSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbW9kZUJsb2NrID0gdmFsdWUubW9kZUJsb2NrO1xuICAgICAgdGhpcy5fb3ZlcnJpZGUgPSB2YWx1ZS5vdmVycmlkZTtcbiAgICAgIHRoaXMuX3Byb3RlY3Rpb24gPSB2YWx1ZS5wcm90ZWN0aW9uO1xuICAgICAgdGhpcy5fcmVwb3J0VXJpID0gdmFsdWUucmVwb3J0VXJpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1vZGVfYmxvY2sgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbW9kZUJsb2NrPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBtb2RlQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnbW9kZV9ibG9jaycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbW9kZUJsb2NrKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9tb2RlQmxvY2sgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNb2RlQmxvY2soKSB7XG4gICAgdGhpcy5fbW9kZUJsb2NrID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtb2RlQmxvY2tJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZUJsb2NrO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfb3ZlcnJpZGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IG92ZXJyaWRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ292ZXJyaWRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBvdmVycmlkZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fb3ZlcnJpZGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcnJpZGU7XG4gIH1cblxuICAvLyBwcm90ZWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Byb3RlY3Rpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHByb3RlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncHJvdGVjdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvdGVjdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcHJvdGVjdGlvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm90ZWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3RlY3Rpb247XG4gIH1cblxuICAvLyByZXBvcnRfdXJpIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcG9ydFVyaT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVwb3J0VXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVwb3J0X3VyaScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVwb3J0VXJpKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXBvcnRVcmkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXBvcnRVcmkoKSB7XG4gICAgdGhpcy5fcmVwb3J0VXJpID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXBvcnRVcmlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVwb3J0VXJpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWcge1xuICAvKipcbiAgKiBjb250ZW50X3NlY3VyaXR5X3BvbGljeSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeSNjb250ZW50X3NlY3VyaXR5X3BvbGljeSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5I2NvbnRlbnRfc2VjdXJpdHlfcG9saWN5fVxuICAqL1xuICByZWFkb25seSBjb250ZW50U2VjdXJpdHlQb2xpY3k/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFNlY3VyaXR5UG9saWN5O1xuICAvKipcbiAgKiBjb250ZW50X3R5cGVfb3B0aW9ucyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeSNjb250ZW50X3R5cGVfb3B0aW9ucyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5I2NvbnRlbnRfdHlwZV9vcHRpb25zfVxuICAqL1xuICByZWFkb25seSBjb250ZW50VHlwZU9wdGlvbnM/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFR5cGVPcHRpb25zO1xuICAvKipcbiAgKiBmcmFtZV9vcHRpb25zIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5I2ZyYW1lX29wdGlvbnMgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSNmcmFtZV9vcHRpb25zfVxuICAqL1xuICByZWFkb25seSBmcmFtZU9wdGlvbnM/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zO1xuICAvKipcbiAgKiByZWZlcnJlcl9wb2xpY3kgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjcmVmZXJyZXJfcG9saWN5IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3kjcmVmZXJyZXJfcG9saWN5fVxuICAqL1xuICByZWFkb25seSByZWZlcnJlclBvbGljeT86IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdSZWZlcnJlclBvbGljeTtcbiAgLyoqXG4gICogc3RyaWN0X3RyYW5zcG9ydF9zZWN1cml0eSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeSNzdHJpY3RfdHJhbnNwb3J0X3NlY3VyaXR5IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3kjc3RyaWN0X3RyYW5zcG9ydF9zZWN1cml0eX1cbiAgKi9cbiAgcmVhZG9ubHkgc3RyaWN0VHJhbnNwb3J0U2VjdXJpdHk/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnU3RyaWN0VHJhbnNwb3J0U2VjdXJpdHk7XG4gIC8qKlxuICAqIHhzc19wcm90ZWN0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5I3hzc19wcm90ZWN0aW9uIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3kjeHNzX3Byb3RlY3Rpb259XG4gICovXG4gIHJlYWRvbmx5IHhzc1Byb3RlY3Rpb24/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnWHNzUHJvdGVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb250ZW50X3NlY3VyaXR5X3BvbGljeTogY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRTZWN1cml0eVBvbGljeVRvVGVycmFmb3JtKHN0cnVjdCEuY29udGVudFNlY3VyaXR5UG9saWN5KSxcbiAgICBjb250ZW50X3R5cGVfb3B0aW9uczogY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGVudFR5cGVPcHRpb25zKSxcbiAgICBmcmFtZV9vcHRpb25zOiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0IS5mcmFtZU9wdGlvbnMpLFxuICAgIHJlZmVycmVyX3BvbGljeTogY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1JlZmVycmVyUG9saWN5VG9UZXJyYWZvcm0oc3RydWN0IS5yZWZlcnJlclBvbGljeSksXG4gICAgc3RyaWN0X3RyYW5zcG9ydF9zZWN1cml0eTogY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5VG9UZXJyYWZvcm0oc3RydWN0IS5zdHJpY3RUcmFuc3BvcnRTZWN1cml0eSksXG4gICAgeHNzX3Byb3RlY3Rpb246IGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdYc3NQcm90ZWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS54c3NQcm90ZWN0aW9uKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNvbnRlbnRfc2VjdXJpdHlfcG9saWN5OiB7XG4gICAgICB2YWx1ZTogY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRTZWN1cml0eVBvbGljeVRvSGNsVGVycmFmb3JtKHN0cnVjdCEuY29udGVudFNlY3VyaXR5UG9saWN5KSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRTZWN1cml0eVBvbGljeUxpc3RcIixcbiAgICB9LFxuICAgIGNvbnRlbnRfdHlwZV9vcHRpb25zOiB7XG4gICAgICB2YWx1ZTogY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9uc1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY29udGVudFR5cGVPcHRpb25zKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9uc0xpc3RcIixcbiAgICB9LFxuICAgIGZyYW1lX29wdGlvbnM6IHtcbiAgICAgIHZhbHVlOiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5mcmFtZU9wdGlvbnMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zTGlzdFwiLFxuICAgIH0sXG4gICAgcmVmZXJyZXJfcG9saWN5OiB7XG4gICAgICB2YWx1ZTogY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1JlZmVycmVyUG9saWN5VG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZWZlcnJlclBvbGljeSksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdSZWZlcnJlclBvbGljeUxpc3RcIixcbiAgICB9LFxuICAgIHN0cmljdF90cmFuc3BvcnRfc2VjdXJpdHk6IHtcbiAgICAgIHZhbHVlOiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnU3RyaWN0VHJhbnNwb3J0U2VjdXJpdHlUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN0cmljdFRyYW5zcG9ydFNlY3VyaXR5KSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5TGlzdFwiLFxuICAgIH0sXG4gICAgeHNzX3Byb3RlY3Rpb246IHtcbiAgICAgIHZhbHVlOiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnWHNzUHJvdGVjdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEueHNzUHJvdGVjdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdYc3NQcm90ZWN0aW9uTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb250ZW50U2VjdXJpdHlQb2xpY3k/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29udGVudFNlY3VyaXR5UG9saWN5ID0gdGhpcy5fY29udGVudFNlY3VyaXR5UG9saWN5Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29udGVudFR5cGVPcHRpb25zPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbnRlbnRUeXBlT3B0aW9ucyA9IHRoaXMuX2NvbnRlbnRUeXBlT3B0aW9ucz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZyYW1lT3B0aW9ucz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5mcmFtZU9wdGlvbnMgPSB0aGlzLl9mcmFtZU9wdGlvbnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWZlcnJlclBvbGljeT8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWZlcnJlclBvbGljeSA9IHRoaXMuX3JlZmVycmVyUG9saWN5Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RyaWN0VHJhbnNwb3J0U2VjdXJpdHk/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RyaWN0VHJhbnNwb3J0U2VjdXJpdHkgPSB0aGlzLl9zdHJpY3RUcmFuc3BvcnRTZWN1cml0eT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3hzc1Byb3RlY3Rpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQueHNzUHJvdGVjdGlvbiA9IHRoaXMuX3hzc1Byb3RlY3Rpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29udGVudFNlY3VyaXR5UG9saWN5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb250ZW50VHlwZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZyYW1lT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVmZXJyZXJQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0cmljdFRyYW5zcG9ydFNlY3VyaXR5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl94c3NQcm90ZWN0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NvbnRlbnRTZWN1cml0eVBvbGljeS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY29udGVudFNlY3VyaXR5UG9saWN5O1xuICAgICAgdGhpcy5fY29udGVudFR5cGVPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jb250ZW50VHlwZU9wdGlvbnM7XG4gICAgICB0aGlzLl9mcmFtZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmZyYW1lT3B0aW9ucztcbiAgICAgIHRoaXMuX3JlZmVycmVyUG9saWN5LmludGVybmFsVmFsdWUgPSB2YWx1ZS5yZWZlcnJlclBvbGljeTtcbiAgICAgIHRoaXMuX3N0cmljdFRyYW5zcG9ydFNlY3VyaXR5LmludGVybmFsVmFsdWUgPSB2YWx1ZS5zdHJpY3RUcmFuc3BvcnRTZWN1cml0eTtcbiAgICAgIHRoaXMuX3hzc1Byb3RlY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnhzc1Byb3RlY3Rpb247XG4gICAgfVxuICB9XG5cbiAgLy8gY29udGVudF9zZWN1cml0eV9wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29udGVudFNlY3VyaXR5UG9saWN5ID0gbmV3IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50U2VjdXJpdHlQb2xpY3lPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJjb250ZW50X3NlY3VyaXR5X3BvbGljeVwiKTtcbiAgcHVibGljIGdldCBjb250ZW50U2VjdXJpdHlQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRTZWN1cml0eVBvbGljeTtcbiAgfVxuICBwdWJsaWMgcHV0Q29udGVudFNlY3VyaXR5UG9saWN5KHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFNlY3VyaXR5UG9saWN5KSB7XG4gICAgdGhpcy5fY29udGVudFNlY3VyaXR5UG9saWN5LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb250ZW50U2VjdXJpdHlQb2xpY3koKSB7XG4gICAgdGhpcy5fY29udGVudFNlY3VyaXR5UG9saWN5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRlbnRTZWN1cml0eVBvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50U2VjdXJpdHlQb2xpY3kuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGNvbnRlbnRfdHlwZV9vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbnRlbnRUeXBlT3B0aW9ucyA9IG5ldyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFR5cGVPcHRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiY29udGVudF90eXBlX29wdGlvbnNcIik7XG4gIHB1YmxpYyBnZXQgY29udGVudFR5cGVPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50VHlwZU9wdGlvbnM7XG4gIH1cbiAgcHVibGljIHB1dENvbnRlbnRUeXBlT3B0aW9ucyh2YWx1ZTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9ucykge1xuICAgIHRoaXMuX2NvbnRlbnRUeXBlT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29udGVudFR5cGVPcHRpb25zKCkge1xuICAgIHRoaXMuX2NvbnRlbnRUeXBlT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb250ZW50VHlwZU9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudFR5cGVPcHRpb25zLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBmcmFtZV9vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZyYW1lT3B0aW9ucyA9IG5ldyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZnJhbWVfb3B0aW9uc1wiKTtcbiAgcHVibGljIGdldCBmcmFtZU9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZyYW1lT3B0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0RnJhbWVPcHRpb25zKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zKSB7XG4gICAgdGhpcy5fZnJhbWVPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGcmFtZU9wdGlvbnMoKSB7XG4gICAgdGhpcy5fZnJhbWVPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZyYW1lT3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mcmFtZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHJlZmVycmVyX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWZlcnJlclBvbGljeSA9IG5ldyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnUmVmZXJyZXJQb2xpY3lPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJyZWZlcnJlcl9wb2xpY3lcIik7XG4gIHB1YmxpYyBnZXQgcmVmZXJyZXJQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZmVycmVyUG9saWN5O1xuICB9XG4gIHB1YmxpYyBwdXRSZWZlcnJlclBvbGljeSh2YWx1ZTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1JlZmVycmVyUG9saWN5KSB7XG4gICAgdGhpcy5fcmVmZXJyZXJQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlZmVycmVyUG9saWN5KCkge1xuICAgIHRoaXMuX3JlZmVycmVyUG9saWN5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlZmVycmVyUG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZmVycmVyUG9saWN5LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzdHJpY3RfdHJhbnNwb3J0X3NlY3VyaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0cmljdFRyYW5zcG9ydFNlY3VyaXR5ID0gbmV3IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdTdHJpY3RUcmFuc3BvcnRTZWN1cml0eU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInN0cmljdF90cmFuc3BvcnRfc2VjdXJpdHlcIik7XG4gIHB1YmxpYyBnZXQgc3RyaWN0VHJhbnNwb3J0U2VjdXJpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cmljdFRyYW5zcG9ydFNlY3VyaXR5O1xuICB9XG4gIHB1YmxpYyBwdXRTdHJpY3RUcmFuc3BvcnRTZWN1cml0eSh2YWx1ZTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5KSB7XG4gICAgdGhpcy5fc3RyaWN0VHJhbnNwb3J0U2VjdXJpdHkuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0cmljdFRyYW5zcG9ydFNlY3VyaXR5KCkge1xuICAgIHRoaXMuX3N0cmljdFRyYW5zcG9ydFNlY3VyaXR5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0cmljdFRyYW5zcG9ydFNlY3VyaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cmljdFRyYW5zcG9ydFNlY3VyaXR5LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB4c3NfcHJvdGVjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF94c3NQcm90ZWN0aW9uID0gbmV3IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdYc3NQcm90ZWN0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwieHNzX3Byb3RlY3Rpb25cIik7XG4gIHB1YmxpYyBnZXQgeHNzUHJvdGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5feHNzUHJvdGVjdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0WHNzUHJvdGVjdGlvbih2YWx1ZTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1hzc1Byb3RlY3Rpb24pIHtcbiAgICB0aGlzLl94c3NQcm90ZWN0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRYc3NQcm90ZWN0aW9uKCkge1xuICAgIHRoaXMuX3hzc1Byb3RlY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgeHNzUHJvdGVjdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl94c3NQcm90ZWN0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kgYXdzX2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3l9XG4qL1xuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3kgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiYXdzX2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3lcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5IHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5IHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5I2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5IHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19jbG91ZGZyb250X3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5XCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeSBhd3NfY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeX0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnLFxuICAgICAgICBwcm92aWRlclZlcnNpb246ICczLjc2LjEnLFxuICAgICAgICBwcm92aWRlclZlcnNpb25Db25zdHJhaW50OiAnfj4gMy4wJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlLFxuICAgICAgcHJvdmlzaW9uZXJzOiBjb25maWcucHJvdmlzaW9uZXJzLFxuICAgICAgY29ubmVjdGlvbjogY29uZmlnLmNvbm5lY3Rpb24sXG4gICAgICBmb3JFYWNoOiBjb25maWcuZm9yRWFjaFxuICAgIH0pO1xuICAgIHRoaXMuX2NvbW1lbnQgPSBjb25maWcuY29tbWVudDtcbiAgICB0aGlzLl9ldGFnID0gY29uZmlnLmV0YWc7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX2NvcnNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5jb3JzQ29uZmlnO1xuICAgIHRoaXMuX2N1c3RvbUhlYWRlcnNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5jdXN0b21IZWFkZXJzQ29uZmlnO1xuICAgIHRoaXMuX3NlY3VyaXR5SGVhZGVyc0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnNlY3VyaXR5SGVhZGVyc0NvbmZpZztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gY29tbWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb21tZW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb21tZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tbWVudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29tbWVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29tbWVudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbW1lbnQoKSB7XG4gICAgdGhpcy5fY29tbWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29tbWVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb21tZW50O1xuICB9XG5cbiAgLy8gZXRhZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V0YWc/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV0YWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdldGFnJyk7XG4gIH1cbiAgcHVibGljIHNldCBldGFnKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ldGFnID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXRhZygpIHtcbiAgICB0aGlzLl9ldGFnID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBldGFnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V0YWc7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIGNvcnNfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvcnNDb25maWcgPSBuZXcgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJjb3JzX2NvbmZpZ1wiKTtcbiAgcHVibGljIGdldCBjb3JzQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9jb3JzQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRDb3JzQ29uZmlnKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZykge1xuICAgIHRoaXMuX2NvcnNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvcnNDb25maWcoKSB7XG4gICAgdGhpcy5fY29yc0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb3JzQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvcnNDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGN1c3RvbV9oZWFkZXJzX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21IZWFkZXJzQ29uZmlnID0gbmV3IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiY3VzdG9tX2hlYWRlcnNfY29uZmlnXCIpO1xuICBwdWJsaWMgZ2V0IGN1c3RvbUhlYWRlcnNDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUhlYWRlcnNDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dEN1c3RvbUhlYWRlcnNDb25maWcodmFsdWU6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnKSB7XG4gICAgdGhpcy5fY3VzdG9tSGVhZGVyc0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tSGVhZGVyc0NvbmZpZygpIHtcbiAgICB0aGlzLl9jdXN0b21IZWFkZXJzQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbUhlYWRlcnNDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tSGVhZGVyc0NvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfaGVhZGVyc19jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VjdXJpdHlIZWFkZXJzQ29uZmlnID0gbmV3IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJzZWN1cml0eV9oZWFkZXJzX2NvbmZpZ1wiKTtcbiAgcHVibGljIGdldCBzZWN1cml0eUhlYWRlcnNDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5SGVhZGVyc0NvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0U2VjdXJpdHlIZWFkZXJzQ29uZmlnKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlIZWFkZXJzQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZWN1cml0eUhlYWRlcnNDb25maWcoKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlIZWFkZXJzQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5SGVhZGVyc0NvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWN1cml0eUhlYWRlcnNDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tbWVudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29tbWVudCksXG4gICAgICBldGFnOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9ldGFnKSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIGNvcnNfY29uZmlnOiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2NvcnNDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBjdXN0b21faGVhZGVyc19jb25maWc6IGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnVG9UZXJyYWZvcm0odGhpcy5fY3VzdG9tSGVhZGVyc0NvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHNlY3VyaXR5X2hlYWRlcnNfY29uZmlnOiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnVG9UZXJyYWZvcm0odGhpcy5fc2VjdXJpdHlIZWFkZXJzQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgY29tbWVudDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fY29tbWVudCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGV0YWc6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2V0YWcpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgY29yc19jb25maWc6IHtcbiAgICAgICAgdmFsdWU6IGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnVG9IY2xUZXJyYWZvcm0odGhpcy5fY29yc0NvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgY3VzdG9tX2hlYWRlcnNfY29uZmlnOiB7XG4gICAgICAgIHZhbHVlOiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2N1c3RvbUhlYWRlcnNDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHNlY3VyaXR5X2hlYWRlcnNfY29uZmlnOiB7XG4gICAgICAgIHZhbHVlOiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnVG9IY2xUZXJyYWZvcm0odGhpcy5fc2VjdXJpdHlIZWFkZXJzQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnTGlzdFwiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19