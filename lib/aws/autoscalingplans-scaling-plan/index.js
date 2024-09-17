"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoscalingplansScalingPlan = exports.AutoscalingplansScalingPlanScalingInstructionList = exports.AutoscalingplansScalingPlanScalingInstructionOutputReference = exports.autoscalingplansScalingPlanScalingInstructionToHclTerraform = exports.autoscalingplansScalingPlanScalingInstructionToTerraform = exports.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList = exports.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference = exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToHclTerraform = exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToTerraform = exports.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference = exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToHclTerraform = exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToTerraform = exports.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference = exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToHclTerraform = exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToTerraform = exports.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference = exports.autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToHclTerraform = exports.autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToTerraform = exports.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference = exports.autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToHclTerraform = exports.autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToTerraform = exports.AutoscalingplansScalingPlanApplicationSourceOutputReference = exports.autoscalingplansScalingPlanApplicationSourceToHclTerraform = exports.autoscalingplansScalingPlanApplicationSourceToTerraform = exports.AutoscalingplansScalingPlanApplicationSourceTagFilterList = exports.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference = exports.autoscalingplansScalingPlanApplicationSourceTagFilterToHclTerraform = exports.autoscalingplansScalingPlanApplicationSourceTagFilterToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function autoscalingplansScalingPlanApplicationSourceTagFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.values),
    };
}
exports.autoscalingplansScalingPlanApplicationSourceTagFilterToTerraform = autoscalingplansScalingPlanApplicationSourceTagFilterToTerraform;
function autoscalingplansScalingPlanApplicationSourceTagFilterToHclTerraform(struct) {
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
        values: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.values),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingplansScalingPlanApplicationSourceTagFilterToHclTerraform = autoscalingplansScalingPlanApplicationSourceTagFilterToHclTerraform;
class AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._values = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._values = value.values;
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
    get values() {
        return cdktf.Fn.tolist(this.getListAttribute('values'));
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
exports.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference = AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference[_a] = { fqn: "@cdktf/aws-cdk.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference", version: "0.0.0" };
class AutoscalingplansScalingPlanApplicationSourceTagFilterList extends cdktf.ComplexList {
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
        return new AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.AutoscalingplansScalingPlanApplicationSourceTagFilterList = AutoscalingplansScalingPlanApplicationSourceTagFilterList;
_b = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlanApplicationSourceTagFilterList[_b] = { fqn: "@cdktf/aws-cdk.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList", version: "0.0.0" };
function autoscalingplansScalingPlanApplicationSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudformation_stack_arn: cdktf.stringToTerraform(struct.cloudformationStackArn),
        tag_filter: cdktf.listMapper(autoscalingplansScalingPlanApplicationSourceTagFilterToTerraform, true)(struct.tagFilter),
    };
}
exports.autoscalingplansScalingPlanApplicationSourceToTerraform = autoscalingplansScalingPlanApplicationSourceToTerraform;
function autoscalingplansScalingPlanApplicationSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudformation_stack_arn: {
            value: cdktf.stringToHclTerraform(struct.cloudformationStackArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_filter: {
            value: cdktf.listMapperHcl(autoscalingplansScalingPlanApplicationSourceTagFilterToHclTerraform, true)(struct.tagFilter),
            isBlock: true,
            type: "set",
            storageClassType: "AutoscalingplansScalingPlanApplicationSourceTagFilterList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingplansScalingPlanApplicationSourceToHclTerraform = autoscalingplansScalingPlanApplicationSourceToHclTerraform;
class AutoscalingplansScalingPlanApplicationSourceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // tag_filter - computed: false, optional: true, required: false
        this._tagFilter = new AutoscalingplansScalingPlanApplicationSourceTagFilterList(this, "tag_filter", true);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._cloudformationStackArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudformationStackArn = this._cloudformationStackArn;
        }
        if (this._tagFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagFilter = this._tagFilter?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cloudformationStackArn = undefined;
            this._tagFilter.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cloudformationStackArn = value.cloudformationStackArn;
            this._tagFilter.internalValue = value.tagFilter;
        }
    }
    get cloudformationStackArn() {
        return this.getStringAttribute('cloudformation_stack_arn');
    }
    set cloudformationStackArn(value) {
        this._cloudformationStackArn = value;
    }
    resetCloudformationStackArn() {
        this._cloudformationStackArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudformationStackArnInput() {
        return this._cloudformationStackArn;
    }
    get tagFilter() {
        return this._tagFilter;
    }
    putTagFilter(value) {
        this._tagFilter.internalValue = value;
    }
    resetTagFilter() {
        this._tagFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagFilterInput() {
        return this._tagFilter.internalValue;
    }
}
exports.AutoscalingplansScalingPlanApplicationSourceOutputReference = AutoscalingplansScalingPlanApplicationSourceOutputReference;
_c = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlanApplicationSourceOutputReference[_c] = { fqn: "@cdktf/aws-cdk.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference", version: "0.0.0" };
function autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct.dimensions),
        metric_name: cdktf.stringToTerraform(struct.metricName),
        namespace: cdktf.stringToTerraform(struct.namespace),
        statistic: cdktf.stringToTerraform(struct.statistic),
        unit: cdktf.stringToTerraform(struct.unit),
    };
}
exports.autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToTerraform = autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToTerraform;
function autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        dimensions: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.dimensions),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToHclTerraform = autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToHclTerraform;
class AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._dimensions !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions;
        }
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dimensions = undefined;
            this._metricName = undefined;
            this._namespace = undefined;
            this._statistic = undefined;
            this._unit = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dimensions = value.dimensions;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
            this._statistic = value.statistic;
            this._unit = value.unit;
        }
    }
    get dimensions() {
        return this.getStringMapAttribute('dimensions');
    }
    set dimensions(value) {
        this._dimensions = value;
    }
    resetDimensions() {
        this._dimensions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dimensionsInput() {
        return this._dimensions;
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
}
exports.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference = AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference;
_d = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference[_d] = { fqn: "@cdktf/aws-cdk.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference", version: "0.0.0" };
function autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        predefined_load_metric_type: cdktf.stringToTerraform(struct.predefinedLoadMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel),
    };
}
exports.autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToTerraform = autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToTerraform;
function autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        predefined_load_metric_type: {
            value: cdktf.stringToHclTerraform(struct.predefinedLoadMetricType),
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
exports.autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToHclTerraform = autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToHclTerraform;
class AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._predefinedLoadMetricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedLoadMetricType = this._predefinedLoadMetricType;
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
            this._predefinedLoadMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._predefinedLoadMetricType = value.predefinedLoadMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }
    get predefinedLoadMetricType() {
        return this.getStringAttribute('predefined_load_metric_type');
    }
    set predefinedLoadMetricType(value) {
        this._predefinedLoadMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedLoadMetricTypeInput() {
        return this._predefinedLoadMetricType;
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
exports.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference = AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference;
_e = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference[_e] = { fqn: "@cdktf/aws-cdk.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference", version: "0.0.0" };
function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct.dimensions),
        metric_name: cdktf.stringToTerraform(struct.metricName),
        namespace: cdktf.stringToTerraform(struct.namespace),
        statistic: cdktf.stringToTerraform(struct.statistic),
        unit: cdktf.stringToTerraform(struct.unit),
    };
}
exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToTerraform = autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToTerraform;
function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        dimensions: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.dimensions),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToHclTerraform = autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToHclTerraform;
class AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._dimensions !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions;
        }
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dimensions = undefined;
            this._metricName = undefined;
            this._namespace = undefined;
            this._statistic = undefined;
            this._unit = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dimensions = value.dimensions;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
            this._statistic = value.statistic;
            this._unit = value.unit;
        }
    }
    get dimensions() {
        return this.getStringMapAttribute('dimensions');
    }
    set dimensions(value) {
        this._dimensions = value;
    }
    resetDimensions() {
        this._dimensions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dimensionsInput() {
        return this._dimensions;
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
}
exports.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference = AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference;
_f = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference[_f] = { fqn: "@cdktf/aws-cdk.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference", version: "0.0.0" };
function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        predefined_scaling_metric_type: cdktf.stringToTerraform(struct.predefinedScalingMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel),
    };
}
exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToTerraform = autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToTerraform;
function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        predefined_scaling_metric_type: {
            value: cdktf.stringToHclTerraform(struct.predefinedScalingMetricType),
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
exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToHclTerraform = autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToHclTerraform;
class AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._predefinedScalingMetricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedScalingMetricType = this._predefinedScalingMetricType;
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
            this._predefinedScalingMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._predefinedScalingMetricType = value.predefinedScalingMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }
    get predefinedScalingMetricType() {
        return this.getStringAttribute('predefined_scaling_metric_type');
    }
    set predefinedScalingMetricType(value) {
        this._predefinedScalingMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    get predefinedScalingMetricTypeInput() {
        return this._predefinedScalingMetricType;
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
exports.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference = AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference;
_g = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference[_g] = { fqn: "@cdktf/aws-cdk.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference", version: "0.0.0" };
function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable_scale_in: cdktf.booleanToTerraform(struct.disableScaleIn),
        estimated_instance_warmup: cdktf.numberToTerraform(struct.estimatedInstanceWarmup),
        scale_in_cooldown: cdktf.numberToTerraform(struct.scaleInCooldown),
        scale_out_cooldown: cdktf.numberToTerraform(struct.scaleOutCooldown),
        target_value: cdktf.numberToTerraform(struct.targetValue),
        customized_scaling_metric_specification: autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToTerraform(struct.customizedScalingMetricSpecification),
        predefined_scaling_metric_specification: autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToTerraform(struct.predefinedScalingMetricSpecification),
    };
}
exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToTerraform = autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToTerraform;
function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToHclTerraform(struct) {
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
        estimated_instance_warmup: {
            value: cdktf.numberToHclTerraform(struct.estimatedInstanceWarmup),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scale_in_cooldown: {
            value: cdktf.numberToHclTerraform(struct.scaleInCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scale_out_cooldown: {
            value: cdktf.numberToHclTerraform(struct.scaleOutCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        target_value: {
            value: cdktf.numberToHclTerraform(struct.targetValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        customized_scaling_metric_specification: {
            value: autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToHclTerraform(struct.customizedScalingMetricSpecification),
            isBlock: true,
            type: "list",
            storageClassType: "AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationList",
        },
        predefined_scaling_metric_specification: {
            value: autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToHclTerraform(struct.predefinedScalingMetricSpecification),
            isBlock: true,
            type: "list",
            storageClassType: "AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToHclTerraform = autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToHclTerraform;
class AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // customized_scaling_metric_specification - computed: false, optional: true, required: false
        this._customizedScalingMetricSpecification = new AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference(this, "customized_scaling_metric_specification");
        // predefined_scaling_metric_specification - computed: false, optional: true, required: false
        this._predefinedScalingMetricSpecification = new AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference(this, "predefined_scaling_metric_specification");
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._disableScaleIn !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableScaleIn = this._disableScaleIn;
        }
        if (this._estimatedInstanceWarmup !== undefined) {
            hasAnyValues = true;
            internalValueResult.estimatedInstanceWarmup = this._estimatedInstanceWarmup;
        }
        if (this._scaleInCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleInCooldown = this._scaleInCooldown;
        }
        if (this._scaleOutCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
        }
        if (this._targetValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        if (this._customizedScalingMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customizedScalingMetricSpecification = this._customizedScalingMetricSpecification?.internalValue;
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
            this.resolvableValue = undefined;
            this._disableScaleIn = undefined;
            this._estimatedInstanceWarmup = undefined;
            this._scaleInCooldown = undefined;
            this._scaleOutCooldown = undefined;
            this._targetValue = undefined;
            this._customizedScalingMetricSpecification.internalValue = undefined;
            this._predefinedScalingMetricSpecification.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disableScaleIn = value.disableScaleIn;
            this._estimatedInstanceWarmup = value.estimatedInstanceWarmup;
            this._scaleInCooldown = value.scaleInCooldown;
            this._scaleOutCooldown = value.scaleOutCooldown;
            this._targetValue = value.targetValue;
            this._customizedScalingMetricSpecification.internalValue = value.customizedScalingMetricSpecification;
            this._predefinedScalingMetricSpecification.internalValue = value.predefinedScalingMetricSpecification;
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
    get scaleInCooldown() {
        return this.getNumberAttribute('scale_in_cooldown');
    }
    set scaleInCooldown(value) {
        this._scaleInCooldown = value;
    }
    resetScaleInCooldown() {
        this._scaleInCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scaleInCooldownInput() {
        return this._scaleInCooldown;
    }
    get scaleOutCooldown() {
        return this.getNumberAttribute('scale_out_cooldown');
    }
    set scaleOutCooldown(value) {
        this._scaleOutCooldown = value;
    }
    resetScaleOutCooldown() {
        this._scaleOutCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scaleOutCooldownInput() {
        return this._scaleOutCooldown;
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
    get customizedScalingMetricSpecification() {
        return this._customizedScalingMetricSpecification;
    }
    putCustomizedScalingMetricSpecification(value) {
        this._customizedScalingMetricSpecification.internalValue = value;
    }
    resetCustomizedScalingMetricSpecification() {
        this._customizedScalingMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customizedScalingMetricSpecificationInput() {
        return this._customizedScalingMetricSpecification.internalValue;
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
exports.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference = AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference;
_h = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference[_h] = { fqn: "@cdktf/aws-cdk.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference", version: "0.0.0" };
class AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList extends cdktf.ComplexList {
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
        return new AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList = AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList;
_j = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList[_j] = { fqn: "@cdktf/aws-cdk.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList", version: "0.0.0" };
function autoscalingplansScalingPlanScalingInstructionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable_dynamic_scaling: cdktf.booleanToTerraform(struct.disableDynamicScaling),
        max_capacity: cdktf.numberToTerraform(struct.maxCapacity),
        min_capacity: cdktf.numberToTerraform(struct.minCapacity),
        predictive_scaling_max_capacity_behavior: cdktf.stringToTerraform(struct.predictiveScalingMaxCapacityBehavior),
        predictive_scaling_max_capacity_buffer: cdktf.numberToTerraform(struct.predictiveScalingMaxCapacityBuffer),
        predictive_scaling_mode: cdktf.stringToTerraform(struct.predictiveScalingMode),
        resource_id: cdktf.stringToTerraform(struct.resourceId),
        scalable_dimension: cdktf.stringToTerraform(struct.scalableDimension),
        scaling_policy_update_behavior: cdktf.stringToTerraform(struct.scalingPolicyUpdateBehavior),
        scheduled_action_buffer_time: cdktf.numberToTerraform(struct.scheduledActionBufferTime),
        service_namespace: cdktf.stringToTerraform(struct.serviceNamespace),
        customized_load_metric_specification: autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToTerraform(struct.customizedLoadMetricSpecification),
        predefined_load_metric_specification: autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToTerraform(struct.predefinedLoadMetricSpecification),
        target_tracking_configuration: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToTerraform, true)(struct.targetTrackingConfiguration),
    };
}
exports.autoscalingplansScalingPlanScalingInstructionToTerraform = autoscalingplansScalingPlanScalingInstructionToTerraform;
function autoscalingplansScalingPlanScalingInstructionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        disable_dynamic_scaling: {
            value: cdktf.booleanToHclTerraform(struct.disableDynamicScaling),
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
        predictive_scaling_max_capacity_behavior: {
            value: cdktf.stringToHclTerraform(struct.predictiveScalingMaxCapacityBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        predictive_scaling_max_capacity_buffer: {
            value: cdktf.numberToHclTerraform(struct.predictiveScalingMaxCapacityBuffer),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        predictive_scaling_mode: {
            value: cdktf.stringToHclTerraform(struct.predictiveScalingMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_id: {
            value: cdktf.stringToHclTerraform(struct.resourceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scalable_dimension: {
            value: cdktf.stringToHclTerraform(struct.scalableDimension),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scaling_policy_update_behavior: {
            value: cdktf.stringToHclTerraform(struct.scalingPolicyUpdateBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scheduled_action_buffer_time: {
            value: cdktf.numberToHclTerraform(struct.scheduledActionBufferTime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        service_namespace: {
            value: cdktf.stringToHclTerraform(struct.serviceNamespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        customized_load_metric_specification: {
            value: autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToHclTerraform(struct.customizedLoadMetricSpecification),
            isBlock: true,
            type: "list",
            storageClassType: "AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationList",
        },
        predefined_load_metric_specification: {
            value: autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToHclTerraform(struct.predefinedLoadMetricSpecification),
            isBlock: true,
            type: "list",
            storageClassType: "AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationList",
        },
        target_tracking_configuration: {
            value: cdktf.listMapperHcl(autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToHclTerraform, true)(struct.targetTrackingConfiguration),
            isBlock: true,
            type: "set",
            storageClassType: "AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingplansScalingPlanScalingInstructionToHclTerraform = autoscalingplansScalingPlanScalingInstructionToHclTerraform;
class AutoscalingplansScalingPlanScalingInstructionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // customized_load_metric_specification - computed: false, optional: true, required: false
        this._customizedLoadMetricSpecification = new AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference(this, "customized_load_metric_specification");
        // predefined_load_metric_specification - computed: false, optional: true, required: false
        this._predefinedLoadMetricSpecification = new AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference(this, "predefined_load_metric_specification");
        // target_tracking_configuration - computed: false, optional: false, required: true
        this._targetTrackingConfiguration = new AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList(this, "target_tracking_configuration", true);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._disableDynamicScaling !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableDynamicScaling = this._disableDynamicScaling;
        }
        if (this._maxCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacity = this._maxCapacity;
        }
        if (this._minCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.minCapacity = this._minCapacity;
        }
        if (this._predictiveScalingMaxCapacityBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.predictiveScalingMaxCapacityBehavior = this._predictiveScalingMaxCapacityBehavior;
        }
        if (this._predictiveScalingMaxCapacityBuffer !== undefined) {
            hasAnyValues = true;
            internalValueResult.predictiveScalingMaxCapacityBuffer = this._predictiveScalingMaxCapacityBuffer;
        }
        if (this._predictiveScalingMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.predictiveScalingMode = this._predictiveScalingMode;
        }
        if (this._resourceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceId = this._resourceId;
        }
        if (this._scalableDimension !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalableDimension = this._scalableDimension;
        }
        if (this._scalingPolicyUpdateBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalingPolicyUpdateBehavior = this._scalingPolicyUpdateBehavior;
        }
        if (this._scheduledActionBufferTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduledActionBufferTime = this._scheduledActionBufferTime;
        }
        if (this._serviceNamespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceNamespace = this._serviceNamespace;
        }
        if (this._customizedLoadMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customizedLoadMetricSpecification = this._customizedLoadMetricSpecification?.internalValue;
        }
        if (this._predefinedLoadMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedLoadMetricSpecification = this._predefinedLoadMetricSpecification?.internalValue;
        }
        if (this._targetTrackingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetTrackingConfiguration = this._targetTrackingConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disableDynamicScaling = undefined;
            this._maxCapacity = undefined;
            this._minCapacity = undefined;
            this._predictiveScalingMaxCapacityBehavior = undefined;
            this._predictiveScalingMaxCapacityBuffer = undefined;
            this._predictiveScalingMode = undefined;
            this._resourceId = undefined;
            this._scalableDimension = undefined;
            this._scalingPolicyUpdateBehavior = undefined;
            this._scheduledActionBufferTime = undefined;
            this._serviceNamespace = undefined;
            this._customizedLoadMetricSpecification.internalValue = undefined;
            this._predefinedLoadMetricSpecification.internalValue = undefined;
            this._targetTrackingConfiguration.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disableDynamicScaling = value.disableDynamicScaling;
            this._maxCapacity = value.maxCapacity;
            this._minCapacity = value.minCapacity;
            this._predictiveScalingMaxCapacityBehavior = value.predictiveScalingMaxCapacityBehavior;
            this._predictiveScalingMaxCapacityBuffer = value.predictiveScalingMaxCapacityBuffer;
            this._predictiveScalingMode = value.predictiveScalingMode;
            this._resourceId = value.resourceId;
            this._scalableDimension = value.scalableDimension;
            this._scalingPolicyUpdateBehavior = value.scalingPolicyUpdateBehavior;
            this._scheduledActionBufferTime = value.scheduledActionBufferTime;
            this._serviceNamespace = value.serviceNamespace;
            this._customizedLoadMetricSpecification.internalValue = value.customizedLoadMetricSpecification;
            this._predefinedLoadMetricSpecification.internalValue = value.predefinedLoadMetricSpecification;
            this._targetTrackingConfiguration.internalValue = value.targetTrackingConfiguration;
        }
    }
    get disableDynamicScaling() {
        return this.getBooleanAttribute('disable_dynamic_scaling');
    }
    set disableDynamicScaling(value) {
        this._disableDynamicScaling = value;
    }
    resetDisableDynamicScaling() {
        this._disableDynamicScaling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableDynamicScalingInput() {
        return this._disableDynamicScaling;
    }
    get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    set maxCapacity(value) {
        this._maxCapacity = value;
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
    // Temporarily expose input value. Use with caution.
    get minCapacityInput() {
        return this._minCapacity;
    }
    get predictiveScalingMaxCapacityBehavior() {
        return this.getStringAttribute('predictive_scaling_max_capacity_behavior');
    }
    set predictiveScalingMaxCapacityBehavior(value) {
        this._predictiveScalingMaxCapacityBehavior = value;
    }
    resetPredictiveScalingMaxCapacityBehavior() {
        this._predictiveScalingMaxCapacityBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get predictiveScalingMaxCapacityBehaviorInput() {
        return this._predictiveScalingMaxCapacityBehavior;
    }
    get predictiveScalingMaxCapacityBuffer() {
        return this.getNumberAttribute('predictive_scaling_max_capacity_buffer');
    }
    set predictiveScalingMaxCapacityBuffer(value) {
        this._predictiveScalingMaxCapacityBuffer = value;
    }
    resetPredictiveScalingMaxCapacityBuffer() {
        this._predictiveScalingMaxCapacityBuffer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get predictiveScalingMaxCapacityBufferInput() {
        return this._predictiveScalingMaxCapacityBuffer;
    }
    get predictiveScalingMode() {
        return this.getStringAttribute('predictive_scaling_mode');
    }
    set predictiveScalingMode(value) {
        this._predictiveScalingMode = value;
    }
    resetPredictiveScalingMode() {
        this._predictiveScalingMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get predictiveScalingModeInput() {
        return this._predictiveScalingMode;
    }
    get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    set resourceId(value) {
        this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceIdInput() {
        return this._resourceId;
    }
    get scalableDimension() {
        return this.getStringAttribute('scalable_dimension');
    }
    set scalableDimension(value) {
        this._scalableDimension = value;
    }
    // Temporarily expose input value. Use with caution.
    get scalableDimensionInput() {
        return this._scalableDimension;
    }
    get scalingPolicyUpdateBehavior() {
        return this.getStringAttribute('scaling_policy_update_behavior');
    }
    set scalingPolicyUpdateBehavior(value) {
        this._scalingPolicyUpdateBehavior = value;
    }
    resetScalingPolicyUpdateBehavior() {
        this._scalingPolicyUpdateBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scalingPolicyUpdateBehaviorInput() {
        return this._scalingPolicyUpdateBehavior;
    }
    get scheduledActionBufferTime() {
        return this.getNumberAttribute('scheduled_action_buffer_time');
    }
    set scheduledActionBufferTime(value) {
        this._scheduledActionBufferTime = value;
    }
    resetScheduledActionBufferTime() {
        this._scheduledActionBufferTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scheduledActionBufferTimeInput() {
        return this._scheduledActionBufferTime;
    }
    get serviceNamespace() {
        return this.getStringAttribute('service_namespace');
    }
    set serviceNamespace(value) {
        this._serviceNamespace = value;
    }
    // Temporarily expose input value. Use with caution.
    get serviceNamespaceInput() {
        return this._serviceNamespace;
    }
    get customizedLoadMetricSpecification() {
        return this._customizedLoadMetricSpecification;
    }
    putCustomizedLoadMetricSpecification(value) {
        this._customizedLoadMetricSpecification.internalValue = value;
    }
    resetCustomizedLoadMetricSpecification() {
        this._customizedLoadMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customizedLoadMetricSpecificationInput() {
        return this._customizedLoadMetricSpecification.internalValue;
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
    get targetTrackingConfiguration() {
        return this._targetTrackingConfiguration;
    }
    putTargetTrackingConfiguration(value) {
        this._targetTrackingConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetTrackingConfigurationInput() {
        return this._targetTrackingConfiguration.internalValue;
    }
}
exports.AutoscalingplansScalingPlanScalingInstructionOutputReference = AutoscalingplansScalingPlanScalingInstructionOutputReference;
_k = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlanScalingInstructionOutputReference[_k] = { fqn: "@cdktf/aws-cdk.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference", version: "0.0.0" };
class AutoscalingplansScalingPlanScalingInstructionList extends cdktf.ComplexList {
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
        return new AutoscalingplansScalingPlanScalingInstructionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.AutoscalingplansScalingPlanScalingInstructionList = AutoscalingplansScalingPlanScalingInstructionList;
_l = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlanScalingInstructionList[_l] = { fqn: "@cdktf/aws-cdk.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscalingplans_scaling_plan aws_autoscalingplans_scaling_plan}
*/
class AutoscalingplansScalingPlan extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AutoscalingplansScalingPlan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AutoscalingplansScalingPlan to import
    * @param importFromId The id of the existing AutoscalingplansScalingPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscalingplans_scaling_plan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AutoscalingplansScalingPlan to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_autoscalingplans_scaling_plan", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscalingplans_scaling_plan aws_autoscalingplans_scaling_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingplansScalingPlanConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_autoscalingplans_scaling_plan',
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
        // application_source - computed: false, optional: false, required: true
        this._applicationSource = new AutoscalingplansScalingPlanApplicationSourceOutputReference(this, "application_source");
        // scaling_instruction - computed: false, optional: false, required: true
        this._scalingInstruction = new AutoscalingplansScalingPlanScalingInstructionList(this, "scaling_instruction", true);
        this._id = config.id;
        this._name = config.name;
        this._applicationSource.internalValue = config.applicationSource;
        this._scalingInstruction.internalValue = config.scalingInstruction;
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
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // scaling_plan_version - computed: true, optional: false, required: false
    get scalingPlanVersion() {
        return this.getNumberAttribute('scaling_plan_version');
    }
    get applicationSource() {
        return this._applicationSource;
    }
    putApplicationSource(value) {
        this._applicationSource.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get applicationSourceInput() {
        return this._applicationSource.internalValue;
    }
    get scalingInstruction() {
        return this._scalingInstruction;
    }
    putScalingInstruction(value) {
        this._scalingInstruction.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get scalingInstructionInput() {
        return this._scalingInstruction.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            application_source: autoscalingplansScalingPlanApplicationSourceToTerraform(this._applicationSource.internalValue),
            scaling_instruction: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionToTerraform, true)(this._scalingInstruction.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
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
            application_source: {
                value: autoscalingplansScalingPlanApplicationSourceToHclTerraform(this._applicationSource.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AutoscalingplansScalingPlanApplicationSourceList",
            },
            scaling_instruction: {
                value: cdktf.listMapperHcl(autoscalingplansScalingPlanScalingInstructionToHclTerraform, true)(this._scalingInstruction.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "AutoscalingplansScalingPlanScalingInstructionList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.AutoscalingplansScalingPlan = AutoscalingplansScalingPlan;
_m = JSII_RTTI_SYMBOL_1;
AutoscalingplansScalingPlan[_m] = { fqn: "@cdktf/aws-cdk.autoscalingplansScalingPlan.AutoscalingplansScalingPlan", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
AutoscalingplansScalingPlan.tfResourceType = "aws_autoscalingplans_scaling_plan";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2F1dG9zY2FsaW5ncGxhbnMtc2NhbGluZy1wbGFuL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBd0MvQixTQUFnQixnRUFBZ0UsQ0FBQyxNQUFrRjtJQUNqSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pDLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ3pFLENBQUE7QUFDSCxDQUFDO0FBVEQsNElBU0M7QUFHRCxTQUFnQixtRUFBbUUsQ0FBQyxNQUFrRjtJQUNwSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUss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LENBQUMsYUFBYSxDQUFDLDJEQUEyRCxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7Z0JBQ3JJLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxLQUFLO2dCQUNYLGdCQUFnQixFQUFFLG1EQUFtRDthQUN0RTtTQUNGLENBQUM7UUFFRiw4QkFBOEI7UUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUUsQ0FBQyxDQUFBO0lBQzVILENBQUM7O0FBaktILGtFQWtLQzs7O0FBaEtDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csMENBQWMsR0FBRyxtQ0FBbUMsQUFBdEMsQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhblxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiNpZCBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW4jaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5ncGxhbnNfc2NhbGluZ19wbGFuI25hbWUgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogYXBwbGljYXRpb25fc291cmNlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiNhcHBsaWNhdGlvbl9zb3VyY2UgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuI2FwcGxpY2F0aW9uX3NvdXJjZX1cbiAgKi9cbiAgcmVhZG9ubHkgYXBwbGljYXRpb25Tb3VyY2U6IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkFwcGxpY2F0aW9uU291cmNlO1xuICAvKipcbiAgKiBzY2FsaW5nX2luc3RydWN0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiNzY2FsaW5nX2luc3RydWN0aW9uIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbiNzY2FsaW5nX2luc3RydWN0aW9ufVxuICAqL1xuICByZWFkb25seSBzY2FsaW5nSW5zdHJ1Y3Rpb246IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvbltdIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkFwcGxpY2F0aW9uU291cmNlVGFnRmlsdGVyIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdwbGFuc19zY2FsaW5nX3BsYW4ja2V5IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbiNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiN2YWx1ZXMgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuI3ZhbHVlc31cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWVzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5BcHBsaWNhdGlvblNvdXJjZVRhZ0ZpbHRlclRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkFwcGxpY2F0aW9uU291cmNlVGFnRmlsdGVyIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS52YWx1ZXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkFwcGxpY2F0aW9uU291cmNlVGFnRmlsdGVyVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VUYWdGaWx0ZXIgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAga2V5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHZhbHVlczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnZhbHVlcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VUYWdGaWx0ZXJPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VUYWdGaWx0ZXIgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2tleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rZXkgPSB0aGlzLl9rZXk7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VUYWdGaWx0ZXIgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2V5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2tleSA9IHZhbHVlLmtleTtcbiAgICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlLnZhbHVlcztcbiAgICB9XG4gIH1cblxuICAvLyBrZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfa2V5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGtleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXk7XG4gIH1cblxuICAvLyB2YWx1ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmFsdWVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHZhbHVlcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndmFsdWVzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZhbHVlcygpIHtcbiAgICB0aGlzLl92YWx1ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZhbHVlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkFwcGxpY2F0aW9uU291cmNlVGFnRmlsdGVyTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VUYWdGaWx0ZXJbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VUYWdGaWx0ZXJPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VUYWdGaWx0ZXJPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5BcHBsaWNhdGlvblNvdXJjZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5ncGxhbnNfc2NhbGluZ19wbGFuI2Nsb3VkZm9ybWF0aW9uX3N0YWNrX2FybiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW4jY2xvdWRmb3JtYXRpb25fc3RhY2tfYXJufVxuICAqL1xuICByZWFkb25seSBjbG91ZGZvcm1hdGlvblN0YWNrQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiB0YWdfZmlsdGVyIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiN0YWdfZmlsdGVyIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbiN0YWdfZmlsdGVyfVxuICAqL1xuICByZWFkb25seSB0YWdGaWx0ZXI/OiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5BcHBsaWNhdGlvblNvdXJjZVRhZ0ZpbHRlcltdIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5BcHBsaWNhdGlvblNvdXJjZVRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkFwcGxpY2F0aW9uU291cmNlT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2xvdWRmb3JtYXRpb25fc3RhY2tfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3VkZm9ybWF0aW9uU3RhY2tBcm4pLFxuICAgIHRhZ19maWx0ZXI6IGNka3RmLmxpc3RNYXBwZXIoYXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VUYWdGaWx0ZXJUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS50YWdGaWx0ZXIpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkFwcGxpY2F0aW9uU291cmNlVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VPdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5BcHBsaWNhdGlvblNvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgY2xvdWRmb3JtYXRpb25fc3RhY2tfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jbG91ZGZvcm1hdGlvblN0YWNrQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB0YWdfZmlsdGVyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChhdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5BcHBsaWNhdGlvblNvdXJjZVRhZ0ZpbHRlclRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnRhZ0ZpbHRlciksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VUYWdGaWx0ZXJMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkFwcGxpY2F0aW9uU291cmNlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5BcHBsaWNhdGlvblNvdXJjZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2xvdWRmb3JtYXRpb25TdGFja0FybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbG91ZGZvcm1hdGlvblN0YWNrQXJuID0gdGhpcy5fY2xvdWRmb3JtYXRpb25TdGFja0FybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhZ0ZpbHRlcj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YWdGaWx0ZXIgPSB0aGlzLl90YWdGaWx0ZXI/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5BcHBsaWNhdGlvblNvdXJjZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2Nsb3VkZm9ybWF0aW9uU3RhY2tBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YWdGaWx0ZXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2xvdWRmb3JtYXRpb25TdGFja0FybiA9IHZhbHVlLmNsb3VkZm9ybWF0aW9uU3RhY2tBcm47XG4gICAgICB0aGlzLl90YWdGaWx0ZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnRhZ0ZpbHRlcjtcbiAgICB9XG4gIH1cblxuICAvLyBjbG91ZGZvcm1hdGlvbl9zdGFja19hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2xvdWRmb3JtYXRpb25TdGFja0Fybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2xvdWRmb3JtYXRpb25TdGFja0FybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nsb3VkZm9ybWF0aW9uX3N0YWNrX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2xvdWRmb3JtYXRpb25TdGFja0Fybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2xvdWRmb3JtYXRpb25TdGFja0FybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENsb3VkZm9ybWF0aW9uU3RhY2tBcm4oKSB7XG4gICAgdGhpcy5fY2xvdWRmb3JtYXRpb25TdGFja0FybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xvdWRmb3JtYXRpb25TdGFja0FybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZGZvcm1hdGlvblN0YWNrQXJuO1xuICB9XG5cbiAgLy8gdGFnX2ZpbHRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdGaWx0ZXIgPSBuZXcgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VUYWdGaWx0ZXJMaXN0KHRoaXMsIFwidGFnX2ZpbHRlclwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0YWdGaWx0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ0ZpbHRlcjtcbiAgfVxuICBwdWJsaWMgcHV0VGFnRmlsdGVyKHZhbHVlOiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5BcHBsaWNhdGlvblNvdXJjZVRhZ0ZpbHRlcltdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdGaWx0ZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ0ZpbHRlcigpIHtcbiAgICB0aGlzLl90YWdGaWx0ZXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnRmlsdGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ0ZpbHRlci5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvbkN1c3RvbWl6ZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5ncGxhbnNfc2NhbGluZ19wbGFuI2RpbWVuc2lvbnMgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuI2RpbWVuc2lvbnN9XG4gICovXG4gIHJlYWRvbmx5IGRpbWVuc2lvbnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiNtZXRyaWNfbmFtZSBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW4jbWV0cmljX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG1ldHJpY05hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdwbGFuc19zY2FsaW5nX3BsYW4jbmFtZXNwYWNlIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbiNuYW1lc3BhY2V9XG4gICovXG4gIHJlYWRvbmx5IG5hbWVzcGFjZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiNzdGF0aXN0aWMgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuI3N0YXRpc3RpY31cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdGlzdGljOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5ncGxhbnNfc2NhbGluZ19wbGFuI3VuaXQgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuI3VuaXR9XG4gICovXG4gIHJlYWRvbmx5IHVuaXQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25DdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25DdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25DdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGltZW5zaW9uczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5kaW1lbnNpb25zKSxcbiAgICBtZXRyaWNfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRyaWNOYW1lKSxcbiAgICBuYW1lc3BhY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZXNwYWNlKSxcbiAgICBzdGF0aXN0aWM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdGlzdGljKSxcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvbkN1c3RvbWl6ZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvbkN1c3RvbWl6ZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvbkN1c3RvbWl6ZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZGltZW5zaW9uczoge1xuICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHN0cnVjdCEuZGltZW5zaW9ucyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgIH0sXG4gICAgbWV0cmljX25hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY05hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG5hbWVzcGFjZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubmFtZXNwYWNlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzdGF0aXN0aWM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN0YXRpc3RpYyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdW5pdDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25DdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvbkN1c3RvbWl6ZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGltZW5zaW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kaW1lbnNpb25zID0gdGhpcy5fZGltZW5zaW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX21ldHJpY05hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWV0cmljTmFtZSA9IHRoaXMuX21ldHJpY05hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9uYW1lc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZXNwYWNlID0gdGhpcy5fbmFtZXNwYWNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhdGlzdGljICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXRpc3RpYyA9IHRoaXMuX3N0YXRpc3RpYztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VuaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudW5pdCA9IHRoaXMuX3VuaXQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25DdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kaW1lbnNpb25zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWV0cmljTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25hbWVzcGFjZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0YXRpc3RpYyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RpbWVuc2lvbnMgPSB2YWx1ZS5kaW1lbnNpb25zO1xuICAgICAgdGhpcy5fbWV0cmljTmFtZSA9IHZhbHVlLm1ldHJpY05hbWU7XG4gICAgICB0aGlzLl9uYW1lc3BhY2UgPSB2YWx1ZS5uYW1lc3BhY2U7XG4gICAgICB0aGlzLl9zdGF0aXN0aWMgPSB2YWx1ZS5zdGF0aXN0aWM7XG4gICAgICB0aGlzLl91bml0ID0gdmFsdWUudW5pdDtcbiAgICB9XG4gIH1cblxuICAvLyBkaW1lbnNpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RpbWVuc2lvbnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCBkaW1lbnNpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgnZGltZW5zaW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGltZW5zaW9ucyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX2RpbWVuc2lvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREaW1lbnNpb25zKCkge1xuICAgIHRoaXMuX2RpbWVuc2lvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpbWVuc2lvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGltZW5zaW9ucztcbiAgfVxuXG4gIC8vIG1ldHJpY19uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21ldHJpY05hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1ldHJpY05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXRyaWNfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0cmljTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWV0cmljTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRyaWNOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpY05hbWU7XG4gIH1cblxuICAvLyBuYW1lc3BhY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZXNwYWNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lc3BhY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWVzcGFjZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZXNwYWNlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVzcGFjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lc3BhY2U7XG4gIH1cblxuICAvLyBzdGF0aXN0aWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3RhdGlzdGljPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGF0aXN0aWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0aXN0aWMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXRpc3RpYyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdGlzdGljID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXRpc3RpY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0aXN0aWM7XG4gIH1cblxuICAvLyB1bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB1bml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VW5pdCgpIHtcbiAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1bml0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaXQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdwbGFuc19zY2FsaW5nX3BsYW4jcHJlZGVmaW5lZF9sb2FkX21ldHJpY190eXBlIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbiNwcmVkZWZpbmVkX2xvYWRfbWV0cmljX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHByZWRlZmluZWRMb2FkTWV0cmljVHlwZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiNyZXNvdXJjZV9sYWJlbCBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW4jcmVzb3VyY2VfbGFiZWx9XG4gICovXG4gIHJlYWRvbmx5IHJlc291cmNlTGFiZWw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25QcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25QcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25QcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJlZGVmaW5lZF9sb2FkX21ldHJpY190eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWRlZmluZWRMb2FkTWV0cmljVHlwZSksXG4gICAgcmVzb3VyY2VfbGFiZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VMYWJlbCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBwcmVkZWZpbmVkX2xvYWRfbWV0cmljX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByZWRlZmluZWRMb2FkTWV0cmljVHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcmVzb3VyY2VfbGFiZWw6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlTGFiZWwpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25QcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3ByZWRlZmluZWRMb2FkTWV0cmljVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmVkZWZpbmVkTG9hZE1ldHJpY1R5cGUgPSB0aGlzLl9wcmVkZWZpbmVkTG9hZE1ldHJpY1R5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXNvdXJjZUxhYmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlTGFiZWwgPSB0aGlzLl9yZXNvdXJjZUxhYmVsO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZExvYWRNZXRyaWNUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZExvYWRNZXRyaWNUeXBlID0gdmFsdWUucHJlZGVmaW5lZExvYWRNZXRyaWNUeXBlO1xuICAgICAgdGhpcy5fcmVzb3VyY2VMYWJlbCA9IHZhbHVlLnJlc291cmNlTGFiZWw7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJlZGVmaW5lZF9sb2FkX21ldHJpY190eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ByZWRlZmluZWRMb2FkTWV0cmljVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlZGVmaW5lZExvYWRNZXRyaWNUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZGVmaW5lZF9sb2FkX21ldHJpY190eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVkZWZpbmVkTG9hZE1ldHJpY1R5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWRlZmluZWRMb2FkTWV0cmljVHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVkZWZpbmVkTG9hZE1ldHJpY1R5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZGVmaW5lZExvYWRNZXRyaWNUeXBlO1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfbGFiZWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VMYWJlbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2xhYmVsJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZUxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzb3VyY2VMYWJlbCgpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUxhYmVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlTGFiZWw7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdwbGFuc19zY2FsaW5nX3BsYW4jZGltZW5zaW9ucyBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW4jZGltZW5zaW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgZGltZW5zaW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5ncGxhbnNfc2NhbGluZ19wbGFuI21ldHJpY19uYW1lIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbiNtZXRyaWNfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbWV0cmljTmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiNuYW1lc3BhY2UgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuI25hbWVzcGFjZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZXNwYWNlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5ncGxhbnNfc2NhbGluZ19wbGFuI3N0YXRpc3RpYyBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW4jc3RhdGlzdGljfVxuICAqL1xuICByZWFkb25seSBzdGF0aXN0aWM6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdwbGFuc19zY2FsaW5nX3BsYW4jdW5pdCBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW4jdW5pdH1cbiAgKi9cbiAgcmVhZG9ubHkgdW5pdD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkaW1lbnNpb25zOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRpbWVuc2lvbnMpLFxuICAgIG1ldHJpY19uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY05hbWUpLFxuICAgIG5hbWVzcGFjZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lc3BhY2UpLFxuICAgIHN0YXRpc3RpYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0aXN0aWMpLFxuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBkaW1lbnNpb25zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkoc3RydWN0IS5kaW1lbnNpb25zKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgfSxcbiAgICBtZXRyaWNfbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWV0cmljTmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbmFtZXNwYWNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5uYW1lc3BhY2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHN0YXRpc3RpYzoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3RhdGlzdGljKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB1bml0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kaW1lbnNpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRpbWVuc2lvbnMgPSB0aGlzLl9kaW1lbnNpb25zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWV0cmljTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXRyaWNOYW1lID0gdGhpcy5fbWV0cmljTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uYW1lc3BhY2UgPSB0aGlzLl9uYW1lc3BhY2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGF0aXN0aWMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhdGlzdGljID0gdGhpcy5fc3RhdGlzdGljO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdW5pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51bml0ID0gdGhpcy5fdW5pdDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RpbWVuc2lvbnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZXRyaWNOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmFtZXNwYWNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RhdGlzdGljID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdW5pdCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGltZW5zaW9ucyA9IHZhbHVlLmRpbWVuc2lvbnM7XG4gICAgICB0aGlzLl9tZXRyaWNOYW1lID0gdmFsdWUubWV0cmljTmFtZTtcbiAgICAgIHRoaXMuX25hbWVzcGFjZSA9IHZhbHVlLm5hbWVzcGFjZTtcbiAgICAgIHRoaXMuX3N0YXRpc3RpYyA9IHZhbHVlLnN0YXRpc3RpYztcbiAgICAgIHRoaXMuX3VuaXQgPSB2YWx1ZS51bml0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGRpbWVuc2lvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGltZW5zaW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IGRpbWVuc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCdkaW1lbnNpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCBkaW1lbnNpb25zKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fZGltZW5zaW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5fZGltZW5zaW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGltZW5zaW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaW1lbnNpb25zO1xuICB9XG5cbiAgLy8gbWV0cmljX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWV0cmljTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWV0cmljTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21ldHJpY19uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZXRyaWNOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXRyaWNOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldHJpY05hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljTmFtZTtcbiAgfVxuXG4gIC8vIG5hbWVzcGFjZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lc3BhY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWVzcGFjZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZXNwYWNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lc3BhY2UgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZXNwYWNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVzcGFjZTtcbiAgfVxuXG4gIC8vIHN0YXRpc3RpYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zdGF0aXN0aWM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0YXRpc3RpYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRpc3RpYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhdGlzdGljKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0aXN0aWMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdGlzdGljSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRpc3RpYztcbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVbml0KCkge1xuICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiNwcmVkZWZpbmVkX3NjYWxpbmdfbWV0cmljX3R5cGUgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuI3ByZWRlZmluZWRfc2NhbGluZ19tZXRyaWNfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNUeXBlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5ncGxhbnNfc2NhbGluZ19wbGFuI3Jlc291cmNlX2xhYmVsIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbiNyZXNvdXJjZV9sYWJlbH1cbiAgKi9cbiAgcmVhZG9ubHkgcmVzb3VyY2VMYWJlbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcmVkZWZpbmVkX3NjYWxpbmdfbWV0cmljX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNUeXBlKSxcbiAgICByZXNvdXJjZV9sYWJlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUxhYmVsKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHByZWRlZmluZWRfc2NhbGluZ19tZXRyaWNfdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICByZXNvdXJjZV9sYWJlbDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VMYWJlbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByZWRlZmluZWRTY2FsaW5nTWV0cmljVHlwZSA9IHRoaXMuX3ByZWRlZmluZWRTY2FsaW5nTWV0cmljVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlTGFiZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VMYWJlbCA9IHRoaXMuX3Jlc291cmNlTGFiZWw7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1R5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1R5cGUgPSB2YWx1ZS5wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1R5cGU7XG4gICAgICB0aGlzLl9yZXNvdXJjZUxhYmVsID0gdmFsdWUucmVzb3VyY2VMYWJlbDtcbiAgICB9XG4gIH1cblxuICAvLyBwcmVkZWZpbmVkX3NjYWxpbmdfbWV0cmljX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVkZWZpbmVkU2NhbGluZ01ldHJpY1R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVkZWZpbmVkX3NjYWxpbmdfbWV0cmljX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWRlZmluZWRTY2FsaW5nTWV0cmljVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWRlZmluZWRTY2FsaW5nTWV0cmljVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1R5cGU7XG4gIH1cblxuICAvLyByZXNvdXJjZV9sYWJlbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXNvdXJjZUxhYmVsPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUxhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfbGFiZWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlTGFiZWwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc291cmNlTGFiZWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZUxhYmVsKCkge1xuICAgIHRoaXMuX3Jlc291cmNlTGFiZWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlTGFiZWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VMYWJlbDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiNkaXNhYmxlX3NjYWxlX2luIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbiNkaXNhYmxlX3NjYWxlX2lufVxuICAqL1xuICByZWFkb25seSBkaXNhYmxlU2NhbGVJbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdwbGFuc19zY2FsaW5nX3BsYW4jZXN0aW1hdGVkX2luc3RhbmNlX3dhcm11cCBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW4jZXN0aW1hdGVkX2luc3RhbmNlX3dhcm11cH1cbiAgKi9cbiAgcmVhZG9ubHkgZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXA/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5ncGxhbnNfc2NhbGluZ19wbGFuI3NjYWxlX2luX2Nvb2xkb3duIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbiNzY2FsZV9pbl9jb29sZG93bn1cbiAgKi9cbiAgcmVhZG9ubHkgc2NhbGVJbkNvb2xkb3duPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiNzY2FsZV9vdXRfY29vbGRvd24gQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuI3NjYWxlX291dF9jb29sZG93bn1cbiAgKi9cbiAgcmVhZG9ubHkgc2NhbGVPdXRDb29sZG93bj86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdwbGFuc19zY2FsaW5nX3BsYW4jdGFyZ2V0X3ZhbHVlIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbiN0YXJnZXRfdmFsdWV9XG4gICovXG4gIHJlYWRvbmx5IHRhcmdldFZhbHVlOiBudW1iZXI7XG4gIC8qKlxuICAqIGN1c3RvbWl6ZWRfc2NhbGluZ19tZXRyaWNfc3BlY2lmaWNhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdwbGFuc19zY2FsaW5nX3BsYW4jY3VzdG9taXplZF9zY2FsaW5nX21ldHJpY19zcGVjaWZpY2F0aW9uIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbiNjdXN0b21pemVkX3NjYWxpbmdfbWV0cmljX3NwZWNpZmljYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGN1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbj86IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbjtcbiAgLyoqXG4gICogcHJlZGVmaW5lZF9zY2FsaW5nX21ldHJpY19zcGVjaWZpY2F0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiNwcmVkZWZpbmVkX3NjYWxpbmdfbWV0cmljX3NwZWNpZmljYXRpb24gQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuI3ByZWRlZmluZWRfc2NhbGluZ19tZXRyaWNfc3BlY2lmaWNhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uPzogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uUHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGlzYWJsZV9zY2FsZV9pbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZGlzYWJsZVNjYWxlSW4pLFxuICAgIGVzdGltYXRlZF9pbnN0YW5jZV93YXJtdXA6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXApLFxuICAgIHNjYWxlX2luX2Nvb2xkb3duOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjYWxlSW5Db29sZG93biksXG4gICAgc2NhbGVfb3V0X2Nvb2xkb3duOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjYWxlT3V0Q29vbGRvd24pLFxuICAgIHRhcmdldF92YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXRWYWx1ZSksXG4gICAgY3VzdG9taXplZF9zY2FsaW5nX21ldHJpY19zcGVjaWZpY2F0aW9uOiBhdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25DdXN0b21pemVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbiksXG4gICAgcHJlZGVmaW5lZF9zY2FsaW5nX21ldHJpY19zcGVjaWZpY2F0aW9uOiBhdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGRpc2FibGVfc2NhbGVfaW46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kaXNhYmxlU2NhbGVJbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIGVzdGltYXRlZF9pbnN0YW5jZV93YXJtdXA6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmVzdGltYXRlZEluc3RhbmNlV2FybXVwKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBzY2FsZV9pbl9jb29sZG93bjoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2NhbGVJbkNvb2xkb3duKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBzY2FsZV9vdXRfY29vbGRvd246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNjYWxlT3V0Q29vbGRvd24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHRhcmdldF92YWx1ZToge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0VmFsdWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIGN1c3RvbWl6ZWRfc2NhbGluZ19tZXRyaWNfc3BlY2lmaWNhdGlvbjoge1xuICAgICAgdmFsdWU6IGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuY3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uTGlzdFwiLFxuICAgIH0sXG4gICAgcHJlZGVmaW5lZF9zY2FsaW5nX21ldHJpY19zcGVjaWZpY2F0aW9uOiB7XG4gICAgICB2YWx1ZTogYXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uUHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb25MaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVTY2FsZUluICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRpc2FibGVTY2FsZUluID0gdGhpcy5fZGlzYWJsZVNjYWxlSW47XG4gICAgfVxuICAgIGlmICh0aGlzLl9lc3RpbWF0ZWRJbnN0YW5jZVdhcm11cCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lc3RpbWF0ZWRJbnN0YW5jZVdhcm11cCA9IHRoaXMuX2VzdGltYXRlZEluc3RhbmNlV2FybXVwO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2NhbGVJbkNvb2xkb3duICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNjYWxlSW5Db29sZG93biA9IHRoaXMuX3NjYWxlSW5Db29sZG93bjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NjYWxlT3V0Q29vbGRvd24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2NhbGVPdXRDb29sZG93biA9IHRoaXMuX3NjYWxlT3V0Q29vbGRvd247XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXJnZXRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YXJnZXRWYWx1ZSA9IHRoaXMuX3RhcmdldFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmN1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbiA9IHRoaXMuX2N1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24gPSB0aGlzLl9wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGlzYWJsZVNjYWxlSW4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lc3RpbWF0ZWRJbnN0YW5jZVdhcm11cCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NjYWxlSW5Db29sZG93biA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NjYWxlT3V0Q29vbGRvd24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YXJnZXRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2N1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGlzYWJsZVNjYWxlSW4gPSB2YWx1ZS5kaXNhYmxlU2NhbGVJbjtcbiAgICAgIHRoaXMuX2VzdGltYXRlZEluc3RhbmNlV2FybXVwID0gdmFsdWUuZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXA7XG4gICAgICB0aGlzLl9zY2FsZUluQ29vbGRvd24gPSB2YWx1ZS5zY2FsZUluQ29vbGRvd247XG4gICAgICB0aGlzLl9zY2FsZU91dENvb2xkb3duID0gdmFsdWUuc2NhbGVPdXRDb29sZG93bjtcbiAgICAgIHRoaXMuX3RhcmdldFZhbHVlID0gdmFsdWUudGFyZ2V0VmFsdWU7XG4gICAgICB0aGlzLl9jdXN0b21pemVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmN1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbjtcbiAgICAgIHRoaXMuX3ByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUucHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRpc2FibGVfc2NhbGVfaW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGlzYWJsZVNjYWxlSW4/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGRpc2FibGVTY2FsZUluKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Rpc2FibGVfc2NhbGVfaW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpc2FibGVTY2FsZUluKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9kaXNhYmxlU2NhbGVJbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERpc2FibGVTY2FsZUluKCkge1xuICAgIHRoaXMuX2Rpc2FibGVTY2FsZUluID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkaXNhYmxlU2NhbGVJbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlU2NhbGVJbjtcbiAgfVxuXG4gIC8vIGVzdGltYXRlZF9pbnN0YW5jZV93YXJtdXAgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXA/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGVzdGltYXRlZEluc3RhbmNlV2FybXVwKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZXN0aW1hdGVkX2luc3RhbmNlX3dhcm11cCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXAodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2VzdGltYXRlZEluc3RhbmNlV2FybXVwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXN0aW1hdGVkSW5zdGFuY2VXYXJtdXAoKSB7XG4gICAgdGhpcy5fZXN0aW1hdGVkSW5zdGFuY2VXYXJtdXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVzdGltYXRlZEluc3RhbmNlV2FybXVwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VzdGltYXRlZEluc3RhbmNlV2FybXVwO1xuICB9XG5cbiAgLy8gc2NhbGVfaW5fY29vbGRvd24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NhbGVJbkNvb2xkb3duPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBzY2FsZUluQ29vbGRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzY2FsZV9pbl9jb29sZG93bicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2NhbGVJbkNvb2xkb3duKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zY2FsZUluQ29vbGRvd24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTY2FsZUluQ29vbGRvd24oKSB7XG4gICAgdGhpcy5fc2NhbGVJbkNvb2xkb3duID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY2FsZUluQ29vbGRvd25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGVJbkNvb2xkb3duO1xuICB9XG5cbiAgLy8gc2NhbGVfb3V0X2Nvb2xkb3duIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NjYWxlT3V0Q29vbGRvd24/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHNjYWxlT3V0Q29vbGRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzY2FsZV9vdXRfY29vbGRvd24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjYWxlT3V0Q29vbGRvd24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NjYWxlT3V0Q29vbGRvd24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTY2FsZU91dENvb2xkb3duKCkge1xuICAgIHRoaXMuX3NjYWxlT3V0Q29vbGRvd24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjYWxlT3V0Q29vbGRvd25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGVPdXRDb29sZG93bjtcbiAgfVxuXG4gIC8vIHRhcmdldF92YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90YXJnZXRWYWx1ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGFyZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0YXJnZXRfdmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldFZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90YXJnZXRWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRWYWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRWYWx1ZTtcbiAgfVxuXG4gIC8vIGN1c3RvbWl6ZWRfc2NhbGluZ19tZXRyaWNfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21pemVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24gPSBuZXcgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uQ3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiY3VzdG9taXplZF9zY2FsaW5nX21ldHJpY19zcGVjaWZpY2F0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGN1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRDdXN0b21pemVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24odmFsdWU6IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbkN1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbikge1xuICAgIHRoaXMuX2N1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uKCkge1xuICAgIHRoaXMuX2N1c3RvbWl6ZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21pemVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9taXplZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBwcmVkZWZpbmVkX3NjYWxpbmdfbWV0cmljX3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uID0gbmV3IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInByZWRlZmluZWRfc2NhbGluZ19tZXRyaWNfc3BlY2lmaWNhdGlvblwiKTtcbiAgcHVibGljIGdldCBwcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0UHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uKHZhbHVlOiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25QcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24pIHtcbiAgICB0aGlzLl9wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9wcmVkZWZpbmVkU2NhbGluZ01ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlZGVmaW5lZFNjYWxpbmdNZXRyaWNTcGVjaWZpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWRlZmluZWRTY2FsaW5nTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25MaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25UYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5ncGxhbnNfc2NhbGluZ19wbGFuI2Rpc2FibGVfZHluYW1pY19zY2FsaW5nIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbiNkaXNhYmxlX2R5bmFtaWNfc2NhbGluZ31cbiAgKi9cbiAgcmVhZG9ubHkgZGlzYWJsZUR5bmFtaWNTY2FsaW5nPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiNtYXhfY2FwYWNpdHkgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuI21heF9jYXBhY2l0eX1cbiAgKi9cbiAgcmVhZG9ubHkgbWF4Q2FwYWNpdHk6IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdwbGFuc19zY2FsaW5nX3BsYW4jbWluX2NhcGFjaXR5IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbiNtaW5fY2FwYWNpdHl9XG4gICovXG4gIHJlYWRvbmx5IG1pbkNhcGFjaXR5OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5ncGxhbnNfc2NhbGluZ19wbGFuI3ByZWRpY3RpdmVfc2NhbGluZ19tYXhfY2FwYWNpdHlfYmVoYXZpb3IgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuI3ByZWRpY3RpdmVfc2NhbGluZ19tYXhfY2FwYWNpdHlfYmVoYXZpb3J9XG4gICovXG4gIHJlYWRvbmx5IHByZWRpY3RpdmVTY2FsaW5nTWF4Q2FwYWNpdHlCZWhhdmlvcj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdwbGFuc19zY2FsaW5nX3BsYW4jcHJlZGljdGl2ZV9zY2FsaW5nX21heF9jYXBhY2l0eV9idWZmZXIgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuI3ByZWRpY3RpdmVfc2NhbGluZ19tYXhfY2FwYWNpdHlfYnVmZmVyfVxuICAqL1xuICByZWFkb25seSBwcmVkaWN0aXZlU2NhbGluZ01heENhcGFjaXR5QnVmZmVyPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiNwcmVkaWN0aXZlX3NjYWxpbmdfbW9kZSBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW4jcHJlZGljdGl2ZV9zY2FsaW5nX21vZGV9XG4gICovXG4gIHJlYWRvbmx5IHByZWRpY3RpdmVTY2FsaW5nTW9kZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdwbGFuc19zY2FsaW5nX3BsYW4jcmVzb3VyY2VfaWQgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuI3Jlc291cmNlX2lkfVxuICAqL1xuICByZWFkb25seSByZXNvdXJjZUlkOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5ncGxhbnNfc2NhbGluZ19wbGFuI3NjYWxhYmxlX2RpbWVuc2lvbiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW4jc2NhbGFibGVfZGltZW5zaW9ufVxuICAqL1xuICByZWFkb25seSBzY2FsYWJsZURpbWVuc2lvbjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiNzY2FsaW5nX3BvbGljeV91cGRhdGVfYmVoYXZpb3IgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuI3NjYWxpbmdfcG9saWN5X3VwZGF0ZV9iZWhhdmlvcn1cbiAgKi9cbiAgcmVhZG9ubHkgc2NhbGluZ1BvbGljeVVwZGF0ZUJlaGF2aW9yPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiNzY2hlZHVsZWRfYWN0aW9uX2J1ZmZlcl90aW1lIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbiNzY2hlZHVsZWRfYWN0aW9uX2J1ZmZlcl90aW1lfVxuICAqL1xuICByZWFkb25seSBzY2hlZHVsZWRBY3Rpb25CdWZmZXJUaW1lPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiNzZXJ2aWNlX25hbWVzcGFjZSBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW4jc2VydmljZV9uYW1lc3BhY2V9XG4gICovXG4gIHJlYWRvbmx5IHNlcnZpY2VOYW1lc3BhY2U6IHN0cmluZztcbiAgLyoqXG4gICogY3VzdG9taXplZF9sb2FkX21ldHJpY19zcGVjaWZpY2F0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiNjdXN0b21pemVkX2xvYWRfbWV0cmljX3NwZWNpZmljYXRpb24gQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuI2N1c3RvbWl6ZWRfbG9hZF9tZXRyaWNfc3BlY2lmaWNhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgY3VzdG9taXplZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uPzogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uQ3VzdG9taXplZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uO1xuICAvKipcbiAgKiBwcmVkZWZpbmVkX2xvYWRfbWV0cmljX3NwZWNpZmljYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5ncGxhbnNfc2NhbGluZ19wbGFuI3ByZWRlZmluZWRfbG9hZF9tZXRyaWNfc3BlY2lmaWNhdGlvbiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW4jcHJlZGVmaW5lZF9sb2FkX21ldHJpY19zcGVjaWZpY2F0aW9ufVxuICAqL1xuICByZWFkb25seSBwcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24/OiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25QcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb247XG4gIC8qKlxuICAqIHRhcmdldF90cmFja2luZ19jb25maWd1cmF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbiN0YXJnZXRfdHJhY2tpbmdfY29uZmlndXJhdGlvbiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW4jdGFyZ2V0X3RyYWNraW5nX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IHRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbjogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRpc2FibGVfZHluYW1pY19zY2FsaW5nOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kaXNhYmxlRHluYW1pY1NjYWxpbmcpLFxuICAgIG1heF9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhDYXBhY2l0eSksXG4gICAgbWluX2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1pbkNhcGFjaXR5KSxcbiAgICBwcmVkaWN0aXZlX3NjYWxpbmdfbWF4X2NhcGFjaXR5X2JlaGF2aW9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWRpY3RpdmVTY2FsaW5nTWF4Q2FwYWNpdHlCZWhhdmlvciksXG4gICAgcHJlZGljdGl2ZV9zY2FsaW5nX21heF9jYXBhY2l0eV9idWZmZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucHJlZGljdGl2ZVNjYWxpbmdNYXhDYXBhY2l0eUJ1ZmZlciksXG4gICAgcHJlZGljdGl2ZV9zY2FsaW5nX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlZGljdGl2ZVNjYWxpbmdNb2RlKSxcbiAgICByZXNvdXJjZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUlkKSxcbiAgICBzY2FsYWJsZV9kaW1lbnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2NhbGFibGVEaW1lbnNpb24pLFxuICAgIHNjYWxpbmdfcG9saWN5X3VwZGF0ZV9iZWhhdmlvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zY2FsaW5nUG9saWN5VXBkYXRlQmVoYXZpb3IpLFxuICAgIHNjaGVkdWxlZF9hY3Rpb25fYnVmZmVyX3RpbWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2NoZWR1bGVkQWN0aW9uQnVmZmVyVGltZSksXG4gICAgc2VydmljZV9uYW1lc3BhY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZU5hbWVzcGFjZSksXG4gICAgY3VzdG9taXplZF9sb2FkX21ldHJpY19zcGVjaWZpY2F0aW9uOiBhdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25DdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbWl6ZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbiksXG4gICAgcHJlZGVmaW5lZF9sb2FkX21ldHJpY19zcGVjaWZpY2F0aW9uOiBhdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25QcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbiksXG4gICAgdGFyZ2V0X3RyYWNraW5nX2NvbmZpZ3VyYXRpb246IGNka3RmLmxpc3RNYXBwZXIoYXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEudGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZGlzYWJsZV9keW5hbWljX3NjYWxpbmc6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kaXNhYmxlRHluYW1pY1NjYWxpbmcpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBtYXhfY2FwYWNpdHk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1heENhcGFjaXR5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBtaW5fY2FwYWNpdHk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1pbkNhcGFjaXR5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBwcmVkaWN0aXZlX3NjYWxpbmdfbWF4X2NhcGFjaXR5X2JlaGF2aW9yOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcmVkaWN0aXZlU2NhbGluZ01heENhcGFjaXR5QmVoYXZpb3IpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHByZWRpY3RpdmVfc2NhbGluZ19tYXhfY2FwYWNpdHlfYnVmZmVyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcmVkaWN0aXZlU2NhbGluZ01heENhcGFjaXR5QnVmZmVyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBwcmVkaWN0aXZlX3NjYWxpbmdfbW9kZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucHJlZGljdGl2ZVNjYWxpbmdNb2RlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICByZXNvdXJjZV9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2NhbGFibGVfZGltZW5zaW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zY2FsYWJsZURpbWVuc2lvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2NhbGluZ19wb2xpY3lfdXBkYXRlX2JlaGF2aW9yOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zY2FsaW5nUG9saWN5VXBkYXRlQmVoYXZpb3IpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNjaGVkdWxlZF9hY3Rpb25fYnVmZmVyX3RpbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNjaGVkdWxlZEFjdGlvbkJ1ZmZlclRpbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHNlcnZpY2VfbmFtZXNwYWNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zZXJ2aWNlTmFtZXNwYWNlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjdXN0b21pemVkX2xvYWRfbWV0cmljX3NwZWNpZmljYXRpb246IHtcbiAgICAgIHZhbHVlOiBhdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25DdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbWl6ZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvbkN1c3RvbWl6ZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbkxpc3RcIixcbiAgICB9LFxuICAgIHByZWRlZmluZWRfbG9hZF9tZXRyaWNfc3BlY2lmaWNhdGlvbjoge1xuICAgICAgdmFsdWU6IGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEucHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uTGlzdFwiLFxuICAgIH0sXG4gICAgdGFyZ2V0X3RyYWNraW5nX2NvbmZpZ3VyYXRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kaXNhYmxlRHluYW1pY1NjYWxpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGlzYWJsZUR5bmFtaWNTY2FsaW5nID0gdGhpcy5fZGlzYWJsZUR5bmFtaWNTY2FsaW5nO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWF4Q2FwYWNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4Q2FwYWNpdHkgPSB0aGlzLl9tYXhDYXBhY2l0eTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21pbkNhcGFjaXR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1pbkNhcGFjaXR5ID0gdGhpcy5fbWluQ2FwYWNpdHk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmVkaWN0aXZlU2NhbGluZ01heENhcGFjaXR5QmVoYXZpb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZGljdGl2ZVNjYWxpbmdNYXhDYXBhY2l0eUJlaGF2aW9yID0gdGhpcy5fcHJlZGljdGl2ZVNjYWxpbmdNYXhDYXBhY2l0eUJlaGF2aW9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJlZGljdGl2ZVNjYWxpbmdNYXhDYXBhY2l0eUJ1ZmZlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmVkaWN0aXZlU2NhbGluZ01heENhcGFjaXR5QnVmZmVyID0gdGhpcy5fcHJlZGljdGl2ZVNjYWxpbmdNYXhDYXBhY2l0eUJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZWRpY3RpdmVTY2FsaW5nTW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmVkaWN0aXZlU2NhbGluZ01vZGUgPSB0aGlzLl9wcmVkaWN0aXZlU2NhbGluZ01vZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXNvdXJjZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlSWQgPSB0aGlzLl9yZXNvdXJjZUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2NhbGFibGVEaW1lbnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2NhbGFibGVEaW1lbnNpb24gPSB0aGlzLl9zY2FsYWJsZURpbWVuc2lvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NjYWxpbmdQb2xpY3lVcGRhdGVCZWhhdmlvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zY2FsaW5nUG9saWN5VXBkYXRlQmVoYXZpb3IgPSB0aGlzLl9zY2FsaW5nUG9saWN5VXBkYXRlQmVoYXZpb3I7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zY2hlZHVsZWRBY3Rpb25CdWZmZXJUaW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNjaGVkdWxlZEFjdGlvbkJ1ZmZlclRpbWUgPSB0aGlzLl9zY2hlZHVsZWRBY3Rpb25CdWZmZXJUaW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2VydmljZU5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZXJ2aWNlTmFtZXNwYWNlID0gdGhpcy5fc2VydmljZU5hbWVzcGFjZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2N1c3RvbWl6ZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24gPSB0aGlzLl9jdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uID0gdGhpcy5fcHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbiA9IHRoaXMuX3RhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kaXNhYmxlRHluYW1pY1NjYWxpbmcgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXhDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21pbkNhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJlZGljdGl2ZVNjYWxpbmdNYXhDYXBhY2l0eUJlaGF2aW9yID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJlZGljdGl2ZVNjYWxpbmdNYXhDYXBhY2l0eUJ1ZmZlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByZWRpY3RpdmVTY2FsaW5nTW9kZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc291cmNlSWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zY2FsYWJsZURpbWVuc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NjYWxpbmdQb2xpY3lVcGRhdGVCZWhhdmlvciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NjaGVkdWxlZEFjdGlvbkJ1ZmZlclRpbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZXJ2aWNlTmFtZXNwYWNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3VzdG9taXplZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Rpc2FibGVEeW5hbWljU2NhbGluZyA9IHZhbHVlLmRpc2FibGVEeW5hbWljU2NhbGluZztcbiAgICAgIHRoaXMuX21heENhcGFjaXR5ID0gdmFsdWUubWF4Q2FwYWNpdHk7XG4gICAgICB0aGlzLl9taW5DYXBhY2l0eSA9IHZhbHVlLm1pbkNhcGFjaXR5O1xuICAgICAgdGhpcy5fcHJlZGljdGl2ZVNjYWxpbmdNYXhDYXBhY2l0eUJlaGF2aW9yID0gdmFsdWUucHJlZGljdGl2ZVNjYWxpbmdNYXhDYXBhY2l0eUJlaGF2aW9yO1xuICAgICAgdGhpcy5fcHJlZGljdGl2ZVNjYWxpbmdNYXhDYXBhY2l0eUJ1ZmZlciA9IHZhbHVlLnByZWRpY3RpdmVTY2FsaW5nTWF4Q2FwYWNpdHlCdWZmZXI7XG4gICAgICB0aGlzLl9wcmVkaWN0aXZlU2NhbGluZ01vZGUgPSB2YWx1ZS5wcmVkaWN0aXZlU2NhbGluZ01vZGU7XG4gICAgICB0aGlzLl9yZXNvdXJjZUlkID0gdmFsdWUucmVzb3VyY2VJZDtcbiAgICAgIHRoaXMuX3NjYWxhYmxlRGltZW5zaW9uID0gdmFsdWUuc2NhbGFibGVEaW1lbnNpb247XG4gICAgICB0aGlzLl9zY2FsaW5nUG9saWN5VXBkYXRlQmVoYXZpb3IgPSB2YWx1ZS5zY2FsaW5nUG9saWN5VXBkYXRlQmVoYXZpb3I7XG4gICAgICB0aGlzLl9zY2hlZHVsZWRBY3Rpb25CdWZmZXJUaW1lID0gdmFsdWUuc2NoZWR1bGVkQWN0aW9uQnVmZmVyVGltZTtcbiAgICAgIHRoaXMuX3NlcnZpY2VOYW1lc3BhY2UgPSB2YWx1ZS5zZXJ2aWNlTmFtZXNwYWNlO1xuICAgICAgdGhpcy5fY3VzdG9taXplZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb247XG4gICAgICB0aGlzLl9wcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbjtcbiAgICAgIHRoaXMuX3RhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUudGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRpc2FibGVfZHluYW1pY19zY2FsaW5nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rpc2FibGVEeW5hbWljU2NhbGluZz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZGlzYWJsZUR5bmFtaWNTY2FsaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Rpc2FibGVfZHluYW1pY19zY2FsaW5nJyk7XG4gIH1cbiAgcHVibGljIHNldCBkaXNhYmxlRHluYW1pY1NjYWxpbmcodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2Rpc2FibGVEeW5hbWljU2NhbGluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERpc2FibGVEeW5hbWljU2NhbGluZygpIHtcbiAgICB0aGlzLl9kaXNhYmxlRHluYW1pY1NjYWxpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpc2FibGVEeW5hbWljU2NhbGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlRHluYW1pY1NjYWxpbmc7XG4gIH1cblxuICAvLyBtYXhfY2FwYWNpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWF4Q2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heENhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhDYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4Q2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4Q2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4Q2FwYWNpdHk7XG4gIH1cblxuICAvLyBtaW5fY2FwYWNpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWluQ2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1pbkNhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5DYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluQ2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluQ2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluQ2FwYWNpdHk7XG4gIH1cblxuICAvLyBwcmVkaWN0aXZlX3NjYWxpbmdfbWF4X2NhcGFjaXR5X2JlaGF2aW9yIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZWRpY3RpdmVTY2FsaW5nTWF4Q2FwYWNpdHlCZWhhdmlvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlZGljdGl2ZVNjYWxpbmdNYXhDYXBhY2l0eUJlaGF2aW9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZGljdGl2ZV9zY2FsaW5nX21heF9jYXBhY2l0eV9iZWhhdmlvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZGljdGl2ZVNjYWxpbmdNYXhDYXBhY2l0eUJlaGF2aW9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVkaWN0aXZlU2NhbGluZ01heENhcGFjaXR5QmVoYXZpb3IgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVkaWN0aXZlU2NhbGluZ01heENhcGFjaXR5QmVoYXZpb3IoKSB7XG4gICAgdGhpcy5fcHJlZGljdGl2ZVNjYWxpbmdNYXhDYXBhY2l0eUJlaGF2aW9yID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVkaWN0aXZlU2NhbGluZ01heENhcGFjaXR5QmVoYXZpb3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZGljdGl2ZVNjYWxpbmdNYXhDYXBhY2l0eUJlaGF2aW9yO1xuICB9XG5cbiAgLy8gcHJlZGljdGl2ZV9zY2FsaW5nX21heF9jYXBhY2l0eV9idWZmZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZGljdGl2ZVNjYWxpbmdNYXhDYXBhY2l0eUJ1ZmZlcj86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcHJlZGljdGl2ZVNjYWxpbmdNYXhDYXBhY2l0eUJ1ZmZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ByZWRpY3RpdmVfc2NhbGluZ19tYXhfY2FwYWNpdHlfYnVmZmVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVkaWN0aXZlU2NhbGluZ01heENhcGFjaXR5QnVmZmVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wcmVkaWN0aXZlU2NhbGluZ01heENhcGFjaXR5QnVmZmVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZGljdGl2ZVNjYWxpbmdNYXhDYXBhY2l0eUJ1ZmZlcigpIHtcbiAgICB0aGlzLl9wcmVkaWN0aXZlU2NhbGluZ01heENhcGFjaXR5QnVmZmVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVkaWN0aXZlU2NhbGluZ01heENhcGFjaXR5QnVmZmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWRpY3RpdmVTY2FsaW5nTWF4Q2FwYWNpdHlCdWZmZXI7XG4gIH1cblxuICAvLyBwcmVkaWN0aXZlX3NjYWxpbmdfbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVkaWN0aXZlU2NhbGluZ01vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByZWRpY3RpdmVTY2FsaW5nTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWRpY3RpdmVfc2NhbGluZ19tb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVkaWN0aXZlU2NhbGluZ01vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWRpY3RpdmVTY2FsaW5nTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWRpY3RpdmVTY2FsaW5nTW9kZSgpIHtcbiAgICB0aGlzLl9wcmVkaWN0aXZlU2NhbGluZ01vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWRpY3RpdmVTY2FsaW5nTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVkaWN0aXZlU2NhbGluZ01vZGU7XG4gIH1cblxuICAvLyByZXNvdXJjZV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZXNvdXJjZUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc291cmNlSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZUlkO1xuICB9XG5cbiAgLy8gc2NhbGFibGVfZGltZW5zaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NjYWxhYmxlRGltZW5zaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzY2FsYWJsZURpbWVuc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NjYWxhYmxlX2RpbWVuc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2NhbGFibGVEaW1lbnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NjYWxhYmxlRGltZW5zaW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjYWxhYmxlRGltZW5zaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxhYmxlRGltZW5zaW9uO1xuICB9XG5cbiAgLy8gc2NhbGluZ19wb2xpY3lfdXBkYXRlX2JlaGF2aW9yIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NjYWxpbmdQb2xpY3lVcGRhdGVCZWhhdmlvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2NhbGluZ1BvbGljeVVwZGF0ZUJlaGF2aW9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2NhbGluZ19wb2xpY3lfdXBkYXRlX2JlaGF2aW9yJyk7XG4gIH1cbiAgcHVibGljIHNldCBzY2FsaW5nUG9saWN5VXBkYXRlQmVoYXZpb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NjYWxpbmdQb2xpY3lVcGRhdGVCZWhhdmlvciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNjYWxpbmdQb2xpY3lVcGRhdGVCZWhhdmlvcigpIHtcbiAgICB0aGlzLl9zY2FsaW5nUG9saWN5VXBkYXRlQmVoYXZpb3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjYWxpbmdQb2xpY3lVcGRhdGVCZWhhdmlvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY2FsaW5nUG9saWN5VXBkYXRlQmVoYXZpb3I7XG4gIH1cblxuICAvLyBzY2hlZHVsZWRfYWN0aW9uX2J1ZmZlcl90aW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NjaGVkdWxlZEFjdGlvbkJ1ZmZlclRpbWU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHNjaGVkdWxlZEFjdGlvbkJ1ZmZlclRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzY2hlZHVsZWRfYWN0aW9uX2J1ZmZlcl90aW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzY2hlZHVsZWRBY3Rpb25CdWZmZXJUaW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zY2hlZHVsZWRBY3Rpb25CdWZmZXJUaW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2NoZWR1bGVkQWN0aW9uQnVmZmVyVGltZSgpIHtcbiAgICB0aGlzLl9zY2hlZHVsZWRBY3Rpb25CdWZmZXJUaW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY2hlZHVsZWRBY3Rpb25CdWZmZXJUaW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjaGVkdWxlZEFjdGlvbkJ1ZmZlclRpbWU7XG4gIH1cblxuICAvLyBzZXJ2aWNlX25hbWVzcGFjZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zZXJ2aWNlTmFtZXNwYWNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9uYW1lc3BhY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VOYW1lc3BhY2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcnZpY2VOYW1lc3BhY2UgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWVzcGFjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlTmFtZXNwYWNlO1xuICB9XG5cbiAgLy8gY3VzdG9taXplZF9sb2FkX21ldHJpY19zcGVjaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbWl6ZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbiA9IG5ldyBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25DdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJjdXN0b21pemVkX2xvYWRfbWV0cmljX3NwZWNpZmljYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgY3VzdG9taXplZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEN1c3RvbWl6ZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbih2YWx1ZTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uQ3VzdG9taXplZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5fY3VzdG9taXplZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24oKSB7XG4gICAgdGhpcy5fY3VzdG9taXplZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbWl6ZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21pemVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHByZWRlZmluZWRfbG9hZF9tZXRyaWNfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24gPSBuZXcgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uUHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwicHJlZGVmaW5lZF9sb2FkX21ldHJpY19zcGVjaWZpY2F0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IHByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRQcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb24odmFsdWU6IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbikge1xuICAgIHRoaXMuX3ByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uKCkge1xuICAgIHRoaXMuX3ByZWRlZmluZWRMb2FkTWV0cmljU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVkZWZpbmVkTG9hZE1ldHJpY1NwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZGVmaW5lZExvYWRNZXRyaWNTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0YXJnZXRfdHJhY2tpbmdfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90YXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24gPSBuZXcgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uVGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uTGlzdCh0aGlzLCBcInRhcmdldF90cmFja2luZ19jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRUYXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24odmFsdWU6IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvblRhcmdldFRyYWNraW5nQ29uZmlndXJhdGlvbltdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRUcmFja2luZ0NvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0VHJhY2tpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvbkxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvbltdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25PdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5ncGxhbnNfc2NhbGluZ19wbGFuIGF3c19hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhbn1cbiovXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19hdXRvc2NhbGluZ3BsYW5zX3NjYWxpbmdfcGxhblwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW4gcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW4gdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5ncGxhbnNfc2NhbGluZ19wbGFuI2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW4gdG8gaW1wb3J0IGlzIGZvdW5kXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVDb25maWdGb3JJbXBvcnQoc2NvcGU6IENvbnN0cnVjdCwgaW1wb3J0VG9JZDogc3RyaW5nLCBpbXBvcnRGcm9tSWQ6IHN0cmluZywgcHJvdmlkZXI/OiBjZGt0Zi5UZXJyYWZvcm1Qcm92aWRlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNka3RmLkltcG9ydGFibGVSZXNvdXJjZShzY29wZSwgaW1wb3J0VG9JZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwiYXdzX2F1dG9zY2FsaW5ncGxhbnNfc2NhbGluZ19wbGFuXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdwbGFuc19zY2FsaW5nX3BsYW4gYXdzX2F1dG9zY2FsaW5ncGxhbnNfc2NhbGluZ19wbGFufSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBBdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5Db25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYXV0b3NjYWxpbmdwbGFuc19zY2FsaW5nX3BsYW4nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fYXBwbGljYXRpb25Tb3VyY2UuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5hcHBsaWNhdGlvblNvdXJjZTtcbiAgICB0aGlzLl9zY2FsaW5nSW5zdHJ1Y3Rpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zY2FsaW5nSW5zdHJ1Y3Rpb247XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gc2NhbGluZ19wbGFuX3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzY2FsaW5nUGxhblZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzY2FsaW5nX3BsYW5fdmVyc2lvbicpO1xuICB9XG5cbiAgLy8gYXBwbGljYXRpb25fc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FwcGxpY2F0aW9uU291cmNlID0gbmV3IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkFwcGxpY2F0aW9uU291cmNlT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiYXBwbGljYXRpb25fc291cmNlXCIpO1xuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uU291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvblNvdXJjZTtcbiAgfVxuICBwdWJsaWMgcHV0QXBwbGljYXRpb25Tb3VyY2UodmFsdWU6IEF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhbkFwcGxpY2F0aW9uU291cmNlKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25Tb3VyY2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcHBsaWNhdGlvblNvdXJjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvblNvdXJjZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc2NhbGluZ19pbnN0cnVjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zY2FsaW5nSW5zdHJ1Y3Rpb24gPSBuZXcgQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uTGlzdCh0aGlzLCBcInNjYWxpbmdfaW5zdHJ1Y3Rpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc2NhbGluZ0luc3RydWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zY2FsaW5nSW5zdHJ1Y3Rpb247XG4gIH1cbiAgcHVibGljIHB1dFNjYWxpbmdJbnN0cnVjdGlvbih2YWx1ZTogQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuU2NhbGluZ0luc3RydWN0aW9uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3NjYWxpbmdJbnN0cnVjdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjYWxpbmdJbnN0cnVjdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY2FsaW5nSW5zdHJ1Y3Rpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgYXBwbGljYXRpb25fc291cmNlOiBhdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5BcHBsaWNhdGlvblNvdXJjZVRvVGVycmFmb3JtKHRoaXMuX2FwcGxpY2F0aW9uU291cmNlLmludGVybmFsVmFsdWUpLFxuICAgICAgc2NhbGluZ19pbnN0cnVjdGlvbjogY2RrdGYubGlzdE1hcHBlcihhdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25Ub1RlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fc2NhbGluZ0luc3RydWN0aW9uLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGFwcGxpY2F0aW9uX3NvdXJjZToge1xuICAgICAgICB2YWx1ZTogYXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VUb0hjbFRlcnJhZm9ybSh0aGlzLl9hcHBsaWNhdGlvblNvdXJjZS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXV0b3NjYWxpbmdwbGFuc1NjYWxpbmdQbGFuQXBwbGljYXRpb25Tb3VyY2VMaXN0XCIsXG4gICAgICB9LFxuICAgICAgc2NhbGluZ19pbnN0cnVjdGlvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChhdXRvc2NhbGluZ3BsYW5zU2NhbGluZ1BsYW5TY2FsaW5nSW5zdHJ1Y3Rpb25Ub0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fc2NhbGluZ0luc3RydWN0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkF1dG9zY2FsaW5ncGxhbnNTY2FsaW5nUGxhblNjYWxpbmdJbnN0cnVjdGlvbkxpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==