"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchTemplateMonitoringToHclTerraform = exports.launchTemplateMonitoringToTerraform = exports.LaunchTemplateMetadataOptionsOutputReference = exports.launchTemplateMetadataOptionsToHclTerraform = exports.launchTemplateMetadataOptionsToTerraform = exports.LaunchTemplateLicenseSpecificationList = exports.LaunchTemplateLicenseSpecificationOutputReference = exports.launchTemplateLicenseSpecificationToHclTerraform = exports.launchTemplateLicenseSpecificationToTerraform = exports.LaunchTemplateInstanceMarketOptionsOutputReference = exports.launchTemplateInstanceMarketOptionsToHclTerraform = exports.launchTemplateInstanceMarketOptionsToTerraform = exports.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference = exports.launchTemplateInstanceMarketOptionsSpotOptionsToHclTerraform = exports.launchTemplateInstanceMarketOptionsSpotOptionsToTerraform = exports.LaunchTemplateIamInstanceProfileOutputReference = exports.launchTemplateIamInstanceProfileToHclTerraform = exports.launchTemplateIamInstanceProfileToTerraform = exports.LaunchTemplateHibernationOptionsOutputReference = exports.launchTemplateHibernationOptionsToHclTerraform = exports.launchTemplateHibernationOptionsToTerraform = exports.LaunchTemplateEnclaveOptionsOutputReference = exports.launchTemplateEnclaveOptionsToHclTerraform = exports.launchTemplateEnclaveOptionsToTerraform = exports.LaunchTemplateElasticInferenceAcceleratorOutputReference = exports.launchTemplateElasticInferenceAcceleratorToHclTerraform = exports.launchTemplateElasticInferenceAcceleratorToTerraform = exports.LaunchTemplateElasticGpuSpecificationsList = exports.LaunchTemplateElasticGpuSpecificationsOutputReference = exports.launchTemplateElasticGpuSpecificationsToHclTerraform = exports.launchTemplateElasticGpuSpecificationsToTerraform = exports.LaunchTemplateCreditSpecificationOutputReference = exports.launchTemplateCreditSpecificationToHclTerraform = exports.launchTemplateCreditSpecificationToTerraform = exports.LaunchTemplateCpuOptionsOutputReference = exports.launchTemplateCpuOptionsToHclTerraform = exports.launchTemplateCpuOptionsToTerraform = exports.LaunchTemplateCapacityReservationSpecificationOutputReference = exports.launchTemplateCapacityReservationSpecificationToHclTerraform = exports.launchTemplateCapacityReservationSpecificationToTerraform = exports.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference = exports.launchTemplateCapacityReservationSpecificationCapacityReservationTargetToHclTerraform = exports.launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform = exports.LaunchTemplateBlockDeviceMappingsList = exports.LaunchTemplateBlockDeviceMappingsOutputReference = exports.launchTemplateBlockDeviceMappingsToHclTerraform = exports.launchTemplateBlockDeviceMappingsToTerraform = exports.LaunchTemplateBlockDeviceMappingsEbsOutputReference = exports.launchTemplateBlockDeviceMappingsEbsToHclTerraform = exports.launchTemplateBlockDeviceMappingsEbsToTerraform = void 0;
exports.LaunchTemplate = exports.LaunchTemplateTagSpecificationsList = exports.LaunchTemplateTagSpecificationsOutputReference = exports.launchTemplateTagSpecificationsToHclTerraform = exports.launchTemplateTagSpecificationsToTerraform = exports.LaunchTemplatePlacementOutputReference = exports.launchTemplatePlacementToHclTerraform = exports.launchTemplatePlacementToTerraform = exports.LaunchTemplateNetworkInterfacesList = exports.LaunchTemplateNetworkInterfacesOutputReference = exports.launchTemplateNetworkInterfacesToHclTerraform = exports.launchTemplateNetworkInterfacesToTerraform = exports.LaunchTemplateMonitoringOutputReference = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function launchTemplateBlockDeviceMappingsEbsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delete_on_termination: cdktf.stringToTerraform(struct.deleteOnTermination),
        encrypted: cdktf.stringToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        snapshot_id: cdktf.stringToTerraform(struct.snapshotId),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType),
    };
}
exports.launchTemplateBlockDeviceMappingsEbsToTerraform = launchTemplateBlockDeviceMappingsEbsToTerraform;
function launchTemplateBlockDeviceMappingsEbsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        delete_on_termination: {
            value: cdktf.stringToHclTerraform(struct.deleteOnTermination),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encrypted: {
            value: cdktf.stringToHclTerraform(struct.encrypted),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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
exports.launchTemplateBlockDeviceMappingsEbsToHclTerraform = launchTemplateBlockDeviceMappingsEbsToHclTerraform;
class LaunchTemplateBlockDeviceMappingsEbsOutputReference extends cdktf.ComplexObject {
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
            this._deleteOnTermination = undefined;
            this._encrypted = undefined;
            this._iops = undefined;
            this._kmsKeyId = undefined;
            this._snapshotId = undefined;
            this._throughput = undefined;
            this._volumeSize = undefined;
            this._volumeType = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._deleteOnTermination = value.deleteOnTermination;
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
        return this.getStringAttribute('delete_on_termination');
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
        return this.getStringAttribute('encrypted');
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
exports.LaunchTemplateBlockDeviceMappingsEbsOutputReference = LaunchTemplateBlockDeviceMappingsEbsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
LaunchTemplateBlockDeviceMappingsEbsOutputReference[_a] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference", version: "0.0.0" };
function launchTemplateBlockDeviceMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        no_device: cdktf.stringToTerraform(struct.noDevice),
        virtual_name: cdktf.stringToTerraform(struct.virtualName),
        ebs: launchTemplateBlockDeviceMappingsEbsToTerraform(struct.ebs),
    };
}
exports.launchTemplateBlockDeviceMappingsToTerraform = launchTemplateBlockDeviceMappingsToTerraform;
function launchTemplateBlockDeviceMappingsToHclTerraform(struct) {
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
        no_device: {
            value: cdktf.stringToHclTerraform(struct.noDevice),
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
        ebs: {
            value: launchTemplateBlockDeviceMappingsEbsToHclTerraform(struct.ebs),
            isBlock: true,
            type: "list",
            storageClassType: "LaunchTemplateBlockDeviceMappingsEbsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.launchTemplateBlockDeviceMappingsToHclTerraform = launchTemplateBlockDeviceMappingsToHclTerraform;
class LaunchTemplateBlockDeviceMappingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // ebs - computed: false, optional: true, required: false
        this._ebs = new LaunchTemplateBlockDeviceMappingsEbsOutputReference(this, "ebs");
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
        if (this._noDevice !== undefined) {
            hasAnyValues = true;
            internalValueResult.noDevice = this._noDevice;
        }
        if (this._virtualName !== undefined) {
            hasAnyValues = true;
            internalValueResult.virtualName = this._virtualName;
        }
        if (this._ebs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebs = this._ebs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deviceName = undefined;
            this._noDevice = undefined;
            this._virtualName = undefined;
            this._ebs.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deviceName = value.deviceName;
            this._noDevice = value.noDevice;
            this._virtualName = value.virtualName;
            this._ebs.internalValue = value.ebs;
        }
    }
    get deviceName() {
        return this.getStringAttribute('device_name');
    }
    set deviceName(value) {
        this._deviceName = value;
    }
    resetDeviceName() {
        this._deviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceNameInput() {
        return this._deviceName;
    }
    get noDevice() {
        return this.getStringAttribute('no_device');
    }
    set noDevice(value) {
        this._noDevice = value;
    }
    resetNoDevice() {
        this._noDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noDeviceInput() {
        return this._noDevice;
    }
    get virtualName() {
        return this.getStringAttribute('virtual_name');
    }
    set virtualName(value) {
        this._virtualName = value;
    }
    resetVirtualName() {
        this._virtualName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get virtualNameInput() {
        return this._virtualName;
    }
    get ebs() {
        return this._ebs;
    }
    putEbs(value) {
        this._ebs.internalValue = value;
    }
    resetEbs() {
        this._ebs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ebsInput() {
        return this._ebs.internalValue;
    }
}
exports.LaunchTemplateBlockDeviceMappingsOutputReference = LaunchTemplateBlockDeviceMappingsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
LaunchTemplateBlockDeviceMappingsOutputReference[_b] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference", version: "0.0.0" };
class LaunchTemplateBlockDeviceMappingsList extends cdktf.ComplexList {
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
        return new LaunchTemplateBlockDeviceMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.LaunchTemplateBlockDeviceMappingsList = LaunchTemplateBlockDeviceMappingsList;
_c = JSII_RTTI_SYMBOL_1;
LaunchTemplateBlockDeviceMappingsList[_c] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList", version: "0.0.0" };
function launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        capacity_reservation_id: cdktf.stringToTerraform(struct.capacityReservationId),
    };
}
exports.launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform = launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform;
function launchTemplateCapacityReservationSpecificationCapacityReservationTargetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        capacity_reservation_id: {
            value: cdktf.stringToHclTerraform(struct.capacityReservationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.launchTemplateCapacityReservationSpecificationCapacityReservationTargetToHclTerraform = launchTemplateCapacityReservationSpecificationCapacityReservationTargetToHclTerraform;
class LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktf.ComplexObject {
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
        if (this._capacityReservationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservationId = this._capacityReservationId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._capacityReservationId = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._capacityReservationId = value.capacityReservationId;
        }
    }
    get capacityReservationId() {
        return this.getStringAttribute('capacity_reservation_id');
    }
    set capacityReservationId(value) {
        this._capacityReservationId = value;
    }
    resetCapacityReservationId() {
        this._capacityReservationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get capacityReservationIdInput() {
        return this._capacityReservationId;
    }
}
exports.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference = LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference;
_d = JSII_RTTI_SYMBOL_1;
LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference[_d] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference", version: "0.0.0" };
function launchTemplateCapacityReservationSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        capacity_reservation_preference: cdktf.stringToTerraform(struct.capacityReservationPreference),
        capacity_reservation_target: launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct.capacityReservationTarget),
    };
}
exports.launchTemplateCapacityReservationSpecificationToTerraform = launchTemplateCapacityReservationSpecificationToTerraform;
function launchTemplateCapacityReservationSpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        capacity_reservation_preference: {
            value: cdktf.stringToHclTerraform(struct.capacityReservationPreference),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        capacity_reservation_target: {
            value: launchTemplateCapacityReservationSpecificationCapacityReservationTargetToHclTerraform(struct.capacityReservationTarget),
            isBlock: true,
            type: "list",
            storageClassType: "LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.launchTemplateCapacityReservationSpecificationToHclTerraform = launchTemplateCapacityReservationSpecificationToHclTerraform;
class LaunchTemplateCapacityReservationSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // capacity_reservation_target - computed: false, optional: true, required: false
        this._capacityReservationTarget = new LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference(this, "capacity_reservation_target");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._capacityReservationPreference !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservationPreference = this._capacityReservationPreference;
        }
        if (this._capacityReservationTarget?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservationTarget = this._capacityReservationTarget?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._capacityReservationPreference = undefined;
            this._capacityReservationTarget.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._capacityReservationPreference = value.capacityReservationPreference;
            this._capacityReservationTarget.internalValue = value.capacityReservationTarget;
        }
    }
    get capacityReservationPreference() {
        return this.getStringAttribute('capacity_reservation_preference');
    }
    set capacityReservationPreference(value) {
        this._capacityReservationPreference = value;
    }
    resetCapacityReservationPreference() {
        this._capacityReservationPreference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get capacityReservationPreferenceInput() {
        return this._capacityReservationPreference;
    }
    get capacityReservationTarget() {
        return this._capacityReservationTarget;
    }
    putCapacityReservationTarget(value) {
        this._capacityReservationTarget.internalValue = value;
    }
    resetCapacityReservationTarget() {
        this._capacityReservationTarget.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get capacityReservationTargetInput() {
        return this._capacityReservationTarget.internalValue;
    }
}
exports.LaunchTemplateCapacityReservationSpecificationOutputReference = LaunchTemplateCapacityReservationSpecificationOutputReference;
_e = JSII_RTTI_SYMBOL_1;
LaunchTemplateCapacityReservationSpecificationOutputReference[_e] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference", version: "0.0.0" };
function launchTemplateCpuOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        core_count: cdktf.numberToTerraform(struct.coreCount),
        threads_per_core: cdktf.numberToTerraform(struct.threadsPerCore),
    };
}
exports.launchTemplateCpuOptionsToTerraform = launchTemplateCpuOptionsToTerraform;
function launchTemplateCpuOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        core_count: {
            value: cdktf.numberToHclTerraform(struct.coreCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        threads_per_core: {
            value: cdktf.numberToHclTerraform(struct.threadsPerCore),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.launchTemplateCpuOptionsToHclTerraform = launchTemplateCpuOptionsToHclTerraform;
class LaunchTemplateCpuOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._coreCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.coreCount = this._coreCount;
        }
        if (this._threadsPerCore !== undefined) {
            hasAnyValues = true;
            internalValueResult.threadsPerCore = this._threadsPerCore;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._coreCount = undefined;
            this._threadsPerCore = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._coreCount = value.coreCount;
            this._threadsPerCore = value.threadsPerCore;
        }
    }
    get coreCount() {
        return this.getNumberAttribute('core_count');
    }
    set coreCount(value) {
        this._coreCount = value;
    }
    resetCoreCount() {
        this._coreCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get coreCountInput() {
        return this._coreCount;
    }
    get threadsPerCore() {
        return this.getNumberAttribute('threads_per_core');
    }
    set threadsPerCore(value) {
        this._threadsPerCore = value;
    }
    resetThreadsPerCore() {
        this._threadsPerCore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get threadsPerCoreInput() {
        return this._threadsPerCore;
    }
}
exports.LaunchTemplateCpuOptionsOutputReference = LaunchTemplateCpuOptionsOutputReference;
_f = JSII_RTTI_SYMBOL_1;
LaunchTemplateCpuOptionsOutputReference[_f] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference", version: "0.0.0" };
function launchTemplateCreditSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cpu_credits: cdktf.stringToTerraform(struct.cpuCredits),
    };
}
exports.launchTemplateCreditSpecificationToTerraform = launchTemplateCreditSpecificationToTerraform;
function launchTemplateCreditSpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cpu_credits: {
            value: cdktf.stringToHclTerraform(struct.cpuCredits),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.launchTemplateCreditSpecificationToHclTerraform = launchTemplateCreditSpecificationToHclTerraform;
class LaunchTemplateCreditSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._cpuCredits !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuCredits = this._cpuCredits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cpuCredits = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cpuCredits = value.cpuCredits;
        }
    }
    get cpuCredits() {
        return this.getStringAttribute('cpu_credits');
    }
    set cpuCredits(value) {
        this._cpuCredits = value;
    }
    resetCpuCredits() {
        this._cpuCredits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuCreditsInput() {
        return this._cpuCredits;
    }
}
exports.LaunchTemplateCreditSpecificationOutputReference = LaunchTemplateCreditSpecificationOutputReference;
_g = JSII_RTTI_SYMBOL_1;
LaunchTemplateCreditSpecificationOutputReference[_g] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference", version: "0.0.0" };
function launchTemplateElasticGpuSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.launchTemplateElasticGpuSpecificationsToTerraform = launchTemplateElasticGpuSpecificationsToTerraform;
function launchTemplateElasticGpuSpecificationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.launchTemplateElasticGpuSpecificationsToHclTerraform = launchTemplateElasticGpuSpecificationsToHclTerraform;
class LaunchTemplateElasticGpuSpecificationsOutputReference extends cdktf.ComplexObject {
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
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
        }
    }
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
}
exports.LaunchTemplateElasticGpuSpecificationsOutputReference = LaunchTemplateElasticGpuSpecificationsOutputReference;
_h = JSII_RTTI_SYMBOL_1;
LaunchTemplateElasticGpuSpecificationsOutputReference[_h] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference", version: "0.0.0" };
class LaunchTemplateElasticGpuSpecificationsList extends cdktf.ComplexList {
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
        return new LaunchTemplateElasticGpuSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.LaunchTemplateElasticGpuSpecificationsList = LaunchTemplateElasticGpuSpecificationsList;
_j = JSII_RTTI_SYMBOL_1;
LaunchTemplateElasticGpuSpecificationsList[_j] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList", version: "0.0.0" };
function launchTemplateElasticInferenceAcceleratorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.launchTemplateElasticInferenceAcceleratorToTerraform = launchTemplateElasticInferenceAcceleratorToTerraform;
function launchTemplateElasticInferenceAcceleratorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.launchTemplateElasticInferenceAcceleratorToHclTerraform = launchTemplateElasticInferenceAcceleratorToHclTerraform;
class LaunchTemplateElasticInferenceAcceleratorOutputReference extends cdktf.ComplexObject {
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
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._type = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._type = value.type;
        }
    }
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
}
exports.LaunchTemplateElasticInferenceAcceleratorOutputReference = LaunchTemplateElasticInferenceAcceleratorOutputReference;
_k = JSII_RTTI_SYMBOL_1;
LaunchTemplateElasticInferenceAcceleratorOutputReference[_k] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference", version: "0.0.0" };
function launchTemplateEnclaveOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.launchTemplateEnclaveOptionsToTerraform = launchTemplateEnclaveOptionsToTerraform;
function launchTemplateEnclaveOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.launchTemplateEnclaveOptionsToHclTerraform = launchTemplateEnclaveOptionsToHclTerraform;
class LaunchTemplateEnclaveOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
        }
    }
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
}
exports.LaunchTemplateEnclaveOptionsOutputReference = LaunchTemplateEnclaveOptionsOutputReference;
_l = JSII_RTTI_SYMBOL_1;
LaunchTemplateEnclaveOptionsOutputReference[_l] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference", version: "0.0.0" };
function launchTemplateHibernationOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        configured: cdktf.booleanToTerraform(struct.configured),
    };
}
exports.launchTemplateHibernationOptionsToTerraform = launchTemplateHibernationOptionsToTerraform;
function launchTemplateHibernationOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        configured: {
            value: cdktf.booleanToHclTerraform(struct.configured),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.launchTemplateHibernationOptionsToHclTerraform = launchTemplateHibernationOptionsToHclTerraform;
class LaunchTemplateHibernationOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._configured !== undefined) {
            hasAnyValues = true;
            internalValueResult.configured = this._configured;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._configured = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._configured = value.configured;
        }
    }
    get configured() {
        return this.getBooleanAttribute('configured');
    }
    set configured(value) {
        this._configured = value;
    }
    // Temporarily expose input value. Use with caution.
    get configuredInput() {
        return this._configured;
    }
}
exports.LaunchTemplateHibernationOptionsOutputReference = LaunchTemplateHibernationOptionsOutputReference;
_m = JSII_RTTI_SYMBOL_1;
LaunchTemplateHibernationOptionsOutputReference[_m] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference", version: "0.0.0" };
function launchTemplateIamInstanceProfileToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.launchTemplateIamInstanceProfileToTerraform = launchTemplateIamInstanceProfileToTerraform;
function launchTemplateIamInstanceProfileToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        arn: {
            value: cdktf.stringToHclTerraform(struct.arn),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.launchTemplateIamInstanceProfileToHclTerraform = launchTemplateIamInstanceProfileToHclTerraform;
class LaunchTemplateIamInstanceProfileOutputReference extends cdktf.ComplexObject {
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
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._name = value.name;
        }
    }
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
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
}
exports.LaunchTemplateIamInstanceProfileOutputReference = LaunchTemplateIamInstanceProfileOutputReference;
_o = JSII_RTTI_SYMBOL_1;
LaunchTemplateIamInstanceProfileOutputReference[_o] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference", version: "0.0.0" };
function launchTemplateInstanceMarketOptionsSpotOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        block_duration_minutes: cdktf.numberToTerraform(struct.blockDurationMinutes),
        instance_interruption_behavior: cdktf.stringToTerraform(struct.instanceInterruptionBehavior),
        max_price: cdktf.stringToTerraform(struct.maxPrice),
        spot_instance_type: cdktf.stringToTerraform(struct.spotInstanceType),
        valid_until: cdktf.stringToTerraform(struct.validUntil),
    };
}
exports.launchTemplateInstanceMarketOptionsSpotOptionsToTerraform = launchTemplateInstanceMarketOptionsSpotOptionsToTerraform;
function launchTemplateInstanceMarketOptionsSpotOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        block_duration_minutes: {
            value: cdktf.numberToHclTerraform(struct.blockDurationMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        instance_interruption_behavior: {
            value: cdktf.stringToHclTerraform(struct.instanceInterruptionBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_price: {
            value: cdktf.stringToHclTerraform(struct.maxPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        spot_instance_type: {
            value: cdktf.stringToHclTerraform(struct.spotInstanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        valid_until: {
            value: cdktf.stringToHclTerraform(struct.validUntil),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.launchTemplateInstanceMarketOptionsSpotOptionsToHclTerraform = launchTemplateInstanceMarketOptionsSpotOptionsToHclTerraform;
class LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._blockDurationMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockDurationMinutes = this._blockDurationMinutes;
        }
        if (this._instanceInterruptionBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceInterruptionBehavior = this._instanceInterruptionBehavior;
        }
        if (this._maxPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxPrice = this._maxPrice;
        }
        if (this._spotInstanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotInstanceType = this._spotInstanceType;
        }
        if (this._validUntil !== undefined) {
            hasAnyValues = true;
            internalValueResult.validUntil = this._validUntil;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._blockDurationMinutes = undefined;
            this._instanceInterruptionBehavior = undefined;
            this._maxPrice = undefined;
            this._spotInstanceType = undefined;
            this._validUntil = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._blockDurationMinutes = value.blockDurationMinutes;
            this._instanceInterruptionBehavior = value.instanceInterruptionBehavior;
            this._maxPrice = value.maxPrice;
            this._spotInstanceType = value.spotInstanceType;
            this._validUntil = value.validUntil;
        }
    }
    get blockDurationMinutes() {
        return this.getNumberAttribute('block_duration_minutes');
    }
    set blockDurationMinutes(value) {
        this._blockDurationMinutes = value;
    }
    resetBlockDurationMinutes() {
        this._blockDurationMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get blockDurationMinutesInput() {
        return this._blockDurationMinutes;
    }
    get instanceInterruptionBehavior() {
        return this.getStringAttribute('instance_interruption_behavior');
    }
    set instanceInterruptionBehavior(value) {
        this._instanceInterruptionBehavior = value;
    }
    resetInstanceInterruptionBehavior() {
        this._instanceInterruptionBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceInterruptionBehaviorInput() {
        return this._instanceInterruptionBehavior;
    }
    get maxPrice() {
        return this.getStringAttribute('max_price');
    }
    set maxPrice(value) {
        this._maxPrice = value;
    }
    resetMaxPrice() {
        this._maxPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxPriceInput() {
        return this._maxPrice;
    }
    get spotInstanceType() {
        return this.getStringAttribute('spot_instance_type');
    }
    set spotInstanceType(value) {
        this._spotInstanceType = value;
    }
    resetSpotInstanceType() {
        this._spotInstanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get spotInstanceTypeInput() {
        return this._spotInstanceType;
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
}
exports.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference = LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference;
_p = JSII_RTTI_SYMBOL_1;
LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference[_p] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference", version: "0.0.0" };
function launchTemplateInstanceMarketOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        market_type: cdktf.stringToTerraform(struct.marketType),
        spot_options: launchTemplateInstanceMarketOptionsSpotOptionsToTerraform(struct.spotOptions),
    };
}
exports.launchTemplateInstanceMarketOptionsToTerraform = launchTemplateInstanceMarketOptionsToTerraform;
function launchTemplateInstanceMarketOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        market_type: {
            value: cdktf.stringToHclTerraform(struct.marketType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        spot_options: {
            value: launchTemplateInstanceMarketOptionsSpotOptionsToHclTerraform(struct.spotOptions),
            isBlock: true,
            type: "list",
            storageClassType: "LaunchTemplateInstanceMarketOptionsSpotOptionsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.launchTemplateInstanceMarketOptionsToHclTerraform = launchTemplateInstanceMarketOptionsToHclTerraform;
class LaunchTemplateInstanceMarketOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // spot_options - computed: false, optional: true, required: false
        this._spotOptions = new LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference(this, "spot_options");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._marketType !== undefined) {
            hasAnyValues = true;
            internalValueResult.marketType = this._marketType;
        }
        if (this._spotOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotOptions = this._spotOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._marketType = undefined;
            this._spotOptions.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._marketType = value.marketType;
            this._spotOptions.internalValue = value.spotOptions;
        }
    }
    get marketType() {
        return this.getStringAttribute('market_type');
    }
    set marketType(value) {
        this._marketType = value;
    }
    resetMarketType() {
        this._marketType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get marketTypeInput() {
        return this._marketType;
    }
    get spotOptions() {
        return this._spotOptions;
    }
    putSpotOptions(value) {
        this._spotOptions.internalValue = value;
    }
    resetSpotOptions() {
        this._spotOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get spotOptionsInput() {
        return this._spotOptions.internalValue;
    }
}
exports.LaunchTemplateInstanceMarketOptionsOutputReference = LaunchTemplateInstanceMarketOptionsOutputReference;
_q = JSII_RTTI_SYMBOL_1;
LaunchTemplateInstanceMarketOptionsOutputReference[_q] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference", version: "0.0.0" };
function launchTemplateLicenseSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        license_configuration_arn: cdktf.stringToTerraform(struct.licenseConfigurationArn),
    };
}
exports.launchTemplateLicenseSpecificationToTerraform = launchTemplateLicenseSpecificationToTerraform;
function launchTemplateLicenseSpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        license_configuration_arn: {
            value: cdktf.stringToHclTerraform(struct.licenseConfigurationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.launchTemplateLicenseSpecificationToHclTerraform = launchTemplateLicenseSpecificationToHclTerraform;
class LaunchTemplateLicenseSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._licenseConfigurationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.licenseConfigurationArn = this._licenseConfigurationArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._licenseConfigurationArn = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._licenseConfigurationArn = value.licenseConfigurationArn;
        }
    }
    get licenseConfigurationArn() {
        return this.getStringAttribute('license_configuration_arn');
    }
    set licenseConfigurationArn(value) {
        this._licenseConfigurationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get licenseConfigurationArnInput() {
        return this._licenseConfigurationArn;
    }
}
exports.LaunchTemplateLicenseSpecificationOutputReference = LaunchTemplateLicenseSpecificationOutputReference;
_r = JSII_RTTI_SYMBOL_1;
LaunchTemplateLicenseSpecificationOutputReference[_r] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference", version: "0.0.0" };
class LaunchTemplateLicenseSpecificationList extends cdktf.ComplexList {
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
        return new LaunchTemplateLicenseSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.LaunchTemplateLicenseSpecificationList = LaunchTemplateLicenseSpecificationList;
_s = JSII_RTTI_SYMBOL_1;
LaunchTemplateLicenseSpecificationList[_s] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList", version: "0.0.0" };
function launchTemplateMetadataOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        http_endpoint: cdktf.stringToTerraform(struct.httpEndpoint),
        http_protocol_ipv6: cdktf.stringToTerraform(struct.httpProtocolIpv6),
        http_put_response_hop_limit: cdktf.numberToTerraform(struct.httpPutResponseHopLimit),
        http_tokens: cdktf.stringToTerraform(struct.httpTokens),
        instance_metadata_tags: cdktf.stringToTerraform(struct.instanceMetadataTags),
    };
}
exports.launchTemplateMetadataOptionsToTerraform = launchTemplateMetadataOptionsToTerraform;
function launchTemplateMetadataOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        http_endpoint: {
            value: cdktf.stringToHclTerraform(struct.httpEndpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        http_protocol_ipv6: {
            value: cdktf.stringToHclTerraform(struct.httpProtocolIpv6),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        http_put_response_hop_limit: {
            value: cdktf.numberToHclTerraform(struct.httpPutResponseHopLimit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        http_tokens: {
            value: cdktf.stringToHclTerraform(struct.httpTokens),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_metadata_tags: {
            value: cdktf.stringToHclTerraform(struct.instanceMetadataTags),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.launchTemplateMetadataOptionsToHclTerraform = launchTemplateMetadataOptionsToHclTerraform;
class LaunchTemplateMetadataOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._httpEndpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpEndpoint = this._httpEndpoint;
        }
        if (this._httpProtocolIpv6 !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpProtocolIpv6 = this._httpProtocolIpv6;
        }
        if (this._httpPutResponseHopLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpPutResponseHopLimit = this._httpPutResponseHopLimit;
        }
        if (this._httpTokens !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpTokens = this._httpTokens;
        }
        if (this._instanceMetadataTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceMetadataTags = this._instanceMetadataTags;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._httpEndpoint = undefined;
            this._httpProtocolIpv6 = undefined;
            this._httpPutResponseHopLimit = undefined;
            this._httpTokens = undefined;
            this._instanceMetadataTags = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._httpEndpoint = value.httpEndpoint;
            this._httpProtocolIpv6 = value.httpProtocolIpv6;
            this._httpPutResponseHopLimit = value.httpPutResponseHopLimit;
            this._httpTokens = value.httpTokens;
            this._instanceMetadataTags = value.instanceMetadataTags;
        }
    }
    get httpEndpoint() {
        return this.getStringAttribute('http_endpoint');
    }
    set httpEndpoint(value) {
        this._httpEndpoint = value;
    }
    resetHttpEndpoint() {
        this._httpEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpEndpointInput() {
        return this._httpEndpoint;
    }
    get httpProtocolIpv6() {
        return this.getStringAttribute('http_protocol_ipv6');
    }
    set httpProtocolIpv6(value) {
        this._httpProtocolIpv6 = value;
    }
    resetHttpProtocolIpv6() {
        this._httpProtocolIpv6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpProtocolIpv6Input() {
        return this._httpProtocolIpv6;
    }
    get httpPutResponseHopLimit() {
        return this.getNumberAttribute('http_put_response_hop_limit');
    }
    set httpPutResponseHopLimit(value) {
        this._httpPutResponseHopLimit = value;
    }
    resetHttpPutResponseHopLimit() {
        this._httpPutResponseHopLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpPutResponseHopLimitInput() {
        return this._httpPutResponseHopLimit;
    }
    get httpTokens() {
        return this.getStringAttribute('http_tokens');
    }
    set httpTokens(value) {
        this._httpTokens = value;
    }
    resetHttpTokens() {
        this._httpTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpTokensInput() {
        return this._httpTokens;
    }
    get instanceMetadataTags() {
        return this.getStringAttribute('instance_metadata_tags');
    }
    set instanceMetadataTags(value) {
        this._instanceMetadataTags = value;
    }
    resetInstanceMetadataTags() {
        this._instanceMetadataTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceMetadataTagsInput() {
        return this._instanceMetadataTags;
    }
}
exports.LaunchTemplateMetadataOptionsOutputReference = LaunchTemplateMetadataOptionsOutputReference;
_t = JSII_RTTI_SYMBOL_1;
LaunchTemplateMetadataOptionsOutputReference[_t] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference", version: "0.0.0" };
function launchTemplateMonitoringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.launchTemplateMonitoringToTerraform = launchTemplateMonitoringToTerraform;
function launchTemplateMonitoringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.launchTemplateMonitoringToHclTerraform = launchTemplateMonitoringToHclTerraform;
class LaunchTemplateMonitoringOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
        }
    }
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
}
exports.LaunchTemplateMonitoringOutputReference = LaunchTemplateMonitoringOutputReference;
_u = JSII_RTTI_SYMBOL_1;
LaunchTemplateMonitoringOutputReference[_u] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference", version: "0.0.0" };
function launchTemplateNetworkInterfacesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        associate_carrier_ip_address: cdktf.stringToTerraform(struct.associateCarrierIpAddress),
        associate_public_ip_address: cdktf.stringToTerraform(struct.associatePublicIpAddress),
        delete_on_termination: cdktf.stringToTerraform(struct.deleteOnTermination),
        description: cdktf.stringToTerraform(struct.description),
        device_index: cdktf.numberToTerraform(struct.deviceIndex),
        interface_type: cdktf.stringToTerraform(struct.interfaceType),
        ipv4_address_count: cdktf.numberToTerraform(struct.ipv4AddressCount),
        ipv4_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.ipv4Addresses),
        ipv6_address_count: cdktf.numberToTerraform(struct.ipv6AddressCount),
        ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.ipv6Addresses),
        network_card_index: cdktf.numberToTerraform(struct.networkCardIndex),
        network_interface_id: cdktf.stringToTerraform(struct.networkInterfaceId),
        private_ip_address: cdktf.stringToTerraform(struct.privateIpAddress),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.securityGroups),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
    };
}
exports.launchTemplateNetworkInterfacesToTerraform = launchTemplateNetworkInterfacesToTerraform;
function launchTemplateNetworkInterfacesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        associate_carrier_ip_address: {
            value: cdktf.stringToHclTerraform(struct.associateCarrierIpAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        associate_public_ip_address: {
            value: cdktf.stringToHclTerraform(struct.associatePublicIpAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        delete_on_termination: {
            value: cdktf.stringToHclTerraform(struct.deleteOnTermination),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_index: {
            value: cdktf.numberToHclTerraform(struct.deviceIndex),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interface_type: {
            value: cdktf.stringToHclTerraform(struct.interfaceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv4_address_count: {
            value: cdktf.numberToHclTerraform(struct.ipv4AddressCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ipv4_addresses: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.ipv4Addresses),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        ipv6_address_count: {
            value: cdktf.numberToHclTerraform(struct.ipv6AddressCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ipv6_addresses: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.ipv6Addresses),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        network_card_index: {
            value: cdktf.numberToHclTerraform(struct.networkCardIndex),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        network_interface_id: {
            value: cdktf.stringToHclTerraform(struct.networkInterfaceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_ip_address: {
            value: cdktf.stringToHclTerraform(struct.privateIpAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_groups: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.securityGroups),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        subnet_id: {
            value: cdktf.stringToHclTerraform(struct.subnetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.launchTemplateNetworkInterfacesToHclTerraform = launchTemplateNetworkInterfacesToHclTerraform;
class LaunchTemplateNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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
        if (this._associateCarrierIpAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.associateCarrierIpAddress = this._associateCarrierIpAddress;
        }
        if (this._associatePublicIpAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.associatePublicIpAddress = this._associatePublicIpAddress;
        }
        if (this._deleteOnTermination !== undefined) {
            hasAnyValues = true;
            internalValueResult.deleteOnTermination = this._deleteOnTermination;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._deviceIndex !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceIndex = this._deviceIndex;
        }
        if (this._interfaceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.interfaceType = this._interfaceType;
        }
        if (this._ipv4AddressCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv4AddressCount = this._ipv4AddressCount;
        }
        if (this._ipv4Addresses !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv4Addresses = this._ipv4Addresses;
        }
        if (this._ipv6AddressCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6AddressCount = this._ipv6AddressCount;
        }
        if (this._ipv6Addresses !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6Addresses = this._ipv6Addresses;
        }
        if (this._networkCardIndex !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkCardIndex = this._networkCardIndex;
        }
        if (this._networkInterfaceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterfaceId = this._networkInterfaceId;
        }
        if (this._privateIpAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateIpAddress = this._privateIpAddress;
        }
        if (this._securityGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if (this._subnetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetId = this._subnetId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._associateCarrierIpAddress = undefined;
            this._associatePublicIpAddress = undefined;
            this._deleteOnTermination = undefined;
            this._description = undefined;
            this._deviceIndex = undefined;
            this._interfaceType = undefined;
            this._ipv4AddressCount = undefined;
            this._ipv4Addresses = undefined;
            this._ipv6AddressCount = undefined;
            this._ipv6Addresses = undefined;
            this._networkCardIndex = undefined;
            this._networkInterfaceId = undefined;
            this._privateIpAddress = undefined;
            this._securityGroups = undefined;
            this._subnetId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._associateCarrierIpAddress = value.associateCarrierIpAddress;
            this._associatePublicIpAddress = value.associatePublicIpAddress;
            this._deleteOnTermination = value.deleteOnTermination;
            this._description = value.description;
            this._deviceIndex = value.deviceIndex;
            this._interfaceType = value.interfaceType;
            this._ipv4AddressCount = value.ipv4AddressCount;
            this._ipv4Addresses = value.ipv4Addresses;
            this._ipv6AddressCount = value.ipv6AddressCount;
            this._ipv6Addresses = value.ipv6Addresses;
            this._networkCardIndex = value.networkCardIndex;
            this._networkInterfaceId = value.networkInterfaceId;
            this._privateIpAddress = value.privateIpAddress;
            this._securityGroups = value.securityGroups;
            this._subnetId = value.subnetId;
        }
    }
    get associateCarrierIpAddress() {
        return this.getStringAttribute('associate_carrier_ip_address');
    }
    set associateCarrierIpAddress(value) {
        this._associateCarrierIpAddress = value;
    }
    resetAssociateCarrierIpAddress() {
        this._associateCarrierIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get associateCarrierIpAddressInput() {
        return this._associateCarrierIpAddress;
    }
    get associatePublicIpAddress() {
        return this.getStringAttribute('associate_public_ip_address');
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
    get deleteOnTermination() {
        return this.getStringAttribute('delete_on_termination');
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
    get deviceIndex() {
        return this.getNumberAttribute('device_index');
    }
    set deviceIndex(value) {
        this._deviceIndex = value;
    }
    resetDeviceIndex() {
        this._deviceIndex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceIndexInput() {
        return this._deviceIndex;
    }
    get interfaceType() {
        return this.getStringAttribute('interface_type');
    }
    set interfaceType(value) {
        this._interfaceType = value;
    }
    resetInterfaceType() {
        this._interfaceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get interfaceTypeInput() {
        return this._interfaceType;
    }
    get ipv4AddressCount() {
        return this.getNumberAttribute('ipv4_address_count');
    }
    set ipv4AddressCount(value) {
        this._ipv4AddressCount = value;
    }
    resetIpv4AddressCount() {
        this._ipv4AddressCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv4AddressCountInput() {
        return this._ipv4AddressCount;
    }
    get ipv4Addresses() {
        return cdktf.Fn.tolist(this.getListAttribute('ipv4_addresses'));
    }
    set ipv4Addresses(value) {
        this._ipv4Addresses = value;
    }
    resetIpv4Addresses() {
        this._ipv4Addresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv4AddressesInput() {
        return this._ipv4Addresses;
    }
    get ipv6AddressCount() {
        return this.getNumberAttribute('ipv6_address_count');
    }
    set ipv6AddressCount(value) {
        this._ipv6AddressCount = value;
    }
    resetIpv6AddressCount() {
        this._ipv6AddressCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6AddressCountInput() {
        return this._ipv6AddressCount;
    }
    get ipv6Addresses() {
        return cdktf.Fn.tolist(this.getListAttribute('ipv6_addresses'));
    }
    set ipv6Addresses(value) {
        this._ipv6Addresses = value;
    }
    resetIpv6Addresses() {
        this._ipv6Addresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6AddressesInput() {
        return this._ipv6Addresses;
    }
    get networkCardIndex() {
        return this.getNumberAttribute('network_card_index');
    }
    set networkCardIndex(value) {
        this._networkCardIndex = value;
    }
    resetNetworkCardIndex() {
        this._networkCardIndex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkCardIndexInput() {
        return this._networkCardIndex;
    }
    get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    set networkInterfaceId(value) {
        this._networkInterfaceId = value;
    }
    resetNetworkInterfaceId() {
        this._networkInterfaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkInterfaceIdInput() {
        return this._networkInterfaceId;
    }
    get privateIpAddress() {
        return this.getStringAttribute('private_ip_address');
    }
    set privateIpAddress(value) {
        this._privateIpAddress = value;
    }
    resetPrivateIpAddress() {
        this._privateIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get privateIpAddressInput() {
        return this._privateIpAddress;
    }
    get securityGroups() {
        return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
    }
    set securityGroups(value) {
        this._securityGroups = value;
    }
    resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupsInput() {
        return this._securityGroups;
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
}
exports.LaunchTemplateNetworkInterfacesOutputReference = LaunchTemplateNetworkInterfacesOutputReference;
_v = JSII_RTTI_SYMBOL_1;
LaunchTemplateNetworkInterfacesOutputReference[_v] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference", version: "0.0.0" };
class LaunchTemplateNetworkInterfacesList extends cdktf.ComplexList {
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
        return new LaunchTemplateNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.LaunchTemplateNetworkInterfacesList = LaunchTemplateNetworkInterfacesList;
_w = JSII_RTTI_SYMBOL_1;
LaunchTemplateNetworkInterfacesList[_w] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList", version: "0.0.0" };
function launchTemplatePlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        affinity: cdktf.stringToTerraform(struct.affinity),
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        group_name: cdktf.stringToTerraform(struct.groupName),
        host_id: cdktf.stringToTerraform(struct.hostId),
        host_resource_group_arn: cdktf.stringToTerraform(struct.hostResourceGroupArn),
        partition_number: cdktf.numberToTerraform(struct.partitionNumber),
        spread_domain: cdktf.stringToTerraform(struct.spreadDomain),
        tenancy: cdktf.stringToTerraform(struct.tenancy),
    };
}
exports.launchTemplatePlacementToTerraform = launchTemplatePlacementToTerraform;
function launchTemplatePlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        affinity: {
            value: cdktf.stringToHclTerraform(struct.affinity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        availability_zone: {
            value: cdktf.stringToHclTerraform(struct.availabilityZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        group_name: {
            value: cdktf.stringToHclTerraform(struct.groupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_id: {
            value: cdktf.stringToHclTerraform(struct.hostId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_resource_group_arn: {
            value: cdktf.stringToHclTerraform(struct.hostResourceGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        partition_number: {
            value: cdktf.numberToHclTerraform(struct.partitionNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        spread_domain: {
            value: cdktf.stringToHclTerraform(struct.spreadDomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tenancy: {
            value: cdktf.stringToHclTerraform(struct.tenancy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.launchTemplatePlacementToHclTerraform = launchTemplatePlacementToHclTerraform;
class LaunchTemplatePlacementOutputReference extends cdktf.ComplexObject {
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
        if (this._affinity !== undefined) {
            hasAnyValues = true;
            internalValueResult.affinity = this._affinity;
        }
        if (this._availabilityZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZone = this._availabilityZone;
        }
        if (this._groupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupName = this._groupName;
        }
        if (this._hostId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostId = this._hostId;
        }
        if (this._hostResourceGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostResourceGroupArn = this._hostResourceGroupArn;
        }
        if (this._partitionNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionNumber = this._partitionNumber;
        }
        if (this._spreadDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.spreadDomain = this._spreadDomain;
        }
        if (this._tenancy !== undefined) {
            hasAnyValues = true;
            internalValueResult.tenancy = this._tenancy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._affinity = undefined;
            this._availabilityZone = undefined;
            this._groupName = undefined;
            this._hostId = undefined;
            this._hostResourceGroupArn = undefined;
            this._partitionNumber = undefined;
            this._spreadDomain = undefined;
            this._tenancy = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._affinity = value.affinity;
            this._availabilityZone = value.availabilityZone;
            this._groupName = value.groupName;
            this._hostId = value.hostId;
            this._hostResourceGroupArn = value.hostResourceGroupArn;
            this._partitionNumber = value.partitionNumber;
            this._spreadDomain = value.spreadDomain;
            this._tenancy = value.tenancy;
        }
    }
    get affinity() {
        return this.getStringAttribute('affinity');
    }
    set affinity(value) {
        this._affinity = value;
    }
    resetAffinity() {
        this._affinity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get affinityInput() {
        return this._affinity;
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
    get groupName() {
        return this.getStringAttribute('group_name');
    }
    set groupName(value) {
        this._groupName = value;
    }
    resetGroupName() {
        this._groupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get groupNameInput() {
        return this._groupName;
    }
    get hostId() {
        return this.getStringAttribute('host_id');
    }
    set hostId(value) {
        this._hostId = value;
    }
    resetHostId() {
        this._hostId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostIdInput() {
        return this._hostId;
    }
    get hostResourceGroupArn() {
        return this.getStringAttribute('host_resource_group_arn');
    }
    set hostResourceGroupArn(value) {
        this._hostResourceGroupArn = value;
    }
    resetHostResourceGroupArn() {
        this._hostResourceGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostResourceGroupArnInput() {
        return this._hostResourceGroupArn;
    }
    get partitionNumber() {
        return this.getNumberAttribute('partition_number');
    }
    set partitionNumber(value) {
        this._partitionNumber = value;
    }
    resetPartitionNumber() {
        this._partitionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get partitionNumberInput() {
        return this._partitionNumber;
    }
    get spreadDomain() {
        return this.getStringAttribute('spread_domain');
    }
    set spreadDomain(value) {
        this._spreadDomain = value;
    }
    resetSpreadDomain() {
        this._spreadDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get spreadDomainInput() {
        return this._spreadDomain;
    }
    get tenancy() {
        return this.getStringAttribute('tenancy');
    }
    set tenancy(value) {
        this._tenancy = value;
    }
    resetTenancy() {
        this._tenancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tenancyInput() {
        return this._tenancy;
    }
}
exports.LaunchTemplatePlacementOutputReference = LaunchTemplatePlacementOutputReference;
_x = JSII_RTTI_SYMBOL_1;
LaunchTemplatePlacementOutputReference[_x] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference", version: "0.0.0" };
function launchTemplateTagSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_type: cdktf.stringToTerraform(struct.resourceType),
        tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct.tags),
    };
}
exports.launchTemplateTagSpecificationsToTerraform = launchTemplateTagSpecificationsToTerraform;
function launchTemplateTagSpecificationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        resource_type: {
            value: cdktf.stringToHclTerraform(struct.resourceType),
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
exports.launchTemplateTagSpecificationsToHclTerraform = launchTemplateTagSpecificationsToHclTerraform;
class LaunchTemplateTagSpecificationsOutputReference extends cdktf.ComplexObject {
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
        if (this._resourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
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
            this.resolvableValue = undefined;
            this._resourceType = undefined;
            this._tags = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceType = value.resourceType;
            this._tags = value.tags;
        }
    }
    get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    set resourceType(value) {
        this._resourceType = value;
    }
    resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceTypeInput() {
        return this._resourceType;
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
exports.LaunchTemplateTagSpecificationsOutputReference = LaunchTemplateTagSpecificationsOutputReference;
_y = JSII_RTTI_SYMBOL_1;
LaunchTemplateTagSpecificationsOutputReference[_y] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference", version: "0.0.0" };
class LaunchTemplateTagSpecificationsList extends cdktf.ComplexList {
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
        return new LaunchTemplateTagSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.LaunchTemplateTagSpecificationsList = LaunchTemplateTagSpecificationsList;
_z = JSII_RTTI_SYMBOL_1;
LaunchTemplateTagSpecificationsList[_z] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template aws_launch_template}
*/
class LaunchTemplate extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a LaunchTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LaunchTemplate to import
    * @param importFromId The id of the existing LaunchTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LaunchTemplate to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_launch_template", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template aws_launch_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LaunchTemplateConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_launch_template',
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
        // block_device_mappings - computed: false, optional: true, required: false
        this._blockDeviceMappings = new LaunchTemplateBlockDeviceMappingsList(this, "block_device_mappings", false);
        // capacity_reservation_specification - computed: false, optional: true, required: false
        this._capacityReservationSpecification = new LaunchTemplateCapacityReservationSpecificationOutputReference(this, "capacity_reservation_specification");
        // cpu_options - computed: false, optional: true, required: false
        this._cpuOptions = new LaunchTemplateCpuOptionsOutputReference(this, "cpu_options");
        // credit_specification - computed: false, optional: true, required: false
        this._creditSpecification = new LaunchTemplateCreditSpecificationOutputReference(this, "credit_specification");
        // elastic_gpu_specifications - computed: false, optional: true, required: false
        this._elasticGpuSpecifications = new LaunchTemplateElasticGpuSpecificationsList(this, "elastic_gpu_specifications", false);
        // elastic_inference_accelerator - computed: false, optional: true, required: false
        this._elasticInferenceAccelerator = new LaunchTemplateElasticInferenceAcceleratorOutputReference(this, "elastic_inference_accelerator");
        // enclave_options - computed: false, optional: true, required: false
        this._enclaveOptions = new LaunchTemplateEnclaveOptionsOutputReference(this, "enclave_options");
        // hibernation_options - computed: false, optional: true, required: false
        this._hibernationOptions = new LaunchTemplateHibernationOptionsOutputReference(this, "hibernation_options");
        // iam_instance_profile - computed: false, optional: true, required: false
        this._iamInstanceProfile = new LaunchTemplateIamInstanceProfileOutputReference(this, "iam_instance_profile");
        // instance_market_options - computed: false, optional: true, required: false
        this._instanceMarketOptions = new LaunchTemplateInstanceMarketOptionsOutputReference(this, "instance_market_options");
        // license_specification - computed: false, optional: true, required: false
        this._licenseSpecification = new LaunchTemplateLicenseSpecificationList(this, "license_specification", true);
        // metadata_options - computed: false, optional: true, required: false
        this._metadataOptions = new LaunchTemplateMetadataOptionsOutputReference(this, "metadata_options");
        // monitoring - computed: false, optional: true, required: false
        this._monitoring = new LaunchTemplateMonitoringOutputReference(this, "monitoring");
        // network_interfaces - computed: false, optional: true, required: false
        this._networkInterfaces = new LaunchTemplateNetworkInterfacesList(this, "network_interfaces", false);
        // placement - computed: false, optional: true, required: false
        this._placement = new LaunchTemplatePlacementOutputReference(this, "placement");
        // tag_specifications - computed: false, optional: true, required: false
        this._tagSpecifications = new LaunchTemplateTagSpecificationsList(this, "tag_specifications", false);
        this._defaultVersion = config.defaultVersion;
        this._description = config.description;
        this._disableApiTermination = config.disableApiTermination;
        this._ebsOptimized = config.ebsOptimized;
        this._id = config.id;
        this._imageId = config.imageId;
        this._instanceInitiatedShutdownBehavior = config.instanceInitiatedShutdownBehavior;
        this._instanceType = config.instanceType;
        this._kernelId = config.kernelId;
        this._keyName = config.keyName;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._ramDiskId = config.ramDiskId;
        this._securityGroupNames = config.securityGroupNames;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._updateDefaultVersion = config.updateDefaultVersion;
        this._userData = config.userData;
        this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        this._blockDeviceMappings.internalValue = config.blockDeviceMappings;
        this._capacityReservationSpecification.internalValue = config.capacityReservationSpecification;
        this._cpuOptions.internalValue = config.cpuOptions;
        this._creditSpecification.internalValue = config.creditSpecification;
        this._elasticGpuSpecifications.internalValue = config.elasticGpuSpecifications;
        this._elasticInferenceAccelerator.internalValue = config.elasticInferenceAccelerator;
        this._enclaveOptions.internalValue = config.enclaveOptions;
        this._hibernationOptions.internalValue = config.hibernationOptions;
        this._iamInstanceProfile.internalValue = config.iamInstanceProfile;
        this._instanceMarketOptions.internalValue = config.instanceMarketOptions;
        this._licenseSpecification.internalValue = config.licenseSpecification;
        this._metadataOptions.internalValue = config.metadataOptions;
        this._monitoring.internalValue = config.monitoring;
        this._networkInterfaces.internalValue = config.networkInterfaces;
        this._placement.internalValue = config.placement;
        this._tagSpecifications.internalValue = config.tagSpecifications;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get defaultVersion() {
        return this.getNumberAttribute('default_version');
    }
    set defaultVersion(value) {
        this._defaultVersion = value;
    }
    resetDefaultVersion() {
        this._defaultVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultVersionInput() {
        return this._defaultVersion;
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
    get disableApiTermination() {
        return this.getBooleanAttribute('disable_api_termination');
    }
    set disableApiTermination(value) {
        this._disableApiTermination = value;
    }
    resetDisableApiTermination() {
        this._disableApiTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableApiTerminationInput() {
        return this._disableApiTermination;
    }
    get ebsOptimized() {
        return this.getStringAttribute('ebs_optimized');
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
    get imageId() {
        return this.getStringAttribute('image_id');
    }
    set imageId(value) {
        this._imageId = value;
    }
    resetImageId() {
        this._imageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get imageIdInput() {
        return this._imageId;
    }
    get instanceInitiatedShutdownBehavior() {
        return this.getStringAttribute('instance_initiated_shutdown_behavior');
    }
    set instanceInitiatedShutdownBehavior(value) {
        this._instanceInitiatedShutdownBehavior = value;
    }
    resetInstanceInitiatedShutdownBehavior() {
        this._instanceInitiatedShutdownBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceInitiatedShutdownBehaviorInput() {
        return this._instanceInitiatedShutdownBehavior;
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
    get kernelId() {
        return this.getStringAttribute('kernel_id');
    }
    set kernelId(value) {
        this._kernelId = value;
    }
    resetKernelId() {
        this._kernelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kernelIdInput() {
        return this._kernelId;
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
    // latest_version - computed: true, optional: false, required: false
    get latestVersion() {
        return this.getNumberAttribute('latest_version');
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
    get ramDiskId() {
        return this.getStringAttribute('ram_disk_id');
    }
    set ramDiskId(value) {
        this._ramDiskId = value;
    }
    resetRamDiskId() {
        this._ramDiskId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ramDiskIdInput() {
        return this._ramDiskId;
    }
    get securityGroupNames() {
        return cdktf.Fn.tolist(this.getListAttribute('security_group_names'));
    }
    set securityGroupNames(value) {
        this._securityGroupNames = value;
    }
    resetSecurityGroupNames() {
        this._securityGroupNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupNamesInput() {
        return this._securityGroupNames;
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
    get updateDefaultVersion() {
        return this.getBooleanAttribute('update_default_version');
    }
    set updateDefaultVersion(value) {
        this._updateDefaultVersion = value;
    }
    resetUpdateDefaultVersion() {
        this._updateDefaultVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updateDefaultVersionInput() {
        return this._updateDefaultVersion;
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
    get blockDeviceMappings() {
        return this._blockDeviceMappings;
    }
    putBlockDeviceMappings(value) {
        this._blockDeviceMappings.internalValue = value;
    }
    resetBlockDeviceMappings() {
        this._blockDeviceMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get blockDeviceMappingsInput() {
        return this._blockDeviceMappings.internalValue;
    }
    get capacityReservationSpecification() {
        return this._capacityReservationSpecification;
    }
    putCapacityReservationSpecification(value) {
        this._capacityReservationSpecification.internalValue = value;
    }
    resetCapacityReservationSpecification() {
        this._capacityReservationSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get capacityReservationSpecificationInput() {
        return this._capacityReservationSpecification.internalValue;
    }
    get cpuOptions() {
        return this._cpuOptions;
    }
    putCpuOptions(value) {
        this._cpuOptions.internalValue = value;
    }
    resetCpuOptions() {
        this._cpuOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuOptionsInput() {
        return this._cpuOptions.internalValue;
    }
    get creditSpecification() {
        return this._creditSpecification;
    }
    putCreditSpecification(value) {
        this._creditSpecification.internalValue = value;
    }
    resetCreditSpecification() {
        this._creditSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get creditSpecificationInput() {
        return this._creditSpecification.internalValue;
    }
    get elasticGpuSpecifications() {
        return this._elasticGpuSpecifications;
    }
    putElasticGpuSpecifications(value) {
        this._elasticGpuSpecifications.internalValue = value;
    }
    resetElasticGpuSpecifications() {
        this._elasticGpuSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get elasticGpuSpecificationsInput() {
        return this._elasticGpuSpecifications.internalValue;
    }
    get elasticInferenceAccelerator() {
        return this._elasticInferenceAccelerator;
    }
    putElasticInferenceAccelerator(value) {
        this._elasticInferenceAccelerator.internalValue = value;
    }
    resetElasticInferenceAccelerator() {
        this._elasticInferenceAccelerator.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get elasticInferenceAcceleratorInput() {
        return this._elasticInferenceAccelerator.internalValue;
    }
    get enclaveOptions() {
        return this._enclaveOptions;
    }
    putEnclaveOptions(value) {
        this._enclaveOptions.internalValue = value;
    }
    resetEnclaveOptions() {
        this._enclaveOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enclaveOptionsInput() {
        return this._enclaveOptions.internalValue;
    }
    get hibernationOptions() {
        return this._hibernationOptions;
    }
    putHibernationOptions(value) {
        this._hibernationOptions.internalValue = value;
    }
    resetHibernationOptions() {
        this._hibernationOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hibernationOptionsInput() {
        return this._hibernationOptions.internalValue;
    }
    get iamInstanceProfile() {
        return this._iamInstanceProfile;
    }
    putIamInstanceProfile(value) {
        this._iamInstanceProfile.internalValue = value;
    }
    resetIamInstanceProfile() {
        this._iamInstanceProfile.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iamInstanceProfileInput() {
        return this._iamInstanceProfile.internalValue;
    }
    get instanceMarketOptions() {
        return this._instanceMarketOptions;
    }
    putInstanceMarketOptions(value) {
        this._instanceMarketOptions.internalValue = value;
    }
    resetInstanceMarketOptions() {
        this._instanceMarketOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceMarketOptionsInput() {
        return this._instanceMarketOptions.internalValue;
    }
    get licenseSpecification() {
        return this._licenseSpecification;
    }
    putLicenseSpecification(value) {
        this._licenseSpecification.internalValue = value;
    }
    resetLicenseSpecification() {
        this._licenseSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get licenseSpecificationInput() {
        return this._licenseSpecification.internalValue;
    }
    get metadataOptions() {
        return this._metadataOptions;
    }
    putMetadataOptions(value) {
        this._metadataOptions.internalValue = value;
    }
    resetMetadataOptions() {
        this._metadataOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metadataOptionsInput() {
        return this._metadataOptions.internalValue;
    }
    get monitoring() {
        return this._monitoring;
    }
    putMonitoring(value) {
        this._monitoring.internalValue = value;
    }
    resetMonitoring() {
        this._monitoring.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get monitoringInput() {
        return this._monitoring.internalValue;
    }
    get networkInterfaces() {
        return this._networkInterfaces;
    }
    putNetworkInterfaces(value) {
        this._networkInterfaces.internalValue = value;
    }
    resetNetworkInterfaces() {
        this._networkInterfaces.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkInterfacesInput() {
        return this._networkInterfaces.internalValue;
    }
    get placement() {
        return this._placement;
    }
    putPlacement(value) {
        this._placement.internalValue = value;
    }
    resetPlacement() {
        this._placement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get placementInput() {
        return this._placement.internalValue;
    }
    get tagSpecifications() {
        return this._tagSpecifications;
    }
    putTagSpecifications(value) {
        this._tagSpecifications.internalValue = value;
    }
    resetTagSpecifications() {
        this._tagSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagSpecificationsInput() {
        return this._tagSpecifications.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            default_version: cdktf.numberToTerraform(this._defaultVersion),
            description: cdktf.stringToTerraform(this._description),
            disable_api_termination: cdktf.booleanToTerraform(this._disableApiTermination),
            ebs_optimized: cdktf.stringToTerraform(this._ebsOptimized),
            id: cdktf.stringToTerraform(this._id),
            image_id: cdktf.stringToTerraform(this._imageId),
            instance_initiated_shutdown_behavior: cdktf.stringToTerraform(this._instanceInitiatedShutdownBehavior),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            kernel_id: cdktf.stringToTerraform(this._kernelId),
            key_name: cdktf.stringToTerraform(this._keyName),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            ram_disk_id: cdktf.stringToTerraform(this._ramDiskId),
            security_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupNames),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            update_default_version: cdktf.booleanToTerraform(this._updateDefaultVersion),
            user_data: cdktf.stringToTerraform(this._userData),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcSecurityGroupIds),
            block_device_mappings: cdktf.listMapper(launchTemplateBlockDeviceMappingsToTerraform, true)(this._blockDeviceMappings.internalValue),
            capacity_reservation_specification: launchTemplateCapacityReservationSpecificationToTerraform(this._capacityReservationSpecification.internalValue),
            cpu_options: launchTemplateCpuOptionsToTerraform(this._cpuOptions.internalValue),
            credit_specification: launchTemplateCreditSpecificationToTerraform(this._creditSpecification.internalValue),
            elastic_gpu_specifications: cdktf.listMapper(launchTemplateElasticGpuSpecificationsToTerraform, true)(this._elasticGpuSpecifications.internalValue),
            elastic_inference_accelerator: launchTemplateElasticInferenceAcceleratorToTerraform(this._elasticInferenceAccelerator.internalValue),
            enclave_options: launchTemplateEnclaveOptionsToTerraform(this._enclaveOptions.internalValue),
            hibernation_options: launchTemplateHibernationOptionsToTerraform(this._hibernationOptions.internalValue),
            iam_instance_profile: launchTemplateIamInstanceProfileToTerraform(this._iamInstanceProfile.internalValue),
            instance_market_options: launchTemplateInstanceMarketOptionsToTerraform(this._instanceMarketOptions.internalValue),
            license_specification: cdktf.listMapper(launchTemplateLicenseSpecificationToTerraform, true)(this._licenseSpecification.internalValue),
            metadata_options: launchTemplateMetadataOptionsToTerraform(this._metadataOptions.internalValue),
            monitoring: launchTemplateMonitoringToTerraform(this._monitoring.internalValue),
            network_interfaces: cdktf.listMapper(launchTemplateNetworkInterfacesToTerraform, true)(this._networkInterfaces.internalValue),
            placement: launchTemplatePlacementToTerraform(this._placement.internalValue),
            tag_specifications: cdktf.listMapper(launchTemplateTagSpecificationsToTerraform, true)(this._tagSpecifications.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            default_version: {
                value: cdktf.numberToHclTerraform(this._defaultVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            disable_api_termination: {
                value: cdktf.booleanToHclTerraform(this._disableApiTermination),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ebs_optimized: {
                value: cdktf.stringToHclTerraform(this._ebsOptimized),
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
            image_id: {
                value: cdktf.stringToHclTerraform(this._imageId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_initiated_shutdown_behavior: {
                value: cdktf.stringToHclTerraform(this._instanceInitiatedShutdownBehavior),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_type: {
                value: cdktf.stringToHclTerraform(this._instanceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kernel_id: {
                value: cdktf.stringToHclTerraform(this._kernelId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key_name: {
                value: cdktf.stringToHclTerraform(this._keyName),
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
            ram_disk_id: {
                value: cdktf.stringToHclTerraform(this._ramDiskId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_group_names: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupNames),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
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
            update_default_version: {
                value: cdktf.booleanToHclTerraform(this._updateDefaultVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            user_data: {
                value: cdktf.stringToHclTerraform(this._userData),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_security_group_ids: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcSecurityGroupIds),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            block_device_mappings: {
                value: cdktf.listMapperHcl(launchTemplateBlockDeviceMappingsToHclTerraform, true)(this._blockDeviceMappings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LaunchTemplateBlockDeviceMappingsList",
            },
            capacity_reservation_specification: {
                value: launchTemplateCapacityReservationSpecificationToHclTerraform(this._capacityReservationSpecification.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LaunchTemplateCapacityReservationSpecificationList",
            },
            cpu_options: {
                value: launchTemplateCpuOptionsToHclTerraform(this._cpuOptions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LaunchTemplateCpuOptionsList",
            },
            credit_specification: {
                value: launchTemplateCreditSpecificationToHclTerraform(this._creditSpecification.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LaunchTemplateCreditSpecificationList",
            },
            elastic_gpu_specifications: {
                value: cdktf.listMapperHcl(launchTemplateElasticGpuSpecificationsToHclTerraform, true)(this._elasticGpuSpecifications.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LaunchTemplateElasticGpuSpecificationsList",
            },
            elastic_inference_accelerator: {
                value: launchTemplateElasticInferenceAcceleratorToHclTerraform(this._elasticInferenceAccelerator.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LaunchTemplateElasticInferenceAcceleratorList",
            },
            enclave_options: {
                value: launchTemplateEnclaveOptionsToHclTerraform(this._enclaveOptions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LaunchTemplateEnclaveOptionsList",
            },
            hibernation_options: {
                value: launchTemplateHibernationOptionsToHclTerraform(this._hibernationOptions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LaunchTemplateHibernationOptionsList",
            },
            iam_instance_profile: {
                value: launchTemplateIamInstanceProfileToHclTerraform(this._iamInstanceProfile.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LaunchTemplateIamInstanceProfileList",
            },
            instance_market_options: {
                value: launchTemplateInstanceMarketOptionsToHclTerraform(this._instanceMarketOptions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LaunchTemplateInstanceMarketOptionsList",
            },
            license_specification: {
                value: cdktf.listMapperHcl(launchTemplateLicenseSpecificationToHclTerraform, true)(this._licenseSpecification.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "LaunchTemplateLicenseSpecificationList",
            },
            metadata_options: {
                value: launchTemplateMetadataOptionsToHclTerraform(this._metadataOptions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LaunchTemplateMetadataOptionsList",
            },
            monitoring: {
                value: launchTemplateMonitoringToHclTerraform(this._monitoring.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LaunchTemplateMonitoringList",
            },
            network_interfaces: {
                value: cdktf.listMapperHcl(launchTemplateNetworkInterfacesToHclTerraform, true)(this._networkInterfaces.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LaunchTemplateNetworkInterfacesList",
            },
            placement: {
                value: launchTemplatePlacementToHclTerraform(this._placement.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LaunchTemplatePlacementList",
            },
            tag_specifications: {
                value: cdktf.listMapperHcl(launchTemplateTagSpecificationsToHclTerraform, true)(this._tagSpecifications.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LaunchTemplateTagSpecificationsList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.LaunchTemplate = LaunchTemplate;
_0 = JSII_RTTI_SYMBOL_1;
LaunchTemplate[_0] = { fqn: "@cdktf/aws-cdk.launchTemplate.LaunchTemplate", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
LaunchTemplate.tfResourceType = "aws_launch_template";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2xhdW5jaC10ZW1wbGF0ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFTQSwrQkFBK0I7QUF3Ti9CLFNBQWdCLCtDQUErQyxDQUFDLE1BQW1HO0lBQ2pLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxxQkFBcUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLG1CQUFtQixDQUFDO1FBQzNFLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUNyRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3JELFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN4RCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUN6RCxDQUFB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QUFDLENBQUE7SUFDNUgsQ0FBQzs7QUF2NUJILHdDQXc1QkM7OztBQXQ1QkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyw2QkFBYyxHQUFHLHFCQUFxQixBQUF4QixDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZVxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNkZWZhdWx0X3ZlcnNpb24gTGF1bmNoVGVtcGxhdGUjZGVmYXVsdF92ZXJzaW9ufVxuICAqL1xuICByZWFkb25seSBkZWZhdWx0VmVyc2lvbj86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2Rlc2NyaXB0aW9uIExhdW5jaFRlbXBsYXRlI2Rlc2NyaXB0aW9ufVxuICAqL1xuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2Rpc2FibGVfYXBpX3Rlcm1pbmF0aW9uIExhdW5jaFRlbXBsYXRlI2Rpc2FibGVfYXBpX3Rlcm1pbmF0aW9ufVxuICAqL1xuICByZWFkb25seSBkaXNhYmxlQXBpVGVybWluYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNlYnNfb3B0aW1pemVkIExhdW5jaFRlbXBsYXRlI2Vic19vcHRpbWl6ZWR9XG4gICovXG4gIHJlYWRvbmx5IGVic09wdGltaXplZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2lkIExhdW5jaFRlbXBsYXRlI2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjaW1hZ2VfaWQgTGF1bmNoVGVtcGxhdGUjaW1hZ2VfaWR9XG4gICovXG4gIHJlYWRvbmx5IGltYWdlSWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNpbnN0YW5jZV9pbml0aWF0ZWRfc2h1dGRvd25fYmVoYXZpb3IgTGF1bmNoVGVtcGxhdGUjaW5zdGFuY2VfaW5pdGlhdGVkX3NodXRkb3duX2JlaGF2aW9yfVxuICAqL1xuICByZWFkb25seSBpbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3I/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNpbnN0YW5jZV90eXBlIExhdW5jaFRlbXBsYXRlI2luc3RhbmNlX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2tlcm5lbF9pZCBMYXVuY2hUZW1wbGF0ZSNrZXJuZWxfaWR9XG4gICovXG4gIHJlYWRvbmx5IGtlcm5lbElkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUja2V5X25hbWUgTGF1bmNoVGVtcGxhdGUja2V5X25hbWV9XG4gICovXG4gIHJlYWRvbmx5IGtleU5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNuYW1lIExhdW5jaFRlbXBsYXRlI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNuYW1lX3ByZWZpeCBMYXVuY2hUZW1wbGF0ZSNuYW1lX3ByZWZpeH1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZVByZWZpeD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI3JhbV9kaXNrX2lkIExhdW5jaFRlbXBsYXRlI3JhbV9kaXNrX2lkfVxuICAqL1xuICByZWFkb25seSByYW1EaXNrSWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNzZWN1cml0eV9ncm91cF9uYW1lcyBMYXVuY2hUZW1wbGF0ZSNzZWN1cml0eV9ncm91cF9uYW1lc31cbiAgKi9cbiAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cE5hbWVzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSN0YWdzIExhdW5jaFRlbXBsYXRlI3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjdGFnc19hbGwgTGF1bmNoVGVtcGxhdGUjdGFnc19hbGx9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjdXBkYXRlX2RlZmF1bHRfdmVyc2lvbiBMYXVuY2hUZW1wbGF0ZSN1cGRhdGVfZGVmYXVsdF92ZXJzaW9ufVxuICAqL1xuICByZWFkb25seSB1cGRhdGVEZWZhdWx0VmVyc2lvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI3VzZXJfZGF0YSBMYXVuY2hUZW1wbGF0ZSN1c2VyX2RhdGF9XG4gICovXG4gIHJlYWRvbmx5IHVzZXJEYXRhPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjdnBjX3NlY3VyaXR5X2dyb3VwX2lkcyBMYXVuY2hUZW1wbGF0ZSN2cGNfc2VjdXJpdHlfZ3JvdXBfaWRzfVxuICAqL1xuICByZWFkb25seSB2cGNTZWN1cml0eUdyb3VwSWRzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIGJsb2NrX2RldmljZV9tYXBwaW5ncyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2Jsb2NrX2RldmljZV9tYXBwaW5ncyBMYXVuY2hUZW1wbGF0ZSNibG9ja19kZXZpY2VfbWFwcGluZ3N9XG4gICovXG4gIHJlYWRvbmx5IGJsb2NrRGV2aWNlTWFwcGluZ3M/OiBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBjYXBhY2l0eV9yZXNlcnZhdGlvbl9zcGVjaWZpY2F0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjY2FwYWNpdHlfcmVzZXJ2YXRpb25fc3BlY2lmaWNhdGlvbiBMYXVuY2hUZW1wbGF0ZSNjYXBhY2l0eV9yZXNlcnZhdGlvbl9zcGVjaWZpY2F0aW9ufVxuICAqL1xuICByZWFkb25seSBjYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbj86IExhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb247XG4gIC8qKlxuICAqIGNwdV9vcHRpb25zIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjY3B1X29wdGlvbnMgTGF1bmNoVGVtcGxhdGUjY3B1X29wdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IGNwdU9wdGlvbnM/OiBMYXVuY2hUZW1wbGF0ZUNwdU9wdGlvbnM7XG4gIC8qKlxuICAqIGNyZWRpdF9zcGVjaWZpY2F0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjY3JlZGl0X3NwZWNpZmljYXRpb24gTGF1bmNoVGVtcGxhdGUjY3JlZGl0X3NwZWNpZmljYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGNyZWRpdFNwZWNpZmljYXRpb24/OiBMYXVuY2hUZW1wbGF0ZUNyZWRpdFNwZWNpZmljYXRpb247XG4gIC8qKlxuICAqIGVsYXN0aWNfZ3B1X3NwZWNpZmljYXRpb25zIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjZWxhc3RpY19ncHVfc3BlY2lmaWNhdGlvbnMgTGF1bmNoVGVtcGxhdGUjZWxhc3RpY19ncHVfc3BlY2lmaWNhdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IGVsYXN0aWNHcHVTcGVjaWZpY2F0aW9ucz86IExhdW5jaFRlbXBsYXRlRWxhc3RpY0dwdVNwZWNpZmljYXRpb25zW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogZWxhc3RpY19pbmZlcmVuY2VfYWNjZWxlcmF0b3IgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNlbGFzdGljX2luZmVyZW5jZV9hY2NlbGVyYXRvciBMYXVuY2hUZW1wbGF0ZSNlbGFzdGljX2luZmVyZW5jZV9hY2NlbGVyYXRvcn1cbiAgKi9cbiAgcmVhZG9ubHkgZWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yPzogTGF1bmNoVGVtcGxhdGVFbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3I7XG4gIC8qKlxuICAqIGVuY2xhdmVfb3B0aW9ucyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2VuY2xhdmVfb3B0aW9ucyBMYXVuY2hUZW1wbGF0ZSNlbmNsYXZlX29wdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IGVuY2xhdmVPcHRpb25zPzogTGF1bmNoVGVtcGxhdGVFbmNsYXZlT3B0aW9ucztcbiAgLyoqXG4gICogaGliZXJuYXRpb25fb3B0aW9ucyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2hpYmVybmF0aW9uX29wdGlvbnMgTGF1bmNoVGVtcGxhdGUjaGliZXJuYXRpb25fb3B0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgaGliZXJuYXRpb25PcHRpb25zPzogTGF1bmNoVGVtcGxhdGVIaWJlcm5hdGlvbk9wdGlvbnM7XG4gIC8qKlxuICAqIGlhbV9pbnN0YW5jZV9wcm9maWxlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjaWFtX2luc3RhbmNlX3Byb2ZpbGUgTGF1bmNoVGVtcGxhdGUjaWFtX2luc3RhbmNlX3Byb2ZpbGV9XG4gICovXG4gIHJlYWRvbmx5IGlhbUluc3RhbmNlUHJvZmlsZT86IExhdW5jaFRlbXBsYXRlSWFtSW5zdGFuY2VQcm9maWxlO1xuICAvKipcbiAgKiBpbnN0YW5jZV9tYXJrZXRfb3B0aW9ucyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2luc3RhbmNlX21hcmtldF9vcHRpb25zIExhdW5jaFRlbXBsYXRlI2luc3RhbmNlX21hcmtldF9vcHRpb25zfVxuICAqL1xuICByZWFkb25seSBpbnN0YW5jZU1hcmtldE9wdGlvbnM/OiBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9ucztcbiAgLyoqXG4gICogbGljZW5zZV9zcGVjaWZpY2F0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjbGljZW5zZV9zcGVjaWZpY2F0aW9uIExhdW5jaFRlbXBsYXRlI2xpY2Vuc2Vfc3BlY2lmaWNhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgbGljZW5zZVNwZWNpZmljYXRpb24/OiBMYXVuY2hUZW1wbGF0ZUxpY2Vuc2VTcGVjaWZpY2F0aW9uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogbWV0YWRhdGFfb3B0aW9ucyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI21ldGFkYXRhX29wdGlvbnMgTGF1bmNoVGVtcGxhdGUjbWV0YWRhdGFfb3B0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgbWV0YWRhdGFPcHRpb25zPzogTGF1bmNoVGVtcGxhdGVNZXRhZGF0YU9wdGlvbnM7XG4gIC8qKlxuICAqIG1vbml0b3JpbmcgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNtb25pdG9yaW5nIExhdW5jaFRlbXBsYXRlI21vbml0b3Jpbmd9XG4gICovXG4gIHJlYWRvbmx5IG1vbml0b3Jpbmc/OiBMYXVuY2hUZW1wbGF0ZU1vbml0b3Jpbmc7XG4gIC8qKlxuICAqIG5ldHdvcmtfaW50ZXJmYWNlcyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI25ldHdvcmtfaW50ZXJmYWNlcyBMYXVuY2hUZW1wbGF0ZSNuZXR3b3JrX2ludGVyZmFjZXN9XG4gICovXG4gIHJlYWRvbmx5IG5ldHdvcmtJbnRlcmZhY2VzPzogTGF1bmNoVGVtcGxhdGVOZXR3b3JrSW50ZXJmYWNlc1tdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHBsYWNlbWVudCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI3BsYWNlbWVudCBMYXVuY2hUZW1wbGF0ZSNwbGFjZW1lbnR9XG4gICovXG4gIHJlYWRvbmx5IHBsYWNlbWVudD86IExhdW5jaFRlbXBsYXRlUGxhY2VtZW50O1xuICAvKipcbiAgKiB0YWdfc3BlY2lmaWNhdGlvbnMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSN0YWdfc3BlY2lmaWNhdGlvbnMgTGF1bmNoVGVtcGxhdGUjdGFnX3NwZWNpZmljYXRpb25zfVxuICAqL1xuICByZWFkb25seSB0YWdTcGVjaWZpY2F0aW9ucz86IExhdW5jaFRlbXBsYXRlVGFnU3BlY2lmaWNhdGlvbnNbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NFYnMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjZGVsZXRlX29uX3Rlcm1pbmF0aW9uIExhdW5jaFRlbXBsYXRlI2RlbGV0ZV9vbl90ZXJtaW5hdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGVsZXRlT25UZXJtaW5hdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2VuY3J5cHRlZCBMYXVuY2hUZW1wbGF0ZSNlbmNyeXB0ZWR9XG4gICovXG4gIHJlYWRvbmx5IGVuY3J5cHRlZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2lvcHMgTGF1bmNoVGVtcGxhdGUjaW9wc31cbiAgKi9cbiAgcmVhZG9ubHkgaW9wcz86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2ttc19rZXlfaWQgTGF1bmNoVGVtcGxhdGUja21zX2tleV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkga21zS2V5SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNzbmFwc2hvdF9pZCBMYXVuY2hUZW1wbGF0ZSNzbmFwc2hvdF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgc25hcHNob3RJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI3Rocm91Z2hwdXQgTGF1bmNoVGVtcGxhdGUjdGhyb3VnaHB1dH1cbiAgKi9cbiAgcmVhZG9ubHkgdGhyb3VnaHB1dD86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI3ZvbHVtZV9zaXplIExhdW5jaFRlbXBsYXRlI3ZvbHVtZV9zaXplfVxuICAqL1xuICByZWFkb25seSB2b2x1bWVTaXplPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjdm9sdW1lX3R5cGUgTGF1bmNoVGVtcGxhdGUjdm9sdW1lX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHZvbHVtZVR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NFYnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NFYnNPdXRwdXRSZWZlcmVuY2UgfCBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NFYnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGVsZXRlX29uX3Rlcm1pbmF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZU9uVGVybWluYXRpb24pLFxuICAgIGVuY3J5cHRlZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0ZWQpLFxuICAgIGlvcHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW9wcyksXG4gICAga21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rbXNLZXlJZCksXG4gICAgc25hcHNob3RfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc25hcHNob3RJZCksXG4gICAgdGhyb3VnaHB1dDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50aHJvdWdocHV0KSxcbiAgICB2b2x1bWVfc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52b2x1bWVTaXplKSxcbiAgICB2b2x1bWVfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52b2x1bWVUeXBlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NFYnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NFYnNPdXRwdXRSZWZlcmVuY2UgfCBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NFYnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGRlbGV0ZV9vbl90ZXJtaW5hdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGVsZXRlT25UZXJtaW5hdGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZW5jcnlwdGVkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0ZWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGlvcHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlvcHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIGttc19rZXlfaWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUlkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzbmFwc2hvdF9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc25hcHNob3RJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdGhyb3VnaHB1dDoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEudGhyb3VnaHB1dCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgdm9sdW1lX3NpemU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZVNpemUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHZvbHVtZV90eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS52b2x1bWVUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIExhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5nc0Vic091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzRWJzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlbGV0ZU9uVGVybWluYXRpb24gPSB0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW5jcnlwdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuY3J5cHRlZCA9IHRoaXMuX2VuY3J5cHRlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW9wcyA9IHRoaXMuX2lvcHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9rbXNLZXlJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rbXNLZXlJZCA9IHRoaXMuX2ttc0tleUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc25hcHNob3RJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zbmFwc2hvdElkID0gdGhpcy5fc25hcHNob3RJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Rocm91Z2hwdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGhyb3VnaHB1dCA9IHRoaXMuX3Rocm91Z2hwdXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl92b2x1bWVTaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZvbHVtZVNpemUgPSB0aGlzLl92b2x1bWVTaXplO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdm9sdW1lVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52b2x1bWVUeXBlID0gdGhpcy5fdm9sdW1lVHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5nc0VicyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RlbGV0ZU9uVGVybWluYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmNyeXB0ZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pb3BzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zbmFwc2hvdElkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGhyb3VnaHB1dCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZvbHVtZVNpemUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92b2x1bWVUeXBlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uID0gdmFsdWUuZGVsZXRlT25UZXJtaW5hdGlvbjtcbiAgICAgIHRoaXMuX2VuY3J5cHRlZCA9IHZhbHVlLmVuY3J5cHRlZDtcbiAgICAgIHRoaXMuX2lvcHMgPSB2YWx1ZS5pb3BzO1xuICAgICAgdGhpcy5fa21zS2V5SWQgPSB2YWx1ZS5rbXNLZXlJZDtcbiAgICAgIHRoaXMuX3NuYXBzaG90SWQgPSB2YWx1ZS5zbmFwc2hvdElkO1xuICAgICAgdGhpcy5fdGhyb3VnaHB1dCA9IHZhbHVlLnRocm91Z2hwdXQ7XG4gICAgICB0aGlzLl92b2x1bWVTaXplID0gdmFsdWUudm9sdW1lU2l6ZTtcbiAgICAgIHRoaXMuX3ZvbHVtZVR5cGUgPSB2YWx1ZS52b2x1bWVUeXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlbGV0ZV9vbl90ZXJtaW5hdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxldGVPblRlcm1pbmF0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWxldGVPblRlcm1pbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsZXRlX29uX3Rlcm1pbmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWxldGVPblRlcm1pbmF0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsZXRlT25UZXJtaW5hdGlvbigpIHtcbiAgICB0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxldGVPblRlcm1pbmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZU9uVGVybWluYXRpb247XG4gIH1cblxuICAvLyBlbmNyeXB0ZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5jcnlwdGVkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbmNyeXB0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmNyeXB0ZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuY3J5cHRlZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW5jcnlwdGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5jcnlwdGVkKCkge1xuICAgIHRoaXMuX2VuY3J5cHRlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRlZDtcbiAgfVxuXG4gIC8vIGlvcHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pb3BzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpb3BzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW9wcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW9wcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW9wcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElvcHMoKSB7XG4gICAgdGhpcy5faW9wcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW9wc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pb3BzO1xuICB9XG5cbiAgLy8ga21zX2tleV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNLZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlJZCgpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5SWQ7XG4gIH1cblxuICAvLyBzbmFwc2hvdF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zbmFwc2hvdElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzbmFwc2hvdElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc25hcHNob3RfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNuYXBzaG90SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NuYXBzaG90SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTbmFwc2hvdElkKCkge1xuICAgIHRoaXMuX3NuYXBzaG90SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNuYXBzaG90SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc25hcHNob3RJZDtcbiAgfVxuXG4gIC8vIHRocm91Z2hwdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aHJvdWdocHV0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0aHJvdWdocHV0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGhyb3VnaHB1dCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGhyb3VnaHB1dCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGhyb3VnaHB1dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRocm91Z2hwdXQoKSB7XG4gICAgdGhpcy5fdGhyb3VnaHB1dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGhyb3VnaHB1dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aHJvdWdocHV0O1xuICB9XG5cbiAgLy8gdm9sdW1lX3NpemUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92b2x1bWVTaXplPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB2b2x1bWVTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndm9sdW1lX3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZvbHVtZVNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZvbHVtZVNpemUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWb2x1bWVTaXplKCkge1xuICAgIHRoaXMuX3ZvbHVtZVNpemUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZvbHVtZVNpemVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdm9sdW1lU2l6ZTtcbiAgfVxuXG4gIC8vIHZvbHVtZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdm9sdW1lVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdm9sdW1lVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZvbHVtZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2b2x1bWVUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92b2x1bWVUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Vm9sdW1lVHlwZSgpIHtcbiAgICB0aGlzLl92b2x1bWVUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2b2x1bWVUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZvbHVtZVR5cGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2RldmljZV9uYW1lIExhdW5jaFRlbXBsYXRlI2RldmljZV9uYW1lfVxuICAqL1xuICByZWFkb25seSBkZXZpY2VOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjbm9fZGV2aWNlIExhdW5jaFRlbXBsYXRlI25vX2RldmljZX1cbiAgKi9cbiAgcmVhZG9ubHkgbm9EZXZpY2U/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSN2aXJ0dWFsX25hbWUgTGF1bmNoVGVtcGxhdGUjdmlydHVhbF9uYW1lfVxuICAqL1xuICByZWFkb25seSB2aXJ0dWFsTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogZWJzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjZWJzIExhdW5jaFRlbXBsYXRlI2Vic31cbiAgKi9cbiAgcmVhZG9ubHkgZWJzPzogTGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzRWJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGV2aWNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlTmFtZSksXG4gICAgbm9fZGV2aWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5vRGV2aWNlKSxcbiAgICB2aXJ0dWFsX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmlydHVhbE5hbWUpLFxuICAgIGViczogbGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzRWJzVG9UZXJyYWZvcm0oc3RydWN0IS5lYnMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5nc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5ncyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBkZXZpY2VfbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlTmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbm9fZGV2aWNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ub0RldmljZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdmlydHVhbF9uYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS52aXJ0dWFsTmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZWJzOiB7XG4gICAgICB2YWx1ZTogbGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzRWJzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lYnMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NFYnNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIExhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5nc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3MgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RldmljZU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGV2aWNlTmFtZSA9IHRoaXMuX2RldmljZU5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ub0RldmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ub0RldmljZSA9IHRoaXMuX25vRGV2aWNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmlydHVhbE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmlydHVhbE5hbWUgPSB0aGlzLl92aXJ0dWFsTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Vicz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lYnMgPSB0aGlzLl9lYnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3MgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGV2aWNlTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25vRGV2aWNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmlydHVhbE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lYnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZXZpY2VOYW1lID0gdmFsdWUuZGV2aWNlTmFtZTtcbiAgICAgIHRoaXMuX25vRGV2aWNlID0gdmFsdWUubm9EZXZpY2U7XG4gICAgICB0aGlzLl92aXJ0dWFsTmFtZSA9IHZhbHVlLnZpcnR1YWxOYW1lO1xuICAgICAgdGhpcy5fZWJzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5lYnM7XG4gICAgfVxuICB9XG5cbiAgLy8gZGV2aWNlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGV2aWNlTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGV2aWNlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RldmljZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXZpY2VOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXZpY2VOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGV2aWNlTmFtZSgpIHtcbiAgICB0aGlzLl9kZXZpY2VOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXZpY2VOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZU5hbWU7XG4gIH1cblxuICAvLyBub19kZXZpY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbm9EZXZpY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5vRGV2aWNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbm9fZGV2aWNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBub0RldmljZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbm9EZXZpY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROb0RldmljZSgpIHtcbiAgICB0aGlzLl9ub0RldmljZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbm9EZXZpY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9EZXZpY2U7XG4gIH1cblxuICAvLyB2aXJ0dWFsX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmlydHVhbE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZpcnR1YWxOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmlydHVhbF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCB2aXJ0dWFsTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmlydHVhbE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWaXJ0dWFsTmFtZSgpIHtcbiAgICB0aGlzLl92aXJ0dWFsTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmlydHVhbE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlydHVhbE5hbWU7XG4gIH1cblxuICAvLyBlYnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWJzID0gbmV3IExhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5nc0Vic091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImVic1wiKTtcbiAgcHVibGljIGdldCBlYnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VicztcbiAgfVxuICBwdWJsaWMgcHV0RWJzKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NFYnMpIHtcbiAgICB0aGlzLl9lYnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVicygpIHtcbiAgICB0aGlzLl9lYnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vicy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogTGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IExhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5nc091dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25DYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2NhcGFjaXR5X3Jlc2VydmF0aW9uX2lkIExhdW5jaFRlbXBsYXRlI2NhcGFjaXR5X3Jlc2VydmF0aW9uX2lkfVxuICAqL1xuICByZWFkb25seSBjYXBhY2l0eVJlc2VydmF0aW9uSWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uQ2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldFRvVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25DYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0T3V0cHV0UmVmZXJlbmNlIHwgTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbkNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2FwYWNpdHlfcmVzZXJ2YXRpb25faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2FwYWNpdHlSZXNlcnZhdGlvbklkKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uQ2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldFRvSGNsVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25DYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0T3V0cHV0UmVmZXJlbmNlIHwgTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbkNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNhcGFjaXR5X3Jlc2VydmF0aW9uX2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jYXBhY2l0eVJlc2VydmF0aW9uSWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbkNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IExhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25DYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2FwYWNpdHlSZXNlcnZhdGlvbklkID0gdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvbklkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbkNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uSWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25JZCA9IHZhbHVlLmNhcGFjaXR5UmVzZXJ2YXRpb25JZDtcbiAgICB9XG4gIH1cblxuICAvLyBjYXBhY2l0eV9yZXNlcnZhdGlvbl9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYXBhY2l0eVJlc2VydmF0aW9uSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNhcGFjaXR5UmVzZXJ2YXRpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhcGFjaXR5X3Jlc2VydmF0aW9uX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBjYXBhY2l0eVJlc2VydmF0aW9uSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25JZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhcGFjaXR5UmVzZXJ2YXRpb25JZCgpIHtcbiAgICB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhcGFjaXR5UmVzZXJ2YXRpb25JZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uSWQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNjYXBhY2l0eV9yZXNlcnZhdGlvbl9wcmVmZXJlbmNlIExhdW5jaFRlbXBsYXRlI2NhcGFjaXR5X3Jlc2VydmF0aW9uX3ByZWZlcmVuY2V9XG4gICovXG4gIHJlYWRvbmx5IGNhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlPzogc3RyaW5nO1xuICAvKipcbiAgKiBjYXBhY2l0eV9yZXNlcnZhdGlvbl90YXJnZXQgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNjYXBhY2l0eV9yZXNlcnZhdGlvbl90YXJnZXQgTGF1bmNoVGVtcGxhdGUjY2FwYWNpdHlfcmVzZXJ2YXRpb25fdGFyZ2V0fVxuICAqL1xuICByZWFkb25seSBjYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0PzogTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbkNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2FwYWNpdHlfcmVzZXJ2YXRpb25fcHJlZmVyZW5jZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZSksXG4gICAgY2FwYWNpdHlfcmVzZXJ2YXRpb25fdGFyZ2V0OiBsYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uQ2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldFRvVGVycmFmb3JtKHN0cnVjdCEuY2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBMYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjYXBhY2l0eV9yZXNlcnZhdGlvbl9wcmVmZXJlbmNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgY2FwYWNpdHlfcmVzZXJ2YXRpb25fdGFyZ2V0OiB7XG4gICAgICB2YWx1ZTogbGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbkNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXRUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJMYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uQ2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldExpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvblByZWZlcmVuY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2FwYWNpdHlSZXNlcnZhdGlvblByZWZlcmVuY2UgPSB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQ/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldCA9IHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvblByZWZlcmVuY2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlID0gdmFsdWUuY2FwYWNpdHlSZXNlcnZhdGlvblByZWZlcmVuY2U7XG4gICAgICB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0LmludGVybmFsVmFsdWUgPSB2YWx1ZS5jYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGNhcGFjaXR5X3Jlc2VydmF0aW9uX3ByZWZlcmVuY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2FwYWNpdHlSZXNlcnZhdGlvblByZWZlcmVuY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2FwYWNpdHlfcmVzZXJ2YXRpb25fcHJlZmVyZW5jZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2FwYWNpdHlSZXNlcnZhdGlvblByZWZlcmVuY2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2FwYWNpdHlSZXNlcnZhdGlvblByZWZlcmVuY2UoKSB7XG4gICAgdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvblByZWZlcmVuY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlO1xuICB9XG5cbiAgLy8gY2FwYWNpdHlfcmVzZXJ2YXRpb25fdGFyZ2V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQgPSBuZXcgTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbkNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXRPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJjYXBhY2l0eV9yZXNlcnZhdGlvbl90YXJnZXRcIik7XG4gIHB1YmxpYyBnZXQgY2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldDtcbiAgfVxuICBwdWJsaWMgcHV0Q2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldCh2YWx1ZTogTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbkNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQpIHtcbiAgICB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0KCkge1xuICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0LmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVDcHVPcHRpb25zIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2NvcmVfY291bnQgTGF1bmNoVGVtcGxhdGUjY29yZV9jb3VudH1cbiAgKi9cbiAgcmVhZG9ubHkgY29yZUNvdW50PzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjdGhyZWFkc19wZXJfY29yZSBMYXVuY2hUZW1wbGF0ZSN0aHJlYWRzX3Blcl9jb3JlfVxuICAqL1xuICByZWFkb25seSB0aHJlYWRzUGVyQ29yZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlQ3B1T3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlQ3B1T3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlQ3B1T3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb3JlX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvcmVDb3VudCksXG4gICAgdGhyZWFkc19wZXJfY29yZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50aHJlYWRzUGVyQ29yZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVDcHVPcHRpb25zVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVDcHVPcHRpb25zT3V0cHV0UmVmZXJlbmNlIHwgTGF1bmNoVGVtcGxhdGVDcHVPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjb3JlX2NvdW50OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb3JlQ291bnQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHRocmVhZHNfcGVyX2NvcmU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRocmVhZHNQZXJDb3JlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIExhdW5jaFRlbXBsYXRlQ3B1T3B0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGF1bmNoVGVtcGxhdGVDcHVPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb3JlQ291bnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29yZUNvdW50ID0gdGhpcy5fY29yZUNvdW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGhyZWFkc1BlckNvcmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGhyZWFkc1BlckNvcmUgPSB0aGlzLl90aHJlYWRzUGVyQ29yZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhdW5jaFRlbXBsYXRlQ3B1T3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvcmVDb3VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RocmVhZHNQZXJDb3JlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb3JlQ291bnQgPSB2YWx1ZS5jb3JlQ291bnQ7XG4gICAgICB0aGlzLl90aHJlYWRzUGVyQ29yZSA9IHZhbHVlLnRocmVhZHNQZXJDb3JlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvcmVfY291bnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29yZUNvdW50PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBjb3JlQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdjb3JlX2NvdW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjb3JlQ291bnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2NvcmVDb3VudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvcmVDb3VudCgpIHtcbiAgICB0aGlzLl9jb3JlQ291bnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvcmVDb3VudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3JlQ291bnQ7XG4gIH1cblxuICAvLyB0aHJlYWRzX3Blcl9jb3JlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RocmVhZHNQZXJDb3JlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0aHJlYWRzUGVyQ29yZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RocmVhZHNfcGVyX2NvcmUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRocmVhZHNQZXJDb3JlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90aHJlYWRzUGVyQ29yZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRocmVhZHNQZXJDb3JlKCkge1xuICAgIHRoaXMuX3RocmVhZHNQZXJDb3JlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aHJlYWRzUGVyQ29yZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aHJlYWRzUGVyQ29yZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZUNyZWRpdFNwZWNpZmljYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjY3B1X2NyZWRpdHMgTGF1bmNoVGVtcGxhdGUjY3B1X2NyZWRpdHN9XG4gICovXG4gIHJlYWRvbmx5IGNwdUNyZWRpdHM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZUNyZWRpdFNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUNyZWRpdFNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBMYXVuY2hUZW1wbGF0ZUNyZWRpdFNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY3B1X2NyZWRpdHM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3B1Q3JlZGl0cyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVDcmVkaXRTcGVjaWZpY2F0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVDcmVkaXRTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgTGF1bmNoVGVtcGxhdGVDcmVkaXRTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjcHVfY3JlZGl0czoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY3B1Q3JlZGl0cyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBMYXVuY2hUZW1wbGF0ZUNyZWRpdFNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IExhdW5jaFRlbXBsYXRlQ3JlZGl0U3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3B1Q3JlZGl0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jcHVDcmVkaXRzID0gdGhpcy5fY3B1Q3JlZGl0cztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhdW5jaFRlbXBsYXRlQ3JlZGl0U3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NwdUNyZWRpdHMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NwdUNyZWRpdHMgPSB2YWx1ZS5jcHVDcmVkaXRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNwdV9jcmVkaXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NwdUNyZWRpdHM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNwdUNyZWRpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcHVfY3JlZGl0cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3B1Q3JlZGl0cyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3B1Q3JlZGl0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENwdUNyZWRpdHMoKSB7XG4gICAgdGhpcy5fY3B1Q3JlZGl0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3B1Q3JlZGl0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcHVDcmVkaXRzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlRWxhc3RpY0dwdVNwZWNpZmljYXRpb25zIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI3R5cGUgTGF1bmNoVGVtcGxhdGUjdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVFbGFzdGljR3B1U3BlY2lmaWNhdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUVsYXN0aWNHcHVTcGVjaWZpY2F0aW9ucyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVFbGFzdGljR3B1U3BlY2lmaWNhdGlvbnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUVsYXN0aWNHcHVTcGVjaWZpY2F0aW9ucyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICB0eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIExhdW5jaFRlbXBsYXRlRWxhc3RpY0dwdVNwZWNpZmljYXRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IExhdW5jaFRlbXBsYXRlRWxhc3RpY0dwdVNwZWNpZmljYXRpb25zIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl90eXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnR5cGUgPSB0aGlzLl90eXBlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTGF1bmNoVGVtcGxhdGVFbGFzdGljR3B1U3BlY2lmaWNhdGlvbnMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlID0gdmFsdWUudHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGF1bmNoVGVtcGxhdGVFbGFzdGljR3B1U3BlY2lmaWNhdGlvbnNMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBMYXVuY2hUZW1wbGF0ZUVsYXN0aWNHcHVTcGVjaWZpY2F0aW9uc1tdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBMYXVuY2hUZW1wbGF0ZUVsYXN0aWNHcHVTcGVjaWZpY2F0aW9uc091dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBMYXVuY2hUZW1wbGF0ZUVsYXN0aWNHcHVTcGVjaWZpY2F0aW9uc091dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlRWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI3R5cGUgTGF1bmNoVGVtcGxhdGUjdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVFbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3JUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUVsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvck91dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlRWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVFbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3JUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUVsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvck91dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlRWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICB0eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIExhdW5jaFRlbXBsYXRlRWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMYXVuY2hUZW1wbGF0ZUVsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fdHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50eXBlID0gdGhpcy5fdHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhdW5jaFRlbXBsYXRlRWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlLnR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVFbmNsYXZlT3B0aW9ucyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNlbmFibGVkIExhdW5jaFRlbXBsYXRlI2VuYWJsZWR9XG4gICovXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZUVuY2xhdmVPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVFbmNsYXZlT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlRW5jbGF2ZU9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVFbmNsYXZlT3B0aW9uc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlRW5jbGF2ZU9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBMYXVuY2hUZW1wbGF0ZUVuY2xhdmVPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBlbmFibGVkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTGF1bmNoVGVtcGxhdGVFbmNsYXZlT3B0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGF1bmNoVGVtcGxhdGVFbmNsYXZlT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVkID0gdGhpcy5fZW5hYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhdW5jaFRlbXBsYXRlRW5jbGF2ZU9wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdmFsdWUuZW5hYmxlZDtcbiAgICB9XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZWQoKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlSGliZXJuYXRpb25PcHRpb25zIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2NvbmZpZ3VyZWQgTGF1bmNoVGVtcGxhdGUjY29uZmlndXJlZH1cbiAgKi9cbiAgcmVhZG9ubHkgY29uZmlndXJlZDogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVIaWJlcm5hdGlvbk9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUhpYmVybmF0aW9uT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlSGliZXJuYXRpb25PcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNvbmZpZ3VyZWQpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlSGliZXJuYXRpb25PcHRpb25zVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVIaWJlcm5hdGlvbk9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBMYXVuY2hUZW1wbGF0ZUhpYmVybmF0aW9uT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgY29uZmlndXJlZDoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvbmZpZ3VyZWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIExhdW5jaFRlbXBsYXRlSGliZXJuYXRpb25PcHRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMYXVuY2hUZW1wbGF0ZUhpYmVybmF0aW9uT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29uZmlndXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb25maWd1cmVkID0gdGhpcy5fY29uZmlndXJlZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhdW5jaFRlbXBsYXRlSGliZXJuYXRpb25PcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29uZmlndXJlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY29uZmlndXJlZCA9IHZhbHVlLmNvbmZpZ3VyZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gY29uZmlndXJlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jb25maWd1cmVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBjb25maWd1cmVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2NvbmZpZ3VyZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbmZpZ3VyZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2NvbmZpZ3VyZWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uZmlndXJlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWd1cmVkO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlSWFtSW5zdGFuY2VQcm9maWxlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2FybiBMYXVuY2hUZW1wbGF0ZSNhcm59XG4gICovXG4gIHJlYWRvbmx5IGFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI25hbWUgTGF1bmNoVGVtcGxhdGUjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlSWFtSW5zdGFuY2VQcm9maWxlVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVJYW1JbnN0YW5jZVByb2ZpbGVPdXRwdXRSZWZlcmVuY2UgfCBMYXVuY2hUZW1wbGF0ZUlhbUluc3RhbmNlUHJvZmlsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlSWFtSW5zdGFuY2VQcm9maWxlVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVJYW1JbnN0YW5jZVByb2ZpbGVPdXRwdXRSZWZlcmVuY2UgfCBMYXVuY2hUZW1wbGF0ZUlhbUluc3RhbmNlUHJvZmlsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTGF1bmNoVGVtcGxhdGVJYW1JbnN0YW5jZVByb2ZpbGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IExhdW5jaFRlbXBsYXRlSWFtSW5zdGFuY2VQcm9maWxlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXJuID0gdGhpcy5fYXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uYW1lID0gdGhpcy5fbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhdW5jaFRlbXBsYXRlSWFtSW5zdGFuY2VQcm9maWxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYXJuID0gdmFsdWUuYXJuO1xuICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgfVxuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Fybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFybigpIHtcbiAgICB0aGlzLl9hcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcm47XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnNTcG90T3B0aW9ucyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNibG9ja19kdXJhdGlvbl9taW51dGVzIExhdW5jaFRlbXBsYXRlI2Jsb2NrX2R1cmF0aW9uX21pbnV0ZXN9XG4gICovXG4gIHJlYWRvbmx5IGJsb2NrRHVyYXRpb25NaW51dGVzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjaW5zdGFuY2VfaW50ZXJydXB0aW9uX2JlaGF2aW9yIExhdW5jaFRlbXBsYXRlI2luc3RhbmNlX2ludGVycnVwdGlvbl9iZWhhdmlvcn1cbiAgKi9cbiAgcmVhZG9ubHkgaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI21heF9wcmljZSBMYXVuY2hUZW1wbGF0ZSNtYXhfcHJpY2V9XG4gICovXG4gIHJlYWRvbmx5IG1heFByaWNlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjc3BvdF9pbnN0YW5jZV90eXBlIExhdW5jaFRlbXBsYXRlI3Nwb3RfaW5zdGFuY2VfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgc3BvdEluc3RhbmNlVHlwZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI3ZhbGlkX3VudGlsIExhdW5jaFRlbXBsYXRlI3ZhbGlkX3VudGlsfVxuICAqL1xuICByZWFkb25seSB2YWxpZFVudGlsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnNTcG90T3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zU3BvdE9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc1Nwb3RPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJsb2NrX2R1cmF0aW9uX21pbnV0ZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuYmxvY2tEdXJhdGlvbk1pbnV0ZXMpLFxuICAgIGluc3RhbmNlX2ludGVycnVwdGlvbl9iZWhhdmlvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yKSxcbiAgICBtYXhfcHJpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWF4UHJpY2UpLFxuICAgIHNwb3RfaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zcG90SW5zdGFuY2VUeXBlKSxcbiAgICB2YWxpZF91bnRpbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWxpZFVudGlsKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc1Nwb3RPcHRpb25zVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnNTcG90T3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zU3BvdE9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGJsb2NrX2R1cmF0aW9uX21pbnV0ZXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmJsb2NrRHVyYXRpb25NaW51dGVzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBpbnN0YW5jZV9pbnRlcnJ1cHRpb25fYmVoYXZpb3I6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3IpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1heF9wcmljZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWF4UHJpY2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNwb3RfaW5zdGFuY2VfdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3BvdEluc3RhbmNlVHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdmFsaWRfdW50aWw6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnZhbGlkVW50aWwpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnNTcG90T3B0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnNTcG90T3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYmxvY2tEdXJhdGlvbk1pbnV0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYmxvY2tEdXJhdGlvbk1pbnV0ZXMgPSB0aGlzLl9ibG9ja0R1cmF0aW9uTWludXRlcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvciA9IHRoaXMuX2luc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3I7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXhQcmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhQcmljZSA9IHRoaXMuX21heFByaWNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3BvdEluc3RhbmNlVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zcG90SW5zdGFuY2VUeXBlID0gdGhpcy5fc3BvdEluc3RhbmNlVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbGlkVW50aWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsaWRVbnRpbCA9IHRoaXMuX3ZhbGlkVW50aWw7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc1Nwb3RPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYmxvY2tEdXJhdGlvbk1pbnV0ZXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWF4UHJpY2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zcG90SW5zdGFuY2VUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsaWRVbnRpbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYmxvY2tEdXJhdGlvbk1pbnV0ZXMgPSB2YWx1ZS5ibG9ja0R1cmF0aW9uTWludXRlcztcbiAgICAgIHRoaXMuX2luc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3IgPSB2YWx1ZS5pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yO1xuICAgICAgdGhpcy5fbWF4UHJpY2UgPSB2YWx1ZS5tYXhQcmljZTtcbiAgICAgIHRoaXMuX3Nwb3RJbnN0YW5jZVR5cGUgPSB2YWx1ZS5zcG90SW5zdGFuY2VUeXBlO1xuICAgICAgdGhpcy5fdmFsaWRVbnRpbCA9IHZhbHVlLnZhbGlkVW50aWw7XG4gICAgfVxuICB9XG5cbiAgLy8gYmxvY2tfZHVyYXRpb25fbWludXRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ibG9ja0R1cmF0aW9uTWludXRlcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYmxvY2tEdXJhdGlvbk1pbnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdibG9ja19kdXJhdGlvbl9taW51dGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBibG9ja0R1cmF0aW9uTWludXRlcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYmxvY2tEdXJhdGlvbk1pbnV0ZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCbG9ja0R1cmF0aW9uTWludXRlcygpIHtcbiAgICB0aGlzLl9ibG9ja0R1cmF0aW9uTWludXRlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmxvY2tEdXJhdGlvbk1pbnV0ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmxvY2tEdXJhdGlvbk1pbnV0ZXM7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9pbnRlcnJ1cHRpb25fYmVoYXZpb3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2ludGVycnVwdGlvbl9iZWhhdmlvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3IoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yO1xuICB9XG5cbiAgLy8gbWF4X3ByaWNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heFByaWNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtYXhQcmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21heF9wcmljZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4UHJpY2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21heFByaWNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4UHJpY2UoKSB7XG4gICAgdGhpcy5fbWF4UHJpY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heFByaWNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heFByaWNlO1xuICB9XG5cbiAgLy8gc3BvdF9pbnN0YW5jZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Nwb3RJbnN0YW5jZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNwb3RJbnN0YW5jZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzcG90X2luc3RhbmNlX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNwb3RJbnN0YW5jZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Nwb3RJbnN0YW5jZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcG90SW5zdGFuY2VUeXBlKCkge1xuICAgIHRoaXMuX3Nwb3RJbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNwb3RJbnN0YW5jZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BvdEluc3RhbmNlVHlwZTtcbiAgfVxuXG4gIC8vIHZhbGlkX3VudGlsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmFsaWRVbnRpbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmFsaWRVbnRpbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbGlkX3VudGlsJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWxpZFVudGlsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWxpZFVudGlsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmFsaWRVbnRpbCgpIHtcbiAgICB0aGlzLl92YWxpZFVudGlsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWxpZFVudGlsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkVW50aWw7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjbWFya2V0X3R5cGUgTGF1bmNoVGVtcGxhdGUjbWFya2V0X3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IG1hcmtldFR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIHNwb3Rfb3B0aW9ucyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI3Nwb3Rfb3B0aW9ucyBMYXVuY2hUZW1wbGF0ZSNzcG90X29wdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IHNwb3RPcHRpb25zPzogTGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnNTcG90T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXJrZXRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYXJrZXRUeXBlKSxcbiAgICBzcG90X29wdGlvbnM6IGxhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zU3BvdE9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3QhLnNwb3RPcHRpb25zKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zT3V0cHV0UmVmZXJlbmNlIHwgTGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIG1hcmtldF90eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tYXJrZXRUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzcG90X29wdGlvbnM6IHtcbiAgICAgIHZhbHVlOiBsYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc1Nwb3RPcHRpb25zVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zcG90T3B0aW9ucyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkxhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zU3BvdE9wdGlvbnNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIExhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWFya2V0VHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXJrZXRUeXBlID0gdGhpcy5fbWFya2V0VHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Nwb3RPcHRpb25zPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNwb3RPcHRpb25zID0gdGhpcy5fc3BvdE9wdGlvbnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21hcmtldFR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zcG90T3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXJrZXRUeXBlID0gdmFsdWUubWFya2V0VHlwZTtcbiAgICAgIHRoaXMuX3Nwb3RPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zcG90T3B0aW9ucztcbiAgICB9XG4gIH1cblxuICAvLyBtYXJrZXRfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXJrZXRUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtYXJrZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWFya2V0X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1hcmtldFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21hcmtldFR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXJrZXRUeXBlKCkge1xuICAgIHRoaXMuX21hcmtldFR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hcmtldFR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFya2V0VHlwZTtcbiAgfVxuXG4gIC8vIHNwb3Rfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zcG90T3B0aW9ucyA9IG5ldyBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc1Nwb3RPcHRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwic3BvdF9vcHRpb25zXCIpO1xuICBwdWJsaWMgZ2V0IHNwb3RPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9zcG90T3B0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0U3BvdE9wdGlvbnModmFsdWU6IExhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zU3BvdE9wdGlvbnMpIHtcbiAgICB0aGlzLl9zcG90T3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3BvdE9wdGlvbnMoKSB7XG4gICAgdGhpcy5fc3BvdE9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3BvdE9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BvdE9wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZUxpY2Vuc2VTcGVjaWZpY2F0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2xpY2Vuc2VfY29uZmlndXJhdGlvbl9hcm4gTGF1bmNoVGVtcGxhdGUjbGljZW5zZV9jb25maWd1cmF0aW9uX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgbGljZW5zZUNvbmZpZ3VyYXRpb25Bcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlTGljZW5zZVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUxpY2Vuc2VTcGVjaWZpY2F0aW9uIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGljZW5zZV9jb25maWd1cmF0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5saWNlbnNlQ29uZmlndXJhdGlvbkFybiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVMaWNlbnNlU3BlY2lmaWNhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlTGljZW5zZVNwZWNpZmljYXRpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbGljZW5zZV9jb25maWd1cmF0aW9uX2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubGljZW5zZUNvbmZpZ3VyYXRpb25Bcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTGF1bmNoVGVtcGxhdGVMaWNlbnNlU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMYXVuY2hUZW1wbGF0ZUxpY2Vuc2VTcGVjaWZpY2F0aW9uIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9saWNlbnNlQ29uZmlndXJhdGlvbkFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5saWNlbnNlQ29uZmlndXJhdGlvbkFybiA9IHRoaXMuX2xpY2Vuc2VDb25maWd1cmF0aW9uQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTGF1bmNoVGVtcGxhdGVMaWNlbnNlU3BlY2lmaWNhdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9saWNlbnNlQ29uZmlndXJhdGlvbkFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9saWNlbnNlQ29uZmlndXJhdGlvbkFybiA9IHZhbHVlLmxpY2Vuc2VDb25maWd1cmF0aW9uQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxpY2Vuc2VfY29uZmlndXJhdGlvbl9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbGljZW5zZUNvbmZpZ3VyYXRpb25Bcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxpY2Vuc2VDb25maWd1cmF0aW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGljZW5zZV9jb25maWd1cmF0aW9uX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGljZW5zZUNvbmZpZ3VyYXRpb25Bcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xpY2Vuc2VDb25maWd1cmF0aW9uQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxpY2Vuc2VDb25maWd1cmF0aW9uQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpY2Vuc2VDb25maWd1cmF0aW9uQXJuO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYXVuY2hUZW1wbGF0ZUxpY2Vuc2VTcGVjaWZpY2F0aW9uTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogTGF1bmNoVGVtcGxhdGVMaWNlbnNlU3BlY2lmaWNhdGlvbltdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBMYXVuY2hUZW1wbGF0ZUxpY2Vuc2VTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IExhdW5jaFRlbXBsYXRlTGljZW5zZVNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZU1ldGFkYXRhT3B0aW9ucyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNodHRwX2VuZHBvaW50IExhdW5jaFRlbXBsYXRlI2h0dHBfZW5kcG9pbnR9XG4gICovXG4gIHJlYWRvbmx5IGh0dHBFbmRwb2ludD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2h0dHBfcHJvdG9jb2xfaXB2NiBMYXVuY2hUZW1wbGF0ZSNodHRwX3Byb3RvY29sX2lwdjZ9XG4gICovXG4gIHJlYWRvbmx5IGh0dHBQcm90b2NvbElwdjY/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNodHRwX3B1dF9yZXNwb25zZV9ob3BfbGltaXQgTGF1bmNoVGVtcGxhdGUjaHR0cF9wdXRfcmVzcG9uc2VfaG9wX2xpbWl0fVxuICAqL1xuICByZWFkb25seSBodHRwUHV0UmVzcG9uc2VIb3BMaW1pdD86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2h0dHBfdG9rZW5zIExhdW5jaFRlbXBsYXRlI2h0dHBfdG9rZW5zfVxuICAqL1xuICByZWFkb25seSBodHRwVG9rZW5zPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjaW5zdGFuY2VfbWV0YWRhdGFfdGFncyBMYXVuY2hUZW1wbGF0ZSNpbnN0YW5jZV9tZXRhZGF0YV90YWdzfVxuICAqL1xuICByZWFkb25seSBpbnN0YW5jZU1ldGFkYXRhVGFncz86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlTWV0YWRhdGFPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVNZXRhZGF0YU9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBMYXVuY2hUZW1wbGF0ZU1ldGFkYXRhT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBodHRwX2VuZHBvaW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHBFbmRwb2ludCksXG4gICAgaHR0cF9wcm90b2NvbF9pcHY2OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHBQcm90b2NvbElwdjYpLFxuICAgIGh0dHBfcHV0X3Jlc3BvbnNlX2hvcF9saW1pdDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5odHRwUHV0UmVzcG9uc2VIb3BMaW1pdCksXG4gICAgaHR0cF90b2tlbnM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaHR0cFRva2VucyksXG4gICAgaW5zdGFuY2VfbWV0YWRhdGFfdGFnczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZU1ldGFkYXRhVGFncyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVNZXRhZGF0YU9wdGlvbnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZU1ldGFkYXRhT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlTWV0YWRhdGFPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBodHRwX2VuZHBvaW50OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5odHRwRW5kcG9pbnQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGh0dHBfcHJvdG9jb2xfaXB2Njoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaHR0cFByb3RvY29sSXB2NiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaHR0cF9wdXRfcmVzcG9uc2VfaG9wX2xpbWl0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5odHRwUHV0UmVzcG9uc2VIb3BMaW1pdCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgaHR0cF90b2tlbnM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmh0dHBUb2tlbnMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGluc3RhbmNlX21ldGFkYXRhX3RhZ3M6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlTWV0YWRhdGFUYWdzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIExhdW5jaFRlbXBsYXRlTWV0YWRhdGFPcHRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMYXVuY2hUZW1wbGF0ZU1ldGFkYXRhT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faHR0cEVuZHBvaW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmh0dHBFbmRwb2ludCA9IHRoaXMuX2h0dHBFbmRwb2ludDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2h0dHBQcm90b2NvbElwdjYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaHR0cFByb3RvY29sSXB2NiA9IHRoaXMuX2h0dHBQcm90b2NvbElwdjY7XG4gICAgfVxuICAgIGlmICh0aGlzLl9odHRwUHV0UmVzcG9uc2VIb3BMaW1pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5odHRwUHV0UmVzcG9uc2VIb3BMaW1pdCA9IHRoaXMuX2h0dHBQdXRSZXNwb25zZUhvcExpbWl0O1xuICAgIH1cbiAgICBpZiAodGhpcy5faHR0cFRva2VucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5odHRwVG9rZW5zID0gdGhpcy5faHR0cFRva2VucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlTWV0YWRhdGFUYWdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmluc3RhbmNlTWV0YWRhdGFUYWdzID0gdGhpcy5faW5zdGFuY2VNZXRhZGF0YVRhZ3M7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZU1ldGFkYXRhT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2h0dHBFbmRwb2ludCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2h0dHBQcm90b2NvbElwdjYgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9odHRwUHV0UmVzcG9uc2VIb3BMaW1pdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2h0dHBUb2tlbnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnN0YW5jZU1ldGFkYXRhVGFncyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faHR0cEVuZHBvaW50ID0gdmFsdWUuaHR0cEVuZHBvaW50O1xuICAgICAgdGhpcy5faHR0cFByb3RvY29sSXB2NiA9IHZhbHVlLmh0dHBQcm90b2NvbElwdjY7XG4gICAgICB0aGlzLl9odHRwUHV0UmVzcG9uc2VIb3BMaW1pdCA9IHZhbHVlLmh0dHBQdXRSZXNwb25zZUhvcExpbWl0O1xuICAgICAgdGhpcy5faHR0cFRva2VucyA9IHZhbHVlLmh0dHBUb2tlbnM7XG4gICAgICB0aGlzLl9pbnN0YW5jZU1ldGFkYXRhVGFncyA9IHZhbHVlLmluc3RhbmNlTWV0YWRhdGFUYWdzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGh0dHBfZW5kcG9pbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwRW5kcG9pbnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGh0dHBFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2h0dHBfZW5kcG9pbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh0dHBFbmRwb2ludCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faHR0cEVuZHBvaW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SHR0cEVuZHBvaW50KCkge1xuICAgIHRoaXMuX2h0dHBFbmRwb2ludCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHR0cEVuZHBvaW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBFbmRwb2ludDtcbiAgfVxuXG4gIC8vIGh0dHBfcHJvdG9jb2xfaXB2NiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwUHJvdG9jb2xJcHY2Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBodHRwUHJvdG9jb2xJcHY2KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaHR0cF9wcm90b2NvbF9pcHY2Jyk7XG4gIH1cbiAgcHVibGljIHNldCBodHRwUHJvdG9jb2xJcHY2KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9odHRwUHJvdG9jb2xJcHY2ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SHR0cFByb3RvY29sSXB2NigpIHtcbiAgICB0aGlzLl9odHRwUHJvdG9jb2xJcHY2ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwUHJvdG9jb2xJcHY2SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBQcm90b2NvbElwdjY7XG4gIH1cblxuICAvLyBodHRwX3B1dF9yZXNwb25zZV9ob3BfbGltaXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwUHV0UmVzcG9uc2VIb3BMaW1pdD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgaHR0cFB1dFJlc3BvbnNlSG9wTGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdodHRwX3B1dF9yZXNwb25zZV9ob3BfbGltaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh0dHBQdXRSZXNwb25zZUhvcExpbWl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9odHRwUHV0UmVzcG9uc2VIb3BMaW1pdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh0dHBQdXRSZXNwb25zZUhvcExpbWl0KCkge1xuICAgIHRoaXMuX2h0dHBQdXRSZXNwb25zZUhvcExpbWl0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwUHV0UmVzcG9uc2VIb3BMaW1pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwUHV0UmVzcG9uc2VIb3BMaW1pdDtcbiAgfVxuXG4gIC8vIGh0dHBfdG9rZW5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHR0cFRva2Vucz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaHR0cFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2h0dHBfdG9rZW5zJyk7XG4gIH1cbiAgcHVibGljIHNldCBodHRwVG9rZW5zKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9odHRwVG9rZW5zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SHR0cFRva2VucygpIHtcbiAgICB0aGlzLl9odHRwVG9rZW5zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwVG9rZW5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBUb2tlbnM7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9tZXRhZGF0YV90YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlTWV0YWRhdGFUYWdzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZU1ldGFkYXRhVGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX21ldGFkYXRhX3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlTWV0YWRhdGFUYWdzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZU1ldGFkYXRhVGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlTWV0YWRhdGFUYWdzKCkge1xuICAgIHRoaXMuX2luc3RhbmNlTWV0YWRhdGFUYWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZU1ldGFkYXRhVGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZU1ldGFkYXRhVGFncztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZU1vbml0b3Jpbmcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjZW5hYmxlZCBMYXVuY2hUZW1wbGF0ZSNlbmFibGVkfVxuICAqL1xuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVNb25pdG9yaW5nVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVNb25pdG9yaW5nT3V0cHV0UmVmZXJlbmNlIHwgTGF1bmNoVGVtcGxhdGVNb25pdG9yaW5nKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlTW9uaXRvcmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlTW9uaXRvcmluZ091dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlTW9uaXRvcmluZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZW5hYmxlZDoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIExhdW5jaFRlbXBsYXRlTW9uaXRvcmluZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGF1bmNoVGVtcGxhdGVNb25pdG9yaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZWQgPSB0aGlzLl9lbmFibGVkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTGF1bmNoVGVtcGxhdGVNb25pdG9yaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlLmVuYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZU5ldHdvcmtJbnRlcmZhY2VzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2Fzc29jaWF0ZV9jYXJyaWVyX2lwX2FkZHJlc3MgTGF1bmNoVGVtcGxhdGUjYXNzb2NpYXRlX2NhcnJpZXJfaXBfYWRkcmVzc31cbiAgKi9cbiAgcmVhZG9ubHkgYXNzb2NpYXRlQ2FycmllcklwQWRkcmVzcz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2Fzc29jaWF0ZV9wdWJsaWNfaXBfYWRkcmVzcyBMYXVuY2hUZW1wbGF0ZSNhc3NvY2lhdGVfcHVibGljX2lwX2FkZHJlc3N9XG4gICovXG4gIHJlYWRvbmx5IGFzc29jaWF0ZVB1YmxpY0lwQWRkcmVzcz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2RlbGV0ZV9vbl90ZXJtaW5hdGlvbiBMYXVuY2hUZW1wbGF0ZSNkZWxldGVfb25fdGVybWluYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlbGV0ZU9uVGVybWluYXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNkZXNjcmlwdGlvbiBMYXVuY2hUZW1wbGF0ZSNkZXNjcmlwdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNkZXZpY2VfaW5kZXggTGF1bmNoVGVtcGxhdGUjZGV2aWNlX2luZGV4fVxuICAqL1xuICByZWFkb25seSBkZXZpY2VJbmRleD86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2ludGVyZmFjZV90eXBlIExhdW5jaFRlbXBsYXRlI2ludGVyZmFjZV90eXBlfVxuICAqL1xuICByZWFkb25seSBpbnRlcmZhY2VUeXBlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjaXB2NF9hZGRyZXNzX2NvdW50IExhdW5jaFRlbXBsYXRlI2lwdjRfYWRkcmVzc19jb3VudH1cbiAgKi9cbiAgcmVhZG9ubHkgaXB2NEFkZHJlc3NDb3VudD86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2lwdjRfYWRkcmVzc2VzIExhdW5jaFRlbXBsYXRlI2lwdjRfYWRkcmVzc2VzfVxuICAqL1xuICByZWFkb25seSBpcHY0QWRkcmVzc2VzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNpcHY2X2FkZHJlc3NfY291bnQgTGF1bmNoVGVtcGxhdGUjaXB2Nl9hZGRyZXNzX2NvdW50fVxuICAqL1xuICByZWFkb25seSBpcHY2QWRkcmVzc0NvdW50PzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjaXB2Nl9hZGRyZXNzZXMgTGF1bmNoVGVtcGxhdGUjaXB2Nl9hZGRyZXNzZXN9XG4gICovXG4gIHJlYWRvbmx5IGlwdjZBZGRyZXNzZXM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI25ldHdvcmtfY2FyZF9pbmRleCBMYXVuY2hUZW1wbGF0ZSNuZXR3b3JrX2NhcmRfaW5kZXh9XG4gICovXG4gIHJlYWRvbmx5IG5ldHdvcmtDYXJkSW5kZXg/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNuZXR3b3JrX2ludGVyZmFjZV9pZCBMYXVuY2hUZW1wbGF0ZSNuZXR3b3JrX2ludGVyZmFjZV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgbmV0d29ya0ludGVyZmFjZUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjcHJpdmF0ZV9pcF9hZGRyZXNzIExhdW5jaFRlbXBsYXRlI3ByaXZhdGVfaXBfYWRkcmVzc31cbiAgKi9cbiAgcmVhZG9ubHkgcHJpdmF0ZUlwQWRkcmVzcz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI3NlY3VyaXR5X2dyb3VwcyBMYXVuY2hUZW1wbGF0ZSNzZWN1cml0eV9ncm91cHN9XG4gICovXG4gIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNzdWJuZXRfaWQgTGF1bmNoVGVtcGxhdGUjc3VibmV0X2lkfVxuICAqL1xuICByZWFkb25seSBzdWJuZXRJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlTmV0d29ya0ludGVyZmFjZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZU5ldHdvcmtJbnRlcmZhY2VzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXNzb2NpYXRlX2NhcnJpZXJfaXBfYWRkcmVzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hc3NvY2lhdGVDYXJyaWVySXBBZGRyZXNzKSxcbiAgICBhc3NvY2lhdGVfcHVibGljX2lwX2FkZHJlc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzKSxcbiAgICBkZWxldGVfb25fdGVybWluYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVsZXRlT25UZXJtaW5hdGlvbiksXG4gICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzY3JpcHRpb24pLFxuICAgIGRldmljZV9pbmRleDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VJbmRleCksXG4gICAgaW50ZXJmYWNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJmYWNlVHlwZSksXG4gICAgaXB2NF9hZGRyZXNzX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlwdjRBZGRyZXNzQ291bnQpLFxuICAgIGlwdjRfYWRkcmVzc2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5pcHY0QWRkcmVzc2VzKSxcbiAgICBpcHY2X2FkZHJlc3NfY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaXB2NkFkZHJlc3NDb3VudCksXG4gICAgaXB2Nl9hZGRyZXNzZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmlwdjZBZGRyZXNzZXMpLFxuICAgIG5ldHdvcmtfY2FyZF9pbmRleDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5uZXR3b3JrQ2FyZEluZGV4KSxcbiAgICBuZXR3b3JrX2ludGVyZmFjZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uZXR3b3JrSW50ZXJmYWNlSWQpLFxuICAgIHByaXZhdGVfaXBfYWRkcmVzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcml2YXRlSXBBZGRyZXNzKSxcbiAgICBzZWN1cml0eV9ncm91cHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnNlY3VyaXR5R3JvdXBzKSxcbiAgICBzdWJuZXRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3VibmV0SWQpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlTmV0d29ya0ludGVyZmFjZXNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZU5ldHdvcmtJbnRlcmZhY2VzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFzc29jaWF0ZV9jYXJyaWVyX2lwX2FkZHJlc3M6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFzc29jaWF0ZUNhcnJpZXJJcEFkZHJlc3MpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGFzc29jaWF0ZV9wdWJsaWNfaXBfYWRkcmVzczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBkZWxldGVfb25fdGVybWluYXRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZU9uVGVybWluYXRpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kZXNjcmlwdGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGV2aWNlX2luZGV4OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VJbmRleCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgaW50ZXJmYWNlX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmludGVyZmFjZVR5cGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGlwdjRfYWRkcmVzc19jb3VudDoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaXB2NEFkZHJlc3NDb3VudCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgaXB2NF9hZGRyZXNzZXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5pcHY0QWRkcmVzc2VzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gICAgaXB2Nl9hZGRyZXNzX2NvdW50OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pcHY2QWRkcmVzc0NvdW50KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBpcHY2X2FkZHJlc3Nlczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmlwdjZBZGRyZXNzZXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgICBuZXR3b3JrX2NhcmRfaW5kZXg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm5ldHdvcmtDYXJkSW5kZXgpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIG5ldHdvcmtfaW50ZXJmYWNlX2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5uZXR3b3JrSW50ZXJmYWNlSWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHByaXZhdGVfaXBfYWRkcmVzczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucHJpdmF0ZUlwQWRkcmVzcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2VjdXJpdHlfZ3JvdXBzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuc2VjdXJpdHlHcm91cHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgICBzdWJuZXRfaWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN1Ym5ldElkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIExhdW5jaFRlbXBsYXRlTmV0d29ya0ludGVyZmFjZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGF1bmNoVGVtcGxhdGVOZXR3b3JrSW50ZXJmYWNlcyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXNzb2NpYXRlQ2FycmllcklwQWRkcmVzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hc3NvY2lhdGVDYXJyaWVySXBBZGRyZXNzID0gdGhpcy5fYXNzb2NpYXRlQ2FycmllcklwQWRkcmVzcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Fzc29jaWF0ZVB1YmxpY0lwQWRkcmVzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3MgPSB0aGlzLl9hc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3M7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlbGV0ZU9uVGVybWluYXRpb24gPSB0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVzY3JpcHRpb24gPSB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RldmljZUluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRldmljZUluZGV4ID0gdGhpcy5fZGV2aWNlSW5kZXg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnRlcmZhY2VUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmludGVyZmFjZVR5cGUgPSB0aGlzLl9pbnRlcmZhY2VUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faXB2NEFkZHJlc3NDb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pcHY0QWRkcmVzc0NvdW50ID0gdGhpcy5faXB2NEFkZHJlc3NDb3VudDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lwdjRBZGRyZXNzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaXB2NEFkZHJlc3NlcyA9IHRoaXMuX2lwdjRBZGRyZXNzZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pcHY2QWRkcmVzc0NvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlwdjZBZGRyZXNzQ291bnQgPSB0aGlzLl9pcHY2QWRkcmVzc0NvdW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5faXB2NkFkZHJlc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pcHY2QWRkcmVzc2VzID0gdGhpcy5faXB2NkFkZHJlc3NlcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX25ldHdvcmtDYXJkSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmV0d29ya0NhcmRJbmRleCA9IHRoaXMuX25ldHdvcmtDYXJkSW5kZXg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9uZXR3b3JrSW50ZXJmYWNlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmV0d29ya0ludGVyZmFjZUlkID0gdGhpcy5fbmV0d29ya0ludGVyZmFjZUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJpdmF0ZUlwQWRkcmVzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcml2YXRlSXBBZGRyZXNzID0gdGhpcy5fcHJpdmF0ZUlwQWRkcmVzcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlY3VyaXR5R3JvdXBzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlY3VyaXR5R3JvdXBzID0gdGhpcy5fc2VjdXJpdHlHcm91cHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdWJuZXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdWJuZXRJZCA9IHRoaXMuX3N1Ym5ldElkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTGF1bmNoVGVtcGxhdGVOZXR3b3JrSW50ZXJmYWNlcyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hc3NvY2lhdGVDYXJyaWVySXBBZGRyZXNzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGVsZXRlT25UZXJtaW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGV2aWNlSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnRlcmZhY2VUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faXB2NEFkZHJlc3NDb3VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lwdjRBZGRyZXNzZXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pcHY2QWRkcmVzc0NvdW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faXB2NkFkZHJlc3NlcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25ldHdvcmtDYXJkSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uZXR3b3JrSW50ZXJmYWNlSWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcml2YXRlSXBBZGRyZXNzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2VjdXJpdHlHcm91cHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdWJuZXRJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hc3NvY2lhdGVDYXJyaWVySXBBZGRyZXNzID0gdmFsdWUuYXNzb2NpYXRlQ2FycmllcklwQWRkcmVzcztcbiAgICAgIHRoaXMuX2Fzc29jaWF0ZVB1YmxpY0lwQWRkcmVzcyA9IHZhbHVlLmFzc29jaWF0ZVB1YmxpY0lwQWRkcmVzcztcbiAgICAgIHRoaXMuX2RlbGV0ZU9uVGVybWluYXRpb24gPSB2YWx1ZS5kZWxldGVPblRlcm1pbmF0aW9uO1xuICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZS5kZXNjcmlwdGlvbjtcbiAgICAgIHRoaXMuX2RldmljZUluZGV4ID0gdmFsdWUuZGV2aWNlSW5kZXg7XG4gICAgICB0aGlzLl9pbnRlcmZhY2VUeXBlID0gdmFsdWUuaW50ZXJmYWNlVHlwZTtcbiAgICAgIHRoaXMuX2lwdjRBZGRyZXNzQ291bnQgPSB2YWx1ZS5pcHY0QWRkcmVzc0NvdW50O1xuICAgICAgdGhpcy5faXB2NEFkZHJlc3NlcyA9IHZhbHVlLmlwdjRBZGRyZXNzZXM7XG4gICAgICB0aGlzLl9pcHY2QWRkcmVzc0NvdW50ID0gdmFsdWUuaXB2NkFkZHJlc3NDb3VudDtcbiAgICAgIHRoaXMuX2lwdjZBZGRyZXNzZXMgPSB2YWx1ZS5pcHY2QWRkcmVzc2VzO1xuICAgICAgdGhpcy5fbmV0d29ya0NhcmRJbmRleCA9IHZhbHVlLm5ldHdvcmtDYXJkSW5kZXg7XG4gICAgICB0aGlzLl9uZXR3b3JrSW50ZXJmYWNlSWQgPSB2YWx1ZS5uZXR3b3JrSW50ZXJmYWNlSWQ7XG4gICAgICB0aGlzLl9wcml2YXRlSXBBZGRyZXNzID0gdmFsdWUucHJpdmF0ZUlwQWRkcmVzcztcbiAgICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBzID0gdmFsdWUuc2VjdXJpdHlHcm91cHM7XG4gICAgICB0aGlzLl9zdWJuZXRJZCA9IHZhbHVlLnN1Ym5ldElkO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFzc29jaWF0ZV9jYXJyaWVyX2lwX2FkZHJlc3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXNzb2NpYXRlQ2FycmllcklwQWRkcmVzcz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXNzb2NpYXRlQ2FycmllcklwQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Fzc29jaWF0ZV9jYXJyaWVyX2lwX2FkZHJlc3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFzc29jaWF0ZUNhcnJpZXJJcEFkZHJlc3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Fzc29jaWF0ZUNhcnJpZXJJcEFkZHJlc3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBc3NvY2lhdGVDYXJyaWVySXBBZGRyZXNzKCkge1xuICAgIHRoaXMuX2Fzc29jaWF0ZUNhcnJpZXJJcEFkZHJlc3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFzc29jaWF0ZUNhcnJpZXJJcEFkZHJlc3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXNzb2NpYXRlQ2FycmllcklwQWRkcmVzcztcbiAgfVxuXG4gIC8vIGFzc29jaWF0ZV9wdWJsaWNfaXBfYWRkcmVzcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3M/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFzc29jaWF0ZVB1YmxpY0lwQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Fzc29jaWF0ZV9wdWJsaWNfaXBfYWRkcmVzcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3MoKSB7XG4gICAgdGhpcy5fYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzO1xuICB9XG5cbiAgLy8gZGVsZXRlX29uX3Rlcm1pbmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlbGV0ZU9uVGVybWluYXRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlbGV0ZU9uVGVybWluYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWxldGVfb25fdGVybWluYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlbGV0ZU9uVGVybWluYXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlbGV0ZU9uVGVybWluYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWxldGVPblRlcm1pbmF0aW9uKCkge1xuICAgIHRoaXMuX2RlbGV0ZU9uVGVybWluYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlbGV0ZU9uVGVybWluYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlT25UZXJtaW5hdGlvbjtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICAvLyBkZXZpY2VfaW5kZXggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGV2aWNlSW5kZXg/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGRldmljZUluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGV2aWNlX2luZGV4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXZpY2VJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZGV2aWNlSW5kZXggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXZpY2VJbmRleCgpIHtcbiAgICB0aGlzLl9kZXZpY2VJbmRleCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGV2aWNlSW5kZXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlSW5kZXg7XG4gIH1cblxuICAvLyBpbnRlcmZhY2VfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnRlcmZhY2VUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnRlcmZhY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW50ZXJmYWNlX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGludGVyZmFjZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ludGVyZmFjZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnRlcmZhY2VUeXBlKCkge1xuICAgIHRoaXMuX2ludGVyZmFjZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGludGVyZmFjZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJmYWNlVHlwZTtcbiAgfVxuXG4gIC8vIGlwdjRfYWRkcmVzc19jb3VudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pcHY0QWRkcmVzc0NvdW50PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpcHY0QWRkcmVzc0NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaXB2NF9hZGRyZXNzX2NvdW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBpcHY0QWRkcmVzc0NvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pcHY0QWRkcmVzc0NvdW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXB2NEFkZHJlc3NDb3VudCgpIHtcbiAgICB0aGlzLl9pcHY0QWRkcmVzc0NvdW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpcHY0QWRkcmVzc0NvdW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lwdjRBZGRyZXNzQ291bnQ7XG4gIH1cblxuICAvLyBpcHY0X2FkZHJlc3NlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pcHY0QWRkcmVzc2VzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGlwdjRBZGRyZXNzZXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2lwdjRfYWRkcmVzc2VzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgaXB2NEFkZHJlc3Nlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9pcHY0QWRkcmVzc2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXB2NEFkZHJlc3NlcygpIHtcbiAgICB0aGlzLl9pcHY0QWRkcmVzc2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpcHY0QWRkcmVzc2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lwdjRBZGRyZXNzZXM7XG4gIH1cblxuICAvLyBpcHY2X2FkZHJlc3NfY291bnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaXB2NkFkZHJlc3NDb3VudD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgaXB2NkFkZHJlc3NDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2lwdjZfYWRkcmVzc19jb3VudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaXB2NkFkZHJlc3NDb3VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faXB2NkFkZHJlc3NDb3VudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElwdjZBZGRyZXNzQ291bnQoKSB7XG4gICAgdGhpcy5faXB2NkFkZHJlc3NDb3VudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXB2NkFkZHJlc3NDb3VudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pcHY2QWRkcmVzc0NvdW50O1xuICB9XG5cbiAgLy8gaXB2Nl9hZGRyZXNzZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaXB2NkFkZHJlc3Nlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBpcHY2QWRkcmVzc2VzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpcHY2X2FkZHJlc3NlcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlwdjZBZGRyZXNzZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5faXB2NkFkZHJlc3NlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElwdjZBZGRyZXNzZXMoKSB7XG4gICAgdGhpcy5faXB2NkFkZHJlc3NlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXB2NkFkZHJlc3Nlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pcHY2QWRkcmVzc2VzO1xuICB9XG5cbiAgLy8gbmV0d29ya19jYXJkX2luZGV4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25ldHdvcmtDYXJkSW5kZXg/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG5ldHdvcmtDYXJkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCduZXR3b3JrX2NhcmRfaW5kZXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5ldHdvcmtDYXJkSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX25ldHdvcmtDYXJkSW5kZXggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROZXR3b3JrQ2FyZEluZGV4KCkge1xuICAgIHRoaXMuX25ldHdvcmtDYXJkSW5kZXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5ldHdvcmtDYXJkSW5kZXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmV0d29ya0NhcmRJbmRleDtcbiAgfVxuXG4gIC8vIG5ldHdvcmtfaW50ZXJmYWNlX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25ldHdvcmtJbnRlcmZhY2VJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmV0d29ya0ludGVyZmFjZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmV0d29ya19pbnRlcmZhY2VfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5ldHdvcmtJbnRlcmZhY2VJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmV0d29ya0ludGVyZmFjZUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmV0d29ya0ludGVyZmFjZUlkKCkge1xuICAgIHRoaXMuX25ldHdvcmtJbnRlcmZhY2VJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV0d29ya0ludGVyZmFjZUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25ldHdvcmtJbnRlcmZhY2VJZDtcbiAgfVxuXG4gIC8vIHByaXZhdGVfaXBfYWRkcmVzcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcml2YXRlSXBBZGRyZXNzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcml2YXRlSXBBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJpdmF0ZV9pcF9hZGRyZXNzJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcml2YXRlSXBBZGRyZXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcml2YXRlSXBBZGRyZXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJpdmF0ZUlwQWRkcmVzcygpIHtcbiAgICB0aGlzLl9wcml2YXRlSXBBZGRyZXNzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcml2YXRlSXBBZGRyZXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaXZhdGVJcEFkZHJlc3M7XG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VjdXJpdHlHcm91cHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cHMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlY3VyaXR5R3JvdXBzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VjdXJpdHlHcm91cHMoKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5R3JvdXBzO1xuICB9XG5cbiAgLy8gc3VibmV0X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1Ym5ldElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdWJuZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N1Ym5ldF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VibmV0SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N1Ym5ldElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3VibmV0SWQoKSB7XG4gICAgdGhpcy5fc3VibmV0SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1Ym5ldElkO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYXVuY2hUZW1wbGF0ZU5ldHdvcmtJbnRlcmZhY2VzTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogTGF1bmNoVGVtcGxhdGVOZXR3b3JrSW50ZXJmYWNlc1tdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBMYXVuY2hUZW1wbGF0ZU5ldHdvcmtJbnRlcmZhY2VzT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IExhdW5jaFRlbXBsYXRlTmV0d29ya0ludGVyZmFjZXNPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZVBsYWNlbWVudCB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNhZmZpbml0eSBMYXVuY2hUZW1wbGF0ZSNhZmZpbml0eX1cbiAgKi9cbiAgcmVhZG9ubHkgYWZmaW5pdHk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNhdmFpbGFiaWxpdHlfem9uZSBMYXVuY2hUZW1wbGF0ZSNhdmFpbGFiaWxpdHlfem9uZX1cbiAgKi9cbiAgcmVhZG9ubHkgYXZhaWxhYmlsaXR5Wm9uZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI2dyb3VwX25hbWUgTGF1bmNoVGVtcGxhdGUjZ3JvdXBfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgZ3JvdXBOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjaG9zdF9pZCBMYXVuY2hUZW1wbGF0ZSNob3N0X2lkfVxuICAqL1xuICByZWFkb25seSBob3N0SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNob3N0X3Jlc291cmNlX2dyb3VwX2FybiBMYXVuY2hUZW1wbGF0ZSNob3N0X3Jlc291cmNlX2dyb3VwX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgaG9zdFJlc291cmNlR3JvdXBBcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhdW5jaF90ZW1wbGF0ZSNwYXJ0aXRpb25fbnVtYmVyIExhdW5jaFRlbXBsYXRlI3BhcnRpdGlvbl9udW1iZXJ9XG4gICovXG4gIHJlYWRvbmx5IHBhcnRpdGlvbk51bWJlcj86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI3NwcmVhZF9kb21haW4gTGF1bmNoVGVtcGxhdGUjc3ByZWFkX2RvbWFpbn1cbiAgKi9cbiAgcmVhZG9ubHkgc3ByZWFkRG9tYWluPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjdGVuYW5jeSBMYXVuY2hUZW1wbGF0ZSN0ZW5hbmN5fVxuICAqL1xuICByZWFkb25seSB0ZW5hbmN5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVQbGFjZW1lbnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZVBsYWNlbWVudE91dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlUGxhY2VtZW50KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFmZmluaXR5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFmZmluaXR5KSxcbiAgICBhdmFpbGFiaWxpdHlfem9uZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdmFpbGFiaWxpdHlab25lKSxcbiAgICBncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdyb3VwTmFtZSksXG4gICAgaG9zdF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0SWQpLFxuICAgIGhvc3RfcmVzb3VyY2VfZ3JvdXBfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3RSZXNvdXJjZUdyb3VwQXJuKSxcbiAgICBwYXJ0aXRpb25fbnVtYmVyOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhcnRpdGlvbk51bWJlciksXG4gICAgc3ByZWFkX2RvbWFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zcHJlYWREb21haW4pLFxuICAgIHRlbmFuY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGVuYW5jeSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVQbGFjZW1lbnRUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZVBsYWNlbWVudE91dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlUGxhY2VtZW50KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhZmZpbml0eToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWZmaW5pdHkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGF2YWlsYWJpbGl0eV96b25lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hdmFpbGFiaWxpdHlab25lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBncm91cF9uYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ncm91cE5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGhvc3RfaWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmhvc3RJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaG9zdF9yZXNvdXJjZV9ncm91cF9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmhvc3RSZXNvdXJjZUdyb3VwQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwYXJ0aXRpb25fbnVtYmVyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wYXJ0aXRpb25OdW1iZXIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHNwcmVhZF9kb21haW46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNwcmVhZERvbWFpbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdGVuYW5jeToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudGVuYW5jeSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBMYXVuY2hUZW1wbGF0ZVBsYWNlbWVudE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGF1bmNoVGVtcGxhdGVQbGFjZW1lbnQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FmZmluaXR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFmZmluaXR5ID0gdGhpcy5fYWZmaW5pdHk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hdmFpbGFiaWxpdHlab25lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF2YWlsYWJpbGl0eVpvbmUgPSB0aGlzLl9hdmFpbGFiaWxpdHlab25lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZ3JvdXBOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmdyb3VwTmFtZSA9IHRoaXMuX2dyb3VwTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvc3RJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ob3N0SWQgPSB0aGlzLl9ob3N0SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ob3N0UmVzb3VyY2VHcm91cEFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ob3N0UmVzb3VyY2VHcm91cEFybiA9IHRoaXMuX2hvc3RSZXNvdXJjZUdyb3VwQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGFydGl0aW9uTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhcnRpdGlvbk51bWJlciA9IHRoaXMuX3BhcnRpdGlvbk51bWJlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NwcmVhZERvbWFpbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zcHJlYWREb21haW4gPSB0aGlzLl9zcHJlYWREb21haW47XG4gICAgfVxuICAgIGlmICh0aGlzLl90ZW5hbmN5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRlbmFuY3kgPSB0aGlzLl90ZW5hbmN5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTGF1bmNoVGVtcGxhdGVQbGFjZW1lbnQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hZmZpbml0eSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ncm91cE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ob3N0SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ob3N0UmVzb3VyY2VHcm91cEFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhcnRpdGlvbk51bWJlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NwcmVhZERvbWFpbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RlbmFuY3kgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FmZmluaXR5ID0gdmFsdWUuYWZmaW5pdHk7XG4gICAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lID0gdmFsdWUuYXZhaWxhYmlsaXR5Wm9uZTtcbiAgICAgIHRoaXMuX2dyb3VwTmFtZSA9IHZhbHVlLmdyb3VwTmFtZTtcbiAgICAgIHRoaXMuX2hvc3RJZCA9IHZhbHVlLmhvc3RJZDtcbiAgICAgIHRoaXMuX2hvc3RSZXNvdXJjZUdyb3VwQXJuID0gdmFsdWUuaG9zdFJlc291cmNlR3JvdXBBcm47XG4gICAgICB0aGlzLl9wYXJ0aXRpb25OdW1iZXIgPSB2YWx1ZS5wYXJ0aXRpb25OdW1iZXI7XG4gICAgICB0aGlzLl9zcHJlYWREb21haW4gPSB2YWx1ZS5zcHJlYWREb21haW47XG4gICAgICB0aGlzLl90ZW5hbmN5ID0gdmFsdWUudGVuYW5jeTtcbiAgICB9XG4gIH1cblxuICAvLyBhZmZpbml0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hZmZpbml0eT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWZmaW5pdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhZmZpbml0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWZmaW5pdHkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FmZmluaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWZmaW5pdHkoKSB7XG4gICAgdGhpcy5fYWZmaW5pdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFmZmluaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FmZmluaXR5O1xuICB9XG5cbiAgLy8gYXZhaWxhYmlsaXR5X3pvbmUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXZhaWxhYmlsaXR5Wm9uZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F2YWlsYWJpbGl0eV96b25lJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdmFpbGFiaWxpdHlab25lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXZhaWxhYmlsaXR5Wm9uZSgpIHtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmU7XG4gIH1cblxuICAvLyBncm91cF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dyb3VwTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZ3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ3JvdXBfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ3JvdXBOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ncm91cE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRHcm91cE5hbWUoKSB7XG4gICAgdGhpcy5fZ3JvdXBOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBncm91cE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JvdXBOYW1lO1xuICB9XG5cbiAgLy8gaG9zdF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ob3N0SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGhvc3RJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvc3RJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faG9zdElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SG9zdElkKCkge1xuICAgIHRoaXMuX2hvc3RJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9zdElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3RJZDtcbiAgfVxuXG4gIC8vIGhvc3RfcmVzb3VyY2VfZ3JvdXBfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hvc3RSZXNvdXJjZUdyb3VwQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBob3N0UmVzb3VyY2VHcm91cEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RfcmVzb3VyY2VfZ3JvdXBfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBob3N0UmVzb3VyY2VHcm91cEFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faG9zdFJlc291cmNlR3JvdXBBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIb3N0UmVzb3VyY2VHcm91cEFybigpIHtcbiAgICB0aGlzLl9ob3N0UmVzb3VyY2VHcm91cEFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9zdFJlc291cmNlR3JvdXBBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdFJlc291cmNlR3JvdXBBcm47XG4gIH1cblxuICAvLyBwYXJ0aXRpb25fbnVtYmVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhcnRpdGlvbk51bWJlcj86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcGFydGl0aW9uTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncGFydGl0aW9uX251bWJlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFydGl0aW9uTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYXJ0aXRpb25OdW1iZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXJ0aXRpb25OdW1iZXIoKSB7XG4gICAgdGhpcy5fcGFydGl0aW9uTnVtYmVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXJ0aXRpb25OdW1iZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFydGl0aW9uTnVtYmVyO1xuICB9XG5cbiAgLy8gc3ByZWFkX2RvbWFpbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zcHJlYWREb21haW4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNwcmVhZERvbWFpbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NwcmVhZF9kb21haW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNwcmVhZERvbWFpbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3ByZWFkRG9tYWluID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3ByZWFkRG9tYWluKCkge1xuICAgIHRoaXMuX3NwcmVhZERvbWFpbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3ByZWFkRG9tYWluSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NwcmVhZERvbWFpbjtcbiAgfVxuXG4gIC8vIHRlbmFuY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGVuYW5jeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGVuYW5jeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RlbmFuY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRlbmFuY3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RlbmFuY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUZW5hbmN5KCkge1xuICAgIHRoaXMuX3RlbmFuY3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRlbmFuY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVuYW5jeTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZVRhZ1NwZWNpZmljYXRpb25zIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlI3Jlc291cmNlX3R5cGUgTGF1bmNoVGVtcGxhdGUjcmVzb3VyY2VfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgcmVzb3VyY2VUeXBlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjdGFncyBMYXVuY2hUZW1wbGF0ZSN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlVGFnU3BlY2lmaWNhdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZVRhZ1NwZWNpZmljYXRpb25zIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzb3VyY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZVR5cGUpLFxuICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudGFncyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVUYWdTcGVjaWZpY2F0aW9uc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlVGFnU3BlY2lmaWNhdGlvbnMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgcmVzb3VyY2VfdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB0YWdzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkoc3RydWN0IS50YWdzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIExhdW5jaFRlbXBsYXRlVGFnU3BlY2lmaWNhdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGF1bmNoVGVtcGxhdGVUYWdTcGVjaWZpY2F0aW9ucyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVzb3VyY2VUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlVHlwZSA9IHRoaXMuX3Jlc291cmNlVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFncyA9IHRoaXMuX3RhZ3M7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZVRhZ1NwZWNpZmljYXRpb25zIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc291cmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VUeXBlID0gdmFsdWUucmVzb3VyY2VUeXBlO1xuICAgICAgdGhpcy5fdGFncyA9IHZhbHVlLnRhZ3M7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzb3VyY2VfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXNvdXJjZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzb3VyY2VUeXBlKCkge1xuICAgIHRoaXMuX3Jlc291cmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlVHlwZTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYXVuY2hUZW1wbGF0ZVRhZ1NwZWNpZmljYXRpb25zTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogTGF1bmNoVGVtcGxhdGVUYWdTcGVjaWZpY2F0aW9uc1tdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBMYXVuY2hUZW1wbGF0ZVRhZ1NwZWNpZmljYXRpb25zT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IExhdW5jaFRlbXBsYXRlVGFnU3BlY2lmaWNhdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGF1bmNoX3RlbXBsYXRlIGF3c19sYXVuY2hfdGVtcGxhdGV9XG4qL1xuZXhwb3J0IGNsYXNzIExhdW5jaFRlbXBsYXRlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19sYXVuY2hfdGVtcGxhdGVcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgTGF1bmNoVGVtcGxhdGUgcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgTGF1bmNoVGVtcGxhdGUgdG8gaW1wb3J0XG4gICogQHBhcmFtIGltcG9ydEZyb21JZCBUaGUgaWQgb2YgdGhlIGV4aXN0aW5nIExhdW5jaFRlbXBsYXRlIHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIExhdW5jaFRlbXBsYXRlIHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19sYXVuY2hfdGVtcGxhdGVcIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYXVuY2hfdGVtcGxhdGUgYXdzX2xhdW5jaF90ZW1wbGF0ZX0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgTGF1bmNoVGVtcGxhdGVDb25maWcgPSB7fVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBMYXVuY2hUZW1wbGF0ZUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfbGF1bmNoX3RlbXBsYXRlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fZGVmYXVsdFZlcnNpb24gPSBjb25maWcuZGVmYXVsdFZlcnNpb247XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBjb25maWcuZGVzY3JpcHRpb247XG4gICAgdGhpcy5fZGlzYWJsZUFwaVRlcm1pbmF0aW9uID0gY29uZmlnLmRpc2FibGVBcGlUZXJtaW5hdGlvbjtcbiAgICB0aGlzLl9lYnNPcHRpbWl6ZWQgPSBjb25maWcuZWJzT3B0aW1pemVkO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX2ltYWdlSWQgPSBjb25maWcuaW1hZ2VJZDtcbiAgICB0aGlzLl9pbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3IgPSBjb25maWcuaW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yO1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IGNvbmZpZy5pbnN0YW5jZVR5cGU7XG4gICAgdGhpcy5fa2VybmVsSWQgPSBjb25maWcua2VybmVsSWQ7XG4gICAgdGhpcy5fa2V5TmFtZSA9IGNvbmZpZy5rZXlOYW1lO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9uYW1lUHJlZml4ID0gY29uZmlnLm5hbWVQcmVmaXg7XG4gICAgdGhpcy5fcmFtRGlza0lkID0gY29uZmlnLnJhbURpc2tJZDtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwTmFtZXMgPSBjb25maWcuc2VjdXJpdHlHcm91cE5hbWVzO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdXBkYXRlRGVmYXVsdFZlcnNpb24gPSBjb25maWcudXBkYXRlRGVmYXVsdFZlcnNpb247XG4gICAgdGhpcy5fdXNlckRhdGEgPSBjb25maWcudXNlckRhdGE7XG4gICAgdGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcyA9IGNvbmZpZy52cGNTZWN1cml0eUdyb3VwSWRzO1xuICAgIHRoaXMuX2Jsb2NrRGV2aWNlTWFwcGluZ3MuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5ibG9ja0RldmljZU1hcHBpbmdzO1xuICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuY2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb247XG4gICAgdGhpcy5fY3B1T3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmNwdU9wdGlvbnM7XG4gICAgdGhpcy5fY3JlZGl0U3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmNyZWRpdFNwZWNpZmljYXRpb247XG4gICAgdGhpcy5fZWxhc3RpY0dwdVNwZWNpZmljYXRpb25zLmludGVybmFsVmFsdWUgPSBjb25maWcuZWxhc3RpY0dwdVNwZWNpZmljYXRpb25zO1xuICAgIHRoaXMuX2VsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvci5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmVsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvcjtcbiAgICB0aGlzLl9lbmNsYXZlT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmVuY2xhdmVPcHRpb25zO1xuICAgIHRoaXMuX2hpYmVybmF0aW9uT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmhpYmVybmF0aW9uT3B0aW9ucztcbiAgICB0aGlzLl9pYW1JbnN0YW5jZVByb2ZpbGUuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5pYW1JbnN0YW5jZVByb2ZpbGU7XG4gICAgdGhpcy5faW5zdGFuY2VNYXJrZXRPcHRpb25zLmludGVybmFsVmFsdWUgPSBjb25maWcuaW5zdGFuY2VNYXJrZXRPcHRpb25zO1xuICAgIHRoaXMuX2xpY2Vuc2VTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcubGljZW5zZVNwZWNpZmljYXRpb247XG4gICAgdGhpcy5fbWV0YWRhdGFPcHRpb25zLmludGVybmFsVmFsdWUgPSBjb25maWcubWV0YWRhdGFPcHRpb25zO1xuICAgIHRoaXMuX21vbml0b3JpbmcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5tb25pdG9yaW5nO1xuICAgIHRoaXMuX25ldHdvcmtJbnRlcmZhY2VzLmludGVybmFsVmFsdWUgPSBjb25maWcubmV0d29ya0ludGVyZmFjZXM7XG4gICAgdGhpcy5fcGxhY2VtZW50LmludGVybmFsVmFsdWUgPSBjb25maWcucGxhY2VtZW50O1xuICAgIHRoaXMuX3RhZ1NwZWNpZmljYXRpb25zLmludGVybmFsVmFsdWUgPSBjb25maWcudGFnU3BlY2lmaWNhdGlvbnM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZGVmYXVsdF92ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVmYXVsdFZlcnNpb24/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGRlZmF1bHRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGVmYXVsdF92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWZhdWx0VmVyc2lvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZGVmYXVsdFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWZhdWx0VmVyc2lvbigpIHtcbiAgICB0aGlzLl9kZWZhdWx0VmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFZlcnNpb247XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gZGlzYWJsZV9hcGlfdGVybWluYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGlzYWJsZUFwaVRlcm1pbmF0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkaXNhYmxlQXBpVGVybWluYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGlzYWJsZV9hcGlfdGVybWluYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpc2FibGVBcGlUZXJtaW5hdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGlzYWJsZUFwaVRlcm1pbmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGlzYWJsZUFwaVRlcm1pbmF0aW9uKCkge1xuICAgIHRoaXMuX2Rpc2FibGVBcGlUZXJtaW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGlzYWJsZUFwaVRlcm1pbmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVBcGlUZXJtaW5hdGlvbjtcbiAgfVxuXG4gIC8vIGVic19vcHRpbWl6ZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWJzT3B0aW1pemVkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlYnNPcHRpbWl6ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlYnNfb3B0aW1pemVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBlYnNPcHRpbWl6ZWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Vic09wdGltaXplZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVic09wdGltaXplZCgpIHtcbiAgICB0aGlzLl9lYnNPcHRpbWl6ZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVic09wdGltaXplZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lYnNPcHRpbWl6ZWQ7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBpbWFnZV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbWFnZUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbWFnZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW1hZ2VfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGltYWdlSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ltYWdlSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbWFnZUlkKCkge1xuICAgIHRoaXMuX2ltYWdlSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGltYWdlSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VJZDtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX2luaXRpYXRlZF9zaHV0ZG93bl9iZWhhdmlvciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3I/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlSW5pdGlhdGVkU2h1dGRvd25CZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2luaXRpYXRlZF9zaHV0ZG93bl9iZWhhdmlvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3IgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3IoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VUeXBlKCkge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlVHlwZTtcbiAgfVxuXG4gIC8vIGtlcm5lbF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rZXJuZWxJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga2VybmVsSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXJuZWxfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGtlcm5lbElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rZXJuZWxJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEtlcm5lbElkKCkge1xuICAgIHRoaXMuX2tlcm5lbElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXJuZWxJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXJuZWxJZDtcbiAgfVxuXG4gIC8vIGtleV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tleU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGtleU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXlfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQga2V5TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5TmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEtleU5hbWUoKSB7XG4gICAgdGhpcy5fa2V5TmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2V5TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlOYW1lO1xuICB9XG5cbiAgLy8gbGF0ZXN0X3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXRlc3RWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbGF0ZXN0X3ZlcnNpb24nKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gbmFtZV9wcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lUHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lUHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZV9wcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWVQcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWVQcmVmaXggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lUHJlZml4KCkge1xuICAgIHRoaXMuX25hbWVQcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVQcmVmaXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZVByZWZpeDtcbiAgfVxuXG4gIC8vIHJhbV9kaXNrX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JhbURpc2tJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmFtRGlza0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmFtX2Rpc2tfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJhbURpc2tJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmFtRGlza0lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmFtRGlza0lkKCkge1xuICAgIHRoaXMuX3JhbURpc2tJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmFtRGlza0lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbURpc2tJZDtcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X2dyb3VwX25hbWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlY3VyaXR5R3JvdXBOYW1lcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwTmFtZXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwX25hbWVzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlHcm91cE5hbWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBOYW1lcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlY3VyaXR5R3JvdXBOYW1lcygpIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwTmFtZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBOYW1lc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWN1cml0eUdyb3VwTmFtZXM7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFncycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzX2FsbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHVwZGF0ZV9kZWZhdWx0X3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXBkYXRlRGVmYXVsdFZlcnNpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHVwZGF0ZURlZmF1bHRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3VwZGF0ZV9kZWZhdWx0X3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVwZGF0ZURlZmF1bHRWZXJzaW9uKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl91cGRhdGVEZWZhdWx0VmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVwZGF0ZURlZmF1bHRWZXJzaW9uKCkge1xuICAgIHRoaXMuX3VwZGF0ZURlZmF1bHRWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1cGRhdGVEZWZhdWx0VmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVEZWZhdWx0VmVyc2lvbjtcbiAgfVxuXG4gIC8vIHVzZXJfZGF0YSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91c2VyRGF0YT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXNlckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VyX2RhdGEnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZXJEYXRhKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91c2VyRGF0YSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJEYXRhKCkge1xuICAgIHRoaXMuX3VzZXJEYXRhID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VyRGF0YUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyRGF0YTtcbiAgfVxuXG4gIC8vIHZwY19zZWN1cml0eV9ncm91cF9pZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdnBjU2VjdXJpdHlHcm91cElkcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB2cGNTZWN1cml0eUdyb3VwSWRzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCd2cGNfc2VjdXJpdHlfZ3JvdXBfaWRzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgdnBjU2VjdXJpdHlHcm91cElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl92cGNTZWN1cml0eUdyb3VwSWRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VnBjU2VjdXJpdHlHcm91cElkcygpIHtcbiAgICB0aGlzLl92cGNTZWN1cml0eUdyb3VwSWRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cGNTZWN1cml0eUdyb3VwSWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHM7XG4gIH1cblxuICAvLyBibG9ja19kZXZpY2VfbWFwcGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmxvY2tEZXZpY2VNYXBwaW5ncyA9IG5ldyBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NMaXN0KHRoaXMsIFwiYmxvY2tfZGV2aWNlX21hcHBpbmdzXCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCBibG9ja0RldmljZU1hcHBpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl9ibG9ja0RldmljZU1hcHBpbmdzO1xuICB9XG4gIHB1YmxpYyBwdXRCbG9ja0RldmljZU1hcHBpbmdzKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYmxvY2tEZXZpY2VNYXBwaW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QmxvY2tEZXZpY2VNYXBwaW5ncygpIHtcbiAgICB0aGlzLl9ibG9ja0RldmljZU1hcHBpbmdzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJsb2NrRGV2aWNlTWFwcGluZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmxvY2tEZXZpY2VNYXBwaW5ncy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gY2FwYWNpdHlfcmVzZXJ2YXRpb25fc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbiA9IG5ldyBMYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiY2FwYWNpdHlfcmVzZXJ2YXRpb25fc3BlY2lmaWNhdGlvblwiKTtcbiAgcHVibGljIGdldCBjYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb247XG4gIH1cbiAgcHVibGljIHB1dENhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uKCkge1xuICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBjcHVfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcHVPcHRpb25zID0gbmV3IExhdW5jaFRlbXBsYXRlQ3B1T3B0aW9uc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImNwdV9vcHRpb25zXCIpO1xuICBwdWJsaWMgZ2V0IGNwdU9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NwdU9wdGlvbnM7XG4gIH1cbiAgcHVibGljIHB1dENwdU9wdGlvbnModmFsdWU6IExhdW5jaFRlbXBsYXRlQ3B1T3B0aW9ucykge1xuICAgIHRoaXMuX2NwdU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENwdU9wdGlvbnMoKSB7XG4gICAgdGhpcy5fY3B1T3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcHVPcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NwdU9wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGNyZWRpdF9zcGVjaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NyZWRpdFNwZWNpZmljYXRpb24gPSBuZXcgTGF1bmNoVGVtcGxhdGVDcmVkaXRTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiY3JlZGl0X3NwZWNpZmljYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgY3JlZGl0U3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlZGl0U3BlY2lmaWNhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0Q3JlZGl0U3BlY2lmaWNhdGlvbih2YWx1ZTogTGF1bmNoVGVtcGxhdGVDcmVkaXRTcGVjaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5fY3JlZGl0U3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlZGl0U3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9jcmVkaXRTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyZWRpdFNwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlZGl0U3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZWxhc3RpY19ncHVfc3BlY2lmaWNhdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWxhc3RpY0dwdVNwZWNpZmljYXRpb25zID0gbmV3IExhdW5jaFRlbXBsYXRlRWxhc3RpY0dwdVNwZWNpZmljYXRpb25zTGlzdCh0aGlzLCBcImVsYXN0aWNfZ3B1X3NwZWNpZmljYXRpb25zXCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCBlbGFzdGljR3B1U3BlY2lmaWNhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsYXN0aWNHcHVTcGVjaWZpY2F0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0RWxhc3RpY0dwdVNwZWNpZmljYXRpb25zKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZUVsYXN0aWNHcHVTcGVjaWZpY2F0aW9uc1tdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbGFzdGljR3B1U3BlY2lmaWNhdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVsYXN0aWNHcHVTcGVjaWZpY2F0aW9ucygpIHtcbiAgICB0aGlzLl9lbGFzdGljR3B1U3BlY2lmaWNhdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWxhc3RpY0dwdVNwZWNpZmljYXRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsYXN0aWNHcHVTcGVjaWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZWxhc3RpY19pbmZlcmVuY2VfYWNjZWxlcmF0b3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yID0gbmV3IExhdW5jaFRlbXBsYXRlRWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZWxhc3RpY19pbmZlcmVuY2VfYWNjZWxlcmF0b3JcIik7XG4gIHB1YmxpYyBnZXQgZWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3I7XG4gIH1cbiAgcHVibGljIHB1dEVsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvcih2YWx1ZTogTGF1bmNoVGVtcGxhdGVFbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3IpIHtcbiAgICB0aGlzLl9lbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3IuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvcigpIHtcbiAgICB0aGlzLl9lbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3IuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvci5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZW5jbGF2ZV9vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuY2xhdmVPcHRpb25zID0gbmV3IExhdW5jaFRlbXBsYXRlRW5jbGF2ZU9wdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJlbmNsYXZlX29wdGlvbnNcIik7XG4gIHB1YmxpYyBnZXQgZW5jbGF2ZU9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY2xhdmVPcHRpb25zO1xuICB9XG4gIHB1YmxpYyBwdXRFbmNsYXZlT3B0aW9ucyh2YWx1ZTogTGF1bmNoVGVtcGxhdGVFbmNsYXZlT3B0aW9ucykge1xuICAgIHRoaXMuX2VuY2xhdmVPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmNsYXZlT3B0aW9ucygpIHtcbiAgICB0aGlzLl9lbmNsYXZlT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmNsYXZlT3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmNsYXZlT3B0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaGliZXJuYXRpb25fb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9oaWJlcm5hdGlvbk9wdGlvbnMgPSBuZXcgTGF1bmNoVGVtcGxhdGVIaWJlcm5hdGlvbk9wdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJoaWJlcm5hdGlvbl9vcHRpb25zXCIpO1xuICBwdWJsaWMgZ2V0IGhpYmVybmF0aW9uT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5faGliZXJuYXRpb25PcHRpb25zO1xuICB9XG4gIHB1YmxpYyBwdXRIaWJlcm5hdGlvbk9wdGlvbnModmFsdWU6IExhdW5jaFRlbXBsYXRlSGliZXJuYXRpb25PcHRpb25zKSB7XG4gICAgdGhpcy5faGliZXJuYXRpb25PcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIaWJlcm5hdGlvbk9wdGlvbnMoKSB7XG4gICAgdGhpcy5faGliZXJuYXRpb25PcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhpYmVybmF0aW9uT3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9oaWJlcm5hdGlvbk9wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGlhbV9pbnN0YW5jZV9wcm9maWxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lhbUluc3RhbmNlUHJvZmlsZSA9IG5ldyBMYXVuY2hUZW1wbGF0ZUlhbUluc3RhbmNlUHJvZmlsZU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImlhbV9pbnN0YW5jZV9wcm9maWxlXCIpO1xuICBwdWJsaWMgZ2V0IGlhbUluc3RhbmNlUHJvZmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faWFtSW5zdGFuY2VQcm9maWxlO1xuICB9XG4gIHB1YmxpYyBwdXRJYW1JbnN0YW5jZVByb2ZpbGUodmFsdWU6IExhdW5jaFRlbXBsYXRlSWFtSW5zdGFuY2VQcm9maWxlKSB7XG4gICAgdGhpcy5faWFtSW5zdGFuY2VQcm9maWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJYW1JbnN0YW5jZVByb2ZpbGUoKSB7XG4gICAgdGhpcy5faWFtSW5zdGFuY2VQcm9maWxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlhbUluc3RhbmNlUHJvZmlsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pYW1JbnN0YW5jZVByb2ZpbGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX21hcmtldF9vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlTWFya2V0T3B0aW9ucyA9IG5ldyBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImluc3RhbmNlX21hcmtldF9vcHRpb25zXCIpO1xuICBwdWJsaWMgZ2V0IGluc3RhbmNlTWFya2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VNYXJrZXRPcHRpb25zO1xuICB9XG4gIHB1YmxpYyBwdXRJbnN0YW5jZU1hcmtldE9wdGlvbnModmFsdWU6IExhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zKSB7XG4gICAgdGhpcy5faW5zdGFuY2VNYXJrZXRPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZU1hcmtldE9wdGlvbnMoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VNYXJrZXRPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlTWFya2V0T3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZU1hcmtldE9wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGxpY2Vuc2Vfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9saWNlbnNlU3BlY2lmaWNhdGlvbiA9IG5ldyBMYXVuY2hUZW1wbGF0ZUxpY2Vuc2VTcGVjaWZpY2F0aW9uTGlzdCh0aGlzLCBcImxpY2Vuc2Vfc3BlY2lmaWNhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBsaWNlbnNlU3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbGljZW5zZVNwZWNpZmljYXRpb247XG4gIH1cbiAgcHVibGljIHB1dExpY2Vuc2VTcGVjaWZpY2F0aW9uKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZUxpY2Vuc2VTcGVjaWZpY2F0aW9uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2xpY2Vuc2VTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMaWNlbnNlU3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9saWNlbnNlU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsaWNlbnNlU3BlY2lmaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9saWNlbnNlU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbWV0YWRhdGFfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXRhZGF0YU9wdGlvbnMgPSBuZXcgTGF1bmNoVGVtcGxhdGVNZXRhZGF0YU9wdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJtZXRhZGF0YV9vcHRpb25zXCIpO1xuICBwdWJsaWMgZ2V0IG1ldGFkYXRhT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFPcHRpb25zO1xuICB9XG4gIHB1YmxpYyBwdXRNZXRhZGF0YU9wdGlvbnModmFsdWU6IExhdW5jaFRlbXBsYXRlTWV0YWRhdGFPcHRpb25zKSB7XG4gICAgdGhpcy5fbWV0YWRhdGFPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXRhZGF0YU9wdGlvbnMoKSB7XG4gICAgdGhpcy5fbWV0YWRhdGFPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldGFkYXRhT3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YU9wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG1vbml0b3JpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbW9uaXRvcmluZyA9IG5ldyBMYXVuY2hUZW1wbGF0ZU1vbml0b3JpbmdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJtb25pdG9yaW5nXCIpO1xuICBwdWJsaWMgZ2V0IG1vbml0b3JpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vbml0b3Jpbmc7XG4gIH1cbiAgcHVibGljIHB1dE1vbml0b3JpbmcodmFsdWU6IExhdW5jaFRlbXBsYXRlTW9uaXRvcmluZykge1xuICAgIHRoaXMuX21vbml0b3JpbmcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1vbml0b3JpbmcoKSB7XG4gICAgdGhpcy5fbW9uaXRvcmluZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtb25pdG9yaW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vbml0b3JpbmcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG5ldHdvcmtfaW50ZXJmYWNlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uZXR3b3JrSW50ZXJmYWNlcyA9IG5ldyBMYXVuY2hUZW1wbGF0ZU5ldHdvcmtJbnRlcmZhY2VzTGlzdCh0aGlzLCBcIm5ldHdvcmtfaW50ZXJmYWNlc1wiLCBmYWxzZSk7XG4gIHB1YmxpYyBnZXQgbmV0d29ya0ludGVyZmFjZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25ldHdvcmtJbnRlcmZhY2VzO1xuICB9XG4gIHB1YmxpYyBwdXROZXR3b3JrSW50ZXJmYWNlcyh2YWx1ZTogTGF1bmNoVGVtcGxhdGVOZXR3b3JrSW50ZXJmYWNlc1tdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9uZXR3b3JrSW50ZXJmYWNlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmV0d29ya0ludGVyZmFjZXMoKSB7XG4gICAgdGhpcy5fbmV0d29ya0ludGVyZmFjZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV0d29ya0ludGVyZmFjZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmV0d29ya0ludGVyZmFjZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHBsYWNlbWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wbGFjZW1lbnQgPSBuZXcgTGF1bmNoVGVtcGxhdGVQbGFjZW1lbnRPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJwbGFjZW1lbnRcIik7XG4gIHB1YmxpYyBnZXQgcGxhY2VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZW1lbnQ7XG4gIH1cbiAgcHVibGljIHB1dFBsYWNlbWVudCh2YWx1ZTogTGF1bmNoVGVtcGxhdGVQbGFjZW1lbnQpIHtcbiAgICB0aGlzLl9wbGFjZW1lbnQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBsYWNlbWVudCgpIHtcbiAgICB0aGlzLl9wbGFjZW1lbnQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGxhY2VtZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudC5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGFnX3NwZWNpZmljYXRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ1NwZWNpZmljYXRpb25zID0gbmV3IExhdW5jaFRlbXBsYXRlVGFnU3BlY2lmaWNhdGlvbnNMaXN0KHRoaXMsIFwidGFnX3NwZWNpZmljYXRpb25zXCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCB0YWdTcGVjaWZpY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnU3BlY2lmaWNhdGlvbnM7XG4gIH1cbiAgcHVibGljIHB1dFRhZ1NwZWNpZmljYXRpb25zKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZVRhZ1NwZWNpZmljYXRpb25zW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ1NwZWNpZmljYXRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdTcGVjaWZpY2F0aW9ucygpIHtcbiAgICB0aGlzLl90YWdTcGVjaWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdTcGVjaWZpY2F0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdTcGVjaWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBkZWZhdWx0X3ZlcnNpb246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2RlZmF1bHRWZXJzaW9uKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICBkaXNhYmxlX2FwaV90ZXJtaW5hdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2Rpc2FibGVBcGlUZXJtaW5hdGlvbiksXG4gICAgICBlYnNfb3B0aW1pemVkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lYnNPcHRpbWl6ZWQpLFxuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIGltYWdlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pbWFnZUlkKSxcbiAgICAgIGluc3RhbmNlX2luaXRpYXRlZF9zaHV0ZG93bl9iZWhhdmlvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yKSxcbiAgICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlVHlwZSksXG4gICAgICBrZXJuZWxfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2tlcm5lbElkKSxcbiAgICAgIGtleV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9rZXlOYW1lKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgbmFtZV9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWVQcmVmaXgpLFxuICAgICAgcmFtX2Rpc2tfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JhbURpc2tJZCksXG4gICAgICBzZWN1cml0eV9ncm91cF9uYW1lczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3NlY3VyaXR5R3JvdXBOYW1lcyksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHVwZGF0ZV9kZWZhdWx0X3ZlcnNpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl91cGRhdGVEZWZhdWx0VmVyc2lvbiksXG4gICAgICB1c2VyX2RhdGE6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3VzZXJEYXRhKSxcbiAgICAgIHZwY19zZWN1cml0eV9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl92cGNTZWN1cml0eUdyb3VwSWRzKSxcbiAgICAgIGJsb2NrX2RldmljZV9tYXBwaW5nczogY2RrdGYubGlzdE1hcHBlcihsYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NUb1RlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fYmxvY2tEZXZpY2VNYXBwaW5ncy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGNhcGFjaXR5X3Jlc2VydmF0aW9uX3NwZWNpZmljYXRpb246IGxhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGNwdV9vcHRpb25zOiBsYXVuY2hUZW1wbGF0ZUNwdU9wdGlvbnNUb1RlcnJhZm9ybSh0aGlzLl9jcHVPcHRpb25zLmludGVybmFsVmFsdWUpLFxuICAgICAgY3JlZGl0X3NwZWNpZmljYXRpb246IGxhdW5jaFRlbXBsYXRlQ3JlZGl0U3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHRoaXMuX2NyZWRpdFNwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICBlbGFzdGljX2dwdV9zcGVjaWZpY2F0aW9uczogY2RrdGYubGlzdE1hcHBlcihsYXVuY2hUZW1wbGF0ZUVsYXN0aWNHcHVTcGVjaWZpY2F0aW9uc1RvVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9lbGFzdGljR3B1U3BlY2lmaWNhdGlvbnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBlbGFzdGljX2luZmVyZW5jZV9hY2NlbGVyYXRvcjogbGF1bmNoVGVtcGxhdGVFbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3JUb1RlcnJhZm9ybSh0aGlzLl9lbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3IuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBlbmNsYXZlX29wdGlvbnM6IGxhdW5jaFRlbXBsYXRlRW5jbGF2ZU9wdGlvbnNUb1RlcnJhZm9ybSh0aGlzLl9lbmNsYXZlT3B0aW9ucy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGhpYmVybmF0aW9uX29wdGlvbnM6IGxhdW5jaFRlbXBsYXRlSGliZXJuYXRpb25PcHRpb25zVG9UZXJyYWZvcm0odGhpcy5faGliZXJuYXRpb25PcHRpb25zLmludGVybmFsVmFsdWUpLFxuICAgICAgaWFtX2luc3RhbmNlX3Byb2ZpbGU6IGxhdW5jaFRlbXBsYXRlSWFtSW5zdGFuY2VQcm9maWxlVG9UZXJyYWZvcm0odGhpcy5faWFtSW5zdGFuY2VQcm9maWxlLmludGVybmFsVmFsdWUpLFxuICAgICAgaW5zdGFuY2VfbWFya2V0X29wdGlvbnM6IGxhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zVG9UZXJyYWZvcm0odGhpcy5faW5zdGFuY2VNYXJrZXRPcHRpb25zLmludGVybmFsVmFsdWUpLFxuICAgICAgbGljZW5zZV9zcGVjaWZpY2F0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGxhdW5jaFRlbXBsYXRlTGljZW5zZVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fbGljZW5zZVNwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICBtZXRhZGF0YV9vcHRpb25zOiBsYXVuY2hUZW1wbGF0ZU1ldGFkYXRhT3B0aW9uc1RvVGVycmFmb3JtKHRoaXMuX21ldGFkYXRhT3B0aW9ucy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIG1vbml0b3Jpbmc6IGxhdW5jaFRlbXBsYXRlTW9uaXRvcmluZ1RvVGVycmFmb3JtKHRoaXMuX21vbml0b3JpbmcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBuZXR3b3JrX2ludGVyZmFjZXM6IGNka3RmLmxpc3RNYXBwZXIobGF1bmNoVGVtcGxhdGVOZXR3b3JrSW50ZXJmYWNlc1RvVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9uZXR3b3JrSW50ZXJmYWNlcy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHBsYWNlbWVudDogbGF1bmNoVGVtcGxhdGVQbGFjZW1lbnRUb1RlcnJhZm9ybSh0aGlzLl9wbGFjZW1lbnQuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0YWdfc3BlY2lmaWNhdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIobGF1bmNoVGVtcGxhdGVUYWdTcGVjaWZpY2F0aW9uc1RvVGVycmFmb3JtLCB0cnVlKSh0aGlzLl90YWdTcGVjaWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGRlZmF1bHRfdmVyc2lvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fZGVmYXVsdFZlcnNpb24pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlX2FwaV90ZXJtaW5hdGlvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX2Rpc2FibGVBcGlUZXJtaW5hdGlvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICBlYnNfb3B0aW1pemVkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9lYnNPcHRpbWl6ZWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpbWFnZV9pZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faW1hZ2VJZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGluc3RhbmNlX2luaXRpYXRlZF9zaHV0ZG93bl9iZWhhdmlvcjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaW5zdGFuY2VfdHlwZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faW5zdGFuY2VUeXBlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAga2VybmVsX2lkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9rZXJuZWxJZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGtleV9uYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9rZXlOYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG5hbWVfcHJlZml4OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9uYW1lUHJlZml4KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgcmFtX2Rpc2tfaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3JhbURpc2tJZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHNlY3VyaXR5X2dyb3VwX25hbWVzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fc2VjdXJpdHlHcm91cE5hbWVzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHRhZ3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0YWdzX2FsbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHVwZGF0ZV9kZWZhdWx0X3ZlcnNpb246IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl91cGRhdGVEZWZhdWx0VmVyc2lvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICB1c2VyX2RhdGE6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3VzZXJEYXRhKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgdnBjX3NlY3VyaXR5X2dyb3VwX2lkczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgYmxvY2tfZGV2aWNlX21hcHBpbmdzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGxhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5nc1RvSGNsVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9ibG9ja0RldmljZU1hcHBpbmdzLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NMaXN0XCIsXG4gICAgICB9LFxuICAgICAgY2FwYWNpdHlfcmVzZXJ2YXRpb25fc3BlY2lmaWNhdGlvbjoge1xuICAgICAgICB2YWx1ZTogbGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvblRvSGNsVGVycmFmb3JtKHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJMYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGNwdV9vcHRpb25zOiB7XG4gICAgICAgIHZhbHVlOiBsYXVuY2hUZW1wbGF0ZUNwdU9wdGlvbnNUb0hjbFRlcnJhZm9ybSh0aGlzLl9jcHVPcHRpb25zLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJMYXVuY2hUZW1wbGF0ZUNwdU9wdGlvbnNMaXN0XCIsXG4gICAgICB9LFxuICAgICAgY3JlZGl0X3NwZWNpZmljYXRpb246IHtcbiAgICAgICAgdmFsdWU6IGxhdW5jaFRlbXBsYXRlQ3JlZGl0U3BlY2lmaWNhdGlvblRvSGNsVGVycmFmb3JtKHRoaXMuX2NyZWRpdFNwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkxhdW5jaFRlbXBsYXRlQ3JlZGl0U3BlY2lmaWNhdGlvbkxpc3RcIixcbiAgICAgIH0sXG4gICAgICBlbGFzdGljX2dwdV9zcGVjaWZpY2F0aW9uczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChsYXVuY2hUZW1wbGF0ZUVsYXN0aWNHcHVTcGVjaWZpY2F0aW9uc1RvSGNsVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9lbGFzdGljR3B1U3BlY2lmaWNhdGlvbnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkxhdW5jaFRlbXBsYXRlRWxhc3RpY0dwdVNwZWNpZmljYXRpb25zTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGVsYXN0aWNfaW5mZXJlbmNlX2FjY2VsZXJhdG9yOiB7XG4gICAgICAgIHZhbHVlOiBsYXVuY2hUZW1wbGF0ZUVsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvclRvSGNsVGVycmFmb3JtKHRoaXMuX2VsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvci5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTGF1bmNoVGVtcGxhdGVFbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3JMaXN0XCIsXG4gICAgICB9LFxuICAgICAgZW5jbGF2ZV9vcHRpb25zOiB7XG4gICAgICAgIHZhbHVlOiBsYXVuY2hUZW1wbGF0ZUVuY2xhdmVPcHRpb25zVG9IY2xUZXJyYWZvcm0odGhpcy5fZW5jbGF2ZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkxhdW5jaFRlbXBsYXRlRW5jbGF2ZU9wdGlvbnNMaXN0XCIsXG4gICAgICB9LFxuICAgICAgaGliZXJuYXRpb25fb3B0aW9uczoge1xuICAgICAgICB2YWx1ZTogbGF1bmNoVGVtcGxhdGVIaWJlcm5hdGlvbk9wdGlvbnNUb0hjbFRlcnJhZm9ybSh0aGlzLl9oaWJlcm5hdGlvbk9wdGlvbnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkxhdW5jaFRlbXBsYXRlSGliZXJuYXRpb25PcHRpb25zTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGlhbV9pbnN0YW5jZV9wcm9maWxlOiB7XG4gICAgICAgIHZhbHVlOiBsYXVuY2hUZW1wbGF0ZUlhbUluc3RhbmNlUHJvZmlsZVRvSGNsVGVycmFmb3JtKHRoaXMuX2lhbUluc3RhbmNlUHJvZmlsZS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTGF1bmNoVGVtcGxhdGVJYW1JbnN0YW5jZVByb2ZpbGVMaXN0XCIsXG4gICAgICB9LFxuICAgICAgaW5zdGFuY2VfbWFya2V0X29wdGlvbnM6IHtcbiAgICAgICAgdmFsdWU6IGxhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zVG9IY2xUZXJyYWZvcm0odGhpcy5faW5zdGFuY2VNYXJrZXRPcHRpb25zLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBsaWNlbnNlX3NwZWNpZmljYXRpb246IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2wobGF1bmNoVGVtcGxhdGVMaWNlbnNlU3BlY2lmaWNhdGlvblRvSGNsVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9saWNlbnNlU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJMYXVuY2hUZW1wbGF0ZUxpY2Vuc2VTcGVjaWZpY2F0aW9uTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIG1ldGFkYXRhX29wdGlvbnM6IHtcbiAgICAgICAgdmFsdWU6IGxhdW5jaFRlbXBsYXRlTWV0YWRhdGFPcHRpb25zVG9IY2xUZXJyYWZvcm0odGhpcy5fbWV0YWRhdGFPcHRpb25zLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJMYXVuY2hUZW1wbGF0ZU1ldGFkYXRhT3B0aW9uc0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBtb25pdG9yaW5nOiB7XG4gICAgICAgIHZhbHVlOiBsYXVuY2hUZW1wbGF0ZU1vbml0b3JpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9tb25pdG9yaW5nLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJMYXVuY2hUZW1wbGF0ZU1vbml0b3JpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgbmV0d29ya19pbnRlcmZhY2VzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGxhdW5jaFRlbXBsYXRlTmV0d29ya0ludGVyZmFjZXNUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fbmV0d29ya0ludGVyZmFjZXMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkxhdW5jaFRlbXBsYXRlTmV0d29ya0ludGVyZmFjZXNMaXN0XCIsXG4gICAgICB9LFxuICAgICAgcGxhY2VtZW50OiB7XG4gICAgICAgIHZhbHVlOiBsYXVuY2hUZW1wbGF0ZVBsYWNlbWVudFRvSGNsVGVycmFmb3JtKHRoaXMuX3BsYWNlbWVudC5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTGF1bmNoVGVtcGxhdGVQbGFjZW1lbnRMaXN0XCIsXG4gICAgICB9LFxuICAgICAgdGFnX3NwZWNpZmljYXRpb25zOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGxhdW5jaFRlbXBsYXRlVGFnU3BlY2lmaWNhdGlvbnNUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fdGFnU3BlY2lmaWNhdGlvbnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkxhdW5jaFRlbXBsYXRlVGFnU3BlY2lmaWNhdGlvbnNMaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=