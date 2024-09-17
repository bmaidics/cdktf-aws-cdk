"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoscalingPolicy = exports.AutoscalingPolicyTargetTrackingConfigurationOutputReference = exports.autoscalingPolicyTargetTrackingConfigurationToHclTerraform = exports.autoscalingPolicyTargetTrackingConfigurationToTerraform = exports.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference = exports.autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToHclTerraform = exports.autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform = exports.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference = exports.autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToHclTerraform = exports.autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform = exports.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList = exports.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference = exports.autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToHclTerraform = exports.autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform = exports.AutoscalingPolicyStepAdjustmentList = exports.AutoscalingPolicyStepAdjustmentOutputReference = exports.autoscalingPolicyStepAdjustmentToHclTerraform = exports.autoscalingPolicyStepAdjustmentToTerraform = exports.AutoscalingPolicyPredictiveScalingConfigurationOutputReference = exports.autoscalingPolicyPredictiveScalingConfigurationToHclTerraform = exports.autoscalingPolicyPredictiveScalingConfigurationToTerraform = exports.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference = exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToHclTerraform = exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform = exports.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference = exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToHclTerraform = exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform = exports.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference = exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToHclTerraform = exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform = exports.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference = exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToHclTerraform = exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        predefined_metric_type: cdktf.stringToTerraform(struct.predefinedMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel),
    };
}
exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform = autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform;
function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        predefined_metric_type: {
            value: cdktf.stringToHclTerraform(struct.predefinedMetricType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_label: {
            value: cdktf.stringToHclTerraform(struct.resourceLabel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToHclTerraform = autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToHclTerraform;
class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._predefinedMetricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }
    get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    set predefinedMetricType(value) {
        this._predefinedMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
    }
    get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    set resourceLabel(value) {
        this._resourceLabel = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceLabelInput() {
        return this._resourceLabel;
    }
}
exports.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference = AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference[_a] = { fqn: "@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference", version: "0.0.0" };
function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        predefined_metric_type: cdktf.stringToTerraform(struct.predefinedMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel),
    };
}
exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform = autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform;
function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        predefined_metric_type: {
            value: cdktf.stringToHclTerraform(struct.predefinedMetricType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_label: {
            value: cdktf.stringToHclTerraform(struct.resourceLabel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToHclTerraform = autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToHclTerraform;
class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._predefinedMetricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }
    get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    set predefinedMetricType(value) {
        this._predefinedMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
    }
    get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    set resourceLabel(value) {
        this._resourceLabel = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceLabelInput() {
        return this._resourceLabel;
    }
}
exports.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference = AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference[_b] = { fqn: "@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference", version: "0.0.0" };
function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        predefined_metric_type: cdktf.stringToTerraform(struct.predefinedMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel),
    };
}
exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform = autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform;
function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        predefined_metric_type: {
            value: cdktf.stringToHclTerraform(struct.predefinedMetricType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_label: {
            value: cdktf.stringToHclTerraform(struct.resourceLabel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToHclTerraform = autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToHclTerraform;
class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._predefinedMetricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }
    get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    set predefinedMetricType(value) {
        this._predefinedMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
    }
    get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    set resourceLabel(value) {
        this._resourceLabel = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceLabelInput() {
        return this._resourceLabel;
    }
}
exports.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference = AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference[_c] = { fqn: "@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference", version: "0.0.0" };
function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        target_value: cdktf.numberToTerraform(struct.targetValue),
        predefined_load_metric_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform(struct.predefinedLoadMetricSpecification),
        predefined_metric_pair_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform(struct.predefinedMetricPairSpecification),
        predefined_scaling_metric_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform(struct.predefinedScalingMetricSpecification),
    };
}
exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform = autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform;
function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        target_value: {
            value: cdktf.numberToHclTerraform(struct.targetValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        predefined_load_metric_specification: {
            value: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToHclTerraform(struct.predefinedLoadMetricSpecification),
            isBlock: true,
            type: "list",
            storageClassType: "AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationList",
        },
        predefined_metric_pair_specification: {
            value: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToHclTerraform(struct.predefinedMetricPairSpecification),
            isBlock: true,
            type: "list",
            storageClassType: "AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationList",
        },
        predefined_scaling_metric_specification: {
            value: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToHclTerraform(struct.predefinedScalingMetricSpecification),
            isBlock: true,
            type: "list",
            storageClassType: "AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToHclTerraform = autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToHclTerraform;
class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // predefined_load_metric_specification - computed: false, optional: true, required: false
        this._predefinedLoadMetricSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference(this, "predefined_load_metric_specification");
        // predefined_metric_pair_specification - computed: false, optional: true, required: false
        this._predefinedMetricPairSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference(this, "predefined_metric_pair_specification");
        // predefined_scaling_metric_specification - computed: false, optional: true, required: false
        this._predefinedScalingMetricSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference(this, "predefined_scaling_metric_specification");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._targetValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        if (this._predefinedLoadMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedLoadMetricSpecification = this._predefinedLoadMetricSpecification?.internalValue;
        }
        if (this._predefinedMetricPairSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricPairSpecification = this._predefinedMetricPairSpecification?.internalValue;
        }
        if (this._predefinedScalingMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedScalingMetricSpecification = this._predefinedScalingMetricSpecification?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._targetValue = undefined;
            this._predefinedLoadMetricSpecification.internalValue = undefined;
            this._predefinedMetricPairSpecification.internalValue = undefined;
            this._predefinedScalingMetricSpecification.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._targetValue = value.targetValue;
            this._predefinedLoadMetricSpecification.internalValue = value.predefinedLoadMetricSpecification;
            this._predefinedMetricPairSpecification.internalValue = value.predefinedMetricPairSpecification;
            this._predefinedScalingMetricSpecification.internalValue = value.predefinedScalingMetricSpecification;
        }
    }
    get targetValue() {
        return this.getNumberAttribute('target_value');
    }
    set targetValue(value) {
        this._targetValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetValueInput() {
        return this._targetValue;
    }
    get predefinedLoadMetricSpecification() {
        return this._predefinedLoadMetricSpecification;
    }
    putPredefinedLoadMetricSpecification(value) {
        this._predefinedLoadMetricSpecification.internalValue = value;
    }
    resetPredefinedLoadMetricSpecification() {
        this._predefinedLoadMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedLoadMetricSpecificationInput() {
        return this._predefinedLoadMetricSpecification.internalValue;
    }
    get predefinedMetricPairSpecification() {
        return this._predefinedMetricPairSpecification;
    }
    putPredefinedMetricPairSpecification(value) {
        this._predefinedMetricPairSpecification.internalValue = value;
    }
    resetPredefinedMetricPairSpecification() {
        this._predefinedMetricPairSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedMetricPairSpecificationInput() {
        return this._predefinedMetricPairSpecification.internalValue;
    }
    get predefinedScalingMetricSpecification() {
        return this._predefinedScalingMetricSpecification;
    }
    putPredefinedScalingMetricSpecification(value) {
        this._predefinedScalingMetricSpecification.internalValue = value;
    }
    resetPredefinedScalingMetricSpecification() {
        this._predefinedScalingMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedScalingMetricSpecificationInput() {
        return this._predefinedScalingMetricSpecification.internalValue;
    }
}
exports.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference = AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference;
_d = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference[_d] = { fqn: "@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference", version: "0.0.0" };
function autoscalingPolicyPredictiveScalingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_capacity_breach_behavior: cdktf.stringToTerraform(struct.maxCapacityBreachBehavior),
        max_capacity_buffer: cdktf.stringToTerraform(struct.maxCapacityBuffer),
        mode: cdktf.stringToTerraform(struct.mode),
        scheduling_buffer_time: cdktf.stringToTerraform(struct.schedulingBufferTime),
        metric_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform(struct.metricSpecification),
    };
}
exports.autoscalingPolicyPredictiveScalingConfigurationToTerraform = autoscalingPolicyPredictiveScalingConfigurationToTerraform;
function autoscalingPolicyPredictiveScalingConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        max_capacity_breach_behavior: {
            value: cdktf.stringToHclTerraform(struct.maxCapacityBreachBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_capacity_buffer: {
            value: cdktf.stringToHclTerraform(struct.maxCapacityBuffer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scheduling_buffer_time: {
            value: cdktf.stringToHclTerraform(struct.schedulingBufferTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_specification: {
            value: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToHclTerraform(struct.metricSpecification),
            isBlock: true,
            type: "list",
            storageClassType: "AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingPolicyPredictiveScalingConfigurationToHclTerraform = autoscalingPolicyPredictiveScalingConfigurationToHclTerraform;
class AutoscalingPolicyPredictiveScalingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // metric_specification - computed: false, optional: false, required: true
        this._metricSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference(this, "metric_specification");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._maxCapacityBreachBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacityBreachBehavior = this._maxCapacityBreachBehavior;
        }
        if (this._maxCapacityBuffer !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacityBuffer = this._maxCapacityBuffer;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._schedulingBufferTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.schedulingBufferTime = this._schedulingBufferTime;
        }
        if (this._metricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricSpecification = this._metricSpecification?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxCapacityBreachBehavior = undefined;
            this._maxCapacityBuffer = undefined;
            this._mode = undefined;
            this._schedulingBufferTime = undefined;
            this._metricSpecification.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxCapacityBreachBehavior = value.maxCapacityBreachBehavior;
            this._maxCapacityBuffer = value.maxCapacityBuffer;
            this._mode = value.mode;
            this._schedulingBufferTime = value.schedulingBufferTime;
            this._metricSpecification.internalValue = value.metricSpecification;
        }
    }
    get maxCapacityBreachBehavior() {
        return this.getStringAttribute('max_capacity_breach_behavior');
    }
    set maxCapacityBreachBehavior(value) {
        this._maxCapacityBreachBehavior = value;
    }
    resetMaxCapacityBreachBehavior() {
        this._maxCapacityBreachBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxCapacityBreachBehaviorInput() {
        return this._maxCapacityBreachBehavior;
    }
    get maxCapacityBuffer() {
        return this.getStringAttribute('max_capacity_buffer');
    }
    set maxCapacityBuffer(value) {
        this._maxCapacityBuffer = value;
    }
    resetMaxCapacityBuffer() {
        this._maxCapacityBuffer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxCapacityBufferInput() {
        return this._maxCapacityBuffer;
    }
    get mode() {
        return this.getStringAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
    get schedulingBufferTime() {
        return this.getStringAttribute('scheduling_buffer_time');
    }
    set schedulingBufferTime(value) {
        this._schedulingBufferTime = value;
    }
    resetSchedulingBufferTime() {
        this._schedulingBufferTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get schedulingBufferTimeInput() {
        return this._schedulingBufferTime;
    }
    get metricSpecification() {
        return this._metricSpecification;
    }
    putMetricSpecification(value) {
        this._metricSpecification.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get metricSpecificationInput() {
        return this._metricSpecification.internalValue;
    }
}
exports.AutoscalingPolicyPredictiveScalingConfigurationOutputReference = AutoscalingPolicyPredictiveScalingConfigurationOutputReference;
_e = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyPredictiveScalingConfigurationOutputReference[_e] = { fqn: "@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference", version: "0.0.0" };
function autoscalingPolicyStepAdjustmentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        metric_interval_lower_bound: cdktf.stringToTerraform(struct.metricIntervalLowerBound),
        metric_interval_upper_bound: cdktf.stringToTerraform(struct.metricIntervalUpperBound),
        scaling_adjustment: cdktf.numberToTerraform(struct.scalingAdjustment),
    };
}
exports.autoscalingPolicyStepAdjustmentToTerraform = autoscalingPolicyStepAdjustmentToTerraform;
function autoscalingPolicyStepAdjustmentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        metric_interval_lower_bound: {
            value: cdktf.stringToHclTerraform(struct.metricIntervalLowerBound),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_interval_upper_bound: {
            value: cdktf.stringToHclTerraform(struct.metricIntervalUpperBound),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scaling_adjustment: {
            value: cdktf.numberToHclTerraform(struct.scalingAdjustment),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingPolicyStepAdjustmentToHclTerraform = autoscalingPolicyStepAdjustmentToHclTerraform;
class AutoscalingPolicyStepAdjustmentOutputReference extends cdktf.ComplexObject {
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
        if (this._metricIntervalLowerBound !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricIntervalLowerBound = this._metricIntervalLowerBound;
        }
        if (this._metricIntervalUpperBound !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricIntervalUpperBound = this._metricIntervalUpperBound;
        }
        if (this._scalingAdjustment !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalingAdjustment = this._scalingAdjustment;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricIntervalLowerBound = undefined;
            this._metricIntervalUpperBound = undefined;
            this._scalingAdjustment = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricIntervalLowerBound = value.metricIntervalLowerBound;
            this._metricIntervalUpperBound = value.metricIntervalUpperBound;
            this._scalingAdjustment = value.scalingAdjustment;
        }
    }
    get metricIntervalLowerBound() {
        return this.getStringAttribute('metric_interval_lower_bound');
    }
    set metricIntervalLowerBound(value) {
        this._metricIntervalLowerBound = value;
    }
    resetMetricIntervalLowerBound() {
        this._metricIntervalLowerBound = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metricIntervalLowerBoundInput() {
        return this._metricIntervalLowerBound;
    }
    get metricIntervalUpperBound() {
        return this.getStringAttribute('metric_interval_upper_bound');
    }
    set metricIntervalUpperBound(value) {
        this._metricIntervalUpperBound = value;
    }
    resetMetricIntervalUpperBound() {
        this._metricIntervalUpperBound = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metricIntervalUpperBoundInput() {
        return this._metricIntervalUpperBound;
    }
    get scalingAdjustment() {
        return this.getNumberAttribute('scaling_adjustment');
    }
    set scalingAdjustment(value) {
        this._scalingAdjustment = value;
    }
    // Temporarily expose input value. Use with caution.
    get scalingAdjustmentInput() {
        return this._scalingAdjustment;
    }
}
exports.AutoscalingPolicyStepAdjustmentOutputReference = AutoscalingPolicyStepAdjustmentOutputReference;
_f = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyStepAdjustmentOutputReference[_f] = { fqn: "@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference", version: "0.0.0" };
class AutoscalingPolicyStepAdjustmentList extends cdktf.ComplexList {
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
        return new AutoscalingPolicyStepAdjustmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.AutoscalingPolicyStepAdjustmentList = AutoscalingPolicyStepAdjustmentList;
_g = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyStepAdjustmentList[_g] = { fqn: "@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList", version: "0.0.0" };
function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform = autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform;
function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
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
exports.autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToHclTerraform = autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToHclTerraform;
class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference extends cdktf.ComplexObject {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
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
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
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
exports.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference = AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference;
_h = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference[_h] = { fqn: "@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference", version: "0.0.0" };
class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList extends cdktf.ComplexList {
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
        return new AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList = AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList;
_j = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList[_j] = { fqn: "@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList", version: "0.0.0" };
function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        metric_name: cdktf.stringToTerraform(struct.metricName),
        namespace: cdktf.stringToTerraform(struct.namespace),
        statistic: cdktf.stringToTerraform(struct.statistic),
        unit: cdktf.stringToTerraform(struct.unit),
        metric_dimension: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform, true)(struct.metricDimension),
    };
}
exports.autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform = autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform;
function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        metric_name: {
            value: cdktf.stringToHclTerraform(struct.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktf.stringToHclTerraform(struct.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        statistic: {
            value: cdktf.stringToHclTerraform(struct.statistic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unit: {
            value: cdktf.stringToHclTerraform(struct.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_dimension: {
            value: cdktf.listMapperHcl(autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToHclTerraform, true)(struct.metricDimension),
            isBlock: true,
            type: "list",
            storageClassType: "AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToHclTerraform = autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToHclTerraform;
class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // metric_dimension - computed: false, optional: true, required: false
        this._metricDimension = new AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList(this, "metric_dimension", false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._statistic !== undefined) {
            hasAnyValues = true;
            internalValueResult.statistic = this._statistic;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._metricDimension?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricDimension = this._metricDimension?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._metricName = undefined;
            this._namespace = undefined;
            this._statistic = undefined;
            this._unit = undefined;
            this._metricDimension.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
            this._statistic = value.statistic;
            this._unit = value.unit;
            this._metricDimension.internalValue = value.metricDimension;
        }
    }
    get metricName() {
        return this.getStringAttribute('metric_name');
    }
    set metricName(value) {
        this._metricName = value;
    }
    // Temporarily expose input value. Use with caution.
    get metricNameInput() {
        return this._metricName;
    }
    get namespace() {
        return this.getStringAttribute('namespace');
    }
    set namespace(value) {
        this._namespace = value;
    }
    // Temporarily expose input value. Use with caution.
    get namespaceInput() {
        return this._namespace;
    }
    get statistic() {
        return this.getStringAttribute('statistic');
    }
    set statistic(value) {
        this._statistic = value;
    }
    // Temporarily expose input value. Use with caution.
    get statisticInput() {
        return this._statistic;
    }
    get unit() {
        return this.getStringAttribute('unit');
    }
    set unit(value) {
        this._unit = value;
    }
    resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get unitInput() {
        return this._unit;
    }
    get metricDimension() {
        return this._metricDimension;
    }
    putMetricDimension(value) {
        this._metricDimension.internalValue = value;
    }
    resetMetricDimension() {
        this._metricDimension.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metricDimensionInput() {
        return this._metricDimension.internalValue;
    }
}
exports.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference = AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference;
_k = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference[_k] = { fqn: "@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference", version: "0.0.0" };
function autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        predefined_metric_type: cdktf.stringToTerraform(struct.predefinedMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel),
    };
}
exports.autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform = autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform;
function autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        predefined_metric_type: {
            value: cdktf.stringToHclTerraform(struct.predefinedMetricType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_label: {
            value: cdktf.stringToHclTerraform(struct.resourceLabel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToHclTerraform = autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToHclTerraform;
class AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._predefinedMetricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }
    get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    set predefinedMetricType(value) {
        this._predefinedMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
    }
    get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    set resourceLabel(value) {
        this._resourceLabel = value;
    }
    resetResourceLabel() {
        this._resourceLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceLabelInput() {
        return this._resourceLabel;
    }
}
exports.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference = AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference;
_l = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference[_l] = { fqn: "@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference", version: "0.0.0" };
function autoscalingPolicyTargetTrackingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable_scale_in: cdktf.booleanToTerraform(struct.disableScaleIn),
        target_value: cdktf.numberToTerraform(struct.targetValue),
        customized_metric_specification: autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct.customizedMetricSpecification),
        predefined_metric_specification: autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct.predefinedMetricSpecification),
    };
}
exports.autoscalingPolicyTargetTrackingConfigurationToTerraform = autoscalingPolicyTargetTrackingConfigurationToTerraform;
function autoscalingPolicyTargetTrackingConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        disable_scale_in: {
            value: cdktf.booleanToHclTerraform(struct.disableScaleIn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        target_value: {
            value: cdktf.numberToHclTerraform(struct.targetValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        customized_metric_specification: {
            value: autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToHclTerraform(struct.customizedMetricSpecification),
            isBlock: true,
            type: "list",
            storageClassType: "AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationList",
        },
        predefined_metric_specification: {
            value: autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToHclTerraform(struct.predefinedMetricSpecification),
            isBlock: true,
            type: "list",
            storageClassType: "AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingPolicyTargetTrackingConfigurationToHclTerraform = autoscalingPolicyTargetTrackingConfigurationToHclTerraform;
class AutoscalingPolicyTargetTrackingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // customized_metric_specification - computed: false, optional: true, required: false
        this._customizedMetricSpecification = new AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference(this, "customized_metric_specification");
        // predefined_metric_specification - computed: false, optional: true, required: false
        this._predefinedMetricSpecification = new AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference(this, "predefined_metric_specification");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._disableScaleIn !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableScaleIn = this._disableScaleIn;
        }
        if (this._targetValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        if (this._customizedMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customizedMetricSpecification = this._customizedMetricSpecification?.internalValue;
        }
        if (this._predefinedMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricSpecification = this._predefinedMetricSpecification?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._disableScaleIn = undefined;
            this._targetValue = undefined;
            this._customizedMetricSpecification.internalValue = undefined;
            this._predefinedMetricSpecification.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._disableScaleIn = value.disableScaleIn;
            this._targetValue = value.targetValue;
            this._customizedMetricSpecification.internalValue = value.customizedMetricSpecification;
            this._predefinedMetricSpecification.internalValue = value.predefinedMetricSpecification;
        }
    }
    get disableScaleIn() {
        return this.getBooleanAttribute('disable_scale_in');
    }
    set disableScaleIn(value) {
        this._disableScaleIn = value;
    }
    resetDisableScaleIn() {
        this._disableScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableScaleInInput() {
        return this._disableScaleIn;
    }
    get targetValue() {
        return this.getNumberAttribute('target_value');
    }
    set targetValue(value) {
        this._targetValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetValueInput() {
        return this._targetValue;
    }
    get customizedMetricSpecification() {
        return this._customizedMetricSpecification;
    }
    putCustomizedMetricSpecification(value) {
        this._customizedMetricSpecification.internalValue = value;
    }
    resetCustomizedMetricSpecification() {
        this._customizedMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customizedMetricSpecificationInput() {
        return this._customizedMetricSpecification.internalValue;
    }
    get predefinedMetricSpecification() {
        return this._predefinedMetricSpecification;
    }
    putPredefinedMetricSpecification(value) {
        this._predefinedMetricSpecification.internalValue = value;
    }
    resetPredefinedMetricSpecification() {
        this._predefinedMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedMetricSpecificationInput() {
        return this._predefinedMetricSpecification.internalValue;
    }
}
exports.AutoscalingPolicyTargetTrackingConfigurationOutputReference = AutoscalingPolicyTargetTrackingConfigurationOutputReference;
_m = JSII_RTTI_SYMBOL_1;
AutoscalingPolicyTargetTrackingConfigurationOutputReference[_m] = { fqn: "@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy aws_autoscaling_policy}
*/
class AutoscalingPolicy extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AutoscalingPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AutoscalingPolicy to import
    * @param importFromId The id of the existing AutoscalingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AutoscalingPolicy to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_autoscaling_policy", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy aws_autoscaling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingPolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_autoscaling_policy',
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
        // predictive_scaling_configuration - computed: false, optional: true, required: false
        this._predictiveScalingConfiguration = new AutoscalingPolicyPredictiveScalingConfigurationOutputReference(this, "predictive_scaling_configuration");
        // step_adjustment - computed: false, optional: true, required: false
        this._stepAdjustment = new AutoscalingPolicyStepAdjustmentList(this, "step_adjustment", true);
        // target_tracking_configuration - computed: false, optional: true, required: false
        this._targetTrackingConfiguration = new AutoscalingPolicyTargetTrackingConfigurationOutputReference(this, "target_tracking_configuration");
        this._adjustmentType = config.adjustmentType;
        this._autoscalingGroupName = config.autoscalingGroupName;
        this._cooldown = config.cooldown;
        this._estimatedInstanceWarmup = config.estimatedInstanceWarmup;
        this._id = config.id;
        this._metricAggregationType = config.metricAggregationType;
        this._minAdjustmentMagnitude = config.minAdjustmentMagnitude;
        this._name = config.name;
        this._policyType = config.policyType;
        this._scalingAdjustment = config.scalingAdjustment;
        this._predictiveScalingConfiguration.internalValue = config.predictiveScalingConfiguration;
        this._stepAdjustment.internalValue = config.stepAdjustment;
        this._targetTrackingConfiguration.internalValue = config.targetTrackingConfiguration;
    }
    get adjustmentType() {
        return this.getStringAttribute('adjustment_type');
    }
    set adjustmentType(value) {
        this._adjustmentType = value;
    }
    resetAdjustmentType() {
        this._adjustmentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get adjustmentTypeInput() {
        return this._adjustmentType;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get autoscalingGroupName() {
        return this.getStringAttribute('autoscaling_group_name');
    }
    set autoscalingGroupName(value) {
        this._autoscalingGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    get autoscalingGroupNameInput() {
        return this._autoscalingGroupName;
    }
    get cooldown() {
        return this.getNumberAttribute('cooldown');
    }
    set cooldown(value) {
        this._cooldown = value;
    }
    resetCooldown() {
        this._cooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cooldownInput() {
        return this._cooldown;
    }
    get estimatedInstanceWarmup() {
        return this.getNumberAttribute('estimated_instance_warmup');
    }
    set estimatedInstanceWarmup(value) {
        this._estimatedInstanceWarmup = value;
    }
    resetEstimatedInstanceWarmup() {
        this._estimatedInstanceWarmup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get estimatedInstanceWarmupInput() {
        return this._estimatedInstanceWarmup;
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
    get metricAggregationType() {
        return this.getStringAttribute('metric_aggregation_type');
    }
    set metricAggregationType(value) {
        this._metricAggregationType = value;
    }
    resetMetricAggregationType() {
        this._metricAggregationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metricAggregationTypeInput() {
        return this._metricAggregationType;
    }
    get minAdjustmentMagnitude() {
        return this.getNumberAttribute('min_adjustment_magnitude');
    }
    set minAdjustmentMagnitude(value) {
        this._minAdjustmentMagnitude = value;
    }
    resetMinAdjustmentMagnitude() {
        this._minAdjustmentMagnitude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minAdjustmentMagnitudeInput() {
        return this._minAdjustmentMagnitude;
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
    get policyType() {
        return this.getStringAttribute('policy_type');
    }
    set policyType(value) {
        this._policyType = value;
    }
    resetPolicyType() {
        this._policyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get policyTypeInput() {
        return this._policyType;
    }
    get scalingAdjustment() {
        return this.getNumberAttribute('scaling_adjustment');
    }
    set scalingAdjustment(value) {
        this._scalingAdjustment = value;
    }
    resetScalingAdjustment() {
        this._scalingAdjustment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scalingAdjustmentInput() {
        return this._scalingAdjustment;
    }
    get predictiveScalingConfiguration() {
        return this._predictiveScalingConfiguration;
    }
    putPredictiveScalingConfiguration(value) {
        this._predictiveScalingConfiguration.internalValue = value;
    }
    resetPredictiveScalingConfiguration() {
        this._predictiveScalingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get predictiveScalingConfigurationInput() {
        return this._predictiveScalingConfiguration.internalValue;
    }
    get stepAdjustment() {
        return this._stepAdjustment;
    }
    putStepAdjustment(value) {
        this._stepAdjustment.internalValue = value;
    }
    resetStepAdjustment() {
        this._stepAdjustment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stepAdjustmentInput() {
        return this._stepAdjustment.internalValue;
    }
    get targetTrackingConfiguration() {
        return this._targetTrackingConfiguration;
    }
    putTargetTrackingConfiguration(value) {
        this._targetTrackingConfiguration.internalValue = value;
    }
    resetTargetTrackingConfiguration() {
        this._targetTrackingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetTrackingConfigurationInput() {
        return this._targetTrackingConfiguration.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            adjustment_type: cdktf.stringToTerraform(this._adjustmentType),
            autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
            cooldown: cdktf.numberToTerraform(this._cooldown),
            estimated_instance_warmup: cdktf.numberToTerraform(this._estimatedInstanceWarmup),
            id: cdktf.stringToTerraform(this._id),
            metric_aggregation_type: cdktf.stringToTerraform(this._metricAggregationType),
            min_adjustment_magnitude: cdktf.numberToTerraform(this._minAdjustmentMagnitude),
            name: cdktf.stringToTerraform(this._name),
            policy_type: cdktf.stringToTerraform(this._policyType),
            scaling_adjustment: cdktf.numberToTerraform(this._scalingAdjustment),
            predictive_scaling_configuration: autoscalingPolicyPredictiveScalingConfigurationToTerraform(this._predictiveScalingConfiguration.internalValue),
            step_adjustment: cdktf.listMapper(autoscalingPolicyStepAdjustmentToTerraform, true)(this._stepAdjustment.internalValue),
            target_tracking_configuration: autoscalingPolicyTargetTrackingConfigurationToTerraform(this._targetTrackingConfiguration.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            adjustment_type: {
                value: cdktf.stringToHclTerraform(this._adjustmentType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            autoscaling_group_name: {
                value: cdktf.stringToHclTerraform(this._autoscalingGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cooldown: {
                value: cdktf.numberToHclTerraform(this._cooldown),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            estimated_instance_warmup: {
                value: cdktf.numberToHclTerraform(this._estimatedInstanceWarmup),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metric_aggregation_type: {
                value: cdktf.stringToHclTerraform(this._metricAggregationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            min_adjustment_magnitude: {
                value: cdktf.numberToHclTerraform(this._minAdjustmentMagnitude),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_type: {
                value: cdktf.stringToHclTerraform(this._policyType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scaling_adjustment: {
                value: cdktf.numberToHclTerraform(this._scalingAdjustment),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            predictive_scaling_configuration: {
                value: autoscalingPolicyPredictiveScalingConfigurationToHclTerraform(this._predictiveScalingConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AutoscalingPolicyPredictiveScalingConfigurationList",
            },
            step_adjustment: {
                value: cdktf.listMapperHcl(autoscalingPolicyStepAdjustmentToHclTerraform, true)(this._stepAdjustment.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "AutoscalingPolicyStepAdjustmentList",
            },
            target_tracking_configuration: {
                value: autoscalingPolicyTargetTrackingConfigurationToHclTerraform(this._targetTrackingConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AutoscalingPolicyTargetTrackingConfigurationList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.AutoscalingPolicy = AutoscalingPolicy;
_o = JSII_RTTI_SYMBOL_1;
AutoscalingPolicy[_o] = { fqn: "@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
AutoscalingPolicy.tfResourceType = "aws_autoscaling_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2F1dG9zY2FsaW5nLXBvbGljeS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQThFL0IsU0FBZ0IsOEdBQThHLENBQUMsTUFBaU87SUFDOVYsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDN0UsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO0tBQy9ELENBQUE7QUFDSCxDQUFDO0FBVEQsd09BU0M7QUFHRCxTQUFnQixpSEFBaUgsQ0FBQyxNQUFpTztJQUNqVyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLHNCQUFzQixFQUFFO1lBQ3RCLEtBQUssRUFBRSxLQUFL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QUFHLHdCQUF3QixBQUEzQixDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX3BvbGljeVxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nUG9saWN5Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX3BvbGljeSNhZGp1c3RtZW50X3R5cGUgQXV0b3NjYWxpbmdQb2xpY3kjYWRqdXN0bWVudF90eXBlfVxuICAqL1xuICByZWFkb25seSBhZGp1c3RtZW50VHlwZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I2F1dG9zY2FsaW5nX2dyb3VwX25hbWUgQXV0b3NjYWxpbmdQb2xpY3kjYXV0b3NjYWxpbmdfZ3JvdXBfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgYXV0b3NjYWxpbmdHcm91cE5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I2Nvb2xkb3duIEF1dG9zY2FsaW5nUG9saWN5I2Nvb2xkb3dufVxuICAqL1xuICByZWFkb25seSBjb29sZG93bj86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I2VzdGltYXRlZF9pbnN0YW5jZV93YXJtdXAgQXV0b3NjYWxpbmdQb2xpY3kjZXN0aW1hdGVkX2luc3RhbmNlX3dhcm11cH1cbiAgKi9cbiAgcmVhZG9ubHkgZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXA/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX3BvbGljeSNpZCBBdXRvc2NhbGluZ1BvbGljeSNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I21ldHJpY19hZ2dyZWdhdGlvbl90eXBlIEF1dG9zY2FsaW5nUG9saWN5I21ldHJpY19hZ2dyZWdhdGlvbl90eXBlfVxuICAqL1xuICByZWFkb25seSBtZXRyaWNBZ2dyZWdhdGlvblR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX3BvbGljeSNtaW5fYWRqdXN0bWVudF9tYWduaXR1ZGUgQXV0b3NjYWxpbmdQb2xpY3kjbWluX2FkanVzdG1lbnRfbWFnbml0dWRlfVxuICAqL1xuICByZWFkb25seSBtaW5BZGp1c3RtZW50TWFnbml0dWRlPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19wb2xpY3kjbmFtZSBBdXRvc2NhbGluZ1BvbGljeSNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX3BvbGljeSNwb2xpY3lfdHlwZSBBdXRvc2NhbGluZ1BvbGljeSNwb2xpY3lfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgcG9saWN5VHlwZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I3NjYWxpbmdfYWRqdXN0bWVudCBBdXRvc2NhbGluZ1BvbGljeSNzY2FsaW5nX2FkanVzdG1lbnR9XG4gICovXG4gIHJlYWRvbmx5IHNjYWxpbmdBZGp1c3RtZW50PzogbnVtYmVyO1xuICAvKipcbiAgKiBwcmVkaWN0aXZlX3NjYWxpbmdfY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I3ByZWRpY3RpdmVfc2NhbGluZ19jb25maWd1cmF0aW9uIEF1dG9zY2FsaW5nUG9saWN5I3ByZWRpY3RpdmVfc2NhbGluZ19jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBwcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb24/OiBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogc3RlcF9hZGp1c3RtZW50IGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19wb2xpY3kjc3RlcF9hZGp1c3RtZW50IEF1dG9zY2FsaW5nUG9saWN5I3N0ZXBfYWRqdXN0bWVudH1cbiAgKi9cbiAgcmVhZG9ubHkgc3RlcEFkanVzdG1lbnQ/OiBBdXRvc2NhbGluZ1BvbGljeVN0ZXBBZGp1c3RtZW50W10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogdGFyZ2V0X3RyYWNraW5nX2NvbmZpZ3VyYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX3BvbGljeSN0YXJnZXRfdHJhY2tpbmdfY29uZmlndXJhdGlvbiBBdXRvc2NhbGluZ1BvbGljeSN0YXJnZXRfdHJhY2tpbmdfY29uZmlndXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgdGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uPzogQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb247XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX3BvbGljeSNwcmVkZWZpbmVkX21ldHJpY190eXBlIEF1dG9zY2FsaW5nUG9saWN5I3ByZWRlZmluZWRfbWV0cmljX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHByZWRlZmluZWRNZXRyaWNUeXBlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX3BvbGljeSNyZXNvdXJjZV9sYWJlbCBBdXRvc2NhbGluZ1BvbGljeSNyZXNvdXJjZV9sYWJlbH1cbiAgKi9cbiAgcmVhZG9ubHkgcmVzb3VyY2VMYWJlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByZWRlZmluZWRfbWV0cmljX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlZGVmaW5lZE1ldHJpY1R5cGUpLFxuICAgIHJlc291cmNlX2xhYmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlTGFiZWwpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgcHJlZGVmaW5lZF9tZXRyaWNfdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucHJlZGVmaW5lZE1ldHJpY1R5cGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHJlc291cmNlX2xhYmVsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUxhYmVsKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmVkZWZpbmVkTWV0cmljVHlwZSA9IHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzb3VyY2VMYWJlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNvdXJjZUxhYmVsID0gdGhpcy5fcmVzb3VyY2VMYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1R5cGUgPSB2YWx1ZS5wcmVkZWZpbmVkTWV0cmljVHlwZTtcbiAgICAgIHRoaXMuX3Jlc291cmNlTGFiZWwgPSB2YWx1ZS5yZXNvdXJjZUxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIC8vIHByZWRlZmluZWRfbWV0cmljX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJlZGVmaW5lZE1ldHJpY1R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByZWRlZmluZWRNZXRyaWNUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZGVmaW5lZF9tZXRyaWNfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZGVmaW5lZE1ldHJpY1R5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWRlZmluZWRNZXRyaWNUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlO1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfbGFiZWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVzb3VyY2VMYWJlbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2xhYmVsJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZUxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlTGFiZWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VMYWJlbDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19wb2xpY3kjcHJlZGVmaW5lZF9tZXRyaWNfdHlwZSBBdXRvc2NhbGluZ1BvbGljeSNwcmVkZWZpbmVkX21ldHJpY190eXBlfVxuICAqL1xuICByZWFkb25seSBwcmVkZWZpbmVkTWV0cmljVHlwZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19wb2xpY3kjcmVzb3VyY2VfbGFiZWwgQXV0b3NjYWxpbmdQb2xpY3kjcmVzb3VyY2VfbGFiZWx9XG4gICovXG4gIHJlYWRvbmx5IHJlc291cmNlTGFiZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcmVkZWZpbmVkX21ldHJpY190eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWRlZmluZWRNZXRyaWNUeXBlKSxcbiAgICByZXNvdXJjZV9sYWJlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUxhYmVsKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHByZWRlZmluZWRfbWV0cmljX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByZWRlZmluZWRNZXRyaWNUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICByZXNvdXJjZV9sYWJlbDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VMYWJlbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJlZGVmaW5lZE1ldHJpY1R5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZGVmaW5lZE1ldHJpY1R5cGUgPSB0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlTGFiZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VMYWJlbCA9IHRoaXMuX3Jlc291cmNlTGFiZWw7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc291cmNlTGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlID0gdmFsdWUucHJlZGVmaW5lZE1ldHJpY1R5cGU7XG4gICAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdmFsdWUucmVzb3VyY2VMYWJlbDtcbiAgICB9XG4gIH1cblxuICAvLyBwcmVkZWZpbmVkX21ldHJpY190eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ByZWRlZmluZWRNZXRyaWNUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVkZWZpbmVkTWV0cmljVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWRlZmluZWRfbWV0cmljX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWRlZmluZWRNZXRyaWNUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVkZWZpbmVkTWV0cmljVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX2xhYmVsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Jlc291cmNlTGFiZWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9sYWJlbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VMYWJlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VMYWJlbCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUxhYmVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlTGFiZWw7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I3ByZWRlZmluZWRfbWV0cmljX3R5cGUgQXV0b3NjYWxpbmdQb2xpY3kjcHJlZGVmaW5lZF9tZXRyaWNfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgcHJlZGVmaW5lZE1ldHJpY1R5cGU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I3Jlc291cmNlX2xhYmVsIEF1dG9zY2FsaW5nUG9saWN5I3Jlc291cmNlX2xhYmVsfVxuICAqL1xuICByZWFkb25seSByZXNvdXJjZUxhYmVsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJlZGVmaW5lZF9tZXRyaWNfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVkZWZpbmVkTWV0cmljVHlwZSksXG4gICAgcmVzb3VyY2VfbGFiZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VMYWJlbCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBwcmVkZWZpbmVkX21ldHJpY190eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcmVkZWZpbmVkTWV0cmljVHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcmVzb3VyY2VfbGFiZWw6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlTGFiZWwpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByZWRlZmluZWRNZXRyaWNUeXBlID0gdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1R5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXNvdXJjZUxhYmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlTGFiZWwgPSB0aGlzLl9yZXNvdXJjZUxhYmVsO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1R5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9wcmVkZWZpbmVkTWV0cmljVHlwZSA9IHZhbHVlLnByZWRlZmluZWRNZXRyaWNUeXBlO1xuICAgICAgdGhpcy5fcmVzb3VyY2VMYWJlbCA9IHZhbHVlLnJlc291cmNlTGFiZWw7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJlZGVmaW5lZF9tZXRyaWNfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcmVkZWZpbmVkTWV0cmljVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlZGVmaW5lZE1ldHJpY1R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVkZWZpbmVkX21ldHJpY190eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVkZWZpbmVkTWV0cmljVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1R5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlZGVmaW5lZE1ldHJpY1R5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1R5cGU7XG4gIH1cblxuICAvLyByZXNvdXJjZV9sYWJlbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZXNvdXJjZUxhYmVsPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUxhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfbGFiZWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlTGFiZWwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc291cmNlTGFiZWwgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VMYWJlbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZUxhYmVsO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX3BvbGljeSN0YXJnZXRfdmFsdWUgQXV0b3NjYWxpbmdQb2xpY3kjdGFyZ2V0X3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB0YXJnZXRWYWx1ZTogbnVtYmVyO1xuICAvKipcbiAgKiBwcmVkZWZpbmVkX2xvYWRfbWV0cmljX3NwZWNpZmljYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX3BvbGljeSNwcmVkZWZpbmVkX2xvYWRfbWV0cmljX3NwZWNpZmljYXRpb24gQXV0b3NjYWxpbmdQb2xpY3kjcHJlZGVmaW5lZF9sb2FkX21ldHJpY19zcGVjaWZpY2F0aW9ufVxuICAqL1xuICByZWFkb25seSBwcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24/OiBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb247XG4gIC8qKlxuICAqIHByZWRlZmluZWRfbWV0cmljX3BhaXJfc3BlY2lmaWNhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I3ByZWRlZmluZWRfbWV0cmljX3BhaXJfc3BlY2lmaWNhdGlvbiBBdXRvc2NhbGluZ1BvbGljeSNwcmVkZWZpbmVkX21ldHJpY19wYWlyX3NwZWNpZmljYXRpb259XG4gICovXG4gIHJlYWRvbmx5IHByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbj86IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbjtcbiAgLyoqXG4gICogcHJlZGVmaW5lZF9zY2FsaW5nX21ldHJpY19zcGVjaWZpY2F0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19wb2xpY3kjcHJlZGVmaW5lZF9zY2FsaW5nX21ldHJpY19zcGVjaWZpY2F0aW9uIEF1dG9zY2FsaW5nUG9saWN5I3ByZWRlZmluZWRfc2NhbGluZ19tZXRyaWNfc3BlY2lmaWNhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uPzogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHRhcmdldF92YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXRWYWx1ZSksXG4gICAgcHJlZGVmaW5lZF9sb2FkX21ldHJpY19zcGVjaWZpY2F0aW9uOiBhdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbiksXG4gICAgcHJlZGVmaW5lZF9tZXRyaWNfcGFpcl9zcGVjaWZpY2F0aW9uOiBhdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbiksXG4gICAgcHJlZGVmaW5lZF9zY2FsaW5nX21ldHJpY19zcGVjaWZpY2F0aW9uOiBhdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICB0YXJnZXRfdmFsdWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldFZhbHVlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBwcmVkZWZpbmVkX2xvYWRfbWV0cmljX3NwZWNpZmljYXRpb246IHtcbiAgICAgIHZhbHVlOiBhdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbkxpc3RcIixcbiAgICB9LFxuICAgIHByZWRlZmluZWRfbWV0cmljX3BhaXJfc3BlY2lmaWNhdGlvbjoge1xuICAgICAgdmFsdWU6IGF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEucHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uTGlzdFwiLFxuICAgIH0sXG4gICAgcHJlZGVmaW5lZF9zY2FsaW5nX21ldHJpY19zcGVjaWZpY2F0aW9uOiB7XG4gICAgICB2YWx1ZTogYXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb25MaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl90YXJnZXRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YXJnZXRWYWx1ZSA9IHRoaXMuX3RhcmdldFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbiA9IHRoaXMuX3ByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb24gPSB0aGlzLl9wcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uID0gdGhpcy5fcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdGFyZ2V0VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3RhcmdldFZhbHVlID0gdmFsdWUudGFyZ2V0VmFsdWU7XG4gICAgICB0aGlzLl9wcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbjtcbiAgICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUucHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gdGFyZ2V0X3ZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RhcmdldFZhbHVlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0YXJnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RhcmdldF92YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFyZ2V0VmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RhcmdldFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldFZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFZhbHVlO1xuICB9XG5cbiAgLy8gcHJlZGVmaW5lZF9sb2FkX21ldHJpY19zcGVjaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbiA9IG5ldyBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJwcmVkZWZpbmVkX2xvYWRfbWV0cmljX3NwZWNpZmljYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgcHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbih2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5fcHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24oKSB7XG4gICAgdGhpcy5fcHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHByZWRlZmluZWRfbWV0cmljX3BhaXJfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb24gPSBuZXcgQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25NZXRyaWNTcGVjaWZpY2F0aW9uUHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwicHJlZGVmaW5lZF9tZXRyaWNfcGFpcl9zcGVjaWZpY2F0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IHByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRQcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb24odmFsdWU6IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbikge1xuICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uKCkge1xuICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNQYWlyU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVkZWZpbmVkTWV0cmljUGFpclNwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1BhaXJTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBwcmVkZWZpbmVkX3NjYWxpbmdfbWV0cmljX3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uID0gbmV3IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInByZWRlZmluZWRfc2NhbGluZ19tZXRyaWNfc3BlY2lmaWNhdGlvblwiKTtcbiAgcHVibGljIGdldCBwcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0UHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uKHZhbHVlOiBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24pIHtcbiAgICB0aGlzLl9wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I21heF9jYXBhY2l0eV9icmVhY2hfYmVoYXZpb3IgQXV0b3NjYWxpbmdQb2xpY3kjbWF4X2NhcGFjaXR5X2JyZWFjaF9iZWhhdmlvcn1cbiAgKi9cbiAgcmVhZG9ubHkgbWF4Q2FwYWNpdHlCcmVhY2hCZWhhdmlvcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I21heF9jYXBhY2l0eV9idWZmZXIgQXV0b3NjYWxpbmdQb2xpY3kjbWF4X2NhcGFjaXR5X2J1ZmZlcn1cbiAgKi9cbiAgcmVhZG9ubHkgbWF4Q2FwYWNpdHlCdWZmZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX3BvbGljeSNtb2RlIEF1dG9zY2FsaW5nUG9saWN5I21vZGV9XG4gICovXG4gIHJlYWRvbmx5IG1vZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX3BvbGljeSNzY2hlZHVsaW5nX2J1ZmZlcl90aW1lIEF1dG9zY2FsaW5nUG9saWN5I3NjaGVkdWxpbmdfYnVmZmVyX3RpbWV9XG4gICovXG4gIHJlYWRvbmx5IHNjaGVkdWxpbmdCdWZmZXJUaW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBtZXRyaWNfc3BlY2lmaWNhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I21ldHJpY19zcGVjaWZpY2F0aW9uIEF1dG9zY2FsaW5nUG9saWN5I21ldHJpY19zcGVjaWZpY2F0aW9ufVxuICAqL1xuICByZWFkb25seSBtZXRyaWNTcGVjaWZpY2F0aW9uOiBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWF4X2NhcGFjaXR5X2JyZWFjaF9iZWhhdmlvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhDYXBhY2l0eUJyZWFjaEJlaGF2aW9yKSxcbiAgICBtYXhfY2FwYWNpdHlfYnVmZmVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heENhcGFjaXR5QnVmZmVyKSxcbiAgICBtb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1vZGUpLFxuICAgIHNjaGVkdWxpbmdfYnVmZmVyX3RpbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2NoZWR1bGluZ0J1ZmZlclRpbWUpLFxuICAgIG1ldHJpY19zcGVjaWZpY2F0aW9uOiBhdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbk1ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY1NwZWNpZmljYXRpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbWF4X2NhcGFjaXR5X2JyZWFjaF9iZWhhdmlvcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWF4Q2FwYWNpdHlCcmVhY2hCZWhhdmlvciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbWF4X2NhcGFjaXR5X2J1ZmZlcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWF4Q2FwYWNpdHlCdWZmZXIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1vZGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1vZGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNjaGVkdWxpbmdfYnVmZmVyX3RpbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNjaGVkdWxpbmdCdWZmZXJUaW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtZXRyaWNfc3BlY2lmaWNhdGlvbjoge1xuICAgICAgdmFsdWU6IGF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEubWV0cmljU3BlY2lmaWNhdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvbkxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tYXhDYXBhY2l0eUJyZWFjaEJlaGF2aW9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heENhcGFjaXR5QnJlYWNoQmVoYXZpb3IgPSB0aGlzLl9tYXhDYXBhY2l0eUJyZWFjaEJlaGF2aW9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWF4Q2FwYWNpdHlCdWZmZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4Q2FwYWNpdHlCdWZmZXIgPSB0aGlzLl9tYXhDYXBhY2l0eUJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubW9kZSA9IHRoaXMuX21vZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zY2hlZHVsaW5nQnVmZmVyVGltZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zY2hlZHVsaW5nQnVmZmVyVGltZSA9IHRoaXMuX3NjaGVkdWxpbmdCdWZmZXJUaW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWV0cmljU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXRyaWNTcGVjaWZpY2F0aW9uID0gdGhpcy5fbWV0cmljU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWF4Q2FwYWNpdHlCcmVhY2hCZWhhdmlvciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21heENhcGFjaXR5QnVmZmVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbW9kZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NjaGVkdWxpbmdCdWZmZXJUaW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXhDYXBhY2l0eUJyZWFjaEJlaGF2aW9yID0gdmFsdWUubWF4Q2FwYWNpdHlCcmVhY2hCZWhhdmlvcjtcbiAgICAgIHRoaXMuX21heENhcGFjaXR5QnVmZmVyID0gdmFsdWUubWF4Q2FwYWNpdHlCdWZmZXI7XG4gICAgICB0aGlzLl9tb2RlID0gdmFsdWUubW9kZTtcbiAgICAgIHRoaXMuX3NjaGVkdWxpbmdCdWZmZXJUaW1lID0gdmFsdWUuc2NoZWR1bGluZ0J1ZmZlclRpbWU7XG4gICAgICB0aGlzLl9tZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5tZXRyaWNTcGVjaWZpY2F0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1heF9jYXBhY2l0eV9icmVhY2hfYmVoYXZpb3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4Q2FwYWNpdHlCcmVhY2hCZWhhdmlvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWF4Q2FwYWNpdHlCcmVhY2hCZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21heF9jYXBhY2l0eV9icmVhY2hfYmVoYXZpb3InKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heENhcGFjaXR5QnJlYWNoQmVoYXZpb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21heENhcGFjaXR5QnJlYWNoQmVoYXZpb3IgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhDYXBhY2l0eUJyZWFjaEJlaGF2aW9yKCkge1xuICAgIHRoaXMuX21heENhcGFjaXR5QnJlYWNoQmVoYXZpb3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heENhcGFjaXR5QnJlYWNoQmVoYXZpb3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4Q2FwYWNpdHlCcmVhY2hCZWhhdmlvcjtcbiAgfVxuXG4gIC8vIG1heF9jYXBhY2l0eV9idWZmZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4Q2FwYWNpdHlCdWZmZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1heENhcGFjaXR5QnVmZmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWF4X2NhcGFjaXR5X2J1ZmZlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4Q2FwYWNpdHlCdWZmZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21heENhcGFjaXR5QnVmZmVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4Q2FwYWNpdHlCdWZmZXIoKSB7XG4gICAgdGhpcy5fbWF4Q2FwYWNpdHlCdWZmZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heENhcGFjaXR5QnVmZmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heENhcGFjaXR5QnVmZmVyO1xuICB9XG5cbiAgLy8gbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1vZGUoKSB7XG4gICAgdGhpcy5fbW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG5cbiAgLy8gc2NoZWR1bGluZ19idWZmZXJfdGltZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zY2hlZHVsaW5nQnVmZmVyVGltZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2NoZWR1bGluZ0J1ZmZlclRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzY2hlZHVsaW5nX2J1ZmZlcl90aW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzY2hlZHVsaW5nQnVmZmVyVGltZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2NoZWR1bGluZ0J1ZmZlclRpbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTY2hlZHVsaW5nQnVmZmVyVGltZSgpIHtcbiAgICB0aGlzLl9zY2hlZHVsaW5nQnVmZmVyVGltZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NoZWR1bGluZ0J1ZmZlclRpbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NoZWR1bGluZ0J1ZmZlclRpbWU7XG4gIH1cblxuICAvLyBtZXRyaWNfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tZXRyaWNTcGVjaWZpY2F0aW9uID0gbmV3IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcIm1ldHJpY19zcGVjaWZpY2F0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IG1ldHJpY1NwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpY1NwZWNpZmljYXRpb247XG4gIH1cbiAgcHVibGljIHB1dE1ldHJpY1NwZWNpZmljYXRpb24odmFsdWU6IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uTWV0cmljU3BlY2lmaWNhdGlvbikge1xuICAgIHRoaXMuX21ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRyaWNTcGVjaWZpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ1BvbGljeVN0ZXBBZGp1c3RtZW50IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I21ldHJpY19pbnRlcnZhbF9sb3dlcl9ib3VuZCBBdXRvc2NhbGluZ1BvbGljeSNtZXRyaWNfaW50ZXJ2YWxfbG93ZXJfYm91bmR9XG4gICovXG4gIHJlYWRvbmx5IG1ldHJpY0ludGVydmFsTG93ZXJCb3VuZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I21ldHJpY19pbnRlcnZhbF91cHBlcl9ib3VuZCBBdXRvc2NhbGluZ1BvbGljeSNtZXRyaWNfaW50ZXJ2YWxfdXBwZXJfYm91bmR9XG4gICovXG4gIHJlYWRvbmx5IG1ldHJpY0ludGVydmFsVXBwZXJCb3VuZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I3NjYWxpbmdfYWRqdXN0bWVudCBBdXRvc2NhbGluZ1BvbGljeSNzY2FsaW5nX2FkanVzdG1lbnR9XG4gICovXG4gIHJlYWRvbmx5IHNjYWxpbmdBZGp1c3RtZW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ1BvbGljeVN0ZXBBZGp1c3RtZW50VG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdQb2xpY3lTdGVwQWRqdXN0bWVudCB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1ldHJpY19pbnRlcnZhbF9sb3dlcl9ib3VuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRyaWNJbnRlcnZhbExvd2VyQm91bmQpLFxuICAgIG1ldHJpY19pbnRlcnZhbF91cHBlcl9ib3VuZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRyaWNJbnRlcnZhbFVwcGVyQm91bmQpLFxuICAgIHNjYWxpbmdfYWRqdXN0bWVudDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zY2FsaW5nQWRqdXN0bWVudCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdQb2xpY3lTdGVwQWRqdXN0bWVudFRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nUG9saWN5U3RlcEFkanVzdG1lbnQgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbWV0cmljX2ludGVydmFsX2xvd2VyX2JvdW5kOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tZXRyaWNJbnRlcnZhbExvd2VyQm91bmQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG1ldHJpY19pbnRlcnZhbF91cHBlcl9ib3VuZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWV0cmljSW50ZXJ2YWxVcHBlckJvdW5kKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzY2FsaW5nX2FkanVzdG1lbnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNjYWxpbmdBZGp1c3RtZW50KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5nUG9saWN5U3RlcEFkanVzdG1lbnRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdQb2xpY3lTdGVwQWRqdXN0bWVudCB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWV0cmljSW50ZXJ2YWxMb3dlckJvdW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1ldHJpY0ludGVydmFsTG93ZXJCb3VuZCA9IHRoaXMuX21ldHJpY0ludGVydmFsTG93ZXJCb3VuZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21ldHJpY0ludGVydmFsVXBwZXJCb3VuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXRyaWNJbnRlcnZhbFVwcGVyQm91bmQgPSB0aGlzLl9tZXRyaWNJbnRlcnZhbFVwcGVyQm91bmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zY2FsaW5nQWRqdXN0bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zY2FsaW5nQWRqdXN0bWVudCA9IHRoaXMuX3NjYWxpbmdBZGp1c3RtZW50O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lTdGVwQWRqdXN0bWVudCB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZXRyaWNJbnRlcnZhbExvd2VyQm91bmQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZXRyaWNJbnRlcnZhbFVwcGVyQm91bmQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zY2FsaW5nQWRqdXN0bWVudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZXRyaWNJbnRlcnZhbExvd2VyQm91bmQgPSB2YWx1ZS5tZXRyaWNJbnRlcnZhbExvd2VyQm91bmQ7XG4gICAgICB0aGlzLl9tZXRyaWNJbnRlcnZhbFVwcGVyQm91bmQgPSB2YWx1ZS5tZXRyaWNJbnRlcnZhbFVwcGVyQm91bmQ7XG4gICAgICB0aGlzLl9zY2FsaW5nQWRqdXN0bWVudCA9IHZhbHVlLnNjYWxpbmdBZGp1c3RtZW50O1xuICAgIH1cbiAgfVxuXG4gIC8vIG1ldHJpY19pbnRlcnZhbF9sb3dlcl9ib3VuZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXRyaWNJbnRlcnZhbExvd2VyQm91bmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1ldHJpY0ludGVydmFsTG93ZXJCb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21ldHJpY19pbnRlcnZhbF9sb3dlcl9ib3VuZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0cmljSW50ZXJ2YWxMb3dlckJvdW5kKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXRyaWNJbnRlcnZhbExvd2VyQm91bmQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXRyaWNJbnRlcnZhbExvd2VyQm91bmQoKSB7XG4gICAgdGhpcy5fbWV0cmljSW50ZXJ2YWxMb3dlckJvdW5kID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRyaWNJbnRlcnZhbExvd2VyQm91bmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljSW50ZXJ2YWxMb3dlckJvdW5kO1xuICB9XG5cbiAgLy8gbWV0cmljX2ludGVydmFsX3VwcGVyX2JvdW5kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldHJpY0ludGVydmFsVXBwZXJCb3VuZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWV0cmljSW50ZXJ2YWxVcHBlckJvdW5kKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWV0cmljX2ludGVydmFsX3VwcGVyX2JvdW5kJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZXRyaWNJbnRlcnZhbFVwcGVyQm91bmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21ldHJpY0ludGVydmFsVXBwZXJCb3VuZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1ldHJpY0ludGVydmFsVXBwZXJCb3VuZCgpIHtcbiAgICB0aGlzLl9tZXRyaWNJbnRlcnZhbFVwcGVyQm91bmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldHJpY0ludGVydmFsVXBwZXJCb3VuZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRyaWNJbnRlcnZhbFVwcGVyQm91bmQ7XG4gIH1cblxuICAvLyBzY2FsaW5nX2FkanVzdG1lbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2NhbGluZ0FkanVzdG1lbnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHNjYWxpbmdBZGp1c3RtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc2NhbGluZ19hZGp1c3RtZW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzY2FsaW5nQWRqdXN0bWVudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2NhbGluZ0FkanVzdG1lbnQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NhbGluZ0FkanVzdG1lbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGluZ0FkanVzdG1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5nUG9saWN5U3RlcEFkanVzdG1lbnRMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBBdXRvc2NhbGluZ1BvbGljeVN0ZXBBZGp1c3RtZW50W10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IEF1dG9zY2FsaW5nUG9saWN5U3RlcEFkanVzdG1lbnRPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgQXV0b3NjYWxpbmdQb2xpY3lTdGVwQWRqdXN0bWVudE91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25NZXRyaWNEaW1lbnNpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19wb2xpY3kjbmFtZSBBdXRvc2NhbGluZ1BvbGljeSNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX3BvbGljeSN2YWx1ZSBBdXRvc2NhbGluZ1BvbGljeSN2YWx1ZX1cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25NZXRyaWNEaW1lbnNpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uTWV0cmljRGltZW5zaW9uIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbk1ldHJpY0RpbWVuc2lvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25NZXRyaWNEaW1lbnNpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25NZXRyaWNEaW1lbnNpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbk1ldHJpY0RpbWVuc2lvbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uYW1lID0gdGhpcy5fbmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uTWV0cmljRGltZW5zaW9uIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uYW1lID0gdmFsdWUubmFtZTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92YWx1ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uTWV0cmljRGltZW5zaW9uTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbk1ldHJpY0RpbWVuc2lvbltdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uTWV0cmljRGltZW5zaW9uT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25NZXRyaWNEaW1lbnNpb25PdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I21ldHJpY19uYW1lIEF1dG9zY2FsaW5nUG9saWN5I21ldHJpY19uYW1lfVxuICAqL1xuICByZWFkb25seSBtZXRyaWNOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX3BvbGljeSNuYW1lc3BhY2UgQXV0b3NjYWxpbmdQb2xpY3kjbmFtZXNwYWNlfVxuICAqL1xuICByZWFkb25seSBuYW1lc3BhY2U6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I3N0YXRpc3RpYyBBdXRvc2NhbGluZ1BvbGljeSNzdGF0aXN0aWN9XG4gICovXG4gIHJlYWRvbmx5IHN0YXRpc3RpYzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19wb2xpY3kjdW5pdCBBdXRvc2NhbGluZ1BvbGljeSN1bml0fVxuICAqL1xuICByZWFkb25seSB1bml0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBtZXRyaWNfZGltZW5zaW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19wb2xpY3kjbWV0cmljX2RpbWVuc2lvbiBBdXRvc2NhbGluZ1BvbGljeSNtZXRyaWNfZGltZW5zaW9ufVxuICAqL1xuICByZWFkb25seSBtZXRyaWNEaW1lbnNpb24/OiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uTWV0cmljRGltZW5zaW9uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtZXRyaWNfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRyaWNOYW1lKSxcbiAgICBuYW1lc3BhY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZXNwYWNlKSxcbiAgICBzdGF0aXN0aWM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdGlzdGljKSxcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIG1ldHJpY19kaW1lbnNpb246IGNka3RmLmxpc3RNYXBwZXIoYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbk1ldHJpY0RpbWVuc2lvblRvVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLm1ldHJpY0RpbWVuc2lvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBtZXRyaWNfbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWV0cmljTmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbmFtZXNwYWNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5uYW1lc3BhY2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHN0YXRpc3RpYzoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3RhdGlzdGljKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB1bml0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtZXRyaWNfZGltZW5zaW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChhdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uTWV0cmljRGltZW5zaW9uVG9IY2xUZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEubWV0cmljRGltZW5zaW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbk1ldHJpY0RpbWVuc2lvbkxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWV0cmljTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXRyaWNOYW1lID0gdGhpcy5fbWV0cmljTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uYW1lc3BhY2UgPSB0aGlzLl9uYW1lc3BhY2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGF0aXN0aWMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhdGlzdGljID0gdGhpcy5fc3RhdGlzdGljO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdW5pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51bml0ID0gdGhpcy5fdW5pdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21ldHJpY0RpbWVuc2lvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXRyaWNEaW1lbnNpb24gPSB0aGlzLl9tZXRyaWNEaW1lbnNpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWV0cmljTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25hbWVzcGFjZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0YXRpc3RpYyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZXRyaWNEaW1lbnNpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWV0cmljTmFtZSA9IHZhbHVlLm1ldHJpY05hbWU7XG4gICAgICB0aGlzLl9uYW1lc3BhY2UgPSB2YWx1ZS5uYW1lc3BhY2U7XG4gICAgICB0aGlzLl9zdGF0aXN0aWMgPSB2YWx1ZS5zdGF0aXN0aWM7XG4gICAgICB0aGlzLl91bml0ID0gdmFsdWUudW5pdDtcbiAgICAgIHRoaXMuX21ldHJpY0RpbWVuc2lvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUubWV0cmljRGltZW5zaW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1ldHJpY19uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21ldHJpY05hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1ldHJpY05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXRyaWNfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0cmljTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWV0cmljTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRyaWNOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpY05hbWU7XG4gIH1cblxuICAvLyBuYW1lc3BhY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZXNwYWNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lc3BhY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWVzcGFjZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZXNwYWNlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVzcGFjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lc3BhY2U7XG4gIH1cblxuICAvLyBzdGF0aXN0aWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3RhdGlzdGljPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGF0aXN0aWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0aXN0aWMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXRpc3RpYyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdGlzdGljID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXRpc3RpY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0aXN0aWM7XG4gIH1cblxuICAvLyB1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB1bml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VW5pdCgpIHtcbiAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1bml0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaXQ7XG4gIH1cblxuICAvLyBtZXRyaWNfZGltZW5zaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldHJpY0RpbWVuc2lvbiA9IG5ldyBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uTWV0cmljRGltZW5zaW9uTGlzdCh0aGlzLCBcIm1ldHJpY19kaW1lbnNpb25cIiwgZmFsc2UpO1xuICBwdWJsaWMgZ2V0IG1ldHJpY0RpbWVuc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljRGltZW5zaW9uO1xuICB9XG4gIHB1YmxpYyBwdXRNZXRyaWNEaW1lbnNpb24odmFsdWU6IEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25NZXRyaWNEaW1lbnNpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fbWV0cmljRGltZW5zaW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXRyaWNEaW1lbnNpb24oKSB7XG4gICAgdGhpcy5fbWV0cmljRGltZW5zaW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldHJpY0RpbWVuc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRyaWNEaW1lbnNpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I3ByZWRlZmluZWRfbWV0cmljX3R5cGUgQXV0b3NjYWxpbmdQb2xpY3kjcHJlZGVmaW5lZF9tZXRyaWNfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgcHJlZGVmaW5lZE1ldHJpY1R5cGU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I3Jlc291cmNlX2xhYmVsIEF1dG9zY2FsaW5nUG9saWN5I3Jlc291cmNlX2xhYmVsfVxuICAqL1xuICByZWFkb25seSByZXNvdXJjZUxhYmVsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uUHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByZWRlZmluZWRfbWV0cmljX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlZGVmaW5lZE1ldHJpY1R5cGUpLFxuICAgIHJlc291cmNlX2xhYmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlTGFiZWwpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uUHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgcHJlZGVmaW5lZF9tZXRyaWNfdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucHJlZGVmaW5lZE1ldHJpY1R5cGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHJlc291cmNlX2xhYmVsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUxhYmVsKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uUHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uUHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByZWRlZmluZWRNZXRyaWNUeXBlID0gdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1R5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXNvdXJjZUxhYmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlTGFiZWwgPSB0aGlzLl9yZXNvdXJjZUxhYmVsO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1R5cGUgPSB2YWx1ZS5wcmVkZWZpbmVkTWV0cmljVHlwZTtcbiAgICAgIHRoaXMuX3Jlc291cmNlTGFiZWwgPSB2YWx1ZS5yZXNvdXJjZUxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIC8vIHByZWRlZmluZWRfbWV0cmljX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJlZGVmaW5lZE1ldHJpY1R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByZWRlZmluZWRNZXRyaWNUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZGVmaW5lZF9tZXRyaWNfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZGVmaW5lZE1ldHJpY1R5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWRlZmluZWRNZXRyaWNUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNUeXBlO1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfbGFiZWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VMYWJlbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2xhYmVsJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZUxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzb3VyY2VMYWJlbCgpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUxhYmVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlTGFiZWw7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19wb2xpY3kjZGlzYWJsZV9zY2FsZV9pbiBBdXRvc2NhbGluZ1BvbGljeSNkaXNhYmxlX3NjYWxlX2lufVxuICAqL1xuICByZWFkb25seSBkaXNhYmxlU2NhbGVJbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I3RhcmdldF92YWx1ZSBBdXRvc2NhbGluZ1BvbGljeSN0YXJnZXRfdmFsdWV9XG4gICovXG4gIHJlYWRvbmx5IHRhcmdldFZhbHVlOiBudW1iZXI7XG4gIC8qKlxuICAqIGN1c3RvbWl6ZWRfbWV0cmljX3NwZWNpZmljYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX3BvbGljeSNjdXN0b21pemVkX21ldHJpY19zcGVjaWZpY2F0aW9uIEF1dG9zY2FsaW5nUG9saWN5I2N1c3RvbWl6ZWRfbWV0cmljX3NwZWNpZmljYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uPzogQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbjtcbiAgLyoqXG4gICogcHJlZGVmaW5lZF9tZXRyaWNfc3BlY2lmaWNhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I3ByZWRlZmluZWRfbWV0cmljX3NwZWNpZmljYXRpb24gQXV0b3NjYWxpbmdQb2xpY3kjcHJlZGVmaW5lZF9tZXRyaWNfc3BlY2lmaWNhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgcHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb24/OiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRpc2FibGVfc2NhbGVfaW46IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRpc2FibGVTY2FsZUluKSxcbiAgICB0YXJnZXRfdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0VmFsdWUpLFxuICAgIGN1c3RvbWl6ZWRfbWV0cmljX3NwZWNpZmljYXRpb246IGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uKSxcbiAgICBwcmVkZWZpbmVkX21ldHJpY19zcGVjaWZpY2F0aW9uOiBhdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBkaXNhYmxlX3NjYWxlX2luOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGlzYWJsZVNjYWxlSW4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICB0YXJnZXRfdmFsdWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldFZhbHVlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBjdXN0b21pemVkX21ldHJpY19zcGVjaWZpY2F0aW9uOiB7XG4gICAgICB2YWx1ZTogYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuY3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uTGlzdFwiLFxuICAgIH0sXG4gICAgcHJlZGVmaW5lZF9tZXRyaWNfc3BlY2lmaWNhdGlvbjoge1xuICAgICAgdmFsdWU6IGF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uUHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbkxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEF1dG9zY2FsaW5nUG9saWN5VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kaXNhYmxlU2NhbGVJbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kaXNhYmxlU2NhbGVJbiA9IHRoaXMuX2Rpc2FibGVTY2FsZUluO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFyZ2V0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFyZ2V0VmFsdWUgPSB0aGlzLl90YXJnZXRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2N1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uID0gdGhpcy5fY3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbiA9IHRoaXMuX3ByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kaXNhYmxlU2NhbGVJbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhcmdldFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Rpc2FibGVTY2FsZUluID0gdmFsdWUuZGlzYWJsZVNjYWxlSW47XG4gICAgICB0aGlzLl90YXJnZXRWYWx1ZSA9IHZhbHVlLnRhcmdldFZhbHVlO1xuICAgICAgdGhpcy5fY3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmN1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRpc2FibGVfc2NhbGVfaW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGlzYWJsZVNjYWxlSW4/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGRpc2FibGVTY2FsZUluKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Rpc2FibGVfc2NhbGVfaW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpc2FibGVTY2FsZUluKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9kaXNhYmxlU2NhbGVJbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERpc2FibGVTY2FsZUluKCkge1xuICAgIHRoaXMuX2Rpc2FibGVTY2FsZUluID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkaXNhYmxlU2NhbGVJbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlU2NhbGVJbjtcbiAgfVxuXG4gIC8vIHRhcmdldF92YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90YXJnZXRWYWx1ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGFyZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0YXJnZXRfdmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldFZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90YXJnZXRWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRWYWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRWYWx1ZTtcbiAgfVxuXG4gIC8vIGN1c3RvbWl6ZWRfbWV0cmljX3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb24gPSBuZXcgQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImN1c3RvbWl6ZWRfbWV0cmljX3NwZWNpZmljYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgY3VzdG9taXplZE1ldHJpY1NwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRDdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbih2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbikge1xuICAgIHRoaXMuX2N1c3RvbWl6ZWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9jdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21pemVkTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcHJlZGVmaW5lZF9tZXRyaWNfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbiA9IG5ldyBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwicHJlZGVmaW5lZF9tZXRyaWNfc3BlY2lmaWNhdGlvblwiKTtcbiAgcHVibGljIGdldCBwcmVkZWZpbmVkTWV0cmljU3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uKHZhbHVlOiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5fcHJlZGVmaW5lZE1ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uKCkge1xuICAgIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWRlZmluZWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX3BvbGljeSBhd3NfYXV0b3NjYWxpbmdfcG9saWN5fVxuKi9cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ1BvbGljeSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfYXV0b3NjYWxpbmdfcG9saWN5XCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIEF1dG9zY2FsaW5nUG9saWN5IHJlc291cmNlIHVwb24gcnVubmluZyBcImNka3RmIHBsYW4gPHN0YWNrLW5hbWU+XCJcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpbXBvcnRUb0lkIFRoZSBjb25zdHJ1Y3QgaWQgdXNlZCBpbiB0aGUgZ2VuZXJhdGVkIGNvbmZpZyBmb3IgdGhlIEF1dG9zY2FsaW5nUG9saWN5IHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBBdXRvc2NhbGluZ1BvbGljeSB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5I2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBBdXRvc2NhbGluZ1BvbGljeSB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfYXV0b3NjYWxpbmdfcG9saWN5XCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfcG9saWN5IGF3c19hdXRvc2NhbGluZ19wb2xpY3l9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIEF1dG9zY2FsaW5nUG9saWN5Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEF1dG9zY2FsaW5nUG9saWN5Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYXV0b3NjYWxpbmdfcG9saWN5JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fYWRqdXN0bWVudFR5cGUgPSBjb25maWcuYWRqdXN0bWVudFR5cGU7XG4gICAgdGhpcy5fYXV0b3NjYWxpbmdHcm91cE5hbWUgPSBjb25maWcuYXV0b3NjYWxpbmdHcm91cE5hbWU7XG4gICAgdGhpcy5fY29vbGRvd24gPSBjb25maWcuY29vbGRvd247XG4gICAgdGhpcy5fZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXAgPSBjb25maWcuZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXA7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gICAgdGhpcy5fbWV0cmljQWdncmVnYXRpb25UeXBlID0gY29uZmlnLm1ldHJpY0FnZ3JlZ2F0aW9uVHlwZTtcbiAgICB0aGlzLl9taW5BZGp1c3RtZW50TWFnbml0dWRlID0gY29uZmlnLm1pbkFkanVzdG1lbnRNYWduaXR1ZGU7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3BvbGljeVR5cGUgPSBjb25maWcucG9saWN5VHlwZTtcbiAgICB0aGlzLl9zY2FsaW5nQWRqdXN0bWVudCA9IGNvbmZpZy5zY2FsaW5nQWRqdXN0bWVudDtcbiAgICB0aGlzLl9wcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5wcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fc3RlcEFkanVzdG1lbnQuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zdGVwQWRqdXN0bWVudDtcbiAgICB0aGlzLl90YXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy50YXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb247XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFkanVzdG1lbnRfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hZGp1c3RtZW50VHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWRqdXN0bWVudFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhZGp1c3RtZW50X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFkanVzdG1lbnRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hZGp1c3RtZW50VHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFkanVzdG1lbnRUeXBlKCkge1xuICAgIHRoaXMuX2FkanVzdG1lbnRUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhZGp1c3RtZW50VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hZGp1c3RtZW50VHlwZTtcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXV0b3NjYWxpbmdfZ3JvdXBfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hdXRvc2NhbGluZ0dyb3VwTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXV0b3NjYWxpbmdHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRvc2NhbGluZ19ncm91cF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvc2NhbGluZ0dyb3VwTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXV0b3NjYWxpbmdHcm91cE5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b3NjYWxpbmdHcm91cE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b3NjYWxpbmdHcm91cE5hbWU7XG4gIH1cblxuICAvLyBjb29sZG93biAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb29sZG93bj86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgY29vbGRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdjb29sZG93bicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29vbGRvd24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2Nvb2xkb3duID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29vbGRvd24oKSB7XG4gICAgdGhpcy5fY29vbGRvd24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvb2xkb3duSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvb2xkb3duO1xuICB9XG5cbiAgLy8gZXN0aW1hdGVkX2luc3RhbmNlX3dhcm11cCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lc3RpbWF0ZWRJbnN0YW5jZVdhcm11cD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdlc3RpbWF0ZWRfaW5zdGFuY2Vfd2FybXVwJyk7XG4gIH1cbiAgcHVibGljIHNldCBlc3RpbWF0ZWRJbnN0YW5jZVdhcm11cCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFc3RpbWF0ZWRJbnN0YW5jZVdhcm11cCgpIHtcbiAgICB0aGlzLl9lc3RpbWF0ZWRJbnN0YW5jZVdhcm11cCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXA7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBtZXRyaWNfYWdncmVnYXRpb25fdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldHJpY0FnZ3JlZ2F0aW9uVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWV0cmljQWdncmVnYXRpb25UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWV0cmljX2FnZ3JlZ2F0aW9uX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1ldHJpY0FnZ3JlZ2F0aW9uVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWV0cmljQWdncmVnYXRpb25UeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWV0cmljQWdncmVnYXRpb25UeXBlKCkge1xuICAgIHRoaXMuX21ldHJpY0FnZ3JlZ2F0aW9uVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWV0cmljQWdncmVnYXRpb25UeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpY0FnZ3JlZ2F0aW9uVHlwZTtcbiAgfVxuXG4gIC8vIG1pbl9hZGp1c3RtZW50X21hZ25pdHVkZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9taW5BZGp1c3RtZW50TWFnbml0dWRlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtaW5BZGp1c3RtZW50TWFnbml0dWRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX2FkanVzdG1lbnRfbWFnbml0dWRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5BZGp1c3RtZW50TWFnbml0dWRlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9taW5BZGp1c3RtZW50TWFnbml0dWRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWluQWRqdXN0bWVudE1hZ25pdHVkZSgpIHtcbiAgICB0aGlzLl9taW5BZGp1c3RtZW50TWFnbml0dWRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtaW5BZGp1c3RtZW50TWFnbml0dWRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbkFkanVzdG1lbnRNYWduaXR1ZGU7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHBvbGljeV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BvbGljeVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBvbGljeVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwb2xpY3lfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9saWN5VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcG9saWN5VHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBvbGljeVR5cGUoKSB7XG4gICAgdGhpcy5fcG9saWN5VHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9saWN5VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb2xpY3lUeXBlO1xuICB9XG5cbiAgLy8gc2NhbGluZ19hZGp1c3RtZW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NjYWxpbmdBZGp1c3RtZW50PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBzY2FsaW5nQWRqdXN0bWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NjYWxpbmdfYWRqdXN0bWVudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2NhbGluZ0FkanVzdG1lbnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NjYWxpbmdBZGp1c3RtZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2NhbGluZ0FkanVzdG1lbnQoKSB7XG4gICAgdGhpcy5fc2NhbGluZ0FkanVzdG1lbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjYWxpbmdBZGp1c3RtZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxpbmdBZGp1c3RtZW50O1xuICB9XG5cbiAgLy8gcHJlZGljdGl2ZV9zY2FsaW5nX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uID0gbmV3IEF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwicHJlZGljdGl2ZV9zY2FsaW5nX2NvbmZpZ3VyYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgcHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbih2YWx1ZTogQXV0b3NjYWxpbmdQb2xpY3lQcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9wcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9wcmVkaWN0aXZlU2NhbGluZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc3RlcF9hZGp1c3RtZW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0ZXBBZGp1c3RtZW50ID0gbmV3IEF1dG9zY2FsaW5nUG9saWN5U3RlcEFkanVzdG1lbnRMaXN0KHRoaXMsIFwic3RlcF9hZGp1c3RtZW50XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHN0ZXBBZGp1c3RtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGVwQWRqdXN0bWVudDtcbiAgfVxuICBwdWJsaWMgcHV0U3RlcEFkanVzdG1lbnQodmFsdWU6IEF1dG9zY2FsaW5nUG9saWN5U3RlcEFkanVzdG1lbnRbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc3RlcEFkanVzdG1lbnQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0ZXBBZGp1c3RtZW50KCkge1xuICAgIHRoaXMuX3N0ZXBBZGp1c3RtZW50LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0ZXBBZGp1c3RtZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXBBZGp1c3RtZW50LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0YXJnZXRfdHJhY2tpbmdfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24gPSBuZXcgQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJ0YXJnZXRfdHJhY2tpbmdfY29uZmlndXJhdGlvblwiKTtcbiAgcHVibGljIGdldCB0YXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uKHZhbHVlOiBBdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX3RhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3RhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkanVzdG1lbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWRqdXN0bWVudFR5cGUpLFxuICAgICAgYXV0b3NjYWxpbmdfZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYXV0b3NjYWxpbmdHcm91cE5hbWUpLFxuICAgICAgY29vbGRvd246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2Nvb2xkb3duKSxcbiAgICAgIGVzdGltYXRlZF9pbnN0YW5jZV93YXJtdXA6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2VzdGltYXRlZEluc3RhbmNlV2FybXVwKSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBtZXRyaWNfYWdncmVnYXRpb25fdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbWV0cmljQWdncmVnYXRpb25UeXBlKSxcbiAgICAgIG1pbl9hZGp1c3RtZW50X21hZ25pdHVkZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWluQWRqdXN0bWVudE1hZ25pdHVkZSksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHBvbGljeV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wb2xpY3lUeXBlKSxcbiAgICAgIHNjYWxpbmdfYWRqdXN0bWVudDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fc2NhbGluZ0FkanVzdG1lbnQpLFxuICAgICAgcHJlZGljdGl2ZV9zY2FsaW5nX2NvbmZpZ3VyYXRpb246IGF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fcHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgc3RlcF9hZGp1c3RtZW50OiBjZGt0Zi5saXN0TWFwcGVyKGF1dG9zY2FsaW5nUG9saWN5U3RlcEFkanVzdG1lbnRUb1RlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fc3RlcEFkanVzdG1lbnQuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0YXJnZXRfdHJhY2tpbmdfY29uZmlndXJhdGlvbjogYXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl90YXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBhZGp1c3RtZW50X3R5cGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2FkanVzdG1lbnRUeXBlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgYXV0b3NjYWxpbmdfZ3JvdXBfbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fYXV0b3NjYWxpbmdHcm91cE5hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBjb29sZG93bjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fY29vbGRvd24pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBlc3RpbWF0ZWRfaW5zdGFuY2Vfd2FybXVwOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9lc3RpbWF0ZWRJbnN0YW5jZVdhcm11cCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG1ldHJpY19hZ2dyZWdhdGlvbl90eXBlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9tZXRyaWNBZ2dyZWdhdGlvblR5cGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBtaW5fYWRqdXN0bWVudF9tYWduaXR1ZGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX21pbkFkanVzdG1lbnRNYWduaXR1ZGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgcG9saWN5X3R5cGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3BvbGljeVR5cGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzY2FsaW5nX2FkanVzdG1lbnQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX3NjYWxpbmdBZGp1c3RtZW50KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgcHJlZGljdGl2ZV9zY2FsaW5nX2NvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgdmFsdWU6IGF1dG9zY2FsaW5nUG9saWN5UHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0odGhpcy5fcHJlZGljdGl2ZVNjYWxpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBdXRvc2NhbGluZ1BvbGljeVByZWRpY3RpdmVTY2FsaW5nQ29uZmlndXJhdGlvbkxpc3RcIixcbiAgICAgIH0sXG4gICAgICBzdGVwX2FkanVzdG1lbnQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woYXV0b3NjYWxpbmdQb2xpY3lTdGVwQWRqdXN0bWVudFRvSGNsVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9zdGVwQWRqdXN0bWVudC5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBdXRvc2NhbGluZ1BvbGljeVN0ZXBBZGp1c3RtZW50TGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHRhcmdldF90cmFja2luZ19jb25maWd1cmF0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBhdXRvc2NhbGluZ1BvbGljeVRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHRoaXMuX3RhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXV0b3NjYWxpbmdQb2xpY3lUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=