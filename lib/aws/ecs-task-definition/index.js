"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcsTaskDefinition = exports.EcsTaskDefinitionVolumeList = exports.EcsTaskDefinitionVolumeOutputReference = exports.ecsTaskDefinitionVolumeToHclTerraform = exports.ecsTaskDefinitionVolumeToTerraform = exports.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference = exports.ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToHclTerraform = exports.ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform = exports.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference = exports.ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToHclTerraform = exports.ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform = exports.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference = exports.ecsTaskDefinitionVolumeEfsVolumeConfigurationToHclTerraform = exports.ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform = exports.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference = exports.ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToHclTerraform = exports.ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform = exports.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference = exports.ecsTaskDefinitionVolumeDockerVolumeConfigurationToHclTerraform = exports.ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform = exports.EcsTaskDefinitionRuntimePlatformOutputReference = exports.ecsTaskDefinitionRuntimePlatformToHclTerraform = exports.ecsTaskDefinitionRuntimePlatformToTerraform = exports.EcsTaskDefinitionProxyConfigurationOutputReference = exports.ecsTaskDefinitionProxyConfigurationToHclTerraform = exports.ecsTaskDefinitionProxyConfigurationToTerraform = exports.EcsTaskDefinitionPlacementConstraintsList = exports.EcsTaskDefinitionPlacementConstraintsOutputReference = exports.ecsTaskDefinitionPlacementConstraintsToHclTerraform = exports.ecsTaskDefinitionPlacementConstraintsToTerraform = exports.EcsTaskDefinitionInferenceAcceleratorList = exports.EcsTaskDefinitionInferenceAcceleratorOutputReference = exports.ecsTaskDefinitionInferenceAcceleratorToHclTerraform = exports.ecsTaskDefinitionInferenceAcceleratorToTerraform = exports.EcsTaskDefinitionEphemeralStorageOutputReference = exports.ecsTaskDefinitionEphemeralStorageToHclTerraform = exports.ecsTaskDefinitionEphemeralStorageToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function ecsTaskDefinitionEphemeralStorageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        size_in_gib: cdktf.numberToTerraform(struct.sizeInGib),
    };
}
exports.ecsTaskDefinitionEphemeralStorageToTerraform = ecsTaskDefinitionEphemeralStorageToTerraform;
function ecsTaskDefinitionEphemeralStorageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        size_in_gib: {
            value: cdktf.numberToHclTerraform(struct.sizeInGib),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ecsTaskDefinitionEphemeralStorageToHclTerraform = ecsTaskDefinitionEphemeralStorageToHclTerraform;
class EcsTaskDefinitionEphemeralStorageOutputReference extends cdktf.ComplexObject {
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
        if (this._sizeInGib !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizeInGib = this._sizeInGib;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._sizeInGib = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._sizeInGib = value.sizeInGib;
        }
    }
    get sizeInGib() {
        return this.getNumberAttribute('size_in_gib');
    }
    set sizeInGib(value) {
        this._sizeInGib = value;
    }
    // Temporarily expose input value. Use with caution.
    get sizeInGibInput() {
        return this._sizeInGib;
    }
}
exports.EcsTaskDefinitionEphemeralStorageOutputReference = EcsTaskDefinitionEphemeralStorageOutputReference;
_a = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionEphemeralStorageOutputReference[_a] = { fqn: "@cdktf/aws-cdk.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference", version: "0.0.0" };
function ecsTaskDefinitionInferenceAcceleratorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        device_type: cdktf.stringToTerraform(struct.deviceType),
    };
}
exports.ecsTaskDefinitionInferenceAcceleratorToTerraform = ecsTaskDefinitionInferenceAcceleratorToTerraform;
function ecsTaskDefinitionInferenceAcceleratorToHclTerraform(struct) {
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
        device_type: {
            value: cdktf.stringToHclTerraform(struct.deviceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ecsTaskDefinitionInferenceAcceleratorToHclTerraform = ecsTaskDefinitionInferenceAcceleratorToHclTerraform;
class EcsTaskDefinitionInferenceAcceleratorOutputReference extends cdktf.ComplexObject {
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
        if (this._deviceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceType = this._deviceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deviceName = undefined;
            this._deviceType = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deviceName = value.deviceName;
            this._deviceType = value.deviceType;
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
    get deviceType() {
        return this.getStringAttribute('device_type');
    }
    set deviceType(value) {
        this._deviceType = value;
    }
    // Temporarily expose input value. Use with caution.
    get deviceTypeInput() {
        return this._deviceType;
    }
}
exports.EcsTaskDefinitionInferenceAcceleratorOutputReference = EcsTaskDefinitionInferenceAcceleratorOutputReference;
_b = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionInferenceAcceleratorOutputReference[_b] = { fqn: "@cdktf/aws-cdk.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference", version: "0.0.0" };
class EcsTaskDefinitionInferenceAcceleratorList extends cdktf.ComplexList {
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
        return new EcsTaskDefinitionInferenceAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.EcsTaskDefinitionInferenceAcceleratorList = EcsTaskDefinitionInferenceAcceleratorList;
_c = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionInferenceAcceleratorList[_c] = { fqn: "@cdktf/aws-cdk.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList", version: "0.0.0" };
function ecsTaskDefinitionPlacementConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.ecsTaskDefinitionPlacementConstraintsToTerraform = ecsTaskDefinitionPlacementConstraintsToTerraform;
function ecsTaskDefinitionPlacementConstraintsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        expression: {
            value: cdktf.stringToHclTerraform(struct.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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
exports.ecsTaskDefinitionPlacementConstraintsToHclTerraform = ecsTaskDefinitionPlacementConstraintsToHclTerraform;
class EcsTaskDefinitionPlacementConstraintsOutputReference extends cdktf.ComplexObject {
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
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
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
            this._expression = undefined;
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._type = value.type;
        }
    }
    get expression() {
        return this.getStringAttribute('expression');
    }
    set expression(value) {
        this._expression = value;
    }
    resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expressionInput() {
        return this._expression;
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
exports.EcsTaskDefinitionPlacementConstraintsOutputReference = EcsTaskDefinitionPlacementConstraintsOutputReference;
_d = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionPlacementConstraintsOutputReference[_d] = { fqn: "@cdktf/aws-cdk.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference", version: "0.0.0" };
class EcsTaskDefinitionPlacementConstraintsList extends cdktf.ComplexList {
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
        return new EcsTaskDefinitionPlacementConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.EcsTaskDefinitionPlacementConstraintsList = EcsTaskDefinitionPlacementConstraintsList;
_e = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionPlacementConstraintsList[_e] = { fqn: "@cdktf/aws-cdk.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList", version: "0.0.0" };
function ecsTaskDefinitionProxyConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        container_name: cdktf.stringToTerraform(struct.containerName),
        properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct.properties),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.ecsTaskDefinitionProxyConfigurationToTerraform = ecsTaskDefinitionProxyConfigurationToTerraform;
function ecsTaskDefinitionProxyConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        container_name: {
            value: cdktf.stringToHclTerraform(struct.containerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        properties: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.properties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
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
exports.ecsTaskDefinitionProxyConfigurationToHclTerraform = ecsTaskDefinitionProxyConfigurationToHclTerraform;
class EcsTaskDefinitionProxyConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._containerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerName = this._containerName;
        }
        if (this._properties !== undefined) {
            hasAnyValues = true;
            internalValueResult.properties = this._properties;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._containerName = undefined;
            this._properties = undefined;
            this._type = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._containerName = value.containerName;
            this._properties = value.properties;
            this._type = value.type;
        }
    }
    get containerName() {
        return this.getStringAttribute('container_name');
    }
    set containerName(value) {
        this._containerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get containerNameInput() {
        return this._containerName;
    }
    get properties() {
        return this.getStringMapAttribute('properties');
    }
    set properties(value) {
        this._properties = value;
    }
    resetProperties() {
        this._properties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get propertiesInput() {
        return this._properties;
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
}
exports.EcsTaskDefinitionProxyConfigurationOutputReference = EcsTaskDefinitionProxyConfigurationOutputReference;
_f = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionProxyConfigurationOutputReference[_f] = { fqn: "@cdktf/aws-cdk.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference", version: "0.0.0" };
function ecsTaskDefinitionRuntimePlatformToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cpu_architecture: cdktf.stringToTerraform(struct.cpuArchitecture),
        operating_system_family: cdktf.stringToTerraform(struct.operatingSystemFamily),
    };
}
exports.ecsTaskDefinitionRuntimePlatformToTerraform = ecsTaskDefinitionRuntimePlatformToTerraform;
function ecsTaskDefinitionRuntimePlatformToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cpu_architecture: {
            value: cdktf.stringToHclTerraform(struct.cpuArchitecture),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operating_system_family: {
            value: cdktf.stringToHclTerraform(struct.operatingSystemFamily),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ecsTaskDefinitionRuntimePlatformToHclTerraform = ecsTaskDefinitionRuntimePlatformToHclTerraform;
class EcsTaskDefinitionRuntimePlatformOutputReference extends cdktf.ComplexObject {
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
        if (this._cpuArchitecture !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuArchitecture = this._cpuArchitecture;
        }
        if (this._operatingSystemFamily !== undefined) {
            hasAnyValues = true;
            internalValueResult.operatingSystemFamily = this._operatingSystemFamily;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cpuArchitecture = undefined;
            this._operatingSystemFamily = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cpuArchitecture = value.cpuArchitecture;
            this._operatingSystemFamily = value.operatingSystemFamily;
        }
    }
    get cpuArchitecture() {
        return this.getStringAttribute('cpu_architecture');
    }
    set cpuArchitecture(value) {
        this._cpuArchitecture = value;
    }
    resetCpuArchitecture() {
        this._cpuArchitecture = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuArchitectureInput() {
        return this._cpuArchitecture;
    }
    get operatingSystemFamily() {
        return this.getStringAttribute('operating_system_family');
    }
    set operatingSystemFamily(value) {
        this._operatingSystemFamily = value;
    }
    resetOperatingSystemFamily() {
        this._operatingSystemFamily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get operatingSystemFamilyInput() {
        return this._operatingSystemFamily;
    }
}
exports.EcsTaskDefinitionRuntimePlatformOutputReference = EcsTaskDefinitionRuntimePlatformOutputReference;
_g = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionRuntimePlatformOutputReference[_g] = { fqn: "@cdktf/aws-cdk.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference", version: "0.0.0" };
function ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        autoprovision: cdktf.booleanToTerraform(struct.autoprovision),
        driver: cdktf.stringToTerraform(struct.driver),
        driver_opts: cdktf.hashMapper(cdktf.stringToTerraform)(struct.driverOpts),
        labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct.labels),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
exports.ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform = ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform;
function ecsTaskDefinitionVolumeDockerVolumeConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        autoprovision: {
            value: cdktf.booleanToHclTerraform(struct.autoprovision),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        driver: {
            value: cdktf.stringToHclTerraform(struct.driver),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        driver_opts: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.driverOpts),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        labels: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.labels),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        scope: {
            value: cdktf.stringToHclTerraform(struct.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ecsTaskDefinitionVolumeDockerVolumeConfigurationToHclTerraform = ecsTaskDefinitionVolumeDockerVolumeConfigurationToHclTerraform;
class EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._autoprovision !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoprovision = this._autoprovision;
        }
        if (this._driver !== undefined) {
            hasAnyValues = true;
            internalValueResult.driver = this._driver;
        }
        if (this._driverOpts !== undefined) {
            hasAnyValues = true;
            internalValueResult.driverOpts = this._driverOpts;
        }
        if (this._labels !== undefined) {
            hasAnyValues = true;
            internalValueResult.labels = this._labels;
        }
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._autoprovision = undefined;
            this._driver = undefined;
            this._driverOpts = undefined;
            this._labels = undefined;
            this._scope = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._autoprovision = value.autoprovision;
            this._driver = value.driver;
            this._driverOpts = value.driverOpts;
            this._labels = value.labels;
            this._scope = value.scope;
        }
    }
    get autoprovision() {
        return this.getBooleanAttribute('autoprovision');
    }
    set autoprovision(value) {
        this._autoprovision = value;
    }
    resetAutoprovision() {
        this._autoprovision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoprovisionInput() {
        return this._autoprovision;
    }
    get driver() {
        return this.getStringAttribute('driver');
    }
    set driver(value) {
        this._driver = value;
    }
    resetDriver() {
        this._driver = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get driverInput() {
        return this._driver;
    }
    get driverOpts() {
        return this.getStringMapAttribute('driver_opts');
    }
    set driverOpts(value) {
        this._driverOpts = value;
    }
    resetDriverOpts() {
        this._driverOpts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get driverOptsInput() {
        return this._driverOpts;
    }
    get labels() {
        return this.getStringMapAttribute('labels');
    }
    set labels(value) {
        this._labels = value;
    }
    resetLabels() {
        this._labels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelsInput() {
        return this._labels;
    }
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
}
exports.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference = EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference;
_h = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference[_h] = { fqn: "@cdktf/aws-cdk.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference", version: "0.0.0" };
function ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_point_id: cdktf.stringToTerraform(struct.accessPointId),
        iam: cdktf.stringToTerraform(struct.iam),
    };
}
exports.ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform = ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform;
function ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access_point_id: {
            value: cdktf.stringToHclTerraform(struct.accessPointId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iam: {
            value: cdktf.stringToHclTerraform(struct.iam),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToHclTerraform = ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToHclTerraform;
class EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._accessPointId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessPointId = this._accessPointId;
        }
        if (this._iam !== undefined) {
            hasAnyValues = true;
            internalValueResult.iam = this._iam;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accessPointId = undefined;
            this._iam = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accessPointId = value.accessPointId;
            this._iam = value.iam;
        }
    }
    get accessPointId() {
        return this.getStringAttribute('access_point_id');
    }
    set accessPointId(value) {
        this._accessPointId = value;
    }
    resetAccessPointId() {
        this._accessPointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessPointIdInput() {
        return this._accessPointId;
    }
    get iam() {
        return this.getStringAttribute('iam');
    }
    set iam(value) {
        this._iam = value;
    }
    resetIam() {
        this._iam = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iamInput() {
        return this._iam;
    }
}
exports.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference = EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference;
_j = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference[_j] = { fqn: "@cdktf/aws-cdk.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference", version: "0.0.0" };
function ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file_system_id: cdktf.stringToTerraform(struct.fileSystemId),
        root_directory: cdktf.stringToTerraform(struct.rootDirectory),
        transit_encryption: cdktf.stringToTerraform(struct.transitEncryption),
        transit_encryption_port: cdktf.numberToTerraform(struct.transitEncryptionPort),
        authorization_config: ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct.authorizationConfig),
    };
}
exports.ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform = ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform;
function ecsTaskDefinitionVolumeEfsVolumeConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        file_system_id: {
            value: cdktf.stringToHclTerraform(struct.fileSystemId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        root_directory: {
            value: cdktf.stringToHclTerraform(struct.rootDirectory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transit_encryption: {
            value: cdktf.stringToHclTerraform(struct.transitEncryption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transit_encryption_port: {
            value: cdktf.numberToHclTerraform(struct.transitEncryptionPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        authorization_config: {
            value: ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToHclTerraform(struct.authorizationConfig),
            isBlock: true,
            type: "list",
            storageClassType: "EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ecsTaskDefinitionVolumeEfsVolumeConfigurationToHclTerraform = ecsTaskDefinitionVolumeEfsVolumeConfigurationToHclTerraform;
class EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // authorization_config - computed: false, optional: true, required: false
        this._authorizationConfig = new EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference(this, "authorization_config");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fileSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        if (this._rootDirectory !== undefined) {
            hasAnyValues = true;
            internalValueResult.rootDirectory = this._rootDirectory;
        }
        if (this._transitEncryption !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitEncryption = this._transitEncryption;
        }
        if (this._transitEncryptionPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitEncryptionPort = this._transitEncryptionPort;
        }
        if (this._authorizationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fileSystemId = undefined;
            this._rootDirectory = undefined;
            this._transitEncryption = undefined;
            this._transitEncryptionPort = undefined;
            this._authorizationConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fileSystemId = value.fileSystemId;
            this._rootDirectory = value.rootDirectory;
            this._transitEncryption = value.transitEncryption;
            this._transitEncryptionPort = value.transitEncryptionPort;
            this._authorizationConfig.internalValue = value.authorizationConfig;
        }
    }
    get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    set fileSystemId(value) {
        this._fileSystemId = value;
    }
    // Temporarily expose input value. Use with caution.
    get fileSystemIdInput() {
        return this._fileSystemId;
    }
    get rootDirectory() {
        return this.getStringAttribute('root_directory');
    }
    set rootDirectory(value) {
        this._rootDirectory = value;
    }
    resetRootDirectory() {
        this._rootDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rootDirectoryInput() {
        return this._rootDirectory;
    }
    get transitEncryption() {
        return this.getStringAttribute('transit_encryption');
    }
    set transitEncryption(value) {
        this._transitEncryption = value;
    }
    resetTransitEncryption() {
        this._transitEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get transitEncryptionInput() {
        return this._transitEncryption;
    }
    get transitEncryptionPort() {
        return this.getNumberAttribute('transit_encryption_port');
    }
    set transitEncryptionPort(value) {
        this._transitEncryptionPort = value;
    }
    resetTransitEncryptionPort() {
        this._transitEncryptionPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get transitEncryptionPortInput() {
        return this._transitEncryptionPort;
    }
    get authorizationConfig() {
        return this._authorizationConfig;
    }
    putAuthorizationConfig(value) {
        this._authorizationConfig.internalValue = value;
    }
    resetAuthorizationConfig() {
        this._authorizationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authorizationConfigInput() {
        return this._authorizationConfig.internalValue;
    }
}
exports.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference = EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference;
_k = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference[_k] = { fqn: "@cdktf/aws-cdk.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference", version: "0.0.0" };
function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        credentials_parameter: cdktf.stringToTerraform(struct.credentialsParameter),
        domain: cdktf.stringToTerraform(struct.domain),
    };
}
exports.ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform = ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform;
function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        credentials_parameter: {
            value: cdktf.stringToHclTerraform(struct.credentialsParameter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        domain: {
            value: cdktf.stringToHclTerraform(struct.domain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToHclTerraform = ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToHclTerraform;
class EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._credentialsParameter !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialsParameter = this._credentialsParameter;
        }
        if (this._domain !== undefined) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._credentialsParameter = undefined;
            this._domain = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._credentialsParameter = value.credentialsParameter;
            this._domain = value.domain;
        }
    }
    get credentialsParameter() {
        return this.getStringAttribute('credentials_parameter');
    }
    set credentialsParameter(value) {
        this._credentialsParameter = value;
    }
    // Temporarily expose input value. Use with caution.
    get credentialsParameterInput() {
        return this._credentialsParameter;
    }
    get domain() {
        return this.getStringAttribute('domain');
    }
    set domain(value) {
        this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainInput() {
        return this._domain;
    }
}
exports.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference = EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference;
_l = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference[_l] = { fqn: "@cdktf/aws-cdk.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference", version: "0.0.0" };
function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file_system_id: cdktf.stringToTerraform(struct.fileSystemId),
        root_directory: cdktf.stringToTerraform(struct.rootDirectory),
        authorization_config: ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform(struct.authorizationConfig),
    };
}
exports.ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform = ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform;
function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        file_system_id: {
            value: cdktf.stringToHclTerraform(struct.fileSystemId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        root_directory: {
            value: cdktf.stringToHclTerraform(struct.rootDirectory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        authorization_config: {
            value: ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToHclTerraform(struct.authorizationConfig),
            isBlock: true,
            type: "list",
            storageClassType: "EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToHclTerraform = ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToHclTerraform;
class EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // authorization_config - computed: false, optional: false, required: true
        this._authorizationConfig = new EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference(this, "authorization_config");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fileSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        if (this._rootDirectory !== undefined) {
            hasAnyValues = true;
            internalValueResult.rootDirectory = this._rootDirectory;
        }
        if (this._authorizationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fileSystemId = undefined;
            this._rootDirectory = undefined;
            this._authorizationConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fileSystemId = value.fileSystemId;
            this._rootDirectory = value.rootDirectory;
            this._authorizationConfig.internalValue = value.authorizationConfig;
        }
    }
    get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    set fileSystemId(value) {
        this._fileSystemId = value;
    }
    // Temporarily expose input value. Use with caution.
    get fileSystemIdInput() {
        return this._fileSystemId;
    }
    get rootDirectory() {
        return this.getStringAttribute('root_directory');
    }
    set rootDirectory(value) {
        this._rootDirectory = value;
    }
    // Temporarily expose input value. Use with caution.
    get rootDirectoryInput() {
        return this._rootDirectory;
    }
    get authorizationConfig() {
        return this._authorizationConfig;
    }
    putAuthorizationConfig(value) {
        this._authorizationConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get authorizationConfigInput() {
        return this._authorizationConfig.internalValue;
    }
}
exports.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference = EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference;
_m = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference[_m] = { fqn: "@cdktf/aws-cdk.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference", version: "0.0.0" };
function ecsTaskDefinitionVolumeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host_path: cdktf.stringToTerraform(struct.hostPath),
        name: cdktf.stringToTerraform(struct.name),
        docker_volume_configuration: ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct.dockerVolumeConfiguration),
        efs_volume_configuration: ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct.efsVolumeConfiguration),
        fsx_windows_file_server_volume_configuration: ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform(struct.fsxWindowsFileServerVolumeConfiguration),
    };
}
exports.ecsTaskDefinitionVolumeToTerraform = ecsTaskDefinitionVolumeToTerraform;
function ecsTaskDefinitionVolumeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        host_path: {
            value: cdktf.stringToHclTerraform(struct.hostPath),
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
        docker_volume_configuration: {
            value: ecsTaskDefinitionVolumeDockerVolumeConfigurationToHclTerraform(struct.dockerVolumeConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "EcsTaskDefinitionVolumeDockerVolumeConfigurationList",
        },
        efs_volume_configuration: {
            value: ecsTaskDefinitionVolumeEfsVolumeConfigurationToHclTerraform(struct.efsVolumeConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "EcsTaskDefinitionVolumeEfsVolumeConfigurationList",
        },
        fsx_windows_file_server_volume_configuration: {
            value: ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToHclTerraform(struct.fsxWindowsFileServerVolumeConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ecsTaskDefinitionVolumeToHclTerraform = ecsTaskDefinitionVolumeToHclTerraform;
class EcsTaskDefinitionVolumeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // docker_volume_configuration - computed: false, optional: true, required: false
        this._dockerVolumeConfiguration = new EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference(this, "docker_volume_configuration");
        // efs_volume_configuration - computed: false, optional: true, required: false
        this._efsVolumeConfiguration = new EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference(this, "efs_volume_configuration");
        // fsx_windows_file_server_volume_configuration - computed: false, optional: true, required: false
        this._fsxWindowsFileServerVolumeConfiguration = new EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference(this, "fsx_windows_file_server_volume_configuration");
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._hostPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostPath = this._hostPath;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._dockerVolumeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dockerVolumeConfiguration = this._dockerVolumeConfiguration?.internalValue;
        }
        if (this._efsVolumeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.efsVolumeConfiguration = this._efsVolumeConfiguration?.internalValue;
        }
        if (this._fsxWindowsFileServerVolumeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fsxWindowsFileServerVolumeConfiguration = this._fsxWindowsFileServerVolumeConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hostPath = undefined;
            this._name = undefined;
            this._dockerVolumeConfiguration.internalValue = undefined;
            this._efsVolumeConfiguration.internalValue = undefined;
            this._fsxWindowsFileServerVolumeConfiguration.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hostPath = value.hostPath;
            this._name = value.name;
            this._dockerVolumeConfiguration.internalValue = value.dockerVolumeConfiguration;
            this._efsVolumeConfiguration.internalValue = value.efsVolumeConfiguration;
            this._fsxWindowsFileServerVolumeConfiguration.internalValue = value.fsxWindowsFileServerVolumeConfiguration;
        }
    }
    get hostPath() {
        return this.getStringAttribute('host_path');
    }
    set hostPath(value) {
        this._hostPath = value;
    }
    resetHostPath() {
        this._hostPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostPathInput() {
        return this._hostPath;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get dockerVolumeConfiguration() {
        return this._dockerVolumeConfiguration;
    }
    putDockerVolumeConfiguration(value) {
        this._dockerVolumeConfiguration.internalValue = value;
    }
    resetDockerVolumeConfiguration() {
        this._dockerVolumeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dockerVolumeConfigurationInput() {
        return this._dockerVolumeConfiguration.internalValue;
    }
    get efsVolumeConfiguration() {
        return this._efsVolumeConfiguration;
    }
    putEfsVolumeConfiguration(value) {
        this._efsVolumeConfiguration.internalValue = value;
    }
    resetEfsVolumeConfiguration() {
        this._efsVolumeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get efsVolumeConfigurationInput() {
        return this._efsVolumeConfiguration.internalValue;
    }
    get fsxWindowsFileServerVolumeConfiguration() {
        return this._fsxWindowsFileServerVolumeConfiguration;
    }
    putFsxWindowsFileServerVolumeConfiguration(value) {
        this._fsxWindowsFileServerVolumeConfiguration.internalValue = value;
    }
    resetFsxWindowsFileServerVolumeConfiguration() {
        this._fsxWindowsFileServerVolumeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fsxWindowsFileServerVolumeConfigurationInput() {
        return this._fsxWindowsFileServerVolumeConfiguration.internalValue;
    }
}
exports.EcsTaskDefinitionVolumeOutputReference = EcsTaskDefinitionVolumeOutputReference;
_o = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionVolumeOutputReference[_o] = { fqn: "@cdktf/aws-cdk.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference", version: "0.0.0" };
class EcsTaskDefinitionVolumeList extends cdktf.ComplexList {
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
        return new EcsTaskDefinitionVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.EcsTaskDefinitionVolumeList = EcsTaskDefinitionVolumeList;
_p = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionVolumeList[_p] = { fqn: "@cdktf/aws-cdk.ecsTaskDefinition.EcsTaskDefinitionVolumeList", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecs_task_definition aws_ecs_task_definition}
*/
class EcsTaskDefinition extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EcsTaskDefinition resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EcsTaskDefinition to import
    * @param importFromId The id of the existing EcsTaskDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecs_task_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EcsTaskDefinition to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecs_task_definition", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecs_task_definition aws_ecs_task_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsTaskDefinitionConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ecs_task_definition',
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
        // ephemeral_storage - computed: false, optional: true, required: false
        this._ephemeralStorage = new EcsTaskDefinitionEphemeralStorageOutputReference(this, "ephemeral_storage");
        // inference_accelerator - computed: false, optional: true, required: false
        this._inferenceAccelerator = new EcsTaskDefinitionInferenceAcceleratorList(this, "inference_accelerator", true);
        // placement_constraints - computed: false, optional: true, required: false
        this._placementConstraints = new EcsTaskDefinitionPlacementConstraintsList(this, "placement_constraints", true);
        // proxy_configuration - computed: false, optional: true, required: false
        this._proxyConfiguration = new EcsTaskDefinitionProxyConfigurationOutputReference(this, "proxy_configuration");
        // runtime_platform - computed: false, optional: true, required: false
        this._runtimePlatform = new EcsTaskDefinitionRuntimePlatformOutputReference(this, "runtime_platform");
        // volume - computed: false, optional: true, required: false
        this._volume = new EcsTaskDefinitionVolumeList(this, "volume", true);
        this._containerDefinitions = config.containerDefinitions;
        this._cpu = config.cpu;
        this._executionRoleArn = config.executionRoleArn;
        this._family = config.family;
        this._id = config.id;
        this._ipcMode = config.ipcMode;
        this._memory = config.memory;
        this._networkMode = config.networkMode;
        this._pidMode = config.pidMode;
        this._requiresCompatibilities = config.requiresCompatibilities;
        this._skipDestroy = config.skipDestroy;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._taskRoleArn = config.taskRoleArn;
        this._ephemeralStorage.internalValue = config.ephemeralStorage;
        this._inferenceAccelerator.internalValue = config.inferenceAccelerator;
        this._placementConstraints.internalValue = config.placementConstraints;
        this._proxyConfiguration.internalValue = config.proxyConfiguration;
        this._runtimePlatform.internalValue = config.runtimePlatform;
        this._volume.internalValue = config.volume;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get containerDefinitions() {
        return this.getStringAttribute('container_definitions');
    }
    set containerDefinitions(value) {
        this._containerDefinitions = value;
    }
    // Temporarily expose input value. Use with caution.
    get containerDefinitionsInput() {
        return this._containerDefinitions;
    }
    get cpu() {
        return this.getStringAttribute('cpu');
    }
    set cpu(value) {
        this._cpu = value;
    }
    resetCpu() {
        this._cpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuInput() {
        return this._cpu;
    }
    get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    set executionRoleArn(value) {
        this._executionRoleArn = value;
    }
    resetExecutionRoleArn() {
        this._executionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get executionRoleArnInput() {
        return this._executionRoleArn;
    }
    get family() {
        return this.getStringAttribute('family');
    }
    set family(value) {
        this._family = value;
    }
    // Temporarily expose input value. Use with caution.
    get familyInput() {
        return this._family;
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
    get ipcMode() {
        return this.getStringAttribute('ipc_mode');
    }
    set ipcMode(value) {
        this._ipcMode = value;
    }
    resetIpcMode() {
        this._ipcMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipcModeInput() {
        return this._ipcMode;
    }
    get memory() {
        return this.getStringAttribute('memory');
    }
    set memory(value) {
        this._memory = value;
    }
    resetMemory() {
        this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get memoryInput() {
        return this._memory;
    }
    get networkMode() {
        return this.getStringAttribute('network_mode');
    }
    set networkMode(value) {
        this._networkMode = value;
    }
    resetNetworkMode() {
        this._networkMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkModeInput() {
        return this._networkMode;
    }
    get pidMode() {
        return this.getStringAttribute('pid_mode');
    }
    set pidMode(value) {
        this._pidMode = value;
    }
    resetPidMode() {
        this._pidMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pidModeInput() {
        return this._pidMode;
    }
    get requiresCompatibilities() {
        return cdktf.Fn.tolist(this.getListAttribute('requires_compatibilities'));
    }
    set requiresCompatibilities(value) {
        this._requiresCompatibilities = value;
    }
    resetRequiresCompatibilities() {
        this._requiresCompatibilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiresCompatibilitiesInput() {
        return this._requiresCompatibilities;
    }
    // revision - computed: true, optional: false, required: false
    get revision() {
        return this.getNumberAttribute('revision');
    }
    get skipDestroy() {
        return this.getBooleanAttribute('skip_destroy');
    }
    set skipDestroy(value) {
        this._skipDestroy = value;
    }
    resetSkipDestroy() {
        this._skipDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get skipDestroyInput() {
        return this._skipDestroy;
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
    get taskRoleArn() {
        return this.getStringAttribute('task_role_arn');
    }
    set taskRoleArn(value) {
        this._taskRoleArn = value;
    }
    resetTaskRoleArn() {
        this._taskRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get taskRoleArnInput() {
        return this._taskRoleArn;
    }
    get ephemeralStorage() {
        return this._ephemeralStorage;
    }
    putEphemeralStorage(value) {
        this._ephemeralStorage.internalValue = value;
    }
    resetEphemeralStorage() {
        this._ephemeralStorage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ephemeralStorageInput() {
        return this._ephemeralStorage.internalValue;
    }
    get inferenceAccelerator() {
        return this._inferenceAccelerator;
    }
    putInferenceAccelerator(value) {
        this._inferenceAccelerator.internalValue = value;
    }
    resetInferenceAccelerator() {
        this._inferenceAccelerator.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inferenceAcceleratorInput() {
        return this._inferenceAccelerator.internalValue;
    }
    get placementConstraints() {
        return this._placementConstraints;
    }
    putPlacementConstraints(value) {
        this._placementConstraints.internalValue = value;
    }
    resetPlacementConstraints() {
        this._placementConstraints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get placementConstraintsInput() {
        return this._placementConstraints.internalValue;
    }
    get proxyConfiguration() {
        return this._proxyConfiguration;
    }
    putProxyConfiguration(value) {
        this._proxyConfiguration.internalValue = value;
    }
    resetProxyConfiguration() {
        this._proxyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get proxyConfigurationInput() {
        return this._proxyConfiguration.internalValue;
    }
    get runtimePlatform() {
        return this._runtimePlatform;
    }
    putRuntimePlatform(value) {
        this._runtimePlatform.internalValue = value;
    }
    resetRuntimePlatform() {
        this._runtimePlatform.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get runtimePlatformInput() {
        return this._runtimePlatform.internalValue;
    }
    get volume() {
        return this._volume;
    }
    putVolume(value) {
        this._volume.internalValue = value;
    }
    resetVolume() {
        this._volume.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get volumeInput() {
        return this._volume.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            container_definitions: cdktf.stringToTerraform(this._containerDefinitions),
            cpu: cdktf.stringToTerraform(this._cpu),
            execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
            family: cdktf.stringToTerraform(this._family),
            id: cdktf.stringToTerraform(this._id),
            ipc_mode: cdktf.stringToTerraform(this._ipcMode),
            memory: cdktf.stringToTerraform(this._memory),
            network_mode: cdktf.stringToTerraform(this._networkMode),
            pid_mode: cdktf.stringToTerraform(this._pidMode),
            requires_compatibilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requiresCompatibilities),
            skip_destroy: cdktf.booleanToTerraform(this._skipDestroy),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            task_role_arn: cdktf.stringToTerraform(this._taskRoleArn),
            ephemeral_storage: ecsTaskDefinitionEphemeralStorageToTerraform(this._ephemeralStorage.internalValue),
            inference_accelerator: cdktf.listMapper(ecsTaskDefinitionInferenceAcceleratorToTerraform, true)(this._inferenceAccelerator.internalValue),
            placement_constraints: cdktf.listMapper(ecsTaskDefinitionPlacementConstraintsToTerraform, true)(this._placementConstraints.internalValue),
            proxy_configuration: ecsTaskDefinitionProxyConfigurationToTerraform(this._proxyConfiguration.internalValue),
            runtime_platform: ecsTaskDefinitionRuntimePlatformToTerraform(this._runtimePlatform.internalValue),
            volume: cdktf.listMapper(ecsTaskDefinitionVolumeToTerraform, true)(this._volume.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            container_definitions: {
                value: cdktf.stringToHclTerraform(this._containerDefinitions),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cpu: {
                value: cdktf.stringToHclTerraform(this._cpu),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            execution_role_arn: {
                value: cdktf.stringToHclTerraform(this._executionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            family: {
                value: cdktf.stringToHclTerraform(this._family),
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
            ipc_mode: {
                value: cdktf.stringToHclTerraform(this._ipcMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            memory: {
                value: cdktf.stringToHclTerraform(this._memory),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            network_mode: {
                value: cdktf.stringToHclTerraform(this._networkMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pid_mode: {
                value: cdktf.stringToHclTerraform(this._pidMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            requires_compatibilities: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requiresCompatibilities),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            skip_destroy: {
                value: cdktf.booleanToHclTerraform(this._skipDestroy),
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
            task_role_arn: {
                value: cdktf.stringToHclTerraform(this._taskRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ephemeral_storage: {
                value: ecsTaskDefinitionEphemeralStorageToHclTerraform(this._ephemeralStorage.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "EcsTaskDefinitionEphemeralStorageList",
            },
            inference_accelerator: {
                value: cdktf.listMapperHcl(ecsTaskDefinitionInferenceAcceleratorToHclTerraform, true)(this._inferenceAccelerator.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "EcsTaskDefinitionInferenceAcceleratorList",
            },
            placement_constraints: {
                value: cdktf.listMapperHcl(ecsTaskDefinitionPlacementConstraintsToHclTerraform, true)(this._placementConstraints.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "EcsTaskDefinitionPlacementConstraintsList",
            },
            proxy_configuration: {
                value: ecsTaskDefinitionProxyConfigurationToHclTerraform(this._proxyConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "EcsTaskDefinitionProxyConfigurationList",
            },
            runtime_platform: {
                value: ecsTaskDefinitionRuntimePlatformToHclTerraform(this._runtimePlatform.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "EcsTaskDefinitionRuntimePlatformList",
            },
            volume: {
                value: cdktf.listMapperHcl(ecsTaskDefinitionVolumeToHclTerraform, true)(this._volume.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "EcsTaskDefinitionVolumeList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.EcsTaskDefinition = EcsTaskDefinition;
_q = JSII_RTTI_SYMBOL_1;
EcsTaskDefinition[_q] = { fqn: "@cdktf/aws-cdk.ecsTaskDefinition.EcsTaskDefinition", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
EcsTaskDefinition.tfResourceType = "aws_ecs_task_definition";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2Vjcy10YXNrLWRlZmluaXRpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSwrQkFBK0I7QUE0Ry9CLFNBQWdCLDRDQUE0QyxDQUFDLE1BQTZGO0lBQ3hKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDeEQsQ0FBQTtBQUNILENBQUM7QUFSRCxvR0FRQztBQUdELFNBQWdCLCtDQUErQyxDQUFDLE1BQTZGO0lBQzNKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHO1FBQ1osV0FBVyxFQUFFO1lBQ1gsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxLQUFLO1lBQ2Qs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SztnQkFDWCxnQkFBZ0IsRUFBRSwyQ0FBMkM7YUFDOUQ7WUFDRCxtQkFBbUIsRUFBRTtnQkFDbkIsS0FBSyxFQUFFLGlEQUFpRCxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7Z0JBQ2hHLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLGdCQUFnQixFQUFFLHlDQUF5QzthQUM1RDtZQUNELGdCQUFnQixFQUFFO2dCQUNoQixLQUFLLEVBQUUsOENBQThDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztnQkFDMUYsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osZ0JBQWdCLEVBQUUsc0NBQXNDO2FBQ3pEO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLHFDQUFxQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO2dCQUNuRyxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsS0FBSztnQkFDWCxnQkFBZ0IsRUFBRSw2QkFBNkI7YUFDaEQ7U0FDRixDQUFDO1FBRUYsOEJBQThCO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQXppQkgsOENBMGlCQzs7O0FBeGlCQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLGdDQUFjLEdBQUcseUJBQXlCLEFBQTVCLENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvblxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEVjc1Rhc2tEZWZpbml0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jY29udGFpbmVyX2RlZmluaXRpb25zIEVjc1Rhc2tEZWZpbml0aW9uI2NvbnRhaW5lcl9kZWZpbml0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgY29udGFpbmVyRGVmaW5pdGlvbnM6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiNjcHUgRWNzVGFza0RlZmluaXRpb24jY3B1fVxuICAqL1xuICByZWFkb25seSBjcHU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jZXhlY3V0aW9uX3JvbGVfYXJuIEVjc1Rhc2tEZWZpbml0aW9uI2V4ZWN1dGlvbl9yb2xlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgZXhlY3V0aW9uUm9sZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiNmYW1pbHkgRWNzVGFza0RlZmluaXRpb24jZmFtaWx5fVxuICAqL1xuICByZWFkb25seSBmYW1pbHk6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiNpZCBFY3NUYXNrRGVmaW5pdGlvbiNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiNpcGNfbW9kZSBFY3NUYXNrRGVmaW5pdGlvbiNpcGNfbW9kZX1cbiAgKi9cbiAgcmVhZG9ubHkgaXBjTW9kZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiNtZW1vcnkgRWNzVGFza0RlZmluaXRpb24jbWVtb3J5fVxuICAqL1xuICByZWFkb25seSBtZW1vcnk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jbmV0d29ya19tb2RlIEVjc1Rhc2tEZWZpbml0aW9uI25ldHdvcmtfbW9kZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmV0d29ya01vZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jcGlkX21vZGUgRWNzVGFza0RlZmluaXRpb24jcGlkX21vZGV9XG4gICovXG4gIHJlYWRvbmx5IHBpZE1vZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jcmVxdWlyZXNfY29tcGF0aWJpbGl0aWVzIEVjc1Rhc2tEZWZpbml0aW9uI3JlcXVpcmVzX2NvbXBhdGliaWxpdGllc31cbiAgKi9cbiAgcmVhZG9ubHkgcmVxdWlyZXNDb21wYXRpYmlsaXRpZXM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiNza2lwX2Rlc3Ryb3kgRWNzVGFza0RlZmluaXRpb24jc2tpcF9kZXN0cm95fVxuICAqL1xuICByZWFkb25seSBza2lwRGVzdHJveT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiN0YWdzIEVjc1Rhc2tEZWZpbml0aW9uI3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfdGFza19kZWZpbml0aW9uI3RhZ3NfYWxsIEVjc1Rhc2tEZWZpbml0aW9uI3RhZ3NfYWxsfVxuICAqL1xuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiN0YXNrX3JvbGVfYXJuIEVjc1Rhc2tEZWZpbml0aW9uI3Rhc2tfcm9sZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IHRhc2tSb2xlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBlcGhlbWVyYWxfc3RvcmFnZSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiNlcGhlbWVyYWxfc3RvcmFnZSBFY3NUYXNrRGVmaW5pdGlvbiNlcGhlbWVyYWxfc3RvcmFnZX1cbiAgKi9cbiAgcmVhZG9ubHkgZXBoZW1lcmFsU3RvcmFnZT86IEVjc1Rhc2tEZWZpbml0aW9uRXBoZW1lcmFsU3RvcmFnZTtcbiAgLyoqXG4gICogaW5mZXJlbmNlX2FjY2VsZXJhdG9yIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfdGFza19kZWZpbml0aW9uI2luZmVyZW5jZV9hY2NlbGVyYXRvciBFY3NUYXNrRGVmaW5pdGlvbiNpbmZlcmVuY2VfYWNjZWxlcmF0b3J9XG4gICovXG4gIHJlYWRvbmx5IGluZmVyZW5jZUFjY2VsZXJhdG9yPzogRWNzVGFza0RlZmluaXRpb25JbmZlcmVuY2VBY2NlbGVyYXRvcltdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHBsYWNlbWVudF9jb25zdHJhaW50cyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiNwbGFjZW1lbnRfY29uc3RyYWludHMgRWNzVGFza0RlZmluaXRpb24jcGxhY2VtZW50X2NvbnN0cmFpbnRzfVxuICAqL1xuICByZWFkb25seSBwbGFjZW1lbnRDb25zdHJhaW50cz86IEVjc1Rhc2tEZWZpbml0aW9uUGxhY2VtZW50Q29uc3RyYWludHNbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBwcm94eV9jb25maWd1cmF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfdGFza19kZWZpbml0aW9uI3Byb3h5X2NvbmZpZ3VyYXRpb24gRWNzVGFza0RlZmluaXRpb24jcHJveHlfY29uZmlndXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgcHJveHlDb25maWd1cmF0aW9uPzogRWNzVGFza0RlZmluaXRpb25Qcm94eUNvbmZpZ3VyYXRpb247XG4gIC8qKlxuICAqIHJ1bnRpbWVfcGxhdGZvcm0gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jcnVudGltZV9wbGF0Zm9ybSBFY3NUYXNrRGVmaW5pdGlvbiNydW50aW1lX3BsYXRmb3JtfVxuICAqL1xuICByZWFkb25seSBydW50aW1lUGxhdGZvcm0/OiBFY3NUYXNrRGVmaW5pdGlvblJ1bnRpbWVQbGF0Zm9ybTtcbiAgLyoqXG4gICogdm9sdW1lIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfdGFza19kZWZpbml0aW9uI3ZvbHVtZSBFY3NUYXNrRGVmaW5pdGlvbiN2b2x1bWV9XG4gICovXG4gIHJlYWRvbmx5IHZvbHVtZT86IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWNzVGFza0RlZmluaXRpb25FcGhlbWVyYWxTdG9yYWdlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiNzaXplX2luX2dpYiBFY3NUYXNrRGVmaW5pdGlvbiNzaXplX2luX2dpYn1cbiAgKi9cbiAgcmVhZG9ubHkgc2l6ZUluR2liOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NUYXNrRGVmaW5pdGlvbkVwaGVtZXJhbFN0b3JhZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NUYXNrRGVmaW5pdGlvbkVwaGVtZXJhbFN0b3JhZ2VPdXRwdXRSZWZlcmVuY2UgfCBFY3NUYXNrRGVmaW5pdGlvbkVwaGVtZXJhbFN0b3JhZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgc2l6ZV9pbl9naWI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2l6ZUluR2liKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NUYXNrRGVmaW5pdGlvbkVwaGVtZXJhbFN0b3JhZ2VUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NUYXNrRGVmaW5pdGlvbkVwaGVtZXJhbFN0b3JhZ2VPdXRwdXRSZWZlcmVuY2UgfCBFY3NUYXNrRGVmaW5pdGlvbkVwaGVtZXJhbFN0b3JhZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHNpemVfaW5fZ2liOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zaXplSW5HaWIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgRWNzVGFza0RlZmluaXRpb25FcGhlbWVyYWxTdG9yYWdlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFY3NUYXNrRGVmaW5pdGlvbkVwaGVtZXJhbFN0b3JhZ2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3NpemVJbkdpYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zaXplSW5HaWIgPSB0aGlzLl9zaXplSW5HaWI7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFY3NUYXNrRGVmaW5pdGlvbkVwaGVtZXJhbFN0b3JhZ2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9zaXplSW5HaWIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3NpemVJbkdpYiA9IHZhbHVlLnNpemVJbkdpYjtcbiAgICB9XG4gIH1cblxuICAvLyBzaXplX2luX2dpYiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zaXplSW5HaWI/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHNpemVJbkdpYigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NpemVfaW5fZ2liJyk7XG4gIH1cbiAgcHVibGljIHNldCBzaXplSW5HaWIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NpemVJbkdpYiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzaXplSW5HaWJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZUluR2liO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVjc1Rhc2tEZWZpbml0aW9uSW5mZXJlbmNlQWNjZWxlcmF0b3Ige1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfdGFza19kZWZpbml0aW9uI2RldmljZV9uYW1lIEVjc1Rhc2tEZWZpbml0aW9uI2RldmljZV9uYW1lfVxuICAqL1xuICByZWFkb25seSBkZXZpY2VOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jZGV2aWNlX3R5cGUgRWNzVGFza0RlZmluaXRpb24jZGV2aWNlX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGRldmljZVR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc1Rhc2tEZWZpbml0aW9uSW5mZXJlbmNlQWNjZWxlcmF0b3JUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NUYXNrRGVmaW5pdGlvbkluZmVyZW5jZUFjY2VsZXJhdG9yIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGV2aWNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlTmFtZSksXG4gICAgZGV2aWNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlVHlwZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZWNzVGFza0RlZmluaXRpb25JbmZlcmVuY2VBY2NlbGVyYXRvclRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEVjc1Rhc2tEZWZpbml0aW9uSW5mZXJlbmNlQWNjZWxlcmF0b3IgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZGV2aWNlX25hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRldmljZU5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRldmljZV90eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEVjc1Rhc2tEZWZpbml0aW9uSW5mZXJlbmNlQWNjZWxlcmF0b3JPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWNzVGFza0RlZmluaXRpb25JbmZlcmVuY2VBY2NlbGVyYXRvciB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGV2aWNlTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXZpY2VOYW1lID0gdGhpcy5fZGV2aWNlTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RldmljZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGV2aWNlVHlwZSA9IHRoaXMuX2RldmljZVR5cGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFY3NUYXNrRGVmaW5pdGlvbkluZmVyZW5jZUFjY2VsZXJhdG9yIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RldmljZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZXZpY2VUeXBlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RldmljZU5hbWUgPSB2YWx1ZS5kZXZpY2VOYW1lO1xuICAgICAgdGhpcy5fZGV2aWNlVHlwZSA9IHZhbHVlLmRldmljZVR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gZGV2aWNlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGV2aWNlTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGV2aWNlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RldmljZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXZpY2VOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXZpY2VOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRldmljZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlTmFtZTtcbiAgfVxuXG4gIC8vIGRldmljZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RldmljZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXZpY2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGV2aWNlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGV2aWNlVHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXZpY2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZVR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVjc1Rhc2tEZWZpbml0aW9uSW5mZXJlbmNlQWNjZWxlcmF0b3JMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBFY3NUYXNrRGVmaW5pdGlvbkluZmVyZW5jZUFjY2VsZXJhdG9yW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IEVjc1Rhc2tEZWZpbml0aW9uSW5mZXJlbmNlQWNjZWxlcmF0b3JPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgRWNzVGFza0RlZmluaXRpb25JbmZlcmVuY2VBY2NlbGVyYXRvck91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVjc1Rhc2tEZWZpbml0aW9uUGxhY2VtZW50Q29uc3RyYWludHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfdGFza19kZWZpbml0aW9uI2V4cHJlc3Npb24gRWNzVGFza0RlZmluaXRpb24jZXhwcmVzc2lvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZXhwcmVzc2lvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiN0eXBlIEVjc1Rhc2tEZWZpbml0aW9uI3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc1Rhc2tEZWZpbml0aW9uUGxhY2VtZW50Q29uc3RyYWludHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NUYXNrRGVmaW5pdGlvblBsYWNlbWVudENvbnN0cmFpbnRzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZXhwcmVzc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5leHByZXNzaW9uKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc1Rhc2tEZWZpbml0aW9uUGxhY2VtZW50Q29uc3RyYWludHNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NUYXNrRGVmaW5pdGlvblBsYWNlbWVudENvbnN0cmFpbnRzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmV4cHJlc3Npb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgRWNzVGFza0RlZmluaXRpb25QbGFjZW1lbnRDb25zdHJhaW50c091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFY3NUYXNrRGVmaW5pdGlvblBsYWNlbWVudENvbnN0cmFpbnRzIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9leHByZXNzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmV4cHJlc3Npb24gPSB0aGlzLl9leHByZXNzaW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50eXBlID0gdGhpcy5fdHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVjc1Rhc2tEZWZpbml0aW9uUGxhY2VtZW50Q29uc3RyYWludHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZXhwcmVzc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZXhwcmVzc2lvbiA9IHZhbHVlLmV4cHJlc3Npb247XG4gICAgICB0aGlzLl90eXBlID0gdmFsdWUudHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBleHByZXNzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4cHJlc3Npb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleHByZXNzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBleHByZXNzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9leHByZXNzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXhwcmVzc2lvbigpIHtcbiAgICB0aGlzLl9leHByZXNzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleHByZXNzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cHJlc3Npb247XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWNzVGFza0RlZmluaXRpb25QbGFjZW1lbnRDb25zdHJhaW50c0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IEVjc1Rhc2tEZWZpbml0aW9uUGxhY2VtZW50Q29uc3RyYWludHNbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogRWNzVGFza0RlZmluaXRpb25QbGFjZW1lbnRDb25zdHJhaW50c091dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBFY3NUYXNrRGVmaW5pdGlvblBsYWNlbWVudENvbnN0cmFpbnRzT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWNzVGFza0RlZmluaXRpb25Qcm94eUNvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfdGFza19kZWZpbml0aW9uI2NvbnRhaW5lcl9uYW1lIEVjc1Rhc2tEZWZpbml0aW9uI2NvbnRhaW5lcl9uYW1lfVxuICAqL1xuICByZWFkb25seSBjb250YWluZXJOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jcHJvcGVydGllcyBFY3NUYXNrRGVmaW5pdGlvbiNwcm9wZXJ0aWVzfVxuICAqL1xuICByZWFkb25seSBwcm9wZXJ0aWVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiN0eXBlIEVjc1Rhc2tEZWZpbml0aW9uI3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NUYXNrRGVmaW5pdGlvblByb3h5Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEVjc1Rhc2tEZWZpbml0aW9uUHJveHlDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgRWNzVGFza0RlZmluaXRpb25Qcm94eUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGFpbmVyTmFtZSksXG4gICAgcHJvcGVydGllczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5wcm9wZXJ0aWVzKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc1Rhc2tEZWZpbml0aW9uUHJveHlDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogRWNzVGFza0RlZmluaXRpb25Qcm94eUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBFY3NUYXNrRGVmaW5pdGlvblByb3h5Q29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgY29udGFpbmVyX25hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvbnRhaW5lck5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKShzdHJ1Y3QhLnByb3BlcnRpZXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgRWNzVGFza0RlZmluaXRpb25Qcm94eUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVjc1Rhc2tEZWZpbml0aW9uUHJveHlDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb250YWluZXJOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbnRhaW5lck5hbWUgPSB0aGlzLl9jb250YWluZXJOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm9wZXJ0aWVzID0gdGhpcy5fcHJvcGVydGllcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3R5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudHlwZSA9IHRoaXMuX3R5cGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFY3NUYXNrRGVmaW5pdGlvblByb3h5Q29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lck5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY29udGFpbmVyTmFtZSA9IHZhbHVlLmNvbnRhaW5lck5hbWU7XG4gICAgICB0aGlzLl9wcm9wZXJ0aWVzID0gdmFsdWUucHJvcGVydGllcztcbiAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZS50eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbnRhaW5lcl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NvbnRhaW5lck5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250YWluZXJfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29udGFpbmVyTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGFpbmVyTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb250YWluZXJOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lck5hbWU7XG4gIH1cblxuICAvLyBwcm9wZXJ0aWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb3BlcnRpZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgncHJvcGVydGllcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvcGVydGllcyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3Byb3BlcnRpZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMuX3Byb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3BlcnRpZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvcGVydGllcztcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUeXBlKCkge1xuICAgIHRoaXMuX3R5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBFY3NUYXNrRGVmaW5pdGlvblJ1bnRpbWVQbGF0Zm9ybSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jY3B1X2FyY2hpdGVjdHVyZSBFY3NUYXNrRGVmaW5pdGlvbiNjcHVfYXJjaGl0ZWN0dXJlfVxuICAqL1xuICByZWFkb25seSBjcHVBcmNoaXRlY3R1cmU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jb3BlcmF0aW5nX3N5c3RlbV9mYW1pbHkgRWNzVGFza0RlZmluaXRpb24jb3BlcmF0aW5nX3N5c3RlbV9mYW1pbHl9XG4gICovXG4gIHJlYWRvbmx5IG9wZXJhdGluZ1N5c3RlbUZhbWlseT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc1Rhc2tEZWZpbml0aW9uUnVudGltZVBsYXRmb3JtVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzVGFza0RlZmluaXRpb25SdW50aW1lUGxhdGZvcm1PdXRwdXRSZWZlcmVuY2UgfCBFY3NUYXNrRGVmaW5pdGlvblJ1bnRpbWVQbGF0Zm9ybSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjcHVfYXJjaGl0ZWN0dXJlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNwdUFyY2hpdGVjdHVyZSksXG4gICAgb3BlcmF0aW5nX3N5c3RlbV9mYW1pbHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3BlcmF0aW5nU3lzdGVtRmFtaWx5KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NUYXNrRGVmaW5pdGlvblJ1bnRpbWVQbGF0Zm9ybVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEVjc1Rhc2tEZWZpbml0aW9uUnVudGltZVBsYXRmb3JtT3V0cHV0UmVmZXJlbmNlIHwgRWNzVGFza0RlZmluaXRpb25SdW50aW1lUGxhdGZvcm0pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNwdV9hcmNoaXRlY3R1cmU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNwdUFyY2hpdGVjdHVyZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgb3BlcmF0aW5nX3N5c3RlbV9mYW1pbHk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm9wZXJhdGluZ1N5c3RlbUZhbWlseSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBFY3NUYXNrRGVmaW5pdGlvblJ1bnRpbWVQbGF0Zm9ybU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWNzVGFza0RlZmluaXRpb25SdW50aW1lUGxhdGZvcm0gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NwdUFyY2hpdGVjdHVyZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jcHVBcmNoaXRlY3R1cmUgPSB0aGlzLl9jcHVBcmNoaXRlY3R1cmU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vcGVyYXRpbmdTeXN0ZW1GYW1pbHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3BlcmF0aW5nU3lzdGVtRmFtaWx5ID0gdGhpcy5fb3BlcmF0aW5nU3lzdGVtRmFtaWx5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRWNzVGFza0RlZmluaXRpb25SdW50aW1lUGxhdGZvcm0gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jcHVBcmNoaXRlY3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vcGVyYXRpbmdTeXN0ZW1GYW1pbHkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NwdUFyY2hpdGVjdHVyZSA9IHZhbHVlLmNwdUFyY2hpdGVjdHVyZTtcbiAgICAgIHRoaXMuX29wZXJhdGluZ1N5c3RlbUZhbWlseSA9IHZhbHVlLm9wZXJhdGluZ1N5c3RlbUZhbWlseTtcbiAgICB9XG4gIH1cblxuICAvLyBjcHVfYXJjaGl0ZWN0dXJlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NwdUFyY2hpdGVjdHVyZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3B1QXJjaGl0ZWN0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3B1X2FyY2hpdGVjdHVyZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3B1QXJjaGl0ZWN0dXJlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jcHVBcmNoaXRlY3R1cmUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcHVBcmNoaXRlY3R1cmUoKSB7XG4gICAgdGhpcy5fY3B1QXJjaGl0ZWN0dXJlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcHVBcmNoaXRlY3R1cmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3B1QXJjaGl0ZWN0dXJlO1xuICB9XG5cbiAgLy8gb3BlcmF0aW5nX3N5c3RlbV9mYW1pbHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3BlcmF0aW5nU3lzdGVtRmFtaWx5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBvcGVyYXRpbmdTeXN0ZW1GYW1pbHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvcGVyYXRpbmdfc3lzdGVtX2ZhbWlseScpO1xuICB9XG4gIHB1YmxpYyBzZXQgb3BlcmF0aW5nU3lzdGVtRmFtaWx5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vcGVyYXRpbmdTeXN0ZW1GYW1pbHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPcGVyYXRpbmdTeXN0ZW1GYW1pbHkoKSB7XG4gICAgdGhpcy5fb3BlcmF0aW5nU3lzdGVtRmFtaWx5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvcGVyYXRpbmdTeXN0ZW1GYW1pbHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW5nU3lzdGVtRmFtaWx5O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRG9ja2VyVm9sdW1lQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jYXV0b3Byb3Zpc2lvbiBFY3NUYXNrRGVmaW5pdGlvbiNhdXRvcHJvdmlzaW9ufVxuICAqL1xuICByZWFkb25seSBhdXRvcHJvdmlzaW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfdGFza19kZWZpbml0aW9uI2RyaXZlciBFY3NUYXNrRGVmaW5pdGlvbiNkcml2ZXJ9XG4gICovXG4gIHJlYWRvbmx5IGRyaXZlcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiNkcml2ZXJfb3B0cyBFY3NUYXNrRGVmaW5pdGlvbiNkcml2ZXJfb3B0c31cbiAgKi9cbiAgcmVhZG9ubHkgZHJpdmVyT3B0cz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jbGFiZWxzIEVjc1Rhc2tEZWZpbml0aW9uI2xhYmVsc31cbiAgKi9cbiAgcmVhZG9ubHkgbGFiZWxzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiNzY29wZSBFY3NUYXNrRGVmaW5pdGlvbiNzY29wZX1cbiAgKi9cbiAgcmVhZG9ubHkgc2NvcGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NUYXNrRGVmaW5pdGlvblZvbHVtZURvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZURvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZURvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXV0b3Byb3Zpc2lvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYXV0b3Byb3Zpc2lvbiksXG4gICAgZHJpdmVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRyaXZlciksXG4gICAgZHJpdmVyX29wdHM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZHJpdmVyT3B0cyksXG4gICAgbGFiZWxzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmxhYmVscyksXG4gICAgc2NvcGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2NvcGUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRG9ja2VyVm9sdW1lQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRG9ja2VyVm9sdW1lQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRG9ja2VyVm9sdW1lQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYXV0b3Byb3Zpc2lvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmF1dG9wcm92aXNpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBkcml2ZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRyaXZlciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZHJpdmVyX29wdHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKShzdHJ1Y3QhLmRyaXZlck9wdHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICB9LFxuICAgIGxhYmVsczoge1xuICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHN0cnVjdCEubGFiZWxzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgfSxcbiAgICBzY29wZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2NvcGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgRWNzVGFza0RlZmluaXRpb25Wb2x1bWVEb2NrZXJWb2x1bWVDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZURvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2F1dG9wcm92aXNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXV0b3Byb3Zpc2lvbiA9IHRoaXMuX2F1dG9wcm92aXNpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9kcml2ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZHJpdmVyID0gdGhpcy5fZHJpdmVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZHJpdmVyT3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kcml2ZXJPcHRzID0gdGhpcy5fZHJpdmVyT3B0cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xhYmVscyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sYWJlbHMgPSB0aGlzLl9sYWJlbHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zY29wZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zY29wZSA9IHRoaXMuX3Njb3BlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVEb2NrZXJWb2x1bWVDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXV0b3Byb3Zpc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RyaXZlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RyaXZlck9wdHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sYWJlbHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zY29wZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYXV0b3Byb3Zpc2lvbiA9IHZhbHVlLmF1dG9wcm92aXNpb247XG4gICAgICB0aGlzLl9kcml2ZXIgPSB2YWx1ZS5kcml2ZXI7XG4gICAgICB0aGlzLl9kcml2ZXJPcHRzID0gdmFsdWUuZHJpdmVyT3B0cztcbiAgICAgIHRoaXMuX2xhYmVscyA9IHZhbHVlLmxhYmVscztcbiAgICAgIHRoaXMuX3Njb3BlID0gdmFsdWUuc2NvcGU7XG4gICAgfVxuICB9XG5cbiAgLy8gYXV0b3Byb3Zpc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRvcHJvdmlzaW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhdXRvcHJvdmlzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2F1dG9wcm92aXNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dG9wcm92aXNpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2F1dG9wcm92aXNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvcHJvdmlzaW9uKCkge1xuICAgIHRoaXMuX2F1dG9wcm92aXNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9wcm92aXNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b3Byb3Zpc2lvbjtcbiAgfVxuXG4gIC8vIGRyaXZlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kcml2ZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRyaXZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RyaXZlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZHJpdmVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kcml2ZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREcml2ZXIoKSB7XG4gICAgdGhpcy5fZHJpdmVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkcml2ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHJpdmVyO1xuICB9XG5cbiAgLy8gZHJpdmVyX29wdHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZHJpdmVyT3B0cz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IGRyaXZlck9wdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCdkcml2ZXJfb3B0cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZHJpdmVyT3B0cyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX2RyaXZlck9wdHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREcml2ZXJPcHRzKCkge1xuICAgIHRoaXMuX2RyaXZlck9wdHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRyaXZlck9wdHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHJpdmVyT3B0cztcbiAgfVxuXG4gIC8vIGxhYmVscyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYWJlbHM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCBsYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCdsYWJlbHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhYmVscyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX2xhYmVscyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhYmVscygpIHtcbiAgICB0aGlzLl9sYWJlbHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhYmVsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbHM7XG4gIH1cblxuICAvLyBzY29wZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Njb3BlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzY29wZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Njb3BlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzY29wZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2NvcGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTY29wZSgpIHtcbiAgICB0aGlzLl9zY29wZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NvcGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uQXV0aG9yaXphdGlvbkNvbmZpZyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jYWNjZXNzX3BvaW50X2lkIEVjc1Rhc2tEZWZpbml0aW9uI2FjY2Vzc19wb2ludF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgYWNjZXNzUG9pbnRJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiNpYW0gRWNzVGFza0RlZmluaXRpb24jaWFtfVxuICAqL1xuICByZWFkb25seSBpYW0/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uQXV0aG9yaXphdGlvbkNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRWZzVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWNjZXNzX3BvaW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY2Vzc1BvaW50SWQpLFxuICAgIGlhbTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pYW0pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRWZzVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgRWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uQXV0aG9yaXphdGlvbkNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYWNjZXNzX3BvaW50X2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NQb2ludElkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpYW06IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlhbSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY2Nlc3NQb2ludElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjY2Vzc1BvaW50SWQgPSB0aGlzLl9hY2Nlc3NQb2ludElkO1xuICAgIH1cbiAgICBpZiAodGhpcy5faWFtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlhbSA9IHRoaXMuX2lhbTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRWZzVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY2Nlc3NQb2ludElkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faWFtID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hY2Nlc3NQb2ludElkID0gdmFsdWUuYWNjZXNzUG9pbnRJZDtcbiAgICAgIHRoaXMuX2lhbSA9IHZhbHVlLmlhbTtcbiAgICB9XG4gIH1cblxuICAvLyBhY2Nlc3NfcG9pbnRfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNjZXNzUG9pbnRJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWNjZXNzUG9pbnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjY2Vzc19wb2ludF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWNjZXNzUG9pbnRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWNjZXNzUG9pbnRJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFjY2Vzc1BvaW50SWQoKSB7XG4gICAgdGhpcy5fYWNjZXNzUG9pbnRJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjZXNzUG9pbnRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NQb2ludElkO1xuICB9XG5cbiAgLy8gaWFtIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lhbT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWFtKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWFtJyk7XG4gIH1cbiAgcHVibGljIHNldCBpYW0odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lhbSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElhbSgpIHtcbiAgICB0aGlzLl9pYW0gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlhbUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pYW07XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiNmaWxlX3N5c3RlbV9pZCBFY3NUYXNrRGVmaW5pdGlvbiNmaWxlX3N5c3RlbV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgZmlsZVN5c3RlbUlkOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jcm9vdF9kaXJlY3RvcnkgRWNzVGFza0RlZmluaXRpb24jcm9vdF9kaXJlY3Rvcnl9XG4gICovXG4gIHJlYWRvbmx5IHJvb3REaXJlY3Rvcnk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jdHJhbnNpdF9lbmNyeXB0aW9uIEVjc1Rhc2tEZWZpbml0aW9uI3RyYW5zaXRfZW5jcnlwdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgdHJhbnNpdEVuY3J5cHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jdHJhbnNpdF9lbmNyeXB0aW9uX3BvcnQgRWNzVGFza0RlZmluaXRpb24jdHJhbnNpdF9lbmNyeXB0aW9uX3BvcnR9XG4gICovXG4gIHJlYWRvbmx5IHRyYW5zaXRFbmNyeXB0aW9uUG9ydD86IG51bWJlcjtcbiAgLyoqXG4gICogYXV0aG9yaXphdGlvbl9jb25maWcgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jYXV0aG9yaXphdGlvbl9jb25maWcgRWNzVGFza0RlZmluaXRpb24jYXV0aG9yaXphdGlvbl9jb25maWd9XG4gICovXG4gIHJlYWRvbmx5IGF1dGhvcml6YXRpb25Db25maWc/OiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgRWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGZpbGVfc3lzdGVtX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpbGVTeXN0ZW1JZCksXG4gICAgcm9vdF9kaXJlY3Rvcnk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9vdERpcmVjdG9yeSksXG4gICAgdHJhbnNpdF9lbmNyeXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRyYW5zaXRFbmNyeXB0aW9uKSxcbiAgICB0cmFuc2l0X2VuY3J5cHRpb25fcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50cmFuc2l0RW5jcnlwdGlvblBvcnQpLFxuICAgIGF1dGhvcml6YXRpb25fY29uZmlnOiBlY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRob3JpemF0aW9uQ29uZmlnKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGZpbGVfc3lzdGVtX2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5maWxlU3lzdGVtSWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHJvb3RfZGlyZWN0b3J5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yb290RGlyZWN0b3J5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB0cmFuc2l0X2VuY3J5cHRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRyYW5zaXRFbmNyeXB0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB0cmFuc2l0X2VuY3J5cHRpb25fcG9ydDoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEudHJhbnNpdEVuY3J5cHRpb25Qb3J0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBhdXRob3JpemF0aW9uX2NvbmZpZzoge1xuICAgICAgdmFsdWU6IGVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRWZzVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmF1dGhvcml6YXRpb25Db25maWcpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRWZzVm9sdW1lQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZmlsZVN5c3RlbUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbGVTeXN0ZW1JZCA9IHRoaXMuX2ZpbGVTeXN0ZW1JZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jvb3REaXJlY3RvcnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucm9vdERpcmVjdG9yeSA9IHRoaXMuX3Jvb3REaXJlY3Rvcnk7XG4gICAgfVxuICAgIGlmICh0aGlzLl90cmFuc2l0RW5jcnlwdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50cmFuc2l0RW5jcnlwdGlvbiA9IHRoaXMuX3RyYW5zaXRFbmNyeXB0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdHJhbnNpdEVuY3J5cHRpb25Qb3J0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRyYW5zaXRFbmNyeXB0aW9uUG9ydCA9IHRoaXMuX3RyYW5zaXRFbmNyeXB0aW9uUG9ydDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2F1dGhvcml6YXRpb25Db25maWc/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXV0aG9yaXphdGlvbkNvbmZpZyA9IHRoaXMuX2F1dGhvcml6YXRpb25Db25maWc/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9maWxlU3lzdGVtSWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yb290RGlyZWN0b3J5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHJhbnNpdEVuY3J5cHRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90cmFuc2l0RW5jcnlwdGlvblBvcnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hdXRob3JpemF0aW9uQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2ZpbGVTeXN0ZW1JZCA9IHZhbHVlLmZpbGVTeXN0ZW1JZDtcbiAgICAgIHRoaXMuX3Jvb3REaXJlY3RvcnkgPSB2YWx1ZS5yb290RGlyZWN0b3J5O1xuICAgICAgdGhpcy5fdHJhbnNpdEVuY3J5cHRpb24gPSB2YWx1ZS50cmFuc2l0RW5jcnlwdGlvbjtcbiAgICAgIHRoaXMuX3RyYW5zaXRFbmNyeXB0aW9uUG9ydCA9IHZhbHVlLnRyYW5zaXRFbmNyeXB0aW9uUG9ydDtcbiAgICAgIHRoaXMuX2F1dGhvcml6YXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmF1dGhvcml6YXRpb25Db25maWc7XG4gICAgfVxuICB9XG5cbiAgLy8gZmlsZV9zeXN0ZW1faWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZmlsZVN5c3RlbUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmaWxlU3lzdGVtSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmaWxlX3N5c3RlbV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmlsZVN5c3RlbUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9maWxlU3lzdGVtSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsZVN5c3RlbUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVTeXN0ZW1JZDtcbiAgfVxuXG4gIC8vIHJvb3RfZGlyZWN0b3J5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jvb3REaXJlY3Rvcnk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvb3REaXJlY3RvcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb290X2RpcmVjdG9yeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9vdERpcmVjdG9yeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm9vdERpcmVjdG9yeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJvb3REaXJlY3RvcnkoKSB7XG4gICAgdGhpcy5fcm9vdERpcmVjdG9yeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm9vdERpcmVjdG9yeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb290RGlyZWN0b3J5O1xuICB9XG5cbiAgLy8gdHJhbnNpdF9lbmNyeXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RyYW5zaXRFbmNyeXB0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0cmFuc2l0RW5jcnlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RyYW5zaXRfZW5jcnlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHJhbnNpdEVuY3J5cHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RyYW5zaXRFbmNyeXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHJhbnNpdEVuY3J5cHRpb24oKSB7XG4gICAgdGhpcy5fdHJhbnNpdEVuY3J5cHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRyYW5zaXRFbmNyeXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYW5zaXRFbmNyeXB0aW9uO1xuICB9XG5cbiAgLy8gdHJhbnNpdF9lbmNyeXB0aW9uX3BvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHJhbnNpdEVuY3J5cHRpb25Qb3J0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0cmFuc2l0RW5jcnlwdGlvblBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0cmFuc2l0X2VuY3J5cHRpb25fcG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHJhbnNpdEVuY3J5cHRpb25Qb3J0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90cmFuc2l0RW5jcnlwdGlvblBvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUcmFuc2l0RW5jcnlwdGlvblBvcnQoKSB7XG4gICAgdGhpcy5fdHJhbnNpdEVuY3J5cHRpb25Qb3J0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0cmFuc2l0RW5jcnlwdGlvblBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNpdEVuY3J5cHRpb25Qb3J0O1xuICB9XG5cbiAgLy8gYXV0aG9yaXphdGlvbl9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0aG9yaXphdGlvbkNvbmZpZyA9IG5ldyBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiYXV0aG9yaXphdGlvbl9jb25maWdcIik7XG4gIHB1YmxpYyBnZXQgYXV0aG9yaXphdGlvbkNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXphdGlvbkNvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0QXV0aG9yaXphdGlvbkNvbmZpZyh2YWx1ZTogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uQXV0aG9yaXphdGlvbkNvbmZpZykge1xuICAgIHRoaXMuX2F1dGhvcml6YXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dGhvcml6YXRpb25Db25maWcoKSB7XG4gICAgdGhpcy5fYXV0aG9yaXphdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRob3JpemF0aW9uQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhvcml6YXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfdGFza19kZWZpbml0aW9uI2NyZWRlbnRpYWxzX3BhcmFtZXRlciBFY3NUYXNrRGVmaW5pdGlvbiNjcmVkZW50aWFsc19wYXJhbWV0ZXJ9XG4gICovXG4gIHJlYWRvbmx5IGNyZWRlbnRpYWxzUGFyYW1ldGVyOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jZG9tYWluIEVjc1Rhc2tEZWZpbml0aW9uI2RvbWFpbn1cbiAgKi9cbiAgcmVhZG9ubHkgZG9tYWluOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWdPdXRwdXRSZWZlcmVuY2UgfCBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY3JlZGVudGlhbHNfcGFyYW1ldGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNyZWRlbnRpYWxzUGFyYW1ldGVyKSxcbiAgICBkb21haW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZG9tYWluKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWdPdXRwdXRSZWZlcmVuY2UgfCBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNyZWRlbnRpYWxzX3BhcmFtZXRlcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY3JlZGVudGlhbHNQYXJhbWV0ZXIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRvbWFpbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZG9tYWluKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uQXV0aG9yaXphdGlvbkNvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jcmVkZW50aWFsc1BhcmFtZXRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jcmVkZW50aWFsc1BhcmFtZXRlciA9IHRoaXMuX2NyZWRlbnRpYWxzUGFyYW1ldGVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZG9tYWluICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRvbWFpbiA9IHRoaXMuX2RvbWFpbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uQXV0aG9yaXphdGlvbkNvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NyZWRlbnRpYWxzUGFyYW1ldGVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZG9tYWluID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jcmVkZW50aWFsc1BhcmFtZXRlciA9IHZhbHVlLmNyZWRlbnRpYWxzUGFyYW1ldGVyO1xuICAgICAgdGhpcy5fZG9tYWluID0gdmFsdWUuZG9tYWluO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNyZWRlbnRpYWxzX3BhcmFtZXRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jcmVkZW50aWFsc1BhcmFtZXRlcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3JlZGVudGlhbHNQYXJhbWV0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVkZW50aWFsc19wYXJhbWV0ZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWRlbnRpYWxzUGFyYW1ldGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jcmVkZW50aWFsc1BhcmFtZXRlciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcmVkZW50aWFsc1BhcmFtZXRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcmVkZW50aWFsc1BhcmFtZXRlcjtcbiAgfVxuXG4gIC8vIGRvbWFpbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kb21haW4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRvbWFpbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvbWFpbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZG9tYWluKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kb21haW4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG9tYWluSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jZmlsZV9zeXN0ZW1faWQgRWNzVGFza0RlZmluaXRpb24jZmlsZV9zeXN0ZW1faWR9XG4gICovXG4gIHJlYWRvbmx5IGZpbGVTeXN0ZW1JZDogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfdGFza19kZWZpbml0aW9uI3Jvb3RfZGlyZWN0b3J5IEVjc1Rhc2tEZWZpbml0aW9uI3Jvb3RfZGlyZWN0b3J5fVxuICAqL1xuICByZWFkb25seSByb290RGlyZWN0b3J5OiBzdHJpbmc7XG4gIC8qKlxuICAqIGF1dGhvcml6YXRpb25fY29uZmlnIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfdGFza19kZWZpbml0aW9uI2F1dGhvcml6YXRpb25fY29uZmlnIEVjc1Rhc2tEZWZpbml0aW9uI2F1dGhvcml6YXRpb25fY29uZmlnfVxuICAqL1xuICByZWFkb25seSBhdXRob3JpemF0aW9uQ29uZmlnOiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgRWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZmlsZV9zeXN0ZW1faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZmlsZVN5c3RlbUlkKSxcbiAgICByb290X2RpcmVjdG9yeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb290RGlyZWN0b3J5KSxcbiAgICBhdXRob3JpemF0aW9uX2NvbmZpZzogZWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRob3JpemF0aW9uQ29uZmlnKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgRWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGZpbGVfc3lzdGVtX2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5maWxlU3lzdGVtSWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHJvb3RfZGlyZWN0b3J5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yb290RGlyZWN0b3J5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBhdXRob3JpemF0aW9uX2NvbmZpZzoge1xuICAgICAgdmFsdWU6IGVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uQXV0aG9yaXphdGlvbkNvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXV0aG9yaXphdGlvbkNvbmZpZyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uQXV0aG9yaXphdGlvbkNvbmZpZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgRWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9maWxlU3lzdGVtSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmlsZVN5c3RlbUlkID0gdGhpcy5fZmlsZVN5c3RlbUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcm9vdERpcmVjdG9yeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yb290RGlyZWN0b3J5ID0gdGhpcy5fcm9vdERpcmVjdG9yeTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2F1dGhvcml6YXRpb25Db25maWc/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXV0aG9yaXphdGlvbkNvbmZpZyA9IHRoaXMuX2F1dGhvcml6YXRpb25Db25maWc/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ZpbGVTeXN0ZW1JZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jvb3REaXJlY3RvcnkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hdXRob3JpemF0aW9uQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2ZpbGVTeXN0ZW1JZCA9IHZhbHVlLmZpbGVTeXN0ZW1JZDtcbiAgICAgIHRoaXMuX3Jvb3REaXJlY3RvcnkgPSB2YWx1ZS5yb290RGlyZWN0b3J5O1xuICAgICAgdGhpcy5fYXV0aG9yaXphdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYXV0aG9yaXphdGlvbkNvbmZpZztcbiAgICB9XG4gIH1cblxuICAvLyBmaWxlX3N5c3RlbV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9maWxlU3lzdGVtSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZpbGVTeXN0ZW1JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZpbGVfc3lzdGVtX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBmaWxlU3lzdGVtSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpbGVTeXN0ZW1JZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWxlU3lzdGVtSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZVN5c3RlbUlkO1xuICB9XG5cbiAgLy8gcm9vdF9kaXJlY3RvcnkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcm9vdERpcmVjdG9yeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9vdERpcmVjdG9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jvb3RfZGlyZWN0b3J5Jyk7XG4gIH1cbiAgcHVibGljIHNldCByb290RGlyZWN0b3J5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb290RGlyZWN0b3J5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvb3REaXJlY3RvcnlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdERpcmVjdG9yeTtcbiAgfVxuXG4gIC8vIGF1dGhvcml6YXRpb25fY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2F1dGhvcml6YXRpb25Db25maWcgPSBuZXcgRWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiYXV0aG9yaXphdGlvbl9jb25maWdcIik7XG4gIHB1YmxpYyBnZXQgYXV0aG9yaXphdGlvbkNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXphdGlvbkNvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0QXV0aG9yaXphdGlvbkNvbmZpZyh2YWx1ZTogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnKSB7XG4gICAgdGhpcy5fYXV0aG9yaXphdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhvcml6YXRpb25Db25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXphdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiNob3N0X3BhdGggRWNzVGFza0RlZmluaXRpb24jaG9zdF9wYXRofVxuICAqL1xuICByZWFkb25seSBob3N0UGF0aD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiNuYW1lIEVjc1Rhc2tEZWZpbml0aW9uI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogZG9ja2VyX3ZvbHVtZV9jb25maWd1cmF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfdGFza19kZWZpbml0aW9uI2RvY2tlcl92b2x1bWVfY29uZmlndXJhdGlvbiBFY3NUYXNrRGVmaW5pdGlvbiNkb2NrZXJfdm9sdW1lX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGRvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb24/OiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZURvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb247XG4gIC8qKlxuICAqIGVmc192b2x1bWVfY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiNlZnNfdm9sdW1lX2NvbmZpZ3VyYXRpb24gRWNzVGFza0RlZmluaXRpb24jZWZzX3ZvbHVtZV9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBlZnNWb2x1bWVDb25maWd1cmF0aW9uPzogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uO1xuICAvKipcbiAgKiBmc3hfd2luZG93c19maWxlX3NlcnZlcl92b2x1bWVfY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiNmc3hfd2luZG93c19maWxlX3NlcnZlcl92b2x1bWVfY29uZmlndXJhdGlvbiBFY3NUYXNrRGVmaW5pdGlvbiNmc3hfd2luZG93c19maWxlX3NlcnZlcl92b2x1bWVfY29uZmlndXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uPzogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NUYXNrRGVmaW5pdGlvblZvbHVtZVRvVGVycmFmb3JtKHN0cnVjdD86IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaG9zdF9wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3RQYXRoKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIGRvY2tlcl92b2x1bWVfY29uZmlndXJhdGlvbjogZWNzVGFza0RlZmluaXRpb25Wb2x1bWVEb2NrZXJWb2x1bWVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5kb2NrZXJWb2x1bWVDb25maWd1cmF0aW9uKSxcbiAgICBlZnNfdm9sdW1lX2NvbmZpZ3VyYXRpb246IGVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRWZzVm9sdW1lQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZWZzVm9sdW1lQ29uZmlndXJhdGlvbiksXG4gICAgZnN4X3dpbmRvd3NfZmlsZV9zZXJ2ZXJfdm9sdW1lX2NvbmZpZ3VyYXRpb246IGVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5mc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogRWNzVGFza0RlZmluaXRpb25Wb2x1bWUgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgaG9zdF9wYXRoOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ob3N0UGF0aCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZG9ja2VyX3ZvbHVtZV9jb25maWd1cmF0aW9uOiB7XG4gICAgICB2YWx1ZTogZWNzVGFza0RlZmluaXRpb25Wb2x1bWVEb2NrZXJWb2x1bWVDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kb2NrZXJWb2x1bWVDb25maWd1cmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiRWNzVGFza0RlZmluaXRpb25Wb2x1bWVEb2NrZXJWb2x1bWVDb25maWd1cmF0aW9uTGlzdFwiLFxuICAgIH0sXG4gICAgZWZzX3ZvbHVtZV9jb25maWd1cmF0aW9uOiB7XG4gICAgICB2YWx1ZTogZWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lZnNWb2x1bWVDb25maWd1cmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiRWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uTGlzdFwiLFxuICAgIH0sXG4gICAgZnN4X3dpbmRvd3NfZmlsZV9zZXJ2ZXJfdm9sdW1lX2NvbmZpZ3VyYXRpb246IHtcbiAgICAgIHZhbHVlOiBlY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiRWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9ob3N0UGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ob3N0UGF0aCA9IHRoaXMuX2hvc3RQYXRoO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uYW1lID0gdGhpcy5fbmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZG9ja2VyVm9sdW1lQ29uZmlndXJhdGlvbiA9IHRoaXMuX2RvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lZnNWb2x1bWVDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVmc1ZvbHVtZUNvbmZpZ3VyYXRpb24gPSB0aGlzLl9lZnNWb2x1bWVDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbiA9IHRoaXMuX2ZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2hvc3RQYXRoID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Vmc1ZvbHVtZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2hvc3RQYXRoID0gdmFsdWUuaG9zdFBhdGg7XG4gICAgICB0aGlzLl9uYW1lID0gdmFsdWUubmFtZTtcbiAgICAgIHRoaXMuX2RvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmRvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb247XG4gICAgICB0aGlzLl9lZnNWb2x1bWVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5lZnNWb2x1bWVDb25maWd1cmF0aW9uO1xuICAgICAgdGhpcy5fZnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5mc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gaG9zdF9wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hvc3RQYXRoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBob3N0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RfcGF0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaG9zdFBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvc3RQYXRoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SG9zdFBhdGgoKSB7XG4gICAgdGhpcy5faG9zdFBhdGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhvc3RQYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3RQYXRoO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBkb2NrZXJfdm9sdW1lX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZG9ja2VyVm9sdW1lQ29uZmlndXJhdGlvbiA9IG5ldyBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZURvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJkb2NrZXJfdm9sdW1lX2NvbmZpZ3VyYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgZG9ja2VyVm9sdW1lQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9ja2VyVm9sdW1lQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0RG9ja2VyVm9sdW1lQ29uZmlndXJhdGlvbih2YWx1ZTogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVEb2NrZXJWb2x1bWVDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fZG9ja2VyVm9sdW1lQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RG9ja2VyVm9sdW1lQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9kb2NrZXJWb2x1bWVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9ja2VyVm9sdW1lQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZWZzX3ZvbHVtZV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Vmc1ZvbHVtZUNvbmZpZ3VyYXRpb24gPSBuZXcgRWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZWZzX3ZvbHVtZV9jb25maWd1cmF0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGVmc1ZvbHVtZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vmc1ZvbHVtZUNvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEVmc1ZvbHVtZUNvbmZpZ3VyYXRpb24odmFsdWU6IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRWZzVm9sdW1lQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2Vmc1ZvbHVtZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVmc1ZvbHVtZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fZWZzVm9sdW1lQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlZnNWb2x1bWVDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vmc1ZvbHVtZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGZzeF93aW5kb3dzX2ZpbGVfc2VydmVyX3ZvbHVtZV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbiA9IG5ldyBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImZzeF93aW5kb3dzX2ZpbGVfc2VydmVyX3ZvbHVtZV9jb25maWd1cmF0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb24odmFsdWU6IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fZnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fZnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWNzVGFza0RlZmluaXRpb25Wb2x1bWVMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZVtdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZU91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZU91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9lY3NfdGFza19kZWZpbml0aW9uIGF3c19lY3NfdGFza19kZWZpbml0aW9ufVxuKi9cbmV4cG9ydCBjbGFzcyBFY3NUYXNrRGVmaW5pdGlvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfZWNzX3Rhc2tfZGVmaW5pdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBFY3NUYXNrRGVmaW5pdGlvbiByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBFY3NUYXNrRGVmaW5pdGlvbiB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgRWNzVGFza0RlZmluaXRpb24gdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Vjc190YXNrX2RlZmluaXRpb24jaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIEVjc1Rhc2tEZWZpbml0aW9uIHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19lY3NfdGFza19kZWZpbml0aW9uXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvZWNzX3Rhc2tfZGVmaW5pdGlvbiBhd3NfZWNzX3Rhc2tfZGVmaW5pdGlvbn0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgRWNzVGFza0RlZmluaXRpb25Db25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRWNzVGFza0RlZmluaXRpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19lY3NfdGFza19kZWZpbml0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fY29udGFpbmVyRGVmaW5pdGlvbnMgPSBjb25maWcuY29udGFpbmVyRGVmaW5pdGlvbnM7XG4gICAgdGhpcy5fY3B1ID0gY29uZmlnLmNwdTtcbiAgICB0aGlzLl9leGVjdXRpb25Sb2xlQXJuID0gY29uZmlnLmV4ZWN1dGlvblJvbGVBcm47XG4gICAgdGhpcy5fZmFtaWx5ID0gY29uZmlnLmZhbWlseTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9pcGNNb2RlID0gY29uZmlnLmlwY01vZGU7XG4gICAgdGhpcy5fbWVtb3J5ID0gY29uZmlnLm1lbW9yeTtcbiAgICB0aGlzLl9uZXR3b3JrTW9kZSA9IGNvbmZpZy5uZXR3b3JrTW9kZTtcbiAgICB0aGlzLl9waWRNb2RlID0gY29uZmlnLnBpZE1vZGU7XG4gICAgdGhpcy5fcmVxdWlyZXNDb21wYXRpYmlsaXRpZXMgPSBjb25maWcucmVxdWlyZXNDb21wYXRpYmlsaXRpZXM7XG4gICAgdGhpcy5fc2tpcERlc3Ryb3kgPSBjb25maWcuc2tpcERlc3Ryb3k7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl90YXNrUm9sZUFybiA9IGNvbmZpZy50YXNrUm9sZUFybjtcbiAgICB0aGlzLl9lcGhlbWVyYWxTdG9yYWdlLmludGVybmFsVmFsdWUgPSBjb25maWcuZXBoZW1lcmFsU3RvcmFnZTtcbiAgICB0aGlzLl9pbmZlcmVuY2VBY2NlbGVyYXRvci5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmluZmVyZW5jZUFjY2VsZXJhdG9yO1xuICAgIHRoaXMuX3BsYWNlbWVudENvbnN0cmFpbnRzLmludGVybmFsVmFsdWUgPSBjb25maWcucGxhY2VtZW50Q29uc3RyYWludHM7XG4gICAgdGhpcy5fcHJveHlDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcucHJveHlDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3J1bnRpbWVQbGF0Zm9ybS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnJ1bnRpbWVQbGF0Zm9ybTtcbiAgICB0aGlzLl92b2x1bWUuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy52b2x1bWU7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY29udGFpbmVyX2RlZmluaXRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NvbnRhaW5lckRlZmluaXRpb25zPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb250YWluZXJEZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRhaW5lcl9kZWZpbml0aW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29udGFpbmVyRGVmaW5pdGlvbnModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRhaW5lckRlZmluaXRpb25zID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lckRlZmluaXRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lckRlZmluaXRpb25zO1xuICB9XG5cbiAgLy8gY3B1IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NwdT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3B1KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3B1Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjcHUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NwdSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENwdSgpIHtcbiAgICB0aGlzLl9jcHUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNwdUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcHU7XG4gIH1cblxuICAvLyBleGVjdXRpb25fcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXhlY3V0aW9uUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXhlY3V0aW9uUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4ZWN1dGlvbl9yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhlY3V0aW9uUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4ZWN1dGlvblJvbGVBcm4oKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhlY3V0aW9uUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25Sb2xlQXJuO1xuICB9XG5cbiAgLy8gZmFtaWx5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ZhbWlseT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZmFtaWx5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmFtaWx5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBmYW1pbHkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZhbWlseSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmYW1pbHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmFtaWx5O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gaXBjX21vZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaXBjTW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaXBjTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lwY19tb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpcGNNb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pcGNNb2RlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXBjTW9kZSgpIHtcbiAgICB0aGlzLl9pcGNNb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpcGNNb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lwY01vZGU7XG4gIH1cblxuICAvLyBtZW1vcnkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWVtb3J5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtZW1vcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZW1vcnknKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lbW9yeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWVtb3J5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWVtb3J5KCkge1xuICAgIHRoaXMuX21lbW9yeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWVtb3J5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lbW9yeTtcbiAgfVxuXG4gIC8vIG5ldHdvcmtfbW9kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25ldHdvcmtNb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuZXR3b3JrTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25ldHdvcmtfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmV0d29ya01vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25ldHdvcmtNb2RlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmV0d29ya01vZGUoKSB7XG4gICAgdGhpcy5fbmV0d29ya01vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5ldHdvcmtNb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25ldHdvcmtNb2RlO1xuICB9XG5cbiAgLy8gcGlkX21vZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGlkTW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGlkTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BpZF9tb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBwaWRNb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9waWRNb2RlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGlkTW9kZSgpIHtcbiAgICB0aGlzLl9waWRNb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwaWRNb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BpZE1vZGU7XG4gIH1cblxuICAvLyByZXF1aXJlc19jb21wYXRpYmlsaXRpZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVxdWlyZXNDb21wYXRpYmlsaXRpZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgcmVxdWlyZXNDb21wYXRpYmlsaXRpZXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3JlcXVpcmVzX2NvbXBhdGliaWxpdGllcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcXVpcmVzQ29tcGF0aWJpbGl0aWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3JlcXVpcmVzQ29tcGF0aWJpbGl0aWVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVxdWlyZXNDb21wYXRpYmlsaXRpZXMoKSB7XG4gICAgdGhpcy5fcmVxdWlyZXNDb21wYXRpYmlsaXRpZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcXVpcmVzQ29tcGF0aWJpbGl0aWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVzQ29tcGF0aWJpbGl0aWVzO1xuICB9XG5cbiAgLy8gcmV2aXNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXZpc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3JldmlzaW9uJyk7XG4gIH1cblxuICAvLyBza2lwX2Rlc3Ryb3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2tpcERlc3Ryb3k/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHNraXBEZXN0cm95KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3NraXBfZGVzdHJveScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2tpcERlc3Ryb3kodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3NraXBEZXN0cm95ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2tpcERlc3Ryb3koKSB7XG4gICAgdGhpcy5fc2tpcERlc3Ryb3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNraXBEZXN0cm95SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NraXBEZXN0cm95O1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB0YXNrX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Rhc2tSb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YXNrUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Rhc2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhc2tSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YXNrUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhc2tSb2xlQXJuKCkge1xuICAgIHRoaXMuX3Rhc2tSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXNrUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrUm9sZUFybjtcbiAgfVxuXG4gIC8vIGVwaGVtZXJhbF9zdG9yYWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VwaGVtZXJhbFN0b3JhZ2UgPSBuZXcgRWNzVGFza0RlZmluaXRpb25FcGhlbWVyYWxTdG9yYWdlT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZXBoZW1lcmFsX3N0b3JhZ2VcIik7XG4gIHB1YmxpYyBnZXQgZXBoZW1lcmFsU3RvcmFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXBoZW1lcmFsU3RvcmFnZTtcbiAgfVxuICBwdWJsaWMgcHV0RXBoZW1lcmFsU3RvcmFnZSh2YWx1ZTogRWNzVGFza0RlZmluaXRpb25FcGhlbWVyYWxTdG9yYWdlKSB7XG4gICAgdGhpcy5fZXBoZW1lcmFsU3RvcmFnZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXBoZW1lcmFsU3RvcmFnZSgpIHtcbiAgICB0aGlzLl9lcGhlbWVyYWxTdG9yYWdlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVwaGVtZXJhbFN0b3JhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXBoZW1lcmFsU3RvcmFnZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaW5mZXJlbmNlX2FjY2VsZXJhdG9yIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luZmVyZW5jZUFjY2VsZXJhdG9yID0gbmV3IEVjc1Rhc2tEZWZpbml0aW9uSW5mZXJlbmNlQWNjZWxlcmF0b3JMaXN0KHRoaXMsIFwiaW5mZXJlbmNlX2FjY2VsZXJhdG9yXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGluZmVyZW5jZUFjY2VsZXJhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9pbmZlcmVuY2VBY2NlbGVyYXRvcjtcbiAgfVxuICBwdWJsaWMgcHV0SW5mZXJlbmNlQWNjZWxlcmF0b3IodmFsdWU6IEVjc1Rhc2tEZWZpbml0aW9uSW5mZXJlbmNlQWNjZWxlcmF0b3JbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faW5mZXJlbmNlQWNjZWxlcmF0b3IuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluZmVyZW5jZUFjY2VsZXJhdG9yKCkge1xuICAgIHRoaXMuX2luZmVyZW5jZUFjY2VsZXJhdG9yLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluZmVyZW5jZUFjY2VsZXJhdG9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luZmVyZW5jZUFjY2VsZXJhdG9yLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBwbGFjZW1lbnRfY29uc3RyYWludHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGxhY2VtZW50Q29uc3RyYWludHMgPSBuZXcgRWNzVGFza0RlZmluaXRpb25QbGFjZW1lbnRDb25zdHJhaW50c0xpc3QodGhpcywgXCJwbGFjZW1lbnRfY29uc3RyYWludHNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcGxhY2VtZW50Q29uc3RyYWludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudENvbnN0cmFpbnRzO1xuICB9XG4gIHB1YmxpYyBwdXRQbGFjZW1lbnRDb25zdHJhaW50cyh2YWx1ZTogRWNzVGFza0RlZmluaXRpb25QbGFjZW1lbnRDb25zdHJhaW50c1tdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9wbGFjZW1lbnRDb25zdHJhaW50cy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGxhY2VtZW50Q29uc3RyYWludHMoKSB7XG4gICAgdGhpcy5fcGxhY2VtZW50Q29uc3RyYWludHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGxhY2VtZW50Q29uc3RyYWludHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50Q29uc3RyYWludHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHByb3h5X2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJveHlDb25maWd1cmF0aW9uID0gbmV3IEVjc1Rhc2tEZWZpbml0aW9uUHJveHlDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwicHJveHlfY29uZmlndXJhdGlvblwiKTtcbiAgcHVibGljIGdldCBwcm94eUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3h5Q29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0UHJveHlDb25maWd1cmF0aW9uKHZhbHVlOiBFY3NUYXNrRGVmaW5pdGlvblByb3h5Q29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX3Byb3h5Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJveHlDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3Byb3h5Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm94eUNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJveHlDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBydW50aW1lX3BsYXRmb3JtIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3J1bnRpbWVQbGF0Zm9ybSA9IG5ldyBFY3NUYXNrRGVmaW5pdGlvblJ1bnRpbWVQbGF0Zm9ybU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInJ1bnRpbWVfcGxhdGZvcm1cIik7XG4gIHB1YmxpYyBnZXQgcnVudGltZVBsYXRmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLl9ydW50aW1lUGxhdGZvcm07XG4gIH1cbiAgcHVibGljIHB1dFJ1bnRpbWVQbGF0Zm9ybSh2YWx1ZTogRWNzVGFza0RlZmluaXRpb25SdW50aW1lUGxhdGZvcm0pIHtcbiAgICB0aGlzLl9ydW50aW1lUGxhdGZvcm0uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJ1bnRpbWVQbGF0Zm9ybSgpIHtcbiAgICB0aGlzLl9ydW50aW1lUGxhdGZvcm0uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcnVudGltZVBsYXRmb3JtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bnRpbWVQbGF0Zm9ybS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdm9sdW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZvbHVtZSA9IG5ldyBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUxpc3QodGhpcywgXCJ2b2x1bWVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdm9sdW1lKCkge1xuICAgIHJldHVybiB0aGlzLl92b2x1bWU7XG4gIH1cbiAgcHVibGljIHB1dFZvbHVtZSh2YWx1ZTogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdm9sdW1lLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWb2x1bWUoKSB7XG4gICAgdGhpcy5fdm9sdW1lLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZvbHVtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92b2x1bWUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyX2RlZmluaXRpb25zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jb250YWluZXJEZWZpbml0aW9ucyksXG4gICAgICBjcHU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NwdSksXG4gICAgICBleGVjdXRpb25fcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V4ZWN1dGlvblJvbGVBcm4pLFxuICAgICAgZmFtaWx5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9mYW1pbHkpLFxuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIGlwY19tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pcGNNb2RlKSxcbiAgICAgIG1lbW9yeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbWVtb3J5KSxcbiAgICAgIG5ldHdvcmtfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmV0d29ya01vZGUpLFxuICAgICAgcGlkX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3BpZE1vZGUpLFxuICAgICAgcmVxdWlyZXNfY29tcGF0aWJpbGl0aWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fcmVxdWlyZXNDb21wYXRpYmlsaXRpZXMpLFxuICAgICAgc2tpcF9kZXN0cm95OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc2tpcERlc3Ryb3kpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB0YXNrX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90YXNrUm9sZUFybiksXG4gICAgICBlcGhlbWVyYWxfc3RvcmFnZTogZWNzVGFza0RlZmluaXRpb25FcGhlbWVyYWxTdG9yYWdlVG9UZXJyYWZvcm0odGhpcy5fZXBoZW1lcmFsU3RvcmFnZS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGluZmVyZW5jZV9hY2NlbGVyYXRvcjogY2RrdGYubGlzdE1hcHBlcihlY3NUYXNrRGVmaW5pdGlvbkluZmVyZW5jZUFjY2VsZXJhdG9yVG9UZXJyYWZvcm0sIHRydWUpKHRoaXMuX2luZmVyZW5jZUFjY2VsZXJhdG9yLmludGVybmFsVmFsdWUpLFxuICAgICAgcGxhY2VtZW50X2NvbnN0cmFpbnRzOiBjZGt0Zi5saXN0TWFwcGVyKGVjc1Rhc2tEZWZpbml0aW9uUGxhY2VtZW50Q29uc3RyYWludHNUb1RlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fcGxhY2VtZW50Q29uc3RyYWludHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBwcm94eV9jb25maWd1cmF0aW9uOiBlY3NUYXNrRGVmaW5pdGlvblByb3h5Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX3Byb3h5Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHJ1bnRpbWVfcGxhdGZvcm06IGVjc1Rhc2tEZWZpbml0aW9uUnVudGltZVBsYXRmb3JtVG9UZXJyYWZvcm0odGhpcy5fcnVudGltZVBsYXRmb3JtLmludGVybmFsVmFsdWUpLFxuICAgICAgdm9sdW1lOiBjZGt0Zi5saXN0TWFwcGVyKGVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lVG9UZXJyYWZvcm0sIHRydWUpKHRoaXMuX3ZvbHVtZS5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGNvbnRhaW5lcl9kZWZpbml0aW9uczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fY29udGFpbmVyRGVmaW5pdGlvbnMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBjcHU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2NwdSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGV4ZWN1dGlvbl9yb2xlX2Fybjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZXhlY3V0aW9uUm9sZUFybiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGZhbWlseToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZmFtaWx5KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaXBjX21vZGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lwY01vZGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBtZW1vcnk6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX21lbW9yeSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG5ldHdvcmtfbW9kZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbmV0d29ya01vZGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBwaWRfbW9kZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fcGlkTW9kZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHJlcXVpcmVzX2NvbXBhdGliaWxpdGllczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3JlcXVpcmVzQ29tcGF0aWJpbGl0aWVzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHNraXBfZGVzdHJveToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX3NraXBEZXN0cm95KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHRhZ3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0YWdzX2FsbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHRhc2tfcm9sZV9hcm46IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3Rhc2tSb2xlQXJuKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgZXBoZW1lcmFsX3N0b3JhZ2U6IHtcbiAgICAgICAgdmFsdWU6IGVjc1Rhc2tEZWZpbml0aW9uRXBoZW1lcmFsU3RvcmFnZVRvSGNsVGVycmFmb3JtKHRoaXMuX2VwaGVtZXJhbFN0b3JhZ2UuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkVjc1Rhc2tEZWZpbml0aW9uRXBoZW1lcmFsU3RvcmFnZUxpc3RcIixcbiAgICAgIH0sXG4gICAgICBpbmZlcmVuY2VfYWNjZWxlcmF0b3I6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woZWNzVGFza0RlZmluaXRpb25JbmZlcmVuY2VBY2NlbGVyYXRvclRvSGNsVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9pbmZlcmVuY2VBY2NlbGVyYXRvci5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJFY3NUYXNrRGVmaW5pdGlvbkluZmVyZW5jZUFjY2VsZXJhdG9yTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHBsYWNlbWVudF9jb25zdHJhaW50czoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChlY3NUYXNrRGVmaW5pdGlvblBsYWNlbWVudENvbnN0cmFpbnRzVG9IY2xUZXJyYWZvcm0sIHRydWUpKHRoaXMuX3BsYWNlbWVudENvbnN0cmFpbnRzLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkVjc1Rhc2tEZWZpbml0aW9uUGxhY2VtZW50Q29uc3RyYWludHNMaXN0XCIsXG4gICAgICB9LFxuICAgICAgcHJveHlfY29uZmlndXJhdGlvbjoge1xuICAgICAgICB2YWx1ZTogZWNzVGFza0RlZmluaXRpb25Qcm94eUNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybSh0aGlzLl9wcm94eUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkVjc1Rhc2tEZWZpbml0aW9uUHJveHlDb25maWd1cmF0aW9uTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHJ1bnRpbWVfcGxhdGZvcm06IHtcbiAgICAgICAgdmFsdWU6IGVjc1Rhc2tEZWZpbml0aW9uUnVudGltZVBsYXRmb3JtVG9IY2xUZXJyYWZvcm0odGhpcy5fcnVudGltZVBsYXRmb3JtLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJFY3NUYXNrRGVmaW5pdGlvblJ1bnRpbWVQbGF0Zm9ybUxpc3RcIixcbiAgICAgIH0sXG4gICAgICB2b2x1bWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woZWNzVGFza0RlZmluaXRpb25Wb2x1bWVUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fdm9sdW1lLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lTGlzdFwiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19