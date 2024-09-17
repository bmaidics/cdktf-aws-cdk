"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wafv2WebAclLoggingConfiguration = exports.Wafv2WebAclLoggingConfigurationRedactedFieldsList = exports.Wafv2WebAclLoggingConfigurationRedactedFieldsOutputReference = exports.wafv2WebAclLoggingConfigurationRedactedFieldsToHclTerraform = exports.wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform = exports.Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference = exports.wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToHclTerraform = exports.wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform = exports.Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentOutputReference = exports.wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToHclTerraform = exports.wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToTerraform = exports.Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference = exports.wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToHclTerraform = exports.wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform = exports.Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference = exports.wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToHclTerraform = exports.wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform = exports.Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference = exports.wafv2WebAclLoggingConfigurationRedactedFieldsMethodToHclTerraform = exports.wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform = exports.Wafv2WebAclLoggingConfigurationRedactedFieldsBodyOutputReference = exports.wafv2WebAclLoggingConfigurationRedactedFieldsBodyToHclTerraform = exports.wafv2WebAclLoggingConfigurationRedactedFieldsBodyToTerraform = exports.Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsOutputReference = exports.wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToHclTerraform = exports.wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToTerraform = exports.Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference = exports.wafv2WebAclLoggingConfigurationLoggingFilterToHclTerraform = exports.wafv2WebAclLoggingConfigurationLoggingFilterToTerraform = exports.Wafv2WebAclLoggingConfigurationLoggingFilterFilterList = exports.Wafv2WebAclLoggingConfigurationLoggingFilterFilterOutputReference = exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterToHclTerraform = exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform = exports.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionList = exports.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionOutputReference = exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToHclTerraform = exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform = exports.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference = exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToHclTerraform = exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform = exports.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference = exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToHclTerraform = exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
    };
}
exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform = wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform;
function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        action: {
            value: cdktf.stringToHclTerraform(struct.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToHclTerraform = wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToHclTerraform;
class Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference extends cdktf.ComplexObject {
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
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._action = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._action = value.action;
        }
    }
    get action() {
        return this.getStringAttribute('action');
    }
    set action(value) {
        this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    get actionInput() {
        return this._action;
    }
}
exports.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference = Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference;
_a = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference[_a] = { fqn: "@cdktf/aws-cdk.wafv2WebAclLoggingConfiguration.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference", version: "0.0.0" };
function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        label_name: cdktf.stringToTerraform(struct.labelName),
    };
}
exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform = wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform;
function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        label_name: {
            value: cdktf.stringToHclTerraform(struct.labelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToHclTerraform = wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToHclTerraform;
class Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference extends cdktf.ComplexObject {
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
        if (this._labelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.labelName = this._labelName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._labelName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._labelName = value.labelName;
        }
    }
    get labelName() {
        return this.getStringAttribute('label_name');
    }
    set labelName(value) {
        this._labelName = value;
    }
    // Temporarily expose input value. Use with caution.
    get labelNameInput() {
        return this._labelName;
    }
}
exports.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference = Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference;
_b = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference[_b] = { fqn: "@cdktf/aws-cdk.wafv2WebAclLoggingConfiguration.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference", version: "0.0.0" };
function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action_condition: wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform(struct.actionCondition),
        label_name_condition: wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform(struct.labelNameCondition),
    };
}
exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform = wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform;
function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        action_condition: {
            value: wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToHclTerraform(struct.actionCondition),
            isBlock: true,
            type: "list",
            storageClassType: "Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionList",
        },
        label_name_condition: {
            value: wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToHclTerraform(struct.labelNameCondition),
            isBlock: true,
            type: "list",
            storageClassType: "Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToHclTerraform = wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToHclTerraform;
class Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // action_condition - computed: false, optional: true, required: false
        this._actionCondition = new Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference(this, "action_condition");
        // label_name_condition - computed: false, optional: true, required: false
        this._labelNameCondition = new Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference(this, "label_name_condition");
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._actionCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionCondition = this._actionCondition?.internalValue;
        }
        if (this._labelNameCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.labelNameCondition = this._labelNameCondition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionCondition.internalValue = undefined;
            this._labelNameCondition.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionCondition.internalValue = value.actionCondition;
            this._labelNameCondition.internalValue = value.labelNameCondition;
        }
    }
    get actionCondition() {
        return this._actionCondition;
    }
    putActionCondition(value) {
        this._actionCondition.internalValue = value;
    }
    resetActionCondition() {
        this._actionCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get actionConditionInput() {
        return this._actionCondition.internalValue;
    }
    get labelNameCondition() {
        return this._labelNameCondition;
    }
    putLabelNameCondition(value) {
        this._labelNameCondition.internalValue = value;
    }
    resetLabelNameCondition() {
        this._labelNameCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelNameConditionInput() {
        return this._labelNameCondition.internalValue;
    }
}
exports.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionOutputReference = Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionOutputReference;
_c = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionOutputReference[_c] = { fqn: "@cdktf/aws-cdk.wafv2WebAclLoggingConfiguration.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionOutputReference", version: "0.0.0" };
class Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionList extends cdktf.ComplexList {
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
        return new Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionList = Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionList;
_d = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionList[_d] = { fqn: "@cdktf/aws-cdk.wafv2WebAclLoggingConfiguration.Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionList", version: "0.0.0" };
function wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        behavior: cdktf.stringToTerraform(struct.behavior),
        requirement: cdktf.stringToTerraform(struct.requirement),
        condition: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform, true)(struct.condition),
    };
}
exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform = wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform;
function wafv2WebAclLoggingConfigurationLoggingFilterFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        behavior: {
            value: cdktf.stringToHclTerraform(struct.behavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        requirement: {
            value: cdktf.stringToHclTerraform(struct.requirement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        condition: {
            value: cdktf.listMapperHcl(wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToHclTerraform, true)(struct.condition),
            isBlock: true,
            type: "set",
            storageClassType: "Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.wafv2WebAclLoggingConfigurationLoggingFilterFilterToHclTerraform = wafv2WebAclLoggingConfigurationLoggingFilterFilterToHclTerraform;
class Wafv2WebAclLoggingConfigurationLoggingFilterFilterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // condition - computed: false, optional: false, required: true
        this._condition = new Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionList(this, "condition", true);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._behavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.behavior = this._behavior;
        }
        if (this._requirement !== undefined) {
            hasAnyValues = true;
            internalValueResult.requirement = this._requirement;
        }
        if (this._condition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.condition = this._condition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._behavior = undefined;
            this._requirement = undefined;
            this._condition.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._behavior = value.behavior;
            this._requirement = value.requirement;
            this._condition.internalValue = value.condition;
        }
    }
    get behavior() {
        return this.getStringAttribute('behavior');
    }
    set behavior(value) {
        this._behavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get behaviorInput() {
        return this._behavior;
    }
    get requirement() {
        return this.getStringAttribute('requirement');
    }
    set requirement(value) {
        this._requirement = value;
    }
    // Temporarily expose input value. Use with caution.
    get requirementInput() {
        return this._requirement;
    }
    get condition() {
        return this._condition;
    }
    putCondition(value) {
        this._condition.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get conditionInput() {
        return this._condition.internalValue;
    }
}
exports.Wafv2WebAclLoggingConfigurationLoggingFilterFilterOutputReference = Wafv2WebAclLoggingConfigurationLoggingFilterFilterOutputReference;
_e = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationLoggingFilterFilterOutputReference[_e] = { fqn: "@cdktf/aws-cdk.wafv2WebAclLoggingConfiguration.Wafv2WebAclLoggingConfigurationLoggingFilterFilterOutputReference", version: "0.0.0" };
class Wafv2WebAclLoggingConfigurationLoggingFilterFilterList extends cdktf.ComplexList {
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
        return new Wafv2WebAclLoggingConfigurationLoggingFilterFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.Wafv2WebAclLoggingConfigurationLoggingFilterFilterList = Wafv2WebAclLoggingConfigurationLoggingFilterFilterList;
_f = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationLoggingFilterFilterList[_f] = { fqn: "@cdktf/aws-cdk.wafv2WebAclLoggingConfiguration.Wafv2WebAclLoggingConfigurationLoggingFilterFilterList", version: "0.0.0" };
function wafv2WebAclLoggingConfigurationLoggingFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_behavior: cdktf.stringToTerraform(struct.defaultBehavior),
        filter: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform, true)(struct.filter),
    };
}
exports.wafv2WebAclLoggingConfigurationLoggingFilterToTerraform = wafv2WebAclLoggingConfigurationLoggingFilterToTerraform;
function wafv2WebAclLoggingConfigurationLoggingFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        default_behavior: {
            value: cdktf.stringToHclTerraform(struct.defaultBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter: {
            value: cdktf.listMapperHcl(wafv2WebAclLoggingConfigurationLoggingFilterFilterToHclTerraform, true)(struct.filter),
            isBlock: true,
            type: "set",
            storageClassType: "Wafv2WebAclLoggingConfigurationLoggingFilterFilterList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.wafv2WebAclLoggingConfigurationLoggingFilterToHclTerraform = wafv2WebAclLoggingConfigurationLoggingFilterToHclTerraform;
class Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // filter - computed: false, optional: false, required: true
        this._filter = new Wafv2WebAclLoggingConfigurationLoggingFilterFilterList(this, "filter", true);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._defaultBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultBehavior = this._defaultBehavior;
        }
        if (this._filter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._defaultBehavior = undefined;
            this._filter.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._defaultBehavior = value.defaultBehavior;
            this._filter.internalValue = value.filter;
        }
    }
    get defaultBehavior() {
        return this.getStringAttribute('default_behavior');
    }
    set defaultBehavior(value) {
        this._defaultBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get defaultBehaviorInput() {
        return this._defaultBehavior;
    }
    get filter() {
        return this._filter;
    }
    putFilter(value) {
        this._filter.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter.internalValue;
    }
}
exports.Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference = Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference;
_g = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference[_g] = { fqn: "@cdktf/aws-cdk.wafv2WebAclLoggingConfiguration.Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference", version: "0.0.0" };
function wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToTerraform;
function wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToHclTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToHclTerraform;
class Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
exports.Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsOutputReference = Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsOutputReference;
_h = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsOutputReference[_h] = { fqn: "@cdktf/aws-cdk.wafv2WebAclLoggingConfiguration.Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsOutputReference", version: "0.0.0" };
function wafv2WebAclLoggingConfigurationRedactedFieldsBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsBodyToTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsBodyToTerraform;
function wafv2WebAclLoggingConfigurationRedactedFieldsBodyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsBodyToHclTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsBodyToHclTerraform;
class Wafv2WebAclLoggingConfigurationRedactedFieldsBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
exports.Wafv2WebAclLoggingConfigurationRedactedFieldsBodyOutputReference = Wafv2WebAclLoggingConfigurationRedactedFieldsBodyOutputReference;
_j = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationRedactedFieldsBodyOutputReference[_j] = { fqn: "@cdktf/aws-cdk.wafv2WebAclLoggingConfiguration.Wafv2WebAclLoggingConfigurationRedactedFieldsBodyOutputReference", version: "0.0.0" };
function wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform;
function wafv2WebAclLoggingConfigurationRedactedFieldsMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsMethodToHclTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsMethodToHclTerraform;
class Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
exports.Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference = Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference;
_k = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference[_k] = { fqn: "@cdktf/aws-cdk.wafv2WebAclLoggingConfiguration.Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference", version: "0.0.0" };
function wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform;
function wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToHclTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToHclTerraform;
class Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
exports.Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference = Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference;
_l = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference[_l] = { fqn: "@cdktf/aws-cdk.wafv2WebAclLoggingConfiguration.Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference", version: "0.0.0" };
function wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform;
function wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToHclTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToHclTerraform;
class Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
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
}
exports.Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference = Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference;
_m = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference[_m] = { fqn: "@cdktf/aws-cdk.wafv2WebAclLoggingConfiguration.Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference", version: "0.0.0" };
function wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToTerraform;
function wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToHclTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToHclTerraform;
class Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
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
}
exports.Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentOutputReference = Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentOutputReference;
_o = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentOutputReference[_o] = { fqn: "@cdktf/aws-cdk.wafv2WebAclLoggingConfiguration.Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentOutputReference", version: "0.0.0" };
function wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform;
function wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToHclTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToHclTerraform;
class Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
exports.Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference = Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference;
_p = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference[_p] = { fqn: "@cdktf/aws-cdk.wafv2WebAclLoggingConfiguration.Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference", version: "0.0.0" };
function wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2WebAclLoggingConfigurationRedactedFieldsBodyToTerraform(struct.body),
        method: wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform(struct.method),
        query_string: wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform(struct.queryString),
        single_header: wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform(struct.uriPath),
    };
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform;
function wafv2WebAclLoggingConfigurationRedactedFieldsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        all_query_arguments: {
            value: wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToHclTerraform(struct.allQueryArguments),
            isBlock: true,
            type: "list",
            storageClassType: "Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsList",
        },
        body: {
            value: wafv2WebAclLoggingConfigurationRedactedFieldsBodyToHclTerraform(struct.body),
            isBlock: true,
            type: "list",
            storageClassType: "Wafv2WebAclLoggingConfigurationRedactedFieldsBodyList",
        },
        method: {
            value: wafv2WebAclLoggingConfigurationRedactedFieldsMethodToHclTerraform(struct.method),
            isBlock: true,
            type: "list",
            storageClassType: "Wafv2WebAclLoggingConfigurationRedactedFieldsMethodList",
        },
        query_string: {
            value: wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToHclTerraform(struct.queryString),
            isBlock: true,
            type: "list",
            storageClassType: "Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringList",
        },
        single_header: {
            value: wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToHclTerraform(struct.singleHeader),
            isBlock: true,
            type: "list",
            storageClassType: "Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderList",
        },
        single_query_argument: {
            value: wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToHclTerraform(struct.singleQueryArgument),
            isBlock: true,
            type: "list",
            storageClassType: "Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentList",
        },
        uri_path: {
            value: wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToHclTerraform(struct.uriPath),
            isBlock: true,
            type: "list",
            storageClassType: "Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.wafv2WebAclLoggingConfigurationRedactedFieldsToHclTerraform = wafv2WebAclLoggingConfigurationRedactedFieldsToHclTerraform;
class Wafv2WebAclLoggingConfigurationRedactedFieldsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // all_query_arguments - computed: false, optional: true, required: false
        this._allQueryArguments = new Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsOutputReference(this, "all_query_arguments");
        // body - computed: false, optional: true, required: false
        this._body = new Wafv2WebAclLoggingConfigurationRedactedFieldsBodyOutputReference(this, "body");
        // method - computed: false, optional: true, required: false
        this._method = new Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference(this, "method");
        // query_string - computed: false, optional: true, required: false
        this._queryString = new Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference(this, "query_string");
        // single_header - computed: false, optional: true, required: false
        this._singleHeader = new Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference(this, "single_header");
        // single_query_argument - computed: false, optional: true, required: false
        this._singleQueryArgument = new Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentOutputReference(this, "single_query_argument");
        // uri_path - computed: false, optional: true, required: false
        this._uriPath = new Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference(this, "uri_path");
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
exports.Wafv2WebAclLoggingConfigurationRedactedFieldsOutputReference = Wafv2WebAclLoggingConfigurationRedactedFieldsOutputReference;
_q = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationRedactedFieldsOutputReference[_q] = { fqn: "@cdktf/aws-cdk.wafv2WebAclLoggingConfiguration.Wafv2WebAclLoggingConfigurationRedactedFieldsOutputReference", version: "0.0.0" };
class Wafv2WebAclLoggingConfigurationRedactedFieldsList extends cdktf.ComplexList {
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
        return new Wafv2WebAclLoggingConfigurationRedactedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.Wafv2WebAclLoggingConfigurationRedactedFieldsList = Wafv2WebAclLoggingConfigurationRedactedFieldsList;
_r = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfigurationRedactedFieldsList[_r] = { fqn: "@cdktf/aws-cdk.wafv2WebAclLoggingConfiguration.Wafv2WebAclLoggingConfigurationRedactedFieldsList", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl_logging_configuration aws_wafv2_web_acl_logging_configuration}
*/
class Wafv2WebAclLoggingConfiguration extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Wafv2WebAclLoggingConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Wafv2WebAclLoggingConfiguration to import
    * @param importFromId The id of the existing Wafv2WebAclLoggingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl_logging_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Wafv2WebAclLoggingConfiguration to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_wafv2_web_acl_logging_configuration", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/wafv2_web_acl_logging_configuration aws_wafv2_web_acl_logging_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2WebAclLoggingConfigurationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_wafv2_web_acl_logging_configuration',
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
        // logging_filter - computed: false, optional: true, required: false
        this._loggingFilter = new Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference(this, "logging_filter");
        // redacted_fields - computed: false, optional: true, required: false
        this._redactedFields = new Wafv2WebAclLoggingConfigurationRedactedFieldsList(this, "redacted_fields", false);
        this._id = config.id;
        this._logDestinationConfigs = config.logDestinationConfigs;
        this._resourceArn = config.resourceArn;
        this._loggingFilter.internalValue = config.loggingFilter;
        this._redactedFields.internalValue = config.redactedFields;
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
    get logDestinationConfigs() {
        return cdktf.Fn.tolist(this.getListAttribute('log_destination_configs'));
    }
    set logDestinationConfigs(value) {
        this._logDestinationConfigs = value;
    }
    // Temporarily expose input value. Use with caution.
    get logDestinationConfigsInput() {
        return this._logDestinationConfigs;
    }
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    set resourceArn(value) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceArnInput() {
        return this._resourceArn;
    }
    get loggingFilter() {
        return this._loggingFilter;
    }
    putLoggingFilter(value) {
        this._loggingFilter.internalValue = value;
    }
    resetLoggingFilter() {
        this._loggingFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loggingFilterInput() {
        return this._loggingFilter.internalValue;
    }
    get redactedFields() {
        return this._redactedFields;
    }
    putRedactedFields(value) {
        this._redactedFields.internalValue = value;
    }
    resetRedactedFields() {
        this._redactedFields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get redactedFieldsInput() {
        return this._redactedFields.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            log_destination_configs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logDestinationConfigs),
            resource_arn: cdktf.stringToTerraform(this._resourceArn),
            logging_filter: wafv2WebAclLoggingConfigurationLoggingFilterToTerraform(this._loggingFilter.internalValue),
            redacted_fields: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform, true)(this._redactedFields.internalValue),
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
            log_destination_configs: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logDestinationConfigs),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            resource_arn: {
                value: cdktf.stringToHclTerraform(this._resourceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logging_filter: {
                value: wafv2WebAclLoggingConfigurationLoggingFilterToHclTerraform(this._loggingFilter.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "Wafv2WebAclLoggingConfigurationLoggingFilterList",
            },
            redacted_fields: {
                value: cdktf.listMapperHcl(wafv2WebAclLoggingConfigurationRedactedFieldsToHclTerraform, true)(this._redactedFields.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "Wafv2WebAclLoggingConfigurationRedactedFieldsList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.Wafv2WebAclLoggingConfiguration = Wafv2WebAclLoggingConfiguration;
_s = JSII_RTTI_SYMBOL_1;
Wafv2WebAclLoggingConfiguration[_s] = { fqn: "@cdktf/aws-cdk.wafv2WebAclLoggingConfiguration.Wafv2WebAclLoggingConfiguration", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
Wafv2WebAclLoggingConfiguration.tfResourceType = "aws_wafv2_web_acl_logging_configuration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3dhZnYyLXdlYi1hY2wtbG9nZ2luZy1jb25maWd1cmF0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBNEMvQixTQUFnQixxRkFBcUYsQ0FBQyxNQUErSztJQUNuUixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2hELENBQUE7QUFDSCxDQUFDO0FBUkQsc0xBUUM7QUFHRCxTQUFnQix3RkFBd0YsQ0FBQyxNQUErSztJQUN0UixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztZQUNqRCxPQUFP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RUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBRSxDQUFDLENBQUE7SUFDNUgsQ0FBQzs7QUF2TEgsMEVBd0xDOzs7QUF0TEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyw4Q0FBYyxHQUFHLHlDQUF5QyxBQUE1QyxDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dhZnYyX3dlYl9hY2xfbG9nZ2luZ19jb25maWd1cmF0aW9uXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93YWZ2Ml93ZWJfYWNsX2xvZ2dpbmdfY29uZmlndXJhdGlvbiNpZCBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uI2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBBV1MgS2luZXNpcyBGaXJlaG9zZSBEZWxpdmVyeSBTdHJlYW0gQVJOc1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvd2FmdjJfd2ViX2FjbF9sb2dnaW5nX2NvbmZpZ3VyYXRpb24jbG9nX2Rlc3RpbmF0aW9uX2NvbmZpZ3MgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbiNsb2dfZGVzdGluYXRpb25fY29uZmlnc31cbiAgKi9cbiAgcmVhZG9ubHkgbG9nRGVzdGluYXRpb25Db25maWdzOiBzdHJpbmdbXTtcbiAgLyoqXG4gICogQVdTIFdlYkFDTCBBUk5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dhZnYyX3dlYl9hY2xfbG9nZ2luZ19jb25maWd1cmF0aW9uI3Jlc291cmNlX2FybiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uI3Jlc291cmNlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgcmVzb3VyY2VBcm46IHN0cmluZztcbiAgLyoqXG4gICogbG9nZ2luZ19maWx0ZXIgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dhZnYyX3dlYl9hY2xfbG9nZ2luZ19jb25maWd1cmF0aW9uI2xvZ2dpbmdfZmlsdGVyIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb24jbG9nZ2luZ19maWx0ZXJ9XG4gICovXG4gIHJlYWRvbmx5IGxvZ2dpbmdGaWx0ZXI/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlcjtcbiAgLyoqXG4gICogcmVkYWN0ZWRfZmllbGRzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93YWZ2Ml93ZWJfYWNsX2xvZ2dpbmdfY29uZmlndXJhdGlvbiNyZWRhY3RlZF9maWVsZHMgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbiNyZWRhY3RlZF9maWVsZHN9XG4gICovXG4gIHJlYWRvbmx5IHJlZGFjdGVkRmllbGRzPzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25BY3Rpb25Db25kaXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93YWZ2Ml93ZWJfYWNsX2xvZ2dpbmdfY29uZmlndXJhdGlvbiNhY3Rpb24gV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbiNhY3Rpb259XG4gICovXG4gIHJlYWRvbmx5IGFjdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25BY3Rpb25Db25kaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkFjdGlvbkNvbmRpdGlvbk91dHB1dFJlZmVyZW5jZSB8IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uQWN0aW9uQ29uZGl0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY3Rpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uQWN0aW9uQ29uZGl0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25BY3Rpb25Db25kaXRpb25PdXRwdXRSZWZlcmVuY2UgfCBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkFjdGlvbkNvbmRpdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYWN0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hY3Rpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25BY3Rpb25Db25kaXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uQWN0aW9uQ29uZGl0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWN0aW9uID0gdGhpcy5fYWN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25BY3Rpb25Db25kaXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FjdGlvbiA9IHZhbHVlLmFjdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBhY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWN0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY3Rpb247XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25MYWJlbE5hbWVDb25kaXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93YWZ2Ml93ZWJfYWNsX2xvZ2dpbmdfY29uZmlndXJhdGlvbiNsYWJlbF9uYW1lIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb24jbGFiZWxfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbGFiZWxOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkxhYmVsTmFtZUNvbmRpdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uTGFiZWxOYW1lQ29uZGl0aW9uT3V0cHV0UmVmZXJlbmNlIHwgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25MYWJlbE5hbWVDb25kaXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGFiZWxfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sYWJlbE5hbWUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uTGFiZWxOYW1lQ29uZGl0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25MYWJlbE5hbWVDb25kaXRpb25PdXRwdXRSZWZlcmVuY2UgfCBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkxhYmVsTmFtZUNvbmRpdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbGFiZWxfbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubGFiZWxOYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uTGFiZWxOYW1lQ29uZGl0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkxhYmVsTmFtZUNvbmRpdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbGFiZWxOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxhYmVsTmFtZSA9IHRoaXMuX2xhYmVsTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uTGFiZWxOYW1lQ29uZGl0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbGFiZWxOYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9sYWJlbE5hbWUgPSB2YWx1ZS5sYWJlbE5hbWU7XG4gICAgfVxuICB9XG5cbiAgLy8gbGFiZWxfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9sYWJlbE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxhYmVsTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhYmVsX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhYmVsTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGFiZWxOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhYmVsTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbE5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb24ge1xuICAvKipcbiAgKiBhY3Rpb25fY29uZGl0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93YWZ2Ml93ZWJfYWNsX2xvZ2dpbmdfY29uZmlndXJhdGlvbiNhY3Rpb25fY29uZGl0aW9uIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb24jYWN0aW9uX2NvbmRpdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgYWN0aW9uQ29uZGl0aW9uPzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25BY3Rpb25Db25kaXRpb247XG4gIC8qKlxuICAqIGxhYmVsX25hbWVfY29uZGl0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93YWZ2Ml93ZWJfYWNsX2xvZ2dpbmdfY29uZmlndXJhdGlvbiNsYWJlbF9uYW1lX2NvbmRpdGlvbiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uI2xhYmVsX25hbWVfY29uZGl0aW9ufVxuICAqL1xuICByZWFkb25seSBsYWJlbE5hbWVDb25kaXRpb24/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkxhYmVsTmFtZUNvbmRpdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25fY29uZGl0aW9uOiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkFjdGlvbkNvbmRpdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuYWN0aW9uQ29uZGl0aW9uKSxcbiAgICBsYWJlbF9uYW1lX2NvbmRpdGlvbjogd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25MYWJlbE5hbWVDb25kaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmxhYmVsTmFtZUNvbmRpdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhY3Rpb25fY29uZGl0aW9uOiB7XG4gICAgICB2YWx1ZTogd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25BY3Rpb25Db25kaXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFjdGlvbkNvbmRpdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIldhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uQWN0aW9uQ29uZGl0aW9uTGlzdFwiLFxuICAgIH0sXG4gICAgbGFiZWxfbmFtZV9jb25kaXRpb246IHtcbiAgICAgIHZhbHVlOiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkxhYmVsTmFtZUNvbmRpdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEubGFiZWxOYW1lQ29uZGl0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25MYWJlbE5hbWVDb25kaXRpb25MaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY3Rpb25Db25kaXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWN0aW9uQ29uZGl0aW9uID0gdGhpcy5fYWN0aW9uQ29uZGl0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGFiZWxOYW1lQ29uZGl0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxhYmVsTmFtZUNvbmRpdGlvbiA9IHRoaXMuX2xhYmVsTmFtZUNvbmRpdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FjdGlvbkNvbmRpdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbGFiZWxOYW1lQ29uZGl0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYWN0aW9uQ29uZGl0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hY3Rpb25Db25kaXRpb247XG4gICAgICB0aGlzLl9sYWJlbE5hbWVDb25kaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmxhYmVsTmFtZUNvbmRpdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBhY3Rpb25fY29uZGl0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjdGlvbkNvbmRpdGlvbiA9IG5ldyBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkFjdGlvbkNvbmRpdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImFjdGlvbl9jb25kaXRpb25cIik7XG4gIHB1YmxpYyBnZXQgYWN0aW9uQ29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3Rpb25Db25kaXRpb247XG4gIH1cbiAgcHVibGljIHB1dEFjdGlvbkNvbmRpdGlvbih2YWx1ZTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25BY3Rpb25Db25kaXRpb24pIHtcbiAgICB0aGlzLl9hY3Rpb25Db25kaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFjdGlvbkNvbmRpdGlvbigpIHtcbiAgICB0aGlzLl9hY3Rpb25Db25kaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWN0aW9uQ29uZGl0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbkNvbmRpdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbGFiZWxfbmFtZV9jb25kaXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGFiZWxOYW1lQ29uZGl0aW9uID0gbmV3IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uTGFiZWxOYW1lQ29uZGl0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwibGFiZWxfbmFtZV9jb25kaXRpb25cIik7XG4gIHB1YmxpYyBnZXQgbGFiZWxOYW1lQ29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbE5hbWVDb25kaXRpb247XG4gIH1cbiAgcHVibGljIHB1dExhYmVsTmFtZUNvbmRpdGlvbih2YWx1ZTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25MYWJlbE5hbWVDb25kaXRpb24pIHtcbiAgICB0aGlzLl9sYWJlbE5hbWVDb25kaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhYmVsTmFtZUNvbmRpdGlvbigpIHtcbiAgICB0aGlzLl9sYWJlbE5hbWVDb25kaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGFiZWxOYW1lQ29uZGl0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsTmFtZUNvbmRpdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbkxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXIge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93YWZ2Ml93ZWJfYWNsX2xvZ2dpbmdfY29uZmlndXJhdGlvbiNiZWhhdmlvciBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uI2JlaGF2aW9yfVxuICAqL1xuICByZWFkb25seSBiZWhhdmlvcjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93YWZ2Ml93ZWJfYWNsX2xvZ2dpbmdfY29uZmlndXJhdGlvbiNyZXF1aXJlbWVudCBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uI3JlcXVpcmVtZW50fVxuICAqL1xuICByZWFkb25seSByZXF1aXJlbWVudDogc3RyaW5nO1xuICAvKipcbiAgKiBjb25kaXRpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dhZnYyX3dlYl9hY2xfbG9nZ2luZ19jb25maWd1cmF0aW9uI2NvbmRpdGlvbiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uI2NvbmRpdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgY29uZGl0aW9uOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbltdIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlclRvVGVycmFmb3JtKHN0cnVjdD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYmVoYXZpb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYmVoYXZpb3IpLFxuICAgIHJlcXVpcmVtZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlcXVpcmVtZW50KSxcbiAgICBjb25kaXRpb246IGNka3RmLmxpc3RNYXBwZXIod2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25Ub1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5jb25kaXRpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXIgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYmVoYXZpb3I6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmJlaGF2aW9yKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICByZXF1aXJlbWVudDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVxdWlyZW1lbnQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNvbmRpdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2wod2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJDb25kaXRpb25Ub0hjbFRlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5jb25kaXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIldhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlciB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYmVoYXZpb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYmVoYXZpb3IgPSB0aGlzLl9iZWhhdmlvcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlcXVpcmVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlcXVpcmVtZW50ID0gdGhpcy5fcmVxdWlyZW1lbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb25kaXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29uZGl0aW9uID0gdGhpcy5fY29uZGl0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXIgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYmVoYXZpb3IgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXF1aXJlbWVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvbmRpdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2JlaGF2aW9yID0gdmFsdWUuYmVoYXZpb3I7XG4gICAgICB0aGlzLl9yZXF1aXJlbWVudCA9IHZhbHVlLnJlcXVpcmVtZW50O1xuICAgICAgdGhpcy5fY29uZGl0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jb25kaXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gYmVoYXZpb3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYmVoYXZpb3I/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJlaGF2aW9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYmVoYXZpb3InKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJlaGF2aW9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9iZWhhdmlvciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiZWhhdmlvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9iZWhhdmlvcjtcbiAgfVxuXG4gIC8vIHJlcXVpcmVtZW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlcXVpcmVtZW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXF1aXJlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcXVpcmVtZW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCByZXF1aXJlbWVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVxdWlyZW1lbnQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWlyZW1lbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZW1lbnQ7XG4gIH1cblxuICAvLyBjb25kaXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29uZGl0aW9uID0gbmV3IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyQ29uZGl0aW9uTGlzdCh0aGlzLCBcImNvbmRpdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmRpdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0Q29uZGl0aW9uKHZhbHVlOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckNvbmRpdGlvbltdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9jb25kaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb25kaXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZGl0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlciB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dhZnYyX3dlYl9hY2xfbG9nZ2luZ19jb25maWd1cmF0aW9uI2RlZmF1bHRfYmVoYXZpb3IgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbiNkZWZhdWx0X2JlaGF2aW9yfVxuICAqL1xuICByZWFkb25seSBkZWZhdWx0QmVoYXZpb3I6IHN0cmluZztcbiAgLyoqXG4gICogZmlsdGVyIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93YWZ2Ml93ZWJfYWNsX2xvZ2dpbmdfY29uZmlndXJhdGlvbiNmaWx0ZXIgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbiNmaWx0ZXJ9XG4gICovXG4gIHJlYWRvbmx5IGZpbHRlcjogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlck91dHB1dFJlZmVyZW5jZSB8IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRlZmF1bHRfYmVoYXZpb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVmYXVsdEJlaGF2aW9yKSxcbiAgICBmaWx0ZXI6IGNka3RmLmxpc3RNYXBwZXIod2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5maWx0ZXIpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJPdXRwdXRSZWZlcmVuY2UgfCBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZGVmYXVsdF9iZWhhdmlvcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGVmYXVsdEJlaGF2aW9yKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyRmlsdGVyVG9IY2xUZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuZmlsdGVyKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kZWZhdWx0QmVoYXZpb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVmYXVsdEJlaGF2aW9yID0gdGhpcy5fZGVmYXVsdEJlaGF2aW9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmlsdGVyPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbHRlciA9IHRoaXMuX2ZpbHRlcj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGVmYXVsdEJlaGF2aW9yID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZmlsdGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RlZmF1bHRCZWhhdmlvciA9IHZhbHVlLmRlZmF1bHRCZWhhdmlvcjtcbiAgICAgIHRoaXMuX2ZpbHRlci5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZmlsdGVyO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlZmF1bHRfYmVoYXZpb3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGVmYXVsdEJlaGF2aW9yPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWZhdWx0QmVoYXZpb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWZhdWx0X2JlaGF2aW9yJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWZhdWx0QmVoYXZpb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHRCZWhhdmlvciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0QmVoYXZpb3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdEJlaGF2aW9yO1xuICB9XG5cbiAgLy8gZmlsdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ZpbHRlciA9IG5ldyBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlckZpbHRlckxpc3QodGhpcywgXCJmaWx0ZXJcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZmlsdGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXI7XG4gIH1cbiAgcHVibGljIHB1dEZpbHRlcih2YWx1ZTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJGaWx0ZXJbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZmlsdGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsdGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlci5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0FsbFF1ZXJ5QXJndW1lbnRzIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0FsbFF1ZXJ5QXJndW1lbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQWxsUXVlcnlBcmd1bWVudHNPdXRwdXRSZWZlcmVuY2UgfCBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNBbGxRdWVyeUFyZ3VtZW50cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNBbGxRdWVyeUFyZ3VtZW50c1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0FsbFF1ZXJ5QXJndW1lbnRzT3V0cHV0UmVmZXJlbmNlIHwgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQWxsUXVlcnlBcmd1bWVudHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICB9O1xuICByZXR1cm4gYXR0cnM7XG59XG5cbmV4cG9ydCBjbGFzcyBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNBbGxRdWVyeUFyZ3VtZW50c091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQWxsUXVlcnlBcmd1bWVudHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0FsbFF1ZXJ5QXJndW1lbnRzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0JvZHkge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQm9keVRvVGVycmFmb3JtKHN0cnVjdD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0JvZHlPdXRwdXRSZWZlcmVuY2UgfCBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNCb2R5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0JvZHlUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNCb2R5T3V0cHV0UmVmZXJlbmNlIHwgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQm9keSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gIH07XG4gIHJldHVybiBhdHRycztcbn1cblxuZXhwb3J0IGNsYXNzIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0JvZHlPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0JvZHkgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0JvZHkgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzTWV0aG9kIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc01ldGhvZFRvVGVycmFmb3JtKHN0cnVjdD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc01ldGhvZE91dHB1dFJlZmVyZW5jZSB8IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc01ldGhvZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNNZXRob2RUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNNZXRob2RPdXRwdXRSZWZlcmVuY2UgfCBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNNZXRob2QpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICB9O1xuICByZXR1cm4gYXR0cnM7XG59XG5cbmV4cG9ydCBjbGFzcyBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNNZXRob2RPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc01ldGhvZCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzTWV0aG9kIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1F1ZXJ5U3RyaW5nIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1F1ZXJ5U3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0PzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzUXVlcnlTdHJpbmdPdXRwdXRSZWZlcmVuY2UgfCBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNRdWVyeVN0cmluZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNRdWVyeVN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1F1ZXJ5U3RyaW5nT3V0cHV0UmVmZXJlbmNlIHwgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzUXVlcnlTdHJpbmcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICB9O1xuICByZXR1cm4gYXR0cnM7XG59XG5cbmV4cG9ydCBjbGFzcyBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNRdWVyeVN0cmluZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzUXVlcnlTdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1F1ZXJ5U3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1NpbmdsZUhlYWRlciB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dhZnYyX3dlYl9hY2xfbG9nZ2luZ19jb25maWd1cmF0aW9uI25hbWUgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbiNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVIZWFkZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVIZWFkZXJPdXRwdXRSZWZlcmVuY2UgfCBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVIZWFkZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVIZWFkZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVIZWFkZXJPdXRwdXRSZWZlcmVuY2UgfCBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVIZWFkZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIG5hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlSGVhZGVyT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVIZWFkZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX25hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVIZWFkZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9uYW1lID0gdmFsdWUubmFtZTtcbiAgICB9XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVRdWVyeUFyZ3VtZW50IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvd2FmdjJfd2ViX2FjbF9sb2dnaW5nX2NvbmZpZ3VyYXRpb24jbmFtZSBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1NpbmdsZVF1ZXJ5QXJndW1lbnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVRdWVyeUFyZ3VtZW50T3V0cHV0UmVmZXJlbmNlIHwgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlUXVlcnlBcmd1bWVudCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1NpbmdsZVF1ZXJ5QXJndW1lbnRUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVRdWVyeUFyZ3VtZW50T3V0cHV0UmVmZXJlbmNlIHwgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlUXVlcnlBcmd1bWVudCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVRdWVyeUFyZ3VtZW50T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVRdWVyeUFyZ3VtZW50IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5hbWUgPSB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlUXVlcnlBcmd1bWVudCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZS5uYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1VyaVBhdGgge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzVXJpUGF0aFRvVGVycmFmb3JtKHN0cnVjdD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1VyaVBhdGhPdXRwdXRSZWZlcmVuY2UgfCBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNVcmlQYXRoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1VyaVBhdGhUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNVcmlQYXRoT3V0cHV0UmVmZXJlbmNlIHwgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzVXJpUGF0aCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gIH07XG4gIHJldHVybiBhdHRycztcbn1cblxuZXhwb3J0IGNsYXNzIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1VyaVBhdGhPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1VyaVBhdGggfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1VyaVBhdGggfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzIHtcbiAgLyoqXG4gICogYWxsX3F1ZXJ5X2FyZ3VtZW50cyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvd2FmdjJfd2ViX2FjbF9sb2dnaW5nX2NvbmZpZ3VyYXRpb24jYWxsX3F1ZXJ5X2FyZ3VtZW50cyBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uI2FsbF9xdWVyeV9hcmd1bWVudHN9XG4gICovXG4gIHJlYWRvbmx5IGFsbFF1ZXJ5QXJndW1lbnRzPzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQWxsUXVlcnlBcmd1bWVudHM7XG4gIC8qKlxuICAqIGJvZHkgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dhZnYyX3dlYl9hY2xfbG9nZ2luZ19jb25maWd1cmF0aW9uI2JvZHkgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbiNib2R5fVxuICAqL1xuICByZWFkb25seSBib2R5PzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQm9keTtcbiAgLyoqXG4gICogbWV0aG9kIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93YWZ2Ml93ZWJfYWNsX2xvZ2dpbmdfY29uZmlndXJhdGlvbiNtZXRob2QgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbiNtZXRob2R9XG4gICovXG4gIHJlYWRvbmx5IG1ldGhvZD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc01ldGhvZDtcbiAgLyoqXG4gICogcXVlcnlfc3RyaW5nIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93YWZ2Ml93ZWJfYWNsX2xvZ2dpbmdfY29uZmlndXJhdGlvbiNxdWVyeV9zdHJpbmcgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbiNxdWVyeV9zdHJpbmd9XG4gICovXG4gIHJlYWRvbmx5IHF1ZXJ5U3RyaW5nPzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzUXVlcnlTdHJpbmc7XG4gIC8qKlxuICAqIHNpbmdsZV9oZWFkZXIgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dhZnYyX3dlYl9hY2xfbG9nZ2luZ19jb25maWd1cmF0aW9uI3NpbmdsZV9oZWFkZXIgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbiNzaW5nbGVfaGVhZGVyfVxuICAqL1xuICByZWFkb25seSBzaW5nbGVIZWFkZXI/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNTaW5nbGVIZWFkZXI7XG4gIC8qKlxuICAqIHNpbmdsZV9xdWVyeV9hcmd1bWVudCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvd2FmdjJfd2ViX2FjbF9sb2dnaW5nX2NvbmZpZ3VyYXRpb24jc2luZ2xlX3F1ZXJ5X2FyZ3VtZW50IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb24jc2luZ2xlX3F1ZXJ5X2FyZ3VtZW50fVxuICAqL1xuICByZWFkb25seSBzaW5nbGVRdWVyeUFyZ3VtZW50PzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlUXVlcnlBcmd1bWVudDtcbiAgLyoqXG4gICogdXJpX3BhdGggYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dhZnYyX3dlYl9hY2xfbG9nZ2luZ19jb25maWd1cmF0aW9uI3VyaV9wYXRoIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb24jdXJpX3BhdGh9XG4gICovXG4gIHJlYWRvbmx5IHVyaVBhdGg/OiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNVcmlQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzVG9UZXJyYWZvcm0oc3RydWN0PzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWxsX3F1ZXJ5X2FyZ3VtZW50czogd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQWxsUXVlcnlBcmd1bWVudHNUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsbFF1ZXJ5QXJndW1lbnRzKSxcbiAgICBib2R5OiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNCb2R5VG9UZXJyYWZvcm0oc3RydWN0IS5ib2R5KSxcbiAgICBtZXRob2Q6IHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc01ldGhvZFRvVGVycmFmb3JtKHN0cnVjdCEubWV0aG9kKSxcbiAgICBxdWVyeV9zdHJpbmc6IHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1F1ZXJ5U3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5xdWVyeVN0cmluZyksXG4gICAgc2luZ2xlX2hlYWRlcjogd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0IS5zaW5nbGVIZWFkZXIpLFxuICAgIHNpbmdsZV9xdWVyeV9hcmd1bWVudDogd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlUXVlcnlBcmd1bWVudFRvVGVycmFmb3JtKHN0cnVjdCEuc2luZ2xlUXVlcnlBcmd1bWVudCksXG4gICAgdXJpX3BhdGg6IHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1VyaVBhdGhUb1RlcnJhZm9ybShzdHJ1Y3QhLnVyaVBhdGgpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkcyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhbGxfcXVlcnlfYXJndW1lbnRzOiB7XG4gICAgICB2YWx1ZTogd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQWxsUXVlcnlBcmd1bWVudHNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFsbFF1ZXJ5QXJndW1lbnRzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQWxsUXVlcnlBcmd1bWVudHNMaXN0XCIsXG4gICAgfSxcbiAgICBib2R5OiB7XG4gICAgICB2YWx1ZTogd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQm9keVRvSGNsVGVycmFmb3JtKHN0cnVjdCEuYm9keSksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIldhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0JvZHlMaXN0XCIsXG4gICAgfSxcbiAgICBtZXRob2Q6IHtcbiAgICAgIHZhbHVlOiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNNZXRob2RUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1ldGhvZCksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIldhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc01ldGhvZExpc3RcIixcbiAgICB9LFxuICAgIHF1ZXJ5X3N0cmluZzoge1xuICAgICAgdmFsdWU6IHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1F1ZXJ5U3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5xdWVyeVN0cmluZyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIldhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1F1ZXJ5U3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gICAgc2luZ2xlX2hlYWRlcjoge1xuICAgICAgdmFsdWU6IHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1NpbmdsZUhlYWRlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2luZ2xlSGVhZGVyKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlSGVhZGVyTGlzdFwiLFxuICAgIH0sXG4gICAgc2luZ2xlX3F1ZXJ5X2FyZ3VtZW50OiB7XG4gICAgICB2YWx1ZTogd2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlUXVlcnlBcmd1bWVudFRvSGNsVGVycmFmb3JtKHN0cnVjdCEuc2luZ2xlUXVlcnlBcmd1bWVudCksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIldhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1NpbmdsZVF1ZXJ5QXJndW1lbnRMaXN0XCIsXG4gICAgfSxcbiAgICB1cmlfcGF0aDoge1xuICAgICAgdmFsdWU6IHdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1VyaVBhdGhUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnVyaVBhdGgpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNVcmlQYXRoTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hbGxRdWVyeUFyZ3VtZW50cz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hbGxRdWVyeUFyZ3VtZW50cyA9IHRoaXMuX2FsbFF1ZXJ5QXJndW1lbnRzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYm9keT8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ib2R5ID0gdGhpcy5fYm9keT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21ldGhvZD8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXRob2QgPSB0aGlzLl9tZXRob2Q/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9xdWVyeVN0cmluZz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5xdWVyeVN0cmluZyA9IHRoaXMuX3F1ZXJ5U3RyaW5nPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2luZ2xlSGVhZGVyPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNpbmdsZUhlYWRlciA9IHRoaXMuX3NpbmdsZUhlYWRlcj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NpbmdsZVF1ZXJ5QXJndW1lbnQ/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2luZ2xlUXVlcnlBcmd1bWVudCA9IHRoaXMuX3NpbmdsZVF1ZXJ5QXJndW1lbnQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91cmlQYXRoPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVyaVBhdGggPSB0aGlzLl91cmlQYXRoPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FsbFF1ZXJ5QXJndW1lbnRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ib2R5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZXRob2QuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3F1ZXJ5U3RyaW5nLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zaW5nbGVIZWFkZXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NpbmdsZVF1ZXJ5QXJndW1lbnQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VyaVBhdGguaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hbGxRdWVyeUFyZ3VtZW50cy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYWxsUXVlcnlBcmd1bWVudHM7XG4gICAgICB0aGlzLl9ib2R5LmludGVybmFsVmFsdWUgPSB2YWx1ZS5ib2R5O1xuICAgICAgdGhpcy5fbWV0aG9kLmludGVybmFsVmFsdWUgPSB2YWx1ZS5tZXRob2Q7XG4gICAgICB0aGlzLl9xdWVyeVN0cmluZy5pbnRlcm5hbFZhbHVlID0gdmFsdWUucXVlcnlTdHJpbmc7XG4gICAgICB0aGlzLl9zaW5nbGVIZWFkZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnNpbmdsZUhlYWRlcjtcbiAgICAgIHRoaXMuX3NpbmdsZVF1ZXJ5QXJndW1lbnQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnNpbmdsZVF1ZXJ5QXJndW1lbnQ7XG4gICAgICB0aGlzLl91cmlQYXRoLmludGVybmFsVmFsdWUgPSB2YWx1ZS51cmlQYXRoO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFsbF9xdWVyeV9hcmd1bWVudHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsUXVlcnlBcmd1bWVudHMgPSBuZXcgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQWxsUXVlcnlBcmd1bWVudHNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJhbGxfcXVlcnlfYXJndW1lbnRzXCIpO1xuICBwdWJsaWMgZ2V0IGFsbFF1ZXJ5QXJndW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxRdWVyeUFyZ3VtZW50cztcbiAgfVxuICBwdWJsaWMgcHV0QWxsUXVlcnlBcmd1bWVudHModmFsdWU6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0FsbFF1ZXJ5QXJndW1lbnRzKSB7XG4gICAgdGhpcy5fYWxsUXVlcnlBcmd1bWVudHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbFF1ZXJ5QXJndW1lbnRzKCkge1xuICAgIHRoaXMuX2FsbFF1ZXJ5QXJndW1lbnRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbFF1ZXJ5QXJndW1lbnRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbFF1ZXJ5QXJndW1lbnRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBib2R5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2JvZHkgPSBuZXcgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQm9keU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImJvZHlcIik7XG4gIHB1YmxpYyBnZXQgYm9keSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYm9keTtcbiAgfVxuICBwdWJsaWMgcHV0Qm9keSh2YWx1ZTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzQm9keSkge1xuICAgIHRoaXMuX2JvZHkuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJvZHkoKSB7XG4gICAgdGhpcy5fYm9keS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBib2R5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JvZHkuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG1ldGhvZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXRob2QgPSBuZXcgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzTWV0aG9kT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwibWV0aG9kXCIpO1xuICBwdWJsaWMgZ2V0IG1ldGhvZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0aG9kO1xuICB9XG4gIHB1YmxpYyBwdXRNZXRob2QodmFsdWU6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc01ldGhvZCkge1xuICAgIHRoaXMuX21ldGhvZC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWV0aG9kKCkge1xuICAgIHRoaXMuX21ldGhvZC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRob2RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0aG9kLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBxdWVyeV9zdHJpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcXVlcnlTdHJpbmcgPSBuZXcgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzUXVlcnlTdHJpbmdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJxdWVyeV9zdHJpbmdcIik7XG4gIHB1YmxpYyBnZXQgcXVlcnlTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U3RyaW5nO1xuICB9XG4gIHB1YmxpYyBwdXRRdWVyeVN0cmluZyh2YWx1ZTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzUXVlcnlTdHJpbmcpIHtcbiAgICB0aGlzLl9xdWVyeVN0cmluZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UXVlcnlTdHJpbmcoKSB7XG4gICAgdGhpcy5fcXVlcnlTdHJpbmcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcXVlcnlTdHJpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTdHJpbmcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNpbmdsZV9oZWFkZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2luZ2xlSGVhZGVyID0gbmV3IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1NpbmdsZUhlYWRlck91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInNpbmdsZV9oZWFkZXJcIik7XG4gIHB1YmxpYyBnZXQgc2luZ2xlSGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9zaW5nbGVIZWFkZXI7XG4gIH1cbiAgcHVibGljIHB1dFNpbmdsZUhlYWRlcih2YWx1ZTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlSGVhZGVyKSB7XG4gICAgdGhpcy5fc2luZ2xlSGVhZGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTaW5nbGVIZWFkZXIoKSB7XG4gICAgdGhpcy5fc2luZ2xlSGVhZGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNpbmdsZUhlYWRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaW5nbGVIZWFkZXIuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNpbmdsZV9xdWVyeV9hcmd1bWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zaW5nbGVRdWVyeUFyZ3VtZW50ID0gbmV3IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1NpbmdsZVF1ZXJ5QXJndW1lbnRPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJzaW5nbGVfcXVlcnlfYXJndW1lbnRcIik7XG4gIHB1YmxpYyBnZXQgc2luZ2xlUXVlcnlBcmd1bWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2luZ2xlUXVlcnlBcmd1bWVudDtcbiAgfVxuICBwdWJsaWMgcHV0U2luZ2xlUXVlcnlBcmd1bWVudCh2YWx1ZTogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzU2luZ2xlUXVlcnlBcmd1bWVudCkge1xuICAgIHRoaXMuX3NpbmdsZVF1ZXJ5QXJndW1lbnQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNpbmdsZVF1ZXJ5QXJndW1lbnQoKSB7XG4gICAgdGhpcy5fc2luZ2xlUXVlcnlBcmd1bWVudC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzaW5nbGVRdWVyeUFyZ3VtZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbmdsZVF1ZXJ5QXJndW1lbnQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHVyaV9wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VyaVBhdGggPSBuZXcgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzVXJpUGF0aE91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInVyaV9wYXRoXCIpO1xuICBwdWJsaWMgZ2V0IHVyaVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VyaVBhdGg7XG4gIH1cbiAgcHVibGljIHB1dFVyaVBhdGgodmFsdWU6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1VyaVBhdGgpIHtcbiAgICB0aGlzLl91cmlQYXRoLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVcmlQYXRoKCkge1xuICAgIHRoaXMuX3VyaVBhdGguaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXJpUGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91cmlQYXRoLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc1tdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3dhZnYyX3dlYl9hY2xfbG9nZ2luZ19jb25maWd1cmF0aW9uIGF3c193YWZ2Ml93ZWJfYWNsX2xvZ2dpbmdfY29uZmlndXJhdGlvbn1cbiovXG5leHBvcnQgY2xhc3MgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3Nfd2FmdjJfd2ViX2FjbF9sb2dnaW5nX2NvbmZpZ3VyYXRpb25cIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbiByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uIHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93YWZ2Ml93ZWJfYWNsX2xvZ2dpbmdfY29uZmlndXJhdGlvbiNpbXBvcnQgaW1wb3J0IHNlY3Rpb259IGluIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UgZm9yIHRoZSBpZCB0byB1c2VcbiAgKiBAcGFyYW0gcHJvdmlkZXI/IE9wdGlvbmFsIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciB3aGVyZSB0aGUgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbiB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3Nfd2FmdjJfd2ViX2FjbF9sb2dnaW5nX2NvbmZpZ3VyYXRpb25cIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy93YWZ2Ml93ZWJfYWNsX2xvZ2dpbmdfY29uZmlndXJhdGlvbiBhd3Nfd2FmdjJfd2ViX2FjbF9sb2dnaW5nX2NvbmZpZ3VyYXRpb259IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIFdhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Db25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3dhZnYyX3dlYl9hY2xfbG9nZ2luZ19jb25maWd1cmF0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gICAgdGhpcy5fbG9nRGVzdGluYXRpb25Db25maWdzID0gY29uZmlnLmxvZ0Rlc3RpbmF0aW9uQ29uZmlncztcbiAgICB0aGlzLl9yZXNvdXJjZUFybiA9IGNvbmZpZy5yZXNvdXJjZUFybjtcbiAgICB0aGlzLl9sb2dnaW5nRmlsdGVyLmludGVybmFsVmFsdWUgPSBjb25maWcubG9nZ2luZ0ZpbHRlcjtcbiAgICB0aGlzLl9yZWRhY3RlZEZpZWxkcy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnJlZGFjdGVkRmllbGRzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBsb2dfZGVzdGluYXRpb25fY29uZmlncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9sb2dEZXN0aW5hdGlvbkNvbmZpZ3M/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgbG9nRGVzdGluYXRpb25Db25maWdzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdsb2dfZGVzdGluYXRpb25fY29uZmlncycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ0Rlc3RpbmF0aW9uQ29uZmlncyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9sb2dEZXN0aW5hdGlvbkNvbmZpZ3MgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nRGVzdGluYXRpb25Db25maWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0Rlc3RpbmF0aW9uQ29uZmlncztcbiAgfVxuXG4gIC8vIHJlc291cmNlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZXNvdXJjZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZUFybjtcbiAgfVxuXG4gIC8vIGxvZ2dpbmdfZmlsdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ2dpbmdGaWx0ZXIgPSBuZXcgV2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvbkxvZ2dpbmdGaWx0ZXJPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJsb2dnaW5nX2ZpbHRlclwiKTtcbiAgcHVibGljIGdldCBsb2dnaW5nRmlsdGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9sb2dnaW5nRmlsdGVyO1xuICB9XG4gIHB1YmxpYyBwdXRMb2dnaW5nRmlsdGVyKHZhbHVlOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlcikge1xuICAgIHRoaXMuX2xvZ2dpbmdGaWx0ZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvZ2dpbmdGaWx0ZXIoKSB7XG4gICAgdGhpcy5fbG9nZ2luZ0ZpbHRlci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dnaW5nRmlsdGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ2dpbmdGaWx0ZXIuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHJlZGFjdGVkX2ZpZWxkcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWRhY3RlZEZpZWxkcyA9IG5ldyBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNMaXN0KHRoaXMsIFwicmVkYWN0ZWRfZmllbGRzXCIsIGZhbHNlKTtcbiAgcHVibGljIGdldCByZWRhY3RlZEZpZWxkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVkYWN0ZWRGaWVsZHM7XG4gIH1cbiAgcHVibGljIHB1dFJlZGFjdGVkRmllbGRzKHZhbHVlOiBXYWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVkYWN0ZWRGaWVsZHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlZGFjdGVkRmllbGRzKCkge1xuICAgIHRoaXMuX3JlZGFjdGVkRmllbGRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlZGFjdGVkRmllbGRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZGFjdGVkRmllbGRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBsb2dfZGVzdGluYXRpb25fY29uZmlnczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2xvZ0Rlc3RpbmF0aW9uQ29uZmlncyksXG4gICAgICByZXNvdXJjZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Jlc291cmNlQXJuKSxcbiAgICAgIGxvZ2dpbmdfZmlsdGVyOiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlclRvVGVycmFmb3JtKHRoaXMuX2xvZ2dpbmdGaWx0ZXIuaW50ZXJuYWxWYWx1ZSksXG4gICAgICByZWRhY3RlZF9maWVsZHM6IGNka3RmLmxpc3RNYXBwZXIod2FmdjJXZWJBY2xMb2dnaW5nQ29uZmlndXJhdGlvblJlZGFjdGVkRmllbGRzVG9UZXJyYWZvcm0sIHRydWUpKHRoaXMuX3JlZGFjdGVkRmllbGRzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbG9nX2Rlc3RpbmF0aW9uX2NvbmZpZ3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9sb2dEZXN0aW5hdGlvbkNvbmZpZ3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgcmVzb3VyY2VfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9yZXNvdXJjZUFybiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGxvZ2dpbmdfZmlsdGVyOiB7XG4gICAgICAgIHZhbHVlOiB3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uTG9nZ2luZ0ZpbHRlclRvSGNsVGVycmFmb3JtKHRoaXMuX2xvZ2dpbmdGaWx0ZXIuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIldhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25Mb2dnaW5nRmlsdGVyTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHJlZGFjdGVkX2ZpZWxkczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbCh3YWZ2MldlYkFjbExvZ2dpbmdDb25maWd1cmF0aW9uUmVkYWN0ZWRGaWVsZHNUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fcmVkYWN0ZWRGaWVsZHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIldhZnYyV2ViQWNsTG9nZ2luZ0NvbmZpZ3VyYXRpb25SZWRhY3RlZEZpZWxkc0xpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==