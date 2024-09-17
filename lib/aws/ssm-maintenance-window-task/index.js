"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SsmMaintenanceWindowTask = exports.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference = exports.ssmMaintenanceWindowTaskTaskInvocationParametersToHclTerraform = exports.ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform = exports.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference = exports.ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToHclTerraform = exports.ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform = exports.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference = exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToHclTerraform = exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform = exports.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList = exports.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference = exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToHclTerraform = exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform = exports.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference = exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToHclTerraform = exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform = exports.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference = exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToHclTerraform = exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform = exports.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference = exports.ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToHclTerraform = exports.ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform = exports.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference = exports.ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToHclTerraform = exports.ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform = exports.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList = exports.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference = exports.ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToHclTerraform = exports.ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform = exports.SsmMaintenanceWindowTaskTargetsList = exports.SsmMaintenanceWindowTaskTargetsOutputReference = exports.ssmMaintenanceWindowTaskTargetsToHclTerraform = exports.ssmMaintenanceWindowTaskTargetsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function ssmMaintenanceWindowTaskTargetsToTerraform(struct) {
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
exports.ssmMaintenanceWindowTaskTargetsToTerraform = ssmMaintenanceWindowTaskTargetsToTerraform;
function ssmMaintenanceWindowTaskTargetsToHclTerraform(struct) {
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
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ssmMaintenanceWindowTaskTargetsToHclTerraform = ssmMaintenanceWindowTaskTargetsToHclTerraform;
class SsmMaintenanceWindowTaskTargetsOutputReference extends cdktf.ComplexObject {
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
exports.SsmMaintenanceWindowTaskTargetsOutputReference = SsmMaintenanceWindowTaskTargetsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTargetsOutputReference[_a] = { fqn: "@cdktf/aws-cdk.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference", version: "0.0.0" };
class SsmMaintenanceWindowTaskTargetsList extends cdktf.ComplexList {
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
        return new SsmMaintenanceWindowTaskTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.SsmMaintenanceWindowTaskTargetsList = SsmMaintenanceWindowTaskTargetsList;
_b = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTargetsList[_b] = { fqn: "@cdktf/aws-cdk.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList", version: "0.0.0" };
function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform(struct) {
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
exports.ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform;
function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToHclTerraform(struct) {
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
exports.ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToHclTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToHclTerraform;
class SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference extends cdktf.ComplexObject {
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
exports.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference = SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference;
_c = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference[_c] = { fqn: "@cdktf/aws-cdk.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference", version: "0.0.0" };
class SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList extends cdktf.ComplexList {
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
        return new SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList = SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList;
_d = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList[_d] = { fqn: "@cdktf/aws-cdk.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList", version: "0.0.0" };
function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        document_version: cdktf.stringToTerraform(struct.documentVersion),
        parameter: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform, true)(struct.parameter),
    };
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform;
function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        document_version: {
            value: cdktf.stringToHclTerraform(struct.documentVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameter: {
            value: cdktf.listMapperHcl(ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToHclTerraform, true)(struct.parameter),
            isBlock: true,
            type: "set",
            storageClassType: "SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToHclTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToHclTerraform;
class SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // parameter - computed: false, optional: true, required: false
        this._parameter = new SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList(this, "parameter", true);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._documentVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.documentVersion = this._documentVersion;
        }
        if (this._parameter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameter = this._parameter?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._documentVersion = undefined;
            this._parameter.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._documentVersion = value.documentVersion;
            this._parameter.internalValue = value.parameter;
        }
    }
    get documentVersion() {
        return this.getStringAttribute('document_version');
    }
    set documentVersion(value) {
        this._documentVersion = value;
    }
    resetDocumentVersion() {
        this._documentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get documentVersionInput() {
        return this._documentVersion;
    }
    get parameter() {
        return this._parameter;
    }
    putParameter(value) {
        this._parameter.internalValue = value;
    }
    resetParameter() {
        this._parameter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parameterInput() {
        return this._parameter.internalValue;
    }
}
exports.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference = SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference;
_e = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference[_e] = { fqn: "@cdktf/aws-cdk.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference", version: "0.0.0" };
function ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        client_context: cdktf.stringToTerraform(struct.clientContext),
        payload: cdktf.stringToTerraform(struct.payload),
        qualifier: cdktf.stringToTerraform(struct.qualifier),
    };
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform;
function ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        client_context: {
            value: cdktf.stringToHclTerraform(struct.clientContext),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: cdktf.stringToHclTerraform(struct.payload),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        qualifier: {
            value: cdktf.stringToHclTerraform(struct.qualifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToHclTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToHclTerraform;
class SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference extends cdktf.ComplexObject {
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
        if (this._clientContext !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientContext = this._clientContext;
        }
        if (this._payload !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload;
        }
        if (this._qualifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.qualifier = this._qualifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._clientContext = undefined;
            this._payload = undefined;
            this._qualifier = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._clientContext = value.clientContext;
            this._payload = value.payload;
            this._qualifier = value.qualifier;
        }
    }
    get clientContext() {
        return this.getStringAttribute('client_context');
    }
    set clientContext(value) {
        this._clientContext = value;
    }
    resetClientContext() {
        this._clientContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientContextInput() {
        return this._clientContext;
    }
    get payload() {
        return this.getStringAttribute('payload');
    }
    set payload(value) {
        this._payload = value;
    }
    resetPayload() {
        this._payload = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get payloadInput() {
        return this._payload;
    }
    get qualifier() {
        return this.getStringAttribute('qualifier');
    }
    set qualifier(value) {
        this._qualifier = value;
    }
    resetQualifier() {
        this._qualifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get qualifierInput() {
        return this._qualifier;
    }
}
exports.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference = SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference;
_f = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference[_f] = { fqn: "@cdktf/aws-cdk.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference", version: "0.0.0" };
function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudwatch_log_group_name: cdktf.stringToTerraform(struct.cloudwatchLogGroupName),
        cloudwatch_output_enabled: cdktf.booleanToTerraform(struct.cloudwatchOutputEnabled),
    };
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform;
function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cloudwatch_log_group_name: {
            value: cdktf.stringToHclTerraform(struct.cloudwatchLogGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloudwatch_output_enabled: {
            value: cdktf.booleanToHclTerraform(struct.cloudwatchOutputEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToHclTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToHclTerraform;
class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudwatchLogGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogGroupName = this._cloudwatchLogGroupName;
        }
        if (this._cloudwatchOutputEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchOutputEnabled = this._cloudwatchOutputEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cloudwatchLogGroupName = undefined;
            this._cloudwatchOutputEnabled = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cloudwatchLogGroupName = value.cloudwatchLogGroupName;
            this._cloudwatchOutputEnabled = value.cloudwatchOutputEnabled;
        }
    }
    get cloudwatchLogGroupName() {
        return this.getStringAttribute('cloudwatch_log_group_name');
    }
    set cloudwatchLogGroupName(value) {
        this._cloudwatchLogGroupName = value;
    }
    resetCloudwatchLogGroupName() {
        this._cloudwatchLogGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchLogGroupNameInput() {
        return this._cloudwatchLogGroupName;
    }
    get cloudwatchOutputEnabled() {
        return this.getBooleanAttribute('cloudwatch_output_enabled');
    }
    set cloudwatchOutputEnabled(value) {
        this._cloudwatchOutputEnabled = value;
    }
    resetCloudwatchOutputEnabled() {
        this._cloudwatchOutputEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchOutputEnabledInput() {
        return this._cloudwatchOutputEnabled;
    }
}
exports.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference = SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference;
_g = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference[_g] = { fqn: "@cdktf/aws-cdk.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference", version: "0.0.0" };
function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        notification_arn: cdktf.stringToTerraform(struct.notificationArn),
        notification_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.notificationEvents),
        notification_type: cdktf.stringToTerraform(struct.notificationType),
    };
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform;
function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        notification_arn: {
            value: cdktf.stringToHclTerraform(struct.notificationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        notification_events: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.notificationEvents),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        notification_type: {
            value: cdktf.stringToHclTerraform(struct.notificationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToHclTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToHclTerraform;
class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._notificationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationArn = this._notificationArn;
        }
        if (this._notificationEvents !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationEvents = this._notificationEvents;
        }
        if (this._notificationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationType = this._notificationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._notificationArn = undefined;
            this._notificationEvents = undefined;
            this._notificationType = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._notificationArn = value.notificationArn;
            this._notificationEvents = value.notificationEvents;
            this._notificationType = value.notificationType;
        }
    }
    get notificationArn() {
        return this.getStringAttribute('notification_arn');
    }
    set notificationArn(value) {
        this._notificationArn = value;
    }
    resetNotificationArn() {
        this._notificationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notificationArnInput() {
        return this._notificationArn;
    }
    get notificationEvents() {
        return this.getListAttribute('notification_events');
    }
    set notificationEvents(value) {
        this._notificationEvents = value;
    }
    resetNotificationEvents() {
        this._notificationEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notificationEventsInput() {
        return this._notificationEvents;
    }
    get notificationType() {
        return this.getStringAttribute('notification_type');
    }
    set notificationType(value) {
        this._notificationType = value;
    }
    resetNotificationType() {
        this._notificationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notificationTypeInput() {
        return this._notificationType;
    }
}
exports.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference = SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference;
_h = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference[_h] = { fqn: "@cdktf/aws-cdk.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference", version: "0.0.0" };
function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform(struct) {
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
exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform;
function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToHclTerraform(struct) {
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
exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToHclTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToHclTerraform;
class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference extends cdktf.ComplexObject {
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
exports.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference = SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference;
_j = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference[_j] = { fqn: "@cdktf/aws-cdk.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference", version: "0.0.0" };
class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList extends cdktf.ComplexList {
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
        return new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList = SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList;
_k = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList[_k] = { fqn: "@cdktf/aws-cdk.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList", version: "0.0.0" };
function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comment: cdktf.stringToTerraform(struct.comment),
        document_hash: cdktf.stringToTerraform(struct.documentHash),
        document_hash_type: cdktf.stringToTerraform(struct.documentHashType),
        document_version: cdktf.stringToTerraform(struct.documentVersion),
        output_s3_bucket: cdktf.stringToTerraform(struct.outputS3Bucket),
        output_s3_key_prefix: cdktf.stringToTerraform(struct.outputS3KeyPrefix),
        service_role_arn: cdktf.stringToTerraform(struct.serviceRoleArn),
        timeout_seconds: cdktf.numberToTerraform(struct.timeoutSeconds),
        cloudwatch_config: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform(struct.cloudwatchConfig),
        notification_config: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform(struct.notificationConfig),
        parameter: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform, true)(struct.parameter),
    };
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform;
function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        comment: {
            value: cdktf.stringToHclTerraform(struct.comment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        document_hash: {
            value: cdktf.stringToHclTerraform(struct.documentHash),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        document_hash_type: {
            value: cdktf.stringToHclTerraform(struct.documentHashType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        document_version: {
            value: cdktf.stringToHclTerraform(struct.documentVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_s3_bucket: {
            value: cdktf.stringToHclTerraform(struct.outputS3Bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_s3_key_prefix: {
            value: cdktf.stringToHclTerraform(struct.outputS3KeyPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_role_arn: {
            value: cdktf.stringToHclTerraform(struct.serviceRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout_seconds: {
            value: cdktf.numberToHclTerraform(struct.timeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        cloudwatch_config: {
            value: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToHclTerraform(struct.cloudwatchConfig),
            isBlock: true,
            type: "list",
            storageClassType: "SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigList",
        },
        notification_config: {
            value: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToHclTerraform(struct.notificationConfig),
            isBlock: true,
            type: "list",
            storageClassType: "SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigList",
        },
        parameter: {
            value: cdktf.listMapperHcl(ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToHclTerraform, true)(struct.parameter),
            isBlock: true,
            type: "set",
            storageClassType: "SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToHclTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToHclTerraform;
class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // cloudwatch_config - computed: false, optional: true, required: false
        this._cloudwatchConfig = new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference(this, "cloudwatch_config");
        // notification_config - computed: false, optional: true, required: false
        this._notificationConfig = new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference(this, "notification_config");
        // parameter - computed: false, optional: true, required: false
        this._parameter = new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList(this, "parameter", true);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._comment !== undefined) {
            hasAnyValues = true;
            internalValueResult.comment = this._comment;
        }
        if (this._documentHash !== undefined) {
            hasAnyValues = true;
            internalValueResult.documentHash = this._documentHash;
        }
        if (this._documentHashType !== undefined) {
            hasAnyValues = true;
            internalValueResult.documentHashType = this._documentHashType;
        }
        if (this._documentVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.documentVersion = this._documentVersion;
        }
        if (this._outputS3Bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputS3Bucket = this._outputS3Bucket;
        }
        if (this._outputS3KeyPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputS3KeyPrefix = this._outputS3KeyPrefix;
        }
        if (this._serviceRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceRoleArn = this._serviceRoleArn;
        }
        if (this._timeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutSeconds = this._timeoutSeconds;
        }
        if (this._cloudwatchConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchConfig = this._cloudwatchConfig?.internalValue;
        }
        if (this._notificationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationConfig = this._notificationConfig?.internalValue;
        }
        if (this._parameter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameter = this._parameter?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comment = undefined;
            this._documentHash = undefined;
            this._documentHashType = undefined;
            this._documentVersion = undefined;
            this._outputS3Bucket = undefined;
            this._outputS3KeyPrefix = undefined;
            this._serviceRoleArn = undefined;
            this._timeoutSeconds = undefined;
            this._cloudwatchConfig.internalValue = undefined;
            this._notificationConfig.internalValue = undefined;
            this._parameter.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comment = value.comment;
            this._documentHash = value.documentHash;
            this._documentHashType = value.documentHashType;
            this._documentVersion = value.documentVersion;
            this._outputS3Bucket = value.outputS3Bucket;
            this._outputS3KeyPrefix = value.outputS3KeyPrefix;
            this._serviceRoleArn = value.serviceRoleArn;
            this._timeoutSeconds = value.timeoutSeconds;
            this._cloudwatchConfig.internalValue = value.cloudwatchConfig;
            this._notificationConfig.internalValue = value.notificationConfig;
            this._parameter.internalValue = value.parameter;
        }
    }
    get comment() {
        return this.getStringAttribute('comment');
    }
    set comment(value) {
        this._comment = value;
    }
    resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commentInput() {
        return this._comment;
    }
    get documentHash() {
        return this.getStringAttribute('document_hash');
    }
    set documentHash(value) {
        this._documentHash = value;
    }
    resetDocumentHash() {
        this._documentHash = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get documentHashInput() {
        return this._documentHash;
    }
    get documentHashType() {
        return this.getStringAttribute('document_hash_type');
    }
    set documentHashType(value) {
        this._documentHashType = value;
    }
    resetDocumentHashType() {
        this._documentHashType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get documentHashTypeInput() {
        return this._documentHashType;
    }
    get documentVersion() {
        return this.getStringAttribute('document_version');
    }
    set documentVersion(value) {
        this._documentVersion = value;
    }
    resetDocumentVersion() {
        this._documentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get documentVersionInput() {
        return this._documentVersion;
    }
    get outputS3Bucket() {
        return this.getStringAttribute('output_s3_bucket');
    }
    set outputS3Bucket(value) {
        this._outputS3Bucket = value;
    }
    resetOutputS3Bucket() {
        this._outputS3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get outputS3BucketInput() {
        return this._outputS3Bucket;
    }
    get outputS3KeyPrefix() {
        return this.getStringAttribute('output_s3_key_prefix');
    }
    set outputS3KeyPrefix(value) {
        this._outputS3KeyPrefix = value;
    }
    resetOutputS3KeyPrefix() {
        this._outputS3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get outputS3KeyPrefixInput() {
        return this._outputS3KeyPrefix;
    }
    get serviceRoleArn() {
        return this.getStringAttribute('service_role_arn');
    }
    set serviceRoleArn(value) {
        this._serviceRoleArn = value;
    }
    resetServiceRoleArn() {
        this._serviceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceRoleArnInput() {
        return this._serviceRoleArn;
    }
    get timeoutSeconds() {
        return this.getNumberAttribute('timeout_seconds');
    }
    set timeoutSeconds(value) {
        this._timeoutSeconds = value;
    }
    resetTimeoutSeconds() {
        this._timeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutSecondsInput() {
        return this._timeoutSeconds;
    }
    get cloudwatchConfig() {
        return this._cloudwatchConfig;
    }
    putCloudwatchConfig(value) {
        this._cloudwatchConfig.internalValue = value;
    }
    resetCloudwatchConfig() {
        this._cloudwatchConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchConfigInput() {
        return this._cloudwatchConfig.internalValue;
    }
    get notificationConfig() {
        return this._notificationConfig;
    }
    putNotificationConfig(value) {
        this._notificationConfig.internalValue = value;
    }
    resetNotificationConfig() {
        this._notificationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notificationConfigInput() {
        return this._notificationConfig.internalValue;
    }
    get parameter() {
        return this._parameter;
    }
    putParameter(value) {
        this._parameter.internalValue = value;
    }
    resetParameter() {
        this._parameter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parameterInput() {
        return this._parameter.internalValue;
    }
}
exports.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference = SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference;
_l = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference[_l] = { fqn: "@cdktf/aws-cdk.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference", version: "0.0.0" };
function ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        input: cdktf.stringToTerraform(struct.input),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform;
function ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        input: {
            value: cdktf.stringToHclTerraform(struct.input),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToHclTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToHclTerraform;
class SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference extends cdktf.ComplexObject {
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
        if (this._input !== undefined) {
            hasAnyValues = true;
            internalValueResult.input = this._input;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._input = undefined;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._input = value.input;
            this._name = value.name;
        }
    }
    get input() {
        return this.getStringAttribute('input');
    }
    set input(value) {
        this._input = value;
    }
    resetInput() {
        this._input = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inputInput() {
        return this._input;
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
}
exports.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference = SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference;
_m = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference[_m] = { fqn: "@cdktf/aws-cdk.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference", version: "0.0.0" };
function ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        automation_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform(struct.automationParameters),
        lambda_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform(struct.lambdaParameters),
        run_command_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform(struct.runCommandParameters),
        step_functions_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform(struct.stepFunctionsParameters),
    };
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform;
function ssmMaintenanceWindowTaskTaskInvocationParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        automation_parameters: {
            value: ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToHclTerraform(struct.automationParameters),
            isBlock: true,
            type: "list",
            storageClassType: "SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersList",
        },
        lambda_parameters: {
            value: ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToHclTerraform(struct.lambdaParameters),
            isBlock: true,
            type: "list",
            storageClassType: "SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersList",
        },
        run_command_parameters: {
            value: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToHclTerraform(struct.runCommandParameters),
            isBlock: true,
            type: "list",
            storageClassType: "SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersList",
        },
        step_functions_parameters: {
            value: ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToHclTerraform(struct.stepFunctionsParameters),
            isBlock: true,
            type: "list",
            storageClassType: "SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersToHclTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersToHclTerraform;
class SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // automation_parameters - computed: false, optional: true, required: false
        this._automationParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference(this, "automation_parameters");
        // lambda_parameters - computed: false, optional: true, required: false
        this._lambdaParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference(this, "lambda_parameters");
        // run_command_parameters - computed: false, optional: true, required: false
        this._runCommandParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference(this, "run_command_parameters");
        // step_functions_parameters - computed: false, optional: true, required: false
        this._stepFunctionsParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference(this, "step_functions_parameters");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._automationParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.automationParameters = this._automationParameters?.internalValue;
        }
        if (this._lambdaParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaParameters = this._lambdaParameters?.internalValue;
        }
        if (this._runCommandParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.runCommandParameters = this._runCommandParameters?.internalValue;
        }
        if (this._stepFunctionsParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stepFunctionsParameters = this._stepFunctionsParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._automationParameters.internalValue = undefined;
            this._lambdaParameters.internalValue = undefined;
            this._runCommandParameters.internalValue = undefined;
            this._stepFunctionsParameters.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._automationParameters.internalValue = value.automationParameters;
            this._lambdaParameters.internalValue = value.lambdaParameters;
            this._runCommandParameters.internalValue = value.runCommandParameters;
            this._stepFunctionsParameters.internalValue = value.stepFunctionsParameters;
        }
    }
    get automationParameters() {
        return this._automationParameters;
    }
    putAutomationParameters(value) {
        this._automationParameters.internalValue = value;
    }
    resetAutomationParameters() {
        this._automationParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get automationParametersInput() {
        return this._automationParameters.internalValue;
    }
    get lambdaParameters() {
        return this._lambdaParameters;
    }
    putLambdaParameters(value) {
        this._lambdaParameters.internalValue = value;
    }
    resetLambdaParameters() {
        this._lambdaParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaParametersInput() {
        return this._lambdaParameters.internalValue;
    }
    get runCommandParameters() {
        return this._runCommandParameters;
    }
    putRunCommandParameters(value) {
        this._runCommandParameters.internalValue = value;
    }
    resetRunCommandParameters() {
        this._runCommandParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get runCommandParametersInput() {
        return this._runCommandParameters.internalValue;
    }
    get stepFunctionsParameters() {
        return this._stepFunctionsParameters;
    }
    putStepFunctionsParameters(value) {
        this._stepFunctionsParameters.internalValue = value;
    }
    resetStepFunctionsParameters() {
        this._stepFunctionsParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stepFunctionsParametersInput() {
        return this._stepFunctionsParameters.internalValue;
    }
}
exports.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference = SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference;
_o = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference[_o] = { fqn: "@cdktf/aws-cdk.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ssm_maintenance_window_task aws_ssm_maintenance_window_task}
*/
class SsmMaintenanceWindowTask extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SsmMaintenanceWindowTask resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsmMaintenanceWindowTask to import
    * @param importFromId The id of the existing SsmMaintenanceWindowTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ssm_maintenance_window_task#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsmMaintenanceWindowTask to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssm_maintenance_window_task", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ssm_maintenance_window_task aws_ssm_maintenance_window_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmMaintenanceWindowTaskConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ssm_maintenance_window_task',
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
        // targets - computed: false, optional: true, required: false
        this._targets = new SsmMaintenanceWindowTaskTargetsList(this, "targets", false);
        // task_invocation_parameters - computed: false, optional: true, required: false
        this._taskInvocationParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference(this, "task_invocation_parameters");
        this._description = config.description;
        this._id = config.id;
        this._maxConcurrency = config.maxConcurrency;
        this._maxErrors = config.maxErrors;
        this._name = config.name;
        this._priority = config.priority;
        this._serviceRoleArn = config.serviceRoleArn;
        this._taskArn = config.taskArn;
        this._taskType = config.taskType;
        this._windowId = config.windowId;
        this._targets.internalValue = config.targets;
        this._taskInvocationParameters.internalValue = config.taskInvocationParameters;
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
    get maxConcurrency() {
        return this.getStringAttribute('max_concurrency');
    }
    set maxConcurrency(value) {
        this._maxConcurrency = value;
    }
    // Temporarily expose input value. Use with caution.
    get maxConcurrencyInput() {
        return this._maxConcurrency;
    }
    get maxErrors() {
        return this.getStringAttribute('max_errors');
    }
    set maxErrors(value) {
        this._maxErrors = value;
    }
    // Temporarily expose input value. Use with caution.
    get maxErrorsInput() {
        return this._maxErrors;
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
    get serviceRoleArn() {
        return this.getStringAttribute('service_role_arn');
    }
    set serviceRoleArn(value) {
        this._serviceRoleArn = value;
    }
    resetServiceRoleArn() {
        this._serviceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceRoleArnInput() {
        return this._serviceRoleArn;
    }
    get taskArn() {
        return this.getStringAttribute('task_arn');
    }
    set taskArn(value) {
        this._taskArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get taskArnInput() {
        return this._taskArn;
    }
    get taskType() {
        return this.getStringAttribute('task_type');
    }
    set taskType(value) {
        this._taskType = value;
    }
    // Temporarily expose input value. Use with caution.
    get taskTypeInput() {
        return this._taskType;
    }
    get windowId() {
        return this.getStringAttribute('window_id');
    }
    set windowId(value) {
        this._windowId = value;
    }
    // Temporarily expose input value. Use with caution.
    get windowIdInput() {
        return this._windowId;
    }
    get targets() {
        return this._targets;
    }
    putTargets(value) {
        this._targets.internalValue = value;
    }
    resetTargets() {
        this._targets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetsInput() {
        return this._targets.internalValue;
    }
    get taskInvocationParameters() {
        return this._taskInvocationParameters;
    }
    putTaskInvocationParameters(value) {
        this._taskInvocationParameters.internalValue = value;
    }
    resetTaskInvocationParameters() {
        this._taskInvocationParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get taskInvocationParametersInput() {
        return this._taskInvocationParameters.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            description: cdktf.stringToTerraform(this._description),
            id: cdktf.stringToTerraform(this._id),
            max_concurrency: cdktf.stringToTerraform(this._maxConcurrency),
            max_errors: cdktf.stringToTerraform(this._maxErrors),
            name: cdktf.stringToTerraform(this._name),
            priority: cdktf.numberToTerraform(this._priority),
            service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
            task_arn: cdktf.stringToTerraform(this._taskArn),
            task_type: cdktf.stringToTerraform(this._taskType),
            window_id: cdktf.stringToTerraform(this._windowId),
            targets: cdktf.listMapper(ssmMaintenanceWindowTaskTargetsToTerraform, true)(this._targets.internalValue),
            task_invocation_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform(this._taskInvocationParameters.internalValue),
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
            max_concurrency: {
                value: cdktf.stringToHclTerraform(this._maxConcurrency),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_errors: {
                value: cdktf.stringToHclTerraform(this._maxErrors),
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
            priority: {
                value: cdktf.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            service_role_arn: {
                value: cdktf.stringToHclTerraform(this._serviceRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            task_arn: {
                value: cdktf.stringToHclTerraform(this._taskArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            task_type: {
                value: cdktf.stringToHclTerraform(this._taskType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            window_id: {
                value: cdktf.stringToHclTerraform(this._windowId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            targets: {
                value: cdktf.listMapperHcl(ssmMaintenanceWindowTaskTargetsToHclTerraform, true)(this._targets.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "SsmMaintenanceWindowTaskTargetsList",
            },
            task_invocation_parameters: {
                value: ssmMaintenanceWindowTaskTaskInvocationParametersToHclTerraform(this._taskInvocationParameters.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "SsmMaintenanceWindowTaskTaskInvocationParametersList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.SsmMaintenanceWindowTask = SsmMaintenanceWindowTask;
_p = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTask[_p] = { fqn: "@cdktf/aws-cdk.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
SsmMaintenanceWindowTask.tfResourceType = "aws_ssm_maintenance_window_task";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3NzbS1tYWludGVuYW5jZS13aW5kb3ctdGFzay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLCtCQUErQjtBQXdFL0IsU0FBZ0IsMENBQTBDLENBQUMsTUFBNEQ7SUFDckgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUN6RSxDQUFBO0FBQ0gsQ0FBQztBQVRELGdHQVNDO0FBR0QsU0FBZ0IsNkNBQTZDLENBQUMsTUFBNEQ7SUFDeEgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWixHQUFHLEVBQUU7WUFDSCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7WUFDOUMsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztZQUM3RSxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osZ0JBQWdCLEVBQUUsWUFBWTtTQUMvQjtLQUNGLENBQUM7SUFFRiw4QkFBOEI7SUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzVILENBQUM7QUF0QkQsc0dBc0JDO0FBRUQsTUFBYSw4Q0FBK0MsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUlyRjs7Ozs7TUFLRTtJQUNGLFlBQW1CLGlCQUE2QyxFQUFFLGtCQUEwQixFQUFFLGtCQUEwQixFQUFFLHNCQUErQjtRQUN2SixLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQVZuRixrQkFBYSxHQUFHLEtBQUssQ0FBQztJQVc5QixDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDNUIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQy9CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUMsQ0FBQztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFzRTtRQUM3RixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUMzQixDQUFDO2FBQ0ksSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7YUFDSSxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUlELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxJQUFXLEdBQUcsQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBSUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWU7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7O0FBMUVILHdHQTJFQzs7O0FBRUQsTUFBYSxtQ0FBb0MsU0FBUSxLQUFLLENBQUMsV0FBVztJQUd4RTs7OztNQUlFO0lBQ0YsWUFBc0IsaUJBQTZDLEVBQVksa0JBQTBCLEVBQVksUUFBaUI7UUFDcEksS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBRGxDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEI7UUFBWSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVE7UUFBWSxhQUFRLEdBQVIsUUFBUSxDQUFTO0lBRXRJLENBQUM7SUFFRDs7TUFFRTtJQUNLLEdBQUcsQ0FBQyxLQUFhO1FBQ3RCLE9BQU8sSUFBSSw4Q0FBOEMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkksQ0FBQzs7QUFqQkgsa0ZBa0JDOzs7QUFZRCxTQUFnQix3RkFBd0YsQ0FBQyxNQUEwRztJQUNqTixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ3pFLENBQUE7QUFDSCxDQUFDO0FBVEQsNExBU0M7QUFHRCxTQUFnQiwyRkFBMkYsQ0FBQyxNQUEwRztJQUNwTixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztZQUMvQyxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1lBQzdFLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLE1BQU07WUFDWixnQkFBZ0IsRUFBRSxZQUFZO1NBQy9CO0tBQ0YsQ0FBQztJQUVGLDhCQUE4QjtJQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDNUgsQ0FBQztBQXRCRCxrTUFzQkM7QUFFRCxNQUFhLDRGQUE2RixTQUFRLEtBQUssQ0FBQyxhQUFhO0lBSW5JOzs7OztNQUtFO0lBQ0YsWUFBbUIsaUJBQTZDLEVBQUUsa0JBQTBCLEVBQUUsa0JBQTBCLEVBQUUsc0JBQStCO1FBQ3ZKLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBVm5GLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBVzlCLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzlCLENBQUM7UUFDRCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM3QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDL0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QyxDQUFDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQW9IO1FBQzNJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQzNCLENBQUM7YUFDSSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQzthQUNJLENBQUM7WUFDSixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFJRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBZTtRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7QUExRUgsb01BMkVDOzs7QUFFRCxNQUFhLGlGQUFrRixTQUFRLEtBQUssQ0FBQyxXQUFXO0lBR3RIOzs7O01BSUU7SUFDRixZQUFzQixpQkFBNkMsRUFBWSxrQkFBMEIsRUFBWSxRQUFpQjtRQUNwSSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFEbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE0QjtRQUFZLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBUTtRQUFZLGFBQVEsR0FBUixRQUFRLENBQVM7SUFFdEksQ0FBQztJQUVEOztNQUVFO0lBQ0ssR0FBRyxDQUFDLEtBQWE7UUFDdEIsT0FBTyxJQUFJLDRGQUE0RixDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqTCxDQUFDOztBQWpCSCw4S0FrQkM7OztBQWNELFNBQWdCLCtFQUErRSxDQUFDLE1BQW1LO0lBQ2pRLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztRQUNsRSxTQUFTLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx3RkFBd0YsRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO0tBQy9JLENBQUE7QUFDSCxDQUFDO0FBVEQsMEtBU0M7QUFHRCxTQUFnQixrRkFBa0YsQ0FBQyxNQUFtSztJQUNwUSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLGdCQUFnQixFQUFFO1lBQ2hCLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztZQUMxRCxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLDJGQUEyRixFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7WUFDaEosT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsS0FBSztZQUNYLGdCQUFnQixFQUFFLG1GQUFtRjtTQUN0RztLQUNGLENBQUM7SUFFRiw4QkFBOEI7SUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzVILENBQUM7QUF0QkQsZ0xBc0JDO0FBRUQsTUFBYSxtRkFBb0YsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUcxSDs7O01BR0U7SUFDRixZQUFtQixpQkFBNkMsRUFBRSxrQkFBMEI7UUFDMUYsS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQVBqRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQXFEOUIsK0RBQStEO1FBQ3ZELGVBQVUsR0FBRyxJQUFJLGlGQUFpRixDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUE5Q3BJLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDOUQsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDakQsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUM7UUFDakUsQ0FBQztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUF1RjtRQUM5RyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUM1QyxDQUFDO2FBQ0ksQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDbEQsQ0FBQztJQUNILENBQUM7SUFJRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBVyxlQUFlLENBQUMsS0FBYTtRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDTSxvQkFBb0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDTSxZQUFZLENBQUMsS0FBMEc7UUFDNUgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUM1QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7O0FBcEVILGtMQXFFQzs7O0FBZ0JELFNBQWdCLDJFQUEyRSxDQUFDLE1BQTJKO0lBQ3JQLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDOUQsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2pELFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztLQUN0RCxDQUFBO0FBQ0gsQ0FBQztBQVZELGtLQVVDO0FBR0QsU0FBZ0IsOEVBQThFLENBQUMsTUFBMko7SUFDeFAsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWixjQUFjLEVBQUU7WUFDZCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7WUFDeEQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxPQUFPLEVBQUU7WUFDUCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7WUFDbEQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7WUFDcEQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7S0FDRixDQUFDO0lBRUYsOEJBQThCO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBNUJELHdLQTRCQztBQUVELE1BQWEsK0VBQWdGLFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFHdEg7OztNQUdFO0lBQ0YsWUFBbUIsaUJBQTZDLEVBQUUsa0JBQTBCO1FBQzFGLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFQakQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFROUIsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN0QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzFELENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDaEMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ2xDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEQsQ0FBQztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFtRjtRQUMxRyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM5QixDQUFDO2FBQ0ksQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOztBQTFGSCwwS0EyRkM7OztBQVlELFNBQWdCLCtGQUErRixDQUFDLE1BQW1NO0lBQ2pULElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCx5QkFBeUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ2xGLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsdUJBQXVCLENBQUM7S0FDckYsQ0FBQTtBQUNILENBQUM7QUFURCwwTUFTQztBQUdELFNBQWdCLGtHQUFrRyxDQUFDLE1BQW1NO0lBQ3BULElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHO1FBQ1oseUJBQXlCLEVBQUU7WUFDekIsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDakUsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCx5QkFBeUIsRUFBRTtZQUN6QixLQUFLLEVBQUUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE1BQU8sQ0FBQyx1QkFBdUIsQ0FBQztZQUNuRSxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsU0FBUztTQUM1QjtLQUNGLENBQUM7SUFFRiw4QkFBOEI7SUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzVILENBQUM7QUF0QkQsZ05Bc0JDO0FBRUQsTUFBYSxtR0FBb0csU0FBUSxLQUFLLENBQUMsYUFBYTtJQUcxSTs7O01BR0U7SUFDRixZQUFtQixpQkFBNkMsRUFBRSxrQkFBMEI7UUFDMUYsS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQVBqRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQVE5QixDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDL0MsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUM7UUFDNUUsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLHdCQUF3QixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ2hELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDO1FBQzlFLENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBdUc7UUFDOUgsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztZQUN6QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDO1FBQzVDLENBQUM7YUFDSSxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztZQUM1RCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDO1FBQ2hFLENBQUM7SUFDSCxDQUFDO0lBSUQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0QsSUFBVyxzQkFBc0IsQ0FBQyxLQUFhO1FBQzdDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUNNLDJCQUEyQjtRQUNoQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVywyQkFBMkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDdEMsQ0FBQztJQUlELElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELElBQVcsdUJBQXVCLENBQUMsS0FBa0M7UUFDbkUsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBQ00sNEJBQTRCO1FBQ2pDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxTQUFTLENBQUM7SUFDNUMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLDRCQUE0QjtRQUNyQyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN2QyxDQUFDOztBQXBFSCxrTkFxRUM7OztBQWdCRCxTQUFnQixpR0FBaUcsQ0FBQyxNQUF1TTtJQUN2VCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7UUFDbEUsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO1FBQ2pHLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7S0FDckUsQ0FBQTtBQUNILENBQUM7QUFWRCw4TUFVQztBQUdELFNBQWdCLG9HQUFvRyxDQUFDLE1BQXVNO0lBQzFULElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHO1FBQ1osZ0JBQWdCLEVBQUU7WUFDaEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO1lBQzFELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsbUJBQW1CLEVBQUU7WUFDbkIsS0FBSyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUN6RixPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osZ0JBQWdCLEVBQUUsWUFBWTtTQUMvQjtRQUNELGlCQUFpQixFQUFFO1lBQ2pCLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1lBQzNELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO0tBQ0YsQ0FBQztJQUVGLDhCQUE4QjtJQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDNUgsQ0FBQztBQTVCRCxvTkE0QkM7QUFFRCxNQUFhLHFHQUFzRyxTQUFRLEtBQUssQ0FBQyxhQUFhO0lBRzVJOzs7TUFHRTtJQUNGLFlBQW1CLGlCQUE2QyxFQUFFLGtCQUEwQjtRQUMxRixLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBUGpELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBUTlCLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDOUQsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLG1CQUFtQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzNDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3BFLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN6QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoRSxDQUFDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXlHO1FBQ2hJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQztZQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO1FBQ3JDLENBQUM7YUFDSSxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDOUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztZQUNwRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1FBQ2xELENBQUM7SUFDSCxDQUFDO0lBSUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNELElBQVcsZUFBZSxDQUFDLEtBQWE7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBQ00sb0JBQW9CO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBSUQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsSUFBVyxrQkFBa0IsQ0FBQyxLQUFlO1FBQzNDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUNNLHVCQUF1QjtRQUM1QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBYTtRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFDTSxxQkFBcUI7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7O0FBMUZILHNOQTJGQzs7O0FBWUQsU0FBZ0Isd0ZBQXdGLENBQUMsTUFBMEc7SUFDak4sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUN6RSxDQUFBO0FBQ0gsQ0FBQztBQVRELDRMQVNDO0FBR0QsU0FBZ0IsMkZBQTJGLENBQUMsTUFBMEc7SUFDcE4sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWixJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7WUFDL0MsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztZQUM3RSxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osZ0JBQWdCLEVBQUUsWUFBWTtTQUMvQjtLQUNGLENBQUM7SUFFRiw4QkFBOEI7SUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzVILENBQUM7QUF0QkQsa01Bc0JDO0FBRUQsTUFBYSw0RkFBNkYsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUluSTs7Ozs7TUFLRTtJQUNGLFlBQW1CLGlCQUE2QyxFQUFFLGtCQUEwQixFQUFFLGtCQUEwQixFQUFFLHNCQUErQjtRQUN2SixLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQVZuRixrQkFBYSxHQUFHLEtBQUssQ0FBQztJQVc5QixDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDN0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQy9CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUMsQ0FBQztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFvSDtRQUMzSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUMzQixDQUFDO2FBQ0ksSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7YUFDSSxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUlELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBSUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWU7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7O0FBMUVILG9NQTJFQzs7O0FBRUQsTUFBYSxpRkFBa0YsU0FBUSxLQUFLLENBQUMsV0FBVztJQUd0SDs7OztNQUlFO0lBQ0YsWUFBc0IsaUJBQTZDLEVBQVksa0JBQTBCLEVBQVksUUFBaUI7UUFDcEksS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBRGxDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEI7UUFBWSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVE7UUFBWSxhQUFRLEdBQVIsUUFBUSxDQUFTO0lBRXRJLENBQUM7SUFFRDs7TUFFRTtJQUNLLEdBQUcsQ0FBQyxLQUFhO1FBQ3RCLE9BQU8sSUFBSSw0RkFBNEYsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakwsQ0FBQzs7QUFqQkgsOEtBa0JDOzs7QUFzREQsU0FBZ0IsK0VBQStFLENBQUMsTUFBbUs7SUFDalEsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNqRCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNyRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztRQUNsRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztRQUNqRSxvQkFBb0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3hFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2pFLGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztRQUNoRSxpQkFBaUIsRUFBRSwrRkFBK0YsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDNUksbUJBQW1CLEVBQUUsaUdBQWlHLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO1FBQ2xKLFNBQVMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHdGQUF3RixFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDL0ksQ0FBQTtBQUNILENBQUM7QUFsQkQsMEtBa0JDO0FBR0QsU0FBZ0Isa0ZBQWtGLENBQUMsTUFBbUs7SUFDcFEsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWixPQUFPLEVBQUU7WUFDUCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7WUFDbEQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxhQUFhLEVBQUU7WUFDYixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7WUFDdkQsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7UUFDRCxrQkFBa0IsRUFBRTtZQUNsQixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztZQUMzRCxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELGdCQUFnQixFQUFFO1lBQ2hCLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztZQUMxRCxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELGdCQUFnQixFQUFFO1lBQ2hCLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztZQUN6RCxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQjtRQUNELG9CQUFvQixFQUFFO1lBQ3BCLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO1lBQzVELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1lBQ3pELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1lBQ3pELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsS0FBSyxFQUFFLGtHQUFrRyxDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztZQUNuSSxPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxNQUFNO1lBQ1osZ0JBQWdCLEVBQUUsMEZBQTBGO1NBQzdHO1FBQ0QsbUJBQW1CLEVBQUU7WUFDbkIsS0FBSyxFQUFFLG9HQUFvRyxDQUFDLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUN2SSxPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxNQUFNO1lBQ1osZ0JBQWdCLEVBQUUsNEZBQTRGO1NBQy9HO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsMkZBQTJGLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztZQUNoSixPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxLQUFLO1lBQ1gsZ0JBQWdCLEVBQUUsbUZBQW1GO1NBQ3RHO0tBQ0YsQ0FBQztJQUVGLDhCQUE4QjtJQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDNUgsQ0FBQztBQTVFRCxnTEE0RUM7QUFFRCxNQUFhLG1GQUFvRixTQUFRLEtBQUssQ0FBQyxhQUFhO0lBRzFIOzs7TUFHRTtJQUNGLFlBQW1CLGlCQUE2QyxFQUFFLGtCQUEwQjtRQUMxRixLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBUGpELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBMk45Qix1RUFBdUU7UUFDL0Qsc0JBQWlCLEdBQUcsSUFBSSxtR0FBbUcsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQWUvSix5RUFBeUU7UUFDakUsd0JBQW1CLEdBQUcsSUFBSSxxR0FBcUcsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQWVySywrREFBK0Q7UUFDdkQsZUFBVSxHQUFHLElBQUksaUZBQWlGLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQXBQcEksQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNoQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlDLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDckMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN4RCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDekMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDaEUsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3hDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUM5RCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3ZDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDNUQsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ2xFLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDdkMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM1RCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3ZDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDNUQsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLGFBQWEsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4RCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLENBQUM7UUFDL0UsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLGFBQWEsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUMxRCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxhQUFhLENBQUM7UUFDbkYsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDakQsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUM7UUFDakUsQ0FBQztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUF1RjtRQUM5RyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO1lBQ25DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztZQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUNqRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDNUMsQ0FBQzthQUNJLENBQUM7WUFDSixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7WUFDaEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1lBQzVDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7WUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1lBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztZQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztZQUM5RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztZQUNsRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2xELENBQUM7SUFDSCxDQUFDO0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBSUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxJQUFXLFlBQVksQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBYTtRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFDTSxxQkFBcUI7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFJRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBVyxlQUFlLENBQUMsS0FBYTtRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDTSxvQkFBb0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFJRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ00sbUJBQW1CO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFJRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRCxJQUFXLGlCQUFpQixDQUFDLEtBQWE7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDO0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBSUQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUNNLG1CQUFtQixDQUFDLEtBQTJGO1FBQ3BILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9DLENBQUM7SUFDTSxxQkFBcUI7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDbkQsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7SUFDOUMsQ0FBQztJQUlELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7SUFDTSxxQkFBcUIsQ0FBQyxLQUE2RjtRQUN4SCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNqRCxDQUFDO0lBQ00sdUJBQXVCO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ3JELENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO0lBQ2hELENBQUM7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDTSxZQUFZLENBQUMsS0FBMEc7UUFDNUgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUM1QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7O0FBMVFILGtMQTJRQzs7O0FBWUQsU0FBZ0Isa0ZBQWtGLENBQUMsTUFBeUs7SUFDMVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztRQUM3QyxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7S0FDNUMsQ0FBQTtBQUNILENBQUM7QUFURCxnTEFTQztBQUdELFNBQWdCLHFGQUFxRixDQUFDLE1BQXlLO0lBQzdRLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHO1FBQ1osS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2hELE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO1FBQ0QsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1lBQy9DLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCO0tBQ0YsQ0FBQztJQUVGLDhCQUE4QjtJQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDNUgsQ0FBQztBQXRCRCxzTEFzQkM7QUFFRCxNQUFhLHNGQUF1RixTQUFRLEtBQUssQ0FBQyxhQUFhO0lBRzdIOzs7TUFHRTtJQUNGLFlBQW1CLGlCQUE2QyxFQUFFLGtCQUEwQjtRQUMxRixLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBUGpELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBUTlCLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDOUIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzdCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEMsQ0FBQztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUEwRjtRQUNqSCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN6QixDQUFDO2FBQ0ksQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFJRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsSUFBVyxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ00sVUFBVTtRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7QUFwRUgsd0xBcUVDOzs7QUE0QkQsU0FBZ0IsMkRBQTJELENBQUMsTUFBMkg7SUFDck0sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLHFCQUFxQixFQUFFLCtFQUErRSxDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUNwSSxpQkFBaUIsRUFBRSwyRUFBMkUsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDeEgsc0JBQXNCLEVBQUUsK0VBQStFLENBQUMsTUFBTyxDQUFDLG9CQUFvQixDQUFDO1FBQ3JJLHlCQUF5QixFQUFFLGtGQUFrRixDQUFDLE1BQU8sQ0FBQyx1QkFBdUIsQ0FBQztLQUMvSSxDQUFBO0FBQ0gsQ0FBQztBQVhELGtJQVdDO0FBR0QsU0FBZ0IsOERBQThELENBQUMsTUFBMkg7SUFDeE0sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWixxQkFBcUIsRUFBRTtZQUNyQixLQUFLLEVBQUUsa0ZBQWtGLENBQUMsTUFBTyxDQUFDLG9CQUFvQixDQUFDO1lBQ3ZILE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixnQkFBZ0IsRUFBRSwwRUFBMEU7U0FDN0Y7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixLQUFLLEVBQUUsOEVBQThFLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1lBQy9HLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixnQkFBZ0IsRUFBRSxzRUFBc0U7U0FDekY7UUFDRCxzQkFBc0IsRUFBRTtZQUN0QixLQUFLLEVBQUUsa0ZBQWtGLENBQUMsTUFBTyxDQUFDLG9CQUFvQixDQUFDO1lBQ3ZILE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixnQkFBZ0IsRUFBRSwwRUFBMEU7U0FDN0Y7UUFDRCx5QkFBeUIsRUFBRTtZQUN6QixLQUFLLEVBQUUscUZBQXFGLENBQUMsTUFBTyxDQUFDLHVCQUF1QixDQUFDO1lBQzdILE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixnQkFBZ0IsRUFBRSw2RUFBNkU7U0FDaEc7S0FDRixDQUFDO0lBRUYsOEJBQThCO0lBQzlCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBbENELHdJQWtDQztBQUVELE1BQWEsK0RBQWdFLFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFHdEc7OztNQUdFO0lBQ0YsWUFBbUIsaUJBQTZDLEVBQUUsa0JBQTBCO1FBQzFGLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFQakQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFpRDlCLDJFQUEyRTtRQUNuRSwwQkFBcUIsR0FBRyxJQUFJLG1GQUFtRixDQUFDLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBZXZKLHVFQUF1RTtRQUMvRCxzQkFBaUIsR0FBRyxJQUFJLCtFQUErRSxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBZTNJLDRFQUE0RTtRQUNwRSwwQkFBcUIsR0FBRyxJQUFJLG1GQUFtRixDQUFDLElBQUksRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBZXhKLCtFQUErRTtRQUN2RSw2QkFBd0IsR0FBRyxJQUFJLHNGQUFzRixDQUFDLElBQUksRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0lBMUZqSyxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzVELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLGFBQWEsQ0FBQztRQUN2RixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3hELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLGFBQWEsQ0FBQztRQUMvRSxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzVELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLGFBQWEsQ0FBQztRQUN2RixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQy9ELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFLGFBQWEsQ0FBQztRQUM3RixDQUFDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQW1FO1FBQzFGLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQ2pELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQ3JELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQzFELENBQUM7YUFDSSxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7WUFDdEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7WUFDOUQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7WUFDdEUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsdUJBQXVCLENBQUM7UUFDOUUsQ0FBQztJQUNILENBQUM7SUFJRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDO0lBQ00sdUJBQXVCLENBQUMsS0FBMkU7UUFDeEcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDbkQsQ0FBQztJQUNNLHlCQUF5QjtRQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUN2RCxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztJQUNsRCxDQUFDO0lBSUQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUNNLG1CQUFtQixDQUFDLEtBQXVFO1FBQ2hHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9DLENBQUM7SUFDTSxxQkFBcUI7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDbkQsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7SUFDOUMsQ0FBQztJQUlELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7SUFDTSx1QkFBdUIsQ0FBQyxLQUEyRTtRQUN4RyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNuRCxDQUFDO0lBQ00seUJBQXlCO1FBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDO0lBQ2xELENBQUM7SUFJRCxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN2QyxDQUFDO0lBQ00sMEJBQTBCLENBQUMsS0FBOEU7UUFDOUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDdEQsQ0FBQztJQUNNLDRCQUE0QjtRQUNqQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUMxRCxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsNEJBQTRCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsQ0FBQztJQUNyRCxDQUFDOztBQWhISCwwSUFpSEM7OztBQUVEOztFQUVFO0FBQ0YsTUFBYSx3QkFBeUIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT25FLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCOzs7Ozs7TUFNRTtJQUNLLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxLQUFnQixFQUFFLFVBQWtCLEVBQUUsWUFBb0IsRUFBRSxRQUFrQztRQUM5SCxPQUFPLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxpQ0FBaUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDekosQ0FBQztJQUVMLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQXNDO1FBQ3JGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsaUNBQWlDO1lBQ3hELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSztnQkFDbkIsZUFBZSxFQUFFLFFBQVE7Z0JBQ3pCLHlCQUF5QixFQUFFLFFBQVE7YUFDcEM7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZO1lBQ2pDLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtZQUM3QixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87U0FDeEIsQ0FBQyxDQUFDO1FBb0tMLDZEQUE2RDtRQUNyRCxhQUFRLEdBQUcsSUFBSSxtQ0FBbUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBZW5GLGdGQUFnRjtRQUN4RSw4QkFBeUIsR0FBRyxJQUFJLCtEQUErRCxDQUFDLElBQUksRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBcEwxSSxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM3QyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztJQUNqRixDQUFDO0lBUUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUlELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFXLEVBQUUsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDTSxPQUFPO1FBQ1osSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFJRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUlELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsSUFBVyxRQUFRLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ00sYUFBYTtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUlELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxJQUFXLGNBQWMsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDTSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUlELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsSUFBVyxRQUFRLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUlELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsSUFBVyxRQUFRLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNNLFVBQVUsQ0FBQyxLQUE0RDtRQUM1RSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzFDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUlELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ3hDLENBQUM7SUFDTSwyQkFBMkIsQ0FBQyxLQUF1RDtRQUN4RixJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN2RCxDQUFDO0lBQ00sNkJBQTZCO1FBQ2xDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzNELENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyw2QkFBNkI7UUFDdEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDO0lBQ3RELENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN2RCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDckMsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQzlELFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2pELGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQy9ELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNoRCxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEQsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xELE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDBDQUEwQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1lBQ3hHLDBCQUEwQixFQUFFLDJEQUEyRCxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUM7U0FDdEksQ0FBQztJQUNKLENBQUM7SUFFUyx1QkFBdUI7UUFDL0IsTUFBTSxLQUFLLEdBQUc7WUFDWixXQUFXLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNwRCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDM0MsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQ3ZELE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNsRCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDN0MsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELFFBQVEsRUFBRTtnQkFDUixLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pELE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7WUFDRCxnQkFBZ0IsRUFBRTtnQkFDaEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUN2RCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDaEQsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsZ0JBQWdCLEVBQUUsUUFBUTthQUMzQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pELE9BQU8sRUFBRSxLQUFLO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLGdCQUFnQixFQUFFLFFBQVE7YUFDM0I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqRCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxnQkFBZ0IsRUFBRSxRQUFRO2FBQzNCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLDZDQUE2QyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO2dCQUM1RyxPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSxxQ0FBcUM7YUFDeEQ7WUFDRCwwQkFBMEIsRUFBRTtnQkFDMUIsS0FBSyxFQUFFLDhEQUE4RCxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUM7Z0JBQ25ILE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLGdCQUFnQixFQUFFLHNEQUFzRDthQUN6RTtTQUNGLENBQUM7UUFFRiw4QkFBOEI7UUFDOUIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUUsQ0FBQyxDQUFBO0lBQzVILENBQUM7O0FBdFZILDREQXVWQzs7O0FBclZDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csdUNBQWMsR0FBRyxpQ0FBaUMsQUFBcEMsQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zc21fbWFpbnRlbmFuY2Vfd2luZG93X3Rhc2tcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI2Rlc2NyaXB0aW9uIFNzbU1haW50ZW5hbmNlV2luZG93VGFzayNkZXNjcmlwdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayNpZCBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2sjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayNtYXhfY29uY3VycmVuY3kgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI21heF9jb25jdXJyZW5jeX1cbiAgKi9cbiAgcmVhZG9ubHkgbWF4Q29uY3VycmVuY3k6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI21heF9lcnJvcnMgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI21heF9lcnJvcnN9XG4gICovXG4gIHJlYWRvbmx5IG1heEVycm9yczogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zc21fbWFpbnRlbmFuY2Vfd2luZG93X3Rhc2sjbmFtZSBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2sjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI3ByaW9yaXR5IFNzbU1haW50ZW5hbmNlV2luZG93VGFzayNwcmlvcml0eX1cbiAgKi9cbiAgcmVhZG9ubHkgcHJpb3JpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayNzZXJ2aWNlX3JvbGVfYXJuIFNzbU1haW50ZW5hbmNlV2luZG93VGFzayNzZXJ2aWNlX3JvbGVfYXJufVxuICAqL1xuICByZWFkb25seSBzZXJ2aWNlUm9sZUFybj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI3Rhc2tfYXJuIFNzbU1haW50ZW5hbmNlV2luZG93VGFzayN0YXNrX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgdGFza0Fybjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zc21fbWFpbnRlbmFuY2Vfd2luZG93X3Rhc2sjdGFza190eXBlIFNzbU1haW50ZW5hbmNlV2luZG93VGFzayN0YXNrX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IHRhc2tUeXBlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayN3aW5kb3dfaWQgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI3dpbmRvd19pZH1cbiAgKi9cbiAgcmVhZG9ubHkgd2luZG93SWQ6IHN0cmluZztcbiAgLyoqXG4gICogdGFyZ2V0cyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI3RhcmdldHMgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI3RhcmdldHN9XG4gICovXG4gIHJlYWRvbmx5IHRhcmdldHM/OiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXJnZXRzW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogdGFza19pbnZvY2F0aW9uX3BhcmFtZXRlcnMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayN0YXNrX2ludm9jYXRpb25fcGFyYW1ldGVycyBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2sjdGFza19pbnZvY2F0aW9uX3BhcmFtZXRlcnN9XG4gICovXG4gIHJlYWRvbmx5IHRhc2tJbnZvY2F0aW9uUGFyYW1ldGVycz86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVycztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFyZ2V0cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayNrZXkgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI2tleX1cbiAgKi9cbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayN2YWx1ZXMgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI3ZhbHVlc31cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNzbU1haW50ZW5hbmNlV2luZG93VGFza1RhcmdldHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXJnZXRzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS52YWx1ZXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNzbU1haW50ZW5hbmNlV2luZG93VGFza1RhcmdldHNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXJnZXRzIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGtleToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB2YWx1ZXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS52YWx1ZXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXJnZXRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1RhcmdldHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2tleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rZXkgPSB0aGlzLl9rZXk7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFyZ2V0cyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9rZXkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2V5ID0gdmFsdWUua2V5O1xuICAgICAgdGhpcy5fdmFsdWVzID0gdmFsdWUudmFsdWVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9rZXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQga2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rZXkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleTtcbiAgfVxuXG4gIC8vIHZhbHVlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92YWx1ZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3ZhbHVlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXJnZXRzTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhMaXN0IHtcbiAgcHVibGljIGludGVybmFsVmFsdWU/IDogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFyZ2V0c1tdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXJnZXRzT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1RhcmdldHNPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVyc1BhcmFtZXRlciB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayNuYW1lIFNzbU1haW50ZW5hbmNlV2luZG93VGFzayNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayN2YWx1ZXMgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI3ZhbHVlc31cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzUGFyYW1ldGVyVG9UZXJyYWZvcm0oc3RydWN0PzogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzQXV0b21hdGlvblBhcmFtZXRlcnNQYXJhbWV0ZXIgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZhbHVlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEudmFsdWVzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVyc1BhcmFtZXRlclRvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzUGFyYW1ldGVyIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIG5hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHZhbHVlczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnZhbHVlcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzUGFyYW1ldGVyT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzUGFyYW1ldGVyIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5hbWUgPSB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlcyA9IHRoaXMuX3ZhbHVlcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzUGFyYW1ldGVyIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgICB0aGlzLl92YWx1ZXMgPSB2YWx1ZS52YWx1ZXM7XG4gICAgfVxuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyB2YWx1ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd2YWx1ZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl92YWx1ZXMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzQXV0b21hdGlvblBhcmFtZXRlcnNQYXJhbWV0ZXJMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVyc1BhcmFtZXRlcltdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVyc1BhcmFtZXRlck91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVyc1BhcmFtZXRlck91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI2RvY3VtZW50X3ZlcnNpb24gU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI2RvY3VtZW50X3ZlcnNpb259XG4gICovXG4gIHJlYWRvbmx5IGRvY3VtZW50VmVyc2lvbj86IHN0cmluZztcbiAgLyoqXG4gICogcGFyYW1ldGVyIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zc21fbWFpbnRlbmFuY2Vfd2luZG93X3Rhc2sjcGFyYW1ldGVyIFNzbU1haW50ZW5hbmNlV2luZG93VGFzayNwYXJhbWV0ZXJ9XG4gICovXG4gIHJlYWRvbmx5IHBhcmFtZXRlcj86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzUGFyYW1ldGVyW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzQXV0b21hdGlvblBhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgfCBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkb2N1bWVudF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRvY3VtZW50VmVyc2lvbiksXG4gICAgcGFyYW1ldGVyOiBjZGt0Zi5saXN0TWFwcGVyKHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzUGFyYW1ldGVyVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEucGFyYW1ldGVyKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVyc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIHwgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzQXV0b21hdGlvblBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGRvY3VtZW50X3ZlcnNpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRvY3VtZW50VmVyc2lvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcGFyYW1ldGVyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChzc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVyc1BhcmFtZXRlclRvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLnBhcmFtZXRlciksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzQXV0b21hdGlvblBhcmFtZXRlcnNQYXJhbWV0ZXJMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnRWZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRvY3VtZW50VmVyc2lvbiA9IHRoaXMuX2RvY3VtZW50VmVyc2lvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BhcmFtZXRlcj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wYXJhbWV0ZXIgPSB0aGlzLl9wYXJhbWV0ZXI/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVycyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RvY3VtZW50VmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhcmFtZXRlci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kb2N1bWVudFZlcnNpb24gPSB2YWx1ZS5kb2N1bWVudFZlcnNpb247XG4gICAgICB0aGlzLl9wYXJhbWV0ZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnBhcmFtZXRlcjtcbiAgICB9XG4gIH1cblxuICAvLyBkb2N1bWVudF92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RvY3VtZW50VmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZG9jdW1lbnRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9jdW1lbnRfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZG9jdW1lbnRWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kb2N1bWVudFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREb2N1bWVudFZlcnNpb24oKSB7XG4gICAgdGhpcy5fZG9jdW1lbnRWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkb2N1bWVudFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9jdW1lbnRWZXJzaW9uO1xuICB9XG5cbiAgLy8gcGFyYW1ldGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhcmFtZXRlciA9IG5ldyBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVyc1BhcmFtZXRlckxpc3QodGhpcywgXCJwYXJhbWV0ZXJcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXI7XG4gIH1cbiAgcHVibGljIHB1dFBhcmFtZXRlcih2YWx1ZTogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzQXV0b21hdGlvblBhcmFtZXRlcnNQYXJhbWV0ZXJbXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXJhbWV0ZXIoKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXIuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNMYW1iZGFQYXJhbWV0ZXJzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI2NsaWVudF9jb250ZXh0IFNzbU1haW50ZW5hbmNlV2luZG93VGFzayNjbGllbnRfY29udGV4dH1cbiAgKi9cbiAgcmVhZG9ubHkgY2xpZW50Q29udGV4dD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI3BheWxvYWQgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI3BheWxvYWR9XG4gICovXG4gIHJlYWRvbmx5IHBheWxvYWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayNxdWFsaWZpZXIgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI3F1YWxpZmllcn1cbiAgKi9cbiAgcmVhZG9ubHkgcXVhbGlmaWVyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzTGFtYmRhUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0xhbWJkYVBhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgfCBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNMYW1iZGFQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNsaWVudF9jb250ZXh0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsaWVudENvbnRleHQpLFxuICAgIHBheWxvYWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGF5bG9hZCksXG4gICAgcXVhbGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnF1YWxpZmllciksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzTGFtYmRhUGFyYW1ldGVyc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0xhbWJkYVBhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgfCBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNMYW1iZGFQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjbGllbnRfY29udGV4dDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2xpZW50Q29udGV4dCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcGF5bG9hZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucGF5bG9hZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcXVhbGlmaWVyOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5xdWFsaWZpZXIpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzTGFtYmRhUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzTGFtYmRhUGFyYW1ldGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2xpZW50Q29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbGllbnRDb250ZXh0ID0gdGhpcy5fY2xpZW50Q29udGV4dDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BheWxvYWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGF5bG9hZCA9IHRoaXMuX3BheWxvYWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9xdWFsaWZpZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucXVhbGlmaWVyID0gdGhpcy5fcXVhbGlmaWVyO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzTGFtYmRhUGFyYW1ldGVycyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NsaWVudENvbnRleHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXlsb2FkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcXVhbGlmaWVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jbGllbnRDb250ZXh0ID0gdmFsdWUuY2xpZW50Q29udGV4dDtcbiAgICAgIHRoaXMuX3BheWxvYWQgPSB2YWx1ZS5wYXlsb2FkO1xuICAgICAgdGhpcy5fcXVhbGlmaWVyID0gdmFsdWUucXVhbGlmaWVyO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNsaWVudF9jb250ZXh0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NsaWVudENvbnRleHQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsaWVudENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbGllbnRfY29udGV4dCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2xpZW50Q29udGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2xpZW50Q29udGV4dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENsaWVudENvbnRleHQoKSB7XG4gICAgdGhpcy5fY2xpZW50Q29udGV4dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xpZW50Q29udGV4dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRDb250ZXh0O1xuICB9XG5cbiAgLy8gcGF5bG9hZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXlsb2FkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYXlsb2FkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGF5bG9hZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGF5bG9hZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGF5bG9hZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBheWxvYWQoKSB7XG4gICAgdGhpcy5fcGF5bG9hZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGF5bG9hZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXlsb2FkO1xuICB9XG5cbiAgLy8gcXVhbGlmaWVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3F1YWxpZmllcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcXVhbGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncXVhbGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBxdWFsaWZpZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3F1YWxpZmllciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFF1YWxpZmllcigpIHtcbiAgICB0aGlzLl9xdWFsaWZpZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHF1YWxpZmllcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9xdWFsaWZpZXI7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNDbG91ZHdhdGNoQ29uZmlnIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI2Nsb3Vkd2F0Y2hfbG9nX2dyb3VwX25hbWUgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI2Nsb3Vkd2F0Y2hfbG9nX2dyb3VwX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IGNsb3Vkd2F0Y2hMb2dHcm91cE5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayNjbG91ZHdhdGNoX291dHB1dF9lbmFibGVkIFNzbU1haW50ZW5hbmNlV2luZG93VGFzayNjbG91ZHdhdGNoX291dHB1dF9lbmFibGVkfVxuICAqL1xuICByZWFkb25seSBjbG91ZHdhdGNoT3V0cHV0RW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzQ2xvdWR3YXRjaENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzQ2xvdWR3YXRjaENvbmZpZ091dHB1dFJlZmVyZW5jZSB8IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzQ2xvdWR3YXRjaENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjbG91ZHdhdGNoX2xvZ19ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hMb2dHcm91cE5hbWUpLFxuICAgIGNsb3Vkd2F0Y2hfb3V0cHV0X2VuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hPdXRwdXRFbmFibGVkKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc0Nsb3Vkd2F0Y2hDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc0Nsb3Vkd2F0Y2hDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc0Nsb3Vkd2F0Y2hDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNsb3Vkd2F0Y2hfbG9nX2dyb3VwX25hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hMb2dHcm91cE5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNsb3Vkd2F0Y2hfb3V0cHV0X2VuYWJsZWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoT3V0cHV0RW5hYmxlZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNDbG91ZHdhdGNoQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc0Nsb3Vkd2F0Y2hDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Nsb3Vkd2F0Y2hMb2dHcm91cE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xvdWR3YXRjaExvZ0dyb3VwTmFtZSA9IHRoaXMuX2Nsb3Vkd2F0Y2hMb2dHcm91cE5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jbG91ZHdhdGNoT3V0cHV0RW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbG91ZHdhdGNoT3V0cHV0RW5hYmxlZCA9IHRoaXMuX2Nsb3Vkd2F0Y2hPdXRwdXRFbmFibGVkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNDbG91ZHdhdGNoQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaExvZ0dyb3VwTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Nsb3Vkd2F0Y2hPdXRwdXRFbmFibGVkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jbG91ZHdhdGNoTG9nR3JvdXBOYW1lID0gdmFsdWUuY2xvdWR3YXRjaExvZ0dyb3VwTmFtZTtcbiAgICAgIHRoaXMuX2Nsb3Vkd2F0Y2hPdXRwdXRFbmFibGVkID0gdmFsdWUuY2xvdWR3YXRjaE91dHB1dEVuYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gY2xvdWR3YXRjaF9sb2dfZ3JvdXBfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nsb3Vkd2F0Y2hMb2dHcm91cE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbG91ZHdhdGNoX2xvZ19ncm91cF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbG91ZHdhdGNoTG9nR3JvdXBOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoTG9nR3JvdXBOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xvdWR3YXRjaExvZ0dyb3VwTmFtZSgpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoTG9nR3JvdXBOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbG91ZHdhdGNoTG9nR3JvdXBOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dHcm91cE5hbWU7XG4gIH1cblxuICAvLyBjbG91ZHdhdGNoX291dHB1dF9lbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nsb3Vkd2F0Y2hPdXRwdXRFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBjbG91ZHdhdGNoT3V0cHV0RW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjbG91ZHdhdGNoX291dHB1dF9lbmFibGVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbG91ZHdhdGNoT3V0cHV0RW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaE91dHB1dEVuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbG91ZHdhdGNoT3V0cHV0RW5hYmxlZCgpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoT3V0cHV0RW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaE91dHB1dEVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaE91dHB1dEVuYWJsZWQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNOb3RpZmljYXRpb25Db25maWcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zc21fbWFpbnRlbmFuY2Vfd2luZG93X3Rhc2sjbm90aWZpY2F0aW9uX2FybiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2sjbm90aWZpY2F0aW9uX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zc21fbWFpbnRlbmFuY2Vfd2luZG93X3Rhc2sjbm90aWZpY2F0aW9uX2V2ZW50cyBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2sjbm90aWZpY2F0aW9uX2V2ZW50c31cbiAgKi9cbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uRXZlbnRzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayNub3RpZmljYXRpb25fdHlwZSBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2sjbm90aWZpY2F0aW9uX3R5cGV9XG4gICovXG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvblR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc05vdGlmaWNhdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzTm90aWZpY2F0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNOb3RpZmljYXRpb25Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbm90aWZpY2F0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ub3RpZmljYXRpb25Bcm4pLFxuICAgIG5vdGlmaWNhdGlvbl9ldmVudHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLm5vdGlmaWNhdGlvbkV2ZW50cyksXG4gICAgbm90aWZpY2F0aW9uX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubm90aWZpY2F0aW9uVHlwZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNOb3RpZmljYXRpb25Db25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc05vdGlmaWNhdGlvbkNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzTm90aWZpY2F0aW9uQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBub3RpZmljYXRpb25fYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ub3RpZmljYXRpb25Bcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG5vdGlmaWNhdGlvbl9ldmVudHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5ub3RpZmljYXRpb25FdmVudHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gICAgbm90aWZpY2F0aW9uX3R5cGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm5vdGlmaWNhdGlvblR5cGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNOb3RpZmljYXRpb25Db25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzTm90aWZpY2F0aW9uQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9ub3RpZmljYXRpb25Bcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubm90aWZpY2F0aW9uQXJuID0gdGhpcy5fbm90aWZpY2F0aW9uQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbm90aWZpY2F0aW9uRXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5vdGlmaWNhdGlvbkV2ZW50cyA9IHRoaXMuX25vdGlmaWNhdGlvbkV2ZW50cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX25vdGlmaWNhdGlvblR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubm90aWZpY2F0aW9uVHlwZSA9IHRoaXMuX25vdGlmaWNhdGlvblR5cGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc05vdGlmaWNhdGlvbkNvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX25vdGlmaWNhdGlvbkFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25vdGlmaWNhdGlvbkV2ZW50cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25vdGlmaWNhdGlvblR5cGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX25vdGlmaWNhdGlvbkFybiA9IHZhbHVlLm5vdGlmaWNhdGlvbkFybjtcbiAgICAgIHRoaXMuX25vdGlmaWNhdGlvbkV2ZW50cyA9IHZhbHVlLm5vdGlmaWNhdGlvbkV2ZW50cztcbiAgICAgIHRoaXMuX25vdGlmaWNhdGlvblR5cGUgPSB2YWx1ZS5ub3RpZmljYXRpb25UeXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG5vdGlmaWNhdGlvbl9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBub3RpZmljYXRpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdub3RpZmljYXRpb25fYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBub3RpZmljYXRpb25Bcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5vdGlmaWNhdGlvbkFybigpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25Bcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vdGlmaWNhdGlvbkFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25Bcm47XG4gIH1cblxuICAvLyBub3RpZmljYXRpb25fZXZlbnRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbkV2ZW50cz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBub3RpZmljYXRpb25FdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnbm90aWZpY2F0aW9uX2V2ZW50cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbm90aWZpY2F0aW9uRXZlbnRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkV2ZW50cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5vdGlmaWNhdGlvbkV2ZW50cygpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25FdmVudHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vdGlmaWNhdGlvbkV2ZW50c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25FdmVudHM7XG4gIH1cblxuICAvLyBub3RpZmljYXRpb25fdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ub3RpZmljYXRpb25UeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBub3RpZmljYXRpb25UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbm90aWZpY2F0aW9uX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5vdGlmaWNhdGlvblR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvblR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROb3RpZmljYXRpb25UeXBlKCkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvblR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vdGlmaWNhdGlvblR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uVHlwZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc1BhcmFtZXRlciB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayNuYW1lIFNzbU1haW50ZW5hbmNlV2luZG93VGFzayNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayN2YWx1ZXMgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI3ZhbHVlc31cbiAgKi9cbiAgcmVhZG9ubHkgdmFsdWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzUGFyYW1ldGVyVG9UZXJyYWZvcm0oc3RydWN0PzogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNQYXJhbWV0ZXIgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZhbHVlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEudmFsdWVzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc1BhcmFtZXRlclRvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzUGFyYW1ldGVyIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIG5hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHZhbHVlczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnZhbHVlcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzUGFyYW1ldGVyT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzUGFyYW1ldGVyIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5hbWUgPSB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlcyA9IHRoaXMuX3ZhbHVlcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzUGFyYW1ldGVyIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgICB0aGlzLl92YWx1ZXMgPSB2YWx1ZS52YWx1ZXM7XG4gICAgfVxuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyB2YWx1ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd2YWx1ZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl92YWx1ZXMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsdWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNQYXJhbWV0ZXJMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc1BhcmFtZXRlcltdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc1BhcmFtZXRlck91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc1BhcmFtZXRlck91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI2NvbW1lbnQgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI2NvbW1lbnR9XG4gICovXG4gIHJlYWRvbmx5IGNvbW1lbnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayNkb2N1bWVudF9oYXNoIFNzbU1haW50ZW5hbmNlV2luZG93VGFzayNkb2N1bWVudF9oYXNofVxuICAqL1xuICByZWFkb25seSBkb2N1bWVudEhhc2g/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayNkb2N1bWVudF9oYXNoX3R5cGUgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI2RvY3VtZW50X2hhc2hfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgZG9jdW1lbnRIYXNoVHlwZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI2RvY3VtZW50X3ZlcnNpb24gU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI2RvY3VtZW50X3ZlcnNpb259XG4gICovXG4gIHJlYWRvbmx5IGRvY3VtZW50VmVyc2lvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI291dHB1dF9zM19idWNrZXQgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI291dHB1dF9zM19idWNrZXR9XG4gICovXG4gIHJlYWRvbmx5IG91dHB1dFMzQnVja2V0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zc21fbWFpbnRlbmFuY2Vfd2luZG93X3Rhc2sjb3V0cHV0X3MzX2tleV9wcmVmaXggU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI291dHB1dF9zM19rZXlfcHJlZml4fVxuICAqL1xuICByZWFkb25seSBvdXRwdXRTM0tleVByZWZpeD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI3NlcnZpY2Vfcm9sZV9hcm4gU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI3NlcnZpY2Vfcm9sZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IHNlcnZpY2VSb2xlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zc21fbWFpbnRlbmFuY2Vfd2luZG93X3Rhc2sjdGltZW91dF9zZWNvbmRzIFNzbU1haW50ZW5hbmNlV2luZG93VGFzayN0aW1lb3V0X3NlY29uZHN9XG4gICovXG4gIHJlYWRvbmx5IHRpbWVvdXRTZWNvbmRzPzogbnVtYmVyO1xuICAvKipcbiAgKiBjbG91ZHdhdGNoX2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI2Nsb3Vkd2F0Y2hfY29uZmlnIFNzbU1haW50ZW5hbmNlV2luZG93VGFzayNjbG91ZHdhdGNoX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgY2xvdWR3YXRjaENvbmZpZz86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzQ2xvdWR3YXRjaENvbmZpZztcbiAgLyoqXG4gICogbm90aWZpY2F0aW9uX2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI25vdGlmaWNhdGlvbl9jb25maWcgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI25vdGlmaWNhdGlvbl9jb25maWd9XG4gICovXG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvbkNvbmZpZz86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzTm90aWZpY2F0aW9uQ29uZmlnO1xuICAvKipcbiAgKiBwYXJhbWV0ZXIgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayNwYXJhbWV0ZXIgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI3BhcmFtZXRlcn1cbiAgKi9cbiAgcmVhZG9ubHkgcGFyYW1ldGVyPzogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNQYXJhbWV0ZXJbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSB8IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbW1lbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tbWVudCksXG4gICAgZG9jdW1lbnRfaGFzaDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb2N1bWVudEhhc2gpLFxuICAgIGRvY3VtZW50X2hhc2hfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb2N1bWVudEhhc2hUeXBlKSxcbiAgICBkb2N1bWVudF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRvY3VtZW50VmVyc2lvbiksXG4gICAgb3V0cHV0X3MzX2J1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vdXRwdXRTM0J1Y2tldCksXG4gICAgb3V0cHV0X3MzX2tleV9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3V0cHV0UzNLZXlQcmVmaXgpLFxuICAgIHNlcnZpY2Vfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZVJvbGVBcm4pLFxuICAgIHRpbWVvdXRfc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lb3V0U2Vjb25kcyksXG4gICAgY2xvdWR3YXRjaF9jb25maWc6IHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzQ2xvdWR3YXRjaENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaENvbmZpZyksXG4gICAgbm90aWZpY2F0aW9uX2NvbmZpZzogc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNOb3RpZmljYXRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5vdGlmaWNhdGlvbkNvbmZpZyksXG4gICAgcGFyYW1ldGVyOiBjZGt0Zi5saXN0TWFwcGVyKHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzUGFyYW1ldGVyVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEucGFyYW1ldGVyKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIHwgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNvbW1lbnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNvbW1lbnQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRvY3VtZW50X2hhc2g6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRvY3VtZW50SGFzaCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZG9jdW1lbnRfaGFzaF90eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kb2N1bWVudEhhc2hUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBkb2N1bWVudF92ZXJzaW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kb2N1bWVudFZlcnNpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG91dHB1dF9zM19idWNrZXQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm91dHB1dFMzQnVja2V0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBvdXRwdXRfczNfa2V5X3ByZWZpeDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEub3V0cHV0UzNLZXlQcmVmaXgpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNlcnZpY2Vfcm9sZV9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNlcnZpY2VSb2xlQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB0aW1lb3V0X3NlY29uZHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnRpbWVvdXRTZWNvbmRzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBjbG91ZHdhdGNoX2NvbmZpZzoge1xuICAgICAgdmFsdWU6IHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzQ2xvdWR3YXRjaENvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaENvbmZpZyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzQ2xvdWR3YXRjaENvbmZpZ0xpc3RcIixcbiAgICB9LFxuICAgIG5vdGlmaWNhdGlvbl9jb25maWc6IHtcbiAgICAgIHZhbHVlOiBzc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc05vdGlmaWNhdGlvbkNvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubm90aWZpY2F0aW9uQ29uZmlnKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNOb3RpZmljYXRpb25Db25maWdMaXN0XCIsXG4gICAgfSxcbiAgICBwYXJhbWV0ZXI6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzUGFyYW1ldGVyVG9IY2xUZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEucGFyYW1ldGVyKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc1BhcmFtZXRlckxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb21tZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbW1lbnQgPSB0aGlzLl9jb21tZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5fZG9jdW1lbnRIYXNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRvY3VtZW50SGFzaCA9IHRoaXMuX2RvY3VtZW50SGFzaDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50SGFzaFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZG9jdW1lbnRIYXNoVHlwZSA9IHRoaXMuX2RvY3VtZW50SGFzaFR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kb2N1bWVudFZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZG9jdW1lbnRWZXJzaW9uID0gdGhpcy5fZG9jdW1lbnRWZXJzaW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3V0cHV0UzNCdWNrZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3V0cHV0UzNCdWNrZXQgPSB0aGlzLl9vdXRwdXRTM0J1Y2tldDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX291dHB1dFMzS2V5UHJlZml4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm91dHB1dFMzS2V5UHJlZml4ID0gdGhpcy5fb3V0cHV0UzNLZXlQcmVmaXg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZXJ2aWNlUm9sZUFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZXJ2aWNlUm9sZUFybiA9IHRoaXMuX3NlcnZpY2VSb2xlQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGltZW91dFNlY29uZHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGltZW91dFNlY29uZHMgPSB0aGlzLl90aW1lb3V0U2Vjb25kcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Nsb3Vkd2F0Y2hDb25maWc/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xvdWR3YXRjaENvbmZpZyA9IHRoaXMuX2Nsb3Vkd2F0Y2hDb25maWc/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ub3RpZmljYXRpb25Db25maWc/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubm90aWZpY2F0aW9uQ29uZmlnID0gdGhpcy5fbm90aWZpY2F0aW9uQ29uZmlnPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGFyYW1ldGVyPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhcmFtZXRlciA9IHRoaXMuX3BhcmFtZXRlcj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29tbWVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RvY3VtZW50SGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RvY3VtZW50SGFzaFR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kb2N1bWVudFZlcnNpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vdXRwdXRTM0J1Y2tldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX291dHB1dFMzS2V5UHJlZml4ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2VydmljZVJvbGVBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90aW1lb3V0U2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Nsb3Vkd2F0Y2hDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25vdGlmaWNhdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGFyYW1ldGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NvbW1lbnQgPSB2YWx1ZS5jb21tZW50O1xuICAgICAgdGhpcy5fZG9jdW1lbnRIYXNoID0gdmFsdWUuZG9jdW1lbnRIYXNoO1xuICAgICAgdGhpcy5fZG9jdW1lbnRIYXNoVHlwZSA9IHZhbHVlLmRvY3VtZW50SGFzaFR5cGU7XG4gICAgICB0aGlzLl9kb2N1bWVudFZlcnNpb24gPSB2YWx1ZS5kb2N1bWVudFZlcnNpb247XG4gICAgICB0aGlzLl9vdXRwdXRTM0J1Y2tldCA9IHZhbHVlLm91dHB1dFMzQnVja2V0O1xuICAgICAgdGhpcy5fb3V0cHV0UzNLZXlQcmVmaXggPSB2YWx1ZS5vdXRwdXRTM0tleVByZWZpeDtcbiAgICAgIHRoaXMuX3NlcnZpY2VSb2xlQXJuID0gdmFsdWUuc2VydmljZVJvbGVBcm47XG4gICAgICB0aGlzLl90aW1lb3V0U2Vjb25kcyA9IHZhbHVlLnRpbWVvdXRTZWNvbmRzO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaENvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY2xvdWR3YXRjaENvbmZpZztcbiAgICAgIHRoaXMuX25vdGlmaWNhdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWUubm90aWZpY2F0aW9uQ29uZmlnO1xuICAgICAgdGhpcy5fcGFyYW1ldGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZS5wYXJhbWV0ZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gY29tbWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb21tZW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb21tZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tbWVudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29tbWVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29tbWVudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbW1lbnQoKSB7XG4gICAgdGhpcy5fY29tbWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29tbWVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb21tZW50O1xuICB9XG5cbiAgLy8gZG9jdW1lbnRfaGFzaCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kb2N1bWVudEhhc2g/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRvY3VtZW50SGFzaCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvY3VtZW50X2hhc2gnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRvY3VtZW50SGFzaCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZG9jdW1lbnRIYXNoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RG9jdW1lbnRIYXNoKCkge1xuICAgIHRoaXMuX2RvY3VtZW50SGFzaCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG9jdW1lbnRIYXNoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvY3VtZW50SGFzaDtcbiAgfVxuXG4gIC8vIGRvY3VtZW50X2hhc2hfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kb2N1bWVudEhhc2hUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkb2N1bWVudEhhc2hUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9jdW1lbnRfaGFzaF90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBkb2N1bWVudEhhc2hUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kb2N1bWVudEhhc2hUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RG9jdW1lbnRIYXNoVHlwZSgpIHtcbiAgICB0aGlzLl9kb2N1bWVudEhhc2hUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkb2N1bWVudEhhc2hUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvY3VtZW50SGFzaFR5cGU7XG4gIH1cblxuICAvLyBkb2N1bWVudF92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RvY3VtZW50VmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZG9jdW1lbnRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9jdW1lbnRfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZG9jdW1lbnRWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kb2N1bWVudFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREb2N1bWVudFZlcnNpb24oKSB7XG4gICAgdGhpcy5fZG9jdW1lbnRWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkb2N1bWVudFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9jdW1lbnRWZXJzaW9uO1xuICB9XG5cbiAgLy8gb3V0cHV0X3MzX2J1Y2tldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vdXRwdXRTM0J1Y2tldD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb3V0cHV0UzNCdWNrZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvdXRwdXRfczNfYnVja2V0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBvdXRwdXRTM0J1Y2tldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb3V0cHV0UzNCdWNrZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPdXRwdXRTM0J1Y2tldCgpIHtcbiAgICB0aGlzLl9vdXRwdXRTM0J1Y2tldCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3V0cHV0UzNCdWNrZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3V0cHV0UzNCdWNrZXQ7XG4gIH1cblxuICAvLyBvdXRwdXRfczNfa2V5X3ByZWZpeCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vdXRwdXRTM0tleVByZWZpeD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb3V0cHV0UzNLZXlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvdXRwdXRfczNfa2V5X3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgb3V0cHV0UzNLZXlQcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX291dHB1dFMzS2V5UHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3V0cHV0UzNLZXlQcmVmaXgoKSB7XG4gICAgdGhpcy5fb3V0cHV0UzNLZXlQcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG91dHB1dFMzS2V5UHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX291dHB1dFMzS2V5UHJlZml4O1xuICB9XG5cbiAgLy8gc2VydmljZV9yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJ2aWNlUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmljZVJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmljZVJvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2aWNlUm9sZUFybigpIHtcbiAgICB0aGlzLl9zZXJ2aWNlUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZVJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZVJvbGVBcm47XG4gIH1cblxuICAvLyB0aW1lb3V0X3NlY29uZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dFNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRpbWVvdXRTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGltZW91dF9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0aW1lb3V0U2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGltZW91dFNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0U2Vjb25kcygpIHtcbiAgICB0aGlzLl90aW1lb3V0U2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dFNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dFNlY29uZHM7XG4gIH1cblxuICAvLyBjbG91ZHdhdGNoX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jbG91ZHdhdGNoQ29uZmlnID0gbmV3IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzQ2xvdWR3YXRjaENvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImNsb3Vkd2F0Y2hfY29uZmlnXCIpO1xuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3Vkd2F0Y2hDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dENsb3Vkd2F0Y2hDb25maWcodmFsdWU6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzQ2xvdWR3YXRjaENvbmZpZykge1xuICAgIHRoaXMuX2Nsb3Vkd2F0Y2hDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENsb3Vkd2F0Y2hDb25maWcoKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaENvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbG91ZHdhdGNoQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3Vkd2F0Y2hDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG5vdGlmaWNhdGlvbl9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uQ29uZmlnID0gbmV3IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzTm90aWZpY2F0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwibm90aWZpY2F0aW9uX2NvbmZpZ1wiKTtcbiAgcHVibGljIGdldCBub3RpZmljYXRpb25Db25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbkNvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0Tm90aWZpY2F0aW9uQ29uZmlnKHZhbHVlOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc05vdGlmaWNhdGlvbkNvbmZpZykge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Tm90aWZpY2F0aW9uQ29uZmlnKCkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBub3RpZmljYXRpb25Db25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBwYXJhbWV0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFyYW1ldGVyID0gbmV3IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzUGFyYW1ldGVyTGlzdCh0aGlzLCBcInBhcmFtZXRlclwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwYXJhbWV0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtZXRlcjtcbiAgfVxuICBwdWJsaWMgcHV0UGFyYW1ldGVyKHZhbHVlOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc1BhcmFtZXRlcltdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9wYXJhbWV0ZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhcmFtZXRlcigpIHtcbiAgICB0aGlzLl9wYXJhbWV0ZXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtZXRlci5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1N0ZXBGdW5jdGlvbnNQYXJhbWV0ZXJzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI2lucHV0IFNzbU1haW50ZW5hbmNlV2luZG93VGFzayNpbnB1dH1cbiAgKi9cbiAgcmVhZG9ubHkgaW5wdXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayNuYW1lIFNzbU1haW50ZW5hbmNlV2luZG93VGFzayNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzU3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNTdGVwRnVuY3Rpb25zUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSB8IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1N0ZXBGdW5jdGlvbnNQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGlucHV0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlucHV0KSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1N0ZXBGdW5jdGlvbnNQYXJhbWV0ZXJzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzU3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgfCBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNTdGVwRnVuY3Rpb25zUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgaW5wdXQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmlucHV0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1N0ZXBGdW5jdGlvbnNQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNTdGVwRnVuY3Rpb25zUGFyYW1ldGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faW5wdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5wdXQgPSB0aGlzLl9pbnB1dDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNTdGVwRnVuY3Rpb25zUGFyYW1ldGVycyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lucHV0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faW5wdXQgPSB2YWx1ZS5pbnB1dDtcbiAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZS5uYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlucHV0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lucHV0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lucHV0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnB1dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5wdXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnB1dCgpIHtcbiAgICB0aGlzLl9pbnB1dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5wdXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXQ7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzIHtcbiAgLyoqXG4gICogYXV0b21hdGlvbl9wYXJhbWV0ZXJzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zc21fbWFpbnRlbmFuY2Vfd2luZG93X3Rhc2sjYXV0b21hdGlvbl9wYXJhbWV0ZXJzIFNzbU1haW50ZW5hbmNlV2luZG93VGFzayNhdXRvbWF0aW9uX3BhcmFtZXRlcnN9XG4gICovXG4gIHJlYWRvbmx5IGF1dG9tYXRpb25QYXJhbWV0ZXJzPzogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzQXV0b21hdGlvblBhcmFtZXRlcnM7XG4gIC8qKlxuICAqIGxhbWJkYV9wYXJhbWV0ZXJzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zc21fbWFpbnRlbmFuY2Vfd2luZG93X3Rhc2sjbGFtYmRhX3BhcmFtZXRlcnMgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI2xhbWJkYV9wYXJhbWV0ZXJzfVxuICAqL1xuICByZWFkb25seSBsYW1iZGFQYXJhbWV0ZXJzPzogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzTGFtYmRhUGFyYW1ldGVycztcbiAgLyoqXG4gICogcnVuX2NvbW1hbmRfcGFyYW1ldGVycyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI3J1bl9jb21tYW5kX3BhcmFtZXRlcnMgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrI3J1bl9jb21tYW5kX3BhcmFtZXRlcnN9XG4gICovXG4gIHJlYWRvbmx5IHJ1bkNvbW1hbmRQYXJhbWV0ZXJzPzogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnM7XG4gIC8qKlxuICAqIHN0ZXBfZnVuY3Rpb25zX3BhcmFtZXRlcnMgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayNzdGVwX2Z1bmN0aW9uc19wYXJhbWV0ZXJzIFNzbU1haW50ZW5hbmNlV2luZG93VGFzayNzdGVwX2Z1bmN0aW9uc19wYXJhbWV0ZXJzfVxuICAqL1xuICByZWFkb25seSBzdGVwRnVuY3Rpb25zUGFyYW1ldGVycz86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1N0ZXBGdW5jdGlvbnNQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIHwgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGF1dG9tYXRpb25fcGFyYW1ldGVyczogc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzQXV0b21hdGlvblBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1dG9tYXRpb25QYXJhbWV0ZXJzKSxcbiAgICBsYW1iZGFfcGFyYW1ldGVyczogc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzTGFtYmRhUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEubGFtYmRhUGFyYW1ldGVycyksXG4gICAgcnVuX2NvbW1hbmRfcGFyYW1ldGVyczogc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLnJ1bkNvbW1hbmRQYXJhbWV0ZXJzKSxcbiAgICBzdGVwX2Z1bmN0aW9uc19wYXJhbWV0ZXJzOiBzc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNTdGVwRnVuY3Rpb25zUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEuc3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSB8IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYXV0b21hdGlvbl9wYXJhbWV0ZXJzOiB7XG4gICAgICB2YWx1ZTogc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzQXV0b21hdGlvblBhcmFtZXRlcnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmF1dG9tYXRpb25QYXJhbWV0ZXJzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzQXV0b21hdGlvblBhcmFtZXRlcnNMaXN0XCIsXG4gICAgfSxcbiAgICBsYW1iZGFfcGFyYW1ldGVyczoge1xuICAgICAgdmFsdWU6IHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0xhbWJkYVBhcmFtZXRlcnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxhbWJkYVBhcmFtZXRlcnMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNMYW1iZGFQYXJhbWV0ZXJzTGlzdFwiLFxuICAgIH0sXG4gICAgcnVuX2NvbW1hbmRfcGFyYW1ldGVyczoge1xuICAgICAgdmFsdWU6IHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ydW5Db21tYW5kUGFyYW1ldGVycyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzTGlzdFwiLFxuICAgIH0sXG4gICAgc3RlcF9mdW5jdGlvbnNfcGFyYW1ldGVyczoge1xuICAgICAgdmFsdWU6IHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1N0ZXBGdW5jdGlvbnNQYXJhbWV0ZXJzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zdGVwRnVuY3Rpb25zUGFyYW1ldGVycyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1N0ZXBGdW5jdGlvbnNQYXJhbWV0ZXJzTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXV0b21hdGlvblBhcmFtZXRlcnM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXV0b21hdGlvblBhcmFtZXRlcnMgPSB0aGlzLl9hdXRvbWF0aW9uUGFyYW1ldGVycz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xhbWJkYVBhcmFtZXRlcnM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGFtYmRhUGFyYW1ldGVycyA9IHRoaXMuX2xhbWJkYVBhcmFtZXRlcnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ydW5Db21tYW5kUGFyYW1ldGVycz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ydW5Db21tYW5kUGFyYW1ldGVycyA9IHRoaXMuX3J1bkNvbW1hbmRQYXJhbWV0ZXJzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnMgPSB0aGlzLl9zdGVwRnVuY3Rpb25zUGFyYW1ldGVycz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVycyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2F1dG9tYXRpb25QYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sYW1iZGFQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ydW5Db21tYW5kUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYXV0b21hdGlvblBhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmF1dG9tYXRpb25QYXJhbWV0ZXJzO1xuICAgICAgdGhpcy5fbGFtYmRhUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWUubGFtYmRhUGFyYW1ldGVycztcbiAgICAgIHRoaXMuX3J1bkNvbW1hbmRQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5ydW5Db21tYW5kUGFyYW1ldGVycztcbiAgICAgIHRoaXMuX3N0ZXBGdW5jdGlvbnNQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zdGVwRnVuY3Rpb25zUGFyYW1ldGVycztcbiAgICB9XG4gIH1cblxuICAvLyBhdXRvbWF0aW9uX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0b21hdGlvblBhcmFtZXRlcnMgPSBuZXcgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzQXV0b21hdGlvblBhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJhdXRvbWF0aW9uX3BhcmFtZXRlcnNcIik7XG4gIHB1YmxpYyBnZXQgYXV0b21hdGlvblBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9tYXRpb25QYXJhbWV0ZXJzO1xuICB9XG4gIHB1YmxpYyBwdXRBdXRvbWF0aW9uUGFyYW1ldGVycyh2YWx1ZTogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzQXV0b21hdGlvblBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLl9hdXRvbWF0aW9uUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b21hdGlvblBhcmFtZXRlcnMoKSB7XG4gICAgdGhpcy5fYXV0b21hdGlvblBhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b21hdGlvblBhcmFtZXRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b21hdGlvblBhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGxhbWJkYV9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhbWJkYVBhcmFtZXRlcnMgPSBuZXcgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzTGFtYmRhUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImxhbWJkYV9wYXJhbWV0ZXJzXCIpO1xuICBwdWJsaWMgZ2V0IGxhbWJkYVBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbWJkYVBhcmFtZXRlcnM7XG4gIH1cbiAgcHVibGljIHB1dExhbWJkYVBhcmFtZXRlcnModmFsdWU6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0xhbWJkYVBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLl9sYW1iZGFQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYW1iZGFQYXJhbWV0ZXJzKCkge1xuICAgIHRoaXMuX2xhbWJkYVBhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGFtYmRhUGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYW1iZGFQYXJhbWV0ZXJzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBydW5fY29tbWFuZF9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3J1bkNvbW1hbmRQYXJhbWV0ZXJzID0gbmV3IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwicnVuX2NvbW1hbmRfcGFyYW1ldGVyc1wiKTtcbiAgcHVibGljIGdldCBydW5Db21tYW5kUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVuQ29tbWFuZFBhcmFtZXRlcnM7XG4gIH1cbiAgcHVibGljIHB1dFJ1bkNvbW1hbmRQYXJhbWV0ZXJzKHZhbHVlOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVycykge1xuICAgIHRoaXMuX3J1bkNvbW1hbmRQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSdW5Db21tYW5kUGFyYW1ldGVycygpIHtcbiAgICB0aGlzLl9ydW5Db21tYW5kUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBydW5Db21tYW5kUGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ydW5Db21tYW5kUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc3RlcF9mdW5jdGlvbnNfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGVwRnVuY3Rpb25zUGFyYW1ldGVycyA9IG5ldyBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNTdGVwRnVuY3Rpb25zUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInN0ZXBfZnVuY3Rpb25zX3BhcmFtZXRlcnNcIik7XG4gIHB1YmxpYyBnZXQgc3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXBGdW5jdGlvbnNQYXJhbWV0ZXJzO1xuICB9XG4gIHB1YmxpYyBwdXRTdGVwRnVuY3Rpb25zUGFyYW1ldGVycyh2YWx1ZTogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzU3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnMpIHtcbiAgICB0aGlzLl9zdGVwRnVuY3Rpb25zUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnMoKSB7XG4gICAgdGhpcy5fc3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrIGF3c19zc21fbWFpbnRlbmFuY2Vfd2luZG93X3Rhc2t9XG4qL1xuZXhwb3J0IGNsYXNzIFNzbU1haW50ZW5hbmNlV2luZG93VGFzayBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3Nfc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrXCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIFNzbU1haW50ZW5hbmNlV2luZG93VGFzayByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2sgdG8gaW1wb3J0XG4gICogQHBhcmFtIGltcG9ydEZyb21JZCBUaGUgaWQgb2YgdGhlIGV4aXN0aW5nIFNzbU1haW50ZW5hbmNlV2luZG93VGFzayB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrI2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2sgdG8gaW1wb3J0IGlzIGZvdW5kXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVDb25maWdGb3JJbXBvcnQoc2NvcGU6IENvbnN0cnVjdCwgaW1wb3J0VG9JZDogc3RyaW5nLCBpbXBvcnRGcm9tSWQ6IHN0cmluZywgcHJvdmlkZXI/OiBjZGt0Zi5UZXJyYWZvcm1Qcm92aWRlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNka3RmLkltcG9ydGFibGVSZXNvdXJjZShzY29wZSwgaW1wb3J0VG9JZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwiYXdzX3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFza1wiLCBpbXBvcnRJZDogaW1wb3J0RnJvbUlkLCBwcm92aWRlciB9KTtcbiAgICAgIH1cblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gIC8qKlxuICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzayBhd3Nfc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrfSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfc3NtX21haW50ZW5hbmNlX3dpbmRvd190YXNrJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBjb25maWcuZGVzY3JpcHRpb247XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gICAgdGhpcy5fbWF4Q29uY3VycmVuY3kgPSBjb25maWcubWF4Q29uY3VycmVuY3k7XG4gICAgdGhpcy5fbWF4RXJyb3JzID0gY29uZmlnLm1heEVycm9ycztcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBjb25maWcucHJpb3JpdHk7XG4gICAgdGhpcy5fc2VydmljZVJvbGVBcm4gPSBjb25maWcuc2VydmljZVJvbGVBcm47XG4gICAgdGhpcy5fdGFza0FybiA9IGNvbmZpZy50YXNrQXJuO1xuICAgIHRoaXMuX3Rhc2tUeXBlID0gY29uZmlnLnRhc2tUeXBlO1xuICAgIHRoaXMuX3dpbmRvd0lkID0gY29uZmlnLndpbmRvd0lkO1xuICAgIHRoaXMuX3RhcmdldHMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy50YXJnZXRzO1xuICAgIHRoaXMuX3Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnRhc2tJbnZvY2F0aW9uUGFyYW1ldGVycztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIG1heF9jb25jdXJyZW5jeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tYXhDb25jdXJyZW5jeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWF4Q29uY3VycmVuY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXhfY29uY3VycmVuY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heENvbmN1cnJlbmN5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tYXhDb25jdXJyZW5jeSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhDb25jdXJyZW5jeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhDb25jdXJyZW5jeTtcbiAgfVxuXG4gIC8vIG1heF9lcnJvcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWF4RXJyb3JzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtYXhFcnJvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXhfZXJyb3JzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhFcnJvcnModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21heEVycm9ycyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhFcnJvcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4RXJyb3JzO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gcHJpb3JpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJpb3JpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncHJpb3JpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByaW9yaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByaW9yaXR5KCkge1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmlvcml0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIC8vIHNlcnZpY2Vfcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJ2aWNlUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmljZVJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmljZVJvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2aWNlUm9sZUFybigpIHtcbiAgICB0aGlzLl9zZXJ2aWNlUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZVJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZVJvbGVBcm47XG4gIH1cblxuICAvLyB0YXNrX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90YXNrQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YXNrQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFza19hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhc2tBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Rhc2tBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFza0FybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrQXJuO1xuICB9XG5cbiAgLy8gdGFza190eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Rhc2tUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YXNrVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Rhc2tfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFza1R5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Rhc2tUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhc2tUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rhc2tUeXBlO1xuICB9XG5cbiAgLy8gd2luZG93X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3dpbmRvd0lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB3aW5kb3dJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dpbmRvd19pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgd2luZG93SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3dpbmRvd0lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdpbmRvd0lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpbmRvd0lkO1xuICB9XG5cbiAgLy8gdGFyZ2V0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXJnZXRzID0gbmV3IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1RhcmdldHNMaXN0KHRoaXMsIFwidGFyZ2V0c1wiLCBmYWxzZSk7XG4gIHB1YmxpYyBnZXQgdGFyZ2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0cztcbiAgfVxuICBwdWJsaWMgcHV0VGFyZ2V0cyh2YWx1ZTogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFyZ2V0c1tdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YXJnZXRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXJnZXRzKCkge1xuICAgIHRoaXMuX3RhcmdldHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0YXNrX2ludm9jYXRpb25fcGFyYW1ldGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXNrSW52b2NhdGlvblBhcmFtZXRlcnMgPSBuZXcgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwidGFza19pbnZvY2F0aW9uX3BhcmFtZXRlcnNcIik7XG4gIHB1YmxpYyBnZXQgdGFza0ludm9jYXRpb25QYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrSW52b2NhdGlvblBhcmFtZXRlcnM7XG4gIH1cbiAgcHVibGljIHB1dFRhc2tJbnZvY2F0aW9uUGFyYW1ldGVycyh2YWx1ZTogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5fdGFza0ludm9jYXRpb25QYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXNrSW52b2NhdGlvblBhcmFtZXRlcnMoKSB7XG4gICAgdGhpcy5fdGFza0ludm9jYXRpb25QYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrSW52b2NhdGlvblBhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc2NyaXB0aW9uKSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBtYXhfY29uY3VycmVuY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21heENvbmN1cnJlbmN5KSxcbiAgICAgIG1heF9lcnJvcnM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21heEVycm9ycyksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHByaW9yaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9wcmlvcml0eSksXG4gICAgICBzZXJ2aWNlX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zZXJ2aWNlUm9sZUFybiksXG4gICAgICB0YXNrX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdGFza0FybiksXG4gICAgICB0YXNrX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Rhc2tUeXBlKSxcbiAgICAgIHdpbmRvd19pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fd2luZG93SWQpLFxuICAgICAgdGFyZ2V0czogY2RrdGYubGlzdE1hcHBlcihzc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXJnZXRzVG9UZXJyYWZvcm0sIHRydWUpKHRoaXMuX3RhcmdldHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0YXNrX2ludm9jYXRpb25fcGFyYW1ldGVyczogc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzVG9UZXJyYWZvcm0odGhpcy5fdGFza0ludm9jYXRpb25QYXJhbWV0ZXJzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2Rlc2NyaXB0aW9uKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbWF4X2NvbmN1cnJlbmN5OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9tYXhDb25jdXJyZW5jeSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG1heF9lcnJvcnM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX21heEVycm9ycyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBwcmlvcml0eToge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fcHJpb3JpdHkpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBzZXJ2aWNlX3JvbGVfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9zZXJ2aWNlUm9sZUFybiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHRhc2tfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl90YXNrQXJuKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgdGFza190eXBlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl90YXNrVHlwZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHdpbmRvd19pZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fd2luZG93SWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0YXJnZXRzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKHNzbU1haW50ZW5hbmNlV2luZG93VGFza1RhcmdldHNUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fdGFyZ2V0cy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFyZ2V0c0xpc3RcIixcbiAgICAgIH0sXG4gICAgICB0YXNrX2ludm9jYXRpb25fcGFyYW1ldGVyczoge1xuICAgICAgICB2YWx1ZTogc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzVG9IY2xUZXJyYWZvcm0odGhpcy5fdGFza0ludm9jYXRpb25QYXJhbWV0ZXJzLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNMaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=