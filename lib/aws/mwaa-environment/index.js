"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MwaaEnvironment = exports.MwaaEnvironmentNetworkConfigurationOutputReference = exports.mwaaEnvironmentNetworkConfigurationToHclTerraform = exports.mwaaEnvironmentNetworkConfigurationToTerraform = exports.MwaaEnvironmentLoggingConfigurationOutputReference = exports.mwaaEnvironmentLoggingConfigurationToHclTerraform = exports.mwaaEnvironmentLoggingConfigurationToTerraform = exports.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference = exports.mwaaEnvironmentLoggingConfigurationWorkerLogsToHclTerraform = exports.mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform = exports.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference = exports.mwaaEnvironmentLoggingConfigurationWebserverLogsToHclTerraform = exports.mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform = exports.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference = exports.mwaaEnvironmentLoggingConfigurationTaskLogsToHclTerraform = exports.mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform = exports.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference = exports.mwaaEnvironmentLoggingConfigurationSchedulerLogsToHclTerraform = exports.mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform = exports.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference = exports.mwaaEnvironmentLoggingConfigurationDagProcessingLogsToHclTerraform = exports.mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform = exports.MwaaEnvironmentLastUpdatedList = exports.MwaaEnvironmentLastUpdatedOutputReference = exports.mwaaEnvironmentLastUpdatedToHclTerraform = exports.mwaaEnvironmentLastUpdatedToTerraform = exports.MwaaEnvironmentLastUpdatedErrorList = exports.MwaaEnvironmentLastUpdatedErrorOutputReference = exports.mwaaEnvironmentLastUpdatedErrorToHclTerraform = exports.mwaaEnvironmentLastUpdatedErrorToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function mwaaEnvironmentLastUpdatedErrorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.mwaaEnvironmentLastUpdatedErrorToTerraform = mwaaEnvironmentLastUpdatedErrorToTerraform;
function mwaaEnvironmentLastUpdatedErrorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.mwaaEnvironmentLastUpdatedErrorToHclTerraform = mwaaEnvironmentLastUpdatedErrorToHclTerraform;
class MwaaEnvironmentLastUpdatedErrorOutputReference extends cdktf.ComplexObject {
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
    // error_code - computed: true, optional: false, required: false
    get errorCode() {
        return this.getStringAttribute('error_code');
    }
    // error_message - computed: true, optional: false, required: false
    get errorMessage() {
        return this.getStringAttribute('error_message');
    }
}
exports.MwaaEnvironmentLastUpdatedErrorOutputReference = MwaaEnvironmentLastUpdatedErrorOutputReference;
_a = JSII_RTTI_SYMBOL_1;
MwaaEnvironmentLastUpdatedErrorOutputReference[_a] = { fqn: "@cdktf/aws-cdk.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference", version: "0.0.0" };
class MwaaEnvironmentLastUpdatedErrorList extends cdktf.ComplexList {
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
        return new MwaaEnvironmentLastUpdatedErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.MwaaEnvironmentLastUpdatedErrorList = MwaaEnvironmentLastUpdatedErrorList;
_b = JSII_RTTI_SYMBOL_1;
MwaaEnvironmentLastUpdatedErrorList[_b] = { fqn: "@cdktf/aws-cdk.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList", version: "0.0.0" };
function mwaaEnvironmentLastUpdatedToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.mwaaEnvironmentLastUpdatedToTerraform = mwaaEnvironmentLastUpdatedToTerraform;
function mwaaEnvironmentLastUpdatedToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
exports.mwaaEnvironmentLastUpdatedToHclTerraform = mwaaEnvironmentLastUpdatedToHclTerraform;
class MwaaEnvironmentLastUpdatedOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // error - computed: true, optional: false, required: false
        this._error = new MwaaEnvironmentLastUpdatedErrorList(this, "error", false);
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
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    get error() {
        return this._error;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
}
exports.MwaaEnvironmentLastUpdatedOutputReference = MwaaEnvironmentLastUpdatedOutputReference;
_c = JSII_RTTI_SYMBOL_1;
MwaaEnvironmentLastUpdatedOutputReference[_c] = { fqn: "@cdktf/aws-cdk.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference", version: "0.0.0" };
class MwaaEnvironmentLastUpdatedList extends cdktf.ComplexList {
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
        return new MwaaEnvironmentLastUpdatedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.MwaaEnvironmentLastUpdatedList = MwaaEnvironmentLastUpdatedList;
_d = JSII_RTTI_SYMBOL_1;
MwaaEnvironmentLastUpdatedList[_d] = { fqn: "@cdktf/aws-cdk.mwaaEnvironment.MwaaEnvironmentLastUpdatedList", version: "0.0.0" };
function mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
exports.mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform = mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform;
function mwaaEnvironmentLoggingConfigurationDagProcessingLogsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        log_level: {
            value: cdktf.stringToHclTerraform(struct.logLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.mwaaEnvironmentLoggingConfigurationDagProcessingLogsToHclTerraform = mwaaEnvironmentLoggingConfigurationDagProcessingLogsToHclTerraform;
class MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logLevel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logLevel = value.logLevel;
        }
    }
    // cloud_watch_log_group_arn - computed: true, optional: false, required: false
    get cloudWatchLogGroupArn() {
        return this.getStringAttribute('cloud_watch_log_group_arn');
    }
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    get logLevel() {
        return this.getStringAttribute('log_level');
    }
    set logLevel(value) {
        this._logLevel = value;
    }
    resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logLevelInput() {
        return this._logLevel;
    }
}
exports.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference = MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference;
_e = JSII_RTTI_SYMBOL_1;
MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference[_e] = { fqn: "@cdktf/aws-cdk.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference", version: "0.0.0" };
function mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
exports.mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform = mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform;
function mwaaEnvironmentLoggingConfigurationSchedulerLogsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        log_level: {
            value: cdktf.stringToHclTerraform(struct.logLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.mwaaEnvironmentLoggingConfigurationSchedulerLogsToHclTerraform = mwaaEnvironmentLoggingConfigurationSchedulerLogsToHclTerraform;
class MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logLevel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logLevel = value.logLevel;
        }
    }
    // cloud_watch_log_group_arn - computed: true, optional: false, required: false
    get cloudWatchLogGroupArn() {
        return this.getStringAttribute('cloud_watch_log_group_arn');
    }
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    get logLevel() {
        return this.getStringAttribute('log_level');
    }
    set logLevel(value) {
        this._logLevel = value;
    }
    resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logLevelInput() {
        return this._logLevel;
    }
}
exports.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference = MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference;
_f = JSII_RTTI_SYMBOL_1;
MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference[_f] = { fqn: "@cdktf/aws-cdk.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference", version: "0.0.0" };
function mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
exports.mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform = mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform;
function mwaaEnvironmentLoggingConfigurationTaskLogsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        log_level: {
            value: cdktf.stringToHclTerraform(struct.logLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.mwaaEnvironmentLoggingConfigurationTaskLogsToHclTerraform = mwaaEnvironmentLoggingConfigurationTaskLogsToHclTerraform;
class MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logLevel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logLevel = value.logLevel;
        }
    }
    // cloud_watch_log_group_arn - computed: true, optional: false, required: false
    get cloudWatchLogGroupArn() {
        return this.getStringAttribute('cloud_watch_log_group_arn');
    }
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    get logLevel() {
        return this.getStringAttribute('log_level');
    }
    set logLevel(value) {
        this._logLevel = value;
    }
    resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logLevelInput() {
        return this._logLevel;
    }
}
exports.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference = MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference;
_g = JSII_RTTI_SYMBOL_1;
MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference[_g] = { fqn: "@cdktf/aws-cdk.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference", version: "0.0.0" };
function mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
exports.mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform = mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform;
function mwaaEnvironmentLoggingConfigurationWebserverLogsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        log_level: {
            value: cdktf.stringToHclTerraform(struct.logLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.mwaaEnvironmentLoggingConfigurationWebserverLogsToHclTerraform = mwaaEnvironmentLoggingConfigurationWebserverLogsToHclTerraform;
class MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logLevel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logLevel = value.logLevel;
        }
    }
    // cloud_watch_log_group_arn - computed: true, optional: false, required: false
    get cloudWatchLogGroupArn() {
        return this.getStringAttribute('cloud_watch_log_group_arn');
    }
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    get logLevel() {
        return this.getStringAttribute('log_level');
    }
    set logLevel(value) {
        this._logLevel = value;
    }
    resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logLevelInput() {
        return this._logLevel;
    }
}
exports.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference = MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference;
_h = JSII_RTTI_SYMBOL_1;
MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference[_h] = { fqn: "@cdktf/aws-cdk.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference", version: "0.0.0" };
function mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
exports.mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform = mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform;
function mwaaEnvironmentLoggingConfigurationWorkerLogsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        log_level: {
            value: cdktf.stringToHclTerraform(struct.logLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.mwaaEnvironmentLoggingConfigurationWorkerLogsToHclTerraform = mwaaEnvironmentLoggingConfigurationWorkerLogsToHclTerraform;
class MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logLevel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logLevel = value.logLevel;
        }
    }
    // cloud_watch_log_group_arn - computed: true, optional: false, required: false
    get cloudWatchLogGroupArn() {
        return this.getStringAttribute('cloud_watch_log_group_arn');
    }
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    get logLevel() {
        return this.getStringAttribute('log_level');
    }
    set logLevel(value) {
        this._logLevel = value;
    }
    resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logLevelInput() {
        return this._logLevel;
    }
}
exports.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference = MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference;
_j = JSII_RTTI_SYMBOL_1;
MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference[_j] = { fqn: "@cdktf/aws-cdk.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference", version: "0.0.0" };
function mwaaEnvironmentLoggingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dag_processing_logs: mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct.dagProcessingLogs),
        scheduler_logs: mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct.schedulerLogs),
        task_logs: mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct.taskLogs),
        webserver_logs: mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct.webserverLogs),
        worker_logs: mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct.workerLogs),
    };
}
exports.mwaaEnvironmentLoggingConfigurationToTerraform = mwaaEnvironmentLoggingConfigurationToTerraform;
function mwaaEnvironmentLoggingConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        dag_processing_logs: {
            value: mwaaEnvironmentLoggingConfigurationDagProcessingLogsToHclTerraform(struct.dagProcessingLogs),
            isBlock: true,
            type: "list",
            storageClassType: "MwaaEnvironmentLoggingConfigurationDagProcessingLogsList",
        },
        scheduler_logs: {
            value: mwaaEnvironmentLoggingConfigurationSchedulerLogsToHclTerraform(struct.schedulerLogs),
            isBlock: true,
            type: "list",
            storageClassType: "MwaaEnvironmentLoggingConfigurationSchedulerLogsList",
        },
        task_logs: {
            value: mwaaEnvironmentLoggingConfigurationTaskLogsToHclTerraform(struct.taskLogs),
            isBlock: true,
            type: "list",
            storageClassType: "MwaaEnvironmentLoggingConfigurationTaskLogsList",
        },
        webserver_logs: {
            value: mwaaEnvironmentLoggingConfigurationWebserverLogsToHclTerraform(struct.webserverLogs),
            isBlock: true,
            type: "list",
            storageClassType: "MwaaEnvironmentLoggingConfigurationWebserverLogsList",
        },
        worker_logs: {
            value: mwaaEnvironmentLoggingConfigurationWorkerLogsToHclTerraform(struct.workerLogs),
            isBlock: true,
            type: "list",
            storageClassType: "MwaaEnvironmentLoggingConfigurationWorkerLogsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.mwaaEnvironmentLoggingConfigurationToHclTerraform = mwaaEnvironmentLoggingConfigurationToHclTerraform;
class MwaaEnvironmentLoggingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // dag_processing_logs - computed: false, optional: true, required: false
        this._dagProcessingLogs = new MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference(this, "dag_processing_logs");
        // scheduler_logs - computed: false, optional: true, required: false
        this._schedulerLogs = new MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference(this, "scheduler_logs");
        // task_logs - computed: false, optional: true, required: false
        this._taskLogs = new MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference(this, "task_logs");
        // webserver_logs - computed: false, optional: true, required: false
        this._webserverLogs = new MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference(this, "webserver_logs");
        // worker_logs - computed: false, optional: true, required: false
        this._workerLogs = new MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference(this, "worker_logs");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._dagProcessingLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dagProcessingLogs = this._dagProcessingLogs?.internalValue;
        }
        if (this._schedulerLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schedulerLogs = this._schedulerLogs?.internalValue;
        }
        if (this._taskLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskLogs = this._taskLogs?.internalValue;
        }
        if (this._webserverLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.webserverLogs = this._webserverLogs?.internalValue;
        }
        if (this._workerLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.workerLogs = this._workerLogs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dagProcessingLogs.internalValue = undefined;
            this._schedulerLogs.internalValue = undefined;
            this._taskLogs.internalValue = undefined;
            this._webserverLogs.internalValue = undefined;
            this._workerLogs.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dagProcessingLogs.internalValue = value.dagProcessingLogs;
            this._schedulerLogs.internalValue = value.schedulerLogs;
            this._taskLogs.internalValue = value.taskLogs;
            this._webserverLogs.internalValue = value.webserverLogs;
            this._workerLogs.internalValue = value.workerLogs;
        }
    }
    get dagProcessingLogs() {
        return this._dagProcessingLogs;
    }
    putDagProcessingLogs(value) {
        this._dagProcessingLogs.internalValue = value;
    }
    resetDagProcessingLogs() {
        this._dagProcessingLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dagProcessingLogsInput() {
        return this._dagProcessingLogs.internalValue;
    }
    get schedulerLogs() {
        return this._schedulerLogs;
    }
    putSchedulerLogs(value) {
        this._schedulerLogs.internalValue = value;
    }
    resetSchedulerLogs() {
        this._schedulerLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get schedulerLogsInput() {
        return this._schedulerLogs.internalValue;
    }
    get taskLogs() {
        return this._taskLogs;
    }
    putTaskLogs(value) {
        this._taskLogs.internalValue = value;
    }
    resetTaskLogs() {
        this._taskLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get taskLogsInput() {
        return this._taskLogs.internalValue;
    }
    get webserverLogs() {
        return this._webserverLogs;
    }
    putWebserverLogs(value) {
        this._webserverLogs.internalValue = value;
    }
    resetWebserverLogs() {
        this._webserverLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get webserverLogsInput() {
        return this._webserverLogs.internalValue;
    }
    get workerLogs() {
        return this._workerLogs;
    }
    putWorkerLogs(value) {
        this._workerLogs.internalValue = value;
    }
    resetWorkerLogs() {
        this._workerLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workerLogsInput() {
        return this._workerLogs.internalValue;
    }
}
exports.MwaaEnvironmentLoggingConfigurationOutputReference = MwaaEnvironmentLoggingConfigurationOutputReference;
_k = JSII_RTTI_SYMBOL_1;
MwaaEnvironmentLoggingConfigurationOutputReference[_k] = { fqn: "@cdktf/aws-cdk.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference", version: "0.0.0" };
function mwaaEnvironmentNetworkConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.subnetIds),
    };
}
exports.mwaaEnvironmentNetworkConfigurationToTerraform = mwaaEnvironmentNetworkConfigurationToTerraform;
function mwaaEnvironmentNetworkConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        security_group_ids: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.securityGroupIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.subnetIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.mwaaEnvironmentNetworkConfigurationToHclTerraform = mwaaEnvironmentNetworkConfigurationToHclTerraform;
class MwaaEnvironmentNetworkConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }
    get securityGroupIds() {
        return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
    }
    set securityGroupIds(value) {
        this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupIdsInput() {
        return this._securityGroupIds;
    }
    get subnetIds() {
        return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
    }
    set subnetIds(value) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    get subnetIdsInput() {
        return this._subnetIds;
    }
}
exports.MwaaEnvironmentNetworkConfigurationOutputReference = MwaaEnvironmentNetworkConfigurationOutputReference;
_l = JSII_RTTI_SYMBOL_1;
MwaaEnvironmentNetworkConfigurationOutputReference[_l] = { fqn: "@cdktf/aws-cdk.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mwaa_environment aws_mwaa_environment}
*/
class MwaaEnvironment extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MwaaEnvironment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MwaaEnvironment to import
    * @param importFromId The id of the existing MwaaEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mwaa_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MwaaEnvironment to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_mwaa_environment", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/mwaa_environment aws_mwaa_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MwaaEnvironmentConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_mwaa_environment',
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
        // last_updated - computed: true, optional: false, required: false
        this._lastUpdated = new MwaaEnvironmentLastUpdatedList(this, "last_updated", false);
        // logging_configuration - computed: false, optional: true, required: false
        this._loggingConfiguration = new MwaaEnvironmentLoggingConfigurationOutputReference(this, "logging_configuration");
        // network_configuration - computed: false, optional: false, required: true
        this._networkConfiguration = new MwaaEnvironmentNetworkConfigurationOutputReference(this, "network_configuration");
        this._airflowConfigurationOptions = config.airflowConfigurationOptions;
        this._airflowVersion = config.airflowVersion;
        this._dagS3Path = config.dagS3Path;
        this._environmentClass = config.environmentClass;
        this._executionRoleArn = config.executionRoleArn;
        this._id = config.id;
        this._kmsKey = config.kmsKey;
        this._maxWorkers = config.maxWorkers;
        this._minWorkers = config.minWorkers;
        this._name = config.name;
        this._pluginsS3ObjectVersion = config.pluginsS3ObjectVersion;
        this._pluginsS3Path = config.pluginsS3Path;
        this._requirementsS3ObjectVersion = config.requirementsS3ObjectVersion;
        this._requirementsS3Path = config.requirementsS3Path;
        this._sourceBucketArn = config.sourceBucketArn;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._webserverAccessMode = config.webserverAccessMode;
        this._weeklyMaintenanceWindowStart = config.weeklyMaintenanceWindowStart;
        this._loggingConfiguration.internalValue = config.loggingConfiguration;
        this._networkConfiguration.internalValue = config.networkConfiguration;
    }
    get airflowConfigurationOptions() {
        return this.getStringMapAttribute('airflow_configuration_options');
    }
    set airflowConfigurationOptions(value) {
        this._airflowConfigurationOptions = value;
    }
    resetAirflowConfigurationOptions() {
        this._airflowConfigurationOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get airflowConfigurationOptionsInput() {
        return this._airflowConfigurationOptions;
    }
    get airflowVersion() {
        return this.getStringAttribute('airflow_version');
    }
    set airflowVersion(value) {
        this._airflowVersion = value;
    }
    resetAirflowVersion() {
        this._airflowVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get airflowVersionInput() {
        return this._airflowVersion;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    get dagS3Path() {
        return this.getStringAttribute('dag_s3_path');
    }
    set dagS3Path(value) {
        this._dagS3Path = value;
    }
    // Temporarily expose input value. Use with caution.
    get dagS3PathInput() {
        return this._dagS3Path;
    }
    get environmentClass() {
        return this.getStringAttribute('environment_class');
    }
    set environmentClass(value) {
        this._environmentClass = value;
    }
    resetEnvironmentClass() {
        this._environmentClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentClassInput() {
        return this._environmentClass;
    }
    get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    set executionRoleArn(value) {
        this._executionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get executionRoleArnInput() {
        return this._executionRoleArn;
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
    get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    set kmsKey(value) {
        this._kmsKey = value;
    }
    resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyInput() {
        return this._kmsKey;
    }
    get lastUpdated() {
        return this._lastUpdated;
    }
    get maxWorkers() {
        return this.getNumberAttribute('max_workers');
    }
    set maxWorkers(value) {
        this._maxWorkers = value;
    }
    resetMaxWorkers() {
        this._maxWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxWorkersInput() {
        return this._maxWorkers;
    }
    get minWorkers() {
        return this.getNumberAttribute('min_workers');
    }
    set minWorkers(value) {
        this._minWorkers = value;
    }
    resetMinWorkers() {
        this._minWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minWorkersInput() {
        return this._minWorkers;
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
    get pluginsS3ObjectVersion() {
        return this.getStringAttribute('plugins_s3_object_version');
    }
    set pluginsS3ObjectVersion(value) {
        this._pluginsS3ObjectVersion = value;
    }
    resetPluginsS3ObjectVersion() {
        this._pluginsS3ObjectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pluginsS3ObjectVersionInput() {
        return this._pluginsS3ObjectVersion;
    }
    get pluginsS3Path() {
        return this.getStringAttribute('plugins_s3_path');
    }
    set pluginsS3Path(value) {
        this._pluginsS3Path = value;
    }
    resetPluginsS3Path() {
        this._pluginsS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pluginsS3PathInput() {
        return this._pluginsS3Path;
    }
    get requirementsS3ObjectVersion() {
        return this.getStringAttribute('requirements_s3_object_version');
    }
    set requirementsS3ObjectVersion(value) {
        this._requirementsS3ObjectVersion = value;
    }
    resetRequirementsS3ObjectVersion() {
        this._requirementsS3ObjectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requirementsS3ObjectVersionInput() {
        return this._requirementsS3ObjectVersion;
    }
    get requirementsS3Path() {
        return this.getStringAttribute('requirements_s3_path');
    }
    set requirementsS3Path(value) {
        this._requirementsS3Path = value;
    }
    resetRequirementsS3Path() {
        this._requirementsS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requirementsS3PathInput() {
        return this._requirementsS3Path;
    }
    // service_role_arn - computed: true, optional: false, required: false
    get serviceRoleArn() {
        return this.getStringAttribute('service_role_arn');
    }
    get sourceBucketArn() {
        return this.getStringAttribute('source_bucket_arn');
    }
    set sourceBucketArn(value) {
        this._sourceBucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get sourceBucketArnInput() {
        return this._sourceBucketArn;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
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
    get webserverAccessMode() {
        return this.getStringAttribute('webserver_access_mode');
    }
    set webserverAccessMode(value) {
        this._webserverAccessMode = value;
    }
    resetWebserverAccessMode() {
        this._webserverAccessMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get webserverAccessModeInput() {
        return this._webserverAccessMode;
    }
    // webserver_url - computed: true, optional: false, required: false
    get webserverUrl() {
        return this.getStringAttribute('webserver_url');
    }
    get weeklyMaintenanceWindowStart() {
        return this.getStringAttribute('weekly_maintenance_window_start');
    }
    set weeklyMaintenanceWindowStart(value) {
        this._weeklyMaintenanceWindowStart = value;
    }
    resetWeeklyMaintenanceWindowStart() {
        this._weeklyMaintenanceWindowStart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get weeklyMaintenanceWindowStartInput() {
        return this._weeklyMaintenanceWindowStart;
    }
    get loggingConfiguration() {
        return this._loggingConfiguration;
    }
    putLoggingConfiguration(value) {
        this._loggingConfiguration.internalValue = value;
    }
    resetLoggingConfiguration() {
        this._loggingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loggingConfigurationInput() {
        return this._loggingConfiguration.internalValue;
    }
    get networkConfiguration() {
        return this._networkConfiguration;
    }
    putNetworkConfiguration(value) {
        this._networkConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get networkConfigurationInput() {
        return this._networkConfiguration.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            airflow_configuration_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._airflowConfigurationOptions),
            airflow_version: cdktf.stringToTerraform(this._airflowVersion),
            dag_s3_path: cdktf.stringToTerraform(this._dagS3Path),
            environment_class: cdktf.stringToTerraform(this._environmentClass),
            execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
            id: cdktf.stringToTerraform(this._id),
            kms_key: cdktf.stringToTerraform(this._kmsKey),
            max_workers: cdktf.numberToTerraform(this._maxWorkers),
            min_workers: cdktf.numberToTerraform(this._minWorkers),
            name: cdktf.stringToTerraform(this._name),
            plugins_s3_object_version: cdktf.stringToTerraform(this._pluginsS3ObjectVersion),
            plugins_s3_path: cdktf.stringToTerraform(this._pluginsS3Path),
            requirements_s3_object_version: cdktf.stringToTerraform(this._requirementsS3ObjectVersion),
            requirements_s3_path: cdktf.stringToTerraform(this._requirementsS3Path),
            source_bucket_arn: cdktf.stringToTerraform(this._sourceBucketArn),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            webserver_access_mode: cdktf.stringToTerraform(this._webserverAccessMode),
            weekly_maintenance_window_start: cdktf.stringToTerraform(this._weeklyMaintenanceWindowStart),
            logging_configuration: mwaaEnvironmentLoggingConfigurationToTerraform(this._loggingConfiguration.internalValue),
            network_configuration: mwaaEnvironmentNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            airflow_configuration_options: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._airflowConfigurationOptions),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            airflow_version: {
                value: cdktf.stringToHclTerraform(this._airflowVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dag_s3_path: {
                value: cdktf.stringToHclTerraform(this._dagS3Path),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_class: {
                value: cdktf.stringToHclTerraform(this._environmentClass),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            execution_role_arn: {
                value: cdktf.stringToHclTerraform(this._executionRoleArn),
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
            kms_key: {
                value: cdktf.stringToHclTerraform(this._kmsKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_workers: {
                value: cdktf.numberToHclTerraform(this._maxWorkers),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            min_workers: {
                value: cdktf.numberToHclTerraform(this._minWorkers),
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
            plugins_s3_object_version: {
                value: cdktf.stringToHclTerraform(this._pluginsS3ObjectVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            plugins_s3_path: {
                value: cdktf.stringToHclTerraform(this._pluginsS3Path),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            requirements_s3_object_version: {
                value: cdktf.stringToHclTerraform(this._requirementsS3ObjectVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            requirements_s3_path: {
                value: cdktf.stringToHclTerraform(this._requirementsS3Path),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_bucket_arn: {
                value: cdktf.stringToHclTerraform(this._sourceBucketArn),
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
            webserver_access_mode: {
                value: cdktf.stringToHclTerraform(this._webserverAccessMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            weekly_maintenance_window_start: {
                value: cdktf.stringToHclTerraform(this._weeklyMaintenanceWindowStart),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logging_configuration: {
                value: mwaaEnvironmentLoggingConfigurationToHclTerraform(this._loggingConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "MwaaEnvironmentLoggingConfigurationList",
            },
            network_configuration: {
                value: mwaaEnvironmentNetworkConfigurationToHclTerraform(this._networkConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "MwaaEnvironmentNetworkConfigurationList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.MwaaEnvironment = MwaaEnvironment;
_m = JSII_RTTI_SYMBOL_1;
MwaaEnvironment[_m] = { fqn: "@cdktf/aws-cdk.mwaaEnvironment.MwaaEnvironment", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
MwaaEnvironment.tfResourceType = "aws_mwaa_environment";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL213YWEtZW52aXJvbm1lbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSwrQkFBK0I7QUFvRy9CLFNBQWdCLDBDQUEwQyxDQUFDLE1BQXdDO0lBQ2pHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU8sRUFDTixDQUFBO0FBQ0gsQ0FBQztBQVBELGdHQU9DO0FBR0QsU0FBZ0IsNkNBQTZDLENBQUMsTUFBd0M7SUFDcEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUcsRUFDYixDQUFDO0lBQ0YsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBUkQsc0dBUUM7QUFFRCxNQUFhLDhDQUErQyxTQUFRLEtBQUssQ0FBQyxhQUFhO0lBR3JGOzs7OztNQUtFO0lBQ0YsWUFBbUIsaUJBQTZDLEVBQUUsa0JBQTBCLEVBQUUsa0JBQTBCLEVBQUUsc0JBQStCO1FB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QkM7OztBQTVrQkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyw4QkFBYyxHQUFHLHNCQUFzQixBQUF6QixDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL213YWFfZW52aXJvbm1lbnRcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBNd2FhRW52aXJvbm1lbnRDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbXdhYV9lbnZpcm9ubWVudCNhaXJmbG93X2NvbmZpZ3VyYXRpb25fb3B0aW9ucyBNd2FhRW52aXJvbm1lbnQjYWlyZmxvd19jb25maWd1cmF0aW9uX29wdGlvbnN9XG4gICovXG4gIHJlYWRvbmx5IGFpcmZsb3dDb25maWd1cmF0aW9uT3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL213YWFfZW52aXJvbm1lbnQjYWlyZmxvd192ZXJzaW9uIE13YWFFbnZpcm9ubWVudCNhaXJmbG93X3ZlcnNpb259XG4gICovXG4gIHJlYWRvbmx5IGFpcmZsb3dWZXJzaW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9td2FhX2Vudmlyb25tZW50I2RhZ19zM19wYXRoIE13YWFFbnZpcm9ubWVudCNkYWdfczNfcGF0aH1cbiAgKi9cbiAgcmVhZG9ubHkgZGFnUzNQYXRoOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL213YWFfZW52aXJvbm1lbnQjZW52aXJvbm1lbnRfY2xhc3MgTXdhYUVudmlyb25tZW50I2Vudmlyb25tZW50X2NsYXNzfVxuICAqL1xuICByZWFkb25seSBlbnZpcm9ubWVudENsYXNzPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9td2FhX2Vudmlyb25tZW50I2V4ZWN1dGlvbl9yb2xlX2FybiBNd2FhRW52aXJvbm1lbnQjZXhlY3V0aW9uX3JvbGVfYXJufVxuICAqL1xuICByZWFkb25seSBleGVjdXRpb25Sb2xlQXJuOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL213YWFfZW52aXJvbm1lbnQjaWQgTXdhYUVudmlyb25tZW50I2lkfVxuICAqXG4gICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIGlkIGZpZWxkIGlzIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYWxsIHJlc291cmNlcyBpbiBUZXJyYWZvcm0gcHJvdmlkZXJzIHVzaW5nIGEgVGVycmFmb3JtIHByb3ZpZGVyIFNESyB2ZXJzaW9uIGJlbG93IDIuXG4gICogSWYgeW91IGV4cGVyaWVuY2UgcHJvYmxlbXMgc2V0dGluZyB0aGlzIHZhbHVlIGl0IG1pZ2h0IG5vdCBiZSBzZXR0YWJsZS4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHRoZSBwcm92aWRlciBkb2N1bWVudGF0aW9uIHRvIGVuc3VyZSBpdCBzaG91bGQgYmUgc2V0dGFibGUuXG4gICovXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9td2FhX2Vudmlyb25tZW50I2ttc19rZXkgTXdhYUVudmlyb25tZW50I2ttc19rZXl9XG4gICovXG4gIHJlYWRvbmx5IGttc0tleT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbXdhYV9lbnZpcm9ubWVudCNtYXhfd29ya2VycyBNd2FhRW52aXJvbm1lbnQjbWF4X3dvcmtlcnN9XG4gICovXG4gIHJlYWRvbmx5IG1heFdvcmtlcnM/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL213YWFfZW52aXJvbm1lbnQjbWluX3dvcmtlcnMgTXdhYUVudmlyb25tZW50I21pbl93b3JrZXJzfVxuICAqL1xuICByZWFkb25seSBtaW5Xb3JrZXJzPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9td2FhX2Vudmlyb25tZW50I25hbWUgTXdhYUVudmlyb25tZW50I25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbXdhYV9lbnZpcm9ubWVudCNwbHVnaW5zX3MzX29iamVjdF92ZXJzaW9uIE13YWFFbnZpcm9ubWVudCNwbHVnaW5zX3MzX29iamVjdF92ZXJzaW9ufVxuICAqL1xuICByZWFkb25seSBwbHVnaW5zUzNPYmplY3RWZXJzaW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9td2FhX2Vudmlyb25tZW50I3BsdWdpbnNfczNfcGF0aCBNd2FhRW52aXJvbm1lbnQjcGx1Z2luc19zM19wYXRofVxuICAqL1xuICByZWFkb25seSBwbHVnaW5zUzNQYXRoPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9td2FhX2Vudmlyb25tZW50I3JlcXVpcmVtZW50c19zM19vYmplY3RfdmVyc2lvbiBNd2FhRW52aXJvbm1lbnQjcmVxdWlyZW1lbnRzX3MzX29iamVjdF92ZXJzaW9ufVxuICAqL1xuICByZWFkb25seSByZXF1aXJlbWVudHNTM09iamVjdFZlcnNpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL213YWFfZW52aXJvbm1lbnQjcmVxdWlyZW1lbnRzX3MzX3BhdGggTXdhYUVudmlyb25tZW50I3JlcXVpcmVtZW50c19zM19wYXRofVxuICAqL1xuICByZWFkb25seSByZXF1aXJlbWVudHNTM1BhdGg/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL213YWFfZW52aXJvbm1lbnQjc291cmNlX2J1Y2tldF9hcm4gTXdhYUVudmlyb25tZW50I3NvdXJjZV9idWNrZXRfYXJufVxuICAqL1xuICByZWFkb25seSBzb3VyY2VCdWNrZXRBcm46IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbXdhYV9lbnZpcm9ubWVudCN0YWdzIE13YWFFbnZpcm9ubWVudCN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbXdhYV9lbnZpcm9ubWVudCN0YWdzX2FsbCBNd2FhRW52aXJvbm1lbnQjdGFnc19hbGx9XG4gICovXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9td2FhX2Vudmlyb25tZW50I3dlYnNlcnZlcl9hY2Nlc3NfbW9kZSBNd2FhRW52aXJvbm1lbnQjd2Vic2VydmVyX2FjY2Vzc19tb2RlfVxuICAqL1xuICByZWFkb25seSB3ZWJzZXJ2ZXJBY2Nlc3NNb2RlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9td2FhX2Vudmlyb25tZW50I3dlZWtseV9tYWludGVuYW5jZV93aW5kb3dfc3RhcnQgTXdhYUVudmlyb25tZW50I3dlZWtseV9tYWludGVuYW5jZV93aW5kb3dfc3RhcnR9XG4gICovXG4gIHJlYWRvbmx5IHdlZWtseU1haW50ZW5hbmNlV2luZG93U3RhcnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGxvZ2dpbmdfY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbXdhYV9lbnZpcm9ubWVudCNsb2dnaW5nX2NvbmZpZ3VyYXRpb24gTXdhYUVudmlyb25tZW50I2xvZ2dpbmdfY29uZmlndXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgbG9nZ2luZ0NvbmZpZ3VyYXRpb24/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogbmV0d29ya19jb25maWd1cmF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9td2FhX2Vudmlyb25tZW50I25ldHdvcmtfY29uZmlndXJhdGlvbiBNd2FhRW52aXJvbm1lbnQjbmV0d29ya19jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBuZXR3b3JrQ29uZmlndXJhdGlvbjogTXdhYUVudmlyb25tZW50TmV0d29ya0NvbmZpZ3VyYXRpb247XG59XG5leHBvcnQgaW50ZXJmYWNlIE13YWFFbnZpcm9ubWVudExhc3RVcGRhdGVkRXJyb3Ige1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXdhYUVudmlyb25tZW50TGFzdFVwZGF0ZWRFcnJvclRvVGVycmFmb3JtKHN0cnVjdD86IE13YWFFbnZpcm9ubWVudExhc3RVcGRhdGVkRXJyb3IpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbXdhYUVudmlyb25tZW50TGFzdFVwZGF0ZWRFcnJvclRvSGNsVGVycmFmb3JtKHN0cnVjdD86IE13YWFFbnZpcm9ubWVudExhc3RVcGRhdGVkRXJyb3IpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICB9O1xuICByZXR1cm4gYXR0cnM7XG59XG5cbmV4cG9ydCBjbGFzcyBNd2FhRW52aXJvbm1lbnRMYXN0VXBkYXRlZEVycm9yT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE13YWFFbnZpcm9ubWVudExhc3RVcGRhdGVkRXJyb3IgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE13YWFFbnZpcm9ubWVudExhc3RVcGRhdGVkRXJyb3IgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gIH1cblxuICAvLyBlcnJvcl9jb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXJyb3JDb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXJyb3JfY29kZScpO1xuICB9XG5cbiAgLy8gZXJyb3JfbWVzc2FnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVycm9yTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Vycm9yX21lc3NhZ2UnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTXdhYUVudmlyb25tZW50TGFzdFVwZGF0ZWRFcnJvckxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogTXdhYUVudmlyb25tZW50TGFzdFVwZGF0ZWRFcnJvck91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBNd2FhRW52aXJvbm1lbnRMYXN0VXBkYXRlZEVycm9yT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXdhYUVudmlyb25tZW50TGFzdFVwZGF0ZWQge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXdhYUVudmlyb25tZW50TGFzdFVwZGF0ZWRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNd2FhRW52aXJvbm1lbnRMYXN0VXBkYXRlZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtd2FhRW52aXJvbm1lbnRMYXN0VXBkYXRlZFRvSGNsVGVycmFmb3JtKHN0cnVjdD86IE13YWFFbnZpcm9ubWVudExhc3RVcGRhdGVkKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgfTtcbiAgcmV0dXJuIGF0dHJzO1xufVxuXG5leHBvcnQgY2xhc3MgTXdhYUVudmlyb25tZW50TGFzdFVwZGF0ZWRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJbmRleCB0aGUgaW5kZXggb2YgdGhpcyBpdGVtIGluIHRoZSBsaXN0XG4gICogQHBhcmFtIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBjb21wbGV4T2JqZWN0SW5kZXg6IG51bWJlciwgY29tcGxleE9iamVjdElzRnJvbVNldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQsIGNvbXBsZXhPYmplY3RJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTXdhYUVudmlyb25tZW50TGFzdFVwZGF0ZWQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE13YWFFbnZpcm9ubWVudExhc3RVcGRhdGVkIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gY3JlYXRlZF9hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0ZWRBdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0ZWRfYXQnKTtcbiAgfVxuXG4gIC8vIGVycm9yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Vycm9yID0gbmV3IE13YWFFbnZpcm9ubWVudExhc3RVcGRhdGVkRXJyb3JMaXN0KHRoaXMsIFwiZXJyb3JcIiwgZmFsc2UpO1xuICBwdWJsaWMgZ2V0IGVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgfVxuXG4gIC8vIHN0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1cycpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNd2FhRW52aXJvbm1lbnRMYXN0VXBkYXRlZExpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogTXdhYUVudmlyb25tZW50TGFzdFVwZGF0ZWRPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgTXdhYUVudmlyb25tZW50TGFzdFVwZGF0ZWRPdXRwdXRSZWZlcmVuY2UodGhpcy50ZXJyYWZvcm1SZXNvdXJjZSwgdGhpcy50ZXJyYWZvcm1BdHRyaWJ1dGUsIGluZGV4LCB0aGlzLndyYXBzU2V0KTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbkRhZ1Byb2Nlc3NpbmdMb2dzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbXdhYV9lbnZpcm9ubWVudCNlbmFibGVkIE13YWFFbnZpcm9ubWVudCNlbmFibGVkfVxuICAqL1xuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9td2FhX2Vudmlyb25tZW50I2xvZ19sZXZlbCBNd2FhRW52aXJvbm1lbnQjbG9nX2xldmVsfVxuICAqL1xuICByZWFkb25seSBsb2dMZXZlbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uRGFnUHJvY2Vzc2luZ0xvZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbkRhZ1Byb2Nlc3NpbmdMb2dzT3V0cHV0UmVmZXJlbmNlIHwgTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25EYWdQcm9jZXNzaW5nTG9ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBsb2dfbGV2ZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nTGV2ZWwpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uRGFnUHJvY2Vzc2luZ0xvZ3NUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbkRhZ1Byb2Nlc3NpbmdMb2dzT3V0cHV0UmVmZXJlbmNlIHwgTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25EYWdQcm9jZXNzaW5nTG9ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZW5hYmxlZDoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBsb2dfbGV2ZWw6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxvZ0xldmVsKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uRGFnUHJvY2Vzc2luZ0xvZ3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uRGFnUHJvY2Vzc2luZ0xvZ3MgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5hYmxlZCA9IHRoaXMuX2VuYWJsZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sb2dMZXZlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sb2dMZXZlbCA9IHRoaXMuX2xvZ0xldmVsO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25EYWdQcm9jZXNzaW5nTG9ncyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sb2dMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlLmVuYWJsZWQ7XG4gICAgICB0aGlzLl9sb2dMZXZlbCA9IHZhbHVlLmxvZ0xldmVsO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNsb3VkX3dhdGNoX2xvZ19ncm91cF9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbG91ZFdhdGNoTG9nR3JvdXBBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbG91ZF93YXRjaF9sb2dfZ3JvdXBfYXJuJyk7XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlZCgpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQ7XG4gIH1cblxuICAvLyBsb2dfbGV2ZWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dMZXZlbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbG9nTGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfbGV2ZWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ0xldmVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2dMZXZlbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvZ0xldmVsKCkge1xuICAgIHRoaXMuX2xvZ0xldmVsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dMZXZlbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2dMZXZlbDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblNjaGVkdWxlckxvZ3Mge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9td2FhX2Vudmlyb25tZW50I2VuYWJsZWQgTXdhYUVudmlyb25tZW50I2VuYWJsZWR9XG4gICovXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL213YWFfZW52aXJvbm1lbnQjbG9nX2xldmVsIE13YWFFbnZpcm9ubWVudCNsb2dfbGV2ZWx9XG4gICovXG4gIHJlYWRvbmx5IGxvZ0xldmVsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25TY2hlZHVsZXJMb2dzVG9UZXJyYWZvcm0oc3RydWN0PzogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25TY2hlZHVsZXJMb2dzT3V0cHV0UmVmZXJlbmNlIHwgTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25TY2hlZHVsZXJMb2dzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGxvZ19sZXZlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dMZXZlbCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25TY2hlZHVsZXJMb2dzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25TY2hlZHVsZXJMb2dzT3V0cHV0UmVmZXJlbmNlIHwgTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25TY2hlZHVsZXJMb2dzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBlbmFibGVkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIGxvZ19sZXZlbDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubG9nTGV2ZWwpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25TY2hlZHVsZXJMb2dzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblNjaGVkdWxlckxvZ3MgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5hYmxlZCA9IHRoaXMuX2VuYWJsZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sb2dMZXZlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sb2dMZXZlbCA9IHRoaXMuX2xvZ0xldmVsO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25TY2hlZHVsZXJMb2dzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xvZ0xldmVsID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdmFsdWUuZW5hYmxlZDtcbiAgICAgIHRoaXMuX2xvZ0xldmVsID0gdmFsdWUubG9nTGV2ZWw7XG4gICAgfVxuICB9XG5cbiAgLy8gY2xvdWRfd2F0Y2hfbG9nX2dyb3VwX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsb3VkV2F0Y2hMb2dHcm91cEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nsb3VkX3dhdGNoX2xvZ19ncm91cF9hcm4nKTtcbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxuXG4gIC8vIGxvZ19sZXZlbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ0xldmVsPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2dMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19sZXZlbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9nTGV2ZWwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xvZ0xldmVsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nTGV2ZWwoKSB7XG4gICAgdGhpcy5fbG9nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvZ0xldmVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0xldmVsO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uVGFza0xvZ3Mge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9td2FhX2Vudmlyb25tZW50I2VuYWJsZWQgTXdhYUVudmlyb25tZW50I2VuYWJsZWR9XG4gICovXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL213YWFfZW52aXJvbm1lbnQjbG9nX2xldmVsIE13YWFFbnZpcm9ubWVudCNsb2dfbGV2ZWx9XG4gICovXG4gIHJlYWRvbmx5IGxvZ0xldmVsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25UYXNrTG9nc1RvVGVycmFmb3JtKHN0cnVjdD86IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uVGFza0xvZ3NPdXRwdXRSZWZlcmVuY2UgfCBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblRhc2tMb2dzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGxvZ19sZXZlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dMZXZlbCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25UYXNrTG9nc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uVGFza0xvZ3NPdXRwdXRSZWZlcmVuY2UgfCBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblRhc2tMb2dzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBlbmFibGVkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIGxvZ19sZXZlbDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubG9nTGV2ZWwpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25UYXNrTG9nc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25UYXNrTG9ncyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVkID0gdGhpcy5fZW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xvZ0xldmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxvZ0xldmVsID0gdGhpcy5fbG9nTGV2ZWw7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblRhc2tMb2dzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xvZ0xldmVsID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdmFsdWUuZW5hYmxlZDtcbiAgICAgIHRoaXMuX2xvZ0xldmVsID0gdmFsdWUubG9nTGV2ZWw7XG4gICAgfVxuICB9XG5cbiAgLy8gY2xvdWRfd2F0Y2hfbG9nX2dyb3VwX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsb3VkV2F0Y2hMb2dHcm91cEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nsb3VkX3dhdGNoX2xvZ19ncm91cF9hcm4nKTtcbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxuXG4gIC8vIGxvZ19sZXZlbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ0xldmVsPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2dMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19sZXZlbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9nTGV2ZWwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xvZ0xldmVsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nTGV2ZWwoKSB7XG4gICAgdGhpcy5fbG9nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvZ0xldmVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0xldmVsO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV2Vic2VydmVyTG9ncyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL213YWFfZW52aXJvbm1lbnQjZW5hYmxlZCBNd2FhRW52aXJvbm1lbnQjZW5hYmxlZH1cbiAgKi9cbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbXdhYV9lbnZpcm9ubWVudCNsb2dfbGV2ZWwgTXdhYUVudmlyb25tZW50I2xvZ19sZXZlbH1cbiAgKi9cbiAgcmVhZG9ubHkgbG9nTGV2ZWw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldlYnNlcnZlckxvZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldlYnNlcnZlckxvZ3NPdXRwdXRSZWZlcmVuY2UgfCBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldlYnNlcnZlckxvZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgbG9nX2xldmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0xldmVsKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldlYnNlcnZlckxvZ3NUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldlYnNlcnZlckxvZ3NPdXRwdXRSZWZlcmVuY2UgfCBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldlYnNlcnZlckxvZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGVuYWJsZWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgbG9nX2xldmVsOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sb2dMZXZlbCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldlYnNlcnZlckxvZ3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV2Vic2VydmVyTG9ncyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVkID0gdGhpcy5fZW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xvZ0xldmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxvZ0xldmVsID0gdGhpcy5fbG9nTGV2ZWw7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldlYnNlcnZlckxvZ3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZS5lbmFibGVkO1xuICAgICAgdGhpcy5fbG9nTGV2ZWwgPSB2YWx1ZS5sb2dMZXZlbDtcbiAgICB9XG4gIH1cblxuICAvLyBjbG91ZF93YXRjaF9sb2dfZ3JvdXBfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xvdWRXYXRjaExvZ0dyb3VwQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2xvdWRfd2F0Y2hfbG9nX2dyb3VwX2FybicpO1xuICB9XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZWQoKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xuICB9XG5cbiAgLy8gbG9nX2xldmVsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9nTGV2ZWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxvZ0xldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX2xldmVsJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2dMZXZlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9nTGV2ZWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2dMZXZlbCgpIHtcbiAgICB0aGlzLl9sb2dMZXZlbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nTGV2ZWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nTGV2ZWw7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25Xb3JrZXJMb2dzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbXdhYV9lbnZpcm9ubWVudCNlbmFibGVkIE13YWFFbnZpcm9ubWVudCNlbmFibGVkfVxuICAqL1xuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9td2FhX2Vudmlyb25tZW50I2xvZ19sZXZlbCBNd2FhRW52aXJvbm1lbnQjbG9nX2xldmVsfVxuICAqL1xuICByZWFkb25seSBsb2dMZXZlbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV29ya2VyTG9nc1RvVGVycmFmb3JtKHN0cnVjdD86IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV29ya2VyTG9nc091dHB1dFJlZmVyZW5jZSB8IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV29ya2VyTG9ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBsb2dfbGV2ZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nTGV2ZWwpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV29ya2VyTG9nc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV29ya2VyTG9nc091dHB1dFJlZmVyZW5jZSB8IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV29ya2VyTG9ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZW5hYmxlZDoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBsb2dfbGV2ZWw6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxvZ0xldmVsKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV29ya2VyTG9nc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25Xb3JrZXJMb2dzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZWQgPSB0aGlzLl9lbmFibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbG9nTGV2ZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubG9nTGV2ZWwgPSB0aGlzLl9sb2dMZXZlbDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV29ya2VyTG9ncyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sb2dMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlLmVuYWJsZWQ7XG4gICAgICB0aGlzLl9sb2dMZXZlbCA9IHZhbHVlLmxvZ0xldmVsO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNsb3VkX3dhdGNoX2xvZ19ncm91cF9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbG91ZFdhdGNoTG9nR3JvdXBBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbG91ZF93YXRjaF9sb2dfZ3JvdXBfYXJuJyk7XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlZCgpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQ7XG4gIH1cblxuICAvLyBsb2dfbGV2ZWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dMZXZlbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbG9nTGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfbGV2ZWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ0xldmVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2dMZXZlbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvZ0xldmVsKCkge1xuICAgIHRoaXMuX2xvZ0xldmVsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dMZXZlbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2dMZXZlbDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIGRhZ19wcm9jZXNzaW5nX2xvZ3MgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL213YWFfZW52aXJvbm1lbnQjZGFnX3Byb2Nlc3NpbmdfbG9ncyBNd2FhRW52aXJvbm1lbnQjZGFnX3Byb2Nlc3NpbmdfbG9nc31cbiAgKi9cbiAgcmVhZG9ubHkgZGFnUHJvY2Vzc2luZ0xvZ3M/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbkRhZ1Byb2Nlc3NpbmdMb2dzO1xuICAvKipcbiAgKiBzY2hlZHVsZXJfbG9ncyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbXdhYV9lbnZpcm9ubWVudCNzY2hlZHVsZXJfbG9ncyBNd2FhRW52aXJvbm1lbnQjc2NoZWR1bGVyX2xvZ3N9XG4gICovXG4gIHJlYWRvbmx5IHNjaGVkdWxlckxvZ3M/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblNjaGVkdWxlckxvZ3M7XG4gIC8qKlxuICAqIHRhc2tfbG9ncyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbXdhYV9lbnZpcm9ubWVudCN0YXNrX2xvZ3MgTXdhYUVudmlyb25tZW50I3Rhc2tfbG9nc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFza0xvZ3M/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblRhc2tMb2dzO1xuICAvKipcbiAgKiB3ZWJzZXJ2ZXJfbG9ncyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbXdhYV9lbnZpcm9ubWVudCN3ZWJzZXJ2ZXJfbG9ncyBNd2FhRW52aXJvbm1lbnQjd2Vic2VydmVyX2xvZ3N9XG4gICovXG4gIHJlYWRvbmx5IHdlYnNlcnZlckxvZ3M/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldlYnNlcnZlckxvZ3M7XG4gIC8qKlxuICAqIHdvcmtlcl9sb2dzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9td2FhX2Vudmlyb25tZW50I3dvcmtlcl9sb2dzIE13YWFFbnZpcm9ubWVudCN3b3JrZXJfbG9nc31cbiAgKi9cbiAgcmVhZG9ubHkgd29ya2VyTG9ncz86IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV29ya2VyTG9ncztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkYWdfcHJvY2Vzc2luZ19sb2dzOiBtd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbkRhZ1Byb2Nlc3NpbmdMb2dzVG9UZXJyYWZvcm0oc3RydWN0IS5kYWdQcm9jZXNzaW5nTG9ncyksXG4gICAgc2NoZWR1bGVyX2xvZ3M6IG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uU2NoZWR1bGVyTG9nc1RvVGVycmFmb3JtKHN0cnVjdCEuc2NoZWR1bGVyTG9ncyksXG4gICAgdGFza19sb2dzOiBtd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblRhc2tMb2dzVG9UZXJyYWZvcm0oc3RydWN0IS50YXNrTG9ncyksXG4gICAgd2Vic2VydmVyX2xvZ3M6IG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV2Vic2VydmVyTG9nc1RvVGVycmFmb3JtKHN0cnVjdCEud2Vic2VydmVyTG9ncyksXG4gICAgd29ya2VyX2xvZ3M6IG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV29ya2VyTG9nc1RvVGVycmFmb3JtKHN0cnVjdCEud29ya2VyTG9ncyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBkYWdfcHJvY2Vzc2luZ19sb2dzOiB7XG4gICAgICB2YWx1ZTogbXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25EYWdQcm9jZXNzaW5nTG9nc1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGFnUHJvY2Vzc2luZ0xvZ3MpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbkRhZ1Byb2Nlc3NpbmdMb2dzTGlzdFwiLFxuICAgIH0sXG4gICAgc2NoZWR1bGVyX2xvZ3M6IHtcbiAgICAgIHZhbHVlOiBtd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblNjaGVkdWxlckxvZ3NUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNjaGVkdWxlckxvZ3MpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblNjaGVkdWxlckxvZ3NMaXN0XCIsXG4gICAgfSxcbiAgICB0YXNrX2xvZ3M6IHtcbiAgICAgIHZhbHVlOiBtd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblRhc2tMb2dzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS50YXNrTG9ncyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uVGFza0xvZ3NMaXN0XCIsXG4gICAgfSxcbiAgICB3ZWJzZXJ2ZXJfbG9nczoge1xuICAgICAgdmFsdWU6IG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV2Vic2VydmVyTG9nc1RvSGNsVGVycmFmb3JtKHN0cnVjdCEud2Vic2VydmVyTG9ncyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV2Vic2VydmVyTG9nc0xpc3RcIixcbiAgICB9LFxuICAgIHdvcmtlcl9sb2dzOiB7XG4gICAgICB2YWx1ZTogbXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25Xb3JrZXJMb2dzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS53b3JrZXJMb2dzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25Xb3JrZXJMb2dzTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RhZ1Byb2Nlc3NpbmdMb2dzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRhZ1Byb2Nlc3NpbmdMb2dzID0gdGhpcy5fZGFnUHJvY2Vzc2luZ0xvZ3M/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zY2hlZHVsZXJMb2dzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNjaGVkdWxlckxvZ3MgPSB0aGlzLl9zY2hlZHVsZXJMb2dzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFza0xvZ3M/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFza0xvZ3MgPSB0aGlzLl90YXNrTG9ncz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3dlYnNlcnZlckxvZ3M/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQud2Vic2VydmVyTG9ncyA9IHRoaXMuX3dlYnNlcnZlckxvZ3M/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl93b3JrZXJMb2dzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LndvcmtlckxvZ3MgPSB0aGlzLl93b3JrZXJMb2dzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kYWdQcm9jZXNzaW5nTG9ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2NoZWR1bGVyTG9ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFza0xvZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3dlYnNlcnZlckxvZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3dvcmtlckxvZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGFnUHJvY2Vzc2luZ0xvZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmRhZ1Byb2Nlc3NpbmdMb2dzO1xuICAgICAgdGhpcy5fc2NoZWR1bGVyTG9ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc2NoZWR1bGVyTG9ncztcbiAgICAgIHRoaXMuX3Rhc2tMb2dzLmludGVybmFsVmFsdWUgPSB2YWx1ZS50YXNrTG9ncztcbiAgICAgIHRoaXMuX3dlYnNlcnZlckxvZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLndlYnNlcnZlckxvZ3M7XG4gICAgICB0aGlzLl93b3JrZXJMb2dzLmludGVybmFsVmFsdWUgPSB2YWx1ZS53b3JrZXJMb2dzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRhZ19wcm9jZXNzaW5nX2xvZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGFnUHJvY2Vzc2luZ0xvZ3MgPSBuZXcgTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25EYWdQcm9jZXNzaW5nTG9nc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImRhZ19wcm9jZXNzaW5nX2xvZ3NcIik7XG4gIHB1YmxpYyBnZXQgZGFnUHJvY2Vzc2luZ0xvZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhZ1Byb2Nlc3NpbmdMb2dzO1xuICB9XG4gIHB1YmxpYyBwdXREYWdQcm9jZXNzaW5nTG9ncyh2YWx1ZTogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25EYWdQcm9jZXNzaW5nTG9ncykge1xuICAgIHRoaXMuX2RhZ1Byb2Nlc3NpbmdMb2dzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYWdQcm9jZXNzaW5nTG9ncygpIHtcbiAgICB0aGlzLl9kYWdQcm9jZXNzaW5nTG9ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYWdQcm9jZXNzaW5nTG9nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYWdQcm9jZXNzaW5nTG9ncy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc2NoZWR1bGVyX2xvZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NoZWR1bGVyTG9ncyA9IG5ldyBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblNjaGVkdWxlckxvZ3NPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJzY2hlZHVsZXJfbG9nc1wiKTtcbiAgcHVibGljIGdldCBzY2hlZHVsZXJMb2dzKCkge1xuICAgIHJldHVybiB0aGlzLl9zY2hlZHVsZXJMb2dzO1xuICB9XG4gIHB1YmxpYyBwdXRTY2hlZHVsZXJMb2dzKHZhbHVlOiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblNjaGVkdWxlckxvZ3MpIHtcbiAgICB0aGlzLl9zY2hlZHVsZXJMb2dzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTY2hlZHVsZXJMb2dzKCkge1xuICAgIHRoaXMuX3NjaGVkdWxlckxvZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NoZWR1bGVyTG9nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY2hlZHVsZXJMb2dzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0YXNrX2xvZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFza0xvZ3MgPSBuZXcgTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25UYXNrTG9nc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcInRhc2tfbG9nc1wiKTtcbiAgcHVibGljIGdldCB0YXNrTG9ncygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFza0xvZ3M7XG4gIH1cbiAgcHVibGljIHB1dFRhc2tMb2dzKHZhbHVlOiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblRhc2tMb2dzKSB7XG4gICAgdGhpcy5fdGFza0xvZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhc2tMb2dzKCkge1xuICAgIHRoaXMuX3Rhc2tMb2dzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhc2tMb2dzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rhc2tMb2dzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB3ZWJzZXJ2ZXJfbG9ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93ZWJzZXJ2ZXJMb2dzID0gbmV3IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV2Vic2VydmVyTG9nc091dHB1dFJlZmVyZW5jZSh0aGlzLCBcIndlYnNlcnZlcl9sb2dzXCIpO1xuICBwdWJsaWMgZ2V0IHdlYnNlcnZlckxvZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYnNlcnZlckxvZ3M7XG4gIH1cbiAgcHVibGljIHB1dFdlYnNlcnZlckxvZ3ModmFsdWU6IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV2Vic2VydmVyTG9ncykge1xuICAgIHRoaXMuX3dlYnNlcnZlckxvZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFdlYnNlcnZlckxvZ3MoKSB7XG4gICAgdGhpcy5fd2Vic2VydmVyTG9ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3ZWJzZXJ2ZXJMb2dzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYnNlcnZlckxvZ3MuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHdvcmtlcl9sb2dzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3dvcmtlckxvZ3MgPSBuZXcgTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25Xb3JrZXJMb2dzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwid29ya2VyX2xvZ3NcIik7XG4gIHB1YmxpYyBnZXQgd29ya2VyTG9ncygpIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya2VyTG9ncztcbiAgfVxuICBwdWJsaWMgcHV0V29ya2VyTG9ncyh2YWx1ZTogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25Xb3JrZXJMb2dzKSB7XG4gICAgdGhpcy5fd29ya2VyTG9ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V29ya2VyTG9ncygpIHtcbiAgICB0aGlzLl93b3JrZXJMb2dzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdvcmtlckxvZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya2VyTG9ncy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE13YWFFbnZpcm9ubWVudE5ldHdvcmtDb25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbXdhYV9lbnZpcm9ubWVudCNzZWN1cml0eV9ncm91cF9pZHMgTXdhYUVudmlyb25tZW50I3NlY3VyaXR5X2dyb3VwX2lkc31cbiAgKi9cbiAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkczogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL213YWFfZW52aXJvbm1lbnQjc3VibmV0X2lkcyBNd2FhRW52aXJvbm1lbnQjc3VibmV0X2lkc31cbiAgKi9cbiAgcmVhZG9ubHkgc3VibmV0SWRzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG13YWFFbnZpcm9ubWVudE5ldHdvcmtDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTXdhYUVudmlyb25tZW50TmV0d29ya0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBNd2FhRW52aXJvbm1lbnROZXR3b3JrQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzZWN1cml0eV9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnNlY3VyaXR5R3JvdXBJZHMpLFxuICAgIHN1Ym5ldF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnN1Ym5ldElkcyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbXdhYUVudmlyb25tZW50TmV0d29ya0NvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBNd2FhRW52aXJvbm1lbnROZXR3b3JrQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IE13YWFFbnZpcm9ubWVudE5ldHdvcmtDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBzZWN1cml0eV9ncm91cF9pZHM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5zZWN1cml0eUdyb3VwSWRzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gICAgc3VibmV0X2lkczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnN1Ym5ldElkcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTXdhYUVudmlyb25tZW50TmV0d29ya0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE13YWFFbnZpcm9ubWVudE5ldHdvcmtDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zZWN1cml0eUdyb3VwSWRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlY3VyaXR5R3JvdXBJZHMgPSB0aGlzLl9zZWN1cml0eUdyb3VwSWRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3VibmV0SWRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN1Ym5ldElkcyA9IHRoaXMuX3N1Ym5ldElkcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE13YWFFbnZpcm9ubWVudE5ldHdvcmtDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2VjdXJpdHlHcm91cElkcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N1Ym5ldElkcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fc2VjdXJpdHlHcm91cElkcyA9IHZhbHVlLnNlY3VyaXR5R3JvdXBJZHM7XG4gICAgICB0aGlzLl9zdWJuZXRJZHMgPSB2YWx1ZS5zdWJuZXRJZHM7XG4gICAgfVxuICB9XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlY3VyaXR5R3JvdXBJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc2VjdXJpdHlfZ3JvdXBfaWRzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlHcm91cElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdXJpdHlHcm91cElkcztcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3VibmV0SWRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VibmV0X2lkcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1Ym5ldElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zdWJuZXRJZHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VibmV0SWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1Ym5ldElkcztcbiAgfVxufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbXdhYV9lbnZpcm9ubWVudCBhd3NfbXdhYV9lbnZpcm9ubWVudH1cbiovXG5leHBvcnQgY2xhc3MgTXdhYUVudmlyb25tZW50IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19td2FhX2Vudmlyb25tZW50XCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIE13YWFFbnZpcm9ubWVudCByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBNd2FhRW52aXJvbm1lbnQgdG8gaW1wb3J0XG4gICogQHBhcmFtIGltcG9ydEZyb21JZCBUaGUgaWQgb2YgdGhlIGV4aXN0aW5nIE13YWFFbnZpcm9ubWVudCB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbXdhYV9lbnZpcm9ubWVudCNpbXBvcnQgaW1wb3J0IHNlY3Rpb259IGluIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UgZm9yIHRoZSBpZCB0byB1c2VcbiAgKiBAcGFyYW0gcHJvdmlkZXI/IE9wdGlvbmFsIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciB3aGVyZSB0aGUgTXdhYUVudmlyb25tZW50IHRvIGltcG9ydCBpcyBmb3VuZFxuICAqL1xuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlQ29uZmlnRm9ySW1wb3J0KHNjb3BlOiBDb25zdHJ1Y3QsIGltcG9ydFRvSWQ6IHN0cmluZywgaW1wb3J0RnJvbUlkOiBzdHJpbmcsIHByb3ZpZGVyPzogY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjZGt0Zi5JbXBvcnRhYmxlUmVzb3VyY2Uoc2NvcGUsIGltcG9ydFRvSWQsIHsgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiBcImF3c19td2FhX2Vudmlyb25tZW50XCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbXdhYV9lbnZpcm9ubWVudCBhd3NfbXdhYV9lbnZpcm9ubWVudH0gUmVzb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgTXdhYUVudmlyb25tZW50Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IE13YWFFbnZpcm9ubWVudENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX213YWFfZW52aXJvbm1lbnQnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9haXJmbG93Q29uZmlndXJhdGlvbk9wdGlvbnMgPSBjb25maWcuYWlyZmxvd0NvbmZpZ3VyYXRpb25PcHRpb25zO1xuICAgIHRoaXMuX2FpcmZsb3dWZXJzaW9uID0gY29uZmlnLmFpcmZsb3dWZXJzaW9uO1xuICAgIHRoaXMuX2RhZ1MzUGF0aCA9IGNvbmZpZy5kYWdTM1BhdGg7XG4gICAgdGhpcy5fZW52aXJvbm1lbnRDbGFzcyA9IGNvbmZpZy5lbnZpcm9ubWVudENsYXNzO1xuICAgIHRoaXMuX2V4ZWN1dGlvblJvbGVBcm4gPSBjb25maWcuZXhlY3V0aW9uUm9sZUFybjtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9rbXNLZXkgPSBjb25maWcua21zS2V5O1xuICAgIHRoaXMuX21heFdvcmtlcnMgPSBjb25maWcubWF4V29ya2VycztcbiAgICB0aGlzLl9taW5Xb3JrZXJzID0gY29uZmlnLm1pbldvcmtlcnM7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3BsdWdpbnNTM09iamVjdFZlcnNpb24gPSBjb25maWcucGx1Z2luc1MzT2JqZWN0VmVyc2lvbjtcbiAgICB0aGlzLl9wbHVnaW5zUzNQYXRoID0gY29uZmlnLnBsdWdpbnNTM1BhdGg7XG4gICAgdGhpcy5fcmVxdWlyZW1lbnRzUzNPYmplY3RWZXJzaW9uID0gY29uZmlnLnJlcXVpcmVtZW50c1MzT2JqZWN0VmVyc2lvbjtcbiAgICB0aGlzLl9yZXF1aXJlbWVudHNTM1BhdGggPSBjb25maWcucmVxdWlyZW1lbnRzUzNQYXRoO1xuICAgIHRoaXMuX3NvdXJjZUJ1Y2tldEFybiA9IGNvbmZpZy5zb3VyY2VCdWNrZXRBcm47XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl93ZWJzZXJ2ZXJBY2Nlc3NNb2RlID0gY29uZmlnLndlYnNlcnZlckFjY2Vzc01vZGU7XG4gICAgdGhpcy5fd2Vla2x5TWFpbnRlbmFuY2VXaW5kb3dTdGFydCA9IGNvbmZpZy53ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0O1xuICAgIHRoaXMuX2xvZ2dpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcubG9nZ2luZ0NvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fbmV0d29ya0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5uZXR3b3JrQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWlyZmxvd19jb25maWd1cmF0aW9uX29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWlyZmxvd0NvbmZpZ3VyYXRpb25PcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgYWlyZmxvd0NvbmZpZ3VyYXRpb25PcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgnYWlyZmxvd19jb25maWd1cmF0aW9uX29wdGlvbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFpcmZsb3dDb25maWd1cmF0aW9uT3B0aW9ucyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX2FpcmZsb3dDb25maWd1cmF0aW9uT3B0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFpcmZsb3dDb25maWd1cmF0aW9uT3B0aW9ucygpIHtcbiAgICB0aGlzLl9haXJmbG93Q29uZmlndXJhdGlvbk9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFpcmZsb3dDb25maWd1cmF0aW9uT3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9haXJmbG93Q29uZmlndXJhdGlvbk9wdGlvbnM7XG4gIH1cblxuICAvLyBhaXJmbG93X3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9haXJmbG93VmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWlyZmxvd1ZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhaXJmbG93X3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFpcmZsb3dWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9haXJmbG93VmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFpcmZsb3dWZXJzaW9uKCkge1xuICAgIHRoaXMuX2FpcmZsb3dWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhaXJmbG93VmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9haXJmbG93VmVyc2lvbjtcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY3JlYXRlZF9hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0ZWRBdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0ZWRfYXQnKTtcbiAgfVxuXG4gIC8vIGRhZ19zM19wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RhZ1MzUGF0aD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGFnUzNQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGFnX3MzX3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhZ1MzUGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGFnUzNQYXRoID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhZ1MzUGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYWdTM1BhdGg7XG4gIH1cblxuICAvLyBlbnZpcm9ubWVudF9jbGFzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Vudmlyb25tZW50Q2xhc3M/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVudmlyb25tZW50Q2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbnZpcm9ubWVudF9jbGFzcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW52aXJvbm1lbnRDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW52aXJvbm1lbnRDbGFzcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVudmlyb25tZW50Q2xhc3MoKSB7XG4gICAgdGhpcy5fZW52aXJvbm1lbnRDbGFzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW52aXJvbm1lbnRDbGFzc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbnZpcm9ubWVudENsYXNzO1xuICB9XG5cbiAgLy8gZXhlY3V0aW9uX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2V4ZWN1dGlvblJvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV4ZWN1dGlvblJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleGVjdXRpb25fcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4ZWN1dGlvblJvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4ZWN1dGlvblJvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhlY3V0aW9uUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25Sb2xlQXJuO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8ga21zX2tleSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGttc0tleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zS2V5KCkge1xuICAgIHRoaXMuX2ttc0tleSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0tleTtcbiAgfVxuXG4gIC8vIGxhc3RfdXBkYXRlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYXN0VXBkYXRlZCA9IG5ldyBNd2FhRW52aXJvbm1lbnRMYXN0VXBkYXRlZExpc3QodGhpcywgXCJsYXN0X3VwZGF0ZWRcIiwgZmFsc2UpO1xuICBwdWJsaWMgZ2V0IGxhc3RVcGRhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9sYXN0VXBkYXRlZDtcbiAgfVxuXG4gIC8vIG1heF93b3JrZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4V29ya2Vycz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4V29ya2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF93b3JrZXJzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhXb3JrZXJzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhXb3JrZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4V29ya2VycygpIHtcbiAgICB0aGlzLl9tYXhXb3JrZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhXb3JrZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heFdvcmtlcnM7XG4gIH1cblxuICAvLyBtaW5fd29ya2VycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21pbldvcmtlcnM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1pbldvcmtlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5fd29ya2VycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWluV29ya2Vycyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluV29ya2VycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1pbldvcmtlcnMoKSB7XG4gICAgdGhpcy5fbWluV29ya2VycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluV29ya2Vyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9taW5Xb3JrZXJzO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBwbHVnaW5zX3MzX29iamVjdF92ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGx1Z2luc1MzT2JqZWN0VmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGx1Z2luc1MzT2JqZWN0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BsdWdpbnNfczNfb2JqZWN0X3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBsdWdpbnNTM09iamVjdFZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BsdWdpbnNTM09iamVjdFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQbHVnaW5zUzNPYmplY3RWZXJzaW9uKCkge1xuICAgIHRoaXMuX3BsdWdpbnNTM09iamVjdFZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBsdWdpbnNTM09iamVjdFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGx1Z2luc1MzT2JqZWN0VmVyc2lvbjtcbiAgfVxuXG4gIC8vIHBsdWdpbnNfczNfcGF0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wbHVnaW5zUzNQYXRoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwbHVnaW5zUzNQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGx1Z2luc19zM19wYXRoJyk7XG4gIH1cbiAgcHVibGljIHNldCBwbHVnaW5zUzNQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbHVnaW5zUzNQYXRoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGx1Z2luc1MzUGF0aCgpIHtcbiAgICB0aGlzLl9wbHVnaW5zUzNQYXRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwbHVnaW5zUzNQYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsdWdpbnNTM1BhdGg7XG4gIH1cblxuICAvLyByZXF1aXJlbWVudHNfczNfb2JqZWN0X3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1aXJlbWVudHNTM09iamVjdFZlcnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlcXVpcmVtZW50c1MzT2JqZWN0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcXVpcmVtZW50c19zM19vYmplY3RfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWlyZW1lbnRzUzNPYmplY3RWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXF1aXJlbWVudHNTM09iamVjdFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1aXJlbWVudHNTM09iamVjdFZlcnNpb24oKSB7XG4gICAgdGhpcy5fcmVxdWlyZW1lbnRzUzNPYmplY3RWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1aXJlbWVudHNTM09iamVjdFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZW1lbnRzUzNPYmplY3RWZXJzaW9uO1xuICB9XG5cbiAgLy8gcmVxdWlyZW1lbnRzX3MzX3BhdGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVxdWlyZW1lbnRzUzNQYXRoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXF1aXJlbWVudHNTM1BhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXF1aXJlbWVudHNfczNfcGF0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWlyZW1lbnRzUzNQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXF1aXJlbWVudHNTM1BhdGggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1aXJlbWVudHNTM1BhdGgoKSB7XG4gICAgdGhpcy5fcmVxdWlyZW1lbnRzUzNQYXRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1aXJlbWVudHNTM1BhdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZW1lbnRzUzNQYXRoO1xuICB9XG5cbiAgLy8gc2VydmljZV9yb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlcnZpY2VSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9yb2xlX2FybicpO1xuICB9XG5cbiAgLy8gc291cmNlX2J1Y2tldF9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc291cmNlQnVja2V0QXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzb3VyY2VCdWNrZXRBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzb3VyY2VfYnVja2V0X2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc291cmNlQnVja2V0QXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3VyY2VCdWNrZXRBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc291cmNlQnVja2V0QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZUJ1Y2tldEFybjtcbiAgfVxuXG4gIC8vIHN0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1cycpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFnc19hbGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB3ZWJzZXJ2ZXJfYWNjZXNzX21vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93ZWJzZXJ2ZXJBY2Nlc3NNb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB3ZWJzZXJ2ZXJBY2Nlc3NNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnd2Vic2VydmVyX2FjY2Vzc19tb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCB3ZWJzZXJ2ZXJBY2Nlc3NNb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93ZWJzZXJ2ZXJBY2Nlc3NNb2RlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2Vic2VydmVyQWNjZXNzTW9kZSgpIHtcbiAgICB0aGlzLl93ZWJzZXJ2ZXJBY2Nlc3NNb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3ZWJzZXJ2ZXJBY2Nlc3NNb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYnNlcnZlckFjY2Vzc01vZGU7XG4gIH1cblxuICAvLyB3ZWJzZXJ2ZXJfdXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgd2Vic2VydmVyVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnd2Vic2VydmVyX3VybCcpO1xuICB9XG5cbiAgLy8gd2Vla2x5X21haW50ZW5hbmNlX3dpbmRvd19zdGFydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3dlZWtseU1haW50ZW5hbmNlV2luZG93U3RhcnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHdlZWtseU1haW50ZW5hbmNlV2luZG93U3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3ZWVrbHlfbWFpbnRlbmFuY2Vfd2luZG93X3N0YXJ0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB3ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2Vla2x5TWFpbnRlbmFuY2VXaW5kb3dTdGFydCgpIHtcbiAgICB0aGlzLl93ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlZWtseU1haW50ZW5hbmNlV2luZG93U3RhcnQ7XG4gIH1cblxuICAvLyBsb2dnaW5nX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9nZ2luZ0NvbmZpZ3VyYXRpb24gPSBuZXcgTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJsb2dnaW5nX2NvbmZpZ3VyYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgbG9nZ2luZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ2dpbmdDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRMb2dnaW5nQ29uZmlndXJhdGlvbih2YWx1ZTogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9sb2dnaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nZ2luZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fbG9nZ2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nZ2luZ0NvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nZ2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG5ldHdvcmtfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uZXR3b3JrQ29uZmlndXJhdGlvbiA9IG5ldyBNd2FhRW52aXJvbm1lbnROZXR3b3JrQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcIm5ldHdvcmtfY29uZmlndXJhdGlvblwiKTtcbiAgcHVibGljIGdldCBuZXR3b3JrQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbmV0d29ya0NvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dE5ldHdvcmtDb25maWd1cmF0aW9uKHZhbHVlOiBNd2FhRW52aXJvbm1lbnROZXR3b3JrQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX25ldHdvcmtDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV0d29ya0NvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmV0d29ya0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWlyZmxvd19jb25maWd1cmF0aW9uX29wdGlvbnM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2FpcmZsb3dDb25maWd1cmF0aW9uT3B0aW9ucyksXG4gICAgICBhaXJmbG93X3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FpcmZsb3dWZXJzaW9uKSxcbiAgICAgIGRhZ19zM19wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kYWdTM1BhdGgpLFxuICAgICAgZW52aXJvbm1lbnRfY2xhc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Vudmlyb25tZW50Q2xhc3MpLFxuICAgICAgZXhlY3V0aW9uX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9leGVjdXRpb25Sb2xlQXJuKSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBrbXNfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9rbXNLZXkpLFxuICAgICAgbWF4X3dvcmtlcnM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21heFdvcmtlcnMpLFxuICAgICAgbWluX3dvcmtlcnM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21pbldvcmtlcnMpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBwbHVnaW5zX3MzX29iamVjdF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wbHVnaW5zUzNPYmplY3RWZXJzaW9uKSxcbiAgICAgIHBsdWdpbnNfczNfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGx1Z2luc1MzUGF0aCksXG4gICAgICByZXF1aXJlbWVudHNfczNfb2JqZWN0X3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlcXVpcmVtZW50c1MzT2JqZWN0VmVyc2lvbiksXG4gICAgICByZXF1aXJlbWVudHNfczNfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVxdWlyZW1lbnRzUzNQYXRoKSxcbiAgICAgIHNvdXJjZV9idWNrZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zb3VyY2VCdWNrZXRBcm4pLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB3ZWJzZXJ2ZXJfYWNjZXNzX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3dlYnNlcnZlckFjY2Vzc01vZGUpLFxuICAgICAgd2Vla2x5X21haW50ZW5hbmNlX3dpbmRvd19zdGFydDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fd2Vla2x5TWFpbnRlbmFuY2VXaW5kb3dTdGFydCksXG4gICAgICBsb2dnaW5nX2NvbmZpZ3VyYXRpb246IG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fbG9nZ2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICBuZXR3b3JrX2NvbmZpZ3VyYXRpb246IG13YWFFbnZpcm9ubWVudE5ldHdvcmtDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fbmV0d29ya0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplSGNsQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBhaXJmbG93X2NvbmZpZ3VyYXRpb25fb3B0aW9uczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fYWlyZmxvd0NvbmZpZ3VyYXRpb25PcHRpb25zKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgYWlyZmxvd192ZXJzaW9uOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9haXJmbG93VmVyc2lvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGRhZ19zM19wYXRoOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9kYWdTM1BhdGgpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBlbnZpcm9ubWVudF9jbGFzczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZW52aXJvbm1lbnRDbGFzcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGV4ZWN1dGlvbl9yb2xlX2Fybjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZXhlY3V0aW9uUm9sZUFybiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGttc19rZXk6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2ttc0tleSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG1heF93b3JrZXJzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybSh0aGlzLl9tYXhXb3JrZXJzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgbWluX3dvcmtlcnM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX21pbldvcmtlcnMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgcGx1Z2luc19zM19vYmplY3RfdmVyc2lvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fcGx1Z2luc1MzT2JqZWN0VmVyc2lvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHBsdWdpbnNfczNfcGF0aDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fcGx1Z2luc1MzUGF0aCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHJlcXVpcmVtZW50c19zM19vYmplY3RfdmVyc2lvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fcmVxdWlyZW1lbnRzUzNPYmplY3RWZXJzaW9uKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgcmVxdWlyZW1lbnRzX3MzX3BhdGg6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3JlcXVpcmVtZW50c1MzUGF0aCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHNvdXJjZV9idWNrZXRfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9zb3VyY2VCdWNrZXRBcm4pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB0YWdzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgdGFnc19hbGw6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB3ZWJzZXJ2ZXJfYWNjZXNzX21vZGU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3dlYnNlcnZlckFjY2Vzc01vZGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICB3ZWVrbHlfbWFpbnRlbmFuY2Vfd2luZG93X3N0YXJ0OiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl93ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbG9nZ2luZ19jb25maWd1cmF0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBtd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHRoaXMuX2xvZ2dpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbkxpc3RcIixcbiAgICAgIH0sXG4gICAgICBuZXR3b3JrX2NvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgdmFsdWU6IG13YWFFbnZpcm9ubWVudE5ldHdvcmtDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0odGhpcy5fbmV0d29ya0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIk13YWFFbnZpcm9ubWVudE5ldHdvcmtDb25maWd1cmF0aW9uTGlzdFwiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgKSlcbiAgfVxufVxuIl19