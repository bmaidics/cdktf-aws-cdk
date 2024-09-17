"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13;
Object.defineProperty(exports, "__esModule", { value: true });
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationList = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionList = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionList = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleList = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionList = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference = exports.networkfirewallRuleGroupRuleGroupRuleVariablesToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsList = exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference = exports.networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference = exports.networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsList = exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference = exports.networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference = exports.networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform = void 0;
exports.NetworkfirewallRuleGroup = exports.NetworkfirewallRuleGroupRuleGroupOutputReference = exports.networkfirewallRuleGroupRuleGroupToHclTerraform = exports.networkfirewallRuleGroupRuleGroupToTerraform = exports.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference = exports.networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToHclTerraform = exports.networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleList = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagList = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortList = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceList = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToHclTerraform = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortList = exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortOutputReference = exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToHclTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        definition: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.definition),
    };
}
exports.networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform = networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform;
function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        definition: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.definition),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToHclTerraform = networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference extends cdktf.ComplexObject {
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
        if (this._definition !== undefined) {
            hasAnyValues = true;
            internalValueResult.definition = this._definition;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._definition = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._definition = value.definition;
        }
    }
    get definition() {
        return cdktf.Fn.tolist(this.getListAttribute('definition'));
    }
    set definition(value) {
        this._definition = value;
    }
    // Temporarily expose input value. Use with caution.
    get definitionInput() {
        return this._definition;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference = NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference;
_a = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference[_a] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        ip_set: networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform(struct.ipSet),
    };
}
exports.networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform = networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform;
function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToHclTerraform(struct) {
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
        ip_set: {
            value: networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToHclTerraform(struct.ipSet),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToHclTerraform = networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // ip_set - computed: false, optional: false, required: true
        this._ipSet = new NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference(this, "ip_set");
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
        if (this._ipSet?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipSet = this._ipSet?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._ipSet.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._ipSet.internalValue = value.ipSet;
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
    get ipSet() {
        return this._ipSet;
    }
    putIpSet(value) {
        this._ipSet.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get ipSetInput() {
        return this._ipSet.internalValue;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference = NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference[_b] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference", version: "0.0.0" };
class NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsList extends cdktf.ComplexList {
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
        return new NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsList = NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsList;
_c = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsList[_c] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsList", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        definition: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.definition),
    };
}
exports.networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform = networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform;
function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        definition: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.definition),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToHclTerraform = networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference extends cdktf.ComplexObject {
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
        if (this._definition !== undefined) {
            hasAnyValues = true;
            internalValueResult.definition = this._definition;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._definition = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._definition = value.definition;
        }
    }
    get definition() {
        return cdktf.Fn.tolist(this.getListAttribute('definition'));
    }
    set definition(value) {
        this._definition = value;
    }
    // Temporarily expose input value. Use with caution.
    get definitionInput() {
        return this._definition;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference = NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference;
_d = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference[_d] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        port_set: networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform(struct.portSet),
    };
}
exports.networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform = networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform;
function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToHclTerraform(struct) {
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
        port_set: {
            value: networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToHclTerraform(struct.portSet),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToHclTerraform = networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // port_set - computed: false, optional: false, required: true
        this._portSet = new NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference(this, "port_set");
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
        if (this._portSet?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.portSet = this._portSet?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._portSet.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._portSet.internalValue = value.portSet;
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
    get portSet() {
        return this._portSet;
    }
    putPortSet(value) {
        this._portSet.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get portSetInput() {
        return this._portSet.internalValue;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference = NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference;
_e = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference[_e] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference", version: "0.0.0" };
class NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsList extends cdktf.ComplexList {
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
        return new NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsList = NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsList;
_f = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsList[_f] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsList", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip_sets: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform, true)(struct.ipSets),
        port_sets: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform, true)(struct.portSets),
    };
}
exports.networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform = networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform;
function networkfirewallRuleGroupRuleGroupRuleVariablesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ip_sets: {
            value: cdktf.listMapperHcl(networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToHclTerraform, true)(struct.ipSets),
            isBlock: true,
            type: "set",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsList",
        },
        port_sets: {
            value: cdktf.listMapperHcl(networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToHclTerraform, true)(struct.portSets),
            isBlock: true,
            type: "set",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRuleVariablesToHclTerraform = networkfirewallRuleGroupRuleGroupRuleVariablesToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // ip_sets - computed: false, optional: true, required: false
        this._ipSets = new NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsList(this, "ip_sets", true);
        // port_sets - computed: false, optional: true, required: false
        this._portSets = new NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsList(this, "port_sets", true);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._ipSets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipSets = this._ipSets?.internalValue;
        }
        if (this._portSets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.portSets = this._portSets?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._ipSets.internalValue = undefined;
            this._portSets.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._ipSets.internalValue = value.ipSets;
            this._portSets.internalValue = value.portSets;
        }
    }
    get ipSets() {
        return this._ipSets;
    }
    putIpSets(value) {
        this._ipSets.internalValue = value;
    }
    resetIpSets() {
        this._ipSets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipSetsInput() {
        return this._ipSets.internalValue;
    }
    get portSets() {
        return this._portSets;
    }
    putPortSets(value) {
        this._portSets.internalValue = value;
    }
    resetPortSets() {
        this._portSets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portSetsInput() {
        return this._portSets.internalValue;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference = NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference;
_g = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference[_g] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        generated_rules_type: cdktf.stringToTerraform(struct.generatedRulesType),
        target_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.targetTypes),
        targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.targets),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        generated_rules_type: {
            value: cdktf.stringToHclTerraform(struct.generatedRulesType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_types: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.targetTypes),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        targets: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.targets),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference extends cdktf.ComplexObject {
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
        if (this._generatedRulesType !== undefined) {
            hasAnyValues = true;
            internalValueResult.generatedRulesType = this._generatedRulesType;
        }
        if (this._targetTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetTypes = this._targetTypes;
        }
        if (this._targets !== undefined) {
            hasAnyValues = true;
            internalValueResult.targets = this._targets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._generatedRulesType = undefined;
            this._targetTypes = undefined;
            this._targets = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._generatedRulesType = value.generatedRulesType;
            this._targetTypes = value.targetTypes;
            this._targets = value.targets;
        }
    }
    get generatedRulesType() {
        return this.getStringAttribute('generated_rules_type');
    }
    set generatedRulesType(value) {
        this._generatedRulesType = value;
    }
    // Temporarily expose input value. Use with caution.
    get generatedRulesTypeInput() {
        return this._generatedRulesType;
    }
    get targetTypes() {
        return cdktf.Fn.tolist(this.getListAttribute('target_types'));
    }
    set targetTypes(value) {
        this._targetTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetTypesInput() {
        return this._targetTypes;
    }
    get targets() {
        return cdktf.Fn.tolist(this.getListAttribute('targets'));
    }
    set targets(value) {
        this._targets = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetsInput() {
        return this._targets;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference;
_h = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference[_h] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destination: cdktf.stringToTerraform(struct.destination),
        destination_port: cdktf.stringToTerraform(struct.destinationPort),
        direction: cdktf.stringToTerraform(struct.direction),
        protocol: cdktf.stringToTerraform(struct.protocol),
        source: cdktf.stringToTerraform(struct.source),
        source_port: cdktf.stringToTerraform(struct.sourcePort),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        destination: {
            value: cdktf.stringToHclTerraform(struct.destination),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_port: {
            value: cdktf.stringToHclTerraform(struct.destinationPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktf.stringToHclTerraform(struct.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source: {
            value: cdktf.stringToHclTerraform(struct.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_port: {
            value: cdktf.stringToHclTerraform(struct.sourcePort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._destination !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination;
        }
        if (this._destinationPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPort = this._destinationPort;
        }
        if (this._direction !== undefined) {
            hasAnyValues = true;
            internalValueResult.direction = this._direction;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        if (this._sourcePort !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePort = this._sourcePort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._destination = undefined;
            this._destinationPort = undefined;
            this._direction = undefined;
            this._protocol = undefined;
            this._source = undefined;
            this._sourcePort = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._destination = value.destination;
            this._destinationPort = value.destinationPort;
            this._direction = value.direction;
            this._protocol = value.protocol;
            this._source = value.source;
            this._sourcePort = value.sourcePort;
        }
    }
    get destination() {
        return this.getStringAttribute('destination');
    }
    set destination(value) {
        this._destination = value;
    }
    // Temporarily expose input value. Use with caution.
    get destinationInput() {
        return this._destination;
    }
    get destinationPort() {
        return this.getStringAttribute('destination_port');
    }
    set destinationPort(value) {
        this._destinationPort = value;
    }
    // Temporarily expose input value. Use with caution.
    get destinationPortInput() {
        return this._destinationPort;
    }
    get direction() {
        return this.getStringAttribute('direction');
    }
    set direction(value) {
        this._direction = value;
    }
    // Temporarily expose input value. Use with caution.
    get directionInput() {
        return this._direction;
    }
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    set protocol(value) {
        this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    get protocolInput() {
        return this._protocol;
    }
    get source() {
        return this.getStringAttribute('source');
    }
    set source(value) {
        this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source;
    }
    get sourcePort() {
        return this.getStringAttribute('source_port');
    }
    set sourcePort(value) {
        this._sourcePort = value;
    }
    // Temporarily expose input value. Use with caution.
    get sourcePortInput() {
        return this._sourcePort;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference;
_j = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference[_j] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        keyword: cdktf.stringToTerraform(struct.keyword),
        settings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.settings),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        keyword: {
            value: cdktf.stringToHclTerraform(struct.keyword),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        settings: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.settings),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionOutputReference extends cdktf.ComplexObject {
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
        if (this._keyword !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyword = this._keyword;
        }
        if (this._settings !== undefined) {
            hasAnyValues = true;
            internalValueResult.settings = this._settings;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyword = undefined;
            this._settings = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyword = value.keyword;
            this._settings = value.settings;
        }
    }
    get keyword() {
        return this.getStringAttribute('keyword');
    }
    set keyword(value) {
        this._keyword = value;
    }
    // Temporarily expose input value. Use with caution.
    get keywordInput() {
        return this._keyword;
    }
    get settings() {
        return cdktf.Fn.tolist(this.getListAttribute('settings'));
    }
    set settings(value) {
        this._settings = value;
    }
    resetSettings() {
        this._settings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get settingsInput() {
        return this._settings;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionOutputReference;
_k = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionOutputReference[_k] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionOutputReference", version: "0.0.0" };
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionList extends cdktf.ComplexList {
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
        return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionList = NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionList;
_l = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionList[_l] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionList", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        header: networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform(struct.header),
        rule_option: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform, true)(struct.ruleOption),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToHclTerraform(struct) {
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
        header: {
            value: networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToHclTerraform(struct.header),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderList",
        },
        rule_option: {
            value: cdktf.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToHclTerraform, true)(struct.ruleOption),
            isBlock: true,
            type: "set",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // header - computed: false, optional: false, required: true
        this._header = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference(this, "header");
        // rule_option - computed: false, optional: false, required: true
        this._ruleOption = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionList(this, "rule_option", true);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._header?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header?.internalValue;
        }
        if (this._ruleOption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleOption = this._ruleOption?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._header.internalValue = undefined;
            this._ruleOption.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._header.internalValue = value.header;
            this._ruleOption.internalValue = value.ruleOption;
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
    get header() {
        return this._header;
    }
    putHeader(value) {
        this._header.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerInput() {
        return this._header.internalValue;
    }
    get ruleOption() {
        return this._ruleOption;
    }
    putRuleOption(value) {
        this._ruleOption.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get ruleOptionInput() {
        return this._ruleOption.internalValue;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleOutputReference;
_m = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleOutputReference[_m] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleOutputReference", version: "0.0.0" };
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleList extends cdktf.ComplexList {
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
        return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleList = NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleList;
_o = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleList[_o] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleList", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct) {
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
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToHclTerraform(struct) {
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
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionOutputReference extends cdktf.ComplexObject {
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
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionOutputReference;
_p = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionOutputReference[_p] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionOutputReference", version: "0.0.0" };
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionList extends cdktf.ComplexList {
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
        return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionList = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionList;
_q = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionList[_q] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionList", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dimension: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform, true)(struct.dimension),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        dimension: {
            value: cdktf.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToHclTerraform, true)(struct.dimension),
            isBlock: true,
            type: "set",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // dimension - computed: false, optional: false, required: true
        this._dimension = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionList(this, "dimension", true);
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
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference;
_r = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference[_r] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        publish_metric_action: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform(struct.publishMetricAction),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        publish_metric_action: {
            value: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToHclTerraform(struct.publishMetricAction),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // publish_metric_action - computed: false, optional: false, required: true
        this._publishMetricAction = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference(this, "publish_metric_action");
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
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference;
_s = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference[_s] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action_name: cdktf.stringToTerraform(struct.actionName),
        action_definition: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform(struct.actionDefinition),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToHclTerraform(struct) {
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
            value: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToHclTerraform(struct.actionDefinition),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionOutputReference extends cdktf.ComplexObject {
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
        this._actionDefinition = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference(this, "action_definition");
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
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionOutputReference;
_t = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionOutputReference[_t] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionOutputReference", version: "0.0.0" };
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionList extends cdktf.ComplexList {
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
        return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionList = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionList;
_u = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionList[_u] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionList", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address_definition: cdktf.stringToTerraform(struct.addressDefinition),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        address_definition: {
            value: cdktf.stringToHclTerraform(struct.addressDefinition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationOutputReference extends cdktf.ComplexObject {
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
        if (this._addressDefinition !== undefined) {
            hasAnyValues = true;
            internalValueResult.addressDefinition = this._addressDefinition;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addressDefinition = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addressDefinition = value.addressDefinition;
        }
    }
    get addressDefinition() {
        return this.getStringAttribute('address_definition');
    }
    set addressDefinition(value) {
        this._addressDefinition = value;
    }
    // Temporarily expose input value. Use with caution.
    get addressDefinitionInput() {
        return this._addressDefinition;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationOutputReference;
_v = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationOutputReference[_v] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationOutputReference", version: "0.0.0" };
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationList extends cdktf.ComplexList {
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
        return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationList = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationList;
_w = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationList[_w] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationList", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        from_port: cdktf.numberToTerraform(struct.fromPort),
        to_port: cdktf.numberToTerraform(struct.toPort),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        from_port: {
            value: cdktf.numberToHclTerraform(struct.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        to_port: {
            value: cdktf.numberToHclTerraform(struct.toPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortOutputReference extends cdktf.ComplexObject {
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
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromPort = undefined;
            this._toPort = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromPort = value.fromPort;
            this._toPort = value.toPort;
        }
    }
    get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    set fromPort(value) {
        this._fromPort = value;
    }
    // Temporarily expose input value. Use with caution.
    get fromPortInput() {
        return this._fromPort;
    }
    get toPort() {
        return this.getNumberAttribute('to_port');
    }
    set toPort(value) {
        this._toPort = value;
    }
    resetToPort() {
        this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get toPortInput() {
        return this._toPort;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortOutputReference;
_x = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortOutputReference[_x] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortOutputReference", version: "0.0.0" };
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortList extends cdktf.ComplexList {
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
        return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortList = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortList;
_y = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortList[_y] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortList", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address_definition: cdktf.stringToTerraform(struct.addressDefinition),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        address_definition: {
            value: cdktf.stringToHclTerraform(struct.addressDefinition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceOutputReference extends cdktf.ComplexObject {
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
        if (this._addressDefinition !== undefined) {
            hasAnyValues = true;
            internalValueResult.addressDefinition = this._addressDefinition;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addressDefinition = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addressDefinition = value.addressDefinition;
        }
    }
    get addressDefinition() {
        return this.getStringAttribute('address_definition');
    }
    set addressDefinition(value) {
        this._addressDefinition = value;
    }
    // Temporarily expose input value. Use with caution.
    get addressDefinitionInput() {
        return this._addressDefinition;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceOutputReference;
_z = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceOutputReference[_z] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceOutputReference", version: "0.0.0" };
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceList extends cdktf.ComplexList {
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
        return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceList = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceList;
_0 = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceList[_0] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceList", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        from_port: cdktf.numberToTerraform(struct.fromPort),
        to_port: cdktf.numberToTerraform(struct.toPort),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        from_port: {
            value: cdktf.numberToHclTerraform(struct.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        to_port: {
            value: cdktf.numberToHclTerraform(struct.toPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortOutputReference extends cdktf.ComplexObject {
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
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromPort = undefined;
            this._toPort = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromPort = value.fromPort;
            this._toPort = value.toPort;
        }
    }
    get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    set fromPort(value) {
        this._fromPort = value;
    }
    // Temporarily expose input value. Use with caution.
    get fromPortInput() {
        return this._fromPort;
    }
    get toPort() {
        return this.getNumberAttribute('to_port');
    }
    set toPort(value) {
        this._toPort = value;
    }
    resetToPort() {
        this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get toPortInput() {
        return this._toPort;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortOutputReference;
_1 = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortOutputReference[_1] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortOutputReference", version: "0.0.0" };
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortList extends cdktf.ComplexList {
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
        return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortList = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortList;
_2 = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortList[_2] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortList", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.flags),
        masks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.masks),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        flags: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.flags),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        masks: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.masks),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagOutputReference extends cdktf.ComplexObject {
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
        if (this._flags !== undefined) {
            hasAnyValues = true;
            internalValueResult.flags = this._flags;
        }
        if (this._masks !== undefined) {
            hasAnyValues = true;
            internalValueResult.masks = this._masks;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._flags = undefined;
            this._masks = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._flags = value.flags;
            this._masks = value.masks;
        }
    }
    get flags() {
        return cdktf.Fn.tolist(this.getListAttribute('flags'));
    }
    set flags(value) {
        this._flags = value;
    }
    // Temporarily expose input value. Use with caution.
    get flagsInput() {
        return this._flags;
    }
    get masks() {
        return cdktf.Fn.tolist(this.getListAttribute('masks'));
    }
    set masks(value) {
        this._masks = value;
    }
    resetMasks() {
        this._masks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get masksInput() {
        return this._masks;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagOutputReference;
_3 = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagOutputReference[_3] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagOutputReference", version: "0.0.0" };
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagList extends cdktf.ComplexList {
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
        return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagList = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagList;
_4 = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagList[_4] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagList", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        protocols: cdktf.listMapper(cdktf.numberToTerraform, false)(struct.protocols),
        destination: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform, true)(struct.destination),
        destination_port: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform, true)(struct.destinationPort),
        source: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform, true)(struct.source),
        source_port: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform, true)(struct.sourcePort),
        tcp_flag: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform, true)(struct.tcpFlag),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        protocols: {
            value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct.protocols),
            isBlock: false,
            type: "set",
            storageClassType: "numberList",
        },
        destination: {
            value: cdktf.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToHclTerraform, true)(struct.destination),
            isBlock: true,
            type: "set",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationList",
        },
        destination_port: {
            value: cdktf.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToHclTerraform, true)(struct.destinationPort),
            isBlock: true,
            type: "set",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortList",
        },
        source: {
            value: cdktf.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToHclTerraform, true)(struct.source),
            isBlock: true,
            type: "set",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceList",
        },
        source_port: {
            value: cdktf.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToHclTerraform, true)(struct.sourcePort),
            isBlock: true,
            type: "set",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortList",
        },
        tcp_flag: {
            value: cdktf.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToHclTerraform, true)(struct.tcpFlag),
            isBlock: true,
            type: "set",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // destination - computed: false, optional: true, required: false
        this._destination = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationList(this, "destination", true);
        // destination_port - computed: false, optional: true, required: false
        this._destinationPort = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortList(this, "destination_port", true);
        // source - computed: false, optional: true, required: false
        this._source = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceList(this, "source", true);
        // source_port - computed: false, optional: true, required: false
        this._sourcePort = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortList(this, "source_port", true);
        // tcp_flag - computed: false, optional: true, required: false
        this._tcpFlag = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagList(this, "tcp_flag", true);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._protocols !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocols = this._protocols;
        }
        if (this._destination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination?.internalValue;
        }
        if (this._destinationPort?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPort = this._destinationPort?.internalValue;
        }
        if (this._source?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source?.internalValue;
        }
        if (this._sourcePort?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePort = this._sourcePort?.internalValue;
        }
        if (this._tcpFlag?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tcpFlag = this._tcpFlag?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._protocols = undefined;
            this._destination.internalValue = undefined;
            this._destinationPort.internalValue = undefined;
            this._source.internalValue = undefined;
            this._sourcePort.internalValue = undefined;
            this._tcpFlag.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._protocols = value.protocols;
            this._destination.internalValue = value.destination;
            this._destinationPort.internalValue = value.destinationPort;
            this._source.internalValue = value.source;
            this._sourcePort.internalValue = value.sourcePort;
            this._tcpFlag.internalValue = value.tcpFlag;
        }
    }
    get protocols() {
        return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('protocols')));
    }
    set protocols(value) {
        this._protocols = value;
    }
    resetProtocols() {
        this._protocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get protocolsInput() {
        return this._protocols;
    }
    get destination() {
        return this._destination;
    }
    putDestination(value) {
        this._destination.internalValue = value;
    }
    resetDestination() {
        this._destination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationInput() {
        return this._destination.internalValue;
    }
    get destinationPort() {
        return this._destinationPort;
    }
    putDestinationPort(value) {
        this._destinationPort.internalValue = value;
    }
    resetDestinationPort() {
        this._destinationPort.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationPortInput() {
        return this._destinationPort.internalValue;
    }
    get source() {
        return this._source;
    }
    putSource(value) {
        this._source.internalValue = value;
    }
    resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source.internalValue;
    }
    get sourcePort() {
        return this._sourcePort;
    }
    putSourcePort(value) {
        this._sourcePort.internalValue = value;
    }
    resetSourcePort() {
        this._sourcePort.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourcePortInput() {
        return this._sourcePort.internalValue;
    }
    get tcpFlag() {
        return this._tcpFlag;
    }
    putTcpFlag(value) {
        this._tcpFlag.internalValue = value;
    }
    resetTcpFlag() {
        this._tcpFlag.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tcpFlagInput() {
        return this._tcpFlag.internalValue;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference;
_5 = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference[_5] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.actions),
        match_attributes: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform(struct.matchAttributes),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        actions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.actions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        match_attributes: {
            value: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToHclTerraform(struct.matchAttributes),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // match_attributes - computed: false, optional: false, required: true
        this._matchAttributes = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference(this, "match_attributes");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._actions !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions;
        }
        if (this._matchAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchAttributes = this._matchAttributes?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._actions = undefined;
            this._matchAttributes.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._actions = value.actions;
            this._matchAttributes.internalValue = value.matchAttributes;
        }
    }
    get actions() {
        return cdktf.Fn.tolist(this.getListAttribute('actions'));
    }
    set actions(value) {
        this._actions = value;
    }
    // Temporarily expose input value. Use with caution.
    get actionsInput() {
        return this._actions;
    }
    get matchAttributes() {
        return this._matchAttributes;
    }
    putMatchAttributes(value) {
        this._matchAttributes.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get matchAttributesInput() {
        return this._matchAttributes.internalValue;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference;
_6 = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference[_6] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        rule_definition: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform(struct.ruleDefinition),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToHclTerraform(struct) {
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
        rule_definition: {
            value: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToHclTerraform(struct.ruleDefinition),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // rule_definition - computed: false, optional: false, required: true
        this._ruleDefinition = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference(this, "rule_definition");
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
        if (this._ruleDefinition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleDefinition = this._ruleDefinition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._priority = undefined;
            this._ruleDefinition.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._priority = value.priority;
            this._ruleDefinition.internalValue = value.ruleDefinition;
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
    get ruleDefinition() {
        return this._ruleDefinition;
    }
    putRuleDefinition(value) {
        this._ruleDefinition.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get ruleDefinitionInput() {
        return this._ruleDefinition.internalValue;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleOutputReference;
_7 = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleOutputReference[_7] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleOutputReference", version: "0.0.0" };
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleList extends cdktf.ComplexList {
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
        return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleList = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleList;
_8 = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleList[_8] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleList", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        custom_action: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform, true)(struct.customAction),
        stateless_rule: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform, true)(struct.statelessRule),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        custom_action: {
            value: cdktf.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToHclTerraform, true)(struct.customAction),
            isBlock: true,
            type: "set",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionList",
        },
        stateless_rule: {
            value: cdktf.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToHclTerraform, true)(struct.statelessRule),
            isBlock: true,
            type: "set",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // custom_action - computed: false, optional: true, required: false
        this._customAction = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionList(this, "custom_action", true);
        // stateless_rule - computed: false, optional: false, required: true
        this._statelessRule = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleList(this, "stateless_rule", true);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._customAction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customAction = this._customAction?.internalValue;
        }
        if (this._statelessRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statelessRule = this._statelessRule?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._customAction.internalValue = undefined;
            this._statelessRule.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._customAction.internalValue = value.customAction;
            this._statelessRule.internalValue = value.statelessRule;
        }
    }
    get customAction() {
        return this._customAction;
    }
    putCustomAction(value) {
        this._customAction.internalValue = value;
    }
    resetCustomAction() {
        this._customAction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customActionInput() {
        return this._customAction.internalValue;
    }
    get statelessRule() {
        return this._statelessRule;
    }
    putStatelessRule(value) {
        this._statelessRule.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get statelessRuleInput() {
        return this._statelessRule.internalValue;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference;
_9 = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference[_9] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        rules_string: cdktf.stringToTerraform(struct.rulesString),
        rules_source_list: networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructToTerraform(struct.rulesSourceList),
        stateful_rule: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform, true)(struct.statefulRule),
        stateless_rules_and_custom_actions: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct.statelessRulesAndCustomActions),
    };
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceToTerraform = networkfirewallRuleGroupRuleGroupRulesSourceToTerraform;
function networkfirewallRuleGroupRuleGroupRulesSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        rules_string: {
            value: cdktf.stringToHclTerraform(struct.rulesString),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rules_source_list: {
            value: networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructToHclTerraform(struct.rulesSourceList),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructList",
        },
        stateful_rule: {
            value: cdktf.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToHclTerraform, true)(struct.statefulRule),
            isBlock: true,
            type: "set",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleList",
        },
        stateless_rules_and_custom_actions: {
            value: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToHclTerraform(struct.statelessRulesAndCustomActions),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupRulesSourceToHclTerraform = networkfirewallRuleGroupRuleGroupRulesSourceToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // rules_source_list - computed: false, optional: true, required: false
        this._rulesSourceList = new NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference(this, "rules_source_list");
        // stateful_rule - computed: false, optional: true, required: false
        this._statefulRule = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleList(this, "stateful_rule", true);
        // stateless_rules_and_custom_actions - computed: false, optional: true, required: false
        this._statelessRulesAndCustomActions = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference(this, "stateless_rules_and_custom_actions");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._rulesString !== undefined) {
            hasAnyValues = true;
            internalValueResult.rulesString = this._rulesString;
        }
        if (this._rulesSourceList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rulesSourceList = this._rulesSourceList?.internalValue;
        }
        if (this._statefulRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statefulRule = this._statefulRule?.internalValue;
        }
        if (this._statelessRulesAndCustomActions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statelessRulesAndCustomActions = this._statelessRulesAndCustomActions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._rulesString = undefined;
            this._rulesSourceList.internalValue = undefined;
            this._statefulRule.internalValue = undefined;
            this._statelessRulesAndCustomActions.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._rulesString = value.rulesString;
            this._rulesSourceList.internalValue = value.rulesSourceList;
            this._statefulRule.internalValue = value.statefulRule;
            this._statelessRulesAndCustomActions.internalValue = value.statelessRulesAndCustomActions;
        }
    }
    get rulesString() {
        return this.getStringAttribute('rules_string');
    }
    set rulesString(value) {
        this._rulesString = value;
    }
    resetRulesString() {
        this._rulesString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rulesStringInput() {
        return this._rulesString;
    }
    get rulesSourceList() {
        return this._rulesSourceList;
    }
    putRulesSourceList(value) {
        this._rulesSourceList.internalValue = value;
    }
    resetRulesSourceList() {
        this._rulesSourceList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rulesSourceListInput() {
        return this._rulesSourceList.internalValue;
    }
    get statefulRule() {
        return this._statefulRule;
    }
    putStatefulRule(value) {
        this._statefulRule.internalValue = value;
    }
    resetStatefulRule() {
        this._statefulRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statefulRuleInput() {
        return this._statefulRule.internalValue;
    }
    get statelessRulesAndCustomActions() {
        return this._statelessRulesAndCustomActions;
    }
    putStatelessRulesAndCustomActions(value) {
        this._statelessRulesAndCustomActions.internalValue = value;
    }
    resetStatelessRulesAndCustomActions() {
        this._statelessRulesAndCustomActions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statelessRulesAndCustomActionsInput() {
        return this._statelessRulesAndCustomActions.internalValue;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference = NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference;
_10 = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference[_10] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToTerraform(struct) {
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
exports.networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToTerraform = networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToTerraform;
function networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToHclTerraform(struct) {
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
exports.networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToHclTerraform = networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference extends cdktf.ComplexObject {
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
exports.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference = NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference;
_11 = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference[_11] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference", version: "0.0.0" };
function networkfirewallRuleGroupRuleGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        rule_variables: networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct.ruleVariables),
        rules_source: networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct.rulesSource),
        stateful_rule_options: networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToTerraform(struct.statefulRuleOptions),
    };
}
exports.networkfirewallRuleGroupRuleGroupToTerraform = networkfirewallRuleGroupRuleGroupToTerraform;
function networkfirewallRuleGroupRuleGroupToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        rule_variables: {
            value: networkfirewallRuleGroupRuleGroupRuleVariablesToHclTerraform(struct.ruleVariables),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRuleVariablesList",
        },
        rules_source: {
            value: networkfirewallRuleGroupRuleGroupRulesSourceToHclTerraform(struct.rulesSource),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceList",
        },
        stateful_rule_options: {
            value: networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToHclTerraform(struct.statefulRuleOptions),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.networkfirewallRuleGroupRuleGroupToHclTerraform = networkfirewallRuleGroupRuleGroupToHclTerraform;
class NetworkfirewallRuleGroupRuleGroupOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // rule_variables - computed: false, optional: true, required: false
        this._ruleVariables = new NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference(this, "rule_variables");
        // rules_source - computed: false, optional: false, required: true
        this._rulesSource = new NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference(this, "rules_source");
        // stateful_rule_options - computed: false, optional: true, required: false
        this._statefulRuleOptions = new NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference(this, "stateful_rule_options");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._ruleVariables?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleVariables = this._ruleVariables?.internalValue;
        }
        if (this._rulesSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rulesSource = this._rulesSource?.internalValue;
        }
        if (this._statefulRuleOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statefulRuleOptions = this._statefulRuleOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._ruleVariables.internalValue = undefined;
            this._rulesSource.internalValue = undefined;
            this._statefulRuleOptions.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._ruleVariables.internalValue = value.ruleVariables;
            this._rulesSource.internalValue = value.rulesSource;
            this._statefulRuleOptions.internalValue = value.statefulRuleOptions;
        }
    }
    get ruleVariables() {
        return this._ruleVariables;
    }
    putRuleVariables(value) {
        this._ruleVariables.internalValue = value;
    }
    resetRuleVariables() {
        this._ruleVariables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ruleVariablesInput() {
        return this._ruleVariables.internalValue;
    }
    get rulesSource() {
        return this._rulesSource;
    }
    putRulesSource(value) {
        this._rulesSource.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get rulesSourceInput() {
        return this._rulesSource.internalValue;
    }
    get statefulRuleOptions() {
        return this._statefulRuleOptions;
    }
    putStatefulRuleOptions(value) {
        this._statefulRuleOptions.internalValue = value;
    }
    resetStatefulRuleOptions() {
        this._statefulRuleOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statefulRuleOptionsInput() {
        return this._statefulRuleOptions.internalValue;
    }
}
exports.NetworkfirewallRuleGroupRuleGroupOutputReference = NetworkfirewallRuleGroupRuleGroupOutputReference;
_12 = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroupRuleGroupOutputReference[_12] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/networkfirewall_rule_group aws_networkfirewall_rule_group}
*/
class NetworkfirewallRuleGroup extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a NetworkfirewallRuleGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkfirewallRuleGroup to import
    * @param importFromId The id of the existing NetworkfirewallRuleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/networkfirewall_rule_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkfirewallRuleGroup to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_networkfirewall_rule_group", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/networkfirewall_rule_group aws_networkfirewall_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallRuleGroupConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_networkfirewall_rule_group',
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
        // rule_group - computed: false, optional: true, required: false
        this._ruleGroup = new NetworkfirewallRuleGroupRuleGroupOutputReference(this, "rule_group");
        this._capacity = config.capacity;
        this._description = config.description;
        this._id = config.id;
        this._name = config.name;
        this._rules = config.rules;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._type = config.type;
        this._ruleGroup.internalValue = config.ruleGroup;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get capacity() {
        return this.getNumberAttribute('capacity');
    }
    set capacity(value) {
        this._capacity = value;
    }
    // Temporarily expose input value. Use with caution.
    get capacityInput() {
        return this._capacity;
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
    get rules() {
        return this.getStringAttribute('rules');
    }
    set rules(value) {
        this._rules = value;
    }
    resetRules() {
        this._rules = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rulesInput() {
        return this._rules;
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
    // update_token - computed: true, optional: false, required: false
    get updateToken() {
        return this.getStringAttribute('update_token');
    }
    get ruleGroup() {
        return this._ruleGroup;
    }
    putRuleGroup(value) {
        this._ruleGroup.internalValue = value;
    }
    resetRuleGroup() {
        this._ruleGroup.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ruleGroupInput() {
        return this._ruleGroup.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            capacity: cdktf.numberToTerraform(this._capacity),
            description: cdktf.stringToTerraform(this._description),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            rules: cdktf.stringToTerraform(this._rules),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type),
            rule_group: networkfirewallRuleGroupRuleGroupToTerraform(this._ruleGroup.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            capacity: {
                value: cdktf.numberToHclTerraform(this._capacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
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
            rules: {
                value: cdktf.stringToHclTerraform(this._rules),
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
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule_group: {
                value: networkfirewallRuleGroupRuleGroupToHclTerraform(this._ruleGroup.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "NetworkfirewallRuleGroupRuleGroupList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.NetworkfirewallRuleGroup = NetworkfirewallRuleGroup;
_13 = JSII_RTTI_SYMBOL_1;
NetworkfirewallRuleGroup[_13] = { fqn: "@cdktf/aws-cdk.networkfirewallRuleGroup.NetworkfirewallRuleGroup", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
NetworkfirewallRuleGroup.tfResourceType = "aws_networkfirewall_rule_group";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL25ldHdvcmtmaXJld2FsbC1ydWxlLWdyb3VwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQVNBLCtCQUErQjtBQXNEL0IsU0FBZ0Isb0VBQW9FLENBQUMsTUFBNkk7SUFDaE8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO0tBQ2pGLENBQUE7QUFDSCxDQUFDO0FBUkQsb0pBUUM7QUFHRCxTQUFnQix1RUFBdUUsQ0FBQyxNQUE2STtJQUNuTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUss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RUFBRTtnQkFDVixLQUFLLEVBQUUsK0NBQStDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7Z0JBQ3JGLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLGdCQUFnQixFQUFFLHVDQUF1QzthQUMxRDtTQUNGLENBQUM7UUFFRiw4QkFBOEI7UUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUUsQ0FBQyxDQUFBO0lBQzVILENBQUM7O0FBOVJILDREQStSQzs7O0FBN1JDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csdUNBQWMsR0FBRyxnQ0FBZ0MsQUFBbkMsQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNjYXBhY2l0eSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjY2FwYWNpdHl9XG4gICovXG4gIHJlYWRvbmx5IGNhcGFjaXR5OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwI2Rlc2NyaXB0aW9uIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNkZXNjcmlwdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwI2lkIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjbmFtZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNydWxlcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjcnVsZXN9XG4gICovXG4gIHJlYWRvbmx5IHJ1bGVzPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCN0YWdzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjdGFnc19hbGwgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwI3RhZ3NfYWxsfVxuICAqL1xuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjdHlwZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAvKipcbiAgKiBydWxlX2dyb3VwIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNydWxlX2dyb3VwIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNydWxlX2dyb3VwfVxuICAqL1xuICByZWFkb25seSBydWxlR3JvdXA/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXA7XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNJcFNldHNJcFNldCB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwI2RlZmluaXRpb24gTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwI2RlZmluaXRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlZmluaXRpb246IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0c0lwU2V0VG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0c0lwU2V0T3V0cHV0UmVmZXJlbmNlIHwgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0c0lwU2V0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRlZmluaXRpb246IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmRlZmluaXRpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNJcFNldHNJcFNldFRvSGNsVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNJcFNldHNJcFNldE91dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNJcFNldHNJcFNldCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmRlZmluaXRpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNJcFNldHNJcFNldE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0c0lwU2V0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kZWZpbml0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlZmluaXRpb24gPSB0aGlzLl9kZWZpbml0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0c0lwU2V0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGVmaW5pdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGVmaW5pdGlvbiA9IHZhbHVlLmRlZmluaXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gZGVmaW5pdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZWZpbml0aW9uPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGRlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2RlZmluaXRpb24nKSk7XG4gIH1cbiAgcHVibGljIHNldCBkZWZpbml0aW9uKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2RlZmluaXRpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmaW5pdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZpbml0aW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNJcFNldHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNrZXkgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwI2tleX1cbiAgKi9cbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG4gIC8qKlxuICAqIGlwX3NldCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjaXBfc2V0IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNpcF9zZXR9XG4gICovXG4gIHJlYWRvbmx5IGlwU2V0OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzSXBTZXRzSXBTZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzSXBTZXRzVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0cyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIGlwX3NldDogbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0c0lwU2V0VG9UZXJyYWZvcm0oc3RydWN0IS5pcFNldCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0c1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNJcFNldHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAga2V5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGlwX3NldDoge1xuICAgICAgdmFsdWU6IG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNJcFNldHNJcFNldFRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaXBTZXQpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzSXBTZXRzSXBTZXRMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNJcFNldHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0cyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmtleSA9IHRoaXMuX2tleTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lwU2V0Py5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlwU2V0ID0gdGhpcy5faXBTZXQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzSXBTZXRzIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2tleSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lwU2V0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2V5ID0gdmFsdWUua2V5O1xuICAgICAgdGhpcy5faXBTZXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmlwU2V0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9rZXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQga2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rZXkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleTtcbiAgfVxuXG4gIC8vIGlwX3NldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pcFNldCA9IG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzSXBTZXRzSXBTZXRPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJpcF9zZXRcIik7XG4gIHB1YmxpYyBnZXQgaXBTZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lwU2V0O1xuICB9XG4gIHB1YmxpYyBwdXRJcFNldCh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0c0lwU2V0KSB7XG4gICAgdGhpcy5faXBTZXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpcFNldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pcFNldC5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzSXBTZXRzTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0c1tdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzSXBTZXRzT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNJcFNldHNPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzUG9ydFNldHNQb3J0U2V0IHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjZGVmaW5pdGlvbiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjZGVmaW5pdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGVmaW5pdGlvbjogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzUG9ydFNldHNQb3J0U2V0VG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzUG9ydFNldE91dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNQb3J0U2V0c1BvcnRTZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGVmaW5pdGlvbjogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuZGVmaW5pdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzUG9ydFNldFRvSGNsVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNQb3J0U2V0c1BvcnRTZXRPdXRwdXRSZWZlcmVuY2UgfCBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzUG9ydFNldHNQb3J0U2V0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuZGVmaW5pdGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzUG9ydFNldE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzUG9ydFNldCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGVmaW5pdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWZpbml0aW9uID0gdGhpcy5fZGVmaW5pdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNQb3J0U2V0c1BvcnRTZXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kZWZpbml0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kZWZpbml0aW9uID0gdmFsdWUuZGVmaW5pdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBkZWZpbml0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RlZmluaXRpb24/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZGVmaW5pdGlvbicpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmluaXRpb24odmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZGVmaW5pdGlvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZpbml0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmluaXRpb247XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAja2V5IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNrZXl9XG4gICovXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAvKipcbiAgKiBwb3J0X3NldCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjcG9ydF9zZXQgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwI3BvcnRfc2V0fVxuICAqL1xuICByZWFkb25seSBwb3J0U2V0OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzUG9ydFNldHNQb3J0U2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgcG9ydF9zZXQ6IG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNQb3J0U2V0c1BvcnRTZXRUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnRTZXQpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNQb3J0U2V0c1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNQb3J0U2V0cyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBrZXk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcG9ydF9zZXQ6IHtcbiAgICAgIHZhbHVlOiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzUG9ydFNldHNQb3J0U2V0VG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wb3J0U2V0KSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzUG9ydFNldExpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNQb3J0U2V0cyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmtleSA9IHRoaXMuX2tleTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BvcnRTZXQ/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydFNldCA9IHRoaXMuX3BvcnRTZXQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzUG9ydFNldHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2V5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcG9ydFNldC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2tleSA9IHZhbHVlLmtleTtcbiAgICAgIHRoaXMuX3BvcnRTZXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnBvcnRTZXQ7XG4gICAgfVxuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2tleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBrZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2tleSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5O1xuICB9XG5cbiAgLy8gcG9ydF9zZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcG9ydFNldCA9IG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzUG9ydFNldHNQb3J0U2V0T3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwicG9ydF9zZXRcIik7XG4gIHB1YmxpYyBnZXQgcG9ydFNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydFNldDtcbiAgfVxuICBwdWJsaWMgcHV0UG9ydFNldCh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzUG9ydFNldCkge1xuICAgIHRoaXMuX3BvcnRTZXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb3J0U2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnRTZXQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNQb3J0U2V0c091dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzUG9ydFNldHNPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzIHtcbiAgLyoqXG4gICogaXBfc2V0cyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjaXBfc2V0cyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjaXBfc2V0c31cbiAgKi9cbiAgcmVhZG9ubHkgaXBTZXRzPzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc0lwU2V0c1tdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHBvcnRfc2V0cyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjcG9ydF9zZXRzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNwb3J0X3NldHN9XG4gICovXG4gIHJlYWRvbmx5IHBvcnRTZXRzPzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzT3V0cHV0UmVmZXJlbmNlIHwgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpcF9zZXRzOiBjZGt0Zi5saXN0TWFwcGVyKG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNJcFNldHNUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5pcFNldHMpLFxuICAgIHBvcnRfc2V0czogY2RrdGYubGlzdE1hcHBlcihuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzUG9ydFNldHNUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5wb3J0U2V0cyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNPdXRwdXRSZWZlcmVuY2UgfCBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBpcF9zZXRzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzSXBTZXRzVG9IY2xUZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuaXBTZXRzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzSXBTZXRzTGlzdFwiLFxuICAgIH0sXG4gICAgcG9ydF9zZXRzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzUG9ydFNldHNUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5wb3J0U2V0cyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pcFNldHM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaXBTZXRzID0gdGhpcy5faXBTZXRzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcG9ydFNldHM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydFNldHMgPSB0aGlzLl9wb3J0U2V0cz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pcFNldHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BvcnRTZXRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2lwU2V0cy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuaXBTZXRzO1xuICAgICAgdGhpcy5fcG9ydFNldHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnBvcnRTZXRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlwX3NldHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaXBTZXRzID0gbmV3IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNJcFNldHNMaXN0KHRoaXMsIFwiaXBfc2V0c1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBpcFNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lwU2V0cztcbiAgfVxuICBwdWJsaWMgcHV0SXBTZXRzKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzSXBTZXRzW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2lwU2V0cy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXBTZXRzKCkge1xuICAgIHRoaXMuX2lwU2V0cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpcFNldHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXBTZXRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBwb3J0X3NldHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9ydFNldHMgPSBuZXcgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1BvcnRTZXRzTGlzdCh0aGlzLCBcInBvcnRfc2V0c1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwb3J0U2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydFNldHM7XG4gIH1cbiAgcHVibGljIHB1dFBvcnRTZXRzKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzUG9ydFNldHNbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcG9ydFNldHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBvcnRTZXRzKCkge1xuICAgIHRoaXMuX3BvcnRTZXRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRTZXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnRTZXRzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VSdWxlc1NvdXJjZUxpc3RTdHJ1Y3Qge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNnZW5lcmF0ZWRfcnVsZXNfdHlwZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjZ2VuZXJhdGVkX3J1bGVzX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IGdlbmVyYXRlZFJ1bGVzVHlwZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCN0YXJnZXRfdHlwZXMgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwI3RhcmdldF90eXBlc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFyZ2V0VHlwZXM6IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCN0YXJnZXRzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCN0YXJnZXRzfVxuICAqL1xuICByZWFkb25seSB0YXJnZXRzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlUnVsZXNTb3VyY2VMaXN0U3RydWN0VG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VSdWxlc1NvdXJjZUxpc3RTdHJ1Y3RPdXRwdXRSZWZlcmVuY2UgfCBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVJ1bGVzU291cmNlTGlzdFN0cnVjdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBnZW5lcmF0ZWRfcnVsZXNfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5nZW5lcmF0ZWRSdWxlc1R5cGUpLFxuICAgIHRhcmdldF90eXBlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEudGFyZ2V0VHlwZXMpLFxuICAgIHRhcmdldHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnRhcmdldHMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlUnVsZXNTb3VyY2VMaXN0U3RydWN0VG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VSdWxlc1NvdXJjZUxpc3RTdHJ1Y3RPdXRwdXRSZWZlcmVuY2UgfCBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVJ1bGVzU291cmNlTGlzdFN0cnVjdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZ2VuZXJhdGVkX3J1bGVzX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmdlbmVyYXRlZFJ1bGVzVHlwZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdGFyZ2V0X3R5cGVzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEudGFyZ2V0VHlwZXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgICB0YXJnZXRzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEudGFyZ2V0cyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VSdWxlc1NvdXJjZUxpc3RTdHJ1Y3RPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlUnVsZXNTb3VyY2VMaXN0U3RydWN0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9nZW5lcmF0ZWRSdWxlc1R5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZ2VuZXJhdGVkUnVsZXNUeXBlID0gdGhpcy5fZ2VuZXJhdGVkUnVsZXNUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFyZ2V0VHlwZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFyZ2V0VHlwZXMgPSB0aGlzLl90YXJnZXRUeXBlcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhcmdldHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFyZ2V0cyA9IHRoaXMuX3RhcmdldHM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVJ1bGVzU291cmNlTGlzdFN0cnVjdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2dlbmVyYXRlZFJ1bGVzVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhcmdldFR5cGVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFyZ2V0cyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZ2VuZXJhdGVkUnVsZXNUeXBlID0gdmFsdWUuZ2VuZXJhdGVkUnVsZXNUeXBlO1xuICAgICAgdGhpcy5fdGFyZ2V0VHlwZXMgPSB2YWx1ZS50YXJnZXRUeXBlcztcbiAgICAgIHRoaXMuX3RhcmdldHMgPSB2YWx1ZS50YXJnZXRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGdlbmVyYXRlZF9ydWxlc190eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2dlbmVyYXRlZFJ1bGVzVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZ2VuZXJhdGVkUnVsZXNUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2VuZXJhdGVkX3J1bGVzX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGdlbmVyYXRlZFJ1bGVzVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ2VuZXJhdGVkUnVsZXNUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdlbmVyYXRlZFJ1bGVzVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9nZW5lcmF0ZWRSdWxlc1R5cGU7XG4gIH1cblxuICAvLyB0YXJnZXRfdHlwZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGFyZ2V0VHlwZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdGFyZ2V0VHlwZXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3RhcmdldF90eXBlcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldFR5cGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3RhcmdldFR5cGVzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldFR5cGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFR5cGVzO1xuICB9XG5cbiAgLy8gdGFyZ2V0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90YXJnZXRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHRhcmdldHMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3RhcmdldHMnKSk7XG4gIH1cbiAgcHVibGljIHNldCB0YXJnZXRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3RhcmdldHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlSGVhZGVyIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjZGVzdGluYXRpb24gTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwI2Rlc3RpbmF0aW9ufVxuICAqL1xuICByZWFkb25seSBkZXN0aW5hdGlvbjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNkZXN0aW5hdGlvbl9wb3J0IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNkZXN0aW5hdGlvbl9wb3J0fVxuICAqL1xuICByZWFkb25seSBkZXN0aW5hdGlvblBvcnQ6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjZGlyZWN0aW9uIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNkaXJlY3Rpb259XG4gICovXG4gIHJlYWRvbmx5IGRpcmVjdGlvbjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNwcm90b2NvbCBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjcHJvdG9jb2x9XG4gICovXG4gIHJlYWRvbmx5IHByb3RvY29sOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwI3NvdXJjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjc291cmNlfVxuICAqL1xuICByZWFkb25seSBzb3VyY2U6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjc291cmNlX3BvcnQgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwI3NvdXJjZV9wb3J0fVxuICAqL1xuICByZWFkb25seSBzb3VyY2VQb3J0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZUhlYWRlclRvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlSGVhZGVyT3V0cHV0UmVmZXJlbmNlIHwgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVIZWFkZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGVzdGluYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb24pLFxuICAgIGRlc3RpbmF0aW9uX3BvcnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb25Qb3J0KSxcbiAgICBkaXJlY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGlyZWN0aW9uKSxcbiAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgc291cmNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZSksXG4gICAgc291cmNlX3BvcnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc291cmNlUG9ydCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVIZWFkZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZUhlYWRlck91dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlSGVhZGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBkZXN0aW5hdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRlc3RpbmF0aW9uX3BvcnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uUG9ydCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGlyZWN0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kaXJlY3Rpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHByb3RvY29sOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc291cmNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zb3VyY2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNvdXJjZV9wb3J0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VQb3J0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlSGVhZGVyT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZUhlYWRlciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGVzdGluYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVzdGluYXRpb24gPSB0aGlzLl9kZXN0aW5hdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Rlc3RpbmF0aW9uUG9ydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXN0aW5hdGlvblBvcnQgPSB0aGlzLl9kZXN0aW5hdGlvblBvcnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kaXJlY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGlyZWN0aW9uID0gdGhpcy5fZGlyZWN0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvdG9jb2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvdG9jb2wgPSB0aGlzLl9wcm90b2NvbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zb3VyY2UgPSB0aGlzLl9zb3VyY2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb3VyY2VQb3J0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNvdXJjZVBvcnQgPSB0aGlzLl9zb3VyY2VQb3J0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVIZWFkZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kZXN0aW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uUG9ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Byb3RvY29sID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc291cmNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc291cmNlUG9ydCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGVzdGluYXRpb24gPSB2YWx1ZS5kZXN0aW5hdGlvbjtcbiAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uUG9ydCA9IHZhbHVlLmRlc3RpbmF0aW9uUG9ydDtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IHZhbHVlLmRpcmVjdGlvbjtcbiAgICAgIHRoaXMuX3Byb3RvY29sID0gdmFsdWUucHJvdG9jb2w7XG4gICAgICB0aGlzLl9zb3VyY2UgPSB2YWx1ZS5zb3VyY2U7XG4gICAgICB0aGlzLl9zb3VyY2VQb3J0ID0gdmFsdWUuc291cmNlUG9ydDtcbiAgICB9XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZXN0aW5hdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXN0aW5hdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzdGluYXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uO1xuICB9XG5cbiAgLy8gZGVzdGluYXRpb25fcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZXN0aW5hdGlvblBvcnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uX3BvcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc3RpbmF0aW9uUG9ydCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb25Qb3J0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uUG9ydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0aW5hdGlvblBvcnQ7XG4gIH1cblxuICAvLyBkaXJlY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGlyZWN0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXJlY3Rpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpcmVjdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlyZWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpcmVjdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XG4gIH1cblxuICAvLyBwcm90b2NvbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcm90b2NvbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm90b2NvbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvdG9jb2wodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb3RvY29sID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3RvY29sSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3RvY29sO1xuICB9XG5cbiAgLy8gc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NvdXJjZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzb3VyY2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NvdXJjZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlO1xuICB9XG5cbiAgLy8gc291cmNlX3BvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc291cmNlUG9ydD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc291cmNlUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZV9wb3J0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzb3VyY2VQb3J0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3VyY2VQb3J0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZVBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlUG9ydDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZVJ1bGVPcHRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNrZXl3b3JkIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNrZXl3b3JkfVxuICAqL1xuICByZWFkb25seSBrZXl3b3JkOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwI3NldHRpbmdzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNzZXR0aW5nc31cbiAgKi9cbiAgcmVhZG9ubHkgc2V0dGluZ3M/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlUnVsZU9wdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlUnVsZU9wdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGtleXdvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5d29yZCksXG4gICAgc2V0dGluZ3M6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnNldHRpbmdzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZVJ1bGVPcHRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZVJ1bGVPcHRpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAga2V5d29yZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEua2V5d29yZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc2V0dGluZ3M6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5zZXR0aW5ncyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVSdWxlT3B0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlUnVsZU9wdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fa2V5d29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rZXl3b3JkID0gdGhpcy5fa2V5d29yZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NldHRpbmdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNldHRpbmdzID0gdGhpcy5fc2V0dGluZ3M7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZVJ1bGVPcHRpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2V5d29yZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NldHRpbmdzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2tleXdvcmQgPSB2YWx1ZS5rZXl3b3JkO1xuICAgICAgdGhpcy5fc2V0dGluZ3MgPSB2YWx1ZS5zZXR0aW5ncztcbiAgICB9XG4gIH1cblxuICAvLyBrZXl3b3JkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2tleXdvcmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGtleXdvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXl3b3JkJyk7XG4gIH1cbiAgcHVibGljIHNldCBrZXl3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rZXl3b3JkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtleXdvcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5d29yZDtcbiAgfVxuXG4gIC8vIHNldHRpbmdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NldHRpbmdzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHNldHRpbmdzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZXR0aW5ncycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNldHRpbmdzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3NldHRpbmdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2V0dGluZ3MoKSB7XG4gICAgdGhpcy5fc2V0dGluZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNldHRpbmdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZVJ1bGVPcHRpb25MaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZVJ1bGVPcHRpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVSdWxlT3B0aW9uT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlUnVsZU9wdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjYWN0aW9uIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNhY3Rpb259XG4gICovXG4gIHJlYWRvbmx5IGFjdGlvbjogc3RyaW5nO1xuICAvKipcbiAgKiBoZWFkZXIgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwI2hlYWRlciBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjaGVhZGVyfVxuICAqL1xuICByZWFkb25seSBoZWFkZXI6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlSGVhZGVyO1xuICAvKipcbiAgKiBydWxlX29wdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjcnVsZV9vcHRpb24gTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwI3J1bGVfb3B0aW9ufVxuICAqL1xuICByZWFkb25seSBydWxlT3B0aW9uOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZVJ1bGVPcHRpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZSB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY3Rpb24pLFxuICAgIGhlYWRlcjogbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVIZWFkZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmhlYWRlciksXG4gICAgcnVsZV9vcHRpb246IGNka3RmLmxpc3RNYXBwZXIobmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVSdWxlT3B0aW9uVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEucnVsZU9wdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZSB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhY3Rpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmFjdGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgaGVhZGVyOiB7XG4gICAgICB2YWx1ZTogbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVIZWFkZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmhlYWRlciksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlSGVhZGVyTGlzdFwiLFxuICAgIH0sXG4gICAgcnVsZV9vcHRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlUnVsZU9wdGlvblRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnJ1bGVPcHRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlUnVsZU9wdGlvbkxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGUgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hY3Rpb24gPSB0aGlzLl9hY3Rpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9oZWFkZXI/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaGVhZGVyID0gdGhpcy5faGVhZGVyPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcnVsZU9wdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ydWxlT3B0aW9uID0gdGhpcy5fcnVsZU9wdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2hlYWRlci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcnVsZU9wdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FjdGlvbiA9IHZhbHVlLmFjdGlvbjtcbiAgICAgIHRoaXMuX2hlYWRlci5pbnRlcm5hbFZhbHVlID0gdmFsdWUuaGVhZGVyO1xuICAgICAgdGhpcy5fcnVsZU9wdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUucnVsZU9wdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBhY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWN0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY3Rpb247XG4gIH1cblxuICAvLyBoZWFkZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaGVhZGVyID0gbmV3IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlSGVhZGVyT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiaGVhZGVyXCIpO1xuICBwdWJsaWMgZ2V0IGhlYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVyO1xuICB9XG4gIHB1YmxpYyBwdXRIZWFkZXIodmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlSGVhZGVyKSB7XG4gICAgdGhpcy5faGVhZGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGVhZGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlci5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcnVsZV9vcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcnVsZU9wdGlvbiA9IG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZVJ1bGVPcHRpb25MaXN0KHRoaXMsIFwicnVsZV9vcHRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcnVsZU9wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZU9wdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0UnVsZU9wdGlvbih2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVSdWxlT3B0aW9uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3J1bGVPcHRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBydWxlT3B0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bGVPcHRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZVtdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZU91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZU91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCN2YWx1ZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjdmFsdWV9XG4gICovXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uRGltZW5zaW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbiB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uRGltZW5zaW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbiB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uRGltZW5zaW9uIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZhbHVlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb25MaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uRGltZW5zaW9uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb25PdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbk91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb24ge1xuICAvKipcbiAgKiBkaW1lbnNpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwI2RpbWVuc2lvbiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjZGltZW5zaW9ufVxuICAqL1xuICByZWFkb25seSBkaW1lbnNpb246IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25PdXRwdXRSZWZlcmVuY2UgfCBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRpbWVuc2lvbjogY2RrdGYubGlzdE1hcHBlcihuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uRGltZW5zaW9uVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuZGltZW5zaW9uKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbk91dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGRpbWVuc2lvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2wobmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvblRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLmRpbWVuc2lvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbkxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGltZW5zaW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRpbWVuc2lvbiA9IHRoaXMuX2RpbWVuc2lvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kaW1lbnNpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGltZW5zaW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5kaW1lbnNpb247XG4gICAgfVxuICB9XG5cbiAgLy8gZGltZW5zaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RpbWVuc2lvbiA9IG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uRGltZW5zaW9uTGlzdCh0aGlzLCBcImRpbWVuc2lvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBkaW1lbnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpbWVuc2lvbjtcbiAgfVxuICBwdWJsaWMgcHV0RGltZW5zaW9uKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uRGltZW5zaW9uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2RpbWVuc2lvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpbWVuc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaW1lbnNpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb24ge1xuICAvKipcbiAgKiBwdWJsaXNoX21ldHJpY19hY3Rpb24gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwI3B1Ymxpc2hfbWV0cmljX2FjdGlvbiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjcHVibGlzaF9tZXRyaWNfYWN0aW9ufVxuICAqL1xuICByZWFkb25seSBwdWJsaXNoTWV0cmljQWN0aW9uOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uT3V0cHV0UmVmZXJlbmNlIHwgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHB1Ymxpc2hfbWV0cmljX2FjdGlvbjogbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvblRvVGVycmFmb3JtKHN0cnVjdCEucHVibGlzaE1ldHJpY0FjdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uT3V0cHV0UmVmZXJlbmNlIHwgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBwdWJsaXNoX21ldHJpY19hY3Rpb246IHtcbiAgICAgIHZhbHVlOiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wdWJsaXNoTWV0cmljQWN0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3B1Ymxpc2hNZXRyaWNBY3Rpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHVibGlzaE1ldHJpY0FjdGlvbiA9IHRoaXMuX3B1Ymxpc2hNZXRyaWNBY3Rpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9wdWJsaXNoTWV0cmljQWN0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3B1Ymxpc2hNZXRyaWNBY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnB1Ymxpc2hNZXRyaWNBY3Rpb247XG4gICAgfVxuICB9XG5cbiAgLy8gcHVibGlzaF9tZXRyaWNfYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3B1Ymxpc2hNZXRyaWNBY3Rpb24gPSBuZXcgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInB1Ymxpc2hfbWV0cmljX2FjdGlvblwiKTtcbiAgcHVibGljIGdldCBwdWJsaXNoTWV0cmljQWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wdWJsaXNoTWV0cmljQWN0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRQdWJsaXNoTWV0cmljQWN0aW9uKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uKSB7XG4gICAgdGhpcy5fcHVibGlzaE1ldHJpY0FjdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHB1Ymxpc2hNZXRyaWNBY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHVibGlzaE1ldHJpY0FjdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjYWN0aW9uX25hbWUgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwI2FjdGlvbl9uYW1lfVxuICAqL1xuICByZWFkb25seSBhY3Rpb25OYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIGFjdGlvbl9kZWZpbml0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNhY3Rpb25fZGVmaW5pdGlvbiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjYWN0aW9uX2RlZmluaXRpb259XG4gICovXG4gIHJlYWRvbmx5IGFjdGlvbkRlZmluaXRpb246IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY3Rpb25OYW1lKSxcbiAgICBhY3Rpb25fZGVmaW5pdGlvbjogbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5hY3Rpb25EZWZpbml0aW9uKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFjdGlvbl9uYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hY3Rpb25OYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBhY3Rpb25fZGVmaW5pdGlvbjoge1xuICAgICAgdmFsdWU6IG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWN0aW9uRGVmaW5pdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvbkxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjdGlvbk5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWN0aW9uTmFtZSA9IHRoaXMuX2FjdGlvbk5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hY3Rpb25EZWZpbml0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjdGlvbkRlZmluaXRpb24gPSB0aGlzLl9hY3Rpb25EZWZpbml0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYWN0aW9uTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FjdGlvbkRlZmluaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hY3Rpb25OYW1lID0gdmFsdWUuYWN0aW9uTmFtZTtcbiAgICAgIHRoaXMuX2FjdGlvbkRlZmluaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFjdGlvbkRlZmluaXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gYWN0aW9uX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWN0aW9uTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjdGlvbl9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBhY3Rpb25OYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY3Rpb25OYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjdGlvbk5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uTmFtZTtcbiAgfVxuXG4gIC8vIGFjdGlvbl9kZWZpbml0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FjdGlvbkRlZmluaXRpb24gPSBuZXcgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiYWN0aW9uX2RlZmluaXRpb25cIik7XG4gIHB1YmxpYyBnZXQgYWN0aW9uRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uRGVmaW5pdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0QWN0aW9uRGVmaW5pdGlvbih2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uKSB7XG4gICAgdGhpcy5fYWN0aW9uRGVmaW5pdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjdGlvbkRlZmluaXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uRGVmaW5pdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbkxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uW10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwI2FkZHJlc3NfZGVmaW5pdGlvbiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjYWRkcmVzc19kZWZpbml0aW9ufVxuICAqL1xuICByZWFkb25seSBhZGRyZXNzRGVmaW5pdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb24gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhZGRyZXNzX2RlZmluaXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWRkcmVzc0RlZmluaXRpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFkZHJlc3NfZGVmaW5pdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWRkcmVzc0RlZmluaXRpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hZGRyZXNzRGVmaW5pdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hZGRyZXNzRGVmaW5pdGlvbiA9IHRoaXMuX2FkZHJlc3NEZWZpbml0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvbiB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hZGRyZXNzRGVmaW5pdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hZGRyZXNzRGVmaW5pdGlvbiA9IHZhbHVlLmFkZHJlc3NEZWZpbml0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFkZHJlc3NfZGVmaW5pdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hZGRyZXNzRGVmaW5pdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWRkcmVzc0RlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhZGRyZXNzX2RlZmluaXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFkZHJlc3NEZWZpbml0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hZGRyZXNzRGVmaW5pdGlvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhZGRyZXNzRGVmaW5pdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hZGRyZXNzRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvbkxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvbk91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvblBvcnQge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNmcm9tX3BvcnQgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwI2Zyb21fcG9ydH1cbiAgKi9cbiAgcmVhZG9ubHkgZnJvbVBvcnQ6IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjdG9fcG9ydCBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjdG9fcG9ydH1cbiAgKi9cbiAgcmVhZG9ubHkgdG9Qb3J0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvblBvcnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uUG9ydCB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGZyb21fcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5mcm9tUG9ydCksXG4gICAgdG9fcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50b1BvcnQpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25Qb3J0VG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvblBvcnQgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZnJvbV9wb3J0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5mcm9tUG9ydCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgdG9fcG9ydDoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEudG9Qb3J0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25Qb3J0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25Qb3J0IHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9mcm9tUG9ydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5mcm9tUG9ydCA9IHRoaXMuX2Zyb21Qb3J0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdG9Qb3J0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRvUG9ydCA9IHRoaXMuX3RvUG9ydDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25Qb3J0IHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Zyb21Qb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdG9Qb3J0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Zyb21Qb3J0ID0gdmFsdWUuZnJvbVBvcnQ7XG4gICAgICB0aGlzLl90b1BvcnQgPSB2YWx1ZS50b1BvcnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZnJvbV9wb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Zyb21Qb3J0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBmcm9tUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Zyb21fcG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZnJvbVBvcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2Zyb21Qb3J0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZyb21Qb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb21Qb3J0O1xuICB9XG5cbiAgLy8gdG9fcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90b1BvcnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRvUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RvX3BvcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRvUG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG9Qb3J0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VG9Qb3J0KCkge1xuICAgIHRoaXMuX3RvUG9ydCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdG9Qb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvUG9ydDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvblBvcnRMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uUG9ydFtdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uUG9ydE91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uUG9ydE91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzU291cmNlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjYWRkcmVzc19kZWZpbml0aW9uIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNhZGRyZXNzX2RlZmluaXRpb259XG4gICovXG4gIHJlYWRvbmx5IGFkZHJlc3NEZWZpbml0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVRvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzU291cmNlIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWRkcmVzc19kZWZpbml0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFkZHJlc3NEZWZpbml0aW9uKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzU291cmNlIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFkZHJlc3NfZGVmaW5pdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWRkcmVzc0RlZmluaXRpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzb2x2YWJsZVZhbHVlPzogY2RrdGYuSVJlc29sdmFibGU7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2UgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FkZHJlc3NEZWZpbml0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFkZHJlc3NEZWZpbml0aW9uID0gdGhpcy5fYWRkcmVzc0RlZmluaXRpb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZSB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hZGRyZXNzRGVmaW5pdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hZGRyZXNzRGVmaW5pdGlvbiA9IHZhbHVlLmFkZHJlc3NEZWZpbml0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFkZHJlc3NfZGVmaW5pdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hZGRyZXNzRGVmaW5pdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWRkcmVzc0RlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhZGRyZXNzX2RlZmluaXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFkZHJlc3NEZWZpbml0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hZGRyZXNzRGVmaW5pdGlvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhZGRyZXNzRGVmaW5pdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hZGRyZXNzRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2VMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVtdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZU91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZU91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzU291cmNlUG9ydCB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwI2Zyb21fcG9ydCBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjZnJvbV9wb3J0fVxuICAqL1xuICByZWFkb25seSBmcm9tUG9ydDogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCN0b19wb3J0IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCN0b19wb3J0fVxuICAqL1xuICByZWFkb25seSB0b1BvcnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVBvcnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVBvcnQgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmcm9tX3BvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZnJvbVBvcnQpLFxuICAgIHRvX3BvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudG9Qb3J0KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVBvcnRUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVBvcnQgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZnJvbV9wb3J0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5mcm9tUG9ydCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgdG9fcG9ydDoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEudG9Qb3J0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzU291cmNlUG9ydE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVBvcnQgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Zyb21Qb3J0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZyb21Qb3J0ID0gdGhpcy5fZnJvbVBvcnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl90b1BvcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudG9Qb3J0ID0gdGhpcy5fdG9Qb3J0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2VQb3J0IHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Zyb21Qb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdG9Qb3J0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Zyb21Qb3J0ID0gdmFsdWUuZnJvbVBvcnQ7XG4gICAgICB0aGlzLl90b1BvcnQgPSB2YWx1ZS50b1BvcnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZnJvbV9wb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Zyb21Qb3J0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBmcm9tUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Zyb21fcG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZnJvbVBvcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2Zyb21Qb3J0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZyb21Qb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb21Qb3J0O1xuICB9XG5cbiAgLy8gdG9fcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90b1BvcnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRvUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RvX3BvcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRvUG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG9Qb3J0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VG9Qb3J0KCkge1xuICAgIHRoaXMuX3RvUG9ydCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdG9Qb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvUG9ydDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2VQb3J0TGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2VQb3J0W10gfCBjZGt0Zi5JUmVzb2x2YWJsZVxuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSB3cmFwc1NldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgcHJvdGVjdGVkIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBwcm90ZWN0ZWQgd3JhcHNTZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCB3cmFwc1NldClcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmV0dXJuXG4gICovXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzU291cmNlUG9ydE91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVBvcnRPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1RjcEZsYWcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNmbGFncyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjZmxhZ3N9XG4gICovXG4gIHJlYWRvbmx5IGZsYWdzOiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjbWFza3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwI21hc2tzfVxuICAqL1xuICByZWFkb25seSBtYXNrcz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNUY3BGbGFnVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNUY3BGbGFnIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZmxhZ3M6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmZsYWdzKSxcbiAgICBtYXNrczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEubWFza3MpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzVGNwRmxhZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzVGNwRmxhZyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBmbGFnczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmZsYWdzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gICAgbWFza3M6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5tYXNrcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNUY3BGbGFnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzVGNwRmxhZyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZmxhZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmxhZ3MgPSB0aGlzLl9mbGFncztcbiAgICB9XG4gICAgaWYgKHRoaXMuX21hc2tzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1hc2tzID0gdGhpcy5fbWFza3M7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1RjcEZsYWcgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZmxhZ3MgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXNrcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9mbGFncyA9IHZhbHVlLmZsYWdzO1xuICAgICAgdGhpcy5fbWFza3MgPSB2YWx1ZS5tYXNrcztcbiAgICB9XG4gIH1cblxuICAvLyBmbGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9mbGFncz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBmbGFncygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZmxhZ3MnKSk7XG4gIH1cbiAgcHVibGljIHNldCBmbGFncyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9mbGFncyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmbGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mbGFncztcbiAgfVxuXG4gIC8vIG1hc2tzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21hc2tzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IG1hc2tzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdtYXNrcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1hc2tzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX21hc2tzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWFza3MoKSB7XG4gICAgdGhpcy5fbWFza3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hc2tzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hc2tzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1RjcEZsYWdMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1RjcEZsYWdbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNUY3BGbGFnT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzVGNwRmxhZ091dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjcHJvdG9jb2xzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNwcm90b2NvbHN9XG4gICovXG4gIHJlYWRvbmx5IHByb3RvY29scz86IG51bWJlcltdO1xuICAvKipcbiAgKiBkZXN0aW5hdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjZGVzdGluYXRpb24gTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwI2Rlc3RpbmF0aW9ufVxuICAqL1xuICByZWFkb25seSBkZXN0aW5hdGlvbj86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBkZXN0aW5hdGlvbl9wb3J0IGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNkZXN0aW5hdGlvbl9wb3J0IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNkZXN0aW5hdGlvbl9wb3J0fVxuICAqL1xuICByZWFkb25seSBkZXN0aW5hdGlvblBvcnQ/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uUG9ydFtdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHNvdXJjZSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjc291cmNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNzb3VyY2V9XG4gICovXG4gIHJlYWRvbmx5IHNvdXJjZT86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzU291cmNlW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogc291cmNlX3BvcnQgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwI3NvdXJjZV9wb3J0IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNzb3VyY2VfcG9ydH1cbiAgKi9cbiAgcmVhZG9ubHkgc291cmNlUG9ydD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzU291cmNlUG9ydFtdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHRjcF9mbGFnIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCN0Y3BfZmxhZyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjdGNwX2ZsYWd9XG4gICovXG4gIHJlYWRvbmx5IHRjcEZsYWc/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1RjcEZsYWdbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc091dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3RvY29sczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEucHJvdG9jb2xzKSxcbiAgICBkZXN0aW5hdGlvbjogY2RrdGYubGlzdE1hcHBlcihuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuZGVzdGluYXRpb24pLFxuICAgIGRlc3RpbmF0aW9uX3BvcnQ6IGNka3RmLmxpc3RNYXBwZXIobmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvblBvcnRUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5kZXN0aW5hdGlvblBvcnQpLFxuICAgIHNvdXJjZTogY2RrdGYubGlzdE1hcHBlcihuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVRvVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnNvdXJjZSksXG4gICAgc291cmNlX3BvcnQ6IGNka3RmLmxpc3RNYXBwZXIobmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2VQb3J0VG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuc291cmNlUG9ydCksXG4gICAgdGNwX2ZsYWc6IGNka3RmLmxpc3RNYXBwZXIobmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNUY3BGbGFnVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEudGNwRmxhZyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc091dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBwcm90b2NvbHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5wcm90b2NvbHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJMaXN0XCIsXG4gICAgfSxcbiAgICBkZXN0aW5hdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2wobmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvblRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLmRlc3RpbmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uTGlzdFwiLFxuICAgIH0sXG4gICAgZGVzdGluYXRpb25fcG9ydDoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2wobmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNEZXN0aW5hdGlvblBvcnRUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5kZXN0aW5hdGlvblBvcnQpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25Qb3J0TGlzdFwiLFxuICAgIH0sXG4gICAgc291cmNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnNvdXJjZSksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2VMaXN0XCIsXG4gICAgfSxcbiAgICBzb3VyY2VfcG9ydDoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2wobmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2VQb3J0VG9IY2xUZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuc291cmNlUG9ydCksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2VQb3J0TGlzdFwiLFxuICAgIH0sXG4gICAgdGNwX2ZsYWc6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzVGNwRmxhZ1RvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnRjcEZsYWcpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzVGNwRmxhZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9wcm90b2NvbHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvdG9jb2xzID0gdGhpcy5fcHJvdG9jb2xzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVzdGluYXRpb24/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVzdGluYXRpb24gPSB0aGlzLl9kZXN0aW5hdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Rlc3RpbmF0aW9uUG9ydD8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXN0aW5hdGlvblBvcnQgPSB0aGlzLl9kZXN0aW5hdGlvblBvcnQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb3VyY2U/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc291cmNlID0gdGhpcy5fc291cmNlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc291cmNlUG9ydD8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zb3VyY2VQb3J0ID0gdGhpcy5fc291cmNlUG9ydD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RjcEZsYWc/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGNwRmxhZyA9IHRoaXMuX3RjcEZsYWc/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Byb3RvY29scyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZXN0aW5hdGlvblBvcnQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NvdXJjZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc291cmNlUG9ydC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGNwRmxhZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9wcm90b2NvbHMgPSB2YWx1ZS5wcm90b2NvbHM7XG4gICAgICB0aGlzLl9kZXN0aW5hdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZGVzdGluYXRpb247XG4gICAgICB0aGlzLl9kZXN0aW5hdGlvblBvcnQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmRlc3RpbmF0aW9uUG9ydDtcbiAgICAgIHRoaXMuX3NvdXJjZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc291cmNlO1xuICAgICAgdGhpcy5fc291cmNlUG9ydC5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc291cmNlUG9ydDtcbiAgICAgIHRoaXMuX3RjcEZsYWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnRjcEZsYWc7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJvdG9jb2xzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb3RvY29scz86IG51bWJlcltdOyBcbiAgcHVibGljIGdldCBwcm90b2NvbHMoKSB7XG4gICAgcmV0dXJuIGNka3RmLlRva2VuLmFzTnVtYmVyTGlzdChjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXROdW1iZXJMaXN0QXR0cmlidXRlKCdwcm90b2NvbHMnKSkpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvdG9jb2xzKHZhbHVlOiBudW1iZXJbXSkge1xuICAgIHRoaXMuX3Byb3RvY29scyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb3RvY29scygpIHtcbiAgICB0aGlzLl9wcm90b2NvbHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3RvY29sc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm90b2NvbHM7XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXN0aW5hdGlvbiA9IG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uTGlzdCh0aGlzLCBcImRlc3RpbmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0aW5hdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0RGVzdGluYXRpb24odmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc3RpbmF0aW9uKCkge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbl9wb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc3RpbmF0aW9uUG9ydCA9IG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0Rlc3RpbmF0aW9uUG9ydExpc3QodGhpcywgXCJkZXN0aW5hdGlvbl9wb3J0XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdGluYXRpb25Qb3J0O1xuICB9XG4gIHB1YmxpYyBwdXREZXN0aW5hdGlvblBvcnQodmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzRGVzdGluYXRpb25Qb3J0W10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uUG9ydC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzdGluYXRpb25Qb3J0KCkge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uUG9ydC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXN0aW5hdGlvblBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdGluYXRpb25Qb3J0LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzb3VyY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc291cmNlID0gbmV3IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzU291cmNlTGlzdCh0aGlzLCBcInNvdXJjZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZTtcbiAgfVxuICBwdWJsaWMgcHV0U291cmNlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVtdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zb3VyY2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNvdXJjZSgpIHtcbiAgICB0aGlzLl9zb3VyY2UuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc291cmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc291cmNlX3BvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc291cmNlUG9ydCA9IG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1NvdXJjZVBvcnRMaXN0KHRoaXMsIFwic291cmNlX3BvcnRcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc291cmNlUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlUG9ydDtcbiAgfVxuICBwdWJsaWMgcHV0U291cmNlUG9ydCh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNTb3VyY2VQb3J0W10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3NvdXJjZVBvcnQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNvdXJjZVBvcnQoKSB7XG4gICAgdGhpcy5fc291cmNlUG9ydC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VQb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZVBvcnQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRjcF9mbGFnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RjcEZsYWcgPSBuZXcgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25NYXRjaEF0dHJpYnV0ZXNUY3BGbGFnTGlzdCh0aGlzLCBcInRjcF9mbGFnXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRjcEZsYWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RjcEZsYWc7XG4gIH1cbiAgcHVibGljIHB1dFRjcEZsYWcodmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzVGNwRmxhZ1tdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90Y3BGbGFnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUY3BGbGFnKCkge1xuICAgIHRoaXMuX3RjcEZsYWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGNwRmxhZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90Y3BGbGFnLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNhY3Rpb25zIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNhY3Rpb25zfVxuICAqL1xuICByZWFkb25seSBhY3Rpb25zOiBzdHJpbmdbXTtcbiAgLyoqXG4gICogbWF0Y2hfYXR0cmlidXRlcyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjbWF0Y2hfYXR0cmlidXRlcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjbWF0Y2hfYXR0cmlidXRlc31cbiAgKi9cbiAgcmVhZG9ubHkgbWF0Y2hBdHRyaWJ1dGVzOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25PdXRwdXRSZWZlcmVuY2UgfCBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5hY3Rpb25zKSxcbiAgICBtYXRjaF9hdHRyaWJ1dGVzOiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc1RvVGVycmFmb3JtKHN0cnVjdCEubWF0Y2hBdHRyaWJ1dGVzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvblRvSGNsVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uT3V0cHV0UmVmZXJlbmNlIHwgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGFjdGlvbnM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5hY3Rpb25zKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gICAgbWF0Y2hfYXR0cmlidXRlczoge1xuICAgICAgdmFsdWU6IG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tYXRjaEF0dHJpYnV0ZXMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlc0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY3Rpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjdGlvbnMgPSB0aGlzLl9hY3Rpb25zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWF0Y2hBdHRyaWJ1dGVzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1hdGNoQXR0cmlidXRlcyA9IHRoaXMuX21hdGNoQXR0cmlidXRlcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21hdGNoQXR0cmlidXRlcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hY3Rpb25zID0gdmFsdWUuYWN0aW9ucztcbiAgICAgIHRoaXMuX21hdGNoQXR0cmlidXRlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUubWF0Y2hBdHRyaWJ1dGVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWN0aW9ucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBhY3Rpb25zKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhY3Rpb25zJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWN0aW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hY3Rpb25zID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9ucztcbiAgfVxuXG4gIC8vIG1hdGNoX2F0dHJpYnV0ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWF0Y2hBdHRyaWJ1dGVzID0gbmV3IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uTWF0Y2hBdHRyaWJ1dGVzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwibWF0Y2hfYXR0cmlidXRlc1wiKTtcbiAgcHVibGljIGdldCBtYXRjaEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoQXR0cmlidXRlcztcbiAgfVxuICBwdWJsaWMgcHV0TWF0Y2hBdHRyaWJ1dGVzKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbk1hdGNoQXR0cmlidXRlcykge1xuICAgIHRoaXMuX21hdGNoQXR0cmlidXRlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hdGNoQXR0cmlidXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaEF0dHJpYnV0ZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGUge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNwcmlvcml0eSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjcHJpb3JpdHl9XG4gICovXG4gIHJlYWRvbmx5IHByaW9yaXR5OiBudW1iZXI7XG4gIC8qKlxuICAqIHJ1bGVfZGVmaW5pdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjcnVsZV9kZWZpbml0aW9uIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNydWxlX2RlZmluaXRpb259XG4gICovXG4gIHJlYWRvbmx5IHJ1bGVEZWZpbml0aW9uOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVSdWxlRGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVRvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZSB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByaW9yaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW9yaXR5KSxcbiAgICBydWxlX2RlZmluaXRpb246IG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVJ1bGVEZWZpbml0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5ydWxlRGVmaW5pdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHByaW9yaXR5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcmlvcml0eSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgcnVsZV9kZWZpbml0aW9uOiB7XG4gICAgICB2YWx1ZTogbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJ1bGVEZWZpbml0aW9uKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25MaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGUgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3ByaW9yaXR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByaW9yaXR5ID0gdGhpcy5fcHJpb3JpdHk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ydWxlRGVmaW5pdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ydWxlRGVmaW5pdGlvbiA9IHRoaXMuX3J1bGVEZWZpbml0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByaW9yaXR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcnVsZURlZmluaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlLnByaW9yaXR5O1xuICAgICAgdGhpcy5fcnVsZURlZmluaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnJ1bGVEZWZpbml0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIHByaW9yaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ByaW9yaXR5PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ByaW9yaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmlvcml0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJpb3JpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gIH1cblxuICAvLyBydWxlX2RlZmluaXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcnVsZURlZmluaXRpb24gPSBuZXcgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJydWxlX2RlZmluaXRpb25cIik7XG4gIHB1YmxpYyBnZXQgcnVsZURlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bGVEZWZpbml0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRSdWxlRGVmaW5pdGlvbih2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlUnVsZURlZmluaXRpb24pIHtcbiAgICB0aGlzLl9ydWxlRGVmaW5pdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bGVEZWZpbml0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bGVEZWZpbml0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZUxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVtdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1N0YXRlbGVzc1J1bGVPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnMge1xuICAvKipcbiAgKiBjdXN0b21fYWN0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNjdXN0b21fYWN0aW9uIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNjdXN0b21fYWN0aW9ufVxuICAqL1xuICByZWFkb25seSBjdXN0b21BY3Rpb24/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvbltdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHN0YXRlbGVzc19ydWxlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNzdGF0ZWxlc3NfcnVsZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjc3RhdGVsZXNzX3J1bGV9XG4gICovXG4gIHJlYWRvbmx5IHN0YXRlbGVzc1J1bGU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVtdIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zT3V0cHV0UmVmZXJlbmNlIHwgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY3VzdG9tX2FjdGlvbjogY2RrdGYubGlzdE1hcHBlcihuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvblRvVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLmN1c3RvbUFjdGlvbiksXG4gICAgc3RhdGVsZXNzX3J1bGU6IGNka3RmLmxpc3RNYXBwZXIobmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuc3RhdGVsZXNzUnVsZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc091dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjdXN0b21fYWN0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc0N1c3RvbUFjdGlvblRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLmN1c3RvbUFjdGlvbiksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25MaXN0XCIsXG4gICAgfSxcbiAgICBzdGF0ZWxlc3NfcnVsZToge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2wobmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlVG9IY2xUZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEuc3RhdGVsZXNzUnVsZSksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2N1c3RvbUFjdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jdXN0b21BY3Rpb24gPSB0aGlzLl9jdXN0b21BY3Rpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGF0ZWxlc3NSdWxlPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXRlbGVzc1J1bGUgPSB0aGlzLl9zdGF0ZWxlc3NSdWxlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jdXN0b21BY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0YXRlbGVzc1J1bGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY3VzdG9tQWN0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jdXN0b21BY3Rpb247XG4gICAgICB0aGlzLl9zdGF0ZWxlc3NSdWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zdGF0ZWxlc3NSdWxlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGN1c3RvbV9hY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tQWN0aW9uID0gbmV3IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zQ3VzdG9tQWN0aW9uTGlzdCh0aGlzLCBcImN1c3RvbV9hY3Rpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY3VzdG9tQWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21BY3Rpb247XG4gIH1cbiAgcHVibGljIHB1dEN1c3RvbUFjdGlvbih2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNDdXN0b21BY3Rpb25bXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY3VzdG9tQWN0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21BY3Rpb24oKSB7XG4gICAgdGhpcy5fY3VzdG9tQWN0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbUFjdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21BY3Rpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHN0YXRlbGVzc19ydWxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N0YXRlbGVzc1J1bGUgPSBuZXcgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNTdGF0ZWxlc3NSdWxlTGlzdCh0aGlzLCBcInN0YXRlbGVzc19ydWxlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHN0YXRlbGVzc1J1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlbGVzc1J1bGU7XG4gIH1cbiAgcHVibGljIHB1dFN0YXRlbGVzc1J1bGUodmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zU3RhdGVsZXNzUnVsZVtdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zdGF0ZWxlc3NSdWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdGVsZXNzUnVsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZWxlc3NSdWxlLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2Uge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNydWxlc19zdHJpbmcgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwI3J1bGVzX3N0cmluZ31cbiAgKi9cbiAgcmVhZG9ubHkgcnVsZXNTdHJpbmc/OiBzdHJpbmc7XG4gIC8qKlxuICAqIHJ1bGVzX3NvdXJjZV9saXN0IGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNydWxlc19zb3VyY2VfbGlzdCBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjcnVsZXNfc291cmNlX2xpc3R9XG4gICovXG4gIHJlYWRvbmx5IHJ1bGVzU291cmNlTGlzdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlUnVsZXNTb3VyY2VMaXN0U3RydWN0O1xuICAvKipcbiAgKiBzdGF0ZWZ1bF9ydWxlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNzdGF0ZWZ1bF9ydWxlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNzdGF0ZWZ1bF9ydWxlfVxuICAqL1xuICByZWFkb25seSBzdGF0ZWZ1bFJ1bGU/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZVtdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHN0YXRlbGVzc19ydWxlc19hbmRfY3VzdG9tX2FjdGlvbnMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwI3N0YXRlbGVzc19ydWxlc19hbmRfY3VzdG9tX2FjdGlvbnMgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwI3N0YXRlbGVzc19ydWxlc19hbmRfY3VzdG9tX2FjdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IHN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9ucz86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZU91dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJ1bGVzX3N0cmluZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ydWxlc1N0cmluZyksXG4gICAgcnVsZXNfc291cmNlX2xpc3Q6IG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlUnVsZXNTb3VyY2VMaXN0U3RydWN0VG9UZXJyYWZvcm0oc3RydWN0IS5ydWxlc1NvdXJjZUxpc3QpLFxuICAgIHN0YXRlZnVsX3J1bGU6IGNka3RmLmxpc3RNYXBwZXIobmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5zdGF0ZWZ1bFJ1bGUpLFxuICAgIHN0YXRlbGVzc19ydWxlc19hbmRfY3VzdG9tX2FjdGlvbnM6IG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VPdXRwdXRSZWZlcmVuY2UgfCBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgcnVsZXNfc3RyaW5nOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ydWxlc1N0cmluZyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcnVsZXNfc291cmNlX2xpc3Q6IHtcbiAgICAgIHZhbHVlOiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVJ1bGVzU291cmNlTGlzdFN0cnVjdFRvSGNsVGVycmFmb3JtKHN0cnVjdCEucnVsZXNTb3VyY2VMaXN0KSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VSdWxlc1NvdXJjZUxpc3RTdHJ1Y3RMaXN0XCIsXG4gICAgfSxcbiAgICBzdGF0ZWZ1bF9ydWxlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlZnVsUnVsZVRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnN0YXRlZnVsUnVsZSksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVMaXN0XCIsXG4gICAgfSxcbiAgICBzdGF0ZWxlc3NfcnVsZXNfYW5kX2N1c3RvbV9hY3Rpb25zOiB7XG4gICAgICB2YWx1ZTogbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9ucyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3J1bGVzU3RyaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJ1bGVzU3RyaW5nID0gdGhpcy5fcnVsZXNTdHJpbmc7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ydWxlc1NvdXJjZUxpc3Q/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucnVsZXNTb3VyY2VMaXN0ID0gdGhpcy5fcnVsZXNTb3VyY2VMaXN0Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhdGVmdWxSdWxlPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXRlZnVsUnVsZSA9IHRoaXMuX3N0YXRlZnVsUnVsZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9ucz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnMgPSB0aGlzLl9zdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3J1bGVzU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcnVsZXNTb3VyY2VMaXN0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGF0ZWZ1bFJ1bGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9ydWxlc1N0cmluZyA9IHZhbHVlLnJ1bGVzU3RyaW5nO1xuICAgICAgdGhpcy5fcnVsZXNTb3VyY2VMaXN0LmludGVybmFsVmFsdWUgPSB2YWx1ZS5ydWxlc1NvdXJjZUxpc3Q7XG4gICAgICB0aGlzLl9zdGF0ZWZ1bFJ1bGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnN0YXRlZnVsUnVsZTtcbiAgICAgIHRoaXMuX3N0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJ1bGVzX3N0cmluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ydWxlc1N0cmluZz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcnVsZXNTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdydWxlc19zdHJpbmcnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJ1bGVzU3RyaW5nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ydWxlc1N0cmluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJ1bGVzU3RyaW5nKCkge1xuICAgIHRoaXMuX3J1bGVzU3RyaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBydWxlc1N0cmluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ydWxlc1N0cmluZztcbiAgfVxuXG4gIC8vIHJ1bGVzX3NvdXJjZV9saXN0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3J1bGVzU291cmNlTGlzdCA9IG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVJ1bGVzU291cmNlTGlzdFN0cnVjdE91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInJ1bGVzX3NvdXJjZV9saXN0XCIpO1xuICBwdWJsaWMgZ2V0IHJ1bGVzU291cmNlTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZXNTb3VyY2VMaXN0O1xuICB9XG4gIHB1YmxpYyBwdXRSdWxlc1NvdXJjZUxpc3QodmFsdWU6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlUnVsZXNTb3VyY2VMaXN0U3RydWN0KSB7XG4gICAgdGhpcy5fcnVsZXNTb3VyY2VMaXN0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSdWxlc1NvdXJjZUxpc3QoKSB7XG4gICAgdGhpcy5fcnVsZXNTb3VyY2VMaXN0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bGVzU291cmNlTGlzdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ydWxlc1NvdXJjZUxpc3QuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHN0YXRlZnVsX3J1bGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhdGVmdWxSdWxlID0gbmV3IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVmdWxSdWxlTGlzdCh0aGlzLCBcInN0YXRlZnVsX3J1bGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc3RhdGVmdWxSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZWZ1bFJ1bGU7XG4gIH1cbiAgcHVibGljIHB1dFN0YXRlZnVsUnVsZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2VTdGF0ZWZ1bFJ1bGVbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc3RhdGVmdWxSdWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGF0ZWZ1bFJ1bGUoKSB7XG4gICAgdGhpcy5fc3RhdGVmdWxSdWxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXRlZnVsUnVsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZWZ1bFJ1bGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHN0YXRlbGVzc19ydWxlc19hbmRfY3VzdG9tX2FjdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zID0gbmV3IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlU3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwic3RhdGVsZXNzX3J1bGVzX2FuZF9jdXN0b21fYWN0aW9uc1wiKTtcbiAgcHVibGljIGdldCBzdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0U3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVN0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9ucykge1xuICAgIHRoaXMuX3N0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zKCkge1xuICAgIHRoaXMuX3N0YXRlbGVzc1J1bGVzQW5kQ3VzdG9tQWN0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0ZWxlc3NSdWxlc0FuZEN1c3RvbUFjdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVsZXNzUnVsZXNBbmRDdXN0b21BY3Rpb25zLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwU3RhdGVmdWxSdWxlT3B0aW9ucyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwI3J1bGVfb3JkZXIgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwI3J1bGVfb3JkZXJ9XG4gICovXG4gIHJlYWRvbmx5IHJ1bGVPcmRlcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwU3RhdGVmdWxSdWxlT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFN0YXRlZnVsUnVsZU9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBTdGF0ZWZ1bFJ1bGVPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJ1bGVfb3JkZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucnVsZU9yZGVyKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBTdGF0ZWZ1bFJ1bGVPcHRpb25zVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwU3RhdGVmdWxSdWxlT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFN0YXRlZnVsUnVsZU9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHJ1bGVfb3JkZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJ1bGVPcmRlciksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBTdGF0ZWZ1bFJ1bGVPcHRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBTdGF0ZWZ1bFJ1bGVPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9ydWxlT3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucnVsZU9yZGVyID0gdGhpcy5fcnVsZU9yZGVyO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwU3RhdGVmdWxSdWxlT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3J1bGVPcmRlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcnVsZU9yZGVyID0gdmFsdWUucnVsZU9yZGVyO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJ1bGVfb3JkZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcnVsZU9yZGVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBydWxlT3JkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdydWxlX29yZGVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBydWxlT3JkZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3J1bGVPcmRlciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBydWxlT3JkZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZU9yZGVyO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cCB7XG4gIC8qKlxuICAqIHJ1bGVfdmFyaWFibGVzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCNydWxlX3ZhcmlhYmxlcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjcnVsZV92YXJpYWJsZXN9XG4gICovXG4gIHJlYWRvbmx5IHJ1bGVWYXJpYWJsZXM/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzO1xuICAvKipcbiAgKiBydWxlc19zb3VyY2UgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwI3J1bGVzX3NvdXJjZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAjcnVsZXNfc291cmNlfVxuICAqL1xuICByZWFkb25seSBydWxlc1NvdXJjZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZXNTb3VyY2U7XG4gIC8qKlxuICAqIHN0YXRlZnVsX3J1bGVfb3B0aW9ucyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjc3RhdGVmdWxfcnVsZV9vcHRpb25zIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCNzdGF0ZWZ1bF9ydWxlX29wdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IHN0YXRlZnVsUnVsZU9wdGlvbnM/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBTdGF0ZWZ1bFJ1bGVPcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwT3V0cHV0UmVmZXJlbmNlIHwgTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJ1bGVfdmFyaWFibGVzOiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzVG9UZXJyYWZvcm0oc3RydWN0IS5ydWxlVmFyaWFibGVzKSxcbiAgICBydWxlc19zb3VyY2U6IG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVzU291cmNlVG9UZXJyYWZvcm0oc3RydWN0IS5ydWxlc1NvdXJjZSksXG4gICAgc3RhdGVmdWxfcnVsZV9vcHRpb25zOiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBTdGF0ZWZ1bFJ1bGVPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0ZWZ1bFJ1bGVPcHRpb25zKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBPdXRwdXRSZWZlcmVuY2UgfCBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIHJ1bGVfdmFyaWFibGVzOiB7XG4gICAgICB2YWx1ZTogbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlc1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucnVsZVZhcmlhYmxlcyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFJ1bGVWYXJpYWJsZXNMaXN0XCIsXG4gICAgfSxcbiAgICBydWxlc19zb3VyY2U6IHtcbiAgICAgIHZhbHVlOiBuZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZVRvSGNsVGVycmFmb3JtKHN0cnVjdCEucnVsZXNTb3VyY2UpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZUxpc3RcIixcbiAgICB9LFxuICAgIHN0YXRlZnVsX3J1bGVfb3B0aW9uczoge1xuICAgICAgdmFsdWU6IG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFN0YXRlZnVsUnVsZU9wdGlvbnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN0YXRlZnVsUnVsZU9wdGlvbnMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBTdGF0ZWZ1bFJ1bGVPcHRpb25zTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcnVsZVZhcmlhYmxlcz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ydWxlVmFyaWFibGVzID0gdGhpcy5fcnVsZVZhcmlhYmxlcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3J1bGVzU291cmNlPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJ1bGVzU291cmNlID0gdGhpcy5fcnVsZXNTb3VyY2U/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGF0ZWZ1bFJ1bGVPcHRpb25zPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXRlZnVsUnVsZU9wdGlvbnMgPSB0aGlzLl9zdGF0ZWZ1bFJ1bGVPcHRpb25zPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcnVsZVZhcmlhYmxlcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcnVsZXNTb3VyY2UuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0YXRlZnVsUnVsZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcnVsZVZhcmlhYmxlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUucnVsZVZhcmlhYmxlcztcbiAgICAgIHRoaXMuX3J1bGVzU291cmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5ydWxlc1NvdXJjZTtcbiAgICAgIHRoaXMuX3N0YXRlZnVsUnVsZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnN0YXRlZnVsUnVsZU9wdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgLy8gcnVsZV92YXJpYWJsZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcnVsZVZhcmlhYmxlcyA9IG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlVmFyaWFibGVzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwicnVsZV92YXJpYWJsZXNcIik7XG4gIHB1YmxpYyBnZXQgcnVsZVZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZVZhcmlhYmxlcztcbiAgfVxuICBwdWJsaWMgcHV0UnVsZVZhcmlhYmxlcyh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwUnVsZVZhcmlhYmxlcykge1xuICAgIHRoaXMuX3J1bGVWYXJpYWJsZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJ1bGVWYXJpYWJsZXMoKSB7XG4gICAgdGhpcy5fcnVsZVZhcmlhYmxlcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBydWxlVmFyaWFibGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bGVWYXJpYWJsZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHJ1bGVzX3NvdXJjZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9ydWxlc1NvdXJjZSA9IG5ldyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInJ1bGVzX3NvdXJjZVwiKTtcbiAgcHVibGljIGdldCBydWxlc1NvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZXNTb3VyY2U7XG4gIH1cbiAgcHVibGljIHB1dFJ1bGVzU291cmNlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBSdWxlc1NvdXJjZSkge1xuICAgIHRoaXMuX3J1bGVzU291cmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcnVsZXNTb3VyY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZXNTb3VyY2UuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHN0YXRlZnVsX3J1bGVfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGF0ZWZ1bFJ1bGVPcHRpb25zID0gbmV3IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFN0YXRlZnVsUnVsZU9wdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJzdGF0ZWZ1bF9ydWxlX29wdGlvbnNcIik7XG4gIHB1YmxpYyBnZXQgc3RhdGVmdWxSdWxlT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVmdWxSdWxlT3B0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0U3RhdGVmdWxSdWxlT3B0aW9ucyh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwU3RhdGVmdWxSdWxlT3B0aW9ucykge1xuICAgIHRoaXMuX3N0YXRlZnVsUnVsZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXRlZnVsUnVsZU9wdGlvbnMoKSB7XG4gICAgdGhpcy5fc3RhdGVmdWxSdWxlT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0ZWZ1bFJ1bGVPcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlZnVsUnVsZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAgYXdzX25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwfVxuKi9cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiYXdzX25ldHdvcmtmaXJld2FsbF9ydWxlX2dyb3VwXCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXAgdG8gaW1wb3J0XG4gICogQHBhcmFtIGltcG9ydEZyb21JZCBUaGUgaWQgb2YgdGhlIGV4aXN0aW5nIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXAjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cCB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXBcIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCBhd3NfbmV0d29ya2ZpcmV3YWxsX3J1bGVfZ3JvdXB9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cENvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19uZXR3b3JrZmlyZXdhbGxfcnVsZV9ncm91cCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnLFxuICAgICAgICBwcm92aWRlclZlcnNpb246ICczLjc2LjEnLFxuICAgICAgICBwcm92aWRlclZlcnNpb25Db25zdHJhaW50OiAnfj4gMy4wJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlLFxuICAgICAgcHJvdmlzaW9uZXJzOiBjb25maWcucHJvdmlzaW9uZXJzLFxuICAgICAgY29ubmVjdGlvbjogY29uZmlnLmNvbm5lY3Rpb24sXG4gICAgICBmb3JFYWNoOiBjb25maWcuZm9yRWFjaFxuICAgIH0pO1xuICAgIHRoaXMuX2NhcGFjaXR5ID0gY29uZmlnLmNhcGFjaXR5O1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gY29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9ydWxlcyA9IGNvbmZpZy5ydWxlcztcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3R5cGUgPSBjb25maWcudHlwZTtcbiAgICB0aGlzLl9ydWxlR3JvdXAuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5ydWxlR3JvdXA7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY2FwYWNpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGNhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jYXBhY2l0eSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXBhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eTtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHJ1bGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3J1bGVzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBydWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3J1bGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBydWxlcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcnVsZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSdWxlcygpIHtcbiAgICB0aGlzLl9ydWxlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcnVsZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZXM7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFncycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzX2FsbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgLy8gdXBkYXRlX3Rva2VuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXBkYXRlVG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1cGRhdGVfdG9rZW4nKTtcbiAgfVxuXG4gIC8vIHJ1bGVfZ3JvdXAgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcnVsZUdyb3VwID0gbmV3IE5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cE91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInJ1bGVfZ3JvdXBcIik7XG4gIHB1YmxpYyBnZXQgcnVsZUdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLl9ydWxlR3JvdXA7XG4gIH1cbiAgcHVibGljIHB1dFJ1bGVHcm91cCh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwKSB7XG4gICAgdGhpcy5fcnVsZUdyb3VwLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSdWxlR3JvdXAoKSB7XG4gICAgdGhpcy5fcnVsZUdyb3VwLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bGVHcm91cElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ydWxlR3JvdXAuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2NhcGFjaXR5KSxcbiAgICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBydWxlczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcnVsZXMpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90eXBlKSxcbiAgICAgIHJ1bGVfZ3JvdXA6IG5ldHdvcmtmaXJld2FsbFJ1bGVHcm91cFJ1bGVHcm91cFRvVGVycmFmb3JtKHRoaXMuX3J1bGVHcm91cC5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGNhcGFjaXR5OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9jYXBhY2l0eSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBydWxlczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fcnVsZXMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0YWdzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgdGFnc19hbGw6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl90eXBlKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgcnVsZV9ncm91cDoge1xuICAgICAgICB2YWx1ZTogbmV0d29ya2ZpcmV3YWxsUnVsZUdyb3VwUnVsZUdyb3VwVG9IY2xUZXJyYWZvcm0odGhpcy5fcnVsZUdyb3VwLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJOZXR3b3JrZmlyZXdhbGxSdWxlR3JvdXBSdWxlR3JvdXBMaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=