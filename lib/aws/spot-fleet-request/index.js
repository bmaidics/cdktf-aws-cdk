"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotFleetRequest = exports.SpotFleetRequestTimeoutsOutputReference = exports.spotFleetRequestTimeoutsToHclTerraform = exports.spotFleetRequestTimeoutsToTerraform = exports.SpotFleetRequestSpotMaintenanceStrategiesOutputReference = exports.spotFleetRequestSpotMaintenanceStrategiesToHclTerraform = exports.spotFleetRequestSpotMaintenanceStrategiesToTerraform = exports.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference = exports.spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToHclTerraform = exports.spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform = exports.SpotFleetRequestLaunchTemplateConfigList = exports.SpotFleetRequestLaunchTemplateConfigOutputReference = exports.spotFleetRequestLaunchTemplateConfigToHclTerraform = exports.spotFleetRequestLaunchTemplateConfigToTerraform = exports.SpotFleetRequestLaunchTemplateConfigOverridesList = exports.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference = exports.spotFleetRequestLaunchTemplateConfigOverridesToHclTerraform = exports.spotFleetRequestLaunchTemplateConfigOverridesToTerraform = exports.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference = exports.spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToHclTerraform = exports.spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform = exports.SpotFleetRequestLaunchSpecificationList = exports.SpotFleetRequestLaunchSpecificationOutputReference = exports.spotFleetRequestLaunchSpecificationToHclTerraform = exports.spotFleetRequestLaunchSpecificationToTerraform = exports.SpotFleetRequestLaunchSpecificationRootBlockDeviceList = exports.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference = exports.spotFleetRequestLaunchSpecificationRootBlockDeviceToHclTerraform = exports.spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform = exports.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList = exports.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference = exports.spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToHclTerraform = exports.spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform = exports.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList = exports.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference = exports.spotFleetRequestLaunchSpecificationEbsBlockDeviceToHclTerraform = exports.spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        device_name: cdktf.stringToTerraform(struct.deviceName),
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        snapshot_id: cdktf.stringToTerraform(struct.snapshotId),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType),
    };
}
exports.spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform = spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform;
function spotFleetRequestLaunchSpecificationEbsBlockDeviceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        delete_on_termination: {
            value: cdktf.booleanToHclTerraform(struct.deleteOnTermination),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        device_name: {
            value: cdktf.stringToHclTerraform(struct.deviceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encrypted: {
            value: cdktf.booleanToHclTerraform(struct.encrypted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        iops: {
            value: cdktf.numberToHclTerraform(struct.iops),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        kms_key_id: {
            value: cdktf.stringToHclTerraform(struct.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        snapshot_id: {
            value: cdktf.stringToHclTerraform(struct.snapshotId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        throughput: {
            value: cdktf.numberToHclTerraform(struct.throughput),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        volume_size: {
            value: cdktf.numberToHclTerraform(struct.volumeSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        volume_type: {
            value: cdktf.stringToHclTerraform(struct.volumeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.spotFleetRequestLaunchSpecificationEbsBlockDeviceToHclTerraform = spotFleetRequestLaunchSpecificationEbsBlockDeviceToHclTerraform;
class SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference extends cdktf.ComplexObject {
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
        if (this._deleteOnTermination !== undefined) {
            hasAnyValues = true;
            internalValueResult.deleteOnTermination = this._deleteOnTermination;
        }
        if (this._deviceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceName = this._deviceName;
        }
        if (this._encrypted !== undefined) {
            hasAnyValues = true;
            internalValueResult.encrypted = this._encrypted;
        }
        if (this._iops !== undefined) {
            hasAnyValues = true;
            internalValueResult.iops = this._iops;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._snapshotId !== undefined) {
            hasAnyValues = true;
            internalValueResult.snapshotId = this._snapshotId;
        }
        if (this._throughput !== undefined) {
            hasAnyValues = true;
            internalValueResult.throughput = this._throughput;
        }
        if (this._volumeSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeSize = this._volumeSize;
        }
        if (this._volumeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeType = this._volumeType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deleteOnTermination = undefined;
            this._deviceName = undefined;
            this._encrypted = undefined;
            this._iops = undefined;
            this._kmsKeyId = undefined;
            this._snapshotId = undefined;
            this._throughput = undefined;
            this._volumeSize = undefined;
            this._volumeType = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deleteOnTermination = value.deleteOnTermination;
            this._deviceName = value.deviceName;
            this._encrypted = value.encrypted;
            this._iops = value.iops;
            this._kmsKeyId = value.kmsKeyId;
            this._snapshotId = value.snapshotId;
            this._throughput = value.throughput;
            this._volumeSize = value.volumeSize;
            this._volumeType = value.volumeType;
        }
    }
    get deleteOnTermination() {
        return this.getBooleanAttribute('delete_on_termination');
    }
    set deleteOnTermination(value) {
        this._deleteOnTermination = value;
    }
    resetDeleteOnTermination() {
        this._deleteOnTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteOnTerminationInput() {
        return this._deleteOnTermination;
    }
    get deviceName() {
        return this.getStringAttribute('device_name');
    }
    set deviceName(value) {
        this._deviceName = value;
    }
    // Temporarily expose input value. Use with caution.
    get deviceNameInput() {
        return this._deviceName;
    }
    get encrypted() {
        return this.getBooleanAttribute('encrypted');
    }
    set encrypted(value) {
        this._encrypted = value;
    }
    resetEncrypted() {
        this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get encryptedInput() {
        return this._encrypted;
    }
    get iops() {
        return this.getNumberAttribute('iops');
    }
    set iops(value) {
        this._iops = value;
    }
    resetIops() {
        this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iopsInput() {
        return this._iops;
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
    get snapshotId() {
        return this.getStringAttribute('snapshot_id');
    }
    set snapshotId(value) {
        this._snapshotId = value;
    }
    resetSnapshotId() {
        this._snapshotId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get snapshotIdInput() {
        return this._snapshotId;
    }
    get throughput() {
        return this.getNumberAttribute('throughput');
    }
    set throughput(value) {
        this._throughput = value;
    }
    resetThroughput() {
        this._throughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get throughputInput() {
        return this._throughput;
    }
    get volumeSize() {
        return this.getNumberAttribute('volume_size');
    }
    set volumeSize(value) {
        this._volumeSize = value;
    }
    resetVolumeSize() {
        this._volumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get volumeSizeInput() {
        return this._volumeSize;
    }
    get volumeType() {
        return this.getStringAttribute('volume_type');
    }
    set volumeType(value) {
        this._volumeType = value;
    }
    resetVolumeType() {
        this._volumeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get volumeTypeInput() {
        return this._volumeType;
    }
}
exports.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference = SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference;
_a = JSII_RTTI_SYMBOL_1;
SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference[_a] = { fqn: "@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference", version: "0.0.0" };
class SpotFleetRequestLaunchSpecificationEbsBlockDeviceList extends cdktf.ComplexList {
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
        return new SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList = SpotFleetRequestLaunchSpecificationEbsBlockDeviceList;
_b = JSII_RTTI_SYMBOL_1;
SpotFleetRequestLaunchSpecificationEbsBlockDeviceList[_b] = { fqn: "@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList", version: "0.0.0" };
function spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        virtual_name: cdktf.stringToTerraform(struct.virtualName),
    };
}
exports.spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform = spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform;
function spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        device_name: {
            value: cdktf.stringToHclTerraform(struct.deviceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        virtual_name: {
            value: cdktf.stringToHclTerraform(struct.virtualName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToHclTerraform = spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToHclTerraform;
class SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference extends cdktf.ComplexObject {
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
        if (this._deviceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceName = this._deviceName;
        }
        if (this._virtualName !== undefined) {
            hasAnyValues = true;
            internalValueResult.virtualName = this._virtualName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deviceName = undefined;
            this._virtualName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deviceName = value.deviceName;
            this._virtualName = value.virtualName;
        }
    }
    get deviceName() {
        return this.getStringAttribute('device_name');
    }
    set deviceName(value) {
        this._deviceName = value;
    }
    // Temporarily expose input value. Use with caution.
    get deviceNameInput() {
        return this._deviceName;
    }
    get virtualName() {
        return this.getStringAttribute('virtual_name');
    }
    set virtualName(value) {
        this._virtualName = value;
    }
    // Temporarily expose input value. Use with caution.
    get virtualNameInput() {
        return this._virtualName;
    }
}
exports.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference = SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference;
_c = JSII_RTTI_SYMBOL_1;
SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference[_c] = { fqn: "@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference", version: "0.0.0" };
class SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList extends cdktf.ComplexList {
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
        return new SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList = SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList;
_d = JSII_RTTI_SYMBOL_1;
SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList[_d] = { fqn: "@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList", version: "0.0.0" };
function spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType),
    };
}
exports.spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform = spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform;
function spotFleetRequestLaunchSpecificationRootBlockDeviceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        delete_on_termination: {
            value: cdktf.booleanToHclTerraform(struct.deleteOnTermination),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        encrypted: {
            value: cdktf.booleanToHclTerraform(struct.encrypted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        iops: {
            value: cdktf.numberToHclTerraform(struct.iops),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        kms_key_id: {
            value: cdktf.stringToHclTerraform(struct.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        throughput: {
            value: cdktf.numberToHclTerraform(struct.throughput),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        volume_size: {
            value: cdktf.numberToHclTerraform(struct.volumeSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        volume_type: {
            value: cdktf.stringToHclTerraform(struct.volumeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.spotFleetRequestLaunchSpecificationRootBlockDeviceToHclTerraform = spotFleetRequestLaunchSpecificationRootBlockDeviceToHclTerraform;
class SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference extends cdktf.ComplexObject {
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
        if (this._deleteOnTermination !== undefined) {
            hasAnyValues = true;
            internalValueResult.deleteOnTermination = this._deleteOnTermination;
        }
        if (this._encrypted !== undefined) {
            hasAnyValues = true;
            internalValueResult.encrypted = this._encrypted;
        }
        if (this._iops !== undefined) {
            hasAnyValues = true;
            internalValueResult.iops = this._iops;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._throughput !== undefined) {
            hasAnyValues = true;
            internalValueResult.throughput = this._throughput;
        }
        if (this._volumeSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeSize = this._volumeSize;
        }
        if (this._volumeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeType = this._volumeType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deleteOnTermination = undefined;
            this._encrypted = undefined;
            this._iops = undefined;
            this._kmsKeyId = undefined;
            this._throughput = undefined;
            this._volumeSize = undefined;
            this._volumeType = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deleteOnTermination = value.deleteOnTermination;
            this._encrypted = value.encrypted;
            this._iops = value.iops;
            this._kmsKeyId = value.kmsKeyId;
            this._throughput = value.throughput;
            this._volumeSize = value.volumeSize;
            this._volumeType = value.volumeType;
        }
    }
    get deleteOnTermination() {
        return this.getBooleanAttribute('delete_on_termination');
    }
    set deleteOnTermination(value) {
        this._deleteOnTermination = value;
    }
    resetDeleteOnTermination() {
        this._deleteOnTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteOnTerminationInput() {
        return this._deleteOnTermination;
    }
    get encrypted() {
        return this.getBooleanAttribute('encrypted');
    }
    set encrypted(value) {
        this._encrypted = value;
    }
    resetEncrypted() {
        this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get encryptedInput() {
        return this._encrypted;
    }
    get iops() {
        return this.getNumberAttribute('iops');
    }
    set iops(value) {
        this._iops = value;
    }
    resetIops() {
        this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iopsInput() {
        return this._iops;
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
    get throughput() {
        return this.getNumberAttribute('throughput');
    }
    set throughput(value) {
        this._throughput = value;
    }
    resetThroughput() {
        this._throughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get throughputInput() {
        return this._throughput;
    }
    get volumeSize() {
        return this.getNumberAttribute('volume_size');
    }
    set volumeSize(value) {
        this._volumeSize = value;
    }
    resetVolumeSize() {
        this._volumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get volumeSizeInput() {
        return this._volumeSize;
    }
    get volumeType() {
        return this.getStringAttribute('volume_type');
    }
    set volumeType(value) {
        this._volumeType = value;
    }
    resetVolumeType() {
        this._volumeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get volumeTypeInput() {
        return this._volumeType;
    }
}
exports.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference = SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference;
_e = JSII_RTTI_SYMBOL_1;
SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference[_e] = { fqn: "@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference", version: "0.0.0" };
class SpotFleetRequestLaunchSpecificationRootBlockDeviceList extends cdktf.ComplexList {
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
        return new SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.SpotFleetRequestLaunchSpecificationRootBlockDeviceList = SpotFleetRequestLaunchSpecificationRootBlockDeviceList;
_f = JSII_RTTI_SYMBOL_1;
SpotFleetRequestLaunchSpecificationRootBlockDeviceList[_f] = { fqn: "@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList", version: "0.0.0" };
function spotFleetRequestLaunchSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ami: cdktf.stringToTerraform(struct.ami),
        associate_public_ip_address: cdktf.booleanToTerraform(struct.associatePublicIpAddress),
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        ebs_optimized: cdktf.booleanToTerraform(struct.ebsOptimized),
        iam_instance_profile: cdktf.stringToTerraform(struct.iamInstanceProfile),
        iam_instance_profile_arn: cdktf.stringToTerraform(struct.iamInstanceProfileArn),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        key_name: cdktf.stringToTerraform(struct.keyName),
        monitoring: cdktf.booleanToTerraform(struct.monitoring),
        placement_group: cdktf.stringToTerraform(struct.placementGroup),
        placement_tenancy: cdktf.stringToTerraform(struct.placementTenancy),
        spot_price: cdktf.stringToTerraform(struct.spotPrice),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
        tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct.tags),
        user_data: cdktf.stringToTerraform(struct.userData),
        vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.vpcSecurityGroupIds),
        weighted_capacity: cdktf.stringToTerraform(struct.weightedCapacity),
        ebs_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform, true)(struct.ebsBlockDevice),
        ephemeral_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform, true)(struct.ephemeralBlockDevice),
        root_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform, true)(struct.rootBlockDevice),
    };
}
exports.spotFleetRequestLaunchSpecificationToTerraform = spotFleetRequestLaunchSpecificationToTerraform;
function spotFleetRequestLaunchSpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ami: {
            value: cdktf.stringToHclTerraform(struct.ami),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        associate_public_ip_address: {
            value: cdktf.booleanToHclTerraform(struct.associatePublicIpAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        availability_zone: {
            value: cdktf.stringToHclTerraform(struct.availabilityZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ebs_optimized: {
            value: cdktf.booleanToHclTerraform(struct.ebsOptimized),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        iam_instance_profile: {
            value: cdktf.stringToHclTerraform(struct.iamInstanceProfile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iam_instance_profile_arn: {
            value: cdktf.stringToHclTerraform(struct.iamInstanceProfileArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_type: {
            value: cdktf.stringToHclTerraform(struct.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_name: {
            value: cdktf.stringToHclTerraform(struct.keyName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        monitoring: {
            value: cdktf.booleanToHclTerraform(struct.monitoring),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        placement_group: {
            value: cdktf.stringToHclTerraform(struct.placementGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        placement_tenancy: {
            value: cdktf.stringToHclTerraform(struct.placementTenancy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        spot_price: {
            value: cdktf.stringToHclTerraform(struct.spotPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subnet_id: {
            value: cdktf.stringToHclTerraform(struct.subnetId),
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
        user_data: {
            value: cdktf.stringToHclTerraform(struct.userData),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_security_group_ids: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.vpcSecurityGroupIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        weighted_capacity: {
            value: cdktf.stringToHclTerraform(struct.weightedCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ebs_block_device: {
            value: cdktf.listMapperHcl(spotFleetRequestLaunchSpecificationEbsBlockDeviceToHclTerraform, true)(struct.ebsBlockDevice),
            isBlock: true,
            type: "set",
            storageClassType: "SpotFleetRequestLaunchSpecificationEbsBlockDeviceList",
        },
        ephemeral_block_device: {
            value: cdktf.listMapperHcl(spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToHclTerraform, true)(struct.ephemeralBlockDevice),
            isBlock: true,
            type: "set",
            storageClassType: "SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList",
        },
        root_block_device: {
            value: cdktf.listMapperHcl(spotFleetRequestLaunchSpecificationRootBlockDeviceToHclTerraform, true)(struct.rootBlockDevice),
            isBlock: true,
            type: "set",
            storageClassType: "SpotFleetRequestLaunchSpecificationRootBlockDeviceList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.spotFleetRequestLaunchSpecificationToHclTerraform = spotFleetRequestLaunchSpecificationToHclTerraform;
class SpotFleetRequestLaunchSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // ebs_block_device - computed: false, optional: true, required: false
        this._ebsBlockDevice = new SpotFleetRequestLaunchSpecificationEbsBlockDeviceList(this, "ebs_block_device", true);
        // ephemeral_block_device - computed: false, optional: true, required: false
        this._ephemeralBlockDevice = new SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList(this, "ephemeral_block_device", true);
        // root_block_device - computed: false, optional: true, required: false
        this._rootBlockDevice = new SpotFleetRequestLaunchSpecificationRootBlockDeviceList(this, "root_block_device", true);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._ami !== undefined) {
            hasAnyValues = true;
            internalValueResult.ami = this._ami;
        }
        if (this._associatePublicIpAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.associatePublicIpAddress = this._associatePublicIpAddress;
        }
        if (this._availabilityZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZone = this._availabilityZone;
        }
        if (this._ebsOptimized !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebsOptimized = this._ebsOptimized;
        }
        if (this._iamInstanceProfile !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamInstanceProfile = this._iamInstanceProfile;
        }
        if (this._iamInstanceProfileArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamInstanceProfileArn = this._iamInstanceProfileArn;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._keyName !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyName = this._keyName;
        }
        if (this._monitoring !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoring = this._monitoring;
        }
        if (this._placementGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.placementGroup = this._placementGroup;
        }
        if (this._placementTenancy !== undefined) {
            hasAnyValues = true;
            internalValueResult.placementTenancy = this._placementTenancy;
        }
        if (this._spotPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotPrice = this._spotPrice;
        }
        if (this._subnetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetId = this._subnetId;
        }
        if (this._tags !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags;
        }
        if (this._userData !== undefined) {
            hasAnyValues = true;
            internalValueResult.userData = this._userData;
        }
        if (this._vpcSecurityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcSecurityGroupIds = this._vpcSecurityGroupIds;
        }
        if (this._weightedCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.weightedCapacity = this._weightedCapacity;
        }
        if (this._ebsBlockDevice?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebsBlockDevice = this._ebsBlockDevice?.internalValue;
        }
        if (this._ephemeralBlockDevice?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ephemeralBlockDevice = this._ephemeralBlockDevice?.internalValue;
        }
        if (this._rootBlockDevice?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rootBlockDevice = this._rootBlockDevice?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ami = undefined;
            this._associatePublicIpAddress = undefined;
            this._availabilityZone = undefined;
            this._ebsOptimized = undefined;
            this._iamInstanceProfile = undefined;
            this._iamInstanceProfileArn = undefined;
            this._instanceType = undefined;
            this._keyName = undefined;
            this._monitoring = undefined;
            this._placementGroup = undefined;
            this._placementTenancy = undefined;
            this._spotPrice = undefined;
            this._subnetId = undefined;
            this._tags = undefined;
            this._userData = undefined;
            this._vpcSecurityGroupIds = undefined;
            this._weightedCapacity = undefined;
            this._ebsBlockDevice.internalValue = undefined;
            this._ephemeralBlockDevice.internalValue = undefined;
            this._rootBlockDevice.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ami = value.ami;
            this._associatePublicIpAddress = value.associatePublicIpAddress;
            this._availabilityZone = value.availabilityZone;
            this._ebsOptimized = value.ebsOptimized;
            this._iamInstanceProfile = value.iamInstanceProfile;
            this._iamInstanceProfileArn = value.iamInstanceProfileArn;
            this._instanceType = value.instanceType;
            this._keyName = value.keyName;
            this._monitoring = value.monitoring;
            this._placementGroup = value.placementGroup;
            this._placementTenancy = value.placementTenancy;
            this._spotPrice = value.spotPrice;
            this._subnetId = value.subnetId;
            this._tags = value.tags;
            this._userData = value.userData;
            this._vpcSecurityGroupIds = value.vpcSecurityGroupIds;
            this._weightedCapacity = value.weightedCapacity;
            this._ebsBlockDevice.internalValue = value.ebsBlockDevice;
            this._ephemeralBlockDevice.internalValue = value.ephemeralBlockDevice;
            this._rootBlockDevice.internalValue = value.rootBlockDevice;
        }
    }
    get ami() {
        return this.getStringAttribute('ami');
    }
    set ami(value) {
        this._ami = value;
    }
    // Temporarily expose input value. Use with caution.
    get amiInput() {
        return this._ami;
    }
    get associatePublicIpAddress() {
        return this.getBooleanAttribute('associate_public_ip_address');
    }
    set associatePublicIpAddress(value) {
        this._associatePublicIpAddress = value;
    }
    resetAssociatePublicIpAddress() {
        this._associatePublicIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get associatePublicIpAddressInput() {
        return this._associatePublicIpAddress;
    }
    get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    set availabilityZone(value) {
        this._availabilityZone = value;
    }
    resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get availabilityZoneInput() {
        return this._availabilityZone;
    }
    get ebsOptimized() {
        return this.getBooleanAttribute('ebs_optimized');
    }
    set ebsOptimized(value) {
        this._ebsOptimized = value;
    }
    resetEbsOptimized() {
        this._ebsOptimized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ebsOptimizedInput() {
        return this._ebsOptimized;
    }
    get iamInstanceProfile() {
        return this.getStringAttribute('iam_instance_profile');
    }
    set iamInstanceProfile(value) {
        this._iamInstanceProfile = value;
    }
    resetIamInstanceProfile() {
        this._iamInstanceProfile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iamInstanceProfileInput() {
        return this._iamInstanceProfile;
    }
    get iamInstanceProfileArn() {
        return this.getStringAttribute('iam_instance_profile_arn');
    }
    set iamInstanceProfileArn(value) {
        this._iamInstanceProfileArn = value;
    }
    resetIamInstanceProfileArn() {
        this._iamInstanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iamInstanceProfileArnInput() {
        return this._iamInstanceProfileArn;
    }
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    set instanceType(value) {
        this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    get instanceTypeInput() {
        return this._instanceType;
    }
    get keyName() {
        return this.getStringAttribute('key_name');
    }
    set keyName(value) {
        this._keyName = value;
    }
    resetKeyName() {
        this._keyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyNameInput() {
        return this._keyName;
    }
    get monitoring() {
        return this.getBooleanAttribute('monitoring');
    }
    set monitoring(value) {
        this._monitoring = value;
    }
    resetMonitoring() {
        this._monitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get monitoringInput() {
        return this._monitoring;
    }
    get placementGroup() {
        return this.getStringAttribute('placement_group');
    }
    set placementGroup(value) {
        this._placementGroup = value;
    }
    resetPlacementGroup() {
        this._placementGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get placementGroupInput() {
        return this._placementGroup;
    }
    get placementTenancy() {
        return this.getStringAttribute('placement_tenancy');
    }
    set placementTenancy(value) {
        this._placementTenancy = value;
    }
    resetPlacementTenancy() {
        this._placementTenancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get placementTenancyInput() {
        return this._placementTenancy;
    }
    get spotPrice() {
        return this.getStringAttribute('spot_price');
    }
    set spotPrice(value) {
        this._spotPrice = value;
    }
    resetSpotPrice() {
        this._spotPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get spotPriceInput() {
        return this._spotPrice;
    }
    get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    set subnetId(value) {
        this._subnetId = value;
    }
    resetSubnetId() {
        this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subnetIdInput() {
        return this._subnetId;
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
    get userData() {
        return this.getStringAttribute('user_data');
    }
    set userData(value) {
        this._userData = value;
    }
    resetUserData() {
        this._userData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userDataInput() {
        return this._userData;
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
    get weightedCapacity() {
        return this.getStringAttribute('weighted_capacity');
    }
    set weightedCapacity(value) {
        this._weightedCapacity = value;
    }
    resetWeightedCapacity() {
        this._weightedCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get weightedCapacityInput() {
        return this._weightedCapacity;
    }
    get ebsBlockDevice() {
        return this._ebsBlockDevice;
    }
    putEbsBlockDevice(value) {
        this._ebsBlockDevice.internalValue = value;
    }
    resetEbsBlockDevice() {
        this._ebsBlockDevice.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ebsBlockDeviceInput() {
        return this._ebsBlockDevice.internalValue;
    }
    get ephemeralBlockDevice() {
        return this._ephemeralBlockDevice;
    }
    putEphemeralBlockDevice(value) {
        this._ephemeralBlockDevice.internalValue = value;
    }
    resetEphemeralBlockDevice() {
        this._ephemeralBlockDevice.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ephemeralBlockDeviceInput() {
        return this._ephemeralBlockDevice.internalValue;
    }
    get rootBlockDevice() {
        return this._rootBlockDevice;
    }
    putRootBlockDevice(value) {
        this._rootBlockDevice.internalValue = value;
    }
    resetRootBlockDevice() {
        this._rootBlockDevice.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rootBlockDeviceInput() {
        return this._rootBlockDevice.internalValue;
    }
}
exports.SpotFleetRequestLaunchSpecificationOutputReference = SpotFleetRequestLaunchSpecificationOutputReference;
_g = JSII_RTTI_SYMBOL_1;
SpotFleetRequestLaunchSpecificationOutputReference[_g] = { fqn: "@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference", version: "0.0.0" };
class SpotFleetRequestLaunchSpecificationList extends cdktf.ComplexList {
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
        return new SpotFleetRequestLaunchSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.SpotFleetRequestLaunchSpecificationList = SpotFleetRequestLaunchSpecificationList;
_h = JSII_RTTI_SYMBOL_1;
SpotFleetRequestLaunchSpecificationList[_h] = { fqn: "@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList", version: "0.0.0" };
function spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
        version: cdktf.stringToTerraform(struct.version),
    };
}
exports.spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform = spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform;
function spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToHclTerraform(struct) {
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
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktf.stringToHclTerraform(struct.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToHclTerraform = spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToHclTerraform;
class SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._id = undefined;
            this._name = undefined;
            this._version = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._id = value.id;
            this._name = value.name;
            this._version = value.version;
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
    get version() {
        return this.getStringAttribute('version');
    }
    set version(value) {
        this._version = value;
    }
    resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionInput() {
        return this._version;
    }
}
exports.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference = SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference;
_j = JSII_RTTI_SYMBOL_1;
SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference[_j] = { fqn: "@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference", version: "0.0.0" };
function spotFleetRequestLaunchTemplateConfigOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        priority: cdktf.numberToTerraform(struct.priority),
        spot_price: cdktf.stringToTerraform(struct.spotPrice),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
        weighted_capacity: cdktf.numberToTerraform(struct.weightedCapacity),
    };
}
exports.spotFleetRequestLaunchTemplateConfigOverridesToTerraform = spotFleetRequestLaunchTemplateConfigOverridesToTerraform;
function spotFleetRequestLaunchTemplateConfigOverridesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        availability_zone: {
            value: cdktf.stringToHclTerraform(struct.availabilityZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_type: {
            value: cdktf.stringToHclTerraform(struct.instanceType),
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
        spot_price: {
            value: cdktf.stringToHclTerraform(struct.spotPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subnet_id: {
            value: cdktf.stringToHclTerraform(struct.subnetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weighted_capacity: {
            value: cdktf.numberToHclTerraform(struct.weightedCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.spotFleetRequestLaunchTemplateConfigOverridesToHclTerraform = spotFleetRequestLaunchTemplateConfigOverridesToHclTerraform;
class SpotFleetRequestLaunchTemplateConfigOverridesOutputReference extends cdktf.ComplexObject {
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
        if (this._availabilityZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZone = this._availabilityZone;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        if (this._spotPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotPrice = this._spotPrice;
        }
        if (this._subnetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetId = this._subnetId;
        }
        if (this._weightedCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.weightedCapacity = this._weightedCapacity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZone = undefined;
            this._instanceType = undefined;
            this._priority = undefined;
            this._spotPrice = undefined;
            this._subnetId = undefined;
            this._weightedCapacity = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityZone = value.availabilityZone;
            this._instanceType = value.instanceType;
            this._priority = value.priority;
            this._spotPrice = value.spotPrice;
            this._subnetId = value.subnetId;
            this._weightedCapacity = value.weightedCapacity;
        }
    }
    get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    set availabilityZone(value) {
        this._availabilityZone = value;
    }
    resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get availabilityZoneInput() {
        return this._availabilityZone;
    }
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    set instanceType(value) {
        this._instanceType = value;
    }
    resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceTypeInput() {
        return this._instanceType;
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
    get spotPrice() {
        return this.getStringAttribute('spot_price');
    }
    set spotPrice(value) {
        this._spotPrice = value;
    }
    resetSpotPrice() {
        this._spotPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get spotPriceInput() {
        return this._spotPrice;
    }
    get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    set subnetId(value) {
        this._subnetId = value;
    }
    resetSubnetId() {
        this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subnetIdInput() {
        return this._subnetId;
    }
    get weightedCapacity() {
        return this.getNumberAttribute('weighted_capacity');
    }
    set weightedCapacity(value) {
        this._weightedCapacity = value;
    }
    resetWeightedCapacity() {
        this._weightedCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get weightedCapacityInput() {
        return this._weightedCapacity;
    }
}
exports.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference = SpotFleetRequestLaunchTemplateConfigOverridesOutputReference;
_k = JSII_RTTI_SYMBOL_1;
SpotFleetRequestLaunchTemplateConfigOverridesOutputReference[_k] = { fqn: "@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference", version: "0.0.0" };
class SpotFleetRequestLaunchTemplateConfigOverridesList extends cdktf.ComplexList {
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
        return new SpotFleetRequestLaunchTemplateConfigOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.SpotFleetRequestLaunchTemplateConfigOverridesList = SpotFleetRequestLaunchTemplateConfigOverridesList;
_l = JSII_RTTI_SYMBOL_1;
SpotFleetRequestLaunchTemplateConfigOverridesList[_l] = { fqn: "@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList", version: "0.0.0" };
function spotFleetRequestLaunchTemplateConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        launch_template_specification: spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct.launchTemplateSpecification),
        overrides: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigOverridesToTerraform, true)(struct.overrides),
    };
}
exports.spotFleetRequestLaunchTemplateConfigToTerraform = spotFleetRequestLaunchTemplateConfigToTerraform;
function spotFleetRequestLaunchTemplateConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        launch_template_specification: {
            value: spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToHclTerraform(struct.launchTemplateSpecification),
            isBlock: true,
            type: "list",
            storageClassType: "SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationList",
        },
        overrides: {
            value: cdktf.listMapperHcl(spotFleetRequestLaunchTemplateConfigOverridesToHclTerraform, true)(struct.overrides),
            isBlock: true,
            type: "set",
            storageClassType: "SpotFleetRequestLaunchTemplateConfigOverridesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.spotFleetRequestLaunchTemplateConfigToHclTerraform = spotFleetRequestLaunchTemplateConfigToHclTerraform;
class SpotFleetRequestLaunchTemplateConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // launch_template_specification - computed: false, optional: false, required: true
        this._launchTemplateSpecification = new SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference(this, "launch_template_specification");
        // overrides - computed: false, optional: true, required: false
        this._overrides = new SpotFleetRequestLaunchTemplateConfigOverridesList(this, "overrides", true);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._launchTemplateSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateSpecification = this._launchTemplateSpecification?.internalValue;
        }
        if (this._overrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrides = this._overrides?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._launchTemplateSpecification.internalValue = undefined;
            this._overrides.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._launchTemplateSpecification.internalValue = value.launchTemplateSpecification;
            this._overrides.internalValue = value.overrides;
        }
    }
    get launchTemplateSpecification() {
        return this._launchTemplateSpecification;
    }
    putLaunchTemplateSpecification(value) {
        this._launchTemplateSpecification.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateSpecificationInput() {
        return this._launchTemplateSpecification.internalValue;
    }
    get overrides() {
        return this._overrides;
    }
    putOverrides(value) {
        this._overrides.internalValue = value;
    }
    resetOverrides() {
        this._overrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get overridesInput() {
        return this._overrides.internalValue;
    }
}
exports.SpotFleetRequestLaunchTemplateConfigOutputReference = SpotFleetRequestLaunchTemplateConfigOutputReference;
_m = JSII_RTTI_SYMBOL_1;
SpotFleetRequestLaunchTemplateConfigOutputReference[_m] = { fqn: "@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference", version: "0.0.0" };
class SpotFleetRequestLaunchTemplateConfigList extends cdktf.ComplexList {
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
        return new SpotFleetRequestLaunchTemplateConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.SpotFleetRequestLaunchTemplateConfigList = SpotFleetRequestLaunchTemplateConfigList;
_o = JSII_RTTI_SYMBOL_1;
SpotFleetRequestLaunchTemplateConfigList[_o] = { fqn: "@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList", version: "0.0.0" };
function spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        replacement_strategy: cdktf.stringToTerraform(struct.replacementStrategy),
    };
}
exports.spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform = spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform;
function spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        replacement_strategy: {
            value: cdktf.stringToHclTerraform(struct.replacementStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToHclTerraform = spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToHclTerraform;
class SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference extends cdktf.ComplexObject {
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
        if (this._replacementStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.replacementStrategy = this._replacementStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._replacementStrategy = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._replacementStrategy = value.replacementStrategy;
        }
    }
    get replacementStrategy() {
        return this.getStringAttribute('replacement_strategy');
    }
    set replacementStrategy(value) {
        this._replacementStrategy = value;
    }
    resetReplacementStrategy() {
        this._replacementStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get replacementStrategyInput() {
        return this._replacementStrategy;
    }
}
exports.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference = SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference;
_p = JSII_RTTI_SYMBOL_1;
SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference[_p] = { fqn: "@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference", version: "0.0.0" };
function spotFleetRequestSpotMaintenanceStrategiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        capacity_rebalance: spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct.capacityRebalance),
    };
}
exports.spotFleetRequestSpotMaintenanceStrategiesToTerraform = spotFleetRequestSpotMaintenanceStrategiesToTerraform;
function spotFleetRequestSpotMaintenanceStrategiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        capacity_rebalance: {
            value: spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToHclTerraform(struct.capacityRebalance),
            isBlock: true,
            type: "list",
            storageClassType: "SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.spotFleetRequestSpotMaintenanceStrategiesToHclTerraform = spotFleetRequestSpotMaintenanceStrategiesToHclTerraform;
class SpotFleetRequestSpotMaintenanceStrategiesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // capacity_rebalance - computed: false, optional: true, required: false
        this._capacityRebalance = new SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference(this, "capacity_rebalance");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._capacityRebalance?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityRebalance = this._capacityRebalance?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._capacityRebalance.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._capacityRebalance.internalValue = value.capacityRebalance;
        }
    }
    get capacityRebalance() {
        return this._capacityRebalance;
    }
    putCapacityRebalance(value) {
        this._capacityRebalance.internalValue = value;
    }
    resetCapacityRebalance() {
        this._capacityRebalance.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get capacityRebalanceInput() {
        return this._capacityRebalance.internalValue;
    }
}
exports.SpotFleetRequestSpotMaintenanceStrategiesOutputReference = SpotFleetRequestSpotMaintenanceStrategiesOutputReference;
_q = JSII_RTTI_SYMBOL_1;
SpotFleetRequestSpotMaintenanceStrategiesOutputReference[_q] = { fqn: "@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference", version: "0.0.0" };
function spotFleetRequestTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
    };
}
exports.spotFleetRequestTimeoutsToTerraform = spotFleetRequestTimeoutsToTerraform;
function spotFleetRequestTimeoutsToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.spotFleetRequestTimeoutsToHclTerraform = spotFleetRequestTimeoutsToHclTerraform;
class SpotFleetRequestTimeoutsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._create = undefined;
            this._delete = undefined;
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
}
exports.SpotFleetRequestTimeoutsOutputReference = SpotFleetRequestTimeoutsOutputReference;
_r = JSII_RTTI_SYMBOL_1;
SpotFleetRequestTimeoutsOutputReference[_r] = { fqn: "@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request aws_spot_fleet_request}
*/
class SpotFleetRequest extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SpotFleetRequest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SpotFleetRequest to import
    * @param importFromId The id of the existing SpotFleetRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SpotFleetRequest to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_spot_fleet_request", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request aws_spot_fleet_request} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SpotFleetRequestConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_spot_fleet_request',
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
        // launch_specification - computed: false, optional: true, required: false
        this._launchSpecification = new SpotFleetRequestLaunchSpecificationList(this, "launch_specification", true);
        // launch_template_config - computed: false, optional: true, required: false
        this._launchTemplateConfig = new SpotFleetRequestLaunchTemplateConfigList(this, "launch_template_config", true);
        // spot_maintenance_strategies - computed: false, optional: true, required: false
        this._spotMaintenanceStrategies = new SpotFleetRequestSpotMaintenanceStrategiesOutputReference(this, "spot_maintenance_strategies");
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new SpotFleetRequestTimeoutsOutputReference(this, "timeouts");
        this._allocationStrategy = config.allocationStrategy;
        this._excessCapacityTerminationPolicy = config.excessCapacityTerminationPolicy;
        this._fleetType = config.fleetType;
        this._iamFleetRole = config.iamFleetRole;
        this._id = config.id;
        this._instanceInterruptionBehaviour = config.instanceInterruptionBehaviour;
        this._instancePoolsToUseCount = config.instancePoolsToUseCount;
        this._loadBalancers = config.loadBalancers;
        this._onDemandAllocationStrategy = config.onDemandAllocationStrategy;
        this._onDemandMaxTotalPrice = config.onDemandMaxTotalPrice;
        this._onDemandTargetCapacity = config.onDemandTargetCapacity;
        this._replaceUnhealthyInstances = config.replaceUnhealthyInstances;
        this._spotPrice = config.spotPrice;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._targetCapacity = config.targetCapacity;
        this._targetGroupArns = config.targetGroupArns;
        this._terminateInstancesWithExpiration = config.terminateInstancesWithExpiration;
        this._validFrom = config.validFrom;
        this._validUntil = config.validUntil;
        this._waitForFulfillment = config.waitForFulfillment;
        this._launchSpecification.internalValue = config.launchSpecification;
        this._launchTemplateConfig.internalValue = config.launchTemplateConfig;
        this._spotMaintenanceStrategies.internalValue = config.spotMaintenanceStrategies;
        this._timeouts.internalValue = config.timeouts;
    }
    get allocationStrategy() {
        return this.getStringAttribute('allocation_strategy');
    }
    set allocationStrategy(value) {
        this._allocationStrategy = value;
    }
    resetAllocationStrategy() {
        this._allocationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allocationStrategyInput() {
        return this._allocationStrategy;
    }
    // client_token - computed: true, optional: false, required: false
    get clientToken() {
        return this.getStringAttribute('client_token');
    }
    get excessCapacityTerminationPolicy() {
        return this.getStringAttribute('excess_capacity_termination_policy');
    }
    set excessCapacityTerminationPolicy(value) {
        this._excessCapacityTerminationPolicy = value;
    }
    resetExcessCapacityTerminationPolicy() {
        this._excessCapacityTerminationPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excessCapacityTerminationPolicyInput() {
        return this._excessCapacityTerminationPolicy;
    }
    get fleetType() {
        return this.getStringAttribute('fleet_type');
    }
    set fleetType(value) {
        this._fleetType = value;
    }
    resetFleetType() {
        this._fleetType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fleetTypeInput() {
        return this._fleetType;
    }
    get iamFleetRole() {
        return this.getStringAttribute('iam_fleet_role');
    }
    set iamFleetRole(value) {
        this._iamFleetRole = value;
    }
    // Temporarily expose input value. Use with caution.
    get iamFleetRoleInput() {
        return this._iamFleetRole;
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
    get instanceInterruptionBehaviour() {
        return this.getStringAttribute('instance_interruption_behaviour');
    }
    set instanceInterruptionBehaviour(value) {
        this._instanceInterruptionBehaviour = value;
    }
    resetInstanceInterruptionBehaviour() {
        this._instanceInterruptionBehaviour = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceInterruptionBehaviourInput() {
        return this._instanceInterruptionBehaviour;
    }
    get instancePoolsToUseCount() {
        return this.getNumberAttribute('instance_pools_to_use_count');
    }
    set instancePoolsToUseCount(value) {
        this._instancePoolsToUseCount = value;
    }
    resetInstancePoolsToUseCount() {
        this._instancePoolsToUseCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instancePoolsToUseCountInput() {
        return this._instancePoolsToUseCount;
    }
    get loadBalancers() {
        return cdktf.Fn.tolist(this.getListAttribute('load_balancers'));
    }
    set loadBalancers(value) {
        this._loadBalancers = value;
    }
    resetLoadBalancers() {
        this._loadBalancers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loadBalancersInput() {
        return this._loadBalancers;
    }
    get onDemandAllocationStrategy() {
        return this.getStringAttribute('on_demand_allocation_strategy');
    }
    set onDemandAllocationStrategy(value) {
        this._onDemandAllocationStrategy = value;
    }
    resetOnDemandAllocationStrategy() {
        this._onDemandAllocationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onDemandAllocationStrategyInput() {
        return this._onDemandAllocationStrategy;
    }
    get onDemandMaxTotalPrice() {
        return this.getStringAttribute('on_demand_max_total_price');
    }
    set onDemandMaxTotalPrice(value) {
        this._onDemandMaxTotalPrice = value;
    }
    resetOnDemandMaxTotalPrice() {
        this._onDemandMaxTotalPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onDemandMaxTotalPriceInput() {
        return this._onDemandMaxTotalPrice;
    }
    get onDemandTargetCapacity() {
        return this.getNumberAttribute('on_demand_target_capacity');
    }
    set onDemandTargetCapacity(value) {
        this._onDemandTargetCapacity = value;
    }
    resetOnDemandTargetCapacity() {
        this._onDemandTargetCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onDemandTargetCapacityInput() {
        return this._onDemandTargetCapacity;
    }
    get replaceUnhealthyInstances() {
        return this.getBooleanAttribute('replace_unhealthy_instances');
    }
    set replaceUnhealthyInstances(value) {
        this._replaceUnhealthyInstances = value;
    }
    resetReplaceUnhealthyInstances() {
        this._replaceUnhealthyInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get replaceUnhealthyInstancesInput() {
        return this._replaceUnhealthyInstances;
    }
    get spotPrice() {
        return this.getStringAttribute('spot_price');
    }
    set spotPrice(value) {
        this._spotPrice = value;
    }
    resetSpotPrice() {
        this._spotPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get spotPriceInput() {
        return this._spotPrice;
    }
    // spot_request_state - computed: true, optional: false, required: false
    get spotRequestState() {
        return this.getStringAttribute('spot_request_state');
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
    get targetCapacity() {
        return this.getNumberAttribute('target_capacity');
    }
    set targetCapacity(value) {
        this._targetCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetCapacityInput() {
        return this._targetCapacity;
    }
    get targetGroupArns() {
        return cdktf.Fn.tolist(this.getListAttribute('target_group_arns'));
    }
    set targetGroupArns(value) {
        this._targetGroupArns = value;
    }
    resetTargetGroupArns() {
        this._targetGroupArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetGroupArnsInput() {
        return this._targetGroupArns;
    }
    get terminateInstancesWithExpiration() {
        return this.getBooleanAttribute('terminate_instances_with_expiration');
    }
    set terminateInstancesWithExpiration(value) {
        this._terminateInstancesWithExpiration = value;
    }
    resetTerminateInstancesWithExpiration() {
        this._terminateInstancesWithExpiration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get terminateInstancesWithExpirationInput() {
        return this._terminateInstancesWithExpiration;
    }
    get validFrom() {
        return this.getStringAttribute('valid_from');
    }
    set validFrom(value) {
        this._validFrom = value;
    }
    resetValidFrom() {
        this._validFrom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get validFromInput() {
        return this._validFrom;
    }
    get validUntil() {
        return this.getStringAttribute('valid_until');
    }
    set validUntil(value) {
        this._validUntil = value;
    }
    resetValidUntil() {
        this._validUntil = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get validUntilInput() {
        return this._validUntil;
    }
    get waitForFulfillment() {
        return this.getBooleanAttribute('wait_for_fulfillment');
    }
    set waitForFulfillment(value) {
        this._waitForFulfillment = value;
    }
    resetWaitForFulfillment() {
        this._waitForFulfillment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get waitForFulfillmentInput() {
        return this._waitForFulfillment;
    }
    get launchSpecification() {
        return this._launchSpecification;
    }
    putLaunchSpecification(value) {
        this._launchSpecification.internalValue = value;
    }
    resetLaunchSpecification() {
        this._launchSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchSpecificationInput() {
        return this._launchSpecification.internalValue;
    }
    get launchTemplateConfig() {
        return this._launchTemplateConfig;
    }
    putLaunchTemplateConfig(value) {
        this._launchTemplateConfig.internalValue = value;
    }
    resetLaunchTemplateConfig() {
        this._launchTemplateConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateConfigInput() {
        return this._launchTemplateConfig.internalValue;
    }
    get spotMaintenanceStrategies() {
        return this._spotMaintenanceStrategies;
    }
    putSpotMaintenanceStrategies(value) {
        this._spotMaintenanceStrategies.internalValue = value;
    }
    resetSpotMaintenanceStrategies() {
        this._spotMaintenanceStrategies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get spotMaintenanceStrategiesInput() {
        return this._spotMaintenanceStrategies.internalValue;
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
            allocation_strategy: cdktf.stringToTerraform(this._allocationStrategy),
            excess_capacity_termination_policy: cdktf.stringToTerraform(this._excessCapacityTerminationPolicy),
            fleet_type: cdktf.stringToTerraform(this._fleetType),
            iam_fleet_role: cdktf.stringToTerraform(this._iamFleetRole),
            id: cdktf.stringToTerraform(this._id),
            instance_interruption_behaviour: cdktf.stringToTerraform(this._instanceInterruptionBehaviour),
            instance_pools_to_use_count: cdktf.numberToTerraform(this._instancePoolsToUseCount),
            load_balancers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loadBalancers),
            on_demand_allocation_strategy: cdktf.stringToTerraform(this._onDemandAllocationStrategy),
            on_demand_max_total_price: cdktf.stringToTerraform(this._onDemandMaxTotalPrice),
            on_demand_target_capacity: cdktf.numberToTerraform(this._onDemandTargetCapacity),
            replace_unhealthy_instances: cdktf.booleanToTerraform(this._replaceUnhealthyInstances),
            spot_price: cdktf.stringToTerraform(this._spotPrice),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            target_capacity: cdktf.numberToTerraform(this._targetCapacity),
            target_group_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetGroupArns),
            terminate_instances_with_expiration: cdktf.booleanToTerraform(this._terminateInstancesWithExpiration),
            valid_from: cdktf.stringToTerraform(this._validFrom),
            valid_until: cdktf.stringToTerraform(this._validUntil),
            wait_for_fulfillment: cdktf.booleanToTerraform(this._waitForFulfillment),
            launch_specification: cdktf.listMapper(spotFleetRequestLaunchSpecificationToTerraform, true)(this._launchSpecification.internalValue),
            launch_template_config: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigToTerraform, true)(this._launchTemplateConfig.internalValue),
            spot_maintenance_strategies: spotFleetRequestSpotMaintenanceStrategiesToTerraform(this._spotMaintenanceStrategies.internalValue),
            timeouts: spotFleetRequestTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            allocation_strategy: {
                value: cdktf.stringToHclTerraform(this._allocationStrategy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            excess_capacity_termination_policy: {
                value: cdktf.stringToHclTerraform(this._excessCapacityTerminationPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fleet_type: {
                value: cdktf.stringToHclTerraform(this._fleetType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            iam_fleet_role: {
                value: cdktf.stringToHclTerraform(this._iamFleetRole),
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
            instance_interruption_behaviour: {
                value: cdktf.stringToHclTerraform(this._instanceInterruptionBehaviour),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_pools_to_use_count: {
                value: cdktf.numberToHclTerraform(this._instancePoolsToUseCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            load_balancers: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loadBalancers),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            on_demand_allocation_strategy: {
                value: cdktf.stringToHclTerraform(this._onDemandAllocationStrategy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            on_demand_max_total_price: {
                value: cdktf.stringToHclTerraform(this._onDemandMaxTotalPrice),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            on_demand_target_capacity: {
                value: cdktf.numberToHclTerraform(this._onDemandTargetCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            replace_unhealthy_instances: {
                value: cdktf.booleanToHclTerraform(this._replaceUnhealthyInstances),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            spot_price: {
                value: cdktf.stringToHclTerraform(this._spotPrice),
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
            target_capacity: {
                value: cdktf.numberToHclTerraform(this._targetCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            target_group_arns: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetGroupArns),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            terminate_instances_with_expiration: {
                value: cdktf.booleanToHclTerraform(this._terminateInstancesWithExpiration),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            valid_from: {
                value: cdktf.stringToHclTerraform(this._validFrom),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            valid_until: {
                value: cdktf.stringToHclTerraform(this._validUntil),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            wait_for_fulfillment: {
                value: cdktf.booleanToHclTerraform(this._waitForFulfillment),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            launch_specification: {
                value: cdktf.listMapperHcl(spotFleetRequestLaunchSpecificationToHclTerraform, true)(this._launchSpecification.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "SpotFleetRequestLaunchSpecificationList",
            },
            launch_template_config: {
                value: cdktf.listMapperHcl(spotFleetRequestLaunchTemplateConfigToHclTerraform, true)(this._launchTemplateConfig.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "SpotFleetRequestLaunchTemplateConfigList",
            },
            spot_maintenance_strategies: {
                value: spotFleetRequestSpotMaintenanceStrategiesToHclTerraform(this._spotMaintenanceStrategies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "SpotFleetRequestSpotMaintenanceStrategiesList",
            },
            timeouts: {
                value: spotFleetRequestTimeoutsToHclTerraform(this._timeouts.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SpotFleetRequestTimeouts",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.SpotFleetRequest = SpotFleetRequest;
_s = JSII_RTTI_SYMBOL_1;
SpotFleetRequest[_s] = { fqn: "@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
SpotFleetRequest.tfResourceType = "aws_spot_fleet_request";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3Nwb3QtZmxlZXQtcmVxdWVzdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQTRKL0IsU0FBZ0IsNERBQTRELENBQUMsTUFBOEU7SUFDekosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsbUJBQW1CLENBQUM7UUFDNUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELFNBQVMsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUN0RCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3JELFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN4RCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELFdB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QW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRywrQkFBYyxHQUFHLHdCQUF3QixBQUEzQixDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIFNwb3RGbGVldFJlcXVlc3RDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I2FsbG9jYXRpb25fc3RyYXRlZ3kgU3BvdEZsZWV0UmVxdWVzdCNhbGxvY2F0aW9uX3N0cmF0ZWd5fVxuICAqL1xuICByZWFkb25seSBhbGxvY2F0aW9uU3RyYXRlZ3k/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNleGNlc3NfY2FwYWNpdHlfdGVybWluYXRpb25fcG9saWN5IFNwb3RGbGVldFJlcXVlc3QjZXhjZXNzX2NhcGFjaXR5X3Rlcm1pbmF0aW9uX3BvbGljeX1cbiAgKi9cbiAgcmVhZG9ubHkgZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I2ZsZWV0X3R5cGUgU3BvdEZsZWV0UmVxdWVzdCNmbGVldF90eXBlfVxuICAqL1xuICByZWFkb25seSBmbGVldFR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNpYW1fZmxlZXRfcm9sZSBTcG90RmxlZXRSZXF1ZXN0I2lhbV9mbGVldF9yb2xlfVxuICAqL1xuICByZWFkb25seSBpYW1GbGVldFJvbGU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I2lkIFNwb3RGbGVldFJlcXVlc3QjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNpbnN0YW5jZV9pbnRlcnJ1cHRpb25fYmVoYXZpb3VyIFNwb3RGbGVldFJlcXVlc3QjaW5zdGFuY2VfaW50ZXJydXB0aW9uX2JlaGF2aW91cn1cbiAgKi9cbiAgcmVhZG9ubHkgaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNpbnN0YW5jZV9wb29sc190b191c2VfY291bnQgU3BvdEZsZWV0UmVxdWVzdCNpbnN0YW5jZV9wb29sc190b191c2VfY291bnR9XG4gICovXG4gIHJlYWRvbmx5IGluc3RhbmNlUG9vbHNUb1VzZUNvdW50PzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QjbG9hZF9iYWxhbmNlcnMgU3BvdEZsZWV0UmVxdWVzdCNsb2FkX2JhbGFuY2Vyc31cbiAgKi9cbiAgcmVhZG9ubHkgbG9hZEJhbGFuY2Vycz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3Qjb25fZGVtYW5kX2FsbG9jYXRpb25fc3RyYXRlZ3kgU3BvdEZsZWV0UmVxdWVzdCNvbl9kZW1hbmRfYWxsb2NhdGlvbl9zdHJhdGVneX1cbiAgKi9cbiAgcmVhZG9ubHkgb25EZW1hbmRBbGxvY2F0aW9uU3RyYXRlZ3k/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNvbl9kZW1hbmRfbWF4X3RvdGFsX3ByaWNlIFNwb3RGbGVldFJlcXVlc3Qjb25fZGVtYW5kX21heF90b3RhbF9wcmljZX1cbiAgKi9cbiAgcmVhZG9ubHkgb25EZW1hbmRNYXhUb3RhbFByaWNlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3Qjb25fZGVtYW5kX3RhcmdldF9jYXBhY2l0eSBTcG90RmxlZXRSZXF1ZXN0I29uX2RlbWFuZF90YXJnZXRfY2FwYWNpdHl9XG4gICovXG4gIHJlYWRvbmx5IG9uRGVtYW5kVGFyZ2V0Q2FwYWNpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNyZXBsYWNlX3VuaGVhbHRoeV9pbnN0YW5jZXMgU3BvdEZsZWV0UmVxdWVzdCNyZXBsYWNlX3VuaGVhbHRoeV9pbnN0YW5jZXN9XG4gICovXG4gIHJlYWRvbmx5IHJlcGxhY2VVbmhlYWx0aHlJbnN0YW5jZXM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNzcG90X3ByaWNlIFNwb3RGbGVldFJlcXVlc3Qjc3BvdF9wcmljZX1cbiAgKi9cbiAgcmVhZG9ubHkgc3BvdFByaWNlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QjdGFncyBTcG90RmxlZXRSZXF1ZXN0I3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QjdGFnc19hbGwgU3BvdEZsZWV0UmVxdWVzdCN0YWdzX2FsbH1cbiAgKi9cbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCN0YXJnZXRfY2FwYWNpdHkgU3BvdEZsZWV0UmVxdWVzdCN0YXJnZXRfY2FwYWNpdHl9XG4gICovXG4gIHJlYWRvbmx5IHRhcmdldENhcGFjaXR5OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCN0YXJnZXRfZ3JvdXBfYXJucyBTcG90RmxlZXRSZXF1ZXN0I3RhcmdldF9ncm91cF9hcm5zfVxuICAqL1xuICByZWFkb25seSB0YXJnZXRHcm91cEFybnM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I3Rlcm1pbmF0ZV9pbnN0YW5jZXNfd2l0aF9leHBpcmF0aW9uIFNwb3RGbGVldFJlcXVlc3QjdGVybWluYXRlX2luc3RhbmNlc193aXRoX2V4cGlyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IHRlcm1pbmF0ZUluc3RhbmNlc1dpdGhFeHBpcmF0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QjdmFsaWRfZnJvbSBTcG90RmxlZXRSZXF1ZXN0I3ZhbGlkX2Zyb219XG4gICovXG4gIHJlYWRvbmx5IHZhbGlkRnJvbT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I3ZhbGlkX3VudGlsIFNwb3RGbGVldFJlcXVlc3QjdmFsaWRfdW50aWx9XG4gICovXG4gIHJlYWRvbmx5IHZhbGlkVW50aWw/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCN3YWl0X2Zvcl9mdWxmaWxsbWVudCBTcG90RmxlZXRSZXF1ZXN0I3dhaXRfZm9yX2Z1bGZpbGxtZW50fVxuICAqL1xuICByZWFkb25seSB3YWl0Rm9yRnVsZmlsbG1lbnQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIGxhdW5jaF9zcGVjaWZpY2F0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QjbGF1bmNoX3NwZWNpZmljYXRpb24gU3BvdEZsZWV0UmVxdWVzdCNsYXVuY2hfc3BlY2lmaWNhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgbGF1bmNoU3BlY2lmaWNhdGlvbj86IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogbGF1bmNoX3RlbXBsYXRlX2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I2xhdW5jaF90ZW1wbGF0ZV9jb25maWcgU3BvdEZsZWV0UmVxdWVzdCNsYXVuY2hfdGVtcGxhdGVfY29uZmlnfVxuICAqL1xuICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZUNvbmZpZz86IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ1tdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHNwb3RfbWFpbnRlbmFuY2Vfc3RyYXRlZ2llcyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I3Nwb3RfbWFpbnRlbmFuY2Vfc3RyYXRlZ2llcyBTcG90RmxlZXRSZXF1ZXN0I3Nwb3RfbWFpbnRlbmFuY2Vfc3RyYXRlZ2llc31cbiAgKi9cbiAgcmVhZG9ubHkgc3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcz86IFNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzO1xuICAvKipcbiAgKiB0aW1lb3V0cyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I3RpbWVvdXRzIFNwb3RGbGVldFJlcXVlc3QjdGltZW91dHN9XG4gICovXG4gIHJlYWRvbmx5IHRpbWVvdXRzPzogU3BvdEZsZWV0UmVxdWVzdFRpbWVvdXRzO1xufVxuZXhwb3J0IGludGVyZmFjZSBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVic0Jsb2NrRGV2aWNlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I2RlbGV0ZV9vbl90ZXJtaW5hdGlvbiBTcG90RmxlZXRSZXF1ZXN0I2RlbGV0ZV9vbl90ZXJtaW5hdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGVsZXRlT25UZXJtaW5hdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I2RldmljZV9uYW1lIFNwb3RGbGVldFJlcXVlc3QjZGV2aWNlX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IGRldmljZU5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I2VuY3J5cHRlZCBTcG90RmxlZXRSZXF1ZXN0I2VuY3J5cHRlZH1cbiAgKi9cbiAgcmVhZG9ubHkgZW5jcnlwdGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QjaW9wcyBTcG90RmxlZXRSZXF1ZXN0I2lvcHN9XG4gICovXG4gIHJlYWRvbmx5IGlvcHM/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNrbXNfa2V5X2lkIFNwb3RGbGVldFJlcXVlc3Qja21zX2tleV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkga21zS2V5SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNzbmFwc2hvdF9pZCBTcG90RmxlZXRSZXF1ZXN0I3NuYXBzaG90X2lkfVxuICAqL1xuICByZWFkb25seSBzbmFwc2hvdElkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QjdGhyb3VnaHB1dCBTcG90RmxlZXRSZXF1ZXN0I3Rocm91Z2hwdXR9XG4gICovXG4gIHJlYWRvbmx5IHRocm91Z2hwdXQ/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCN2b2x1bWVfc2l6ZSBTcG90RmxlZXRSZXF1ZXN0I3ZvbHVtZV9zaXplfVxuICAqL1xuICByZWFkb25seSB2b2x1bWVTaXplPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3Qjdm9sdW1lX3R5cGUgU3BvdEZsZWV0UmVxdWVzdCN2b2x1bWVfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgdm9sdW1lVHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uRWJzQmxvY2tEZXZpY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVic0Jsb2NrRGV2aWNlIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGVsZXRlX29uX3Rlcm1pbmF0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGVPblRlcm1pbmF0aW9uKSxcbiAgICBkZXZpY2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VOYW1lKSxcbiAgICBlbmNyeXB0ZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuY3J5cHRlZCksXG4gICAgaW9wczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pb3BzKSxcbiAgICBrbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUlkKSxcbiAgICBzbmFwc2hvdF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zbmFwc2hvdElkKSxcbiAgICB0aHJvdWdocHV0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRocm91Z2hwdXQpLFxuICAgIHZvbHVtZV9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZVNpemUpLFxuICAgIHZvbHVtZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZVR5cGUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uRWJzQmxvY2tEZXZpY2VUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVic0Jsb2NrRGV2aWNlIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGRlbGV0ZV9vbl90ZXJtaW5hdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZU9uVGVybWluYXRpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBkZXZpY2VfbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlTmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZW5jcnlwdGVkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGVkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgaW9wczoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW9wcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAga21zX2tleV9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNuYXBzaG90X2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zbmFwc2hvdElkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB0aHJvdWdocHV0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50aHJvdWdocHV0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICB2b2x1bWVfc2l6ZToge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lU2l6ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgdm9sdW1lX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZVR5cGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FYnNCbG9ja0RldmljZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVic0Jsb2NrRGV2aWNlIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlbGV0ZU9uVGVybWluYXRpb24gPSB0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGV2aWNlTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXZpY2VOYW1lID0gdGhpcy5fZGV2aWNlTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuY3J5cHRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmNyeXB0ZWQgPSB0aGlzLl9lbmNyeXB0ZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlvcHMgPSB0aGlzLl9pb3BzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fa21zS2V5SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua21zS2V5SWQgPSB0aGlzLl9rbXNLZXlJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NuYXBzaG90SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc25hcHNob3RJZCA9IHRoaXMuX3NuYXBzaG90SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl90aHJvdWdocHV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRocm91Z2hwdXQgPSB0aGlzLl90aHJvdWdocHV0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdm9sdW1lU2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52b2x1bWVTaXplID0gdGhpcy5fdm9sdW1lU2l6ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZvbHVtZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudm9sdW1lVHlwZSA9IHRoaXMuX3ZvbHVtZVR5cGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVic0Jsb2NrRGV2aWNlIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RlbGV0ZU9uVGVybWluYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZXZpY2VOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW5jcnlwdGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW9wcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ttc0tleUlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc25hcHNob3RJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Rocm91Z2hwdXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92b2x1bWVTaXplID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdm9sdW1lVHlwZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uID0gdmFsdWUuZGVsZXRlT25UZXJtaW5hdGlvbjtcbiAgICAgIHRoaXMuX2RldmljZU5hbWUgPSB2YWx1ZS5kZXZpY2VOYW1lO1xuICAgICAgdGhpcy5fZW5jcnlwdGVkID0gdmFsdWUuZW5jcnlwdGVkO1xuICAgICAgdGhpcy5faW9wcyA9IHZhbHVlLmlvcHM7XG4gICAgICB0aGlzLl9rbXNLZXlJZCA9IHZhbHVlLmttc0tleUlkO1xuICAgICAgdGhpcy5fc25hcHNob3RJZCA9IHZhbHVlLnNuYXBzaG90SWQ7XG4gICAgICB0aGlzLl90aHJvdWdocHV0ID0gdmFsdWUudGhyb3VnaHB1dDtcbiAgICAgIHRoaXMuX3ZvbHVtZVNpemUgPSB2YWx1ZS52b2x1bWVTaXplO1xuICAgICAgdGhpcy5fdm9sdW1lVHlwZSA9IHZhbHVlLnZvbHVtZVR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gZGVsZXRlX29uX3Rlcm1pbmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlbGV0ZU9uVGVybWluYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGRlbGV0ZU9uVGVybWluYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGVsZXRlX29uX3Rlcm1pbmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWxldGVPblRlcm1pbmF0aW9uKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsZXRlT25UZXJtaW5hdGlvbigpIHtcbiAgICB0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxldGVPblRlcm1pbmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZU9uVGVybWluYXRpb247XG4gIH1cblxuICAvLyBkZXZpY2VfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZXZpY2VOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXZpY2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGV2aWNlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRldmljZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RldmljZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGV2aWNlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXZpY2VOYW1lO1xuICB9XG5cbiAgLy8gZW5jcnlwdGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5jcnlwdGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmNyeXB0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5jcnlwdGVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmNyeXB0ZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuY3J5cHRlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuY3J5cHRlZCgpIHtcbiAgICB0aGlzLl9lbmNyeXB0ZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuY3J5cHRlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0ZWQ7XG4gIH1cblxuICAvLyBpb3BzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW9wcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgaW9wcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2lvcHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlvcHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2lvcHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJb3BzKCkge1xuICAgIHRoaXMuX2lvcHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlvcHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW9wcztcbiAgfVxuXG4gIC8vIGttc19rZXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNLZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlJZCgpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5SWQ7XG4gIH1cblxuICAvLyBzbmFwc2hvdF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NuYXBzaG90SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNuYXBzaG90SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzbmFwc2hvdF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc25hcHNob3RJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc25hcHNob3RJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNuYXBzaG90SWQoKSB7XG4gICAgdGhpcy5fc25hcHNob3RJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc25hcHNob3RJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zbmFwc2hvdElkO1xuICB9XG5cbiAgLy8gdGhyb3VnaHB1dCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Rocm91Z2hwdXQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRocm91Z2hwdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0aHJvdWdocHV0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0aHJvdWdocHV0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90aHJvdWdocHV0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGhyb3VnaHB1dCgpIHtcbiAgICB0aGlzLl90aHJvdWdocHV0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aHJvdWdocHV0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rocm91Z2hwdXQ7XG4gIH1cblxuICAvLyB2b2x1bWVfc2l6ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZvbHVtZVNpemU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHZvbHVtZVNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd2b2x1bWVfc2l6ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdm9sdW1lU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdm9sdW1lU2l6ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZvbHVtZVNpemUoKSB7XG4gICAgdGhpcy5fdm9sdW1lU2l6ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdm9sdW1lU2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92b2x1bWVTaXplO1xuICB9XG5cbiAgLy8gdm9sdW1lX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92b2x1bWVUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2b2x1bWVUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndm9sdW1lX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZvbHVtZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZvbHVtZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWb2x1bWVUeXBlKCkge1xuICAgIHRoaXMuX3ZvbHVtZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZvbHVtZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdm9sdW1lVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FYnNCbG9ja0RldmljZUxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uRWJzQmxvY2tEZXZpY2VbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FYnNCbG9ja0RldmljZU91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVic0Jsb2NrRGV2aWNlT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FcGhlbWVyYWxCbG9ja0RldmljZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNkZXZpY2VfbmFtZSBTcG90RmxlZXRSZXF1ZXN0I2RldmljZV9uYW1lfVxuICAqL1xuICByZWFkb25seSBkZXZpY2VOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCN2aXJ0dWFsX25hbWUgU3BvdEZsZWV0UmVxdWVzdCN2aXJ0dWFsX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IHZpcnR1YWxOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVwaGVtZXJhbEJsb2NrRGV2aWNlVG9UZXJyYWZvcm0oc3RydWN0PzogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FcGhlbWVyYWxCbG9ja0RldmljZSB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRldmljZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZU5hbWUpLFxuICAgIHZpcnR1YWxfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52aXJ0dWFsTmFtZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FcGhlbWVyYWxCbG9ja0RldmljZVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uRXBoZW1lcmFsQmxvY2tEZXZpY2UgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZGV2aWNlX25hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRldmljZU5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHZpcnR1YWxfbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudmlydHVhbE5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FcGhlbWVyYWxCbG9ja0RldmljZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVwaGVtZXJhbEJsb2NrRGV2aWNlIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kZXZpY2VOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRldmljZU5hbWUgPSB0aGlzLl9kZXZpY2VOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmlydHVhbE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmlydHVhbE5hbWUgPSB0aGlzLl92aXJ0dWFsTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uRXBoZW1lcmFsQmxvY2tEZXZpY2UgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGV2aWNlTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZpcnR1YWxOYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RldmljZU5hbWUgPSB2YWx1ZS5kZXZpY2VOYW1lO1xuICAgICAgdGhpcy5fdmlydHVhbE5hbWUgPSB2YWx1ZS52aXJ0dWFsTmFtZTtcbiAgICB9XG4gIH1cblxuICAvLyBkZXZpY2VfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZXZpY2VOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXZpY2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGV2aWNlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRldmljZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RldmljZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGV2aWNlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXZpY2VOYW1lO1xuICB9XG5cbiAgLy8gdmlydHVhbF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZpcnR1YWxOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2aXJ0dWFsTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZpcnR1YWxfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmlydHVhbE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZpcnR1YWxOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZpcnR1YWxOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxOYW1lO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVwaGVtZXJhbEJsb2NrRGV2aWNlTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FcGhlbWVyYWxCbG9ja0RldmljZVtdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVwaGVtZXJhbEJsb2NrRGV2aWNlT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uRXBoZW1lcmFsQmxvY2tEZXZpY2VPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvblJvb3RCbG9ja0RldmljZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNkZWxldGVfb25fdGVybWluYXRpb24gU3BvdEZsZWV0UmVxdWVzdCNkZWxldGVfb25fdGVybWluYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlbGV0ZU9uVGVybWluYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNlbmNyeXB0ZWQgU3BvdEZsZWV0UmVxdWVzdCNlbmNyeXB0ZWR9XG4gICovXG4gIHJlYWRvbmx5IGVuY3J5cHRlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I2lvcHMgU3BvdEZsZWV0UmVxdWVzdCNpb3BzfVxuICAqL1xuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3Qja21zX2tleV9pZCBTcG90RmxlZXRSZXF1ZXN0I2ttc19rZXlfaWR9XG4gICovXG4gIHJlYWRvbmx5IGttc0tleUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QjdGhyb3VnaHB1dCBTcG90RmxlZXRSZXF1ZXN0I3Rocm91Z2hwdXR9XG4gICovXG4gIHJlYWRvbmx5IHRocm91Z2hwdXQ/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCN2b2x1bWVfc2l6ZSBTcG90RmxlZXRSZXF1ZXN0I3ZvbHVtZV9zaXplfVxuICAqL1xuICByZWFkb25seSB2b2x1bWVTaXplPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3Qjdm9sdW1lX3R5cGUgU3BvdEZsZWV0UmVxdWVzdCN2b2x1bWVfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgdm9sdW1lVHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uUm9vdEJsb2NrRGV2aWNlVG9UZXJyYWZvcm0oc3RydWN0PzogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25Sb290QmxvY2tEZXZpY2UgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZWxldGVfb25fdGVybWluYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZU9uVGVybWluYXRpb24pLFxuICAgIGVuY3J5cHRlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGVkKSxcbiAgICBpb3BzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvcHMpLFxuICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICAgIHRocm91Z2hwdXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGhyb3VnaHB1dCksXG4gICAgdm9sdW1lX3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lU2l6ZSksXG4gICAgdm9sdW1lX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lVHlwZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25Sb290QmxvY2tEZXZpY2VUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvblJvb3RCbG9ja0RldmljZSB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBkZWxldGVfb25fdGVybWluYXRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kZWxldGVPblRlcm1pbmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgZW5jcnlwdGVkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGVkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgaW9wczoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW9wcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAga21zX2tleV9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHRocm91Z2hwdXQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRocm91Z2hwdXQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHZvbHVtZV9zaXplOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS52b2x1bWVTaXplKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICB2b2x1bWVfdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lVHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvblJvb3RCbG9ja0RldmljZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvblJvb3RCbG9ja0RldmljZSB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGVsZXRlT25UZXJtaW5hdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWxldGVPblRlcm1pbmF0aW9uID0gdGhpcy5fZGVsZXRlT25UZXJtaW5hdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuY3J5cHRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmNyeXB0ZWQgPSB0aGlzLl9lbmNyeXB0ZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlvcHMgPSB0aGlzLl9pb3BzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fa21zS2V5SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua21zS2V5SWQgPSB0aGlzLl9rbXNLZXlJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Rocm91Z2hwdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGhyb3VnaHB1dCA9IHRoaXMuX3Rocm91Z2hwdXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl92b2x1bWVTaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZvbHVtZVNpemUgPSB0aGlzLl92b2x1bWVTaXplO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdm9sdW1lVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52b2x1bWVUeXBlID0gdGhpcy5fdm9sdW1lVHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uUm9vdEJsb2NrRGV2aWNlIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RlbGV0ZU9uVGVybWluYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmNyeXB0ZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pb3BzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90aHJvdWdocHV0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdm9sdW1lU2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZvbHVtZVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGVsZXRlT25UZXJtaW5hdGlvbiA9IHZhbHVlLmRlbGV0ZU9uVGVybWluYXRpb247XG4gICAgICB0aGlzLl9lbmNyeXB0ZWQgPSB2YWx1ZS5lbmNyeXB0ZWQ7XG4gICAgICB0aGlzLl9pb3BzID0gdmFsdWUuaW9wcztcbiAgICAgIHRoaXMuX2ttc0tleUlkID0gdmFsdWUua21zS2V5SWQ7XG4gICAgICB0aGlzLl90aHJvdWdocHV0ID0gdmFsdWUudGhyb3VnaHB1dDtcbiAgICAgIHRoaXMuX3ZvbHVtZVNpemUgPSB2YWx1ZS52b2x1bWVTaXplO1xuICAgICAgdGhpcy5fdm9sdW1lVHlwZSA9IHZhbHVlLnZvbHVtZVR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gZGVsZXRlX29uX3Rlcm1pbmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlbGV0ZU9uVGVybWluYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGRlbGV0ZU9uVGVybWluYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGVsZXRlX29uX3Rlcm1pbmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWxldGVPblRlcm1pbmF0aW9uKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsZXRlT25UZXJtaW5hdGlvbigpIHtcbiAgICB0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxldGVPblRlcm1pbmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZU9uVGVybWluYXRpb247XG4gIH1cblxuICAvLyBlbmNyeXB0ZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmNyeXB0ZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuY3J5cHRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmNyeXB0ZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuY3J5cHRlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5jcnlwdGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5jcnlwdGVkKCkge1xuICAgIHRoaXMuX2VuY3J5cHRlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRlZDtcbiAgfVxuXG4gIC8vIGlvcHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pb3BzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpb3BzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW9wcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW9wcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW9wcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElvcHMoKSB7XG4gICAgdGhpcy5faW9wcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW9wc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pb3BzO1xuICB9XG5cbiAgLy8ga21zX2tleV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc0tleUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEttc0tleUlkKCkge1xuICAgIHRoaXMuX2ttc0tleUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rbXNLZXlJZDtcbiAgfVxuXG4gIC8vIHRocm91Z2hwdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aHJvdWdocHV0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0aHJvdWdocHV0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGhyb3VnaHB1dCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGhyb3VnaHB1dCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGhyb3VnaHB1dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRocm91Z2hwdXQoKSB7XG4gICAgdGhpcy5fdGhyb3VnaHB1dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGhyb3VnaHB1dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aHJvdWdocHV0O1xuICB9XG5cbiAgLy8gdm9sdW1lX3NpemUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92b2x1bWVTaXplPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB2b2x1bWVTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndm9sdW1lX3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZvbHVtZVNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZvbHVtZVNpemUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWb2x1bWVTaXplKCkge1xuICAgIHRoaXMuX3ZvbHVtZVNpemUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZvbHVtZVNpemVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdm9sdW1lU2l6ZTtcbiAgfVxuXG4gIC8vIHZvbHVtZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdm9sdW1lVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdm9sdW1lVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZvbHVtZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2b2x1bWVUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92b2x1bWVUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Vm9sdW1lVHlwZSgpIHtcbiAgICB0aGlzLl92b2x1bWVUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2b2x1bWVUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZvbHVtZVR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uUm9vdEJsb2NrRGV2aWNlTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25Sb290QmxvY2tEZXZpY2VbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25Sb290QmxvY2tEZXZpY2VPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25Sb290QmxvY2tEZXZpY2VPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNhbWkgU3BvdEZsZWV0UmVxdWVzdCNhbWl9XG4gICovXG4gIHJlYWRvbmx5IGFtaTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QjYXNzb2NpYXRlX3B1YmxpY19pcF9hZGRyZXNzIFNwb3RGbGVldFJlcXVlc3QjYXNzb2NpYXRlX3B1YmxpY19pcF9hZGRyZXNzfVxuICAqL1xuICByZWFkb25seSBhc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3M/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNhdmFpbGFiaWxpdHlfem9uZSBTcG90RmxlZXRSZXF1ZXN0I2F2YWlsYWJpbGl0eV96b25lfVxuICAqL1xuICByZWFkb25seSBhdmFpbGFiaWxpdHlab25lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QjZWJzX29wdGltaXplZCBTcG90RmxlZXRSZXF1ZXN0I2Vic19vcHRpbWl6ZWR9XG4gICovXG4gIHJlYWRvbmx5IGVic09wdGltaXplZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I2lhbV9pbnN0YW5jZV9wcm9maWxlIFNwb3RGbGVldFJlcXVlc3QjaWFtX2luc3RhbmNlX3Byb2ZpbGV9XG4gICovXG4gIHJlYWRvbmx5IGlhbUluc3RhbmNlUHJvZmlsZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I2lhbV9pbnN0YW5jZV9wcm9maWxlX2FybiBTcG90RmxlZXRSZXF1ZXN0I2lhbV9pbnN0YW5jZV9wcm9maWxlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgaWFtSW5zdGFuY2VQcm9maWxlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QjaW5zdGFuY2VfdHlwZSBTcG90RmxlZXRSZXF1ZXN0I2luc3RhbmNlX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3Qja2V5X25hbWUgU3BvdEZsZWV0UmVxdWVzdCNrZXlfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkga2V5TmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I21vbml0b3JpbmcgU3BvdEZsZWV0UmVxdWVzdCNtb25pdG9yaW5nfVxuICAqL1xuICByZWFkb25seSBtb25pdG9yaW5nPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QjcGxhY2VtZW50X2dyb3VwIFNwb3RGbGVldFJlcXVlc3QjcGxhY2VtZW50X2dyb3VwfVxuICAqL1xuICByZWFkb25seSBwbGFjZW1lbnRHcm91cD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I3BsYWNlbWVudF90ZW5hbmN5IFNwb3RGbGVldFJlcXVlc3QjcGxhY2VtZW50X3RlbmFuY3l9XG4gICovXG4gIHJlYWRvbmx5IHBsYWNlbWVudFRlbmFuY3k/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNzcG90X3ByaWNlIFNwb3RGbGVldFJlcXVlc3Qjc3BvdF9wcmljZX1cbiAgKi9cbiAgcmVhZG9ubHkgc3BvdFByaWNlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3Qjc3VibmV0X2lkIFNwb3RGbGVldFJlcXVlc3Qjc3VibmV0X2lkfVxuICAqL1xuICByZWFkb25seSBzdWJuZXRJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I3RhZ3MgU3BvdEZsZWV0UmVxdWVzdCN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I3VzZXJfZGF0YSBTcG90RmxlZXRSZXF1ZXN0I3VzZXJfZGF0YX1cbiAgKi9cbiAgcmVhZG9ubHkgdXNlckRhdGE/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCN2cGNfc2VjdXJpdHlfZ3JvdXBfaWRzIFNwb3RGbGVldFJlcXVlc3QjdnBjX3NlY3VyaXR5X2dyb3VwX2lkc31cbiAgKi9cbiAgcmVhZG9ubHkgdnBjU2VjdXJpdHlHcm91cElkcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3Qjd2VpZ2h0ZWRfY2FwYWNpdHkgU3BvdEZsZWV0UmVxdWVzdCN3ZWlnaHRlZF9jYXBhY2l0eX1cbiAgKi9cbiAgcmVhZG9ubHkgd2VpZ2h0ZWRDYXBhY2l0eT86IHN0cmluZztcbiAgLyoqXG4gICogZWJzX2Jsb2NrX2RldmljZSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I2Vic19ibG9ja19kZXZpY2UgU3BvdEZsZWV0UmVxdWVzdCNlYnNfYmxvY2tfZGV2aWNlfVxuICAqL1xuICByZWFkb25seSBlYnNCbG9ja0RldmljZT86IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uRWJzQmxvY2tEZXZpY2VbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBlcGhlbWVyYWxfYmxvY2tfZGV2aWNlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QjZXBoZW1lcmFsX2Jsb2NrX2RldmljZSBTcG90RmxlZXRSZXF1ZXN0I2VwaGVtZXJhbF9ibG9ja19kZXZpY2V9XG4gICovXG4gIHJlYWRvbmx5IGVwaGVtZXJhbEJsb2NrRGV2aWNlPzogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FcGhlbWVyYWxCbG9ja0RldmljZVtdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHJvb3RfYmxvY2tfZGV2aWNlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3Qjcm9vdF9ibG9ja19kZXZpY2UgU3BvdEZsZWV0UmVxdWVzdCNyb290X2Jsb2NrX2RldmljZX1cbiAgKi9cbiAgcmVhZG9ubHkgcm9vdEJsb2NrRGV2aWNlPzogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25Sb290QmxvY2tEZXZpY2VbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFtaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hbWkpLFxuICAgIGFzc29jaWF0ZV9wdWJsaWNfaXBfYWRkcmVzczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzKSxcbiAgICBhdmFpbGFiaWxpdHlfem9uZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdmFpbGFiaWxpdHlab25lKSxcbiAgICBlYnNfb3B0aW1pemVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lYnNPcHRpbWl6ZWQpLFxuICAgIGlhbV9pbnN0YW5jZV9wcm9maWxlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlhbUluc3RhbmNlUHJvZmlsZSksXG4gICAgaWFtX2luc3RhbmNlX3Byb2ZpbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlhbUluc3RhbmNlUHJvZmlsZUFybiksXG4gICAgaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVR5cGUpLFxuICAgIGtleV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleU5hbWUpLFxuICAgIG1vbml0b3Jpbmc6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm1vbml0b3JpbmcpLFxuICAgIHBsYWNlbWVudF9ncm91cDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wbGFjZW1lbnRHcm91cCksXG4gICAgcGxhY2VtZW50X3RlbmFuY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGxhY2VtZW50VGVuYW5jeSksXG4gICAgc3BvdF9wcmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zcG90UHJpY2UpLFxuICAgIHN1Ym5ldF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdWJuZXRJZCksXG4gICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS50YWdzKSxcbiAgICB1c2VyX2RhdGE6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlckRhdGEpLFxuICAgIHZwY19zZWN1cml0eV9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnZwY1NlY3VyaXR5R3JvdXBJZHMpLFxuICAgIHdlaWdodGVkX2NhcGFjaXR5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLndlaWdodGVkQ2FwYWNpdHkpLFxuICAgIGVic19ibG9ja19kZXZpY2U6IGNka3RmLmxpc3RNYXBwZXIoc3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FYnNCbG9ja0RldmljZVRvVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLmVic0Jsb2NrRGV2aWNlKSxcbiAgICBlcGhlbWVyYWxfYmxvY2tfZGV2aWNlOiBjZGt0Zi5saXN0TWFwcGVyKHNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uRXBoZW1lcmFsQmxvY2tEZXZpY2VUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5lcGhlbWVyYWxCbG9ja0RldmljZSksXG4gICAgcm9vdF9ibG9ja19kZXZpY2U6IGNka3RmLmxpc3RNYXBwZXIoc3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25Sb290QmxvY2tEZXZpY2VUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5yb290QmxvY2tEZXZpY2UpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYW1pOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hbWkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGFzc29jaWF0ZV9wdWJsaWNfaXBfYWRkcmVzczoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFzc29jaWF0ZVB1YmxpY0lwQWRkcmVzcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIGF2YWlsYWJpbGl0eV96b25lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hdmFpbGFiaWxpdHlab25lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBlYnNfb3B0aW1pemVkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZWJzT3B0aW1pemVkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgaWFtX2luc3RhbmNlX3Byb2ZpbGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlhbUluc3RhbmNlUHJvZmlsZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaWFtX2luc3RhbmNlX3Byb2ZpbGVfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pYW1JbnN0YW5jZVByb2ZpbGVBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGluc3RhbmNlX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAga2V5X25hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmtleU5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1vbml0b3Jpbmc6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tb25pdG9yaW5nKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgcGxhY2VtZW50X2dyb3VwOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wbGFjZW1lbnRHcm91cCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcGxhY2VtZW50X3RlbmFuY3k6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnBsYWNlbWVudFRlbmFuY3kpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNwb3RfcHJpY2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNwb3RQcmljZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc3VibmV0X2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zdWJuZXRJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdGFnczoge1xuICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHN0cnVjdCEudGFncyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgIH0sXG4gICAgdXNlcl9kYXRhOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS51c2VyRGF0YSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdnBjX3NlY3VyaXR5X2dyb3VwX2lkczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnZwY1NlY3VyaXR5R3JvdXBJZHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgICB3ZWlnaHRlZF9jYXBhY2l0eToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0ZWRDYXBhY2l0eSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZWJzX2Jsb2NrX2RldmljZToge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woc3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FYnNCbG9ja0RldmljZVRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLmVic0Jsb2NrRGV2aWNlKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVic0Jsb2NrRGV2aWNlTGlzdFwiLFxuICAgIH0sXG4gICAgZXBoZW1lcmFsX2Jsb2NrX2RldmljZToge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woc3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FcGhlbWVyYWxCbG9ja0RldmljZVRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLmVwaGVtZXJhbEJsb2NrRGV2aWNlKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVwaGVtZXJhbEJsb2NrRGV2aWNlTGlzdFwiLFxuICAgIH0sXG4gICAgcm9vdF9ibG9ja19kZXZpY2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKHNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uUm9vdEJsb2NrRGV2aWNlVG9IY2xUZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEucm9vdEJsb2NrRGV2aWNlKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvblJvb3RCbG9ja0RldmljZUxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FtaSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hbWkgPSB0aGlzLl9hbWk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzID0gdGhpcy5fYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXZhaWxhYmlsaXR5Wm9uZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdmFpbGFiaWxpdHlab25lID0gdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Vic09wdGltaXplZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lYnNPcHRpbWl6ZWQgPSB0aGlzLl9lYnNPcHRpbWl6ZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pYW1JbnN0YW5jZVByb2ZpbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaWFtSW5zdGFuY2VQcm9maWxlID0gdGhpcy5faWFtSW5zdGFuY2VQcm9maWxlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faWFtSW5zdGFuY2VQcm9maWxlQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlhbUluc3RhbmNlUHJvZmlsZUFybiA9IHRoaXMuX2lhbUluc3RhbmNlUHJvZmlsZUFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnN0YW5jZVR5cGUgPSB0aGlzLl9pbnN0YW5jZVR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9rZXlOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmtleU5hbWUgPSB0aGlzLl9rZXlOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbW9uaXRvcmluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tb25pdG9yaW5nID0gdGhpcy5fbW9uaXRvcmluZztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BsYWNlbWVudEdyb3VwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBsYWNlbWVudEdyb3VwID0gdGhpcy5fcGxhY2VtZW50R3JvdXA7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wbGFjZW1lbnRUZW5hbmN5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBsYWNlbWVudFRlbmFuY3kgPSB0aGlzLl9wbGFjZW1lbnRUZW5hbmN5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3BvdFByaWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNwb3RQcmljZSA9IHRoaXMuX3Nwb3RQcmljZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N1Ym5ldElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN1Ym5ldElkID0gdGhpcy5fc3VibmV0SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YWdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhZ3MgPSB0aGlzLl90YWdzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlckRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXNlckRhdGEgPSB0aGlzLl91c2VyRGF0YTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudnBjU2VjdXJpdHlHcm91cElkcyA9IHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl93ZWlnaHRlZENhcGFjaXR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LndlaWdodGVkQ2FwYWNpdHkgPSB0aGlzLl93ZWlnaHRlZENhcGFjaXR5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fZWJzQmxvY2tEZXZpY2U/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZWJzQmxvY2tEZXZpY2UgPSB0aGlzLl9lYnNCbG9ja0RldmljZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VwaGVtZXJhbEJsb2NrRGV2aWNlPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVwaGVtZXJhbEJsb2NrRGV2aWNlID0gdGhpcy5fZXBoZW1lcmFsQmxvY2tEZXZpY2U/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yb290QmxvY2tEZXZpY2U/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucm9vdEJsb2NrRGV2aWNlID0gdGhpcy5fcm9vdEJsb2NrRGV2aWNlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYW1pID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Vic09wdGltaXplZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lhbUluc3RhbmNlUHJvZmlsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lhbUluc3RhbmNlUHJvZmlsZUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2tleU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tb25pdG9yaW5nID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGxhY2VtZW50R3JvdXAgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wbGFjZW1lbnRUZW5hbmN5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3BvdFByaWNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3VibmV0SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXNlckRhdGEgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92cGNTZWN1cml0eUdyb3VwSWRzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fd2VpZ2h0ZWRDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Vic0Jsb2NrRGV2aWNlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lcGhlbWVyYWxCbG9ja0RldmljZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcm9vdEJsb2NrRGV2aWNlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYW1pID0gdmFsdWUuYW1pO1xuICAgICAgdGhpcy5fYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzID0gdmFsdWUuYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzO1xuICAgICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZSA9IHZhbHVlLmF2YWlsYWJpbGl0eVpvbmU7XG4gICAgICB0aGlzLl9lYnNPcHRpbWl6ZWQgPSB2YWx1ZS5lYnNPcHRpbWl6ZWQ7XG4gICAgICB0aGlzLl9pYW1JbnN0YW5jZVByb2ZpbGUgPSB2YWx1ZS5pYW1JbnN0YW5jZVByb2ZpbGU7XG4gICAgICB0aGlzLl9pYW1JbnN0YW5jZVByb2ZpbGVBcm4gPSB2YWx1ZS5pYW1JbnN0YW5jZVByb2ZpbGVBcm47XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB2YWx1ZS5pbnN0YW5jZVR5cGU7XG4gICAgICB0aGlzLl9rZXlOYW1lID0gdmFsdWUua2V5TmFtZTtcbiAgICAgIHRoaXMuX21vbml0b3JpbmcgPSB2YWx1ZS5tb25pdG9yaW5nO1xuICAgICAgdGhpcy5fcGxhY2VtZW50R3JvdXAgPSB2YWx1ZS5wbGFjZW1lbnRHcm91cDtcbiAgICAgIHRoaXMuX3BsYWNlbWVudFRlbmFuY3kgPSB2YWx1ZS5wbGFjZW1lbnRUZW5hbmN5O1xuICAgICAgdGhpcy5fc3BvdFByaWNlID0gdmFsdWUuc3BvdFByaWNlO1xuICAgICAgdGhpcy5fc3VibmV0SWQgPSB2YWx1ZS5zdWJuZXRJZDtcbiAgICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZS50YWdzO1xuICAgICAgdGhpcy5fdXNlckRhdGEgPSB2YWx1ZS51c2VyRGF0YTtcbiAgICAgIHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHMgPSB2YWx1ZS52cGNTZWN1cml0eUdyb3VwSWRzO1xuICAgICAgdGhpcy5fd2VpZ2h0ZWRDYXBhY2l0eSA9IHZhbHVlLndlaWdodGVkQ2FwYWNpdHk7XG4gICAgICB0aGlzLl9lYnNCbG9ja0RldmljZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZWJzQmxvY2tEZXZpY2U7XG4gICAgICB0aGlzLl9lcGhlbWVyYWxCbG9ja0RldmljZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZXBoZW1lcmFsQmxvY2tEZXZpY2U7XG4gICAgICB0aGlzLl9yb290QmxvY2tEZXZpY2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnJvb3RCbG9ja0RldmljZTtcbiAgICB9XG4gIH1cblxuICAvLyBhbWkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYW1pPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhbWkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbWknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFtaSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYW1pID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFtaUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbWk7XG4gIH1cblxuICAvLyBhc3NvY2lhdGVfcHVibGljX2lwX2FkZHJlc3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXNzb2NpYXRlX3B1YmxpY19pcF9hZGRyZXNzJyk7XG4gIH1cbiAgcHVibGljIHNldCBhc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3ModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2Fzc29jaWF0ZVB1YmxpY0lwQWRkcmVzcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFzc29jaWF0ZVB1YmxpY0lwQWRkcmVzcygpIHtcbiAgICB0aGlzLl9hc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFzc29jaWF0ZVB1YmxpY0lwQWRkcmVzc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3M7XG4gIH1cblxuICAvLyBhdmFpbGFiaWxpdHlfem9uZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F2YWlsYWJpbGl0eVpvbmU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF2YWlsYWJpbGl0eVpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdmFpbGFiaWxpdHlfem9uZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXZhaWxhYmlsaXR5Wm9uZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF2YWlsYWJpbGl0eVpvbmUoKSB7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdmFpbGFiaWxpdHlab25lO1xuICB9XG5cbiAgLy8gZWJzX29wdGltaXplZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lYnNPcHRpbWl6ZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVic09wdGltaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlYnNfb3B0aW1pemVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBlYnNPcHRpbWl6ZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2Vic09wdGltaXplZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVic09wdGltaXplZCgpIHtcbiAgICB0aGlzLl9lYnNPcHRpbWl6ZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVic09wdGltaXplZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lYnNPcHRpbWl6ZWQ7XG4gIH1cblxuICAvLyBpYW1faW5zdGFuY2VfcHJvZmlsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pYW1JbnN0YW5jZVByb2ZpbGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlhbUluc3RhbmNlUHJvZmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lhbV9pbnN0YW5jZV9wcm9maWxlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpYW1JbnN0YW5jZVByb2ZpbGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lhbUluc3RhbmNlUHJvZmlsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElhbUluc3RhbmNlUHJvZmlsZSgpIHtcbiAgICB0aGlzLl9pYW1JbnN0YW5jZVByb2ZpbGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlhbUluc3RhbmNlUHJvZmlsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pYW1JbnN0YW5jZVByb2ZpbGU7XG4gIH1cblxuICAvLyBpYW1faW5zdGFuY2VfcHJvZmlsZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWFtSW5zdGFuY2VQcm9maWxlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpYW1JbnN0YW5jZVByb2ZpbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpYW1faW5zdGFuY2VfcHJvZmlsZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlhbUluc3RhbmNlUHJvZmlsZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWFtSW5zdGFuY2VQcm9maWxlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWFtSW5zdGFuY2VQcm9maWxlQXJuKCkge1xuICAgIHRoaXMuX2lhbUluc3RhbmNlUHJvZmlsZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWFtSW5zdGFuY2VQcm9maWxlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lhbUluc3RhbmNlUHJvZmlsZUFybjtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW5zdGFuY2VUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VUeXBlO1xuICB9XG5cbiAgLy8ga2V5X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rZXlOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrZXlOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGtleU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2tleU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLZXlOYW1lKCkge1xuICAgIHRoaXMuX2tleU5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtleU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5TmFtZTtcbiAgfVxuXG4gIC8vIG1vbml0b3JpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbW9uaXRvcmluZz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgbW9uaXRvcmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdtb25pdG9yaW5nJyk7XG4gIH1cbiAgcHVibGljIHNldCBtb25pdG9yaW5nKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9tb25pdG9yaW5nID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TW9uaXRvcmluZygpIHtcbiAgICB0aGlzLl9tb25pdG9yaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtb25pdG9yaW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vbml0b3Jpbmc7XG4gIH1cblxuICAvLyBwbGFjZW1lbnRfZ3JvdXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wbGFjZW1lbnRHcm91cD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGxhY2VtZW50R3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwbGFjZW1lbnRfZ3JvdXAnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBsYWNlbWVudEdyb3VwKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZW1lbnRHcm91cCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBsYWNlbWVudEdyb3VwKCkge1xuICAgIHRoaXMuX3BsYWNlbWVudEdyb3VwID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwbGFjZW1lbnRHcm91cElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZW1lbnRHcm91cDtcbiAgfVxuXG4gIC8vIHBsYWNlbWVudF90ZW5hbmN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BsYWNlbWVudFRlbmFuY3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBsYWNlbWVudFRlbmFuY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwbGFjZW1lbnRfdGVuYW5jeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGxhY2VtZW50VGVuYW5jeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2VtZW50VGVuYW5jeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBsYWNlbWVudFRlbmFuY3koKSB7XG4gICAgdGhpcy5fcGxhY2VtZW50VGVuYW5jeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGxhY2VtZW50VGVuYW5jeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZW1lbnRUZW5hbmN5O1xuICB9XG5cbiAgLy8gc3BvdF9wcmljZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zcG90UHJpY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNwb3RQcmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Nwb3RfcHJpY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNwb3RQcmljZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3BvdFByaWNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3BvdFByaWNlKCkge1xuICAgIHRoaXMuX3Nwb3RQcmljZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3BvdFByaWNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nwb3RQcmljZTtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1Ym5ldElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdWJuZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N1Ym5ldF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VibmV0SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N1Ym5ldElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3VibmV0SWQoKSB7XG4gICAgdGhpcy5fc3VibmV0SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1Ym5ldElkO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB1c2VyX2RhdGEgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlckRhdGE/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVzZXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9kYXRhJyk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VyRGF0YSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlckRhdGEgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVc2VyRGF0YSgpIHtcbiAgICB0aGlzLl91c2VyRGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlckRhdGFJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlckRhdGE7XG4gIH1cblxuICAvLyB2cGNfc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdnBjU2VjdXJpdHlHcm91cElkcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB2cGNTZWN1cml0eUdyb3VwSWRzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCd2cGNfc2VjdXJpdHlfZ3JvdXBfaWRzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgdnBjU2VjdXJpdHlHcm91cElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl92cGNTZWN1cml0eUdyb3VwSWRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VnBjU2VjdXJpdHlHcm91cElkcygpIHtcbiAgICB0aGlzLl92cGNTZWN1cml0eUdyb3VwSWRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cGNTZWN1cml0eUdyb3VwSWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHM7XG4gIH1cblxuICAvLyB3ZWlnaHRlZF9jYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93ZWlnaHRlZENhcGFjaXR5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB3ZWlnaHRlZENhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnd2VpZ2h0ZWRfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHdlaWdodGVkQ2FwYWNpdHkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3dlaWdodGVkQ2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXZWlnaHRlZENhcGFjaXR5KCkge1xuICAgIHRoaXMuX3dlaWdodGVkQ2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdlaWdodGVkQ2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2VpZ2h0ZWRDYXBhY2l0eTtcbiAgfVxuXG4gIC8vIGVic19ibG9ja19kZXZpY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWJzQmxvY2tEZXZpY2UgPSBuZXcgU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FYnNCbG9ja0RldmljZUxpc3QodGhpcywgXCJlYnNfYmxvY2tfZGV2aWNlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGVic0Jsb2NrRGV2aWNlKCkge1xuICAgIHJldHVybiB0aGlzLl9lYnNCbG9ja0RldmljZTtcbiAgfVxuICBwdWJsaWMgcHV0RWJzQmxvY2tEZXZpY2UodmFsdWU6IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uRWJzQmxvY2tEZXZpY2VbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZWJzQmxvY2tEZXZpY2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVic0Jsb2NrRGV2aWNlKCkge1xuICAgIHRoaXMuX2Vic0Jsb2NrRGV2aWNlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVic0Jsb2NrRGV2aWNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vic0Jsb2NrRGV2aWNlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBlcGhlbWVyYWxfYmxvY2tfZGV2aWNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VwaGVtZXJhbEJsb2NrRGV2aWNlID0gbmV3IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uRXBoZW1lcmFsQmxvY2tEZXZpY2VMaXN0KHRoaXMsIFwiZXBoZW1lcmFsX2Jsb2NrX2RldmljZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBlcGhlbWVyYWxCbG9ja0RldmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXBoZW1lcmFsQmxvY2tEZXZpY2U7XG4gIH1cbiAgcHVibGljIHB1dEVwaGVtZXJhbEJsb2NrRGV2aWNlKHZhbHVlOiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVwaGVtZXJhbEJsb2NrRGV2aWNlW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VwaGVtZXJhbEJsb2NrRGV2aWNlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFcGhlbWVyYWxCbG9ja0RldmljZSgpIHtcbiAgICB0aGlzLl9lcGhlbWVyYWxCbG9ja0RldmljZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlcGhlbWVyYWxCbG9ja0RldmljZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lcGhlbWVyYWxCbG9ja0RldmljZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcm9vdF9ibG9ja19kZXZpY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcm9vdEJsb2NrRGV2aWNlID0gbmV3IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uUm9vdEJsb2NrRGV2aWNlTGlzdCh0aGlzLCBcInJvb3RfYmxvY2tfZGV2aWNlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHJvb3RCbG9ja0RldmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdEJsb2NrRGV2aWNlO1xuICB9XG4gIHB1YmxpYyBwdXRSb290QmxvY2tEZXZpY2UodmFsdWU6IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uUm9vdEJsb2NrRGV2aWNlW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3Jvb3RCbG9ja0RldmljZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Um9vdEJsb2NrRGV2aWNlKCkge1xuICAgIHRoaXMuX3Jvb3RCbG9ja0RldmljZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb290QmxvY2tEZXZpY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdEJsb2NrRGV2aWNlLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QjaWQgU3BvdEZsZWV0UmVxdWVzdCNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I25hbWUgU3BvdEZsZWV0UmVxdWVzdCNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QjdmVyc2lvbiBTcG90RmxlZXRSZXF1ZXN0I3ZlcnNpb259XG4gICovXG4gIHJlYWRvbmx5IHZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52ZXJzaW9uKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGlkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdmVyc2lvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudmVyc2lvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ0xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaWQgPSB0aGlzLl9pZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl92ZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZlcnNpb24gPSB0aGlzLl92ZXJzaW9uO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faWQgPSB2YWx1ZS5pZDtcbiAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZS5uYW1lO1xuICAgICAgdGhpcy5fdmVyc2lvbiA9IHZhbHVlLnZlcnNpb247XG4gICAgfVxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lKCkge1xuICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWZXJzaW9uKCkge1xuICAgIHRoaXMuX3ZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdPdmVycmlkZXMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QjYXZhaWxhYmlsaXR5X3pvbmUgU3BvdEZsZWV0UmVxdWVzdCNhdmFpbGFiaWxpdHlfem9uZX1cbiAgKi9cbiAgcmVhZG9ubHkgYXZhaWxhYmlsaXR5Wm9uZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I2luc3RhbmNlX3R5cGUgU3BvdEZsZWV0UmVxdWVzdCNpbnN0YW5jZV90eXBlfVxuICAqL1xuICByZWFkb25seSBpbnN0YW5jZVR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNwcmlvcml0eSBTcG90RmxlZXRSZXF1ZXN0I3ByaW9yaXR5fVxuICAqL1xuICByZWFkb25seSBwcmlvcml0eT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I3Nwb3RfcHJpY2UgU3BvdEZsZWV0UmVxdWVzdCNzcG90X3ByaWNlfVxuICAqL1xuICByZWFkb25seSBzcG90UHJpY2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNzdWJuZXRfaWQgU3BvdEZsZWV0UmVxdWVzdCNzdWJuZXRfaWR9XG4gICovXG4gIHJlYWRvbmx5IHN1Ym5ldElkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3Qjd2VpZ2h0ZWRfY2FwYWNpdHkgU3BvdEZsZWV0UmVxdWVzdCN3ZWlnaHRlZF9jYXBhY2l0eX1cbiAgKi9cbiAgcmVhZG9ubHkgd2VpZ2h0ZWRDYXBhY2l0eT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ092ZXJyaWRlc1RvVGVycmFmb3JtKHN0cnVjdD86IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ092ZXJyaWRlcyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGF2YWlsYWJpbGl0eV96b25lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF2YWlsYWJpbGl0eVpvbmUpLFxuICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICBwcmlvcml0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wcmlvcml0eSksXG4gICAgc3BvdF9wcmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zcG90UHJpY2UpLFxuICAgIHN1Ym5ldF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdWJuZXRJZCksXG4gICAgd2VpZ2h0ZWRfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0ZWRDYXBhY2l0eSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGVzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGVzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGF2YWlsYWJpbGl0eV96b25lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hdmFpbGFiaWxpdHlab25lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpbnN0YW5jZV90eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVR5cGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHByaW9yaXR5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcmlvcml0eSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgc3BvdF9wcmljZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3BvdFByaWNlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzdWJuZXRfaWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN1Ym5ldElkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB3ZWlnaHRlZF9jYXBhY2l0eToge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0ZWRDYXBhY2l0eSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdPdmVycmlkZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGVzIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hdmFpbGFiaWxpdHlab25lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF2YWlsYWJpbGl0eVpvbmUgPSB0aGlzLl9hdmFpbGFiaWxpdHlab25lO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5zdGFuY2VUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmluc3RhbmNlVHlwZSA9IHRoaXMuX2luc3RhbmNlVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByaW9yaXR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByaW9yaXR5ID0gdGhpcy5fcHJpb3JpdHk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zcG90UHJpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3BvdFByaWNlID0gdGhpcy5fc3BvdFByaWNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3VibmV0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3VibmV0SWQgPSB0aGlzLl9zdWJuZXRJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3dlaWdodGVkQ2FwYWNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQud2VpZ2h0ZWRDYXBhY2l0eSA9IHRoaXMuX3dlaWdodGVkQ2FwYWNpdHk7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdPdmVycmlkZXMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByaW9yaXR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3BvdFByaWNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3VibmV0SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl93ZWlnaHRlZENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmUgPSB2YWx1ZS5hdmFpbGFiaWxpdHlab25lO1xuICAgICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdmFsdWUuaW5zdGFuY2VUeXBlO1xuICAgICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZS5wcmlvcml0eTtcbiAgICAgIHRoaXMuX3Nwb3RQcmljZSA9IHZhbHVlLnNwb3RQcmljZTtcbiAgICAgIHRoaXMuX3N1Ym5ldElkID0gdmFsdWUuc3VibmV0SWQ7XG4gICAgICB0aGlzLl93ZWlnaHRlZENhcGFjaXR5ID0gdmFsdWUud2VpZ2h0ZWRDYXBhY2l0eTtcbiAgICB9XG4gIH1cblxuICAvLyBhdmFpbGFiaWxpdHlfem9uZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdmFpbGFiaWxpdHlab25lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXZhaWxhYmlsaXR5X3pvbmUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF2YWlsYWJpbGl0eVpvbmUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdmFpbGFiaWxpdHlab25lKCkge1xuICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF2YWlsYWJpbGl0eVpvbmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlVHlwZSgpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVR5cGU7XG4gIH1cblxuICAvLyBwcmlvcml0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByaW9yaXR5PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ByaW9yaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmlvcml0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmlvcml0eSgpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJpb3JpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gIH1cblxuICAvLyBzcG90X3ByaWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3BvdFByaWNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzcG90UHJpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzcG90X3ByaWNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzcG90UHJpY2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Nwb3RQcmljZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNwb3RQcmljZSgpIHtcbiAgICB0aGlzLl9zcG90UHJpY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNwb3RQcmljZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcG90UHJpY2U7XG4gIH1cblxuICAvLyBzdWJuZXRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdWJuZXRJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3VibmV0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdWJuZXRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1Ym5ldElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdWJuZXRJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1Ym5ldElkKCkge1xuICAgIHRoaXMuX3N1Ym5ldElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJuZXRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJuZXRJZDtcbiAgfVxuXG4gIC8vIHdlaWdodGVkX2NhcGFjaXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd2VpZ2h0ZWRDYXBhY2l0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgd2VpZ2h0ZWRDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3dlaWdodGVkX2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCB3ZWlnaHRlZENhcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl93ZWlnaHRlZENhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2VpZ2h0ZWRDYXBhY2l0eSgpIHtcbiAgICB0aGlzLl93ZWlnaHRlZENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3ZWlnaHRlZENhcGFjaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlaWdodGVkQ2FwYWNpdHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ092ZXJyaWRlc0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ092ZXJyaWRlc1tdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdPdmVycmlkZXNPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgU3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGVzT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnIHtcbiAgLyoqXG4gICogbGF1bmNoX3RlbXBsYXRlX3NwZWNpZmljYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNsYXVuY2hfdGVtcGxhdGVfc3BlY2lmaWNhdGlvbiBTcG90RmxlZXRSZXF1ZXN0I2xhdW5jaF90ZW1wbGF0ZV9zcGVjaWZpY2F0aW9ufVxuICAqL1xuICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb246IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ0xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbjtcbiAgLyoqXG4gICogb3ZlcnJpZGVzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3Qjb3ZlcnJpZGVzIFNwb3RGbGVldFJlcXVlc3Qjb3ZlcnJpZGVzfVxuICAqL1xuICByZWFkb25seSBvdmVycmlkZXM/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdPdmVycmlkZXNbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGF1bmNoX3RlbXBsYXRlX3NwZWNpZmljYXRpb246IHNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ0xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEubGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uKSxcbiAgICBvdmVycmlkZXM6IGNka3RmLmxpc3RNYXBwZXIoc3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGVzVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEub3ZlcnJpZGVzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWcgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbGF1bmNoX3RlbXBsYXRlX3NwZWNpZmljYXRpb246IHtcbiAgICAgIHZhbHVlOiBzcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ0xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbkxpc3RcIixcbiAgICB9LFxuICAgIG92ZXJyaWRlczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woc3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGVzVG9IY2xUZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEub3ZlcnJpZGVzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdPdmVycmlkZXNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWcgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24gPSB0aGlzLl9sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vdmVycmlkZXM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3ZlcnJpZGVzID0gdGhpcy5fb3ZlcnJpZGVzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb3ZlcnJpZGVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb247XG4gICAgICB0aGlzLl9vdmVycmlkZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLm92ZXJyaWRlcztcbiAgICB9XG4gIH1cblxuICAvLyBsYXVuY2hfdGVtcGxhdGVfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24gPSBuZXcgU3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwibGF1bmNoX3RlbXBsYXRlX3NwZWNpZmljYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb247XG4gIH1cbiAgcHVibGljIHB1dExhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbih2YWx1ZTogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX292ZXJyaWRlcyA9IG5ldyBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdPdmVycmlkZXNMaXN0KHRoaXMsIFwib3ZlcnJpZGVzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG92ZXJyaWRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcnJpZGVzO1xuICB9XG4gIHB1YmxpYyBwdXRPdmVycmlkZXModmFsdWU6IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ092ZXJyaWRlc1tdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9vdmVycmlkZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE92ZXJyaWRlcygpIHtcbiAgICB0aGlzLl9vdmVycmlkZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJyaWRlcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzQ2FwYWNpdHlSZWJhbGFuY2Uge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QjcmVwbGFjZW1lbnRfc3RyYXRlZ3kgU3BvdEZsZWV0UmVxdWVzdCNyZXBsYWNlbWVudF9zdHJhdGVneX1cbiAgKi9cbiAgcmVhZG9ubHkgcmVwbGFjZW1lbnRTdHJhdGVneT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzQ2FwYWNpdHlSZWJhbGFuY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc0NhcGFjaXR5UmViYWxhbmNlT3V0cHV0UmVmZXJlbmNlIHwgU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXBsYWNlbWVudF9zdHJhdGVneTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXBsYWNlbWVudFN0cmF0ZWd5KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc0NhcGFjaXR5UmViYWxhbmNlVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZU91dHB1dFJlZmVyZW5jZSB8IFNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzQ2FwYWNpdHlSZWJhbGFuY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHJlcGxhY2VtZW50X3N0cmF0ZWd5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZXBsYWNlbWVudFN0cmF0ZWd5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzQ2FwYWNpdHlSZWJhbGFuY2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzQ2FwYWNpdHlSZWJhbGFuY2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3JlcGxhY2VtZW50U3RyYXRlZ3kgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVwbGFjZW1lbnRTdHJhdGVneSA9IHRoaXMuX3JlcGxhY2VtZW50U3RyYXRlZ3k7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc0NhcGFjaXR5UmViYWxhbmNlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVwbGFjZW1lbnRTdHJhdGVneSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVwbGFjZW1lbnRTdHJhdGVneSA9IHZhbHVlLnJlcGxhY2VtZW50U3RyYXRlZ3k7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVwbGFjZW1lbnRfc3RyYXRlZ3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVwbGFjZW1lbnRTdHJhdGVneT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVwbGFjZW1lbnRTdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcGxhY2VtZW50X3N0cmF0ZWd5Jyk7XG4gIH1cbiAgcHVibGljIHNldCByZXBsYWNlbWVudFN0cmF0ZWd5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXBsYWNlbWVudFN0cmF0ZWd5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVwbGFjZW1lbnRTdHJhdGVneSgpIHtcbiAgICB0aGlzLl9yZXBsYWNlbWVudFN0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXBsYWNlbWVudFN0cmF0ZWd5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VtZW50U3RyYXRlZ3k7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXMge1xuICAvKipcbiAgKiBjYXBhY2l0eV9yZWJhbGFuY2UgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNjYXBhY2l0eV9yZWJhbGFuY2UgU3BvdEZsZWV0UmVxdWVzdCNjYXBhY2l0eV9yZWJhbGFuY2V9XG4gICovXG4gIHJlYWRvbmx5IGNhcGFjaXR5UmViYWxhbmNlPzogU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzVG9UZXJyYWZvcm0oc3RydWN0PzogU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNPdXRwdXRSZWZlcmVuY2UgfCBTcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjYXBhY2l0eV9yZWJhbGFuY2U6IHNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzQ2FwYWNpdHlSZWJhbGFuY2VUb1RlcnJhZm9ybShzdHJ1Y3QhLmNhcGFjaXR5UmViYWxhbmNlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzT3V0cHV0UmVmZXJlbmNlIHwgU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNhcGFjaXR5X3JlYmFsYW5jZToge1xuICAgICAgdmFsdWU6IHNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzQ2FwYWNpdHlSZWJhbGFuY2VUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNhcGFjaXR5UmViYWxhbmNlKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZUxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jYXBhY2l0eVJlYmFsYW5jZT8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jYXBhY2l0eVJlYmFsYW5jZSA9IHRoaXMuX2NhcGFjaXR5UmViYWxhbmNlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jYXBhY2l0eVJlYmFsYW5jZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jYXBhY2l0eVJlYmFsYW5jZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY2FwYWNpdHlSZWJhbGFuY2U7XG4gICAgfVxuICB9XG5cbiAgLy8gY2FwYWNpdHlfcmViYWxhbmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NhcGFjaXR5UmViYWxhbmNlID0gbmV3IFNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzQ2FwYWNpdHlSZWJhbGFuY2VPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJjYXBhY2l0eV9yZWJhbGFuY2VcIik7XG4gIHB1YmxpYyBnZXQgY2FwYWNpdHlSZWJhbGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5UmViYWxhbmNlO1xuICB9XG4gIHB1YmxpYyBwdXRDYXBhY2l0eVJlYmFsYW5jZSh2YWx1ZTogU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZSkge1xuICAgIHRoaXMuX2NhcGFjaXR5UmViYWxhbmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYXBhY2l0eVJlYmFsYW5jZSgpIHtcbiAgICB0aGlzLl9jYXBhY2l0eVJlYmFsYW5jZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXBhY2l0eVJlYmFsYW5jZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eVJlYmFsYW5jZS5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNwb3RGbGVldFJlcXVlc3RUaW1lb3V0cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3Nwb3RfZmxlZXRfcmVxdWVzdCNjcmVhdGUgU3BvdEZsZWV0UmVxdWVzdCNjcmVhdGV9XG4gICovXG4gIHJlYWRvbmx5IGNyZWF0ZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I2RlbGV0ZSBTcG90RmxlZXRSZXF1ZXN0I2RlbGV0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgZGVsZXRlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BvdEZsZWV0UmVxdWVzdFRpbWVvdXRzVG9UZXJyYWZvcm0oc3RydWN0PzogU3BvdEZsZWV0UmVxdWVzdFRpbWVvdXRzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNyZWF0ZSksXG4gICAgZGVsZXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3BvdEZsZWV0UmVxdWVzdFRpbWVvdXRzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU3BvdEZsZWV0UmVxdWVzdFRpbWVvdXRzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNyZWF0ZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBkZWxldGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTcG90RmxlZXRSZXF1ZXN0VGltZW91dHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNwb3RGbGVldFJlcXVlc3RUaW1lb3V0cyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3JlYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNyZWF0ZSA9IHRoaXMuX2NyZWF0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlbGV0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWxldGUgPSB0aGlzLl9kZWxldGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTcG90RmxlZXRSZXF1ZXN0VGltZW91dHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3JlYXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlLmNyZWF0ZTtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHZhbHVlLmRlbGV0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBjcmVhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcmVhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlYXRlKCkge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZTtcbiAgfVxuXG4gIC8vIGRlbGV0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxldGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlbGV0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVsZXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWxldGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWxldGUoKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxldGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QgYXdzX3Nwb3RfZmxlZXRfcmVxdWVzdH1cbiovXG5leHBvcnQgY2xhc3MgU3BvdEZsZWV0UmVxdWVzdCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3Nfc3BvdF9mbGVldF9yZXF1ZXN0XCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIFNwb3RGbGVldFJlcXVlc3QgcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgU3BvdEZsZWV0UmVxdWVzdCB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgU3BvdEZsZWV0UmVxdWVzdCB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3BvdF9mbGVldF9yZXF1ZXN0I2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBTcG90RmxlZXRSZXF1ZXN0IHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19zcG90X2ZsZWV0X3JlcXVlc3RcIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zcG90X2ZsZWV0X3JlcXVlc3QgYXdzX3Nwb3RfZmxlZXRfcmVxdWVzdH0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgU3BvdEZsZWV0UmVxdWVzdENvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBTcG90RmxlZXRSZXF1ZXN0Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfc3BvdF9mbGVldF9yZXF1ZXN0JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fYWxsb2NhdGlvblN0cmF0ZWd5ID0gY29uZmlnLmFsbG9jYXRpb25TdHJhdGVneTtcbiAgICB0aGlzLl9leGNlc3NDYXBhY2l0eVRlcm1pbmF0aW9uUG9saWN5ID0gY29uZmlnLmV4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3k7XG4gICAgdGhpcy5fZmxlZXRUeXBlID0gY29uZmlnLmZsZWV0VHlwZTtcbiAgICB0aGlzLl9pYW1GbGVldFJvbGUgPSBjb25maWcuaWFtRmxlZXRSb2xlO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX2luc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VyID0gY29uZmlnLmluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VyO1xuICAgIHRoaXMuX2luc3RhbmNlUG9vbHNUb1VzZUNvdW50ID0gY29uZmlnLmluc3RhbmNlUG9vbHNUb1VzZUNvdW50O1xuICAgIHRoaXMuX2xvYWRCYWxhbmNlcnMgPSBjb25maWcubG9hZEJhbGFuY2VycztcbiAgICB0aGlzLl9vbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneSA9IGNvbmZpZy5vbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneTtcbiAgICB0aGlzLl9vbkRlbWFuZE1heFRvdGFsUHJpY2UgPSBjb25maWcub25EZW1hbmRNYXhUb3RhbFByaWNlO1xuICAgIHRoaXMuX29uRGVtYW5kVGFyZ2V0Q2FwYWNpdHkgPSBjb25maWcub25EZW1hbmRUYXJnZXRDYXBhY2l0eTtcbiAgICB0aGlzLl9yZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzID0gY29uZmlnLnJlcGxhY2VVbmhlYWx0aHlJbnN0YW5jZXM7XG4gICAgdGhpcy5fc3BvdFByaWNlID0gY29uZmlnLnNwb3RQcmljZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3RhcmdldENhcGFjaXR5ID0gY29uZmlnLnRhcmdldENhcGFjaXR5O1xuICAgIHRoaXMuX3RhcmdldEdyb3VwQXJucyA9IGNvbmZpZy50YXJnZXRHcm91cEFybnM7XG4gICAgdGhpcy5fdGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb24gPSBjb25maWcudGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb247XG4gICAgdGhpcy5fdmFsaWRGcm9tID0gY29uZmlnLnZhbGlkRnJvbTtcbiAgICB0aGlzLl92YWxpZFVudGlsID0gY29uZmlnLnZhbGlkVW50aWw7XG4gICAgdGhpcy5fd2FpdEZvckZ1bGZpbGxtZW50ID0gY29uZmlnLndhaXRGb3JGdWxmaWxsbWVudDtcbiAgICB0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcubGF1bmNoU3BlY2lmaWNhdGlvbjtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZUNvbmZpZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmxhdW5jaFRlbXBsYXRlQ29uZmlnO1xuICAgIHRoaXMuX3Nwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzO1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSBjb25maWcudGltZW91dHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFsbG9jYXRpb25fc3RyYXRlZ3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb2NhdGlvblN0cmF0ZWd5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhbGxvY2F0aW9uU3RyYXRlZ3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbGxvY2F0aW9uX3N0cmF0ZWd5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvY2F0aW9uU3RyYXRlZ3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FsbG9jYXRpb25TdHJhdGVneSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG9jYXRpb25TdHJhdGVneSgpIHtcbiAgICB0aGlzLl9hbGxvY2F0aW9uU3RyYXRlZ3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG9jYXRpb25TdHJhdGVneUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvY2F0aW9uU3RyYXRlZ3k7XG4gIH1cblxuICAvLyBjbGllbnRfdG9rZW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbGllbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsaWVudF90b2tlbicpO1xuICB9XG5cbiAgLy8gZXhjZXNzX2NhcGFjaXR5X3Rlcm1pbmF0aW9uX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leGNlc3NDYXBhY2l0eVRlcm1pbmF0aW9uUG9saWN5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBleGNlc3NDYXBhY2l0eVRlcm1pbmF0aW9uUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXhjZXNzX2NhcGFjaXR5X3Rlcm1pbmF0aW9uX3BvbGljeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3koKSB7XG4gICAgdGhpcy5fZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leGNlc3NDYXBhY2l0eVRlcm1pbmF0aW9uUG9saWN5O1xuICB9XG5cbiAgLy8gZmxlZXRfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mbGVldFR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZsZWV0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZsZWV0X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZsZWV0VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmxlZXRUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmxlZXRUeXBlKCkge1xuICAgIHRoaXMuX2ZsZWV0VHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmxlZXRUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZsZWV0VHlwZTtcbiAgfVxuXG4gIC8vIGlhbV9mbGVldF9yb2xlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lhbUZsZWV0Um9sZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWFtRmxlZXRSb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWFtX2ZsZWV0X3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlhbUZsZWV0Um9sZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWFtRmxlZXRSb2xlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlhbUZsZWV0Um9sZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pYW1GbGVldFJvbGU7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9pbnRlcnJ1cHRpb25fYmVoYXZpb3VyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW91cigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2ludGVycnVwdGlvbl9iZWhhdmlvdXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW91ciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VyKCkge1xuICAgIHRoaXMuX2luc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW91cklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW91cjtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3Bvb2xzX3RvX3VzZV9jb3VudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVBvb2xzVG9Vc2VDb3VudD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VQb29sc1RvVXNlQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpbnN0YW5jZV9wb29sc190b191c2VfY291bnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlUG9vbHNUb1VzZUNvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVBvb2xzVG9Vc2VDb3VudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlUG9vbHNUb1VzZUNvdW50KCkge1xuICAgIHRoaXMuX2luc3RhbmNlUG9vbHNUb1VzZUNvdW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVBvb2xzVG9Vc2VDb3VudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVBvb2xzVG9Vc2VDb3VudDtcbiAgfVxuXG4gIC8vIGxvYWRfYmFsYW5jZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9hZEJhbGFuY2Vycz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBsb2FkQmFsYW5jZXJzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdsb2FkX2JhbGFuY2VycycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvYWRCYWxhbmNlcnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvYWRCYWxhbmNlcnMoKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2Vyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2FkQmFsYW5jZXJzO1xuICB9XG5cbiAgLy8gb25fZGVtYW5kX2FsbG9jYXRpb25fc3RyYXRlZ3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb25EZW1hbmRBbGxvY2F0aW9uU3RyYXRlZ3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG9uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb25fZGVtYW5kX2FsbG9jYXRpb25fc3RyYXRlZ3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5KCkge1xuICAgIHRoaXMuX29uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneTtcbiAgfVxuXG4gIC8vIG9uX2RlbWFuZF9tYXhfdG90YWxfcHJpY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb25EZW1hbmRNYXhUb3RhbFByaWNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBvbkRlbWFuZE1heFRvdGFsUHJpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvbl9kZW1hbmRfbWF4X3RvdGFsX3ByaWNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBvbkRlbWFuZE1heFRvdGFsUHJpY2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX29uRGVtYW5kTWF4VG90YWxQcmljZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9uRGVtYW5kTWF4VG90YWxQcmljZSgpIHtcbiAgICB0aGlzLl9vbkRlbWFuZE1heFRvdGFsUHJpY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9uRGVtYW5kTWF4VG90YWxQcmljZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vbkRlbWFuZE1heFRvdGFsUHJpY2U7XG4gIH1cblxuICAvLyBvbl9kZW1hbmRfdGFyZ2V0X2NhcGFjaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29uRGVtYW5kVGFyZ2V0Q2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG9uRGVtYW5kVGFyZ2V0Q2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdvbl9kZW1hbmRfdGFyZ2V0X2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBvbkRlbWFuZFRhcmdldENhcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vbkRlbWFuZFRhcmdldENhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T25EZW1hbmRUYXJnZXRDYXBhY2l0eSgpIHtcbiAgICB0aGlzLl9vbkRlbWFuZFRhcmdldENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvbkRlbWFuZFRhcmdldENhcGFjaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uRGVtYW5kVGFyZ2V0Q2FwYWNpdHk7XG4gIH1cblxuICAvLyByZXBsYWNlX3VuaGVhbHRoeV9pbnN0YW5jZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVwbGFjZVVuaGVhbHRoeUluc3RhbmNlcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVwbGFjZVVuaGVhbHRoeUluc3RhbmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXBsYWNlX3VuaGVhbHRoeV9pbnN0YW5jZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcGxhY2VVbmhlYWx0aHlJbnN0YW5jZXModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3JlcGxhY2VVbmhlYWx0aHlJbnN0YW5jZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzKCkge1xuICAgIHRoaXMuX3JlcGxhY2VVbmhlYWx0aHlJbnN0YW5jZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcGxhY2VVbmhlYWx0aHlJbnN0YW5jZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVwbGFjZVVuaGVhbHRoeUluc3RhbmNlcztcbiAgfVxuXG4gIC8vIHNwb3RfcHJpY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3BvdFByaWNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzcG90UHJpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzcG90X3ByaWNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzcG90UHJpY2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Nwb3RQcmljZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNwb3RQcmljZSgpIHtcbiAgICB0aGlzLl9zcG90UHJpY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNwb3RQcmljZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcG90UHJpY2U7XG4gIH1cblxuICAvLyBzcG90X3JlcXVlc3Rfc3RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzcG90UmVxdWVzdFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3BvdF9yZXF1ZXN0X3N0YXRlJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFncycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzX2FsbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHRhcmdldF9jYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90YXJnZXRDYXBhY2l0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGFyZ2V0Q2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0YXJnZXRfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldENhcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90YXJnZXRDYXBhY2l0eSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRDYXBhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRDYXBhY2l0eTtcbiAgfVxuXG4gIC8vIHRhcmdldF9ncm91cF9hcm5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFyZ2V0R3JvdXBBcm5zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHRhcmdldEdyb3VwQXJucygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndGFyZ2V0X2dyb3VwX2FybnMnKSk7XG4gIH1cbiAgcHVibGljIHNldCB0YXJnZXRHcm91cEFybnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdGFyZ2V0R3JvdXBBcm5zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFyZ2V0R3JvdXBBcm5zKCkge1xuICAgIHRoaXMuX3RhcmdldEdyb3VwQXJucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0R3JvdXBBcm5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldEdyb3VwQXJucztcbiAgfVxuXG4gIC8vIHRlcm1pbmF0ZV9pbnN0YW5jZXNfd2l0aF9leHBpcmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Rlcm1pbmF0ZUluc3RhbmNlc1dpdGhFeHBpcmF0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0ZXJtaW5hdGVJbnN0YW5jZXNXaXRoRXhwaXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd0ZXJtaW5hdGVfaW5zdGFuY2VzX3dpdGhfZXhwaXJhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3Rlcm1pbmF0ZUluc3RhbmNlc1dpdGhFeHBpcmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb24oKSB7XG4gICAgdGhpcy5fdGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRlcm1pbmF0ZUluc3RhbmNlc1dpdGhFeHBpcmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rlcm1pbmF0ZUluc3RhbmNlc1dpdGhFeHBpcmF0aW9uO1xuICB9XG5cbiAgLy8gdmFsaWRfZnJvbSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92YWxpZEZyb20/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZhbGlkRnJvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbGlkX2Zyb20nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbGlkRnJvbSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsaWRGcm9tID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmFsaWRGcm9tKCkge1xuICAgIHRoaXMuX3ZhbGlkRnJvbSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsaWRGcm9tSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkRnJvbTtcbiAgfVxuXG4gIC8vIHZhbGlkX3VudGlsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZhbGlkVW50aWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZhbGlkVW50aWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWxpZF91bnRpbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsaWRVbnRpbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsaWRVbnRpbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZhbGlkVW50aWwoKSB7XG4gICAgdGhpcy5fdmFsaWRVbnRpbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsaWRVbnRpbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZFVudGlsO1xuICB9XG5cbiAgLy8gd2FpdF9mb3JfZnVsZmlsbG1lbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd2FpdEZvckZ1bGZpbGxtZW50PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB3YWl0Rm9yRnVsZmlsbG1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnd2FpdF9mb3JfZnVsZmlsbG1lbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHdhaXRGb3JGdWxmaWxsbWVudCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fd2FpdEZvckZ1bGZpbGxtZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2FpdEZvckZ1bGZpbGxtZW50KCkge1xuICAgIHRoaXMuX3dhaXRGb3JGdWxmaWxsbWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2FpdEZvckZ1bGZpbGxtZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dhaXRGb3JGdWxmaWxsbWVudDtcbiAgfVxuXG4gIC8vIGxhdW5jaF9zcGVjaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhdW5jaFNwZWNpZmljYXRpb24gPSBuZXcgU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25MaXN0KHRoaXMsIFwibGF1bmNoX3NwZWNpZmljYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgbGF1bmNoU3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoU3BlY2lmaWNhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0TGF1bmNoU3BlY2lmaWNhdGlvbih2YWx1ZTogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fbGF1bmNoU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGF1bmNoU3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhdW5jaFNwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbGF1bmNoX3RlbXBsYXRlX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYXVuY2hUZW1wbGF0ZUNvbmZpZyA9IG5ldyBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMaXN0KHRoaXMsIFwibGF1bmNoX3RlbXBsYXRlX2NvbmZpZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZUNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGVDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dExhdW5jaFRlbXBsYXRlQ29uZmlnKHZhbHVlOiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhdW5jaFRlbXBsYXRlQ29uZmlnKCkge1xuICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaFRlbXBsYXRlQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzcG90X21haW50ZW5hbmNlX3N0cmF0ZWdpZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcyA9IG5ldyBTcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInNwb3RfbWFpbnRlbmFuY2Vfc3RyYXRlZ2llc1wiKTtcbiAgcHVibGljIGdldCBzcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9zcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzO1xuICB9XG4gIHB1YmxpYyBwdXRTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzKHZhbHVlOiBTcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcykge1xuICAgIHRoaXMuX3Nwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXMoKSB7XG4gICAgdGhpcy5fc3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRpbWVvdXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXRzID0gbmV3IFNwb3RGbGVldFJlcXVlc3RUaW1lb3V0c091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInRpbWVvdXRzXCIpO1xuICBwdWJsaWMgZ2V0IHRpbWVvdXRzKCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cztcbiAgfVxuICBwdWJsaWMgcHV0VGltZW91dHModmFsdWU6IFNwb3RGbGVldFJlcXVlc3RUaW1lb3V0cykge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0cygpIHtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhbGxvY2F0aW9uX3N0cmF0ZWd5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hbGxvY2F0aW9uU3RyYXRlZ3kpLFxuICAgICAgZXhjZXNzX2NhcGFjaXR5X3Rlcm1pbmF0aW9uX3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeSksXG4gICAgICBmbGVldF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9mbGVldFR5cGUpLFxuICAgICAgaWFtX2ZsZWV0X3JvbGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lhbUZsZWV0Um9sZSksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgaW5zdGFuY2VfaW50ZXJydXB0aW9uX2JlaGF2aW91cjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXIpLFxuICAgICAgaW5zdGFuY2VfcG9vbHNfdG9fdXNlX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9pbnN0YW5jZVBvb2xzVG9Vc2VDb3VudCksXG4gICAgICBsb2FkX2JhbGFuY2VyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2xvYWRCYWxhbmNlcnMpLFxuICAgICAgb25fZGVtYW5kX2FsbG9jYXRpb25fc3RyYXRlZ3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX29uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5KSxcbiAgICAgIG9uX2RlbWFuZF9tYXhfdG90YWxfcHJpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX29uRGVtYW5kTWF4VG90YWxQcmljZSksXG4gICAgICBvbl9kZW1hbmRfdGFyZ2V0X2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9vbkRlbWFuZFRhcmdldENhcGFjaXR5KSxcbiAgICAgIHJlcGxhY2VfdW5oZWFsdGh5X2luc3RhbmNlczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3JlcGxhY2VVbmhlYWx0aHlJbnN0YW5jZXMpLFxuICAgICAgc3BvdF9wcmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3BvdFByaWNlKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdGFyZ2V0X2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90YXJnZXRDYXBhY2l0eSksXG4gICAgICB0YXJnZXRfZ3JvdXBfYXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3RhcmdldEdyb3VwQXJucyksXG4gICAgICB0ZXJtaW5hdGVfaW5zdGFuY2VzX3dpdGhfZXhwaXJhdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3Rlcm1pbmF0ZUluc3RhbmNlc1dpdGhFeHBpcmF0aW9uKSxcbiAgICAgIHZhbGlkX2Zyb206IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ZhbGlkRnJvbSksXG4gICAgICB2YWxpZF91bnRpbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdmFsaWRVbnRpbCksXG4gICAgICB3YWl0X2Zvcl9mdWxmaWxsbWVudDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3dhaXRGb3JGdWxmaWxsbWVudCksXG4gICAgICBsYXVuY2hfc3BlY2lmaWNhdGlvbjogY2RrdGYubGlzdE1hcHBlcihzcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgbGF1bmNoX3RlbXBsYXRlX2NvbmZpZzogY2RrdGYubGlzdE1hcHBlcihzcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdUb1RlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fbGF1bmNoVGVtcGxhdGVDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBzcG90X21haW50ZW5hbmNlX3N0cmF0ZWdpZXM6IHNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzVG9UZXJyYWZvcm0odGhpcy5fc3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHRpbWVvdXRzOiBzcG90RmxlZXRSZXF1ZXN0VGltZW91dHNUb1RlcnJhZm9ybSh0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGFsbG9jYXRpb25fc3RyYXRlZ3k6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2FsbG9jYXRpb25TdHJhdGVneSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGV4Y2Vzc19jYXBhY2l0eV90ZXJtaW5hdGlvbl9wb2xpY3k6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2V4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3kpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBmbGVldF90eXBlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9mbGVldFR5cGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpYW1fZmxlZXRfcm9sZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWFtRmxlZXRSb2xlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaW5zdGFuY2VfaW50ZXJydXB0aW9uX2JlaGF2aW91cjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXIpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpbnN0YW5jZV9wb29sc190b191c2VfY291bnQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlUG9vbHNUb1VzZUNvdW50KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgbG9hZF9iYWxhbmNlcnM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9sb2FkQmFsYW5jZXJzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIG9uX2RlbWFuZF9hbGxvY2F0aW9uX3N0cmF0ZWd5OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9vbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG9uX2RlbWFuZF9tYXhfdG90YWxfcHJpY2U6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX29uRGVtYW5kTWF4VG90YWxQcmljZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG9uX2RlbWFuZF90YXJnZXRfY2FwYWNpdHk6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX29uRGVtYW5kVGFyZ2V0Q2FwYWNpdHkpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICByZXBsYWNlX3VuaGVhbHRoeV9pbnN0YW5jZXM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9yZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHNwb3RfcHJpY2U6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3Nwb3RQcmljZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHRhZ3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0YWdzX2FsbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHRhcmdldF9jYXBhY2l0eToge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fdGFyZ2V0Q2FwYWNpdHkpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICB0YXJnZXRfZ3JvdXBfYXJuczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3RhcmdldEdyb3VwQXJucyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICB0ZXJtaW5hdGVfaW5zdGFuY2VzX3dpdGhfZXhwaXJhdGlvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX3Rlcm1pbmF0ZUluc3RhbmNlc1dpdGhFeHBpcmF0aW9uKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHZhbGlkX2Zyb206IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3ZhbGlkRnJvbSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHZhbGlkX3VudGlsOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl92YWxpZFVudGlsKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgd2FpdF9mb3JfZnVsZmlsbG1lbnQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl93YWl0Rm9yRnVsZmlsbG1lbnQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgbGF1bmNoX3NwZWNpZmljYXRpb246IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woc3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25Ub0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fbGF1bmNoU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkxpc3RcIixcbiAgICAgIH0sXG4gICAgICBsYXVuY2hfdGVtcGxhdGVfY29uZmlnOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKHNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ1RvSGNsVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9sYXVuY2hUZW1wbGF0ZUNvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgc3BvdF9tYWludGVuYW5jZV9zdHJhdGVnaWVzOiB7XG4gICAgICAgIHZhbHVlOiBzcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc1RvSGNsVGVycmFmb3JtKHRoaXMuX3Nwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHRpbWVvdXRzOiB7XG4gICAgICAgIHZhbHVlOiBzcG90RmxlZXRSZXF1ZXN0VGltZW91dHNUb0hjbFRlcnJhZm9ybSh0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzdHJ1Y3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTcG90RmxlZXRSZXF1ZXN0VGltZW91dHNcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==