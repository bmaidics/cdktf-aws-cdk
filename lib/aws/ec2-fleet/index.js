"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ec2Fleet = exports.Ec2FleetTimeoutsOutputReference = exports.ec2FleetTimeoutsToHclTerraform = exports.ec2FleetTimeoutsToTerraform = exports.Ec2FleetTargetCapacitySpecificationOutputReference = exports.ec2FleetTargetCapacitySpecificationToHclTerraform = exports.ec2FleetTargetCapacitySpecificationToTerraform = exports.Ec2FleetSpotOptionsOutputReference = exports.ec2FleetSpotOptionsToHclTerraform = exports.ec2FleetSpotOptionsToTerraform = exports.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference = exports.ec2FleetSpotOptionsMaintenanceStrategiesToHclTerraform = exports.ec2FleetSpotOptionsMaintenanceStrategiesToTerraform = exports.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference = exports.ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToHclTerraform = exports.ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToTerraform = exports.Ec2FleetOnDemandOptionsOutputReference = exports.ec2FleetOnDemandOptionsToHclTerraform = exports.ec2FleetOnDemandOptionsToTerraform = exports.Ec2FleetLaunchTemplateConfigOutputReference = exports.ec2FleetLaunchTemplateConfigToHclTerraform = exports.ec2FleetLaunchTemplateConfigToTerraform = exports.Ec2FleetLaunchTemplateConfigOverrideList = exports.Ec2FleetLaunchTemplateConfigOverrideOutputReference = exports.ec2FleetLaunchTemplateConfigOverrideToHclTerraform = exports.ec2FleetLaunchTemplateConfigOverrideToTerraform = exports.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference = exports.ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToHclTerraform = exports.ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        launch_template_id: cdktf.stringToTerraform(struct.launchTemplateId),
        launch_template_name: cdktf.stringToTerraform(struct.launchTemplateName),
        version: cdktf.stringToTerraform(struct.version),
    };
}
exports.ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToTerraform = ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToTerraform;
function ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        launch_template_id: {
            value: cdktf.stringToHclTerraform(struct.launchTemplateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        launch_template_name: {
            value: cdktf.stringToHclTerraform(struct.launchTemplateName),
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
exports.ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToHclTerraform = ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToHclTerraform;
class Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._launchTemplateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateId = this._launchTemplateId;
        }
        if (this._launchTemplateName !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateName = this._launchTemplateName;
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
            this._launchTemplateId = undefined;
            this._launchTemplateName = undefined;
            this._version = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._launchTemplateId = value.launchTemplateId;
            this._launchTemplateName = value.launchTemplateName;
            this._version = value.version;
        }
    }
    get launchTemplateId() {
        return this.getStringAttribute('launch_template_id');
    }
    set launchTemplateId(value) {
        this._launchTemplateId = value;
    }
    resetLaunchTemplateId() {
        this._launchTemplateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateIdInput() {
        return this._launchTemplateId;
    }
    get launchTemplateName() {
        return this.getStringAttribute('launch_template_name');
    }
    set launchTemplateName(value) {
        this._launchTemplateName = value;
    }
    resetLaunchTemplateName() {
        this._launchTemplateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateNameInput() {
        return this._launchTemplateName;
    }
    get version() {
        return this.getStringAttribute('version');
    }
    set version(value) {
        this._version = value;
    }
    // Temporarily expose input value. Use with caution.
    get versionInput() {
        return this._version;
    }
}
exports.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference = Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference[_a] = { fqn: "@cdktf/aws-cdk.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference", version: "0.0.0" };
function ec2FleetLaunchTemplateConfigOverrideToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        max_price: cdktf.stringToTerraform(struct.maxPrice),
        priority: cdktf.numberToTerraform(struct.priority),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
        weighted_capacity: cdktf.numberToTerraform(struct.weightedCapacity),
    };
}
exports.ec2FleetLaunchTemplateConfigOverrideToTerraform = ec2FleetLaunchTemplateConfigOverrideToTerraform;
function ec2FleetLaunchTemplateConfigOverrideToHclTerraform(struct) {
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
        max_price: {
            value: cdktf.stringToHclTerraform(struct.maxPrice),
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
exports.ec2FleetLaunchTemplateConfigOverrideToHclTerraform = ec2FleetLaunchTemplateConfigOverrideToHclTerraform;
class Ec2FleetLaunchTemplateConfigOverrideOutputReference extends cdktf.ComplexObject {
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
        if (this._maxPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxPrice = this._maxPrice;
        }
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
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
            this._maxPrice = undefined;
            this._priority = undefined;
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
            this._maxPrice = value.maxPrice;
            this._priority = value.priority;
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
exports.Ec2FleetLaunchTemplateConfigOverrideOutputReference = Ec2FleetLaunchTemplateConfigOverrideOutputReference;
_b = JSII_RTTI_SYMBOL_1;
Ec2FleetLaunchTemplateConfigOverrideOutputReference[_b] = { fqn: "@cdktf/aws-cdk.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference", version: "0.0.0" };
class Ec2FleetLaunchTemplateConfigOverrideList extends cdktf.ComplexList {
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
        return new Ec2FleetLaunchTemplateConfigOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.Ec2FleetLaunchTemplateConfigOverrideList = Ec2FleetLaunchTemplateConfigOverrideList;
_c = JSII_RTTI_SYMBOL_1;
Ec2FleetLaunchTemplateConfigOverrideList[_c] = { fqn: "@cdktf/aws-cdk.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList", version: "0.0.0" };
function ec2FleetLaunchTemplateConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        launch_template_specification: ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct.launchTemplateSpecification),
        override: cdktf.listMapper(ec2FleetLaunchTemplateConfigOverrideToTerraform, true)(struct.override),
    };
}
exports.ec2FleetLaunchTemplateConfigToTerraform = ec2FleetLaunchTemplateConfigToTerraform;
function ec2FleetLaunchTemplateConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        launch_template_specification: {
            value: ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToHclTerraform(struct.launchTemplateSpecification),
            isBlock: true,
            type: "list",
            storageClassType: "Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationList",
        },
        override: {
            value: cdktf.listMapperHcl(ec2FleetLaunchTemplateConfigOverrideToHclTerraform, true)(struct.override),
            isBlock: true,
            type: "list",
            storageClassType: "Ec2FleetLaunchTemplateConfigOverrideList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ec2FleetLaunchTemplateConfigToHclTerraform = ec2FleetLaunchTemplateConfigToHclTerraform;
class Ec2FleetLaunchTemplateConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // launch_template_specification - computed: false, optional: false, required: true
        this._launchTemplateSpecification = new Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference(this, "launch_template_specification");
        // override - computed: false, optional: true, required: false
        this._override = new Ec2FleetLaunchTemplateConfigOverrideList(this, "override", false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._launchTemplateSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateSpecification = this._launchTemplateSpecification?.internalValue;
        }
        if (this._override?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.override = this._override?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._launchTemplateSpecification.internalValue = undefined;
            this._override.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._launchTemplateSpecification.internalValue = value.launchTemplateSpecification;
            this._override.internalValue = value.override;
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
    get override() {
        return this._override;
    }
    putOverride(value) {
        this._override.internalValue = value;
    }
    resetOverride() {
        this._override.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get overrideInput() {
        return this._override.internalValue;
    }
}
exports.Ec2FleetLaunchTemplateConfigOutputReference = Ec2FleetLaunchTemplateConfigOutputReference;
_d = JSII_RTTI_SYMBOL_1;
Ec2FleetLaunchTemplateConfigOutputReference[_d] = { fqn: "@cdktf/aws-cdk.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference", version: "0.0.0" };
function ec2FleetOnDemandOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
    };
}
exports.ec2FleetOnDemandOptionsToTerraform = ec2FleetOnDemandOptionsToTerraform;
function ec2FleetOnDemandOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allocation_strategy: {
            value: cdktf.stringToHclTerraform(struct.allocationStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ec2FleetOnDemandOptionsToHclTerraform = ec2FleetOnDemandOptionsToHclTerraform;
class Ec2FleetOnDemandOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._allocationStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.allocationStrategy = this._allocationStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allocationStrategy = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allocationStrategy = value.allocationStrategy;
        }
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
}
exports.Ec2FleetOnDemandOptionsOutputReference = Ec2FleetOnDemandOptionsOutputReference;
_e = JSII_RTTI_SYMBOL_1;
Ec2FleetOnDemandOptionsOutputReference[_e] = { fqn: "@cdktf/aws-cdk.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference", version: "0.0.0" };
function ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToTerraform(struct) {
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
exports.ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToTerraform = ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToTerraform;
function ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToHclTerraform(struct) {
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
exports.ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToHclTerraform = ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToHclTerraform;
class Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference extends cdktf.ComplexObject {
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
exports.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference = Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference;
_f = JSII_RTTI_SYMBOL_1;
Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference[_f] = { fqn: "@cdktf/aws-cdk.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference", version: "0.0.0" };
function ec2FleetSpotOptionsMaintenanceStrategiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        capacity_rebalance: ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToTerraform(struct.capacityRebalance),
    };
}
exports.ec2FleetSpotOptionsMaintenanceStrategiesToTerraform = ec2FleetSpotOptionsMaintenanceStrategiesToTerraform;
function ec2FleetSpotOptionsMaintenanceStrategiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        capacity_rebalance: {
            value: ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToHclTerraform(struct.capacityRebalance),
            isBlock: true,
            type: "list",
            storageClassType: "Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ec2FleetSpotOptionsMaintenanceStrategiesToHclTerraform = ec2FleetSpotOptionsMaintenanceStrategiesToHclTerraform;
class Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // capacity_rebalance - computed: false, optional: true, required: false
        this._capacityRebalance = new Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference(this, "capacity_rebalance");
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
exports.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference = Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference;
_g = JSII_RTTI_SYMBOL_1;
Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference[_g] = { fqn: "@cdktf/aws-cdk.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference", version: "0.0.0" };
function ec2FleetSpotOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
        instance_interruption_behavior: cdktf.stringToTerraform(struct.instanceInterruptionBehavior),
        instance_pools_to_use_count: cdktf.numberToTerraform(struct.instancePoolsToUseCount),
        maintenance_strategies: ec2FleetSpotOptionsMaintenanceStrategiesToTerraform(struct.maintenanceStrategies),
    };
}
exports.ec2FleetSpotOptionsToTerraform = ec2FleetSpotOptionsToTerraform;
function ec2FleetSpotOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allocation_strategy: {
            value: cdktf.stringToHclTerraform(struct.allocationStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_interruption_behavior: {
            value: cdktf.stringToHclTerraform(struct.instanceInterruptionBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_pools_to_use_count: {
            value: cdktf.numberToHclTerraform(struct.instancePoolsToUseCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maintenance_strategies: {
            value: ec2FleetSpotOptionsMaintenanceStrategiesToHclTerraform(struct.maintenanceStrategies),
            isBlock: true,
            type: "list",
            storageClassType: "Ec2FleetSpotOptionsMaintenanceStrategiesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ec2FleetSpotOptionsToHclTerraform = ec2FleetSpotOptionsToHclTerraform;
class Ec2FleetSpotOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // maintenance_strategies - computed: false, optional: true, required: false
        this._maintenanceStrategies = new Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference(this, "maintenance_strategies");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allocationStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.allocationStrategy = this._allocationStrategy;
        }
        if (this._instanceInterruptionBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceInterruptionBehavior = this._instanceInterruptionBehavior;
        }
        if (this._instancePoolsToUseCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.instancePoolsToUseCount = this._instancePoolsToUseCount;
        }
        if (this._maintenanceStrategies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maintenanceStrategies = this._maintenanceStrategies?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allocationStrategy = undefined;
            this._instanceInterruptionBehavior = undefined;
            this._instancePoolsToUseCount = undefined;
            this._maintenanceStrategies.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allocationStrategy = value.allocationStrategy;
            this._instanceInterruptionBehavior = value.instanceInterruptionBehavior;
            this._instancePoolsToUseCount = value.instancePoolsToUseCount;
            this._maintenanceStrategies.internalValue = value.maintenanceStrategies;
        }
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
    get maintenanceStrategies() {
        return this._maintenanceStrategies;
    }
    putMaintenanceStrategies(value) {
        this._maintenanceStrategies.internalValue = value;
    }
    resetMaintenanceStrategies() {
        this._maintenanceStrategies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maintenanceStrategiesInput() {
        return this._maintenanceStrategies.internalValue;
    }
}
exports.Ec2FleetSpotOptionsOutputReference = Ec2FleetSpotOptionsOutputReference;
_h = JSII_RTTI_SYMBOL_1;
Ec2FleetSpotOptionsOutputReference[_h] = { fqn: "@cdktf/aws-cdk.ec2Fleet.Ec2FleetSpotOptionsOutputReference", version: "0.0.0" };
function ec2FleetTargetCapacitySpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_target_capacity_type: cdktf.stringToTerraform(struct.defaultTargetCapacityType),
        on_demand_target_capacity: cdktf.numberToTerraform(struct.onDemandTargetCapacity),
        spot_target_capacity: cdktf.numberToTerraform(struct.spotTargetCapacity),
        total_target_capacity: cdktf.numberToTerraform(struct.totalTargetCapacity),
    };
}
exports.ec2FleetTargetCapacitySpecificationToTerraform = ec2FleetTargetCapacitySpecificationToTerraform;
function ec2FleetTargetCapacitySpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        default_target_capacity_type: {
            value: cdktf.stringToHclTerraform(struct.defaultTargetCapacityType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        on_demand_target_capacity: {
            value: cdktf.numberToHclTerraform(struct.onDemandTargetCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        spot_target_capacity: {
            value: cdktf.numberToHclTerraform(struct.spotTargetCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        total_target_capacity: {
            value: cdktf.numberToHclTerraform(struct.totalTargetCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ec2FleetTargetCapacitySpecificationToHclTerraform = ec2FleetTargetCapacitySpecificationToHclTerraform;
class Ec2FleetTargetCapacitySpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._defaultTargetCapacityType !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultTargetCapacityType = this._defaultTargetCapacityType;
        }
        if (this._onDemandTargetCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.onDemandTargetCapacity = this._onDemandTargetCapacity;
        }
        if (this._spotTargetCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotTargetCapacity = this._spotTargetCapacity;
        }
        if (this._totalTargetCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.totalTargetCapacity = this._totalTargetCapacity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._defaultTargetCapacityType = undefined;
            this._onDemandTargetCapacity = undefined;
            this._spotTargetCapacity = undefined;
            this._totalTargetCapacity = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._defaultTargetCapacityType = value.defaultTargetCapacityType;
            this._onDemandTargetCapacity = value.onDemandTargetCapacity;
            this._spotTargetCapacity = value.spotTargetCapacity;
            this._totalTargetCapacity = value.totalTargetCapacity;
        }
    }
    get defaultTargetCapacityType() {
        return this.getStringAttribute('default_target_capacity_type');
    }
    set defaultTargetCapacityType(value) {
        this._defaultTargetCapacityType = value;
    }
    // Temporarily expose input value. Use with caution.
    get defaultTargetCapacityTypeInput() {
        return this._defaultTargetCapacityType;
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
    get spotTargetCapacity() {
        return this.getNumberAttribute('spot_target_capacity');
    }
    set spotTargetCapacity(value) {
        this._spotTargetCapacity = value;
    }
    resetSpotTargetCapacity() {
        this._spotTargetCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get spotTargetCapacityInput() {
        return this._spotTargetCapacity;
    }
    get totalTargetCapacity() {
        return this.getNumberAttribute('total_target_capacity');
    }
    set totalTargetCapacity(value) {
        this._totalTargetCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    get totalTargetCapacityInput() {
        return this._totalTargetCapacity;
    }
}
exports.Ec2FleetTargetCapacitySpecificationOutputReference = Ec2FleetTargetCapacitySpecificationOutputReference;
_j = JSII_RTTI_SYMBOL_1;
Ec2FleetTargetCapacitySpecificationOutputReference[_j] = { fqn: "@cdktf/aws-cdk.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference", version: "0.0.0" };
function ec2FleetTimeoutsToTerraform(struct) {
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
exports.ec2FleetTimeoutsToTerraform = ec2FleetTimeoutsToTerraform;
function ec2FleetTimeoutsToHclTerraform(struct) {
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
exports.ec2FleetTimeoutsToHclTerraform = ec2FleetTimeoutsToHclTerraform;
class Ec2FleetTimeoutsOutputReference extends cdktf.ComplexObject {
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
exports.Ec2FleetTimeoutsOutputReference = Ec2FleetTimeoutsOutputReference;
_k = JSII_RTTI_SYMBOL_1;
Ec2FleetTimeoutsOutputReference[_k] = { fqn: "@cdktf/aws-cdk.ec2Fleet.Ec2FleetTimeoutsOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet aws_ec2_fleet}
*/
class Ec2Fleet extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Ec2Fleet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2Fleet to import
    * @param importFromId The id of the existing Ec2Fleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2Fleet to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_fleet", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_fleet aws_ec2_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2FleetConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ec2_fleet',
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
        // launch_template_config - computed: false, optional: false, required: true
        this._launchTemplateConfig = new Ec2FleetLaunchTemplateConfigOutputReference(this, "launch_template_config");
        // on_demand_options - computed: false, optional: true, required: false
        this._onDemandOptions = new Ec2FleetOnDemandOptionsOutputReference(this, "on_demand_options");
        // spot_options - computed: false, optional: true, required: false
        this._spotOptions = new Ec2FleetSpotOptionsOutputReference(this, "spot_options");
        // target_capacity_specification - computed: false, optional: false, required: true
        this._targetCapacitySpecification = new Ec2FleetTargetCapacitySpecificationOutputReference(this, "target_capacity_specification");
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new Ec2FleetTimeoutsOutputReference(this, "timeouts");
        this._excessCapacityTerminationPolicy = config.excessCapacityTerminationPolicy;
        this._id = config.id;
        this._replaceUnhealthyInstances = config.replaceUnhealthyInstances;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._terminateInstances = config.terminateInstances;
        this._terminateInstancesWithExpiration = config.terminateInstancesWithExpiration;
        this._type = config.type;
        this._launchTemplateConfig.internalValue = config.launchTemplateConfig;
        this._onDemandOptions.internalValue = config.onDemandOptions;
        this._spotOptions.internalValue = config.spotOptions;
        this._targetCapacitySpecification.internalValue = config.targetCapacitySpecification;
        this._timeouts.internalValue = config.timeouts;
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
    get terminateInstances() {
        return this.getBooleanAttribute('terminate_instances');
    }
    set terminateInstances(value) {
        this._terminateInstances = value;
    }
    resetTerminateInstances() {
        this._terminateInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get terminateInstancesInput() {
        return this._terminateInstances;
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
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    get launchTemplateConfig() {
        return this._launchTemplateConfig;
    }
    putLaunchTemplateConfig(value) {
        this._launchTemplateConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateConfigInput() {
        return this._launchTemplateConfig.internalValue;
    }
    get onDemandOptions() {
        return this._onDemandOptions;
    }
    putOnDemandOptions(value) {
        this._onDemandOptions.internalValue = value;
    }
    resetOnDemandOptions() {
        this._onDemandOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onDemandOptionsInput() {
        return this._onDemandOptions.internalValue;
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
    get targetCapacitySpecification() {
        return this._targetCapacitySpecification;
    }
    putTargetCapacitySpecification(value) {
        this._targetCapacitySpecification.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetCapacitySpecificationInput() {
        return this._targetCapacitySpecification.internalValue;
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
            excess_capacity_termination_policy: cdktf.stringToTerraform(this._excessCapacityTerminationPolicy),
            id: cdktf.stringToTerraform(this._id),
            replace_unhealthy_instances: cdktf.booleanToTerraform(this._replaceUnhealthyInstances),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            terminate_instances: cdktf.booleanToTerraform(this._terminateInstances),
            terminate_instances_with_expiration: cdktf.booleanToTerraform(this._terminateInstancesWithExpiration),
            type: cdktf.stringToTerraform(this._type),
            launch_template_config: ec2FleetLaunchTemplateConfigToTerraform(this._launchTemplateConfig.internalValue),
            on_demand_options: ec2FleetOnDemandOptionsToTerraform(this._onDemandOptions.internalValue),
            spot_options: ec2FleetSpotOptionsToTerraform(this._spotOptions.internalValue),
            target_capacity_specification: ec2FleetTargetCapacitySpecificationToTerraform(this._targetCapacitySpecification.internalValue),
            timeouts: ec2FleetTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            excess_capacity_termination_policy: {
                value: cdktf.stringToHclTerraform(this._excessCapacityTerminationPolicy),
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
            replace_unhealthy_instances: {
                value: cdktf.booleanToHclTerraform(this._replaceUnhealthyInstances),
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
            terminate_instances: {
                value: cdktf.booleanToHclTerraform(this._terminateInstances),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            terminate_instances_with_expiration: {
                value: cdktf.booleanToHclTerraform(this._terminateInstancesWithExpiration),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            launch_template_config: {
                value: ec2FleetLaunchTemplateConfigToHclTerraform(this._launchTemplateConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "Ec2FleetLaunchTemplateConfigList",
            },
            on_demand_options: {
                value: ec2FleetOnDemandOptionsToHclTerraform(this._onDemandOptions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "Ec2FleetOnDemandOptionsList",
            },
            spot_options: {
                value: ec2FleetSpotOptionsToHclTerraform(this._spotOptions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "Ec2FleetSpotOptionsList",
            },
            target_capacity_specification: {
                value: ec2FleetTargetCapacitySpecificationToHclTerraform(this._targetCapacitySpecification.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "Ec2FleetTargetCapacitySpecificationList",
            },
            timeouts: {
                value: ec2FleetTimeoutsToHclTerraform(this._timeouts.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "Ec2FleetTimeouts",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.Ec2Fleet = Ec2Fleet;
_l = JSII_RTTI_SYMBOL_1;
Ec2Fleet[_l] = { fqn: "@cdktf/aws-cdk.ec2Fleet.Ec2Fleet", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
Ec2Fleet.tfResourceType = "aws_ec2_fleet";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2VjMi1mbGVldC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQXNGL0IsU0FBZ0Isa0VBQWtFLENBQUMsTUFBeUk7SUFDMU4sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDckUsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQztRQUN6RSxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDbEQsQ0FBQTtBQUNILENBQUM7QUFWRCxnSkFVQztBQUdELFNBQWdCLHFFQUFxRSxDQUFDLE1BQXlJO0lBQzdOLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNE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Q2hEO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLEtBQUssRUFBRSxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztnQkFDekUsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osZ0JBQWdCLEVBQUUseUJBQXlCO2FBQzVDO1lBQ0QsNkJBQTZCLEVBQUU7Z0JBQzdCLEtBQUssRUFBRSxpREFBaUQsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsYUFBYSxDQUFDO2dCQUN6RyxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSx5Q0FBeUM7YUFDNUQ7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLDhCQUE4QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO2dCQUNuRSxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxrQkFBa0I7YUFDckM7U0FDRixDQUFDO1FBRUYsOEJBQThCO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQXZYSCw0QkF3WEM7OztBQXRYQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHVCQUFjLEdBQUcsZUFBZSxBQUFsQixDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VjMl9mbGVldFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEVjMkZsZWV0Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VjMl9mbGVldCNleGNlc3NfY2FwYWNpdHlfdGVybWluYXRpb25fcG9saWN5IEVjMkZsZWV0I2V4Y2Vzc19jYXBhY2l0eV90ZXJtaW5hdGlvbl9wb2xpY3l9XG4gICovXG4gIHJlYWRvbmx5IGV4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3k/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VjMl9mbGVldCNpZCBFYzJGbGVldCNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWMyX2ZsZWV0I3JlcGxhY2VfdW5oZWFsdGh5X2luc3RhbmNlcyBFYzJGbGVldCNyZXBsYWNlX3VuaGVhbHRoeV9pbnN0YW5jZXN9XG4gICovXG4gIHJlYWRvbmx5IHJlcGxhY2VVbmhlYWx0aHlJbnN0YW5jZXM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VjMl9mbGVldCN0YWdzIEVjMkZsZWV0I3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lYzJfZmxlZXQjdGFnc19hbGwgRWMyRmxlZXQjdGFnc19hbGx9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lYzJfZmxlZXQjdGVybWluYXRlX2luc3RhbmNlcyBFYzJGbGVldCN0ZXJtaW5hdGVfaW5zdGFuY2VzfVxuICAqL1xuICByZWFkb25seSB0ZXJtaW5hdGVJbnN0YW5jZXM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VjMl9mbGVldCN0ZXJtaW5hdGVfaW5zdGFuY2VzX3dpdGhfZXhwaXJhdGlvbiBFYzJGbGVldCN0ZXJtaW5hdGVfaW5zdGFuY2VzX3dpdGhfZXhwaXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgdGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VjMl9mbGVldCN0eXBlIEVjMkZsZWV0I3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGxhdW5jaF90ZW1wbGF0ZV9jb25maWcgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VjMl9mbGVldCNsYXVuY2hfdGVtcGxhdGVfY29uZmlnIEVjMkZsZWV0I2xhdW5jaF90ZW1wbGF0ZV9jb25maWd9XG4gICovXG4gIHJlYWRvbmx5IGxhdW5jaFRlbXBsYXRlQ29uZmlnOiBFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnO1xuICAvKipcbiAgKiBvbl9kZW1hbmRfb3B0aW9ucyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWMyX2ZsZWV0I29uX2RlbWFuZF9vcHRpb25zIEVjMkZsZWV0I29uX2RlbWFuZF9vcHRpb25zfVxuICAqL1xuICByZWFkb25seSBvbkRlbWFuZE9wdGlvbnM/OiBFYzJGbGVldE9uRGVtYW5kT3B0aW9ucztcbiAgLyoqXG4gICogc3BvdF9vcHRpb25zIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lYzJfZmxlZXQjc3BvdF9vcHRpb25zIEVjMkZsZWV0I3Nwb3Rfb3B0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgc3BvdE9wdGlvbnM/OiBFYzJGbGVldFNwb3RPcHRpb25zO1xuICAvKipcbiAgKiB0YXJnZXRfY2FwYWNpdHlfc3BlY2lmaWNhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWMyX2ZsZWV0I3RhcmdldF9jYXBhY2l0eV9zcGVjaWZpY2F0aW9uIEVjMkZsZWV0I3RhcmdldF9jYXBhY2l0eV9zcGVjaWZpY2F0aW9ufVxuICAqL1xuICByZWFkb25seSB0YXJnZXRDYXBhY2l0eVNwZWNpZmljYXRpb246IEVjMkZsZWV0VGFyZ2V0Q2FwYWNpdHlTcGVjaWZpY2F0aW9uO1xuICAvKipcbiAgKiB0aW1lb3V0cyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWMyX2ZsZWV0I3RpbWVvdXRzIEVjMkZsZWV0I3RpbWVvdXRzfVxuICAqL1xuICByZWFkb25seSB0aW1lb3V0cz86IEVjMkZsZWV0VGltZW91dHM7XG59XG5leHBvcnQgaW50ZXJmYWNlIEVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lYzJfZmxlZXQjbGF1bmNoX3RlbXBsYXRlX2lkIEVjMkZsZWV0I2xhdW5jaF90ZW1wbGF0ZV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgbGF1bmNoVGVtcGxhdGVJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWMyX2ZsZWV0I2xhdW5jaF90ZW1wbGF0ZV9uYW1lIEVjMkZsZWV0I2xhdW5jaF90ZW1wbGF0ZV9uYW1lfVxuICAqL1xuICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZU5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VjMl9mbGVldCN2ZXJzaW9uIEVjMkZsZWV0I3ZlcnNpb259XG4gICovXG4gIHJlYWRvbmx5IHZlcnNpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgRWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ0xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsYXVuY2hfdGVtcGxhdGVfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGF1bmNoVGVtcGxhdGVJZCksXG4gICAgbGF1bmNoX3RlbXBsYXRlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGF1bmNoVGVtcGxhdGVOYW1lKSxcbiAgICB2ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZlcnNpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgRWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ0xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbGF1bmNoX3RlbXBsYXRlX2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hUZW1wbGF0ZUlkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBsYXVuY2hfdGVtcGxhdGVfbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubGF1bmNoVGVtcGxhdGVOYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB2ZXJzaW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS52ZXJzaW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2xhdW5jaFRlbXBsYXRlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGF1bmNoVGVtcGxhdGVJZCA9IHRoaXMuX2xhdW5jaFRlbXBsYXRlSWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sYXVuY2hUZW1wbGF0ZU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGF1bmNoVGVtcGxhdGVOYW1lID0gdGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52ZXJzaW9uID0gdGhpcy5fdmVyc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZUlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVJZCA9IHZhbHVlLmxhdW5jaFRlbXBsYXRlSWQ7XG4gICAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZU5hbWUgPSB2YWx1ZS5sYXVuY2hUZW1wbGF0ZU5hbWU7XG4gICAgICB0aGlzLl92ZXJzaW9uID0gdmFsdWUudmVyc2lvbjtcbiAgICB9XG4gIH1cblxuICAvLyBsYXVuY2hfdGVtcGxhdGVfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGF1bmNoVGVtcGxhdGVJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhdW5jaF90ZW1wbGF0ZV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGF1bmNoVGVtcGxhdGVJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhdW5jaFRlbXBsYXRlSWQoKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hUZW1wbGF0ZUlkO1xuICB9XG5cbiAgLy8gbGF1bmNoX3RlbXBsYXRlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGF1bmNoVGVtcGxhdGVOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXVuY2hfdGVtcGxhdGVfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGF1bmNoVGVtcGxhdGVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXVuY2hUZW1wbGF0ZU5hbWUoKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lO1xuICB9XG5cbiAgLy8gdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92ZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2ZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnNpb247XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ092ZXJyaWRlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWMyX2ZsZWV0I2F2YWlsYWJpbGl0eV96b25lIEVjMkZsZWV0I2F2YWlsYWJpbGl0eV96b25lfVxuICAqL1xuICByZWFkb25seSBhdmFpbGFiaWxpdHlab25lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lYzJfZmxlZXQjaW5zdGFuY2VfdHlwZSBFYzJGbGVldCNpbnN0YW5jZV90eXBlfVxuICAqL1xuICByZWFkb25seSBpbnN0YW5jZVR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VjMl9mbGVldCNtYXhfcHJpY2UgRWMyRmxlZXQjbWF4X3ByaWNlfVxuICAqL1xuICByZWFkb25seSBtYXhQcmljZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWMyX2ZsZWV0I3ByaW9yaXR5IEVjMkZsZWV0I3ByaW9yaXR5fVxuICAqL1xuICByZWFkb25seSBwcmlvcml0eT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWMyX2ZsZWV0I3N1Ym5ldF9pZCBFYzJGbGVldCNzdWJuZXRfaWR9XG4gICovXG4gIHJlYWRvbmx5IHN1Ym5ldElkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lYzJfZmxlZXQjd2VpZ2h0ZWRfY2FwYWNpdHkgRWMyRmxlZXQjd2VpZ2h0ZWRfY2FwYWNpdHl9XG4gICovXG4gIHJlYWRvbmx5IHdlaWdodGVkQ2FwYWNpdHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGUgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdmFpbGFiaWxpdHlfem9uZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdmFpbGFiaWxpdHlab25lKSxcbiAgICBpbnN0YW5jZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVHlwZSksXG4gICAgbWF4X3ByaWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFByaWNlKSxcbiAgICBwcmlvcml0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wcmlvcml0eSksXG4gICAgc3VibmV0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1Ym5ldElkKSxcbiAgICB3ZWlnaHRlZF9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS53ZWlnaHRlZENhcGFjaXR5KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGVUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGUgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYXZhaWxhYmlsaXR5X3pvbmU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmF2YWlsYWJpbGl0eVpvbmUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGluc3RhbmNlX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbWF4X3ByaWNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tYXhQcmljZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcHJpb3JpdHk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByaW9yaXR5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBzdWJuZXRfaWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN1Ym5ldElkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB3ZWlnaHRlZF9jYXBhY2l0eToge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0ZWRDYXBhY2l0eSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ092ZXJyaWRlIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hdmFpbGFiaWxpdHlab25lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF2YWlsYWJpbGl0eVpvbmUgPSB0aGlzLl9hdmFpbGFiaWxpdHlab25lO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5zdGFuY2VUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmluc3RhbmNlVHlwZSA9IHRoaXMuX2luc3RhbmNlVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21heFByaWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heFByaWNlID0gdGhpcy5fbWF4UHJpY2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmlvcml0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmlvcml0eSA9IHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3VibmV0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3VibmV0SWQgPSB0aGlzLl9zdWJuZXRJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3dlaWdodGVkQ2FwYWNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQud2VpZ2h0ZWRDYXBhY2l0eSA9IHRoaXMuX3dlaWdodGVkQ2FwYWNpdHk7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGUgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21heFByaWNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJpb3JpdHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdWJuZXRJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3dlaWdodGVkQ2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZSA9IHZhbHVlLmF2YWlsYWJpbGl0eVpvbmU7XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB2YWx1ZS5pbnN0YW5jZVR5cGU7XG4gICAgICB0aGlzLl9tYXhQcmljZSA9IHZhbHVlLm1heFByaWNlO1xuICAgICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZS5wcmlvcml0eTtcbiAgICAgIHRoaXMuX3N1Ym5ldElkID0gdmFsdWUuc3VibmV0SWQ7XG4gICAgICB0aGlzLl93ZWlnaHRlZENhcGFjaXR5ID0gdmFsdWUud2VpZ2h0ZWRDYXBhY2l0eTtcbiAgICB9XG4gIH1cblxuICAvLyBhdmFpbGFiaWxpdHlfem9uZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdmFpbGFiaWxpdHlab25lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXZhaWxhYmlsaXR5X3pvbmUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF2YWlsYWJpbGl0eVpvbmUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdmFpbGFiaWxpdHlab25lKCkge1xuICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF2YWlsYWJpbGl0eVpvbmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlVHlwZSgpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVR5cGU7XG4gIH1cblxuICAvLyBtYXhfcHJpY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4UHJpY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1heFByaWNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWF4X3ByaWNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhQcmljZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWF4UHJpY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhQcmljZSgpIHtcbiAgICB0aGlzLl9tYXhQcmljZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4UHJpY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4UHJpY2U7XG4gIH1cblxuICAvLyBwcmlvcml0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmlvcml0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwcmlvcml0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJpb3JpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJpb3JpdHkoKSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByaW9yaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICB9XG5cbiAgLy8gc3VibmV0X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1Ym5ldElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdWJuZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N1Ym5ldF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VibmV0SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N1Ym5ldElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3VibmV0SWQoKSB7XG4gICAgdGhpcy5fc3VibmV0SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1Ym5ldElkO1xuICB9XG5cbiAgLy8gd2VpZ2h0ZWRfY2FwYWNpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd2VpZ2h0ZWRDYXBhY2l0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgd2VpZ2h0ZWRDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3dlaWdodGVkX2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCB3ZWlnaHRlZENhcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl93ZWlnaHRlZENhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2VpZ2h0ZWRDYXBhY2l0eSgpIHtcbiAgICB0aGlzLl93ZWlnaHRlZENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3ZWlnaHRlZENhcGFjaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlaWdodGVkQ2FwYWNpdHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdPdmVycmlkZUxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IEVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdPdmVycmlkZVtdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGVPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgRWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ092ZXJyaWRlT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZyB7XG4gIC8qKlxuICAqIGxhdW5jaF90ZW1wbGF0ZV9zcGVjaWZpY2F0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lYzJfZmxlZXQjbGF1bmNoX3RlbXBsYXRlX3NwZWNpZmljYXRpb24gRWMyRmxlZXQjbGF1bmNoX3RlbXBsYXRlX3NwZWNpZmljYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbjogRWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ0xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbjtcbiAgLyoqXG4gICogb3ZlcnJpZGUgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VjMl9mbGVldCNvdmVycmlkZSBFYzJGbGVldCNvdmVycmlkZX1cbiAgKi9cbiAgcmVhZG9ubHkgb3ZlcnJpZGU/OiBFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGVbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IEVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxhdW5jaF90ZW1wbGF0ZV9zcGVjaWZpY2F0aW9uOiBlYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24pLFxuICAgIG92ZXJyaWRlOiBjZGt0Zi5saXN0TWFwcGVyKGVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdPdmVycmlkZVRvVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLm92ZXJyaWRlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogRWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IEVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGxhdW5jaF90ZW1wbGF0ZV9zcGVjaWZpY2F0aW9uOiB7XG4gICAgICB2YWx1ZTogZWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ0xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEubGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiRWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ0xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbkxpc3RcIixcbiAgICB9LFxuICAgIG92ZXJyaWRlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChlYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGVUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5vdmVycmlkZSksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdPdmVycmlkZUxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgRWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbiA9IHRoaXMuX2xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX292ZXJyaWRlPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm92ZXJyaWRlID0gdGhpcy5fb3ZlcnJpZGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vdmVycmlkZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbjtcbiAgICAgIHRoaXMuX292ZXJyaWRlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5vdmVycmlkZTtcbiAgICB9XG4gIH1cblxuICAvLyBsYXVuY2hfdGVtcGxhdGVfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24gPSBuZXcgRWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ0xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImxhdW5jaF90ZW1wbGF0ZV9zcGVjaWZpY2F0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24odmFsdWU6IEVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24pIHtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBvdmVycmlkZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vdmVycmlkZSA9IG5ldyBFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGVMaXN0KHRoaXMsIFwib3ZlcnJpZGVcIiwgZmFsc2UpO1xuICBwdWJsaWMgZ2V0IG92ZXJyaWRlKCkge1xuICAgIHJldHVybiB0aGlzLl9vdmVycmlkZTtcbiAgfVxuICBwdWJsaWMgcHV0T3ZlcnJpZGUodmFsdWU6IEVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdPdmVycmlkZVtdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9vdmVycmlkZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3ZlcnJpZGUoKSB7XG4gICAgdGhpcy5fb3ZlcnJpZGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcnJpZGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBFYzJGbGVldE9uRGVtYW5kT3B0aW9ucyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VjMl9mbGVldCNhbGxvY2F0aW9uX3N0cmF0ZWd5IEVjMkZsZWV0I2FsbG9jYXRpb25fc3RyYXRlZ3l9XG4gICovXG4gIHJlYWRvbmx5IGFsbG9jYXRpb25TdHJhdGVneT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMkZsZWV0T25EZW1hbmRPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRWMyRmxlZXRPbkRlbWFuZE9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBFYzJGbGVldE9uRGVtYW5kT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbGxvY2F0aW9uX3N0cmF0ZWd5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsbG9jYXRpb25TdHJhdGVneSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZWMyRmxlZXRPbkRlbWFuZE9wdGlvbnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJGbGVldE9uRGVtYW5kT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IEVjMkZsZWV0T25EZW1hbmRPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhbGxvY2F0aW9uX3N0cmF0ZWd5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hbGxvY2F0aW9uU3RyYXRlZ3kpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgRWMyRmxlZXRPbkRlbWFuZE9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVjMkZsZWV0T25EZW1hbmRPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hbGxvY2F0aW9uU3RyYXRlZ3kgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWxsb2NhdGlvblN0cmF0ZWd5ID0gdGhpcy5fYWxsb2NhdGlvblN0cmF0ZWd5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRWMyRmxlZXRPbkRlbWFuZE9wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hbGxvY2F0aW9uU3RyYXRlZ3kgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FsbG9jYXRpb25TdHJhdGVneSA9IHZhbHVlLmFsbG9jYXRpb25TdHJhdGVneTtcbiAgICB9XG4gIH1cblxuICAvLyBhbGxvY2F0aW9uX3N0cmF0ZWd5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsbG9jYXRpb25TdHJhdGVneT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWxsb2NhdGlvblN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWxsb2NhdGlvbl9zdHJhdGVneScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb2NhdGlvblN0cmF0ZWd5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hbGxvY2F0aW9uU3RyYXRlZ3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvY2F0aW9uU3RyYXRlZ3koKSB7XG4gICAgdGhpcy5fYWxsb2NhdGlvblN0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvY2F0aW9uU3RyYXRlZ3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb2NhdGlvblN0cmF0ZWd5O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVjMkZsZWV0U3BvdE9wdGlvbnNNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VjMl9mbGVldCNyZXBsYWNlbWVudF9zdHJhdGVneSBFYzJGbGVldCNyZXBsYWNlbWVudF9zdHJhdGVneX1cbiAgKi9cbiAgcmVhZG9ubHkgcmVwbGFjZW1lbnRTdHJhdGVneT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjMkZsZWV0U3BvdE9wdGlvbnNNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZVRvVGVycmFmb3JtKHN0cnVjdD86IEVjMkZsZWV0U3BvdE9wdGlvbnNNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZU91dHB1dFJlZmVyZW5jZSB8IEVjMkZsZWV0U3BvdE9wdGlvbnNNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXBsYWNlbWVudF9zdHJhdGVneTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXBsYWNlbWVudFN0cmF0ZWd5KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJGbGVldFNwb3RPcHRpb25zTWFpbnRlbmFuY2VTdHJhdGVnaWVzQ2FwYWNpdHlSZWJhbGFuY2VUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJGbGVldFNwb3RPcHRpb25zTWFpbnRlbmFuY2VTdHJhdGVnaWVzQ2FwYWNpdHlSZWJhbGFuY2VPdXRwdXRSZWZlcmVuY2UgfCBFYzJGbGVldFNwb3RPcHRpb25zTWFpbnRlbmFuY2VTdHJhdGVnaWVzQ2FwYWNpdHlSZWJhbGFuY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHJlcGxhY2VtZW50X3N0cmF0ZWd5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZXBsYWNlbWVudFN0cmF0ZWd5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEVjMkZsZWV0U3BvdE9wdGlvbnNNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWMyRmxlZXRTcG90T3B0aW9uc01haW50ZW5hbmNlU3RyYXRlZ2llc0NhcGFjaXR5UmViYWxhbmNlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZXBsYWNlbWVudFN0cmF0ZWd5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlcGxhY2VtZW50U3RyYXRlZ3kgPSB0aGlzLl9yZXBsYWNlbWVudFN0cmF0ZWd5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRWMyRmxlZXRTcG90T3B0aW9uc01haW50ZW5hbmNlU3RyYXRlZ2llc0NhcGFjaXR5UmViYWxhbmNlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVwbGFjZW1lbnRTdHJhdGVneSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVwbGFjZW1lbnRTdHJhdGVneSA9IHZhbHVlLnJlcGxhY2VtZW50U3RyYXRlZ3k7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVwbGFjZW1lbnRfc3RyYXRlZ3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVwbGFjZW1lbnRTdHJhdGVneT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVwbGFjZW1lbnRTdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcGxhY2VtZW50X3N0cmF0ZWd5Jyk7XG4gIH1cbiAgcHVibGljIHNldCByZXBsYWNlbWVudFN0cmF0ZWd5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXBsYWNlbWVudFN0cmF0ZWd5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVwbGFjZW1lbnRTdHJhdGVneSgpIHtcbiAgICB0aGlzLl9yZXBsYWNlbWVudFN0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXBsYWNlbWVudFN0cmF0ZWd5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VtZW50U3RyYXRlZ3k7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWMyRmxlZXRTcG90T3B0aW9uc01haW50ZW5hbmNlU3RyYXRlZ2llcyB7XG4gIC8qKlxuICAqIGNhcGFjaXR5X3JlYmFsYW5jZSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWMyX2ZsZWV0I2NhcGFjaXR5X3JlYmFsYW5jZSBFYzJGbGVldCNjYXBhY2l0eV9yZWJhbGFuY2V9XG4gICovXG4gIHJlYWRvbmx5IGNhcGFjaXR5UmViYWxhbmNlPzogRWMyRmxlZXRTcG90T3B0aW9uc01haW50ZW5hbmNlU3RyYXRlZ2llc0NhcGFjaXR5UmViYWxhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyRmxlZXRTcG90T3B0aW9uc01haW50ZW5hbmNlU3RyYXRlZ2llc1RvVGVycmFmb3JtKHN0cnVjdD86IEVjMkZsZWV0U3BvdE9wdGlvbnNNYWludGVuYW5jZVN0cmF0ZWdpZXNPdXRwdXRSZWZlcmVuY2UgfCBFYzJGbGVldFNwb3RPcHRpb25zTWFpbnRlbmFuY2VTdHJhdGVnaWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNhcGFjaXR5X3JlYmFsYW5jZTogZWMyRmxlZXRTcG90T3B0aW9uc01haW50ZW5hbmNlU3RyYXRlZ2llc0NhcGFjaXR5UmViYWxhbmNlVG9UZXJyYWZvcm0oc3RydWN0IS5jYXBhY2l0eVJlYmFsYW5jZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZWMyRmxlZXRTcG90T3B0aW9uc01haW50ZW5hbmNlU3RyYXRlZ2llc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEVjMkZsZWV0U3BvdE9wdGlvbnNNYWludGVuYW5jZVN0cmF0ZWdpZXNPdXRwdXRSZWZlcmVuY2UgfCBFYzJGbGVldFNwb3RPcHRpb25zTWFpbnRlbmFuY2VTdHJhdGVnaWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjYXBhY2l0eV9yZWJhbGFuY2U6IHtcbiAgICAgIHZhbHVlOiBlYzJGbGVldFNwb3RPcHRpb25zTWFpbnRlbmFuY2VTdHJhdGVnaWVzQ2FwYWNpdHlSZWJhbGFuY2VUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNhcGFjaXR5UmViYWxhbmNlKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiRWMyRmxlZXRTcG90T3B0aW9uc01haW50ZW5hbmNlU3RyYXRlZ2llc0NhcGFjaXR5UmViYWxhbmNlTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBFYzJGbGVldFNwb3RPcHRpb25zTWFpbnRlbmFuY2VTdHJhdGVnaWVzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFYzJGbGVldFNwb3RPcHRpb25zTWFpbnRlbmFuY2VTdHJhdGVnaWVzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jYXBhY2l0eVJlYmFsYW5jZT8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jYXBhY2l0eVJlYmFsYW5jZSA9IHRoaXMuX2NhcGFjaXR5UmViYWxhbmNlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRWMyRmxlZXRTcG90T3B0aW9uc01haW50ZW5hbmNlU3RyYXRlZ2llcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NhcGFjaXR5UmViYWxhbmNlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NhcGFjaXR5UmViYWxhbmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jYXBhY2l0eVJlYmFsYW5jZTtcbiAgICB9XG4gIH1cblxuICAvLyBjYXBhY2l0eV9yZWJhbGFuY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2FwYWNpdHlSZWJhbGFuY2UgPSBuZXcgRWMyRmxlZXRTcG90T3B0aW9uc01haW50ZW5hbmNlU3RyYXRlZ2llc0NhcGFjaXR5UmViYWxhbmNlT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiY2FwYWNpdHlfcmViYWxhbmNlXCIpO1xuICBwdWJsaWMgZ2V0IGNhcGFjaXR5UmViYWxhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eVJlYmFsYW5jZTtcbiAgfVxuICBwdWJsaWMgcHV0Q2FwYWNpdHlSZWJhbGFuY2UodmFsdWU6IEVjMkZsZWV0U3BvdE9wdGlvbnNNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZSkge1xuICAgIHRoaXMuX2NhcGFjaXR5UmViYWxhbmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYXBhY2l0eVJlYmFsYW5jZSgpIHtcbiAgICB0aGlzLl9jYXBhY2l0eVJlYmFsYW5jZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXBhY2l0eVJlYmFsYW5jZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eVJlYmFsYW5jZS5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVjMkZsZWV0U3BvdE9wdGlvbnMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lYzJfZmxlZXQjYWxsb2NhdGlvbl9zdHJhdGVneSBFYzJGbGVldCNhbGxvY2F0aW9uX3N0cmF0ZWd5fVxuICAqL1xuICByZWFkb25seSBhbGxvY2F0aW9uU3RyYXRlZ3k/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VjMl9mbGVldCNpbnN0YW5jZV9pbnRlcnJ1cHRpb25fYmVoYXZpb3IgRWMyRmxlZXQjaW5zdGFuY2VfaW50ZXJydXB0aW9uX2JlaGF2aW9yfVxuICAqL1xuICByZWFkb25seSBpbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lYzJfZmxlZXQjaW5zdGFuY2VfcG9vbHNfdG9fdXNlX2NvdW50IEVjMkZsZWV0I2luc3RhbmNlX3Bvb2xzX3RvX3VzZV9jb3VudH1cbiAgKi9cbiAgcmVhZG9ubHkgaW5zdGFuY2VQb29sc1RvVXNlQ291bnQ/OiBudW1iZXI7XG4gIC8qKlxuICAqIG1haW50ZW5hbmNlX3N0cmF0ZWdpZXMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VjMl9mbGVldCNtYWludGVuYW5jZV9zdHJhdGVnaWVzIEVjMkZsZWV0I21haW50ZW5hbmNlX3N0cmF0ZWdpZXN9XG4gICovXG4gIHJlYWRvbmx5IG1haW50ZW5hbmNlU3RyYXRlZ2llcz86IEVjMkZsZWV0U3BvdE9wdGlvbnNNYWludGVuYW5jZVN0cmF0ZWdpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJGbGVldFNwb3RPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRWMyRmxlZXRTcG90T3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IEVjMkZsZWV0U3BvdE9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWxsb2NhdGlvbl9zdHJhdGVneTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hbGxvY2F0aW9uU3RyYXRlZ3kpLFxuICAgIGluc3RhbmNlX2ludGVycnVwdGlvbl9iZWhhdmlvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yKSxcbiAgICBpbnN0YW5jZV9wb29sc190b191c2VfY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VQb29sc1RvVXNlQ291bnQpLFxuICAgIG1haW50ZW5hbmNlX3N0cmF0ZWdpZXM6IGVjMkZsZWV0U3BvdE9wdGlvbnNNYWludGVuYW5jZVN0cmF0ZWdpZXNUb1RlcnJhZm9ybShzdHJ1Y3QhLm1haW50ZW5hbmNlU3RyYXRlZ2llcyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZWMyRmxlZXRTcG90T3B0aW9uc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEVjMkZsZWV0U3BvdE9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBFYzJGbGVldFNwb3RPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhbGxvY2F0aW9uX3N0cmF0ZWd5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hbGxvY2F0aW9uU3RyYXRlZ3kpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGluc3RhbmNlX2ludGVycnVwdGlvbl9iZWhhdmlvcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaW5zdGFuY2VfcG9vbHNfdG9fdXNlX2NvdW50OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVBvb2xzVG9Vc2VDb3VudCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgbWFpbnRlbmFuY2Vfc3RyYXRlZ2llczoge1xuICAgICAgdmFsdWU6IGVjMkZsZWV0U3BvdE9wdGlvbnNNYWludGVuYW5jZVN0cmF0ZWdpZXNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1haW50ZW5hbmNlU3RyYXRlZ2llcyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkVjMkZsZWV0U3BvdE9wdGlvbnNNYWludGVuYW5jZVN0cmF0ZWdpZXNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEVjMkZsZWV0U3BvdE9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVjMkZsZWV0U3BvdE9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FsbG9jYXRpb25TdHJhdGVneSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hbGxvY2F0aW9uU3RyYXRlZ3kgPSB0aGlzLl9hbGxvY2F0aW9uU3RyYXRlZ3k7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3IgPSB0aGlzLl9pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5zdGFuY2VQb29sc1RvVXNlQ291bnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VQb29sc1RvVXNlQ291bnQgPSB0aGlzLl9pbnN0YW5jZVBvb2xzVG9Vc2VDb3VudDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21haW50ZW5hbmNlU3RyYXRlZ2llcz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYWludGVuYW5jZVN0cmF0ZWdpZXMgPSB0aGlzLl9tYWludGVuYW5jZVN0cmF0ZWdpZXM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFYzJGbGVldFNwb3RPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWxsb2NhdGlvblN0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luc3RhbmNlUG9vbHNUb1VzZUNvdW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWFpbnRlbmFuY2VTdHJhdGVnaWVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FsbG9jYXRpb25TdHJhdGVneSA9IHZhbHVlLmFsbG9jYXRpb25TdHJhdGVneTtcbiAgICAgIHRoaXMuX2luc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3IgPSB2YWx1ZS5pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yO1xuICAgICAgdGhpcy5faW5zdGFuY2VQb29sc1RvVXNlQ291bnQgPSB2YWx1ZS5pbnN0YW5jZVBvb2xzVG9Vc2VDb3VudDtcbiAgICAgIHRoaXMuX21haW50ZW5hbmNlU3RyYXRlZ2llcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUubWFpbnRlbmFuY2VTdHJhdGVnaWVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFsbG9jYXRpb25fc3RyYXRlZ3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb2NhdGlvblN0cmF0ZWd5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhbGxvY2F0aW9uU3RyYXRlZ3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbGxvY2F0aW9uX3N0cmF0ZWd5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvY2F0aW9uU3RyYXRlZ3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FsbG9jYXRpb25TdHJhdGVneSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG9jYXRpb25TdHJhdGVneSgpIHtcbiAgICB0aGlzLl9hbGxvY2F0aW9uU3RyYXRlZ3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG9jYXRpb25TdHJhdGVneUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvY2F0aW9uU3RyYXRlZ3k7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9pbnRlcnJ1cHRpb25fYmVoYXZpb3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2ludGVycnVwdGlvbl9iZWhhdmlvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3IoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfcG9vbHNfdG9fdXNlX2NvdW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlUG9vbHNUb1VzZUNvdW50PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVBvb2xzVG9Vc2VDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2luc3RhbmNlX3Bvb2xzX3RvX3VzZV9jb3VudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VQb29sc1RvVXNlQ291bnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2luc3RhbmNlUG9vbHNUb1VzZUNvdW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VQb29sc1RvVXNlQ291bnQoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VQb29sc1RvVXNlQ291bnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlUG9vbHNUb1VzZUNvdW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlUG9vbHNUb1VzZUNvdW50O1xuICB9XG5cbiAgLy8gbWFpbnRlbmFuY2Vfc3RyYXRlZ2llcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYWludGVuYW5jZVN0cmF0ZWdpZXMgPSBuZXcgRWMyRmxlZXRTcG90T3B0aW9uc01haW50ZW5hbmNlU3RyYXRlZ2llc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcIm1haW50ZW5hbmNlX3N0cmF0ZWdpZXNcIik7XG4gIHB1YmxpYyBnZXQgbWFpbnRlbmFuY2VTdHJhdGVnaWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9tYWludGVuYW5jZVN0cmF0ZWdpZXM7XG4gIH1cbiAgcHVibGljIHB1dE1haW50ZW5hbmNlU3RyYXRlZ2llcyh2YWx1ZTogRWMyRmxlZXRTcG90T3B0aW9uc01haW50ZW5hbmNlU3RyYXRlZ2llcykge1xuICAgIHRoaXMuX21haW50ZW5hbmNlU3RyYXRlZ2llcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWFpbnRlbmFuY2VTdHJhdGVnaWVzKCkge1xuICAgIHRoaXMuX21haW50ZW5hbmNlU3RyYXRlZ2llcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYWludGVuYW5jZVN0cmF0ZWdpZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFpbnRlbmFuY2VTdHJhdGVnaWVzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWMyRmxlZXRUYXJnZXRDYXBhY2l0eVNwZWNpZmljYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lYzJfZmxlZXQjZGVmYXVsdF90YXJnZXRfY2FwYWNpdHlfdHlwZSBFYzJGbGVldCNkZWZhdWx0X3RhcmdldF9jYXBhY2l0eV90eXBlfVxuICAqL1xuICByZWFkb25seSBkZWZhdWx0VGFyZ2V0Q2FwYWNpdHlUeXBlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VjMl9mbGVldCNvbl9kZW1hbmRfdGFyZ2V0X2NhcGFjaXR5IEVjMkZsZWV0I29uX2RlbWFuZF90YXJnZXRfY2FwYWNpdHl9XG4gICovXG4gIHJlYWRvbmx5IG9uRGVtYW5kVGFyZ2V0Q2FwYWNpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VjMl9mbGVldCNzcG90X3RhcmdldF9jYXBhY2l0eSBFYzJGbGVldCNzcG90X3RhcmdldF9jYXBhY2l0eX1cbiAgKi9cbiAgcmVhZG9ubHkgc3BvdFRhcmdldENhcGFjaXR5PzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lYzJfZmxlZXQjdG90YWxfdGFyZ2V0X2NhcGFjaXR5IEVjMkZsZWV0I3RvdGFsX3RhcmdldF9jYXBhY2l0eX1cbiAgKi9cbiAgcmVhZG9ubHkgdG90YWxUYXJnZXRDYXBhY2l0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyRmxlZXRUYXJnZXRDYXBhY2l0eVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBFYzJGbGVldFRhcmdldENhcGFjaXR5U3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEVjMkZsZWV0VGFyZ2V0Q2FwYWNpdHlTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRlZmF1bHRfdGFyZ2V0X2NhcGFjaXR5X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVmYXVsdFRhcmdldENhcGFjaXR5VHlwZSksXG4gICAgb25fZGVtYW5kX3RhcmdldF9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5vbkRlbWFuZFRhcmdldENhcGFjaXR5KSxcbiAgICBzcG90X3RhcmdldF9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zcG90VGFyZ2V0Q2FwYWNpdHkpLFxuICAgIHRvdGFsX3RhcmdldF9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50b3RhbFRhcmdldENhcGFjaXR5KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJGbGVldFRhcmdldENhcGFjaXR5U3BlY2lmaWNhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEVjMkZsZWV0VGFyZ2V0Q2FwYWNpdHlTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgRWMyRmxlZXRUYXJnZXRDYXBhY2l0eVNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGRlZmF1bHRfdGFyZ2V0X2NhcGFjaXR5X3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRUYXJnZXRDYXBhY2l0eVR5cGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG9uX2RlbWFuZF90YXJnZXRfY2FwYWNpdHk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm9uRGVtYW5kVGFyZ2V0Q2FwYWNpdHkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHNwb3RfdGFyZ2V0X2NhcGFjaXR5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zcG90VGFyZ2V0Q2FwYWNpdHkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHRvdGFsX3RhcmdldF9jYXBhY2l0eToge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEudG90YWxUYXJnZXRDYXBhY2l0eSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBFYzJGbGVldFRhcmdldENhcGFjaXR5U3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWMyRmxlZXRUYXJnZXRDYXBhY2l0eVNwZWNpZmljYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RlZmF1bHRUYXJnZXRDYXBhY2l0eVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVmYXVsdFRhcmdldENhcGFjaXR5VHlwZSA9IHRoaXMuX2RlZmF1bHRUYXJnZXRDYXBhY2l0eVR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vbkRlbWFuZFRhcmdldENhcGFjaXR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm9uRGVtYW5kVGFyZ2V0Q2FwYWNpdHkgPSB0aGlzLl9vbkRlbWFuZFRhcmdldENhcGFjaXR5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3BvdFRhcmdldENhcGFjaXR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNwb3RUYXJnZXRDYXBhY2l0eSA9IHRoaXMuX3Nwb3RUYXJnZXRDYXBhY2l0eTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RvdGFsVGFyZ2V0Q2FwYWNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudG90YWxUYXJnZXRDYXBhY2l0eSA9IHRoaXMuX3RvdGFsVGFyZ2V0Q2FwYWNpdHk7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFYzJGbGVldFRhcmdldENhcGFjaXR5U3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RlZmF1bHRUYXJnZXRDYXBhY2l0eVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vbkRlbWFuZFRhcmdldENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3BvdFRhcmdldENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdG90YWxUYXJnZXRDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGVmYXVsdFRhcmdldENhcGFjaXR5VHlwZSA9IHZhbHVlLmRlZmF1bHRUYXJnZXRDYXBhY2l0eVR5cGU7XG4gICAgICB0aGlzLl9vbkRlbWFuZFRhcmdldENhcGFjaXR5ID0gdmFsdWUub25EZW1hbmRUYXJnZXRDYXBhY2l0eTtcbiAgICAgIHRoaXMuX3Nwb3RUYXJnZXRDYXBhY2l0eSA9IHZhbHVlLnNwb3RUYXJnZXRDYXBhY2l0eTtcbiAgICAgIHRoaXMuX3RvdGFsVGFyZ2V0Q2FwYWNpdHkgPSB2YWx1ZS50b3RhbFRhcmdldENhcGFjaXR5O1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlZmF1bHRfdGFyZ2V0X2NhcGFjaXR5X3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGVmYXVsdFRhcmdldENhcGFjaXR5VHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFRhcmdldENhcGFjaXR5VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlZmF1bHRfdGFyZ2V0X2NhcGFjaXR5X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmF1bHRUYXJnZXRDYXBhY2l0eVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHRUYXJnZXRDYXBhY2l0eVR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFRhcmdldENhcGFjaXR5VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VGFyZ2V0Q2FwYWNpdHlUeXBlO1xuICB9XG5cbiAgLy8gb25fZGVtYW5kX3RhcmdldF9jYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vbkRlbWFuZFRhcmdldENhcGFjaXR5PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBvbkRlbWFuZFRhcmdldENhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnb25fZGVtYW5kX3RhcmdldF9jYXBhY2l0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgb25EZW1hbmRUYXJnZXRDYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fb25EZW1hbmRUYXJnZXRDYXBhY2l0eSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9uRGVtYW5kVGFyZ2V0Q2FwYWNpdHkoKSB7XG4gICAgdGhpcy5fb25EZW1hbmRUYXJnZXRDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb25EZW1hbmRUYXJnZXRDYXBhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vbkRlbWFuZFRhcmdldENhcGFjaXR5O1xuICB9XG5cbiAgLy8gc3BvdF90YXJnZXRfY2FwYWNpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3BvdFRhcmdldENhcGFjaXR5PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBzcG90VGFyZ2V0Q2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzcG90X3RhcmdldF9jYXBhY2l0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3BvdFRhcmdldENhcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zcG90VGFyZ2V0Q2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcG90VGFyZ2V0Q2FwYWNpdHkoKSB7XG4gICAgdGhpcy5fc3BvdFRhcmdldENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcG90VGFyZ2V0Q2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BvdFRhcmdldENhcGFjaXR5O1xuICB9XG5cbiAgLy8gdG90YWxfdGFyZ2V0X2NhcGFjaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RvdGFsVGFyZ2V0Q2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRvdGFsVGFyZ2V0Q2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0b3RhbF90YXJnZXRfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRvdGFsVGFyZ2V0Q2FwYWNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RvdGFsVGFyZ2V0Q2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdG90YWxUYXJnZXRDYXBhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90b3RhbFRhcmdldENhcGFjaXR5O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVjMkZsZWV0VGltZW91dHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lYzJfZmxlZXQjY3JlYXRlIEVjMkZsZWV0I2NyZWF0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgY3JlYXRlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lYzJfZmxlZXQjZGVsZXRlIEVjMkZsZWV0I2RlbGV0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgZGVsZXRlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lYzJfZmxlZXQjdXBkYXRlIEVjMkZsZWV0I3VwZGF0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgdXBkYXRlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWMyRmxlZXRUaW1lb3V0c1RvVGVycmFmb3JtKHN0cnVjdD86IEVjMkZsZWV0VGltZW91dHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRlKSxcbiAgICBkZWxldGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVsZXRlKSxcbiAgICB1cGRhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXBkYXRlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlYzJGbGVldFRpbWVvdXRzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogRWMyRmxlZXRUaW1lb3V0cyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjcmVhdGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNyZWF0ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGVsZXRlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kZWxldGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHVwZGF0ZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudXBkYXRlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEVjMkZsZWV0VGltZW91dHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVjMkZsZWV0VGltZW91dHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NyZWF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jcmVhdGUgPSB0aGlzLl9jcmVhdGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZWxldGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVsZXRlID0gdGhpcy5fZGVsZXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXBkYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVwZGF0ZSA9IHRoaXMuX3VwZGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVjMkZsZWV0VGltZW91dHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3JlYXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXBkYXRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlLmNyZWF0ZTtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHZhbHVlLmRlbGV0ZTtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlLnVwZGF0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBjcmVhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcmVhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlYXRlKCkge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZTtcbiAgfVxuXG4gIC8vIGRlbGV0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxldGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlbGV0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVsZXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWxldGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWxldGUoKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxldGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlO1xuICB9XG5cbiAgLy8gdXBkYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VwZGF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXBkYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCB1cGRhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVwZGF0ZSgpIHtcbiAgICB0aGlzLl91cGRhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVwZGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGU7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2VjMl9mbGVldCBhd3NfZWMyX2ZsZWV0fVxuKi9cbmV4cG9ydCBjbGFzcyBFYzJGbGVldCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfZWMyX2ZsZWV0XCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIEVjMkZsZWV0IHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIEVjMkZsZWV0IHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBFYzJGbGVldCB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWMyX2ZsZWV0I2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBFYzJGbGVldCB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfZWMyX2ZsZWV0XCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWMyX2ZsZWV0IGF3c19lYzJfZmxlZXR9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIEVjMkZsZWV0Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEVjMkZsZWV0Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZWMyX2ZsZWV0JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeSA9IGNvbmZpZy5leGNlc3NDYXBhY2l0eVRlcm1pbmF0aW9uUG9saWN5O1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX3JlcGxhY2VVbmhlYWx0aHlJbnN0YW5jZXMgPSBjb25maWcucmVwbGFjZVVuaGVhbHRoeUluc3RhbmNlcztcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3Rlcm1pbmF0ZUluc3RhbmNlcyA9IGNvbmZpZy50ZXJtaW5hdGVJbnN0YW5jZXM7XG4gICAgdGhpcy5fdGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb24gPSBjb25maWcudGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb247XG4gICAgdGhpcy5fdHlwZSA9IGNvbmZpZy50eXBlO1xuICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcubGF1bmNoVGVtcGxhdGVDb25maWc7XG4gICAgdGhpcy5fb25EZW1hbmRPcHRpb25zLmludGVybmFsVmFsdWUgPSBjb25maWcub25EZW1hbmRPcHRpb25zO1xuICAgIHRoaXMuX3Nwb3RPcHRpb25zLmludGVybmFsVmFsdWUgPSBjb25maWcuc3BvdE9wdGlvbnM7XG4gICAgdGhpcy5fdGFyZ2V0Q2FwYWNpdHlTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcudGFyZ2V0Q2FwYWNpdHlTcGVjaWZpY2F0aW9uO1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSBjb25maWcudGltZW91dHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGV4Y2Vzc19jYXBhY2l0eV90ZXJtaW5hdGlvbl9wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4Y2Vzc19jYXBhY2l0eV90ZXJtaW5hdGlvbl9wb2xpY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFeGNlc3NDYXBhY2l0eVRlcm1pbmF0aW9uUG9saWN5KCkge1xuICAgIHRoaXMuX2V4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIHJlcGxhY2VfdW5oZWFsdGh5X2luc3RhbmNlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlcGxhY2VfdW5oZWFsdGh5X2luc3RhbmNlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVwbGFjZVVuaGVhbHRoeUluc3RhbmNlcyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVwbGFjZVVuaGVhbHRoeUluc3RhbmNlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcGxhY2VVbmhlYWx0aHlJbnN0YW5jZXMoKSB7XG4gICAgdGhpcy5fcmVwbGFjZVVuaGVhbHRoeUluc3RhbmNlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVwbGFjZVVuaGVhbHRoeUluc3RhbmNlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB0ZXJtaW5hdGVfaW5zdGFuY2VzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Rlcm1pbmF0ZUluc3RhbmNlcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGVybWluYXRlSW5zdGFuY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3Rlcm1pbmF0ZV9pbnN0YW5jZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRlcm1pbmF0ZUluc3RhbmNlcyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGVybWluYXRlSW5zdGFuY2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGVybWluYXRlSW5zdGFuY2VzKCkge1xuICAgIHRoaXMuX3Rlcm1pbmF0ZUluc3RhbmNlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGVybWluYXRlSW5zdGFuY2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rlcm1pbmF0ZUluc3RhbmNlcztcbiAgfVxuXG4gIC8vIHRlcm1pbmF0ZV9pbnN0YW5jZXNfd2l0aF9leHBpcmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Rlcm1pbmF0ZUluc3RhbmNlc1dpdGhFeHBpcmF0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0ZXJtaW5hdGVJbnN0YW5jZXNXaXRoRXhwaXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd0ZXJtaW5hdGVfaW5zdGFuY2VzX3dpdGhfZXhwaXJhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3Rlcm1pbmF0ZUluc3RhbmNlc1dpdGhFeHBpcmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb24oKSB7XG4gICAgdGhpcy5fdGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRlcm1pbmF0ZUluc3RhbmNlc1dpdGhFeHBpcmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rlcm1pbmF0ZUluc3RhbmNlc1dpdGhFeHBpcmF0aW9uO1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR5cGUoKSB7XG4gICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgLy8gbGF1bmNoX3RlbXBsYXRlX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9sYXVuY2hUZW1wbGF0ZUNvbmZpZyA9IG5ldyBFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwibGF1bmNoX3RlbXBsYXRlX2NvbmZpZ1wiKTtcbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZUNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGVDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dExhdW5jaFRlbXBsYXRlQ29uZmlnKHZhbHVlOiBFYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZUNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hUZW1wbGF0ZUNvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gb25fZGVtYW5kX29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb25EZW1hbmRPcHRpb25zID0gbmV3IEVjMkZsZWV0T25EZW1hbmRPcHRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwib25fZGVtYW5kX29wdGlvbnNcIik7XG4gIHB1YmxpYyBnZXQgb25EZW1hbmRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9vbkRlbWFuZE9wdGlvbnM7XG4gIH1cbiAgcHVibGljIHB1dE9uRGVtYW5kT3B0aW9ucyh2YWx1ZTogRWMyRmxlZXRPbkRlbWFuZE9wdGlvbnMpIHtcbiAgICB0aGlzLl9vbkRlbWFuZE9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9uRGVtYW5kT3B0aW9ucygpIHtcbiAgICB0aGlzLl9vbkRlbWFuZE9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb25EZW1hbmRPcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uRGVtYW5kT3B0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc3BvdF9vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Nwb3RPcHRpb25zID0gbmV3IEVjMkZsZWV0U3BvdE9wdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJzcG90X29wdGlvbnNcIik7XG4gIHB1YmxpYyBnZXQgc3BvdE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nwb3RPcHRpb25zO1xuICB9XG4gIHB1YmxpYyBwdXRTcG90T3B0aW9ucyh2YWx1ZTogRWMyRmxlZXRTcG90T3B0aW9ucykge1xuICAgIHRoaXMuX3Nwb3RPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcG90T3B0aW9ucygpIHtcbiAgICB0aGlzLl9zcG90T3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcG90T3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcG90T3B0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGFyZ2V0X2NhcGFjaXR5X3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGFyZ2V0Q2FwYWNpdHlTcGVjaWZpY2F0aW9uID0gbmV3IEVjMkZsZWV0VGFyZ2V0Q2FwYWNpdHlTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwidGFyZ2V0X2NhcGFjaXR5X3NwZWNpZmljYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgdGFyZ2V0Q2FwYWNpdHlTcGVjaWZpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRDYXBhY2l0eVNwZWNpZmljYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFRhcmdldENhcGFjaXR5U3BlY2lmaWNhdGlvbih2YWx1ZTogRWMyRmxlZXRUYXJnZXRDYXBhY2l0eVNwZWNpZmljYXRpb24pIHtcbiAgICB0aGlzLl90YXJnZXRDYXBhY2l0eVNwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRDYXBhY2l0eVNwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0Q2FwYWNpdHlTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0aW1lb3V0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lb3V0cyA9IG5ldyBFYzJGbGVldFRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwidGltZW91dHNcIik7XG4gIHB1YmxpYyBnZXQgdGltZW91dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzO1xuICB9XG4gIHB1YmxpYyBwdXRUaW1lb3V0cyh2YWx1ZTogRWMyRmxlZXRUaW1lb3V0cykge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0cygpIHtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBleGNlc3NfY2FwYWNpdHlfdGVybWluYXRpb25fcG9saWN5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9leGNlc3NDYXBhY2l0eVRlcm1pbmF0aW9uUG9saWN5KSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICByZXBsYWNlX3VuaGVhbHRoeV9pbnN0YW5jZXM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9yZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdGVybWluYXRlX2luc3RhbmNlczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3Rlcm1pbmF0ZUluc3RhbmNlcyksXG4gICAgICB0ZXJtaW5hdGVfaW5zdGFuY2VzX3dpdGhfZXhwaXJhdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3Rlcm1pbmF0ZUluc3RhbmNlc1dpdGhFeHBpcmF0aW9uKSxcbiAgICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3R5cGUpLFxuICAgICAgbGF1bmNoX3RlbXBsYXRlX2NvbmZpZzogZWMyRmxlZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2xhdW5jaFRlbXBsYXRlQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgb25fZGVtYW5kX29wdGlvbnM6IGVjMkZsZWV0T25EZW1hbmRPcHRpb25zVG9UZXJyYWZvcm0odGhpcy5fb25EZW1hbmRPcHRpb25zLmludGVybmFsVmFsdWUpLFxuICAgICAgc3BvdF9vcHRpb25zOiBlYzJGbGVldFNwb3RPcHRpb25zVG9UZXJyYWZvcm0odGhpcy5fc3BvdE9wdGlvbnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0YXJnZXRfY2FwYWNpdHlfc3BlY2lmaWNhdGlvbjogZWMyRmxlZXRUYXJnZXRDYXBhY2l0eVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl90YXJnZXRDYXBhY2l0eVNwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0aW1lb3V0czogZWMyRmxlZXRUaW1lb3V0c1RvVGVycmFmb3JtKHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgZXhjZXNzX2NhcGFjaXR5X3Rlcm1pbmF0aW9uX3BvbGljeToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHJlcGxhY2VfdW5oZWFsdGh5X2luc3RhbmNlczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX3JlcGxhY2VVbmhlYWx0aHlJbnN0YW5jZXMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgdGFnczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHRhZ3NfYWxsOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgdGVybWluYXRlX2luc3RhbmNlczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX3Rlcm1pbmF0ZUluc3RhbmNlcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICAgIH0sXG4gICAgICB0ZXJtaW5hdGVfaW5zdGFuY2VzX3dpdGhfZXhwaXJhdGlvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX3Rlcm1pbmF0ZUluc3RhbmNlc1dpdGhFeHBpcmF0aW9uKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3R5cGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBsYXVuY2hfdGVtcGxhdGVfY29uZmlnOiB7XG4gICAgICAgIHZhbHVlOiBlYzJGbGVldExhdW5jaFRlbXBsYXRlQ29uZmlnVG9IY2xUZXJyYWZvcm0odGhpcy5fbGF1bmNoVGVtcGxhdGVDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkVjMkZsZWV0TGF1bmNoVGVtcGxhdGVDb25maWdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgb25fZGVtYW5kX29wdGlvbnM6IHtcbiAgICAgICAgdmFsdWU6IGVjMkZsZWV0T25EZW1hbmRPcHRpb25zVG9IY2xUZXJyYWZvcm0odGhpcy5fb25EZW1hbmRPcHRpb25zLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJFYzJGbGVldE9uRGVtYW5kT3B0aW9uc0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBzcG90X29wdGlvbnM6IHtcbiAgICAgICAgdmFsdWU6IGVjMkZsZWV0U3BvdE9wdGlvbnNUb0hjbFRlcnJhZm9ybSh0aGlzLl9zcG90T3B0aW9ucy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiRWMyRmxlZXRTcG90T3B0aW9uc0xpc3RcIixcbiAgICAgIH0sXG4gICAgICB0YXJnZXRfY2FwYWNpdHlfc3BlY2lmaWNhdGlvbjoge1xuICAgICAgICB2YWx1ZTogZWMyRmxlZXRUYXJnZXRDYXBhY2l0eVNwZWNpZmljYXRpb25Ub0hjbFRlcnJhZm9ybSh0aGlzLl90YXJnZXRDYXBhY2l0eVNwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkVjMkZsZWV0VGFyZ2V0Q2FwYWNpdHlTcGVjaWZpY2F0aW9uTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHRpbWVvdXRzOiB7XG4gICAgICAgIHZhbHVlOiBlYzJGbGVldFRpbWVvdXRzVG9IY2xUZXJyYWZvcm0odGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwic3RydWN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiRWMyRmxlZXRUaW1lb3V0c1wiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19