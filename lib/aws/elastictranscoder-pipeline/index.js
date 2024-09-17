"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElastictranscoderPipeline = exports.ElastictranscoderPipelineThumbnailConfigPermissionsList = exports.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference = exports.elastictranscoderPipelineThumbnailConfigPermissionsToHclTerraform = exports.elastictranscoderPipelineThumbnailConfigPermissionsToTerraform = exports.ElastictranscoderPipelineThumbnailConfigOutputReference = exports.elastictranscoderPipelineThumbnailConfigToHclTerraform = exports.elastictranscoderPipelineThumbnailConfigToTerraform = exports.ElastictranscoderPipelineNotificationsOutputReference = exports.elastictranscoderPipelineNotificationsToHclTerraform = exports.elastictranscoderPipelineNotificationsToTerraform = exports.ElastictranscoderPipelineContentConfigPermissionsList = exports.ElastictranscoderPipelineContentConfigPermissionsOutputReference = exports.elastictranscoderPipelineContentConfigPermissionsToHclTerraform = exports.elastictranscoderPipelineContentConfigPermissionsToTerraform = exports.ElastictranscoderPipelineContentConfigOutputReference = exports.elastictranscoderPipelineContentConfigToHclTerraform = exports.elastictranscoderPipelineContentConfigToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function elastictranscoderPipelineContentConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        storage_class: cdktf.stringToTerraform(struct.storageClass),
    };
}
exports.elastictranscoderPipelineContentConfigToTerraform = elastictranscoderPipelineContentConfigToTerraform;
function elastictranscoderPipelineContentConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        bucket: {
            value: cdktf.stringToHclTerraform(struct.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        storage_class: {
            value: cdktf.stringToHclTerraform(struct.storageClass),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.elastictranscoderPipelineContentConfigToHclTerraform = elastictranscoderPipelineContentConfigToHclTerraform;
class ElastictranscoderPipelineContentConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._storageClass !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageClass = this._storageClass;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucket = undefined;
            this._storageClass = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucket = value.bucket;
            this._storageClass = value.storageClass;
        }
    }
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    set bucket(value) {
        this._bucket = value;
    }
    resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketInput() {
        return this._bucket;
    }
    get storageClass() {
        return this.getStringAttribute('storage_class');
    }
    set storageClass(value) {
        this._storageClass = value;
    }
    resetStorageClass() {
        this._storageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get storageClassInput() {
        return this._storageClass;
    }
}
exports.ElastictranscoderPipelineContentConfigOutputReference = ElastictranscoderPipelineContentConfigOutputReference;
_a = JSII_RTTI_SYMBOL_1;
ElastictranscoderPipelineContentConfigOutputReference[_a] = { fqn: "@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference", version: "0.0.0" };
function elastictranscoderPipelineContentConfigPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.access),
        grantee: cdktf.stringToTerraform(struct.grantee),
        grantee_type: cdktf.stringToTerraform(struct.granteeType),
    };
}
exports.elastictranscoderPipelineContentConfigPermissionsToTerraform = elastictranscoderPipelineContentConfigPermissionsToTerraform;
function elastictranscoderPipelineContentConfigPermissionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.access),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        grantee: {
            value: cdktf.stringToHclTerraform(struct.grantee),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        grantee_type: {
            value: cdktf.stringToHclTerraform(struct.granteeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.elastictranscoderPipelineContentConfigPermissionsToHclTerraform = elastictranscoderPipelineContentConfigPermissionsToHclTerraform;
class ElastictranscoderPipelineContentConfigPermissionsOutputReference extends cdktf.ComplexObject {
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
        if (this._access !== undefined) {
            hasAnyValues = true;
            internalValueResult.access = this._access;
        }
        if (this._grantee !== undefined) {
            hasAnyValues = true;
            internalValueResult.grantee = this._grantee;
        }
        if (this._granteeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.granteeType = this._granteeType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._access = undefined;
            this._grantee = undefined;
            this._granteeType = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._access = value.access;
            this._grantee = value.grantee;
            this._granteeType = value.granteeType;
        }
    }
    get access() {
        return this.getListAttribute('access');
    }
    set access(value) {
        this._access = value;
    }
    resetAccess() {
        this._access = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessInput() {
        return this._access;
    }
    get grantee() {
        return this.getStringAttribute('grantee');
    }
    set grantee(value) {
        this._grantee = value;
    }
    resetGrantee() {
        this._grantee = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get granteeInput() {
        return this._grantee;
    }
    get granteeType() {
        return this.getStringAttribute('grantee_type');
    }
    set granteeType(value) {
        this._granteeType = value;
    }
    resetGranteeType() {
        this._granteeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get granteeTypeInput() {
        return this._granteeType;
    }
}
exports.ElastictranscoderPipelineContentConfigPermissionsOutputReference = ElastictranscoderPipelineContentConfigPermissionsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
ElastictranscoderPipelineContentConfigPermissionsOutputReference[_b] = { fqn: "@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference", version: "0.0.0" };
class ElastictranscoderPipelineContentConfigPermissionsList extends cdktf.ComplexList {
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
        return new ElastictranscoderPipelineContentConfigPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.ElastictranscoderPipelineContentConfigPermissionsList = ElastictranscoderPipelineContentConfigPermissionsList;
_c = JSII_RTTI_SYMBOL_1;
ElastictranscoderPipelineContentConfigPermissionsList[_c] = { fqn: "@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList", version: "0.0.0" };
function elastictranscoderPipelineNotificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        completed: cdktf.stringToTerraform(struct.completed),
        error: cdktf.stringToTerraform(struct.error),
        progressing: cdktf.stringToTerraform(struct.progressing),
        warning: cdktf.stringToTerraform(struct.warning),
    };
}
exports.elastictranscoderPipelineNotificationsToTerraform = elastictranscoderPipelineNotificationsToTerraform;
function elastictranscoderPipelineNotificationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        completed: {
            value: cdktf.stringToHclTerraform(struct.completed),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        error: {
            value: cdktf.stringToHclTerraform(struct.error),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        progressing: {
            value: cdktf.stringToHclTerraform(struct.progressing),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        warning: {
            value: cdktf.stringToHclTerraform(struct.warning),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.elastictranscoderPipelineNotificationsToHclTerraform = elastictranscoderPipelineNotificationsToHclTerraform;
class ElastictranscoderPipelineNotificationsOutputReference extends cdktf.ComplexObject {
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
        if (this._completed !== undefined) {
            hasAnyValues = true;
            internalValueResult.completed = this._completed;
        }
        if (this._error !== undefined) {
            hasAnyValues = true;
            internalValueResult.error = this._error;
        }
        if (this._progressing !== undefined) {
            hasAnyValues = true;
            internalValueResult.progressing = this._progressing;
        }
        if (this._warning !== undefined) {
            hasAnyValues = true;
            internalValueResult.warning = this._warning;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._completed = undefined;
            this._error = undefined;
            this._progressing = undefined;
            this._warning = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._completed = value.completed;
            this._error = value.error;
            this._progressing = value.progressing;
            this._warning = value.warning;
        }
    }
    get completed() {
        return this.getStringAttribute('completed');
    }
    set completed(value) {
        this._completed = value;
    }
    resetCompleted() {
        this._completed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get completedInput() {
        return this._completed;
    }
    get error() {
        return this.getStringAttribute('error');
    }
    set error(value) {
        this._error = value;
    }
    resetError() {
        this._error = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get errorInput() {
        return this._error;
    }
    get progressing() {
        return this.getStringAttribute('progressing');
    }
    set progressing(value) {
        this._progressing = value;
    }
    resetProgressing() {
        this._progressing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get progressingInput() {
        return this._progressing;
    }
    get warning() {
        return this.getStringAttribute('warning');
    }
    set warning(value) {
        this._warning = value;
    }
    resetWarning() {
        this._warning = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get warningInput() {
        return this._warning;
    }
}
exports.ElastictranscoderPipelineNotificationsOutputReference = ElastictranscoderPipelineNotificationsOutputReference;
_d = JSII_RTTI_SYMBOL_1;
ElastictranscoderPipelineNotificationsOutputReference[_d] = { fqn: "@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference", version: "0.0.0" };
function elastictranscoderPipelineThumbnailConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        storage_class: cdktf.stringToTerraform(struct.storageClass),
    };
}
exports.elastictranscoderPipelineThumbnailConfigToTerraform = elastictranscoderPipelineThumbnailConfigToTerraform;
function elastictranscoderPipelineThumbnailConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        bucket: {
            value: cdktf.stringToHclTerraform(struct.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        storage_class: {
            value: cdktf.stringToHclTerraform(struct.storageClass),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.elastictranscoderPipelineThumbnailConfigToHclTerraform = elastictranscoderPipelineThumbnailConfigToHclTerraform;
class ElastictranscoderPipelineThumbnailConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._storageClass !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageClass = this._storageClass;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucket = undefined;
            this._storageClass = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucket = value.bucket;
            this._storageClass = value.storageClass;
        }
    }
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    set bucket(value) {
        this._bucket = value;
    }
    resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketInput() {
        return this._bucket;
    }
    get storageClass() {
        return this.getStringAttribute('storage_class');
    }
    set storageClass(value) {
        this._storageClass = value;
    }
    resetStorageClass() {
        this._storageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get storageClassInput() {
        return this._storageClass;
    }
}
exports.ElastictranscoderPipelineThumbnailConfigOutputReference = ElastictranscoderPipelineThumbnailConfigOutputReference;
_e = JSII_RTTI_SYMBOL_1;
ElastictranscoderPipelineThumbnailConfigOutputReference[_e] = { fqn: "@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference", version: "0.0.0" };
function elastictranscoderPipelineThumbnailConfigPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.access),
        grantee: cdktf.stringToTerraform(struct.grantee),
        grantee_type: cdktf.stringToTerraform(struct.granteeType),
    };
}
exports.elastictranscoderPipelineThumbnailConfigPermissionsToTerraform = elastictranscoderPipelineThumbnailConfigPermissionsToTerraform;
function elastictranscoderPipelineThumbnailConfigPermissionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.access),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        grantee: {
            value: cdktf.stringToHclTerraform(struct.grantee),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        grantee_type: {
            value: cdktf.stringToHclTerraform(struct.granteeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.elastictranscoderPipelineThumbnailConfigPermissionsToHclTerraform = elastictranscoderPipelineThumbnailConfigPermissionsToHclTerraform;
class ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference extends cdktf.ComplexObject {
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
        if (this._access !== undefined) {
            hasAnyValues = true;
            internalValueResult.access = this._access;
        }
        if (this._grantee !== undefined) {
            hasAnyValues = true;
            internalValueResult.grantee = this._grantee;
        }
        if (this._granteeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.granteeType = this._granteeType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._access = undefined;
            this._grantee = undefined;
            this._granteeType = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._access = value.access;
            this._grantee = value.grantee;
            this._granteeType = value.granteeType;
        }
    }
    get access() {
        return this.getListAttribute('access');
    }
    set access(value) {
        this._access = value;
    }
    resetAccess() {
        this._access = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessInput() {
        return this._access;
    }
    get grantee() {
        return this.getStringAttribute('grantee');
    }
    set grantee(value) {
        this._grantee = value;
    }
    resetGrantee() {
        this._grantee = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get granteeInput() {
        return this._grantee;
    }
    get granteeType() {
        return this.getStringAttribute('grantee_type');
    }
    set granteeType(value) {
        this._granteeType = value;
    }
    resetGranteeType() {
        this._granteeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get granteeTypeInput() {
        return this._granteeType;
    }
}
exports.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference = ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference;
_f = JSII_RTTI_SYMBOL_1;
ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference[_f] = { fqn: "@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference", version: "0.0.0" };
class ElastictranscoderPipelineThumbnailConfigPermissionsList extends cdktf.ComplexList {
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
        return new ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.ElastictranscoderPipelineThumbnailConfigPermissionsList = ElastictranscoderPipelineThumbnailConfigPermissionsList;
_g = JSII_RTTI_SYMBOL_1;
ElastictranscoderPipelineThumbnailConfigPermissionsList[_g] = { fqn: "@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline aws_elastictranscoder_pipeline}
*/
class ElastictranscoderPipeline extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ElastictranscoderPipeline resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElastictranscoderPipeline to import
    * @param importFromId The id of the existing ElastictranscoderPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElastictranscoderPipeline to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_elastictranscoder_pipeline", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline aws_elastictranscoder_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElastictranscoderPipelineConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_elastictranscoder_pipeline',
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
        // content_config - computed: false, optional: true, required: false
        this._contentConfig = new ElastictranscoderPipelineContentConfigOutputReference(this, "content_config");
        // content_config_permissions - computed: false, optional: true, required: false
        this._contentConfigPermissions = new ElastictranscoderPipelineContentConfigPermissionsList(this, "content_config_permissions", true);
        // notifications - computed: false, optional: true, required: false
        this._notifications = new ElastictranscoderPipelineNotificationsOutputReference(this, "notifications");
        // thumbnail_config - computed: false, optional: true, required: false
        this._thumbnailConfig = new ElastictranscoderPipelineThumbnailConfigOutputReference(this, "thumbnail_config");
        // thumbnail_config_permissions - computed: false, optional: true, required: false
        this._thumbnailConfigPermissions = new ElastictranscoderPipelineThumbnailConfigPermissionsList(this, "thumbnail_config_permissions", true);
        this._awsKmsKeyArn = config.awsKmsKeyArn;
        this._id = config.id;
        this._inputBucket = config.inputBucket;
        this._name = config.name;
        this._outputBucket = config.outputBucket;
        this._role = config.role;
        this._contentConfig.internalValue = config.contentConfig;
        this._contentConfigPermissions.internalValue = config.contentConfigPermissions;
        this._notifications.internalValue = config.notifications;
        this._thumbnailConfig.internalValue = config.thumbnailConfig;
        this._thumbnailConfigPermissions.internalValue = config.thumbnailConfigPermissions;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get awsKmsKeyArn() {
        return this.getStringAttribute('aws_kms_key_arn');
    }
    set awsKmsKeyArn(value) {
        this._awsKmsKeyArn = value;
    }
    resetAwsKmsKeyArn() {
        this._awsKmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get awsKmsKeyArnInput() {
        return this._awsKmsKeyArn;
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
    get inputBucket() {
        return this.getStringAttribute('input_bucket');
    }
    set inputBucket(value) {
        this._inputBucket = value;
    }
    // Temporarily expose input value. Use with caution.
    get inputBucketInput() {
        return this._inputBucket;
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
    get outputBucket() {
        return this.getStringAttribute('output_bucket');
    }
    set outputBucket(value) {
        this._outputBucket = value;
    }
    resetOutputBucket() {
        this._outputBucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get outputBucketInput() {
        return this._outputBucket;
    }
    get role() {
        return this.getStringAttribute('role');
    }
    set role(value) {
        this._role = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleInput() {
        return this._role;
    }
    get contentConfig() {
        return this._contentConfig;
    }
    putContentConfig(value) {
        this._contentConfig.internalValue = value;
    }
    resetContentConfig() {
        this._contentConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentConfigInput() {
        return this._contentConfig.internalValue;
    }
    get contentConfigPermissions() {
        return this._contentConfigPermissions;
    }
    putContentConfigPermissions(value) {
        this._contentConfigPermissions.internalValue = value;
    }
    resetContentConfigPermissions() {
        this._contentConfigPermissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentConfigPermissionsInput() {
        return this._contentConfigPermissions.internalValue;
    }
    get notifications() {
        return this._notifications;
    }
    putNotifications(value) {
        this._notifications.internalValue = value;
    }
    resetNotifications() {
        this._notifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notificationsInput() {
        return this._notifications.internalValue;
    }
    get thumbnailConfig() {
        return this._thumbnailConfig;
    }
    putThumbnailConfig(value) {
        this._thumbnailConfig.internalValue = value;
    }
    resetThumbnailConfig() {
        this._thumbnailConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get thumbnailConfigInput() {
        return this._thumbnailConfig.internalValue;
    }
    get thumbnailConfigPermissions() {
        return this._thumbnailConfigPermissions;
    }
    putThumbnailConfigPermissions(value) {
        this._thumbnailConfigPermissions.internalValue = value;
    }
    resetThumbnailConfigPermissions() {
        this._thumbnailConfigPermissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get thumbnailConfigPermissionsInput() {
        return this._thumbnailConfigPermissions.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            aws_kms_key_arn: cdktf.stringToTerraform(this._awsKmsKeyArn),
            id: cdktf.stringToTerraform(this._id),
            input_bucket: cdktf.stringToTerraform(this._inputBucket),
            name: cdktf.stringToTerraform(this._name),
            output_bucket: cdktf.stringToTerraform(this._outputBucket),
            role: cdktf.stringToTerraform(this._role),
            content_config: elastictranscoderPipelineContentConfigToTerraform(this._contentConfig.internalValue),
            content_config_permissions: cdktf.listMapper(elastictranscoderPipelineContentConfigPermissionsToTerraform, true)(this._contentConfigPermissions.internalValue),
            notifications: elastictranscoderPipelineNotificationsToTerraform(this._notifications.internalValue),
            thumbnail_config: elastictranscoderPipelineThumbnailConfigToTerraform(this._thumbnailConfig.internalValue),
            thumbnail_config_permissions: cdktf.listMapper(elastictranscoderPipelineThumbnailConfigPermissionsToTerraform, true)(this._thumbnailConfigPermissions.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            aws_kms_key_arn: {
                value: cdktf.stringToHclTerraform(this._awsKmsKeyArn),
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
            input_bucket: {
                value: cdktf.stringToHclTerraform(this._inputBucket),
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
            output_bucket: {
                value: cdktf.stringToHclTerraform(this._outputBucket),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role: {
                value: cdktf.stringToHclTerraform(this._role),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_config: {
                value: elastictranscoderPipelineContentConfigToHclTerraform(this._contentConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ElastictranscoderPipelineContentConfigList",
            },
            content_config_permissions: {
                value: cdktf.listMapperHcl(elastictranscoderPipelineContentConfigPermissionsToHclTerraform, true)(this._contentConfigPermissions.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ElastictranscoderPipelineContentConfigPermissionsList",
            },
            notifications: {
                value: elastictranscoderPipelineNotificationsToHclTerraform(this._notifications.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ElastictranscoderPipelineNotificationsList",
            },
            thumbnail_config: {
                value: elastictranscoderPipelineThumbnailConfigToHclTerraform(this._thumbnailConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ElastictranscoderPipelineThumbnailConfigList",
            },
            thumbnail_config_permissions: {
                value: cdktf.listMapperHcl(elastictranscoderPipelineThumbnailConfigPermissionsToHclTerraform, true)(this._thumbnailConfigPermissions.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ElastictranscoderPipelineThumbnailConfigPermissionsList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.ElastictranscoderPipeline = ElastictranscoderPipeline;
_h = JSII_RTTI_SYMBOL_1;
ElastictranscoderPipeline[_h] = { fqn: "@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
ElastictranscoderPipeline.tfResourceType = "aws_elastictranscoder_pipeline";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2VsYXN0aWN0cmFuc2NvZGVyLXBpcGVsaW5lL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBMEUvQixTQUFnQixpREFBaUQsQ0FBQyxNQUF1RztJQUN2SyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9DLGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztLQUM3RCxDQUFBO0FBQ0gsQ0FBQztBQVRELDhHQVNDO0FBR0QsU0FBZ0Isb0RBQW9ELENBQUMsTUFBdUc7SUFDMUssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWixNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsS0FB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Q29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcGlwZWxpbmVcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3BpcGVsaW5lI2F3c19rbXNfa2V5X2FybiBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lI2F3c19rbXNfa2V5X2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgYXdzS21zS2V5QXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9waXBlbGluZSNpZCBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lI2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9waXBlbGluZSNpbnB1dF9idWNrZXQgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZSNpbnB1dF9idWNrZXR9XG4gICovXG4gIHJlYWRvbmx5IGlucHV0QnVja2V0OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3BpcGVsaW5lI25hbWUgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZSNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9waXBlbGluZSNvdXRwdXRfYnVja2V0IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmUjb3V0cHV0X2J1Y2tldH1cbiAgKi9cbiAgcmVhZG9ubHkgb3V0cHV0QnVja2V0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9waXBlbGluZSNyb2xlIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmUjcm9sZX1cbiAgKi9cbiAgcmVhZG9ubHkgcm9sZTogc3RyaW5nO1xuICAvKipcbiAgKiBjb250ZW50X2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcGlwZWxpbmUjY29udGVudF9jb25maWcgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZSNjb250ZW50X2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgY29udGVudENvbmZpZz86IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnO1xuICAvKipcbiAgKiBjb250ZW50X2NvbmZpZ19wZXJtaXNzaW9ucyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcGlwZWxpbmUjY29udGVudF9jb25maWdfcGVybWlzc2lvbnMgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZSNjb250ZW50X2NvbmZpZ19wZXJtaXNzaW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgY29udGVudENvbmZpZ1Blcm1pc3Npb25zPzogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWdQZXJtaXNzaW9uc1tdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIG5vdGlmaWNhdGlvbnMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3BpcGVsaW5lI25vdGlmaWNhdGlvbnMgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZSNub3RpZmljYXRpb25zfVxuICAqL1xuICByZWFkb25seSBub3RpZmljYXRpb25zPzogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZU5vdGlmaWNhdGlvbnM7XG4gIC8qKlxuICAqIHRodW1ibmFpbF9jb25maWcgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3BpcGVsaW5lI3RodW1ibmFpbF9jb25maWcgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZSN0aHVtYm5haWxfY29uZmlnfVxuICAqL1xuICByZWFkb25seSB0aHVtYm5haWxDb25maWc/OiBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lVGh1bWJuYWlsQ29uZmlnO1xuICAvKipcbiAgKiB0aHVtYm5haWxfY29uZmlnX3Blcm1pc3Npb25zIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9waXBlbGluZSN0aHVtYm5haWxfY29uZmlnX3Blcm1pc3Npb25zIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmUjdGh1bWJuYWlsX2NvbmZpZ19wZXJtaXNzaW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgdGh1bWJuYWlsQ29uZmlnUGVybWlzc2lvbnM/OiBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lVGh1bWJuYWlsQ29uZmlnUGVybWlzc2lvbnNbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuZXhwb3J0IGludGVyZmFjZSBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lQ29udGVudENvbmZpZyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3BpcGVsaW5lI2J1Y2tldCBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lI2J1Y2tldH1cbiAgKi9cbiAgcmVhZG9ubHkgYnVja2V0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9waXBlbGluZSNzdG9yYWdlX2NsYXNzIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmUjc3RvcmFnZV9jbGFzc31cbiAgKi9cbiAgcmVhZG9ubHkgc3RvcmFnZUNsYXNzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lQ29udGVudENvbmZpZ091dHB1dFJlZmVyZW5jZSB8IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXQpLFxuICAgIHN0b3JhZ2VfY2xhc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RvcmFnZUNsYXNzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lQ29udGVudENvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGJ1Y2tldDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzdG9yYWdlX2NsYXNzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zdG9yYWdlQ2xhc3MpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9idWNrZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVja2V0ID0gdGhpcy5fYnVja2V0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RvcmFnZUNsYXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0b3JhZ2VDbGFzcyA9IHRoaXMuX3N0b3JhZ2VDbGFzcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYnVja2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RvcmFnZUNsYXNzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9idWNrZXQgPSB2YWx1ZS5idWNrZXQ7XG4gICAgICB0aGlzLl9zdG9yYWdlQ2xhc3MgPSB2YWx1ZS5zdG9yYWdlQ2xhc3M7XG4gICAgfVxuICB9XG5cbiAgLy8gYnVja2V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVja2V0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWNrZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVja2V0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QnVja2V0KCkge1xuICAgIHRoaXMuX2J1Y2tldCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVja2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1Y2tldDtcbiAgfVxuXG4gIC8vIHN0b3JhZ2VfY2xhc3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RvcmFnZUNsYXNzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdG9yYWdlQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdG9yYWdlX2NsYXNzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdG9yYWdlQ2xhc3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0b3JhZ2VDbGFzcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0b3JhZ2VDbGFzcygpIHtcbiAgICB0aGlzLl9zdG9yYWdlQ2xhc3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VDbGFzc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yYWdlQ2xhc3M7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWdQZXJtaXNzaW9ucyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3BpcGVsaW5lI2FjY2VzcyBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lI2FjY2Vzc31cbiAgKi9cbiAgcmVhZG9ubHkgYWNjZXNzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3BpcGVsaW5lI2dyYW50ZWUgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZSNncmFudGVlfVxuICAqL1xuICByZWFkb25seSBncmFudGVlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9waXBlbGluZSNncmFudGVlX3R5cGUgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZSNncmFudGVlX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGdyYW50ZWVUeXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWdQZXJtaXNzaW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnUGVybWlzc2lvbnMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY2Nlc3M6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmFjY2VzcyksXG4gICAgZ3JhbnRlZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ncmFudGVlKSxcbiAgICBncmFudGVlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ3JhbnRlZVR5cGUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnUGVybWlzc2lvbnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lQ29udGVudENvbmZpZ1Blcm1pc3Npb25zIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFjY2Vzczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmFjY2VzcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgICBncmFudGVlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ncmFudGVlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBncmFudGVlX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmdyYW50ZWVUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnUGVybWlzc2lvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWdQZXJtaXNzaW9ucyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWNjZXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjY2VzcyA9IHRoaXMuX2FjY2VzcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2dyYW50ZWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZ3JhbnRlZSA9IHRoaXMuX2dyYW50ZWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ncmFudGVlVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ncmFudGVlVHlwZSA9IHRoaXMuX2dyYW50ZWVUeXBlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWdQZXJtaXNzaW9ucyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hY2Nlc3MgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ncmFudGVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZ3JhbnRlZVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYWNjZXNzID0gdmFsdWUuYWNjZXNzO1xuICAgICAgdGhpcy5fZ3JhbnRlZSA9IHZhbHVlLmdyYW50ZWU7XG4gICAgICB0aGlzLl9ncmFudGVlVHlwZSA9IHZhbHVlLmdyYW50ZWVUeXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjY2VzcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2Nlc3M/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgYWNjZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2FjY2VzcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWNjZXNzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2FjY2VzcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFjY2VzcygpIHtcbiAgICB0aGlzLl9hY2Nlc3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY2Vzc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3M7XG4gIH1cblxuICAvLyBncmFudGVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dyYW50ZWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGdyYW50ZWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdncmFudGVlJyk7XG4gIH1cbiAgcHVibGljIHNldCBncmFudGVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ncmFudGVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R3JhbnRlZSgpIHtcbiAgICB0aGlzLl9ncmFudGVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBncmFudGVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyYW50ZWU7XG4gIH1cblxuICAvLyBncmFudGVlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZ3JhbnRlZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGdyYW50ZWVUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ3JhbnRlZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBncmFudGVlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ3JhbnRlZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRHcmFudGVlVHlwZSgpIHtcbiAgICB0aGlzLl9ncmFudGVlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ3JhbnRlZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JhbnRlZVR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnUGVybWlzc2lvbnNMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lQ29udGVudENvbmZpZ1Blcm1pc3Npb25zW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnUGVybWlzc2lvbnNPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWdQZXJtaXNzaW9uc091dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVOb3RpZmljYXRpb25zIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcGlwZWxpbmUjY29tcGxldGVkIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmUjY29tcGxldGVkfVxuICAqL1xuICByZWFkb25seSBjb21wbGV0ZWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3BpcGVsaW5lI2Vycm9yIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmUjZXJyb3J9XG4gICovXG4gIHJlYWRvbmx5IGVycm9yPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9waXBlbGluZSNwcm9ncmVzc2luZyBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lI3Byb2dyZXNzaW5nfVxuICAqL1xuICByZWFkb25seSBwcm9ncmVzc2luZz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcGlwZWxpbmUjd2FybmluZyBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lI3dhcm5pbmd9XG4gICovXG4gIHJlYWRvbmx5IHdhcm5pbmc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lTm90aWZpY2F0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVOb3RpZmljYXRpb25zT3V0cHV0UmVmZXJlbmNlIHwgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZU5vdGlmaWNhdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGxldGVkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBsZXRlZCksXG4gICAgZXJyb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXJyb3IpLFxuICAgIHByb2dyZXNzaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb2dyZXNzaW5nKSxcbiAgICB3YXJuaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLndhcm5pbmcpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVOb3RpZmljYXRpb25zVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZU5vdGlmaWNhdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lTm90aWZpY2F0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgY29tcGxldGVkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb21wbGV0ZWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lcnJvciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcHJvZ3Jlc3Npbmc6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByb2dyZXNzaW5nKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB3YXJuaW5nOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS53YXJuaW5nKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVOb3RpZmljYXRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lTm90aWZpY2F0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29tcGxldGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbXBsZXRlZCA9IHRoaXMuX2NvbXBsZXRlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Vycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVycm9yID0gdGhpcy5fZXJyb3I7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm9ncmVzc2luZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm9ncmVzc2luZyA9IHRoaXMuX3Byb2dyZXNzaW5nO1xuICAgIH1cbiAgICBpZiAodGhpcy5fd2FybmluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC53YXJuaW5nID0gdGhpcy5fd2FybmluZztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVOb3RpZmljYXRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29tcGxldGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcm9ncmVzc2luZyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3dhcm5pbmcgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NvbXBsZXRlZCA9IHZhbHVlLmNvbXBsZXRlZDtcbiAgICAgIHRoaXMuX2Vycm9yID0gdmFsdWUuZXJyb3I7XG4gICAgICB0aGlzLl9wcm9ncmVzc2luZyA9IHZhbHVlLnByb2dyZXNzaW5nO1xuICAgICAgdGhpcy5fd2FybmluZyA9IHZhbHVlLndhcm5pbmc7XG4gICAgfVxuICB9XG5cbiAgLy8gY29tcGxldGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbXBsZXRlZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29tcGxldGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcGxldGVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21wbGV0ZWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXBsZXRlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbXBsZXRlZCgpIHtcbiAgICB0aGlzLl9jb21wbGV0ZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXBsZXRlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZWQ7XG4gIH1cblxuICAvLyBlcnJvciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lcnJvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlcnJvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXJyb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Vycm9yID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXJyb3IoKSB7XG4gICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVycm9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xuICB9XG5cbiAgLy8gcHJvZ3Jlc3NpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvZ3Jlc3Npbmc/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByb2dyZXNzaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvZ3Jlc3NpbmcnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByb2dyZXNzaW5nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcm9ncmVzc2luZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb2dyZXNzaW5nKCkge1xuICAgIHRoaXMuX3Byb2dyZXNzaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm9ncmVzc2luZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9ncmVzc2luZztcbiAgfVxuXG4gIC8vIHdhcm5pbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd2FybmluZz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgd2FybmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dhcm5pbmcnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHdhcm5pbmcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3dhcm5pbmcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXYXJuaW5nKCkge1xuICAgIHRoaXMuX3dhcm5pbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdhcm5pbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2FybmluZztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lVGh1bWJuYWlsQ29uZmlnIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcGlwZWxpbmUjYnVja2V0IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmUjYnVja2V0fVxuICAqL1xuICByZWFkb25seSBidWNrZXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3BpcGVsaW5lI3N0b3JhZ2VfY2xhc3MgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZSNzdG9yYWdlX2NsYXNzfVxuICAqL1xuICByZWFkb25seSBzdG9yYWdlQ2xhc3M/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lVGh1bWJuYWlsQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZVRodW1ibmFpbENvbmZpZ091dHB1dFJlZmVyZW5jZSB8IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldCksXG4gICAgc3RvcmFnZV9jbGFzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdG9yYWdlQ2xhc3MpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lVGh1bWJuYWlsQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZVRodW1ibmFpbENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYnVja2V0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5idWNrZXQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHN0b3JhZ2VfY2xhc3M6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN0b3JhZ2VDbGFzcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lVGh1bWJuYWlsQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lVGh1bWJuYWlsQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9idWNrZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVja2V0ID0gdGhpcy5fYnVja2V0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RvcmFnZUNsYXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0b3JhZ2VDbGFzcyA9IHRoaXMuX3N0b3JhZ2VDbGFzcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9idWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdG9yYWdlQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2J1Y2tldCA9IHZhbHVlLmJ1Y2tldDtcbiAgICAgIHRoaXMuX3N0b3JhZ2VDbGFzcyA9IHZhbHVlLnN0b3JhZ2VDbGFzcztcbiAgICB9XG4gIH1cblxuICAvLyBidWNrZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idWNrZXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJ1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVja2V0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idWNrZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWNrZXQoKSB7XG4gICAgdGhpcy5fYnVja2V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWNrZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVja2V0O1xuICB9XG5cbiAgLy8gc3RvcmFnZV9jbGFzcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdG9yYWdlQ2xhc3M/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0b3JhZ2VfY2xhc3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0b3JhZ2VDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RvcmFnZUNsYXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RvcmFnZUNsYXNzKCkge1xuICAgIHRoaXMuX3N0b3JhZ2VDbGFzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RvcmFnZUNsYXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2VDbGFzcztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lVGh1bWJuYWlsQ29uZmlnUGVybWlzc2lvbnMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9waXBlbGluZSNhY2Nlc3MgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZSNhY2Nlc3N9XG4gICovXG4gIHJlYWRvbmx5IGFjY2Vzcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9waXBlbGluZSNncmFudGVlIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmUjZ3JhbnRlZX1cbiAgKi9cbiAgcmVhZG9ubHkgZ3JhbnRlZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWxhc3RpY3RyYW5zY29kZXJfcGlwZWxpbmUjZ3JhbnRlZV90eXBlIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmUjZ3JhbnRlZV90eXBlfVxuICAqL1xuICByZWFkb25seSBncmFudGVlVHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWdQZXJtaXNzaW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWdQZXJtaXNzaW9ucyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjY2VzczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuYWNjZXNzKSxcbiAgICBncmFudGVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdyYW50ZWUpLFxuICAgIGdyYW50ZWVfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ncmFudGVlVHlwZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZVRodW1ibmFpbENvbmZpZ1Blcm1pc3Npb25zVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZVRodW1ibmFpbENvbmZpZ1Blcm1pc3Npb25zIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFjY2Vzczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmFjY2VzcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgICBncmFudGVlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ncmFudGVlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBncmFudGVlX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmdyYW50ZWVUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWdQZXJtaXNzaW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lVGh1bWJuYWlsQ29uZmlnUGVybWlzc2lvbnMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjY2VzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hY2Nlc3MgPSB0aGlzLl9hY2Nlc3M7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ncmFudGVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmdyYW50ZWUgPSB0aGlzLl9ncmFudGVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZ3JhbnRlZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZ3JhbnRlZVR5cGUgPSB0aGlzLl9ncmFudGVlVHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWdQZXJtaXNzaW9ucyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hY2Nlc3MgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ncmFudGVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZ3JhbnRlZVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYWNjZXNzID0gdmFsdWUuYWNjZXNzO1xuICAgICAgdGhpcy5fZ3JhbnRlZSA9IHZhbHVlLmdyYW50ZWU7XG4gICAgICB0aGlzLl9ncmFudGVlVHlwZSA9IHZhbHVlLmdyYW50ZWVUeXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjY2VzcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2Nlc3M/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgYWNjZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2FjY2VzcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWNjZXNzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2FjY2VzcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFjY2VzcygpIHtcbiAgICB0aGlzLl9hY2Nlc3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY2Vzc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3M7XG4gIH1cblxuICAvLyBncmFudGVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dyYW50ZWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGdyYW50ZWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdncmFudGVlJyk7XG4gIH1cbiAgcHVibGljIHNldCBncmFudGVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ncmFudGVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R3JhbnRlZSgpIHtcbiAgICB0aGlzLl9ncmFudGVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBncmFudGVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyYW50ZWU7XG4gIH1cblxuICAvLyBncmFudGVlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZ3JhbnRlZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGdyYW50ZWVUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ3JhbnRlZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBncmFudGVlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ3JhbnRlZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRHcmFudGVlVHlwZSgpIHtcbiAgICB0aGlzLl9ncmFudGVlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ3JhbnRlZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JhbnRlZVR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWdQZXJtaXNzaW9uc0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWdQZXJtaXNzaW9uc1tdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lVGh1bWJuYWlsQ29uZmlnUGVybWlzc2lvbnNPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZVRodW1ibmFpbENvbmZpZ1Blcm1pc3Npb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VsYXN0aWN0cmFuc2NvZGVyX3BpcGVsaW5lIGF3c19lbGFzdGljdHJhbnNjb2Rlcl9waXBlbGluZX1cbiovXG5leHBvcnQgY2xhc3MgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfZWxhc3RpY3RyYW5zY29kZXJfcGlwZWxpbmVcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZSByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lIHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9waXBlbGluZSNpbXBvcnQgaW1wb3J0IHNlY3Rpb259IGluIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UgZm9yIHRoZSBpZCB0byB1c2VcbiAgKiBAcGFyYW0gcHJvdmlkZXI/IE9wdGlvbmFsIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciB3aGVyZSB0aGUgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZSB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfZWxhc3RpY3RyYW5zY29kZXJfcGlwZWxpbmVcIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lbGFzdGljdHJhbnNjb2Rlcl9waXBlbGluZSBhd3NfZWxhc3RpY3RyYW5zY29kZXJfcGlwZWxpbmV9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2VsYXN0aWN0cmFuc2NvZGVyX3BpcGVsaW5lJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fYXdzS21zS2V5QXJuID0gY29uZmlnLmF3c0ttc0tleUFybjtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9pbnB1dEJ1Y2tldCA9IGNvbmZpZy5pbnB1dEJ1Y2tldDtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fb3V0cHV0QnVja2V0ID0gY29uZmlnLm91dHB1dEJ1Y2tldDtcbiAgICB0aGlzLl9yb2xlID0gY29uZmlnLnJvbGU7XG4gICAgdGhpcy5fY29udGVudENvbmZpZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmNvbnRlbnRDb25maWc7XG4gICAgdGhpcy5fY29udGVudENvbmZpZ1Blcm1pc3Npb25zLmludGVybmFsVmFsdWUgPSBjb25maWcuY29udGVudENvbmZpZ1Blcm1pc3Npb25zO1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5ub3RpZmljYXRpb25zO1xuICAgIHRoaXMuX3RodW1ibmFpbENvbmZpZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnRodW1ibmFpbENvbmZpZztcbiAgICB0aGlzLl90aHVtYm5haWxDb25maWdQZXJtaXNzaW9ucy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnRodW1ibmFpbENvbmZpZ1Blcm1pc3Npb25zO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF3c19rbXNfa2V5X2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hd3NLbXNLZXlBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF3c0ttc0tleUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F3c19rbXNfa2V5X2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXdzS21zS2V5QXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hd3NLbXNLZXlBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBd3NLbXNLZXlBcm4oKSB7XG4gICAgdGhpcy5fYXdzS21zS2V5QXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhd3NLbXNLZXlBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXdzS21zS2V5QXJuO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gaW5wdXRfYnVja2V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lucHV0QnVja2V0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnB1dEJ1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lucHV0X2J1Y2tldCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5wdXRCdWNrZXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lucHV0QnVja2V0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlucHV0QnVja2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0QnVja2V0O1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBvdXRwdXRfYnVja2V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3V0cHV0QnVja2V0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBvdXRwdXRCdWNrZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvdXRwdXRfYnVja2V0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBvdXRwdXRCdWNrZXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX291dHB1dEJ1Y2tldCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE91dHB1dEJ1Y2tldCgpIHtcbiAgICB0aGlzLl9vdXRwdXRCdWNrZXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG91dHB1dEJ1Y2tldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vdXRwdXRCdWNrZXQ7XG4gIH1cblxuICAvLyByb2xlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JvbGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb2xlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZTtcbiAgfVxuXG4gIC8vIGNvbnRlbnRfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbnRlbnRDb25maWcgPSBuZXcgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJjb250ZW50X2NvbmZpZ1wiKTtcbiAgcHVibGljIGdldCBjb250ZW50Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50Q29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRDb250ZW50Q29uZmlnKHZhbHVlOiBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lQ29udGVudENvbmZpZykge1xuICAgIHRoaXMuX2NvbnRlbnRDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRlbnRDb25maWcoKSB7XG4gICAgdGhpcy5fY29udGVudENvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb250ZW50Q29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGNvbnRlbnRfY29uZmlnX3Blcm1pc3Npb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbnRlbnRDb25maWdQZXJtaXNzaW9ucyA9IG5ldyBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lQ29udGVudENvbmZpZ1Blcm1pc3Npb25zTGlzdCh0aGlzLCBcImNvbnRlbnRfY29uZmlnX3Blcm1pc3Npb25zXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNvbnRlbnRDb25maWdQZXJtaXNzaW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudENvbmZpZ1Blcm1pc3Npb25zO1xuICB9XG4gIHB1YmxpYyBwdXRDb250ZW50Q29uZmlnUGVybWlzc2lvbnModmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnUGVybWlzc2lvbnNbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY29udGVudENvbmZpZ1Blcm1pc3Npb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb250ZW50Q29uZmlnUGVybWlzc2lvbnMoKSB7XG4gICAgdGhpcy5fY29udGVudENvbmZpZ1Blcm1pc3Npb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRlbnRDb25maWdQZXJtaXNzaW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50Q29uZmlnUGVybWlzc2lvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG5vdGlmaWNhdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9ucyA9IG5ldyBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lTm90aWZpY2F0aW9uc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcIm5vdGlmaWNhdGlvbnNcIik7XG4gIHB1YmxpYyBnZXQgbm90aWZpY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0Tm90aWZpY2F0aW9ucyh2YWx1ZTogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZU5vdGlmaWNhdGlvbnMpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROb3RpZmljYXRpb25zKCkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbm90aWZpY2F0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25zLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0aHVtYm5haWxfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RodW1ibmFpbENvbmZpZyA9IG5ldyBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lVGh1bWJuYWlsQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwidGh1bWJuYWlsX2NvbmZpZ1wiKTtcbiAgcHVibGljIGdldCB0aHVtYm5haWxDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RodW1ibmFpbENvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0VGh1bWJuYWlsQ29uZmlnKHZhbHVlOiBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lVGh1bWJuYWlsQ29uZmlnKSB7XG4gICAgdGhpcy5fdGh1bWJuYWlsQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaHVtYm5haWxDb25maWcoKSB7XG4gICAgdGhpcy5fdGh1bWJuYWlsQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRodW1ibmFpbENvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aHVtYm5haWxDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRodW1ibmFpbF9jb25maWdfcGVybWlzc2lvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGh1bWJuYWlsQ29uZmlnUGVybWlzc2lvbnMgPSBuZXcgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZVRodW1ibmFpbENvbmZpZ1Blcm1pc3Npb25zTGlzdCh0aGlzLCBcInRodW1ibmFpbF9jb25maWdfcGVybWlzc2lvbnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdGh1bWJuYWlsQ29uZmlnUGVybWlzc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RodW1ibmFpbENvbmZpZ1Blcm1pc3Npb25zO1xuICB9XG4gIHB1YmxpYyBwdXRUaHVtYm5haWxDb25maWdQZXJtaXNzaW9ucyh2YWx1ZTogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZVRodW1ibmFpbENvbmZpZ1Blcm1pc3Npb25zW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RodW1ibmFpbENvbmZpZ1Blcm1pc3Npb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaHVtYm5haWxDb25maWdQZXJtaXNzaW9ucygpIHtcbiAgICB0aGlzLl90aHVtYm5haWxDb25maWdQZXJtaXNzaW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aHVtYm5haWxDb25maWdQZXJtaXNzaW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aHVtYm5haWxDb25maWdQZXJtaXNzaW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhd3Nfa21zX2tleV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2F3c0ttc0tleUFybiksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgaW5wdXRfYnVja2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pbnB1dEJ1Y2tldCksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIG91dHB1dF9idWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX291dHB1dEJ1Y2tldCksXG4gICAgICByb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yb2xlKSxcbiAgICAgIGNvbnRlbnRfY29uZmlnOiBlbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lQ29udGVudENvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2NvbnRlbnRDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBjb250ZW50X2NvbmZpZ19wZXJtaXNzaW9uczogY2RrdGYubGlzdE1hcHBlcihlbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lQ29udGVudENvbmZpZ1Blcm1pc3Npb25zVG9UZXJyYWZvcm0sIHRydWUpKHRoaXMuX2NvbnRlbnRDb25maWdQZXJtaXNzaW9ucy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIG5vdGlmaWNhdGlvbnM6IGVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVOb3RpZmljYXRpb25zVG9UZXJyYWZvcm0odGhpcy5fbm90aWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHRodW1ibmFpbF9jb25maWc6IGVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWdUb1RlcnJhZm9ybSh0aGlzLl90aHVtYm5haWxDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0aHVtYm5haWxfY29uZmlnX3Blcm1pc3Npb25zOiBjZGt0Zi5saXN0TWFwcGVyKGVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWdQZXJtaXNzaW9uc1RvVGVycmFmb3JtLCB0cnVlKSh0aGlzLl90aHVtYm5haWxDb25maWdQZXJtaXNzaW9ucy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGF3c19rbXNfa2V5X2Fybjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fYXdzS21zS2V5QXJuKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaW5wdXRfYnVja2V0OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pbnB1dEJ1Y2tldCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBvdXRwdXRfYnVja2V0OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9vdXRwdXRCdWNrZXQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICByb2xlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9yb2xlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgY29udGVudF9jb25maWc6IHtcbiAgICAgICAgdmFsdWU6IGVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnVG9IY2xUZXJyYWZvcm0odGhpcy5fY29udGVudENvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgY29udGVudF9jb25maWdfcGVybWlzc2lvbnM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woZWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWdQZXJtaXNzaW9uc1RvSGNsVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9jb250ZW50Q29uZmlnUGVybWlzc2lvbnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWdQZXJtaXNzaW9uc0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBub3RpZmljYXRpb25zOiB7XG4gICAgICAgIHZhbHVlOiBlbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lTm90aWZpY2F0aW9uc1RvSGNsVGVycmFmb3JtKHRoaXMuX25vdGlmaWNhdGlvbnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVOb3RpZmljYXRpb25zTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHRodW1ibmFpbF9jb25maWc6IHtcbiAgICAgICAgdmFsdWU6IGVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWdUb0hjbFRlcnJhZm9ybSh0aGlzLl90aHVtYm5haWxDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgdGh1bWJuYWlsX2NvbmZpZ19wZXJtaXNzaW9uczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChlbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lVGh1bWJuYWlsQ29uZmlnUGVybWlzc2lvbnNUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fdGh1bWJuYWlsQ29uZmlnUGVybWlzc2lvbnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZVRodW1ibmFpbENvbmZpZ1Blcm1pc3Npb25zTGlzdFwiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19