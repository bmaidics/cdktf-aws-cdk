"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetsBudget = exports.BudgetsBudgetNotificationList = exports.BudgetsBudgetNotificationOutputReference = exports.budgetsBudgetNotificationToHclTerraform = exports.budgetsBudgetNotificationToTerraform = exports.BudgetsBudgetCostTypesOutputReference = exports.budgetsBudgetCostTypesToHclTerraform = exports.budgetsBudgetCostTypesToTerraform = exports.BudgetsBudgetCostFilterList = exports.BudgetsBudgetCostFilterOutputReference = exports.budgetsBudgetCostFilterToHclTerraform = exports.budgetsBudgetCostFilterToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function budgetsBudgetCostFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.values),
    };
}
exports.budgetsBudgetCostFilterToTerraform = budgetsBudgetCostFilterToTerraform;
function budgetsBudgetCostFilterToHclTerraform(struct) {
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
        values: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.budgetsBudgetCostFilterToHclTerraform = budgetsBudgetCostFilterToHclTerraform;
class BudgetsBudgetCostFilterOutputReference extends cdktf.ComplexObject {
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
            this._name = undefined;
            this._values = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._values = value.values;
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
    get values() {
        return this.getListAttribute('values');
    }
    set values(value) {
        this._values = value;
    }
    // Temporarily expose input value. Use with caution.
    get valuesInput() {
        return this._values;
    }
}
exports.BudgetsBudgetCostFilterOutputReference = BudgetsBudgetCostFilterOutputReference;
_a = JSII_RTTI_SYMBOL_1;
BudgetsBudgetCostFilterOutputReference[_a] = { fqn: "@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference", version: "0.0.0" };
class BudgetsBudgetCostFilterList extends cdktf.ComplexList {
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
        return new BudgetsBudgetCostFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.BudgetsBudgetCostFilterList = BudgetsBudgetCostFilterList;
_b = JSII_RTTI_SYMBOL_1;
BudgetsBudgetCostFilterList[_b] = { fqn: "@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList", version: "0.0.0" };
function budgetsBudgetCostTypesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        include_credit: cdktf.booleanToTerraform(struct.includeCredit),
        include_discount: cdktf.booleanToTerraform(struct.includeDiscount),
        include_other_subscription: cdktf.booleanToTerraform(struct.includeOtherSubscription),
        include_recurring: cdktf.booleanToTerraform(struct.includeRecurring),
        include_refund: cdktf.booleanToTerraform(struct.includeRefund),
        include_subscription: cdktf.booleanToTerraform(struct.includeSubscription),
        include_support: cdktf.booleanToTerraform(struct.includeSupport),
        include_tax: cdktf.booleanToTerraform(struct.includeTax),
        include_upfront: cdktf.booleanToTerraform(struct.includeUpfront),
        use_amortized: cdktf.booleanToTerraform(struct.useAmortized),
        use_blended: cdktf.booleanToTerraform(struct.useBlended),
    };
}
exports.budgetsBudgetCostTypesToTerraform = budgetsBudgetCostTypesToTerraform;
function budgetsBudgetCostTypesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        include_credit: {
            value: cdktf.booleanToHclTerraform(struct.includeCredit),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_discount: {
            value: cdktf.booleanToHclTerraform(struct.includeDiscount),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_other_subscription: {
            value: cdktf.booleanToHclTerraform(struct.includeOtherSubscription),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_recurring: {
            value: cdktf.booleanToHclTerraform(struct.includeRecurring),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_refund: {
            value: cdktf.booleanToHclTerraform(struct.includeRefund),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_subscription: {
            value: cdktf.booleanToHclTerraform(struct.includeSubscription),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_support: {
            value: cdktf.booleanToHclTerraform(struct.includeSupport),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_tax: {
            value: cdktf.booleanToHclTerraform(struct.includeTax),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_upfront: {
            value: cdktf.booleanToHclTerraform(struct.includeUpfront),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        use_amortized: {
            value: cdktf.booleanToHclTerraform(struct.useAmortized),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        use_blended: {
            value: cdktf.booleanToHclTerraform(struct.useBlended),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.budgetsBudgetCostTypesToHclTerraform = budgetsBudgetCostTypesToHclTerraform;
class BudgetsBudgetCostTypesOutputReference extends cdktf.ComplexObject {
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
        if (this._includeCredit !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeCredit = this._includeCredit;
        }
        if (this._includeDiscount !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeDiscount = this._includeDiscount;
        }
        if (this._includeOtherSubscription !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeOtherSubscription = this._includeOtherSubscription;
        }
        if (this._includeRecurring !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeRecurring = this._includeRecurring;
        }
        if (this._includeRefund !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeRefund = this._includeRefund;
        }
        if (this._includeSubscription !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeSubscription = this._includeSubscription;
        }
        if (this._includeSupport !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeSupport = this._includeSupport;
        }
        if (this._includeTax !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeTax = this._includeTax;
        }
        if (this._includeUpfront !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeUpfront = this._includeUpfront;
        }
        if (this._useAmortized !== undefined) {
            hasAnyValues = true;
            internalValueResult.useAmortized = this._useAmortized;
        }
        if (this._useBlended !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBlended = this._useBlended;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._includeCredit = undefined;
            this._includeDiscount = undefined;
            this._includeOtherSubscription = undefined;
            this._includeRecurring = undefined;
            this._includeRefund = undefined;
            this._includeSubscription = undefined;
            this._includeSupport = undefined;
            this._includeTax = undefined;
            this._includeUpfront = undefined;
            this._useAmortized = undefined;
            this._useBlended = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._includeCredit = value.includeCredit;
            this._includeDiscount = value.includeDiscount;
            this._includeOtherSubscription = value.includeOtherSubscription;
            this._includeRecurring = value.includeRecurring;
            this._includeRefund = value.includeRefund;
            this._includeSubscription = value.includeSubscription;
            this._includeSupport = value.includeSupport;
            this._includeTax = value.includeTax;
            this._includeUpfront = value.includeUpfront;
            this._useAmortized = value.useAmortized;
            this._useBlended = value.useBlended;
        }
    }
    get includeCredit() {
        return this.getBooleanAttribute('include_credit');
    }
    set includeCredit(value) {
        this._includeCredit = value;
    }
    resetIncludeCredit() {
        this._includeCredit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeCreditInput() {
        return this._includeCredit;
    }
    get includeDiscount() {
        return this.getBooleanAttribute('include_discount');
    }
    set includeDiscount(value) {
        this._includeDiscount = value;
    }
    resetIncludeDiscount() {
        this._includeDiscount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeDiscountInput() {
        return this._includeDiscount;
    }
    get includeOtherSubscription() {
        return this.getBooleanAttribute('include_other_subscription');
    }
    set includeOtherSubscription(value) {
        this._includeOtherSubscription = value;
    }
    resetIncludeOtherSubscription() {
        this._includeOtherSubscription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeOtherSubscriptionInput() {
        return this._includeOtherSubscription;
    }
    get includeRecurring() {
        return this.getBooleanAttribute('include_recurring');
    }
    set includeRecurring(value) {
        this._includeRecurring = value;
    }
    resetIncludeRecurring() {
        this._includeRecurring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeRecurringInput() {
        return this._includeRecurring;
    }
    get includeRefund() {
        return this.getBooleanAttribute('include_refund');
    }
    set includeRefund(value) {
        this._includeRefund = value;
    }
    resetIncludeRefund() {
        this._includeRefund = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeRefundInput() {
        return this._includeRefund;
    }
    get includeSubscription() {
        return this.getBooleanAttribute('include_subscription');
    }
    set includeSubscription(value) {
        this._includeSubscription = value;
    }
    resetIncludeSubscription() {
        this._includeSubscription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeSubscriptionInput() {
        return this._includeSubscription;
    }
    get includeSupport() {
        return this.getBooleanAttribute('include_support');
    }
    set includeSupport(value) {
        this._includeSupport = value;
    }
    resetIncludeSupport() {
        this._includeSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeSupportInput() {
        return this._includeSupport;
    }
    get includeTax() {
        return this.getBooleanAttribute('include_tax');
    }
    set includeTax(value) {
        this._includeTax = value;
    }
    resetIncludeTax() {
        this._includeTax = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeTaxInput() {
        return this._includeTax;
    }
    get includeUpfront() {
        return this.getBooleanAttribute('include_upfront');
    }
    set includeUpfront(value) {
        this._includeUpfront = value;
    }
    resetIncludeUpfront() {
        this._includeUpfront = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeUpfrontInput() {
        return this._includeUpfront;
    }
    get useAmortized() {
        return this.getBooleanAttribute('use_amortized');
    }
    set useAmortized(value) {
        this._useAmortized = value;
    }
    resetUseAmortized() {
        this._useAmortized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get useAmortizedInput() {
        return this._useAmortized;
    }
    get useBlended() {
        return this.getBooleanAttribute('use_blended');
    }
    set useBlended(value) {
        this._useBlended = value;
    }
    resetUseBlended() {
        this._useBlended = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get useBlendedInput() {
        return this._useBlended;
    }
}
exports.BudgetsBudgetCostTypesOutputReference = BudgetsBudgetCostTypesOutputReference;
_c = JSII_RTTI_SYMBOL_1;
BudgetsBudgetCostTypesOutputReference[_c] = { fqn: "@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference", version: "0.0.0" };
function budgetsBudgetNotificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        notification_type: cdktf.stringToTerraform(struct.notificationType),
        subscriber_email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.subscriberEmailAddresses),
        subscriber_sns_topic_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.subscriberSnsTopicArns),
        threshold: cdktf.numberToTerraform(struct.threshold),
        threshold_type: cdktf.stringToTerraform(struct.thresholdType),
    };
}
exports.budgetsBudgetNotificationToTerraform = budgetsBudgetNotificationToTerraform;
function budgetsBudgetNotificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        comparison_operator: {
            value: cdktf.stringToHclTerraform(struct.comparisonOperator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        notification_type: {
            value: cdktf.stringToHclTerraform(struct.notificationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subscriber_email_addresses: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.subscriberEmailAddresses),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        subscriber_sns_topic_arns: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.subscriberSnsTopicArns),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        threshold: {
            value: cdktf.numberToHclTerraform(struct.threshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        threshold_type: {
            value: cdktf.stringToHclTerraform(struct.thresholdType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.budgetsBudgetNotificationToHclTerraform = budgetsBudgetNotificationToHclTerraform;
class BudgetsBudgetNotificationOutputReference extends cdktf.ComplexObject {
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
        if (this._comparisonOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._notificationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationType = this._notificationType;
        }
        if (this._subscriberEmailAddresses !== undefined) {
            hasAnyValues = true;
            internalValueResult.subscriberEmailAddresses = this._subscriberEmailAddresses;
        }
        if (this._subscriberSnsTopicArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.subscriberSnsTopicArns = this._subscriberSnsTopicArns;
        }
        if (this._threshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.threshold = this._threshold;
        }
        if (this._thresholdType !== undefined) {
            hasAnyValues = true;
            internalValueResult.thresholdType = this._thresholdType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparisonOperator = undefined;
            this._notificationType = undefined;
            this._subscriberEmailAddresses = undefined;
            this._subscriberSnsTopicArns = undefined;
            this._threshold = undefined;
            this._thresholdType = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparisonOperator = value.comparisonOperator;
            this._notificationType = value.notificationType;
            this._subscriberEmailAddresses = value.subscriberEmailAddresses;
            this._subscriberSnsTopicArns = value.subscriberSnsTopicArns;
            this._threshold = value.threshold;
            this._thresholdType = value.thresholdType;
        }
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
    get notificationType() {
        return this.getStringAttribute('notification_type');
    }
    set notificationType(value) {
        this._notificationType = value;
    }
    // Temporarily expose input value. Use with caution.
    get notificationTypeInput() {
        return this._notificationType;
    }
    get subscriberEmailAddresses() {
        return cdktf.Fn.tolist(this.getListAttribute('subscriber_email_addresses'));
    }
    set subscriberEmailAddresses(value) {
        this._subscriberEmailAddresses = value;
    }
    resetSubscriberEmailAddresses() {
        this._subscriberEmailAddresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subscriberEmailAddressesInput() {
        return this._subscriberEmailAddresses;
    }
    get subscriberSnsTopicArns() {
        return cdktf.Fn.tolist(this.getListAttribute('subscriber_sns_topic_arns'));
    }
    set subscriberSnsTopicArns(value) {
        this._subscriberSnsTopicArns = value;
    }
    resetSubscriberSnsTopicArns() {
        this._subscriberSnsTopicArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subscriberSnsTopicArnsInput() {
        return this._subscriberSnsTopicArns;
    }
    get threshold() {
        return this.getNumberAttribute('threshold');
    }
    set threshold(value) {
        this._threshold = value;
    }
    // Temporarily expose input value. Use with caution.
    get thresholdInput() {
        return this._threshold;
    }
    get thresholdType() {
        return this.getStringAttribute('threshold_type');
    }
    set thresholdType(value) {
        this._thresholdType = value;
    }
    // Temporarily expose input value. Use with caution.
    get thresholdTypeInput() {
        return this._thresholdType;
    }
}
exports.BudgetsBudgetNotificationOutputReference = BudgetsBudgetNotificationOutputReference;
_d = JSII_RTTI_SYMBOL_1;
BudgetsBudgetNotificationOutputReference[_d] = { fqn: "@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference", version: "0.0.0" };
class BudgetsBudgetNotificationList extends cdktf.ComplexList {
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
        return new BudgetsBudgetNotificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.BudgetsBudgetNotificationList = BudgetsBudgetNotificationList;
_e = JSII_RTTI_SYMBOL_1;
BudgetsBudgetNotificationList[_e] = { fqn: "@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget aws_budgets_budget}
*/
class BudgetsBudget extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a BudgetsBudget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BudgetsBudget to import
    * @param importFromId The id of the existing BudgetsBudget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BudgetsBudget to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_budgets_budget", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget aws_budgets_budget} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BudgetsBudgetConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_budgets_budget',
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
        // cost_filter - computed: false, optional: true, required: false
        this._costFilter = new BudgetsBudgetCostFilterList(this, "cost_filter", true);
        // cost_types - computed: false, optional: true, required: false
        this._costTypes = new BudgetsBudgetCostTypesOutputReference(this, "cost_types");
        // notification - computed: false, optional: true, required: false
        this._notification = new BudgetsBudgetNotificationList(this, "notification", true);
        this._accountId = config.accountId;
        this._budgetType = config.budgetType;
        this._costFilters = config.costFilters;
        this._id = config.id;
        this._limitAmount = config.limitAmount;
        this._limitUnit = config.limitUnit;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._timePeriodEnd = config.timePeriodEnd;
        this._timePeriodStart = config.timePeriodStart;
        this._timeUnit = config.timeUnit;
        this._costFilter.internalValue = config.costFilter;
        this._costTypes.internalValue = config.costTypes;
        this._notification.internalValue = config.notification;
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
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get budgetType() {
        return this.getStringAttribute('budget_type');
    }
    set budgetType(value) {
        this._budgetType = value;
    }
    // Temporarily expose input value. Use with caution.
    get budgetTypeInput() {
        return this._budgetType;
    }
    get costFilters() {
        return this.getStringMapAttribute('cost_filters');
    }
    set costFilters(value) {
        this._costFilters = value;
    }
    resetCostFilters() {
        this._costFilters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get costFiltersInput() {
        return this._costFilters;
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
    get limitAmount() {
        return this.getStringAttribute('limit_amount');
    }
    set limitAmount(value) {
        this._limitAmount = value;
    }
    // Temporarily expose input value. Use with caution.
    get limitAmountInput() {
        return this._limitAmount;
    }
    get limitUnit() {
        return this.getStringAttribute('limit_unit');
    }
    set limitUnit(value) {
        this._limitUnit = value;
    }
    // Temporarily expose input value. Use with caution.
    get limitUnitInput() {
        return this._limitUnit;
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
    get timePeriodEnd() {
        return this.getStringAttribute('time_period_end');
    }
    set timePeriodEnd(value) {
        this._timePeriodEnd = value;
    }
    resetTimePeriodEnd() {
        this._timePeriodEnd = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timePeriodEndInput() {
        return this._timePeriodEnd;
    }
    get timePeriodStart() {
        return this.getStringAttribute('time_period_start');
    }
    set timePeriodStart(value) {
        this._timePeriodStart = value;
    }
    resetTimePeriodStart() {
        this._timePeriodStart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timePeriodStartInput() {
        return this._timePeriodStart;
    }
    get timeUnit() {
        return this.getStringAttribute('time_unit');
    }
    set timeUnit(value) {
        this._timeUnit = value;
    }
    // Temporarily expose input value. Use with caution.
    get timeUnitInput() {
        return this._timeUnit;
    }
    get costFilter() {
        return this._costFilter;
    }
    putCostFilter(value) {
        this._costFilter.internalValue = value;
    }
    resetCostFilter() {
        this._costFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get costFilterInput() {
        return this._costFilter.internalValue;
    }
    get costTypes() {
        return this._costTypes;
    }
    putCostTypes(value) {
        this._costTypes.internalValue = value;
    }
    resetCostTypes() {
        this._costTypes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get costTypesInput() {
        return this._costTypes.internalValue;
    }
    get notification() {
        return this._notification;
    }
    putNotification(value) {
        this._notification.internalValue = value;
    }
    resetNotification() {
        this._notification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notificationInput() {
        return this._notification.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            budget_type: cdktf.stringToTerraform(this._budgetType),
            cost_filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._costFilters),
            id: cdktf.stringToTerraform(this._id),
            limit_amount: cdktf.stringToTerraform(this._limitAmount),
            limit_unit: cdktf.stringToTerraform(this._limitUnit),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            time_period_end: cdktf.stringToTerraform(this._timePeriodEnd),
            time_period_start: cdktf.stringToTerraform(this._timePeriodStart),
            time_unit: cdktf.stringToTerraform(this._timeUnit),
            cost_filter: cdktf.listMapper(budgetsBudgetCostFilterToTerraform, true)(this._costFilter.internalValue),
            cost_types: budgetsBudgetCostTypesToTerraform(this._costTypes.internalValue),
            notification: cdktf.listMapper(budgetsBudgetNotificationToTerraform, true)(this._notification.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            budget_type: {
                value: cdktf.stringToHclTerraform(this._budgetType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cost_filters: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._costFilters),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            limit_amount: {
                value: cdktf.stringToHclTerraform(this._limitAmount),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            limit_unit: {
                value: cdktf.stringToHclTerraform(this._limitUnit),
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
            time_period_end: {
                value: cdktf.stringToHclTerraform(this._timePeriodEnd),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            time_period_start: {
                value: cdktf.stringToHclTerraform(this._timePeriodStart),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            time_unit: {
                value: cdktf.stringToHclTerraform(this._timeUnit),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cost_filter: {
                value: cdktf.listMapperHcl(budgetsBudgetCostFilterToHclTerraform, true)(this._costFilter.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "BudgetsBudgetCostFilterList",
            },
            cost_types: {
                value: budgetsBudgetCostTypesToHclTerraform(this._costTypes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "BudgetsBudgetCostTypesList",
            },
            notification: {
                value: cdktf.listMapperHcl(budgetsBudgetNotificationToHclTerraform, true)(this._notification.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "BudgetsBudgetNotificationList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.BudgetsBudget = BudgetsBudget;
_f = JSII_RTTI_SYMBOL_1;
BudgetsBudget[_f] = { fqn: "@cdktf/aws-cdk.budgetsBudget.BudgetsBudget", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
BudgetsBudget.tfResourceType = "aws_budgets_budget";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2J1ZGdldHMtYnVkZ2V0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBa0YvQixTQUFnQixrQ0FBa0MsQ0FBQyxNQUFvRDtJQUNyRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ3pFLENBQUE7QUFDSCxDQUFDO0FBVEQsZ0ZBU0M7QUFHRCxTQUFnQixxQ0FBcUMsQ0FBQyxNQUFvRDtJQUN4RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLElBQUks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QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLDRCQUFjLEdBQUcsb0JBQW9CLEFBQXZCLENBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYnVkZ2V0c19idWRnZXRcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBCdWRnZXRzQnVkZ2V0Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2J1ZGdldHNfYnVkZ2V0I2FjY291bnRfaWQgQnVkZ2V0c0J1ZGdldCNhY2NvdW50X2lkfVxuICAqL1xuICByZWFkb25seSBhY2NvdW50SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2J1ZGdldHNfYnVkZ2V0I2J1ZGdldF90eXBlIEJ1ZGdldHNCdWRnZXQjYnVkZ2V0X3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGJ1ZGdldFR5cGU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYnVkZ2V0c19idWRnZXQjY29zdF9maWx0ZXJzIEJ1ZGdldHNCdWRnZXQjY29zdF9maWx0ZXJzfVxuICAqL1xuICByZWFkb25seSBjb3N0RmlsdGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2J1ZGdldHNfYnVkZ2V0I2lkIEJ1ZGdldHNCdWRnZXQjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2J1ZGdldHNfYnVkZ2V0I2xpbWl0X2Ftb3VudCBCdWRnZXRzQnVkZ2V0I2xpbWl0X2Ftb3VudH1cbiAgKi9cbiAgcmVhZG9ubHkgbGltaXRBbW91bnQ6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYnVkZ2V0c19idWRnZXQjbGltaXRfdW5pdCBCdWRnZXRzQnVkZ2V0I2xpbWl0X3VuaXR9XG4gICovXG4gIHJlYWRvbmx5IGxpbWl0VW5pdDogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9idWRnZXRzX2J1ZGdldCNuYW1lIEJ1ZGdldHNCdWRnZXQjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYnVkZ2V0c19idWRnZXQjbmFtZV9wcmVmaXggQnVkZ2V0c0J1ZGdldCNuYW1lX3ByZWZpeH1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZVByZWZpeD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYnVkZ2V0c19idWRnZXQjdGltZV9wZXJpb2RfZW5kIEJ1ZGdldHNCdWRnZXQjdGltZV9wZXJpb2RfZW5kfVxuICAqL1xuICByZWFkb25seSB0aW1lUGVyaW9kRW5kPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9idWRnZXRzX2J1ZGdldCN0aW1lX3BlcmlvZF9zdGFydCBCdWRnZXRzQnVkZ2V0I3RpbWVfcGVyaW9kX3N0YXJ0fVxuICAqL1xuICByZWFkb25seSB0aW1lUGVyaW9kU3RhcnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2J1ZGdldHNfYnVkZ2V0I3RpbWVfdW5pdCBCdWRnZXRzQnVkZ2V0I3RpbWVfdW5pdH1cbiAgKi9cbiAgcmVhZG9ubHkgdGltZVVuaXQ6IHN0cmluZztcbiAgLyoqXG4gICogY29zdF9maWx0ZXIgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2J1ZGdldHNfYnVkZ2V0I2Nvc3RfZmlsdGVyIEJ1ZGdldHNCdWRnZXQjY29zdF9maWx0ZXJ9XG4gICovXG4gIHJlYWRvbmx5IGNvc3RGaWx0ZXI/OiBCdWRnZXRzQnVkZ2V0Q29zdEZpbHRlcltdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIGNvc3RfdHlwZXMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2J1ZGdldHNfYnVkZ2V0I2Nvc3RfdHlwZXMgQnVkZ2V0c0J1ZGdldCNjb3N0X3R5cGVzfVxuICAqL1xuICByZWFkb25seSBjb3N0VHlwZXM/OiBCdWRnZXRzQnVkZ2V0Q29zdFR5cGVzO1xuICAvKipcbiAgKiBub3RpZmljYXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2J1ZGdldHNfYnVkZ2V0I25vdGlmaWNhdGlvbiBCdWRnZXRzQnVkZ2V0I25vdGlmaWNhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uPzogQnVkZ2V0c0J1ZGdldE5vdGlmaWNhdGlvbltdIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIEJ1ZGdldHNCdWRnZXRDb3N0RmlsdGVyIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYnVkZ2V0c19idWRnZXQjbmFtZSBCdWRnZXRzQnVkZ2V0I25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYnVkZ2V0c19idWRnZXQjdmFsdWVzIEJ1ZGdldHNCdWRnZXQjdmFsdWVzfVxuICAqL1xuICByZWFkb25seSB2YWx1ZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVkZ2V0c0J1ZGdldENvc3RGaWx0ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBCdWRnZXRzQnVkZ2V0Q29zdEZpbHRlciB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdmFsdWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS52YWx1ZXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1ZGdldHNCdWRnZXRDb3N0RmlsdGVyVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQnVkZ2V0c0J1ZGdldENvc3RGaWx0ZXIgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdmFsdWVzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEudmFsdWVzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQnVkZ2V0c0J1ZGdldENvc3RGaWx0ZXJPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQnVkZ2V0c0J1ZGdldENvc3RGaWx0ZXIgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX25hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQnVkZ2V0c0J1ZGdldENvc3RGaWx0ZXIgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbHVlcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uYW1lID0gdmFsdWUubmFtZTtcbiAgICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlLnZhbHVlcztcbiAgICB9XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHZhbHVlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92YWx1ZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3ZhbHVlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCdWRnZXRzQnVkZ2V0Q29zdEZpbHRlckxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IEJ1ZGdldHNCdWRnZXRDb3N0RmlsdGVyW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IEJ1ZGdldHNCdWRnZXRDb3N0RmlsdGVyT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IEJ1ZGdldHNCdWRnZXRDb3N0RmlsdGVyT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQnVkZ2V0c0J1ZGdldENvc3RUeXBlcyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2J1ZGdldHNfYnVkZ2V0I2luY2x1ZGVfY3JlZGl0IEJ1ZGdldHNCdWRnZXQjaW5jbHVkZV9jcmVkaXR9XG4gICovXG4gIHJlYWRvbmx5IGluY2x1ZGVDcmVkaXQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2J1ZGdldHNfYnVkZ2V0I2luY2x1ZGVfZGlzY291bnQgQnVkZ2V0c0J1ZGdldCNpbmNsdWRlX2Rpc2NvdW50fVxuICAqL1xuICByZWFkb25seSBpbmNsdWRlRGlzY291bnQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2J1ZGdldHNfYnVkZ2V0I2luY2x1ZGVfb3RoZXJfc3Vic2NyaXB0aW9uIEJ1ZGdldHNCdWRnZXQjaW5jbHVkZV9vdGhlcl9zdWJzY3JpcHRpb259XG4gICovXG4gIHJlYWRvbmx5IGluY2x1ZGVPdGhlclN1YnNjcmlwdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYnVkZ2V0c19idWRnZXQjaW5jbHVkZV9yZWN1cnJpbmcgQnVkZ2V0c0J1ZGdldCNpbmNsdWRlX3JlY3VycmluZ31cbiAgKi9cbiAgcmVhZG9ubHkgaW5jbHVkZVJlY3VycmluZz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYnVkZ2V0c19idWRnZXQjaW5jbHVkZV9yZWZ1bmQgQnVkZ2V0c0J1ZGdldCNpbmNsdWRlX3JlZnVuZH1cbiAgKi9cbiAgcmVhZG9ubHkgaW5jbHVkZVJlZnVuZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYnVkZ2V0c19idWRnZXQjaW5jbHVkZV9zdWJzY3JpcHRpb24gQnVkZ2V0c0J1ZGdldCNpbmNsdWRlX3N1YnNjcmlwdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgaW5jbHVkZVN1YnNjcmlwdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYnVkZ2V0c19idWRnZXQjaW5jbHVkZV9zdXBwb3J0IEJ1ZGdldHNCdWRnZXQjaW5jbHVkZV9zdXBwb3J0fVxuICAqL1xuICByZWFkb25seSBpbmNsdWRlU3VwcG9ydD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYnVkZ2V0c19idWRnZXQjaW5jbHVkZV90YXggQnVkZ2V0c0J1ZGdldCNpbmNsdWRlX3RheH1cbiAgKi9cbiAgcmVhZG9ubHkgaW5jbHVkZVRheD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYnVkZ2V0c19idWRnZXQjaW5jbHVkZV91cGZyb250IEJ1ZGdldHNCdWRnZXQjaW5jbHVkZV91cGZyb250fVxuICAqL1xuICByZWFkb25seSBpbmNsdWRlVXBmcm9udD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYnVkZ2V0c19idWRnZXQjdXNlX2Ftb3J0aXplZCBCdWRnZXRzQnVkZ2V0I3VzZV9hbW9ydGl6ZWR9XG4gICovXG4gIHJlYWRvbmx5IHVzZUFtb3J0aXplZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYnVkZ2V0c19idWRnZXQjdXNlX2JsZW5kZWQgQnVkZ2V0c0J1ZGdldCN1c2VfYmxlbmRlZH1cbiAgKi9cbiAgcmVhZG9ubHkgdXNlQmxlbmRlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1ZGdldHNCdWRnZXRDb3N0VHlwZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBCdWRnZXRzQnVkZ2V0Q29zdFR5cGVzT3V0cHV0UmVmZXJlbmNlIHwgQnVkZ2V0c0J1ZGdldENvc3RUeXBlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpbmNsdWRlX2NyZWRpdDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZUNyZWRpdCksXG4gICAgaW5jbHVkZV9kaXNjb3VudDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZURpc2NvdW50KSxcbiAgICBpbmNsdWRlX290aGVyX3N1YnNjcmlwdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZU90aGVyU3Vic2NyaXB0aW9uKSxcbiAgICBpbmNsdWRlX3JlY3VycmluZzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZVJlY3VycmluZyksXG4gICAgaW5jbHVkZV9yZWZ1bmQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVSZWZ1bmQpLFxuICAgIGluY2x1ZGVfc3Vic2NyaXB0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlU3Vic2NyaXB0aW9uKSxcbiAgICBpbmNsdWRlX3N1cHBvcnQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVTdXBwb3J0KSxcbiAgICBpbmNsdWRlX3RheDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZVRheCksXG4gICAgaW5jbHVkZV91cGZyb250OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlVXBmcm9udCksXG4gICAgdXNlX2Ftb3J0aXplZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEudXNlQW1vcnRpemVkKSxcbiAgICB1c2VfYmxlbmRlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEudXNlQmxlbmRlZCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYnVkZ2V0c0J1ZGdldENvc3RUeXBlc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IEJ1ZGdldHNCdWRnZXRDb3N0VHlwZXNPdXRwdXRSZWZlcmVuY2UgfCBCdWRnZXRzQnVkZ2V0Q29zdFR5cGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBpbmNsdWRlX2NyZWRpdDoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVDcmVkaXQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBpbmNsdWRlX2Rpc2NvdW50OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZURpc2NvdW50KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgaW5jbHVkZV9vdGhlcl9zdWJzY3JpcHRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlT3RoZXJTdWJzY3JpcHRpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBpbmNsdWRlX3JlY3VycmluZzoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVSZWN1cnJpbmcpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBpbmNsdWRlX3JlZnVuZDoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVSZWZ1bmQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBpbmNsdWRlX3N1YnNjcmlwdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVTdWJzY3JpcHRpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBpbmNsdWRlX3N1cHBvcnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlU3VwcG9ydCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIGluY2x1ZGVfdGF4OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZVRheCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIGluY2x1ZGVfdXBmcm9udDoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVVcGZyb250KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgdXNlX2Ftb3J0aXplZDoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnVzZUFtb3J0aXplZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIHVzZV9ibGVuZGVkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEudXNlQmxlbmRlZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQnVkZ2V0c0J1ZGdldENvc3RUeXBlc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQnVkZ2V0c0J1ZGdldENvc3RUeXBlcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faW5jbHVkZUNyZWRpdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbmNsdWRlQ3JlZGl0ID0gdGhpcy5faW5jbHVkZUNyZWRpdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVEaXNjb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbmNsdWRlRGlzY291bnQgPSB0aGlzLl9pbmNsdWRlRGlzY291bnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbmNsdWRlT3RoZXJTdWJzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZU90aGVyU3Vic2NyaXB0aW9uID0gdGhpcy5faW5jbHVkZU90aGVyU3Vic2NyaXB0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5jbHVkZVJlY3VycmluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbmNsdWRlUmVjdXJyaW5nID0gdGhpcy5faW5jbHVkZVJlY3VycmluZztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVSZWZ1bmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZVJlZnVuZCA9IHRoaXMuX2luY2x1ZGVSZWZ1bmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbmNsdWRlU3Vic2NyaXB0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluY2x1ZGVTdWJzY3JpcHRpb24gPSB0aGlzLl9pbmNsdWRlU3Vic2NyaXB0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5jbHVkZVN1cHBvcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZVN1cHBvcnQgPSB0aGlzLl9pbmNsdWRlU3VwcG9ydDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVUYXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZVRheCA9IHRoaXMuX2luY2x1ZGVUYXg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbmNsdWRlVXBmcm9udCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbmNsdWRlVXBmcm9udCA9IHRoaXMuX2luY2x1ZGVVcGZyb250O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlQW1vcnRpemVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVzZUFtb3J0aXplZCA9IHRoaXMuX3VzZUFtb3J0aXplZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VzZUJsZW5kZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXNlQmxlbmRlZCA9IHRoaXMuX3VzZUJsZW5kZWQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBCdWRnZXRzQnVkZ2V0Q29zdFR5cGVzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faW5jbHVkZUNyZWRpdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luY2x1ZGVEaXNjb3VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luY2x1ZGVPdGhlclN1YnNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luY2x1ZGVSZWN1cnJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbmNsdWRlUmVmdW5kID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5jbHVkZVN1YnNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luY2x1ZGVTdXBwb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5jbHVkZVRheCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luY2x1ZGVVcGZyb250ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXNlQW1vcnRpemVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXNlQmxlbmRlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faW5jbHVkZUNyZWRpdCA9IHZhbHVlLmluY2x1ZGVDcmVkaXQ7XG4gICAgICB0aGlzLl9pbmNsdWRlRGlzY291bnQgPSB2YWx1ZS5pbmNsdWRlRGlzY291bnQ7XG4gICAgICB0aGlzLl9pbmNsdWRlT3RoZXJTdWJzY3JpcHRpb24gPSB2YWx1ZS5pbmNsdWRlT3RoZXJTdWJzY3JpcHRpb247XG4gICAgICB0aGlzLl9pbmNsdWRlUmVjdXJyaW5nID0gdmFsdWUuaW5jbHVkZVJlY3VycmluZztcbiAgICAgIHRoaXMuX2luY2x1ZGVSZWZ1bmQgPSB2YWx1ZS5pbmNsdWRlUmVmdW5kO1xuICAgICAgdGhpcy5faW5jbHVkZVN1YnNjcmlwdGlvbiA9IHZhbHVlLmluY2x1ZGVTdWJzY3JpcHRpb247XG4gICAgICB0aGlzLl9pbmNsdWRlU3VwcG9ydCA9IHZhbHVlLmluY2x1ZGVTdXBwb3J0O1xuICAgICAgdGhpcy5faW5jbHVkZVRheCA9IHZhbHVlLmluY2x1ZGVUYXg7XG4gICAgICB0aGlzLl9pbmNsdWRlVXBmcm9udCA9IHZhbHVlLmluY2x1ZGVVcGZyb250O1xuICAgICAgdGhpcy5fdXNlQW1vcnRpemVkID0gdmFsdWUudXNlQW1vcnRpemVkO1xuICAgICAgdGhpcy5fdXNlQmxlbmRlZCA9IHZhbHVlLnVzZUJsZW5kZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gaW5jbHVkZV9jcmVkaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5jbHVkZUNyZWRpdD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZUNyZWRpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX2NyZWRpdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jbHVkZUNyZWRpdCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faW5jbHVkZUNyZWRpdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVDcmVkaXQoKSB7XG4gICAgdGhpcy5faW5jbHVkZUNyZWRpdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5jbHVkZUNyZWRpdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlQ3JlZGl0O1xuICB9XG5cbiAgLy8gaW5jbHVkZV9kaXNjb3VudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlRGlzY291bnQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGluY2x1ZGVEaXNjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX2Rpc2NvdW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBpbmNsdWRlRGlzY291bnQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVEaXNjb3VudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVEaXNjb3VudCgpIHtcbiAgICB0aGlzLl9pbmNsdWRlRGlzY291bnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVEaXNjb3VudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlRGlzY291bnQ7XG4gIH1cblxuICAvLyBpbmNsdWRlX290aGVyX3N1YnNjcmlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlT3RoZXJTdWJzY3JpcHRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGluY2x1ZGVPdGhlclN1YnNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX290aGVyX3N1YnNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jbHVkZU90aGVyU3Vic2NyaXB0aW9uKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbmNsdWRlT3RoZXJTdWJzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmNsdWRlT3RoZXJTdWJzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5faW5jbHVkZU90aGVyU3Vic2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmNsdWRlT3RoZXJTdWJzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZU90aGVyU3Vic2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gaW5jbHVkZV9yZWN1cnJpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5jbHVkZVJlY3VycmluZz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVJlY3VycmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX3JlY3VycmluZycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jbHVkZVJlY3VycmluZyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faW5jbHVkZVJlY3VycmluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVSZWN1cnJpbmcoKSB7XG4gICAgdGhpcy5faW5jbHVkZVJlY3VycmluZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVJlY3VycmluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlUmVjdXJyaW5nO1xuICB9XG5cbiAgLy8gaW5jbHVkZV9yZWZ1bmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5jbHVkZVJlZnVuZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVJlZnVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX3JlZnVuZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jbHVkZVJlZnVuZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faW5jbHVkZVJlZnVuZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVSZWZ1bmQoKSB7XG4gICAgdGhpcy5faW5jbHVkZVJlZnVuZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVJlZnVuZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlUmVmdW5kO1xuICB9XG5cbiAgLy8gaW5jbHVkZV9zdWJzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5jbHVkZVN1YnNjcmlwdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVN1YnNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX3N1YnNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jbHVkZVN1YnNjcmlwdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faW5jbHVkZVN1YnNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVTdWJzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5faW5jbHVkZVN1YnNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVN1YnNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlU3Vic2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gaW5jbHVkZV9zdXBwb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luY2x1ZGVTdXBwb3J0PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbmNsdWRlU3VwcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX3N1cHBvcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluY2x1ZGVTdXBwb3J0KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbmNsdWRlU3VwcG9ydCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVTdXBwb3J0KCkge1xuICAgIHRoaXMuX2luY2x1ZGVTdXBwb3J0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmNsdWRlU3VwcG9ydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlU3VwcG9ydDtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfdGF4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luY2x1ZGVUYXg/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGluY2x1ZGVUYXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jbHVkZV90YXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluY2x1ZGVUYXgodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVUYXggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmNsdWRlVGF4KCkge1xuICAgIHRoaXMuX2luY2x1ZGVUYXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVUYXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZVRheDtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfdXBmcm9udCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlVXBmcm9udD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVVwZnJvbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jbHVkZV91cGZyb250Jyk7XG4gIH1cbiAgcHVibGljIHNldCBpbmNsdWRlVXBmcm9udCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faW5jbHVkZVVwZnJvbnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmNsdWRlVXBmcm9udCgpIHtcbiAgICB0aGlzLl9pbmNsdWRlVXBmcm9udCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVVwZnJvbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZVVwZnJvbnQ7XG4gIH1cblxuICAvLyB1c2VfYW1vcnRpemVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZUFtb3J0aXplZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdXNlQW1vcnRpemVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3VzZV9hbW9ydGl6ZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZUFtb3J0aXplZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdXNlQW1vcnRpemVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VXNlQW1vcnRpemVkKCkge1xuICAgIHRoaXMuX3VzZUFtb3J0aXplZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlQW1vcnRpemVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZUFtb3J0aXplZDtcbiAgfVxuXG4gIC8vIHVzZV9ibGVuZGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZUJsZW5kZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHVzZUJsZW5kZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndXNlX2JsZW5kZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZUJsZW5kZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3VzZUJsZW5kZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVc2VCbGVuZGVkKCkge1xuICAgIHRoaXMuX3VzZUJsZW5kZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZUJsZW5kZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlQmxlbmRlZDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBCdWRnZXRzQnVkZ2V0Tm90aWZpY2F0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYnVkZ2V0c19idWRnZXQjY29tcGFyaXNvbl9vcGVyYXRvciBCdWRnZXRzQnVkZ2V0I2NvbXBhcmlzb25fb3BlcmF0b3J9XG4gICovXG4gIHJlYWRvbmx5IGNvbXBhcmlzb25PcGVyYXRvcjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9idWRnZXRzX2J1ZGdldCNub3RpZmljYXRpb25fdHlwZSBCdWRnZXRzQnVkZ2V0I25vdGlmaWNhdGlvbl90eXBlfVxuICAqL1xuICByZWFkb25seSBub3RpZmljYXRpb25UeXBlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2J1ZGdldHNfYnVkZ2V0I3N1YnNjcmliZXJfZW1haWxfYWRkcmVzc2VzIEJ1ZGdldHNCdWRnZXQjc3Vic2NyaWJlcl9lbWFpbF9hZGRyZXNzZXN9XG4gICovXG4gIHJlYWRvbmx5IHN1YnNjcmliZXJFbWFpbEFkZHJlc3Nlcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9idWRnZXRzX2J1ZGdldCNzdWJzY3JpYmVyX3Nuc190b3BpY19hcm5zIEJ1ZGdldHNCdWRnZXQjc3Vic2NyaWJlcl9zbnNfdG9waWNfYXJuc31cbiAgKi9cbiAgcmVhZG9ubHkgc3Vic2NyaWJlclNuc1RvcGljQXJucz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9idWRnZXRzX2J1ZGdldCN0aHJlc2hvbGQgQnVkZ2V0c0J1ZGdldCN0aHJlc2hvbGR9XG4gICovXG4gIHJlYWRvbmx5IHRocmVzaG9sZDogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9idWRnZXRzX2J1ZGdldCN0aHJlc2hvbGRfdHlwZSBCdWRnZXRzQnVkZ2V0I3RocmVzaG9sZF90eXBlfVxuICAqL1xuICByZWFkb25seSB0aHJlc2hvbGRUeXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWRnZXRzQnVkZ2V0Tm90aWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQnVkZ2V0c0J1ZGdldE5vdGlmaWNhdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb25fb3BlcmF0b3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbk9wZXJhdG9yKSxcbiAgICBub3RpZmljYXRpb25fdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ub3RpZmljYXRpb25UeXBlKSxcbiAgICBzdWJzY3JpYmVyX2VtYWlsX2FkZHJlc3NlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuc3Vic2NyaWJlckVtYWlsQWRkcmVzc2VzKSxcbiAgICBzdWJzY3JpYmVyX3Nuc190b3BpY19hcm5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5zdWJzY3JpYmVyU25zVG9waWNBcm5zKSxcbiAgICB0aHJlc2hvbGQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGhyZXNob2xkKSxcbiAgICB0aHJlc2hvbGRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aHJlc2hvbGRUeXBlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBidWRnZXRzQnVkZ2V0Tm90aWZpY2F0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQnVkZ2V0c0J1ZGdldE5vdGlmaWNhdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjb21wYXJpc29uX29wZXJhdG9yOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb21wYXJpc29uT3BlcmF0b3IpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG5vdGlmaWNhdGlvbl90eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ub3RpZmljYXRpb25UeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzdWJzY3JpYmVyX2VtYWlsX2FkZHJlc3Nlczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnN1YnNjcmliZXJFbWFpbEFkZHJlc3NlcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICAgIHN1YnNjcmliZXJfc25zX3RvcGljX2FybnM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5zdWJzY3JpYmVyU25zVG9waWNBcm5zKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gICAgdGhyZXNob2xkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50aHJlc2hvbGQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHRocmVzaG9sZF90eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50aHJlc2hvbGRUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEJ1ZGdldHNCdWRnZXROb3RpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQnVkZ2V0c0J1ZGdldE5vdGlmaWNhdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29tcGFyaXNvbk9wZXJhdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbXBhcmlzb25PcGVyYXRvciA9IHRoaXMuX2NvbXBhcmlzb25PcGVyYXRvcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25vdGlmaWNhdGlvblR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubm90aWZpY2F0aW9uVHlwZSA9IHRoaXMuX25vdGlmaWNhdGlvblR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdWJzY3JpYmVyRW1haWxBZGRyZXNzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3Vic2NyaWJlckVtYWlsQWRkcmVzc2VzID0gdGhpcy5fc3Vic2NyaWJlckVtYWlsQWRkcmVzc2VzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3Vic2NyaWJlclNuc1RvcGljQXJucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdWJzY3JpYmVyU25zVG9waWNBcm5zID0gdGhpcy5fc3Vic2NyaWJlclNuc1RvcGljQXJucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RocmVzaG9sZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aHJlc2hvbGQgPSB0aGlzLl90aHJlc2hvbGQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl90aHJlc2hvbGRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRocmVzaG9sZFR5cGUgPSB0aGlzLl90aHJlc2hvbGRUeXBlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQnVkZ2V0c0J1ZGdldE5vdGlmaWNhdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb21wYXJpc29uT3BlcmF0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25UeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3Vic2NyaWJlckVtYWlsQWRkcmVzc2VzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3Vic2NyaWJlclNuc1RvcGljQXJucyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RocmVzaG9sZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RocmVzaG9sZFR5cGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29tcGFyaXNvbk9wZXJhdG9yID0gdmFsdWUuY29tcGFyaXNvbk9wZXJhdG9yO1xuICAgICAgdGhpcy5fbm90aWZpY2F0aW9uVHlwZSA9IHZhbHVlLm5vdGlmaWNhdGlvblR5cGU7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVyRW1haWxBZGRyZXNzZXMgPSB2YWx1ZS5zdWJzY3JpYmVyRW1haWxBZGRyZXNzZXM7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVyU25zVG9waWNBcm5zID0gdmFsdWUuc3Vic2NyaWJlclNuc1RvcGljQXJucztcbiAgICAgIHRoaXMuX3RocmVzaG9sZCA9IHZhbHVlLnRocmVzaG9sZDtcbiAgICAgIHRoaXMuX3RocmVzaG9sZFR5cGUgPSB2YWx1ZS50aHJlc2hvbGRUeXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbXBhcmlzb25fb3BlcmF0b3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29tcGFyaXNvbk9wZXJhdG9yPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb21wYXJpc29uT3BlcmF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wYXJpc29uX29wZXJhdG9yJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21wYXJpc29uT3BlcmF0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXBhcmlzb25PcGVyYXRvciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb21wYXJpc29uT3BlcmF0b3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGFyaXNvbk9wZXJhdG9yO1xuICB9XG5cbiAgLy8gbm90aWZpY2F0aW9uX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbm90aWZpY2F0aW9uVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25vdGlmaWNhdGlvbl90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBub3RpZmljYXRpb25UeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25UeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vdGlmaWNhdGlvblR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uVHlwZTtcbiAgfVxuXG4gIC8vIHN1YnNjcmliZXJfZW1haWxfYWRkcmVzc2VzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1YnNjcmliZXJFbWFpbEFkZHJlc3Nlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzdWJzY3JpYmVyRW1haWxBZGRyZXNzZXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1YnNjcmliZXJfZW1haWxfYWRkcmVzc2VzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3Vic2NyaWJlckVtYWlsQWRkcmVzc2VzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJFbWFpbEFkZHJlc3NlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1YnNjcmliZXJFbWFpbEFkZHJlc3NlcygpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVyRW1haWxBZGRyZXNzZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1YnNjcmliZXJFbWFpbEFkZHJlc3Nlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmVyRW1haWxBZGRyZXNzZXM7XG4gIH1cblxuICAvLyBzdWJzY3JpYmVyX3Nuc190b3BpY19hcm5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1YnNjcmliZXJTbnNUb3BpY0FybnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc3Vic2NyaWJlclNuc1RvcGljQXJucygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3Vic2NyaWJlcl9zbnNfdG9waWNfYXJucycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1YnNjcmliZXJTbnNUb3BpY0FybnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlclNuc1RvcGljQXJucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1YnNjcmliZXJTbnNUb3BpY0FybnMoKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlclNuc1RvcGljQXJucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3Vic2NyaWJlclNuc1RvcGljQXJuc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmVyU25zVG9waWNBcm5zO1xuICB9XG5cbiAgLy8gdGhyZXNob2xkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RocmVzaG9sZD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGhyZXNob2xkKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGhyZXNob2xkJyk7XG4gIH1cbiAgcHVibGljIHNldCB0aHJlc2hvbGQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RocmVzaG9sZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aHJlc2hvbGRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhyZXNob2xkO1xuICB9XG5cbiAgLy8gdGhyZXNob2xkX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGhyZXNob2xkVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGhyZXNob2xkVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RocmVzaG9sZF90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0aHJlc2hvbGRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aHJlc2hvbGRUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRocmVzaG9sZFR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhyZXNob2xkVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnVkZ2V0c0J1ZGdldE5vdGlmaWNhdGlvbkxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IEJ1ZGdldHNCdWRnZXROb3RpZmljYXRpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogQnVkZ2V0c0J1ZGdldE5vdGlmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBCdWRnZXRzQnVkZ2V0Tm90aWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2J1ZGdldHNfYnVkZ2V0IGF3c19idWRnZXRzX2J1ZGdldH1cbiovXG5leHBvcnQgY2xhc3MgQnVkZ2V0c0J1ZGdldCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfYnVkZ2V0c19idWRnZXRcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgQnVkZ2V0c0J1ZGdldCByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBCdWRnZXRzQnVkZ2V0IHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBCdWRnZXRzQnVkZ2V0IHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9idWRnZXRzX2J1ZGdldCNpbXBvcnQgaW1wb3J0IHNlY3Rpb259IGluIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UgZm9yIHRoZSBpZCB0byB1c2VcbiAgKiBAcGFyYW0gcHJvdmlkZXI/IE9wdGlvbmFsIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciB3aGVyZSB0aGUgQnVkZ2V0c0J1ZGdldCB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfYnVkZ2V0c19idWRnZXRcIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9idWRnZXRzX2J1ZGdldCBhd3NfYnVkZ2V0c19idWRnZXR9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIEJ1ZGdldHNCdWRnZXRDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQnVkZ2V0c0J1ZGdldENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2J1ZGdldHNfYnVkZ2V0JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fYWNjb3VudElkID0gY29uZmlnLmFjY291bnRJZDtcbiAgICB0aGlzLl9idWRnZXRUeXBlID0gY29uZmlnLmJ1ZGdldFR5cGU7XG4gICAgdGhpcy5fY29zdEZpbHRlcnMgPSBjb25maWcuY29zdEZpbHRlcnM7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gICAgdGhpcy5fbGltaXRBbW91bnQgPSBjb25maWcubGltaXRBbW91bnQ7XG4gICAgdGhpcy5fbGltaXRVbml0ID0gY29uZmlnLmxpbWl0VW5pdDtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fbmFtZVByZWZpeCA9IGNvbmZpZy5uYW1lUHJlZml4O1xuICAgIHRoaXMuX3RpbWVQZXJpb2RFbmQgPSBjb25maWcudGltZVBlcmlvZEVuZDtcbiAgICB0aGlzLl90aW1lUGVyaW9kU3RhcnQgPSBjb25maWcudGltZVBlcmlvZFN0YXJ0O1xuICAgIHRoaXMuX3RpbWVVbml0ID0gY29uZmlnLnRpbWVVbml0O1xuICAgIHRoaXMuX2Nvc3RGaWx0ZXIuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5jb3N0RmlsdGVyO1xuICAgIHRoaXMuX2Nvc3RUeXBlcy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmNvc3RUeXBlcztcbiAgICB0aGlzLl9ub3RpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5ub3RpZmljYXRpb247XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFjY291bnRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2NvdW50SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFjY291bnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjY291bnRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjY291bnRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWNjb3VudElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjb3VudElkKCkge1xuICAgIHRoaXMuX2FjY291bnRJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjb3VudElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY291bnRJZDtcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYnVkZ2V0X3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYnVkZ2V0VHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYnVkZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1ZGdldF90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWRnZXRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idWRnZXRUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1ZGdldFR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVkZ2V0VHlwZTtcbiAgfVxuXG4gIC8vIGNvc3RfZmlsdGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nvc3RGaWx0ZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgY29zdEZpbHRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCdjb3N0X2ZpbHRlcnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvc3RGaWx0ZXJzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fY29zdEZpbHRlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb3N0RmlsdGVycygpIHtcbiAgICB0aGlzLl9jb3N0RmlsdGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29zdEZpbHRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29zdEZpbHRlcnM7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBsaW1pdF9hbW91bnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbGltaXRBbW91bnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxpbWl0QW1vdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGltaXRfYW1vdW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBsaW1pdEFtb3VudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGltaXRBbW91bnQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGltaXRBbW91bnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGltaXRBbW91bnQ7XG4gIH1cblxuICAvLyBsaW1pdF91bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2xpbWl0VW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbGltaXRVbml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGltaXRfdW5pdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGltaXRVbml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9saW1pdFVuaXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGltaXRVbml0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpbWl0VW5pdDtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gbmFtZV9wcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lUHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lUHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZV9wcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWVQcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWVQcmVmaXggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lUHJlZml4KCkge1xuICAgIHRoaXMuX25hbWVQcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVQcmVmaXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZVByZWZpeDtcbiAgfVxuXG4gIC8vIHRpbWVfcGVyaW9kX2VuZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lUGVyaW9kRW5kPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0aW1lUGVyaW9kRW5kKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGltZV9wZXJpb2RfZW5kJyk7XG4gIH1cbiAgcHVibGljIHNldCB0aW1lUGVyaW9kRW5kKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aW1lUGVyaW9kRW5kID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGltZVBlcmlvZEVuZCgpIHtcbiAgICB0aGlzLl90aW1lUGVyaW9kRW5kID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lUGVyaW9kRW5kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVQZXJpb2RFbmQ7XG4gIH1cblxuICAvLyB0aW1lX3BlcmlvZF9zdGFydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVQZXJpb2RTdGFydD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGltZVBlcmlvZFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGltZV9wZXJpb2Rfc3RhcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRpbWVQZXJpb2RTdGFydCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGltZVBlcmlvZFN0YXJ0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGltZVBlcmlvZFN0YXJ0KCkge1xuICAgIHRoaXMuX3RpbWVQZXJpb2RTdGFydCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZVBlcmlvZFN0YXJ0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVQZXJpb2RTdGFydDtcbiAgfVxuXG4gIC8vIHRpbWVfdW5pdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90aW1lVW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGltZVVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0aW1lX3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRpbWVVbml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aW1lVW5pdCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lVW5pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lVW5pdDtcbiAgfVxuXG4gIC8vIGNvc3RfZmlsdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nvc3RGaWx0ZXIgPSBuZXcgQnVkZ2V0c0J1ZGdldENvc3RGaWx0ZXJMaXN0KHRoaXMsIFwiY29zdF9maWx0ZXJcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY29zdEZpbHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29zdEZpbHRlcjtcbiAgfVxuICBwdWJsaWMgcHV0Q29zdEZpbHRlcih2YWx1ZTogQnVkZ2V0c0J1ZGdldENvc3RGaWx0ZXJbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY29zdEZpbHRlci5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29zdEZpbHRlcigpIHtcbiAgICB0aGlzLl9jb3N0RmlsdGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvc3RGaWx0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29zdEZpbHRlci5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gY29zdF90eXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb3N0VHlwZXMgPSBuZXcgQnVkZ2V0c0J1ZGdldENvc3RUeXBlc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImNvc3RfdHlwZXNcIik7XG4gIHB1YmxpYyBnZXQgY29zdFR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jb3N0VHlwZXM7XG4gIH1cbiAgcHVibGljIHB1dENvc3RUeXBlcyh2YWx1ZTogQnVkZ2V0c0J1ZGdldENvc3RUeXBlcykge1xuICAgIHRoaXMuX2Nvc3RUeXBlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29zdFR5cGVzKCkge1xuICAgIHRoaXMuX2Nvc3RUeXBlcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb3N0VHlwZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29zdFR5cGVzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBub3RpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uID0gbmV3IEJ1ZGdldHNCdWRnZXROb3RpZmljYXRpb25MaXN0KHRoaXMsIFwibm90aWZpY2F0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG5vdGlmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXROb3RpZmljYXRpb24odmFsdWU6IEJ1ZGdldHNCdWRnZXROb3RpZmljYXRpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROb3RpZmljYXRpb24oKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vdGlmaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWNjb3VudF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWNjb3VudElkKSxcbiAgICAgIGJ1ZGdldF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9idWRnZXRUeXBlKSxcbiAgICAgIGNvc3RfZmlsdGVyczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fY29zdEZpbHRlcnMpLFxuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIGxpbWl0X2Ftb3VudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbGltaXRBbW91bnQpLFxuICAgICAgbGltaXRfdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbGltaXRVbml0KSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgbmFtZV9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWVQcmVmaXgpLFxuICAgICAgdGltZV9wZXJpb2RfZW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90aW1lUGVyaW9kRW5kKSxcbiAgICAgIHRpbWVfcGVyaW9kX3N0YXJ0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90aW1lUGVyaW9kU3RhcnQpLFxuICAgICAgdGltZV91bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90aW1lVW5pdCksXG4gICAgICBjb3N0X2ZpbHRlcjogY2RrdGYubGlzdE1hcHBlcihidWRnZXRzQnVkZ2V0Q29zdEZpbHRlclRvVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9jb3N0RmlsdGVyLmludGVybmFsVmFsdWUpLFxuICAgICAgY29zdF90eXBlczogYnVkZ2V0c0J1ZGdldENvc3RUeXBlc1RvVGVycmFmb3JtKHRoaXMuX2Nvc3RUeXBlcy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIG5vdGlmaWNhdGlvbjogY2RrdGYubGlzdE1hcHBlcihidWRnZXRzQnVkZ2V0Tm90aWZpY2F0aW9uVG9UZXJyYWZvcm0sIHRydWUpKHRoaXMuX25vdGlmaWNhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGFjY291bnRfaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2FjY291bnRJZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGJ1ZGdldF90eXBlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9idWRnZXRUeXBlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgY29zdF9maWx0ZXJzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl9jb3N0RmlsdGVycyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGxpbWl0X2Ftb3VudDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbGltaXRBbW91bnQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBsaW1pdF91bml0OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9saW1pdFVuaXQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbmFtZV9wcmVmaXg6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX25hbWVQcmVmaXgpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0aW1lX3BlcmlvZF9lbmQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3RpbWVQZXJpb2RFbmQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0aW1lX3BlcmlvZF9zdGFydDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fdGltZVBlcmlvZFN0YXJ0KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgdGltZV91bml0OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl90aW1lVW5pdCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGNvc3RfZmlsdGVyOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGJ1ZGdldHNCdWRnZXRDb3N0RmlsdGVyVG9IY2xUZXJyYWZvcm0sIHRydWUpKHRoaXMuX2Nvc3RGaWx0ZXIuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQnVkZ2V0c0J1ZGdldENvc3RGaWx0ZXJMaXN0XCIsXG4gICAgICB9LFxuICAgICAgY29zdF90eXBlczoge1xuICAgICAgICB2YWx1ZTogYnVkZ2V0c0J1ZGdldENvc3RUeXBlc1RvSGNsVGVycmFmb3JtKHRoaXMuX2Nvc3RUeXBlcy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQnVkZ2V0c0J1ZGdldENvc3RUeXBlc0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBub3RpZmljYXRpb246IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woYnVkZ2V0c0J1ZGdldE5vdGlmaWNhdGlvblRvSGNsVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9ub3RpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQnVkZ2V0c0J1ZGdldE5vdGlmaWNhdGlvbkxpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==