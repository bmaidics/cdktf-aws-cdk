"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkfirewallFirewallPolicy = exports.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference = exports.networkfirewallFirewallPolicyFirewallPolicyToHclTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyToTerraform = exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList = exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToHclTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform = exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList = exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToHclTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform = exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToHclTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform = exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToHclTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform = exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList = exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToHclTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform = exports.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList = exports.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference = exports.networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToHclTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform = exports.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference = exports.networkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsToHclTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function networkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        rule_order: cdktf.stringToTerraform(struct.ruleOrder),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        rule_order: {
            value: cdktf.stringToHclTerraform(struct.ruleOrder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsToHclTerraform = networkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsToHclTerraform;
class NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._ruleOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleOrder = this._ruleOrder;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._ruleOrder = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._ruleOrder = value.ruleOrder;
        }
    }
    get ruleOrder() {
        return this.getStringAttribute('rule_order');
    }
    set ruleOrder(value) {
        this._ruleOrder = value;
    }
    // Temporarily expose input value. Use with caution.
    get ruleOrderInput() {
        return this._ruleOrder;
    }
}
exports.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference = NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference[_a] = { fqn: "@cdktf/aws-cdk.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference", version: "0.0.0" };
function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        priority: {
            value: cdktf.numberToHclTerraform(struct.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        resource_arn: {
            value: cdktf.stringToHclTerraform(struct.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToHclTerraform = networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToHclTerraform;
class NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference extends cdktf.ComplexObject {
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
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._priority = undefined;
            this._resourceArn = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._priority = value.priority;
            this._resourceArn = value.resourceArn;
        }
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
}
exports.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference = NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference;
_b = JSII_RTTI_SYMBOL_1;
NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference[_b] = { fqn: "@cdktf/aws-cdk.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference", version: "0.0.0" };
class NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList extends cdktf.ComplexList {
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
        return new NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList = NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList;
_c = JSII_RTTI_SYMBOL_1;
NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList[_c] = { fqn: "@cdktf/aws-cdk.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList", version: "0.0.0" };
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToHclTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToHclTerraform;
class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference extends cdktf.ComplexObject {
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
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
        }
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
exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference = NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference;
_d = JSII_RTTI_SYMBOL_1;
NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference[_d] = { fqn: "@cdktf/aws-cdk.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference", version: "0.0.0" };
class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList extends cdktf.ComplexList {
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
        return new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList = NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList;
_e = JSII_RTTI_SYMBOL_1;
NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList[_e] = { fqn: "@cdktf/aws-cdk.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList", version: "0.0.0" };
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dimension: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform, true)(struct.dimension),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        dimension: {
            value: cdktf.listMapperHcl(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToHclTerraform, true)(struct.dimension),
            isBlock: true,
            type: "set",
            storageClassType: "NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToHclTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToHclTerraform;
class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // dimension - computed: false, optional: false, required: true
        this._dimension = new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList(this, "dimension", true);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._dimension?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimension = this._dimension?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dimension.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dimension.internalValue = value.dimension;
        }
    }
    get dimension() {
        return this._dimension;
    }
    putDimension(value) {
        this._dimension.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get dimensionInput() {
        return this._dimension.internalValue;
    }
}
exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference = NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference;
_f = JSII_RTTI_SYMBOL_1;
NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference[_f] = { fqn: "@cdktf/aws-cdk.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference", version: "0.0.0" };
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        publish_metric_action: networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform(struct.publishMetricAction),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        publish_metric_action: {
            value: networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToHclTerraform(struct.publishMetricAction),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToHclTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToHclTerraform;
class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // publish_metric_action - computed: false, optional: false, required: true
        this._publishMetricAction = new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference(this, "publish_metric_action");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._publishMetricAction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.publishMetricAction = this._publishMetricAction?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._publishMetricAction.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._publishMetricAction.internalValue = value.publishMetricAction;
        }
    }
    get publishMetricAction() {
        return this._publishMetricAction;
    }
    putPublishMetricAction(value) {
        this._publishMetricAction.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get publishMetricActionInput() {
        return this._publishMetricAction.internalValue;
    }
}
exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference = NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference;
_g = JSII_RTTI_SYMBOL_1;
NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference[_g] = { fqn: "@cdktf/aws-cdk.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference", version: "0.0.0" };
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action_name: cdktf.stringToTerraform(struct.actionName),
        action_definition: networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform(struct.actionDefinition),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        action_name: {
            value: cdktf.stringToHclTerraform(struct.actionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        action_definition: {
            value: networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToHclTerraform(struct.actionDefinition),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToHclTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToHclTerraform;
class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // action_definition - computed: false, optional: false, required: true
        this._actionDefinition = new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference(this, "action_definition");
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._actionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionName = this._actionName;
        }
        if (this._actionDefinition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionDefinition = this._actionDefinition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionName = undefined;
            this._actionDefinition.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionName = value.actionName;
            this._actionDefinition.internalValue = value.actionDefinition;
        }
    }
    get actionName() {
        return this.getStringAttribute('action_name');
    }
    set actionName(value) {
        this._actionName = value;
    }
    // Temporarily expose input value. Use with caution.
    get actionNameInput() {
        return this._actionName;
    }
    get actionDefinition() {
        return this._actionDefinition;
    }
    putActionDefinition(value) {
        this._actionDefinition.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get actionDefinitionInput() {
        return this._actionDefinition.internalValue;
    }
}
exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference = NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference;
_h = JSII_RTTI_SYMBOL_1;
NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference[_h] = { fqn: "@cdktf/aws-cdk.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference", version: "0.0.0" };
class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList extends cdktf.ComplexList {
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
        return new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList = NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList;
_j = JSII_RTTI_SYMBOL_1;
NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList[_j] = { fqn: "@cdktf/aws-cdk.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList", version: "0.0.0" };
function networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        priority: {
            value: cdktf.numberToHclTerraform(struct.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        resource_arn: {
            value: cdktf.stringToHclTerraform(struct.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToHclTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToHclTerraform;
class NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference extends cdktf.ComplexObject {
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
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._priority = undefined;
            this._resourceArn = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._priority = value.priority;
            this._resourceArn = value.resourceArn;
        }
    }
    get priority() {
        return this.getNumberAttribute('priority');
    }
    set priority(value) {
        this._priority = value;
    }
    // Temporarily expose input value. Use with caution.
    get priorityInput() {
        return this._priority;
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
}
exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference = NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference;
_k = JSII_RTTI_SYMBOL_1;
NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference[_k] = { fqn: "@cdktf/aws-cdk.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference", version: "0.0.0" };
class NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList extends cdktf.ComplexList {
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
        return new NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList = NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList;
_l = JSII_RTTI_SYMBOL_1;
NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList[_l] = { fqn: "@cdktf/aws-cdk.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList", version: "0.0.0" };
function networkfirewallFirewallPolicyFirewallPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        stateful_default_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.statefulDefaultActions),
        stateless_default_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.statelessDefaultActions),
        stateless_fragment_default_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.statelessFragmentDefaultActions),
        stateful_engine_options: networkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsToTerraform(struct.statefulEngineOptions),
        stateful_rule_group_reference: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform, true)(struct.statefulRuleGroupReference),
        stateless_custom_action: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform, true)(struct.statelessCustomAction),
        stateless_rule_group_reference: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform, true)(struct.statelessRuleGroupReference),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyToTerraform = networkfirewallFirewallPolicyFirewallPolicyToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        stateful_default_actions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.statefulDefaultActions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        stateless_default_actions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.statelessDefaultActions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        stateless_fragment_default_actions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.statelessFragmentDefaultActions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        stateful_engine_options: {
            value: networkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsToHclTerraform(struct.statefulEngineOptions),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList",
        },
        stateful_rule_group_reference: {
            value: cdktf.listMapperHcl(networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToHclTerraform, true)(struct.statefulRuleGroupReference),
            isBlock: true,
            type: "set",
            storageClassType: "NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList",
        },
        stateless_custom_action: {
            value: cdktf.listMapperHcl(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToHclTerraform, true)(struct.statelessCustomAction),
            isBlock: true,
            type: "set",
            storageClassType: "NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList",
        },
        stateless_rule_group_reference: {
            value: cdktf.listMapperHcl(networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToHclTerraform, true)(struct.statelessRuleGroupReference),
            isBlock: true,
            type: "set",
            storageClassType: "NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallFirewallPolicyFirewallPolicyToHclTerraform = networkfirewallFirewallPolicyFirewallPolicyToHclTerraform;
class NetworkfirewallFirewallPolicyFirewallPolicyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // stateful_engine_options - computed: false, optional: true, required: false
        this._statefulEngineOptions = new NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference(this, "stateful_engine_options");
        // stateful_rule_group_reference - computed: false, optional: true, required: false
        this._statefulRuleGroupReference = new NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList(this, "stateful_rule_group_reference", true);
        // stateless_custom_action - computed: false, optional: true, required: false
        this._statelessCustomAction = new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList(this, "stateless_custom_action", true);
        // stateless_rule_group_reference - computed: false, optional: true, required: false
        this._statelessRuleGroupReference = new NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList(this, "stateless_rule_group_reference", true);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._statefulDefaultActions !== undefined) {
            hasAnyValues = true;
            internalValueResult.statefulDefaultActions = this._statefulDefaultActions;
        }
        if (this._statelessDefaultActions !== undefined) {
            hasAnyValues = true;
            internalValueResult.statelessDefaultActions = this._statelessDefaultActions;
        }
        if (this._statelessFragmentDefaultActions !== undefined) {
            hasAnyValues = true;
            internalValueResult.statelessFragmentDefaultActions = this._statelessFragmentDefaultActions;
        }
        if (this._statefulEngineOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statefulEngineOptions = this._statefulEngineOptions?.internalValue;
        }
        if (this._statefulRuleGroupReference?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statefulRuleGroupReference = this._statefulRuleGroupReference?.internalValue;
        }
        if (this._statelessCustomAction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statelessCustomAction = this._statelessCustomAction?.internalValue;
        }
        if (this._statelessRuleGroupReference?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statelessRuleGroupReference = this._statelessRuleGroupReference?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._statefulDefaultActions = undefined;
            this._statelessDefaultActions = undefined;
            this._statelessFragmentDefaultActions = undefined;
            this._statefulEngineOptions.internalValue = undefined;
            this._statefulRuleGroupReference.internalValue = undefined;
            this._statelessCustomAction.internalValue = undefined;
            this._statelessRuleGroupReference.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._statefulDefaultActions = value.statefulDefaultActions;
            this._statelessDefaultActions = value.statelessDefaultActions;
            this._statelessFragmentDefaultActions = value.statelessFragmentDefaultActions;
            this._statefulEngineOptions.internalValue = value.statefulEngineOptions;
            this._statefulRuleGroupReference.internalValue = value.statefulRuleGroupReference;
            this._statelessCustomAction.internalValue = value.statelessCustomAction;
            this._statelessRuleGroupReference.internalValue = value.statelessRuleGroupReference;
        }
    }
    get statefulDefaultActions() {
        return cdktf.Fn.tolist(this.getListAttribute('stateful_default_actions'));
    }
    set statefulDefaultActions(value) {
        this._statefulDefaultActions = value;
    }
    resetStatefulDefaultActions() {
        this._statefulDefaultActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statefulDefaultActionsInput() {
        return this._statefulDefaultActions;
    }
    get statelessDefaultActions() {
        return cdktf.Fn.tolist(this.getListAttribute('stateless_default_actions'));
    }
    set statelessDefaultActions(value) {
        this._statelessDefaultActions = value;
    }
    // Temporarily expose input value. Use with caution.
    get statelessDefaultActionsInput() {
        return this._statelessDefaultActions;
    }
    get statelessFragmentDefaultActions() {
        return cdktf.Fn.tolist(this.getListAttribute('stateless_fragment_default_actions'));
    }
    set statelessFragmentDefaultActions(value) {
        this._statelessFragmentDefaultActions = value;
    }
    // Temporarily expose input value. Use with caution.
    get statelessFragmentDefaultActionsInput() {
        return this._statelessFragmentDefaultActions;
    }
    get statefulEngineOptions() {
        return this._statefulEngineOptions;
    }
    putStatefulEngineOptions(value) {
        this._statefulEngineOptions.internalValue = value;
    }
    resetStatefulEngineOptions() {
        this._statefulEngineOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statefulEngineOptionsInput() {
        return this._statefulEngineOptions.internalValue;
    }
    get statefulRuleGroupReference() {
        return this._statefulRuleGroupReference;
    }
    putStatefulRuleGroupReference(value) {
        this._statefulRuleGroupReference.internalValue = value;
    }
    resetStatefulRuleGroupReference() {
        this._statefulRuleGroupReference.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statefulRuleGroupReferenceInput() {
        return this._statefulRuleGroupReference.internalValue;
    }
    get statelessCustomAction() {
        return this._statelessCustomAction;
    }
    putStatelessCustomAction(value) {
        this._statelessCustomAction.internalValue = value;
    }
    resetStatelessCustomAction() {
        this._statelessCustomAction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statelessCustomActionInput() {
        return this._statelessCustomAction.internalValue;
    }
    get statelessRuleGroupReference() {
        return this._statelessRuleGroupReference;
    }
    putStatelessRuleGroupReference(value) {
        this._statelessRuleGroupReference.internalValue = value;
    }
    resetStatelessRuleGroupReference() {
        this._statelessRuleGroupReference.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statelessRuleGroupReferenceInput() {
        return this._statelessRuleGroupReference.internalValue;
    }
}
exports.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference = NetworkfirewallFirewallPolicyFirewallPolicyOutputReference;
_m = JSII_RTTI_SYMBOL_1;
NetworkfirewallFirewallPolicyFirewallPolicyOutputReference[_m] = { fqn: "@cdktf/aws-cdk.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/networkfirewall_firewall_policy aws_networkfirewall_firewall_policy}
*/
class NetworkfirewallFirewallPolicy extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a NetworkfirewallFirewallPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkfirewallFirewallPolicy to import
    * @param importFromId The id of the existing NetworkfirewallFirewallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/networkfirewall_firewall_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkfirewallFirewallPolicy to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_networkfirewall_firewall_policy", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/networkfirewall_firewall_policy aws_networkfirewall_firewall_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallFirewallPolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_networkfirewall_firewall_policy',
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
        // firewall_policy - computed: false, optional: false, required: true
        this._firewallPolicy = new NetworkfirewallFirewallPolicyFirewallPolicyOutputReference(this, "firewall_policy");
        this._description = config.description;
        this._id = config.id;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._firewallPolicy.internalValue = config.firewallPolicy;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
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
    // update_token - computed: true, optional: false, required: false
    get updateToken() {
        return this.getStringAttribute('update_token');
    }
    get firewallPolicy() {
        return this._firewallPolicy;
    }
    putFirewallPolicy(value) {
        this._firewallPolicy.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get firewallPolicyInput() {
        return this._firewallPolicy.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            description: cdktf.stringToTerraform(this._description),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            firewall_policy: networkfirewallFirewallPolicyFirewallPolicyToTerraform(this._firewallPolicy.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            description: {
                value: cdktf.stringToHclTerraform(this._description),
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
            firewall_policy: {
                value: networkfirewallFirewallPolicyFirewallPolicyToHclTerraform(this._firewallPolicy.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "NetworkfirewallFirewallPolicyFirewallPolicyList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.NetworkfirewallFirewallPolicy = NetworkfirewallFirewallPolicy;
_o = JSII_RTTI_SYMBOL_1;
NetworkfirewallFirewallPolicy[_o] = { fqn: "@cdktf/aws-cdk.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
NetworkfirewallFirewallPolicy.tfResourceType = "aws_networkfirewall_firewall_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL25ldHdvcmtmaXJld2FsbC1maXJld2FsbC1wb2xpY3kvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSwrQkFBK0I7QUEwQy9CLFNBQWdCLDJFQUEyRSxDQUFDLE1BQTJKO0lBQ3JQLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDdkQsQ0FBQTtBQUNILENBQUM7QUFSRCxrS0FRQztBQUdELFNBQWdCLDhFQUE4RSxDQUFDLE1BQTJKO0lBQ3hQLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHO1FBQ1osVUFBVSxFQUFFO1lBQ1YsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO0tBQ0YsQ0FBQztJQUVGLDhCQUE4QjtJQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDNUgsQ0FBQztBQWhCRCx3S0FnQkM7QUFFRCxNQUFhLCtFQUFnRixTQUFRLEtBQUssQ0FBQyxhQUFhO0lBR3RIOzs7TUFHRTtJQUNGLFlBQW1CLGlCQUE2QyxFQUFFLGtCQUEwQjtRQUMxRixLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBUGpELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBUTlCLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDbEMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsRCxDQUFDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQW1GO1FBQzFHLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzlCLENBQUM7YUFDSSxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOztBQTNDSCwwS0E0Q0M7OztBQVlELFNBQWdCLGdGQUFnRixDQUFDLE1BQWtHO0lBQ2pNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkQsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO0tBQzNELENBQUE7QUFDSCxDQUFDO0FBVEQsNEtBU0M7QUFHRCxTQUFnQixtRkFBbUYsQ0FBQyxNQUFrRztJQUNwTSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztZQUNuRCxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELFlBQVksRUFBRTtZQUNaLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztZQUN0RCxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtLQUNGLENBQUM7SUFFRiw4QkFBOEI7SUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzVILENBQUM7QUF0QkQsa0xBc0JDO0FBRUQsTUFBYSxvRkFBcUYsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUkzSDs7Ozs7TUFLRTtJQUNGLFlBQW1CLGlCQUE2QyxFQUFFLGtCQUEwQixFQUFFLGtCQUEwQixFQUFFLHNCQUErQjtRQUN2SixLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQVZuRixrQkFBYSxHQUFHLEtBQUssQ0FBQztJQVc5QixDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDakMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoRCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3BDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEQsQ0FBQztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUE0RztRQUNuSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztRQUNoQyxDQUFDO2FBQ0ksSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7YUFDSSxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUN4QyxDQUFDO0lBQ0gsQ0FBQztJQUlELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsSUFBVyxRQUFRLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ00sYUFBYTtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOztBQTdFSCxvTEE4RUM7OztBQUVELE1BQWEseUVBQTBFLFNBQVEsS0FBSyxDQUFDLFdBQVc7SUFHOUc7Ozs7TUFJRTtJQUNGLFlBQXNCLGlCQUE2QyxFQUFZLGtCQUEwQixFQUFZLFFBQWlCO1FBQ3BJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQURsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRCO1FBQVksdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFRO1FBQVksYUFBUSxHQUFSLFFBQVEsQ0FBUztJQUV0SSxDQUFDO0lBRUQ7O01BRUU7SUFDSyxHQUFHLENBQUMsS0FBYTtRQUN0QixPQUFPLElBQUksb0ZBQW9GLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pLLENBQUM7O0FBakJILDhKQWtCQzs7O0FBUUQsU0FBZ0IsdUhBQXVILENBQUMsTUFBeUk7SUFDL1EsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVJELDBQQVFDO0FBR0QsU0FBZ0IsMEhBQTBILENBQUMsTUFBeUk7SUFDbFIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWixLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7WUFDaEQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7S0FDRixDQUFDO0lBRUYsOEJBQThCO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBaEJELGdRQWdCQztBQUVELE1BQWEsMkhBQTRILFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFJbEs7Ozs7O01BS0U7SUFDRixZQUFtQixpQkFBNkMsRUFBRSxrQkFBMEIsRUFBRSxrQkFBMEIsRUFBRSxzQkFBK0I7UUFDdkosS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFWbkYsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFXOUIsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDOUIsQ0FBQztRQUNELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzlCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUMsQ0FBQztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFtSjtRQUMxSyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBQ0ksSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7YUFDSSxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBSUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELElBQVcsS0FBSyxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7O0FBdkRILGtRQXdEQzs7O0FBRUQsTUFBYSxnSEFBaUgsU0FBUSxLQUFLLENBQUMsV0FBVztJQUdySjs7OztNQUlFO0lBQ0YsWUFBc0IsaUJBQTZDLEVBQVksa0JBQTBCLEVBQVksUUFBaUI7UUFDcEksS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBRGxDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEI7UUFBWSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVE7UUFBWSxhQUFRLEdBQVIsUUFBUSxDQUFTO0lBRXRJLENBQUM7SUFFRDs7TUFFRTtJQUNLLEdBQUcsQ0FBQyxLQUFhO1FBQ3RCLE9BQU8sSUFBSSwySEFBMkgsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaE4sQ0FBQzs7QUFqQkgsNE9Ba0JDOzs7QUFVRCxTQUFnQiw4R0FBOEcsQ0FBQyxNQUFpTztJQUM5VixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsdUhBQXVILEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztLQUM5SyxDQUFBO0FBQ0gsQ0FBQztBQVJELHdPQVFDO0FBR0QsU0FBZ0IsaUhBQWlILENBQUMsTUFBaU87SUFDalcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWixTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQywwSEFBMEgsRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1lBQy9LLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLEtBQUs7WUFDWCxnQkFBZ0IsRUFBRSxrSEFBa0g7U0FDckk7S0FDRixDQUFDO0lBRUYsOEJBQThCO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBaEJELDhPQWdCQztBQUVELE1BQWEsa0hBQW1ILFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFHeko7OztNQUdFO0lBQ0YsWUFBbUIsaUJBQTZDLEVBQUUsa0JBQTBCO1FBQzFGLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFQakQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUErQjlCLCtEQUErRDtRQUN2RCxlQUFVLEdBQUcsSUFBSSxnSEFBZ0gsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBeEJuSyxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLGFBQWEsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNqRCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQztRQUNqRSxDQUFDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXNIO1FBQzdJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUM1QyxDQUFDO2FBQ0ksQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDbEQsQ0FBQztJQUNILENBQUM7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDTSxZQUFZLENBQUMsS0FBeUk7UUFDM0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQzs7QUEzQ0gsZ1BBNENDOzs7QUFVRCxTQUFnQiwyRkFBMkYsQ0FBQyxNQUEyTDtJQUNyUyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wscUJBQXFCLEVBQUUsOEdBQThHLENBQUMsTUFBTyxDQUFDLG1CQUFtQixDQUFDO0tBQ25LLENBQUE7QUFDSCxDQUFDO0FBUkQsa01BUUM7QUFHRCxTQUFnQiw4RkFBOEYsQ0FBQyxNQUEyTDtJQUN4UyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLHFCQUFxQixFQUFFO1lBQ3JCLEtBQUssRUFBRSxpSEFBaUgsQ0FBQyxNQUFPLENBQUMsbUJBQW1CLENBQUM7WUFDckosT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsTUFBTTtZQUNaLGdCQUFnQixFQUFFLHlHQUF5RztTQUM1SDtLQUNGLENBQUM7SUFFRiw4QkFBOEI7SUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzVILENBQUM7QUFoQkQsd01BZ0JDO0FBRUQsTUFBYSwrRkFBZ0csU0FBUSxLQUFLLENBQUMsYUFBYTtJQUd0STs7O01BR0U7SUFDRixZQUFtQixpQkFBNkMsRUFBRSxrQkFBMEI7UUFDMUYsS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQVBqRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQStCOUIsMkVBQTJFO1FBQ25FLHlCQUFvQixHQUFHLElBQUksa0hBQWtILENBQUMsSUFBSSxFQUFFLHVCQUF1QixDQUFDLENBQUM7SUF4QnJMLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDM0QsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsYUFBYSxDQUFDO1FBQ3JGLENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBbUc7UUFDMUgsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDdEQsQ0FBQzthQUNJLENBQUM7WUFDSixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztRQUN0RSxDQUFDO0lBQ0gsQ0FBQztJQUlELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7SUFDTSxzQkFBc0IsQ0FBQyxLQUEwRztRQUN0SSxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNsRCxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztJQUNqRCxDQUFDOztBQTNDSCwwTUE0Q0M7OztBQWNELFNBQWdCLDJFQUEyRSxDQUFDLE1BQTZGO0lBQ3ZMLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsaUJBQWlCLEVBQUUsMkZBQTJGLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO0tBQ3pJLENBQUE7QUFDSCxDQUFDO0FBVEQsa0tBU0M7QUFHRCxTQUFnQiw4RUFBOEUsQ0FBQyxNQUE2RjtJQUMxTCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLFdBQVcsRUFBRTtZQUNYLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztZQUNyRCxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELGlCQUFpQixFQUFFO1lBQ2pCLEtBQUssRUFBRSw4RkFBOEYsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7WUFDL0gsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsTUFBTTtZQUNaLGdCQUFnQixFQUFFLHNGQUFzRjtTQUN6RztLQUNGLENBQUM7SUFFRiw4QkFBOEI7SUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzVILENBQUM7QUF0QkQsd0tBc0JDO0FBRUQsTUFBYSwrRUFBZ0YsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUl0SDs7Ozs7TUFLRTtJQUNGLFlBQW1CLGlCQUE2QyxFQUFFLGtCQUEwQixFQUFFLGtCQUEwQixFQUFFLHNCQUErQjtRQUN2SixLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQVZuRixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQThEOUIsdUVBQXVFO1FBQy9ELHNCQUFpQixHQUFHLElBQUksK0ZBQStGLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFwRDNKLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzlCLENBQUM7UUFDRCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNuQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BELENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDeEQsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxDQUFDO1FBQy9FLENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBdUc7UUFDOUgsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7WUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDbkQsQ0FBQzthQUNJLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO2FBQ0ksQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRSxDQUFDO0lBQ0gsQ0FBQztJQUlELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFDTSxtQkFBbUIsQ0FBQyxLQUF1RjtRQUNoSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztJQUM5QyxDQUFDOztBQTFFSCwwS0EyRUM7OztBQUVELE1BQWEsb0VBQXFFLFNBQVEsS0FBSyxDQUFDLFdBQVc7SUFHekc7Ozs7TUFJRTtJQUNGLFlBQXNCLGlCQUE2QyxFQUFZLGtCQUEwQixFQUFZLFFBQWlCO1FBQ3BJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQURsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRCO1FBQVksdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFRO1FBQVksYUFBUSxHQUFSLFFBQVEsQ0FBUztJQUV0SSxDQUFDO0lBRUQ7O01BRUU7SUFDSyxHQUFHLENBQUMsS0FBYTtRQUN0QixPQUFPLElBQUksK0VBQStFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BLLENBQUM7O0FBakJILG9KQWtCQzs7O0FBWUQsU0FBZ0IsaUZBQWlGLENBQUMsTUFBbUc7SUFDbk0sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNuRCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7S0FDM0QsQ0FBQTtBQUNILENBQUM7QUFURCw4S0FTQztBQUdELFNBQWdCLG9GQUFvRixDQUFDLE1BQW1HO0lBQ3RNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHO1FBQ1osUUFBUSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO1lBQ25ELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1lBQ3RELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO0tBQ0YsQ0FBQztJQUVGLDhCQUE4QjtJQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDNUgsQ0FBQztBQXRCRCxvTEFzQkM7QUFFRCxNQUFhLHFGQUFzRixTQUFRLEtBQUssQ0FBQyxhQUFhO0lBSTVIOzs7OztNQUtFO0lBQ0YsWUFBbUIsaUJBQTZDLEVBQUUsa0JBQTBCLEVBQUUsa0JBQTBCLEVBQUUsc0JBQStCO1FBQ3ZKLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBVm5GLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBVzlCLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzlCLENBQUM7UUFDRCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNqQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hELENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDcEMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0RCxDQUFDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQTZHO1FBQ3BJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLENBQUM7YUFDSSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQzthQUNJLENBQUM7WUFDSixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3hDLENBQUM7SUFDSCxDQUFDO0lBSUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxJQUFXLFFBQVEsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBSUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7O0FBMUVILHNMQTJFQzs7O0FBRUQsTUFBYSwwRUFBMkUsU0FBUSxLQUFLLENBQUMsV0FBVztJQUcvRzs7OztNQUlFO0lBQ0YsWUFBc0IsaUJBQTZDLEVBQVksa0JBQTBCLEVBQVksUUFBaUI7UUFDcEksS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBRGxDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEI7UUFBWSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVE7UUFBWSxhQUFRLEdBQVIsUUFBUSxDQUFTO0lBRXRJLENBQUM7SUFFRDs7TUFFRTtJQUNLLEdBQUcsQ0FBQyxLQUFhO1FBQ3RCLE9BQU8sSUFBSSxxRkFBcUYsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUssQ0FBQzs7QUFqQkgsZ0tBa0JDOzs7QUF3Q0QsU0FBZ0Isc0RBQXNELENBQUMsTUFBaUg7SUFDdEwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUMxRyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFPLENBQUMsdUJBQXVCLENBQUM7UUFDNUcsa0NBQWtDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTyxDQUFDLCtCQUErQixDQUFDO1FBQzdILHVCQUF1QixFQUFFLDJFQUEyRSxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUNuSSw2QkFBNkIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGdGQUFnRixFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU8sQ0FBQywwQkFBMEIsQ0FBQztRQUMzSyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDJFQUEyRSxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUMzSiw4QkFBOEIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGlGQUFpRixFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU8sQ0FBQywyQkFBMkIsQ0FBQztLQUMvSyxDQUFBO0FBQ0gsQ0FBQztBQWRELHdIQWNDO0FBR0QsU0FBZ0IseURBQXlELENBQUMsTUFBaUg7SUFDekwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWix3QkFBd0IsRUFBRTtZQUN4QixLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTyxDQUFDLHNCQUFzQixDQUFDO1lBQzdGLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLEtBQUs7WUFDWCxnQkFBZ0IsRUFBRSxZQUFZO1NBQy9CO1FBQ0QseUJBQXlCLEVBQUU7WUFDekIsS0FBSyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU8sQ0FBQyx1QkFBdUIsQ0FBQztZQUM5RixPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxLQUFLO1lBQ1gsZ0JBQWdCLEVBQUUsWUFBWTtTQUMvQjtRQUNELGtDQUFrQyxFQUFFO1lBQ2xDLEtBQUssRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFPLENBQUMsK0JBQStCLENBQUM7WUFDdEcsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsS0FBSztZQUNYLGdCQUFnQixFQUFFLFlBQVk7U0FDL0I7UUFDRCx1QkFBdUIsRUFBRTtZQUN2QixLQUFLLEVBQUUsOEVBQThFLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDO1lBQ3BILE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixnQkFBZ0IsRUFBRSxzRUFBc0U7U0FDekY7UUFDRCw2QkFBNkIsRUFBRTtZQUM3QixLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxtRkFBbUYsRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFPLENBQUMsMEJBQTBCLENBQUM7WUFDekosT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsS0FBSztZQUNYLGdCQUFnQixFQUFFLDJFQUEyRTtTQUM5RjtRQUNELHVCQUF1QixFQUFFO1lBQ3ZCLEtBQUssRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLDhFQUE4RSxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztZQUMvSSxPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxLQUFLO1lBQ1gsZ0JBQWdCLEVBQUUsc0VBQXNFO1NBQ3pGO1FBQ0QsOEJBQThCLEVBQUU7WUFDOUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsb0ZBQW9GLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTyxDQUFDLDJCQUEyQixDQUFDO1lBQzNKLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLEtBQUs7WUFDWCxnQkFBZ0IsRUFBRSw0RUFBNEU7U0FDL0Y7S0FDRixDQUFDO0lBRUYsOEJBQThCO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBcERELDhIQW9EQztBQUVELE1BQWEsMERBQTJELFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFHakc7OztNQUdFO0lBQ0YsWUFBbUIsaUJBQTZDLEVBQUUsa0JBQTBCO1FBQzFGLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFQakQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUE2RzlCLDZFQUE2RTtRQUNyRSwyQkFBc0IsR0FBRyxJQUFJLCtFQUErRSxDQUFDLElBQUksRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBZXRKLG1GQUFtRjtRQUMzRSxnQ0FBMkIsR0FBRyxJQUFJLHlFQUF5RSxDQUFDLElBQUksRUFBRSwrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQWVqSyw2RUFBNkU7UUFDckUsMkJBQXNCLEdBQUcsSUFBSSxvRUFBb0UsQ0FBQyxJQUFJLEVBQUUseUJBQXlCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFlakosb0ZBQW9GO1FBQzVFLGlDQUE0QixHQUFHLElBQUksMEVBQTBFLENBQUMsSUFBSSxFQUFFLGdDQUFnQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBdEpwSyxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDL0MsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUM7UUFDNUUsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLHdCQUF3QixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ2hELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDO1FBQzlFLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxnQ0FBZ0MsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4RCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLCtCQUErQixHQUFHLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQztRQUM5RixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzdELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLGFBQWEsQ0FBQztRQUN6RixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsMkJBQTJCLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ2xFLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixFQUFFLGFBQWEsQ0FBQztRQUNuRyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzdELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLGFBQWEsQ0FBQztRQUN6RixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsNEJBQTRCLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ25FLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixFQUFFLGFBQWEsQ0FBQztRQUNyRyxDQUFDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQThEO1FBQ3JGLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxTQUFTLENBQUM7WUFDekMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztZQUMxQyxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsU0FBUyxDQUFDO1lBQ2xELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQ3RELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQzNELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQ3RELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQzlELENBQUM7YUFDSSxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztZQUM1RCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDO1lBQzlELElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxLQUFLLENBQUMsK0JBQStCLENBQUM7WUFDOUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7WUFDeEUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsMEJBQTBCLENBQUM7WUFDbEYsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7WUFDeEUsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsMkJBQTJCLENBQUM7UUFDdEYsQ0FBQztJQUNILENBQUM7SUFJRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUNELElBQVcsc0JBQXNCLENBQUMsS0FBZTtRQUMvQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFDTSwyQkFBMkI7UUFDaEMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsMkJBQTJCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3RDLENBQUM7SUFJRCxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUNELElBQVcsdUJBQXVCLENBQUMsS0FBZTtRQUNoRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFDdkMsQ0FBQztJQUlELElBQVcsK0JBQStCO1FBQ3hDLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBQ0QsSUFBVywrQkFBK0IsQ0FBQyxLQUFlO1FBQ3hELElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxLQUFLLENBQUM7SUFDaEQsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG9DQUFvQztRQUM3QyxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQztJQUMvQyxDQUFDO0lBSUQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQztJQUNNLHdCQUF3QixDQUFDLEtBQXVFO1FBQ3JHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3BELENBQUM7SUFDTSwwQkFBMEI7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7SUFDbkQsQ0FBQztJQUlELElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDO0lBQzFDLENBQUM7SUFDTSw2QkFBNkIsQ0FBQyxLQUFrRztRQUNySSxJQUFJLENBQUMsMkJBQTJCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN6RCxDQUFDO0lBQ00sK0JBQStCO1FBQ3BDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzdELENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVywrQkFBK0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsYUFBYSxDQUFDO0lBQ3hELENBQUM7SUFJRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDO0lBQ00sd0JBQXdCLENBQUMsS0FBNkY7UUFDM0gsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDcEQsQ0FBQztJQUNNLDBCQUEwQjtRQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQztJQUNuRCxDQUFDO0lBSUQsSUFBVywyQkFBMkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUM7SUFDM0MsQ0FBQztJQUNNLDhCQUE4QixDQUFDLEtBQW1HO1FBQ3ZJLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzFELENBQUM7SUFDTSxnQ0FBZ0M7UUFDckMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDOUQsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGdDQUFnQztRQUN6QyxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLENBQUM7SUFDekQsQ0FBQzs7QUE1S0gsZ0lBNktDOzs7QUFFRDs7RUFFRTtBQUNGLE1BQWEsNkJBQThCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU94RSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQjs7Ozs7O01BTUU7SUFDSyxNQUFNLENBQUMsdUJBQXVCLENBQUMsS0FBZ0IsRUFBRSxVQUFrQixFQUFFLFlBQW9CLEVBQUUsUUFBa0M7UUFDOUgsT0FBTyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUUscUJBQXFCLEVBQUUscUNBQXFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzdKLENBQUM7SUFFTCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUEyQztRQUMxRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHFDQUFxQztZQUM1RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLGVBQWUsRUFBRSxRQUFRO2dCQUN6Qix5QkFBeUIsRUFBRSxRQUFRO2FBQ3BDO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWTtZQUNqQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7WUFDN0IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1NBQ3hCLENBQUMsQ0FBQztRQW9HTCxxRUFBcUU7UUFDN0Qsb0JBQWUsR0FBRyxJQUFJLDBEQUEwRCxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBcEdoSCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDN0QsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLHlEQUF5RDtJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBSUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUlELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFXLEVBQUUsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDTSxPQUFPO1FBQ1osSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUlELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFnQztRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFnQztRQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ00sWUFBWTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELGtFQUFrRTtJQUNsRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUlELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUNNLGlCQUFpQixDQUFDLEtBQWtEO1FBQ3pFLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7SUFDNUMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3ZELEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNyQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMzRCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xFLGVBQWUsRUFBRSxzREFBc0QsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztTQUM1RyxDQUFDO0lBQ0osQ0FBQztJQUVTLHVCQUF1QjtRQUMvQixNQUFNLEtBQUssR0FBRztZQUNaLFdBQVcsRUFBRTtnQkFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ3BELE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUMzQyxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDN0MsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNsRSxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsS0FBSztnQkFDWCxnQkFBZ0IsRUFBRSxXQUFXO2FBQzlCO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLEtBQUssRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3JFLE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxLQUFLO2dCQUNYLGdCQUFnQixFQUFFLFdBQVc7YUFDOUI7WUFDRCxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLHlEQUF5RCxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO2dCQUNwRyxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSxpREFBaUQ7YUFDcEU7U0FDRixDQUFDO1FBRUYsOEJBQThCO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFFLENBQUMsQ0FBQTtJQUM1SCxDQUFDOztBQXpOSCxzRUEwTkM7OztBQXhOQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLDRDQUFjLEdBQUcscUNBQXFDLEFBQXhDLENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG4vLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeVxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3kjZGVzY3JpcHRpb24gTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjZGVzY3JpcHRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5I2lkIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5I2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5I25hbWUgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5I3RhZ3MgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3kjdGFnc19hbGwgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjdGFnc19hbGx9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBmaXJld2FsbF9wb2xpY3kgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3kjZmlyZXdhbGxfcG9saWN5IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5I2ZpcmV3YWxsX3BvbGljeX1cbiAgKi9cbiAgcmVhZG9ubHkgZmlyZXdhbGxQb2xpY3k6IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3k7XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWZ1bEVuZ2luZU9wdGlvbnMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5I3J1bGVfb3JkZXIgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjcnVsZV9vcmRlcn1cbiAgKi9cbiAgcmVhZG9ubHkgcnVsZU9yZGVyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVmdWxFbmdpbmVPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlZnVsRW5naW5lT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWZ1bEVuZ2luZU9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcnVsZV9vcmRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ydWxlT3JkZXIpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWZ1bEVuZ2luZU9wdGlvbnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVmdWxFbmdpbmVPcHRpb25zT3V0cHV0UmVmZXJlbmNlIHwgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlZnVsRW5naW5lT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgcnVsZV9vcmRlcjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucnVsZU9yZGVyKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWZ1bEVuZ2luZU9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWZ1bEVuZ2luZU9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3J1bGVPcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ydWxlT3JkZXIgPSB0aGlzLl9ydWxlT3JkZXI7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVmdWxFbmdpbmVPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcnVsZU9yZGVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9ydWxlT3JkZXIgPSB2YWx1ZS5ydWxlT3JkZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gcnVsZV9vcmRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9ydWxlT3JkZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJ1bGVPcmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3J1bGVfb3JkZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJ1bGVPcmRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcnVsZU9yZGVyID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bGVPcmRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ydWxlT3JkZXI7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeSNwcmlvcml0eSBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeSNwcmlvcml0eX1cbiAgKi9cbiAgcmVhZG9ubHkgcHJpb3JpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3kjcmVzb3VyY2VfYXJuIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5I3Jlc291cmNlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgcmVzb3VyY2VBcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZVRvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZSB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByaW9yaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW9yaXR5KSxcbiAgICByZXNvdXJjZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VBcm4pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZSB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBwcmlvcml0eToge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEucHJpb3JpdHkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHJlc291cmNlX2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZSB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJpb3JpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJpb3JpdHkgPSB0aGlzLl9wcmlvcml0eTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlQXJuID0gdGhpcy5fcmVzb3VyY2VBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2UgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJpb3JpdHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXNvdXJjZUFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlLnByaW9yaXR5O1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB2YWx1ZS5yZXNvdXJjZUFybjtcbiAgICB9XG4gIH1cblxuICAvLyBwcmlvcml0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmlvcml0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwcmlvcml0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJpb3JpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJpb3JpdHkoKSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByaW9yaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Jlc291cmNlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlQXJuO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2VMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2VbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZU91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3kjdmFsdWUgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjdmFsdWV9XG4gICovXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uRGltZW5zaW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uRGltZW5zaW9uIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHZhbHVlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uRGltZW5zaW9uIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uRGltZW5zaW9uIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uRGltZW5zaW9uTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uRGltZW5zaW9uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbk91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb25PdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb24ge1xuICAvKipcbiAgKiBkaW1lbnNpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3kjZGltZW5zaW9uIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5I2RpbWVuc2lvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGltZW5zaW9uOiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uT3V0cHV0UmVmZXJlbmNlIHwgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRpbWVuc2lvbjogY2RrdGYubGlzdE1hcHBlcihuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb25Ub1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5kaW1lbnNpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbk91dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZGltZW5zaW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb25Ub0hjbFRlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5kaW1lbnNpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbkxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RpbWVuc2lvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kaW1lbnNpb24gPSB0aGlzLl9kaW1lbnNpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kaW1lbnNpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGltZW5zaW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5kaW1lbnNpb247XG4gICAgfVxuICB9XG5cbiAgLy8gZGltZW5zaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RpbWVuc2lvbiA9IG5ldyBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb25MaXN0KHRoaXMsIFwiZGltZW5zaW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGRpbWVuc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGltZW5zaW9uO1xuICB9XG4gIHB1YmxpYyBwdXREaW1lbnNpb24odmFsdWU6IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbltdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9kaW1lbnNpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkaW1lbnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGltZW5zaW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb24ge1xuICAvKipcbiAgKiBwdWJsaXNoX21ldHJpY19hY3Rpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3kjcHVibGlzaF9tZXRyaWNfYWN0aW9uIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5I3B1Ymxpc2hfbWV0cmljX2FjdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgcHVibGlzaE1ldHJpY0FjdGlvbjogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvbk91dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHB1Ymxpc2hfbWV0cmljX2FjdGlvbjogbmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5wdWJsaXNoTWV0cmljQWN0aW9uKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uT3V0cHV0UmVmZXJlbmNlIHwgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHB1Ymxpc2hfbWV0cmljX2FjdGlvbjoge1xuICAgICAgdmFsdWU6IG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEucHVibGlzaE1ldHJpY0FjdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9wdWJsaXNoTWV0cmljQWN0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnB1Ymxpc2hNZXRyaWNBY3Rpb24gPSB0aGlzLl9wdWJsaXNoTWV0cmljQWN0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9wdWJsaXNoTWV0cmljQWN0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3B1Ymxpc2hNZXRyaWNBY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnB1Ymxpc2hNZXRyaWNBY3Rpb247XG4gICAgfVxuICB9XG5cbiAgLy8gcHVibGlzaF9tZXRyaWNfYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3B1Ymxpc2hNZXRyaWNBY3Rpb24gPSBuZXcgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwicHVibGlzaF9tZXRyaWNfYWN0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IHB1Ymxpc2hNZXRyaWNBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3B1Ymxpc2hNZXRyaWNBY3Rpb247XG4gIH1cbiAgcHVibGljIHB1dFB1Ymxpc2hNZXRyaWNBY3Rpb24odmFsdWU6IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbikge1xuICAgIHRoaXMuX3B1Ymxpc2hNZXRyaWNBY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwdWJsaXNoTWV0cmljQWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3B1Ymxpc2hNZXRyaWNBY3Rpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeSNhY3Rpb25fbmFtZSBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeSNhY3Rpb25fbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgYWN0aW9uTmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBhY3Rpb25fZGVmaW5pdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeSNhY3Rpb25fZGVmaW5pdGlvbiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeSNhY3Rpb25fZGVmaW5pdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgYWN0aW9uRGVmaW5pdGlvbjogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjdGlvbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjdGlvbk5hbWUpLFxuICAgIGFjdGlvbl9kZWZpbml0aW9uOiBuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuYWN0aW9uRGVmaW5pdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYWN0aW9uX25hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFjdGlvbk5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGFjdGlvbl9kZWZpbml0aW9uOiB7XG4gICAgICB2YWx1ZTogbmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFjdGlvbkRlZmluaXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvbkxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY3Rpb25OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjdGlvbk5hbWUgPSB0aGlzLl9hY3Rpb25OYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYWN0aW9uRGVmaW5pdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hY3Rpb25EZWZpbml0aW9uID0gdGhpcy5fYWN0aW9uRGVmaW5pdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYWN0aW9uTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FjdGlvbkRlZmluaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hY3Rpb25OYW1lID0gdmFsdWUuYWN0aW9uTmFtZTtcbiAgICAgIHRoaXMuX2FjdGlvbkRlZmluaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFjdGlvbkRlZmluaXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gYWN0aW9uX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWN0aW9uTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjdGlvbl9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBhY3Rpb25OYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY3Rpb25OYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjdGlvbk5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uTmFtZTtcbiAgfVxuXG4gIC8vIGFjdGlvbl9kZWZpbml0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FjdGlvbkRlZmluaXRpb24gPSBuZXcgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJhY3Rpb25fZGVmaW5pdGlvblwiKTtcbiAgcHVibGljIGdldCBhY3Rpb25EZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3Rpb25EZWZpbml0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRBY3Rpb25EZWZpbml0aW9uKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvbikge1xuICAgIHRoaXMuX2FjdGlvbkRlZmluaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY3Rpb25EZWZpbml0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbkRlZmluaXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbk91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3kjcHJpb3JpdHkgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjcHJpb3JpdHl9XG4gICovXG4gIHJlYWRvbmx5IHByaW9yaXR5OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3kjcmVzb3VyY2VfYXJuIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5I3Jlc291cmNlX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgcmVzb3VyY2VBcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJpb3JpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucHJpb3JpdHkpLFxuICAgIHJlc291cmNlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUFybiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2UgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgcHJpb3JpdHk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByaW9yaXR5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICByZXNvdXJjZV9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZSB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJpb3JpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJpb3JpdHkgPSB0aGlzLl9wcmlvcml0eTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlQXJuID0gdGhpcy5fcmVzb3VyY2VBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByaW9yaXR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZS5wcmlvcml0eTtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdmFsdWUucmVzb3VyY2VBcm47XG4gICAgfVxuICB9XG5cbiAgLy8gcHJpb3JpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJpb3JpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncHJpb3JpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByaW9yaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmlvcml0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZXNvdXJjZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZUFybjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZUxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2VbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZU91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3kjc3RhdGVmdWxfZGVmYXVsdF9hY3Rpb25zIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5I3N0YXRlZnVsX2RlZmF1bHRfYWN0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdGVmdWxEZWZhdWx0QWN0aW9ucz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5I3N0YXRlbGVzc19kZWZhdWx0X2FjdGlvbnMgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjc3RhdGVsZXNzX2RlZmF1bHRfYWN0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdGVsZXNzRGVmYXVsdEFjdGlvbnM6IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5I3N0YXRlbGVzc19mcmFnbWVudF9kZWZhdWx0X2FjdGlvbnMgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjc3RhdGVsZXNzX2ZyYWdtZW50X2RlZmF1bHRfYWN0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdGVsZXNzRnJhZ21lbnREZWZhdWx0QWN0aW9uczogc3RyaW5nW107XG4gIC8qKlxuICAqIHN0YXRlZnVsX2VuZ2luZV9vcHRpb25zIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5I3N0YXRlZnVsX2VuZ2luZV9vcHRpb25zIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5I3N0YXRlZnVsX2VuZ2luZV9vcHRpb25zfVxuICAqL1xuICByZWFkb25seSBzdGF0ZWZ1bEVuZ2luZU9wdGlvbnM/OiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVmdWxFbmdpbmVPcHRpb25zO1xuICAvKipcbiAgKiBzdGF0ZWZ1bF9ydWxlX2dyb3VwX3JlZmVyZW5jZSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeSNzdGF0ZWZ1bF9ydWxlX2dyb3VwX3JlZmVyZW5jZSBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeSNzdGF0ZWZ1bF9ydWxlX2dyb3VwX3JlZmVyZW5jZX1cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2U/OiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2VbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBzdGF0ZWxlc3NfY3VzdG9tX2FjdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeSNzdGF0ZWxlc3NfY3VzdG9tX2FjdGlvbiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeSNzdGF0ZWxlc3NfY3VzdG9tX2FjdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgc3RhdGVsZXNzQ3VzdG9tQWN0aW9uPzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbltdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHN0YXRlbGVzc19ydWxlX2dyb3VwX3JlZmVyZW5jZSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeSNzdGF0ZWxlc3NfcnVsZV9ncm91cF9yZWZlcmVuY2UgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kjc3RhdGVsZXNzX3J1bGVfZ3JvdXBfcmVmZXJlbmNlfVxuICAqL1xuICByZWFkb25seSBzdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2U/OiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5T3V0cHV0UmVmZXJlbmNlIHwgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZWZ1bF9kZWZhdWx0X2FjdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnN0YXRlZnVsRGVmYXVsdEFjdGlvbnMpLFxuICAgIHN0YXRlbGVzc19kZWZhdWx0X2FjdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnN0YXRlbGVzc0RlZmF1bHRBY3Rpb25zKSxcbiAgICBzdGF0ZWxlc3NfZnJhZ21lbnRfZGVmYXVsdF9hY3Rpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5zdGF0ZWxlc3NGcmFnbWVudERlZmF1bHRBY3Rpb25zKSxcbiAgICBzdGF0ZWZ1bF9lbmdpbmVfb3B0aW9uczogbmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlZnVsRW5naW5lT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdGVmdWxFbmdpbmVPcHRpb25zKSxcbiAgICBzdGF0ZWZ1bF9ydWxlX2dyb3VwX3JlZmVyZW5jZTogY2RrdGYubGlzdE1hcHBlcihuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2VUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5zdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZSksXG4gICAgc3RhdGVsZXNzX2N1c3RvbV9hY3Rpb246IGNka3RmLmxpc3RNYXBwZXIobmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvblRvVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnN0YXRlbGVzc0N1c3RvbUFjdGlvbiksXG4gICAgc3RhdGVsZXNzX3J1bGVfZ3JvdXBfcmVmZXJlbmNlOiBjZGt0Zi5saXN0TWFwcGVyKG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2VUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5zdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2UpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5T3V0cHV0UmVmZXJlbmNlIHwgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgc3RhdGVmdWxfZGVmYXVsdF9hY3Rpb25zOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuc3RhdGVmdWxEZWZhdWx0QWN0aW9ucyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICAgIHN0YXRlbGVzc19kZWZhdWx0X2FjdGlvbnM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5zdGF0ZWxlc3NEZWZhdWx0QWN0aW9ucyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICAgIHN0YXRlbGVzc19mcmFnbWVudF9kZWZhdWx0X2FjdGlvbnM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5zdGF0ZWxlc3NGcmFnbWVudERlZmF1bHRBY3Rpb25zKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gICAgc3RhdGVmdWxfZW5naW5lX29wdGlvbnM6IHtcbiAgICAgIHZhbHVlOiBuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVmdWxFbmdpbmVPcHRpb25zVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zdGF0ZWZ1bEVuZ2luZU9wdGlvbnMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVmdWxFbmdpbmVPcHRpb25zTGlzdFwiLFxuICAgIH0sXG4gICAgc3RhdGVmdWxfcnVsZV9ncm91cF9yZWZlcmVuY2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZVRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2VMaXN0XCIsXG4gICAgfSxcbiAgICBzdGF0ZWxlc3NfY3VzdG9tX2FjdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2wobmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvblRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnN0YXRlbGVzc0N1c3RvbUFjdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkxpc3RcIixcbiAgICB9LFxuICAgIHN0YXRlbGVzc19ydWxlX2dyb3VwX3JlZmVyZW5jZToge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2wobmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZVRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZSksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZUxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fc3RhdGVmdWxEZWZhdWx0QWN0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdGF0ZWZ1bERlZmF1bHRBY3Rpb25zID0gdGhpcy5fc3RhdGVmdWxEZWZhdWx0QWN0aW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0YXRlbGVzc0RlZmF1bHRBY3Rpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXRlbGVzc0RlZmF1bHRBY3Rpb25zID0gdGhpcy5fc3RhdGVsZXNzRGVmYXVsdEFjdGlvbnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGF0ZWxlc3NGcmFnbWVudERlZmF1bHRBY3Rpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXRlbGVzc0ZyYWdtZW50RGVmYXVsdEFjdGlvbnMgPSB0aGlzLl9zdGF0ZWxlc3NGcmFnbWVudERlZmF1bHRBY3Rpb25zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhdGVmdWxFbmdpbmVPcHRpb25zPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXRlZnVsRW5naW5lT3B0aW9ucyA9IHRoaXMuX3N0YXRlZnVsRW5naW5lT3B0aW9ucz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlID0gdGhpcy5fc3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2U/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGF0ZWxlc3NDdXN0b21BY3Rpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhdGVsZXNzQ3VzdG9tQWN0aW9uID0gdGhpcy5fc3RhdGVsZXNzQ3VzdG9tQWN0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZSA9IHRoaXMuX3N0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3kgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9zdGF0ZWZ1bERlZmF1bHRBY3Rpb25zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RhdGVsZXNzRGVmYXVsdEFjdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGF0ZWxlc3NGcmFnbWVudERlZmF1bHRBY3Rpb25zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RhdGVmdWxFbmdpbmVPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RhdGVsZXNzQ3VzdG9tQWN0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2UuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fc3RhdGVmdWxEZWZhdWx0QWN0aW9ucyA9IHZhbHVlLnN0YXRlZnVsRGVmYXVsdEFjdGlvbnM7XG4gICAgICB0aGlzLl9zdGF0ZWxlc3NEZWZhdWx0QWN0aW9ucyA9IHZhbHVlLnN0YXRlbGVzc0RlZmF1bHRBY3Rpb25zO1xuICAgICAgdGhpcy5fc3RhdGVsZXNzRnJhZ21lbnREZWZhdWx0QWN0aW9ucyA9IHZhbHVlLnN0YXRlbGVzc0ZyYWdtZW50RGVmYXVsdEFjdGlvbnM7XG4gICAgICB0aGlzLl9zdGF0ZWZ1bEVuZ2luZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnN0YXRlZnVsRW5naW5lT3B0aW9ucztcbiAgICAgIHRoaXMuX3N0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZTtcbiAgICAgIHRoaXMuX3N0YXRlbGVzc0N1c3RvbUFjdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc3RhdGVsZXNzQ3VzdG9tQWN0aW9uO1xuICAgICAgdGhpcy5fc3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2U7XG4gICAgfVxuICB9XG5cbiAgLy8gc3RhdGVmdWxfZGVmYXVsdF9hY3Rpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXRlZnVsRGVmYXVsdEFjdGlvbnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc3RhdGVmdWxEZWZhdWx0QWN0aW9ucygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3RhdGVmdWxfZGVmYXVsdF9hY3Rpb25zJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhdGVmdWxEZWZhdWx0QWN0aW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zdGF0ZWZ1bERlZmF1bHRBY3Rpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RhdGVmdWxEZWZhdWx0QWN0aW9ucygpIHtcbiAgICB0aGlzLl9zdGF0ZWZ1bERlZmF1bHRBY3Rpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0ZWZ1bERlZmF1bHRBY3Rpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlZnVsRGVmYXVsdEFjdGlvbnM7XG4gIH1cblxuICAvLyBzdGF0ZWxlc3NfZGVmYXVsdF9hY3Rpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N0YXRlbGVzc0RlZmF1bHRBY3Rpb25zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHN0YXRlbGVzc0RlZmF1bHRBY3Rpb25zKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdGF0ZWxlc3NfZGVmYXVsdF9hY3Rpb25zJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhdGVsZXNzRGVmYXVsdEFjdGlvbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3RhdGVsZXNzRGVmYXVsdEFjdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdGVsZXNzRGVmYXVsdEFjdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVsZXNzRGVmYXVsdEFjdGlvbnM7XG4gIH1cblxuICAvLyBzdGF0ZWxlc3NfZnJhZ21lbnRfZGVmYXVsdF9hY3Rpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N0YXRlbGVzc0ZyYWdtZW50RGVmYXVsdEFjdGlvbnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc3RhdGVsZXNzRnJhZ21lbnREZWZhdWx0QWN0aW9ucygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3RhdGVsZXNzX2ZyYWdtZW50X2RlZmF1bHRfYWN0aW9ucycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXRlbGVzc0ZyYWdtZW50RGVmYXVsdEFjdGlvbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3RhdGVsZXNzRnJhZ21lbnREZWZhdWx0QWN0aW9ucyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0ZWxlc3NGcmFnbWVudERlZmF1bHRBY3Rpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlbGVzc0ZyYWdtZW50RGVmYXVsdEFjdGlvbnM7XG4gIH1cblxuICAvLyBzdGF0ZWZ1bF9lbmdpbmVfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGF0ZWZ1bEVuZ2luZU9wdGlvbnMgPSBuZXcgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlZnVsRW5naW5lT3B0aW9uc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInN0YXRlZnVsX2VuZ2luZV9vcHRpb25zXCIpO1xuICBwdWJsaWMgZ2V0IHN0YXRlZnVsRW5naW5lT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVmdWxFbmdpbmVPcHRpb25zO1xuICB9XG4gIHB1YmxpYyBwdXRTdGF0ZWZ1bEVuZ2luZU9wdGlvbnModmFsdWU6IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWZ1bEVuZ2luZU9wdGlvbnMpIHtcbiAgICB0aGlzLl9zdGF0ZWZ1bEVuZ2luZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXRlZnVsRW5naW5lT3B0aW9ucygpIHtcbiAgICB0aGlzLl9zdGF0ZWZ1bEVuZ2luZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdGVmdWxFbmdpbmVPcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlZnVsRW5naW5lT3B0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc3RhdGVmdWxfcnVsZV9ncm91cF9yZWZlcmVuY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2UgPSBuZXcgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlTGlzdCh0aGlzLCBcInN0YXRlZnVsX3J1bGVfZ3JvdXBfcmVmZXJlbmNlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZTtcbiAgfVxuICBwdWJsaWMgcHV0U3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2UodmFsdWU6IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZVtdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2UoKSB7XG4gICAgdGhpcy5fc3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2UuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2UuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHN0YXRlbGVzc19jdXN0b21fYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXRlbGVzc0N1c3RvbUFjdGlvbiA9IG5ldyBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uTGlzdCh0aGlzLCBcInN0YXRlbGVzc19jdXN0b21fYWN0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHN0YXRlbGVzc0N1c3RvbUFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVsZXNzQ3VzdG9tQWN0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRTdGF0ZWxlc3NDdXN0b21BY3Rpb24odmFsdWU6IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc3RhdGVsZXNzQ3VzdG9tQWN0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGF0ZWxlc3NDdXN0b21BY3Rpb24oKSB7XG4gICAgdGhpcy5fc3RhdGVsZXNzQ3VzdG9tQWN0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXRlbGVzc0N1c3RvbUFjdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZWxlc3NDdXN0b21BY3Rpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHN0YXRlbGVzc19ydWxlX2dyb3VwX3JlZmVyZW5jZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2UgPSBuZXcgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZUxpc3QodGhpcywgXCJzdGF0ZWxlc3NfcnVsZV9ncm91cF9yZWZlcmVuY2VcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2U7XG4gIH1cbiAgcHVibGljIHB1dFN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZVtdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZSgpIHtcbiAgICB0aGlzLl9zdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2UuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZS5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5IGF3c19uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5fVxuKi9cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeVwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeSByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeSB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3kgdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9maXJld2FsbF9wb2xpY3kjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5IHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5XCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeSBhd3NfbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeX0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBjb25maWcuZGVzY3JpcHRpb247XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fZmlyZXdhbGxQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5maXJld2FsbFBvbGljeTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFncycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzX2FsbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHVwZGF0ZV90b2tlbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVwZGF0ZVRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXBkYXRlX3Rva2VuJyk7XG4gIH1cblxuICAvLyBmaXJld2FsbF9wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZmlyZXdhbGxQb2xpY3kgPSBuZXcgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImZpcmV3YWxsX3BvbGljeVwiKTtcbiAgcHVibGljIGdldCBmaXJld2FsbFBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlyZXdhbGxQb2xpY3k7XG4gIH1cbiAgcHVibGljIHB1dEZpcmV3YWxsUG9saWN5KHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5KSB7XG4gICAgdGhpcy5fZmlyZXdhbGxQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaXJld2FsbFBvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maXJld2FsbFBvbGljeS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBmaXJld2FsbF9wb2xpY3k6IG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lUb1RlcnJhZm9ybSh0aGlzLl9maXJld2FsbFBvbGljeS5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0YWdzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgdGFnc19hbGw6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICBmaXJld2FsbF9wb2xpY3k6IHtcbiAgICAgICAgdmFsdWU6IG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lUb0hjbFRlcnJhZm9ybSh0aGlzLl9maXJld2FsbFBvbGljeS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeUxpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==