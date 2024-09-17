"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4;
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToHclTerraform = exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityList = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference = exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToHclTerraform = exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyList = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference = exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToHclTerraform = exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsList = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference = exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToHclTerraform = exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsList = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference = exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToHclTerraform = exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyList = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference = exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToHclTerraform = exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform = exports.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigList = exports.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference = exports.dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigToHclTerraform = exports.dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform = exports.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList = exports.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference = exports.dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToHclTerraform = exports.dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigList = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigOutputReference = exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigToHclTerraform = exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigToTerraform = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersList = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference = exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToHclTerraform = exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsList = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference = exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToHclTerraform = exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsList = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference = exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToHclTerraform = exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersList = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference = exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToHclTerraform = exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform = void 0;
exports.DataAwsCloudfrontResponseHeadersPolicy = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigList = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference = exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigToHclTerraform = exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionList = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform = dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform;
function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToHclTerraform = dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToHclTerraform;
class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference extends cdktf.ComplexObject {
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
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // items - computed: true, optional: false, required: false
    get items() {
        return cdktf.Fn.tolist(this.getListAttribute('items'));
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference = DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference;
_a = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference[_a] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference", version: "0.0.0" };
class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersList extends cdktf.ComplexList {
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
        return new DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersList = DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersList;
_b = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersList[_b] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersList", version: "0.0.0" };
function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform = dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform;
function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToHclTerraform = dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToHclTerraform;
class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference extends cdktf.ComplexObject {
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
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // items - computed: true, optional: false, required: false
    get items() {
        return cdktf.Fn.tolist(this.getListAttribute('items'));
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference = DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference;
_c = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference[_c] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference", version: "0.0.0" };
class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsList extends cdktf.ComplexList {
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
        return new DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsList = DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsList;
_d = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsList[_d] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsList", version: "0.0.0" };
function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform = dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform;
function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToHclTerraform = dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToHclTerraform;
class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference extends cdktf.ComplexObject {
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
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // items - computed: true, optional: false, required: false
    get items() {
        return cdktf.Fn.tolist(this.getListAttribute('items'));
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference = DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference;
_e = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference[_e] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference", version: "0.0.0" };
class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsList extends cdktf.ComplexList {
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
        return new DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsList = DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsList;
_f = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsList[_f] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsList", version: "0.0.0" };
function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform = dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform;
function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToHclTerraform = dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToHclTerraform;
class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference extends cdktf.ComplexObject {
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
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // items - computed: true, optional: false, required: false
    get items() {
        return cdktf.Fn.tolist(this.getListAttribute('items'));
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference = DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference;
_g = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference[_g] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference", version: "0.0.0" };
class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersList extends cdktf.ComplexList {
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
        return new DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersList = DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersList;
_h = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersList[_h] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersList", version: "0.0.0" };
function dataAwsCloudfrontResponseHeadersPolicyCorsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigToTerraform = dataAwsCloudfrontResponseHeadersPolicyCorsConfigToTerraform;
function dataAwsCloudfrontResponseHeadersPolicyCorsConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.dataAwsCloudfrontResponseHeadersPolicyCorsConfigToHclTerraform = dataAwsCloudfrontResponseHeadersPolicyCorsConfigToHclTerraform;
class DataAwsCloudfrontResponseHeadersPolicyCorsConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // access_control_allow_headers - computed: true, optional: false, required: false
        this._accessControlAllowHeaders = new DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersList(this, "access_control_allow_headers", false);
        // access_control_allow_methods - computed: true, optional: false, required: false
        this._accessControlAllowMethods = new DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsList(this, "access_control_allow_methods", false);
        // access_control_allow_origins - computed: true, optional: false, required: false
        this._accessControlAllowOrigins = new DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsList(this, "access_control_allow_origins", false);
        // access_control_expose_headers - computed: true, optional: false, required: false
        this._accessControlExposeHeaders = new DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersList(this, "access_control_expose_headers", false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // access_control_allow_credentials - computed: true, optional: false, required: false
    get accessControlAllowCredentials() {
        return this.getBooleanAttribute('access_control_allow_credentials');
    }
    get accessControlAllowHeaders() {
        return this._accessControlAllowHeaders;
    }
    get accessControlAllowMethods() {
        return this._accessControlAllowMethods;
    }
    get accessControlAllowOrigins() {
        return this._accessControlAllowOrigins;
    }
    get accessControlExposeHeaders() {
        return this._accessControlExposeHeaders;
    }
    // access_control_max_age_sec - computed: true, optional: false, required: false
    get accessControlMaxAgeSec() {
        return this.getNumberAttribute('access_control_max_age_sec');
    }
    // origin_override - computed: true, optional: false, required: false
    get originOverride() {
        return this.getBooleanAttribute('origin_override');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigOutputReference = DataAwsCloudfrontResponseHeadersPolicyCorsConfigOutputReference;
_j = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCorsConfigOutputReference[_j] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicyCorsConfigOutputReference", version: "0.0.0" };
class DataAwsCloudfrontResponseHeadersPolicyCorsConfigList extends cdktf.ComplexList {
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
        return new DataAwsCloudfrontResponseHeadersPolicyCorsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigList = DataAwsCloudfrontResponseHeadersPolicyCorsConfigList;
_k = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCorsConfigList[_k] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicyCorsConfigList", version: "0.0.0" };
function dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform = dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform;
function dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToHclTerraform = dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToHclTerraform;
class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference extends cdktf.ComplexObject {
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
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // header - computed: true, optional: false, required: false
    get header() {
        return this.getStringAttribute('header');
    }
    // override - computed: true, optional: false, required: false
    get override() {
        return this.getBooleanAttribute('override');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference = DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference;
_l = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference[_l] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference", version: "0.0.0" };
class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList extends cdktf.ComplexList {
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
        return new DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList = DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList;
_m = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList[_m] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList", version: "0.0.0" };
function dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform = dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform;
function dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigToHclTerraform = dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigToHclTerraform;
class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // items - computed: true, optional: false, required: false
        this._items = new DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList(this, "items", true);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    get items() {
        return this._items;
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference = DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference;
_o = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference[_o] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference", version: "0.0.0" };
class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigList extends cdktf.ComplexList {
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
        return new DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigList = DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigList;
_p = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigList[_p] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigList", version: "0.0.0" };
function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform = dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform;
function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToHclTerraform = dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToHclTerraform;
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference extends cdktf.ComplexObject {
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
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // content_security_policy - computed: true, optional: false, required: false
    get contentSecurityPolicy() {
        return this.getStringAttribute('content_security_policy');
    }
    // override - computed: true, optional: false, required: false
    get override() {
        return this.getBooleanAttribute('override');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference;
_q = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference[_q] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference", version: "0.0.0" };
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyList extends cdktf.ComplexList {
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
        return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyList = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyList;
_r = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyList[_r] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyList", version: "0.0.0" };
function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform = dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform;
function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToHclTerraform = dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToHclTerraform;
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference extends cdktf.ComplexObject {
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
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // override - computed: true, optional: false, required: false
    get override() {
        return this.getBooleanAttribute('override');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference;
_s = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference[_s] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference", version: "0.0.0" };
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsList extends cdktf.ComplexList {
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
        return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsList = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsList;
_t = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsList[_t] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsList", version: "0.0.0" };
function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform = dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform;
function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToHclTerraform = dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToHclTerraform;
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference extends cdktf.ComplexObject {
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
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // frame_option - computed: true, optional: false, required: false
    get frameOption() {
        return this.getStringAttribute('frame_option');
    }
    // override - computed: true, optional: false, required: false
    get override() {
        return this.getBooleanAttribute('override');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference;
_u = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference[_u] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference", version: "0.0.0" };
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsList extends cdktf.ComplexList {
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
        return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsList = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsList;
_v = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsList[_v] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsList", version: "0.0.0" };
function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform = dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform;
function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToHclTerraform = dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToHclTerraform;
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference extends cdktf.ComplexObject {
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
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // override - computed: true, optional: false, required: false
    get override() {
        return this.getBooleanAttribute('override');
    }
    // referrer_policy - computed: true, optional: false, required: false
    get referrerPolicy() {
        return this.getStringAttribute('referrer_policy');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference;
_w = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference[_w] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference", version: "0.0.0" };
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyList extends cdktf.ComplexList {
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
        return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyList = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyList;
_x = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyList[_x] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyList", version: "0.0.0" };
function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform = dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform;
function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToHclTerraform = dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToHclTerraform;
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference extends cdktf.ComplexObject {
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
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // access_control_max_age_sec - computed: true, optional: false, required: false
    get accessControlMaxAgeSec() {
        return this.getNumberAttribute('access_control_max_age_sec');
    }
    // include_subdomains - computed: true, optional: false, required: false
    get includeSubdomains() {
        return this.getBooleanAttribute('include_subdomains');
    }
    // override - computed: true, optional: false, required: false
    get override() {
        return this.getBooleanAttribute('override');
    }
    // preload - computed: true, optional: false, required: false
    get preload() {
        return this.getBooleanAttribute('preload');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference;
_y = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference[_y] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference", version: "0.0.0" };
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityList extends cdktf.ComplexList {
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
        return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityList = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityList;
_z = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityList[_z] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityList", version: "0.0.0" };
function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform = dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform;
function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToHclTerraform = dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToHclTerraform;
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference extends cdktf.ComplexObject {
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
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // mode_block - computed: true, optional: false, required: false
    get modeBlock() {
        return this.getBooleanAttribute('mode_block');
    }
    // override - computed: true, optional: false, required: false
    get override() {
        return this.getBooleanAttribute('override');
    }
    // protection - computed: true, optional: false, required: false
    get protection() {
        return this.getBooleanAttribute('protection');
    }
    // report_uri - computed: true, optional: false, required: false
    get reportUri() {
        return this.getStringAttribute('report_uri');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference;
_0 = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference[_0] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference", version: "0.0.0" };
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionList extends cdktf.ComplexList {
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
        return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionList = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionList;
_1 = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionList[_1] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionList", version: "0.0.0" };
function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform = dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform;
function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigToHclTerraform = dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigToHclTerraform;
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // content_security_policy - computed: true, optional: false, required: false
        this._contentSecurityPolicy = new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyList(this, "content_security_policy", false);
        // content_type_options - computed: true, optional: false, required: false
        this._contentTypeOptions = new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsList(this, "content_type_options", false);
        // frame_options - computed: true, optional: false, required: false
        this._frameOptions = new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsList(this, "frame_options", false);
        // referrer_policy - computed: true, optional: false, required: false
        this._referrerPolicy = new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyList(this, "referrer_policy", false);
        // strict_transport_security - computed: true, optional: false, required: false
        this._strictTransportSecurity = new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityList(this, "strict_transport_security", false);
        // xss_protection - computed: true, optional: false, required: false
        this._xssProtection = new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionList(this, "xss_protection", false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    get contentSecurityPolicy() {
        return this._contentSecurityPolicy;
    }
    get contentTypeOptions() {
        return this._contentTypeOptions;
    }
    get frameOptions() {
        return this._frameOptions;
    }
    get referrerPolicy() {
        return this._referrerPolicy;
    }
    get strictTransportSecurity() {
        return this._strictTransportSecurity;
    }
    get xssProtection() {
        return this._xssProtection;
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference;
_2 = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference[_2] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference", version: "0.0.0" };
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigList extends cdktf.ComplexList {
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
        return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigList = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigList;
_3 = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigList[_3] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigList", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_response_headers_policy aws_cloudfront_response_headers_policy}
*/
class DataAwsCloudfrontResponseHeadersPolicy extends cdktf.TerraformDataSource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataAwsCloudfrontResponseHeadersPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCloudfrontResponseHeadersPolicy to import
    * @param importFromId The id of the existing DataAwsCloudfrontResponseHeadersPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_response_headers_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCloudfrontResponseHeadersPolicy to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_response_headers_policy", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_response_headers_policy aws_cloudfront_response_headers_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontResponseHeadersPolicyConfig = {}
    */
    constructor(scope, id, config = {}) {
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
        // cors_config - computed: true, optional: false, required: false
        this._corsConfig = new DataAwsCloudfrontResponseHeadersPolicyCorsConfigList(this, "cors_config", false);
        // custom_headers_config - computed: true, optional: false, required: false
        this._customHeadersConfig = new DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigList(this, "custom_headers_config", false);
        // security_headers_config - computed: true, optional: false, required: false
        this._securityHeadersConfig = new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigList(this, "security_headers_config", false);
        this._id = config.id;
        this._name = config.name;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // comment - computed: true, optional: false, required: false
    get comment() {
        return this.getStringAttribute('comment');
    }
    get corsConfig() {
        return this._corsConfig;
    }
    get customHeadersConfig() {
        return this._customHeadersConfig;
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
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get securityHeadersConfig() {
        return this._securityHeadersConfig;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicy = DataAwsCloudfrontResponseHeadersPolicy;
_4 = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicy[_4] = { fqn: "@cdktf/aws-cdk.dataAwsCloudfrontResponseHeadersPolicy.DataAwsCloudfrontResponseHeadersPolicy", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
DataAwsCloudfrontResponseHeadersPolicy.tfResourceType = "aws_cloudfront_response_headers_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2RhdGEtYXdzLWNsb3VkZnJvbnQtcmVzcG9uc2UtaGVhZGVycy1wb2xpY3kvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBU0EsK0JBQStCO0FBb0IvQixTQUFnQixvRkFBb0YsQ0FBQyxNQUFrRjtJQUNyTCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPLEVBQ04sQ0FBQTtBQUNILENBQUM7QUFQRCxvTEFPQztBQUdELFNBQWdCLHVGQUF1RixDQUFDLE1BQWtGO0lBQ3hMLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHLEVBQ2IsQ0FBQztJQUNGLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVJELDBMQVFDO0FBRUQsTUFBYSx3RkFBeUYsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUcvSDs7Ozs7TUFLRTtJQUNGLFlBQW1CLGlCQUE2QyxFQUFFLGtCQUEw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dUJBQXVCO1FBQy9CLE1BQU0sS0FBSyxHQUFHO1lBQ1osRUFBRSxFQUFFO2dCQUNGLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDM0MsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQzdDLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7U0FDRixDQUFDO1FBRUYsOEJBQThCO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQWpKSCx3RkFrSkM7OztBQWhKQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHFEQUFjLEdBQUcsd0NBQXdDLEFBQTNDLENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9kYXRhLXNvdXJjZXMvY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeVxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvZGF0YS1zb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjaWQgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3kjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvZGF0YS1zb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjbmFtZSBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgfTtcbiAgcmV0dXJuIGF0dHJzO1xufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93SGVhZGVyc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gaXRlbXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaXRlbXMnKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnNMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnNPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93SGVhZGVyc091dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHMge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICB9O1xuICByZXR1cm4gYXR0cnM7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gIH1cblxuICAvLyBpdGVtcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpdGVtcycpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kc0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kc091dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93T3JpZ2lucyB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93T3JpZ2lucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93T3JpZ2lucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gIH07XG4gIHJldHVybiBhdHRycztcbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93T3JpZ2lucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93T3JpZ2lucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIGl0ZW1zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2l0ZW1zJykpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnNPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycyB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICB9O1xuICByZXR1cm4gYXR0cnM7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVyc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gIH1cblxuICAvLyBpdGVtcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpdGVtcycpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnNMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICB9O1xuICByZXR1cm4gYXR0cnM7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gIH1cblxuICAvLyBhY2Nlc3NfY29udHJvbF9hbGxvd19jcmVkZW50aWFscyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjY2Vzc0NvbnRyb2xBbGxvd0NyZWRlbnRpYWxzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2FjY2Vzc19jb250cm9sX2FsbG93X2NyZWRlbnRpYWxzJyk7XG4gIH1cblxuICAvLyBhY2Nlc3NfY29udHJvbF9hbGxvd19oZWFkZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnMgPSBuZXcgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93SGVhZGVyc0xpc3QodGhpcywgXCJhY2Nlc3NfY29udHJvbF9hbGxvd19oZWFkZXJzXCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCBhY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzO1xuICB9XG5cbiAgLy8gYWNjZXNzX2NvbnRyb2xfYWxsb3dfbWV0aG9kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzID0gbmV3IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHNMaXN0KHRoaXMsIFwiYWNjZXNzX2NvbnRyb2xfYWxsb3dfbWV0aG9kc1wiLCBmYWxzZSk7XG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbEFsbG93TWV0aG9kcygpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzQ29udHJvbEFsbG93TWV0aG9kcztcbiAgfVxuXG4gIC8vIGFjY2Vzc19jb250cm9sX2FsbG93X29yaWdpbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNjZXNzQ29udHJvbEFsbG93T3JpZ2lucyA9IG5ldyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zTGlzdCh0aGlzLCBcImFjY2Vzc19jb250cm9sX2FsbG93X29yaWdpbnNcIiwgZmFsc2UpO1xuICBwdWJsaWMgZ2V0IGFjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnM7XG4gIH1cblxuICAvLyBhY2Nlc3NfY29udHJvbF9leHBvc2VfaGVhZGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycyA9IG5ldyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVyc0xpc3QodGhpcywgXCJhY2Nlc3NfY29udHJvbF9leHBvc2VfaGVhZGVyc1wiLCBmYWxzZSk7XG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzO1xuICB9XG5cbiAgLy8gYWNjZXNzX2NvbnRyb2xfbWF4X2FnZV9zZWMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY2Nlc3NDb250cm9sTWF4QWdlU2VjKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYWNjZXNzX2NvbnRyb2xfbWF4X2FnZV9zZWMnKTtcbiAgfVxuXG4gIC8vIG9yaWdpbl9vdmVycmlkZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9yaWdpbk92ZXJyaWRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ29yaWdpbl9vdmVycmlkZScpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ091dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWdJdGVtcyB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWdJdGVtc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ0l0ZW1zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ0l0ZW1zVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnSXRlbXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICB9O1xuICByZXR1cm4gYXR0cnM7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWdJdGVtc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWdJdGVtcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnSXRlbXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gIH1cblxuICAvLyBoZWFkZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBoZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdoZWFkZXInKTtcbiAgfVxuXG4gIC8vIG92ZXJyaWRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnb3ZlcnJpZGUnKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWdJdGVtc0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnSXRlbXNPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnSXRlbXNPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWcge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gIH07XG4gIHJldHVybiBhdHRycztcbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIGl0ZW1zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2l0ZW1zID0gbmV3IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ0l0ZW1zTGlzdCh0aGlzLCBcIml0ZW1zXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWdPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50U2VjdXJpdHlQb2xpY3kge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50U2VjdXJpdHlQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRTZWN1cml0eVBvbGljeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRTZWN1cml0eVBvbGljeVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFNlY3VyaXR5UG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgfTtcbiAgcmV0dXJuIGF0dHJzO1xufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50U2VjdXJpdHlQb2xpY3lPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50U2VjdXJpdHlQb2xpY3kgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFNlY3VyaXR5UG9saWN5IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gY29udGVudF9zZWN1cml0eV9wb2xpY3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb250ZW50U2VjdXJpdHlQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250ZW50X3NlY3VyaXR5X3BvbGljeScpO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvdmVycmlkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdvdmVycmlkZScpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRTZWN1cml0eVBvbGljeUxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50U2VjdXJpdHlQb2xpY3lPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50U2VjdXJpdHlQb2xpY3lPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9ucyB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFR5cGVPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFR5cGVPcHRpb25zVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50VHlwZU9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICB9O1xuICByZXR1cm4gYXR0cnM7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50VHlwZU9wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gIH1cblxuICAvLyBvdmVycmlkZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG92ZXJyaWRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ292ZXJyaWRlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFR5cGVPcHRpb25zTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9uc091dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9uc091dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdGcmFtZU9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdGcmFtZU9wdGlvbnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0ZyYW1lT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gIH07XG4gIHJldHVybiBhdHRycztcbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0ZyYW1lT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZyYW1lX29wdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZyYW1lT3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZnJhbWVfb3B0aW9uJyk7XG4gIH1cblxuICAvLyBvdmVycmlkZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG92ZXJyaWRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ292ZXJyaWRlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0ZyYW1lT3B0aW9uc091dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0ZyYW1lT3B0aW9uc091dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnUmVmZXJyZXJQb2xpY3kge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdSZWZlcnJlclBvbGljeVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnUmVmZXJyZXJQb2xpY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdSZWZlcnJlclBvbGljeVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnUmVmZXJyZXJQb2xpY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICB9O1xuICByZXR1cm4gYXR0cnM7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1JlZmVycmVyUG9saWN5T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnUmVmZXJyZXJQb2xpY3kgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnUmVmZXJyZXJQb2xpY3kgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gIH1cblxuICAvLyBvdmVycmlkZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG92ZXJyaWRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ292ZXJyaWRlJyk7XG4gIH1cblxuICAvLyByZWZlcnJlcl9wb2xpY3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWZlcnJlclBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlZmVycmVyX3BvbGljeScpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1JlZmVycmVyUG9saWN5TGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1JlZmVycmVyUG9saWN5T3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnUmVmZXJyZXJQb2xpY3lPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5IHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnU3RyaWN0VHJhbnNwb3J0U2VjdXJpdHlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnU3RyaWN0VHJhbnNwb3J0U2VjdXJpdHlUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgfTtcbiAgcmV0dXJuIGF0dHJzO1xufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdTdHJpY3RUcmFuc3BvcnRTZWN1cml0eU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gYWNjZXNzX2NvbnRyb2xfbWF4X2FnZV9zZWMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY2Nlc3NDb250cm9sTWF4QWdlU2VjKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYWNjZXNzX2NvbnRyb2xfbWF4X2FnZV9zZWMnKTtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfc3ViZG9tYWlucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluY2x1ZGVTdWJkb21haW5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2luY2x1ZGVfc3ViZG9tYWlucycpO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvdmVycmlkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdvdmVycmlkZScpO1xuICB9XG5cbiAgLy8gcHJlbG9hZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByZWxvYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncHJlbG9hZCcpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5TGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5T3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnU3RyaWN0VHJhbnNwb3J0U2VjdXJpdHlPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1hzc1Byb3RlY3Rpb24ge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdYc3NQcm90ZWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdYc3NQcm90ZWN0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnWHNzUHJvdGVjdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnWHNzUHJvdGVjdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gIH07XG4gIHJldHVybiBhdHRycztcbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnWHNzUHJvdGVjdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1hzc1Byb3RlY3Rpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnWHNzUHJvdGVjdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1vZGVfYmxvY2sgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtb2RlQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnbW9kZV9ibG9jaycpO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvdmVycmlkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdvdmVycmlkZScpO1xuICB9XG5cbiAgLy8gcHJvdGVjdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb3RlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncHJvdGVjdGlvbicpO1xuICB9XG5cbiAgLy8gcmVwb3J0X3VyaSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlcG9ydFVyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcG9ydF91cmknKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdYc3NQcm90ZWN0aW9uTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1hzc1Byb3RlY3Rpb25PdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdYc3NQcm90ZWN0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWcge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgfTtcbiAgcmV0dXJuIGF0dHJzO1xufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gY29udGVudF9zZWN1cml0eV9wb2xpY3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29udGVudFNlY3VyaXR5UG9saWN5ID0gbmV3IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFNlY3VyaXR5UG9saWN5TGlzdCh0aGlzLCBcImNvbnRlbnRfc2VjdXJpdHlfcG9saWN5XCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCBjb250ZW50U2VjdXJpdHlQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRTZWN1cml0eVBvbGljeTtcbiAgfVxuXG4gIC8vIGNvbnRlbnRfdHlwZV9vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbnRlbnRUeXBlT3B0aW9ucyA9IG5ldyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9uc0xpc3QodGhpcywgXCJjb250ZW50X3R5cGVfb3B0aW9uc1wiLCBmYWxzZSk7XG4gIHB1YmxpYyBnZXQgY29udGVudFR5cGVPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50VHlwZU9wdGlvbnM7XG4gIH1cblxuICAvLyBmcmFtZV9vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZyYW1lT3B0aW9ucyA9IG5ldyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0ZyYW1lT3B0aW9uc0xpc3QodGhpcywgXCJmcmFtZV9vcHRpb25zXCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCBmcmFtZU9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZyYW1lT3B0aW9ucztcbiAgfVxuXG4gIC8vIHJlZmVycmVyX3BvbGljeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWZlcnJlclBvbGljeSA9IG5ldyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1JlZmVycmVyUG9saWN5TGlzdCh0aGlzLCBcInJlZmVycmVyX3BvbGljeVwiLCBmYWxzZSk7XG4gIHB1YmxpYyBnZXQgcmVmZXJyZXJQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZmVycmVyUG9saWN5O1xuICB9XG5cbiAgLy8gc3RyaWN0X3RyYW5zcG9ydF9zZWN1cml0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdHJpY3RUcmFuc3BvcnRTZWN1cml0eSA9IG5ldyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5TGlzdCh0aGlzLCBcInN0cmljdF90cmFuc3BvcnRfc2VjdXJpdHlcIiwgZmFsc2UpO1xuICBwdWJsaWMgZ2V0IHN0cmljdFRyYW5zcG9ydFNlY3VyaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9zdHJpY3RUcmFuc3BvcnRTZWN1cml0eTtcbiAgfVxuXG4gIC8vIHhzc19wcm90ZWN0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3hzc1Byb3RlY3Rpb24gPSBuZXcgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdYc3NQcm90ZWN0aW9uTGlzdCh0aGlzLCBcInhzc19wcm90ZWN0aW9uXCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCB4c3NQcm90ZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl94c3NQcm90ZWN0aW9uO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9kYXRhLXNvdXJjZXMvY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeSBhd3NfY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeX1cbiovXG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3kgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeVwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3kgdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvZGF0YS1zb3VyY2VzL2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3kjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5IHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19jbG91ZGZyb250X3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5XCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9kYXRhLXNvdXJjZXMvY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeSBhd3NfY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeX0gRGF0YSBTb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb25maWcgPSB7fVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnLFxuICAgICAgICBwcm92aWRlclZlcnNpb246ICczLjc2LjEnLFxuICAgICAgICBwcm92aWRlclZlcnNpb25Db25zdHJhaW50OiAnfj4gMy4wJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlLFxuICAgICAgcHJvdmlzaW9uZXJzOiBjb25maWcucHJvdmlzaW9uZXJzLFxuICAgICAgY29ubmVjdGlvbjogY29uZmlnLmNvbm5lY3Rpb24sXG4gICAgICBmb3JFYWNoOiBjb25maWcuZm9yRWFjaFxuICAgIH0pO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gY29tbWVudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21tZW50Jyk7XG4gIH1cblxuICAvLyBjb3JzX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb3JzQ29uZmlnID0gbmV3IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0xpc3QodGhpcywgXCJjb3JzX2NvbmZpZ1wiLCBmYWxzZSk7XG4gIHB1YmxpYyBnZXQgY29yc0NvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29yc0NvbmZpZztcbiAgfVxuXG4gIC8vIGN1c3RvbV9oZWFkZXJzX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21IZWFkZXJzQ29uZmlnID0gbmV3IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ0xpc3QodGhpcywgXCJjdXN0b21faGVhZGVyc19jb25maWdcIiwgZmFsc2UpO1xuICBwdWJsaWMgZ2V0IGN1c3RvbUhlYWRlcnNDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUhlYWRlcnNDb25maWc7XG4gIH1cblxuICAvLyBldGFnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXRhZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V0YWcnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfaGVhZGVyc19jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VjdXJpdHlIZWFkZXJzQ29uZmlnID0gbmV3IERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnTGlzdCh0aGlzLCBcInNlY3VyaXR5X2hlYWRlcnNfY29uZmlnXCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCBzZWN1cml0eUhlYWRlcnNDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5SGVhZGVyc0NvbmZpZztcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19