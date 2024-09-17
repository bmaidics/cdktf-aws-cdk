"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RdsCluster = exports.RdsClusterTimeoutsOutputReference = exports.rdsClusterTimeoutsToHclTerraform = exports.rdsClusterTimeoutsToTerraform = exports.RdsClusterScalingConfigurationOutputReference = exports.rdsClusterScalingConfigurationToHclTerraform = exports.rdsClusterScalingConfigurationToTerraform = exports.RdsClusterS3ImportOutputReference = exports.rdsClusterS3ImportToHclTerraform = exports.rdsClusterS3ImportToTerraform = exports.RdsClusterRestoreToPointInTimeOutputReference = exports.rdsClusterRestoreToPointInTimeToHclTerraform = exports.rdsClusterRestoreToPointInTimeToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function rdsClusterRestoreToPointInTimeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        restore_to_time: cdktf.stringToTerraform(struct.restoreToTime),
        restore_type: cdktf.stringToTerraform(struct.restoreType),
        source_cluster_identifier: cdktf.stringToTerraform(struct.sourceClusterIdentifier),
        use_latest_restorable_time: cdktf.booleanToTerraform(struct.useLatestRestorableTime),
    };
}
exports.rdsClusterRestoreToPointInTimeToTerraform = rdsClusterRestoreToPointInTimeToTerraform;
function rdsClusterRestoreToPointInTimeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        restore_to_time: {
            value: cdktf.stringToHclTerraform(struct.restoreToTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        restore_type: {
            value: cdktf.stringToHclTerraform(struct.restoreType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_cluster_identifier: {
            value: cdktf.stringToHclTerraform(struct.sourceClusterIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_latest_restorable_time: {
            value: cdktf.booleanToHclTerraform(struct.useLatestRestorableTime),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.rdsClusterRestoreToPointInTimeToHclTerraform = rdsClusterRestoreToPointInTimeToHclTerraform;
class RdsClusterRestoreToPointInTimeOutputReference extends cdktf.ComplexObject {
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
        if (this._restoreToTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.restoreToTime = this._restoreToTime;
        }
        if (this._restoreType !== undefined) {
            hasAnyValues = true;
            internalValueResult.restoreType = this._restoreType;
        }
        if (this._sourceClusterIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceClusterIdentifier = this._sourceClusterIdentifier;
        }
        if (this._useLatestRestorableTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.useLatestRestorableTime = this._useLatestRestorableTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._restoreToTime = undefined;
            this._restoreType = undefined;
            this._sourceClusterIdentifier = undefined;
            this._useLatestRestorableTime = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._restoreToTime = value.restoreToTime;
            this._restoreType = value.restoreType;
            this._sourceClusterIdentifier = value.sourceClusterIdentifier;
            this._useLatestRestorableTime = value.useLatestRestorableTime;
        }
    }
    get restoreToTime() {
        return this.getStringAttribute('restore_to_time');
    }
    set restoreToTime(value) {
        this._restoreToTime = value;
    }
    resetRestoreToTime() {
        this._restoreToTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get restoreToTimeInput() {
        return this._restoreToTime;
    }
    get restoreType() {
        return this.getStringAttribute('restore_type');
    }
    set restoreType(value) {
        this._restoreType = value;
    }
    resetRestoreType() {
        this._restoreType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get restoreTypeInput() {
        return this._restoreType;
    }
    get sourceClusterIdentifier() {
        return this.getStringAttribute('source_cluster_identifier');
    }
    set sourceClusterIdentifier(value) {
        this._sourceClusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    get sourceClusterIdentifierInput() {
        return this._sourceClusterIdentifier;
    }
    get useLatestRestorableTime() {
        return this.getBooleanAttribute('use_latest_restorable_time');
    }
    set useLatestRestorableTime(value) {
        this._useLatestRestorableTime = value;
    }
    resetUseLatestRestorableTime() {
        this._useLatestRestorableTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get useLatestRestorableTimeInput() {
        return this._useLatestRestorableTime;
    }
}
exports.RdsClusterRestoreToPointInTimeOutputReference = RdsClusterRestoreToPointInTimeOutputReference;
_a = JSII_RTTI_SYMBOL_1;
RdsClusterRestoreToPointInTimeOutputReference[_a] = { fqn: "@cdktf/aws-cdk.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference", version: "0.0.0" };
function rdsClusterS3ImportToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
        ingestion_role: cdktf.stringToTerraform(struct.ingestionRole),
        source_engine: cdktf.stringToTerraform(struct.sourceEngine),
        source_engine_version: cdktf.stringToTerraform(struct.sourceEngineVersion),
    };
}
exports.rdsClusterS3ImportToTerraform = rdsClusterS3ImportToTerraform;
function rdsClusterS3ImportToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        bucket_name: {
            value: cdktf.stringToHclTerraform(struct.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_prefix: {
            value: cdktf.stringToHclTerraform(struct.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ingestion_role: {
            value: cdktf.stringToHclTerraform(struct.ingestionRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_engine: {
            value: cdktf.stringToHclTerraform(struct.sourceEngine),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_engine_version: {
            value: cdktf.stringToHclTerraform(struct.sourceEngineVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.rdsClusterS3ImportToHclTerraform = rdsClusterS3ImportToHclTerraform;
class RdsClusterS3ImportOutputReference extends cdktf.ComplexObject {
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
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._ingestionRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.ingestionRole = this._ingestionRole;
        }
        if (this._sourceEngine !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceEngine = this._sourceEngine;
        }
        if (this._sourceEngineVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceEngineVersion = this._sourceEngineVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._ingestionRole = undefined;
            this._sourceEngine = undefined;
            this._sourceEngineVersion = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._ingestionRole = value.ingestionRole;
            this._sourceEngine = value.sourceEngine;
            this._sourceEngineVersion = value.sourceEngineVersion;
        }
    }
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    set bucketName(value) {
        this._bucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketNameInput() {
        return this._bucketName;
    }
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    set bucketPrefix(value) {
        this._bucketPrefix = value;
    }
    resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketPrefixInput() {
        return this._bucketPrefix;
    }
    get ingestionRole() {
        return this.getStringAttribute('ingestion_role');
    }
    set ingestionRole(value) {
        this._ingestionRole = value;
    }
    // Temporarily expose input value. Use with caution.
    get ingestionRoleInput() {
        return this._ingestionRole;
    }
    get sourceEngine() {
        return this.getStringAttribute('source_engine');
    }
    set sourceEngine(value) {
        this._sourceEngine = value;
    }
    // Temporarily expose input value. Use with caution.
    get sourceEngineInput() {
        return this._sourceEngine;
    }
    get sourceEngineVersion() {
        return this.getStringAttribute('source_engine_version');
    }
    set sourceEngineVersion(value) {
        this._sourceEngineVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    get sourceEngineVersionInput() {
        return this._sourceEngineVersion;
    }
}
exports.RdsClusterS3ImportOutputReference = RdsClusterS3ImportOutputReference;
_b = JSII_RTTI_SYMBOL_1;
RdsClusterS3ImportOutputReference[_b] = { fqn: "@cdktf/aws-cdk.rdsCluster.RdsClusterS3ImportOutputReference", version: "0.0.0" };
function rdsClusterScalingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auto_pause: cdktf.booleanToTerraform(struct.autoPause),
        max_capacity: cdktf.numberToTerraform(struct.maxCapacity),
        min_capacity: cdktf.numberToTerraform(struct.minCapacity),
        seconds_until_auto_pause: cdktf.numberToTerraform(struct.secondsUntilAutoPause),
        timeout_action: cdktf.stringToTerraform(struct.timeoutAction),
    };
}
exports.rdsClusterScalingConfigurationToTerraform = rdsClusterScalingConfigurationToTerraform;
function rdsClusterScalingConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        auto_pause: {
            value: cdktf.booleanToHclTerraform(struct.autoPause),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        max_capacity: {
            value: cdktf.numberToHclTerraform(struct.maxCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_capacity: {
            value: cdktf.numberToHclTerraform(struct.minCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        seconds_until_auto_pause: {
            value: cdktf.numberToHclTerraform(struct.secondsUntilAutoPause),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timeout_action: {
            value: cdktf.stringToHclTerraform(struct.timeoutAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.rdsClusterScalingConfigurationToHclTerraform = rdsClusterScalingConfigurationToHclTerraform;
class RdsClusterScalingConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._autoPause !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoPause = this._autoPause;
        }
        if (this._maxCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacity = this._maxCapacity;
        }
        if (this._minCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.minCapacity = this._minCapacity;
        }
        if (this._secondsUntilAutoPause !== undefined) {
            hasAnyValues = true;
            internalValueResult.secondsUntilAutoPause = this._secondsUntilAutoPause;
        }
        if (this._timeoutAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutAction = this._timeoutAction;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._autoPause = undefined;
            this._maxCapacity = undefined;
            this._minCapacity = undefined;
            this._secondsUntilAutoPause = undefined;
            this._timeoutAction = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._autoPause = value.autoPause;
            this._maxCapacity = value.maxCapacity;
            this._minCapacity = value.minCapacity;
            this._secondsUntilAutoPause = value.secondsUntilAutoPause;
            this._timeoutAction = value.timeoutAction;
        }
    }
    get autoPause() {
        return this.getBooleanAttribute('auto_pause');
    }
    set autoPause(value) {
        this._autoPause = value;
    }
    resetAutoPause() {
        this._autoPause = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoPauseInput() {
        return this._autoPause;
    }
    get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    set maxCapacity(value) {
        this._maxCapacity = value;
    }
    resetMaxCapacity() {
        this._maxCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxCapacityInput() {
        return this._maxCapacity;
    }
    get minCapacity() {
        return this.getNumberAttribute('min_capacity');
    }
    set minCapacity(value) {
        this._minCapacity = value;
    }
    resetMinCapacity() {
        this._minCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minCapacityInput() {
        return this._minCapacity;
    }
    get secondsUntilAutoPause() {
        return this.getNumberAttribute('seconds_until_auto_pause');
    }
    set secondsUntilAutoPause(value) {
        this._secondsUntilAutoPause = value;
    }
    resetSecondsUntilAutoPause() {
        this._secondsUntilAutoPause = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secondsUntilAutoPauseInput() {
        return this._secondsUntilAutoPause;
    }
    get timeoutAction() {
        return this.getStringAttribute('timeout_action');
    }
    set timeoutAction(value) {
        this._timeoutAction = value;
    }
    resetTimeoutAction() {
        this._timeoutAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutActionInput() {
        return this._timeoutAction;
    }
}
exports.RdsClusterScalingConfigurationOutputReference = RdsClusterScalingConfigurationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
RdsClusterScalingConfigurationOutputReference[_c] = { fqn: "@cdktf/aws-cdk.rdsCluster.RdsClusterScalingConfigurationOutputReference", version: "0.0.0" };
function rdsClusterTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
        update: cdktf.stringToTerraform(struct.update),
    };
}
exports.rdsClusterTimeoutsToTerraform = rdsClusterTimeoutsToTerraform;
function rdsClusterTimeoutsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        create: {
            value: cdktf.stringToHclTerraform(struct.create),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        delete: {
            value: cdktf.stringToHclTerraform(struct.delete),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update: {
            value: cdktf.stringToHclTerraform(struct.update),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.rdsClusterTimeoutsToHclTerraform = rdsClusterTimeoutsToHclTerraform;
class RdsClusterTimeoutsOutputReference extends cdktf.ComplexObject {
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
        if (this._create !== undefined) {
            hasAnyValues = true;
            internalValueResult.create = this._create;
        }
        if (this._delete !== undefined) {
            hasAnyValues = true;
            internalValueResult.delete = this._delete;
        }
        if (this._update !== undefined) {
            hasAnyValues = true;
            internalValueResult.update = this._update;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._create = undefined;
            this._delete = undefined;
            this._update = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._create = value.create;
            this._delete = value.delete;
            this._update = value.update;
        }
    }
    get create() {
        return this.getStringAttribute('create');
    }
    set create(value) {
        this._create = value;
    }
    resetCreate() {
        this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createInput() {
        return this._create;
    }
    get delete() {
        return this.getStringAttribute('delete');
    }
    set delete(value) {
        this._delete = value;
    }
    resetDelete() {
        this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteInput() {
        return this._delete;
    }
    get update() {
        return this.getStringAttribute('update');
    }
    set update(value) {
        this._update = value;
    }
    resetUpdate() {
        this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updateInput() {
        return this._update;
    }
}
exports.RdsClusterTimeoutsOutputReference = RdsClusterTimeoutsOutputReference;
_d = JSII_RTTI_SYMBOL_1;
RdsClusterTimeoutsOutputReference[_d] = { fqn: "@cdktf/aws-cdk.rdsCluster.RdsClusterTimeoutsOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/rds_cluster aws_rds_cluster}
*/
class RdsCluster extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RdsCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RdsCluster to import
    * @param importFromId The id of the existing RdsCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/rds_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RdsCluster to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_rds_cluster", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/rds_cluster aws_rds_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_rds_cluster',
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
        // restore_to_point_in_time - computed: false, optional: true, required: false
        this._restoreToPointInTime = new RdsClusterRestoreToPointInTimeOutputReference(this, "restore_to_point_in_time");
        // s3_import - computed: false, optional: true, required: false
        this._s3Import = new RdsClusterS3ImportOutputReference(this, "s3_import");
        // scaling_configuration - computed: false, optional: true, required: false
        this._scalingConfiguration = new RdsClusterScalingConfigurationOutputReference(this, "scaling_configuration");
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new RdsClusterTimeoutsOutputReference(this, "timeouts");
        this._allowMajorVersionUpgrade = config.allowMajorVersionUpgrade;
        this._applyImmediately = config.applyImmediately;
        this._availabilityZones = config.availabilityZones;
        this._backtrackWindow = config.backtrackWindow;
        this._backupRetentionPeriod = config.backupRetentionPeriod;
        this._clusterIdentifier = config.clusterIdentifier;
        this._clusterIdentifierPrefix = config.clusterIdentifierPrefix;
        this._clusterMembers = config.clusterMembers;
        this._copyTagsToSnapshot = config.copyTagsToSnapshot;
        this._databaseName = config.databaseName;
        this._dbClusterParameterGroupName = config.dbClusterParameterGroupName;
        this._dbInstanceParameterGroupName = config.dbInstanceParameterGroupName;
        this._dbSubnetGroupName = config.dbSubnetGroupName;
        this._deletionProtection = config.deletionProtection;
        this._enableGlobalWriteForwarding = config.enableGlobalWriteForwarding;
        this._enableHttpEndpoint = config.enableHttpEndpoint;
        this._enabledCloudwatchLogsExports = config.enabledCloudwatchLogsExports;
        this._engine = config.engine;
        this._engineMode = config.engineMode;
        this._engineVersion = config.engineVersion;
        this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
        this._globalClusterIdentifier = config.globalClusterIdentifier;
        this._iamDatabaseAuthenticationEnabled = config.iamDatabaseAuthenticationEnabled;
        this._iamRoles = config.iamRoles;
        this._id = config.id;
        this._kmsKeyId = config.kmsKeyId;
        this._masterPassword = config.masterPassword;
        this._masterUsername = config.masterUsername;
        this._port = config.port;
        this._preferredBackupWindow = config.preferredBackupWindow;
        this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        this._replicationSourceIdentifier = config.replicationSourceIdentifier;
        this._skipFinalSnapshot = config.skipFinalSnapshot;
        this._snapshotIdentifier = config.snapshotIdentifier;
        this._sourceRegion = config.sourceRegion;
        this._storageEncrypted = config.storageEncrypted;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        this._restoreToPointInTime.internalValue = config.restoreToPointInTime;
        this._s3Import.internalValue = config.s3Import;
        this._scalingConfiguration.internalValue = config.scalingConfiguration;
        this._timeouts.internalValue = config.timeouts;
    }
    get allowMajorVersionUpgrade() {
        return this.getBooleanAttribute('allow_major_version_upgrade');
    }
    set allowMajorVersionUpgrade(value) {
        this._allowMajorVersionUpgrade = value;
    }
    resetAllowMajorVersionUpgrade() {
        this._allowMajorVersionUpgrade = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowMajorVersionUpgradeInput() {
        return this._allowMajorVersionUpgrade;
    }
    get applyImmediately() {
        return this.getBooleanAttribute('apply_immediately');
    }
    set applyImmediately(value) {
        this._applyImmediately = value;
    }
    resetApplyImmediately() {
        this._applyImmediately = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applyImmediatelyInput() {
        return this._applyImmediately;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get availabilityZones() {
        return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
    }
    set availabilityZones(value) {
        this._availabilityZones = value;
    }
    resetAvailabilityZones() {
        this._availabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get availabilityZonesInput() {
        return this._availabilityZones;
    }
    get backtrackWindow() {
        return this.getNumberAttribute('backtrack_window');
    }
    set backtrackWindow(value) {
        this._backtrackWindow = value;
    }
    resetBacktrackWindow() {
        this._backtrackWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get backtrackWindowInput() {
        return this._backtrackWindow;
    }
    get backupRetentionPeriod() {
        return this.getNumberAttribute('backup_retention_period');
    }
    set backupRetentionPeriod(value) {
        this._backupRetentionPeriod = value;
    }
    resetBackupRetentionPeriod() {
        this._backupRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get backupRetentionPeriodInput() {
        return this._backupRetentionPeriod;
    }
    get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    set clusterIdentifier(value) {
        this._clusterIdentifier = value;
    }
    resetClusterIdentifier() {
        this._clusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clusterIdentifierInput() {
        return this._clusterIdentifier;
    }
    get clusterIdentifierPrefix() {
        return this.getStringAttribute('cluster_identifier_prefix');
    }
    set clusterIdentifierPrefix(value) {
        this._clusterIdentifierPrefix = value;
    }
    resetClusterIdentifierPrefix() {
        this._clusterIdentifierPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clusterIdentifierPrefixInput() {
        return this._clusterIdentifierPrefix;
    }
    get clusterMembers() {
        return cdktf.Fn.tolist(this.getListAttribute('cluster_members'));
    }
    set clusterMembers(value) {
        this._clusterMembers = value;
    }
    resetClusterMembers() {
        this._clusterMembers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clusterMembersInput() {
        return this._clusterMembers;
    }
    // cluster_resource_id - computed: true, optional: false, required: false
    get clusterResourceId() {
        return this.getStringAttribute('cluster_resource_id');
    }
    get copyTagsToSnapshot() {
        return this.getBooleanAttribute('copy_tags_to_snapshot');
    }
    set copyTagsToSnapshot(value) {
        this._copyTagsToSnapshot = value;
    }
    resetCopyTagsToSnapshot() {
        this._copyTagsToSnapshot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get copyTagsToSnapshotInput() {
        return this._copyTagsToSnapshot;
    }
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    set databaseName(value) {
        this._databaseName = value;
    }
    resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get databaseNameInput() {
        return this._databaseName;
    }
    get dbClusterParameterGroupName() {
        return this.getStringAttribute('db_cluster_parameter_group_name');
    }
    set dbClusterParameterGroupName(value) {
        this._dbClusterParameterGroupName = value;
    }
    resetDbClusterParameterGroupName() {
        this._dbClusterParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dbClusterParameterGroupNameInput() {
        return this._dbClusterParameterGroupName;
    }
    get dbInstanceParameterGroupName() {
        return this.getStringAttribute('db_instance_parameter_group_name');
    }
    set dbInstanceParameterGroupName(value) {
        this._dbInstanceParameterGroupName = value;
    }
    resetDbInstanceParameterGroupName() {
        this._dbInstanceParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dbInstanceParameterGroupNameInput() {
        return this._dbInstanceParameterGroupName;
    }
    get dbSubnetGroupName() {
        return this.getStringAttribute('db_subnet_group_name');
    }
    set dbSubnetGroupName(value) {
        this._dbSubnetGroupName = value;
    }
    resetDbSubnetGroupName() {
        this._dbSubnetGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dbSubnetGroupNameInput() {
        return this._dbSubnetGroupName;
    }
    get deletionProtection() {
        return this.getBooleanAttribute('deletion_protection');
    }
    set deletionProtection(value) {
        this._deletionProtection = value;
    }
    resetDeletionProtection() {
        this._deletionProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deletionProtectionInput() {
        return this._deletionProtection;
    }
    get enableGlobalWriteForwarding() {
        return this.getBooleanAttribute('enable_global_write_forwarding');
    }
    set enableGlobalWriteForwarding(value) {
        this._enableGlobalWriteForwarding = value;
    }
    resetEnableGlobalWriteForwarding() {
        this._enableGlobalWriteForwarding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableGlobalWriteForwardingInput() {
        return this._enableGlobalWriteForwarding;
    }
    get enableHttpEndpoint() {
        return this.getBooleanAttribute('enable_http_endpoint');
    }
    set enableHttpEndpoint(value) {
        this._enableHttpEndpoint = value;
    }
    resetEnableHttpEndpoint() {
        this._enableHttpEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableHttpEndpointInput() {
        return this._enableHttpEndpoint;
    }
    get enabledCloudwatchLogsExports() {
        return cdktf.Fn.tolist(this.getListAttribute('enabled_cloudwatch_logs_exports'));
    }
    set enabledCloudwatchLogsExports(value) {
        this._enabledCloudwatchLogsExports = value;
    }
    resetEnabledCloudwatchLogsExports() {
        this._enabledCloudwatchLogsExports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledCloudwatchLogsExportsInput() {
        return this._enabledCloudwatchLogsExports;
    }
    // endpoint - computed: true, optional: false, required: false
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    get engine() {
        return this.getStringAttribute('engine');
    }
    set engine(value) {
        this._engine = value;
    }
    resetEngine() {
        this._engine = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get engineInput() {
        return this._engine;
    }
    get engineMode() {
        return this.getStringAttribute('engine_mode');
    }
    set engineMode(value) {
        this._engineMode = value;
    }
    resetEngineMode() {
        this._engineMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get engineModeInput() {
        return this._engineMode;
    }
    get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    set engineVersion(value) {
        this._engineVersion = value;
    }
    resetEngineVersion() {
        this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get engineVersionInput() {
        return this._engineVersion;
    }
    // engine_version_actual - computed: true, optional: false, required: false
    get engineVersionActual() {
        return this.getStringAttribute('engine_version_actual');
    }
    get finalSnapshotIdentifier() {
        return this.getStringAttribute('final_snapshot_identifier');
    }
    set finalSnapshotIdentifier(value) {
        this._finalSnapshotIdentifier = value;
    }
    resetFinalSnapshotIdentifier() {
        this._finalSnapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get finalSnapshotIdentifierInput() {
        return this._finalSnapshotIdentifier;
    }
    get globalClusterIdentifier() {
        return this.getStringAttribute('global_cluster_identifier');
    }
    set globalClusterIdentifier(value) {
        this._globalClusterIdentifier = value;
    }
    resetGlobalClusterIdentifier() {
        this._globalClusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get globalClusterIdentifierInput() {
        return this._globalClusterIdentifier;
    }
    // hosted_zone_id - computed: true, optional: false, required: false
    get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }
    get iamDatabaseAuthenticationEnabled() {
        return this.getBooleanAttribute('iam_database_authentication_enabled');
    }
    set iamDatabaseAuthenticationEnabled(value) {
        this._iamDatabaseAuthenticationEnabled = value;
    }
    resetIamDatabaseAuthenticationEnabled() {
        this._iamDatabaseAuthenticationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iamDatabaseAuthenticationEnabledInput() {
        return this._iamDatabaseAuthenticationEnabled;
    }
    get iamRoles() {
        return cdktf.Fn.tolist(this.getListAttribute('iam_roles'));
    }
    set iamRoles(value) {
        this._iamRoles = value;
    }
    resetIamRoles() {
        this._iamRoles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iamRolesInput() {
        return this._iamRoles;
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
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    set kmsKeyId(value) {
        this._kmsKeyId = value;
    }
    resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyIdInput() {
        return this._kmsKeyId;
    }
    get masterPassword() {
        return this.getStringAttribute('master_password');
    }
    set masterPassword(value) {
        this._masterPassword = value;
    }
    resetMasterPassword() {
        this._masterPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get masterPasswordInput() {
        return this._masterPassword;
    }
    get masterUsername() {
        return this.getStringAttribute('master_username');
    }
    set masterUsername(value) {
        this._masterUsername = value;
    }
    resetMasterUsername() {
        this._masterUsername = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get masterUsernameInput() {
        return this._masterUsername;
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
    get preferredBackupWindow() {
        return this.getStringAttribute('preferred_backup_window');
    }
    set preferredBackupWindow(value) {
        this._preferredBackupWindow = value;
    }
    resetPreferredBackupWindow() {
        this._preferredBackupWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preferredBackupWindowInput() {
        return this._preferredBackupWindow;
    }
    get preferredMaintenanceWindow() {
        return this.getStringAttribute('preferred_maintenance_window');
    }
    set preferredMaintenanceWindow(value) {
        this._preferredMaintenanceWindow = value;
    }
    resetPreferredMaintenanceWindow() {
        this._preferredMaintenanceWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preferredMaintenanceWindowInput() {
        return this._preferredMaintenanceWindow;
    }
    // reader_endpoint - computed: true, optional: false, required: false
    get readerEndpoint() {
        return this.getStringAttribute('reader_endpoint');
    }
    get replicationSourceIdentifier() {
        return this.getStringAttribute('replication_source_identifier');
    }
    set replicationSourceIdentifier(value) {
        this._replicationSourceIdentifier = value;
    }
    resetReplicationSourceIdentifier() {
        this._replicationSourceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get replicationSourceIdentifierInput() {
        return this._replicationSourceIdentifier;
    }
    get skipFinalSnapshot() {
        return this.getBooleanAttribute('skip_final_snapshot');
    }
    set skipFinalSnapshot(value) {
        this._skipFinalSnapshot = value;
    }
    resetSkipFinalSnapshot() {
        this._skipFinalSnapshot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get skipFinalSnapshotInput() {
        return this._skipFinalSnapshot;
    }
    get snapshotIdentifier() {
        return this.getStringAttribute('snapshot_identifier');
    }
    set snapshotIdentifier(value) {
        this._snapshotIdentifier = value;
    }
    resetSnapshotIdentifier() {
        this._snapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get snapshotIdentifierInput() {
        return this._snapshotIdentifier;
    }
    get sourceRegion() {
        return this.getStringAttribute('source_region');
    }
    set sourceRegion(value) {
        this._sourceRegion = value;
    }
    resetSourceRegion() {
        this._sourceRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceRegionInput() {
        return this._sourceRegion;
    }
    get storageEncrypted() {
        return this.getBooleanAttribute('storage_encrypted');
    }
    set storageEncrypted(value) {
        this._storageEncrypted = value;
    }
    resetStorageEncrypted() {
        this._storageEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get storageEncryptedInput() {
        return this._storageEncrypted;
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
    get vpcSecurityGroupIds() {
        return cdktf.Fn.tolist(this.getListAttribute('vpc_security_group_ids'));
    }
    set vpcSecurityGroupIds(value) {
        this._vpcSecurityGroupIds = value;
    }
    resetVpcSecurityGroupIds() {
        this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcSecurityGroupIdsInput() {
        return this._vpcSecurityGroupIds;
    }
    get restoreToPointInTime() {
        return this._restoreToPointInTime;
    }
    putRestoreToPointInTime(value) {
        this._restoreToPointInTime.internalValue = value;
    }
    resetRestoreToPointInTime() {
        this._restoreToPointInTime.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get restoreToPointInTimeInput() {
        return this._restoreToPointInTime.internalValue;
    }
    get s3Import() {
        return this._s3Import;
    }
    putS3Import(value) {
        this._s3Import.internalValue = value;
    }
    resetS3Import() {
        this._s3Import.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3ImportInput() {
        return this._s3Import.internalValue;
    }
    get scalingConfiguration() {
        return this._scalingConfiguration;
    }
    putScalingConfiguration(value) {
        this._scalingConfiguration.internalValue = value;
    }
    resetScalingConfiguration() {
        this._scalingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scalingConfigurationInput() {
        return this._scalingConfiguration.internalValue;
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
            allow_major_version_upgrade: cdktf.booleanToTerraform(this._allowMajorVersionUpgrade),
            apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
            availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
            backtrack_window: cdktf.numberToTerraform(this._backtrackWindow),
            backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
            cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
            cluster_identifier_prefix: cdktf.stringToTerraform(this._clusterIdentifierPrefix),
            cluster_members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterMembers),
            copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
            database_name: cdktf.stringToTerraform(this._databaseName),
            db_cluster_parameter_group_name: cdktf.stringToTerraform(this._dbClusterParameterGroupName),
            db_instance_parameter_group_name: cdktf.stringToTerraform(this._dbInstanceParameterGroupName),
            db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
            deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
            enable_global_write_forwarding: cdktf.booleanToTerraform(this._enableGlobalWriteForwarding),
            enable_http_endpoint: cdktf.booleanToTerraform(this._enableHttpEndpoint),
            enabled_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledCloudwatchLogsExports),
            engine: cdktf.stringToTerraform(this._engine),
            engine_mode: cdktf.stringToTerraform(this._engineMode),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
            global_cluster_identifier: cdktf.stringToTerraform(this._globalClusterIdentifier),
            iam_database_authentication_enabled: cdktf.booleanToTerraform(this._iamDatabaseAuthenticationEnabled),
            iam_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._iamRoles),
            id: cdktf.stringToTerraform(this._id),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            master_password: cdktf.stringToTerraform(this._masterPassword),
            master_username: cdktf.stringToTerraform(this._masterUsername),
            port: cdktf.numberToTerraform(this._port),
            preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
            preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
            replication_source_identifier: cdktf.stringToTerraform(this._replicationSourceIdentifier),
            skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
            snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
            source_region: cdktf.stringToTerraform(this._sourceRegion),
            storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcSecurityGroupIds),
            restore_to_point_in_time: rdsClusterRestoreToPointInTimeToTerraform(this._restoreToPointInTime.internalValue),
            s3_import: rdsClusterS3ImportToTerraform(this._s3Import.internalValue),
            scaling_configuration: rdsClusterScalingConfigurationToTerraform(this._scalingConfiguration.internalValue),
            timeouts: rdsClusterTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            allow_major_version_upgrade: {
                value: cdktf.booleanToHclTerraform(this._allowMajorVersionUpgrade),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            apply_immediately: {
                value: cdktf.booleanToHclTerraform(this._applyImmediately),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            availability_zones: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            backtrack_window: {
                value: cdktf.numberToHclTerraform(this._backtrackWindow),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            backup_retention_period: {
                value: cdktf.numberToHclTerraform(this._backupRetentionPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cluster_identifier: {
                value: cdktf.stringToHclTerraform(this._clusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cluster_identifier_prefix: {
                value: cdktf.stringToHclTerraform(this._clusterIdentifierPrefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cluster_members: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clusterMembers),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            copy_tags_to_snapshot: {
                value: cdktf.booleanToHclTerraform(this._copyTagsToSnapshot),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            database_name: {
                value: cdktf.stringToHclTerraform(this._databaseName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_cluster_parameter_group_name: {
                value: cdktf.stringToHclTerraform(this._dbClusterParameterGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_instance_parameter_group_name: {
                value: cdktf.stringToHclTerraform(this._dbInstanceParameterGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_subnet_group_name: {
                value: cdktf.stringToHclTerraform(this._dbSubnetGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deletion_protection: {
                value: cdktf.booleanToHclTerraform(this._deletionProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enable_global_write_forwarding: {
                value: cdktf.booleanToHclTerraform(this._enableGlobalWriteForwarding),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enable_http_endpoint: {
                value: cdktf.booleanToHclTerraform(this._enableHttpEndpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enabled_cloudwatch_logs_exports: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledCloudwatchLogsExports),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            engine: {
                value: cdktf.stringToHclTerraform(this._engine),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_mode: {
                value: cdktf.stringToHclTerraform(this._engineMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_version: {
                value: cdktf.stringToHclTerraform(this._engineVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            final_snapshot_identifier: {
                value: cdktf.stringToHclTerraform(this._finalSnapshotIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            global_cluster_identifier: {
                value: cdktf.stringToHclTerraform(this._globalClusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            iam_database_authentication_enabled: {
                value: cdktf.booleanToHclTerraform(this._iamDatabaseAuthenticationEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            iam_roles: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._iamRoles),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_id: {
                value: cdktf.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            master_password: {
                value: cdktf.stringToHclTerraform(this._masterPassword),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            master_username: {
                value: cdktf.stringToHclTerraform(this._masterUsername),
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
            preferred_backup_window: {
                value: cdktf.stringToHclTerraform(this._preferredBackupWindow),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            preferred_maintenance_window: {
                value: cdktf.stringToHclTerraform(this._preferredMaintenanceWindow),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replication_source_identifier: {
                value: cdktf.stringToHclTerraform(this._replicationSourceIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            skip_final_snapshot: {
                value: cdktf.booleanToHclTerraform(this._skipFinalSnapshot),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            snapshot_identifier: {
                value: cdktf.stringToHclTerraform(this._snapshotIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_region: {
                value: cdktf.stringToHclTerraform(this._sourceRegion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            storage_encrypted: {
                value: cdktf.booleanToHclTerraform(this._storageEncrypted),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
            vpc_security_group_ids: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcSecurityGroupIds),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            restore_to_point_in_time: {
                value: rdsClusterRestoreToPointInTimeToHclTerraform(this._restoreToPointInTime.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RdsClusterRestoreToPointInTimeList",
            },
            s3_import: {
                value: rdsClusterS3ImportToHclTerraform(this._s3Import.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RdsClusterS3ImportList",
            },
            scaling_configuration: {
                value: rdsClusterScalingConfigurationToHclTerraform(this._scalingConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RdsClusterScalingConfigurationList",
            },
            timeouts: {
                value: rdsClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "RdsClusterTimeouts",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.RdsCluster = RdsCluster;
_e = JSII_RTTI_SYMBOL_1;
RdsCluster[_e] = { fqn: "@cdktf/aws-cdk.rdsCluster.RdsCluster", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
RdsCluster.tfResourceType = "aws_rds_cluster";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3Jkcy1jbHVzdGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBZ04vQixTQUFnQix5Q0FBeUMsQ0FBQyxNQUF1RjtJQUMvSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQy9ELFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUMxRCx5QkFBeUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHVCQUF1QixDQUFDO1FBQ25GLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsdUJBQXVCLENBQUM7S0FDdEYsQ0FBQTtBQUNILENBQUM7QUFYRCw4RkFXQztBQUdELFNBQWdCLDRDQUE0QyxDQUFDLE1BQXVGO0lBQ2xKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FB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QUNiLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLG9CQUFvQjthQUN2QztTQUNGLENBQUM7UUFFRiw4QkFBOEI7UUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUUsQ0FBQyxDQUFBO0lBQzVILENBQUM7O0FBM21DSCxnQ0E0bUNDOzs7QUExbUNDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0cseUJBQWMsR0FBRyxpQkFBaUIsQUFBcEIsQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlclxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIFJkc0NsdXN0ZXJDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjYWxsb3dfbWFqb3JfdmVyc2lvbl91cGdyYWRlIFJkc0NsdXN0ZXIjYWxsb3dfbWFqb3JfdmVyc2lvbl91cGdyYWRlfVxuICAqL1xuICByZWFkb25seSBhbGxvd01ham9yVmVyc2lvblVwZ3JhZGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI2FwcGx5X2ltbWVkaWF0ZWx5IFJkc0NsdXN0ZXIjYXBwbHlfaW1tZWRpYXRlbHl9XG4gICovXG4gIHJlYWRvbmx5IGFwcGx5SW1tZWRpYXRlbHk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI2F2YWlsYWJpbGl0eV96b25lcyBSZHNDbHVzdGVyI2F2YWlsYWJpbGl0eV96b25lc31cbiAgKi9cbiAgcmVhZG9ubHkgYXZhaWxhYmlsaXR5Wm9uZXM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjYmFja3RyYWNrX3dpbmRvdyBSZHNDbHVzdGVyI2JhY2t0cmFja193aW5kb3d9XG4gICovXG4gIHJlYWRvbmx5IGJhY2t0cmFja1dpbmRvdz86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjYmFja3VwX3JldGVudGlvbl9wZXJpb2QgUmRzQ2x1c3RlciNiYWNrdXBfcmV0ZW50aW9uX3BlcmlvZH1cbiAgKi9cbiAgcmVhZG9ubHkgYmFja3VwUmV0ZW50aW9uUGVyaW9kPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNjbHVzdGVyX2lkZW50aWZpZXIgUmRzQ2x1c3RlciNjbHVzdGVyX2lkZW50aWZpZXJ9XG4gICovXG4gIHJlYWRvbmx5IGNsdXN0ZXJJZGVudGlmaWVyPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNjbHVzdGVyX2lkZW50aWZpZXJfcHJlZml4IFJkc0NsdXN0ZXIjY2x1c3Rlcl9pZGVudGlmaWVyX3ByZWZpeH1cbiAgKi9cbiAgcmVhZG9ubHkgY2x1c3RlcklkZW50aWZpZXJQcmVmaXg/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI2NsdXN0ZXJfbWVtYmVycyBSZHNDbHVzdGVyI2NsdXN0ZXJfbWVtYmVyc31cbiAgKi9cbiAgcmVhZG9ubHkgY2x1c3Rlck1lbWJlcnM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjY29weV90YWdzX3RvX3NuYXBzaG90IFJkc0NsdXN0ZXIjY29weV90YWdzX3RvX3NuYXBzaG90fVxuICAqL1xuICByZWFkb25seSBjb3B5VGFnc1RvU25hcHNob3Q/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI2RhdGFiYXNlX25hbWUgUmRzQ2x1c3RlciNkYXRhYmFzZV9uYW1lfVxuICAqL1xuICByZWFkb25seSBkYXRhYmFzZU5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI2RiX2NsdXN0ZXJfcGFyYW1ldGVyX2dyb3VwX25hbWUgUmRzQ2x1c3RlciNkYl9jbHVzdGVyX3BhcmFtZXRlcl9ncm91cF9uYW1lfVxuICAqL1xuICByZWFkb25seSBkYkNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI2RiX2luc3RhbmNlX3BhcmFtZXRlcl9ncm91cF9uYW1lIFJkc0NsdXN0ZXIjZGJfaW5zdGFuY2VfcGFyYW1ldGVyX2dyb3VwX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IGRiSW5zdGFuY2VQYXJhbWV0ZXJHcm91cE5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI2RiX3N1Ym5ldF9ncm91cF9uYW1lIFJkc0NsdXN0ZXIjZGJfc3VibmV0X2dyb3VwX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IGRiU3VibmV0R3JvdXBOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNkZWxldGlvbl9wcm90ZWN0aW9uIFJkc0NsdXN0ZXIjZGVsZXRpb25fcHJvdGVjdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGVsZXRpb25Qcm90ZWN0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNlbmFibGVfZ2xvYmFsX3dyaXRlX2ZvcndhcmRpbmcgUmRzQ2x1c3RlciNlbmFibGVfZ2xvYmFsX3dyaXRlX2ZvcndhcmRpbmd9XG4gICovXG4gIHJlYWRvbmx5IGVuYWJsZUdsb2JhbFdyaXRlRm9yd2FyZGluZz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjZW5hYmxlX2h0dHBfZW5kcG9pbnQgUmRzQ2x1c3RlciNlbmFibGVfaHR0cF9lbmRwb2ludH1cbiAgKi9cbiAgcmVhZG9ubHkgZW5hYmxlSHR0cEVuZHBvaW50PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNlbmFibGVkX2Nsb3Vkd2F0Y2hfbG9nc19leHBvcnRzIFJkc0NsdXN0ZXIjZW5hYmxlZF9jbG91ZHdhdGNoX2xvZ3NfZXhwb3J0c31cbiAgKi9cbiAgcmVhZG9ubHkgZW5hYmxlZENsb3Vkd2F0Y2hMb2dzRXhwb3J0cz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNlbmdpbmUgUmRzQ2x1c3RlciNlbmdpbmV9XG4gICovXG4gIHJlYWRvbmx5IGVuZ2luZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjZW5naW5lX21vZGUgUmRzQ2x1c3RlciNlbmdpbmVfbW9kZX1cbiAgKi9cbiAgcmVhZG9ubHkgZW5naW5lTW9kZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjZW5naW5lX3ZlcnNpb24gUmRzQ2x1c3RlciNlbmdpbmVfdmVyc2lvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZW5naW5lVmVyc2lvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjZmluYWxfc25hcHNob3RfaWRlbnRpZmllciBSZHNDbHVzdGVyI2ZpbmFsX3NuYXBzaG90X2lkZW50aWZpZXJ9XG4gICovXG4gIHJlYWRvbmx5IGZpbmFsU25hcHNob3RJZGVudGlmaWVyPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNnbG9iYWxfY2x1c3Rlcl9pZGVudGlmaWVyIFJkc0NsdXN0ZXIjZ2xvYmFsX2NsdXN0ZXJfaWRlbnRpZmllcn1cbiAgKi9cbiAgcmVhZG9ubHkgZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI2lhbV9kYXRhYmFzZV9hdXRoZW50aWNhdGlvbl9lbmFibGVkIFJkc0NsdXN0ZXIjaWFtX2RhdGFiYXNlX2F1dGhlbnRpY2F0aW9uX2VuYWJsZWR9XG4gICovXG4gIHJlYWRvbmx5IGlhbURhdGFiYXNlQXV0aGVudGljYXRpb25FbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNpYW1fcm9sZXMgUmRzQ2x1c3RlciNpYW1fcm9sZXN9XG4gICovXG4gIHJlYWRvbmx5IGlhbVJvbGVzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI2lkIFJkc0NsdXN0ZXIjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI2ttc19rZXlfaWQgUmRzQ2x1c3RlciNrbXNfa2V5X2lkfVxuICAqL1xuICByZWFkb25seSBrbXNLZXlJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjbWFzdGVyX3Bhc3N3b3JkIFJkc0NsdXN0ZXIjbWFzdGVyX3Bhc3N3b3JkfVxuICAqL1xuICByZWFkb25seSBtYXN0ZXJQYXNzd29yZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjbWFzdGVyX3VzZXJuYW1lIFJkc0NsdXN0ZXIjbWFzdGVyX3VzZXJuYW1lfVxuICAqL1xuICByZWFkb25seSBtYXN0ZXJVc2VybmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjcG9ydCBSZHNDbHVzdGVyI3BvcnR9XG4gICovXG4gIHJlYWRvbmx5IHBvcnQ/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI3ByZWZlcnJlZF9iYWNrdXBfd2luZG93IFJkc0NsdXN0ZXIjcHJlZmVycmVkX2JhY2t1cF93aW5kb3d9XG4gICovXG4gIHJlYWRvbmx5IHByZWZlcnJlZEJhY2t1cFdpbmRvdz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjcHJlZmVycmVkX21haW50ZW5hbmNlX3dpbmRvdyBSZHNDbHVzdGVyI3ByZWZlcnJlZF9tYWludGVuYW5jZV93aW5kb3d9XG4gICovXG4gIHJlYWRvbmx5IHByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNyZXBsaWNhdGlvbl9zb3VyY2VfaWRlbnRpZmllciBSZHNDbHVzdGVyI3JlcGxpY2F0aW9uX3NvdXJjZV9pZGVudGlmaWVyfVxuICAqL1xuICByZWFkb25seSByZXBsaWNhdGlvblNvdXJjZUlkZW50aWZpZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI3NraXBfZmluYWxfc25hcHNob3QgUmRzQ2x1c3RlciNza2lwX2ZpbmFsX3NuYXBzaG90fVxuICAqL1xuICByZWFkb25seSBza2lwRmluYWxTbmFwc2hvdD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjc25hcHNob3RfaWRlbnRpZmllciBSZHNDbHVzdGVyI3NuYXBzaG90X2lkZW50aWZpZXJ9XG4gICovXG4gIHJlYWRvbmx5IHNuYXBzaG90SWRlbnRpZmllcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjc291cmNlX3JlZ2lvbiBSZHNDbHVzdGVyI3NvdXJjZV9yZWdpb259XG4gICovXG4gIHJlYWRvbmx5IHNvdXJjZVJlZ2lvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjc3RvcmFnZV9lbmNyeXB0ZWQgUmRzQ2x1c3RlciNzdG9yYWdlX2VuY3J5cHRlZH1cbiAgKi9cbiAgcmVhZG9ubHkgc3RvcmFnZUVuY3J5cHRlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjdGFncyBSZHNDbHVzdGVyI3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciN0YWdzX2FsbCBSZHNDbHVzdGVyI3RhZ3NfYWxsfVxuICAqL1xuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjdnBjX3NlY3VyaXR5X2dyb3VwX2lkcyBSZHNDbHVzdGVyI3ZwY19zZWN1cml0eV9ncm91cF9pZHN9XG4gICovXG4gIHJlYWRvbmx5IHZwY1NlY3VyaXR5R3JvdXBJZHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogcmVzdG9yZV90b19wb2ludF9pbl90aW1lIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNyZXN0b3JlX3RvX3BvaW50X2luX3RpbWUgUmRzQ2x1c3RlciNyZXN0b3JlX3RvX3BvaW50X2luX3RpbWV9XG4gICovXG4gIHJlYWRvbmx5IHJlc3RvcmVUb1BvaW50SW5UaW1lPzogUmRzQ2x1c3RlclJlc3RvcmVUb1BvaW50SW5UaW1lO1xuICAvKipcbiAgKiBzM19pbXBvcnQgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI3MzX2ltcG9ydCBSZHNDbHVzdGVyI3MzX2ltcG9ydH1cbiAgKi9cbiAgcmVhZG9ubHkgczNJbXBvcnQ/OiBSZHNDbHVzdGVyUzNJbXBvcnQ7XG4gIC8qKlxuICAqIHNjYWxpbmdfY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjc2NhbGluZ19jb25maWd1cmF0aW9uIFJkc0NsdXN0ZXIjc2NhbGluZ19jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBzY2FsaW5nQ29uZmlndXJhdGlvbj86IFJkc0NsdXN0ZXJTY2FsaW5nQ29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogdGltZW91dHMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI3RpbWVvdXRzIFJkc0NsdXN0ZXIjdGltZW91dHN9XG4gICovXG4gIHJlYWRvbmx5IHRpbWVvdXRzPzogUmRzQ2x1c3RlclRpbWVvdXRzO1xufVxuZXhwb3J0IGludGVyZmFjZSBSZHNDbHVzdGVyUmVzdG9yZVRvUG9pbnRJblRpbWUge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNyZXN0b3JlX3RvX3RpbWUgUmRzQ2x1c3RlciNyZXN0b3JlX3RvX3RpbWV9XG4gICovXG4gIHJlYWRvbmx5IHJlc3RvcmVUb1RpbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI3Jlc3RvcmVfdHlwZSBSZHNDbHVzdGVyI3Jlc3RvcmVfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgcmVzdG9yZVR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI3NvdXJjZV9jbHVzdGVyX2lkZW50aWZpZXIgUmRzQ2x1c3RlciNzb3VyY2VfY2x1c3Rlcl9pZGVudGlmaWVyfVxuICAqL1xuICByZWFkb25seSBzb3VyY2VDbHVzdGVySWRlbnRpZmllcjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciN1c2VfbGF0ZXN0X3Jlc3RvcmFibGVfdGltZSBSZHNDbHVzdGVyI3VzZV9sYXRlc3RfcmVzdG9yYWJsZV90aW1lfVxuICAqL1xuICByZWFkb25seSB1c2VMYXRlc3RSZXN0b3JhYmxlVGltZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJkc0NsdXN0ZXJSZXN0b3JlVG9Qb2ludEluVGltZVRvVGVycmFmb3JtKHN0cnVjdD86IFJkc0NsdXN0ZXJSZXN0b3JlVG9Qb2ludEluVGltZU91dHB1dFJlZmVyZW5jZSB8IFJkc0NsdXN0ZXJSZXN0b3JlVG9Qb2ludEluVGltZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXN0b3JlX3RvX3RpbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzdG9yZVRvVGltZSksXG4gICAgcmVzdG9yZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc3RvcmVUeXBlKSxcbiAgICBzb3VyY2VfY2x1c3Rlcl9pZGVudGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZUNsdXN0ZXJJZGVudGlmaWVyKSxcbiAgICB1c2VfbGF0ZXN0X3Jlc3RvcmFibGVfdGltZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEudXNlTGF0ZXN0UmVzdG9yYWJsZVRpbWUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJkc0NsdXN0ZXJSZXN0b3JlVG9Qb2ludEluVGltZVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IFJkc0NsdXN0ZXJSZXN0b3JlVG9Qb2ludEluVGltZU91dHB1dFJlZmVyZW5jZSB8IFJkc0NsdXN0ZXJSZXN0b3JlVG9Qb2ludEluVGltZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgcmVzdG9yZV90b190aW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZXN0b3JlVG9UaW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICByZXN0b3JlX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlc3RvcmVUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzb3VyY2VfY2x1c3Rlcl9pZGVudGlmaWVyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VDbHVzdGVySWRlbnRpZmllciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdXNlX2xhdGVzdF9yZXN0b3JhYmxlX3RpbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS51c2VMYXRlc3RSZXN0b3JhYmxlVGltZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgUmRzQ2x1c3RlclJlc3RvcmVUb1BvaW50SW5UaW1lT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBSZHNDbHVzdGVyUmVzdG9yZVRvUG9pbnRJblRpbWUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3Jlc3RvcmVUb1RpbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzdG9yZVRvVGltZSA9IHRoaXMuX3Jlc3RvcmVUb1RpbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXN0b3JlVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXN0b3JlVHlwZSA9IHRoaXMuX3Jlc3RvcmVUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc291cmNlQ2x1c3RlcklkZW50aWZpZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc291cmNlQ2x1c3RlcklkZW50aWZpZXIgPSB0aGlzLl9zb3VyY2VDbHVzdGVySWRlbnRpZmllcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VzZUxhdGVzdFJlc3RvcmFibGVUaW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVzZUxhdGVzdFJlc3RvcmFibGVUaW1lID0gdGhpcy5fdXNlTGF0ZXN0UmVzdG9yYWJsZVRpbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBSZHNDbHVzdGVyUmVzdG9yZVRvUG9pbnRJblRpbWUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZXN0b3JlVG9UaW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzdG9yZVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zb3VyY2VDbHVzdGVySWRlbnRpZmllciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VzZUxhdGVzdFJlc3RvcmFibGVUaW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZXN0b3JlVG9UaW1lID0gdmFsdWUucmVzdG9yZVRvVGltZTtcbiAgICAgIHRoaXMuX3Jlc3RvcmVUeXBlID0gdmFsdWUucmVzdG9yZVR5cGU7XG4gICAgICB0aGlzLl9zb3VyY2VDbHVzdGVySWRlbnRpZmllciA9IHZhbHVlLnNvdXJjZUNsdXN0ZXJJZGVudGlmaWVyO1xuICAgICAgdGhpcy5fdXNlTGF0ZXN0UmVzdG9yYWJsZVRpbWUgPSB2YWx1ZS51c2VMYXRlc3RSZXN0b3JhYmxlVGltZTtcbiAgICB9XG4gIH1cblxuICAvLyByZXN0b3JlX3RvX3RpbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzdG9yZVRvVGltZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzdG9yZVRvVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc3RvcmVfdG9fdGltZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzdG9yZVRvVGltZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzdG9yZVRvVGltZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc3RvcmVUb1RpbWUoKSB7XG4gICAgdGhpcy5fcmVzdG9yZVRvVGltZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzdG9yZVRvVGltZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN0b3JlVG9UaW1lO1xuICB9XG5cbiAgLy8gcmVzdG9yZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc3RvcmVUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXN0b3JlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc3RvcmVfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzdG9yZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc3RvcmVUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzdG9yZVR5cGUoKSB7XG4gICAgdGhpcy5fcmVzdG9yZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc3RvcmVUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3RvcmVUeXBlO1xuICB9XG5cbiAgLy8gc291cmNlX2NsdXN0ZXJfaWRlbnRpZmllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zb3VyY2VDbHVzdGVySWRlbnRpZmllcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc291cmNlQ2x1c3RlcklkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzb3VyY2VfY2x1c3Rlcl9pZGVudGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBzb3VyY2VDbHVzdGVySWRlbnRpZmllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc291cmNlQ2x1c3RlcklkZW50aWZpZXIgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc291cmNlQ2x1c3RlcklkZW50aWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlQ2x1c3RlcklkZW50aWZpZXI7XG4gIH1cblxuICAvLyB1c2VfbGF0ZXN0X3Jlc3RvcmFibGVfdGltZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91c2VMYXRlc3RSZXN0b3JhYmxlVGltZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdXNlTGF0ZXN0UmVzdG9yYWJsZVRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndXNlX2xhdGVzdF9yZXN0b3JhYmxlX3RpbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZUxhdGVzdFJlc3RvcmFibGVUaW1lKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl91c2VMYXRlc3RSZXN0b3JhYmxlVGltZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZUxhdGVzdFJlc3RvcmFibGVUaW1lKCkge1xuICAgIHRoaXMuX3VzZUxhdGVzdFJlc3RvcmFibGVUaW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VMYXRlc3RSZXN0b3JhYmxlVGltZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VMYXRlc3RSZXN0b3JhYmxlVGltZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBSZHNDbHVzdGVyUzNJbXBvcnQge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNidWNrZXRfbmFtZSBSZHNDbHVzdGVyI2J1Y2tldF9uYW1lfVxuICAqL1xuICByZWFkb25seSBidWNrZXROYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI2J1Y2tldF9wcmVmaXggUmRzQ2x1c3RlciNidWNrZXRfcHJlZml4fVxuICAqL1xuICByZWFkb25seSBidWNrZXRQcmVmaXg/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI2luZ2VzdGlvbl9yb2xlIFJkc0NsdXN0ZXIjaW5nZXN0aW9uX3JvbGV9XG4gICovXG4gIHJlYWRvbmx5IGluZ2VzdGlvblJvbGU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjc291cmNlX2VuZ2luZSBSZHNDbHVzdGVyI3NvdXJjZV9lbmdpbmV9XG4gICovXG4gIHJlYWRvbmx5IHNvdXJjZUVuZ2luZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNzb3VyY2VfZW5naW5lX3ZlcnNpb24gUmRzQ2x1c3RlciNzb3VyY2VfZW5naW5lX3ZlcnNpb259XG4gICovXG4gIHJlYWRvbmx5IHNvdXJjZUVuZ2luZVZlcnNpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJkc0NsdXN0ZXJTM0ltcG9ydFRvVGVycmFmb3JtKHN0cnVjdD86IFJkc0NsdXN0ZXJTM0ltcG9ydE91dHB1dFJlZmVyZW5jZSB8IFJkc0NsdXN0ZXJTM0ltcG9ydCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXROYW1lKSxcbiAgICBidWNrZXRfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldFByZWZpeCksXG4gICAgaW5nZXN0aW9uX3JvbGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5nZXN0aW9uUm9sZSksXG4gICAgc291cmNlX2VuZ2luZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VFbmdpbmUpLFxuICAgIHNvdXJjZV9lbmdpbmVfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VFbmdpbmVWZXJzaW9uKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZHNDbHVzdGVyUzNJbXBvcnRUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBSZHNDbHVzdGVyUzNJbXBvcnRPdXRwdXRSZWZlcmVuY2UgfCBSZHNDbHVzdGVyUzNJbXBvcnQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGJ1Y2tldF9uYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5idWNrZXROYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBidWNrZXRfcHJlZml4OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5idWNrZXRQcmVmaXgpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGluZ2VzdGlvbl9yb2xlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbmdlc3Rpb25Sb2xlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzb3VyY2VfZW5naW5lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VFbmdpbmUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNvdXJjZV9lbmdpbmVfdmVyc2lvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc291cmNlRW5naW5lVmVyc2lvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBSZHNDbHVzdGVyUzNJbXBvcnRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFJkc0NsdXN0ZXJTM0ltcG9ydCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYnVja2V0TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWNrZXROYW1lID0gdGhpcy5fYnVja2V0TmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2J1Y2tldFByZWZpeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWNrZXRQcmVmaXggPSB0aGlzLl9idWNrZXRQcmVmaXg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbmdlc3Rpb25Sb2xlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluZ2VzdGlvblJvbGUgPSB0aGlzLl9pbmdlc3Rpb25Sb2xlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc291cmNlRW5naW5lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNvdXJjZUVuZ2luZSA9IHRoaXMuX3NvdXJjZUVuZ2luZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NvdXJjZUVuZ2luZVZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc291cmNlRW5naW5lVmVyc2lvbiA9IHRoaXMuX3NvdXJjZUVuZ2luZVZlcnNpb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBSZHNDbHVzdGVyUzNJbXBvcnQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9idWNrZXROYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYnVja2V0UHJlZml4ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5nZXN0aW9uUm9sZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NvdXJjZUVuZ2luZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NvdXJjZUVuZ2luZVZlcnNpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2J1Y2tldE5hbWUgPSB2YWx1ZS5idWNrZXROYW1lO1xuICAgICAgdGhpcy5fYnVja2V0UHJlZml4ID0gdmFsdWUuYnVja2V0UHJlZml4O1xuICAgICAgdGhpcy5faW5nZXN0aW9uUm9sZSA9IHZhbHVlLmluZ2VzdGlvblJvbGU7XG4gICAgICB0aGlzLl9zb3VyY2VFbmdpbmUgPSB2YWx1ZS5zb3VyY2VFbmdpbmU7XG4gICAgICB0aGlzLl9zb3VyY2VFbmdpbmVWZXJzaW9uID0gdmFsdWUuc291cmNlRW5naW5lVmVyc2lvbjtcbiAgICB9XG4gIH1cblxuICAvLyBidWNrZXRfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9idWNrZXROYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWNrZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1Y2tldE5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVja2V0TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXROYW1lO1xuICB9XG5cbiAgLy8gYnVja2V0X3ByZWZpeCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idWNrZXRQcmVmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJ1Y2tldFByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9wcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldFByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVja2V0UHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QnVja2V0UHJlZml4KCkge1xuICAgIHRoaXMuX2J1Y2tldFByZWZpeCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVja2V0UHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1Y2tldFByZWZpeDtcbiAgfVxuXG4gIC8vIGluZ2VzdGlvbl9yb2xlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2luZ2VzdGlvblJvbGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGluZ2VzdGlvblJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbmdlc3Rpb25fcm9sZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5nZXN0aW9uUm9sZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5nZXN0aW9uUm9sZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmdlc3Rpb25Sb2xlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luZ2VzdGlvblJvbGU7XG4gIH1cblxuICAvLyBzb3VyY2VfZW5naW5lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NvdXJjZUVuZ2luZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc291cmNlRW5naW5lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX2VuZ2luZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc291cmNlRW5naW5lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3VyY2VFbmdpbmUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc291cmNlRW5naW5lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZUVuZ2luZTtcbiAgfVxuXG4gIC8vIHNvdXJjZV9lbmdpbmVfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zb3VyY2VFbmdpbmVWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzb3VyY2VFbmdpbmVWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX2VuZ2luZV92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBzb3VyY2VFbmdpbmVWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3VyY2VFbmdpbmVWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZUVuZ2luZVZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlRW5naW5lVmVyc2lvbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBSZHNDbHVzdGVyU2NhbGluZ0NvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNhdXRvX3BhdXNlIFJkc0NsdXN0ZXIjYXV0b19wYXVzZX1cbiAgKi9cbiAgcmVhZG9ubHkgYXV0b1BhdXNlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNtYXhfY2FwYWNpdHkgUmRzQ2x1c3RlciNtYXhfY2FwYWNpdHl9XG4gICovXG4gIHJlYWRvbmx5IG1heENhcGFjaXR5PzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNtaW5fY2FwYWNpdHkgUmRzQ2x1c3RlciNtaW5fY2FwYWNpdHl9XG4gICovXG4gIHJlYWRvbmx5IG1pbkNhcGFjaXR5PzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNzZWNvbmRzX3VudGlsX2F1dG9fcGF1c2UgUmRzQ2x1c3RlciNzZWNvbmRzX3VudGlsX2F1dG9fcGF1c2V9XG4gICovXG4gIHJlYWRvbmx5IHNlY29uZHNVbnRpbEF1dG9QYXVzZT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjdGltZW91dF9hY3Rpb24gUmRzQ2x1c3RlciN0aW1lb3V0X2FjdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgdGltZW91dEFjdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJkc0NsdXN0ZXJTY2FsaW5nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFJkc0NsdXN0ZXJTY2FsaW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IFJkc0NsdXN0ZXJTY2FsaW5nQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdXRvX3BhdXNlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRvUGF1c2UpLFxuICAgIG1heF9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhDYXBhY2l0eSksXG4gICAgbWluX2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1pbkNhcGFjaXR5KSxcbiAgICBzZWNvbmRzX3VudGlsX2F1dG9fcGF1c2U6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2Vjb25kc1VudGlsQXV0b1BhdXNlKSxcbiAgICB0aW1lb3V0X2FjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lb3V0QWN0aW9uKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZHNDbHVzdGVyU2NhbGluZ0NvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBSZHNDbHVzdGVyU2NhbGluZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBSZHNDbHVzdGVyU2NhbGluZ0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGF1dG9fcGF1c2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hdXRvUGF1c2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBtYXhfY2FwYWNpdHk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1heENhcGFjaXR5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBtaW5fY2FwYWNpdHk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1pbkNhcGFjaXR5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBzZWNvbmRzX3VudGlsX2F1dG9fcGF1c2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNlY29uZHNVbnRpbEF1dG9QYXVzZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgdGltZW91dF9hY3Rpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRpbWVvdXRBY3Rpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgUmRzQ2x1c3RlclNjYWxpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBSZHNDbHVzdGVyU2NhbGluZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2F1dG9QYXVzZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRvUGF1c2UgPSB0aGlzLl9hdXRvUGF1c2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXhDYXBhY2l0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhDYXBhY2l0eSA9IHRoaXMuX21heENhcGFjaXR5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWluQ2FwYWNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWluQ2FwYWNpdHkgPSB0aGlzLl9taW5DYXBhY2l0eTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlY29uZHNVbnRpbEF1dG9QYXVzZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWNvbmRzVW50aWxBdXRvUGF1c2UgPSB0aGlzLl9zZWNvbmRzVW50aWxBdXRvUGF1c2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl90aW1lb3V0QWN0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRpbWVvdXRBY3Rpb24gPSB0aGlzLl90aW1lb3V0QWN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUmRzQ2x1c3RlclNjYWxpbmdDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXV0b1BhdXNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWF4Q2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9taW5DYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlY29uZHNVbnRpbEF1dG9QYXVzZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RpbWVvdXRBY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F1dG9QYXVzZSA9IHZhbHVlLmF1dG9QYXVzZTtcbiAgICAgIHRoaXMuX21heENhcGFjaXR5ID0gdmFsdWUubWF4Q2FwYWNpdHk7XG4gICAgICB0aGlzLl9taW5DYXBhY2l0eSA9IHZhbHVlLm1pbkNhcGFjaXR5O1xuICAgICAgdGhpcy5fc2Vjb25kc1VudGlsQXV0b1BhdXNlID0gdmFsdWUuc2Vjb25kc1VudGlsQXV0b1BhdXNlO1xuICAgICAgdGhpcy5fdGltZW91dEFjdGlvbiA9IHZhbHVlLnRpbWVvdXRBY3Rpb247XG4gICAgfVxuICB9XG5cbiAgLy8gYXV0b19wYXVzZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRvUGF1c2U/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGF1dG9QYXVzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhdXRvX3BhdXNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvUGF1c2UodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2F1dG9QYXVzZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dG9QYXVzZSgpIHtcbiAgICB0aGlzLl9hdXRvUGF1c2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9QYXVzZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvUGF1c2U7XG4gIH1cblxuICAvLyBtYXhfY2FwYWNpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4Q2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heENhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhDYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4Q2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhDYXBhY2l0eSgpIHtcbiAgICB0aGlzLl9tYXhDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4Q2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4Q2FwYWNpdHk7XG4gIH1cblxuICAvLyBtaW5fY2FwYWNpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWluQ2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1pbkNhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5DYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluQ2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNaW5DYXBhY2l0eSgpIHtcbiAgICB0aGlzLl9taW5DYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluQ2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluQ2FwYWNpdHk7XG4gIH1cblxuICAvLyBzZWNvbmRzX3VudGlsX2F1dG9fcGF1c2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2Vjb25kc1VudGlsQXV0b1BhdXNlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBzZWNvbmRzVW50aWxBdXRvUGF1c2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzZWNvbmRzX3VudGlsX2F1dG9fcGF1c2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlY29uZHNVbnRpbEF1dG9QYXVzZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2Vjb25kc1VudGlsQXV0b1BhdXNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2Vjb25kc1VudGlsQXV0b1BhdXNlKCkge1xuICAgIHRoaXMuX3NlY29uZHNVbnRpbEF1dG9QYXVzZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2Vjb25kc1VudGlsQXV0b1BhdXNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY29uZHNVbnRpbEF1dG9QYXVzZTtcbiAgfVxuXG4gIC8vIHRpbWVvdXRfYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXRBY3Rpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRpbWVvdXRBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0aW1lb3V0X2FjdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGltZW91dEFjdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGltZW91dEFjdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRBY3Rpb24oKSB7XG4gICAgdGhpcy5fdGltZW91dEFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dEFjdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0QWN0aW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFJkc0NsdXN0ZXJUaW1lb3V0cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Jkc19jbHVzdGVyI2NyZWF0ZSBSZHNDbHVzdGVyI2NyZWF0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgY3JlYXRlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciNkZWxldGUgUmRzQ2x1c3RlciNkZWxldGV9XG4gICovXG4gIHJlYWRvbmx5IGRlbGV0ZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjdXBkYXRlIFJkc0NsdXN0ZXIjdXBkYXRlfVxuICAqL1xuICByZWFkb25seSB1cGRhdGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZHNDbHVzdGVyVGltZW91dHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBSZHNDbHVzdGVyVGltZW91dHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRlKSxcbiAgICBkZWxldGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVsZXRlKSxcbiAgICB1cGRhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXBkYXRlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZHNDbHVzdGVyVGltZW91dHNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBSZHNDbHVzdGVyVGltZW91dHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgY3JlYXRlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jcmVhdGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRlbGV0ZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGVsZXRlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB1cGRhdGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnVwZGF0ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBSZHNDbHVzdGVyVGltZW91dHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFJkc0NsdXN0ZXJUaW1lb3V0cyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3JlYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNyZWF0ZSA9IHRoaXMuX2NyZWF0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlbGV0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWxldGUgPSB0aGlzLl9kZWxldGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91cGRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXBkYXRlID0gdGhpcy5fdXBkYXRlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUmRzQ2x1c3RlclRpbWVvdXRzIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NyZWF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jcmVhdGUgPSB2YWx1ZS5jcmVhdGU7XG4gICAgICB0aGlzLl9kZWxldGUgPSB2YWx1ZS5kZWxldGU7XG4gICAgICB0aGlzLl91cGRhdGUgPSB2YWx1ZS51cGRhdGU7XG4gICAgfVxuICB9XG5cbiAgLy8gY3JlYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NyZWF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3JlYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjcmVhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENyZWF0ZSgpIHtcbiAgICB0aGlzLl9jcmVhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyZWF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGU7XG4gIH1cblxuICAvLyBkZWxldGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVsZXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWxldGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlbGV0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsZXRlKCkge1xuICAgIHRoaXMuX2RlbGV0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsZXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91cGRhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VwZGF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXBkYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91cGRhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVcGRhdGUoKSB7XG4gICAgdGhpcy5fdXBkYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1cGRhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9yZHNfY2x1c3RlciBhd3NfcmRzX2NsdXN0ZXJ9XG4qL1xuZXhwb3J0IGNsYXNzIFJkc0NsdXN0ZXIgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiYXdzX3Jkc19jbHVzdGVyXCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIFJkc0NsdXN0ZXIgcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgUmRzQ2x1c3RlciB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgUmRzQ2x1c3RlciB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIFJkc0NsdXN0ZXIgdG8gaW1wb3J0IGlzIGZvdW5kXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVDb25maWdGb3JJbXBvcnQoc2NvcGU6IENvbnN0cnVjdCwgaW1wb3J0VG9JZDogc3RyaW5nLCBpbXBvcnRGcm9tSWQ6IHN0cmluZywgcHJvdmlkZXI/OiBjZGt0Zi5UZXJyYWZvcm1Qcm92aWRlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNka3RmLkltcG9ydGFibGVSZXNvdXJjZShzY29wZSwgaW1wb3J0VG9JZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwiYXdzX3Jkc19jbHVzdGVyXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvcmRzX2NsdXN0ZXIgYXdzX3Jkc19jbHVzdGVyfSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBSZHNDbHVzdGVyQ29uZmlnID0ge31cbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogUmRzQ2x1c3RlckNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfcmRzX2NsdXN0ZXInLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9hbGxvd01ham9yVmVyc2lvblVwZ3JhZGUgPSBjb25maWcuYWxsb3dNYWpvclZlcnNpb25VcGdyYWRlO1xuICAgIHRoaXMuX2FwcGx5SW1tZWRpYXRlbHkgPSBjb25maWcuYXBwbHlJbW1lZGlhdGVseTtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lcyA9IGNvbmZpZy5hdmFpbGFiaWxpdHlab25lcztcbiAgICB0aGlzLl9iYWNrdHJhY2tXaW5kb3cgPSBjb25maWcuYmFja3RyYWNrV2luZG93O1xuICAgIHRoaXMuX2JhY2t1cFJldGVudGlvblBlcmlvZCA9IGNvbmZpZy5iYWNrdXBSZXRlbnRpb25QZXJpb2Q7XG4gICAgdGhpcy5fY2x1c3RlcklkZW50aWZpZXIgPSBjb25maWcuY2x1c3RlcklkZW50aWZpZXI7XG4gICAgdGhpcy5fY2x1c3RlcklkZW50aWZpZXJQcmVmaXggPSBjb25maWcuY2x1c3RlcklkZW50aWZpZXJQcmVmaXg7XG4gICAgdGhpcy5fY2x1c3Rlck1lbWJlcnMgPSBjb25maWcuY2x1c3Rlck1lbWJlcnM7XG4gICAgdGhpcy5fY29weVRhZ3NUb1NuYXBzaG90ID0gY29uZmlnLmNvcHlUYWdzVG9TbmFwc2hvdDtcbiAgICB0aGlzLl9kYXRhYmFzZU5hbWUgPSBjb25maWcuZGF0YWJhc2VOYW1lO1xuICAgIHRoaXMuX2RiQ2x1c3RlclBhcmFtZXRlckdyb3VwTmFtZSA9IGNvbmZpZy5kYkNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWU7XG4gICAgdGhpcy5fZGJJbnN0YW5jZVBhcmFtZXRlckdyb3VwTmFtZSA9IGNvbmZpZy5kYkluc3RhbmNlUGFyYW1ldGVyR3JvdXBOYW1lO1xuICAgIHRoaXMuX2RiU3VibmV0R3JvdXBOYW1lID0gY29uZmlnLmRiU3VibmV0R3JvdXBOYW1lO1xuICAgIHRoaXMuX2RlbGV0aW9uUHJvdGVjdGlvbiA9IGNvbmZpZy5kZWxldGlvblByb3RlY3Rpb247XG4gICAgdGhpcy5fZW5hYmxlR2xvYmFsV3JpdGVGb3J3YXJkaW5nID0gY29uZmlnLmVuYWJsZUdsb2JhbFdyaXRlRm9yd2FyZGluZztcbiAgICB0aGlzLl9lbmFibGVIdHRwRW5kcG9pbnQgPSBjb25maWcuZW5hYmxlSHR0cEVuZHBvaW50O1xuICAgIHRoaXMuX2VuYWJsZWRDbG91ZHdhdGNoTG9nc0V4cG9ydHMgPSBjb25maWcuZW5hYmxlZENsb3Vkd2F0Y2hMb2dzRXhwb3J0cztcbiAgICB0aGlzLl9lbmdpbmUgPSBjb25maWcuZW5naW5lO1xuICAgIHRoaXMuX2VuZ2luZU1vZGUgPSBjb25maWcuZW5naW5lTW9kZTtcbiAgICB0aGlzLl9lbmdpbmVWZXJzaW9uID0gY29uZmlnLmVuZ2luZVZlcnNpb247XG4gICAgdGhpcy5fZmluYWxTbmFwc2hvdElkZW50aWZpZXIgPSBjb25maWcuZmluYWxTbmFwc2hvdElkZW50aWZpZXI7XG4gICAgdGhpcy5fZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXIgPSBjb25maWcuZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXI7XG4gICAgdGhpcy5faWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbkVuYWJsZWQgPSBjb25maWcuaWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbkVuYWJsZWQ7XG4gICAgdGhpcy5faWFtUm9sZXMgPSBjb25maWcuaWFtUm9sZXM7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gICAgdGhpcy5fa21zS2V5SWQgPSBjb25maWcua21zS2V5SWQ7XG4gICAgdGhpcy5fbWFzdGVyUGFzc3dvcmQgPSBjb25maWcubWFzdGVyUGFzc3dvcmQ7XG4gICAgdGhpcy5fbWFzdGVyVXNlcm5hbWUgPSBjb25maWcubWFzdGVyVXNlcm5hbWU7XG4gICAgdGhpcy5fcG9ydCA9IGNvbmZpZy5wb3J0O1xuICAgIHRoaXMuX3ByZWZlcnJlZEJhY2t1cFdpbmRvdyA9IGNvbmZpZy5wcmVmZXJyZWRCYWNrdXBXaW5kb3c7XG4gICAgdGhpcy5fcHJlZmVycmVkTWFpbnRlbmFuY2VXaW5kb3cgPSBjb25maWcucHJlZmVycmVkTWFpbnRlbmFuY2VXaW5kb3c7XG4gICAgdGhpcy5fcmVwbGljYXRpb25Tb3VyY2VJZGVudGlmaWVyID0gY29uZmlnLnJlcGxpY2F0aW9uU291cmNlSWRlbnRpZmllcjtcbiAgICB0aGlzLl9za2lwRmluYWxTbmFwc2hvdCA9IGNvbmZpZy5za2lwRmluYWxTbmFwc2hvdDtcbiAgICB0aGlzLl9zbmFwc2hvdElkZW50aWZpZXIgPSBjb25maWcuc25hcHNob3RJZGVudGlmaWVyO1xuICAgIHRoaXMuX3NvdXJjZVJlZ2lvbiA9IGNvbmZpZy5zb3VyY2VSZWdpb247XG4gICAgdGhpcy5fc3RvcmFnZUVuY3J5cHRlZCA9IGNvbmZpZy5zdG9yYWdlRW5jcnlwdGVkO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcyA9IGNvbmZpZy52cGNTZWN1cml0eUdyb3VwSWRzO1xuICAgIHRoaXMuX3Jlc3RvcmVUb1BvaW50SW5UaW1lLmludGVybmFsVmFsdWUgPSBjb25maWcucmVzdG9yZVRvUG9pbnRJblRpbWU7XG4gICAgdGhpcy5fczNJbXBvcnQuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zM0ltcG9ydDtcbiAgICB0aGlzLl9zY2FsaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnNjYWxpbmdDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSBjb25maWcudGltZW91dHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFsbG93X21ham9yX3ZlcnNpb25fdXBncmFkZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd01ham9yVmVyc2lvblVwZ3JhZGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG93TWFqb3JWZXJzaW9uVXBncmFkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhbGxvd19tYWpvcl92ZXJzaW9uX3VwZ3JhZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG93TWFqb3JWZXJzaW9uVXBncmFkZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYWxsb3dNYWpvclZlcnNpb25VcGdyYWRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb3dNYWpvclZlcnNpb25VcGdyYWRlKCkge1xuICAgIHRoaXMuX2FsbG93TWFqb3JWZXJzaW9uVXBncmFkZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb3dNYWpvclZlcnNpb25VcGdyYWRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93TWFqb3JWZXJzaW9uVXBncmFkZTtcbiAgfVxuXG4gIC8vIGFwcGx5X2ltbWVkaWF0ZWx5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXBwbHlJbW1lZGlhdGVseT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgYXBwbHlJbW1lZGlhdGVseSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhcHBseV9pbW1lZGlhdGVseScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXBwbHlJbW1lZGlhdGVseSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYXBwbHlJbW1lZGlhdGVseSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFwcGx5SW1tZWRpYXRlbHkoKSB7XG4gICAgdGhpcy5fYXBwbHlJbW1lZGlhdGVseSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXBwbHlJbW1lZGlhdGVseUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBseUltbWVkaWF0ZWx5O1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBhdmFpbGFiaWxpdHlfem9uZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdmFpbGFiaWxpdHlab25lcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYXZhaWxhYmlsaXR5X3pvbmVzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXZhaWxhYmlsaXR5Wm9uZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdmFpbGFiaWxpdHlab25lcygpIHtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZXM7XG4gIH1cblxuICAvLyBiYWNrdHJhY2tfd2luZG93IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2JhY2t0cmFja1dpbmRvdz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYmFja3RyYWNrV2luZG93KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYmFja3RyYWNrX3dpbmRvdycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYmFja3RyYWNrV2luZG93KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9iYWNrdHJhY2tXaW5kb3cgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCYWNrdHJhY2tXaW5kb3coKSB7XG4gICAgdGhpcy5fYmFja3RyYWNrV2luZG93ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiYWNrdHJhY2tXaW5kb3dJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFja3RyYWNrV2luZG93O1xuICB9XG5cbiAgLy8gYmFja3VwX3JldGVudGlvbl9wZXJpb2QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmFja3VwUmV0ZW50aW9uUGVyaW9kPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBiYWNrdXBSZXRlbnRpb25QZXJpb2QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdiYWNrdXBfcmV0ZW50aW9uX3BlcmlvZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYmFja3VwUmV0ZW50aW9uUGVyaW9kKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9iYWNrdXBSZXRlbnRpb25QZXJpb2QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCYWNrdXBSZXRlbnRpb25QZXJpb2QoKSB7XG4gICAgdGhpcy5fYmFja3VwUmV0ZW50aW9uUGVyaW9kID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiYWNrdXBSZXRlbnRpb25QZXJpb2RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFja3VwUmV0ZW50aW9uUGVyaW9kO1xuICB9XG5cbiAgLy8gY2x1c3Rlcl9pZGVudGlmaWVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2x1c3RlcklkZW50aWZpZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2x1c3Rlcl9pZGVudGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbHVzdGVySWRlbnRpZmllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2x1c3RlcklkZW50aWZpZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbHVzdGVySWRlbnRpZmllcigpIHtcbiAgICB0aGlzLl9jbHVzdGVySWRlbnRpZmllciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2x1c3RlcklkZW50aWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2x1c3RlcklkZW50aWZpZXI7XG4gIH1cblxuICAvLyBjbHVzdGVyX2lkZW50aWZpZXJfcHJlZml4IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2x1c3RlcklkZW50aWZpZXJQcmVmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZGVudGlmaWVyUHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2x1c3Rlcl9pZGVudGlmaWVyX3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2x1c3RlcklkZW50aWZpZXJQcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyUHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2x1c3RlcklkZW50aWZpZXJQcmVmaXgoKSB7XG4gICAgdGhpcy5fY2x1c3RlcklkZW50aWZpZXJQcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZGVudGlmaWVyUHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyUHJlZml4O1xuICB9XG5cbiAgLy8gY2x1c3Rlcl9tZW1iZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2x1c3Rlck1lbWJlcnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY2x1c3Rlck1lbWJlcnMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2NsdXN0ZXJfbWVtYmVycycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNsdXN0ZXJNZW1iZXJzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2NsdXN0ZXJNZW1iZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2x1c3Rlck1lbWJlcnMoKSB7XG4gICAgdGhpcy5fY2x1c3Rlck1lbWJlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJNZW1iZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXJNZW1iZXJzO1xuICB9XG5cbiAgLy8gY2x1c3Rlcl9yZXNvdXJjZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJSZXNvdXJjZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2x1c3Rlcl9yZXNvdXJjZV9pZCcpO1xuICB9XG5cbiAgLy8gY29weV90YWdzX3RvX3NuYXBzaG90IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvcHlUYWdzVG9TbmFwc2hvdD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgY29weVRhZ3NUb1NuYXBzaG90KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2NvcHlfdGFnc190b19zbmFwc2hvdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29weVRhZ3NUb1NuYXBzaG90KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9jb3B5VGFnc1RvU25hcHNob3QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb3B5VGFnc1RvU25hcHNob3QoKSB7XG4gICAgdGhpcy5fY29weVRhZ3NUb1NuYXBzaG90ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb3B5VGFnc1RvU25hcHNob3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29weVRhZ3NUb1NuYXBzaG90O1xuICB9XG5cbiAgLy8gZGF0YWJhc2VfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RhdGFiYXNlTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2VfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGF0YWJhc2VOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhYmFzZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYXRhYmFzZU5hbWUoKSB7XG4gICAgdGhpcy5fZGF0YWJhc2VOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhYmFzZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YWJhc2VOYW1lO1xuICB9XG5cbiAgLy8gZGJfY2x1c3Rlcl9wYXJhbWV0ZXJfZ3JvdXBfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RiQ2x1c3RlclBhcmFtZXRlckdyb3VwTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGJDbHVzdGVyUGFyYW1ldGVyR3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGJfY2x1c3Rlcl9wYXJhbWV0ZXJfZ3JvdXBfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGJDbHVzdGVyUGFyYW1ldGVyR3JvdXBOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYkNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYkNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWUoKSB7XG4gICAgdGhpcy5fZGJDbHVzdGVyUGFyYW1ldGVyR3JvdXBOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYkNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGJDbHVzdGVyUGFyYW1ldGVyR3JvdXBOYW1lO1xuICB9XG5cbiAgLy8gZGJfaW5zdGFuY2VfcGFyYW1ldGVyX2dyb3VwX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGJJbnN0YW5jZVBhcmFtZXRlckdyb3VwTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGJJbnN0YW5jZVBhcmFtZXRlckdyb3VwTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RiX2luc3RhbmNlX3BhcmFtZXRlcl9ncm91cF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYkluc3RhbmNlUGFyYW1ldGVyR3JvdXBOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYkluc3RhbmNlUGFyYW1ldGVyR3JvdXBOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGJJbnN0YW5jZVBhcmFtZXRlckdyb3VwTmFtZSgpIHtcbiAgICB0aGlzLl9kYkluc3RhbmNlUGFyYW1ldGVyR3JvdXBOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYkluc3RhbmNlUGFyYW1ldGVyR3JvdXBOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RiSW5zdGFuY2VQYXJhbWV0ZXJHcm91cE5hbWU7XG4gIH1cblxuICAvLyBkYl9zdWJuZXRfZ3JvdXBfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RiU3VibmV0R3JvdXBOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkYlN1Ym5ldEdyb3VwTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RiX3N1Ym5ldF9ncm91cF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYlN1Ym5ldEdyb3VwTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGJTdWJuZXRHcm91cE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYlN1Ym5ldEdyb3VwTmFtZSgpIHtcbiAgICB0aGlzLl9kYlN1Ym5ldEdyb3VwTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGJTdWJuZXRHcm91cE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGJTdWJuZXRHcm91cE5hbWU7XG4gIH1cblxuICAvLyBkZWxldGlvbl9wcm90ZWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlbGV0aW9uUHJvdGVjdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZGVsZXRpb25Qcm90ZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2RlbGV0aW9uX3Byb3RlY3Rpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlbGV0aW9uUHJvdGVjdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGVsZXRpb25Qcm90ZWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsZXRpb25Qcm90ZWN0aW9uKCkge1xuICAgIHRoaXMuX2RlbGV0aW9uUHJvdGVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsZXRpb25Qcm90ZWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0aW9uUHJvdGVjdGlvbjtcbiAgfVxuXG4gIC8vIGVuYWJsZV9nbG9iYWxfd3JpdGVfZm9yd2FyZGluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVHbG9iYWxXcml0ZUZvcndhcmRpbmc/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZUdsb2JhbFdyaXRlRm9yd2FyZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfZ2xvYmFsX3dyaXRlX2ZvcndhcmRpbmcnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZUdsb2JhbFdyaXRlRm9yd2FyZGluZyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlR2xvYmFsV3JpdGVGb3J3YXJkaW5nID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlR2xvYmFsV3JpdGVGb3J3YXJkaW5nKCkge1xuICAgIHRoaXMuX2VuYWJsZUdsb2JhbFdyaXRlRm9yd2FyZGluZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlR2xvYmFsV3JpdGVGb3J3YXJkaW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZUdsb2JhbFdyaXRlRm9yd2FyZGluZztcbiAgfVxuXG4gIC8vIGVuYWJsZV9odHRwX2VuZHBvaW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZUh0dHBFbmRwb2ludD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlSHR0cEVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9odHRwX2VuZHBvaW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVIdHRwRW5kcG9pbnQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZUh0dHBFbmRwb2ludCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZUh0dHBFbmRwb2ludCgpIHtcbiAgICB0aGlzLl9lbmFibGVIdHRwRW5kcG9pbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZUh0dHBFbmRwb2ludElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVIdHRwRW5kcG9pbnQ7XG4gIH1cblxuICAvLyBlbmFibGVkX2Nsb3Vkd2F0Y2hfbG9nc19leHBvcnRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWRDbG91ZHdhdGNoTG9nc0V4cG9ydHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlZENsb3Vkd2F0Y2hMb2dzRXhwb3J0cygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZW5hYmxlZF9jbG91ZHdhdGNoX2xvZ3NfZXhwb3J0cycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWRDbG91ZHdhdGNoTG9nc0V4cG9ydHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZW5hYmxlZENsb3Vkd2F0Y2hMb2dzRXhwb3J0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZWRDbG91ZHdhdGNoTG9nc0V4cG9ydHMoKSB7XG4gICAgdGhpcy5fZW5hYmxlZENsb3Vkd2F0Y2hMb2dzRXhwb3J0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlZENsb3Vkd2F0Y2hMb2dzRXhwb3J0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkQ2xvdWR3YXRjaExvZ3NFeHBvcnRzO1xuICB9XG5cbiAgLy8gZW5kcG9pbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZHBvaW50Jyk7XG4gIH1cblxuICAvLyBlbmdpbmUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5naW5lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbmdpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmdpbmUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuZ2luZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW5naW5lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5naW5lKCkge1xuICAgIHRoaXMuX2VuZ2luZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5naW5lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZ2luZTtcbiAgfVxuXG4gIC8vIGVuZ2luZV9tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuZ2luZU1vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVuZ2luZU1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmdpbmVfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5naW5lTW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW5naW5lTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuZ2luZU1vZGUoKSB7XG4gICAgdGhpcy5fZW5naW5lTW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5naW5lTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmdpbmVNb2RlO1xuICB9XG5cbiAgLy8gZW5naW5lX3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmdpbmVWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbmdpbmVWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5naW5lX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuZ2luZVZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VuZ2luZVZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmdpbmVWZXJzaW9uKCkge1xuICAgIHRoaXMuX2VuZ2luZVZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuZ2luZVZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5naW5lVmVyc2lvbjtcbiAgfVxuXG4gIC8vIGVuZ2luZV92ZXJzaW9uX2FjdHVhbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuZ2luZVZlcnNpb25BY3R1YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmdpbmVfdmVyc2lvbl9hY3R1YWwnKTtcbiAgfVxuXG4gIC8vIGZpbmFsX3NuYXBzaG90X2lkZW50aWZpZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmluYWxTbmFwc2hvdElkZW50aWZpZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZpbmFsU25hcHNob3RJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmluYWxfc25hcHNob3RfaWRlbnRpZmllcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmluYWxTbmFwc2hvdElkZW50aWZpZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpbmFsU25hcHNob3RJZGVudGlmaWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmluYWxTbmFwc2hvdElkZW50aWZpZXIoKSB7XG4gICAgdGhpcy5fZmluYWxTbmFwc2hvdElkZW50aWZpZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbmFsU25hcHNob3RJZGVudGlmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbmFsU25hcHNob3RJZGVudGlmaWVyO1xuICB9XG5cbiAgLy8gZ2xvYmFsX2NsdXN0ZXJfaWRlbnRpZmllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9nbG9iYWxDbHVzdGVySWRlbnRpZmllcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnbG9iYWxfY2x1c3Rlcl9pZGVudGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBnbG9iYWxDbHVzdGVySWRlbnRpZmllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRHbG9iYWxDbHVzdGVySWRlbnRpZmllcigpIHtcbiAgICB0aGlzLl9nbG9iYWxDbHVzdGVySWRlbnRpZmllciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXI7XG4gIH1cblxuICAvLyBob3N0ZWRfem9uZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3RlZFpvbmVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RlZF96b25lX2lkJyk7XG4gIH1cblxuICAvLyBpYW1fZGF0YWJhc2VfYXV0aGVudGljYXRpb25fZW5hYmxlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbkVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaWFtX2RhdGFiYXNlX2F1dGhlbnRpY2F0aW9uX2VuYWJsZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlhbURhdGFiYXNlQXV0aGVudGljYXRpb25FbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uRW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElhbURhdGFiYXNlQXV0aGVudGljYXRpb25FbmFibGVkKCkge1xuICAgIHRoaXMuX2lhbURhdGFiYXNlQXV0aGVudGljYXRpb25FbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uRW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uRW5hYmxlZDtcbiAgfVxuXG4gIC8vIGlhbV9yb2xlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lhbVJvbGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGlhbVJvbGVzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpYW1fcm9sZXMnKSk7XG4gIH1cbiAgcHVibGljIHNldCBpYW1Sb2xlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9pYW1Sb2xlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElhbVJvbGVzKCkge1xuICAgIHRoaXMuX2lhbVJvbGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpYW1Sb2xlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pYW1Sb2xlcztcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIGttc19rZXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNLZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlJZCgpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5SWQ7XG4gIH1cblxuICAvLyBtYXN0ZXJfcGFzc3dvcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWFzdGVyUGFzc3dvcmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1hc3RlclBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWFzdGVyX3Bhc3N3b3JkJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXN0ZXJQYXNzd29yZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWFzdGVyUGFzc3dvcmQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXN0ZXJQYXNzd29yZCgpIHtcbiAgICB0aGlzLl9tYXN0ZXJQYXNzd29yZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWFzdGVyUGFzc3dvcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFzdGVyUGFzc3dvcmQ7XG4gIH1cblxuICAvLyBtYXN0ZXJfdXNlcm5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXN0ZXJVc2VybmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWFzdGVyVXNlcm5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXN0ZXJfdXNlcm5hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1hc3RlclVzZXJuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tYXN0ZXJVc2VybmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1hc3RlclVzZXJuYW1lKCkge1xuICAgIHRoaXMuX21hc3RlclVzZXJuYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXN0ZXJVc2VybmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXN0ZXJVc2VybmFtZTtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wb3J0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcG9ydCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBvcnQoKSB7XG4gICAgdGhpcy5fcG9ydCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9ydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb3J0O1xuICB9XG5cbiAgLy8gcHJlZmVycmVkX2JhY2t1cF93aW5kb3cgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVmZXJyZWRCYWNrdXBXaW5kb3c/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByZWZlcnJlZEJhY2t1cFdpbmRvdygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWZlcnJlZF9iYWNrdXBfd2luZG93Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVmZXJyZWRCYWNrdXBXaW5kb3codmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWZlcnJlZEJhY2t1cFdpbmRvdyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWZlcnJlZEJhY2t1cFdpbmRvdygpIHtcbiAgICB0aGlzLl9wcmVmZXJyZWRCYWNrdXBXaW5kb3cgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWZlcnJlZEJhY2t1cFdpbmRvd0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmZXJyZWRCYWNrdXBXaW5kb3c7XG4gIH1cblxuICAvLyBwcmVmZXJyZWRfbWFpbnRlbmFuY2Vfd2luZG93IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZmVycmVkTWFpbnRlbmFuY2VXaW5kb3c/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZmVycmVkX21haW50ZW5hbmNlX3dpbmRvdycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZmVycmVkTWFpbnRlbmFuY2VXaW5kb3codmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZmVycmVkTWFpbnRlbmFuY2VXaW5kb3coKSB7XG4gICAgdGhpcy5fcHJlZmVycmVkTWFpbnRlbmFuY2VXaW5kb3cgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93O1xuICB9XG5cbiAgLy8gcmVhZGVyX2VuZHBvaW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVhZGVyRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWFkZXJfZW5kcG9pbnQnKTtcbiAgfVxuXG4gIC8vIHJlcGxpY2F0aW9uX3NvdXJjZV9pZGVudGlmaWVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcGxpY2F0aW9uU291cmNlSWRlbnRpZmllcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVwbGljYXRpb25Tb3VyY2VJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVwbGljYXRpb25fc291cmNlX2lkZW50aWZpZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcGxpY2F0aW9uU291cmNlSWRlbnRpZmllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVwbGljYXRpb25Tb3VyY2VJZGVudGlmaWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVwbGljYXRpb25Tb3VyY2VJZGVudGlmaWVyKCkge1xuICAgIHRoaXMuX3JlcGxpY2F0aW9uU291cmNlSWRlbnRpZmllciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVwbGljYXRpb25Tb3VyY2VJZGVudGlmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxpY2F0aW9uU291cmNlSWRlbnRpZmllcjtcbiAgfVxuXG4gIC8vIHNraXBfZmluYWxfc25hcHNob3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2tpcEZpbmFsU25hcHNob3Q/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHNraXBGaW5hbFNuYXBzaG90KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3NraXBfZmluYWxfc25hcHNob3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNraXBGaW5hbFNuYXBzaG90KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9za2lwRmluYWxTbmFwc2hvdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNraXBGaW5hbFNuYXBzaG90KCkge1xuICAgIHRoaXMuX3NraXBGaW5hbFNuYXBzaG90ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBza2lwRmluYWxTbmFwc2hvdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9za2lwRmluYWxTbmFwc2hvdDtcbiAgfVxuXG4gIC8vIHNuYXBzaG90X2lkZW50aWZpZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc25hcHNob3RJZGVudGlmaWVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzbmFwc2hvdElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzbmFwc2hvdF9pZGVudGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBzbmFwc2hvdElkZW50aWZpZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NuYXBzaG90SWRlbnRpZmllciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNuYXBzaG90SWRlbnRpZmllcigpIHtcbiAgICB0aGlzLl9zbmFwc2hvdElkZW50aWZpZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNuYXBzaG90SWRlbnRpZmllcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zbmFwc2hvdElkZW50aWZpZXI7XG4gIH1cblxuICAvLyBzb3VyY2VfcmVnaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvdXJjZVJlZ2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc291cmNlUmVnaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX3JlZ2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc291cmNlUmVnaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3VyY2VSZWdpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTb3VyY2VSZWdpb24oKSB7XG4gICAgdGhpcy5fc291cmNlUmVnaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VSZWdpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlUmVnaW9uO1xuICB9XG5cbiAgLy8gc3RvcmFnZV9lbmNyeXB0ZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdG9yYWdlRW5jcnlwdGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBzdG9yYWdlRW5jcnlwdGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3N0b3JhZ2VfZW5jcnlwdGVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdG9yYWdlRW5jcnlwdGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zdG9yYWdlRW5jcnlwdGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RvcmFnZUVuY3J5cHRlZCgpIHtcbiAgICB0aGlzLl9zdG9yYWdlRW5jcnlwdGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdG9yYWdlRW5jcnlwdGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2VFbmNyeXB0ZWQ7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFncycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzX2FsbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHZwY19zZWN1cml0eV9ncm91cF9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92cGNTZWN1cml0eUdyb3VwSWRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHZwY1NlY3VyaXR5R3JvdXBJZHMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3ZwY19zZWN1cml0eV9ncm91cF9pZHMnKSk7XG4gIH1cbiAgcHVibGljIHNldCB2cGNTZWN1cml0eUdyb3VwSWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWcGNTZWN1cml0eUdyb3VwSWRzKCkge1xuICAgIHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwY1NlY3VyaXR5R3JvdXBJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcztcbiAgfVxuXG4gIC8vIHJlc3RvcmVfdG9fcG9pbnRfaW5fdGltZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXN0b3JlVG9Qb2ludEluVGltZSA9IG5ldyBSZHNDbHVzdGVyUmVzdG9yZVRvUG9pbnRJblRpbWVPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJyZXN0b3JlX3RvX3BvaW50X2luX3RpbWVcIik7XG4gIHB1YmxpYyBnZXQgcmVzdG9yZVRvUG9pbnRJblRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3RvcmVUb1BvaW50SW5UaW1lO1xuICB9XG4gIHB1YmxpYyBwdXRSZXN0b3JlVG9Qb2ludEluVGltZSh2YWx1ZTogUmRzQ2x1c3RlclJlc3RvcmVUb1BvaW50SW5UaW1lKSB7XG4gICAgdGhpcy5fcmVzdG9yZVRvUG9pbnRJblRpbWUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc3RvcmVUb1BvaW50SW5UaW1lKCkge1xuICAgIHRoaXMuX3Jlc3RvcmVUb1BvaW50SW5UaW1lLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc3RvcmVUb1BvaW50SW5UaW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3RvcmVUb1BvaW50SW5UaW1lLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzM19pbXBvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfczNJbXBvcnQgPSBuZXcgUmRzQ2x1c3RlclMzSW1wb3J0T3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiczNfaW1wb3J0XCIpO1xuICBwdWJsaWMgZ2V0IHMzSW1wb3J0KCkge1xuICAgIHJldHVybiB0aGlzLl9zM0ltcG9ydDtcbiAgfVxuICBwdWJsaWMgcHV0UzNJbXBvcnQodmFsdWU6IFJkc0NsdXN0ZXJTM0ltcG9ydCkge1xuICAgIHRoaXMuX3MzSW1wb3J0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTM0ltcG9ydCgpIHtcbiAgICB0aGlzLl9zM0ltcG9ydC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzM0ltcG9ydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zM0ltcG9ydC5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc2NhbGluZ19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NjYWxpbmdDb25maWd1cmF0aW9uID0gbmV3IFJkc0NsdXN0ZXJTY2FsaW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInNjYWxpbmdfY29uZmlndXJhdGlvblwiKTtcbiAgcHVibGljIGdldCBzY2FsaW5nQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGluZ0NvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFNjYWxpbmdDb25maWd1cmF0aW9uKHZhbHVlOiBSZHNDbHVzdGVyU2NhbGluZ0NvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9zY2FsaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2NhbGluZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fc2NhbGluZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NhbGluZ0NvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGluZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRpbWVvdXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXRzID0gbmV3IFJkc0NsdXN0ZXJUaW1lb3V0c091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInRpbWVvdXRzXCIpO1xuICBwdWJsaWMgZ2V0IHRpbWVvdXRzKCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cztcbiAgfVxuICBwdWJsaWMgcHV0VGltZW91dHModmFsdWU6IFJkc0NsdXN0ZXJUaW1lb3V0cykge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0cygpIHtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhbGxvd19tYWpvcl92ZXJzaW9uX3VwZ3JhZGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hbGxvd01ham9yVmVyc2lvblVwZ3JhZGUpLFxuICAgICAgYXBwbHlfaW1tZWRpYXRlbHk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hcHBseUltbWVkaWF0ZWx5KSxcbiAgICAgIGF2YWlsYWJpbGl0eV96b25lczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2F2YWlsYWJpbGl0eVpvbmVzKSxcbiAgICAgIGJhY2t0cmFja193aW5kb3c6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2JhY2t0cmFja1dpbmRvdyksXG4gICAgICBiYWNrdXBfcmV0ZW50aW9uX3BlcmlvZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fYmFja3VwUmV0ZW50aW9uUGVyaW9kKSxcbiAgICAgIGNsdXN0ZXJfaWRlbnRpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2x1c3RlcklkZW50aWZpZXIpLFxuICAgICAgY2x1c3Rlcl9pZGVudGlmaWVyX3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2x1c3RlcklkZW50aWZpZXJQcmVmaXgpLFxuICAgICAgY2x1c3Rlcl9tZW1iZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fY2x1c3Rlck1lbWJlcnMpLFxuICAgICAgY29weV90YWdzX3RvX3NuYXBzaG90OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fY29weVRhZ3NUb1NuYXBzaG90KSxcbiAgICAgIGRhdGFiYXNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RhdGFiYXNlTmFtZSksXG4gICAgICBkYl9jbHVzdGVyX3BhcmFtZXRlcl9ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kYkNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWUpLFxuICAgICAgZGJfaW5zdGFuY2VfcGFyYW1ldGVyX2dyb3VwX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RiSW5zdGFuY2VQYXJhbWV0ZXJHcm91cE5hbWUpLFxuICAgICAgZGJfc3VibmV0X2dyb3VwX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RiU3VibmV0R3JvdXBOYW1lKSxcbiAgICAgIGRlbGV0aW9uX3Byb3RlY3Rpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9kZWxldGlvblByb3RlY3Rpb24pLFxuICAgICAgZW5hYmxlX2dsb2JhbF93cml0ZV9mb3J3YXJkaW5nOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZW5hYmxlR2xvYmFsV3JpdGVGb3J3YXJkaW5nKSxcbiAgICAgIGVuYWJsZV9odHRwX2VuZHBvaW50OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZW5hYmxlSHR0cEVuZHBvaW50KSxcbiAgICAgIGVuYWJsZWRfY2xvdWR3YXRjaF9sb2dzX2V4cG9ydHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9lbmFibGVkQ2xvdWR3YXRjaExvZ3NFeHBvcnRzKSxcbiAgICAgIGVuZ2luZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZW5naW5lKSxcbiAgICAgIGVuZ2luZV9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbmdpbmVNb2RlKSxcbiAgICAgIGVuZ2luZV92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbmdpbmVWZXJzaW9uKSxcbiAgICAgIGZpbmFsX3NuYXBzaG90X2lkZW50aWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ZpbmFsU25hcHNob3RJZGVudGlmaWVyKSxcbiAgICAgIGdsb2JhbF9jbHVzdGVyX2lkZW50aWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2dsb2JhbENsdXN0ZXJJZGVudGlmaWVyKSxcbiAgICAgIGlhbV9kYXRhYmFzZV9hdXRoZW50aWNhdGlvbl9lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5faWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbkVuYWJsZWQpLFxuICAgICAgaWFtX3JvbGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5faWFtUm9sZXMpLFxuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ttc0tleUlkKSxcbiAgICAgIG1hc3Rlcl9wYXNzd29yZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbWFzdGVyUGFzc3dvcmQpLFxuICAgICAgbWFzdGVyX3VzZXJuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9tYXN0ZXJVc2VybmFtZSksXG4gICAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9wb3J0KSxcbiAgICAgIHByZWZlcnJlZF9iYWNrdXBfd2luZG93OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wcmVmZXJyZWRCYWNrdXBXaW5kb3cpLFxuICAgICAgcHJlZmVycmVkX21haW50ZW5hbmNlX3dpbmRvdzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcHJlZmVycmVkTWFpbnRlbmFuY2VXaW5kb3cpLFxuICAgICAgcmVwbGljYXRpb25fc291cmNlX2lkZW50aWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlcGxpY2F0aW9uU291cmNlSWRlbnRpZmllciksXG4gICAgICBza2lwX2ZpbmFsX3NuYXBzaG90OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc2tpcEZpbmFsU25hcHNob3QpLFxuICAgICAgc25hcHNob3RfaWRlbnRpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc25hcHNob3RJZGVudGlmaWVyKSxcbiAgICAgIHNvdXJjZV9yZWdpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NvdXJjZVJlZ2lvbiksXG4gICAgICBzdG9yYWdlX2VuY3J5cHRlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3N0b3JhZ2VFbmNyeXB0ZWQpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB2cGNfc2VjdXJpdHlfZ3JvdXBfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcyksXG4gICAgICByZXN0b3JlX3RvX3BvaW50X2luX3RpbWU6IHJkc0NsdXN0ZXJSZXN0b3JlVG9Qb2ludEluVGltZVRvVGVycmFmb3JtKHRoaXMuX3Jlc3RvcmVUb1BvaW50SW5UaW1lLmludGVybmFsVmFsdWUpLFxuICAgICAgczNfaW1wb3J0OiByZHNDbHVzdGVyUzNJbXBvcnRUb1RlcnJhZm9ybSh0aGlzLl9zM0ltcG9ydC5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHNjYWxpbmdfY29uZmlndXJhdGlvbjogcmRzQ2x1c3RlclNjYWxpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fc2NhbGluZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0aW1lb3V0czogcmRzQ2x1c3RlclRpbWVvdXRzVG9UZXJyYWZvcm0odGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBhbGxvd19tYWpvcl92ZXJzaW9uX3VwZ3JhZGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9hbGxvd01ham9yVmVyc2lvblVwZ3JhZGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgYXBwbHlfaW1tZWRpYXRlbHk6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9hcHBseUltbWVkaWF0ZWx5KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIGF2YWlsYWJpbGl0eV96b25lczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2F2YWlsYWJpbGl0eVpvbmVzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGJhY2t0cmFja193aW5kb3c6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX2JhY2t0cmFja1dpbmRvdyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIGJhY2t1cF9yZXRlbnRpb25fcGVyaW9kOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9iYWNrdXBSZXRlbnRpb25QZXJpb2QpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBjbHVzdGVyX2lkZW50aWZpZXI6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgY2x1c3Rlcl9pZGVudGlmaWVyX3ByZWZpeDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fY2x1c3RlcklkZW50aWZpZXJQcmVmaXgpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBjbHVzdGVyX21lbWJlcnM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9jbHVzdGVyTWVtYmVycyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBjb3B5X3RhZ3NfdG9fc25hcHNob3Q6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9jb3B5VGFnc1RvU25hcHNob3QpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgZGF0YWJhc2VfbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZGF0YWJhc2VOYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgZGJfY2x1c3Rlcl9wYXJhbWV0ZXJfZ3JvdXBfbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZGJDbHVzdGVyUGFyYW1ldGVyR3JvdXBOYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgZGJfaW5zdGFuY2VfcGFyYW1ldGVyX2dyb3VwX25hbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2RiSW5zdGFuY2VQYXJhbWV0ZXJHcm91cE5hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBkYl9zdWJuZXRfZ3JvdXBfbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZGJTdWJuZXRHcm91cE5hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBkZWxldGlvbl9wcm90ZWN0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fZGVsZXRpb25Qcm90ZWN0aW9uKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIGVuYWJsZV9nbG9iYWxfd3JpdGVfZm9yd2FyZGluZzoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX2VuYWJsZUdsb2JhbFdyaXRlRm9yd2FyZGluZyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBlbmFibGVfaHR0cF9lbmRwb2ludDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX2VuYWJsZUh0dHBFbmRwb2ludCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBlbmFibGVkX2Nsb3Vkd2F0Y2hfbG9nc19leHBvcnRzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fZW5hYmxlZENsb3Vkd2F0Y2hMb2dzRXhwb3J0cyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBlbmdpbmU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2VuZ2luZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGVuZ2luZV9tb2RlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9lbmdpbmVNb2RlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgZW5naW5lX3ZlcnNpb246IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2VuZ2luZVZlcnNpb24pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBmaW5hbF9zbmFwc2hvdF9pZGVudGlmaWVyOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9maW5hbFNuYXBzaG90SWRlbnRpZmllciksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGdsb2JhbF9jbHVzdGVyX2lkZW50aWZpZXI6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2dsb2JhbENsdXN0ZXJJZGVudGlmaWVyKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaWFtX2RhdGFiYXNlX2F1dGhlbnRpY2F0aW9uX2VuYWJsZWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9pYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uRW5hYmxlZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBpYW1fcm9sZXM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9pYW1Sb2xlcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBrbXNfa2V5X2lkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9rbXNLZXlJZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG1hc3Rlcl9wYXNzd29yZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbWFzdGVyUGFzc3dvcmQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBtYXN0ZXJfdXNlcm5hbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX21hc3RlclVzZXJuYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgcG9ydDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fcG9ydCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHByZWZlcnJlZF9iYWNrdXBfd2luZG93OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9wcmVmZXJyZWRCYWNrdXBXaW5kb3cpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBwcmVmZXJyZWRfbWFpbnRlbmFuY2Vfd2luZG93OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9wcmVmZXJyZWRNYWludGVuYW5jZVdpbmRvdyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHJlcGxpY2F0aW9uX3NvdXJjZV9pZGVudGlmaWVyOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9yZXBsaWNhdGlvblNvdXJjZUlkZW50aWZpZXIpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBza2lwX2ZpbmFsX3NuYXBzaG90OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fc2tpcEZpbmFsU25hcHNob3QpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgc25hcHNob3RfaWRlbnRpZmllcjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fc25hcHNob3RJZGVudGlmaWVyKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgc291cmNlX3JlZ2lvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fc291cmNlUmVnaW9uKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgc3RvcmFnZV9lbmNyeXB0ZWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9zdG9yYWdlRW5jcnlwdGVkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHRhZ3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0YWdzX2FsbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHZwY19zZWN1cml0eV9ncm91cF9pZHM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl92cGNTZWN1cml0eUdyb3VwSWRzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHJlc3RvcmVfdG9fcG9pbnRfaW5fdGltZToge1xuICAgICAgICB2YWx1ZTogcmRzQ2x1c3RlclJlc3RvcmVUb1BvaW50SW5UaW1lVG9IY2xUZXJyYWZvcm0odGhpcy5fcmVzdG9yZVRvUG9pbnRJblRpbWUuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlJkc0NsdXN0ZXJSZXN0b3JlVG9Qb2ludEluVGltZUxpc3RcIixcbiAgICAgIH0sXG4gICAgICBzM19pbXBvcnQ6IHtcbiAgICAgICAgdmFsdWU6IHJkc0NsdXN0ZXJTM0ltcG9ydFRvSGNsVGVycmFmb3JtKHRoaXMuX3MzSW1wb3J0LmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJSZHNDbHVzdGVyUzNJbXBvcnRMaXN0XCIsXG4gICAgICB9LFxuICAgICAgc2NhbGluZ19jb25maWd1cmF0aW9uOiB7XG4gICAgICAgIHZhbHVlOiByZHNDbHVzdGVyU2NhbGluZ0NvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybSh0aGlzLl9zY2FsaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiUmRzQ2x1c3RlclNjYWxpbmdDb25maWd1cmF0aW9uTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHRpbWVvdXRzOiB7XG4gICAgICAgIHZhbHVlOiByZHNDbHVzdGVyVGltZW91dHNUb0hjbFRlcnJhZm9ybSh0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzdHJ1Y3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJSZHNDbHVzdGVyVGltZW91dHNcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==