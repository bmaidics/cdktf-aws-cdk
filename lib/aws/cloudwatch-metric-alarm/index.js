"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudwatchMetricAlarm = exports.CloudwatchMetricAlarmMetricQueryList = exports.CloudwatchMetricAlarmMetricQueryOutputReference = exports.cloudwatchMetricAlarmMetricQueryToHclTerraform = exports.cloudwatchMetricAlarmMetricQueryToTerraform = exports.CloudwatchMetricAlarmMetricQueryMetricOutputReference = exports.cloudwatchMetricAlarmMetricQueryMetricToHclTerraform = exports.cloudwatchMetricAlarmMetricQueryMetricToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function cloudwatchMetricAlarmMetricQueryMetricToTerraform(struct) {
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
        period: cdktf.numberToTerraform(struct.period),
        stat: cdktf.stringToTerraform(struct.stat),
        unit: cdktf.stringToTerraform(struct.unit),
    };
}
exports.cloudwatchMetricAlarmMetricQueryMetricToTerraform = cloudwatchMetricAlarmMetricQueryMetricToTerraform;
function cloudwatchMetricAlarmMetricQueryMetricToHclTerraform(struct) {
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
        period: {
            value: cdktf.numberToHclTerraform(struct.period),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stat: {
            value: cdktf.stringToHclTerraform(struct.stat),
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
exports.cloudwatchMetricAlarmMetricQueryMetricToHclTerraform = cloudwatchMetricAlarmMetricQueryMetricToHclTerraform;
class CloudwatchMetricAlarmMetricQueryMetricOutputReference extends cdktf.ComplexObject {
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
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        if (this._stat !== undefined) {
            hasAnyValues = true;
            internalValueResult.stat = this._stat;
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
            this._period = undefined;
            this._stat = undefined;
            this._unit = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dimensions = value.dimensions;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
            this._period = value.period;
            this._stat = value.stat;
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
    resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get namespaceInput() {
        return this._namespace;
    }
    get period() {
        return this.getNumberAttribute('period');
    }
    set period(value) {
        this._period = value;
    }
    // Temporarily expose input value. Use with caution.
    get periodInput() {
        return this._period;
    }
    get stat() {
        return this.getStringAttribute('stat');
    }
    set stat(value) {
        this._stat = value;
    }
    // Temporarily expose input value. Use with caution.
    get statInput() {
        return this._stat;
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
exports.CloudwatchMetricAlarmMetricQueryMetricOutputReference = CloudwatchMetricAlarmMetricQueryMetricOutputReference;
_a = JSII_RTTI_SYMBOL_1;
CloudwatchMetricAlarmMetricQueryMetricOutputReference[_a] = { fqn: "@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference", version: "0.0.0" };
function cloudwatchMetricAlarmMetricQueryToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        account_id: cdktf.stringToTerraform(struct.accountId),
        expression: cdktf.stringToTerraform(struct.expression),
        id: cdktf.stringToTerraform(struct.id),
        label: cdktf.stringToTerraform(struct.label),
        return_data: cdktf.booleanToTerraform(struct.returnData),
        metric: cloudwatchMetricAlarmMetricQueryMetricToTerraform(struct.metric),
    };
}
exports.cloudwatchMetricAlarmMetricQueryToTerraform = cloudwatchMetricAlarmMetricQueryToTerraform;
function cloudwatchMetricAlarmMetricQueryToHclTerraform(struct) {
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
        expression: {
            value: cdktf.stringToHclTerraform(struct.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        label: {
            value: cdktf.stringToHclTerraform(struct.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        return_data: {
            value: cdktf.booleanToHclTerraform(struct.returnData),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        metric: {
            value: cloudwatchMetricAlarmMetricQueryMetricToHclTerraform(struct.metric),
            isBlock: true,
            type: "list",
            storageClassType: "CloudwatchMetricAlarmMetricQueryMetricList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cloudwatchMetricAlarmMetricQueryToHclTerraform = cloudwatchMetricAlarmMetricQueryToHclTerraform;
class CloudwatchMetricAlarmMetricQueryOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // metric - computed: false, optional: true, required: false
        this._metric = new CloudwatchMetricAlarmMetricQueryMetricOutputReference(this, "metric");
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
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        if (this._returnData !== undefined) {
            hasAnyValues = true;
            internalValueResult.returnData = this._returnData;
        }
        if (this._metric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metric = this._metric?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._expression = undefined;
            this._id = undefined;
            this._label = undefined;
            this._returnData = undefined;
            this._metric.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountId = value.accountId;
            this._expression = value.expression;
            this._id = value.id;
            this._label = value.label;
            this._returnData = value.returnData;
            this._metric.internalValue = value.metric;
        }
    }
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
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
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    get label() {
        return this.getStringAttribute('label');
    }
    set label(value) {
        this._label = value;
    }
    resetLabel() {
        this._label = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelInput() {
        return this._label;
    }
    get returnData() {
        return this.getBooleanAttribute('return_data');
    }
    set returnData(value) {
        this._returnData = value;
    }
    resetReturnData() {
        this._returnData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get returnDataInput() {
        return this._returnData;
    }
    get metric() {
        return this._metric;
    }
    putMetric(value) {
        this._metric.internalValue = value;
    }
    resetMetric() {
        this._metric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metricInput() {
        return this._metric.internalValue;
    }
}
exports.CloudwatchMetricAlarmMetricQueryOutputReference = CloudwatchMetricAlarmMetricQueryOutputReference;
_b = JSII_RTTI_SYMBOL_1;
CloudwatchMetricAlarmMetricQueryOutputReference[_b] = { fqn: "@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference", version: "0.0.0" };
class CloudwatchMetricAlarmMetricQueryList extends cdktf.ComplexList {
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
        return new CloudwatchMetricAlarmMetricQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.CloudwatchMetricAlarmMetricQueryList = CloudwatchMetricAlarmMetricQueryList;
_c = JSII_RTTI_SYMBOL_1;
CloudwatchMetricAlarmMetricQueryList[_c] = { fqn: "@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm aws_cloudwatch_metric_alarm}
*/
class CloudwatchMetricAlarm extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CloudwatchMetricAlarm resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchMetricAlarm to import
    * @param importFromId The id of the existing CloudwatchMetricAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchMetricAlarm to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_metric_alarm", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_alarm aws_cloudwatch_metric_alarm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchMetricAlarmConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudwatch_metric_alarm',
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
        // metric_query - computed: false, optional: true, required: false
        this._metricQuery = new CloudwatchMetricAlarmMetricQueryList(this, "metric_query", true);
        this._actionsEnabled = config.actionsEnabled;
        this._alarmActions = config.alarmActions;
        this._alarmDescription = config.alarmDescription;
        this._alarmName = config.alarmName;
        this._comparisonOperator = config.comparisonOperator;
        this._datapointsToAlarm = config.datapointsToAlarm;
        this._dimensions = config.dimensions;
        this._evaluateLowSampleCountPercentiles = config.evaluateLowSampleCountPercentiles;
        this._evaluationPeriods = config.evaluationPeriods;
        this._extendedStatistic = config.extendedStatistic;
        this._id = config.id;
        this._insufficientDataActions = config.insufficientDataActions;
        this._metricName = config.metricName;
        this._namespace = config.namespace;
        this._okActions = config.okActions;
        this._period = config.period;
        this._statistic = config.statistic;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._threshold = config.threshold;
        this._thresholdMetricId = config.thresholdMetricId;
        this._treatMissingData = config.treatMissingData;
        this._unit = config.unit;
        this._metricQuery.internalValue = config.metricQuery;
    }
    get actionsEnabled() {
        return this.getBooleanAttribute('actions_enabled');
    }
    set actionsEnabled(value) {
        this._actionsEnabled = value;
    }
    resetActionsEnabled() {
        this._actionsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get actionsEnabledInput() {
        return this._actionsEnabled;
    }
    get alarmActions() {
        return cdktf.Fn.tolist(this.getListAttribute('alarm_actions'));
    }
    set alarmActions(value) {
        this._alarmActions = value;
    }
    resetAlarmActions() {
        this._alarmActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get alarmActionsInput() {
        return this._alarmActions;
    }
    get alarmDescription() {
        return this.getStringAttribute('alarm_description');
    }
    set alarmDescription(value) {
        this._alarmDescription = value;
    }
    resetAlarmDescription() {
        this._alarmDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get alarmDescriptionInput() {
        return this._alarmDescription;
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
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    set comparisonOperator(value) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    get comparisonOperatorInput() {
        return this._comparisonOperator;
    }
    get datapointsToAlarm() {
        return this.getNumberAttribute('datapoints_to_alarm');
    }
    set datapointsToAlarm(value) {
        this._datapointsToAlarm = value;
    }
    resetDatapointsToAlarm() {
        this._datapointsToAlarm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get datapointsToAlarmInput() {
        return this._datapointsToAlarm;
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
    get evaluateLowSampleCountPercentiles() {
        return this.getStringAttribute('evaluate_low_sample_count_percentiles');
    }
    set evaluateLowSampleCountPercentiles(value) {
        this._evaluateLowSampleCountPercentiles = value;
    }
    resetEvaluateLowSampleCountPercentiles() {
        this._evaluateLowSampleCountPercentiles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get evaluateLowSampleCountPercentilesInput() {
        return this._evaluateLowSampleCountPercentiles;
    }
    get evaluationPeriods() {
        return this.getNumberAttribute('evaluation_periods');
    }
    set evaluationPeriods(value) {
        this._evaluationPeriods = value;
    }
    // Temporarily expose input value. Use with caution.
    get evaluationPeriodsInput() {
        return this._evaluationPeriods;
    }
    get extendedStatistic() {
        return this.getStringAttribute('extended_statistic');
    }
    set extendedStatistic(value) {
        this._extendedStatistic = value;
    }
    resetExtendedStatistic() {
        this._extendedStatistic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get extendedStatisticInput() {
        return this._extendedStatistic;
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
    get insufficientDataActions() {
        return cdktf.Fn.tolist(this.getListAttribute('insufficient_data_actions'));
    }
    set insufficientDataActions(value) {
        this._insufficientDataActions = value;
    }
    resetInsufficientDataActions() {
        this._insufficientDataActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get insufficientDataActionsInput() {
        return this._insufficientDataActions;
    }
    get metricName() {
        return this.getStringAttribute('metric_name');
    }
    set metricName(value) {
        this._metricName = value;
    }
    resetMetricName() {
        this._metricName = undefined;
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
    resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get namespaceInput() {
        return this._namespace;
    }
    get okActions() {
        return cdktf.Fn.tolist(this.getListAttribute('ok_actions'));
    }
    set okActions(value) {
        this._okActions = value;
    }
    resetOkActions() {
        this._okActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get okActionsInput() {
        return this._okActions;
    }
    get period() {
        return this.getNumberAttribute('period');
    }
    set period(value) {
        this._period = value;
    }
    resetPeriod() {
        this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get periodInput() {
        return this._period;
    }
    get statistic() {
        return this.getStringAttribute('statistic');
    }
    set statistic(value) {
        this._statistic = value;
    }
    resetStatistic() {
        this._statistic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statisticInput() {
        return this._statistic;
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
    get threshold() {
        return this.getNumberAttribute('threshold');
    }
    set threshold(value) {
        this._threshold = value;
    }
    resetThreshold() {
        this._threshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get thresholdInput() {
        return this._threshold;
    }
    get thresholdMetricId() {
        return this.getStringAttribute('threshold_metric_id');
    }
    set thresholdMetricId(value) {
        this._thresholdMetricId = value;
    }
    resetThresholdMetricId() {
        this._thresholdMetricId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get thresholdMetricIdInput() {
        return this._thresholdMetricId;
    }
    get treatMissingData() {
        return this.getStringAttribute('treat_missing_data');
    }
    set treatMissingData(value) {
        this._treatMissingData = value;
    }
    resetTreatMissingData() {
        this._treatMissingData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get treatMissingDataInput() {
        return this._treatMissingData;
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
    get metricQuery() {
        return this._metricQuery;
    }
    putMetricQuery(value) {
        this._metricQuery.internalValue = value;
    }
    resetMetricQuery() {
        this._metricQuery.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metricQueryInput() {
        return this._metricQuery.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            actions_enabled: cdktf.booleanToTerraform(this._actionsEnabled),
            alarm_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alarmActions),
            alarm_description: cdktf.stringToTerraform(this._alarmDescription),
            alarm_name: cdktf.stringToTerraform(this._alarmName),
            comparison_operator: cdktf.stringToTerraform(this._comparisonOperator),
            datapoints_to_alarm: cdktf.numberToTerraform(this._datapointsToAlarm),
            dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(this._dimensions),
            evaluate_low_sample_count_percentiles: cdktf.stringToTerraform(this._evaluateLowSampleCountPercentiles),
            evaluation_periods: cdktf.numberToTerraform(this._evaluationPeriods),
            extended_statistic: cdktf.stringToTerraform(this._extendedStatistic),
            id: cdktf.stringToTerraform(this._id),
            insufficient_data_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._insufficientDataActions),
            metric_name: cdktf.stringToTerraform(this._metricName),
            namespace: cdktf.stringToTerraform(this._namespace),
            ok_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._okActions),
            period: cdktf.numberToTerraform(this._period),
            statistic: cdktf.stringToTerraform(this._statistic),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            threshold: cdktf.numberToTerraform(this._threshold),
            threshold_metric_id: cdktf.stringToTerraform(this._thresholdMetricId),
            treat_missing_data: cdktf.stringToTerraform(this._treatMissingData),
            unit: cdktf.stringToTerraform(this._unit),
            metric_query: cdktf.listMapper(cloudwatchMetricAlarmMetricQueryToTerraform, true)(this._metricQuery.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            actions_enabled: {
                value: cdktf.booleanToHclTerraform(this._actionsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            alarm_actions: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alarmActions),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            alarm_description: {
                value: cdktf.stringToHclTerraform(this._alarmDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            alarm_name: {
                value: cdktf.stringToHclTerraform(this._alarmName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            comparison_operator: {
                value: cdktf.stringToHclTerraform(this._comparisonOperator),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            datapoints_to_alarm: {
                value: cdktf.numberToHclTerraform(this._datapointsToAlarm),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            dimensions: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dimensions),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            evaluate_low_sample_count_percentiles: {
                value: cdktf.stringToHclTerraform(this._evaluateLowSampleCountPercentiles),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            evaluation_periods: {
                value: cdktf.numberToHclTerraform(this._evaluationPeriods),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            extended_statistic: {
                value: cdktf.stringToHclTerraform(this._extendedStatistic),
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
            insufficient_data_actions: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._insufficientDataActions),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            metric_name: {
                value: cdktf.stringToHclTerraform(this._metricName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            namespace: {
                value: cdktf.stringToHclTerraform(this._namespace),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ok_actions: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._okActions),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            period: {
                value: cdktf.numberToHclTerraform(this._period),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            statistic: {
                value: cdktf.stringToHclTerraform(this._statistic),
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
            threshold: {
                value: cdktf.numberToHclTerraform(this._threshold),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            threshold_metric_id: {
                value: cdktf.stringToHclTerraform(this._thresholdMetricId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            treat_missing_data: {
                value: cdktf.stringToHclTerraform(this._treatMissingData),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            unit: {
                value: cdktf.stringToHclTerraform(this._unit),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metric_query: {
                value: cdktf.listMapperHcl(cloudwatchMetricAlarmMetricQueryToHclTerraform, true)(this._metricQuery.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CloudwatchMetricAlarmMetricQueryList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.CloudwatchMetricAlarm = CloudwatchMetricAlarm;
_d = JSII_RTTI_SYMBOL_1;
CloudwatchMetricAlarm[_d] = { fqn: "@cdktf/aws-cdk.cloudwatchMetricAlarm.CloudwatchMetricAlarm", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
CloudwatchMetricAlarm.tfResourceType = "aws_cloudwatch_metric_alarm";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2Nsb3Vkd2F0Y2gtbWV0cmljLWFsYXJtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBc0kvQixTQUFnQixpREFBaUQsQ0FBQyxNQUF1RztJQUN2SyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN6RSxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3JELE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO0tBQzVDLENBQUE7QUFDSCxDQUFDO0FBYkQsOEdBYUM7QUFHRCxTQUFnQixvREFBb0QsQ0FBQyxNQUF1RztJQUMxSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxN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QUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQWpvQkgsc0RBa29CQzs7O0FBaG9CQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLG9DQUFjLEdBQUcsNkJBQTZCLEFBQWhDLENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm1cbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZHdhdGNoTWV0cmljQWxhcm1Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm0jYWN0aW9uc19lbmFibGVkIENsb3Vkd2F0Y2hNZXRyaWNBbGFybSNhY3Rpb25zX2VuYWJsZWR9XG4gICovXG4gIHJlYWRvbmx5IGFjdGlvbnNFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZHdhdGNoX21ldHJpY19hbGFybSNhbGFybV9hY3Rpb25zIENsb3Vkd2F0Y2hNZXRyaWNBbGFybSNhbGFybV9hY3Rpb25zfVxuICAqL1xuICByZWFkb25seSBhbGFybUFjdGlvbnM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm0jYWxhcm1fZGVzY3JpcHRpb24gQ2xvdWR3YXRjaE1ldHJpY0FsYXJtI2FsYXJtX2Rlc2NyaXB0aW9ufVxuICAqL1xuICByZWFkb25seSBhbGFybURlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZHdhdGNoX21ldHJpY19hbGFybSNhbGFybV9uYW1lIENsb3Vkd2F0Y2hNZXRyaWNBbGFybSNhbGFybV9uYW1lfVxuICAqL1xuICByZWFkb25seSBhbGFybU5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm0jY29tcGFyaXNvbl9vcGVyYXRvciBDbG91ZHdhdGNoTWV0cmljQWxhcm0jY29tcGFyaXNvbl9vcGVyYXRvcn1cbiAgKi9cbiAgcmVhZG9ubHkgY29tcGFyaXNvbk9wZXJhdG9yOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3Vkd2F0Y2hfbWV0cmljX2FsYXJtI2RhdGFwb2ludHNfdG9fYWxhcm0gQ2xvdWR3YXRjaE1ldHJpY0FsYXJtI2RhdGFwb2ludHNfdG9fYWxhcm19XG4gICovXG4gIHJlYWRvbmx5IGRhdGFwb2ludHNUb0FsYXJtPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZHdhdGNoX21ldHJpY19hbGFybSNkaW1lbnNpb25zIENsb3Vkd2F0Y2hNZXRyaWNBbGFybSNkaW1lbnNpb25zfVxuICAqL1xuICByZWFkb25seSBkaW1lbnNpb25zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm0jZXZhbHVhdGVfbG93X3NhbXBsZV9jb3VudF9wZXJjZW50aWxlcyBDbG91ZHdhdGNoTWV0cmljQWxhcm0jZXZhbHVhdGVfbG93X3NhbXBsZV9jb3VudF9wZXJjZW50aWxlc31cbiAgKi9cbiAgcmVhZG9ubHkgZXZhbHVhdGVMb3dTYW1wbGVDb3VudFBlcmNlbnRpbGVzPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZHdhdGNoX21ldHJpY19hbGFybSNldmFsdWF0aW9uX3BlcmlvZHMgQ2xvdWR3YXRjaE1ldHJpY0FsYXJtI2V2YWx1YXRpb25fcGVyaW9kc31cbiAgKi9cbiAgcmVhZG9ubHkgZXZhbHVhdGlvblBlcmlvZHM6IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm0jZXh0ZW5kZWRfc3RhdGlzdGljIENsb3Vkd2F0Y2hNZXRyaWNBbGFybSNleHRlbmRlZF9zdGF0aXN0aWN9XG4gICovXG4gIHJlYWRvbmx5IGV4dGVuZGVkU3RhdGlzdGljPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZHdhdGNoX21ldHJpY19hbGFybSNpZCBDbG91ZHdhdGNoTWV0cmljQWxhcm0jaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3Vkd2F0Y2hfbWV0cmljX2FsYXJtI2luc3VmZmljaWVudF9kYXRhX2FjdGlvbnMgQ2xvdWR3YXRjaE1ldHJpY0FsYXJtI2luc3VmZmljaWVudF9kYXRhX2FjdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IGluc3VmZmljaWVudERhdGFBY3Rpb25zPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3Vkd2F0Y2hfbWV0cmljX2FsYXJtI21ldHJpY19uYW1lIENsb3Vkd2F0Y2hNZXRyaWNBbGFybSNtZXRyaWNfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbWV0cmljTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm0jbmFtZXNwYWNlIENsb3Vkd2F0Y2hNZXRyaWNBbGFybSNuYW1lc3BhY2V9XG4gICovXG4gIHJlYWRvbmx5IG5hbWVzcGFjZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm0jb2tfYWN0aW9ucyBDbG91ZHdhdGNoTWV0cmljQWxhcm0jb2tfYWN0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgb2tBY3Rpb25zPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3Vkd2F0Y2hfbWV0cmljX2FsYXJtI3BlcmlvZCBDbG91ZHdhdGNoTWV0cmljQWxhcm0jcGVyaW9kfVxuICAqL1xuICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3Vkd2F0Y2hfbWV0cmljX2FsYXJtI3N0YXRpc3RpYyBDbG91ZHdhdGNoTWV0cmljQWxhcm0jc3RhdGlzdGljfVxuICAqL1xuICByZWFkb25seSBzdGF0aXN0aWM/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3Vkd2F0Y2hfbWV0cmljX2FsYXJtI3RhZ3MgQ2xvdWR3YXRjaE1ldHJpY0FsYXJtI3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZHdhdGNoX21ldHJpY19hbGFybSN0YWdzX2FsbCBDbG91ZHdhdGNoTWV0cmljQWxhcm0jdGFnc19hbGx9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZHdhdGNoX21ldHJpY19hbGFybSN0aHJlc2hvbGQgQ2xvdWR3YXRjaE1ldHJpY0FsYXJtI3RocmVzaG9sZH1cbiAgKi9cbiAgcmVhZG9ubHkgdGhyZXNob2xkPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZHdhdGNoX21ldHJpY19hbGFybSN0aHJlc2hvbGRfbWV0cmljX2lkIENsb3Vkd2F0Y2hNZXRyaWNBbGFybSN0aHJlc2hvbGRfbWV0cmljX2lkfVxuICAqL1xuICByZWFkb25seSB0aHJlc2hvbGRNZXRyaWNJZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm0jdHJlYXRfbWlzc2luZ19kYXRhIENsb3Vkd2F0Y2hNZXRyaWNBbGFybSN0cmVhdF9taXNzaW5nX2RhdGF9XG4gICovXG4gIHJlYWRvbmx5IHRyZWF0TWlzc2luZ0RhdGE/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3Vkd2F0Y2hfbWV0cmljX2FsYXJtI3VuaXQgQ2xvdWR3YXRjaE1ldHJpY0FsYXJtI3VuaXR9XG4gICovXG4gIHJlYWRvbmx5IHVuaXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIG1ldHJpY19xdWVyeSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm0jbWV0cmljX3F1ZXJ5IENsb3Vkd2F0Y2hNZXRyaWNBbGFybSNtZXRyaWNfcXVlcnl9XG4gICovXG4gIHJlYWRvbmx5IG1ldHJpY1F1ZXJ5PzogQ2xvdWR3YXRjaE1ldHJpY0FsYXJtTWV0cmljUXVlcnlbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZHdhdGNoTWV0cmljQWxhcm1NZXRyaWNRdWVyeU1ldHJpYyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3Vkd2F0Y2hfbWV0cmljX2FsYXJtI2RpbWVuc2lvbnMgQ2xvdWR3YXRjaE1ldHJpY0FsYXJtI2RpbWVuc2lvbnN9XG4gICovXG4gIHJlYWRvbmx5IGRpbWVuc2lvbnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZHdhdGNoX21ldHJpY19hbGFybSNtZXRyaWNfbmFtZSBDbG91ZHdhdGNoTWV0cmljQWxhcm0jbWV0cmljX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG1ldHJpY05hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm0jbmFtZXNwYWNlIENsb3Vkd2F0Y2hNZXRyaWNBbGFybSNuYW1lc3BhY2V9XG4gICovXG4gIHJlYWRvbmx5IG5hbWVzcGFjZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm0jcGVyaW9kIENsb3Vkd2F0Y2hNZXRyaWNBbGFybSNwZXJpb2R9XG4gICovXG4gIHJlYWRvbmx5IHBlcmlvZDogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZHdhdGNoX21ldHJpY19hbGFybSNzdGF0IENsb3Vkd2F0Y2hNZXRyaWNBbGFybSNzdGF0fVxuICAqL1xuICByZWFkb25seSBzdGF0OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3Vkd2F0Y2hfbWV0cmljX2FsYXJtI3VuaXQgQ2xvdWR3YXRjaE1ldHJpY0FsYXJtI3VuaXR9XG4gICovXG4gIHJlYWRvbmx5IHVuaXQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZHdhdGNoTWV0cmljQWxhcm1NZXRyaWNRdWVyeU1ldHJpY1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5TWV0cmljT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWR3YXRjaE1ldHJpY0FsYXJtTWV0cmljUXVlcnlNZXRyaWMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGltZW5zaW9uczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5kaW1lbnNpb25zKSxcbiAgICBtZXRyaWNfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRyaWNOYW1lKSxcbiAgICBuYW1lc3BhY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZXNwYWNlKSxcbiAgICBwZXJpb2Q6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucGVyaW9kKSxcbiAgICBzdGF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXQpLFxuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWR3YXRjaE1ldHJpY0FsYXJtTWV0cmljUXVlcnlNZXRyaWNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZHdhdGNoTWV0cmljQWxhcm1NZXRyaWNRdWVyeU1ldHJpY091dHB1dFJlZmVyZW5jZSB8IENsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5TWV0cmljKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBkaW1lbnNpb25zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkoc3RydWN0IS5kaW1lbnNpb25zKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgfSxcbiAgICBtZXRyaWNfbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWV0cmljTmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbmFtZXNwYWNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5uYW1lc3BhY2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHBlcmlvZDoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEucGVyaW9kKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBzdGF0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zdGF0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB1bml0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5TWV0cmljT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZHdhdGNoTWV0cmljQWxhcm1NZXRyaWNRdWVyeU1ldHJpYyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGltZW5zaW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kaW1lbnNpb25zID0gdGhpcy5fZGltZW5zaW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX21ldHJpY05hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWV0cmljTmFtZSA9IHRoaXMuX21ldHJpY05hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9uYW1lc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZXNwYWNlID0gdGhpcy5fbmFtZXNwYWNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGVyaW9kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBlcmlvZCA9IHRoaXMuX3BlcmlvZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0YXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhdCA9IHRoaXMuX3N0YXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl91bml0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVuaXQgPSB0aGlzLl91bml0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWR3YXRjaE1ldHJpY0FsYXJtTWV0cmljUXVlcnlNZXRyaWMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kaW1lbnNpb25zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWV0cmljTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25hbWVzcGFjZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BlcmlvZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0YXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91bml0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kaW1lbnNpb25zID0gdmFsdWUuZGltZW5zaW9ucztcbiAgICAgIHRoaXMuX21ldHJpY05hbWUgPSB2YWx1ZS5tZXRyaWNOYW1lO1xuICAgICAgdGhpcy5fbmFtZXNwYWNlID0gdmFsdWUubmFtZXNwYWNlO1xuICAgICAgdGhpcy5fcGVyaW9kID0gdmFsdWUucGVyaW9kO1xuICAgICAgdGhpcy5fc3RhdCA9IHZhbHVlLnN0YXQ7XG4gICAgICB0aGlzLl91bml0ID0gdmFsdWUudW5pdDtcbiAgICB9XG4gIH1cblxuICAvLyBkaW1lbnNpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RpbWVuc2lvbnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCBkaW1lbnNpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgnZGltZW5zaW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGltZW5zaW9ucyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX2RpbWVuc2lvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREaW1lbnNpb25zKCkge1xuICAgIHRoaXMuX2RpbWVuc2lvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpbWVuc2lvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGltZW5zaW9ucztcbiAgfVxuXG4gIC8vIG1ldHJpY19uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21ldHJpY05hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1ldHJpY05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXRyaWNfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0cmljTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWV0cmljTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRyaWNOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpY05hbWU7XG4gIH1cblxuICAvLyBuYW1lc3BhY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZXNwYWNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lc3BhY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWVzcGFjZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZXNwYWNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZXNwYWNlKCkge1xuICAgIHRoaXMuX25hbWVzcGFjZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZXNwYWNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVzcGFjZTtcbiAgfVxuXG4gIC8vIHBlcmlvZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wZXJpb2Q/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHBlcmlvZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BlcmlvZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGVyaW9kKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wZXJpb2QgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGVyaW9kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlcmlvZDtcbiAgfVxuXG4gIC8vIHN0YXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3RhdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RhdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0O1xuICB9XG5cbiAgLy8gdW5pdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91bml0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1bml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndW5pdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdW5pdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdW5pdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVuaXQoKSB7XG4gICAgdGhpcy5fdW5pdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdW5pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91bml0O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm0jYWNjb3VudF9pZCBDbG91ZHdhdGNoTWV0cmljQWxhcm0jYWNjb3VudF9pZH1cbiAgKi9cbiAgcmVhZG9ubHkgYWNjb3VudElkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZHdhdGNoX21ldHJpY19hbGFybSNleHByZXNzaW9uIENsb3Vkd2F0Y2hNZXRyaWNBbGFybSNleHByZXNzaW9ufVxuICAqL1xuICByZWFkb25seSBleHByZXNzaW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZHdhdGNoX21ldHJpY19hbGFybSNpZCBDbG91ZHdhdGNoTWV0cmljQWxhcm0jaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm0jbGFiZWwgQ2xvdWR3YXRjaE1ldHJpY0FsYXJtI2xhYmVsfVxuICAqL1xuICByZWFkb25seSBsYWJlbD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm0jcmV0dXJuX2RhdGEgQ2xvdWR3YXRjaE1ldHJpY0FsYXJtI3JldHVybl9kYXRhfVxuICAqL1xuICByZWFkb25seSByZXR1cm5EYXRhPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBtZXRyaWMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2Nsb3Vkd2F0Y2hfbWV0cmljX2FsYXJtI21ldHJpYyBDbG91ZHdhdGNoTWV0cmljQWxhcm0jbWV0cmljfVxuICAqL1xuICByZWFkb25seSBtZXRyaWM/OiBDbG91ZHdhdGNoTWV0cmljQWxhcm1NZXRyaWNRdWVyeU1ldHJpYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5VG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWR3YXRjaE1ldHJpY0FsYXJtTWV0cmljUXVlcnkgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY2NvdW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY291bnRJZCksXG4gICAgZXhwcmVzc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5leHByZXNzaW9uKSxcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gICAgbGFiZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGFiZWwpLFxuICAgIHJldHVybl9kYXRhOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5yZXR1cm5EYXRhKSxcbiAgICBtZXRyaWM6IGNsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5TWV0cmljVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRyaWMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5VG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ2xvdWR3YXRjaE1ldHJpY0FsYXJtTWV0cmljUXVlcnkgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYWNjb3VudF9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWNjb3VudElkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5leHByZXNzaW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBpZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sYWJlbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcmV0dXJuX2RhdGE6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5yZXR1cm5EYXRhKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgbWV0cmljOiB7XG4gICAgICB2YWx1ZTogY2xvdWR3YXRjaE1ldHJpY0FsYXJtTWV0cmljUXVlcnlNZXRyaWNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpYyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5TWV0cmljTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZHdhdGNoTWV0cmljQWxhcm1NZXRyaWNRdWVyeU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZHdhdGNoTWV0cmljQWxhcm1NZXRyaWNRdWVyeSB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWNjb3VudElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjY291bnRJZCA9IHRoaXMuX2FjY291bnRJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2V4cHJlc3Npb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZXhwcmVzc2lvbiA9IHRoaXMuX2V4cHJlc3Npb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pZCA9IHRoaXMuX2lkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGFiZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGFiZWwgPSB0aGlzLl9sYWJlbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JldHVybkRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmV0dXJuRGF0YSA9IHRoaXMuX3JldHVybkRhdGE7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tZXRyaWM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWV0cmljID0gdGhpcy5fbWV0cmljPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWR3YXRjaE1ldHJpY0FsYXJtTWV0cmljUXVlcnkgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYWNjb3VudElkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZXhwcmVzc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXR1cm5EYXRhID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWV0cmljLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYWNjb3VudElkID0gdmFsdWUuYWNjb3VudElkO1xuICAgICAgdGhpcy5fZXhwcmVzc2lvbiA9IHZhbHVlLmV4cHJlc3Npb247XG4gICAgICB0aGlzLl9pZCA9IHZhbHVlLmlkO1xuICAgICAgdGhpcy5fbGFiZWwgPSB2YWx1ZS5sYWJlbDtcbiAgICAgIHRoaXMuX3JldHVybkRhdGEgPSB2YWx1ZS5yZXR1cm5EYXRhO1xuICAgICAgdGhpcy5fbWV0cmljLmludGVybmFsVmFsdWUgPSB2YWx1ZS5tZXRyaWM7XG4gICAgfVxuICB9XG5cbiAgLy8gYWNjb3VudF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2NvdW50SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFjY291bnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjY291bnRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjY291bnRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWNjb3VudElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjb3VudElkKCkge1xuICAgIHRoaXMuX2FjY291bnRJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjb3VudElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY291bnRJZDtcbiAgfVxuXG4gIC8vIGV4cHJlc3Npb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXhwcmVzc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4cHJlc3Npb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4cHJlc3Npb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4cHJlc3Npb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFeHByZXNzaW9uKCkge1xuICAgIHRoaXMuX2V4cHJlc3Npb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4cHJlc3Npb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwcmVzc2lvbjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBsYWJlbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYWJlbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYWJlbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGFiZWwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGFiZWwoKSB7XG4gICAgdGhpcy5fbGFiZWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhYmVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICB9XG5cbiAgLy8gcmV0dXJuX2RhdGEgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmV0dXJuRGF0YT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmV0dXJuRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXR1cm5fZGF0YScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmV0dXJuRGF0YSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmV0dXJuRGF0YSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJldHVybkRhdGEoKSB7XG4gICAgdGhpcy5fcmV0dXJuRGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmV0dXJuRGF0YUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXR1cm5EYXRhO1xuICB9XG5cbiAgLy8gbWV0cmljIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldHJpYyA9IG5ldyBDbG91ZHdhdGNoTWV0cmljQWxhcm1NZXRyaWNRdWVyeU1ldHJpY091dHB1dFJlZmVyZW5jZSh0aGlzLCBcIm1ldHJpY1wiKTtcbiAgcHVibGljIGdldCBtZXRyaWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpYztcbiAgfVxuICBwdWJsaWMgcHV0TWV0cmljKHZhbHVlOiBDbG91ZHdhdGNoTWV0cmljQWxhcm1NZXRyaWNRdWVyeU1ldHJpYykge1xuICAgIHRoaXMuX21ldHJpYy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWV0cmljKCkge1xuICAgIHRoaXMuX21ldHJpYy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRyaWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5TGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogQ2xvdWR3YXRjaE1ldHJpY0FsYXJtTWV0cmljUXVlcnlbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogQ2xvdWR3YXRjaE1ldHJpY0FsYXJtTWV0cmljUXVlcnlPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgQ2xvdWR3YXRjaE1ldHJpY0FsYXJtTWV0cmljUXVlcnlPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm0gYXdzX2Nsb3Vkd2F0Y2hfbWV0cmljX2FsYXJtfVxuKi9cbmV4cG9ydCBjbGFzcyBDbG91ZHdhdGNoTWV0cmljQWxhcm0gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiYXdzX2Nsb3Vkd2F0Y2hfbWV0cmljX2FsYXJtXCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIENsb3Vkd2F0Y2hNZXRyaWNBbGFybSByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBDbG91ZHdhdGNoTWV0cmljQWxhcm0gdG8gaW1wb3J0XG4gICogQHBhcmFtIGltcG9ydEZyb21JZCBUaGUgaWQgb2YgdGhlIGV4aXN0aW5nIENsb3Vkd2F0Y2hNZXRyaWNBbGFybSB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm0jaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIENsb3Vkd2F0Y2hNZXRyaWNBbGFybSB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm1cIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jbG91ZHdhdGNoX21ldHJpY19hbGFybSBhd3NfY2xvdWR3YXRjaF9tZXRyaWNfYWxhcm19IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIENsb3Vkd2F0Y2hNZXRyaWNBbGFybUNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBDbG91ZHdhdGNoTWV0cmljQWxhcm1Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19jbG91ZHdhdGNoX21ldHJpY19hbGFybScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnLFxuICAgICAgICBwcm92aWRlclZlcnNpb246ICczLjc2LjEnLFxuICAgICAgICBwcm92aWRlclZlcnNpb25Db25zdHJhaW50OiAnfj4gMy4wJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlLFxuICAgICAgcHJvdmlzaW9uZXJzOiBjb25maWcucHJvdmlzaW9uZXJzLFxuICAgICAgY29ubmVjdGlvbjogY29uZmlnLmNvbm5lY3Rpb24sXG4gICAgICBmb3JFYWNoOiBjb25maWcuZm9yRWFjaFxuICAgIH0pO1xuICAgIHRoaXMuX2FjdGlvbnNFbmFibGVkID0gY29uZmlnLmFjdGlvbnNFbmFibGVkO1xuICAgIHRoaXMuX2FsYXJtQWN0aW9ucyA9IGNvbmZpZy5hbGFybUFjdGlvbnM7XG4gICAgdGhpcy5fYWxhcm1EZXNjcmlwdGlvbiA9IGNvbmZpZy5hbGFybURlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2FsYXJtTmFtZSA9IGNvbmZpZy5hbGFybU5hbWU7XG4gICAgdGhpcy5fY29tcGFyaXNvbk9wZXJhdG9yID0gY29uZmlnLmNvbXBhcmlzb25PcGVyYXRvcjtcbiAgICB0aGlzLl9kYXRhcG9pbnRzVG9BbGFybSA9IGNvbmZpZy5kYXRhcG9pbnRzVG9BbGFybTtcbiAgICB0aGlzLl9kaW1lbnNpb25zID0gY29uZmlnLmRpbWVuc2lvbnM7XG4gICAgdGhpcy5fZXZhbHVhdGVMb3dTYW1wbGVDb3VudFBlcmNlbnRpbGVzID0gY29uZmlnLmV2YWx1YXRlTG93U2FtcGxlQ291bnRQZXJjZW50aWxlcztcbiAgICB0aGlzLl9ldmFsdWF0aW9uUGVyaW9kcyA9IGNvbmZpZy5ldmFsdWF0aW9uUGVyaW9kcztcbiAgICB0aGlzLl9leHRlbmRlZFN0YXRpc3RpYyA9IGNvbmZpZy5leHRlbmRlZFN0YXRpc3RpYztcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9pbnN1ZmZpY2llbnREYXRhQWN0aW9ucyA9IGNvbmZpZy5pbnN1ZmZpY2llbnREYXRhQWN0aW9ucztcbiAgICB0aGlzLl9tZXRyaWNOYW1lID0gY29uZmlnLm1ldHJpY05hbWU7XG4gICAgdGhpcy5fbmFtZXNwYWNlID0gY29uZmlnLm5hbWVzcGFjZTtcbiAgICB0aGlzLl9va0FjdGlvbnMgPSBjb25maWcub2tBY3Rpb25zO1xuICAgIHRoaXMuX3BlcmlvZCA9IGNvbmZpZy5wZXJpb2Q7XG4gICAgdGhpcy5fc3RhdGlzdGljID0gY29uZmlnLnN0YXRpc3RpYztcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3RocmVzaG9sZCA9IGNvbmZpZy50aHJlc2hvbGQ7XG4gICAgdGhpcy5fdGhyZXNob2xkTWV0cmljSWQgPSBjb25maWcudGhyZXNob2xkTWV0cmljSWQ7XG4gICAgdGhpcy5fdHJlYXRNaXNzaW5nRGF0YSA9IGNvbmZpZy50cmVhdE1pc3NpbmdEYXRhO1xuICAgIHRoaXMuX3VuaXQgPSBjb25maWcudW5pdDtcbiAgICB0aGlzLl9tZXRyaWNRdWVyeS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLm1ldHJpY1F1ZXJ5O1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhY3Rpb25zX2VuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWN0aW9uc0VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFjdGlvbnNFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2FjdGlvbnNfZW5hYmxlZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWN0aW9uc0VuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FjdGlvbnNFbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWN0aW9uc0VuYWJsZWQoKSB7XG4gICAgdGhpcy5fYWN0aW9uc0VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjdGlvbnNFbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbnNFbmFibGVkO1xuICB9XG5cbiAgLy8gYWxhcm1fYWN0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGFybUFjdGlvbnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgYWxhcm1BY3Rpb25zKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhbGFybV9hY3Rpb25zJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxhcm1BY3Rpb25zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2FsYXJtQWN0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsYXJtQWN0aW9ucygpIHtcbiAgICB0aGlzLl9hbGFybUFjdGlvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsYXJtQWN0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGFybUFjdGlvbnM7XG4gIH1cblxuICAvLyBhbGFybV9kZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGFybURlc2NyaXB0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhbGFybURlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWxhcm1fZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsYXJtRGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FsYXJtRGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGFybURlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2FsYXJtRGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsYXJtRGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxhcm1EZXNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vIGFsYXJtX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWxhcm1OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhbGFybU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbGFybV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGFybU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FsYXJtTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGFybU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxhcm1OYW1lO1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjb21wYXJpc29uX29wZXJhdG9yIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NvbXBhcmlzb25PcGVyYXRvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29tcGFyaXNvbk9wZXJhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcGFyaXNvbl9vcGVyYXRvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29tcGFyaXNvbk9wZXJhdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb21wYXJpc29uT3BlcmF0b3IgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29tcGFyaXNvbk9wZXJhdG9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBhcmlzb25PcGVyYXRvcjtcbiAgfVxuXG4gIC8vIGRhdGFwb2ludHNfdG9fYWxhcm0gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGF0YXBvaW50c1RvQWxhcm0/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGRhdGFwb2ludHNUb0FsYXJtKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGF0YXBvaW50c190b19hbGFybScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGF0YXBvaW50c1RvQWxhcm0odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2RhdGFwb2ludHNUb0FsYXJtID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGF0YXBvaW50c1RvQWxhcm0oKSB7XG4gICAgdGhpcy5fZGF0YXBvaW50c1RvQWxhcm0gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFwb2ludHNUb0FsYXJtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFwb2ludHNUb0FsYXJtO1xuICB9XG5cbiAgLy8gZGltZW5zaW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kaW1lbnNpb25zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgZGltZW5zaW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ2RpbWVuc2lvbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpbWVuc2lvbnModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl9kaW1lbnNpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGltZW5zaW9ucygpIHtcbiAgICB0aGlzLl9kaW1lbnNpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkaW1lbnNpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpbWVuc2lvbnM7XG4gIH1cblxuICAvLyBldmFsdWF0ZV9sb3dfc2FtcGxlX2NvdW50X3BlcmNlbnRpbGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXZhbHVhdGVMb3dTYW1wbGVDb3VudFBlcmNlbnRpbGVzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBldmFsdWF0ZUxvd1NhbXBsZUNvdW50UGVyY2VudGlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdldmFsdWF0ZV9sb3dfc2FtcGxlX2NvdW50X3BlcmNlbnRpbGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBldmFsdWF0ZUxvd1NhbXBsZUNvdW50UGVyY2VudGlsZXModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V2YWx1YXRlTG93U2FtcGxlQ291bnRQZXJjZW50aWxlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV2YWx1YXRlTG93U2FtcGxlQ291bnRQZXJjZW50aWxlcygpIHtcbiAgICB0aGlzLl9ldmFsdWF0ZUxvd1NhbXBsZUNvdW50UGVyY2VudGlsZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV2YWx1YXRlTG93U2FtcGxlQ291bnRQZXJjZW50aWxlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ldmFsdWF0ZUxvd1NhbXBsZUNvdW50UGVyY2VudGlsZXM7XG4gIH1cblxuICAvLyBldmFsdWF0aW9uX3BlcmlvZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZXZhbHVhdGlvblBlcmlvZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGV2YWx1YXRpb25QZXJpb2RzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZXZhbHVhdGlvbl9wZXJpb2RzJyk7XG4gIH1cbiAgcHVibGljIHNldCBldmFsdWF0aW9uUGVyaW9kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZXZhbHVhdGlvblBlcmlvZHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXZhbHVhdGlvblBlcmlvZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXZhbHVhdGlvblBlcmlvZHM7XG4gIH1cblxuICAvLyBleHRlbmRlZF9zdGF0aXN0aWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXh0ZW5kZWRTdGF0aXN0aWM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV4dGVuZGVkU3RhdGlzdGljKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXh0ZW5kZWRfc3RhdGlzdGljJyk7XG4gIH1cbiAgcHVibGljIHNldCBleHRlbmRlZFN0YXRpc3RpYyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXh0ZW5kZWRTdGF0aXN0aWMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFeHRlbmRlZFN0YXRpc3RpYygpIHtcbiAgICB0aGlzLl9leHRlbmRlZFN0YXRpc3RpYyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXh0ZW5kZWRTdGF0aXN0aWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kZWRTdGF0aXN0aWM7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBpbnN1ZmZpY2llbnRfZGF0YV9hY3Rpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3VmZmljaWVudERhdGFBY3Rpb25zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGluc3VmZmljaWVudERhdGFBY3Rpb25zKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpbnN1ZmZpY2llbnRfZGF0YV9hY3Rpb25zJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdWZmaWNpZW50RGF0YUFjdGlvbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5faW5zdWZmaWNpZW50RGF0YUFjdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN1ZmZpY2llbnREYXRhQWN0aW9ucygpIHtcbiAgICB0aGlzLl9pbnN1ZmZpY2llbnREYXRhQWN0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdWZmaWNpZW50RGF0YUFjdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdWZmaWNpZW50RGF0YUFjdGlvbnM7XG4gIH1cblxuICAvLyBtZXRyaWNfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXRyaWNOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtZXRyaWNOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWV0cmljX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1ldHJpY05hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21ldHJpY05hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXRyaWNOYW1lKCkge1xuICAgIHRoaXMuX21ldHJpY05hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldHJpY05hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljTmFtZTtcbiAgfVxuXG4gIC8vIG5hbWVzcGFjZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lc3BhY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWVzcGFjZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZXNwYWNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lc3BhY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lc3BhY2UoKSB7XG4gICAgdGhpcy5fbmFtZXNwYWNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lc3BhY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZXNwYWNlO1xuICB9XG5cbiAgLy8gb2tfYWN0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9va0FjdGlvbnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgb2tBY3Rpb25zKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdva19hY3Rpb25zJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgb2tBY3Rpb25zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX29rQWN0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9rQWN0aW9ucygpIHtcbiAgICB0aGlzLl9va0FjdGlvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9rQWN0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9va0FjdGlvbnM7XG4gIH1cblxuICAvLyBwZXJpb2QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGVyaW9kPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwZXJpb2QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwZXJpb2QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBlcmlvZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGVyaW9kID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGVyaW9kKCkge1xuICAgIHRoaXMuX3BlcmlvZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGVyaW9kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlcmlvZDtcbiAgfVxuXG4gIC8vIHN0YXRpc3RpYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGF0aXN0aWM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0YXRpc3RpYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRpc3RpYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhdGlzdGljKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0aXN0aWMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGF0aXN0aWMoKSB7XG4gICAgdGhpcy5fc3RhdGlzdGljID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0aXN0aWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGlzdGljO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB0aHJlc2hvbGQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGhyZXNob2xkPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0aHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0aHJlc2hvbGQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRocmVzaG9sZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGhyZXNob2xkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGhyZXNob2xkKCkge1xuICAgIHRoaXMuX3RocmVzaG9sZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGhyZXNob2xkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZDtcbiAgfVxuXG4gIC8vIHRocmVzaG9sZF9tZXRyaWNfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGhyZXNob2xkTWV0cmljSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRocmVzaG9sZE1ldHJpY0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGhyZXNob2xkX21ldHJpY19pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGhyZXNob2xkTWV0cmljSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RocmVzaG9sZE1ldHJpY0lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGhyZXNob2xkTWV0cmljSWQoKSB7XG4gICAgdGhpcy5fdGhyZXNob2xkTWV0cmljSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRocmVzaG9sZE1ldHJpY0lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZE1ldHJpY0lkO1xuICB9XG5cbiAgLy8gdHJlYXRfbWlzc2luZ19kYXRhIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RyZWF0TWlzc2luZ0RhdGE/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRyZWF0TWlzc2luZ0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0cmVhdF9taXNzaW5nX2RhdGEnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRyZWF0TWlzc2luZ0RhdGEodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RyZWF0TWlzc2luZ0RhdGEgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUcmVhdE1pc3NpbmdEYXRhKCkge1xuICAgIHRoaXMuX3RyZWF0TWlzc2luZ0RhdGEgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRyZWF0TWlzc2luZ0RhdGFJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJlYXRNaXNzaW5nRGF0YTtcbiAgfVxuXG4gIC8vIHVuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVbml0KCkge1xuICAgIHRoaXMuX3VuaXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxuXG4gIC8vIG1ldHJpY19xdWVyeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXRyaWNRdWVyeSA9IG5ldyBDbG91ZHdhdGNoTWV0cmljQWxhcm1NZXRyaWNRdWVyeUxpc3QodGhpcywgXCJtZXRyaWNfcXVlcnlcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgbWV0cmljUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpY1F1ZXJ5O1xuICB9XG4gIHB1YmxpYyBwdXRNZXRyaWNRdWVyeSh2YWx1ZTogQ2xvdWR3YXRjaE1ldHJpY0FsYXJtTWV0cmljUXVlcnlbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fbWV0cmljUXVlcnkuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1ldHJpY1F1ZXJ5KCkge1xuICAgIHRoaXMuX21ldHJpY1F1ZXJ5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldHJpY1F1ZXJ5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpY1F1ZXJ5LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGlvbnNfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2FjdGlvbnNFbmFibGVkKSxcbiAgICAgIGFsYXJtX2FjdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9hbGFybUFjdGlvbnMpLFxuICAgICAgYWxhcm1fZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FsYXJtRGVzY3JpcHRpb24pLFxuICAgICAgYWxhcm1fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWxhcm1OYW1lKSxcbiAgICAgIGNvbXBhcmlzb25fb3BlcmF0b3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvbXBhcmlzb25PcGVyYXRvciksXG4gICAgICBkYXRhcG9pbnRzX3RvX2FsYXJtOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9kYXRhcG9pbnRzVG9BbGFybSksXG4gICAgICBkaW1lbnNpb25zOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9kaW1lbnNpb25zKSxcbiAgICAgIGV2YWx1YXRlX2xvd19zYW1wbGVfY291bnRfcGVyY2VudGlsZXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V2YWx1YXRlTG93U2FtcGxlQ291bnRQZXJjZW50aWxlcyksXG4gICAgICBldmFsdWF0aW9uX3BlcmlvZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2V2YWx1YXRpb25QZXJpb2RzKSxcbiAgICAgIGV4dGVuZGVkX3N0YXRpc3RpYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZXh0ZW5kZWRTdGF0aXN0aWMpLFxuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIGluc3VmZmljaWVudF9kYXRhX2FjdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9pbnN1ZmZpY2llbnREYXRhQWN0aW9ucyksXG4gICAgICBtZXRyaWNfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbWV0cmljTmFtZSksXG4gICAgICBuYW1lc3BhY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWVzcGFjZSksXG4gICAgICBva19hY3Rpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fb2tBY3Rpb25zKSxcbiAgICAgIHBlcmlvZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fcGVyaW9kKSxcbiAgICAgIHN0YXRpc3RpYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3RhdGlzdGljKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdGhyZXNob2xkOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90aHJlc2hvbGQpLFxuICAgICAgdGhyZXNob2xkX21ldHJpY19pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdGhyZXNob2xkTWV0cmljSWQpLFxuICAgICAgdHJlYXRfbWlzc2luZ19kYXRhOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90cmVhdE1pc3NpbmdEYXRhKSxcbiAgICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3VuaXQpLFxuICAgICAgbWV0cmljX3F1ZXJ5OiBjZGt0Zi5saXN0TWFwcGVyKGNsb3Vkd2F0Y2hNZXRyaWNBbGFybU1ldHJpY1F1ZXJ5VG9UZXJyYWZvcm0sIHRydWUpKHRoaXMuX21ldHJpY1F1ZXJ5LmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgYWN0aW9uc19lbmFibGVkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fYWN0aW9uc0VuYWJsZWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgYWxhcm1fYWN0aW9uczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2FsYXJtQWN0aW9ucyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBhbGFybV9kZXNjcmlwdGlvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fYWxhcm1EZXNjcmlwdGlvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGFsYXJtX25hbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2FsYXJtTmFtZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGNvbXBhcmlzb25fb3BlcmF0b3I6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2NvbXBhcmlzb25PcGVyYXRvciksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGRhdGFwb2ludHNfdG9fYWxhcm06IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX2RhdGFwb2ludHNUb0FsYXJtKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fZGltZW5zaW9ucyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIGV2YWx1YXRlX2xvd19zYW1wbGVfY291bnRfcGVyY2VudGlsZXM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2V2YWx1YXRlTG93U2FtcGxlQ291bnRQZXJjZW50aWxlcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGV2YWx1YXRpb25fcGVyaW9kczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fZXZhbHVhdGlvblBlcmlvZHMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBleHRlbmRlZF9zdGF0aXN0aWM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2V4dGVuZGVkU3RhdGlzdGljKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaW5zdWZmaWNpZW50X2RhdGFfYWN0aW9uczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2luc3VmZmljaWVudERhdGFBY3Rpb25zKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIG1ldHJpY19uYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9tZXRyaWNOYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbmFtZXNwYWNlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9uYW1lc3BhY2UpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBva19hY3Rpb25zOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fb2tBY3Rpb25zKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHBlcmlvZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fcGVyaW9kKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgc3RhdGlzdGljOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9zdGF0aXN0aWMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0YWdzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgdGFnc19hbGw6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0aHJlc2hvbGQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX3RocmVzaG9sZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHRocmVzaG9sZF9tZXRyaWNfaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3RocmVzaG9sZE1ldHJpY0lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgdHJlYXRfbWlzc2luZ19kYXRhOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl90cmVhdE1pc3NpbmdEYXRhKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgdW5pdDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fdW5pdCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG1ldHJpY19xdWVyeToge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjbG91ZHdhdGNoTWV0cmljQWxhcm1NZXRyaWNRdWVyeVRvSGNsVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9tZXRyaWNRdWVyeS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDbG91ZHdhdGNoTWV0cmljQWxhcm1NZXRyaWNRdWVyeUxpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==