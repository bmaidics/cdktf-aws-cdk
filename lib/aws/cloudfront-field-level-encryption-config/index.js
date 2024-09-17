"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudfrontFieldLevelEncryptionConfig = exports.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference = exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToHclTerraform = exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform = exports.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference = exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToHclTerraform = exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform = exports.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList = exports.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference = exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToHclTerraform = exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform = exports.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference = exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToHclTerraform = exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform = exports.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference = exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToHclTerraform = exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform = exports.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList = exports.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference = exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToHclTerraform = exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_type: cdktf.stringToTerraform(struct.contentType),
        format: cdktf.stringToTerraform(struct.format),
        profile_id: cdktf.stringToTerraform(struct.profileId),
    };
}
exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform = cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform;
function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToHclTerraform(struct) {
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
        format: {
            value: cdktf.stringToHclTerraform(struct.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        profile_id: {
            value: cdktf.stringToHclTerraform(struct.profileId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToHclTerraform = cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToHclTerraform;
class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference extends cdktf.ComplexObject {
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
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._profileId !== undefined) {
            hasAnyValues = true;
            internalValueResult.profileId = this._profileId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentType = undefined;
            this._format = undefined;
            this._profileId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentType = value.contentType;
            this._format = value.format;
            this._profileId = value.profileId;
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
    get format() {
        return this.getStringAttribute('format');
    }
    set format(value) {
        this._format = value;
    }
    // Temporarily expose input value. Use with caution.
    get formatInput() {
        return this._format;
    }
    get profileId() {
        return this.getStringAttribute('profile_id');
    }
    set profileId(value) {
        this._profileId = value;
    }
    resetProfileId() {
        this._profileId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get profileIdInput() {
        return this._profileId;
    }
}
exports.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference = CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference[_a] = { fqn: "@cdktf/aws-cdk.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference", version: "0.0.0" };
class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList extends cdktf.ComplexList {
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
        return new CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList = CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList;
_b = JSII_RTTI_SYMBOL_1;
CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList[_b] = { fqn: "@cdktf/aws-cdk.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList", version: "0.0.0" };
function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        items: cdktf.listMapper(cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform, true)(struct.items),
    };
}
exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform = cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform;
function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        items: {
            value: cdktf.listMapperHcl(cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToHclTerraform, true)(struct.items),
            isBlock: true,
            type: "set",
            storageClassType: "CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToHclTerraform = cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToHclTerraform;
class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // items - computed: false, optional: false, required: true
        this._items = new CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList(this, "items", true);
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
    // Temporarily expose input value. Use with caution.
    get itemsInput() {
        return this._items.internalValue;
    }
}
exports.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference = CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference;
_c = JSII_RTTI_SYMBOL_1;
CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference[_c] = { fqn: "@cdktf/aws-cdk.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference", version: "0.0.0" };
function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        forward_when_content_type_is_unknown: cdktf.booleanToTerraform(struct.forwardWhenContentTypeIsUnknown),
        content_type_profiles: cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform(struct.contentTypeProfiles),
    };
}
exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform = cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform;
function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        forward_when_content_type_is_unknown: {
            value: cdktf.booleanToHclTerraform(struct.forwardWhenContentTypeIsUnknown),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        content_type_profiles: {
            value: cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToHclTerraform(struct.contentTypeProfiles),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToHclTerraform = cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToHclTerraform;
class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // content_type_profiles - computed: false, optional: false, required: true
        this._contentTypeProfiles = new CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference(this, "content_type_profiles");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._forwardWhenContentTypeIsUnknown !== undefined) {
            hasAnyValues = true;
            internalValueResult.forwardWhenContentTypeIsUnknown = this._forwardWhenContentTypeIsUnknown;
        }
        if (this._contentTypeProfiles?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentTypeProfiles = this._contentTypeProfiles?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._forwardWhenContentTypeIsUnknown = undefined;
            this._contentTypeProfiles.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._forwardWhenContentTypeIsUnknown = value.forwardWhenContentTypeIsUnknown;
            this._contentTypeProfiles.internalValue = value.contentTypeProfiles;
        }
    }
    get forwardWhenContentTypeIsUnknown() {
        return this.getBooleanAttribute('forward_when_content_type_is_unknown');
    }
    set forwardWhenContentTypeIsUnknown(value) {
        this._forwardWhenContentTypeIsUnknown = value;
    }
    // Temporarily expose input value. Use with caution.
    get forwardWhenContentTypeIsUnknownInput() {
        return this._forwardWhenContentTypeIsUnknown;
    }
    get contentTypeProfiles() {
        return this._contentTypeProfiles;
    }
    putContentTypeProfiles(value) {
        this._contentTypeProfiles.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get contentTypeProfilesInput() {
        return this._contentTypeProfiles.internalValue;
    }
}
exports.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference = CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference;
_d = JSII_RTTI_SYMBOL_1;
CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference[_d] = { fqn: "@cdktf/aws-cdk.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference", version: "0.0.0" };
function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        profile_id: cdktf.stringToTerraform(struct.profileId),
        query_arg: cdktf.stringToTerraform(struct.queryArg),
    };
}
exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform = cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform;
function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        profile_id: {
            value: cdktf.stringToHclTerraform(struct.profileId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        query_arg: {
            value: cdktf.stringToHclTerraform(struct.queryArg),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToHclTerraform = cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToHclTerraform;
class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference extends cdktf.ComplexObject {
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
        if (this._profileId !== undefined) {
            hasAnyValues = true;
            internalValueResult.profileId = this._profileId;
        }
        if (this._queryArg !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryArg = this._queryArg;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._profileId = undefined;
            this._queryArg = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._profileId = value.profileId;
            this._queryArg = value.queryArg;
        }
    }
    get profileId() {
        return this.getStringAttribute('profile_id');
    }
    set profileId(value) {
        this._profileId = value;
    }
    // Temporarily expose input value. Use with caution.
    get profileIdInput() {
        return this._profileId;
    }
    get queryArg() {
        return this.getStringAttribute('query_arg');
    }
    set queryArg(value) {
        this._queryArg = value;
    }
    // Temporarily expose input value. Use with caution.
    get queryArgInput() {
        return this._queryArg;
    }
}
exports.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference = CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference;
_e = JSII_RTTI_SYMBOL_1;
CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference[_e] = { fqn: "@cdktf/aws-cdk.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference", version: "0.0.0" };
class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList extends cdktf.ComplexList {
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
        return new CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList = CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList;
_f = JSII_RTTI_SYMBOL_1;
CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList[_f] = { fqn: "@cdktf/aws-cdk.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList", version: "0.0.0" };
function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        items: cdktf.listMapper(cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform, true)(struct.items),
    };
}
exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform = cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform;
function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        items: {
            value: cdktf.listMapperHcl(cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToHclTerraform, true)(struct.items),
            isBlock: true,
            type: "set",
            storageClassType: "CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToHclTerraform = cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToHclTerraform;
class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // items - computed: false, optional: true, required: false
        this._items = new CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList(this, "items", true);
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
exports.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference = CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference;
_g = JSII_RTTI_SYMBOL_1;
CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference[_g] = { fqn: "@cdktf/aws-cdk.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference", version: "0.0.0" };
function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        forward_when_query_arg_profile_is_unknown: cdktf.booleanToTerraform(struct.forwardWhenQueryArgProfileIsUnknown),
        query_arg_profiles: cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform(struct.queryArgProfiles),
    };
}
exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform = cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform;
function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        forward_when_query_arg_profile_is_unknown: {
            value: cdktf.booleanToHclTerraform(struct.forwardWhenQueryArgProfileIsUnknown),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        query_arg_profiles: {
            value: cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToHclTerraform(struct.queryArgProfiles),
            isBlock: true,
            type: "list",
            storageClassType: "CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToHclTerraform = cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToHclTerraform;
class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // query_arg_profiles - computed: false, optional: true, required: false
        this._queryArgProfiles = new CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference(this, "query_arg_profiles");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._forwardWhenQueryArgProfileIsUnknown !== undefined) {
            hasAnyValues = true;
            internalValueResult.forwardWhenQueryArgProfileIsUnknown = this._forwardWhenQueryArgProfileIsUnknown;
        }
        if (this._queryArgProfiles?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryArgProfiles = this._queryArgProfiles?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._forwardWhenQueryArgProfileIsUnknown = undefined;
            this._queryArgProfiles.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._forwardWhenQueryArgProfileIsUnknown = value.forwardWhenQueryArgProfileIsUnknown;
            this._queryArgProfiles.internalValue = value.queryArgProfiles;
        }
    }
    get forwardWhenQueryArgProfileIsUnknown() {
        return this.getBooleanAttribute('forward_when_query_arg_profile_is_unknown');
    }
    set forwardWhenQueryArgProfileIsUnknown(value) {
        this._forwardWhenQueryArgProfileIsUnknown = value;
    }
    // Temporarily expose input value. Use with caution.
    get forwardWhenQueryArgProfileIsUnknownInput() {
        return this._forwardWhenQueryArgProfileIsUnknown;
    }
    get queryArgProfiles() {
        return this._queryArgProfiles;
    }
    putQueryArgProfiles(value) {
        this._queryArgProfiles.internalValue = value;
    }
    resetQueryArgProfiles() {
        this._queryArgProfiles.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryArgProfilesInput() {
        return this._queryArgProfiles.internalValue;
    }
}
exports.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference = CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference;
_h = JSII_RTTI_SYMBOL_1;
CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference[_h] = { fqn: "@cdktf/aws-cdk.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_field_level_encryption_config aws_cloudfront_field_level_encryption_config}
*/
class CloudfrontFieldLevelEncryptionConfig extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CloudfrontFieldLevelEncryptionConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudfrontFieldLevelEncryptionConfig to import
    * @param importFromId The id of the existing CloudfrontFieldLevelEncryptionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_field_level_encryption_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudfrontFieldLevelEncryptionConfig to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_field_level_encryption_config", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_field_level_encryption_config aws_cloudfront_field_level_encryption_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontFieldLevelEncryptionConfigConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudfront_field_level_encryption_config',
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
        // content_type_profile_config - computed: false, optional: false, required: true
        this._contentTypeProfileConfig = new CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference(this, "content_type_profile_config");
        // query_arg_profile_config - computed: false, optional: false, required: true
        this._queryArgProfileConfig = new CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference(this, "query_arg_profile_config");
        this._comment = config.comment;
        this._id = config.id;
        this._contentTypeProfileConfig.internalValue = config.contentTypeProfileConfig;
        this._queryArgProfileConfig.internalValue = config.queryArgProfileConfig;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // caller_reference - computed: true, optional: false, required: false
    get callerReference() {
        return this.getStringAttribute('caller_reference');
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
    get contentTypeProfileConfig() {
        return this._contentTypeProfileConfig;
    }
    putContentTypeProfileConfig(value) {
        this._contentTypeProfileConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get contentTypeProfileConfigInput() {
        return this._contentTypeProfileConfig.internalValue;
    }
    get queryArgProfileConfig() {
        return this._queryArgProfileConfig;
    }
    putQueryArgProfileConfig(value) {
        this._queryArgProfileConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get queryArgProfileConfigInput() {
        return this._queryArgProfileConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            comment: cdktf.stringToTerraform(this._comment),
            id: cdktf.stringToTerraform(this._id),
            content_type_profile_config: cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform(this._contentTypeProfileConfig.internalValue),
            query_arg_profile_config: cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform(this._queryArgProfileConfig.internalValue),
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
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_type_profile_config: {
                value: cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToHclTerraform(this._contentTypeProfileConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigList",
            },
            query_arg_profile_config: {
                value: cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToHclTerraform(this._queryArgProfileConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.CloudfrontFieldLevelEncryptionConfig = CloudfrontFieldLevelEncryptionConfig;
_j = JSII_RTTI_SYMBOL_1;
CloudfrontFieldLevelEncryptionConfig[_j] = { fqn: "@cdktf/aws-cdk.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
CloudfrontFieldLevelEncryptionConfig.tfResourceType = "aws_cloudfront_field_level_encryption_config";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2Nsb3VkZnJvbnQtZmllbGQtbGV2ZWwtZW5jcnlwdGlvbi1jb25maWcvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSwrQkFBK0I7QUE0Qy9CLFNBQWdCLCtGQUErRixDQUFDLE1BQWlIO0lBQy9OLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7UUFDMUQsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9DLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztLQUN2RCxDQUFBO0FBQ0gsQ0FBQztBQVZELDBNQVVDO0FBR0QsU0FBZ0Isa0dBQWtHLENBQUMsTUFBaUg7SUFDbE8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENB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LEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUMzQyxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsMkJBQTJCLEVBQUU7Z0JBQzNCLEtBQUssRUFBRSwwRUFBMEUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDO2dCQUMvSCxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSxrRUFBa0U7YUFDckY7WUFDRCx3QkFBd0IsRUFBRTtnQkFDeEIsS0FBSyxFQUFFLHVFQUF1RSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7Z0JBQ3pILE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLGdCQUFnQixFQUFFLCtEQUErRDthQUNsRjtTQUNGLENBQUM7UUFFRiw4QkFBOEI7UUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUUsQ0FBQyxDQUFBO0lBQzVILENBQUM7O0FBektILG9GQTBLQzs7O0FBeEtDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csbURBQWMsR0FBRyw4Q0FBOEMsQUFBakQsQ0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X2ZpZWxkX2xldmVsX2VuY3J5cHRpb25fY29uZmlnXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9jb25maWcjY29tbWVudCBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWcjY29tbWVudH1cbiAgKi9cbiAgcmVhZG9ubHkgY29tbWVudD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9maWVsZF9sZXZlbF9lbmNyeXB0aW9uX2NvbmZpZyNpZCBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWcjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGNvbnRlbnRfdHlwZV9wcm9maWxlX2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9maWVsZF9sZXZlbF9lbmNyeXB0aW9uX2NvbmZpZyNjb250ZW50X3R5cGVfcHJvZmlsZV9jb25maWcgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnI2NvbnRlbnRfdHlwZV9wcm9maWxlX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgY29udGVudFR5cGVQcm9maWxlQ29uZmlnOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWc7XG4gIC8qKlxuICAqIHF1ZXJ5X2FyZ19wcm9maWxlX2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9maWVsZF9sZXZlbF9lbmNyeXB0aW9uX2NvbmZpZyNxdWVyeV9hcmdfcHJvZmlsZV9jb25maWcgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnI3F1ZXJ5X2FyZ19wcm9maWxlX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgcXVlcnlBcmdQcm9maWxlQ29uZmlnOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWc7XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNJdGVtcyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9jb25maWcjY29udGVudF90eXBlIENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZyNjb250ZW50X3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGNvbnRlbnRUeXBlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9jb25maWcjZm9ybWF0IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZyNmb3JtYXR9XG4gICovXG4gIHJlYWRvbmx5IGZvcm1hdDogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X2ZpZWxkX2xldmVsX2VuY3J5cHRpb25fY29uZmlnI3Byb2ZpbGVfaWQgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnI3Byb2ZpbGVfaWR9XG4gICovXG4gIHJlYWRvbmx5IHByb2ZpbGVJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNJdGVtc1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNJdGVtcyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbnRlbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250ZW50VHlwZSksXG4gICAgZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZvcm1hdCksXG4gICAgcHJvZmlsZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9maWxlSWQpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNJdGVtc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNJdGVtcyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjb250ZW50X3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvbnRlbnRUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBmb3JtYXQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmZvcm1hdCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcHJvZmlsZV9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucHJvZmlsZUlkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNJdGVtc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdDb250ZW50VHlwZVByb2ZpbGVzSXRlbXMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NvbnRlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbnRlbnRUeXBlID0gdGhpcy5fY29udGVudFR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9mb3JtYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZm9ybWF0ID0gdGhpcy5fZm9ybWF0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvZmlsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByb2ZpbGVJZCA9IHRoaXMuX3Byb2ZpbGVJZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNJdGVtcyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb250ZW50VHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Zvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Byb2ZpbGVJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb250ZW50VHlwZSA9IHZhbHVlLmNvbnRlbnRUeXBlO1xuICAgICAgdGhpcy5fZm9ybWF0ID0gdmFsdWUuZm9ybWF0O1xuICAgICAgdGhpcy5fcHJvZmlsZUlkID0gdmFsdWUucHJvZmlsZUlkO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbnRlbnRfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jb250ZW50VHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29udGVudFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250ZW50X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnRlbnRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb250ZW50VHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb250ZW50VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50VHlwZTtcbiAgfVxuXG4gIC8vIGZvcm1hdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9mb3JtYXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Zvcm1hdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mb3JtYXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZm9ybWF0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdDtcbiAgfVxuXG4gIC8vIHByb2ZpbGVfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvZmlsZUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcm9maWxlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm9maWxlX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm9maWxlSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb2ZpbGVJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb2ZpbGVJZCgpIHtcbiAgICB0aGlzLl9wcm9maWxlSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb2ZpbGVJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9maWxlSWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNJdGVtc0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNJdGVtc1tdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdDb250ZW50VHlwZVByb2ZpbGVzSXRlbXNPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnQ29udGVudFR5cGVQcm9maWxlc0l0ZW1zT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnQ29udGVudFR5cGVQcm9maWxlcyB7XG4gIC8qKlxuICAqIGl0ZW1zIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X2ZpZWxkX2xldmVsX2VuY3J5cHRpb25fY29uZmlnI2l0ZW1zIENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZyNpdGVtc31cbiAgKi9cbiAgcmVhZG9ubHkgaXRlbXM6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNJdGVtc1tdIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdDb250ZW50VHlwZVByb2ZpbGVzVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnQ29udGVudFR5cGVQcm9maWxlc091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaXRlbXM6IGNka3RmLmxpc3RNYXBwZXIoY2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnQ29udGVudFR5cGVQcm9maWxlc0l0ZW1zVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuaXRlbXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdDb250ZW50VHlwZVByb2ZpbGVzT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnQ29udGVudFR5cGVQcm9maWxlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgaXRlbXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNJdGVtc1RvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLml0ZW1zKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdDb250ZW50VHlwZVByb2ZpbGVzSXRlbXNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2l0ZW1zPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lml0ZW1zID0gdGhpcy5faXRlbXM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdDb250ZW50VHlwZVByb2ZpbGVzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faXRlbXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faXRlbXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLml0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIC8vIGl0ZW1zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2l0ZW1zID0gbmV3IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXNJdGVtc0xpc3QodGhpcywgXCJpdGVtc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cbiAgcHVibGljIHB1dEl0ZW1zKHZhbHVlOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdDb250ZW50VHlwZVByb2ZpbGVzSXRlbXNbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faXRlbXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpdGVtc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9jb25maWcjZm9yd2FyZF93aGVuX2NvbnRlbnRfdHlwZV9pc191bmtub3duIENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZyNmb3J3YXJkX3doZW5fY29udGVudF90eXBlX2lzX3Vua25vd259XG4gICovXG4gIHJlYWRvbmx5IGZvcndhcmRXaGVuQ29udGVudFR5cGVJc1Vua25vd246IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogY29udGVudF90eXBlX3Byb2ZpbGVzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZGZyb250X2ZpZWxkX2xldmVsX2VuY3J5cHRpb25fY29uZmlnI2NvbnRlbnRfdHlwZV9wcm9maWxlcyBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWcjY29udGVudF90eXBlX3Byb2ZpbGVzfVxuICAqL1xuICByZWFkb25seSBjb250ZW50VHlwZVByb2ZpbGVzOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdDb250ZW50VHlwZVByb2ZpbGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGZvcndhcmRfd2hlbl9jb250ZW50X3R5cGVfaXNfdW5rbm93bjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZm9yd2FyZFdoZW5Db250ZW50VHlwZUlzVW5rbm93biksXG4gICAgY29udGVudF90eXBlX3Byb2ZpbGVzOiBjbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdDb250ZW50VHlwZVByb2ZpbGVzVG9UZXJyYWZvcm0oc3RydWN0IS5jb250ZW50VHlwZVByb2ZpbGVzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGZvcndhcmRfd2hlbl9jb250ZW50X3R5cGVfaXNfdW5rbm93bjoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmZvcndhcmRXaGVuQ29udGVudFR5cGVJc1Vua25vd24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBjb250ZW50X3R5cGVfcHJvZmlsZXM6IHtcbiAgICAgIHZhbHVlOiBjbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdDb250ZW50VHlwZVByb2ZpbGVzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb250ZW50VHlwZVByb2ZpbGVzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnQ29udGVudFR5cGVQcm9maWxlc0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2ZvcndhcmRXaGVuQ29udGVudFR5cGVJc1Vua25vd24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZm9yd2FyZFdoZW5Db250ZW50VHlwZUlzVW5rbm93biA9IHRoaXMuX2ZvcndhcmRXaGVuQ29udGVudFR5cGVJc1Vua25vd247XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb250ZW50VHlwZVByb2ZpbGVzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbnRlbnRUeXBlUHJvZmlsZXMgPSB0aGlzLl9jb250ZW50VHlwZVByb2ZpbGVzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZm9yd2FyZFdoZW5Db250ZW50VHlwZUlzVW5rbm93biA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvbnRlbnRUeXBlUHJvZmlsZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZm9yd2FyZFdoZW5Db250ZW50VHlwZUlzVW5rbm93biA9IHZhbHVlLmZvcndhcmRXaGVuQ29udGVudFR5cGVJc1Vua25vd247XG4gICAgICB0aGlzLl9jb250ZW50VHlwZVByb2ZpbGVzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jb250ZW50VHlwZVByb2ZpbGVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZvcndhcmRfd2hlbl9jb250ZW50X3R5cGVfaXNfdW5rbm93biAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9mb3J3YXJkV2hlbkNvbnRlbnRUeXBlSXNVbmtub3duPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBmb3J3YXJkV2hlbkNvbnRlbnRUeXBlSXNVbmtub3duKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2ZvcndhcmRfd2hlbl9jb250ZW50X3R5cGVfaXNfdW5rbm93bicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZm9yd2FyZFdoZW5Db250ZW50VHlwZUlzVW5rbm93bih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZm9yd2FyZFdoZW5Db250ZW50VHlwZUlzVW5rbm93biA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmb3J3YXJkV2hlbkNvbnRlbnRUeXBlSXNVbmtub3duSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcndhcmRXaGVuQ29udGVudFR5cGVJc1Vua25vd247XG4gIH1cblxuICAvLyBjb250ZW50X3R5cGVfcHJvZmlsZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29udGVudFR5cGVQcm9maWxlcyA9IG5ldyBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdDb250ZW50VHlwZVByb2ZpbGVzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiY29udGVudF90eXBlX3Byb2ZpbGVzXCIpO1xuICBwdWJsaWMgZ2V0IGNvbnRlbnRUeXBlUHJvZmlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlUHJvZmlsZXM7XG4gIH1cbiAgcHVibGljIHB1dENvbnRlbnRUeXBlUHJvZmlsZXModmFsdWU6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZXMpIHtcbiAgICB0aGlzLl9jb250ZW50VHlwZVByb2ZpbGVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGVudFR5cGVQcm9maWxlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50VHlwZVByb2ZpbGVzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnUXVlcnlBcmdQcm9maWxlc0l0ZW1zIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9maWVsZF9sZXZlbF9lbmNyeXB0aW9uX2NvbmZpZyNwcm9maWxlX2lkIENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZyNwcm9maWxlX2lkfVxuICAqL1xuICByZWFkb25seSBwcm9maWxlSWQ6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9maWVsZF9sZXZlbF9lbmNyeXB0aW9uX2NvbmZpZyNxdWVyeV9hcmcgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnI3F1ZXJ5X2FyZ31cbiAgKi9cbiAgcmVhZG9ubHkgcXVlcnlBcmc6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXNJdGVtc1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXNJdGVtcyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByb2ZpbGVfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvZmlsZUlkKSxcbiAgICBxdWVyeV9hcmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucXVlcnlBcmcpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXNJdGVtc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXNJdGVtcyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBwcm9maWxlX2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcm9maWxlSWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHF1ZXJ5X2FyZzoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucXVlcnlBcmcpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnUXVlcnlBcmdQcm9maWxlc0l0ZW1zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXNJdGVtcyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJvZmlsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByb2ZpbGVJZCA9IHRoaXMuX3Byb2ZpbGVJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3F1ZXJ5QXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnF1ZXJ5QXJnID0gdGhpcy5fcXVlcnlBcmc7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdRdWVyeUFyZ1Byb2ZpbGVzSXRlbXMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJvZmlsZUlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcXVlcnlBcmcgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJvZmlsZUlkID0gdmFsdWUucHJvZmlsZUlkO1xuICAgICAgdGhpcy5fcXVlcnlBcmcgPSB2YWx1ZS5xdWVyeUFyZztcbiAgICB9XG4gIH1cblxuICAvLyBwcm9maWxlX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Byb2ZpbGVJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJvZmlsZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvZmlsZV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvZmlsZUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcm9maWxlSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvZmlsZUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2ZpbGVJZDtcbiAgfVxuXG4gIC8vIHF1ZXJ5X2FyZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9xdWVyeUFyZz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcXVlcnlBcmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdxdWVyeV9hcmcnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHF1ZXJ5QXJnKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9xdWVyeUFyZyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBxdWVyeUFyZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeUFyZztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnUXVlcnlBcmdQcm9maWxlc0l0ZW1zTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnUXVlcnlBcmdQcm9maWxlc0l0ZW1zW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXNJdGVtc091dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdRdWVyeUFyZ1Byb2ZpbGVzSXRlbXNPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdRdWVyeUFyZ1Byb2ZpbGVzIHtcbiAgLyoqXG4gICogaXRlbXMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9jb25maWcjaXRlbXMgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnI2l0ZW1zfVxuICAqL1xuICByZWFkb25seSBpdGVtcz86IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXNJdGVtc1tdIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdRdWVyeUFyZ1Byb2ZpbGVzVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnUXVlcnlBcmdQcm9maWxlc091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaXRlbXM6IGNka3RmLmxpc3RNYXBwZXIoY2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnUXVlcnlBcmdQcm9maWxlc0l0ZW1zVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuaXRlbXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdRdWVyeUFyZ1Byb2ZpbGVzT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnUXVlcnlBcmdQcm9maWxlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgaXRlbXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXNJdGVtc1RvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLml0ZW1zKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdRdWVyeUFyZ1Byb2ZpbGVzSXRlbXNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2l0ZW1zPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lml0ZW1zID0gdGhpcy5faXRlbXM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdRdWVyeUFyZ1Byb2ZpbGVzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faXRlbXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faXRlbXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLml0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIC8vIGl0ZW1zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2l0ZW1zID0gbmV3IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXNJdGVtc0xpc3QodGhpcywgXCJpdGVtc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cbiAgcHVibGljIHB1dEl0ZW1zKHZhbHVlOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdRdWVyeUFyZ1Byb2ZpbGVzSXRlbXNbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faXRlbXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEl0ZW1zKCkge1xuICAgIHRoaXMuX2l0ZW1zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGl0ZW1zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9maWVsZF9sZXZlbF9lbmNyeXB0aW9uX2NvbmZpZyNmb3J3YXJkX3doZW5fcXVlcnlfYXJnX3Byb2ZpbGVfaXNfdW5rbm93biBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWcjZm9yd2FyZF93aGVuX3F1ZXJ5X2FyZ19wcm9maWxlX2lzX3Vua25vd259XG4gICovXG4gIHJlYWRvbmx5IGZvcndhcmRXaGVuUXVlcnlBcmdQcm9maWxlSXNVbmtub3duOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHF1ZXJ5X2FyZ19wcm9maWxlcyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWRmcm9udF9maWVsZF9sZXZlbF9lbmNyeXB0aW9uX2NvbmZpZyNxdWVyeV9hcmdfcHJvZmlsZXMgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnI3F1ZXJ5X2FyZ19wcm9maWxlc31cbiAgKi9cbiAgcmVhZG9ubHkgcXVlcnlBcmdQcm9maWxlcz86IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZm9yd2FyZF93aGVuX3F1ZXJ5X2FyZ19wcm9maWxlX2lzX3Vua25vd246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmZvcndhcmRXaGVuUXVlcnlBcmdQcm9maWxlSXNVbmtub3duKSxcbiAgICBxdWVyeV9hcmdfcHJvZmlsZXM6IGNsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXNUb1RlcnJhZm9ybShzdHJ1Y3QhLnF1ZXJ5QXJnUHJvZmlsZXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZm9yd2FyZF93aGVuX3F1ZXJ5X2FyZ19wcm9maWxlX2lzX3Vua25vd246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5mb3J3YXJkV2hlblF1ZXJ5QXJnUHJvZmlsZUlzVW5rbm93biksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIHF1ZXJ5X2FyZ19wcm9maWxlczoge1xuICAgICAgdmFsdWU6IGNsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnF1ZXJ5QXJnUHJvZmlsZXMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdRdWVyeUFyZ1Byb2ZpbGVzTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZm9yd2FyZFdoZW5RdWVyeUFyZ1Byb2ZpbGVJc1Vua25vd24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZm9yd2FyZFdoZW5RdWVyeUFyZ1Byb2ZpbGVJc1Vua25vd24gPSB0aGlzLl9mb3J3YXJkV2hlblF1ZXJ5QXJnUHJvZmlsZUlzVW5rbm93bjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3F1ZXJ5QXJnUHJvZmlsZXM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucXVlcnlBcmdQcm9maWxlcyA9IHRoaXMuX3F1ZXJ5QXJnUHJvZmlsZXM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9mb3J3YXJkV2hlblF1ZXJ5QXJnUHJvZmlsZUlzVW5rbm93biA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3F1ZXJ5QXJnUHJvZmlsZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZm9yd2FyZFdoZW5RdWVyeUFyZ1Byb2ZpbGVJc1Vua25vd24gPSB2YWx1ZS5mb3J3YXJkV2hlblF1ZXJ5QXJnUHJvZmlsZUlzVW5rbm93bjtcbiAgICAgIHRoaXMuX3F1ZXJ5QXJnUHJvZmlsZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnF1ZXJ5QXJnUHJvZmlsZXM7XG4gICAgfVxuICB9XG5cbiAgLy8gZm9yd2FyZF93aGVuX3F1ZXJ5X2FyZ19wcm9maWxlX2lzX3Vua25vd24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZm9yd2FyZFdoZW5RdWVyeUFyZ1Byb2ZpbGVJc1Vua25vd24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGZvcndhcmRXaGVuUXVlcnlBcmdQcm9maWxlSXNVbmtub3duKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2ZvcndhcmRfd2hlbl9xdWVyeV9hcmdfcHJvZmlsZV9pc191bmtub3duJyk7XG4gIH1cbiAgcHVibGljIHNldCBmb3J3YXJkV2hlblF1ZXJ5QXJnUHJvZmlsZUlzVW5rbm93bih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZm9yd2FyZFdoZW5RdWVyeUFyZ1Byb2ZpbGVJc1Vua25vd24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZm9yd2FyZFdoZW5RdWVyeUFyZ1Byb2ZpbGVJc1Vua25vd25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yd2FyZFdoZW5RdWVyeUFyZ1Byb2ZpbGVJc1Vua25vd247XG4gIH1cblxuICAvLyBxdWVyeV9hcmdfcHJvZmlsZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcXVlcnlBcmdQcm9maWxlcyA9IG5ldyBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdRdWVyeUFyZ1Byb2ZpbGVzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwicXVlcnlfYXJnX3Byb2ZpbGVzXCIpO1xuICBwdWJsaWMgZ2V0IHF1ZXJ5QXJnUHJvZmlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5QXJnUHJvZmlsZXM7XG4gIH1cbiAgcHVibGljIHB1dFF1ZXJ5QXJnUHJvZmlsZXModmFsdWU6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZXMpIHtcbiAgICB0aGlzLl9xdWVyeUFyZ1Byb2ZpbGVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRRdWVyeUFyZ1Byb2ZpbGVzKCkge1xuICAgIHRoaXMuX3F1ZXJ5QXJnUHJvZmlsZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcXVlcnlBcmdQcm9maWxlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeUFyZ1Byb2ZpbGVzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9jb25maWcgYXdzX2Nsb3VkZnJvbnRfZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9jb25maWd9XG4qL1xuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfY2xvdWRmcm9udF9maWVsZF9sZXZlbF9lbmNyeXB0aW9uX2NvbmZpZ1wiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWcgcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWcgdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9jb25maWcjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZyB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfY2xvdWRmcm9udF9maWVsZF9sZXZlbF9lbmNyeXB0aW9uX2NvbmZpZ1wiLCBpbXBvcnRJZDogaW1wb3J0RnJvbUlkLCBwcm92aWRlciB9KTtcbiAgICAgIH1cblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3VkZnJvbnRfZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9jb25maWcgYXdzX2Nsb3VkZnJvbnRfZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9jb25maWd9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19jbG91ZGZyb250X2ZpZWxkX2xldmVsX2VuY3J5cHRpb25fY29uZmlnJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fY29tbWVudCA9IGNvbmZpZy5jb21tZW50O1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX2NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmNvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZztcbiAgICB0aGlzLl9xdWVyeUFyZ1Byb2ZpbGVDb25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5xdWVyeUFyZ1Byb2ZpbGVDb25maWc7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNhbGxlcl9yZWZlcmVuY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjYWxsZXJSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjYWxsZXJfcmVmZXJlbmNlJyk7XG4gIH1cblxuICAvLyBjb21tZW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbW1lbnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21tZW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21tZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb21tZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29tbWVudCgpIHtcbiAgICB0aGlzLl9jb21tZW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb21tZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbW1lbnQ7XG4gIH1cblxuICAvLyBldGFnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXRhZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V0YWcnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIGNvbnRlbnRfdHlwZV9wcm9maWxlX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jb250ZW50VHlwZVByb2ZpbGVDb25maWcgPSBuZXcgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiY29udGVudF90eXBlX3Byb2ZpbGVfY29uZmlnXCIpO1xuICBwdWJsaWMgZ2V0IGNvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudFR5cGVQcm9maWxlQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRDb250ZW50VHlwZVByb2ZpbGVDb25maWcodmFsdWU6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZykge1xuICAgIHRoaXMuX2NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50VHlwZVByb2ZpbGVDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHF1ZXJ5X2FyZ19wcm9maWxlX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9xdWVyeUFyZ1Byb2ZpbGVDb25maWcgPSBuZXcgQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwicXVlcnlfYXJnX3Byb2ZpbGVfY29uZmlnXCIpO1xuICBwdWJsaWMgZ2V0IHF1ZXJ5QXJnUHJvZmlsZUNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlBcmdQcm9maWxlQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRRdWVyeUFyZ1Byb2ZpbGVDb25maWcodmFsdWU6IENsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZykge1xuICAgIHRoaXMuX3F1ZXJ5QXJnUHJvZmlsZUNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHF1ZXJ5QXJnUHJvZmlsZUNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeUFyZ1Byb2ZpbGVDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tbWVudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29tbWVudCksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgY29udGVudF90eXBlX3Byb2ZpbGVfY29uZmlnOiBjbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdDb250ZW50VHlwZVByb2ZpbGVDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9jb250ZW50VHlwZVByb2ZpbGVDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBxdWVyeV9hcmdfcHJvZmlsZV9jb25maWc6IGNsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ1F1ZXJ5QXJnUHJvZmlsZUNvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX3F1ZXJ5QXJnUHJvZmlsZUNvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGNvbW1lbnQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2NvbW1lbnQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBjb250ZW50X3R5cGVfcHJvZmlsZV9jb25maWc6IHtcbiAgICAgICAgdmFsdWU6IGNsb3VkZnJvbnRGaWVsZExldmVsRW5jcnlwdGlvbkNvbmZpZ0NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2NvbnRlbnRUeXBlUHJvZmlsZUNvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnQ29udGVudFR5cGVQcm9maWxlQ29uZmlnTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHF1ZXJ5X2FyZ19wcm9maWxlX2NvbmZpZzoge1xuICAgICAgICB2YWx1ZTogY2xvdWRmcm9udEZpZWxkTGV2ZWxFbmNyeXB0aW9uQ29uZmlnUXVlcnlBcmdQcm9maWxlQ29uZmlnVG9IY2xUZXJyYWZvcm0odGhpcy5fcXVlcnlBcmdQcm9maWxlQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDbG91ZGZyb250RmllbGRMZXZlbEVuY3J5cHRpb25Db25maWdRdWVyeUFyZ1Byb2ZpbGVDb25maWdMaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=