"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3BucketReplicationConfigurationA = exports.S3BucketReplicationConfigurationRuleList = exports.S3BucketReplicationConfigurationRuleOutputReference = exports.s3BucketReplicationConfigurationRuleToHclTerraform = exports.s3BucketReplicationConfigurationRuleToTerraform = exports.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference = exports.s3BucketReplicationConfigurationRuleSourceSelectionCriteriaToHclTerraform = exports.s3BucketReplicationConfigurationRuleSourceSelectionCriteriaToTerraform = exports.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference = exports.s3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsToHclTerraform = exports.s3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform = exports.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference = exports.s3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsToHclTerraform = exports.s3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsToTerraform = exports.S3BucketReplicationConfigurationRuleFilterOutputReference = exports.s3BucketReplicationConfigurationRuleFilterToHclTerraform = exports.s3BucketReplicationConfigurationRuleFilterToTerraform = exports.S3BucketReplicationConfigurationRuleFilterTagOutputReference = exports.s3BucketReplicationConfigurationRuleFilterTagToHclTerraform = exports.s3BucketReplicationConfigurationRuleFilterTagToTerraform = exports.S3BucketReplicationConfigurationRuleFilterAndOutputReference = exports.s3BucketReplicationConfigurationRuleFilterAndToHclTerraform = exports.s3BucketReplicationConfigurationRuleFilterAndToTerraform = exports.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference = exports.s3BucketReplicationConfigurationRuleExistingObjectReplicationToHclTerraform = exports.s3BucketReplicationConfigurationRuleExistingObjectReplicationToTerraform = exports.S3BucketReplicationConfigurationRuleDestinationOutputReference = exports.s3BucketReplicationConfigurationRuleDestinationToHclTerraform = exports.s3BucketReplicationConfigurationRuleDestinationToTerraform = exports.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference = exports.s3BucketReplicationConfigurationRuleDestinationReplicationTimeToHclTerraform = exports.s3BucketReplicationConfigurationRuleDestinationReplicationTimeToTerraform = exports.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference = exports.s3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeToHclTerraform = exports.s3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeToTerraform = exports.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference = exports.s3BucketReplicationConfigurationRuleDestinationMetricsToHclTerraform = exports.s3BucketReplicationConfigurationRuleDestinationMetricsToTerraform = exports.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference = exports.s3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdToHclTerraform = exports.s3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdToTerraform = exports.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference = exports.s3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationToHclTerraform = exports.s3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationToTerraform = exports.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference = exports.s3BucketReplicationConfigurationRuleDestinationAccessControlTranslationToHclTerraform = exports.s3BucketReplicationConfigurationRuleDestinationAccessControlTranslationToTerraform = exports.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference = exports.s3BucketReplicationConfigurationRuleDeleteMarkerReplicationToHclTerraform = exports.s3BucketReplicationConfigurationRuleDeleteMarkerReplicationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function s3BucketReplicationConfigurationRuleDeleteMarkerReplicationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
    };
}
exports.s3BucketReplicationConfigurationRuleDeleteMarkerReplicationToTerraform = s3BucketReplicationConfigurationRuleDeleteMarkerReplicationToTerraform;
function s3BucketReplicationConfigurationRuleDeleteMarkerReplicationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketReplicationConfigurationRuleDeleteMarkerReplicationToHclTerraform = s3BucketReplicationConfigurationRuleDeleteMarkerReplicationToHclTerraform;
class S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference extends cdktf.ComplexObject {
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
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._status = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._status = value.status;
        }
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
}
exports.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference = S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference[_a] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference", version: "0.0.0" };
function s3BucketReplicationConfigurationRuleDestinationAccessControlTranslationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        owner: cdktf.stringToTerraform(struct.owner),
    };
}
exports.s3BucketReplicationConfigurationRuleDestinationAccessControlTranslationToTerraform = s3BucketReplicationConfigurationRuleDestinationAccessControlTranslationToTerraform;
function s3BucketReplicationConfigurationRuleDestinationAccessControlTranslationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        owner: {
            value: cdktf.stringToHclTerraform(struct.owner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketReplicationConfigurationRuleDestinationAccessControlTranslationToHclTerraform = s3BucketReplicationConfigurationRuleDestinationAccessControlTranslationToHclTerraform;
class S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference extends cdktf.ComplexObject {
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
        if (this._owner !== undefined) {
            hasAnyValues = true;
            internalValueResult.owner = this._owner;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._owner = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._owner = value.owner;
        }
    }
    get owner() {
        return this.getStringAttribute('owner');
    }
    set owner(value) {
        this._owner = value;
    }
    // Temporarily expose input value. Use with caution.
    get ownerInput() {
        return this._owner;
    }
}
exports.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference = S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference[_b] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference", version: "0.0.0" };
function s3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        replica_kms_key_id: cdktf.stringToTerraform(struct.replicaKmsKeyId),
    };
}
exports.s3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationToTerraform = s3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationToTerraform;
function s3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        replica_kms_key_id: {
            value: cdktf.stringToHclTerraform(struct.replicaKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationToHclTerraform = s3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationToHclTerraform;
class S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._replicaKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.replicaKmsKeyId = this._replicaKmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._replicaKmsKeyId = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._replicaKmsKeyId = value.replicaKmsKeyId;
        }
    }
    get replicaKmsKeyId() {
        return this.getStringAttribute('replica_kms_key_id');
    }
    set replicaKmsKeyId(value) {
        this._replicaKmsKeyId = value;
    }
    // Temporarily expose input value. Use with caution.
    get replicaKmsKeyIdInput() {
        return this._replicaKmsKeyId;
    }
}
exports.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference = S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference[_c] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference", version: "0.0.0" };
function s3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        minutes: cdktf.numberToTerraform(struct.minutes),
    };
}
exports.s3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdToTerraform = s3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdToTerraform;
function s3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        minutes: {
            value: cdktf.numberToHclTerraform(struct.minutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdToHclTerraform = s3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdToHclTerraform;
class S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference extends cdktf.ComplexObject {
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
        if (this._minutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.minutes = this._minutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._minutes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._minutes = value.minutes;
        }
    }
    get minutes() {
        return this.getNumberAttribute('minutes');
    }
    set minutes(value) {
        this._minutes = value;
    }
    // Temporarily expose input value. Use with caution.
    get minutesInput() {
        return this._minutes;
    }
}
exports.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference = S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference;
_d = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference[_d] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference", version: "0.0.0" };
function s3BucketReplicationConfigurationRuleDestinationMetricsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
        event_threshold: s3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdToTerraform(struct.eventThreshold),
    };
}
exports.s3BucketReplicationConfigurationRuleDestinationMetricsToTerraform = s3BucketReplicationConfigurationRuleDestinationMetricsToTerraform;
function s3BucketReplicationConfigurationRuleDestinationMetricsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        event_threshold: {
            value: s3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdToHclTerraform(struct.eventThreshold),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketReplicationConfigurationRuleDestinationMetricsToHclTerraform = s3BucketReplicationConfigurationRuleDestinationMetricsToHclTerraform;
class S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // event_threshold - computed: false, optional: true, required: false
        this._eventThreshold = new S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference(this, "event_threshold");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._eventThreshold?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventThreshold = this._eventThreshold?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._status = undefined;
            this._eventThreshold.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._status = value.status;
            this._eventThreshold.internalValue = value.eventThreshold;
        }
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
    get eventThreshold() {
        return this._eventThreshold;
    }
    putEventThreshold(value) {
        this._eventThreshold.internalValue = value;
    }
    resetEventThreshold() {
        this._eventThreshold.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get eventThresholdInput() {
        return this._eventThreshold.internalValue;
    }
}
exports.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference = S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference;
_e = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference[_e] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference", version: "0.0.0" };
function s3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        minutes: cdktf.numberToTerraform(struct.minutes),
    };
}
exports.s3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeToTerraform = s3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeToTerraform;
function s3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        minutes: {
            value: cdktf.numberToHclTerraform(struct.minutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeToHclTerraform = s3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeToHclTerraform;
class S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference extends cdktf.ComplexObject {
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
        if (this._minutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.minutes = this._minutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._minutes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._minutes = value.minutes;
        }
    }
    get minutes() {
        return this.getNumberAttribute('minutes');
    }
    set minutes(value) {
        this._minutes = value;
    }
    // Temporarily expose input value. Use with caution.
    get minutesInput() {
        return this._minutes;
    }
}
exports.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference = S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference;
_f = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference[_f] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference", version: "0.0.0" };
function s3BucketReplicationConfigurationRuleDestinationReplicationTimeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
        time: s3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeToTerraform(struct.time),
    };
}
exports.s3BucketReplicationConfigurationRuleDestinationReplicationTimeToTerraform = s3BucketReplicationConfigurationRuleDestinationReplicationTimeToTerraform;
function s3BucketReplicationConfigurationRuleDestinationReplicationTimeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time: {
            value: s3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeToHclTerraform(struct.time),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketReplicationConfigurationRuleDestinationReplicationTimeToHclTerraform = s3BucketReplicationConfigurationRuleDestinationReplicationTimeToHclTerraform;
class S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // time - computed: false, optional: false, required: true
        this._time = new S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference(this, "time");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._time?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.time = this._time?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._status = undefined;
            this._time.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._status = value.status;
            this._time.internalValue = value.time;
        }
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
    get time() {
        return this._time;
    }
    putTime(value) {
        this._time.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get timeInput() {
        return this._time.internalValue;
    }
}
exports.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference = S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference;
_g = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference[_g] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference", version: "0.0.0" };
function s3BucketReplicationConfigurationRuleDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        account: cdktf.stringToTerraform(struct.account),
        bucket: cdktf.stringToTerraform(struct.bucket),
        storage_class: cdktf.stringToTerraform(struct.storageClass),
        access_control_translation: s3BucketReplicationConfigurationRuleDestinationAccessControlTranslationToTerraform(struct.accessControlTranslation),
        encryption_configuration: s3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationToTerraform(struct.encryptionConfiguration),
        metrics: s3BucketReplicationConfigurationRuleDestinationMetricsToTerraform(struct.metrics),
        replication_time: s3BucketReplicationConfigurationRuleDestinationReplicationTimeToTerraform(struct.replicationTime),
    };
}
exports.s3BucketReplicationConfigurationRuleDestinationToTerraform = s3BucketReplicationConfigurationRuleDestinationToTerraform;
function s3BucketReplicationConfigurationRuleDestinationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        account: {
            value: cdktf.stringToHclTerraform(struct.account),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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
        access_control_translation: {
            value: s3BucketReplicationConfigurationRuleDestinationAccessControlTranslationToHclTerraform(struct.accessControlTranslation),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList",
        },
        encryption_configuration: {
            value: s3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationToHclTerraform(struct.encryptionConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList",
        },
        metrics: {
            value: s3BucketReplicationConfigurationRuleDestinationMetricsToHclTerraform(struct.metrics),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketReplicationConfigurationRuleDestinationMetricsList",
        },
        replication_time: {
            value: s3BucketReplicationConfigurationRuleDestinationReplicationTimeToHclTerraform(struct.replicationTime),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketReplicationConfigurationRuleDestinationReplicationTimeList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketReplicationConfigurationRuleDestinationToHclTerraform = s3BucketReplicationConfigurationRuleDestinationToHclTerraform;
class S3BucketReplicationConfigurationRuleDestinationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // access_control_translation - computed: false, optional: true, required: false
        this._accessControlTranslation = new S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference(this, "access_control_translation");
        // encryption_configuration - computed: false, optional: true, required: false
        this._encryptionConfiguration = new S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference(this, "encryption_configuration");
        // metrics - computed: false, optional: true, required: false
        this._metrics = new S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference(this, "metrics");
        // replication_time - computed: false, optional: true, required: false
        this._replicationTime = new S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference(this, "replication_time");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._account !== undefined) {
            hasAnyValues = true;
            internalValueResult.account = this._account;
        }
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._storageClass !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageClass = this._storageClass;
        }
        if (this._accessControlTranslation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessControlTranslation = this._accessControlTranslation?.internalValue;
        }
        if (this._encryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
        }
        if (this._metrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metrics = this._metrics?.internalValue;
        }
        if (this._replicationTime?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.replicationTime = this._replicationTime?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._account = undefined;
            this._bucket = undefined;
            this._storageClass = undefined;
            this._accessControlTranslation.internalValue = undefined;
            this._encryptionConfiguration.internalValue = undefined;
            this._metrics.internalValue = undefined;
            this._replicationTime.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._account = value.account;
            this._bucket = value.bucket;
            this._storageClass = value.storageClass;
            this._accessControlTranslation.internalValue = value.accessControlTranslation;
            this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
            this._metrics.internalValue = value.metrics;
            this._replicationTime.internalValue = value.replicationTime;
        }
    }
    get account() {
        return this.getStringAttribute('account');
    }
    set account(value) {
        this._account = value;
    }
    resetAccount() {
        this._account = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountInput() {
        return this._account;
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
    get accessControlTranslation() {
        return this._accessControlTranslation;
    }
    putAccessControlTranslation(value) {
        this._accessControlTranslation.internalValue = value;
    }
    resetAccessControlTranslation() {
        this._accessControlTranslation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessControlTranslationInput() {
        return this._accessControlTranslation.internalValue;
    }
    get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    putEncryptionConfiguration(value) {
        this._encryptionConfiguration.internalValue = value;
    }
    resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }
    get metrics() {
        return this._metrics;
    }
    putMetrics(value) {
        this._metrics.internalValue = value;
    }
    resetMetrics() {
        this._metrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metricsInput() {
        return this._metrics.internalValue;
    }
    get replicationTime() {
        return this._replicationTime;
    }
    putReplicationTime(value) {
        this._replicationTime.internalValue = value;
    }
    resetReplicationTime() {
        this._replicationTime.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get replicationTimeInput() {
        return this._replicationTime.internalValue;
    }
}
exports.S3BucketReplicationConfigurationRuleDestinationOutputReference = S3BucketReplicationConfigurationRuleDestinationOutputReference;
_h = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationRuleDestinationOutputReference[_h] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleDestinationOutputReference", version: "0.0.0" };
function s3BucketReplicationConfigurationRuleExistingObjectReplicationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
    };
}
exports.s3BucketReplicationConfigurationRuleExistingObjectReplicationToTerraform = s3BucketReplicationConfigurationRuleExistingObjectReplicationToTerraform;
function s3BucketReplicationConfigurationRuleExistingObjectReplicationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketReplicationConfigurationRuleExistingObjectReplicationToHclTerraform = s3BucketReplicationConfigurationRuleExistingObjectReplicationToHclTerraform;
class S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference extends cdktf.ComplexObject {
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
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._status = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._status = value.status;
        }
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
}
exports.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference = S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference;
_j = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference[_j] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference", version: "0.0.0" };
function s3BucketReplicationConfigurationRuleFilterAndToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        prefix: cdktf.stringToTerraform(struct.prefix),
        tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct.tags),
    };
}
exports.s3BucketReplicationConfigurationRuleFilterAndToTerraform = s3BucketReplicationConfigurationRuleFilterAndToTerraform;
function s3BucketReplicationConfigurationRuleFilterAndToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
exports.s3BucketReplicationConfigurationRuleFilterAndToHclTerraform = s3BucketReplicationConfigurationRuleFilterAndToHclTerraform;
class S3BucketReplicationConfigurationRuleFilterAndOutputReference extends cdktf.ComplexObject {
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
            this._prefix = undefined;
            this._tags = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._prefix = value.prefix;
            this._tags = value.tags;
        }
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
exports.S3BucketReplicationConfigurationRuleFilterAndOutputReference = S3BucketReplicationConfigurationRuleFilterAndOutputReference;
_k = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationRuleFilterAndOutputReference[_k] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterAndOutputReference", version: "0.0.0" };
function s3BucketReplicationConfigurationRuleFilterTagToTerraform(struct) {
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
exports.s3BucketReplicationConfigurationRuleFilterTagToTerraform = s3BucketReplicationConfigurationRuleFilterTagToTerraform;
function s3BucketReplicationConfigurationRuleFilterTagToHclTerraform(struct) {
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
exports.s3BucketReplicationConfigurationRuleFilterTagToHclTerraform = s3BucketReplicationConfigurationRuleFilterTagToHclTerraform;
class S3BucketReplicationConfigurationRuleFilterTagOutputReference extends cdktf.ComplexObject {
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
exports.S3BucketReplicationConfigurationRuleFilterTagOutputReference = S3BucketReplicationConfigurationRuleFilterTagOutputReference;
_l = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationRuleFilterTagOutputReference[_l] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterTagOutputReference", version: "0.0.0" };
function s3BucketReplicationConfigurationRuleFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        prefix: cdktf.stringToTerraform(struct.prefix),
        and: s3BucketReplicationConfigurationRuleFilterAndToTerraform(struct.and),
        tag: s3BucketReplicationConfigurationRuleFilterTagToTerraform(struct.tag),
    };
}
exports.s3BucketReplicationConfigurationRuleFilterToTerraform = s3BucketReplicationConfigurationRuleFilterToTerraform;
function s3BucketReplicationConfigurationRuleFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        prefix: {
            value: cdktf.stringToHclTerraform(struct.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        and: {
            value: s3BucketReplicationConfigurationRuleFilterAndToHclTerraform(struct.and),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketReplicationConfigurationRuleFilterAndList",
        },
        tag: {
            value: s3BucketReplicationConfigurationRuleFilterTagToHclTerraform(struct.tag),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketReplicationConfigurationRuleFilterTagList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketReplicationConfigurationRuleFilterToHclTerraform = s3BucketReplicationConfigurationRuleFilterToHclTerraform;
class S3BucketReplicationConfigurationRuleFilterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // and - computed: false, optional: true, required: false
        this._and = new S3BucketReplicationConfigurationRuleFilterAndOutputReference(this, "and");
        // tag - computed: false, optional: true, required: false
        this._tag = new S3BucketReplicationConfigurationRuleFilterTagOutputReference(this, "tag");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
            this._prefix = undefined;
            this._and.internalValue = undefined;
            this._tag.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._prefix = value.prefix;
            this._and.internalValue = value.and;
            this._tag.internalValue = value.tag;
        }
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
exports.S3BucketReplicationConfigurationRuleFilterOutputReference = S3BucketReplicationConfigurationRuleFilterOutputReference;
_m = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationRuleFilterOutputReference[_m] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleFilterOutputReference", version: "0.0.0" };
function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
    };
}
exports.s3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsToTerraform = s3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsToTerraform;
function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsToHclTerraform = s3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsToHclTerraform;
class S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference extends cdktf.ComplexObject {
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
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._status = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._status = value.status;
        }
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
}
exports.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference = S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference;
_o = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference[_o] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference", version: "0.0.0" };
function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
    };
}
exports.s3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform = s3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform;
function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsToHclTerraform = s3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsToHclTerraform;
class S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference extends cdktf.ComplexObject {
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
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._status = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._status = value.status;
        }
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
}
exports.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference = S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference;
_p = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference[_p] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference", version: "0.0.0" };
function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        replica_modifications: s3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsToTerraform(struct.replicaModifications),
        sse_kms_encrypted_objects: s3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct.sseKmsEncryptedObjects),
    };
}
exports.s3BucketReplicationConfigurationRuleSourceSelectionCriteriaToTerraform = s3BucketReplicationConfigurationRuleSourceSelectionCriteriaToTerraform;
function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        replica_modifications: {
            value: s3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsToHclTerraform(struct.replicaModifications),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList",
        },
        sse_kms_encrypted_objects: {
            value: s3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsToHclTerraform(struct.sseKmsEncryptedObjects),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketReplicationConfigurationRuleSourceSelectionCriteriaToHclTerraform = s3BucketReplicationConfigurationRuleSourceSelectionCriteriaToHclTerraform;
class S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // replica_modifications - computed: false, optional: true, required: false
        this._replicaModifications = new S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference(this, "replica_modifications");
        // sse_kms_encrypted_objects - computed: false, optional: true, required: false
        this._sseKmsEncryptedObjects = new S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference(this, "sse_kms_encrypted_objects");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._replicaModifications?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.replicaModifications = this._replicaModifications?.internalValue;
        }
        if (this._sseKmsEncryptedObjects?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sseKmsEncryptedObjects = this._sseKmsEncryptedObjects?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._replicaModifications.internalValue = undefined;
            this._sseKmsEncryptedObjects.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._replicaModifications.internalValue = value.replicaModifications;
            this._sseKmsEncryptedObjects.internalValue = value.sseKmsEncryptedObjects;
        }
    }
    get replicaModifications() {
        return this._replicaModifications;
    }
    putReplicaModifications(value) {
        this._replicaModifications.internalValue = value;
    }
    resetReplicaModifications() {
        this._replicaModifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get replicaModificationsInput() {
        return this._replicaModifications.internalValue;
    }
    get sseKmsEncryptedObjects() {
        return this._sseKmsEncryptedObjects;
    }
    putSseKmsEncryptedObjects(value) {
        this._sseKmsEncryptedObjects.internalValue = value;
    }
    resetSseKmsEncryptedObjects() {
        this._sseKmsEncryptedObjects.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sseKmsEncryptedObjectsInput() {
        return this._sseKmsEncryptedObjects.internalValue;
    }
}
exports.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference = S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference;
_q = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference[_q] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference", version: "0.0.0" };
function s3BucketReplicationConfigurationRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        prefix: cdktf.stringToTerraform(struct.prefix),
        priority: cdktf.numberToTerraform(struct.priority),
        status: cdktf.stringToTerraform(struct.status),
        delete_marker_replication: s3BucketReplicationConfigurationRuleDeleteMarkerReplicationToTerraform(struct.deleteMarkerReplication),
        destination: s3BucketReplicationConfigurationRuleDestinationToTerraform(struct.destination),
        existing_object_replication: s3BucketReplicationConfigurationRuleExistingObjectReplicationToTerraform(struct.existingObjectReplication),
        filter: s3BucketReplicationConfigurationRuleFilterToTerraform(struct.filter),
        source_selection_criteria: s3BucketReplicationConfigurationRuleSourceSelectionCriteriaToTerraform(struct.sourceSelectionCriteria),
    };
}
exports.s3BucketReplicationConfigurationRuleToTerraform = s3BucketReplicationConfigurationRuleToTerraform;
function s3BucketReplicationConfigurationRuleToHclTerraform(struct) {
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
        priority: {
            value: cdktf.numberToHclTerraform(struct.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        delete_marker_replication: {
            value: s3BucketReplicationConfigurationRuleDeleteMarkerReplicationToHclTerraform(struct.deleteMarkerReplication),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketReplicationConfigurationRuleDeleteMarkerReplicationList",
        },
        destination: {
            value: s3BucketReplicationConfigurationRuleDestinationToHclTerraform(struct.destination),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketReplicationConfigurationRuleDestinationList",
        },
        existing_object_replication: {
            value: s3BucketReplicationConfigurationRuleExistingObjectReplicationToHclTerraform(struct.existingObjectReplication),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketReplicationConfigurationRuleExistingObjectReplicationList",
        },
        filter: {
            value: s3BucketReplicationConfigurationRuleFilterToHclTerraform(struct.filter),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketReplicationConfigurationRuleFilterList",
        },
        source_selection_criteria: {
            value: s3BucketReplicationConfigurationRuleSourceSelectionCriteriaToHclTerraform(struct.sourceSelectionCriteria),
            isBlock: true,
            type: "list",
            storageClassType: "S3BucketReplicationConfigurationRuleSourceSelectionCriteriaList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.s3BucketReplicationConfigurationRuleToHclTerraform = s3BucketReplicationConfigurationRuleToHclTerraform;
class S3BucketReplicationConfigurationRuleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // delete_marker_replication - computed: false, optional: true, required: false
        this._deleteMarkerReplication = new S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference(this, "delete_marker_replication");
        // destination - computed: false, optional: false, required: true
        this._destination = new S3BucketReplicationConfigurationRuleDestinationOutputReference(this, "destination");
        // existing_object_replication - computed: false, optional: true, required: false
        this._existingObjectReplication = new S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference(this, "existing_object_replication");
        // filter - computed: false, optional: true, required: false
        this._filter = new S3BucketReplicationConfigurationRuleFilterOutputReference(this, "filter");
        // source_selection_criteria - computed: false, optional: true, required: false
        this._sourceSelectionCriteria = new S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference(this, "source_selection_criteria");
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
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._deleteMarkerReplication?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deleteMarkerReplication = this._deleteMarkerReplication?.internalValue;
        }
        if (this._destination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination?.internalValue;
        }
        if (this._existingObjectReplication?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.existingObjectReplication = this._existingObjectReplication?.internalValue;
        }
        if (this._filter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter?.internalValue;
        }
        if (this._sourceSelectionCriteria?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceSelectionCriteria = this._sourceSelectionCriteria?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._prefix = undefined;
            this._priority = undefined;
            this._status = undefined;
            this._deleteMarkerReplication.internalValue = undefined;
            this._destination.internalValue = undefined;
            this._existingObjectReplication.internalValue = undefined;
            this._filter.internalValue = undefined;
            this._sourceSelectionCriteria.internalValue = undefined;
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
            this._priority = value.priority;
            this._status = value.status;
            this._deleteMarkerReplication.internalValue = value.deleteMarkerReplication;
            this._destination.internalValue = value.destination;
            this._existingObjectReplication.internalValue = value.existingObjectReplication;
            this._filter.internalValue = value.filter;
            this._sourceSelectionCriteria.internalValue = value.sourceSelectionCriteria;
        }
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
    get priority() {
        return this.getNumberAttribute('priority');
    }
    set priority(value) {
        this._priority = value;
    }
    resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get priorityInput() {
        return this._priority;
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
    get deleteMarkerReplication() {
        return this._deleteMarkerReplication;
    }
    putDeleteMarkerReplication(value) {
        this._deleteMarkerReplication.internalValue = value;
    }
    resetDeleteMarkerReplication() {
        this._deleteMarkerReplication.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteMarkerReplicationInput() {
        return this._deleteMarkerReplication.internalValue;
    }
    get destination() {
        return this._destination;
    }
    putDestination(value) {
        this._destination.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get destinationInput() {
        return this._destination.internalValue;
    }
    get existingObjectReplication() {
        return this._existingObjectReplication;
    }
    putExistingObjectReplication(value) {
        this._existingObjectReplication.internalValue = value;
    }
    resetExistingObjectReplication() {
        this._existingObjectReplication.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get existingObjectReplicationInput() {
        return this._existingObjectReplication.internalValue;
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
    get sourceSelectionCriteria() {
        return this._sourceSelectionCriteria;
    }
    putSourceSelectionCriteria(value) {
        this._sourceSelectionCriteria.internalValue = value;
    }
    resetSourceSelectionCriteria() {
        this._sourceSelectionCriteria.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceSelectionCriteriaInput() {
        return this._sourceSelectionCriteria.internalValue;
    }
}
exports.S3BucketReplicationConfigurationRuleOutputReference = S3BucketReplicationConfigurationRuleOutputReference;
_r = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationRuleOutputReference[_r] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleOutputReference", version: "0.0.0" };
class S3BucketReplicationConfigurationRuleList extends cdktf.ComplexList {
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
        return new S3BucketReplicationConfigurationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.S3BucketReplicationConfigurationRuleList = S3BucketReplicationConfigurationRuleList;
_s = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationRuleList[_s] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationRuleList", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_bucket_replication_configuration aws_s3_bucket_replication_configuration}
*/
class S3BucketReplicationConfigurationA extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a S3BucketReplicationConfigurationA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketReplicationConfigurationA to import
    * @param importFromId The id of the existing S3BucketReplicationConfigurationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_bucket_replication_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketReplicationConfigurationA to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_bucket_replication_configuration", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/s3_bucket_replication_configuration aws_s3_bucket_replication_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketReplicationConfigurationAConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_s3_bucket_replication_configuration',
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
        this._rule = new S3BucketReplicationConfigurationRuleList(this, "rule", false);
        this._bucket = config.bucket;
        this._id = config.id;
        this._role = config.role;
        this._token = config.token;
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
    get token() {
        return this.getStringAttribute('token');
    }
    set token(value) {
        this._token = value;
    }
    resetToken() {
        this._token = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tokenInput() {
        return this._token;
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
            id: cdktf.stringToTerraform(this._id),
            role: cdktf.stringToTerraform(this._role),
            token: cdktf.stringToTerraform(this._token),
            rule: cdktf.listMapper(s3BucketReplicationConfigurationRuleToTerraform, true)(this._rule.internalValue),
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
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
            token: {
                value: cdktf.stringToHclTerraform(this._token),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule: {
                value: cdktf.listMapperHcl(s3BucketReplicationConfigurationRuleToHclTerraform, true)(this._rule.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "S3BucketReplicationConfigurationRuleList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.S3BucketReplicationConfigurationA = S3BucketReplicationConfigurationA;
_t = JSII_RTTI_SYMBOL_1;
S3BucketReplicationConfigurationA[_t] = { fqn: "@cdktf/aws-cdk.s3BucketReplicationConfiguration.S3BucketReplicationConfigurationA", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
S3BucketReplicationConfigurationA.tfResourceType = "aws_s3_bucket_replication_configuration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3MzLWJ1Y2tldC1yZXBsaWNhdGlvbi1jb25maWd1cmF0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBc0MvQixTQUFnQixzRUFBc0UsQ0FBQyxNQUFpSjtJQUN0TyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2hELENBQUE7QUFDSCxDQUFDO0FBUkQsd0pBUUM7QUFHRCxTQUFnQix5RUFBeUUsQ0FBQyxNQUFpSjtJQUN6TyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztZQUNqRCxPQUFP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QUk7Z0JBQ2IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osZ0JBQWdCLEVBQUUsMENBQTBDO2FBQzdEO1NBQ0YsQ0FBQztRQUVGLDhCQUE4QjtRQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBRSxDQUFDLENBQUE7SUFDNUgsQ0FBQzs7QUFwTEgsOEVBcUxDOzs7QUFuTEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyxnREFBYyxHQUFHLHlDQUF5QyxBQUE1QyxDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9yZXBsaWNhdGlvbl9jb25maWd1cmF0aW9uXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9yZXBsaWNhdGlvbl9jb25maWd1cmF0aW9uI2J1Y2tldCBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkEjYnVja2V0fVxuICAqL1xuICByZWFkb25seSBidWNrZXQ6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24jaWQgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BI2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfcmVwbGljYXRpb25fY29uZmlndXJhdGlvbiNyb2xlIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSNyb2xlfVxuICAqL1xuICByZWFkb25seSByb2xlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9yZXBsaWNhdGlvbl9jb25maWd1cmF0aW9uI3Rva2VuIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSN0b2tlbn1cbiAgKi9cbiAgcmVhZG9ubHkgdG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIHJ1bGUgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9yZXBsaWNhdGlvbl9jb25maWd1cmF0aW9uI3J1bGUgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BI3J1bGV9XG4gICovXG4gIHJlYWRvbmx5IHJ1bGU6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVtdIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlbGV0ZU1hcmtlclJlcGxpY2F0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24jc3RhdHVzIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSNzdGF0dXN9XG4gICovXG4gIHJlYWRvbmx5IHN0YXR1czogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVsZXRlTWFya2VyUmVwbGljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZWxldGVNYXJrZXJSZXBsaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlbGV0ZU1hcmtlclJlcGxpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHN0YXR1czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0dXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlbGV0ZU1hcmtlclJlcGxpY2F0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVsZXRlTWFya2VyUmVwbGljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZWxldGVNYXJrZXJSZXBsaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgc3RhdHVzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zdGF0dXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVsZXRlTWFya2VyUmVwbGljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlbGV0ZU1hcmtlclJlcGxpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zdGF0dXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhdHVzID0gdGhpcy5fc3RhdHVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVsZXRlTWFya2VyUmVwbGljYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9zdGF0dXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlLnN0YXR1cztcbiAgICB9XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3RhdHVzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXR1cyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXR1c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25BY2Nlc3NDb250cm9sVHJhbnNsYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfcmVwbGljYXRpb25fY29uZmlndXJhdGlvbiNvd25lciBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkEjb3duZXJ9XG4gICovXG4gIHJlYWRvbmx5IG93bmVyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbkFjY2Vzc0NvbnRyb2xUcmFuc2xhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uQWNjZXNzQ29udHJvbFRyYW5zbGF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25BY2Nlc3NDb250cm9sVHJhbnNsYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgb3duZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3duZXIpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uQWNjZXNzQ29udHJvbFRyYW5zbGF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25BY2Nlc3NDb250cm9sVHJhbnNsYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbkFjY2Vzc0NvbnRyb2xUcmFuc2xhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgb3duZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm93bmVyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uQWNjZXNzQ29udHJvbFRyYW5zbGF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbkFjY2Vzc0NvbnRyb2xUcmFuc2xhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fb3duZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3duZXIgPSB0aGlzLl9vd25lcjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uQWNjZXNzQ29udHJvbFRyYW5zbGF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fb3duZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX293bmVyID0gdmFsdWUub3duZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gb3duZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfb3duZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG93bmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3duZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IG93bmVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vd25lciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvd25lcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vd25lcjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24jcmVwbGljYV9rbXNfa2V5X2lkIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSNyZXBsaWNhX2ttc19rZXlfaWR9XG4gICovXG4gIHJlYWRvbmx5IHJlcGxpY2FLbXNLZXlJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlcGxpY2Ffa21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXBsaWNhS21zS2V5SWQpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgcmVwbGljYV9rbXNfa2V5X2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZXBsaWNhS21zS2V5SWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVwbGljYUttc0tleUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlcGxpY2FLbXNLZXlJZCA9IHRoaXMuX3JlcGxpY2FLbXNLZXlJZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZXBsaWNhS21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3JlcGxpY2FLbXNLZXlJZCA9IHZhbHVlLnJlcGxpY2FLbXNLZXlJZDtcbiAgICB9XG4gIH1cblxuICAvLyByZXBsaWNhX2ttc19rZXlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVwbGljYUttc0tleUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXBsaWNhS21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXBsaWNhX2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcGxpY2FLbXNLZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVwbGljYUttc0tleUlkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcGxpY2FLbXNLZXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXBsaWNhS21zS2V5SWQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25NZXRyaWNzRXZlbnRUaHJlc2hvbGQge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfcmVwbGljYXRpb25fY29uZmlndXJhdGlvbiNtaW51dGVzIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSNtaW51dGVzfVxuICAqL1xuICByZWFkb25seSBtaW51dGVzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbk1ldHJpY3NFdmVudFRocmVzaG9sZFRvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uTWV0cmljc0V2ZW50VGhyZXNob2xkT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25NZXRyaWNzRXZlbnRUaHJlc2hvbGQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWludXRlczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW51dGVzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbk1ldHJpY3NFdmVudFRocmVzaG9sZFRvSGNsVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uTWV0cmljc0V2ZW50VGhyZXNob2xkT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25NZXRyaWNzRXZlbnRUaHJlc2hvbGQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIG1pbnV0ZXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1pbnV0ZXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25NZXRyaWNzRXZlbnRUaHJlc2hvbGRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uTWV0cmljc0V2ZW50VGhyZXNob2xkIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9taW51dGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1pbnV0ZXMgPSB0aGlzLl9taW51dGVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25NZXRyaWNzRXZlbnRUaHJlc2hvbGQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9taW51dGVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9taW51dGVzID0gdmFsdWUubWludXRlcztcbiAgICB9XG4gIH1cblxuICAvLyBtaW51dGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21pbnV0ZXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1pbnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW51dGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW51dGVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9taW51dGVzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1pbnV0ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWludXRlcztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbk1ldHJpY3Mge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfcmVwbGljYXRpb25fY29uZmlndXJhdGlvbiNzdGF0dXMgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BI3N0YXR1c31cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdHVzOiBzdHJpbmc7XG4gIC8qKlxuICAqIGV2ZW50X3RocmVzaG9sZCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24jZXZlbnRfdGhyZXNob2xkIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSNldmVudF90aHJlc2hvbGR9XG4gICovXG4gIHJlYWRvbmx5IGV2ZW50VGhyZXNob2xkPzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25NZXRyaWNzRXZlbnRUaHJlc2hvbGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbk1ldHJpY3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbk1ldHJpY3NPdXRwdXRSZWZlcmVuY2UgfCBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbk1ldHJpY3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXR1cyksXG4gICAgZXZlbnRfdGhyZXNob2xkOiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbk1ldHJpY3NFdmVudFRocmVzaG9sZFRvVGVycmFmb3JtKHN0cnVjdCEuZXZlbnRUaHJlc2hvbGQpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uTWV0cmljc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uTWV0cmljc091dHB1dFJlZmVyZW5jZSB8IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uTWV0cmljcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgc3RhdHVzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zdGF0dXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGV2ZW50X3RocmVzaG9sZDoge1xuICAgICAgdmFsdWU6IHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uTWV0cmljc0V2ZW50VGhyZXNob2xkVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ldmVudFRocmVzaG9sZCksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uTWV0cmljc0V2ZW50VGhyZXNob2xkTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbk1ldHJpY3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uTWV0cmljcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fc3RhdHVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXR1cyA9IHRoaXMuX3N0YXR1cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2V2ZW50VGhyZXNob2xkPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmV2ZW50VGhyZXNob2xkID0gdGhpcy5fZXZlbnRUaHJlc2hvbGQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbk1ldHJpY3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9zdGF0dXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ldmVudFRocmVzaG9sZC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZS5zdGF0dXM7XG4gICAgICB0aGlzLl9ldmVudFRocmVzaG9sZC5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZXZlbnRUaHJlc2hvbGQ7XG4gICAgfVxuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N0YXR1cz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0dXModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0dXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG5cbiAgLy8gZXZlbnRfdGhyZXNob2xkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V2ZW50VGhyZXNob2xkID0gbmV3IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uTWV0cmljc0V2ZW50VGhyZXNob2xkT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZXZlbnRfdGhyZXNob2xkXCIpO1xuICBwdWJsaWMgZ2V0IGV2ZW50VGhyZXNob2xkKCkge1xuICAgIHJldHVybiB0aGlzLl9ldmVudFRocmVzaG9sZDtcbiAgfVxuICBwdWJsaWMgcHV0RXZlbnRUaHJlc2hvbGQodmFsdWU6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uTWV0cmljc0V2ZW50VGhyZXNob2xkKSB7XG4gICAgdGhpcy5fZXZlbnRUaHJlc2hvbGQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV2ZW50VGhyZXNob2xkKCkge1xuICAgIHRoaXMuX2V2ZW50VGhyZXNob2xkLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV2ZW50VGhyZXNob2xkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50VGhyZXNob2xkLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25SZXBsaWNhdGlvblRpbWVUaW1lIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24jbWludXRlcyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkEjbWludXRlc31cbiAgKi9cbiAgcmVhZG9ubHkgbWludXRlczogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25SZXBsaWNhdGlvblRpbWVUaW1lVG9UZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25SZXBsaWNhdGlvblRpbWVUaW1lT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25SZXBsaWNhdGlvblRpbWVUaW1lKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1pbnV0ZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWludXRlcyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25SZXBsaWNhdGlvblRpbWVUaW1lVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25SZXBsaWNhdGlvblRpbWVUaW1lT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25SZXBsaWNhdGlvblRpbWVUaW1lKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBtaW51dGVzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5taW51dGVzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uUmVwbGljYXRpb25UaW1lVGltZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25SZXBsaWNhdGlvblRpbWVUaW1lIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9taW51dGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1pbnV0ZXMgPSB0aGlzLl9taW51dGVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25SZXBsaWNhdGlvblRpbWVUaW1lIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWludXRlcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWludXRlcyA9IHZhbHVlLm1pbnV0ZXM7XG4gICAgfVxuICB9XG5cbiAgLy8gbWludXRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9taW51dGVzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtaW51dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWludXRlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWludXRlcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWludXRlcyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtaW51dGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbnV0ZXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25SZXBsaWNhdGlvblRpbWUge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfcmVwbGljYXRpb25fY29uZmlndXJhdGlvbiNzdGF0dXMgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BI3N0YXR1c31cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdHVzOiBzdHJpbmc7XG4gIC8qKlxuICAqIHRpbWUgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9yZXBsaWNhdGlvbl9jb25maWd1cmF0aW9uI3RpbWUgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BI3RpbWV9XG4gICovXG4gIHJlYWRvbmx5IHRpbWU6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uUmVwbGljYXRpb25UaW1lVGltZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uUmVwbGljYXRpb25UaW1lVG9UZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25SZXBsaWNhdGlvblRpbWVPdXRwdXRSZWZlcmVuY2UgfCBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvblJlcGxpY2F0aW9uVGltZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzdGF0dXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdHVzKSxcbiAgICB0aW1lOiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvblJlcGxpY2F0aW9uVGltZVRpbWVUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpbWUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uUmVwbGljYXRpb25UaW1lVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25SZXBsaWNhdGlvblRpbWVPdXRwdXRSZWZlcmVuY2UgfCBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvblJlcGxpY2F0aW9uVGltZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgc3RhdHVzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zdGF0dXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHRpbWU6IHtcbiAgICAgIHZhbHVlOiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvblJlcGxpY2F0aW9uVGltZVRpbWVUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRpbWUpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvblJlcGxpY2F0aW9uVGltZVRpbWVMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uUmVwbGljYXRpb25UaW1lT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvblJlcGxpY2F0aW9uVGltZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fc3RhdHVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXR1cyA9IHRoaXMuX3N0YXR1cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RpbWU/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGltZSA9IHRoaXMuX3RpbWU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvblJlcGxpY2F0aW9uVGltZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RpbWUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fc3RhdHVzID0gdmFsdWUuc3RhdHVzO1xuICAgICAgdGhpcy5fdGltZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUudGltZTtcbiAgICB9XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3RhdHVzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXR1cyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXR1c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cblxuICAvLyB0aW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RpbWUgPSBuZXcgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25SZXBsaWNhdGlvblRpbWVUaW1lT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwidGltZVwiKTtcbiAgcHVibGljIGdldCB0aW1lKCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lO1xuICB9XG4gIHB1YmxpYyBwdXRUaW1lKHZhbHVlOiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvblJlcGxpY2F0aW9uVGltZVRpbWUpIHtcbiAgICB0aGlzLl90aW1lLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfcmVwbGljYXRpb25fY29uZmlndXJhdGlvbiNhY2NvdW50IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSNhY2NvdW50fVxuICAqL1xuICByZWFkb25seSBhY2NvdW50Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfcmVwbGljYXRpb25fY29uZmlndXJhdGlvbiNidWNrZXQgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BI2J1Y2tldH1cbiAgKi9cbiAgcmVhZG9ubHkgYnVja2V0OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9yZXBsaWNhdGlvbl9jb25maWd1cmF0aW9uI3N0b3JhZ2VfY2xhc3MgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BI3N0b3JhZ2VfY2xhc3N9XG4gICovXG4gIHJlYWRvbmx5IHN0b3JhZ2VDbGFzcz86IHN0cmluZztcbiAgLyoqXG4gICogYWNjZXNzX2NvbnRyb2xfdHJhbnNsYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9yZXBsaWNhdGlvbl9jb25maWd1cmF0aW9uI2FjY2Vzc19jb250cm9sX3RyYW5zbGF0aW9uIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSNhY2Nlc3NfY29udHJvbF90cmFuc2xhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgYWNjZXNzQ29udHJvbFRyYW5zbGF0aW9uPzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25BY2Nlc3NDb250cm9sVHJhbnNsYXRpb247XG4gIC8qKlxuICAqIGVuY3J5cHRpb25fY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24jZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSNlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGVuY3J5cHRpb25Db25maWd1cmF0aW9uPzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogbWV0cmljcyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24jbWV0cmljcyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkEjbWV0cmljc31cbiAgKi9cbiAgcmVhZG9ubHkgbWV0cmljcz86IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uTWV0cmljcztcbiAgLyoqXG4gICogcmVwbGljYXRpb25fdGltZSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24jcmVwbGljYXRpb25fdGltZSBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkEjcmVwbGljYXRpb25fdGltZX1cbiAgKi9cbiAgcmVhZG9ubHkgcmVwbGljYXRpb25UaW1lPzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25SZXBsaWNhdGlvblRpbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWNjb3VudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY2NvdW50KSxcbiAgICBidWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0KSxcbiAgICBzdG9yYWdlX2NsYXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0b3JhZ2VDbGFzcyksXG4gICAgYWNjZXNzX2NvbnRyb2xfdHJhbnNsYXRpb246IHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uQWNjZXNzQ29udHJvbFRyYW5zbGF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NDb250cm9sVHJhbnNsYXRpb24pLFxuICAgIGVuY3J5cHRpb25fY29uZmlndXJhdGlvbjogczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24pLFxuICAgIG1ldHJpY3M6IHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uTWV0cmljc1RvVGVycmFmb3JtKHN0cnVjdCEubWV0cmljcyksXG4gICAgcmVwbGljYXRpb25fdGltZTogczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25SZXBsaWNhdGlvblRpbWVUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlcGxpY2F0aW9uVGltZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbk91dHB1dFJlZmVyZW5jZSB8IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhY2NvdW50OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hY2NvdW50KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBidWNrZXQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc3RvcmFnZV9jbGFzczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3RvcmFnZUNsYXNzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBhY2Nlc3NfY29udHJvbF90cmFuc2xhdGlvbjoge1xuICAgICAgdmFsdWU6IHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uQWNjZXNzQ29udHJvbFRyYW5zbGF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NDb250cm9sVHJhbnNsYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbkFjY2Vzc0NvbnRyb2xUcmFuc2xhdGlvbkxpc3RcIixcbiAgICB9LFxuICAgIGVuY3J5cHRpb25fY29uZmlndXJhdGlvbjoge1xuICAgICAgdmFsdWU6IHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmVuY3J5cHRpb25Db25maWd1cmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkxpc3RcIixcbiAgICB9LFxuICAgIG1ldHJpY3M6IHtcbiAgICAgIHZhbHVlOiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbk1ldHJpY3NUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY3MpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbk1ldHJpY3NMaXN0XCIsXG4gICAgfSxcbiAgICByZXBsaWNhdGlvbl90aW1lOiB7XG4gICAgICB2YWx1ZTogczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25SZXBsaWNhdGlvblRpbWVUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlcGxpY2F0aW9uVGltZSksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uUmVwbGljYXRpb25UaW1lTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjY291bnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWNjb3VudCA9IHRoaXMuX2FjY291bnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9idWNrZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVja2V0ID0gdGhpcy5fYnVja2V0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RvcmFnZUNsYXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0b3JhZ2VDbGFzcyA9IHRoaXMuX3N0b3JhZ2VDbGFzcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FjY2Vzc0NvbnRyb2xUcmFuc2xhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hY2Nlc3NDb250cm9sVHJhbnNsYXRpb24gPSB0aGlzLl9hY2Nlc3NDb250cm9sVHJhbnNsYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbmNyeXB0aW9uQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmNyeXB0aW9uQ29uZmlndXJhdGlvbiA9IHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWV0cmljcz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXRyaWNzID0gdGhpcy5fbWV0cmljcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlcGxpY2F0aW9uVGltZT8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXBsaWNhdGlvblRpbWUgPSB0aGlzLl9yZXBsaWNhdGlvblRpbWU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjY291bnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9idWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdG9yYWdlQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hY2Nlc3NDb250cm9sVHJhbnNsYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZXRyaWNzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXBsaWNhdGlvblRpbWUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYWNjb3VudCA9IHZhbHVlLmFjY291bnQ7XG4gICAgICB0aGlzLl9idWNrZXQgPSB2YWx1ZS5idWNrZXQ7XG4gICAgICB0aGlzLl9zdG9yYWdlQ2xhc3MgPSB2YWx1ZS5zdG9yYWdlQ2xhc3M7XG4gICAgICB0aGlzLl9hY2Nlc3NDb250cm9sVHJhbnNsYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFjY2Vzc0NvbnRyb2xUcmFuc2xhdGlvbjtcbiAgICAgIHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5lbmNyeXB0aW9uQ29uZmlndXJhdGlvbjtcbiAgICAgIHRoaXMuX21ldHJpY3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLm1ldHJpY3M7XG4gICAgICB0aGlzLl9yZXBsaWNhdGlvblRpbWUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnJlcGxpY2F0aW9uVGltZTtcbiAgICB9XG4gIH1cblxuICAvLyBhY2NvdW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjY291bnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFjY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2NvdW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBhY2NvdW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY2NvdW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjb3VudCgpIHtcbiAgICB0aGlzLl9hY2NvdW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2NvdW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY291bnQ7XG4gIH1cblxuICAvLyBidWNrZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYnVja2V0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWNrZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVja2V0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXQ7XG4gIH1cblxuICAvLyBzdG9yYWdlX2NsYXNzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0b3JhZ2VDbGFzcz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RvcmFnZUNsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RvcmFnZV9jbGFzcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RvcmFnZUNsYXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdG9yYWdlQ2xhc3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdG9yYWdlQ2xhc3MoKSB7XG4gICAgdGhpcy5fc3RvcmFnZUNsYXNzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdG9yYWdlQ2xhc3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmFnZUNsYXNzO1xuICB9XG5cbiAgLy8gYWNjZXNzX2NvbnRyb2xfdHJhbnNsYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNjZXNzQ29udHJvbFRyYW5zbGF0aW9uID0gbmV3IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uQWNjZXNzQ29udHJvbFRyYW5zbGF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiYWNjZXNzX2NvbnRyb2xfdHJhbnNsYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbFRyYW5zbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NDb250cm9sVHJhbnNsYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEFjY2Vzc0NvbnRyb2xUcmFuc2xhdGlvbih2YWx1ZTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25BY2Nlc3NDb250cm9sVHJhbnNsYXRpb24pIHtcbiAgICB0aGlzLl9hY2Nlc3NDb250cm9sVHJhbnNsYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFjY2Vzc0NvbnRyb2xUcmFuc2xhdGlvbigpIHtcbiAgICB0aGlzLl9hY2Nlc3NDb250cm9sVHJhbnNsYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbFRyYW5zbGF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0NvbnRyb2xUcmFuc2xhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuY3J5cHRpb25Db25maWd1cmF0aW9uID0gbmV3IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRFbmNyeXB0aW9uQ29uZmlndXJhdGlvbih2YWx1ZTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmNyeXB0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9lbmNyeXB0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmNyeXB0aW9uQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbWV0cmljcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXRyaWNzID0gbmV3IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uTWV0cmljc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcIm1ldHJpY3NcIik7XG4gIHB1YmxpYyBnZXQgbWV0cmljcygpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljcztcbiAgfVxuICBwdWJsaWMgcHV0TWV0cmljcyh2YWx1ZTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25NZXRyaWNzKSB7XG4gICAgdGhpcy5fbWV0cmljcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWV0cmljcygpIHtcbiAgICB0aGlzLl9tZXRyaWNzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldHJpY3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljcy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcmVwbGljYXRpb25fdGltZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXBsaWNhdGlvblRpbWUgPSBuZXcgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb25SZXBsaWNhdGlvblRpbWVPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJyZXBsaWNhdGlvbl90aW1lXCIpO1xuICBwdWJsaWMgZ2V0IHJlcGxpY2F0aW9uVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVwbGljYXRpb25UaW1lO1xuICB9XG4gIHB1YmxpYyBwdXRSZXBsaWNhdGlvblRpbWUodmFsdWU6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uUmVwbGljYXRpb25UaW1lKSB7XG4gICAgdGhpcy5fcmVwbGljYXRpb25UaW1lLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXBsaWNhdGlvblRpbWUoKSB7XG4gICAgdGhpcy5fcmVwbGljYXRpb25UaW1lLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcGxpY2F0aW9uVGltZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXBsaWNhdGlvblRpbWUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVFeGlzdGluZ09iamVjdFJlcGxpY2F0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24jc3RhdHVzIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSNzdGF0dXN9XG4gICovXG4gIHJlYWRvbmx5IHN0YXR1czogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRXhpc3RpbmdPYmplY3RSZXBsaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUV4aXN0aW5nT2JqZWN0UmVwbGljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVFeGlzdGluZ09iamVjdFJlcGxpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHN0YXR1czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0dXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUV4aXN0aW5nT2JqZWN0UmVwbGljYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVFeGlzdGluZ09iamVjdFJlcGxpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRXhpc3RpbmdPYmplY3RSZXBsaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgc3RhdHVzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zdGF0dXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRXhpc3RpbmdPYmplY3RSZXBsaWNhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRXhpc3RpbmdPYmplY3RSZXBsaWNhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fc3RhdHVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXR1cyA9IHRoaXMuX3N0YXR1cztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUV4aXN0aW5nT2JqZWN0UmVwbGljYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9zdGF0dXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlLnN0YXR1cztcbiAgICB9XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3RhdHVzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXR1cyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXR1c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyQW5kIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24jcHJlZml4IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSNwcmVmaXh9XG4gICovXG4gIHJlYWRvbmx5IHByZWZpeD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24jdGFncyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkEjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJBbmRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJBbmRPdXRwdXRSZWZlcmVuY2UgfCBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJBbmQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS50YWdzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJBbmRUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJBbmRPdXRwdXRSZWZlcmVuY2UgfCBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJBbmQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHByZWZpeDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucHJlZml4KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB0YWdzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkoc3RydWN0IS50YWdzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUZpbHRlckFuZE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyQW5kIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9wcmVmaXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZml4ID0gdGhpcy5fcHJlZml4O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFncyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YWdzID0gdGhpcy5fdGFncztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUZpbHRlckFuZCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3ByZWZpeCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3ByZWZpeCA9IHZhbHVlLnByZWZpeDtcbiAgICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZS50YWdzO1xuICAgIH1cbiAgfVxuXG4gIC8vIHByZWZpeCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVmaXggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVmaXgoKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVmaXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZml4O1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyVGFnIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24ja2V5IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfcmVwbGljYXRpb25fY29uZmlndXJhdGlvbiN2YWx1ZSBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkEjdmFsdWV9XG4gICovXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJUYWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJUYWdPdXRwdXRSZWZlcmVuY2UgfCBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJUYWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUZpbHRlclRhZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUZpbHRlclRhZ091dHB1dFJlZmVyZW5jZSB8IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUZpbHRlclRhZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAga2V5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHZhbHVlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJUYWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUZpbHRlclRhZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmtleSA9IHRoaXMuX2tleTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJUYWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9rZXkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fa2V5ID0gdmFsdWUua2V5O1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBrZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfa2V5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGtleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92YWx1ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUZpbHRlciB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9yZXBsaWNhdGlvbl9jb25maWd1cmF0aW9uI3ByZWZpeCBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkEjcHJlZml4fVxuICAqL1xuICByZWFkb25seSBwcmVmaXg/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGFuZCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24jYW5kIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSNhbmR9XG4gICovXG4gIHJlYWRvbmx5IGFuZD86IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUZpbHRlckFuZDtcbiAgLyoqXG4gICogdGFnIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfcmVwbGljYXRpb25fY29uZmlndXJhdGlvbiN0YWcgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BI3RhZ31cbiAgKi9cbiAgcmVhZG9ubHkgdGFnPzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyVGFnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyVG9UZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXgpLFxuICAgIGFuZDogczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyQW5kVG9UZXJyYWZvcm0oc3RydWN0IS5hbmQpLFxuICAgIHRhZzogczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyVGFnVG9UZXJyYWZvcm0oc3RydWN0IS50YWcpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUZpbHRlclRvSGNsVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUZpbHRlck91dHB1dFJlZmVyZW5jZSB8IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUZpbHRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgcHJlZml4OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcmVmaXgpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGFuZDoge1xuICAgICAgdmFsdWU6IHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUZpbHRlckFuZFRvSGNsVGVycmFmb3JtKHN0cnVjdCEuYW5kKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyQW5kTGlzdFwiLFxuICAgIH0sXG4gICAgdGFnOiB7XG4gICAgICB2YWx1ZTogczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyVGFnVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50YWcpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJUYWdMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUZpbHRlck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9wcmVmaXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZml4ID0gdGhpcy5fcHJlZml4O1xuICAgIH1cbiAgICBpZiAodGhpcy5fYW5kPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFuZCA9IHRoaXMuX2FuZD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhZz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YWcgPSB0aGlzLl90YWc/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9wcmVmaXggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hbmQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9wcmVmaXggPSB2YWx1ZS5wcmVmaXg7XG4gICAgICB0aGlzLl9hbmQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFuZDtcbiAgICAgIHRoaXMuX3RhZy5pbnRlcm5hbFZhbHVlID0gdmFsdWUudGFnO1xuICAgIH1cbiAgfVxuXG4gIC8vIHByZWZpeCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVmaXggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVmaXgoKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVmaXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZml4O1xuICB9XG5cbiAgLy8gYW5kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FuZCA9IG5ldyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJBbmRPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJhbmRcIik7XG4gIHB1YmxpYyBnZXQgYW5kKCkge1xuICAgIHJldHVybiB0aGlzLl9hbmQ7XG4gIH1cbiAgcHVibGljIHB1dEFuZCh2YWx1ZTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyQW5kKSB7XG4gICAgdGhpcy5fYW5kLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbmQoKSB7XG4gICAgdGhpcy5fYW5kLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFuZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbmQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRhZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWcgPSBuZXcgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyVGFnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwidGFnXCIpO1xuICBwdWJsaWMgZ2V0IHRhZygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnO1xuICB9XG4gIHB1YmxpYyBwdXRUYWcodmFsdWU6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUZpbHRlclRhZykge1xuICAgIHRoaXMuX3RhZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnKCkge1xuICAgIHRoaXMuX3RhZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFSZXBsaWNhTW9kaWZpY2F0aW9ucyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9yZXBsaWNhdGlvbl9jb25maWd1cmF0aW9uI3N0YXR1cyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkEjc3RhdHVzfVxuICAqL1xuICByZWFkb25seSBzdGF0dXM6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhUmVwbGljYU1vZGlmaWNhdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVJlcGxpY2FNb2RpZmljYXRpb25zT3V0cHV0UmVmZXJlbmNlIHwgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFSZXBsaWNhTW9kaWZpY2F0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzdGF0dXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdHVzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVJlcGxpY2FNb2RpZmljYXRpb25zVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFSZXBsaWNhTW9kaWZpY2F0aW9uc091dHB1dFJlZmVyZW5jZSB8IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhUmVwbGljYU1vZGlmaWNhdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHN0YXR1czoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3RhdHVzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhUmVwbGljYU1vZGlmaWNhdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhUmVwbGljYU1vZGlmaWNhdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3N0YXR1cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdGF0dXMgPSB0aGlzLl9zdGF0dXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVJlcGxpY2FNb2RpZmljYXRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc3RhdHVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZS5zdGF0dXM7XG4gICAgfVxuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N0YXR1cz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0dXModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0dXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhU3NlS21zRW5jcnlwdGVkT2JqZWN0cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9yZXBsaWNhdGlvbl9jb25maWd1cmF0aW9uI3N0YXR1cyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkEjc3RhdHVzfVxuICAqL1xuICByZWFkb25seSBzdGF0dXM6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhU3NlS21zRW5jcnlwdGVkT2JqZWN0c1RvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhU3NlS21zRW5jcnlwdGVkT2JqZWN0c091dHB1dFJlZmVyZW5jZSB8IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhU3NlS21zRW5jcnlwdGVkT2JqZWN0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzdGF0dXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdHVzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVNzZUttc0VuY3J5cHRlZE9iamVjdHNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVNzZUttc0VuY3J5cHRlZE9iamVjdHNPdXRwdXRSZWZlcmVuY2UgfCBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVNzZUttc0VuY3J5cHRlZE9iamVjdHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHN0YXR1czoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3RhdHVzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhU3NlS21zRW5jcnlwdGVkT2JqZWN0c091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFTc2VLbXNFbmNyeXB0ZWRPYmplY3RzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zdGF0dXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhdHVzID0gdGhpcy5fc3RhdHVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFTc2VLbXNFbmNyeXB0ZWRPYmplY3RzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc3RhdHVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZS5zdGF0dXM7XG4gICAgfVxuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N0YXR1cz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0dXModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0dXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhIHtcbiAgLyoqXG4gICogcmVwbGljYV9tb2RpZmljYXRpb25zIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfcmVwbGljYXRpb25fY29uZmlndXJhdGlvbiNyZXBsaWNhX21vZGlmaWNhdGlvbnMgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BI3JlcGxpY2FfbW9kaWZpY2F0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgcmVwbGljYU1vZGlmaWNhdGlvbnM/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVJlcGxpY2FNb2RpZmljYXRpb25zO1xuICAvKipcbiAgKiBzc2Vfa21zX2VuY3J5cHRlZF9vYmplY3RzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfcmVwbGljYXRpb25fY29uZmlndXJhdGlvbiNzc2Vfa21zX2VuY3J5cHRlZF9vYmplY3RzIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSNzc2Vfa21zX2VuY3J5cHRlZF9vYmplY3RzfVxuICAqL1xuICByZWFkb25seSBzc2VLbXNFbmNyeXB0ZWRPYmplY3RzPzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFTc2VLbXNFbmNyeXB0ZWRPYmplY3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYU91dHB1dFJlZmVyZW5jZSB8IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlcGxpY2FfbW9kaWZpY2F0aW9uczogczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFSZXBsaWNhTW9kaWZpY2F0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEucmVwbGljYU1vZGlmaWNhdGlvbnMpLFxuICAgIHNzZV9rbXNfZW5jcnlwdGVkX29iamVjdHM6IHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhU3NlS21zRW5jcnlwdGVkT2JqZWN0c1RvVGVycmFmb3JtKHN0cnVjdCEuc3NlS21zRW5jcnlwdGVkT2JqZWN0cyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYU91dHB1dFJlZmVyZW5jZSB8IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICByZXBsaWNhX21vZGlmaWNhdGlvbnM6IHtcbiAgICAgIHZhbHVlOiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVJlcGxpY2FNb2RpZmljYXRpb25zVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZXBsaWNhTW9kaWZpY2F0aW9ucyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhUmVwbGljYU1vZGlmaWNhdGlvbnNMaXN0XCIsXG4gICAgfSxcbiAgICBzc2Vfa21zX2VuY3J5cHRlZF9vYmplY3RzOiB7XG4gICAgICB2YWx1ZTogczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFTc2VLbXNFbmNyeXB0ZWRPYmplY3RzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zc2VLbXNFbmNyeXB0ZWRPYmplY3RzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFTc2VLbXNFbmNyeXB0ZWRPYmplY3RzTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlU291cmNlU2VsZWN0aW9uQ3JpdGVyaWEgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3JlcGxpY2FNb2RpZmljYXRpb25zPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlcGxpY2FNb2RpZmljYXRpb25zID0gdGhpcy5fcmVwbGljYU1vZGlmaWNhdGlvbnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zc2VLbXNFbmNyeXB0ZWRPYmplY3RzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNzZUttc0VuY3J5cHRlZE9iamVjdHMgPSB0aGlzLl9zc2VLbXNFbmNyeXB0ZWRPYmplY3RzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlU291cmNlU2VsZWN0aW9uQ3JpdGVyaWEgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZXBsaWNhTW9kaWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3NlS21zRW5jcnlwdGVkT2JqZWN0cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZXBsaWNhTW9kaWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWUucmVwbGljYU1vZGlmaWNhdGlvbnM7XG4gICAgICB0aGlzLl9zc2VLbXNFbmNyeXB0ZWRPYmplY3RzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zc2VLbXNFbmNyeXB0ZWRPYmplY3RzO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlcGxpY2FfbW9kaWZpY2F0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXBsaWNhTW9kaWZpY2F0aW9ucyA9IG5ldyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVJlcGxpY2FNb2RpZmljYXRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwicmVwbGljYV9tb2RpZmljYXRpb25zXCIpO1xuICBwdWJsaWMgZ2V0IHJlcGxpY2FNb2RpZmljYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXBsaWNhTW9kaWZpY2F0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0UmVwbGljYU1vZGlmaWNhdGlvbnModmFsdWU6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhUmVwbGljYU1vZGlmaWNhdGlvbnMpIHtcbiAgICB0aGlzLl9yZXBsaWNhTW9kaWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVwbGljYU1vZGlmaWNhdGlvbnMoKSB7XG4gICAgdGhpcy5fcmVwbGljYU1vZGlmaWNhdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVwbGljYU1vZGlmaWNhdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVwbGljYU1vZGlmaWNhdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNzZV9rbXNfZW5jcnlwdGVkX29iamVjdHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3NlS21zRW5jcnlwdGVkT2JqZWN0cyA9IG5ldyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVNzZUttc0VuY3J5cHRlZE9iamVjdHNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJzc2Vfa21zX2VuY3J5cHRlZF9vYmplY3RzXCIpO1xuICBwdWJsaWMgZ2V0IHNzZUttc0VuY3J5cHRlZE9iamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NzZUttc0VuY3J5cHRlZE9iamVjdHM7XG4gIH1cbiAgcHVibGljIHB1dFNzZUttc0VuY3J5cHRlZE9iamVjdHModmFsdWU6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhU3NlS21zRW5jcnlwdGVkT2JqZWN0cykge1xuICAgIHRoaXMuX3NzZUttc0VuY3J5cHRlZE9iamVjdHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNzZUttc0VuY3J5cHRlZE9iamVjdHMoKSB7XG4gICAgdGhpcy5fc3NlS21zRW5jcnlwdGVkT2JqZWN0cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzc2VLbXNFbmNyeXB0ZWRPYmplY3RzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NzZUttc0VuY3J5cHRlZE9iamVjdHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGUge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfcmVwbGljYXRpb25fY29uZmlndXJhdGlvbiNpZCBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkEjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9yZXBsaWNhdGlvbl9jb25maWd1cmF0aW9uI3ByZWZpeCBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkEjcHJlZml4fVxuICAqL1xuICByZWFkb25seSBwcmVmaXg/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9yZXBsaWNhdGlvbl9jb25maWd1cmF0aW9uI3ByaW9yaXR5IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSNwcmlvcml0eX1cbiAgKi9cbiAgcmVhZG9ubHkgcHJpb3JpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9yZXBsaWNhdGlvbl9jb25maWd1cmF0aW9uI3N0YXR1cyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkEjc3RhdHVzfVxuICAqL1xuICByZWFkb25seSBzdGF0dXM6IHN0cmluZztcbiAgLyoqXG4gICogZGVsZXRlX21hcmtlcl9yZXBsaWNhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24jZGVsZXRlX21hcmtlcl9yZXBsaWNhdGlvbiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkEjZGVsZXRlX21hcmtlcl9yZXBsaWNhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGVsZXRlTWFya2VyUmVwbGljYXRpb24/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZWxldGVNYXJrZXJSZXBsaWNhdGlvbjtcbiAgLyoqXG4gICogZGVzdGluYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9yZXBsaWNhdGlvbl9jb25maWd1cmF0aW9uI2Rlc3RpbmF0aW9uIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSNkZXN0aW5hdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGVzdGluYXRpb246IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uO1xuICAvKipcbiAgKiBleGlzdGluZ19vYmplY3RfcmVwbGljYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3MzX2J1Y2tldF9yZXBsaWNhdGlvbl9jb25maWd1cmF0aW9uI2V4aXN0aW5nX29iamVjdF9yZXBsaWNhdGlvbiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkEjZXhpc3Rpbmdfb2JqZWN0X3JlcGxpY2F0aW9ufVxuICAqL1xuICByZWFkb25seSBleGlzdGluZ09iamVjdFJlcGxpY2F0aW9uPzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRXhpc3RpbmdPYmplY3RSZXBsaWNhdGlvbjtcbiAgLyoqXG4gICogZmlsdGVyIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfcmVwbGljYXRpb25fY29uZmlndXJhdGlvbiNmaWx0ZXIgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BI2ZpbHRlcn1cbiAgKi9cbiAgcmVhZG9ubHkgZmlsdGVyPzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyO1xuICAvKipcbiAgKiBzb3VyY2Vfc2VsZWN0aW9uX2NyaXRlcmlhIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfcmVwbGljYXRpb25fY29uZmlndXJhdGlvbiNzb3VyY2Vfc2VsZWN0aW9uX2NyaXRlcmlhIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSNzb3VyY2Vfc2VsZWN0aW9uX2NyaXRlcmlhfVxuICAqL1xuICByZWFkb25seSBzb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYT86IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlVG9UZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICAgIHByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXgpLFxuICAgIHByaW9yaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW9yaXR5KSxcbiAgICBzdGF0dXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdHVzKSxcbiAgICBkZWxldGVfbWFya2VyX3JlcGxpY2F0aW9uOiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZWxldGVNYXJrZXJSZXBsaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZGVsZXRlTWFya2VyUmVwbGljYXRpb24pLFxuICAgIGRlc3RpbmF0aW9uOiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb24pLFxuICAgIGV4aXN0aW5nX29iamVjdF9yZXBsaWNhdGlvbjogczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRXhpc3RpbmdPYmplY3RSZXBsaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZXhpc3RpbmdPYmplY3RSZXBsaWNhdGlvbiksXG4gICAgZmlsdGVyOiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpbHRlciksXG4gICAgc291cmNlX3NlbGVjdGlvbl9jcml0ZXJpYTogczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGUgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgaWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwcmVmaXg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcHJpb3JpdHk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByaW9yaXR5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBzdGF0dXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN0YXR1cyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGVsZXRlX21hcmtlcl9yZXBsaWNhdGlvbjoge1xuICAgICAgdmFsdWU6IHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlbGV0ZU1hcmtlclJlcGxpY2F0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kZWxldGVNYXJrZXJSZXBsaWNhdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlbGV0ZU1hcmtlclJlcGxpY2F0aW9uTGlzdFwiLFxuICAgIH0sXG4gICAgZGVzdGluYXRpb246IHtcbiAgICAgIHZhbHVlOiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZXN0aW5hdGlvbkxpc3RcIixcbiAgICB9LFxuICAgIGV4aXN0aW5nX29iamVjdF9yZXBsaWNhdGlvbjoge1xuICAgICAgdmFsdWU6IHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUV4aXN0aW5nT2JqZWN0UmVwbGljYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmV4aXN0aW5nT2JqZWN0UmVwbGljYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVFeGlzdGluZ09iamVjdFJlcGxpY2F0aW9uTGlzdFwiLFxuICAgIH0sXG4gICAgZmlsdGVyOiB7XG4gICAgICB2YWx1ZTogczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRmlsdGVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5maWx0ZXIpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXJMaXN0XCIsXG4gICAgfSxcbiAgICBzb3VyY2Vfc2VsZWN0aW9uX2NyaXRlcmlhOiB7XG4gICAgICB2YWx1ZTogczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZVNlbGVjdGlvbkNyaXRlcmlhKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGUgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2lkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlkID0gdGhpcy5faWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmVmaXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZml4ID0gdGhpcy5fcHJlZml4O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJpb3JpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJpb3JpdHkgPSB0aGlzLl9wcmlvcml0eTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0YXR1cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdGF0dXMgPSB0aGlzLl9zdGF0dXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZWxldGVNYXJrZXJSZXBsaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWxldGVNYXJrZXJSZXBsaWNhdGlvbiA9IHRoaXMuX2RlbGV0ZU1hcmtlclJlcGxpY2F0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVzdGluYXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVzdGluYXRpb24gPSB0aGlzLl9kZXN0aW5hdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2V4aXN0aW5nT2JqZWN0UmVwbGljYXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZXhpc3RpbmdPYmplY3RSZXBsaWNhdGlvbiA9IHRoaXMuX2V4aXN0aW5nT2JqZWN0UmVwbGljYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9maWx0ZXI/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmlsdGVyID0gdGhpcy5fZmlsdGVyPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc291cmNlU2VsZWN0aW9uQ3JpdGVyaWE/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc291cmNlU2VsZWN0aW9uQ3JpdGVyaWEgPSB0aGlzLl9zb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZSB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByZWZpeCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByaW9yaXR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RhdHVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGVsZXRlTWFya2VyUmVwbGljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9leGlzdGluZ09iamVjdFJlcGxpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9maWx0ZXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NvdXJjZVNlbGVjdGlvbkNyaXRlcmlhLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faWQgPSB2YWx1ZS5pZDtcbiAgICAgIHRoaXMuX3ByZWZpeCA9IHZhbHVlLnByZWZpeDtcbiAgICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWUucHJpb3JpdHk7XG4gICAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZS5zdGF0dXM7XG4gICAgICB0aGlzLl9kZWxldGVNYXJrZXJSZXBsaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZGVsZXRlTWFya2VyUmVwbGljYXRpb247XG4gICAgICB0aGlzLl9kZXN0aW5hdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZGVzdGluYXRpb247XG4gICAgICB0aGlzLl9leGlzdGluZ09iamVjdFJlcGxpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5leGlzdGluZ09iamVjdFJlcGxpY2F0aW9uO1xuICAgICAgdGhpcy5fZmlsdGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZS5maWx0ZXI7XG4gICAgICB0aGlzLl9zb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc291cmNlU2VsZWN0aW9uQ3JpdGVyaWE7XG4gICAgfVxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gcHJlZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZWZpeD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWZpeCgpIHtcbiAgICB0aGlzLl9wcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmaXg7XG4gIH1cblxuICAvLyBwcmlvcml0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmlvcml0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwcmlvcml0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJpb3JpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJpb3JpdHkoKSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByaW9yaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N0YXR1cz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0dXModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0dXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG5cbiAgLy8gZGVsZXRlX21hcmtlcl9yZXBsaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxldGVNYXJrZXJSZXBsaWNhdGlvbiA9IG5ldyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVEZWxldGVNYXJrZXJSZXBsaWNhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImRlbGV0ZV9tYXJrZXJfcmVwbGljYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgZGVsZXRlTWFya2VyUmVwbGljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZU1hcmtlclJlcGxpY2F0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXREZWxldGVNYXJrZXJSZXBsaWNhdGlvbih2YWx1ZTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVsZXRlTWFya2VyUmVwbGljYXRpb24pIHtcbiAgICB0aGlzLl9kZWxldGVNYXJrZXJSZXBsaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsZXRlTWFya2VyUmVwbGljYXRpb24oKSB7XG4gICAgdGhpcy5fZGVsZXRlTWFya2VyUmVwbGljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsZXRlTWFya2VyUmVwbGljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlTWFya2VyUmVwbGljYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGRlc3RpbmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Rlc3RpbmF0aW9uID0gbmV3IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZURlc3RpbmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZGVzdGluYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXREZXN0aW5hdGlvbih2YWx1ZTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlRGVzdGluYXRpb24pIHtcbiAgICB0aGlzLl9kZXN0aW5hdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBleGlzdGluZ19vYmplY3RfcmVwbGljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXhpc3RpbmdPYmplY3RSZXBsaWNhdGlvbiA9IG5ldyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVFeGlzdGluZ09iamVjdFJlcGxpY2F0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZXhpc3Rpbmdfb2JqZWN0X3JlcGxpY2F0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGV4aXN0aW5nT2JqZWN0UmVwbGljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4aXN0aW5nT2JqZWN0UmVwbGljYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEV4aXN0aW5nT2JqZWN0UmVwbGljYXRpb24odmFsdWU6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUV4aXN0aW5nT2JqZWN0UmVwbGljYXRpb24pIHtcbiAgICB0aGlzLl9leGlzdGluZ09iamVjdFJlcGxpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFeGlzdGluZ09iamVjdFJlcGxpY2F0aW9uKCkge1xuICAgIHRoaXMuX2V4aXN0aW5nT2JqZWN0UmVwbGljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhpc3RpbmdPYmplY3RSZXBsaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leGlzdGluZ09iamVjdFJlcGxpY2F0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBmaWx0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlsdGVyID0gbmV3IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZUZpbHRlck91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImZpbHRlclwiKTtcbiAgcHVibGljIGdldCBmaWx0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcjtcbiAgfVxuICBwdWJsaWMgcHV0RmlsdGVyKHZhbHVlOiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVGaWx0ZXIpIHtcbiAgICB0aGlzLl9maWx0ZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpbHRlcigpIHtcbiAgICB0aGlzLl9maWx0ZXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsdGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlci5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc291cmNlX3NlbGVjdGlvbl9jcml0ZXJpYSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYSA9IG5ldyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInNvdXJjZV9zZWxlY3Rpb25fY3JpdGVyaWFcIik7XG4gIHB1YmxpYyBnZXQgc291cmNlU2VsZWN0aW9uQ3JpdGVyaWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZVNlbGVjdGlvbkNyaXRlcmlhO1xuICB9XG4gIHB1YmxpYyBwdXRTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYSh2YWx1ZTogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlU291cmNlU2VsZWN0aW9uQ3JpdGVyaWEpIHtcbiAgICB0aGlzLl9zb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U291cmNlU2VsZWN0aW9uQ3JpdGVyaWEoKSB7XG4gICAgdGhpcy5fc291cmNlU2VsZWN0aW9uQ3JpdGVyaWEuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc291cmNlU2VsZWN0aW9uQ3JpdGVyaWFJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlU2VsZWN0aW9uQ3JpdGVyaWEuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZU91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24gYXdzX3MzX2J1Y2tldF9yZXBsaWNhdGlvbl9jb25maWd1cmF0aW9ufVxuKi9cbmV4cG9ydCBjbGFzcyBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkEgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiYXdzX3MzX2J1Y2tldF9yZXBsaWNhdGlvbl9jb25maWd1cmF0aW9uXCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkEgdG8gaW1wb3J0XG4gICogQHBhcmFtIGltcG9ydEZyb21JZCBUaGUgaWQgb2YgdGhlIGV4aXN0aW5nIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb24jaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQSB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb25cIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zM19idWNrZXRfcmVwbGljYXRpb25fY29uZmlndXJhdGlvbiBhd3NfczNfYnVja2V0X3JlcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb259IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uQUNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19zM19idWNrZXRfcmVwbGljYXRpb25fY29uZmlndXJhdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnLFxuICAgICAgICBwcm92aWRlclZlcnNpb246ICczLjc2LjEnLFxuICAgICAgICBwcm92aWRlclZlcnNpb25Db25zdHJhaW50OiAnfj4gMy4wJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlLFxuICAgICAgcHJvdmlzaW9uZXJzOiBjb25maWcucHJvdmlzaW9uZXJzLFxuICAgICAgY29ubmVjdGlvbjogY29uZmlnLmNvbm5lY3Rpb24sXG4gICAgICBmb3JFYWNoOiBjb25maWcuZm9yRWFjaFxuICAgIH0pO1xuICAgIHRoaXMuX2J1Y2tldCA9IGNvbmZpZy5idWNrZXQ7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gICAgdGhpcy5fcm9sZSA9IGNvbmZpZy5yb2xlO1xuICAgIHRoaXMuX3Rva2VuID0gY29uZmlnLnRva2VuO1xuICAgIHRoaXMuX3J1bGUuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5ydWxlO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBidWNrZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYnVja2V0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWNrZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVja2V0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXQ7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyByb2xlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JvbGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb2xlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZTtcbiAgfVxuXG4gIC8vIHRva2VuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Rva2VuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0b2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Rva2VuJyk7XG4gIH1cbiAgcHVibGljIHNldCB0b2tlbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdG9rZW4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUb2tlbigpIHtcbiAgICB0aGlzLl90b2tlbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdG9rZW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9rZW47XG4gIH1cblxuICAvLyBydWxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3J1bGUgPSBuZXcgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlTGlzdCh0aGlzLCBcInJ1bGVcIiwgZmFsc2UpO1xuICBwdWJsaWMgZ2V0IHJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bGU7XG4gIH1cbiAgcHVibGljIHB1dFJ1bGUodmFsdWU6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVtdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9ydWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcnVsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ydWxlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJ1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYnVja2V0KSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICByb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yb2xlKSxcbiAgICAgIHRva2VuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90b2tlbiksXG4gICAgICBydWxlOiBjZGt0Zi5saXN0TWFwcGVyKHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZVRvVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9ydWxlLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgYnVja2V0OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9idWNrZXQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICByb2xlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9yb2xlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgdG9rZW46IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3Rva2VuKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgcnVsZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fcnVsZS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlTGlzdFwiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19