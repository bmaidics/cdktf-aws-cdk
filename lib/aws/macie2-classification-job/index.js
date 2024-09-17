"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
Object.defineProperty(exports, "__esModule", { value: true });
exports.macie2ClassificationJobScheduleFrequencyToHclTerraform = exports.macie2ClassificationJobScheduleFrequencyToTerraform = exports.Macie2ClassificationJobS3JobDefinitionOutputReference = exports.macie2ClassificationJobS3JobDefinitionToHclTerraform = exports.macie2ClassificationJobS3JobDefinitionToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingToHclTerraform = exports.macie2ClassificationJobS3JobDefinitionScopingToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingIncludesToHclTerraform = exports.macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList = exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndToHclTerraform = exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToHclTerraform = exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList = exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToHclTerraform = exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToHclTerraform = exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingExcludesToHclTerraform = exports.macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList = exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndToHclTerraform = exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToHclTerraform = exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList = exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToHclTerraform = exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform = exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference = exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToHclTerraform = exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform = exports.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList = exports.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference = exports.macie2ClassificationJobS3JobDefinitionBucketDefinitionsToHclTerraform = exports.macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform = exports.Macie2ClassificationJobUserPausedDetailsList = exports.Macie2ClassificationJobUserPausedDetailsOutputReference = exports.macie2ClassificationJobUserPausedDetailsToHclTerraform = exports.macie2ClassificationJobUserPausedDetailsToTerraform = void 0;
exports.Macie2ClassificationJob = exports.Macie2ClassificationJobScheduleFrequencyOutputReference = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function macie2ClassificationJobUserPausedDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.macie2ClassificationJobUserPausedDetailsToTerraform = macie2ClassificationJobUserPausedDetailsToTerraform;
function macie2ClassificationJobUserPausedDetailsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.macie2ClassificationJobUserPausedDetailsToHclTerraform = macie2ClassificationJobUserPausedDetailsToHclTerraform;
class Macie2ClassificationJobUserPausedDetailsOutputReference extends cdktf.ComplexObject {
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
    // job_expires_at - computed: true, optional: false, required: false
    get jobExpiresAt() {
        return this.getStringAttribute('job_expires_at');
    }
    // job_imminent_expiration_health_event_arn - computed: true, optional: false, required: false
    get jobImminentExpirationHealthEventArn() {
        return this.getStringAttribute('job_imminent_expiration_health_event_arn');
    }
    // job_paused_at - computed: true, optional: false, required: false
    get jobPausedAt() {
        return this.getStringAttribute('job_paused_at');
    }
}
exports.Macie2ClassificationJobUserPausedDetailsOutputReference = Macie2ClassificationJobUserPausedDetailsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobUserPausedDetailsOutputReference[_a] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference", version: "0.0.0" };
class Macie2ClassificationJobUserPausedDetailsList extends cdktf.ComplexList {
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
        return new Macie2ClassificationJobUserPausedDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.Macie2ClassificationJobUserPausedDetailsList = Macie2ClassificationJobUserPausedDetailsList;
_b = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobUserPausedDetailsList[_b] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList", version: "0.0.0" };
function macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        account_id: cdktf.stringToTerraform(struct.accountId),
        buckets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.buckets),
    };
}
exports.macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform = macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform;
function macie2ClassificationJobS3JobDefinitionBucketDefinitionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        account_id: {
            value: cdktf.stringToHclTerraform(struct.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        buckets: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.buckets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.macie2ClassificationJobS3JobDefinitionBucketDefinitionsToHclTerraform = macie2ClassificationJobS3JobDefinitionBucketDefinitionsToHclTerraform;
class Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference extends cdktf.ComplexObject {
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
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._buckets !== undefined) {
            hasAnyValues = true;
            internalValueResult.buckets = this._buckets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._buckets = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountId = value.accountId;
            this._buckets = value.buckets;
        }
    }
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    get buckets() {
        return this.getListAttribute('buckets');
    }
    set buckets(value) {
        this._buckets = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketsInput() {
        return this._buckets;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference = Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference;
_c = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference[_c] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference", version: "0.0.0" };
class Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList extends cdktf.ComplexList {
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
        return new Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList = Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList;
_d = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList[_d] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList", version: "0.0.0" };
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparator: cdktf.stringToTerraform(struct.comparator),
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.values),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform = macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform;
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        comparator: {
            value: cdktf.stringToHclTerraform(struct.comparator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktf.stringToHclTerraform(struct.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToHclTerraform = macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToHclTerraform;
class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference extends cdktf.ComplexObject {
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
        if (this._comparator !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparator = this._comparator;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparator = undefined;
            this._key = undefined;
            this._values = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparator = value.comparator;
            this._key = value.key;
            this._values = value.values;
        }
    }
    get comparator() {
        return this.getStringAttribute('comparator');
    }
    set comparator(value) {
        this._comparator = value;
    }
    resetComparator() {
        this._comparator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get comparatorInput() {
        return this._comparator;
    }
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    get values() {
        return this.getListAttribute('values');
    }
    set values(value) {
        this._values = value;
    }
    resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valuesInput() {
        return this._values;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference = Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference;
_e = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference[_e] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference", version: "0.0.0" };
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform(struct) {
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
exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform = macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform;
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToHclTerraform(struct) {
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
exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToHclTerraform = macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToHclTerraform;
class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference extends cdktf.ComplexObject {
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
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
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
    resetKey() {
        this._key = undefined;
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
    resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference = Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference;
_f = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference[_f] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference", version: "0.0.0" };
class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList extends cdktf.ComplexList {
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
        return new Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList = Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList;
_g = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList[_g] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList", version: "0.0.0" };
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparator: cdktf.stringToTerraform(struct.comparator),
        key: cdktf.stringToTerraform(struct.key),
        target: cdktf.stringToTerraform(struct.target),
        tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform, true)(struct.tagValues),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform = macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform;
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        comparator: {
            value: cdktf.stringToHclTerraform(struct.comparator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktf.stringToHclTerraform(struct.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: cdktf.stringToHclTerraform(struct.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_values: {
            value: cdktf.listMapperHcl(macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToHclTerraform, true)(struct.tagValues),
            isBlock: true,
            type: "list",
            storageClassType: "Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToHclTerraform = macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToHclTerraform;
class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // tag_values - computed: false, optional: true, required: false
        this._tagValues = new Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList(this, "tag_values", false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._comparator !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparator = this._comparator;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._target !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target;
        }
        if (this._tagValues?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagValues = this._tagValues?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparator = undefined;
            this._key = undefined;
            this._target = undefined;
            this._tagValues.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparator = value.comparator;
            this._key = value.key;
            this._target = value.target;
            this._tagValues.internalValue = value.tagValues;
        }
    }
    get comparator() {
        return this.getStringAttribute('comparator');
    }
    set comparator(value) {
        this._comparator = value;
    }
    resetComparator() {
        this._comparator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get comparatorInput() {
        return this._comparator;
    }
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    get target() {
        return this.getStringAttribute('target');
    }
    set target(value) {
        this._target = value;
    }
    resetTarget() {
        this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetInput() {
        return this._target;
    }
    get tagValues() {
        return this._tagValues;
    }
    putTagValues(value) {
        this._tagValues.internalValue = value;
    }
    resetTagValues() {
        this._tagValues.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagValuesInput() {
        return this._tagValues.internalValue;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference = Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference;
_h = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference[_h] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference", version: "0.0.0" };
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        simple_scope_term: macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform(struct.simpleScopeTerm),
        tag_scope_term: macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform(struct.tagScopeTerm),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform = macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform;
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        simple_scope_term: {
            value: macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToHclTerraform(struct.simpleScopeTerm),
            isBlock: true,
            type: "list",
            storageClassType: "Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermList",
        },
        tag_scope_term: {
            value: macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToHclTerraform(struct.tagScopeTerm),
            isBlock: true,
            type: "list",
            storageClassType: "Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.macie2ClassificationJobS3JobDefinitionScopingExcludesAndToHclTerraform = macie2ClassificationJobS3JobDefinitionScopingExcludesAndToHclTerraform;
class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // simple_scope_term - computed: false, optional: true, required: false
        this._simpleScopeTerm = new Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference(this, "simple_scope_term");
        // tag_scope_term - computed: false, optional: true, required: false
        this._tagScopeTerm = new Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference(this, "tag_scope_term");
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._simpleScopeTerm?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.simpleScopeTerm = this._simpleScopeTerm?.internalValue;
        }
        if (this._tagScopeTerm?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagScopeTerm = this._tagScopeTerm?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._simpleScopeTerm.internalValue = undefined;
            this._tagScopeTerm.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._simpleScopeTerm.internalValue = value.simpleScopeTerm;
            this._tagScopeTerm.internalValue = value.tagScopeTerm;
        }
    }
    get simpleScopeTerm() {
        return this._simpleScopeTerm;
    }
    putSimpleScopeTerm(value) {
        this._simpleScopeTerm.internalValue = value;
    }
    resetSimpleScopeTerm() {
        this._simpleScopeTerm.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get simpleScopeTermInput() {
        return this._simpleScopeTerm.internalValue;
    }
    get tagScopeTerm() {
        return this._tagScopeTerm;
    }
    putTagScopeTerm(value) {
        this._tagScopeTerm.internalValue = value;
    }
    resetTagScopeTerm() {
        this._tagScopeTerm.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagScopeTermInput() {
        return this._tagScopeTerm.internalValue;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference = Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference;
_j = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference[_j] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference", version: "0.0.0" };
class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList extends cdktf.ComplexList {
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
        return new Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList = Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList;
_k = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList[_k] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList", version: "0.0.0" };
function macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform, true)(struct.and),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform = macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform;
function macie2ClassificationJobS3JobDefinitionScopingExcludesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        and: {
            value: cdktf.listMapperHcl(macie2ClassificationJobS3JobDefinitionScopingExcludesAndToHclTerraform, true)(struct.and),
            isBlock: true,
            type: "list",
            storageClassType: "Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.macie2ClassificationJobS3JobDefinitionScopingExcludesToHclTerraform = macie2ClassificationJobS3JobDefinitionScopingExcludesToHclTerraform;
class Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // and - computed: false, optional: true, required: false
        this._and = new Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList(this, "and", false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._and?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.and = this._and?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._and.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._and.internalValue = value.and;
        }
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
}
exports.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference = Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference;
_l = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference[_l] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference", version: "0.0.0" };
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparator: cdktf.stringToTerraform(struct.comparator),
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.values),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform = macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform;
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        comparator: {
            value: cdktf.stringToHclTerraform(struct.comparator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktf.stringToHclTerraform(struct.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToHclTerraform = macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToHclTerraform;
class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference extends cdktf.ComplexObject {
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
        if (this._comparator !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparator = this._comparator;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparator = undefined;
            this._key = undefined;
            this._values = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparator = value.comparator;
            this._key = value.key;
            this._values = value.values;
        }
    }
    get comparator() {
        return this.getStringAttribute('comparator');
    }
    set comparator(value) {
        this._comparator = value;
    }
    resetComparator() {
        this._comparator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get comparatorInput() {
        return this._comparator;
    }
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    get values() {
        return this.getListAttribute('values');
    }
    set values(value) {
        this._values = value;
    }
    resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valuesInput() {
        return this._values;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference = Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference;
_m = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference[_m] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference", version: "0.0.0" };
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform(struct) {
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
exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform = macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform;
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToHclTerraform(struct) {
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
exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToHclTerraform = macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToHclTerraform;
class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference extends cdktf.ComplexObject {
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
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
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
    resetKey() {
        this._key = undefined;
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
    resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference = Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference;
_o = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference[_o] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference", version: "0.0.0" };
class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList extends cdktf.ComplexList {
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
        return new Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList = Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList;
_p = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList[_p] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList", version: "0.0.0" };
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparator: cdktf.stringToTerraform(struct.comparator),
        key: cdktf.stringToTerraform(struct.key),
        target: cdktf.stringToTerraform(struct.target),
        tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform, true)(struct.tagValues),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform = macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform;
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        comparator: {
            value: cdktf.stringToHclTerraform(struct.comparator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktf.stringToHclTerraform(struct.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: cdktf.stringToHclTerraform(struct.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_values: {
            value: cdktf.listMapperHcl(macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToHclTerraform, true)(struct.tagValues),
            isBlock: true,
            type: "list",
            storageClassType: "Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToHclTerraform = macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToHclTerraform;
class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // tag_values - computed: false, optional: true, required: false
        this._tagValues = new Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList(this, "tag_values", false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._comparator !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparator = this._comparator;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._target !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target;
        }
        if (this._tagValues?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagValues = this._tagValues?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparator = undefined;
            this._key = undefined;
            this._target = undefined;
            this._tagValues.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparator = value.comparator;
            this._key = value.key;
            this._target = value.target;
            this._tagValues.internalValue = value.tagValues;
        }
    }
    get comparator() {
        return this.getStringAttribute('comparator');
    }
    set comparator(value) {
        this._comparator = value;
    }
    resetComparator() {
        this._comparator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get comparatorInput() {
        return this._comparator;
    }
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    get target() {
        return this.getStringAttribute('target');
    }
    set target(value) {
        this._target = value;
    }
    resetTarget() {
        this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetInput() {
        return this._target;
    }
    get tagValues() {
        return this._tagValues;
    }
    putTagValues(value) {
        this._tagValues.internalValue = value;
    }
    resetTagValues() {
        this._tagValues.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagValuesInput() {
        return this._tagValues.internalValue;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference = Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference;
_q = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference[_q] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference", version: "0.0.0" };
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        simple_scope_term: macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform(struct.simpleScopeTerm),
        tag_scope_term: macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform(struct.tagScopeTerm),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform = macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform;
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        simple_scope_term: {
            value: macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToHclTerraform(struct.simpleScopeTerm),
            isBlock: true,
            type: "list",
            storageClassType: "Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermList",
        },
        tag_scope_term: {
            value: macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToHclTerraform(struct.tagScopeTerm),
            isBlock: true,
            type: "list",
            storageClassType: "Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.macie2ClassificationJobS3JobDefinitionScopingIncludesAndToHclTerraform = macie2ClassificationJobS3JobDefinitionScopingIncludesAndToHclTerraform;
class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // simple_scope_term - computed: false, optional: true, required: false
        this._simpleScopeTerm = new Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference(this, "simple_scope_term");
        // tag_scope_term - computed: false, optional: true, required: false
        this._tagScopeTerm = new Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference(this, "tag_scope_term");
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._simpleScopeTerm?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.simpleScopeTerm = this._simpleScopeTerm?.internalValue;
        }
        if (this._tagScopeTerm?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagScopeTerm = this._tagScopeTerm?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._simpleScopeTerm.internalValue = undefined;
            this._tagScopeTerm.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._simpleScopeTerm.internalValue = value.simpleScopeTerm;
            this._tagScopeTerm.internalValue = value.tagScopeTerm;
        }
    }
    get simpleScopeTerm() {
        return this._simpleScopeTerm;
    }
    putSimpleScopeTerm(value) {
        this._simpleScopeTerm.internalValue = value;
    }
    resetSimpleScopeTerm() {
        this._simpleScopeTerm.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get simpleScopeTermInput() {
        return this._simpleScopeTerm.internalValue;
    }
    get tagScopeTerm() {
        return this._tagScopeTerm;
    }
    putTagScopeTerm(value) {
        this._tagScopeTerm.internalValue = value;
    }
    resetTagScopeTerm() {
        this._tagScopeTerm.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagScopeTermInput() {
        return this._tagScopeTerm.internalValue;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference = Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference;
_r = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference[_r] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference", version: "0.0.0" };
class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList extends cdktf.ComplexList {
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
        return new Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList = Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList;
_s = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList[_s] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList", version: "0.0.0" };
function macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform, true)(struct.and),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform = macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform;
function macie2ClassificationJobS3JobDefinitionScopingIncludesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        and: {
            value: cdktf.listMapperHcl(macie2ClassificationJobS3JobDefinitionScopingIncludesAndToHclTerraform, true)(struct.and),
            isBlock: true,
            type: "list",
            storageClassType: "Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.macie2ClassificationJobS3JobDefinitionScopingIncludesToHclTerraform = macie2ClassificationJobS3JobDefinitionScopingIncludesToHclTerraform;
class Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // and - computed: false, optional: true, required: false
        this._and = new Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList(this, "and", false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._and?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.and = this._and?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._and.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._and.internalValue = value.and;
        }
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
}
exports.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference = Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference;
_t = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference[_t] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference", version: "0.0.0" };
function macie2ClassificationJobS3JobDefinitionScopingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        excludes: macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform(struct.excludes),
        includes: macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform(struct.includes),
    };
}
exports.macie2ClassificationJobS3JobDefinitionScopingToTerraform = macie2ClassificationJobS3JobDefinitionScopingToTerraform;
function macie2ClassificationJobS3JobDefinitionScopingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        excludes: {
            value: macie2ClassificationJobS3JobDefinitionScopingExcludesToHclTerraform(struct.excludes),
            isBlock: true,
            type: "list",
            storageClassType: "Macie2ClassificationJobS3JobDefinitionScopingExcludesList",
        },
        includes: {
            value: macie2ClassificationJobS3JobDefinitionScopingIncludesToHclTerraform(struct.includes),
            isBlock: true,
            type: "list",
            storageClassType: "Macie2ClassificationJobS3JobDefinitionScopingIncludesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.macie2ClassificationJobS3JobDefinitionScopingToHclTerraform = macie2ClassificationJobS3JobDefinitionScopingToHclTerraform;
class Macie2ClassificationJobS3JobDefinitionScopingOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // excludes - computed: false, optional: true, required: false
        this._excludes = new Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference(this, "excludes");
        // includes - computed: false, optional: true, required: false
        this._includes = new Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference(this, "includes");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._excludes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludes = this._excludes?.internalValue;
        }
        if (this._includes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.includes = this._includes?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._excludes.internalValue = undefined;
            this._includes.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._excludes.internalValue = value.excludes;
            this._includes.internalValue = value.includes;
        }
    }
    get excludes() {
        return this._excludes;
    }
    putExcludes(value) {
        this._excludes.internalValue = value;
    }
    resetExcludes() {
        this._excludes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludesInput() {
        return this._excludes.internalValue;
    }
    get includes() {
        return this._includes;
    }
    putIncludes(value) {
        this._includes.internalValue = value;
    }
    resetIncludes() {
        this._includes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includesInput() {
        return this._includes.internalValue;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionScopingOutputReference = Macie2ClassificationJobS3JobDefinitionScopingOutputReference;
_u = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionScopingOutputReference[_u] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference", version: "0.0.0" };
function macie2ClassificationJobS3JobDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_definitions: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform, true)(struct.bucketDefinitions),
        scoping: macie2ClassificationJobS3JobDefinitionScopingToTerraform(struct.scoping),
    };
}
exports.macie2ClassificationJobS3JobDefinitionToTerraform = macie2ClassificationJobS3JobDefinitionToTerraform;
function macie2ClassificationJobS3JobDefinitionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        bucket_definitions: {
            value: cdktf.listMapperHcl(macie2ClassificationJobS3JobDefinitionBucketDefinitionsToHclTerraform, true)(struct.bucketDefinitions),
            isBlock: true,
            type: "list",
            storageClassType: "Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList",
        },
        scoping: {
            value: macie2ClassificationJobS3JobDefinitionScopingToHclTerraform(struct.scoping),
            isBlock: true,
            type: "list",
            storageClassType: "Macie2ClassificationJobS3JobDefinitionScopingList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.macie2ClassificationJobS3JobDefinitionToHclTerraform = macie2ClassificationJobS3JobDefinitionToHclTerraform;
class Macie2ClassificationJobS3JobDefinitionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // bucket_definitions - computed: false, optional: true, required: false
        this._bucketDefinitions = new Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList(this, "bucket_definitions", false);
        // scoping - computed: false, optional: true, required: false
        this._scoping = new Macie2ClassificationJobS3JobDefinitionScopingOutputReference(this, "scoping");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._bucketDefinitions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketDefinitions = this._bucketDefinitions?.internalValue;
        }
        if (this._scoping?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scoping = this._scoping?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketDefinitions.internalValue = undefined;
            this._scoping.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketDefinitions.internalValue = value.bucketDefinitions;
            this._scoping.internalValue = value.scoping;
        }
    }
    get bucketDefinitions() {
        return this._bucketDefinitions;
    }
    putBucketDefinitions(value) {
        this._bucketDefinitions.internalValue = value;
    }
    resetBucketDefinitions() {
        this._bucketDefinitions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketDefinitionsInput() {
        return this._bucketDefinitions.internalValue;
    }
    get scoping() {
        return this._scoping;
    }
    putScoping(value) {
        this._scoping.internalValue = value;
    }
    resetScoping() {
        this._scoping.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scopingInput() {
        return this._scoping.internalValue;
    }
}
exports.Macie2ClassificationJobS3JobDefinitionOutputReference = Macie2ClassificationJobS3JobDefinitionOutputReference;
_v = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobS3JobDefinitionOutputReference[_v] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference", version: "0.0.0" };
function macie2ClassificationJobScheduleFrequencyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        daily_schedule: cdktf.booleanToTerraform(struct.dailySchedule),
        monthly_schedule: cdktf.numberToTerraform(struct.monthlySchedule),
        weekly_schedule: cdktf.stringToTerraform(struct.weeklySchedule),
    };
}
exports.macie2ClassificationJobScheduleFrequencyToTerraform = macie2ClassificationJobScheduleFrequencyToTerraform;
function macie2ClassificationJobScheduleFrequencyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        daily_schedule: {
            value: cdktf.booleanToHclTerraform(struct.dailySchedule),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        monthly_schedule: {
            value: cdktf.numberToHclTerraform(struct.monthlySchedule),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        weekly_schedule: {
            value: cdktf.stringToHclTerraform(struct.weeklySchedule),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.macie2ClassificationJobScheduleFrequencyToHclTerraform = macie2ClassificationJobScheduleFrequencyToHclTerraform;
class Macie2ClassificationJobScheduleFrequencyOutputReference extends cdktf.ComplexObject {
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
        if (this._dailySchedule !== undefined) {
            hasAnyValues = true;
            internalValueResult.dailySchedule = this._dailySchedule;
        }
        if (this._monthlySchedule !== undefined) {
            hasAnyValues = true;
            internalValueResult.monthlySchedule = this._monthlySchedule;
        }
        if (this._weeklySchedule !== undefined) {
            hasAnyValues = true;
            internalValueResult.weeklySchedule = this._weeklySchedule;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dailySchedule = undefined;
            this._monthlySchedule = undefined;
            this._weeklySchedule = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dailySchedule = value.dailySchedule;
            this._monthlySchedule = value.monthlySchedule;
            this._weeklySchedule = value.weeklySchedule;
        }
    }
    get dailySchedule() {
        return this.getBooleanAttribute('daily_schedule');
    }
    set dailySchedule(value) {
        this._dailySchedule = value;
    }
    resetDailySchedule() {
        this._dailySchedule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dailyScheduleInput() {
        return this._dailySchedule;
    }
    get monthlySchedule() {
        return this.getNumberAttribute('monthly_schedule');
    }
    set monthlySchedule(value) {
        this._monthlySchedule = value;
    }
    resetMonthlySchedule() {
        this._monthlySchedule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get monthlyScheduleInput() {
        return this._monthlySchedule;
    }
    get weeklySchedule() {
        return this.getStringAttribute('weekly_schedule');
    }
    set weeklySchedule(value) {
        this._weeklySchedule = value;
    }
    resetWeeklySchedule() {
        this._weeklySchedule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get weeklyScheduleInput() {
        return this._weeklySchedule;
    }
}
exports.Macie2ClassificationJobScheduleFrequencyOutputReference = Macie2ClassificationJobScheduleFrequencyOutputReference;
_w = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobScheduleFrequencyOutputReference[_w] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job aws_macie2_classification_job}
*/
class Macie2ClassificationJob extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Macie2ClassificationJob resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Macie2ClassificationJob to import
    * @param importFromId The id of the existing Macie2ClassificationJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Macie2ClassificationJob to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_macie2_classification_job", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job aws_macie2_classification_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2ClassificationJobConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_macie2_classification_job',
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
        // user_paused_details - computed: true, optional: false, required: false
        this._userPausedDetails = new Macie2ClassificationJobUserPausedDetailsList(this, "user_paused_details", false);
        // s3_job_definition - computed: false, optional: false, required: true
        this._s3JobDefinition = new Macie2ClassificationJobS3JobDefinitionOutputReference(this, "s3_job_definition");
        // schedule_frequency - computed: false, optional: true, required: false
        this._scheduleFrequency = new Macie2ClassificationJobScheduleFrequencyOutputReference(this, "schedule_frequency");
        this._customDataIdentifierIds = config.customDataIdentifierIds;
        this._description = config.description;
        this._id = config.id;
        this._initialRun = config.initialRun;
        this._jobStatus = config.jobStatus;
        this._jobType = config.jobType;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._samplingPercentage = config.samplingPercentage;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._s3JobDefinition.internalValue = config.s3JobDefinition;
        this._scheduleFrequency.internalValue = config.scheduleFrequency;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    get customDataIdentifierIds() {
        return this.getListAttribute('custom_data_identifier_ids');
    }
    set customDataIdentifierIds(value) {
        this._customDataIdentifierIds = value;
    }
    resetCustomDataIdentifierIds() {
        this._customDataIdentifierIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customDataIdentifierIdsInput() {
        return this._customDataIdentifierIds;
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
    get initialRun() {
        return this.getBooleanAttribute('initial_run');
    }
    set initialRun(value) {
        this._initialRun = value;
    }
    resetInitialRun() {
        this._initialRun = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get initialRunInput() {
        return this._initialRun;
    }
    // job_arn - computed: true, optional: false, required: false
    get jobArn() {
        return this.getStringAttribute('job_arn');
    }
    // job_id - computed: true, optional: false, required: false
    get jobId() {
        return this.getStringAttribute('job_id');
    }
    get jobStatus() {
        return this.getStringAttribute('job_status');
    }
    set jobStatus(value) {
        this._jobStatus = value;
    }
    resetJobStatus() {
        this._jobStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jobStatusInput() {
        return this._jobStatus;
    }
    get jobType() {
        return this.getStringAttribute('job_type');
    }
    set jobType(value) {
        this._jobType = value;
    }
    // Temporarily expose input value. Use with caution.
    get jobTypeInput() {
        return this._jobType;
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
    get namePrefix() {
        return this.getStringAttribute('name_prefix');
    }
    set namePrefix(value) {
        this._namePrefix = value;
    }
    resetNamePrefix() {
        this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get namePrefixInput() {
        return this._namePrefix;
    }
    get samplingPercentage() {
        return this.getNumberAttribute('sampling_percentage');
    }
    set samplingPercentage(value) {
        this._samplingPercentage = value;
    }
    resetSamplingPercentage() {
        this._samplingPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get samplingPercentageInput() {
        return this._samplingPercentage;
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
    get userPausedDetails() {
        return this._userPausedDetails;
    }
    get s3JobDefinition() {
        return this._s3JobDefinition;
    }
    putS3JobDefinition(value) {
        this._s3JobDefinition.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get s3JobDefinitionInput() {
        return this._s3JobDefinition.internalValue;
    }
    get scheduleFrequency() {
        return this._scheduleFrequency;
    }
    putScheduleFrequency(value) {
        this._scheduleFrequency.internalValue = value;
    }
    resetScheduleFrequency() {
        this._scheduleFrequency.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scheduleFrequencyInput() {
        return this._scheduleFrequency.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            custom_data_identifier_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customDataIdentifierIds),
            description: cdktf.stringToTerraform(this._description),
            id: cdktf.stringToTerraform(this._id),
            initial_run: cdktf.booleanToTerraform(this._initialRun),
            job_status: cdktf.stringToTerraform(this._jobStatus),
            job_type: cdktf.stringToTerraform(this._jobType),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            sampling_percentage: cdktf.numberToTerraform(this._samplingPercentage),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            s3_job_definition: macie2ClassificationJobS3JobDefinitionToTerraform(this._s3JobDefinition.internalValue),
            schedule_frequency: macie2ClassificationJobScheduleFrequencyToTerraform(this._scheduleFrequency.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            custom_data_identifier_ids: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customDataIdentifierIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
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
            initial_run: {
                value: cdktf.booleanToHclTerraform(this._initialRun),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            job_status: {
                value: cdktf.stringToHclTerraform(this._jobStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            job_type: {
                value: cdktf.stringToHclTerraform(this._jobType),
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
            name_prefix: {
                value: cdktf.stringToHclTerraform(this._namePrefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sampling_percentage: {
                value: cdktf.numberToHclTerraform(this._samplingPercentage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
            s3_job_definition: {
                value: macie2ClassificationJobS3JobDefinitionToHclTerraform(this._s3JobDefinition.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "Macie2ClassificationJobS3JobDefinitionList",
            },
            schedule_frequency: {
                value: macie2ClassificationJobScheduleFrequencyToHclTerraform(this._scheduleFrequency.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "Macie2ClassificationJobScheduleFrequencyList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.Macie2ClassificationJob = Macie2ClassificationJob;
_x = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJob[_x] = { fqn: "@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
Macie2ClassificationJob.tfResourceType = "aws_macie2_classification_job";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL21hY2llMi1jbGFzc2lmaWNhdGlvbi1qb2IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBU0EsK0JBQStCO0FBb0UvQixTQUFnQixtREFBbUQsQ0FBQyxNQUFpRDtJQUNuSCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPLEVBQ04sQ0FBQTtBQUNILENBQUM7QUFQRCxrSEFPQztBQUdELFNBQWdCLHNEQUFzRCxDQUFDLE1BQWlEO0lBQ3RILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHLEVBQ2IsQ0FBQztJQUNGLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVJELHdIQVFDO0FBRUQsTUFBYSx1REFBd0QsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUc5Rjs7Ozs7TUFLRTtJQUNGLFlBQW1CLGlCQUE2QyxFQUFFLGtCQUEwQixFQUFFLGtCQUEwQixFQUFF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U0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQTVZSCwwREE2WUM7OztBQTNZQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHNDQUFjLEdBQUcsK0JBQStCLEFBQWxDLENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYlxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2IjY3VzdG9tX2RhdGFfaWRlbnRpZmllcl9pZHMgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2IjY3VzdG9tX2RhdGFfaWRlbnRpZmllcl9pZHN9XG4gICovXG4gIHJlYWRvbmx5IGN1c3RvbURhdGFJZGVudGlmaWVySWRzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2IjZGVzY3JpcHRpb24gTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2IjZGVzY3JpcHRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI2lkIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iI2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI2luaXRpYWxfcnVuIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iI2luaXRpYWxfcnVufVxuICAqL1xuICByZWFkb25seSBpbml0aWFsUnVuPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI2pvYl9zdGF0dXMgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2Ijam9iX3N0YXR1c31cbiAgKi9cbiAgcmVhZG9ubHkgam9iU3RhdHVzPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI2pvYl90eXBlIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iI2pvYl90eXBlfVxuICAqL1xuICByZWFkb25seSBqb2JUeXBlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2IjbmFtZSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYiNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI25hbWVfcHJlZml4IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iI25hbWVfcHJlZml4fVxuICAqL1xuICByZWFkb25seSBuYW1lUHJlZml4Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI3NhbXBsaW5nX3BlcmNlbnRhZ2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2Ijc2FtcGxpbmdfcGVyY2VudGFnZX1cbiAgKi9cbiAgcmVhZG9ubHkgc2FtcGxpbmdQZXJjZW50YWdlPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI3RhZ3MgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2IjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2IjdGFnc19hbGwgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2IjdGFnc19hbGx9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBzM19qb2JfZGVmaW5pdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYiNzM19qb2JfZGVmaW5pdGlvbiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYiNzM19qb2JfZGVmaW5pdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgczNKb2JEZWZpbml0aW9uOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbjtcbiAgLyoqXG4gICogc2NoZWR1bGVfZnJlcXVlbmN5IGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI3NjaGVkdWxlX2ZyZXF1ZW5jeSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYiNzY2hlZHVsZV9mcmVxdWVuY3l9XG4gICovXG4gIHJlYWRvbmx5IHNjaGVkdWxlRnJlcXVlbmN5PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTY2hlZHVsZUZyZXF1ZW5jeTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JVc2VyUGF1c2VkRGV0YWlscyB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlVzZXJQYXVzZWREZXRhaWxzVG9UZXJyYWZvcm0oc3RydWN0PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JVc2VyUGF1c2VkRGV0YWlscyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlVzZXJQYXVzZWREZXRhaWxzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JVc2VyUGF1c2VkRGV0YWlscyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gIH07XG4gIHJldHVybiBhdHRycztcbn1cblxuZXhwb3J0IGNsYXNzIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iVXNlclBhdXNlZERldGFpbHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JVc2VyUGF1c2VkRGV0YWlscyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JVc2VyUGF1c2VkRGV0YWlscyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIGpvYl9leHBpcmVzX2F0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgam9iRXhwaXJlc0F0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnam9iX2V4cGlyZXNfYXQnKTtcbiAgfVxuXG4gIC8vIGpvYl9pbW1pbmVudF9leHBpcmF0aW9uX2hlYWx0aF9ldmVudF9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBqb2JJbW1pbmVudEV4cGlyYXRpb25IZWFsdGhFdmVudEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2pvYl9pbW1pbmVudF9leHBpcmF0aW9uX2hlYWx0aF9ldmVudF9hcm4nKTtcbiAgfVxuXG4gIC8vIGpvYl9wYXVzZWRfYXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBqb2JQYXVzZWRBdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2pvYl9wYXVzZWRfYXQnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JVc2VyUGF1c2VkRGV0YWlsc0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JVc2VyUGF1c2VkRGV0YWlsc091dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlVzZXJQYXVzZWREZXRhaWxzT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25CdWNrZXREZWZpbml0aW9ucyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2IjYWNjb3VudF9pZCBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYiNhY2NvdW50X2lkfVxuICAqL1xuICByZWFkb25seSBhY2NvdW50SWQ6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYiNidWNrZXRzIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iI2J1Y2tldHN9XG4gICovXG4gIHJlYWRvbmx5IGJ1Y2tldHM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25CdWNrZXREZWZpbml0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uQnVja2V0RGVmaW5pdGlvbnMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY2NvdW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY291bnRJZCksXG4gICAgYnVja2V0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuYnVja2V0cyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25CdWNrZXREZWZpbml0aW9uc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uQnVja2V0RGVmaW5pdGlvbnMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYWNjb3VudF9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWNjb3VudElkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBidWNrZXRzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuYnVja2V0cyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uQnVja2V0RGVmaW5pdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25CdWNrZXREZWZpbml0aW9ucyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWNjb3VudElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjY291bnRJZCA9IHRoaXMuX2FjY291bnRJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2J1Y2tldHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVja2V0cyA9IHRoaXMuX2J1Y2tldHM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbkJ1Y2tldERlZmluaXRpb25zIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FjY291bnRJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2J1Y2tldHMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYWNjb3VudElkID0gdmFsdWUuYWNjb3VudElkO1xuICAgICAgdGhpcy5fYnVja2V0cyA9IHZhbHVlLmJ1Y2tldHM7XG4gICAgfVxuICB9XG5cbiAgLy8gYWNjb3VudF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hY2NvdW50SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFjY291bnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjY291bnRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjY291bnRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWNjb3VudElkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY291bnRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2NvdW50SWQ7XG4gIH1cblxuICAvLyBidWNrZXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2J1Y2tldHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgYnVja2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdidWNrZXRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWNrZXRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2J1Y2tldHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVja2V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXRzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbkJ1Y2tldERlZmluaXRpb25zTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25CdWNrZXREZWZpbml0aW9uc1tdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbkJ1Y2tldERlZmluaXRpb25zT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uQnVja2V0RGVmaW5pdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2IjY29tcGFyYXRvciBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYiNjb21wYXJhdG9yfVxuICAqL1xuICByZWFkb25seSBjb21wYXJhdG9yPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI2tleSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYiNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYiN2YWx1ZXMgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2IjdmFsdWVzfVxuICAqL1xuICByZWFkb25seSB2YWx1ZXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kU2ltcGxlU2NvcGVUZXJtVG9UZXJyYWZvcm0oc3RydWN0PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRTaW1wbGVTY29wZVRlcm1PdXRwdXRSZWZlcmVuY2UgfCBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJhdG9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmF0b3IpLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEudmFsdWVzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kU2ltcGxlU2NvcGVUZXJtT3V0cHV0UmVmZXJlbmNlIHwgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRTaW1wbGVTY29wZVRlcm0pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNvbXBhcmF0b3I6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmF0b3IpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGtleToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB2YWx1ZXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS52YWx1ZXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRTaW1wbGVTY29wZVRlcm0gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NvbXBhcmF0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29tcGFyYXRvciA9IHRoaXMuX2NvbXBhcmF0b3I7XG4gICAgfVxuICAgIGlmICh0aGlzLl9rZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua2V5ID0gdGhpcy5fa2V5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlcyA9IHRoaXMuX3ZhbHVlcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kU2ltcGxlU2NvcGVUZXJtIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29tcGFyYXRvciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2tleSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbHVlcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY29tcGFyYXRvciA9IHZhbHVlLmNvbXBhcmF0b3I7XG4gICAgICB0aGlzLl9rZXkgPSB2YWx1ZS5rZXk7XG4gICAgICB0aGlzLl92YWx1ZXMgPSB2YWx1ZS52YWx1ZXM7XG4gICAgfVxuICB9XG5cbiAgLy8gY29tcGFyYXRvciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbXBhcmF0b3I/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbXBhcmF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wYXJhdG9yJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21wYXJhdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb21wYXJhdG9yID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29tcGFyYXRvcigpIHtcbiAgICB0aGlzLl9jb21wYXJhdG9yID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb21wYXJhdG9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBhcmF0b3I7XG4gIH1cblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rZXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQga2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rZXkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLZXkoKSB7XG4gICAgdGhpcy5fa2V5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5O1xuICB9XG5cbiAgLy8gdmFsdWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmFsdWVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd2YWx1ZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl92YWx1ZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWYWx1ZXMoKSB7XG4gICAgdGhpcy5fdmFsdWVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYiNrZXkgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2Ija2V5fVxuICAqL1xuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2IjdmFsdWUgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2IjdmFsdWV9XG4gICovXG4gIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm1UYWdWYWx1ZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlcyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGtleToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm1UYWdWYWx1ZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm1UYWdWYWx1ZXMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2tleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rZXkgPSB0aGlzLl9rZXk7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm1UYWdWYWx1ZXMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2V5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2V5ID0gdmFsdWUua2V5O1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rZXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQga2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rZXkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLZXkoKSB7XG4gICAgdGhpcy5fa2V5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5O1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92YWx1ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmFsdWUoKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlc0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm0ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI2NvbXBhcmF0b3IgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2IjY29tcGFyYXRvcn1cbiAgKi9cbiAgcmVhZG9ubHkgY29tcGFyYXRvcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYiNrZXkgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2Ija2V5fVxuICAqL1xuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2IjdGFyZ2V0IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iI3RhcmdldH1cbiAgKi9cbiAgcmVhZG9ubHkgdGFyZ2V0Pzogc3RyaW5nO1xuICAvKipcbiAgKiB0YWdfdmFsdWVzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI3RhZ192YWx1ZXMgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2IjdGFnX3ZhbHVlc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFnVmFsdWVzPzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm1UYWdWYWx1ZXNbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm1Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybU91dHB1dFJlZmVyZW5jZSB8IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmF0b3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyYXRvciksXG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdGFyZ2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldCksXG4gICAgdGFnX3ZhbHVlczogY2RrdGYubGlzdE1hcHBlcihtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlc1RvVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnRhZ1ZhbHVlcyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm1Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybU91dHB1dFJlZmVyZW5jZSB8IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjb21wYXJhdG9yOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb21wYXJhdG9yKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBrZXk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdGFyZ2V0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50YXJnZXQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHRhZ192YWx1ZXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzVG9IY2xUZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEudGFnVmFsdWVzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm1UYWdWYWx1ZXNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29tcGFyYXRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb21wYXJhdG9yID0gdGhpcy5fY29tcGFyYXRvcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2tleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rZXkgPSB0aGlzLl9rZXk7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFyZ2V0ID0gdGhpcy5fdGFyZ2V0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFnVmFsdWVzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhZ1ZhbHVlcyA9IHRoaXMuX3RhZ1ZhbHVlcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29tcGFyYXRvciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2tleSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhcmdldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhZ1ZhbHVlcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb21wYXJhdG9yID0gdmFsdWUuY29tcGFyYXRvcjtcbiAgICAgIHRoaXMuX2tleSA9IHZhbHVlLmtleTtcbiAgICAgIHRoaXMuX3RhcmdldCA9IHZhbHVlLnRhcmdldDtcbiAgICAgIHRoaXMuX3RhZ1ZhbHVlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUudGFnVmFsdWVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbXBhcmF0b3IgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb21wYXJhdG9yPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb21wYXJhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcGFyYXRvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29tcGFyYXRvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29tcGFyYXRvciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbXBhcmF0b3IoKSB7XG4gICAgdGhpcy5fY29tcGFyYXRvciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29tcGFyYXRvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wYXJhdG9yO1xuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa2V5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGtleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2V5KCkge1xuICAgIHRoaXMuX2tleSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleTtcbiAgfVxuXG4gIC8vIHRhcmdldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhcmdldD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFyZ2V0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0YXJnZXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RhcmdldCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhcmdldCgpIHtcbiAgICB0aGlzLl90YXJnZXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXQ7XG4gIH1cblxuICAvLyB0YWdfdmFsdWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ1ZhbHVlcyA9IG5ldyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlc0xpc3QodGhpcywgXCJ0YWdfdmFsdWVzXCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCB0YWdWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ1ZhbHVlcztcbiAgfVxuICBwdWJsaWMgcHV0VGFnVmFsdWVzKHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlc1tdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdWYWx1ZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ1ZhbHVlcygpIHtcbiAgICB0aGlzLl90YWdWYWx1ZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnVmFsdWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ1ZhbHVlcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kIHtcbiAgLyoqXG4gICogc2ltcGxlX3Njb3BlX3Rlcm0gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2Ijc2ltcGxlX3Njb3BlX3Rlcm0gTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2Ijc2ltcGxlX3Njb3BlX3Rlcm19XG4gICovXG4gIHJlYWRvbmx5IHNpbXBsZVNjb3BlVGVybT86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kU2ltcGxlU2NvcGVUZXJtO1xuICAvKipcbiAgKiB0YWdfc2NvcGVfdGVybSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYiN0YWdfc2NvcGVfdGVybSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYiN0YWdfc2NvcGVfdGVybX1cbiAgKi9cbiAgcmVhZG9ubHkgdGFnU2NvcGVUZXJtPzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRvVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgc2ltcGxlX3Njb3BlX3Rlcm06IG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kU2ltcGxlU2NvcGVUZXJtVG9UZXJyYWZvcm0oc3RydWN0IS5zaW1wbGVTY29wZVRlcm0pLFxuICAgIHRhZ19zY29wZV90ZXJtOiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybVRvVGVycmFmb3JtKHN0cnVjdCEudGFnU2NvcGVUZXJtKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRvSGNsVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHNpbXBsZV9zY29wZV90ZXJtOiB7XG4gICAgICB2YWx1ZTogbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRTaW1wbGVTY29wZVRlcm1Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNpbXBsZVNjb3BlVGVybSksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kU2ltcGxlU2NvcGVUZXJtTGlzdFwiLFxuICAgIH0sXG4gICAgdGFnX3Njb3BlX3Rlcm06IHtcbiAgICAgIHZhbHVlOiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybVRvSGNsVGVycmFmb3JtKHN0cnVjdCEudGFnU2NvcGVUZXJtKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm1MaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zaW1wbGVTY29wZVRlcm0/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2ltcGxlU2NvcGVUZXJtID0gdGhpcy5fc2ltcGxlU2NvcGVUZXJtPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFnU2NvcGVUZXJtPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhZ1Njb3BlVGVybSA9IHRoaXMuX3RhZ1Njb3BlVGVybT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NpbXBsZVNjb3BlVGVybS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFnU2NvcGVUZXJtLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2ltcGxlU2NvcGVUZXJtLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zaW1wbGVTY29wZVRlcm07XG4gICAgICB0aGlzLl90YWdTY29wZVRlcm0uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnRhZ1Njb3BlVGVybTtcbiAgICB9XG4gIH1cblxuICAvLyBzaW1wbGVfc2NvcGVfdGVybSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zaW1wbGVTY29wZVRlcm0gPSBuZXcgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRTaW1wbGVTY29wZVRlcm1PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJzaW1wbGVfc2NvcGVfdGVybVwiKTtcbiAgcHVibGljIGdldCBzaW1wbGVTY29wZVRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbXBsZVNjb3BlVGVybTtcbiAgfVxuICBwdWJsaWMgcHV0U2ltcGxlU2NvcGVUZXJtKHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybSkge1xuICAgIHRoaXMuX3NpbXBsZVNjb3BlVGVybS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2ltcGxlU2NvcGVUZXJtKCkge1xuICAgIHRoaXMuX3NpbXBsZVNjb3BlVGVybS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzaW1wbGVTY29wZVRlcm1JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2ltcGxlU2NvcGVUZXJtLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0YWdfc2NvcGVfdGVybSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdTY29wZVRlcm0gPSBuZXcgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm1PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJ0YWdfc2NvcGVfdGVybVwiKTtcbiAgcHVibGljIGdldCB0YWdTY29wZVRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ1Njb3BlVGVybTtcbiAgfVxuICBwdWJsaWMgcHV0VGFnU2NvcGVUZXJtKHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybSkge1xuICAgIHRoaXMuX3RhZ1Njb3BlVGVybS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnU2NvcGVUZXJtKCkge1xuICAgIHRoaXMuX3RhZ1Njb3BlVGVybS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdTY29wZVRlcm1JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnU2NvcGVUZXJtLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlcyB7XG4gIC8qKlxuICAqIGFuZCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYiNhbmQgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2IjYW5kfVxuICAqL1xuICByZWFkb25seSBhbmQ/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFtdIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc1RvVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzT3V0cHV0UmVmZXJlbmNlIHwgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYW5kOiBjZGt0Zi5saXN0TWFwcGVyKG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuYW5kKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzT3V0cHV0UmVmZXJlbmNlIHwgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFuZDoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2wobWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5hbmQpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZExpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hbmQ/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYW5kID0gdGhpcy5fYW5kPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hbmQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYW5kLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hbmQ7XG4gICAgfVxuICB9XG5cbiAgLy8gYW5kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FuZCA9IG5ldyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZExpc3QodGhpcywgXCJhbmRcIiwgZmFsc2UpO1xuICBwdWJsaWMgZ2V0IGFuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYW5kO1xuICB9XG4gIHB1YmxpYyBwdXRBbmQodmFsdWU6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FuZC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QW5kKCkge1xuICAgIHRoaXMuX2FuZC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYW5kLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRTaW1wbGVTY29wZVRlcm0ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI2NvbXBhcmF0b3IgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2IjY29tcGFyYXRvcn1cbiAgKi9cbiAgcmVhZG9ubHkgY29tcGFyYXRvcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYiNrZXkgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2Ija2V5fVxuICAqL1xuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2IjdmFsdWVzIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iI3ZhbHVlc31cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWVzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybVRvVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kU2ltcGxlU2NvcGVUZXJtT3V0cHV0UmVmZXJlbmNlIHwgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRTaW1wbGVTY29wZVRlcm0pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyYXRvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJhdG9yKSxcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnZhbHVlcyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRTaW1wbGVTY29wZVRlcm1Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybU91dHB1dFJlZmVyZW5jZSB8IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kU2ltcGxlU2NvcGVUZXJtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjb21wYXJhdG9yOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb21wYXJhdG9yKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBrZXk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdmFsdWVzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEudmFsdWVzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRTaW1wbGVTY29wZVRlcm1PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kU2ltcGxlU2NvcGVUZXJtIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb21wYXJhdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbXBhcmF0b3IgPSB0aGlzLl9jb21wYXJhdG9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5fa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmtleSA9IHRoaXMuX2tleTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWx1ZXMgPSB0aGlzLl92YWx1ZXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvbXBhcmF0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9rZXkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NvbXBhcmF0b3IgPSB2YWx1ZS5jb21wYXJhdG9yO1xuICAgICAgdGhpcy5fa2V5ID0gdmFsdWUua2V5O1xuICAgICAgdGhpcy5fdmFsdWVzID0gdmFsdWUudmFsdWVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbXBhcmF0b3IgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb21wYXJhdG9yPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb21wYXJhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcGFyYXRvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29tcGFyYXRvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29tcGFyYXRvciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbXBhcmF0b3IoKSB7XG4gICAgdGhpcy5fY29tcGFyYXRvciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29tcGFyYXRvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wYXJhdG9yO1xuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa2V5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGtleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2V5KCkge1xuICAgIHRoaXMuX2tleSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleTtcbiAgfVxuXG4gIC8vIHZhbHVlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZhbHVlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB2YWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndmFsdWVzJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdmFsdWVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmFsdWVzKCkge1xuICAgIHRoaXMuX3ZhbHVlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlcyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2Ija2V5IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iI2tleX1cbiAgKi9cbiAgcmVhZG9ubHkga2V5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI3ZhbHVlIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iI3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzVG9UZXJyYWZvcm0oc3RydWN0PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm1UYWdWYWx1ZXMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm1UYWdWYWx1ZXNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlcyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBrZXk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9rZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua2V5ID0gdGhpcy5fa2V5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2tleSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2tleSA9IHZhbHVlLmtleTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa2V5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGtleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2V5KCkge1xuICAgIHRoaXMuX2tleSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmFsdWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZhbHVlKCkge1xuICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm1UYWdWYWx1ZXNMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlc1tdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlc091dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlc091dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYiNjb21wYXJhdG9yIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iI2NvbXBhcmF0b3J9XG4gICovXG4gIHJlYWRvbmx5IGNvbXBhcmF0b3I/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2Ija2V5IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iI2tleX1cbiAgKi9cbiAgcmVhZG9ubHkga2V5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI3RhcmdldCBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYiN0YXJnZXR9XG4gICovXG4gIHJlYWRvbmx5IHRhcmdldD86IHN0cmluZztcbiAgLyoqXG4gICogdGFnX3ZhbHVlcyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYiN0YWdfdmFsdWVzIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iI3RhZ192YWx1ZXN9XG4gICovXG4gIHJlYWRvbmx5IHRhZ1ZhbHVlcz86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtVG9UZXJyYWZvcm0oc3RydWN0PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm1PdXRwdXRSZWZlcmVuY2UgfCBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRhZ1Njb3BlVGVybSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJhdG9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmF0b3IpLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHRhcmdldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXQpLFxuICAgIHRhZ192YWx1ZXM6IGNka3RmLmxpc3RNYXBwZXIobWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm1UYWdWYWx1ZXNUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS50YWdWYWx1ZXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm1PdXRwdXRSZWZlcmVuY2UgfCBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRhZ1Njb3BlVGVybSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgY29tcGFyYXRvcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyYXRvciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAga2V5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHRhcmdldDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB0YWdfdmFsdWVzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlc1RvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnRhZ1ZhbHVlcyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRhZ1Njb3BlVGVybU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm0gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NvbXBhcmF0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29tcGFyYXRvciA9IHRoaXMuX2NvbXBhcmF0b3I7XG4gICAgfVxuICAgIGlmICh0aGlzLl9rZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua2V5ID0gdGhpcy5fa2V5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhcmdldCA9IHRoaXMuX3RhcmdldDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhZ1ZhbHVlcz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YWdWYWx1ZXMgPSB0aGlzLl90YWdWYWx1ZXM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRhZ1Njb3BlVGVybSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvbXBhcmF0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9rZXkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YXJnZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YWdWYWx1ZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY29tcGFyYXRvciA9IHZhbHVlLmNvbXBhcmF0b3I7XG4gICAgICB0aGlzLl9rZXkgPSB2YWx1ZS5rZXk7XG4gICAgICB0aGlzLl90YXJnZXQgPSB2YWx1ZS50YXJnZXQ7XG4gICAgICB0aGlzLl90YWdWYWx1ZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnRhZ1ZhbHVlcztcbiAgICB9XG4gIH1cblxuICAvLyBjb21wYXJhdG9yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29tcGFyYXRvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29tcGFyYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbXBhcmF0b3InKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbXBhcmF0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXBhcmF0b3IgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21wYXJhdG9yKCkge1xuICAgIHRoaXMuX2NvbXBhcmF0b3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXBhcmF0b3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGFyYXRvcjtcbiAgfVxuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBrZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2tleSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEtleSgpIHtcbiAgICB0aGlzLl9rZXkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXk7XG4gIH1cblxuICAvLyB0YXJnZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXJnZXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhcmdldCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFyZ2V0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YXJnZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXJnZXQoKSB7XG4gICAgdGhpcy5fdGFyZ2V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICB9XG5cbiAgLy8gdGFnX3ZhbHVlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdWYWx1ZXMgPSBuZXcgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm1UYWdWYWx1ZXNMaXN0KHRoaXMsIFwidGFnX3ZhbHVlc1wiLCBmYWxzZSk7XG4gIHB1YmxpYyBnZXQgdGFnVmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLl90YWdWYWx1ZXM7XG4gIH1cbiAgcHVibGljIHB1dFRhZ1ZhbHVlcyh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm1UYWdWYWx1ZXNbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnVmFsdWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdWYWx1ZXMoKSB7XG4gICAgdGhpcy5fdGFnVmFsdWVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ1ZhbHVlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdWYWx1ZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZCB7XG4gIC8qKlxuICAqIHNpbXBsZV9zY29wZV90ZXJtIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI3NpbXBsZV9zY29wZV90ZXJtIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iI3NpbXBsZV9zY29wZV90ZXJtfVxuICAqL1xuICByZWFkb25seSBzaW1wbGVTY29wZVRlcm0/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybTtcbiAgLyoqXG4gICogdGFnX3Njb3BlX3Rlcm0gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2IjdGFnX3Njb3BlX3Rlcm0gTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2IjdGFnX3Njb3BlX3Rlcm19XG4gICovXG4gIHJlYWRvbmx5IHRhZ1Njb3BlVGVybT86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZCB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNpbXBsZV9zY29wZV90ZXJtOiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybVRvVGVycmFmb3JtKHN0cnVjdCEuc2ltcGxlU2NvcGVUZXJtKSxcbiAgICB0YWdfc2NvcGVfdGVybTogbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm1Ub1RlcnJhZm9ybShzdHJ1Y3QhLnRhZ1Njb3BlVGVybSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZCB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBzaW1wbGVfc2NvcGVfdGVybToge1xuICAgICAgdmFsdWU6IG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kU2ltcGxlU2NvcGVUZXJtVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zaW1wbGVTY29wZVRlcm0pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybUxpc3RcIixcbiAgICB9LFxuICAgIHRhZ19zY29wZV90ZXJtOiB7XG4gICAgICB2YWx1ZTogbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm1Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRhZ1Njb3BlVGVybSksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZCB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fc2ltcGxlU2NvcGVUZXJtPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNpbXBsZVNjb3BlVGVybSA9IHRoaXMuX3NpbXBsZVNjb3BlVGVybT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhZ1Njb3BlVGVybT8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YWdTY29wZVRlcm0gPSB0aGlzLl90YWdTY29wZVRlcm0/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZCB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zaW1wbGVTY29wZVRlcm0uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhZ1Njb3BlVGVybS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NpbXBsZVNjb3BlVGVybS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc2ltcGxlU2NvcGVUZXJtO1xuICAgICAgdGhpcy5fdGFnU2NvcGVUZXJtLmludGVybmFsVmFsdWUgPSB2YWx1ZS50YWdTY29wZVRlcm07XG4gICAgfVxuICB9XG5cbiAgLy8gc2ltcGxlX3Njb3BlX3Rlcm0gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2ltcGxlU2NvcGVUZXJtID0gbmV3IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kU2ltcGxlU2NvcGVUZXJtT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwic2ltcGxlX3Njb3BlX3Rlcm1cIik7XG4gIHB1YmxpYyBnZXQgc2ltcGxlU2NvcGVUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLl9zaW1wbGVTY29wZVRlcm07XG4gIH1cbiAgcHVibGljIHB1dFNpbXBsZVNjb3BlVGVybSh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRTaW1wbGVTY29wZVRlcm0pIHtcbiAgICB0aGlzLl9zaW1wbGVTY29wZVRlcm0uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNpbXBsZVNjb3BlVGVybSgpIHtcbiAgICB0aGlzLl9zaW1wbGVTY29wZVRlcm0uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2ltcGxlU2NvcGVUZXJtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbXBsZVNjb3BlVGVybS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGFnX3Njb3BlX3Rlcm0gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnU2NvcGVUZXJtID0gbmV3IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwidGFnX3Njb3BlX3Rlcm1cIik7XG4gIHB1YmxpYyBnZXQgdGFnU2NvcGVUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLl90YWdTY29wZVRlcm07XG4gIH1cbiAgcHVibGljIHB1dFRhZ1Njb3BlVGVybSh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm0pIHtcbiAgICB0aGlzLl90YWdTY29wZVRlcm0uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ1Njb3BlVGVybSgpIHtcbiAgICB0aGlzLl90YWdTY29wZVRlcm0uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnU2NvcGVUZXJtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ1Njb3BlVGVybS5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZExpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXMge1xuICAvKipcbiAgKiBhbmQgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2IjYW5kIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iI2FuZH1cbiAgKi9cbiAgcmVhZG9ubHkgYW5kPzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc091dHB1dFJlZmVyZW5jZSB8IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFuZDogY2RrdGYubGlzdE1hcHBlcihtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRvVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLmFuZCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc091dHB1dFJlZmVyZW5jZSB8IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhbmQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVG9IY2xUZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuYW5kKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYW5kPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFuZCA9IHRoaXMuX2FuZD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYW5kLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FuZC5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYW5kO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFuZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbmQgPSBuZXcgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRMaXN0KHRoaXMsIFwiYW5kXCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCBhbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FuZDtcbiAgfVxuICBwdWJsaWMgcHV0QW5kKHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFtdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hbmQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFuZCgpIHtcbiAgICB0aGlzLl9hbmQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYW5kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FuZC5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZyB7XG4gIC8qKlxuICAqIGV4Y2x1ZGVzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI2V4Y2x1ZGVzIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iI2V4Y2x1ZGVzfVxuICAqL1xuICByZWFkb25seSBleGNsdWRlcz86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzO1xuICAvKipcbiAgKiBpbmNsdWRlcyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYiNpbmNsdWRlcyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYiNpbmNsdWRlc31cbiAgKi9cbiAgcmVhZG9ubHkgaW5jbHVkZXM/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ1RvVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ091dHB1dFJlZmVyZW5jZSB8IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBleGNsdWRlczogbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4Y2x1ZGVzKSxcbiAgICBpbmNsdWRlczogbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNUb1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdPdXRwdXRSZWZlcmVuY2UgfCBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGV4Y2x1ZGVzOiB7XG4gICAgICB2YWx1ZTogbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmV4Y2x1ZGVzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNMaXN0XCIsXG4gICAgfSxcbiAgICBpbmNsdWRlczoge1xuICAgICAgdmFsdWU6IG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlcyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZXhjbHVkZXM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZXhjbHVkZXMgPSB0aGlzLl9leGNsdWRlcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluY2x1ZGVzID0gdGhpcy5faW5jbHVkZXM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9leGNsdWRlcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5jbHVkZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZXhjbHVkZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmV4Y2x1ZGVzO1xuICAgICAgdGhpcy5faW5jbHVkZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmluY2x1ZGVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGV4Y2x1ZGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4Y2x1ZGVzID0gbmV3IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZXhjbHVkZXNcIik7XG4gIHB1YmxpYyBnZXQgZXhjbHVkZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4Y2x1ZGVzO1xuICB9XG4gIHB1YmxpYyBwdXRFeGNsdWRlcyh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXMpIHtcbiAgICB0aGlzLl9leGNsdWRlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXhjbHVkZXMoKSB7XG4gICAgdGhpcy5fZXhjbHVkZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhjbHVkZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhjbHVkZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGluY2x1ZGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luY2x1ZGVzID0gbmV3IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiaW5jbHVkZXNcIik7XG4gIHB1YmxpYyBnZXQgaW5jbHVkZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVzO1xuICB9XG4gIHB1YmxpYyBwdXRJbmNsdWRlcyh2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXMpIHtcbiAgICB0aGlzLl9pbmNsdWRlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5jbHVkZXMoKSB7XG4gICAgdGhpcy5faW5jbHVkZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5jbHVkZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbiB7XG4gIC8qKlxuICAqIGJ1Y2tldF9kZWZpbml0aW9ucyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYiNidWNrZXRfZGVmaW5pdGlvbnMgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2IjYnVja2V0X2RlZmluaXRpb25zfVxuICAqL1xuICByZWFkb25seSBidWNrZXREZWZpbml0aW9ucz86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uQnVja2V0RGVmaW5pdGlvbnNbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBzY29waW5nIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI3Njb3BpbmcgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2Ijc2NvcGluZ31cbiAgKi9cbiAgcmVhZG9ubHkgc2NvcGluZz86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25PdXRwdXRSZWZlcmVuY2UgfCBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfZGVmaW5pdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIobWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25CdWNrZXREZWZpbml0aW9uc1RvVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLmJ1Y2tldERlZmluaXRpb25zKSxcbiAgICBzY29waW5nOiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjb3BpbmcpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25PdXRwdXRSZWZlcmVuY2UgfCBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYnVja2V0X2RlZmluaXRpb25zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbkJ1Y2tldERlZmluaXRpb25zVG9IY2xUZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuYnVja2V0RGVmaW5pdGlvbnMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbkJ1Y2tldERlZmluaXRpb25zTGlzdFwiLFxuICAgIH0sXG4gICAgc2NvcGluZzoge1xuICAgICAgdmFsdWU6IG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2NvcGluZyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9idWNrZXREZWZpbml0aW9ucz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWNrZXREZWZpbml0aW9ucyA9IHRoaXMuX2J1Y2tldERlZmluaXRpb25zPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2NvcGluZz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zY29waW5nID0gdGhpcy5fc2NvcGluZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYnVja2V0RGVmaW5pdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Njb3BpbmcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYnVja2V0RGVmaW5pdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmJ1Y2tldERlZmluaXRpb25zO1xuICAgICAgdGhpcy5fc2NvcGluZy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc2NvcGluZztcbiAgICB9XG4gIH1cblxuICAvLyBidWNrZXRfZGVmaW5pdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVja2V0RGVmaW5pdGlvbnMgPSBuZXcgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25CdWNrZXREZWZpbml0aW9uc0xpc3QodGhpcywgXCJidWNrZXRfZGVmaW5pdGlvbnNcIiwgZmFsc2UpO1xuICBwdWJsaWMgZ2V0IGJ1Y2tldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXREZWZpbml0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0QnVja2V0RGVmaW5pdGlvbnModmFsdWU6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uQnVja2V0RGVmaW5pdGlvbnNbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYnVja2V0RGVmaW5pdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJ1Y2tldERlZmluaXRpb25zKCkge1xuICAgIHRoaXMuX2J1Y2tldERlZmluaXRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldERlZmluaXRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1Y2tldERlZmluaXRpb25zLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzY29waW5nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Njb3BpbmcgPSBuZXcgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwic2NvcGluZ1wiKTtcbiAgcHVibGljIGdldCBzY29waW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9zY29waW5nO1xuICB9XG4gIHB1YmxpYyBwdXRTY29waW5nKHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmcpIHtcbiAgICB0aGlzLl9zY29waW5nLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTY29waW5nKCkge1xuICAgIHRoaXMuX3Njb3BpbmcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NvcGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY29waW5nLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTY2hlZHVsZUZyZXF1ZW5jeSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2IjZGFpbHlfc2NoZWR1bGUgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2IjZGFpbHlfc2NoZWR1bGV9XG4gICovXG4gIHJlYWRvbmx5IGRhaWx5U2NoZWR1bGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2IjbW9udGhseV9zY2hlZHVsZSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYiNtb250aGx5X3NjaGVkdWxlfVxuICAqL1xuICByZWFkb25seSBtb250aGx5U2NoZWR1bGU/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2Ijd2Vla2x5X3NjaGVkdWxlIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iI3dlZWtseV9zY2hlZHVsZX1cbiAgKi9cbiAgcmVhZG9ubHkgd2Vla2x5U2NoZWR1bGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlNjaGVkdWxlRnJlcXVlbmN5VG9UZXJyYWZvcm0oc3RydWN0PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTY2hlZHVsZUZyZXF1ZW5jeU91dHB1dFJlZmVyZW5jZSB8IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iU2NoZWR1bGVGcmVxdWVuY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGFpbHlfc2NoZWR1bGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRhaWx5U2NoZWR1bGUpLFxuICAgIG1vbnRobHlfc2NoZWR1bGU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubW9udGhseVNjaGVkdWxlKSxcbiAgICB3ZWVrbHlfc2NoZWR1bGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEud2Vla2x5U2NoZWR1bGUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iU2NoZWR1bGVGcmVxdWVuY3lUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlNjaGVkdWxlRnJlcXVlbmN5T3V0cHV0UmVmZXJlbmNlIHwgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTY2hlZHVsZUZyZXF1ZW5jeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZGFpbHlfc2NoZWR1bGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kYWlseVNjaGVkdWxlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgbW9udGhseV9zY2hlZHVsZToge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEubW9udGhseVNjaGVkdWxlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICB3ZWVrbHlfc2NoZWR1bGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLndlZWtseVNjaGVkdWxlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iU2NoZWR1bGVGcmVxdWVuY3lPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iU2NoZWR1bGVGcmVxdWVuY3kgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RhaWx5U2NoZWR1bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGFpbHlTY2hlZHVsZSA9IHRoaXMuX2RhaWx5U2NoZWR1bGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tb250aGx5U2NoZWR1bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubW9udGhseVNjaGVkdWxlID0gdGhpcy5fbW9udGhseVNjaGVkdWxlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fd2Vla2x5U2NoZWR1bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQud2Vla2x5U2NoZWR1bGUgPSB0aGlzLl93ZWVrbHlTY2hlZHVsZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iU2NoZWR1bGVGcmVxdWVuY3kgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kYWlseVNjaGVkdWxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbW9udGhseVNjaGVkdWxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fd2Vla2x5U2NoZWR1bGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RhaWx5U2NoZWR1bGUgPSB2YWx1ZS5kYWlseVNjaGVkdWxlO1xuICAgICAgdGhpcy5fbW9udGhseVNjaGVkdWxlID0gdmFsdWUubW9udGhseVNjaGVkdWxlO1xuICAgICAgdGhpcy5fd2Vla2x5U2NoZWR1bGUgPSB2YWx1ZS53ZWVrbHlTY2hlZHVsZTtcbiAgICB9XG4gIH1cblxuICAvLyBkYWlseV9zY2hlZHVsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kYWlseVNjaGVkdWxlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkYWlseVNjaGVkdWxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2RhaWx5X3NjaGVkdWxlJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYWlseVNjaGVkdWxlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9kYWlseVNjaGVkdWxlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGFpbHlTY2hlZHVsZSgpIHtcbiAgICB0aGlzLl9kYWlseVNjaGVkdWxlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYWlseVNjaGVkdWxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhaWx5U2NoZWR1bGU7XG4gIH1cblxuICAvLyBtb250aGx5X3NjaGVkdWxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbW9udGhseVNjaGVkdWxlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtb250aGx5U2NoZWR1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtb250aGx5X3NjaGVkdWxlJyk7XG4gIH1cbiAgcHVibGljIHNldCBtb250aGx5U2NoZWR1bGUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21vbnRobHlTY2hlZHVsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1vbnRobHlTY2hlZHVsZSgpIHtcbiAgICB0aGlzLl9tb250aGx5U2NoZWR1bGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1vbnRobHlTY2hlZHVsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tb250aGx5U2NoZWR1bGU7XG4gIH1cblxuICAvLyB3ZWVrbHlfc2NoZWR1bGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93ZWVrbHlTY2hlZHVsZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgd2Vla2x5U2NoZWR1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3ZWVrbHlfc2NoZWR1bGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHdlZWtseVNjaGVkdWxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93ZWVrbHlTY2hlZHVsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFdlZWtseVNjaGVkdWxlKCkge1xuICAgIHRoaXMuX3dlZWtseVNjaGVkdWxlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3ZWVrbHlTY2hlZHVsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl93ZWVrbHlTY2hlZHVsZTtcbiAgfVxufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYiBhd3NfbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYn1cbiovXG5leHBvcnQgY2xhc3MgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2IgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiYXdzX21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2JcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2IgcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2IgdG8gaW1wb3J0XG4gICogQHBhcmFtIGltcG9ydEZyb21JZCBUaGUgaWQgb2YgdGhlIGV4aXN0aW5nIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iIHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9tYWNpZTJfY2xhc3NpZmljYXRpb25fam9iI2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYiB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYlwiLCBpbXBvcnRJZDogaW1wb3J0RnJvbUlkLCBwcm92aWRlciB9KTtcbiAgICAgIH1cblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2IgYXdzX21hY2llMl9jbGFzc2lmaWNhdGlvbl9qb2J9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnLFxuICAgICAgICBwcm92aWRlclZlcnNpb246ICczLjc2LjEnLFxuICAgICAgICBwcm92aWRlclZlcnNpb25Db25zdHJhaW50OiAnfj4gMy4wJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlLFxuICAgICAgcHJvdmlzaW9uZXJzOiBjb25maWcucHJvdmlzaW9uZXJzLFxuICAgICAgY29ubmVjdGlvbjogY29uZmlnLmNvbm5lY3Rpb24sXG4gICAgICBmb3JFYWNoOiBjb25maWcuZm9yRWFjaFxuICAgIH0pO1xuICAgIHRoaXMuX2N1c3RvbURhdGFJZGVudGlmaWVySWRzID0gY29uZmlnLmN1c3RvbURhdGFJZGVudGlmaWVySWRzO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gY29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX2luaXRpYWxSdW4gPSBjb25maWcuaW5pdGlhbFJ1bjtcbiAgICB0aGlzLl9qb2JTdGF0dXMgPSBjb25maWcuam9iU3RhdHVzO1xuICAgIHRoaXMuX2pvYlR5cGUgPSBjb25maWcuam9iVHlwZTtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fbmFtZVByZWZpeCA9IGNvbmZpZy5uYW1lUHJlZml4O1xuICAgIHRoaXMuX3NhbXBsaW5nUGVyY2VudGFnZSA9IGNvbmZpZy5zYW1wbGluZ1BlcmNlbnRhZ2U7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9zM0pvYkRlZmluaXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zM0pvYkRlZmluaXRpb247XG4gICAgdGhpcy5fc2NoZWR1bGVGcmVxdWVuY3kuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zY2hlZHVsZUZyZXF1ZW5jeTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gY3JlYXRlZF9hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0ZWRBdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0ZWRfYXQnKTtcbiAgfVxuXG4gIC8vIGN1c3RvbV9kYXRhX2lkZW50aWZpZXJfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tRGF0YUlkZW50aWZpZXJJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY3VzdG9tRGF0YUlkZW50aWZpZXJJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY3VzdG9tX2RhdGFfaWRlbnRpZmllcl9pZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbURhdGFJZGVudGlmaWVySWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2N1c3RvbURhdGFJZGVudGlmaWVySWRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tRGF0YUlkZW50aWZpZXJJZHMoKSB7XG4gICAgdGhpcy5fY3VzdG9tRGF0YUlkZW50aWZpZXJJZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbURhdGFJZGVudGlmaWVySWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbURhdGFJZGVudGlmaWVySWRzO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gaW5pdGlhbF9ydW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5pdGlhbFJ1bj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5pdGlhbFJ1bigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbml0aWFsX3J1bicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5pdGlhbFJ1bih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faW5pdGlhbFJ1biA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluaXRpYWxSdW4oKSB7XG4gICAgdGhpcy5faW5pdGlhbFJ1biA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5pdGlhbFJ1bklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbml0aWFsUnVuO1xuICB9XG5cbiAgLy8gam9iX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGpvYkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2pvYl9hcm4nKTtcbiAgfVxuXG4gIC8vIGpvYl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGpvYklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnam9iX2lkJyk7XG4gIH1cblxuICAvLyBqb2Jfc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfam9iU3RhdHVzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBqb2JTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdqb2Jfc3RhdHVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBqb2JTdGF0dXModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2pvYlN0YXR1cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEpvYlN0YXR1cygpIHtcbiAgICB0aGlzLl9qb2JTdGF0dXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGpvYlN0YXR1c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9qb2JTdGF0dXM7XG4gIH1cblxuICAvLyBqb2JfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9qb2JUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBqb2JUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnam9iX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGpvYlR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2pvYlR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgam9iVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9qb2JUeXBlO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBuYW1lX3ByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWVQcmVmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWVQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lX3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZVByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZVByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWVQcmVmaXgoKSB7XG4gICAgdGhpcy5fbmFtZVByZWZpeCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZVByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lUHJlZml4O1xuICB9XG5cbiAgLy8gc2FtcGxpbmdfcGVyY2VudGFnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NhbXBsaW5nUGVyY2VudGFnZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgc2FtcGxpbmdQZXJjZW50YWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc2FtcGxpbmdfcGVyY2VudGFnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2FtcGxpbmdQZXJjZW50YWdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zYW1wbGluZ1BlcmNlbnRhZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTYW1wbGluZ1BlcmNlbnRhZ2UoKSB7XG4gICAgdGhpcy5fc2FtcGxpbmdQZXJjZW50YWdlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzYW1wbGluZ1BlcmNlbnRhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2FtcGxpbmdQZXJjZW50YWdlO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB1c2VyX3BhdXNlZF9kZXRhaWxzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZXJQYXVzZWREZXRhaWxzID0gbmV3IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iVXNlclBhdXNlZERldGFpbHNMaXN0KHRoaXMsIFwidXNlcl9wYXVzZWRfZGV0YWlsc1wiLCBmYWxzZSk7XG4gIHB1YmxpYyBnZXQgdXNlclBhdXNlZERldGFpbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJQYXVzZWREZXRhaWxzO1xuICB9XG5cbiAgLy8gczNfam9iX2RlZmluaXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfczNKb2JEZWZpbml0aW9uID0gbmV3IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiczNfam9iX2RlZmluaXRpb25cIik7XG4gIHB1YmxpYyBnZXQgczNKb2JEZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zM0pvYkRlZmluaXRpb247XG4gIH1cbiAgcHVibGljIHB1dFMzSm9iRGVmaW5pdGlvbih2YWx1ZTogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb24pIHtcbiAgICB0aGlzLl9zM0pvYkRlZmluaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzM0pvYkRlZmluaXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNKb2JEZWZpbml0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzY2hlZHVsZV9mcmVxdWVuY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NoZWR1bGVGcmVxdWVuY3kgPSBuZXcgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTY2hlZHVsZUZyZXF1ZW5jeU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInNjaGVkdWxlX2ZyZXF1ZW5jeVwiKTtcbiAgcHVibGljIGdldCBzY2hlZHVsZUZyZXF1ZW5jeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NoZWR1bGVGcmVxdWVuY3k7XG4gIH1cbiAgcHVibGljIHB1dFNjaGVkdWxlRnJlcXVlbmN5KHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlNjaGVkdWxlRnJlcXVlbmN5KSB7XG4gICAgdGhpcy5fc2NoZWR1bGVGcmVxdWVuY3kuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNjaGVkdWxlRnJlcXVlbmN5KCkge1xuICAgIHRoaXMuX3NjaGVkdWxlRnJlcXVlbmN5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjaGVkdWxlRnJlcXVlbmN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjaGVkdWxlRnJlcXVlbmN5LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1c3RvbV9kYXRhX2lkZW50aWZpZXJfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fY3VzdG9tRGF0YUlkZW50aWZpZXJJZHMpLFxuICAgICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc2NyaXB0aW9uKSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBpbml0aWFsX3J1bjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2luaXRpYWxSdW4pLFxuICAgICAgam9iX3N0YXR1czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fam9iU3RhdHVzKSxcbiAgICAgIGpvYl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9qb2JUeXBlKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgbmFtZV9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWVQcmVmaXgpLFxuICAgICAgc2FtcGxpbmdfcGVyY2VudGFnZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fc2FtcGxpbmdQZXJjZW50YWdlKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgczNfam9iX2RlZmluaXRpb246IG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uVG9UZXJyYWZvcm0odGhpcy5fczNKb2JEZWZpbml0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgc2NoZWR1bGVfZnJlcXVlbmN5OiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlNjaGVkdWxlRnJlcXVlbmN5VG9UZXJyYWZvcm0odGhpcy5fc2NoZWR1bGVGcmVxdWVuY3kuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBjdXN0b21fZGF0YV9pZGVudGlmaWVyX2lkczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2N1c3RvbURhdGFJZGVudGlmaWVySWRzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpbml0aWFsX3J1bjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX2luaXRpYWxSdW4pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgam9iX3N0YXR1czoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fam9iU3RhdHVzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgam9iX3R5cGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2pvYlR5cGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbmFtZV9wcmVmaXg6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX25hbWVQcmVmaXgpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzYW1wbGluZ19wZXJjZW50YWdlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9zYW1wbGluZ1BlcmNlbnRhZ2UpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICB0YWdzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgdGFnc19hbGw6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICBzM19qb2JfZGVmaW5pdGlvbjoge1xuICAgICAgICB2YWx1ZTogbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25Ub0hjbFRlcnJhZm9ybSh0aGlzLl9zM0pvYkRlZmluaXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHNjaGVkdWxlX2ZyZXF1ZW5jeToge1xuICAgICAgICB2YWx1ZTogbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTY2hlZHVsZUZyZXF1ZW5jeVRvSGNsVGVycmFmb3JtKHRoaXMuX3NjaGVkdWxlRnJlcXVlbmN5LmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlNjaGVkdWxlRnJlcXVlbmN5TGlzdFwiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19