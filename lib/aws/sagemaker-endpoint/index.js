"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SagemakerEndpoint = exports.SagemakerEndpointDeploymentConfigOutputReference = exports.sagemakerEndpointDeploymentConfigToHclTerraform = exports.sagemakerEndpointDeploymentConfigToTerraform = exports.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference = exports.sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyToHclTerraform = exports.sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyToTerraform = exports.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference = exports.sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToHclTerraform = exports.sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToTerraform = exports.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference = exports.sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToHclTerraform = exports.sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToTerraform = exports.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference = exports.sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToHclTerraform = exports.sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToTerraform = exports.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference = exports.sagemakerEndpointDeploymentConfigAutoRollbackConfigurationToHclTerraform = exports.sagemakerEndpointDeploymentConfigAutoRollbackConfigurationToTerraform = exports.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList = exports.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference = exports.sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsToHclTerraform = exports.sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        alarm_name: cdktf.stringToTerraform(struct.alarmName),
    };
}
exports.sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform = sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform;
function sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        alarm_name: {
            value: cdktf.stringToHclTerraform(struct.alarmName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsToHclTerraform = sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsToHclTerraform;
class SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference extends cdktf.ComplexObject {
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
        if (this._alarmName !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmName = this._alarmName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmName = value.alarmName;
        }
    }
    get alarmName() {
        return this.getStringAttribute('alarm_name');
    }
    set alarmName(value) {
        this._alarmName = value;
    }
    // Temporarily expose input value. Use with caution.
    get alarmNameInput() {
        return this._alarmName;
    }
}
exports.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference = SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference[_a] = { fqn: "@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference", version: "0.0.0" };
class SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList extends cdktf.ComplexList {
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
        return new SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList = SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList;
_b = JSII_RTTI_SYMBOL_1;
SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList[_b] = { fqn: "@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList", version: "0.0.0" };
function sagemakerEndpointDeploymentConfigAutoRollbackConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        alarms: cdktf.listMapper(sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform, true)(struct.alarms),
    };
}
exports.sagemakerEndpointDeploymentConfigAutoRollbackConfigurationToTerraform = sagemakerEndpointDeploymentConfigAutoRollbackConfigurationToTerraform;
function sagemakerEndpointDeploymentConfigAutoRollbackConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        alarms: {
            value: cdktf.listMapperHcl(sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsToHclTerraform, true)(struct.alarms),
            isBlock: true,
            type: "set",
            storageClassType: "SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerEndpointDeploymentConfigAutoRollbackConfigurationToHclTerraform = sagemakerEndpointDeploymentConfigAutoRollbackConfigurationToHclTerraform;
class SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // alarms - computed: false, optional: true, required: false
        this._alarms = new SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList(this, "alarms", true);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._alarms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarms = this._alarms?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._alarms.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._alarms.internalValue = value.alarms;
        }
    }
    get alarms() {
        return this._alarms;
    }
    putAlarms(value) {
        this._alarms.internalValue = value;
    }
    resetAlarms() {
        this._alarms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get alarmsInput() {
        return this._alarms.internalValue;
    }
}
exports.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference = SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference[_c] = { fqn: "@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference", version: "0.0.0" };
function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToTerraform = sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToTerraform;
function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToHclTerraform(struct) {
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
        value: {
            value: cdktf.numberToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToHclTerraform = sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToHclTerraform;
class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference extends cdktf.ComplexObject {
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
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._type = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._type = value.type;
            this._value = value.value;
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
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
exports.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference = SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference;
_d = JSII_RTTI_SYMBOL_1;
SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference[_d] = { fqn: "@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference", version: "0.0.0" };
function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.numberToTerraform(struct.value),
    };
}
exports.sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToTerraform = sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToTerraform;
function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToHclTerraform(struct) {
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
        value: {
            value: cdktf.numberToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToHclTerraform = sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToHclTerraform;
class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference extends cdktf.ComplexObject {
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
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._type = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._type = value.type;
            this._value = value.value;
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
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
exports.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference = SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference;
_e = JSII_RTTI_SYMBOL_1;
SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference[_e] = { fqn: "@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference", version: "0.0.0" };
function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        wait_interval_in_seconds: cdktf.numberToTerraform(struct.waitIntervalInSeconds),
        canary_size: sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToTerraform(struct.canarySize),
        linear_step_size: sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToTerraform(struct.linearStepSize),
    };
}
exports.sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToTerraform = sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToTerraform;
function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToHclTerraform(struct) {
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
        wait_interval_in_seconds: {
            value: cdktf.numberToHclTerraform(struct.waitIntervalInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        canary_size: {
            value: sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToHclTerraform(struct.canarySize),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeList",
        },
        linear_step_size: {
            value: sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToHclTerraform(struct.linearStepSize),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToHclTerraform = sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToHclTerraform;
class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // canary_size - computed: false, optional: true, required: false
        this._canarySize = new SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference(this, "canary_size");
        // linear_step_size - computed: false, optional: true, required: false
        this._linearStepSize = new SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference(this, "linear_step_size");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._waitIntervalInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.waitIntervalInSeconds = this._waitIntervalInSeconds;
        }
        if (this._canarySize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.canarySize = this._canarySize?.internalValue;
        }
        if (this._linearStepSize?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.linearStepSize = this._linearStepSize?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._type = undefined;
            this._waitIntervalInSeconds = undefined;
            this._canarySize.internalValue = undefined;
            this._linearStepSize.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._type = value.type;
            this._waitIntervalInSeconds = value.waitIntervalInSeconds;
            this._canarySize.internalValue = value.canarySize;
            this._linearStepSize.internalValue = value.linearStepSize;
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
    get waitIntervalInSeconds() {
        return this.getNumberAttribute('wait_interval_in_seconds');
    }
    set waitIntervalInSeconds(value) {
        this._waitIntervalInSeconds = value;
    }
    // Temporarily expose input value. Use with caution.
    get waitIntervalInSecondsInput() {
        return this._waitIntervalInSeconds;
    }
    get canarySize() {
        return this._canarySize;
    }
    putCanarySize(value) {
        this._canarySize.internalValue = value;
    }
    resetCanarySize() {
        this._canarySize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get canarySizeInput() {
        return this._canarySize.internalValue;
    }
    get linearStepSize() {
        return this._linearStepSize;
    }
    putLinearStepSize(value) {
        this._linearStepSize.internalValue = value;
    }
    resetLinearStepSize() {
        this._linearStepSize.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get linearStepSizeInput() {
        return this._linearStepSize.internalValue;
    }
}
exports.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference = SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference;
_f = JSII_RTTI_SYMBOL_1;
SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference[_f] = { fqn: "@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference", version: "0.0.0" };
function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        maximum_execution_timeout_in_seconds: cdktf.numberToTerraform(struct.maximumExecutionTimeoutInSeconds),
        termination_wait_in_seconds: cdktf.numberToTerraform(struct.terminationWaitInSeconds),
        traffic_routing_configuration: sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToTerraform(struct.trafficRoutingConfiguration),
    };
}
exports.sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyToTerraform = sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyToTerraform;
function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        maximum_execution_timeout_in_seconds: {
            value: cdktf.numberToHclTerraform(struct.maximumExecutionTimeoutInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        termination_wait_in_seconds: {
            value: cdktf.numberToHclTerraform(struct.terminationWaitInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        traffic_routing_configuration: {
            value: sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToHclTerraform(struct.trafficRoutingConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyToHclTerraform = sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyToHclTerraform;
class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // traffic_routing_configuration - computed: false, optional: false, required: true
        this._trafficRoutingConfiguration = new SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference(this, "traffic_routing_configuration");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._maximumExecutionTimeoutInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumExecutionTimeoutInSeconds = this._maximumExecutionTimeoutInSeconds;
        }
        if (this._terminationWaitInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.terminationWaitInSeconds = this._terminationWaitInSeconds;
        }
        if (this._trafficRoutingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trafficRoutingConfiguration = this._trafficRoutingConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maximumExecutionTimeoutInSeconds = undefined;
            this._terminationWaitInSeconds = undefined;
            this._trafficRoutingConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maximumExecutionTimeoutInSeconds = value.maximumExecutionTimeoutInSeconds;
            this._terminationWaitInSeconds = value.terminationWaitInSeconds;
            this._trafficRoutingConfiguration.internalValue = value.trafficRoutingConfiguration;
        }
    }
    get maximumExecutionTimeoutInSeconds() {
        return this.getNumberAttribute('maximum_execution_timeout_in_seconds');
    }
    set maximumExecutionTimeoutInSeconds(value) {
        this._maximumExecutionTimeoutInSeconds = value;
    }
    resetMaximumExecutionTimeoutInSeconds() {
        this._maximumExecutionTimeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maximumExecutionTimeoutInSecondsInput() {
        return this._maximumExecutionTimeoutInSeconds;
    }
    get terminationWaitInSeconds() {
        return this.getNumberAttribute('termination_wait_in_seconds');
    }
    set terminationWaitInSeconds(value) {
        this._terminationWaitInSeconds = value;
    }
    resetTerminationWaitInSeconds() {
        this._terminationWaitInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get terminationWaitInSecondsInput() {
        return this._terminationWaitInSeconds;
    }
    get trafficRoutingConfiguration() {
        return this._trafficRoutingConfiguration;
    }
    putTrafficRoutingConfiguration(value) {
        this._trafficRoutingConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get trafficRoutingConfigurationInput() {
        return this._trafficRoutingConfiguration.internalValue;
    }
}
exports.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference = SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference;
_g = JSII_RTTI_SYMBOL_1;
SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference[_g] = { fqn: "@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference", version: "0.0.0" };
function sagemakerEndpointDeploymentConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auto_rollback_configuration: sagemakerEndpointDeploymentConfigAutoRollbackConfigurationToTerraform(struct.autoRollbackConfiguration),
        blue_green_update_policy: sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyToTerraform(struct.blueGreenUpdatePolicy),
    };
}
exports.sagemakerEndpointDeploymentConfigToTerraform = sagemakerEndpointDeploymentConfigToTerraform;
function sagemakerEndpointDeploymentConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        auto_rollback_configuration: {
            value: sagemakerEndpointDeploymentConfigAutoRollbackConfigurationToHclTerraform(struct.autoRollbackConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerEndpointDeploymentConfigAutoRollbackConfigurationList",
        },
        blue_green_update_policy: {
            value: sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyToHclTerraform(struct.blueGreenUpdatePolicy),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerEndpointDeploymentConfigToHclTerraform = sagemakerEndpointDeploymentConfigToHclTerraform;
class SagemakerEndpointDeploymentConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // auto_rollback_configuration - computed: false, optional: true, required: false
        this._autoRollbackConfiguration = new SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference(this, "auto_rollback_configuration");
        // blue_green_update_policy - computed: false, optional: false, required: true
        this._blueGreenUpdatePolicy = new SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference(this, "blue_green_update_policy");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._autoRollbackConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoRollbackConfiguration = this._autoRollbackConfiguration?.internalValue;
        }
        if (this._blueGreenUpdatePolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.blueGreenUpdatePolicy = this._blueGreenUpdatePolicy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._autoRollbackConfiguration.internalValue = undefined;
            this._blueGreenUpdatePolicy.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._autoRollbackConfiguration.internalValue = value.autoRollbackConfiguration;
            this._blueGreenUpdatePolicy.internalValue = value.blueGreenUpdatePolicy;
        }
    }
    get autoRollbackConfiguration() {
        return this._autoRollbackConfiguration;
    }
    putAutoRollbackConfiguration(value) {
        this._autoRollbackConfiguration.internalValue = value;
    }
    resetAutoRollbackConfiguration() {
        this._autoRollbackConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoRollbackConfigurationInput() {
        return this._autoRollbackConfiguration.internalValue;
    }
    get blueGreenUpdatePolicy() {
        return this._blueGreenUpdatePolicy;
    }
    putBlueGreenUpdatePolicy(value) {
        this._blueGreenUpdatePolicy.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get blueGreenUpdatePolicyInput() {
        return this._blueGreenUpdatePolicy.internalValue;
    }
}
exports.SagemakerEndpointDeploymentConfigOutputReference = SagemakerEndpointDeploymentConfigOutputReference;
_h = JSII_RTTI_SYMBOL_1;
SagemakerEndpointDeploymentConfigOutputReference[_h] = { fqn: "@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint aws_sagemaker_endpoint}
*/
class SagemakerEndpoint extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SagemakerEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerEndpoint to import
    * @param importFromId The id of the existing SagemakerEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerEndpoint to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_endpoint", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint aws_sagemaker_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerEndpointConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_sagemaker_endpoint',
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
        // deployment_config - computed: false, optional: true, required: false
        this._deploymentConfig = new SagemakerEndpointDeploymentConfigOutputReference(this, "deployment_config");
        this._endpointConfigName = config.endpointConfigName;
        this._id = config.id;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._deploymentConfig.internalValue = config.deploymentConfig;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get endpointConfigName() {
        return this.getStringAttribute('endpoint_config_name');
    }
    set endpointConfigName(value) {
        this._endpointConfigName = value;
    }
    // Temporarily expose input value. Use with caution.
    get endpointConfigNameInput() {
        return this._endpointConfigName;
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
    get deploymentConfig() {
        return this._deploymentConfig;
    }
    putDeploymentConfig(value) {
        this._deploymentConfig.internalValue = value;
    }
    resetDeploymentConfig() {
        this._deploymentConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deploymentConfigInput() {
        return this._deploymentConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            endpoint_config_name: cdktf.stringToTerraform(this._endpointConfigName),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            deployment_config: sagemakerEndpointDeploymentConfigToTerraform(this._deploymentConfig.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            endpoint_config_name: {
                value: cdktf.stringToHclTerraform(this._endpointConfigName),
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
            deployment_config: {
                value: sagemakerEndpointDeploymentConfigToHclTerraform(this._deploymentConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "SagemakerEndpointDeploymentConfigList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.SagemakerEndpoint = SagemakerEndpoint;
_j = JSII_RTTI_SYMBOL_1;
SagemakerEndpoint[_j] = { fqn: "@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
SagemakerEndpoint.tfResourceType = "aws_sagemaker_endpoint";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3NhZ2VtYWtlci1lbmRwb2ludC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQTBDL0IsU0FBZ0IsMkVBQTJFLENBQUMsTUFBNkY7SUFDdkwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztLQUN2RCxDQUFBO0FBQ0gsQ0FBQztBQVJELGtLQVFDO0FBR0QsU0FBZ0IsOEVBQThFLENBQUMsTUFBNkY7SUFDMUwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWixVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7WUFDcEQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJ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UTthQUMzQjtZQUNELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNsRSxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSztnQkFDWCxnQkFBZ0IsRUFBRSxXQUFXO2FBQzlCO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLEtBQUssRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3JFLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2dCQUNYLGdCQUFnQixFQUFFLFdBQVc7YUFDOUI7WUFDRCxpQkFBaUIsRUFBRTtnQkFDakIsS0FBSyxFQUFFLCtDQUErQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7Z0JBQzVGLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLGdCQUFnQixFQUFFLHVDQUF1QzthQUMxRDtTQUNGLENBQUM7UUFFRiw4QkFBOEI7UUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUUsQ0FBQyxDQUFBO0lBQzVILENBQUM7O0FBdk5ILDhDQXdOQzs7O0FBdE5DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csZ0NBQWMsR0FBRyx3QkFBd0IsQUFBM0IsQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZW5kcG9pbnRcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJFbmRwb2ludENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZW5kcG9pbnQjZW5kcG9pbnRfY29uZmlnX25hbWUgU2FnZW1ha2VyRW5kcG9pbnQjZW5kcG9pbnRfY29uZmlnX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IGVuZHBvaW50Q29uZmlnTmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZW5kcG9pbnQjaWQgU2FnZW1ha2VyRW5kcG9pbnQjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludCNuYW1lIFNhZ2VtYWtlckVuZHBvaW50I25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludCN0YWdzIFNhZ2VtYWtlckVuZHBvaW50I3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZW5kcG9pbnQjdGFnc19hbGwgU2FnZW1ha2VyRW5kcG9pbnQjdGFnc19hbGx9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBkZXBsb3ltZW50X2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50I2RlcGxveW1lbnRfY29uZmlnIFNhZ2VtYWtlckVuZHBvaW50I2RlcGxveW1lbnRfY29uZmlnfVxuICAqL1xuICByZWFkb25seSBkZXBsb3ltZW50Q29uZmlnPzogU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnO1xufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uQWxhcm1zIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50I2FsYXJtX25hbWUgU2FnZW1ha2VyRW5kcG9pbnQjYWxhcm1fbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgYWxhcm1OYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uQWxhcm1zVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbkFsYXJtcyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFsYXJtX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWxhcm1OYW1lKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uQWxhcm1zVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbkFsYXJtcyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhbGFybV9uYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hbGFybU5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbkFsYXJtc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uQWxhcm1zIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hbGFybU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWxhcm1OYW1lID0gdGhpcy5fYWxhcm1OYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbkFsYXJtcyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hbGFybU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYWxhcm1OYW1lID0gdmFsdWUuYWxhcm1OYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFsYXJtX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWxhcm1OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhbGFybU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbGFybV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGFybU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FsYXJtTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGFybU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxhcm1OYW1lO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uQWxhcm1zTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbkFsYXJtc1tdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uQWxhcm1zT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb25BbGFybXNPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogYWxhcm1zIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZW5kcG9pbnQjYWxhcm1zIFNhZ2VtYWtlckVuZHBvaW50I2FsYXJtc31cbiAgKi9cbiAgcmVhZG9ubHkgYWxhcm1zPzogU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbkFsYXJtc1tdIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWxhcm1zOiBjZGt0Zi5saXN0TWFwcGVyKHNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb25BbGFybXNUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5hbGFybXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYWxhcm1zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChzYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uQWxhcm1zVG9IY2xUZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuYWxhcm1zKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uQWxhcm1zTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hbGFybXM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWxhcm1zID0gdGhpcy5fYWxhcm1zPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FsYXJtcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hbGFybXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFsYXJtcztcbiAgICB9XG4gIH1cblxuICAvLyBhbGFybXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxhcm1zID0gbmV3IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb25BbGFybXNMaXN0KHRoaXMsIFwiYWxhcm1zXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGFsYXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxhcm1zO1xuICB9XG4gIHB1YmxpYyBwdXRBbGFybXModmFsdWU6IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb25BbGFybXNbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYWxhcm1zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGFybXMoKSB7XG4gICAgdGhpcy5fYWxhcm1zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsYXJtc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGFybXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3lUcmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb25DYW5hcnlTaXplIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50I3R5cGUgU2FnZW1ha2VyRW5kcG9pbnQjdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZW5kcG9pbnQjdmFsdWUgU2FnZW1ha2VyRW5kcG9pbnQjdmFsdWV9XG4gICovXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3lUcmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb25DYW5hcnlTaXplVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uQ2FuYXJ5U2l6ZU91dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbkNhbmFyeVNpemUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uQ2FuYXJ5U2l6ZVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbkNhbmFyeVNpemVPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3lUcmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb25DYW5hcnlTaXplKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICB0eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uQ2FuYXJ5U2l6ZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uQ2FuYXJ5U2l6ZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fdHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50eXBlID0gdGhpcy5fdHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3lUcmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb25DYW5hcnlTaXplIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl90eXBlID0gdmFsdWUudHlwZTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92YWx1ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbkxpbmVhclN0ZXBTaXplIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50I3R5cGUgU2FnZW1ha2VyRW5kcG9pbnQjdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZW5kcG9pbnQjdmFsdWUgU2FnZW1ha2VyRW5kcG9pbnQjdmFsdWV9XG4gICovXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3lUcmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb25MaW5lYXJTdGVwU2l6ZVRvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbkxpbmVhclN0ZXBTaXplT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uTGluZWFyU3RlcFNpemUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uTGluZWFyU3RlcFNpemVUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3lUcmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb25MaW5lYXJTdGVwU2l6ZU91dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbkxpbmVhclN0ZXBTaXplKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICB0eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uTGluZWFyU3RlcFNpemVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbkxpbmVhclN0ZXBTaXplIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl90eXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnR5cGUgPSB0aGlzLl90eXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbkxpbmVhclN0ZXBTaXplIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl90eXBlID0gdmFsdWUudHlwZTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92YWx1ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludCN0eXBlIFNhZ2VtYWtlckVuZHBvaW50I3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50I3dhaXRfaW50ZXJ2YWxfaW5fc2Vjb25kcyBTYWdlbWFrZXJFbmRwb2ludCN3YWl0X2ludGVydmFsX2luX3NlY29uZHN9XG4gICovXG4gIHJlYWRvbmx5IHdhaXRJbnRlcnZhbEluU2Vjb25kczogbnVtYmVyO1xuICAvKipcbiAgKiBjYW5hcnlfc2l6ZSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50I2NhbmFyeV9zaXplIFNhZ2VtYWtlckVuZHBvaW50I2NhbmFyeV9zaXplfVxuICAqL1xuICByZWFkb25seSBjYW5hcnlTaXplPzogU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uQ2FuYXJ5U2l6ZTtcbiAgLyoqXG4gICogbGluZWFyX3N0ZXBfc2l6ZSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50I2xpbmVhcl9zdGVwX3NpemUgU2FnZW1ha2VyRW5kcG9pbnQjbGluZWFyX3N0ZXBfc2l6ZX1cbiAgKi9cbiAgcmVhZG9ubHkgbGluZWFyU3RlcFNpemU/OiBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3lUcmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb25MaW5lYXJTdGVwU2l6ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICAgIHdhaXRfaW50ZXJ2YWxfaW5fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS53YWl0SW50ZXJ2YWxJblNlY29uZHMpLFxuICAgIGNhbmFyeV9zaXplOiBzYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3lUcmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb25DYW5hcnlTaXplVG9UZXJyYWZvcm0oc3RydWN0IS5jYW5hcnlTaXplKSxcbiAgICBsaW5lYXJfc3RlcF9zaXplOiBzYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3lUcmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb25MaW5lYXJTdGVwU2l6ZVRvVGVycmFmb3JtKHN0cnVjdCEubGluZWFyU3RlcFNpemUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgd2FpdF9pbnRlcnZhbF9pbl9zZWNvbmRzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS53YWl0SW50ZXJ2YWxJblNlY29uZHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIGNhbmFyeV9zaXplOiB7XG4gICAgICB2YWx1ZTogc2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uQ2FuYXJ5U2l6ZVRvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2FuYXJ5U2l6ZSksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbkNhbmFyeVNpemVMaXN0XCIsXG4gICAgfSxcbiAgICBsaW5lYXJfc3RlcF9zaXplOiB7XG4gICAgICB2YWx1ZTogc2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uTGluZWFyU3RlcFNpemVUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxpbmVhclN0ZXBTaXplKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uTGluZWFyU3RlcFNpemVMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl90eXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnR5cGUgPSB0aGlzLl90eXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fd2FpdEludGVydmFsSW5TZWNvbmRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LndhaXRJbnRlcnZhbEluU2Vjb25kcyA9IHRoaXMuX3dhaXRJbnRlcnZhbEluU2Vjb25kcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NhbmFyeVNpemU/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2FuYXJ5U2l6ZSA9IHRoaXMuX2NhbmFyeVNpemU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9saW5lYXJTdGVwU2l6ZT8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5saW5lYXJTdGVwU2l6ZSA9IHRoaXMuX2xpbmVhclN0ZXBTaXplPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3dhaXRJbnRlcnZhbEluU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NhbmFyeVNpemUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xpbmVhclN0ZXBTaXplLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZS50eXBlO1xuICAgICAgdGhpcy5fd2FpdEludGVydmFsSW5TZWNvbmRzID0gdmFsdWUud2FpdEludGVydmFsSW5TZWNvbmRzO1xuICAgICAgdGhpcy5fY2FuYXJ5U2l6ZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY2FuYXJ5U2l6ZTtcbiAgICAgIHRoaXMuX2xpbmVhclN0ZXBTaXplLmludGVybmFsVmFsdWUgPSB2YWx1ZS5saW5lYXJTdGVwU2l6ZTtcbiAgICB9XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIC8vIHdhaXRfaW50ZXJ2YWxfaW5fc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF93YWl0SW50ZXJ2YWxJblNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHdhaXRJbnRlcnZhbEluU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3dhaXRfaW50ZXJ2YWxfaW5fc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgd2FpdEludGVydmFsSW5TZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl93YWl0SW50ZXJ2YWxJblNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2FpdEludGVydmFsSW5TZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dhaXRJbnRlcnZhbEluU2Vjb25kcztcbiAgfVxuXG4gIC8vIGNhbmFyeV9zaXplIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NhbmFyeVNpemUgPSBuZXcgU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uQ2FuYXJ5U2l6ZU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImNhbmFyeV9zaXplXCIpO1xuICBwdWJsaWMgZ2V0IGNhbmFyeVNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbmFyeVNpemU7XG4gIH1cbiAgcHVibGljIHB1dENhbmFyeVNpemUodmFsdWU6IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbkNhbmFyeVNpemUpIHtcbiAgICB0aGlzLl9jYW5hcnlTaXplLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYW5hcnlTaXplKCkge1xuICAgIHRoaXMuX2NhbmFyeVNpemUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2FuYXJ5U2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYW5hcnlTaXplLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBsaW5lYXJfc3RlcF9zaXplIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xpbmVhclN0ZXBTaXplID0gbmV3IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbkxpbmVhclN0ZXBTaXplT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwibGluZWFyX3N0ZXBfc2l6ZVwiKTtcbiAgcHVibGljIGdldCBsaW5lYXJTdGVwU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGluZWFyU3RlcFNpemU7XG4gIH1cbiAgcHVibGljIHB1dExpbmVhclN0ZXBTaXplKHZhbHVlOiBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3lUcmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb25MaW5lYXJTdGVwU2l6ZSkge1xuICAgIHRoaXMuX2xpbmVhclN0ZXBTaXplLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMaW5lYXJTdGVwU2l6ZSgpIHtcbiAgICB0aGlzLl9saW5lYXJTdGVwU2l6ZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsaW5lYXJTdGVwU2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9saW5lYXJTdGVwU2l6ZS5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludCNtYXhpbXVtX2V4ZWN1dGlvbl90aW1lb3V0X2luX3NlY29uZHMgU2FnZW1ha2VyRW5kcG9pbnQjbWF4aW11bV9leGVjdXRpb25fdGltZW91dF9pbl9zZWNvbmRzfVxuICAqL1xuICByZWFkb25seSBtYXhpbXVtRXhlY3V0aW9uVGltZW91dEluU2Vjb25kcz86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50I3Rlcm1pbmF0aW9uX3dhaXRfaW5fc2Vjb25kcyBTYWdlbWFrZXJFbmRwb2ludCN0ZXJtaW5hdGlvbl93YWl0X2luX3NlY29uZHN9XG4gICovXG4gIHJlYWRvbmx5IHRlcm1pbmF0aW9uV2FpdEluU2Vjb25kcz86IG51bWJlcjtcbiAgLyoqXG4gICogdHJhZmZpY19yb3V0aW5nX2NvbmZpZ3VyYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludCN0cmFmZmljX3JvdXRpbmdfY29uZmlndXJhdGlvbiBTYWdlbWFrZXJFbmRwb2ludCN0cmFmZmljX3JvdXRpbmdfY29uZmlndXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgdHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uOiBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3lUcmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3lPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWF4aW11bV9leGVjdXRpb25fdGltZW91dF9pbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heGltdW1FeGVjdXRpb25UaW1lb3V0SW5TZWNvbmRzKSxcbiAgICB0ZXJtaW5hdGlvbl93YWl0X2luX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGVybWluYXRpb25XYWl0SW5TZWNvbmRzKSxcbiAgICB0cmFmZmljX3JvdXRpbmdfY29uZmlndXJhdGlvbjogc2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS50cmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeU91dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbWF4aW11bV9leGVjdXRpb25fdGltZW91dF9pbl9zZWNvbmRzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tYXhpbXVtRXhlY3V0aW9uVGltZW91dEluU2Vjb25kcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgdGVybWluYXRpb25fd2FpdF9pbl9zZWNvbmRzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50ZXJtaW5hdGlvbldhaXRJblNlY29uZHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHRyYWZmaWNfcm91dGluZ19jb25maWd1cmF0aW9uOiB7XG4gICAgICB2YWx1ZTogc2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50cmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3lUcmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tYXhpbXVtRXhlY3V0aW9uVGltZW91dEluU2Vjb25kcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhpbXVtRXhlY3V0aW9uVGltZW91dEluU2Vjb25kcyA9IHRoaXMuX21heGltdW1FeGVjdXRpb25UaW1lb3V0SW5TZWNvbmRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGVybWluYXRpb25XYWl0SW5TZWNvbmRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRlcm1pbmF0aW9uV2FpdEluU2Vjb25kcyA9IHRoaXMuX3Rlcm1pbmF0aW9uV2FpdEluU2Vjb25kcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50cmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb24gPSB0aGlzLl90cmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3kgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9tYXhpbXVtRXhlY3V0aW9uVGltZW91dEluU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Rlcm1pbmF0aW9uV2FpdEluU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXhpbXVtRXhlY3V0aW9uVGltZW91dEluU2Vjb25kcyA9IHZhbHVlLm1heGltdW1FeGVjdXRpb25UaW1lb3V0SW5TZWNvbmRzO1xuICAgICAgdGhpcy5fdGVybWluYXRpb25XYWl0SW5TZWNvbmRzID0gdmFsdWUudGVybWluYXRpb25XYWl0SW5TZWNvbmRzO1xuICAgICAgdGhpcy5fdHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS50cmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gbWF4aW11bV9leGVjdXRpb25fdGltZW91dF9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heGltdW1FeGVjdXRpb25UaW1lb3V0SW5TZWNvbmRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhpbXVtRXhlY3V0aW9uVGltZW91dEluU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heGltdW1fZXhlY3V0aW9uX3RpbWVvdXRfaW5fc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4aW11bUV4ZWN1dGlvblRpbWVvdXRJblNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heGltdW1FeGVjdXRpb25UaW1lb3V0SW5TZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4aW11bUV4ZWN1dGlvblRpbWVvdXRJblNlY29uZHMoKSB7XG4gICAgdGhpcy5fbWF4aW11bUV4ZWN1dGlvblRpbWVvdXRJblNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heGltdW1FeGVjdXRpb25UaW1lb3V0SW5TZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heGltdW1FeGVjdXRpb25UaW1lb3V0SW5TZWNvbmRzO1xuICB9XG5cbiAgLy8gdGVybWluYXRpb25fd2FpdF9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Rlcm1pbmF0aW9uV2FpdEluU2Vjb25kcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGVybWluYXRpb25XYWl0SW5TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGVybWluYXRpb25fd2FpdF9pbl9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0ZXJtaW5hdGlvbldhaXRJblNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3Rlcm1pbmF0aW9uV2FpdEluU2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRlcm1pbmF0aW9uV2FpdEluU2Vjb25kcygpIHtcbiAgICB0aGlzLl90ZXJtaW5hdGlvbldhaXRJblNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRlcm1pbmF0aW9uV2FpdEluU2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZXJtaW5hdGlvbldhaXRJblNlY29uZHM7XG4gIH1cblxuICAvLyB0cmFmZmljX3JvdXRpbmdfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90cmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb24gPSBuZXcgU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwidHJhZmZpY19yb3V0aW5nX2NvbmZpZ3VyYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgdHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl90cmFmZmljUm91dGluZ0NvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFRyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbih2YWx1ZTogU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fdHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHJhZmZpY1JvdXRpbmdDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYWZmaWNSb3V0aW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZyB7XG4gIC8qKlxuICAqIGF1dG9fcm9sbGJhY2tfY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50I2F1dG9fcm9sbGJhY2tfY29uZmlndXJhdGlvbiBTYWdlbWFrZXJFbmRwb2ludCNhdXRvX3JvbGxiYWNrX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGF1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24/OiBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uO1xuICAvKipcbiAgKiBibHVlX2dyZWVuX3VwZGF0ZV9wb2xpY3kgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludCNibHVlX2dyZWVuX3VwZGF0ZV9wb2xpY3kgU2FnZW1ha2VyRW5kcG9pbnQjYmx1ZV9ncmVlbl91cGRhdGVfcG9saWN5fVxuICAqL1xuICByZWFkb25seSBibHVlR3JlZW5VcGRhdGVQb2xpY3k6IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdXRvX3JvbGxiYWNrX2NvbmZpZ3VyYXRpb246IHNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmF1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24pLFxuICAgIGJsdWVfZ3JlZW5fdXBkYXRlX3BvbGljeTogc2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQmx1ZUdyZWVuVXBkYXRlUG9saWN5VG9UZXJyYWZvcm0oc3RydWN0IS5ibHVlR3JlZW5VcGRhdGVQb2xpY3kpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYXV0b19yb2xsYmFja19jb25maWd1cmF0aW9uOiB7XG4gICAgICB2YWx1ZTogc2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnQXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgfSxcbiAgICBibHVlX2dyZWVuX3VwZGF0ZV9wb2xpY3k6IHtcbiAgICAgIHZhbHVlOiBzYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3lUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmJsdWVHcmVlblVwZGF0ZVBvbGljeSksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeUxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbiA9IHRoaXMuX2F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ibHVlR3JlZW5VcGRhdGVQb2xpY3k/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYmx1ZUdyZWVuVXBkYXRlUG9saWN5ID0gdGhpcy5fYmx1ZUdyZWVuVXBkYXRlUG9saWN5Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYmx1ZUdyZWVuVXBkYXRlUG9saWN5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmF1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb247XG4gICAgICB0aGlzLl9ibHVlR3JlZW5VcGRhdGVQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmJsdWVHcmVlblVwZGF0ZVBvbGljeTtcbiAgICB9XG4gIH1cblxuICAvLyBhdXRvX3JvbGxiYWNrX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbiA9IG5ldyBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiYXV0b19yb2xsYmFja19jb25maWd1cmF0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGF1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEF1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24odmFsdWU6IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9hdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBibHVlX2dyZWVuX3VwZGF0ZV9wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYmx1ZUdyZWVuVXBkYXRlUG9saWN5ID0gbmV3IFNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ0JsdWVHcmVlblVwZGF0ZVBvbGljeU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImJsdWVfZ3JlZW5fdXBkYXRlX3BvbGljeVwiKTtcbiAgcHVibGljIGdldCBibHVlR3JlZW5VcGRhdGVQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JsdWVHcmVlblVwZGF0ZVBvbGljeTtcbiAgfVxuICBwdWJsaWMgcHV0Qmx1ZUdyZWVuVXBkYXRlUG9saWN5KHZhbHVlOiBTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdCbHVlR3JlZW5VcGRhdGVQb2xpY3kpIHtcbiAgICB0aGlzLl9ibHVlR3JlZW5VcGRhdGVQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBibHVlR3JlZW5VcGRhdGVQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmx1ZUdyZWVuVXBkYXRlUG9saWN5LmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludCBhd3Nfc2FnZW1ha2VyX2VuZHBvaW50fVxuKi9cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJFbmRwb2ludCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3Nfc2FnZW1ha2VyX2VuZHBvaW50XCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIFNhZ2VtYWtlckVuZHBvaW50IHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIFNhZ2VtYWtlckVuZHBvaW50IHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBTYWdlbWFrZXJFbmRwb2ludCB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50I2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBTYWdlbWFrZXJFbmRwb2ludCB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3Nfc2FnZW1ha2VyX2VuZHBvaW50XCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50IGF3c19zYWdlbWFrZXJfZW5kcG9pbnR9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIFNhZ2VtYWtlckVuZHBvaW50Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfc2FnZW1ha2VyX2VuZHBvaW50JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fZW5kcG9pbnRDb25maWdOYW1lID0gY29uZmlnLmVuZHBvaW50Q29uZmlnTmFtZTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9kZXBsb3ltZW50Q29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcuZGVwbG95bWVudENvbmZpZztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBlbmRwb2ludF9jb25maWdfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9lbmRwb2ludENvbmZpZ05hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVuZHBvaW50Q29uZmlnTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZHBvaW50X2NvbmZpZ19uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmRwb2ludENvbmZpZ05hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VuZHBvaW50Q29uZmlnTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmRwb2ludENvbmZpZ05hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kcG9pbnRDb25maWdOYW1lO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFncycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzX2FsbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIGRlcGxveW1lbnRfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlcGxveW1lbnRDb25maWcgPSBuZXcgU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZGVwbG95bWVudF9jb25maWdcIik7XG4gIHB1YmxpYyBnZXQgZGVwbG95bWVudENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVwbG95bWVudENvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0RGVwbG95bWVudENvbmZpZyh2YWx1ZTogU2FnZW1ha2VyRW5kcG9pbnREZXBsb3ltZW50Q29uZmlnKSB7XG4gICAgdGhpcy5fZGVwbG95bWVudENvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVwbG95bWVudENvbmZpZygpIHtcbiAgICB0aGlzLl9kZXBsb3ltZW50Q29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlcGxveW1lbnRDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVwbG95bWVudENvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBlbmRwb2ludF9jb25maWdfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZW5kcG9pbnRDb25maWdOYW1lKSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgZGVwbG95bWVudF9jb25maWc6IHNhZ2VtYWtlckVuZHBvaW50RGVwbG95bWVudENvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2RlcGxveW1lbnRDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBlbmRwb2ludF9jb25maWdfbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZW5kcG9pbnRDb25maWdOYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHRhZ3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0YWdzX2FsbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIGRlcGxveW1lbnRfY29uZmlnOiB7XG4gICAgICAgIHZhbHVlOiBzYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdUb0hjbFRlcnJhZm9ybSh0aGlzLl9kZXBsb3ltZW50Q29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTYWdlbWFrZXJFbmRwb2ludERlcGxveW1lbnRDb25maWdMaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=