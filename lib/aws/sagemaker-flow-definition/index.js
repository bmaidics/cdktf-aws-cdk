"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SagemakerFlowDefinition = exports.SagemakerFlowDefinitionOutputConfigOutputReference = exports.sagemakerFlowDefinitionOutputConfigToHclTerraform = exports.sagemakerFlowDefinitionOutputConfigToTerraform = exports.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference = exports.sagemakerFlowDefinitionHumanLoopRequestSourceToHclTerraform = exports.sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform = exports.SagemakerFlowDefinitionHumanLoopConfigOutputReference = exports.sagemakerFlowDefinitionHumanLoopConfigToHclTerraform = exports.sagemakerFlowDefinitionHumanLoopConfigToTerraform = exports.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference = exports.sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToHclTerraform = exports.sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform = exports.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference = exports.sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToHclTerraform = exports.sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform = exports.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference = exports.sagemakerFlowDefinitionHumanLoopActivationConfigToHclTerraform = exports.sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform = exports.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference = exports.sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToHclTerraform = exports.sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        human_loop_activation_conditions: cdktf.stringToTerraform(struct.humanLoopActivationConditions),
    };
}
exports.sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform = sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform;
function sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        human_loop_activation_conditions: {
            value: cdktf.stringToHclTerraform(struct.humanLoopActivationConditions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToHclTerraform = sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToHclTerraform;
class SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._humanLoopActivationConditions !== undefined) {
            hasAnyValues = true;
            internalValueResult.humanLoopActivationConditions = this._humanLoopActivationConditions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._humanLoopActivationConditions = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._humanLoopActivationConditions = value.humanLoopActivationConditions;
        }
    }
    get humanLoopActivationConditions() {
        return this.getStringAttribute('human_loop_activation_conditions');
    }
    set humanLoopActivationConditions(value) {
        this._humanLoopActivationConditions = value;
    }
    // Temporarily expose input value. Use with caution.
    get humanLoopActivationConditionsInput() {
        return this._humanLoopActivationConditions;
    }
}
exports.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference = SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference;
_a = JSII_RTTI_SYMBOL_1;
SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference[_a] = { fqn: "@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference", version: "0.0.0" };
function sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        human_loop_activation_conditions_config: sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform(struct.humanLoopActivationConditionsConfig),
    };
}
exports.sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform = sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform;
function sagemakerFlowDefinitionHumanLoopActivationConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        human_loop_activation_conditions_config: {
            value: sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToHclTerraform(struct.humanLoopActivationConditionsConfig),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerFlowDefinitionHumanLoopActivationConfigToHclTerraform = sagemakerFlowDefinitionHumanLoopActivationConfigToHclTerraform;
class SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // human_loop_activation_conditions_config - computed: false, optional: true, required: false
        this._humanLoopActivationConditionsConfig = new SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference(this, "human_loop_activation_conditions_config");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._humanLoopActivationConditionsConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.humanLoopActivationConditionsConfig = this._humanLoopActivationConditionsConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._humanLoopActivationConditionsConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._humanLoopActivationConditionsConfig.internalValue = value.humanLoopActivationConditionsConfig;
        }
    }
    get humanLoopActivationConditionsConfig() {
        return this._humanLoopActivationConditionsConfig;
    }
    putHumanLoopActivationConditionsConfig(value) {
        this._humanLoopActivationConditionsConfig.internalValue = value;
    }
    resetHumanLoopActivationConditionsConfig() {
        this._humanLoopActivationConditionsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get humanLoopActivationConditionsConfigInput() {
        return this._humanLoopActivationConditionsConfig.internalValue;
    }
}
exports.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference = SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference;
_b = JSII_RTTI_SYMBOL_1;
SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference[_b] = { fqn: "@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference", version: "0.0.0" };
function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cents: cdktf.numberToTerraform(struct.cents),
        dollars: cdktf.numberToTerraform(struct.dollars),
        tenth_fractions_of_a_cent: cdktf.numberToTerraform(struct.tenthFractionsOfACent),
    };
}
exports.sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform = sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform;
function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cents: {
            value: cdktf.numberToHclTerraform(struct.cents),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        dollars: {
            value: cdktf.numberToHclTerraform(struct.dollars),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        tenth_fractions_of_a_cent: {
            value: cdktf.numberToHclTerraform(struct.tenthFractionsOfACent),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToHclTerraform = sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToHclTerraform;
class SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference extends cdktf.ComplexObject {
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
        if (this._cents !== undefined) {
            hasAnyValues = true;
            internalValueResult.cents = this._cents;
        }
        if (this._dollars !== undefined) {
            hasAnyValues = true;
            internalValueResult.dollars = this._dollars;
        }
        if (this._tenthFractionsOfACent !== undefined) {
            hasAnyValues = true;
            internalValueResult.tenthFractionsOfACent = this._tenthFractionsOfACent;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cents = undefined;
            this._dollars = undefined;
            this._tenthFractionsOfACent = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cents = value.cents;
            this._dollars = value.dollars;
            this._tenthFractionsOfACent = value.tenthFractionsOfACent;
        }
    }
    get cents() {
        return this.getNumberAttribute('cents');
    }
    set cents(value) {
        this._cents = value;
    }
    resetCents() {
        this._cents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get centsInput() {
        return this._cents;
    }
    get dollars() {
        return this.getNumberAttribute('dollars');
    }
    set dollars(value) {
        this._dollars = value;
    }
    resetDollars() {
        this._dollars = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dollarsInput() {
        return this._dollars;
    }
    get tenthFractionsOfACent() {
        return this.getNumberAttribute('tenth_fractions_of_a_cent');
    }
    set tenthFractionsOfACent(value) {
        this._tenthFractionsOfACent = value;
    }
    resetTenthFractionsOfACent() {
        this._tenthFractionsOfACent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tenthFractionsOfACentInput() {
        return this._tenthFractionsOfACent;
    }
}
exports.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference = SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference;
_c = JSII_RTTI_SYMBOL_1;
SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference[_c] = { fqn: "@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference", version: "0.0.0" };
function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        amount_in_usd: sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform(struct.amountInUsd),
    };
}
exports.sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform = sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform;
function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        amount_in_usd: {
            value: sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToHclTerraform(struct.amountInUsd),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToHclTerraform = sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToHclTerraform;
class SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // amount_in_usd - computed: false, optional: true, required: false
        this._amountInUsd = new SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference(this, "amount_in_usd");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._amountInUsd?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.amountInUsd = this._amountInUsd?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._amountInUsd.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._amountInUsd.internalValue = value.amountInUsd;
        }
    }
    get amountInUsd() {
        return this._amountInUsd;
    }
    putAmountInUsd(value) {
        this._amountInUsd.internalValue = value;
    }
    resetAmountInUsd() {
        this._amountInUsd.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get amountInUsdInput() {
        return this._amountInUsd.internalValue;
    }
}
exports.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference = SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference;
_d = JSII_RTTI_SYMBOL_1;
SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference[_d] = { fqn: "@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference", version: "0.0.0" };
function sagemakerFlowDefinitionHumanLoopConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        human_task_ui_arn: cdktf.stringToTerraform(struct.humanTaskUiArn),
        task_availability_lifetime_in_seconds: cdktf.numberToTerraform(struct.taskAvailabilityLifetimeInSeconds),
        task_count: cdktf.numberToTerraform(struct.taskCount),
        task_description: cdktf.stringToTerraform(struct.taskDescription),
        task_keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.taskKeywords),
        task_time_limit_in_seconds: cdktf.numberToTerraform(struct.taskTimeLimitInSeconds),
        task_title: cdktf.stringToTerraform(struct.taskTitle),
        workteam_arn: cdktf.stringToTerraform(struct.workteamArn),
        public_workforce_task_price: sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform(struct.publicWorkforceTaskPrice),
    };
}
exports.sagemakerFlowDefinitionHumanLoopConfigToTerraform = sagemakerFlowDefinitionHumanLoopConfigToTerraform;
function sagemakerFlowDefinitionHumanLoopConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        human_task_ui_arn: {
            value: cdktf.stringToHclTerraform(struct.humanTaskUiArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        task_availability_lifetime_in_seconds: {
            value: cdktf.numberToHclTerraform(struct.taskAvailabilityLifetimeInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        task_count: {
            value: cdktf.numberToHclTerraform(struct.taskCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        task_description: {
            value: cdktf.stringToHclTerraform(struct.taskDescription),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        task_keywords: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.taskKeywords),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        task_time_limit_in_seconds: {
            value: cdktf.numberToHclTerraform(struct.taskTimeLimitInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        task_title: {
            value: cdktf.stringToHclTerraform(struct.taskTitle),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        workteam_arn: {
            value: cdktf.stringToHclTerraform(struct.workteamArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        public_workforce_task_price: {
            value: sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToHclTerraform(struct.publicWorkforceTaskPrice),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerFlowDefinitionHumanLoopConfigToHclTerraform = sagemakerFlowDefinitionHumanLoopConfigToHclTerraform;
class SagemakerFlowDefinitionHumanLoopConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // public_workforce_task_price - computed: false, optional: true, required: false
        this._publicWorkforceTaskPrice = new SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference(this, "public_workforce_task_price");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._humanTaskUiArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.humanTaskUiArn = this._humanTaskUiArn;
        }
        if (this._taskAvailabilityLifetimeInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskAvailabilityLifetimeInSeconds = this._taskAvailabilityLifetimeInSeconds;
        }
        if (this._taskCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskCount = this._taskCount;
        }
        if (this._taskDescription !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskDescription = this._taskDescription;
        }
        if (this._taskKeywords !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskKeywords = this._taskKeywords;
        }
        if (this._taskTimeLimitInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskTimeLimitInSeconds = this._taskTimeLimitInSeconds;
        }
        if (this._taskTitle !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskTitle = this._taskTitle;
        }
        if (this._workteamArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.workteamArn = this._workteamArn;
        }
        if (this._publicWorkforceTaskPrice?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.publicWorkforceTaskPrice = this._publicWorkforceTaskPrice?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._humanTaskUiArn = undefined;
            this._taskAvailabilityLifetimeInSeconds = undefined;
            this._taskCount = undefined;
            this._taskDescription = undefined;
            this._taskKeywords = undefined;
            this._taskTimeLimitInSeconds = undefined;
            this._taskTitle = undefined;
            this._workteamArn = undefined;
            this._publicWorkforceTaskPrice.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._humanTaskUiArn = value.humanTaskUiArn;
            this._taskAvailabilityLifetimeInSeconds = value.taskAvailabilityLifetimeInSeconds;
            this._taskCount = value.taskCount;
            this._taskDescription = value.taskDescription;
            this._taskKeywords = value.taskKeywords;
            this._taskTimeLimitInSeconds = value.taskTimeLimitInSeconds;
            this._taskTitle = value.taskTitle;
            this._workteamArn = value.workteamArn;
            this._publicWorkforceTaskPrice.internalValue = value.publicWorkforceTaskPrice;
        }
    }
    get humanTaskUiArn() {
        return this.getStringAttribute('human_task_ui_arn');
    }
    set humanTaskUiArn(value) {
        this._humanTaskUiArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get humanTaskUiArnInput() {
        return this._humanTaskUiArn;
    }
    get taskAvailabilityLifetimeInSeconds() {
        return this.getNumberAttribute('task_availability_lifetime_in_seconds');
    }
    set taskAvailabilityLifetimeInSeconds(value) {
        this._taskAvailabilityLifetimeInSeconds = value;
    }
    resetTaskAvailabilityLifetimeInSeconds() {
        this._taskAvailabilityLifetimeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get taskAvailabilityLifetimeInSecondsInput() {
        return this._taskAvailabilityLifetimeInSeconds;
    }
    get taskCount() {
        return this.getNumberAttribute('task_count');
    }
    set taskCount(value) {
        this._taskCount = value;
    }
    // Temporarily expose input value. Use with caution.
    get taskCountInput() {
        return this._taskCount;
    }
    get taskDescription() {
        return this.getStringAttribute('task_description');
    }
    set taskDescription(value) {
        this._taskDescription = value;
    }
    // Temporarily expose input value. Use with caution.
    get taskDescriptionInput() {
        return this._taskDescription;
    }
    get taskKeywords() {
        return cdktf.Fn.tolist(this.getListAttribute('task_keywords'));
    }
    set taskKeywords(value) {
        this._taskKeywords = value;
    }
    resetTaskKeywords() {
        this._taskKeywords = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get taskKeywordsInput() {
        return this._taskKeywords;
    }
    get taskTimeLimitInSeconds() {
        return this.getNumberAttribute('task_time_limit_in_seconds');
    }
    set taskTimeLimitInSeconds(value) {
        this._taskTimeLimitInSeconds = value;
    }
    resetTaskTimeLimitInSeconds() {
        this._taskTimeLimitInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get taskTimeLimitInSecondsInput() {
        return this._taskTimeLimitInSeconds;
    }
    get taskTitle() {
        return this.getStringAttribute('task_title');
    }
    set taskTitle(value) {
        this._taskTitle = value;
    }
    // Temporarily expose input value. Use with caution.
    get taskTitleInput() {
        return this._taskTitle;
    }
    get workteamArn() {
        return this.getStringAttribute('workteam_arn');
    }
    set workteamArn(value) {
        this._workteamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get workteamArnInput() {
        return this._workteamArn;
    }
    get publicWorkforceTaskPrice() {
        return this._publicWorkforceTaskPrice;
    }
    putPublicWorkforceTaskPrice(value) {
        this._publicWorkforceTaskPrice.internalValue = value;
    }
    resetPublicWorkforceTaskPrice() {
        this._publicWorkforceTaskPrice.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publicWorkforceTaskPriceInput() {
        return this._publicWorkforceTaskPrice.internalValue;
    }
}
exports.SagemakerFlowDefinitionHumanLoopConfigOutputReference = SagemakerFlowDefinitionHumanLoopConfigOutputReference;
_e = JSII_RTTI_SYMBOL_1;
SagemakerFlowDefinitionHumanLoopConfigOutputReference[_e] = { fqn: "@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference", version: "0.0.0" };
function sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_managed_human_loop_request_source: cdktf.stringToTerraform(struct.awsManagedHumanLoopRequestSource),
    };
}
exports.sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform = sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform;
function sagemakerFlowDefinitionHumanLoopRequestSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        aws_managed_human_loop_request_source: {
            value: cdktf.stringToHclTerraform(struct.awsManagedHumanLoopRequestSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerFlowDefinitionHumanLoopRequestSourceToHclTerraform = sagemakerFlowDefinitionHumanLoopRequestSourceToHclTerraform;
class SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference extends cdktf.ComplexObject {
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
        if (this._awsManagedHumanLoopRequestSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsManagedHumanLoopRequestSource = this._awsManagedHumanLoopRequestSource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._awsManagedHumanLoopRequestSource = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._awsManagedHumanLoopRequestSource = value.awsManagedHumanLoopRequestSource;
        }
    }
    get awsManagedHumanLoopRequestSource() {
        return this.getStringAttribute('aws_managed_human_loop_request_source');
    }
    set awsManagedHumanLoopRequestSource(value) {
        this._awsManagedHumanLoopRequestSource = value;
    }
    // Temporarily expose input value. Use with caution.
    get awsManagedHumanLoopRequestSourceInput() {
        return this._awsManagedHumanLoopRequestSource;
    }
}
exports.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference = SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference;
_f = JSII_RTTI_SYMBOL_1;
SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference[_f] = { fqn: "@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference", version: "0.0.0" };
function sagemakerFlowDefinitionOutputConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        s3_output_path: cdktf.stringToTerraform(struct.s3OutputPath),
    };
}
exports.sagemakerFlowDefinitionOutputConfigToTerraform = sagemakerFlowDefinitionOutputConfigToTerraform;
function sagemakerFlowDefinitionOutputConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        kms_key_id: {
            value: cdktf.stringToHclTerraform(struct.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_output_path: {
            value: cdktf.stringToHclTerraform(struct.s3OutputPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerFlowDefinitionOutputConfigToHclTerraform = sagemakerFlowDefinitionOutputConfigToHclTerraform;
class SagemakerFlowDefinitionOutputConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._s3OutputPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3OutputPath = this._s3OutputPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._kmsKeyId = undefined;
            this._s3OutputPath = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._kmsKeyId = value.kmsKeyId;
            this._s3OutputPath = value.s3OutputPath;
        }
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
    get s3OutputPath() {
        return this.getStringAttribute('s3_output_path');
    }
    set s3OutputPath(value) {
        this._s3OutputPath = value;
    }
    // Temporarily expose input value. Use with caution.
    get s3OutputPathInput() {
        return this._s3OutputPath;
    }
}
exports.SagemakerFlowDefinitionOutputConfigOutputReference = SagemakerFlowDefinitionOutputConfigOutputReference;
_g = JSII_RTTI_SYMBOL_1;
SagemakerFlowDefinitionOutputConfigOutputReference[_g] = { fqn: "@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition aws_sagemaker_flow_definition}
*/
class SagemakerFlowDefinition extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SagemakerFlowDefinition resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerFlowDefinition to import
    * @param importFromId The id of the existing SagemakerFlowDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerFlowDefinition to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_flow_definition", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition aws_sagemaker_flow_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerFlowDefinitionConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_sagemaker_flow_definition',
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
        // human_loop_activation_config - computed: false, optional: true, required: false
        this._humanLoopActivationConfig = new SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference(this, "human_loop_activation_config");
        // human_loop_config - computed: false, optional: false, required: true
        this._humanLoopConfig = new SagemakerFlowDefinitionHumanLoopConfigOutputReference(this, "human_loop_config");
        // human_loop_request_source - computed: false, optional: true, required: false
        this._humanLoopRequestSource = new SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference(this, "human_loop_request_source");
        // output_config - computed: false, optional: false, required: true
        this._outputConfig = new SagemakerFlowDefinitionOutputConfigOutputReference(this, "output_config");
        this._flowDefinitionName = config.flowDefinitionName;
        this._id = config.id;
        this._roleArn = config.roleArn;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._humanLoopActivationConfig.internalValue = config.humanLoopActivationConfig;
        this._humanLoopConfig.internalValue = config.humanLoopConfig;
        this._humanLoopRequestSource.internalValue = config.humanLoopRequestSource;
        this._outputConfig.internalValue = config.outputConfig;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get flowDefinitionName() {
        return this.getStringAttribute('flow_definition_name');
    }
    set flowDefinitionName(value) {
        this._flowDefinitionName = value;
    }
    // Temporarily expose input value. Use with caution.
    get flowDefinitionNameInput() {
        return this._flowDefinitionName;
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
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
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
    get humanLoopActivationConfig() {
        return this._humanLoopActivationConfig;
    }
    putHumanLoopActivationConfig(value) {
        this._humanLoopActivationConfig.internalValue = value;
    }
    resetHumanLoopActivationConfig() {
        this._humanLoopActivationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get humanLoopActivationConfigInput() {
        return this._humanLoopActivationConfig.internalValue;
    }
    get humanLoopConfig() {
        return this._humanLoopConfig;
    }
    putHumanLoopConfig(value) {
        this._humanLoopConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get humanLoopConfigInput() {
        return this._humanLoopConfig.internalValue;
    }
    get humanLoopRequestSource() {
        return this._humanLoopRequestSource;
    }
    putHumanLoopRequestSource(value) {
        this._humanLoopRequestSource.internalValue = value;
    }
    resetHumanLoopRequestSource() {
        this._humanLoopRequestSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get humanLoopRequestSourceInput() {
        return this._humanLoopRequestSource.internalValue;
    }
    get outputConfig() {
        return this._outputConfig;
    }
    putOutputConfig(value) {
        this._outputConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get outputConfigInput() {
        return this._outputConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            flow_definition_name: cdktf.stringToTerraform(this._flowDefinitionName),
            id: cdktf.stringToTerraform(this._id),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            human_loop_activation_config: sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform(this._humanLoopActivationConfig.internalValue),
            human_loop_config: sagemakerFlowDefinitionHumanLoopConfigToTerraform(this._humanLoopConfig.internalValue),
            human_loop_request_source: sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform(this._humanLoopRequestSource.internalValue),
            output_config: sagemakerFlowDefinitionOutputConfigToTerraform(this._outputConfig.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            flow_definition_name: {
                value: cdktf.stringToHclTerraform(this._flowDefinitionName),
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
            role_arn: {
                value: cdktf.stringToHclTerraform(this._roleArn),
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
            human_loop_activation_config: {
                value: sagemakerFlowDefinitionHumanLoopActivationConfigToHclTerraform(this._humanLoopActivationConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "SagemakerFlowDefinitionHumanLoopActivationConfigList",
            },
            human_loop_config: {
                value: sagemakerFlowDefinitionHumanLoopConfigToHclTerraform(this._humanLoopConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "SagemakerFlowDefinitionHumanLoopConfigList",
            },
            human_loop_request_source: {
                value: sagemakerFlowDefinitionHumanLoopRequestSourceToHclTerraform(this._humanLoopRequestSource.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "SagemakerFlowDefinitionHumanLoopRequestSourceList",
            },
            output_config: {
                value: sagemakerFlowDefinitionOutputConfigToHclTerraform(this._outputConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "SagemakerFlowDefinitionOutputConfigList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.SagemakerFlowDefinition = SagemakerFlowDefinition;
_h = JSII_RTTI_SYMBOL_1;
SagemakerFlowDefinition[_h] = { fqn: "@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
SagemakerFlowDefinition.tfResourceType = "aws_sagemaker_flow_definition";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3NhZ2VtYWtlci1mbG93LWRlZmluaXRpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSwrQkFBK0I7QUE0RC9CLFNBQWdCLDhGQUE4RixDQUFDLE1BQWlNO0lBQzlTLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLDZCQUE2QixDQUFDO0tBQ2pHLENBQUE7QUFDSCxDQUFDO0FBUkQsd01BUUM7QUFHRCxTQUFnQixpR0FBaUcsQ0FBQyxNQUFpTTtJQUNqVCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLGdDQUFnQyxFQUFFO1lBQ2hDLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLDZCQUE2QixDQUFDO1lBQ3hFLE9BQU8s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Q0FBQyxDQUFBO0lBQzVILENBQUM7O0FBdFJILDBEQXVSQzs7O0FBclJDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csc0NBQWMsR0FBRywrQkFBK0IsQUFBbEMsQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZmxvd19kZWZpbml0aW9uXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2Zsb3dfZGVmaW5pdGlvbiNmbG93X2RlZmluaXRpb25fbmFtZSBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbiNmbG93X2RlZmluaXRpb25fbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgZmxvd0RlZmluaXRpb25OYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9mbG93X2RlZmluaXRpb24jaWQgU2FnZW1ha2VyRmxvd0RlZmluaXRpb24jaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9mbG93X2RlZmluaXRpb24jcm9sZV9hcm4gU2FnZW1ha2VyRmxvd0RlZmluaXRpb24jcm9sZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IHJvbGVBcm46IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2Zsb3dfZGVmaW5pdGlvbiN0YWdzIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uI3RhZ3N9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZmxvd19kZWZpbml0aW9uI3RhZ3NfYWxsIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uI3RhZ3NfYWxsfVxuICAqL1xuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogaHVtYW5fbG9vcF9hY3RpdmF0aW9uX2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2Zsb3dfZGVmaW5pdGlvbiNodW1hbl9sb29wX2FjdGl2YXRpb25fY29uZmlnIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uI2h1bWFuX2xvb3BfYWN0aXZhdGlvbl9jb25maWd9XG4gICovXG4gIHJlYWRvbmx5IGh1bWFuTG9vcEFjdGl2YXRpb25Db25maWc/OiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcEFjdGl2YXRpb25Db25maWc7XG4gIC8qKlxuICAqIGh1bWFuX2xvb3BfY29uZmlnIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZmxvd19kZWZpbml0aW9uI2h1bWFuX2xvb3BfY29uZmlnIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uI2h1bWFuX2xvb3BfY29uZmlnfVxuICAqL1xuICByZWFkb25seSBodW1hbkxvb3BDb25maWc6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnO1xuICAvKipcbiAgKiBodW1hbl9sb29wX3JlcXVlc3Rfc291cmNlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZmxvd19kZWZpbml0aW9uI2h1bWFuX2xvb3BfcmVxdWVzdF9zb3VyY2UgU2FnZW1ha2VyRmxvd0RlZmluaXRpb24jaHVtYW5fbG9vcF9yZXF1ZXN0X3NvdXJjZX1cbiAgKi9cbiAgcmVhZG9ubHkgaHVtYW5Mb29wUmVxdWVzdFNvdXJjZT86IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wUmVxdWVzdFNvdXJjZTtcbiAgLyoqXG4gICogb3V0cHV0X2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2Zsb3dfZGVmaW5pdGlvbiNvdXRwdXRfY29uZmlnIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uI291dHB1dF9jb25maWd9XG4gICovXG4gIHJlYWRvbmx5IG91dHB1dENvbmZpZzogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25PdXRwdXRDb25maWc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZ0h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2Zsb3dfZGVmaW5pdGlvbiNodW1hbl9sb29wX2FjdGl2YXRpb25fY29uZGl0aW9ucyBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbiNodW1hbl9sb29wX2FjdGl2YXRpb25fY29uZGl0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnM6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZ0h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcEFjdGl2YXRpb25Db25maWdIdW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9uc0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBodW1hbl9sb29wX2FjdGl2YXRpb25fY29uZGl0aW9uczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9ucyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcEFjdGl2YXRpb25Db25maWdIdW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9uc0NvbmZpZ091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZ0h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBodW1hbl9sb29wX2FjdGl2YXRpb25fY29uZGl0aW9uczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZ0h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9ucyA9IHRoaXMuX2h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnMgPSB2YWx1ZS5odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9ucztcbiAgICB9XG4gIH1cblxuICAvLyBodW1hbl9sb29wX2FjdGl2YXRpb25fY29uZGl0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9ucz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdodW1hbl9sb29wX2FjdGl2YXRpb25fY29uZGl0aW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGh1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZyB7XG4gIC8qKlxuICAqIGh1bWFuX2xvb3BfYWN0aXZhdGlvbl9jb25kaXRpb25zX2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2Zsb3dfZGVmaW5pdGlvbiNodW1hbl9sb29wX2FjdGl2YXRpb25fY29uZGl0aW9uc19jb25maWcgU2FnZW1ha2VyRmxvd0RlZmluaXRpb24jaHVtYW5fbG9vcF9hY3RpdmF0aW9uX2NvbmRpdGlvbnNfY29uZmlnfVxuICAqL1xuICByZWFkb25seSBodW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9uc0NvbmZpZz86IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZ0h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGh1bWFuX2xvb3BfYWN0aXZhdGlvbl9jb25kaXRpb25zX2NvbmZpZzogc2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLmh1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcEFjdGl2YXRpb25Db25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcEFjdGl2YXRpb25Db25maWdPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcEFjdGl2YXRpb25Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGh1bWFuX2xvb3BfYWN0aXZhdGlvbl9jb25kaXRpb25zX2NvbmZpZzoge1xuICAgICAgdmFsdWU6IHNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZ0h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9uc0NvbmZpZyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZ0h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcEFjdGl2YXRpb25Db25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWc/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWcgPSB0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9uc0NvbmZpZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZS5odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9uc0NvbmZpZztcbiAgICB9XG4gIH1cblxuICAvLyBodW1hbl9sb29wX2FjdGl2YXRpb25fY29uZGl0aW9uc19jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWcgPSBuZXcgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJodW1hbl9sb29wX2FjdGl2YXRpb25fY29uZGl0aW9uc19jb25maWdcIik7XG4gIHB1YmxpYyBnZXQgaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRIdW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9uc0NvbmZpZyh2YWx1ZTogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWcpIHtcbiAgICB0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9uc0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWcoKSB7XG4gICAgdGhpcy5faHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZUFtb3VudEluVXNkIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2Zsb3dfZGVmaW5pdGlvbiNjZW50cyBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbiNjZW50c31cbiAgKi9cbiAgcmVhZG9ubHkgY2VudHM/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9mbG93X2RlZmluaXRpb24jZG9sbGFycyBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbiNkb2xsYXJzfVxuICAqL1xuICByZWFkb25seSBkb2xsYXJzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZmxvd19kZWZpbml0aW9uI3RlbnRoX2ZyYWN0aW9uc19vZl9hX2NlbnQgU2FnZW1ha2VyRmxvd0RlZmluaXRpb24jdGVudGhfZnJhY3Rpb25zX29mX2FfY2VudH1cbiAgKi9cbiAgcmVhZG9ubHkgdGVudGhGcmFjdGlvbnNPZkFDZW50PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdQdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2VBbW91bnRJblVzZFRvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlQW1vdW50SW5Vc2RPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZUFtb3VudEluVXNkKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNlbnRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmNlbnRzKSxcbiAgICBkb2xsYXJzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmRvbGxhcnMpLFxuICAgIHRlbnRoX2ZyYWN0aW9uc19vZl9hX2NlbnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGVudGhGcmFjdGlvbnNPZkFDZW50KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZUFtb3VudEluVXNkVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdQdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2VBbW91bnRJblVzZE91dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlQW1vdW50SW5Vc2QpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNlbnRzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jZW50cyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgZG9sbGFyczoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZG9sbGFycyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgdGVudGhfZnJhY3Rpb25zX29mX2FfY2VudDoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEudGVudGhGcmFjdGlvbnNPZkFDZW50KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlQW1vdW50SW5Vc2RPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlQW1vdW50SW5Vc2QgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNlbnRzID0gdGhpcy5fY2VudHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kb2xsYXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRvbGxhcnMgPSB0aGlzLl9kb2xsYXJzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGVudGhGcmFjdGlvbnNPZkFDZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRlbnRoRnJhY3Rpb25zT2ZBQ2VudCA9IHRoaXMuX3RlbnRoRnJhY3Rpb25zT2ZBQ2VudDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlQW1vdW50SW5Vc2QgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jZW50cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RvbGxhcnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90ZW50aEZyYWN0aW9uc09mQUNlbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NlbnRzID0gdmFsdWUuY2VudHM7XG4gICAgICB0aGlzLl9kb2xsYXJzID0gdmFsdWUuZG9sbGFycztcbiAgICAgIHRoaXMuX3RlbnRoRnJhY3Rpb25zT2ZBQ2VudCA9IHZhbHVlLnRlbnRoRnJhY3Rpb25zT2ZBQ2VudDtcbiAgICB9XG4gIH1cblxuICAvLyBjZW50cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jZW50cz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgY2VudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdjZW50cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2VudHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2NlbnRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2VudHMoKSB7XG4gICAgdGhpcy5fY2VudHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNlbnRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlbnRzO1xuICB9XG5cbiAgLy8gZG9sbGFycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kb2xsYXJzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBkb2xsYXJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZG9sbGFycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZG9sbGFycyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZG9sbGFycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERvbGxhcnMoKSB7XG4gICAgdGhpcy5fZG9sbGFycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG9sbGFyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kb2xsYXJzO1xuICB9XG5cbiAgLy8gdGVudGhfZnJhY3Rpb25zX29mX2FfY2VudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90ZW50aEZyYWN0aW9uc09mQUNlbnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRlbnRoRnJhY3Rpb25zT2ZBQ2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RlbnRoX2ZyYWN0aW9uc19vZl9hX2NlbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRlbnRoRnJhY3Rpb25zT2ZBQ2VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGVudGhGcmFjdGlvbnNPZkFDZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGVudGhGcmFjdGlvbnNPZkFDZW50KCkge1xuICAgIHRoaXMuX3RlbnRoRnJhY3Rpb25zT2ZBQ2VudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGVudGhGcmFjdGlvbnNPZkFDZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbnRoRnJhY3Rpb25zT2ZBQ2VudDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZSB7XG4gIC8qKlxuICAqIGFtb3VudF9pbl91c2QgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9mbG93X2RlZmluaXRpb24jYW1vdW50X2luX3VzZCBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbiNhbW91bnRfaW5fdXNkfVxuICAqL1xuICByZWFkb25seSBhbW91bnRJblVzZD86IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlQW1vdW50SW5Vc2Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZVRvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdQdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYW1vdW50X2luX3VzZDogc2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdQdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2VBbW91bnRJblVzZFRvVGVycmFmb3JtKHN0cnVjdCEuYW1vdW50SW5Vc2QpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdQdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2VPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYW1vdW50X2luX3VzZDoge1xuICAgICAgdmFsdWU6IHNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlQW1vdW50SW5Vc2RUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFtb3VudEluVXNkKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdQdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2VBbW91bnRJblVzZExpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdQdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hbW91bnRJblVzZD8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hbW91bnRJblVzZCA9IHRoaXMuX2Ftb3VudEluVXNkPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdQdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hbW91bnRJblVzZC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hbW91bnRJblVzZC5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYW1vdW50SW5Vc2Q7XG4gICAgfVxuICB9XG5cbiAgLy8gYW1vdW50X2luX3VzZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbW91bnRJblVzZCA9IG5ldyBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZUFtb3VudEluVXNkT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiYW1vdW50X2luX3VzZFwiKTtcbiAgcHVibGljIGdldCBhbW91bnRJblVzZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYW1vdW50SW5Vc2Q7XG4gIH1cbiAgcHVibGljIHB1dEFtb3VudEluVXNkKHZhbHVlOiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZUFtb3VudEluVXNkKSB7XG4gICAgdGhpcy5fYW1vdW50SW5Vc2QuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFtb3VudEluVXNkKCkge1xuICAgIHRoaXMuX2Ftb3VudEluVXNkLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFtb3VudEluVXNkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Ftb3VudEluVXNkLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZmxvd19kZWZpbml0aW9uI2h1bWFuX3Rhc2tfdWlfYXJuIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uI2h1bWFuX3Rhc2tfdWlfYXJufVxuICAqL1xuICByZWFkb25seSBodW1hblRhc2tVaUFybjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZmxvd19kZWZpbml0aW9uI3Rhc2tfYXZhaWxhYmlsaXR5X2xpZmV0aW1lX2luX3NlY29uZHMgU2FnZW1ha2VyRmxvd0RlZmluaXRpb24jdGFza19hdmFpbGFiaWxpdHlfbGlmZXRpbWVfaW5fc2Vjb25kc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFza0F2YWlsYWJpbGl0eUxpZmV0aW1lSW5TZWNvbmRzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZmxvd19kZWZpbml0aW9uI3Rhc2tfY291bnQgU2FnZW1ha2VyRmxvd0RlZmluaXRpb24jdGFza19jb3VudH1cbiAgKi9cbiAgcmVhZG9ubHkgdGFza0NvdW50OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9mbG93X2RlZmluaXRpb24jdGFza19kZXNjcmlwdGlvbiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbiN0YXNrX2Rlc2NyaXB0aW9ufVxuICAqL1xuICByZWFkb25seSB0YXNrRGVzY3JpcHRpb246IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2Zsb3dfZGVmaW5pdGlvbiN0YXNrX2tleXdvcmRzIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uI3Rhc2tfa2V5d29yZHN9XG4gICovXG4gIHJlYWRvbmx5IHRhc2tLZXl3b3Jkcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZmxvd19kZWZpbml0aW9uI3Rhc2tfdGltZV9saW1pdF9pbl9zZWNvbmRzIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uI3Rhc2tfdGltZV9saW1pdF9pbl9zZWNvbmRzfVxuICAqL1xuICByZWFkb25seSB0YXNrVGltZUxpbWl0SW5TZWNvbmRzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZmxvd19kZWZpbml0aW9uI3Rhc2tfdGl0bGUgU2FnZW1ha2VyRmxvd0RlZmluaXRpb24jdGFza190aXRsZX1cbiAgKi9cbiAgcmVhZG9ubHkgdGFza1RpdGxlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9mbG93X2RlZmluaXRpb24jd29ya3RlYW1fYXJuIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uI3dvcmt0ZWFtX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgd29ya3RlYW1Bcm46IHN0cmluZztcbiAgLyoqXG4gICogcHVibGljX3dvcmtmb3JjZV90YXNrX3ByaWNlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZmxvd19kZWZpbml0aW9uI3B1YmxpY193b3JrZm9yY2VfdGFza19wcmljZSBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbiNwdWJsaWNfd29ya2ZvcmNlX3Rhc2tfcHJpY2V9XG4gICovXG4gIHJlYWRvbmx5IHB1YmxpY1dvcmtmb3JjZVRhc2tQcmljZT86IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGh1bWFuX3Rhc2tfdWlfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmh1bWFuVGFza1VpQXJuKSxcbiAgICB0YXNrX2F2YWlsYWJpbGl0eV9saWZldGltZV9pbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhc2tBdmFpbGFiaWxpdHlMaWZldGltZUluU2Vjb25kcyksXG4gICAgdGFza19jb3VudDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50YXNrQ291bnQpLFxuICAgIHRhc2tfZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFza0Rlc2NyaXB0aW9uKSxcbiAgICB0YXNrX2tleXdvcmRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS50YXNrS2V5d29yZHMpLFxuICAgIHRhc2tfdGltZV9saW1pdF9pbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhc2tUaW1lTGltaXRJblNlY29uZHMpLFxuICAgIHRhc2tfdGl0bGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFza1RpdGxlKSxcbiAgICB3b3JrdGVhbV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEud29ya3RlYW1Bcm4pLFxuICAgIHB1YmxpY193b3JrZm9yY2VfdGFza19wcmljZTogc2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdQdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2VUb1RlcnJhZm9ybShzdHJ1Y3QhLnB1YmxpY1dvcmtmb3JjZVRhc2tQcmljZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBodW1hbl90YXNrX3VpX2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaHVtYW5UYXNrVWlBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHRhc2tfYXZhaWxhYmlsaXR5X2xpZmV0aW1lX2luX3NlY29uZHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRhc2tBdmFpbGFiaWxpdHlMaWZldGltZUluU2Vjb25kcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgdGFza19jb3VudDoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEudGFza0NvdW50KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICB0YXNrX2Rlc2NyaXB0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50YXNrRGVzY3JpcHRpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHRhc2tfa2V5d29yZHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS50YXNrS2V5d29yZHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgICB0YXNrX3RpbWVfbGltaXRfaW5fc2Vjb25kczoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEudGFza1RpbWVMaW1pdEluU2Vjb25kcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgdGFza190aXRsZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudGFza1RpdGxlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB3b3JrdGVhbV9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLndvcmt0ZWFtQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwdWJsaWNfd29ya2ZvcmNlX3Rhc2tfcHJpY2U6IHtcbiAgICAgIHZhbHVlOiBzYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZVRvSGNsVGVycmFmb3JtKHN0cnVjdCEucHVibGljV29ya2ZvcmNlVGFza1ByaWNlKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdQdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2VMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faHVtYW5UYXNrVWlBcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaHVtYW5UYXNrVWlBcm4gPSB0aGlzLl9odW1hblRhc2tVaUFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Rhc2tBdmFpbGFiaWxpdHlMaWZldGltZUluU2Vjb25kcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YXNrQXZhaWxhYmlsaXR5TGlmZXRpbWVJblNlY29uZHMgPSB0aGlzLl90YXNrQXZhaWxhYmlsaXR5TGlmZXRpbWVJblNlY29uZHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXNrQ291bnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFza0NvdW50ID0gdGhpcy5fdGFza0NvdW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFza0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhc2tEZXNjcmlwdGlvbiA9IHRoaXMuX3Rhc2tEZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Rhc2tLZXl3b3JkcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YXNrS2V5d29yZHMgPSB0aGlzLl90YXNrS2V5d29yZHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXNrVGltZUxpbWl0SW5TZWNvbmRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhc2tUaW1lTGltaXRJblNlY29uZHMgPSB0aGlzLl90YXNrVGltZUxpbWl0SW5TZWNvbmRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFza1RpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhc2tUaXRsZSA9IHRoaXMuX3Rhc2tUaXRsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3dvcmt0ZWFtQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lndvcmt0ZWFtQXJuID0gdGhpcy5fd29ya3RlYW1Bcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9wdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2U/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHVibGljV29ya2ZvcmNlVGFza1ByaWNlID0gdGhpcy5fcHVibGljV29ya2ZvcmNlVGFza1ByaWNlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9odW1hblRhc2tVaUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Rhc2tBdmFpbGFiaWxpdHlMaWZldGltZUluU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Rhc2tDb3VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Rhc2tEZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Rhc2tLZXl3b3JkcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Rhc2tUaW1lTGltaXRJblNlY29uZHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YXNrVGl0bGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl93b3JrdGVhbUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9odW1hblRhc2tVaUFybiA9IHZhbHVlLmh1bWFuVGFza1VpQXJuO1xuICAgICAgdGhpcy5fdGFza0F2YWlsYWJpbGl0eUxpZmV0aW1lSW5TZWNvbmRzID0gdmFsdWUudGFza0F2YWlsYWJpbGl0eUxpZmV0aW1lSW5TZWNvbmRzO1xuICAgICAgdGhpcy5fdGFza0NvdW50ID0gdmFsdWUudGFza0NvdW50O1xuICAgICAgdGhpcy5fdGFza0Rlc2NyaXB0aW9uID0gdmFsdWUudGFza0Rlc2NyaXB0aW9uO1xuICAgICAgdGhpcy5fdGFza0tleXdvcmRzID0gdmFsdWUudGFza0tleXdvcmRzO1xuICAgICAgdGhpcy5fdGFza1RpbWVMaW1pdEluU2Vjb25kcyA9IHZhbHVlLnRhc2tUaW1lTGltaXRJblNlY29uZHM7XG4gICAgICB0aGlzLl90YXNrVGl0bGUgPSB2YWx1ZS50YXNrVGl0bGU7XG4gICAgICB0aGlzLl93b3JrdGVhbUFybiA9IHZhbHVlLndvcmt0ZWFtQXJuO1xuICAgICAgdGhpcy5fcHVibGljV29ya2ZvcmNlVGFza1ByaWNlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5wdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2U7XG4gICAgfVxuICB9XG5cbiAgLy8gaHVtYW5fdGFza191aV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaHVtYW5UYXNrVWlBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGh1bWFuVGFza1VpQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaHVtYW5fdGFza191aV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh1bWFuVGFza1VpQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9odW1hblRhc2tVaUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodW1hblRhc2tVaUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odW1hblRhc2tVaUFybjtcbiAgfVxuXG4gIC8vIHRhc2tfYXZhaWxhYmlsaXR5X2xpZmV0aW1lX2luX3NlY29uZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFza0F2YWlsYWJpbGl0eUxpZmV0aW1lSW5TZWNvbmRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0YXNrQXZhaWxhYmlsaXR5TGlmZXRpbWVJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0YXNrX2F2YWlsYWJpbGl0eV9saWZldGltZV9pbl9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YXNrQXZhaWxhYmlsaXR5TGlmZXRpbWVJblNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3Rhc2tBdmFpbGFiaWxpdHlMaWZldGltZUluU2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhc2tBdmFpbGFiaWxpdHlMaWZldGltZUluU2Vjb25kcygpIHtcbiAgICB0aGlzLl90YXNrQXZhaWxhYmlsaXR5TGlmZXRpbWVJblNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhc2tBdmFpbGFiaWxpdHlMaWZldGltZUluU2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrQXZhaWxhYmlsaXR5TGlmZXRpbWVJblNlY29uZHM7XG4gIH1cblxuICAvLyB0YXNrX2NvdW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Rhc2tDb3VudD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGFza0NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGFza19jb3VudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFza0NvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90YXNrQ291bnQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFza0NvdW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rhc2tDb3VudDtcbiAgfVxuXG4gIC8vIHRhc2tfZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGFza0Rlc2NyaXB0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YXNrRGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YXNrX2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YXNrRGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Rhc2tEZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXNrRGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFza0Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gdGFza19rZXl3b3JkcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXNrS2V5d29yZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdGFza0tleXdvcmRzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0YXNrX2tleXdvcmRzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFza0tleXdvcmRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3Rhc2tLZXl3b3JkcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhc2tLZXl3b3JkcygpIHtcbiAgICB0aGlzLl90YXNrS2V5d29yZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhc2tLZXl3b3Jkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrS2V5d29yZHM7XG4gIH1cblxuICAvLyB0YXNrX3RpbWVfbGltaXRfaW5fc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXNrVGltZUxpbWl0SW5TZWNvbmRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0YXNrVGltZUxpbWl0SW5TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGFza190aW1lX2xpbWl0X2luX3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhc2tUaW1lTGltaXRJblNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3Rhc2tUaW1lTGltaXRJblNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXNrVGltZUxpbWl0SW5TZWNvbmRzKCkge1xuICAgIHRoaXMuX3Rhc2tUaW1lTGltaXRJblNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhc2tUaW1lTGltaXRJblNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFza1RpbWVMaW1pdEluU2Vjb25kcztcbiAgfVxuXG4gIC8vIHRhc2tfdGl0bGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGFza1RpdGxlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YXNrVGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YXNrX3RpdGxlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YXNrVGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Rhc2tUaXRsZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXNrVGl0bGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFza1RpdGxlO1xuICB9XG5cbiAgLy8gd29ya3RlYW1fYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3dvcmt0ZWFtQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB3b3JrdGVhbUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dvcmt0ZWFtX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgd29ya3RlYW1Bcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3dvcmt0ZWFtQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdvcmt0ZWFtQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmt0ZWFtQXJuO1xuICB9XG5cbiAgLy8gcHVibGljX3dvcmtmb3JjZV90YXNrX3ByaWNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZSA9IG5ldyBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInB1YmxpY193b3JrZm9yY2VfdGFza19wcmljZVwiKTtcbiAgcHVibGljIGdldCBwdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZTtcbiAgfVxuICBwdWJsaWMgcHV0UHVibGljV29ya2ZvcmNlVGFza1ByaWNlKHZhbHVlOiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZSkge1xuICAgIHRoaXMuX3B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHVibGljV29ya2ZvcmNlVGFza1ByaWNlKCkge1xuICAgIHRoaXMuX3B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHVibGljV29ya2ZvcmNlVGFza1ByaWNlLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BSZXF1ZXN0U291cmNlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2Zsb3dfZGVmaW5pdGlvbiNhd3NfbWFuYWdlZF9odW1hbl9sb29wX3JlcXVlc3Rfc291cmNlIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uI2F3c19tYW5hZ2VkX2h1bWFuX2xvb3BfcmVxdWVzdF9zb3VyY2V9XG4gICovXG4gIHJlYWRvbmx5IGF3c01hbmFnZWRIdW1hbkxvb3BSZXF1ZXN0U291cmNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcFJlcXVlc3RTb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcFJlcXVlc3RTb3VyY2VPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcFJlcXVlc3RTb3VyY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXdzX21hbmFnZWRfaHVtYW5fbG9vcF9yZXF1ZXN0X3NvdXJjZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hd3NNYW5hZ2VkSHVtYW5Mb29wUmVxdWVzdFNvdXJjZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BSZXF1ZXN0U291cmNlVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BSZXF1ZXN0U291cmNlT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BSZXF1ZXN0U291cmNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhd3NfbWFuYWdlZF9odW1hbl9sb29wX3JlcXVlc3Rfc291cmNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hd3NNYW5hZ2VkSHVtYW5Mb29wUmVxdWVzdFNvdXJjZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcFJlcXVlc3RTb3VyY2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wUmVxdWVzdFNvdXJjZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXdzTWFuYWdlZEh1bWFuTG9vcFJlcXVlc3RTb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXdzTWFuYWdlZEh1bWFuTG9vcFJlcXVlc3RTb3VyY2UgPSB0aGlzLl9hd3NNYW5hZ2VkSHVtYW5Mb29wUmVxdWVzdFNvdXJjZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wUmVxdWVzdFNvdXJjZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2F3c01hbmFnZWRIdW1hbkxvb3BSZXF1ZXN0U291cmNlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hd3NNYW5hZ2VkSHVtYW5Mb29wUmVxdWVzdFNvdXJjZSA9IHZhbHVlLmF3c01hbmFnZWRIdW1hbkxvb3BSZXF1ZXN0U291cmNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGF3c19tYW5hZ2VkX2h1bWFuX2xvb3BfcmVxdWVzdF9zb3VyY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXdzTWFuYWdlZEh1bWFuTG9vcFJlcXVlc3RTb3VyY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF3c01hbmFnZWRIdW1hbkxvb3BSZXF1ZXN0U291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXdzX21hbmFnZWRfaHVtYW5fbG9vcF9yZXF1ZXN0X3NvdXJjZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXdzTWFuYWdlZEh1bWFuTG9vcFJlcXVlc3RTb3VyY2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F3c01hbmFnZWRIdW1hbkxvb3BSZXF1ZXN0U291cmNlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF3c01hbmFnZWRIdW1hbkxvb3BSZXF1ZXN0U291cmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F3c01hbmFnZWRIdW1hbkxvb3BSZXF1ZXN0U291cmNlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uT3V0cHV0Q29uZmlnIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2Zsb3dfZGVmaW5pdGlvbiNrbXNfa2V5X2lkIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uI2ttc19rZXlfaWR9XG4gICovXG4gIHJlYWRvbmx5IGttc0tleUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZmxvd19kZWZpbml0aW9uI3MzX291dHB1dF9wYXRoIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uI3MzX291dHB1dF9wYXRofVxuICAqL1xuICByZWFkb25seSBzM091dHB1dFBhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckZsb3dEZWZpbml0aW9uT3V0cHV0Q29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25PdXRwdXRDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbk91dHB1dENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUlkKSxcbiAgICBzM19vdXRwdXRfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM091dHB1dFBhdGgpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckZsb3dEZWZpbml0aW9uT3V0cHV0Q29uZmlnVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25PdXRwdXRDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbk91dHB1dENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAga21zX2tleV9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHMzX291dHB1dF9wYXRoOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zM091dHB1dFBhdGgpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25PdXRwdXRDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uT3V0cHV0Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9rbXNLZXlJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rbXNLZXlJZCA9IHRoaXMuX2ttc0tleUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fczNPdXRwdXRQYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnMzT3V0cHV0UGF0aCA9IHRoaXMuX3MzT3V0cHV0UGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uT3V0cHV0Q29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fa21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zM091dHB1dFBhdGggPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2ttc0tleUlkID0gdmFsdWUua21zS2V5SWQ7XG4gICAgICB0aGlzLl9zM091dHB1dFBhdGggPSB2YWx1ZS5zM091dHB1dFBhdGg7XG4gICAgfVxuICB9XG5cbiAgLy8ga21zX2tleV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNLZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlJZCgpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5SWQ7XG4gIH1cblxuICAvLyBzM19vdXRwdXRfcGF0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zM091dHB1dFBhdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHMzT3V0cHV0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX291dHB1dF9wYXRoJyk7XG4gIH1cbiAgcHVibGljIHNldCBzM091dHB1dFBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3MzT3V0cHV0UGF0aCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzM091dHB1dFBhdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNPdXRwdXRQYXRoO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZmxvd19kZWZpbml0aW9uIGF3c19zYWdlbWFrZXJfZmxvd19kZWZpbml0aW9ufVxuKi9cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3Nfc2FnZW1ha2VyX2Zsb3dfZGVmaW5pdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbiByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbiB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgU2FnZW1ha2VyRmxvd0RlZmluaXRpb24gdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9mbG93X2RlZmluaXRpb24jaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uIHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19zYWdlbWFrZXJfZmxvd19kZWZpbml0aW9uXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2Zsb3dfZGVmaW5pdGlvbiBhd3Nfc2FnZW1ha2VyX2Zsb3dfZGVmaW5pdGlvbn0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25Db25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19zYWdlbWFrZXJfZmxvd19kZWZpbml0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fZmxvd0RlZmluaXRpb25OYW1lID0gY29uZmlnLmZsb3dEZWZpbml0aW9uTmFtZTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9yb2xlQXJuID0gY29uZmlnLnJvbGVBcm47XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcuaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZztcbiAgICB0aGlzLl9odW1hbkxvb3BDb25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5odW1hbkxvb3BDb25maWc7XG4gICAgdGhpcy5faHVtYW5Mb29wUmVxdWVzdFNvdXJjZS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmh1bWFuTG9vcFJlcXVlc3RTb3VyY2U7XG4gICAgdGhpcy5fb3V0cHV0Q29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcub3V0cHV0Q29uZmlnO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGZsb3dfZGVmaW5pdGlvbl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Zsb3dEZWZpbml0aW9uTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZmxvd0RlZmluaXRpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmxvd19kZWZpbml0aW9uX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZsb3dEZWZpbml0aW9uTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmxvd0RlZmluaXRpb25OYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZsb3dEZWZpbml0aW9uTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mbG93RGVmaW5pdGlvbk5hbWU7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb2xlQXJuO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyBodW1hbl9sb29wX2FjdGl2YXRpb25fY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2h1bWFuTG9vcEFjdGl2YXRpb25Db25maWcgPSBuZXcgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiaHVtYW5fbG9vcF9hY3RpdmF0aW9uX2NvbmZpZ1wiKTtcbiAgcHVibGljIGdldCBodW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRIdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnKHZhbHVlOiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcEFjdGl2YXRpb25Db25maWcpIHtcbiAgICB0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnKCkge1xuICAgIHRoaXMuX2h1bWFuTG9vcEFjdGl2YXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBodW1hbl9sb29wX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9odW1hbkxvb3BDb25maWcgPSBuZXcgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJodW1hbl9sb29wX2NvbmZpZ1wiKTtcbiAgcHVibGljIGdldCBodW1hbkxvb3BDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h1bWFuTG9vcENvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0SHVtYW5Mb29wQ29uZmlnKHZhbHVlOiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZykge1xuICAgIHRoaXMuX2h1bWFuTG9vcENvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGh1bWFuTG9vcENvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odW1hbkxvb3BDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGh1bWFuX2xvb3BfcmVxdWVzdF9zb3VyY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHVtYW5Mb29wUmVxdWVzdFNvdXJjZSA9IG5ldyBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcFJlcXVlc3RTb3VyY2VPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJodW1hbl9sb29wX3JlcXVlc3Rfc291cmNlXCIpO1xuICBwdWJsaWMgZ2V0IGh1bWFuTG9vcFJlcXVlc3RTb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h1bWFuTG9vcFJlcXVlc3RTb3VyY2U7XG4gIH1cbiAgcHVibGljIHB1dEh1bWFuTG9vcFJlcXVlc3RTb3VyY2UodmFsdWU6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wUmVxdWVzdFNvdXJjZSkge1xuICAgIHRoaXMuX2h1bWFuTG9vcFJlcXVlc3RTb3VyY2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh1bWFuTG9vcFJlcXVlc3RTb3VyY2UoKSB7XG4gICAgdGhpcy5faHVtYW5Mb29wUmVxdWVzdFNvdXJjZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodW1hbkxvb3BSZXF1ZXN0U291cmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h1bWFuTG9vcFJlcXVlc3RTb3VyY2UuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG91dHB1dF9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfb3V0cHV0Q29uZmlnID0gbmV3IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uT3V0cHV0Q29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwib3V0cHV0X2NvbmZpZ1wiKTtcbiAgcHVibGljIGdldCBvdXRwdXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX291dHB1dENvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0T3V0cHV0Q29uZmlnKHZhbHVlOiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbk91dHB1dENvbmZpZykge1xuICAgIHRoaXMuX291dHB1dENvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG91dHB1dENvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vdXRwdXRDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmxvd19kZWZpbml0aW9uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Zsb3dEZWZpbml0aW9uTmFtZSksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JvbGVBcm4pLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBodW1hbl9sb29wX2FjdGl2YXRpb25fY29uZmlnOiBzYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcEFjdGl2YXRpb25Db25maWdUb1RlcnJhZm9ybSh0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgaHVtYW5fbG9vcF9jb25maWc6IHNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnVG9UZXJyYWZvcm0odGhpcy5faHVtYW5Mb29wQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgaHVtYW5fbG9vcF9yZXF1ZXN0X3NvdXJjZTogc2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BSZXF1ZXN0U291cmNlVG9UZXJyYWZvcm0odGhpcy5faHVtYW5Mb29wUmVxdWVzdFNvdXJjZS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIG91dHB1dF9jb25maWc6IHNhZ2VtYWtlckZsb3dEZWZpbml0aW9uT3V0cHV0Q29uZmlnVG9UZXJyYWZvcm0odGhpcy5fb3V0cHV0Q29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgZmxvd19kZWZpbml0aW9uX25hbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2Zsb3dEZWZpbml0aW9uTmFtZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHJvbGVfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9yb2xlQXJuKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgdGFnczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHRhZ3NfYWxsOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgaHVtYW5fbG9vcF9hY3RpdmF0aW9uX2NvbmZpZzoge1xuICAgICAgICB2YWx1ZTogc2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnVG9IY2xUZXJyYWZvcm0odGhpcy5faHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGh1bWFuX2xvb3BfY29uZmlnOiB7XG4gICAgICAgIHZhbHVlOiBzYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2h1bWFuTG9vcENvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgaHVtYW5fbG9vcF9yZXF1ZXN0X3NvdXJjZToge1xuICAgICAgICB2YWx1ZTogc2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BSZXF1ZXN0U291cmNlVG9IY2xUZXJyYWZvcm0odGhpcy5faHVtYW5Mb29wUmVxdWVzdFNvdXJjZS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BSZXF1ZXN0U291cmNlTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIG91dHB1dF9jb25maWc6IHtcbiAgICAgICAgdmFsdWU6IHNhZ2VtYWtlckZsb3dEZWZpbml0aW9uT3V0cHV0Q29uZmlnVG9IY2xUZXJyYWZvcm0odGhpcy5fb3V0cHV0Q29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTYWdlbWFrZXJGbG93RGVmaW5pdGlvbk91dHB1dENvbmZpZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==