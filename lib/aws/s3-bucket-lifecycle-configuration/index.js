"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3BucketLifecycleConfiguration = exports.S3BucketLifecycleConfigurationRuleList = exports.S3BucketLifecycleConfigurationRuleOutputReference = exports.s3BucketLifecycleConfigurationRuleToHclTerraform = exports.s3BucketLifecycleConfigurationRuleToTerraform = exports.S3BucketLifecycleConfigurationRuleTransitionList = exports.S3BucketLifecycleConfigurationRuleTransitionOutputReference = exports.s3BucketLifecycleConfigurationRuleTransitionToHclTerraform = exports.s3BucketLifecycleConfigurationRuleTransitionToTerraform = exports.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList = exports.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference = exports.s3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionToHclTerraform = exports.s3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionToTerraform = exports.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference = exports.s3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationToHclTerraform = exports.s3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationToTerraform = exports.S3BucketLifecycleConfigurationRuleFilterOutputReference = exports.s3BucketLifecycleConfigurationRuleFilterToHclTerraform = exports.s3BucketLifecycleConfigurationRuleFilterToTerraform = exports.S3BucketLifecycleConfigurationRuleFilterTagOutputReference = exports.s3BucketLifecycleConfigurationRuleFilterTagToHclTerraform = exports.s3BucketLifecycleConfigurationRuleFilterTagToTerraform = exports.S3BucketLifecycleConfigurationRuleFilterAndOutputReference = exports.s3BucketLifecycleConfigurationRuleFilterAndToHclTerraform = exports.s3BucketLifecycleConfigurationRuleFilterAndToTerraform = exports.S3BucketLifecycleConfigurationRuleExpirationOutputReference = exports.s3BucketLifecycleConfigurationRuleExpirationToHclTerraform = exports.s3BucketLifecycleConfigurationRuleExpirationToTerraform = exports.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference = exports.s3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToHclTerraform = exports.s3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function s3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        days_after_initiation: cdktf.numberToTerraform(struct.daysAfterInitiation),
    };
}
exports.s3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform = s3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform;
function s3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        days_after_initiation: {
            value: cdktf.numberToHclTerraform(struct.daysAfterInitiation),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToHclTerraform = s3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToHclTerraform;
class S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference extends cdktf.ComplexObject {
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
        if (this._daysAfterInitiation !== undefined) {
            hasAnyValues = true;
            internalValueResult.daysAfterInitiation = this._daysAfterInitiation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._daysAfterInitiation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._daysAfterInitiation = value.daysAfterInitiation;
        }
    }
    get daysAfterInitiation() {
        return this.getNumberAttribute('days_after_initiation');
    }
    set daysAfterInitiation(value) {
        this._daysAfterInitiation = value;
    }
    resetDaysAfterInitiation() {
        this._daysAfterInitiation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get daysAfterInitiationInput() {
        return this._daysAfterInitiation;
    }
}
exports.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference = S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference;
_a = JSII_RTTI_SYMBOL_1;
S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference[_a] = { fqn: "@cdktf/aws-cdk.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference", version: "0.0.0" };
function s3BucketLifecycleConfigurationRuleExpirationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        date: cdktf.stringToTerraform(struct.date),
        days: cdktf.numberToTerraform(struct.days),
        expired_object_delete_marker: cdktf.booleanToTerraform(struct.expiredObjectDeleteMarker),
    };
}
exports.s3BucketLifecycleConfigurationRuleExpirationToTerraform = s3BucketLifecycleConfigurationRuleExpirationToTerraform;
function s3BucketLifecycleConfigurationRuleExpirationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        date: {
            value: cdktf.stringToHclTerraform(struct.date),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        days: {
            value: cdktf.numberToHclTerraform(struct.days),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        expired_object_delete_marker: {
            value: cdktf.booleanToHclTerraform(struct.expiredObjectDeleteMarker),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketLifecycleConfigurationRuleExpirationToHclTerraform = s3BucketLifecycleConfigurationRuleExpirationToHclTerraform;
class S3BucketLifecycleConfigurationRuleExpirationOutputReference extends cdktf.ComplexObject {
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
        if (this._date !== undefined) {
            hasAnyValues = true;
            internalValueResult.date = this._date;
        }
        if (this._days !== undefined) {
            hasAnyValues = true;
            internalValueResult.days = this._days;
        }
        if (this._expiredObjectDeleteMarker !== undefined) {
            hasAnyValues = true;
            internalValueResult.expiredObjectDeleteMarker = this._expiredObjectDeleteMarker;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._date = undefined;
            this._days = undefined;
            this._expiredObjectDeleteMarker = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._date = value.date;
            this._days = value.days;
            this._expiredObjectDeleteMarker = value.expiredObjectDeleteMarker;
        }
    }
    get date() {
        return this.getStringAttribute('date');
    }
    set date(value) {
        this._date = value;
    }
    resetDate() {
        this._date = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dateInput() {
        return this._date;
    }
    get days() {
        return this.getNumberAttribute('days');
    }
    set days(value) {
        this._days = value;
    }
    resetDays() {
        this._days = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get daysInput() {
        return this._days;
    }
    get expiredObjectDeleteMarker() {
        return this.getBooleanAttribute('expired_object_delete_marker');
    }
    set expiredObjectDeleteMarker(value) {
        this._expiredObjectDeleteMarker = value;
    }
    resetExpiredObjectDeleteMarker() {
        this._expiredObjectDeleteMarker = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expiredObjectDeleteMarkerInput() {
        return this._expiredObjectDeleteMarker;
    }
}
exports.S3BucketLifecycleConfigurationRuleExpirationOutputReference = S3BucketLifecycleConfigurationRuleExpirationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
S3BucketLifecycleConfigurationRuleExpirationOutputReference[_b] = { fqn: "@cdktf/aws-cdk.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleExpirationOutputReference", version: "0.0.0" };
function s3BucketLifecycleConfigurationRuleFilterAndToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        object_size_greater_than: cdktf.numberToTerraform(struct.objectSizeGreaterThan),
        object_size_less_than: cdktf.numberToTerraform(struct.objectSizeLessThan),
        prefix: cdktf.stringToTerraform(struct.prefix),
        tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct.tags),
    };
}
exports.s3BucketLifecycleConfigurationRuleFilterAndToTerraform = s3BucketLifecycleConfigurationRuleFilterAndToTerraform;
function s3BucketLifecycleConfigurationRuleFilterAndToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        object_size_greater_than: {
            value: cdktf.numberToHclTerraform(struct.objectSizeGreaterThan),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        object_size_less_than: {
            value: cdktf.numberToHclTerraform(struct.objectSizeLessThan),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        prefix: {
            value: cdktf.stringToHclTerraform(struct.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tags: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.tags),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketLifecycleConfigurationRuleFilterAndToHclTerraform = s3BucketLifecycleConfigurationRuleFilterAndToHclTerraform;
class S3BucketLifecycleConfigurationRuleFilterAndOutputReference extends cdktf.ComplexObject {
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
        if (this._objectSizeGreaterThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectSizeGreaterThan = this._objectSizeGreaterThan;
        }
        if (this._objectSizeLessThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectSizeLessThan = this._objectSizeLessThan;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._tags !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._objectSizeGreaterThan = undefined;
            this._objectSizeLessThan = undefined;
            this._prefix = undefined;
            this._tags = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._objectSizeGreaterThan = value.objectSizeGreaterThan;
            this._objectSizeLessThan = value.objectSizeLessThan;
            this._prefix = value.prefix;
            this._tags = value.tags;
        }
    }
    get objectSizeGreaterThan() {
        return this.getNumberAttribute('object_size_greater_than');
    }
    set objectSizeGreaterThan(value) {
        this._objectSizeGreaterThan = value;
    }
    resetObjectSizeGreaterThan() {
        this._objectSizeGreaterThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get objectSizeGreaterThanInput() {
        return this._objectSizeGreaterThan;
    }
    get objectSizeLessThan() {
        return this.getNumberAttribute('object_size_less_than');
    }
    set objectSizeLessThan(value) {
        this._objectSizeLessThan = value;
    }
    resetObjectSizeLessThan() {
        this._objectSizeLessThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get objectSizeLessThanInput() {
        return this._objectSizeLessThan;
    }
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    set prefix(value) {
        this._prefix = value;
    }
    resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prefixInput() {
        return this._prefix;
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
}
exports.S3BucketLifecycleConfigurationRuleFilterAndOutputReference = S3BucketLifecycleConfigurationRuleFilterAndOutputReference;
_c = JSII_RTTI_SYMBOL_1;
S3BucketLifecycleConfigurationRuleFilterAndOutputReference[_c] = { fqn: "@cdktf/aws-cdk.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterAndOutputReference", version: "0.0.0" };
function s3BucketLifecycleConfigurationRuleFilterTagToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.s3BucketLifecycleConfigurationRuleFilterTagToTerraform = s3BucketLifecycleConfigurationRuleFilterTagToTerraform;
function s3BucketLifecycleConfigurationRuleFilterTagToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        key: {
            value: cdktf.stringToHclTerraform(struct.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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
exports.s3BucketLifecycleConfigurationRuleFilterTagToHclTerraform = s3BucketLifecycleConfigurationRuleFilterTagToHclTerraform;
class S3BucketLifecycleConfigurationRuleFilterTagOutputReference extends cdktf.ComplexObject {
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
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
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
            this._key = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._key = value.key;
            this._value = value.value;
        }
    }
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
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
exports.S3BucketLifecycleConfigurationRuleFilterTagOutputReference = S3BucketLifecycleConfigurationRuleFilterTagOutputReference;
_d = JSII_RTTI_SYMBOL_1;
S3BucketLifecycleConfigurationRuleFilterTagOutputReference[_d] = { fqn: "@cdktf/aws-cdk.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterTagOutputReference", version: "0.0.0" };
function s3BucketLifecycleConfigurationRuleFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        object_size_greater_than: cdktf.stringToTerraform(struct.objectSizeGreaterThan),
        object_size_less_than: cdktf.stringToTerraform(struct.objectSizeLessThan),
        prefix: cdktf.stringToTerraform(struct.prefix),
        and: s3BucketLifecycleConfigurationRuleFilterAndToTerraform(struct.and),
        tag: s3BucketLifecycleConfigurationRuleFilterTagToTerraform(struct.tag),
    };
}
exports.s3BucketLifecycleConfigurationRuleFilterToTerraform = s3BucketLifecycleConfigurationRuleFilterToTerraform;
function s3BucketLifecycleConfigurationRuleFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        object_size_greater_than: {
            value: cdktf.stringToHclTerraform(struct.objectSizeGreaterThan),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        object_size_less_than: {
            value: cdktf.stringToHclTerraform(struct.objectSizeLessThan),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktf.stringToHclTerraform(struct.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        and: {
            value: s3BucketLifecycleConfigurationRuleFilterAndToHclTerraform(struct.and),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketLifecycleConfigurationRuleFilterAndList",
        },
        tag: {
            value: s3BucketLifecycleConfigurationRuleFilterTagToHclTerraform(struct.tag),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketLifecycleConfigurationRuleFilterTagList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketLifecycleConfigurationRuleFilterToHclTerraform = s3BucketLifecycleConfigurationRuleFilterToHclTerraform;
class S3BucketLifecycleConfigurationRuleFilterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // and - computed: false, optional: true, required: false
        this._and = new S3BucketLifecycleConfigurationRuleFilterAndOutputReference(this, "and");
        // tag - computed: false, optional: true, required: false
        this._tag = new S3BucketLifecycleConfigurationRuleFilterTagOutputReference(this, "tag");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._objectSizeGreaterThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectSizeGreaterThan = this._objectSizeGreaterThan;
        }
        if (this._objectSizeLessThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectSizeLessThan = this._objectSizeLessThan;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._and?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.and = this._and?.internalValue;
        }
        if (this._tag?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tag = this._tag?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._objectSizeGreaterThan = undefined;
            this._objectSizeLessThan = undefined;
            this._prefix = undefined;
            this._and.internalValue = undefined;
            this._tag.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._objectSizeGreaterThan = value.objectSizeGreaterThan;
            this._objectSizeLessThan = value.objectSizeLessThan;
            this._prefix = value.prefix;
            this._and.internalValue = value.and;
            this._tag.internalValue = value.tag;
        }
    }
    get objectSizeGreaterThan() {
        return this.getStringAttribute('object_size_greater_than');
    }
    set objectSizeGreaterThan(value) {
        this._objectSizeGreaterThan = value;
    }
    resetObjectSizeGreaterThan() {
        this._objectSizeGreaterThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get objectSizeGreaterThanInput() {
        return this._objectSizeGreaterThan;
    }
    get objectSizeLessThan() {
        return this.getStringAttribute('object_size_less_than');
    }
    set objectSizeLessThan(value) {
        this._objectSizeLessThan = value;
    }
    resetObjectSizeLessThan() {
        this._objectSizeLessThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get objectSizeLessThanInput() {
        return this._objectSizeLessThan;
    }
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    set prefix(value) {
        this._prefix = value;
    }
    resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prefixInput() {
        return this._prefix;
    }
    get and() {
        return this._and;
    }
    putAnd(value) {
        this._and.internalValue = value;
    }
    resetAnd() {
        this._and.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get andInput() {
        return this._and.internalValue;
    }
    get tag() {
        return this._tag;
    }
    putTag(value) {
        this._tag.internalValue = value;
    }
    resetTag() {
        this._tag.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagInput() {
        return this._tag.internalValue;
    }
}
exports.S3BucketLifecycleConfigurationRuleFilterOutputReference = S3BucketLifecycleConfigurationRuleFilterOutputReference;
_e = JSII_RTTI_SYMBOL_1;
S3BucketLifecycleConfigurationRuleFilterOutputReference[_e] = { fqn: "@cdktf/aws-cdk.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleFilterOutputReference", version: "0.0.0" };
function s3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        newer_noncurrent_versions: cdktf.stringToTerraform(struct.newerNoncurrentVersions),
        noncurrent_days: cdktf.numberToTerraform(struct.noncurrentDays),
    };
}
exports.s3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationToTerraform = s3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationToTerraform;
function s3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        newer_noncurrent_versions: {
            value: cdktf.stringToHclTerraform(struct.newerNoncurrentVersions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        noncurrent_days: {
            value: cdktf.numberToHclTerraform(struct.noncurrentDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationToHclTerraform = s3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationToHclTerraform;
class S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference extends cdktf.ComplexObject {
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
        if (this._newerNoncurrentVersions !== undefined) {
            hasAnyValues = true;
            internalValueResult.newerNoncurrentVersions = this._newerNoncurrentVersions;
        }
        if (this._noncurrentDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.noncurrentDays = this._noncurrentDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._newerNoncurrentVersions = undefined;
            this._noncurrentDays = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._newerNoncurrentVersions = value.newerNoncurrentVersions;
            this._noncurrentDays = value.noncurrentDays;
        }
    }
    get newerNoncurrentVersions() {
        return this.getStringAttribute('newer_noncurrent_versions');
    }
    set newerNoncurrentVersions(value) {
        this._newerNoncurrentVersions = value;
    }
    resetNewerNoncurrentVersions() {
        this._newerNoncurrentVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get newerNoncurrentVersionsInput() {
        return this._newerNoncurrentVersions;
    }
    get noncurrentDays() {
        return this.getNumberAttribute('noncurrent_days');
    }
    set noncurrentDays(value) {
        this._noncurrentDays = value;
    }
    resetNoncurrentDays() {
        this._noncurrentDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noncurrentDaysInput() {
        return this._noncurrentDays;
    }
}
exports.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference = S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference;
_f = JSII_RTTI_SYMBOL_1;
S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference[_f] = { fqn: "@cdktf/aws-cdk.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference", version: "0.0.0" };
function s3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        newer_noncurrent_versions: cdktf.stringToTerraform(struct.newerNoncurrentVersions),
        noncurrent_days: cdktf.numberToTerraform(struct.noncurrentDays),
        storage_class: cdktf.stringToTerraform(struct.storageClass),
    };
}
exports.s3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionToTerraform = s3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionToTerraform;
function s3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        newer_noncurrent_versions: {
            value: cdktf.stringToHclTerraform(struct.newerNoncurrentVersions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        noncurrent_days: {
            value: cdktf.numberToHclTerraform(struct.noncurrentDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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
exports.s3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionToHclTerraform = s3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionToHclTerraform;
class S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference extends cdktf.ComplexObject {
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
        if (this._newerNoncurrentVersions !== undefined) {
            hasAnyValues = true;
            internalValueResult.newerNoncurrentVersions = this._newerNoncurrentVersions;
        }
        if (this._noncurrentDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.noncurrentDays = this._noncurrentDays;
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
            this.resolvableValue = undefined;
            this._newerNoncurrentVersions = undefined;
            this._noncurrentDays = undefined;
            this._storageClass = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._newerNoncurrentVersions = value.newerNoncurrentVersions;
            this._noncurrentDays = value.noncurrentDays;
            this._storageClass = value.storageClass;
        }
    }
    get newerNoncurrentVersions() {
        return this.getStringAttribute('newer_noncurrent_versions');
    }
    set newerNoncurrentVersions(value) {
        this._newerNoncurrentVersions = value;
    }
    resetNewerNoncurrentVersions() {
        this._newerNoncurrentVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get newerNoncurrentVersionsInput() {
        return this._newerNoncurrentVersions;
    }
    get noncurrentDays() {
        return this.getNumberAttribute('noncurrent_days');
    }
    set noncurrentDays(value) {
        this._noncurrentDays = value;
    }
    resetNoncurrentDays() {
        this._noncurrentDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noncurrentDaysInput() {
        return this._noncurrentDays;
    }
    get storageClass() {
        return this.getStringAttribute('storage_class');
    }
    set storageClass(value) {
        this._storageClass = value;
    }
    // Temporarily expose input value. Use with caution.
    get storageClassInput() {
        return this._storageClass;
    }
}
exports.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference = S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference;
_g = JSII_RTTI_SYMBOL_1;
S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference[_g] = { fqn: "@cdktf/aws-cdk.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference", version: "0.0.0" };
class S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList extends cdktf.ComplexList {
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
        return new S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList = S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList;
_h = JSII_RTTI_SYMBOL_1;
S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList[_h] = { fqn: "@cdktf/aws-cdk.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList", version: "0.0.0" };
function s3BucketLifecycleConfigurationRuleTransitionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        date: cdktf.stringToTerraform(struct.date),
        days: cdktf.numberToTerraform(struct.days),
        storage_class: cdktf.stringToTerraform(struct.storageClass),
    };
}
exports.s3BucketLifecycleConfigurationRuleTransitionToTerraform = s3BucketLifecycleConfigurationRuleTransitionToTerraform;
function s3BucketLifecycleConfigurationRuleTransitionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        date: {
            value: cdktf.stringToHclTerraform(struct.date),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        days: {
            value: cdktf.numberToHclTerraform(struct.days),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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
exports.s3BucketLifecycleConfigurationRuleTransitionToHclTerraform = s3BucketLifecycleConfigurationRuleTransitionToHclTerraform;
class S3BucketLifecycleConfigurationRuleTransitionOutputReference extends cdktf.ComplexObject {
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
        if (this._date !== undefined) {
            hasAnyValues = true;
            internalValueResult.date = this._date;
        }
        if (this._days !== undefined) {
            hasAnyValues = true;
            internalValueResult.days = this._days;
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
            this.resolvableValue = undefined;
            this._date = undefined;
            this._days = undefined;
            this._storageClass = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._date = value.date;
            this._days = value.days;
            this._storageClass = value.storageClass;
        }
    }
    get date() {
        return this.getStringAttribute('date');
    }
    set date(value) {
        this._date = value;
    }
    resetDate() {
        this._date = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dateInput() {
        return this._date;
    }
    get days() {
        return this.getNumberAttribute('days');
    }
    set days(value) {
        this._days = value;
    }
    resetDays() {
        this._days = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get daysInput() {
        return this._days;
    }
    get storageClass() {
        return this.getStringAttribute('storage_class');
    }
    set storageClass(value) {
        this._storageClass = value;
    }
    // Temporarily expose input value. Use with caution.
    get storageClassInput() {
        return this._storageClass;
    }
}
exports.S3BucketLifecycleConfigurationRuleTransitionOutputReference = S3BucketLifecycleConfigurationRuleTransitionOutputReference;
_j = JSII_RTTI_SYMBOL_1;
S3BucketLifecycleConfigurationRuleTransitionOutputReference[_j] = { fqn: "@cdktf/aws-cdk.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionOutputReference", version: "0.0.0" };
class S3BucketLifecycleConfigurationRuleTransitionList extends cdktf.ComplexList {
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
        return new S3BucketLifecycleConfigurationRuleTransitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.S3BucketLifecycleConfigurationRuleTransitionList = S3BucketLifecycleConfigurationRuleTransitionList;
_k = JSII_RTTI_SYMBOL_1;
S3BucketLifecycleConfigurationRuleTransitionList[_k] = { fqn: "@cdktf/aws-cdk.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleTransitionList", version: "0.0.0" };
function s3BucketLifecycleConfigurationRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        prefix: cdktf.stringToTerraform(struct.prefix),
        status: cdktf.stringToTerraform(struct.status),
        abort_incomplete_multipart_upload: s3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform(struct.abortIncompleteMultipartUpload),
        expiration: s3BucketLifecycleConfigurationRuleExpirationToTerraform(struct.expiration),
        filter: s3BucketLifecycleConfigurationRuleFilterToTerraform(struct.filter),
        noncurrent_version_expiration: s3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationToTerraform(struct.noncurrentVersionExpiration),
        noncurrent_version_transition: cdktf.listMapper(s3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionToTerraform, true)(struct.noncurrentVersionTransition),
        transition: cdktf.listMapper(s3BucketLifecycleConfigurationRuleTransitionToTerraform, true)(struct.transition),
    };
}
exports.s3BucketLifecycleConfigurationRuleToTerraform = s3BucketLifecycleConfigurationRuleToTerraform;
function s3BucketLifecycleConfigurationRuleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktf.stringToHclTerraform(struct.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        abort_incomplete_multipart_upload: {
            value: s3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToHclTerraform(struct.abortIncompleteMultipartUpload),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadList",
        },
        expiration: {
            value: s3BucketLifecycleConfigurationRuleExpirationToHclTerraform(struct.expiration),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketLifecycleConfigurationRuleExpirationList",
        },
        filter: {
            value: s3BucketLifecycleConfigurationRuleFilterToHclTerraform(struct.filter),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketLifecycleConfigurationRuleFilterList",
        },
        noncurrent_version_expiration: {
            value: s3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationToHclTerraform(struct.noncurrentVersionExpiration),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationList",
        },
        noncurrent_version_transition: {
            value: cdktf.listMapperHcl(s3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionToHclTerraform, true)(struct.noncurrentVersionTransition),
            isBlock: true,
            type: "set",
            storageClassType: "S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList",
        },
        transition: {
            value: cdktf.listMapperHcl(s3BucketLifecycleConfigurationRuleTransitionToHclTerraform, true)(struct.transition),
            isBlock: true,
            type: "set",
            storageClassType: "S3BucketLifecycleConfigurationRuleTransitionList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketLifecycleConfigurationRuleToHclTerraform = s3BucketLifecycleConfigurationRuleToHclTerraform;
class S3BucketLifecycleConfigurationRuleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // abort_incomplete_multipart_upload - computed: false, optional: true, required: false
        this._abortIncompleteMultipartUpload = new S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference(this, "abort_incomplete_multipart_upload");
        // expiration - computed: false, optional: true, required: false
        this._expiration = new S3BucketLifecycleConfigurationRuleExpirationOutputReference(this, "expiration");
        // filter - computed: false, optional: true, required: false
        this._filter = new S3BucketLifecycleConfigurationRuleFilterOutputReference(this, "filter");
        // noncurrent_version_expiration - computed: false, optional: true, required: false
        this._noncurrentVersionExpiration = new S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference(this, "noncurrent_version_expiration");
        // noncurrent_version_transition - computed: false, optional: true, required: false
        this._noncurrentVersionTransition = new S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList(this, "noncurrent_version_transition", true);
        // transition - computed: false, optional: true, required: false
        this._transition = new S3BucketLifecycleConfigurationRuleTransitionList(this, "transition", true);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._abortIncompleteMultipartUpload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.abortIncompleteMultipartUpload = this._abortIncompleteMultipartUpload?.internalValue;
        }
        if (this._expiration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.expiration = this._expiration?.internalValue;
        }
        if (this._filter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter?.internalValue;
        }
        if (this._noncurrentVersionExpiration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.noncurrentVersionExpiration = this._noncurrentVersionExpiration?.internalValue;
        }
        if (this._noncurrentVersionTransition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.noncurrentVersionTransition = this._noncurrentVersionTransition?.internalValue;
        }
        if (this._transition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transition = this._transition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._prefix = undefined;
            this._status = undefined;
            this._abortIncompleteMultipartUpload.internalValue = undefined;
            this._expiration.internalValue = undefined;
            this._filter.internalValue = undefined;
            this._noncurrentVersionExpiration.internalValue = undefined;
            this._noncurrentVersionTransition.internalValue = undefined;
            this._transition.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._prefix = value.prefix;
            this._status = value.status;
            this._abortIncompleteMultipartUpload.internalValue = value.abortIncompleteMultipartUpload;
            this._expiration.internalValue = value.expiration;
            this._filter.internalValue = value.filter;
            this._noncurrentVersionExpiration.internalValue = value.noncurrentVersionExpiration;
            this._noncurrentVersionTransition.internalValue = value.noncurrentVersionTransition;
            this._transition.internalValue = value.transition;
        }
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    set prefix(value) {
        this._prefix = value;
    }
    resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prefixInput() {
        return this._prefix;
    }
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
    get abortIncompleteMultipartUpload() {
        return this._abortIncompleteMultipartUpload;
    }
    putAbortIncompleteMultipartUpload(value) {
        this._abortIncompleteMultipartUpload.internalValue = value;
    }
    resetAbortIncompleteMultipartUpload() {
        this._abortIncompleteMultipartUpload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get abortIncompleteMultipartUploadInput() {
        return this._abortIncompleteMultipartUpload.internalValue;
    }
    get expiration() {
        return this._expiration;
    }
    putExpiration(value) {
        this._expiration.internalValue = value;
    }
    resetExpiration() {
        this._expiration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expirationInput() {
        return this._expiration.internalValue;
    }
    get filter() {
        return this._filter;
    }
    putFilter(value) {
        this._filter.internalValue = value;
    }
    resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter.internalValue;
    }
    get noncurrentVersionExpiration() {
        return this._noncurrentVersionExpiration;
    }
    putNoncurrentVersionExpiration(value) {
        this._noncurrentVersionExpiration.internalValue = value;
    }
    resetNoncurrentVersionExpiration() {
        this._noncurrentVersionExpiration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noncurrentVersionExpirationInput() {
        return this._noncurrentVersionExpiration.internalValue;
    }
    get noncurrentVersionTransition() {
        return this._noncurrentVersionTransition;
    }
    putNoncurrentVersionTransition(value) {
        this._noncurrentVersionTransition.internalValue = value;
    }
    resetNoncurrentVersionTransition() {
        this._noncurrentVersionTransition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noncurrentVersionTransitionInput() {
        return this._noncurrentVersionTransition.internalValue;
    }
    get transition() {
        return this._transition;
    }
    putTransition(value) {
        this._transition.internalValue = value;
    }
    resetTransition() {
        this._transition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get transitionInput() {
        return this._transition.internalValue;
    }
}
exports.S3BucketLifecycleConfigurationRuleOutputReference = S3BucketLifecycleConfigurationRuleOutputReference;
_l = JSII_RTTI_SYMBOL_1;
S3BucketLifecycleConfigurationRuleOutputReference[_l] = { fqn: "@cdktf/aws-cdk.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleOutputReference", version: "0.0.0" };
class S3BucketLifecycleConfigurationRuleList extends cdktf.ComplexList {
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
        return new S3BucketLifecycleConfigurationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.S3BucketLifecycleConfigurationRuleList = S3BucketLifecycleConfigurationRuleList;
_m = JSII_RTTI_SYMBOL_1;
S3BucketLifecycleConfigurationRuleList[_m] = { fqn: "@cdktf/aws-cdk.s3BucketLifecycleConfiguration.S3BucketLifecycleConfigurationRuleList", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_bucket_lifecycle_configuration aws_s3_bucket_lifecycle_configuration}
*/
class S3BucketLifecycleConfiguration extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a S3BucketLifecycleConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketLifecycleConfiguration to import
    * @param importFromId The id of the existing S3BucketLifecycleConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_bucket_lifecycle_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketLifecycleConfiguration to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_bucket_lifecycle_configuration", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_bucket_lifecycle_configuration aws_s3_bucket_lifecycle_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketLifecycleConfigurationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_s3_bucket_lifecycle_configuration',
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
        // rule - computed: false, optional: false, required: true
        this._rule = new S3BucketLifecycleConfigurationRuleList(this, "rule", false);
        this._bucket = config.bucket;
        this._expectedBucketOwner = config.expectedBucketOwner;
        this._id = config.id;
        this._rule.internalValue = config.rule;
    }
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    set bucket(value) {
        this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketInput() {
        return this._bucket;
    }
    get expectedBucketOwner() {
        return this.getStringAttribute('expected_bucket_owner');
    }
    set expectedBucketOwner(value) {
        this._expectedBucketOwner = value;
    }
    resetExpectedBucketOwner() {
        this._expectedBucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expectedBucketOwnerInput() {
        return this._expectedBucketOwner;
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
    get rule() {
        return this._rule;
    }
    putRule(value) {
        this._rule.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get ruleInput() {
        return this._rule.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            bucket: cdktf.stringToTerraform(this._bucket),
            expected_bucket_owner: cdktf.stringToTerraform(this._expectedBucketOwner),
            id: cdktf.stringToTerraform(this._id),
            rule: cdktf.listMapper(s3BucketLifecycleConfigurationRuleToTerraform, true)(this._rule.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            bucket: {
                value: cdktf.stringToHclTerraform(this._bucket),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            expected_bucket_owner: {
                value: cdktf.stringToHclTerraform(this._expectedBucketOwner),
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
            rule: {
                value: cdktf.listMapperHcl(s3BucketLifecycleConfigurationRuleToHclTerraform, true)(this._rule.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "S3BucketLifecycleConfigurationRuleList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.S3BucketLifecycleConfiguration = S3BucketLifecycleConfiguration;
_o = JSII_RTTI_SYMBOL_1;
S3BucketLifecycleConfiguration[_o] = { fqn: "@cdktf/aws-cdk.s3BucketLifecycleConfiguration.S3BucketLifecycleConfiguration", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
S3BucketLifecycleConfiguration.tfResourceType = "aws_s3_bucket_lifecycle_configuration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3MzLWJ1Y2tldC1saWZlY3ljbGUtY29uZmlndXJhdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQWtDL0IsU0FBZ0IsMkVBQTJFLENBQUMsTUFBMko7SUFDclAsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsbUJBQW1CLENBQUM7S0FDNUUsQ0FBQTtBQUNILENBQUM7QUFSRCxrS0FRQztBQUdELFNBQWdCLDhFQUE4RSxDQUFDLE1BQTJKO0lBQ3hQLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHO1FBQ1oscUJBQXFCLEVBQUU7WUFDckIsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsbUJBQW1CLENBQUM7WUFDOUQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7S0FDRixDQUFDO0lBRUYsOEJBQThCO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBaEJELHdLQWdCQztBQUVELE1BQWEsK0VBQWdGLFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFHdEg7OztNQUdFO0lBQ0YsWUFBbUIsaUJBQTZDLEVBQUUsa0JBQTBCO1FBQzFGLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFQakQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFROUIsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLG9CQUFvQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzVDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQ3RFLENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBbUY7UUFDMUcsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQztRQUN4QyxDQUFDO2FBQ0ksQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsbUJBQW1CLENBQUM7UUFDeEQsQ0FBQztJQUNILENBQUM7SUFJRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCxJQUFXLG1CQUFtQixDQUFDLEtBQWE7UUFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBQ00sd0JBQXdCO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDOztBQTlDSCwwS0ErQ0M7OztBQWdCRCxTQUFnQix1REFBdUQsQ0FBQyxNQUFtSDtJQUN6TCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyw0QkFBNEIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLHlCQUF5QixDQUFDO0tBQzFGLENBQUE7QUFDSCxDQUFDO0FBVkQsMEhBVUM7QUFHRCxTQUFnQiwwREFBMEQsQ0FBQyxNQUFtSDtJQUM1TCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztZQUMvQyxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztZQUMvQyxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELDRCQUE0QixFQUFFO1lBQzVCLEtBQUssRUFBRSxLQUFLLENBQUMscUJBQXFCLENBQUMsTUFBTyxDQUFDLHlCQUF5QixDQUFDO1lBQ3JFLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxTQUFTO1NBQzVCO0tBQ0YsQ0FBQztJQUVGLDhCQUE4QjtJQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDNUgsQ0FBQztBQTVCRCxnSUE0QkM7QUFFRCxNQUFhLDJEQUE0RCxTQUFRLEtBQUssQ0FBQyxhQUFhO0lBR2xHOzs7TUFHRTtJQUNGLFlBQW1CLGlCQUE2QyxFQUFFLGtCQUEwQjtRQUMxRixLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBUGpELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBUTlCLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDN0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzdCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEMsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLDBCQUEwQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ2xELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDO1FBQ2xGLENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBK0Q7UUFDdEYsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDdkIsSUFBSSxDQUFDLDBCQUEwQixHQUFHLFNBQVMsQ0FBQztRQUM5QyxDQUFDO2FBQ0ksQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLDBCQUEwQixHQUFHLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztRQUNwRSxDQUFDO0lBQ0gsQ0FBQztJQUlELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBSUQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsSUFBVyx5QkFBeUIsQ0FBQyxLQUFrQztRQUNyRSxJQUFJLENBQUMsMEJBQTBCLEdBQUcsS0FBSyxDQUFDO0lBQzFDLENBQUM7SUFDTSw4QkFBOEI7UUFDbkMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLFNBQVMsQ0FBQztJQUM5QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsOEJBQThCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDO0lBQ3pDLENBQUM7O0FBMUZILGtJQTJGQzs7O0FBb0JELFNBQWdCLHNEQUFzRCxDQUFDLE1BQWlIO0lBQ3RMLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCx3QkFBd0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDO1FBQ2hGLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7UUFDMUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9DLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7S0FDOUQsQ0FBQTtBQUNILENBQUM7QUFYRCx3SEFXQztBQUdELFNBQWdCLHlEQUF5RCxDQUFDLE1BQWlIO0lBQ3pMLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHO1FBQ1osd0JBQXdCLEVBQUU7WUFDeEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMscUJBQXFCLENBQUM7WUFDaEUsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxxQkFBcUIsRUFBRTtZQUNyQixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUM3RCxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztZQUNqRCxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7WUFDcEUsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsS0FBSztZQUNYLGdCQUFnQixFQUFFLFdBQVc7U0FDOUI7S0FDRixDQUFDO0lBRUYsOEJBQThCO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBbENELDhIQWtDQztBQUVELE1BQWEsMERBQTJELFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFHakc7OztNQUdFO0lBQ0YsWUFBbUIsaUJBQTZDLEVBQUUsa0JBQTBCO1FBQzFGLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFQakQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFROUIsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLHNCQUFzQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzlDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQzFFLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUMzQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNwRSxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQy9CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUMsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM3QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBOEQ7UUFDckYsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFNBQVMsQ0FBQztZQUN4QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLENBQUM7YUFDSSxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztZQUMxRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1lBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFJRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDRCxJQUFXLHFCQUFxQixDQUFDLEtBQWE7UUFDNUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBQ00sMEJBQTBCO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDO0lBSUQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsSUFBVyxrQkFBa0IsQ0FBQyxLQUFhO1FBQ3pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUNNLHVCQUF1QjtRQUM1QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUlELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxJQUFXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWdDO1FBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7O0FBaEhILGdJQWlIQzs7O0FBWUQsU0FBZ0Isc0RBQXNELENBQUMsTUFBaUg7SUFDdEwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFURCx3SEFTQztBQUdELFNBQWdCLHlEQUF5RCxDQUFDLE1BQWlIO0lBQ3pMLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHO1FBQ1osR0FBRyxFQUFFO1lBQ0gsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1lBQzlDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2hELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO0tBQ0YsQ0FBQztJQUVGLDhCQUE4QjtJQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDNUgsQ0FBQztBQXRCRCw4SEFzQkM7QUFFRCxNQUFhLDBEQUEyRCxTQUFRLEtBQUssQ0FBQyxhQUFhO0lBR2pHOzs7TUFHRTtJQUNGLFlBQW1CLGlCQUE2QyxFQUFFLGtCQUEwQjtRQUMxRixLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBUGpELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBUTlCLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDNUIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzlCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUMsQ0FBQztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUE4RDtRQUNyRixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBQ0ksQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFJRCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsSUFBVyxHQUFHLENBQUMsS0FBYTtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUlELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOztBQTlESCxnSUErREM7OztBQTRCRCxTQUFnQixtREFBbUQsQ0FBQyxNQUEyRztJQUM3SyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUNoRixxQkFBcUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO1FBQzFFLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxHQUFHLEVBQUUsc0RBQXNELENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN4RSxHQUFHLEVBQUUsc0RBQXNELENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztLQUN6RSxDQUFBO0FBQ0gsQ0FBQztBQVpELGtIQVlDO0FBR0QsU0FBZ0Isc0RBQXNELENBQUMsTUFBMkc7SUFDaEwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWix3QkFBd0IsRUFBRTtZQUN4QixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztZQUNoRSxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELHFCQUFxQixFQUFFO1lBQ3JCLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO1lBQzdELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1lBQ2pELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsS0FBSyxFQUFFLHlEQUF5RCxDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7WUFDN0UsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsTUFBTTtZQUNaLGdCQUFnQixFQUFFLGlEQUFpRDtTQUNwRTtRQUNELEdBQUcsRUFBRTtZQUNILEtBQUssRUFBRSx5REFBeUQsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1lBQzdFLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixnQkFBZ0IsRUFBRSxpREFBaUQ7U0FDcEU7S0FDRixDQUFDO0lBRUYsOEJBQThCO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBeENELHdIQXdDQztBQUVELE1BQWEsdURBQXdELFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFHOUY7OztNQUdFO0lBQ0YsWUFBbUIsaUJBQTZDLEVBQUUsa0JBQTBCO1FBQzFGLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFQakQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUF1RzlCLHlEQUF5RDtRQUNqRCxTQUFJLEdBQUcsSUFBSSwwREFBMEQsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFlM0YseURBQXlEO1FBQ2pELFNBQUksR0FBRyxJQUFJLDBEQUEwRCxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQWhIM0YsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLHNCQUFzQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzlDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQzFFLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUMzQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNwRSxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQy9CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUMsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDM0MsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUM7UUFDckQsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDM0MsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUM7UUFDckQsQ0FBQztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUEyRDtRQUNsRixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsU0FBUyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUN0QyxDQUFDO2FBQ0ksQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7WUFDMUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztZQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBSUQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsSUFBVyxxQkFBcUIsQ0FBQyxLQUFhO1FBQzVDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUNNLDBCQUEwQjtRQUMvQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsU0FBUyxDQUFDO0lBQzFDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQztJQUlELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELElBQVcsa0JBQWtCLENBQUMsS0FBYTtRQUN6QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFDTSx1QkFBdUI7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQztJQUN2QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7SUFJRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ00sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUlELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ00sTUFBTSxDQUFDLEtBQWtEO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBQ00sUUFBUTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ2pDLENBQUM7SUFJRCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNNLE1BQU0sQ0FBQyxLQUFrRDtRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUNNLFFBQVE7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNqQyxDQUFDOztBQXRJSCwwSEF1SUM7OztBQVlELFNBQWdCLHdFQUF3RSxDQUFDLE1BQXFKO0lBQzVPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCx5QkFBeUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHVCQUF1QixDQUFDO1FBQ25GLGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztLQUNqRSxDQUFBO0FBQ0gsQ0FBQztBQVRELDRKQVNDO0FBR0QsU0FBZ0IsMkVBQTJFLENBQUMsTUFBcUo7SUFDL08sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWix5QkFBeUIsRUFBRTtZQUN6QixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyx1QkFBdUIsQ0FBQztZQUNsRSxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELGVBQWUsRUFBRTtZQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztZQUN6RCxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtLQUNGLENBQUM7SUFFRiw4QkFBOEI7SUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzVILENBQUM7QUF0QkQsa0tBc0JDO0FBRUQsTUFBYSw0RUFBNkUsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUduSDs7O01BR0U7SUFDRixZQUFtQixpQkFBNkMsRUFBRSxrQkFBMEI7UUFDMUYsS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQVBqRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQVE5QixDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDaEQsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUM7UUFDOUUsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN2QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzVELENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBZ0Y7UUFDdkcsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztZQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztRQUNuQyxDQUFDO2FBQ0ksQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUMsdUJBQXVCLENBQUM7WUFDOUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDO0lBSUQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0QsSUFBVyx1QkFBdUIsQ0FBQyxLQUFhO1FBQzlDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUNNLDRCQUE0QjtRQUNqQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDO0lBQzVDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFDdkMsQ0FBQztJQUlELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxJQUFXLGNBQWMsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDTSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7QUFwRUgsb0tBcUVDOzs7QUFnQkQsU0FBZ0Isd0VBQXdFLENBQUMsTUFBMEY7SUFDakwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsdUJBQXVCLENBQUM7UUFDbkYsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2hFLGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztLQUM3RCxDQUFBO0FBQ0gsQ0FBQztBQVZELDRKQVVDO0FBR0QsU0FBZ0IsMkVBQTJFLENBQUMsTUFBMEY7SUFDcEwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWix5QkFBeUIsRUFBRTtZQUN6QixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyx1QkFBdUIsQ0FBQztZQUNsRSxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELGVBQWUsRUFBRTtZQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztZQUN6RCxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELGFBQWEsRUFBRTtZQUNiLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztZQUN2RCxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtLQUNGLENBQUM7SUFFRiw4QkFBOEI7SUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzVILENBQUM7QUE1QkQsa0tBNEJDO0FBRUQsTUFBYSw0RUFBNkUsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUluSDs7Ozs7TUFLRTtJQUNGLFlBQW1CLGlCQUE2QyxFQUFFLGtCQUEwQixFQUFFLGtCQUEwQixFQUFFLHNCQUErQjtRQUN2SixLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQVZuRixrQkFBYSxHQUFHLEtBQUssQ0FBQztJQVc5QixDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyx3QkFBd0IsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNoRCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztRQUM5RSxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3ZDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDNUQsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNyQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3hELENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBb0c7UUFDM0gsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztZQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUNqQyxDQUFDO2FBQ0ksSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7YUFDSSxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztZQUM5RCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQzFDLENBQUM7SUFDSCxDQUFDO0lBSUQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0QsSUFBVyx1QkFBdUIsQ0FBQyxLQUFhO1FBQzlDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUNNLDRCQUE0QjtRQUNqQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDO0lBQzVDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFDdkMsQ0FBQztJQUlELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxJQUFXLGNBQWMsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDTSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUlELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOztBQW5HSCxvS0FvR0M7OztBQUVELE1BQWEsaUVBQWtFLFNBQVEsS0FBSyxDQUFDLFdBQVc7SUFHdEc7Ozs7TUFJRTtJQUNGLFlBQXNCLGlCQUE2QyxFQUFZLGtCQUEwQixFQUFZLFFBQWlCO1FBQ3BJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQURsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRCO1FBQVksdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFRO1FBQVksYUFBUSxHQUFSLFFBQVEsQ0FBUztJQUV0SSxDQUFDO0lBRUQ7O01BRUU7SUFDSyxHQUFHLENBQUMsS0FBYTtRQUN0QixPQUFPLElBQUksNEVBQTRFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pLLENBQUM7O0FBakJILDhJQWtCQzs7O0FBZ0JELFNBQWdCLHVEQUF1RCxDQUFDLE1BQXlFO0lBQy9JLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztLQUM3RCxDQUFBO0FBQ0gsQ0FBQztBQVZELDBIQVVDO0FBR0QsU0FBZ0IsMERBQTBELENBQUMsTUFBeUU7SUFDbEosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWixJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7WUFDL0MsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7WUFDL0MsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxhQUFhLEVBQUU7WUFDYixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7WUFDdkQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7S0FDRixDQUFDO0lBRUYsOEJBQThCO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBNUJELGdJQTRCQztBQUVELE1BQWEsMkRBQTRELFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFJbEc7Ozs7O01BS0U7SUFDRixZQUFtQixpQkFBNkMsRUFBRSxrQkFBMEIsRUFBRSxrQkFBMEIsRUFBRSxzQkFBK0I7UUFDdkosS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFWbkYsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFXOUIsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDOUIsQ0FBQztRQUNELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzdCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEMsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM3QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDckMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN4RCxDQUFDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQW1GO1FBQzFHLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQ2pDLENBQUM7YUFDSSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQzthQUNJLENBQUM7WUFDSixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUMxQyxDQUFDO0lBQ0gsQ0FBQztJQUlELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBSUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxJQUFXLFlBQVksQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7O0FBbkdILGtJQW9HQzs7O0FBRUQsTUFBYSxnREFBaUQsU0FBUSxLQUFLLENBQUMsV0FBVztJQUdyRjs7OztNQUlFO0lBQ0YsWUFBc0IsaUJBQTZDLEVBQVksa0JBQTBCLEVBQVksUUFBaUI7UUFDcEksS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBRGxDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEI7UUFBWSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVE7UUFBWSxhQUFRLEdBQVIsUUFBUSxDQUFTO0lBRXRJLENBQUM7SUFFRDs7TUFFRTtJQUNLLEdBQUcsQ0FBQyxLQUFhO1FBQ3RCLE9BQU8sSUFBSSwyREFBMkQsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEosQ0FBQzs7QUFqQkgsNEdBa0JDOzs7QUF1REQsU0FBZ0IsNkNBQTZDLENBQUMsTUFBK0Q7SUFDM0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEVBQUUsQ0FBQztRQUN2QyxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDL0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9DLGlDQUFpQyxFQUFFLDJFQUEyRSxDQUFDLE1BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUN0SixVQUFVLEVBQUUsdURBQXVELENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RixNQUFNLEVBQUUsbURBQW1ELENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMzRSw2QkFBNkIsRUFBRSx3RUFBd0UsQ0FBQyxNQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDNUksNkJBQTZCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx3RUFBd0UsRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDcEssVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsdURBQXVELEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUNoSCxDQUFBO0FBQ0gsQ0FBQztBQWhCRCxzR0FnQkM7QUFHRCxTQUFnQixnREFBZ0QsQ0FBQyxNQUErRDtJQUM5SCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLEVBQUUsRUFBRTtZQUNGLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLEVBQUUsQ0FBQztZQUM3QyxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztZQUNqRCxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztZQUNqRCxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELGlDQUFpQyxFQUFFO1lBQ2pDLEtBQUssRUFBRSw4RUFBOEUsQ0FBQyxNQUFPLENBQUMsOEJBQThCLENBQUM7WUFDN0gsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsTUFBTTtZQUNaLGdCQUFnQixFQUFFLHNFQUFzRTtTQUN6RjtRQUNELFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSwwREFBMEQsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3JGLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixnQkFBZ0IsRUFBRSxrREFBa0Q7U0FDckU7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsc0RBQXNELENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztZQUM3RSxPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxNQUFNO1lBQ1osZ0JBQWdCLEVBQUUsOENBQThDO1NBQ2pFO1FBQ0QsNkJBQTZCLEVBQUU7WUFDN0IsS0FBSyxFQUFFLDJFQUEyRSxDQUFDLE1BQU8sQ0FBQywyQkFBMkIsQ0FBQztZQUN2SCxPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxNQUFNO1lBQ1osZ0JBQWdCLEVBQUUsbUVBQW1FO1NBQ3RGO1FBQ0QsNkJBQTZCLEVBQUU7WUFDN0IsS0FBSyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsMkVBQTJFLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTyxDQUFDLDJCQUEyQixDQUFDO1lBQ2xKLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLEtBQUs7WUFDWCxnQkFBZ0IsRUFBRSxtRUFBbUU7U0FDdEY7UUFDRCxVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQywwREFBMEQsRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1lBQ2hILE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLEtBQUs7WUFDWCxnQkFBZ0IsRUFBRSxrREFBa0Q7U0FDckU7S0FDRixDQUFDO0lBRUYsOEJBQThCO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBaEVELDRHQWdFQztBQUVELE1BQWEsaURBQWtELFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFJeEY7Ozs7O01BS0U7SUFDRixZQUFtQixpQkFBNkMsRUFBRSxrQkFBMEIsRUFBRSxrQkFBMEIsRUFBRSxzQkFBK0I7UUFDdkosS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFWbkYsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFxSTlCLHVGQUF1RjtRQUMvRSxvQ0FBK0IsR0FBRyxJQUFJLCtFQUErRSxDQUFDLElBQUksRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBZXpLLGdFQUFnRTtRQUN4RCxnQkFBVyxHQUFHLElBQUksMkRBQTJELENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBZTFHLDREQUE0RDtRQUNwRCxZQUFPLEdBQUcsSUFBSSx1REFBdUQsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFlOUYsbUZBQW1GO1FBQzNFLGlDQUE0QixHQUFHLElBQUksNEVBQTRFLENBQUMsSUFBSSxFQUFFLCtCQUErQixDQUFDLENBQUM7UUFlL0osbUZBQW1GO1FBQzNFLGlDQUE0QixHQUFHLElBQUksaUVBQWlFLENBQUMsSUFBSSxFQUFFLCtCQUErQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBZTFKLGdFQUFnRTtRQUN4RCxnQkFBVyxHQUFHLElBQUksZ0RBQWdELENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQTNNckcsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDOUIsQ0FBQztRQUNELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzNCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEMsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUMvQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVDLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDL0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsK0JBQStCLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3RFLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsOEJBQThCLEdBQUcsSUFBSSxDQUFDLCtCQUErQixFQUFFLGFBQWEsQ0FBQztRQUMzRyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNsRCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLGFBQWEsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM5QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQztRQUMzRCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsNEJBQTRCLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ25FLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixFQUFFLGFBQWEsQ0FBQztRQUNyRyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsNEJBQTRCLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ25FLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixFQUFFLGFBQWEsQ0FBQztRQUNyRyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNsRCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXlFO1FBQ2hHLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQy9ELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDdkMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDNUQsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQzdDLENBQUM7YUFDSSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQzthQUNJLENBQUM7WUFDSixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUM1QixJQUFJLENBQUMsK0JBQStCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQztZQUMxRixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDMUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsMkJBQTJCLENBQUM7WUFDcEYsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsMkJBQTJCLENBQUM7WUFDcEYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNwRCxDQUFDO0lBQ0gsQ0FBQztJQUlELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFXLEVBQUUsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBSUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFJRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUlELElBQVcsOEJBQThCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLCtCQUErQixDQUFDO0lBQzlDLENBQUM7SUFDTSxpQ0FBaUMsQ0FBQyxLQUF1RTtRQUM5RyxJQUFJLENBQUMsK0JBQStCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3RCxDQUFDO0lBQ00sbUNBQW1DO1FBQ3hDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pFLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxtQ0FBbUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsK0JBQStCLENBQUMsYUFBYSxDQUFDO0lBQzVELENBQUM7SUFJRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDTSxhQUFhLENBQUMsS0FBbUQ7UUFDdEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3pDLENBQUM7SUFDTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUM3QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO0lBQ3hDLENBQUM7SUFJRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUNNLFNBQVMsQ0FBQyxLQUErQztRQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUNNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDcEMsQ0FBQztJQUlELElBQVcsMkJBQTJCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDO0lBQzNDLENBQUM7SUFDTSw4QkFBOEIsQ0FBQyxLQUFvRTtRQUN4RyxJQUFJLENBQUMsNEJBQTRCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMxRCxDQUFDO0lBQ00sZ0NBQWdDO1FBQ3JDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzlELENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxnQ0FBZ0M7UUFDekMsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUMsYUFBYSxDQUFDO0lBQ3pELENBQUM7SUFJRCxJQUFXLDJCQUEyQjtRQUNwQyxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztJQUMzQyxDQUFDO0lBQ00sOEJBQThCLENBQUMsS0FBMEY7UUFDOUgsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDMUQsQ0FBQztJQUNNLGdDQUFnQztRQUNyQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUM5RCxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZ0NBQWdDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsQ0FBQztJQUN6RCxDQUFDO0lBSUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ00sYUFBYSxDQUFDLEtBQXlFO1FBQzVGLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN6QyxDQUFDO0lBQ00sZUFBZTtRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDN0MsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztJQUN4QyxDQUFDOztBQXBPSCw4R0FxT0M7OztBQUVELE1BQWEsc0NBQXVDLFNBQVEsS0FBSyxDQUFDLFdBQVc7SUFHM0U7Ozs7TUFJRTtJQUNGLFlBQXNCLGlCQUE2QyxFQUFZLGtCQUEwQixFQUFZLFFBQWlCO1FBQ3BJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQURsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRCO1FBQVksdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFRO1FBQVksYUFBUSxHQUFSLFFBQVEsQ0FBUztJQUV0SSxDQUFDO0lBRUQ7O01BRUU7SUFDSyxHQUFHLENBQUMsS0FBYTtRQUN0QixPQUFPLElBQUksaURBQWlELENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RJLENBQUM7O0FBakJILHdGQWtCQzs7O0FBRUQ7O0VBRUU7QUFDRixNQUFhLDhCQUErQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPekUsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakI7Ozs7OztNQU1FO0lBQ0ssTUFBTSxDQUFDLHVCQUF1QixDQUFDLEtBQWdCLEVBQUUsVUFBa0IsRUFBRSxZQUFvQixFQUFFLFFBQWtDO1FBQzlILE9BQU8sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFFLHFCQUFxQixFQUFFLHVDQUF1QyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMvSixDQUFDO0lBRUwsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBNEM7UUFDM0YsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSx1Q0FBdUM7WUFDOUQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2dCQUNuQixlQUFlLEVBQUUsUUFBUTtnQkFDekIseUJBQXlCLEVBQUUsUUFBUTthQUNwQztZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixZQUFZLEVBQUUsTUFBTSxDQUFDLFlBQVk7WUFDakMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVO1lBQzdCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztTQUN4QixDQUFDLENBQUM7UUF3REwsMERBQTBEO1FBQ2xELFVBQUssR0FBRyxJQUFJLHNDQUFzQyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUF4RDlFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3pDLENBQUM7SUFRRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUlELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELElBQVcsbUJBQW1CLENBQUMsS0FBYTtRQUMxQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFDTSx3QkFBd0I7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7SUFJRCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsSUFBVyxFQUFFLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBQ00sT0FBTztRQUNaLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDTSxPQUFPLENBQUMsS0FBK0Q7UUFDNUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7SUFDbEMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDekUsRUFBRSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3JDLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDZDQUE2QyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1NBQ3RHLENBQUM7SUFDSixDQUFDO0lBRVMsdUJBQXVCO1FBQy9CLE1BQU0sS0FBSyxHQUFHO1lBQ1osTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDL0MsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELHFCQUFxQixFQUFFO2dCQUNyQixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztnQkFDNUQsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELEVBQUUsRUFBRTtnQkFDRixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQzNDLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsZ0RBQWdELEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7Z0JBQzVHLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLGdCQUFnQixFQUFFLHdDQUF3QzthQUMzRDtTQUNGLENBQUM7UUFFRiw4QkFBOEI7UUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUUsQ0FBQyxDQUFBO0lBQzVILENBQUM7O0FBL0pILHdFQWdLQzs7O0FBOUpDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csNkNBQWMsR0FBRyx1Q0FBdUMsQUFBMUMsQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfbGlmZWN5Y2xlX2NvbmZpZ3VyYXRpb25cbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2xpZmVjeWNsZV9jb25maWd1cmF0aW9uI2J1Y2tldCBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb24jYnVja2V0fVxuICAqL1xuICByZWFkb25seSBidWNrZXQ6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2xpZmVjeWNsZV9jb25maWd1cmF0aW9uI2V4cGVjdGVkX2J1Y2tldF9vd25lciBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb24jZXhwZWN0ZWRfYnVja2V0X293bmVyfVxuICAqL1xuICByZWFkb25seSBleHBlY3RlZEJ1Y2tldE93bmVyPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfbGlmZWN5Y2xlX2NvbmZpZ3VyYXRpb24jaWQgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uI2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBydWxlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfbGlmZWN5Y2xlX2NvbmZpZ3VyYXRpb24jcnVsZSBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb24jcnVsZX1cbiAgKi9cbiAgcmVhZG9ubHkgcnVsZTogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZVtdIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVBYm9ydEluY29tcGxldGVNdWx0aXBhcnRVcGxvYWQge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfbGlmZWN5Y2xlX2NvbmZpZ3VyYXRpb24jZGF5c19hZnRlcl9pbml0aWF0aW9uIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbiNkYXlzX2FmdGVyX2luaXRpYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGRheXNBZnRlckluaXRpYXRpb24/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlQWJvcnRJbmNvbXBsZXRlTXVsdGlwYXJ0VXBsb2FkVG9UZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUFib3J0SW5jb21wbGV0ZU11bHRpcGFydFVwbG9hZE91dHB1dFJlZmVyZW5jZSB8IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVBYm9ydEluY29tcGxldGVNdWx0aXBhcnRVcGxvYWQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGF5c19hZnRlcl9pbml0aWF0aW9uOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmRheXNBZnRlckluaXRpYXRpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVBYm9ydEluY29tcGxldGVNdWx0aXBhcnRVcGxvYWRUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlQWJvcnRJbmNvbXBsZXRlTXVsdGlwYXJ0VXBsb2FkT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUFib3J0SW5jb21wbGV0ZU11bHRpcGFydFVwbG9hZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZGF5c19hZnRlcl9pbml0aWF0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kYXlzQWZ0ZXJJbml0aWF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVBYm9ydEluY29tcGxldGVNdWx0aXBhcnRVcGxvYWRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVBYm9ydEluY29tcGxldGVNdWx0aXBhcnRVcGxvYWQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RheXNBZnRlckluaXRpYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGF5c0FmdGVySW5pdGlhdGlvbiA9IHRoaXMuX2RheXNBZnRlckluaXRpYXRpb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlQWJvcnRJbmNvbXBsZXRlTXVsdGlwYXJ0VXBsb2FkIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGF5c0FmdGVySW5pdGlhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGF5c0FmdGVySW5pdGlhdGlvbiA9IHZhbHVlLmRheXNBZnRlckluaXRpYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gZGF5c19hZnRlcl9pbml0aWF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RheXNBZnRlckluaXRpYXRpb24/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGRheXNBZnRlckluaXRpYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkYXlzX2FmdGVyX2luaXRpYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRheXNBZnRlckluaXRpYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2RheXNBZnRlckluaXRpYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYXlzQWZ0ZXJJbml0aWF0aW9uKCkge1xuICAgIHRoaXMuX2RheXNBZnRlckluaXRpYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRheXNBZnRlckluaXRpYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF5c0FmdGVySW5pdGlhdGlvbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRXhwaXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9saWZlY3ljbGVfY29uZmlndXJhdGlvbiNkYXRlIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbiNkYXRlfVxuICAqL1xuICByZWFkb25seSBkYXRlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfbGlmZWN5Y2xlX2NvbmZpZ3VyYXRpb24jZGF5cyBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb24jZGF5c31cbiAgKi9cbiAgcmVhZG9ubHkgZGF5cz86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2xpZmVjeWNsZV9jb25maWd1cmF0aW9uI2V4cGlyZWRfb2JqZWN0X2RlbGV0ZV9tYXJrZXIgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uI2V4cGlyZWRfb2JqZWN0X2RlbGV0ZV9tYXJrZXJ9XG4gICovXG4gIHJlYWRvbmx5IGV4cGlyZWRPYmplY3REZWxldGVNYXJrZXI/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRXhwaXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVFeHBpcmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUV4cGlyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRlKSxcbiAgICBkYXlzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmRheXMpLFxuICAgIGV4cGlyZWRfb2JqZWN0X2RlbGV0ZV9tYXJrZXI6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmV4cGlyZWRPYmplY3REZWxldGVNYXJrZXIpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVFeHBpcmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUV4cGlyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRXhwaXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZGF0ZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGF0ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGF5czoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGF5cyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgZXhwaXJlZF9vYmplY3RfZGVsZXRlX21hcmtlcjoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmV4cGlyZWRPYmplY3REZWxldGVNYXJrZXIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVFeHBpcmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRXhwaXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kYXRlID0gdGhpcy5fZGF0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RheXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGF5cyA9IHRoaXMuX2RheXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9leHBpcmVkT2JqZWN0RGVsZXRlTWFya2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmV4cGlyZWRPYmplY3REZWxldGVNYXJrZXIgPSB0aGlzLl9leHBpcmVkT2JqZWN0RGVsZXRlTWFya2VyO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUV4cGlyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kYXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGF5cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2V4cGlyZWRPYmplY3REZWxldGVNYXJrZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RhdGUgPSB2YWx1ZS5kYXRlO1xuICAgICAgdGhpcy5fZGF5cyA9IHZhbHVlLmRheXM7XG4gICAgICB0aGlzLl9leHBpcmVkT2JqZWN0RGVsZXRlTWFya2VyID0gdmFsdWUuZXhwaXJlZE9iamVjdERlbGV0ZU1hcmtlcjtcbiAgICB9XG4gIH1cblxuICAvLyBkYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGF0ZSgpIHtcbiAgICB0aGlzLl9kYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGU7XG4gIH1cblxuICAvLyBkYXlzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RheXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGRheXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkYXlzJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYXlzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kYXlzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGF5cygpIHtcbiAgICB0aGlzLl9kYXlzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXlzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RheXM7XG4gIH1cblxuICAvLyBleHBpcmVkX29iamVjdF9kZWxldGVfbWFya2VyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXhwaXJlZE9iamVjdERlbGV0ZU1hcmtlcj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZXhwaXJlZE9iamVjdERlbGV0ZU1hcmtlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdleHBpcmVkX29iamVjdF9kZWxldGVfbWFya2VyJyk7XG4gIH1cbiAgcHVibGljIHNldCBleHBpcmVkT2JqZWN0RGVsZXRlTWFya2VyKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9leHBpcmVkT2JqZWN0RGVsZXRlTWFya2VyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXhwaXJlZE9iamVjdERlbGV0ZU1hcmtlcigpIHtcbiAgICB0aGlzLl9leHBpcmVkT2JqZWN0RGVsZXRlTWFya2VyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleHBpcmVkT2JqZWN0RGVsZXRlTWFya2VySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGlyZWRPYmplY3REZWxldGVNYXJrZXI7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUZpbHRlckFuZCB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9saWZlY3ljbGVfY29uZmlndXJhdGlvbiNvYmplY3Rfc2l6ZV9ncmVhdGVyX3RoYW4gUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uI29iamVjdF9zaXplX2dyZWF0ZXJfdGhhbn1cbiAgKi9cbiAgcmVhZG9ubHkgb2JqZWN0U2l6ZUdyZWF0ZXJUaGFuPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfbGlmZWN5Y2xlX2NvbmZpZ3VyYXRpb24jb2JqZWN0X3NpemVfbGVzc190aGFuIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbiNvYmplY3Rfc2l6ZV9sZXNzX3RoYW59XG4gICovXG4gIHJlYWRvbmx5IG9iamVjdFNpemVMZXNzVGhhbj86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2xpZmVjeWNsZV9jb25maWd1cmF0aW9uI3ByZWZpeCBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb24jcHJlZml4fVxuICAqL1xuICByZWFkb25seSBwcmVmaXg/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9saWZlY3ljbGVfY29uZmlndXJhdGlvbiN0YWdzIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbiN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJBbmRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyQW5kT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUZpbHRlckFuZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBvYmplY3Rfc2l6ZV9ncmVhdGVyX3RoYW46IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEub2JqZWN0U2l6ZUdyZWF0ZXJUaGFuKSxcbiAgICBvYmplY3Rfc2l6ZV9sZXNzX3RoYW46IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEub2JqZWN0U2l6ZUxlc3NUaGFuKSxcbiAgICBwcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlZml4KSxcbiAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRhZ3MpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJBbmRUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyQW5kT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUZpbHRlckFuZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgb2JqZWN0X3NpemVfZ3JlYXRlcl90aGFuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5vYmplY3RTaXplR3JlYXRlclRoYW4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIG9iamVjdF9zaXplX2xlc3NfdGhhbjoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEub2JqZWN0U2l6ZUxlc3NUaGFuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBwcmVmaXg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdGFnczoge1xuICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHN0cnVjdCEudGFncyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyQW5kT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyQW5kIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9vYmplY3RTaXplR3JlYXRlclRoYW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub2JqZWN0U2l6ZUdyZWF0ZXJUaGFuID0gdGhpcy5fb2JqZWN0U2l6ZUdyZWF0ZXJUaGFuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb2JqZWN0U2l6ZUxlc3NUaGFuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm9iamVjdFNpemVMZXNzVGhhbiA9IHRoaXMuX29iamVjdFNpemVMZXNzVGhhbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZWZpeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmVmaXggPSB0aGlzLl9wcmVmaXg7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YWdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhZ3MgPSB0aGlzLl90YWdzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUZpbHRlckFuZCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX29iamVjdFNpemVHcmVhdGVyVGhhbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX29iamVjdFNpemVMZXNzVGhhbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByZWZpeCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX29iamVjdFNpemVHcmVhdGVyVGhhbiA9IHZhbHVlLm9iamVjdFNpemVHcmVhdGVyVGhhbjtcbiAgICAgIHRoaXMuX29iamVjdFNpemVMZXNzVGhhbiA9IHZhbHVlLm9iamVjdFNpemVMZXNzVGhhbjtcbiAgICAgIHRoaXMuX3ByZWZpeCA9IHZhbHVlLnByZWZpeDtcbiAgICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZS50YWdzO1xuICAgIH1cbiAgfVxuXG4gIC8vIG9iamVjdF9zaXplX2dyZWF0ZXJfdGhhbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vYmplY3RTaXplR3JlYXRlclRoYW4/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG9iamVjdFNpemVHcmVhdGVyVGhhbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ29iamVjdF9zaXplX2dyZWF0ZXJfdGhhbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgb2JqZWN0U2l6ZUdyZWF0ZXJUaGFuKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vYmplY3RTaXplR3JlYXRlclRoYW4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPYmplY3RTaXplR3JlYXRlclRoYW4oKSB7XG4gICAgdGhpcy5fb2JqZWN0U2l6ZUdyZWF0ZXJUaGFuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvYmplY3RTaXplR3JlYXRlclRoYW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqZWN0U2l6ZUdyZWF0ZXJUaGFuO1xuICB9XG5cbiAgLy8gb2JqZWN0X3NpemVfbGVzc190aGFuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29iamVjdFNpemVMZXNzVGhhbj86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgb2JqZWN0U2l6ZUxlc3NUaGFuKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnb2JqZWN0X3NpemVfbGVzc190aGFuJyk7XG4gIH1cbiAgcHVibGljIHNldCBvYmplY3RTaXplTGVzc1RoYW4odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX29iamVjdFNpemVMZXNzVGhhbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9iamVjdFNpemVMZXNzVGhhbigpIHtcbiAgICB0aGlzLl9vYmplY3RTaXplTGVzc1RoYW4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9iamVjdFNpemVMZXNzVGhhbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vYmplY3RTaXplTGVzc1RoYW47XG4gIH1cblxuICAvLyBwcmVmaXggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZml4KCkge1xuICAgIHRoaXMuX3ByZWZpeCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZpeDtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJUYWcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfbGlmZWN5Y2xlX2NvbmZpZ3VyYXRpb24ja2V5IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbiNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfbGlmZWN5Y2xlX2NvbmZpZ3VyYXRpb24jdmFsdWUgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uI3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUZpbHRlclRhZ1RvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJUYWdPdXRwdXRSZWZlcmVuY2UgfCBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyVGFnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyVGFnVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUZpbHRlclRhZ091dHB1dFJlZmVyZW5jZSB8IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJUYWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGtleToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUZpbHRlclRhZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUZpbHRlclRhZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmtleSA9IHRoaXMuX2tleTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyVGFnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fa2V5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2tleSA9IHZhbHVlLmtleTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2tleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBrZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2tleSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5O1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2xpZmVjeWNsZV9jb25maWd1cmF0aW9uI29iamVjdF9zaXplX2dyZWF0ZXJfdGhhbiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb24jb2JqZWN0X3NpemVfZ3JlYXRlcl90aGFufVxuICAqL1xuICByZWFkb25seSBvYmplY3RTaXplR3JlYXRlclRoYW4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9saWZlY3ljbGVfY29uZmlndXJhdGlvbiNvYmplY3Rfc2l6ZV9sZXNzX3RoYW4gUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uI29iamVjdF9zaXplX2xlc3NfdGhhbn1cbiAgKi9cbiAgcmVhZG9ubHkgb2JqZWN0U2l6ZUxlc3NUaGFuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfbGlmZWN5Y2xlX2NvbmZpZ3VyYXRpb24jcHJlZml4IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbiNwcmVmaXh9XG4gICovXG4gIHJlYWRvbmx5IHByZWZpeD86IHN0cmluZztcbiAgLyoqXG4gICogYW5kIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfbGlmZWN5Y2xlX2NvbmZpZ3VyYXRpb24jYW5kIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbiNhbmR9XG4gICovXG4gIHJlYWRvbmx5IGFuZD86IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJBbmQ7XG4gIC8qKlxuICAqIHRhZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2xpZmVjeWNsZV9jb25maWd1cmF0aW9uI3RhZyBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb24jdGFnfVxuICAqL1xuICByZWFkb25seSB0YWc/OiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyVGFnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUZpbHRlclRvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJPdXRwdXRSZWZlcmVuY2UgfCBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG9iamVjdF9zaXplX2dyZWF0ZXJfdGhhbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vYmplY3RTaXplR3JlYXRlclRoYW4pLFxuICAgIG9iamVjdF9zaXplX2xlc3NfdGhhbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vYmplY3RTaXplTGVzc1RoYW4pLFxuICAgIHByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXgpLFxuICAgIGFuZDogczNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUZpbHRlckFuZFRvVGVycmFmb3JtKHN0cnVjdCEuYW5kKSxcbiAgICB0YWc6IHMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJUYWdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhZyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUZpbHRlclRvSGNsVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJPdXRwdXRSZWZlcmVuY2UgfCBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBvYmplY3Rfc2l6ZV9ncmVhdGVyX3RoYW46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdFNpemVHcmVhdGVyVGhhbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgb2JqZWN0X3NpemVfbGVzc190aGFuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5vYmplY3RTaXplTGVzc1RoYW4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHByZWZpeDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucHJlZml4KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBhbmQ6IHtcbiAgICAgIHZhbHVlOiBzM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyQW5kVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hbmQpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyQW5kTGlzdFwiLFxuICAgIH0sXG4gICAgdGFnOiB7XG4gICAgICB2YWx1ZTogczNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUZpbHRlclRhZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudGFnKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUZpbHRlclRhZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUZpbHRlck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUZpbHRlciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fb2JqZWN0U2l6ZUdyZWF0ZXJUaGFuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm9iamVjdFNpemVHcmVhdGVyVGhhbiA9IHRoaXMuX29iamVjdFNpemVHcmVhdGVyVGhhbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX29iamVjdFNpemVMZXNzVGhhbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vYmplY3RTaXplTGVzc1RoYW4gPSB0aGlzLl9vYmplY3RTaXplTGVzc1RoYW47XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmVmaXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZml4ID0gdGhpcy5fcHJlZml4O1xuICAgIH1cbiAgICBpZiAodGhpcy5fYW5kPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFuZCA9IHRoaXMuX2FuZD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhZz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YWcgPSB0aGlzLl90YWc/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fb2JqZWN0U2l6ZUdyZWF0ZXJUaGFuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb2JqZWN0U2l6ZUxlc3NUaGFuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJlZml4ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYW5kLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fb2JqZWN0U2l6ZUdyZWF0ZXJUaGFuID0gdmFsdWUub2JqZWN0U2l6ZUdyZWF0ZXJUaGFuO1xuICAgICAgdGhpcy5fb2JqZWN0U2l6ZUxlc3NUaGFuID0gdmFsdWUub2JqZWN0U2l6ZUxlc3NUaGFuO1xuICAgICAgdGhpcy5fcHJlZml4ID0gdmFsdWUucHJlZml4O1xuICAgICAgdGhpcy5fYW5kLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hbmQ7XG4gICAgICB0aGlzLl90YWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnRhZztcbiAgICB9XG4gIH1cblxuICAvLyBvYmplY3Rfc2l6ZV9ncmVhdGVyX3RoYW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb2JqZWN0U2l6ZUdyZWF0ZXJUaGFuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBvYmplY3RTaXplR3JlYXRlclRoYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvYmplY3Rfc2l6ZV9ncmVhdGVyX3RoYW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9iamVjdFNpemVHcmVhdGVyVGhhbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2JqZWN0U2l6ZUdyZWF0ZXJUaGFuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T2JqZWN0U2l6ZUdyZWF0ZXJUaGFuKCkge1xuICAgIHRoaXMuX29iamVjdFNpemVHcmVhdGVyVGhhbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb2JqZWN0U2l6ZUdyZWF0ZXJUaGFuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29iamVjdFNpemVHcmVhdGVyVGhhbjtcbiAgfVxuXG4gIC8vIG9iamVjdF9zaXplX2xlc3NfdGhhbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vYmplY3RTaXplTGVzc1RoYW4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG9iamVjdFNpemVMZXNzVGhhbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29iamVjdF9zaXplX2xlc3NfdGhhbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgb2JqZWN0U2l6ZUxlc3NUaGFuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vYmplY3RTaXplTGVzc1RoYW4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPYmplY3RTaXplTGVzc1RoYW4oKSB7XG4gICAgdGhpcy5fb2JqZWN0U2l6ZUxlc3NUaGFuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvYmplY3RTaXplTGVzc1RoYW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqZWN0U2l6ZUxlc3NUaGFuO1xuICB9XG5cbiAgLy8gcHJlZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZWZpeD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWZpeCgpIHtcbiAgICB0aGlzLl9wcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmaXg7XG4gIH1cblxuICAvLyBhbmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYW5kID0gbmV3IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJBbmRPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJhbmRcIik7XG4gIHB1YmxpYyBnZXQgYW5kKCkge1xuICAgIHJldHVybiB0aGlzLl9hbmQ7XG4gIH1cbiAgcHVibGljIHB1dEFuZCh2YWx1ZTogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUZpbHRlckFuZCkge1xuICAgIHRoaXMuX2FuZC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QW5kKCkge1xuICAgIHRoaXMuX2FuZC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYW5kLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0YWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnID0gbmV3IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJUYWdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJ0YWdcIik7XG4gIHB1YmxpYyBnZXQgdGFnKCkge1xuICAgIHJldHVybiB0aGlzLl90YWc7XG4gIH1cbiAgcHVibGljIHB1dFRhZyh2YWx1ZTogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUZpbHRlclRhZykge1xuICAgIHRoaXMuX3RhZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnKCkge1xuICAgIHRoaXMuX3RhZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZU5vbmN1cnJlbnRWZXJzaW9uRXhwaXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9saWZlY3ljbGVfY29uZmlndXJhdGlvbiNuZXdlcl9ub25jdXJyZW50X3ZlcnNpb25zIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbiNuZXdlcl9ub25jdXJyZW50X3ZlcnNpb25zfVxuICAqL1xuICByZWFkb25seSBuZXdlck5vbmN1cnJlbnRWZXJzaW9ucz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2xpZmVjeWNsZV9jb25maWd1cmF0aW9uI25vbmN1cnJlbnRfZGF5cyBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb24jbm9uY3VycmVudF9kYXlzfVxuICAqL1xuICByZWFkb25seSBub25jdXJyZW50RGF5cz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVOb25jdXJyZW50VmVyc2lvbkV4cGlyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlTm9uY3VycmVudFZlcnNpb25FeHBpcmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZU5vbmN1cnJlbnRWZXJzaW9uRXhwaXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuZXdlcl9ub25jdXJyZW50X3ZlcnNpb25zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5ld2VyTm9uY3VycmVudFZlcnNpb25zKSxcbiAgICBub25jdXJyZW50X2RheXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubm9uY3VycmVudERheXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVOb25jdXJyZW50VmVyc2lvbkV4cGlyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlTm9uY3VycmVudFZlcnNpb25FeHBpcmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZU5vbmN1cnJlbnRWZXJzaW9uRXhwaXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbmV3ZXJfbm9uY3VycmVudF92ZXJzaW9uczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubmV3ZXJOb25jdXJyZW50VmVyc2lvbnMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG5vbmN1cnJlbnRfZGF5czoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEubm9uY3VycmVudERheXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZU5vbmN1cnJlbnRWZXJzaW9uRXhwaXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZU5vbmN1cnJlbnRWZXJzaW9uRXhwaXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbmV3ZXJOb25jdXJyZW50VmVyc2lvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmV3ZXJOb25jdXJyZW50VmVyc2lvbnMgPSB0aGlzLl9uZXdlck5vbmN1cnJlbnRWZXJzaW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX25vbmN1cnJlbnREYXlzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5vbmN1cnJlbnREYXlzID0gdGhpcy5fbm9uY3VycmVudERheXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlTm9uY3VycmVudFZlcnNpb25FeHBpcmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbmV3ZXJOb25jdXJyZW50VmVyc2lvbnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ub25jdXJyZW50RGF5cyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbmV3ZXJOb25jdXJyZW50VmVyc2lvbnMgPSB2YWx1ZS5uZXdlck5vbmN1cnJlbnRWZXJzaW9ucztcbiAgICAgIHRoaXMuX25vbmN1cnJlbnREYXlzID0gdmFsdWUubm9uY3VycmVudERheXM7XG4gICAgfVxuICB9XG5cbiAgLy8gbmV3ZXJfbm9uY3VycmVudF92ZXJzaW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uZXdlck5vbmN1cnJlbnRWZXJzaW9ucz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmV3ZXJOb25jdXJyZW50VmVyc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduZXdlcl9ub25jdXJyZW50X3ZlcnNpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCBuZXdlck5vbmN1cnJlbnRWZXJzaW9ucyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmV3ZXJOb25jdXJyZW50VmVyc2lvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROZXdlck5vbmN1cnJlbnRWZXJzaW9ucygpIHtcbiAgICB0aGlzLl9uZXdlck5vbmN1cnJlbnRWZXJzaW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV3ZXJOb25jdXJyZW50VmVyc2lvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmV3ZXJOb25jdXJyZW50VmVyc2lvbnM7XG4gIH1cblxuICAvLyBub25jdXJyZW50X2RheXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbm9uY3VycmVudERheXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG5vbmN1cnJlbnREYXlzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbm9uY3VycmVudF9kYXlzJyk7XG4gIH1cbiAgcHVibGljIHNldCBub25jdXJyZW50RGF5cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbm9uY3VycmVudERheXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROb25jdXJyZW50RGF5cygpIHtcbiAgICB0aGlzLl9ub25jdXJyZW50RGF5cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbm9uY3VycmVudERheXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9uY3VycmVudERheXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZU5vbmN1cnJlbnRWZXJzaW9uVHJhbnNpdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9saWZlY3ljbGVfY29uZmlndXJhdGlvbiNuZXdlcl9ub25jdXJyZW50X3ZlcnNpb25zIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbiNuZXdlcl9ub25jdXJyZW50X3ZlcnNpb25zfVxuICAqL1xuICByZWFkb25seSBuZXdlck5vbmN1cnJlbnRWZXJzaW9ucz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2xpZmVjeWNsZV9jb25maWd1cmF0aW9uI25vbmN1cnJlbnRfZGF5cyBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb24jbm9uY3VycmVudF9kYXlzfVxuICAqL1xuICByZWFkb25seSBub25jdXJyZW50RGF5cz86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2xpZmVjeWNsZV9jb25maWd1cmF0aW9uI3N0b3JhZ2VfY2xhc3MgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uI3N0b3JhZ2VfY2xhc3N9XG4gICovXG4gIHJlYWRvbmx5IHN0b3JhZ2VDbGFzczogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZU5vbmN1cnJlbnRWZXJzaW9uVHJhbnNpdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVOb25jdXJyZW50VmVyc2lvblRyYW5zaXRpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuZXdlcl9ub25jdXJyZW50X3ZlcnNpb25zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5ld2VyTm9uY3VycmVudFZlcnNpb25zKSxcbiAgICBub25jdXJyZW50X2RheXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubm9uY3VycmVudERheXMpLFxuICAgIHN0b3JhZ2VfY2xhc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RvcmFnZUNsYXNzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlTm9uY3VycmVudFZlcnNpb25UcmFuc2l0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZU5vbmN1cnJlbnRWZXJzaW9uVHJhbnNpdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBuZXdlcl9ub25jdXJyZW50X3ZlcnNpb25zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5uZXdlck5vbmN1cnJlbnRWZXJzaW9ucyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbm9uY3VycmVudF9kYXlzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ub25jdXJyZW50RGF5cyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgc3RvcmFnZV9jbGFzczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3RvcmFnZUNsYXNzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVOb25jdXJyZW50VmVyc2lvblRyYW5zaXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZU5vbmN1cnJlbnRWZXJzaW9uVHJhbnNpdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbmV3ZXJOb25jdXJyZW50VmVyc2lvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmV3ZXJOb25jdXJyZW50VmVyc2lvbnMgPSB0aGlzLl9uZXdlck5vbmN1cnJlbnRWZXJzaW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX25vbmN1cnJlbnREYXlzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5vbmN1cnJlbnREYXlzID0gdGhpcy5fbm9uY3VycmVudERheXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdG9yYWdlQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RvcmFnZUNsYXNzID0gdGhpcy5fc3RvcmFnZUNsYXNzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZU5vbmN1cnJlbnRWZXJzaW9uVHJhbnNpdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uZXdlck5vbmN1cnJlbnRWZXJzaW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25vbmN1cnJlbnREYXlzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RvcmFnZUNsYXNzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25ld2VyTm9uY3VycmVudFZlcnNpb25zID0gdmFsdWUubmV3ZXJOb25jdXJyZW50VmVyc2lvbnM7XG4gICAgICB0aGlzLl9ub25jdXJyZW50RGF5cyA9IHZhbHVlLm5vbmN1cnJlbnREYXlzO1xuICAgICAgdGhpcy5fc3RvcmFnZUNsYXNzID0gdmFsdWUuc3RvcmFnZUNsYXNzO1xuICAgIH1cbiAgfVxuXG4gIC8vIG5ld2VyX25vbmN1cnJlbnRfdmVyc2lvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmV3ZXJOb25jdXJyZW50VmVyc2lvbnM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5ld2VyTm9uY3VycmVudFZlcnNpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmV3ZXJfbm9uY3VycmVudF92ZXJzaW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmV3ZXJOb25jdXJyZW50VmVyc2lvbnModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25ld2VyTm9uY3VycmVudFZlcnNpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmV3ZXJOb25jdXJyZW50VmVyc2lvbnMoKSB7XG4gICAgdGhpcy5fbmV3ZXJOb25jdXJyZW50VmVyc2lvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5ld2VyTm9uY3VycmVudFZlcnNpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25ld2VyTm9uY3VycmVudFZlcnNpb25zO1xuICB9XG5cbiAgLy8gbm9uY3VycmVudF9kYXlzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vbmN1cnJlbnREYXlzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBub25jdXJyZW50RGF5cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ25vbmN1cnJlbnRfZGF5cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbm9uY3VycmVudERheXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX25vbmN1cnJlbnREYXlzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Tm9uY3VycmVudERheXMoKSB7XG4gICAgdGhpcy5fbm9uY3VycmVudERheXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vbmN1cnJlbnREYXlzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vbmN1cnJlbnREYXlzO1xuICB9XG5cbiAgLy8gc3RvcmFnZV9jbGFzcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zdG9yYWdlQ2xhc3M/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0b3JhZ2VfY2xhc3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0b3JhZ2VDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RvcmFnZUNsYXNzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VDbGFzc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yYWdlQ2xhc3M7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVOb25jdXJyZW50VmVyc2lvblRyYW5zaXRpb25MaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlTm9uY3VycmVudFZlcnNpb25UcmFuc2l0aW9uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVOb25jdXJyZW50VmVyc2lvblRyYW5zaXRpb25PdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZU5vbmN1cnJlbnRWZXJzaW9uVHJhbnNpdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVUcmFuc2l0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2xpZmVjeWNsZV9jb25maWd1cmF0aW9uI2RhdGUgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uI2RhdGV9XG4gICovXG4gIHJlYWRvbmx5IGRhdGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9saWZlY3ljbGVfY29uZmlndXJhdGlvbiNkYXlzIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbiNkYXlzfVxuICAqL1xuICByZWFkb25seSBkYXlzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfbGlmZWN5Y2xlX2NvbmZpZ3VyYXRpb24jc3RvcmFnZV9jbGFzcyBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb24jc3RvcmFnZV9jbGFzc31cbiAgKi9cbiAgcmVhZG9ubHkgc3RvcmFnZUNsYXNzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlVHJhbnNpdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVUcmFuc2l0aW9uIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRlKSxcbiAgICBkYXlzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmRheXMpLFxuICAgIHN0b3JhZ2VfY2xhc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RvcmFnZUNsYXNzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlVHJhbnNpdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVUcmFuc2l0aW9uIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGRhdGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRhdGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRheXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRheXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHN0b3JhZ2VfY2xhc3M6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN0b3JhZ2VDbGFzcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlVHJhbnNpdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlVHJhbnNpdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kYXRlID0gdGhpcy5fZGF0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RheXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGF5cyA9IHRoaXMuX2RheXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdG9yYWdlQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RvcmFnZUNsYXNzID0gdGhpcy5fc3RvcmFnZUNsYXNzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZVRyYW5zaXRpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RheXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdG9yYWdlQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGF0ZSA9IHZhbHVlLmRhdGU7XG4gICAgICB0aGlzLl9kYXlzID0gdmFsdWUuZGF5cztcbiAgICAgIHRoaXMuX3N0b3JhZ2VDbGFzcyA9IHZhbHVlLnN0b3JhZ2VDbGFzcztcbiAgICB9XG4gIH1cblxuICAvLyBkYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGF0ZSgpIHtcbiAgICB0aGlzLl9kYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGU7XG4gIH1cblxuICAvLyBkYXlzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RheXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGRheXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkYXlzJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYXlzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kYXlzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGF5cygpIHtcbiAgICB0aGlzLl9kYXlzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXlzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RheXM7XG4gIH1cblxuICAvLyBzdG9yYWdlX2NsYXNzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N0b3JhZ2VDbGFzcz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RvcmFnZUNsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RvcmFnZV9jbGFzcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RvcmFnZUNsYXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdG9yYWdlQ2xhc3MgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RvcmFnZUNsYXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2VDbGFzcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZVRyYW5zaXRpb25MaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlVHJhbnNpdGlvbltdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlVHJhbnNpdGlvbk91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlVHJhbnNpdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGUge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfbGlmZWN5Y2xlX2NvbmZpZ3VyYXRpb24jaWQgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uI2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9saWZlY3ljbGVfY29uZmlndXJhdGlvbiNwcmVmaXggUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uI3ByZWZpeH1cbiAgKi9cbiAgcmVhZG9ubHkgcHJlZml4Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfbGlmZWN5Y2xlX2NvbmZpZ3VyYXRpb24jc3RhdHVzIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbiNzdGF0dXN9XG4gICovXG4gIHJlYWRvbmx5IHN0YXR1czogc3RyaW5nO1xuICAvKipcbiAgKiBhYm9ydF9pbmNvbXBsZXRlX211bHRpcGFydF91cGxvYWQgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9saWZlY3ljbGVfY29uZmlndXJhdGlvbiNhYm9ydF9pbmNvbXBsZXRlX211bHRpcGFydF91cGxvYWQgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uI2Fib3J0X2luY29tcGxldGVfbXVsdGlwYXJ0X3VwbG9hZH1cbiAgKi9cbiAgcmVhZG9ubHkgYWJvcnRJbmNvbXBsZXRlTXVsdGlwYXJ0VXBsb2FkPzogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUFib3J0SW5jb21wbGV0ZU11bHRpcGFydFVwbG9hZDtcbiAgLyoqXG4gICogZXhwaXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2xpZmVjeWNsZV9jb25maWd1cmF0aW9uI2V4cGlyYXRpb24gUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uI2V4cGlyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGV4cGlyYXRpb24/OiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRXhwaXJhdGlvbjtcbiAgLyoqXG4gICogZmlsdGVyIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfbGlmZWN5Y2xlX2NvbmZpZ3VyYXRpb24jZmlsdGVyIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbiNmaWx0ZXJ9XG4gICovXG4gIHJlYWRvbmx5IGZpbHRlcj86IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXI7XG4gIC8qKlxuICAqIG5vbmN1cnJlbnRfdmVyc2lvbl9leHBpcmF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfbGlmZWN5Y2xlX2NvbmZpZ3VyYXRpb24jbm9uY3VycmVudF92ZXJzaW9uX2V4cGlyYXRpb24gUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uI25vbmN1cnJlbnRfdmVyc2lvbl9leHBpcmF0aW9ufVxuICAqL1xuICByZWFkb25seSBub25jdXJyZW50VmVyc2lvbkV4cGlyYXRpb24/OiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlTm9uY3VycmVudFZlcnNpb25FeHBpcmF0aW9uO1xuICAvKipcbiAgKiBub25jdXJyZW50X3ZlcnNpb25fdHJhbnNpdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X2xpZmVjeWNsZV9jb25maWd1cmF0aW9uI25vbmN1cnJlbnRfdmVyc2lvbl90cmFuc2l0aW9uIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbiNub25jdXJyZW50X3ZlcnNpb25fdHJhbnNpdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgbm9uY3VycmVudFZlcnNpb25UcmFuc2l0aW9uPzogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZU5vbmN1cnJlbnRWZXJzaW9uVHJhbnNpdGlvbltdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHRyYW5zaXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9saWZlY3ljbGVfY29uZmlndXJhdGlvbiN0cmFuc2l0aW9uIFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbiN0cmFuc2l0aW9ufVxuICAqL1xuICByZWFkb25seSB0cmFuc2l0aW9uPzogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZVRyYW5zaXRpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZVRvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGUgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gICAgcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgc3RhdHVzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXR1cyksXG4gICAgYWJvcnRfaW5jb21wbGV0ZV9tdWx0aXBhcnRfdXBsb2FkOiBzM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlQWJvcnRJbmNvbXBsZXRlTXVsdGlwYXJ0VXBsb2FkVG9UZXJyYWZvcm0oc3RydWN0IS5hYm9ydEluY29tcGxldGVNdWx0aXBhcnRVcGxvYWQpLFxuICAgIGV4cGlyYXRpb246IHMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVFeHBpcmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5leHBpcmF0aW9uKSxcbiAgICBmaWx0ZXI6IHMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpbHRlciksXG4gICAgbm9uY3VycmVudF92ZXJzaW9uX2V4cGlyYXRpb246IHMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVOb25jdXJyZW50VmVyc2lvbkV4cGlyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLm5vbmN1cnJlbnRWZXJzaW9uRXhwaXJhdGlvbiksXG4gICAgbm9uY3VycmVudF92ZXJzaW9uX3RyYW5zaXRpb246IGNka3RmLmxpc3RNYXBwZXIoczNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZU5vbmN1cnJlbnRWZXJzaW9uVHJhbnNpdGlvblRvVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLm5vbmN1cnJlbnRWZXJzaW9uVHJhbnNpdGlvbiksXG4gICAgdHJhbnNpdGlvbjogY2RrdGYubGlzdE1hcHBlcihzM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlVHJhbnNpdGlvblRvVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnRyYW5zaXRpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGlkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcHJlZml4OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcmVmaXgpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHN0YXR1czoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3RhdHVzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBhYm9ydF9pbmNvbXBsZXRlX211bHRpcGFydF91cGxvYWQ6IHtcbiAgICAgIHZhbHVlOiBzM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlQWJvcnRJbmNvbXBsZXRlTXVsdGlwYXJ0VXBsb2FkVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hYm9ydEluY29tcGxldGVNdWx0aXBhcnRVcGxvYWQpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlQWJvcnRJbmNvbXBsZXRlTXVsdGlwYXJ0VXBsb2FkTGlzdFwiLFxuICAgIH0sXG4gICAgZXhwaXJhdGlvbjoge1xuICAgICAgdmFsdWU6IHMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVFeHBpcmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5leHBpcmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUV4cGlyYXRpb25MaXN0XCIsXG4gICAgfSxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIHZhbHVlOiBzM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5maWx0ZXIpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyTGlzdFwiLFxuICAgIH0sXG4gICAgbm9uY3VycmVudF92ZXJzaW9uX2V4cGlyYXRpb246IHtcbiAgICAgIHZhbHVlOiBzM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlTm9uY3VycmVudFZlcnNpb25FeHBpcmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ub25jdXJyZW50VmVyc2lvbkV4cGlyYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlTm9uY3VycmVudFZlcnNpb25FeHBpcmF0aW9uTGlzdFwiLFxuICAgIH0sXG4gICAgbm9uY3VycmVudF92ZXJzaW9uX3RyYW5zaXRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKHMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVOb25jdXJyZW50VmVyc2lvblRyYW5zaXRpb25Ub0hjbFRlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5ub25jdXJyZW50VmVyc2lvblRyYW5zaXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVOb25jdXJyZW50VmVyc2lvblRyYW5zaXRpb25MaXN0XCIsXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChzM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlVHJhbnNpdGlvblRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnRyYW5zaXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVUcmFuc2l0aW9uTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGUgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2lkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlkID0gdGhpcy5faWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmVmaXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZml4ID0gdGhpcy5fcHJlZml4O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhdHVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXR1cyA9IHRoaXMuX3N0YXR1cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Fib3J0SW5jb21wbGV0ZU11bHRpcGFydFVwbG9hZD8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hYm9ydEluY29tcGxldGVNdWx0aXBhcnRVcGxvYWQgPSB0aGlzLl9hYm9ydEluY29tcGxldGVNdWx0aXBhcnRVcGxvYWQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9leHBpcmF0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmV4cGlyYXRpb24gPSB0aGlzLl9leHBpcmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmlsdGVyPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbHRlciA9IHRoaXMuX2ZpbHRlcj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25vbmN1cnJlbnRWZXJzaW9uRXhwaXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ub25jdXJyZW50VmVyc2lvbkV4cGlyYXRpb24gPSB0aGlzLl9ub25jdXJyZW50VmVyc2lvbkV4cGlyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ub25jdXJyZW50VmVyc2lvblRyYW5zaXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubm9uY3VycmVudFZlcnNpb25UcmFuc2l0aW9uID0gdGhpcy5fbm9uY3VycmVudFZlcnNpb25UcmFuc2l0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdHJhbnNpdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50cmFuc2l0aW9uID0gdGhpcy5fdHJhbnNpdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGUgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcmVmaXggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGF0dXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hYm9ydEluY29tcGxldGVNdWx0aXBhcnRVcGxvYWQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2V4cGlyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpbHRlci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbm9uY3VycmVudFZlcnNpb25FeHBpcmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ub25jdXJyZW50VmVyc2lvblRyYW5zaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RyYW5zaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pZCA9IHZhbHVlLmlkO1xuICAgICAgdGhpcy5fcHJlZml4ID0gdmFsdWUucHJlZml4O1xuICAgICAgdGhpcy5fc3RhdHVzID0gdmFsdWUuc3RhdHVzO1xuICAgICAgdGhpcy5fYWJvcnRJbmNvbXBsZXRlTXVsdGlwYXJ0VXBsb2FkLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hYm9ydEluY29tcGxldGVNdWx0aXBhcnRVcGxvYWQ7XG4gICAgICB0aGlzLl9leHBpcmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5leHBpcmF0aW9uO1xuICAgICAgdGhpcy5fZmlsdGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZS5maWx0ZXI7XG4gICAgICB0aGlzLl9ub25jdXJyZW50VmVyc2lvbkV4cGlyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLm5vbmN1cnJlbnRWZXJzaW9uRXhwaXJhdGlvbjtcbiAgICAgIHRoaXMuX25vbmN1cnJlbnRWZXJzaW9uVHJhbnNpdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUubm9uY3VycmVudFZlcnNpb25UcmFuc2l0aW9uO1xuICAgICAgdGhpcy5fdHJhbnNpdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUudHJhbnNpdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gcHJlZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZWZpeD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWZpeCgpIHtcbiAgICB0aGlzLl9wcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmaXg7XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3RhdHVzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXR1cyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXR1c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cblxuICAvLyBhYm9ydF9pbmNvbXBsZXRlX211bHRpcGFydF91cGxvYWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWJvcnRJbmNvbXBsZXRlTXVsdGlwYXJ0VXBsb2FkID0gbmV3IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVBYm9ydEluY29tcGxldGVNdWx0aXBhcnRVcGxvYWRPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJhYm9ydF9pbmNvbXBsZXRlX211bHRpcGFydF91cGxvYWRcIik7XG4gIHB1YmxpYyBnZXQgYWJvcnRJbmNvbXBsZXRlTXVsdGlwYXJ0VXBsb2FkKCkge1xuICAgIHJldHVybiB0aGlzLl9hYm9ydEluY29tcGxldGVNdWx0aXBhcnRVcGxvYWQ7XG4gIH1cbiAgcHVibGljIHB1dEFib3J0SW5jb21wbGV0ZU11bHRpcGFydFVwbG9hZCh2YWx1ZTogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUFib3J0SW5jb21wbGV0ZU11bHRpcGFydFVwbG9hZCkge1xuICAgIHRoaXMuX2Fib3J0SW5jb21wbGV0ZU11bHRpcGFydFVwbG9hZC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWJvcnRJbmNvbXBsZXRlTXVsdGlwYXJ0VXBsb2FkKCkge1xuICAgIHRoaXMuX2Fib3J0SW5jb21wbGV0ZU11bHRpcGFydFVwbG9hZC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhYm9ydEluY29tcGxldGVNdWx0aXBhcnRVcGxvYWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWJvcnRJbmNvbXBsZXRlTXVsdGlwYXJ0VXBsb2FkLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBleHBpcmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4cGlyYXRpb24gPSBuZXcgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUV4cGlyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJleHBpcmF0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGV4cGlyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGlyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEV4cGlyYXRpb24odmFsdWU6IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVFeHBpcmF0aW9uKSB7XG4gICAgdGhpcy5fZXhwaXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXhwaXJhdGlvbigpIHtcbiAgICB0aGlzLl9leHBpcmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4cGlyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwaXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZmlsdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpbHRlciA9IG5ldyBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZmlsdGVyXCIpO1xuICBwdWJsaWMgZ2V0IGZpbHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyO1xuICB9XG4gIHB1YmxpYyBwdXRGaWx0ZXIodmFsdWU6IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXIpIHtcbiAgICB0aGlzLl9maWx0ZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpbHRlcigpIHtcbiAgICB0aGlzLl9maWx0ZXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsdGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlci5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbm9uY3VycmVudF92ZXJzaW9uX2V4cGlyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbm9uY3VycmVudFZlcnNpb25FeHBpcmF0aW9uID0gbmV3IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVOb25jdXJyZW50VmVyc2lvbkV4cGlyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJub25jdXJyZW50X3ZlcnNpb25fZXhwaXJhdGlvblwiKTtcbiAgcHVibGljIGdldCBub25jdXJyZW50VmVyc2lvbkV4cGlyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vbmN1cnJlbnRWZXJzaW9uRXhwaXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0Tm9uY3VycmVudFZlcnNpb25FeHBpcmF0aW9uKHZhbHVlOiBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlTm9uY3VycmVudFZlcnNpb25FeHBpcmF0aW9uKSB7XG4gICAgdGhpcy5fbm9uY3VycmVudFZlcnNpb25FeHBpcmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROb25jdXJyZW50VmVyc2lvbkV4cGlyYXRpb24oKSB7XG4gICAgdGhpcy5fbm9uY3VycmVudFZlcnNpb25FeHBpcmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vbmN1cnJlbnRWZXJzaW9uRXhwaXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ub25jdXJyZW50VmVyc2lvbkV4cGlyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG5vbmN1cnJlbnRfdmVyc2lvbl90cmFuc2l0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vbmN1cnJlbnRWZXJzaW9uVHJhbnNpdGlvbiA9IG5ldyBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlTm9uY3VycmVudFZlcnNpb25UcmFuc2l0aW9uTGlzdCh0aGlzLCBcIm5vbmN1cnJlbnRfdmVyc2lvbl90cmFuc2l0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG5vbmN1cnJlbnRWZXJzaW9uVHJhbnNpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9uY3VycmVudFZlcnNpb25UcmFuc2l0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXROb25jdXJyZW50VmVyc2lvblRyYW5zaXRpb24odmFsdWU6IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVOb25jdXJyZW50VmVyc2lvblRyYW5zaXRpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fbm9uY3VycmVudFZlcnNpb25UcmFuc2l0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROb25jdXJyZW50VmVyc2lvblRyYW5zaXRpb24oKSB7XG4gICAgdGhpcy5fbm9uY3VycmVudFZlcnNpb25UcmFuc2l0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vbmN1cnJlbnRWZXJzaW9uVHJhbnNpdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ub25jdXJyZW50VmVyc2lvblRyYW5zaXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRyYW5zaXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHJhbnNpdGlvbiA9IG5ldyBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlVHJhbnNpdGlvbkxpc3QodGhpcywgXCJ0cmFuc2l0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRyYW5zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYW5zaXRpb247XG4gIH1cbiAgcHVibGljIHB1dFRyYW5zaXRpb24odmFsdWU6IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVUcmFuc2l0aW9uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RyYW5zaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRyYW5zaXRpb24oKSB7XG4gICAgdGhpcy5fdHJhbnNpdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0cmFuc2l0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYW5zaXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZUxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZU91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9saWZlY3ljbGVfY29uZmlndXJhdGlvbiBhd3NfczNfYnVja2V0X2xpZmVjeWNsZV9jb25maWd1cmF0aW9ufVxuKi9cbmV4cG9ydCBjbGFzcyBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiYXdzX3MzX2J1Y2tldF9saWZlY3ljbGVfY29uZmlndXJhdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb24gcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb24gdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9saWZlY3ljbGVfY29uZmlndXJhdGlvbiNpbXBvcnQgaW1wb3J0IHNlY3Rpb259IGluIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UgZm9yIHRoZSBpZCB0byB1c2VcbiAgKiBAcGFyYW0gcHJvdmlkZXI/IE9wdGlvbmFsIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciB3aGVyZSB0aGUgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uIHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19zM19idWNrZXRfbGlmZWN5Y2xlX2NvbmZpZ3VyYXRpb25cIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfbGlmZWN5Y2xlX2NvbmZpZ3VyYXRpb24gYXdzX3MzX2J1Y2tldF9saWZlY3ljbGVfY29uZmlndXJhdGlvbn0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3MzX2J1Y2tldF9saWZlY3ljbGVfY29uZmlndXJhdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnLFxuICAgICAgICBwcm92aWRlclZlcnNpb246ICczLjc2LjEnLFxuICAgICAgICBwcm92aWRlclZlcnNpb25Db25zdHJhaW50OiAnfj4gMy4wJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlLFxuICAgICAgcHJvdmlzaW9uZXJzOiBjb25maWcucHJvdmlzaW9uZXJzLFxuICAgICAgY29ubmVjdGlvbjogY29uZmlnLmNvbm5lY3Rpb24sXG4gICAgICBmb3JFYWNoOiBjb25maWcuZm9yRWFjaFxuICAgIH0pO1xuICAgIHRoaXMuX2J1Y2tldCA9IGNvbmZpZy5idWNrZXQ7XG4gICAgdGhpcy5fZXhwZWN0ZWRCdWNrZXRPd25lciA9IGNvbmZpZy5leHBlY3RlZEJ1Y2tldE93bmVyO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX3J1bGUuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5ydWxlO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBidWNrZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYnVja2V0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWNrZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVja2V0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXQ7XG4gIH1cblxuICAvLyBleHBlY3RlZF9idWNrZXRfb3duZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXhwZWN0ZWRCdWNrZXRPd25lcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXhwZWN0ZWRCdWNrZXRPd25lcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4cGVjdGVkX2J1Y2tldF9vd25lcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhwZWN0ZWRCdWNrZXRPd25lcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXhwZWN0ZWRCdWNrZXRPd25lciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4cGVjdGVkQnVja2V0T3duZXIoKSB7XG4gICAgdGhpcy5fZXhwZWN0ZWRCdWNrZXRPd25lciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhwZWN0ZWRCdWNrZXRPd25lcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leHBlY3RlZEJ1Y2tldE93bmVyO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gcnVsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9ydWxlID0gbmV3IFMzQnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvblJ1bGVMaXN0KHRoaXMsIFwicnVsZVwiLCBmYWxzZSk7XG4gIHB1YmxpYyBnZXQgcnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZTtcbiAgfVxuICBwdWJsaWMgcHV0UnVsZSh2YWx1ZTogUzNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZVtdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9ydWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcnVsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ydWxlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJ1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYnVja2V0KSxcbiAgICAgIGV4cGVjdGVkX2J1Y2tldF9vd25lcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZXhwZWN0ZWRCdWNrZXRPd25lciksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgcnVsZTogY2RrdGYubGlzdE1hcHBlcihzM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlVG9UZXJyYWZvcm0sIHRydWUpKHRoaXMuX3J1bGUuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBidWNrZXQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2J1Y2tldCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGV4cGVjdGVkX2J1Y2tldF9vd25lcjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZXhwZWN0ZWRCdWNrZXRPd25lciksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHJ1bGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woczNCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uUnVsZVRvSGNsVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9ydWxlLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTM0J1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb25SdWxlTGlzdFwiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19