"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoscalingGroup = exports.AutoscalingGroupWarmPoolOutputReference = exports.autoscalingGroupWarmPoolToHclTerraform = exports.autoscalingGroupWarmPoolToTerraform = exports.AutoscalingGroupTimeoutsOutputReference = exports.autoscalingGroupTimeoutsToHclTerraform = exports.autoscalingGroupTimeoutsToTerraform = exports.AutoscalingGroupTagList = exports.AutoscalingGroupTagOutputReference = exports.autoscalingGroupTagToHclTerraform = exports.autoscalingGroupTagToTerraform = exports.AutoscalingGroupMixedInstancesPolicyOutputReference = exports.autoscalingGroupMixedInstancesPolicyToHclTerraform = exports.autoscalingGroupMixedInstancesPolicyToTerraform = exports.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference = exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateToHclTerraform = exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform = exports.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList = exports.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference = exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToHclTerraform = exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform = exports.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference = exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToHclTerraform = exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform = exports.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference = exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToHclTerraform = exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform = exports.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference = exports.autoscalingGroupMixedInstancesPolicyInstancesDistributionToHclTerraform = exports.autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform = exports.AutoscalingGroupLaunchTemplateOutputReference = exports.autoscalingGroupLaunchTemplateToHclTerraform = exports.autoscalingGroupLaunchTemplateToTerraform = exports.AutoscalingGroupInstanceRefreshOutputReference = exports.autoscalingGroupInstanceRefreshToHclTerraform = exports.autoscalingGroupInstanceRefreshToTerraform = exports.AutoscalingGroupInstanceRefreshPreferencesOutputReference = exports.autoscalingGroupInstanceRefreshPreferencesToHclTerraform = exports.autoscalingGroupInstanceRefreshPreferencesToTerraform = exports.AutoscalingGroupInitialLifecycleHookList = exports.AutoscalingGroupInitialLifecycleHookOutputReference = exports.autoscalingGroupInitialLifecycleHookToHclTerraform = exports.autoscalingGroupInitialLifecycleHookToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function autoscalingGroupInitialLifecycleHookToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_result: cdktf.stringToTerraform(struct.defaultResult),
        heartbeat_timeout: cdktf.numberToTerraform(struct.heartbeatTimeout),
        lifecycle_transition: cdktf.stringToTerraform(struct.lifecycleTransition),
        name: cdktf.stringToTerraform(struct.name),
        notification_metadata: cdktf.stringToTerraform(struct.notificationMetadata),
        notification_target_arn: cdktf.stringToTerraform(struct.notificationTargetArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.autoscalingGroupInitialLifecycleHookToTerraform = autoscalingGroupInitialLifecycleHookToTerraform;
function autoscalingGroupInitialLifecycleHookToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        default_result: {
            value: cdktf.stringToHclTerraform(struct.defaultResult),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        heartbeat_timeout: {
            value: cdktf.numberToHclTerraform(struct.heartbeatTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lifecycle_transition: {
            value: cdktf.stringToHclTerraform(struct.lifecycleTransition),
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
        notification_metadata: {
            value: cdktf.stringToHclTerraform(struct.notificationMetadata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        notification_target_arn: {
            value: cdktf.stringToHclTerraform(struct.notificationTargetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktf.stringToHclTerraform(struct.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingGroupInitialLifecycleHookToHclTerraform = autoscalingGroupInitialLifecycleHookToHclTerraform;
class AutoscalingGroupInitialLifecycleHookOutputReference extends cdktf.ComplexObject {
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
        if (this._defaultResult !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultResult = this._defaultResult;
        }
        if (this._heartbeatTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.heartbeatTimeout = this._heartbeatTimeout;
        }
        if (this._lifecycleTransition !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleTransition = this._lifecycleTransition;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._notificationMetadata !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationMetadata = this._notificationMetadata;
        }
        if (this._notificationTargetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationTargetArn = this._notificationTargetArn;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultResult = undefined;
            this._heartbeatTimeout = undefined;
            this._lifecycleTransition = undefined;
            this._name = undefined;
            this._notificationMetadata = undefined;
            this._notificationTargetArn = undefined;
            this._roleArn = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultResult = value.defaultResult;
            this._heartbeatTimeout = value.heartbeatTimeout;
            this._lifecycleTransition = value.lifecycleTransition;
            this._name = value.name;
            this._notificationMetadata = value.notificationMetadata;
            this._notificationTargetArn = value.notificationTargetArn;
            this._roleArn = value.roleArn;
        }
    }
    get defaultResult() {
        return this.getStringAttribute('default_result');
    }
    set defaultResult(value) {
        this._defaultResult = value;
    }
    resetDefaultResult() {
        this._defaultResult = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultResultInput() {
        return this._defaultResult;
    }
    get heartbeatTimeout() {
        return this.getNumberAttribute('heartbeat_timeout');
    }
    set heartbeatTimeout(value) {
        this._heartbeatTimeout = value;
    }
    resetHeartbeatTimeout() {
        this._heartbeatTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get heartbeatTimeoutInput() {
        return this._heartbeatTimeout;
    }
    get lifecycleTransition() {
        return this.getStringAttribute('lifecycle_transition');
    }
    set lifecycleTransition(value) {
        this._lifecycleTransition = value;
    }
    // Temporarily expose input value. Use with caution.
    get lifecycleTransitionInput() {
        return this._lifecycleTransition;
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
    get notificationMetadata() {
        return this.getStringAttribute('notification_metadata');
    }
    set notificationMetadata(value) {
        this._notificationMetadata = value;
    }
    resetNotificationMetadata() {
        this._notificationMetadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notificationMetadataInput() {
        return this._notificationMetadata;
    }
    get notificationTargetArn() {
        return this.getStringAttribute('notification_target_arn');
    }
    set notificationTargetArn(value) {
        this._notificationTargetArn = value;
    }
    resetNotificationTargetArn() {
        this._notificationTargetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notificationTargetArnInput() {
        return this._notificationTargetArn;
    }
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
}
exports.AutoscalingGroupInitialLifecycleHookOutputReference = AutoscalingGroupInitialLifecycleHookOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AutoscalingGroupInitialLifecycleHookOutputReference[_a] = { fqn: "@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference", version: "0.0.0" };
class AutoscalingGroupInitialLifecycleHookList extends cdktf.ComplexList {
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
        return new AutoscalingGroupInitialLifecycleHookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.AutoscalingGroupInitialLifecycleHookList = AutoscalingGroupInitialLifecycleHookList;
_b = JSII_RTTI_SYMBOL_1;
AutoscalingGroupInitialLifecycleHookList[_b] = { fqn: "@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList", version: "0.0.0" };
function autoscalingGroupInstanceRefreshPreferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        checkpoint_delay: cdktf.stringToTerraform(struct.checkpointDelay),
        checkpoint_percentages: cdktf.listMapper(cdktf.numberToTerraform, false)(struct.checkpointPercentages),
        instance_warmup: cdktf.stringToTerraform(struct.instanceWarmup),
        min_healthy_percentage: cdktf.numberToTerraform(struct.minHealthyPercentage),
    };
}
exports.autoscalingGroupInstanceRefreshPreferencesToTerraform = autoscalingGroupInstanceRefreshPreferencesToTerraform;
function autoscalingGroupInstanceRefreshPreferencesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        checkpoint_delay: {
            value: cdktf.stringToHclTerraform(struct.checkpointDelay),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        checkpoint_percentages: {
            value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct.checkpointPercentages),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        instance_warmup: {
            value: cdktf.stringToHclTerraform(struct.instanceWarmup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        min_healthy_percentage: {
            value: cdktf.numberToHclTerraform(struct.minHealthyPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingGroupInstanceRefreshPreferencesToHclTerraform = autoscalingGroupInstanceRefreshPreferencesToHclTerraform;
class AutoscalingGroupInstanceRefreshPreferencesOutputReference extends cdktf.ComplexObject {
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
        if (this._checkpointDelay !== undefined) {
            hasAnyValues = true;
            internalValueResult.checkpointDelay = this._checkpointDelay;
        }
        if (this._checkpointPercentages !== undefined) {
            hasAnyValues = true;
            internalValueResult.checkpointPercentages = this._checkpointPercentages;
        }
        if (this._instanceWarmup !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceWarmup = this._instanceWarmup;
        }
        if (this._minHealthyPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.minHealthyPercentage = this._minHealthyPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._checkpointDelay = undefined;
            this._checkpointPercentages = undefined;
            this._instanceWarmup = undefined;
            this._minHealthyPercentage = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._checkpointDelay = value.checkpointDelay;
            this._checkpointPercentages = value.checkpointPercentages;
            this._instanceWarmup = value.instanceWarmup;
            this._minHealthyPercentage = value.minHealthyPercentage;
        }
    }
    get checkpointDelay() {
        return this.getStringAttribute('checkpoint_delay');
    }
    set checkpointDelay(value) {
        this._checkpointDelay = value;
    }
    resetCheckpointDelay() {
        this._checkpointDelay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get checkpointDelayInput() {
        return this._checkpointDelay;
    }
    get checkpointPercentages() {
        return this.getNumberListAttribute('checkpoint_percentages');
    }
    set checkpointPercentages(value) {
        this._checkpointPercentages = value;
    }
    resetCheckpointPercentages() {
        this._checkpointPercentages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get checkpointPercentagesInput() {
        return this._checkpointPercentages;
    }
    get instanceWarmup() {
        return this.getStringAttribute('instance_warmup');
    }
    set instanceWarmup(value) {
        this._instanceWarmup = value;
    }
    resetInstanceWarmup() {
        this._instanceWarmup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceWarmupInput() {
        return this._instanceWarmup;
    }
    get minHealthyPercentage() {
        return this.getNumberAttribute('min_healthy_percentage');
    }
    set minHealthyPercentage(value) {
        this._minHealthyPercentage = value;
    }
    resetMinHealthyPercentage() {
        this._minHealthyPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minHealthyPercentageInput() {
        return this._minHealthyPercentage;
    }
}
exports.AutoscalingGroupInstanceRefreshPreferencesOutputReference = AutoscalingGroupInstanceRefreshPreferencesOutputReference;
_c = JSII_RTTI_SYMBOL_1;
AutoscalingGroupInstanceRefreshPreferencesOutputReference[_c] = { fqn: "@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference", version: "0.0.0" };
function autoscalingGroupInstanceRefreshToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        strategy: cdktf.stringToTerraform(struct.strategy),
        triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.triggers),
        preferences: autoscalingGroupInstanceRefreshPreferencesToTerraform(struct.preferences),
    };
}
exports.autoscalingGroupInstanceRefreshToTerraform = autoscalingGroupInstanceRefreshToTerraform;
function autoscalingGroupInstanceRefreshToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        strategy: {
            value: cdktf.stringToHclTerraform(struct.strategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        triggers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.triggers),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        preferences: {
            value: autoscalingGroupInstanceRefreshPreferencesToHclTerraform(struct.preferences),
            isBlock: true,
            type: "list",
            storageClassType: "AutoscalingGroupInstanceRefreshPreferencesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingGroupInstanceRefreshToHclTerraform = autoscalingGroupInstanceRefreshToHclTerraform;
class AutoscalingGroupInstanceRefreshOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // preferences - computed: false, optional: true, required: false
        this._preferences = new AutoscalingGroupInstanceRefreshPreferencesOutputReference(this, "preferences");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._strategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.strategy = this._strategy;
        }
        if (this._triggers !== undefined) {
            hasAnyValues = true;
            internalValueResult.triggers = this._triggers;
        }
        if (this._preferences?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.preferences = this._preferences?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._strategy = undefined;
            this._triggers = undefined;
            this._preferences.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._strategy = value.strategy;
            this._triggers = value.triggers;
            this._preferences.internalValue = value.preferences;
        }
    }
    get strategy() {
        return this.getStringAttribute('strategy');
    }
    set strategy(value) {
        this._strategy = value;
    }
    // Temporarily expose input value. Use with caution.
    get strategyInput() {
        return this._strategy;
    }
    get triggers() {
        return cdktf.Fn.tolist(this.getListAttribute('triggers'));
    }
    set triggers(value) {
        this._triggers = value;
    }
    resetTriggers() {
        this._triggers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get triggersInput() {
        return this._triggers;
    }
    get preferences() {
        return this._preferences;
    }
    putPreferences(value) {
        this._preferences.internalValue = value;
    }
    resetPreferences() {
        this._preferences.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preferencesInput() {
        return this._preferences.internalValue;
    }
}
exports.AutoscalingGroupInstanceRefreshOutputReference = AutoscalingGroupInstanceRefreshOutputReference;
_d = JSII_RTTI_SYMBOL_1;
AutoscalingGroupInstanceRefreshOutputReference[_d] = { fqn: "@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference", version: "0.0.0" };
function autoscalingGroupLaunchTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
        version: cdktf.stringToTerraform(struct.version),
    };
}
exports.autoscalingGroupLaunchTemplateToTerraform = autoscalingGroupLaunchTemplateToTerraform;
function autoscalingGroupLaunchTemplateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
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
        version: {
            value: cdktf.stringToHclTerraform(struct.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingGroupLaunchTemplateToHclTerraform = autoscalingGroupLaunchTemplateToHclTerraform;
class AutoscalingGroupLaunchTemplateOutputReference extends cdktf.ComplexObject {
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
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._id = undefined;
            this._name = undefined;
            this._version = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._id = value.id;
            this._name = value.name;
            this._version = value.version;
        }
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
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get version() {
        return this.getStringAttribute('version');
    }
    set version(value) {
        this._version = value;
    }
    resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionInput() {
        return this._version;
    }
}
exports.AutoscalingGroupLaunchTemplateOutputReference = AutoscalingGroupLaunchTemplateOutputReference;
_e = JSII_RTTI_SYMBOL_1;
AutoscalingGroupLaunchTemplateOutputReference[_e] = { fqn: "@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference", version: "0.0.0" };
function autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        on_demand_allocation_strategy: cdktf.stringToTerraform(struct.onDemandAllocationStrategy),
        on_demand_base_capacity: cdktf.numberToTerraform(struct.onDemandBaseCapacity),
        on_demand_percentage_above_base_capacity: cdktf.numberToTerraform(struct.onDemandPercentageAboveBaseCapacity),
        spot_allocation_strategy: cdktf.stringToTerraform(struct.spotAllocationStrategy),
        spot_instance_pools: cdktf.numberToTerraform(struct.spotInstancePools),
        spot_max_price: cdktf.stringToTerraform(struct.spotMaxPrice),
    };
}
exports.autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform = autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform;
function autoscalingGroupMixedInstancesPolicyInstancesDistributionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        on_demand_allocation_strategy: {
            value: cdktf.stringToHclTerraform(struct.onDemandAllocationStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        on_demand_base_capacity: {
            value: cdktf.numberToHclTerraform(struct.onDemandBaseCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        on_demand_percentage_above_base_capacity: {
            value: cdktf.numberToHclTerraform(struct.onDemandPercentageAboveBaseCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        spot_allocation_strategy: {
            value: cdktf.stringToHclTerraform(struct.spotAllocationStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        spot_instance_pools: {
            value: cdktf.numberToHclTerraform(struct.spotInstancePools),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        spot_max_price: {
            value: cdktf.stringToHclTerraform(struct.spotMaxPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingGroupMixedInstancesPolicyInstancesDistributionToHclTerraform = autoscalingGroupMixedInstancesPolicyInstancesDistributionToHclTerraform;
class AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference extends cdktf.ComplexObject {
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
        if (this._onDemandAllocationStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.onDemandAllocationStrategy = this._onDemandAllocationStrategy;
        }
        if (this._onDemandBaseCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.onDemandBaseCapacity = this._onDemandBaseCapacity;
        }
        if (this._onDemandPercentageAboveBaseCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.onDemandPercentageAboveBaseCapacity = this._onDemandPercentageAboveBaseCapacity;
        }
        if (this._spotAllocationStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotAllocationStrategy = this._spotAllocationStrategy;
        }
        if (this._spotInstancePools !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotInstancePools = this._spotInstancePools;
        }
        if (this._spotMaxPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotMaxPrice = this._spotMaxPrice;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._onDemandAllocationStrategy = undefined;
            this._onDemandBaseCapacity = undefined;
            this._onDemandPercentageAboveBaseCapacity = undefined;
            this._spotAllocationStrategy = undefined;
            this._spotInstancePools = undefined;
            this._spotMaxPrice = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._onDemandAllocationStrategy = value.onDemandAllocationStrategy;
            this._onDemandBaseCapacity = value.onDemandBaseCapacity;
            this._onDemandPercentageAboveBaseCapacity = value.onDemandPercentageAboveBaseCapacity;
            this._spotAllocationStrategy = value.spotAllocationStrategy;
            this._spotInstancePools = value.spotInstancePools;
            this._spotMaxPrice = value.spotMaxPrice;
        }
    }
    get onDemandAllocationStrategy() {
        return this.getStringAttribute('on_demand_allocation_strategy');
    }
    set onDemandAllocationStrategy(value) {
        this._onDemandAllocationStrategy = value;
    }
    resetOnDemandAllocationStrategy() {
        this._onDemandAllocationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onDemandAllocationStrategyInput() {
        return this._onDemandAllocationStrategy;
    }
    get onDemandBaseCapacity() {
        return this.getNumberAttribute('on_demand_base_capacity');
    }
    set onDemandBaseCapacity(value) {
        this._onDemandBaseCapacity = value;
    }
    resetOnDemandBaseCapacity() {
        this._onDemandBaseCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onDemandBaseCapacityInput() {
        return this._onDemandBaseCapacity;
    }
    get onDemandPercentageAboveBaseCapacity() {
        return this.getNumberAttribute('on_demand_percentage_above_base_capacity');
    }
    set onDemandPercentageAboveBaseCapacity(value) {
        this._onDemandPercentageAboveBaseCapacity = value;
    }
    resetOnDemandPercentageAboveBaseCapacity() {
        this._onDemandPercentageAboveBaseCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onDemandPercentageAboveBaseCapacityInput() {
        return this._onDemandPercentageAboveBaseCapacity;
    }
    get spotAllocationStrategy() {
        return this.getStringAttribute('spot_allocation_strategy');
    }
    set spotAllocationStrategy(value) {
        this._spotAllocationStrategy = value;
    }
    resetSpotAllocationStrategy() {
        this._spotAllocationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get spotAllocationStrategyInput() {
        return this._spotAllocationStrategy;
    }
    get spotInstancePools() {
        return this.getNumberAttribute('spot_instance_pools');
    }
    set spotInstancePools(value) {
        this._spotInstancePools = value;
    }
    resetSpotInstancePools() {
        this._spotInstancePools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get spotInstancePoolsInput() {
        return this._spotInstancePools;
    }
    get spotMaxPrice() {
        return this.getStringAttribute('spot_max_price');
    }
    set spotMaxPrice(value) {
        this._spotMaxPrice = value;
    }
    resetSpotMaxPrice() {
        this._spotMaxPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get spotMaxPriceInput() {
        return this._spotMaxPrice;
    }
}
exports.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference = AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference;
_f = JSII_RTTI_SYMBOL_1;
AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference[_f] = { fqn: "@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference", version: "0.0.0" };
function autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        launch_template_id: cdktf.stringToTerraform(struct.launchTemplateId),
        launch_template_name: cdktf.stringToTerraform(struct.launchTemplateName),
        version: cdktf.stringToTerraform(struct.version),
    };
}
exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform = autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform;
function autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        launch_template_id: {
            value: cdktf.stringToHclTerraform(struct.launchTemplateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        launch_template_name: {
            value: cdktf.stringToHclTerraform(struct.launchTemplateName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktf.stringToHclTerraform(struct.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToHclTerraform = autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToHclTerraform;
class AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._launchTemplateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateId = this._launchTemplateId;
        }
        if (this._launchTemplateName !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateName = this._launchTemplateName;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._launchTemplateId = undefined;
            this._launchTemplateName = undefined;
            this._version = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._launchTemplateId = value.launchTemplateId;
            this._launchTemplateName = value.launchTemplateName;
            this._version = value.version;
        }
    }
    get launchTemplateId() {
        return this.getStringAttribute('launch_template_id');
    }
    set launchTemplateId(value) {
        this._launchTemplateId = value;
    }
    resetLaunchTemplateId() {
        this._launchTemplateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateIdInput() {
        return this._launchTemplateId;
    }
    get launchTemplateName() {
        return this.getStringAttribute('launch_template_name');
    }
    set launchTemplateName(value) {
        this._launchTemplateName = value;
    }
    resetLaunchTemplateName() {
        this._launchTemplateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateNameInput() {
        return this._launchTemplateName;
    }
    get version() {
        return this.getStringAttribute('version');
    }
    set version(value) {
        this._version = value;
    }
    resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionInput() {
        return this._version;
    }
}
exports.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference = AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference;
_g = JSII_RTTI_SYMBOL_1;
AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference[_g] = { fqn: "@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference", version: "0.0.0" };
function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        launch_template_id: cdktf.stringToTerraform(struct.launchTemplateId),
        launch_template_name: cdktf.stringToTerraform(struct.launchTemplateName),
        version: cdktf.stringToTerraform(struct.version),
    };
}
exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform = autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform;
function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        launch_template_id: {
            value: cdktf.stringToHclTerraform(struct.launchTemplateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        launch_template_name: {
            value: cdktf.stringToHclTerraform(struct.launchTemplateName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktf.stringToHclTerraform(struct.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToHclTerraform = autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToHclTerraform;
class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._launchTemplateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateId = this._launchTemplateId;
        }
        if (this._launchTemplateName !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateName = this._launchTemplateName;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._launchTemplateId = undefined;
            this._launchTemplateName = undefined;
            this._version = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._launchTemplateId = value.launchTemplateId;
            this._launchTemplateName = value.launchTemplateName;
            this._version = value.version;
        }
    }
    get launchTemplateId() {
        return this.getStringAttribute('launch_template_id');
    }
    set launchTemplateId(value) {
        this._launchTemplateId = value;
    }
    resetLaunchTemplateId() {
        this._launchTemplateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateIdInput() {
        return this._launchTemplateId;
    }
    get launchTemplateName() {
        return this.getStringAttribute('launch_template_name');
    }
    set launchTemplateName(value) {
        this._launchTemplateName = value;
    }
    resetLaunchTemplateName() {
        this._launchTemplateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateNameInput() {
        return this._launchTemplateName;
    }
    get version() {
        return this.getStringAttribute('version');
    }
    set version(value) {
        this._version = value;
    }
    resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionInput() {
        return this._version;
    }
}
exports.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference = AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference;
_h = JSII_RTTI_SYMBOL_1;
AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference[_h] = { fqn: "@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference", version: "0.0.0" };
function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        weighted_capacity: cdktf.stringToTerraform(struct.weightedCapacity),
        launch_template_specification: autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform(struct.launchTemplateSpecification),
    };
}
exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform = autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform;
function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        instance_type: {
            value: cdktf.stringToHclTerraform(struct.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weighted_capacity: {
            value: cdktf.stringToHclTerraform(struct.weightedCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        launch_template_specification: {
            value: autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToHclTerraform(struct.launchTemplateSpecification),
            isBlock: true,
            type: "list",
            storageClassType: "AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToHclTerraform = autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToHclTerraform;
class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // launch_template_specification - computed: false, optional: true, required: false
        this._launchTemplateSpecification = new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference(this, "launch_template_specification");
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._weightedCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.weightedCapacity = this._weightedCapacity;
        }
        if (this._launchTemplateSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateSpecification = this._launchTemplateSpecification?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._weightedCapacity = undefined;
            this._launchTemplateSpecification.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
            this._weightedCapacity = value.weightedCapacity;
            this._launchTemplateSpecification.internalValue = value.launchTemplateSpecification;
        }
    }
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    set instanceType(value) {
        this._instanceType = value;
    }
    resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceTypeInput() {
        return this._instanceType;
    }
    get weightedCapacity() {
        return this.getStringAttribute('weighted_capacity');
    }
    set weightedCapacity(value) {
        this._weightedCapacity = value;
    }
    resetWeightedCapacity() {
        this._weightedCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get weightedCapacityInput() {
        return this._weightedCapacity;
    }
    get launchTemplateSpecification() {
        return this._launchTemplateSpecification;
    }
    putLaunchTemplateSpecification(value) {
        this._launchTemplateSpecification.internalValue = value;
    }
    resetLaunchTemplateSpecification() {
        this._launchTemplateSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateSpecificationInput() {
        return this._launchTemplateSpecification.internalValue;
    }
}
exports.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference = AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference;
_j = JSII_RTTI_SYMBOL_1;
AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference[_j] = { fqn: "@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference", version: "0.0.0" };
class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList extends cdktf.ComplexList {
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
        return new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList = AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList;
_k = JSII_RTTI_SYMBOL_1;
AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList[_k] = { fqn: "@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList", version: "0.0.0" };
function autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        launch_template_specification: autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform(struct.launchTemplateSpecification),
        override: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform, true)(struct.override),
    };
}
exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform = autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform;
function autoscalingGroupMixedInstancesPolicyLaunchTemplateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        launch_template_specification: {
            value: autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToHclTerraform(struct.launchTemplateSpecification),
            isBlock: true,
            type: "list",
            storageClassType: "AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationList",
        },
        override: {
            value: cdktf.listMapperHcl(autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToHclTerraform, true)(struct.override),
            isBlock: true,
            type: "list",
            storageClassType: "AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateToHclTerraform = autoscalingGroupMixedInstancesPolicyLaunchTemplateToHclTerraform;
class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // launch_template_specification - computed: false, optional: false, required: true
        this._launchTemplateSpecification = new AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference(this, "launch_template_specification");
        // override - computed: false, optional: true, required: false
        this._override = new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList(this, "override", false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._launchTemplateSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplateSpecification = this._launchTemplateSpecification?.internalValue;
        }
        if (this._override?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.override = this._override?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._launchTemplateSpecification.internalValue = undefined;
            this._override.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._launchTemplateSpecification.internalValue = value.launchTemplateSpecification;
            this._override.internalValue = value.override;
        }
    }
    get launchTemplateSpecification() {
        return this._launchTemplateSpecification;
    }
    putLaunchTemplateSpecification(value) {
        this._launchTemplateSpecification.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateSpecificationInput() {
        return this._launchTemplateSpecification.internalValue;
    }
    get override() {
        return this._override;
    }
    putOverride(value) {
        this._override.internalValue = value;
    }
    resetOverride() {
        this._override.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get overrideInput() {
        return this._override.internalValue;
    }
}
exports.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference = AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference;
_l = JSII_RTTI_SYMBOL_1;
AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference[_l] = { fqn: "@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference", version: "0.0.0" };
function autoscalingGroupMixedInstancesPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        instances_distribution: autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform(struct.instancesDistribution),
        launch_template: autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform(struct.launchTemplate),
    };
}
exports.autoscalingGroupMixedInstancesPolicyToTerraform = autoscalingGroupMixedInstancesPolicyToTerraform;
function autoscalingGroupMixedInstancesPolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        instances_distribution: {
            value: autoscalingGroupMixedInstancesPolicyInstancesDistributionToHclTerraform(struct.instancesDistribution),
            isBlock: true,
            type: "list",
            storageClassType: "AutoscalingGroupMixedInstancesPolicyInstancesDistributionList",
        },
        launch_template: {
            value: autoscalingGroupMixedInstancesPolicyLaunchTemplateToHclTerraform(struct.launchTemplate),
            isBlock: true,
            type: "list",
            storageClassType: "AutoscalingGroupMixedInstancesPolicyLaunchTemplateList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingGroupMixedInstancesPolicyToHclTerraform = autoscalingGroupMixedInstancesPolicyToHclTerraform;
class AutoscalingGroupMixedInstancesPolicyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // instances_distribution - computed: false, optional: true, required: false
        this._instancesDistribution = new AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference(this, "instances_distribution");
        // launch_template - computed: false, optional: false, required: true
        this._launchTemplate = new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference(this, "launch_template");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._instancesDistribution?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instancesDistribution = this._instancesDistribution?.internalValue;
        }
        if (this._launchTemplate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchTemplate = this._launchTemplate?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._instancesDistribution.internalValue = undefined;
            this._launchTemplate.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._instancesDistribution.internalValue = value.instancesDistribution;
            this._launchTemplate.internalValue = value.launchTemplate;
        }
    }
    get instancesDistribution() {
        return this._instancesDistribution;
    }
    putInstancesDistribution(value) {
        this._instancesDistribution.internalValue = value;
    }
    resetInstancesDistribution() {
        this._instancesDistribution.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instancesDistributionInput() {
        return this._instancesDistribution.internalValue;
    }
    get launchTemplate() {
        return this._launchTemplate;
    }
    putLaunchTemplate(value) {
        this._launchTemplate.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateInput() {
        return this._launchTemplate.internalValue;
    }
}
exports.AutoscalingGroupMixedInstancesPolicyOutputReference = AutoscalingGroupMixedInstancesPolicyOutputReference;
_m = JSII_RTTI_SYMBOL_1;
AutoscalingGroupMixedInstancesPolicyOutputReference[_m] = { fqn: "@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference", version: "0.0.0" };
function autoscalingGroupTagToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        propagate_at_launch: cdktf.booleanToTerraform(struct.propagateAtLaunch),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.autoscalingGroupTagToTerraform = autoscalingGroupTagToTerraform;
function autoscalingGroupTagToHclTerraform(struct) {
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
        propagate_at_launch: {
            value: cdktf.booleanToHclTerraform(struct.propagateAtLaunch),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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
exports.autoscalingGroupTagToHclTerraform = autoscalingGroupTagToHclTerraform;
class AutoscalingGroupTagOutputReference extends cdktf.ComplexObject {
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
        if (this._propagateAtLaunch !== undefined) {
            hasAnyValues = true;
            internalValueResult.propagateAtLaunch = this._propagateAtLaunch;
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
            this._key = undefined;
            this._propagateAtLaunch = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._propagateAtLaunch = value.propagateAtLaunch;
            this._value = value.value;
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
    get propagateAtLaunch() {
        return this.getBooleanAttribute('propagate_at_launch');
    }
    set propagateAtLaunch(value) {
        this._propagateAtLaunch = value;
    }
    // Temporarily expose input value. Use with caution.
    get propagateAtLaunchInput() {
        return this._propagateAtLaunch;
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
exports.AutoscalingGroupTagOutputReference = AutoscalingGroupTagOutputReference;
_o = JSII_RTTI_SYMBOL_1;
AutoscalingGroupTagOutputReference[_o] = { fqn: "@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference", version: "0.0.0" };
class AutoscalingGroupTagList extends cdktf.ComplexList {
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
        return new AutoscalingGroupTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.AutoscalingGroupTagList = AutoscalingGroupTagList;
_p = JSII_RTTI_SYMBOL_1;
AutoscalingGroupTagList[_p] = { fqn: "@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList", version: "0.0.0" };
function autoscalingGroupTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delete: cdktf.stringToTerraform(struct.delete),
    };
}
exports.autoscalingGroupTimeoutsToTerraform = autoscalingGroupTimeoutsToTerraform;
function autoscalingGroupTimeoutsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        delete: {
            value: cdktf.stringToHclTerraform(struct.delete),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingGroupTimeoutsToHclTerraform = autoscalingGroupTimeoutsToHclTerraform;
class AutoscalingGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
        this.isEmptyObject = false;
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._delete !== undefined) {
            hasAnyValues = true;
            internalValueResult.delete = this._delete;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._delete = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._delete = value.delete;
        }
    }
    get delete() {
        return this.getStringAttribute('delete');
    }
    set delete(value) {
        this._delete = value;
    }
    resetDelete() {
        this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteInput() {
        return this._delete;
    }
}
exports.AutoscalingGroupTimeoutsOutputReference = AutoscalingGroupTimeoutsOutputReference;
_q = JSII_RTTI_SYMBOL_1;
AutoscalingGroupTimeoutsOutputReference[_q] = { fqn: "@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference", version: "0.0.0" };
function autoscalingGroupWarmPoolToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_group_prepared_capacity: cdktf.numberToTerraform(struct.maxGroupPreparedCapacity),
        min_size: cdktf.numberToTerraform(struct.minSize),
        pool_state: cdktf.stringToTerraform(struct.poolState),
    };
}
exports.autoscalingGroupWarmPoolToTerraform = autoscalingGroupWarmPoolToTerraform;
function autoscalingGroupWarmPoolToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        max_group_prepared_capacity: {
            value: cdktf.numberToHclTerraform(struct.maxGroupPreparedCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_size: {
            value: cdktf.numberToHclTerraform(struct.minSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        pool_state: {
            value: cdktf.stringToHclTerraform(struct.poolState),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.autoscalingGroupWarmPoolToHclTerraform = autoscalingGroupWarmPoolToHclTerraform;
class AutoscalingGroupWarmPoolOutputReference extends cdktf.ComplexObject {
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
        if (this._maxGroupPreparedCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxGroupPreparedCapacity = this._maxGroupPreparedCapacity;
        }
        if (this._minSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.minSize = this._minSize;
        }
        if (this._poolState !== undefined) {
            hasAnyValues = true;
            internalValueResult.poolState = this._poolState;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxGroupPreparedCapacity = undefined;
            this._minSize = undefined;
            this._poolState = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxGroupPreparedCapacity = value.maxGroupPreparedCapacity;
            this._minSize = value.minSize;
            this._poolState = value.poolState;
        }
    }
    get maxGroupPreparedCapacity() {
        return this.getNumberAttribute('max_group_prepared_capacity');
    }
    set maxGroupPreparedCapacity(value) {
        this._maxGroupPreparedCapacity = value;
    }
    resetMaxGroupPreparedCapacity() {
        this._maxGroupPreparedCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxGroupPreparedCapacityInput() {
        return this._maxGroupPreparedCapacity;
    }
    get minSize() {
        return this.getNumberAttribute('min_size');
    }
    set minSize(value) {
        this._minSize = value;
    }
    resetMinSize() {
        this._minSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minSizeInput() {
        return this._minSize;
    }
    get poolState() {
        return this.getStringAttribute('pool_state');
    }
    set poolState(value) {
        this._poolState = value;
    }
    resetPoolState() {
        this._poolState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get poolStateInput() {
        return this._poolState;
    }
}
exports.AutoscalingGroupWarmPoolOutputReference = AutoscalingGroupWarmPoolOutputReference;
_r = JSII_RTTI_SYMBOL_1;
AutoscalingGroupWarmPoolOutputReference[_r] = { fqn: "@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group aws_autoscaling_group}
*/
class AutoscalingGroup extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AutoscalingGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AutoscalingGroup to import
    * @param importFromId The id of the existing AutoscalingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AutoscalingGroup to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_autoscaling_group", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group aws_autoscaling_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingGroupConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_autoscaling_group',
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
        // initial_lifecycle_hook - computed: false, optional: true, required: false
        this._initialLifecycleHook = new AutoscalingGroupInitialLifecycleHookList(this, "initial_lifecycle_hook", true);
        // instance_refresh - computed: false, optional: true, required: false
        this._instanceRefresh = new AutoscalingGroupInstanceRefreshOutputReference(this, "instance_refresh");
        // launch_template - computed: false, optional: true, required: false
        this._launchTemplate = new AutoscalingGroupLaunchTemplateOutputReference(this, "launch_template");
        // mixed_instances_policy - computed: false, optional: true, required: false
        this._mixedInstancesPolicy = new AutoscalingGroupMixedInstancesPolicyOutputReference(this, "mixed_instances_policy");
        // tag - computed: false, optional: true, required: false
        this._tag = new AutoscalingGroupTagList(this, "tag", true);
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new AutoscalingGroupTimeoutsOutputReference(this, "timeouts");
        // warm_pool - computed: false, optional: true, required: false
        this._warmPool = new AutoscalingGroupWarmPoolOutputReference(this, "warm_pool");
        this._availabilityZones = config.availabilityZones;
        this._capacityRebalance = config.capacityRebalance;
        this._defaultCooldown = config.defaultCooldown;
        this._desiredCapacity = config.desiredCapacity;
        this._enabledMetrics = config.enabledMetrics;
        this._forceDelete = config.forceDelete;
        this._forceDeleteWarmPool = config.forceDeleteWarmPool;
        this._healthCheckGracePeriod = config.healthCheckGracePeriod;
        this._healthCheckType = config.healthCheckType;
        this._id = config.id;
        this._launchConfiguration = config.launchConfiguration;
        this._loadBalancers = config.loadBalancers;
        this._maxInstanceLifetime = config.maxInstanceLifetime;
        this._maxSize = config.maxSize;
        this._metricsGranularity = config.metricsGranularity;
        this._minElbCapacity = config.minElbCapacity;
        this._minSize = config.minSize;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._placementGroup = config.placementGroup;
        this._protectFromScaleIn = config.protectFromScaleIn;
        this._serviceLinkedRoleArn = config.serviceLinkedRoleArn;
        this._suspendedProcesses = config.suspendedProcesses;
        this._tags = config.tags;
        this._targetGroupArns = config.targetGroupArns;
        this._terminationPolicies = config.terminationPolicies;
        this._vpcZoneIdentifier = config.vpcZoneIdentifier;
        this._waitForCapacityTimeout = config.waitForCapacityTimeout;
        this._waitForElbCapacity = config.waitForElbCapacity;
        this._initialLifecycleHook.internalValue = config.initialLifecycleHook;
        this._instanceRefresh.internalValue = config.instanceRefresh;
        this._launchTemplate.internalValue = config.launchTemplate;
        this._mixedInstancesPolicy.internalValue = config.mixedInstancesPolicy;
        this._tag.internalValue = config.tag;
        this._timeouts.internalValue = config.timeouts;
        this._warmPool.internalValue = config.warmPool;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get availabilityZones() {
        return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
    }
    set availabilityZones(value) {
        this._availabilityZones = value;
    }
    resetAvailabilityZones() {
        this._availabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get availabilityZonesInput() {
        return this._availabilityZones;
    }
    get capacityRebalance() {
        return this.getBooleanAttribute('capacity_rebalance');
    }
    set capacityRebalance(value) {
        this._capacityRebalance = value;
    }
    resetCapacityRebalance() {
        this._capacityRebalance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get capacityRebalanceInput() {
        return this._capacityRebalance;
    }
    get defaultCooldown() {
        return this.getNumberAttribute('default_cooldown');
    }
    set defaultCooldown(value) {
        this._defaultCooldown = value;
    }
    resetDefaultCooldown() {
        this._defaultCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultCooldownInput() {
        return this._defaultCooldown;
    }
    get desiredCapacity() {
        return this.getNumberAttribute('desired_capacity');
    }
    set desiredCapacity(value) {
        this._desiredCapacity = value;
    }
    resetDesiredCapacity() {
        this._desiredCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get desiredCapacityInput() {
        return this._desiredCapacity;
    }
    get enabledMetrics() {
        return cdktf.Fn.tolist(this.getListAttribute('enabled_metrics'));
    }
    set enabledMetrics(value) {
        this._enabledMetrics = value;
    }
    resetEnabledMetrics() {
        this._enabledMetrics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledMetricsInput() {
        return this._enabledMetrics;
    }
    get forceDelete() {
        return this.getBooleanAttribute('force_delete');
    }
    set forceDelete(value) {
        this._forceDelete = value;
    }
    resetForceDelete() {
        this._forceDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forceDeleteInput() {
        return this._forceDelete;
    }
    get forceDeleteWarmPool() {
        return this.getBooleanAttribute('force_delete_warm_pool');
    }
    set forceDeleteWarmPool(value) {
        this._forceDeleteWarmPool = value;
    }
    resetForceDeleteWarmPool() {
        this._forceDeleteWarmPool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forceDeleteWarmPoolInput() {
        return this._forceDeleteWarmPool;
    }
    get healthCheckGracePeriod() {
        return this.getNumberAttribute('health_check_grace_period');
    }
    set healthCheckGracePeriod(value) {
        this._healthCheckGracePeriod = value;
    }
    resetHealthCheckGracePeriod() {
        this._healthCheckGracePeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthCheckGracePeriodInput() {
        return this._healthCheckGracePeriod;
    }
    get healthCheckType() {
        return this.getStringAttribute('health_check_type');
    }
    set healthCheckType(value) {
        this._healthCheckType = value;
    }
    resetHealthCheckType() {
        this._healthCheckType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthCheckTypeInput() {
        return this._healthCheckType;
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
    get launchConfiguration() {
        return this.getStringAttribute('launch_configuration');
    }
    set launchConfiguration(value) {
        this._launchConfiguration = value;
    }
    resetLaunchConfiguration() {
        this._launchConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchConfigurationInput() {
        return this._launchConfiguration;
    }
    get loadBalancers() {
        return cdktf.Fn.tolist(this.getListAttribute('load_balancers'));
    }
    set loadBalancers(value) {
        this._loadBalancers = value;
    }
    resetLoadBalancers() {
        this._loadBalancers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loadBalancersInput() {
        return this._loadBalancers;
    }
    get maxInstanceLifetime() {
        return this.getNumberAttribute('max_instance_lifetime');
    }
    set maxInstanceLifetime(value) {
        this._maxInstanceLifetime = value;
    }
    resetMaxInstanceLifetime() {
        this._maxInstanceLifetime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxInstanceLifetimeInput() {
        return this._maxInstanceLifetime;
    }
    get maxSize() {
        return this.getNumberAttribute('max_size');
    }
    set maxSize(value) {
        this._maxSize = value;
    }
    // Temporarily expose input value. Use with caution.
    get maxSizeInput() {
        return this._maxSize;
    }
    get metricsGranularity() {
        return this.getStringAttribute('metrics_granularity');
    }
    set metricsGranularity(value) {
        this._metricsGranularity = value;
    }
    resetMetricsGranularity() {
        this._metricsGranularity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metricsGranularityInput() {
        return this._metricsGranularity;
    }
    get minElbCapacity() {
        return this.getNumberAttribute('min_elb_capacity');
    }
    set minElbCapacity(value) {
        this._minElbCapacity = value;
    }
    resetMinElbCapacity() {
        this._minElbCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minElbCapacityInput() {
        return this._minElbCapacity;
    }
    get minSize() {
        return this.getNumberAttribute('min_size');
    }
    set minSize(value) {
        this._minSize = value;
    }
    // Temporarily expose input value. Use with caution.
    get minSizeInput() {
        return this._minSize;
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
    get placementGroup() {
        return this.getStringAttribute('placement_group');
    }
    set placementGroup(value) {
        this._placementGroup = value;
    }
    resetPlacementGroup() {
        this._placementGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get placementGroupInput() {
        return this._placementGroup;
    }
    get protectFromScaleIn() {
        return this.getBooleanAttribute('protect_from_scale_in');
    }
    set protectFromScaleIn(value) {
        this._protectFromScaleIn = value;
    }
    resetProtectFromScaleIn() {
        this._protectFromScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get protectFromScaleInInput() {
        return this._protectFromScaleIn;
    }
    get serviceLinkedRoleArn() {
        return this.getStringAttribute('service_linked_role_arn');
    }
    set serviceLinkedRoleArn(value) {
        this._serviceLinkedRoleArn = value;
    }
    resetServiceLinkedRoleArn() {
        this._serviceLinkedRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceLinkedRoleArnInput() {
        return this._serviceLinkedRoleArn;
    }
    get suspendedProcesses() {
        return cdktf.Fn.tolist(this.getListAttribute('suspended_processes'));
    }
    set suspendedProcesses(value) {
        this._suspendedProcesses = value;
    }
    resetSuspendedProcesses() {
        this._suspendedProcesses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get suspendedProcessesInput() {
        return this._suspendedProcesses;
    }
    get tags() {
        return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('tags')));
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
    get targetGroupArns() {
        return cdktf.Fn.tolist(this.getListAttribute('target_group_arns'));
    }
    set targetGroupArns(value) {
        this._targetGroupArns = value;
    }
    resetTargetGroupArns() {
        this._targetGroupArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetGroupArnsInput() {
        return this._targetGroupArns;
    }
    get terminationPolicies() {
        return this.getListAttribute('termination_policies');
    }
    set terminationPolicies(value) {
        this._terminationPolicies = value;
    }
    resetTerminationPolicies() {
        this._terminationPolicies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get terminationPoliciesInput() {
        return this._terminationPolicies;
    }
    get vpcZoneIdentifier() {
        return cdktf.Fn.tolist(this.getListAttribute('vpc_zone_identifier'));
    }
    set vpcZoneIdentifier(value) {
        this._vpcZoneIdentifier = value;
    }
    resetVpcZoneIdentifier() {
        this._vpcZoneIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcZoneIdentifierInput() {
        return this._vpcZoneIdentifier;
    }
    get waitForCapacityTimeout() {
        return this.getStringAttribute('wait_for_capacity_timeout');
    }
    set waitForCapacityTimeout(value) {
        this._waitForCapacityTimeout = value;
    }
    resetWaitForCapacityTimeout() {
        this._waitForCapacityTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get waitForCapacityTimeoutInput() {
        return this._waitForCapacityTimeout;
    }
    get waitForElbCapacity() {
        return this.getNumberAttribute('wait_for_elb_capacity');
    }
    set waitForElbCapacity(value) {
        this._waitForElbCapacity = value;
    }
    resetWaitForElbCapacity() {
        this._waitForElbCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get waitForElbCapacityInput() {
        return this._waitForElbCapacity;
    }
    get initialLifecycleHook() {
        return this._initialLifecycleHook;
    }
    putInitialLifecycleHook(value) {
        this._initialLifecycleHook.internalValue = value;
    }
    resetInitialLifecycleHook() {
        this._initialLifecycleHook.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get initialLifecycleHookInput() {
        return this._initialLifecycleHook.internalValue;
    }
    get instanceRefresh() {
        return this._instanceRefresh;
    }
    putInstanceRefresh(value) {
        this._instanceRefresh.internalValue = value;
    }
    resetInstanceRefresh() {
        this._instanceRefresh.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceRefreshInput() {
        return this._instanceRefresh.internalValue;
    }
    get launchTemplate() {
        return this._launchTemplate;
    }
    putLaunchTemplate(value) {
        this._launchTemplate.internalValue = value;
    }
    resetLaunchTemplate() {
        this._launchTemplate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateInput() {
        return this._launchTemplate.internalValue;
    }
    get mixedInstancesPolicy() {
        return this._mixedInstancesPolicy;
    }
    putMixedInstancesPolicy(value) {
        this._mixedInstancesPolicy.internalValue = value;
    }
    resetMixedInstancesPolicy() {
        this._mixedInstancesPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mixedInstancesPolicyInput() {
        return this._mixedInstancesPolicy.internalValue;
    }
    get tag() {
        return this._tag;
    }
    putTag(value) {
        this._tag.internalValue = value;
    }
    resetTag() {
        this._tag.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagInput() {
        return this._tag.internalValue;
    }
    get timeouts() {
        return this._timeouts;
    }
    putTimeouts(value) {
        this._timeouts.internalValue = value;
    }
    resetTimeouts() {
        this._timeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutsInput() {
        return this._timeouts.internalValue;
    }
    get warmPool() {
        return this._warmPool;
    }
    putWarmPool(value) {
        this._warmPool.internalValue = value;
    }
    resetWarmPool() {
        this._warmPool.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get warmPoolInput() {
        return this._warmPool.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
            capacity_rebalance: cdktf.booleanToTerraform(this._capacityRebalance),
            default_cooldown: cdktf.numberToTerraform(this._defaultCooldown),
            desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
            enabled_metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledMetrics),
            force_delete: cdktf.booleanToTerraform(this._forceDelete),
            force_delete_warm_pool: cdktf.booleanToTerraform(this._forceDeleteWarmPool),
            health_check_grace_period: cdktf.numberToTerraform(this._healthCheckGracePeriod),
            health_check_type: cdktf.stringToTerraform(this._healthCheckType),
            id: cdktf.stringToTerraform(this._id),
            launch_configuration: cdktf.stringToTerraform(this._launchConfiguration),
            load_balancers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loadBalancers),
            max_instance_lifetime: cdktf.numberToTerraform(this._maxInstanceLifetime),
            max_size: cdktf.numberToTerraform(this._maxSize),
            metrics_granularity: cdktf.stringToTerraform(this._metricsGranularity),
            min_elb_capacity: cdktf.numberToTerraform(this._minElbCapacity),
            min_size: cdktf.numberToTerraform(this._minSize),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            placement_group: cdktf.stringToTerraform(this._placementGroup),
            protect_from_scale_in: cdktf.booleanToTerraform(this._protectFromScaleIn),
            service_linked_role_arn: cdktf.stringToTerraform(this._serviceLinkedRoleArn),
            suspended_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._suspendedProcesses),
            tags: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._tags),
            target_group_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetGroupArns),
            termination_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._terminationPolicies),
            vpc_zone_identifier: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcZoneIdentifier),
            wait_for_capacity_timeout: cdktf.stringToTerraform(this._waitForCapacityTimeout),
            wait_for_elb_capacity: cdktf.numberToTerraform(this._waitForElbCapacity),
            initial_lifecycle_hook: cdktf.listMapper(autoscalingGroupInitialLifecycleHookToTerraform, true)(this._initialLifecycleHook.internalValue),
            instance_refresh: autoscalingGroupInstanceRefreshToTerraform(this._instanceRefresh.internalValue),
            launch_template: autoscalingGroupLaunchTemplateToTerraform(this._launchTemplate.internalValue),
            mixed_instances_policy: autoscalingGroupMixedInstancesPolicyToTerraform(this._mixedInstancesPolicy.internalValue),
            tag: cdktf.listMapper(autoscalingGroupTagToTerraform, true)(this._tag.internalValue),
            timeouts: autoscalingGroupTimeoutsToTerraform(this._timeouts.internalValue),
            warm_pool: autoscalingGroupWarmPoolToTerraform(this._warmPool.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            availability_zones: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            capacity_rebalance: {
                value: cdktf.booleanToHclTerraform(this._capacityRebalance),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            default_cooldown: {
                value: cdktf.numberToHclTerraform(this._defaultCooldown),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            desired_capacity: {
                value: cdktf.numberToHclTerraform(this._desiredCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            enabled_metrics: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledMetrics),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            force_delete: {
                value: cdktf.booleanToHclTerraform(this._forceDelete),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            force_delete_warm_pool: {
                value: cdktf.booleanToHclTerraform(this._forceDeleteWarmPool),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            health_check_grace_period: {
                value: cdktf.numberToHclTerraform(this._healthCheckGracePeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            health_check_type: {
                value: cdktf.stringToHclTerraform(this._healthCheckType),
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
            launch_configuration: {
                value: cdktf.stringToHclTerraform(this._launchConfiguration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            load_balancers: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loadBalancers),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            max_instance_lifetime: {
                value: cdktf.numberToHclTerraform(this._maxInstanceLifetime),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_size: {
                value: cdktf.numberToHclTerraform(this._maxSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            metrics_granularity: {
                value: cdktf.stringToHclTerraform(this._metricsGranularity),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            min_elb_capacity: {
                value: cdktf.numberToHclTerraform(this._minElbCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            min_size: {
                value: cdktf.numberToHclTerraform(this._minSize),
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
            name_prefix: {
                value: cdktf.stringToHclTerraform(this._namePrefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            placement_group: {
                value: cdktf.stringToHclTerraform(this._placementGroup),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            protect_from_scale_in: {
                value: cdktf.booleanToHclTerraform(this._protectFromScaleIn),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            service_linked_role_arn: {
                value: cdktf.stringToHclTerraform(this._serviceLinkedRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            suspended_processes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._suspendedProcesses),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._tags),
                isBlock: false,
                type: "set",
                storageClassType: "stringMapList",
            },
            target_group_arns: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetGroupArns),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            termination_policies: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._terminationPolicies),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            vpc_zone_identifier: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcZoneIdentifier),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            wait_for_capacity_timeout: {
                value: cdktf.stringToHclTerraform(this._waitForCapacityTimeout),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            wait_for_elb_capacity: {
                value: cdktf.numberToHclTerraform(this._waitForElbCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            initial_lifecycle_hook: {
                value: cdktf.listMapperHcl(autoscalingGroupInitialLifecycleHookToHclTerraform, true)(this._initialLifecycleHook.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "AutoscalingGroupInitialLifecycleHookList",
            },
            instance_refresh: {
                value: autoscalingGroupInstanceRefreshToHclTerraform(this._instanceRefresh.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AutoscalingGroupInstanceRefreshList",
            },
            launch_template: {
                value: autoscalingGroupLaunchTemplateToHclTerraform(this._launchTemplate.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AutoscalingGroupLaunchTemplateList",
            },
            mixed_instances_policy: {
                value: autoscalingGroupMixedInstancesPolicyToHclTerraform(this._mixedInstancesPolicy.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AutoscalingGroupMixedInstancesPolicyList",
            },
            tag: {
                value: cdktf.listMapperHcl(autoscalingGroupTagToHclTerraform, true)(this._tag.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "AutoscalingGroupTagList",
            },
            timeouts: {
                value: autoscalingGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AutoscalingGroupTimeouts",
            },
            warm_pool: {
                value: autoscalingGroupWarmPoolToHclTerraform(this._warmPool.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AutoscalingGroupWarmPoolList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.AutoscalingGroup = AutoscalingGroup;
_s = JSII_RTTI_SYMBOL_1;
AutoscalingGroup[_s] = { fqn: "@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
AutoscalingGroup.tfResourceType = "aws_autoscaling_group";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2F1dG9zY2FsaW5nLWdyb3VwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBc00vQixTQUFnQiwrQ0FBK0MsQ0FBQyxNQUFpRTtJQUMvSCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlELGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDcEUsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUMxRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUM1RSx1QkFBdUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDO1FBQy9FLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztLQUNuRCxDQUFBO0FBQ0gsQ0FBQztBQWRELDBHQWNDO0FBR0QsU0FBZ0Isa0RBQWtELENBQUMs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QjtBQUNwQixvQkFBb0I7QUFDRywrQkFBYyxHQUFHLHVCQUF1QixBQUExQixDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCNhdmFpbGFiaWxpdHlfem9uZXMgQXV0b3NjYWxpbmdHcm91cCNhdmFpbGFiaWxpdHlfem9uZXN9XG4gICovXG4gIHJlYWRvbmx5IGF2YWlsYWJpbGl0eVpvbmVzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI2NhcGFjaXR5X3JlYmFsYW5jZSBBdXRvc2NhbGluZ0dyb3VwI2NhcGFjaXR5X3JlYmFsYW5jZX1cbiAgKi9cbiAgcmVhZG9ubHkgY2FwYWNpdHlSZWJhbGFuY2U/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI2RlZmF1bHRfY29vbGRvd24gQXV0b3NjYWxpbmdHcm91cCNkZWZhdWx0X2Nvb2xkb3dufVxuICAqL1xuICByZWFkb25seSBkZWZhdWx0Q29vbGRvd24/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI2Rlc2lyZWRfY2FwYWNpdHkgQXV0b3NjYWxpbmdHcm91cCNkZXNpcmVkX2NhcGFjaXR5fVxuICAqL1xuICByZWFkb25seSBkZXNpcmVkQ2FwYWNpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI2VuYWJsZWRfbWV0cmljcyBBdXRvc2NhbGluZ0dyb3VwI2VuYWJsZWRfbWV0cmljc31cbiAgKi9cbiAgcmVhZG9ubHkgZW5hYmxlZE1ldHJpY3M/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjZm9yY2VfZGVsZXRlIEF1dG9zY2FsaW5nR3JvdXAjZm9yY2VfZGVsZXRlfVxuICAqL1xuICByZWFkb25seSBmb3JjZURlbGV0ZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjZm9yY2VfZGVsZXRlX3dhcm1fcG9vbCBBdXRvc2NhbGluZ0dyb3VwI2ZvcmNlX2RlbGV0ZV93YXJtX3Bvb2x9XG4gICovXG4gIHJlYWRvbmx5IGZvcmNlRGVsZXRlV2FybVBvb2w/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI2hlYWx0aF9jaGVja19ncmFjZV9wZXJpb2QgQXV0b3NjYWxpbmdHcm91cCNoZWFsdGhfY2hlY2tfZ3JhY2VfcGVyaW9kfVxuICAqL1xuICByZWFkb25seSBoZWFsdGhDaGVja0dyYWNlUGVyaW9kPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCNoZWFsdGhfY2hlY2tfdHlwZSBBdXRvc2NhbGluZ0dyb3VwI2hlYWx0aF9jaGVja190eXBlfVxuICAqL1xuICByZWFkb25seSBoZWFsdGhDaGVja1R5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI2lkIEF1dG9zY2FsaW5nR3JvdXAjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI2xhdW5jaF9jb25maWd1cmF0aW9uIEF1dG9zY2FsaW5nR3JvdXAjbGF1bmNoX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGxhdW5jaENvbmZpZ3VyYXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI2xvYWRfYmFsYW5jZXJzIEF1dG9zY2FsaW5nR3JvdXAjbG9hZF9iYWxhbmNlcnN9XG4gICovXG4gIHJlYWRvbmx5IGxvYWRCYWxhbmNlcnM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjbWF4X2luc3RhbmNlX2xpZmV0aW1lIEF1dG9zY2FsaW5nR3JvdXAjbWF4X2luc3RhbmNlX2xpZmV0aW1lfVxuICAqL1xuICByZWFkb25seSBtYXhJbnN0YW5jZUxpZmV0aW1lPzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCNtYXhfc2l6ZSBBdXRvc2NhbGluZ0dyb3VwI21heF9zaXplfVxuICAqL1xuICByZWFkb25seSBtYXhTaXplOiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI21ldHJpY3NfZ3JhbnVsYXJpdHkgQXV0b3NjYWxpbmdHcm91cCNtZXRyaWNzX2dyYW51bGFyaXR5fVxuICAqL1xuICByZWFkb25seSBtZXRyaWNzR3JhbnVsYXJpdHk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI21pbl9lbGJfY2FwYWNpdHkgQXV0b3NjYWxpbmdHcm91cCNtaW5fZWxiX2NhcGFjaXR5fVxuICAqL1xuICByZWFkb25seSBtaW5FbGJDYXBhY2l0eT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjbWluX3NpemUgQXV0b3NjYWxpbmdHcm91cCNtaW5fc2l6ZX1cbiAgKi9cbiAgcmVhZG9ubHkgbWluU2l6ZTogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCNuYW1lIEF1dG9zY2FsaW5nR3JvdXAjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjbmFtZV9wcmVmaXggQXV0b3NjYWxpbmdHcm91cCNuYW1lX3ByZWZpeH1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZVByZWZpeD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjcGxhY2VtZW50X2dyb3VwIEF1dG9zY2FsaW5nR3JvdXAjcGxhY2VtZW50X2dyb3VwfVxuICAqL1xuICByZWFkb25seSBwbGFjZW1lbnRHcm91cD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjcHJvdGVjdF9mcm9tX3NjYWxlX2luIEF1dG9zY2FsaW5nR3JvdXAjcHJvdGVjdF9mcm9tX3NjYWxlX2lufVxuICAqL1xuICByZWFkb25seSBwcm90ZWN0RnJvbVNjYWxlSW4/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI3NlcnZpY2VfbGlua2VkX3JvbGVfYXJuIEF1dG9zY2FsaW5nR3JvdXAjc2VydmljZV9saW5rZWRfcm9sZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IHNlcnZpY2VMaW5rZWRSb2xlQXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCNzdXNwZW5kZWRfcHJvY2Vzc2VzIEF1dG9zY2FsaW5nR3JvdXAjc3VzcGVuZGVkX3Byb2Nlc3Nlc31cbiAgKi9cbiAgcmVhZG9ubHkgc3VzcGVuZGVkUHJvY2Vzc2VzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI3RhZ3MgQXV0b3NjYWxpbmdHcm91cCN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVtdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI3RhcmdldF9ncm91cF9hcm5zIEF1dG9zY2FsaW5nR3JvdXAjdGFyZ2V0X2dyb3VwX2FybnN9XG4gICovXG4gIHJlYWRvbmx5IHRhcmdldEdyb3VwQXJucz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCN0ZXJtaW5hdGlvbl9wb2xpY2llcyBBdXRvc2NhbGluZ0dyb3VwI3Rlcm1pbmF0aW9uX3BvbGljaWVzfVxuICAqL1xuICByZWFkb25seSB0ZXJtaW5hdGlvblBvbGljaWVzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI3ZwY196b25lX2lkZW50aWZpZXIgQXV0b3NjYWxpbmdHcm91cCN2cGNfem9uZV9pZGVudGlmaWVyfVxuICAqL1xuICByZWFkb25seSB2cGNab25lSWRlbnRpZmllcj86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCN3YWl0X2Zvcl9jYXBhY2l0eV90aW1lb3V0IEF1dG9zY2FsaW5nR3JvdXAjd2FpdF9mb3JfY2FwYWNpdHlfdGltZW91dH1cbiAgKi9cbiAgcmVhZG9ubHkgd2FpdEZvckNhcGFjaXR5VGltZW91dD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjd2FpdF9mb3JfZWxiX2NhcGFjaXR5IEF1dG9zY2FsaW5nR3JvdXAjd2FpdF9mb3JfZWxiX2NhcGFjaXR5fVxuICAqL1xuICByZWFkb25seSB3YWl0Rm9yRWxiQ2FwYWNpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAqIGluaXRpYWxfbGlmZWN5Y2xlX2hvb2sgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI2luaXRpYWxfbGlmZWN5Y2xlX2hvb2sgQXV0b3NjYWxpbmdHcm91cCNpbml0aWFsX2xpZmVjeWNsZV9ob29rfVxuICAqL1xuICByZWFkb25seSBpbml0aWFsTGlmZWN5Y2xlSG9vaz86IEF1dG9zY2FsaW5nR3JvdXBJbml0aWFsTGlmZWN5Y2xlSG9va1tdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIGluc3RhbmNlX3JlZnJlc2ggYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI2luc3RhbmNlX3JlZnJlc2ggQXV0b3NjYWxpbmdHcm91cCNpbnN0YW5jZV9yZWZyZXNofVxuICAqL1xuICByZWFkb25seSBpbnN0YW5jZVJlZnJlc2g/OiBBdXRvc2NhbGluZ0dyb3VwSW5zdGFuY2VSZWZyZXNoO1xuICAvKipcbiAgKiBsYXVuY2hfdGVtcGxhdGUgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI2xhdW5jaF90ZW1wbGF0ZSBBdXRvc2NhbGluZ0dyb3VwI2xhdW5jaF90ZW1wbGF0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgbGF1bmNoVGVtcGxhdGU/OiBBdXRvc2NhbGluZ0dyb3VwTGF1bmNoVGVtcGxhdGU7XG4gIC8qKlxuICAqIG1peGVkX2luc3RhbmNlc19wb2xpY3kgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI21peGVkX2luc3RhbmNlc19wb2xpY3kgQXV0b3NjYWxpbmdHcm91cCNtaXhlZF9pbnN0YW5jZXNfcG9saWN5fVxuICAqL1xuICByZWFkb25seSBtaXhlZEluc3RhbmNlc1BvbGljeT86IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeTtcbiAgLyoqXG4gICogdGFnIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCN0YWcgQXV0b3NjYWxpbmdHcm91cCN0YWd9XG4gICovXG4gIHJlYWRvbmx5IHRhZz86IEF1dG9zY2FsaW5nR3JvdXBUYWdbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiB0aW1lb3V0cyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjdGltZW91dHMgQXV0b3NjYWxpbmdHcm91cCN0aW1lb3V0c31cbiAgKi9cbiAgcmVhZG9ubHkgdGltZW91dHM/OiBBdXRvc2NhbGluZ0dyb3VwVGltZW91dHM7XG4gIC8qKlxuICAqIHdhcm1fcG9vbCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjd2FybV9wb29sIEF1dG9zY2FsaW5nR3JvdXAjd2FybV9wb29sfVxuICAqL1xuICByZWFkb25seSB3YXJtUG9vbD86IEF1dG9zY2FsaW5nR3JvdXBXYXJtUG9vbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cEluaXRpYWxMaWZlY3ljbGVIb29rIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjZGVmYXVsdF9yZXN1bHQgQXV0b3NjYWxpbmdHcm91cCNkZWZhdWx0X3Jlc3VsdH1cbiAgKi9cbiAgcmVhZG9ubHkgZGVmYXVsdFJlc3VsdD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjaGVhcnRiZWF0X3RpbWVvdXQgQXV0b3NjYWxpbmdHcm91cCNoZWFydGJlYXRfdGltZW91dH1cbiAgKi9cbiAgcmVhZG9ubHkgaGVhcnRiZWF0VGltZW91dD86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjbGlmZWN5Y2xlX3RyYW5zaXRpb24gQXV0b3NjYWxpbmdHcm91cCNsaWZlY3ljbGVfdHJhbnNpdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgbGlmZWN5Y2xlVHJhbnNpdGlvbjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCNuYW1lIEF1dG9zY2FsaW5nR3JvdXAjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCNub3RpZmljYXRpb25fbWV0YWRhdGEgQXV0b3NjYWxpbmdHcm91cCNub3RpZmljYXRpb25fbWV0YWRhdGF9XG4gICovXG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvbk1ldGFkYXRhPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCNub3RpZmljYXRpb25fdGFyZ2V0X2FybiBBdXRvc2NhbGluZ0dyb3VwI25vdGlmaWNhdGlvbl90YXJnZXRfYXJufVxuICAqL1xuICByZWFkb25seSBub3RpZmljYXRpb25UYXJnZXRBcm4/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI3JvbGVfYXJuIEF1dG9zY2FsaW5nR3JvdXAjcm9sZV9hcm59XG4gICovXG4gIHJlYWRvbmx5IHJvbGVBcm4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ0dyb3VwSW5pdGlhbExpZmVjeWNsZUhvb2tUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ0dyb3VwSW5pdGlhbExpZmVjeWNsZUhvb2sgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0X3Jlc3VsdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWZhdWx0UmVzdWx0KSxcbiAgICBoZWFydGJlYXRfdGltZW91dDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5oZWFydGJlYXRUaW1lb3V0KSxcbiAgICBsaWZlY3ljbGVfdHJhbnNpdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5saWZlY3ljbGVUcmFuc2l0aW9uKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIG5vdGlmaWNhdGlvbl9tZXRhZGF0YTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ub3RpZmljYXRpb25NZXRhZGF0YSksXG4gICAgbm90aWZpY2F0aW9uX3RhcmdldF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubm90aWZpY2F0aW9uVGFyZ2V0QXJuKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ0dyb3VwSW5pdGlhbExpZmVjeWNsZUhvb2tUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ0dyb3VwSW5pdGlhbExpZmVjeWNsZUhvb2sgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZGVmYXVsdF9yZXN1bHQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRSZXN1bHQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGhlYXJ0YmVhdF90aW1lb3V0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5oZWFydGJlYXRUaW1lb3V0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBsaWZlY3ljbGVfdHJhbnNpdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubGlmZWN5Y2xlVHJhbnNpdGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbm90aWZpY2F0aW9uX21ldGFkYXRhOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ub3RpZmljYXRpb25NZXRhZGF0YSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbm90aWZpY2F0aW9uX3RhcmdldF9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm5vdGlmaWNhdGlvblRhcmdldEFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcm9sZV9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdHcm91cEluaXRpYWxMaWZlY3ljbGVIb29rT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEF1dG9zY2FsaW5nR3JvdXBJbml0aWFsTGlmZWN5Y2xlSG9vayB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGVmYXVsdFJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWZhdWx0UmVzdWx0ID0gdGhpcy5fZGVmYXVsdFJlc3VsdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hlYXJ0YmVhdFRpbWVvdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaGVhcnRiZWF0VGltZW91dCA9IHRoaXMuX2hlYXJ0YmVhdFRpbWVvdXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9saWZlY3ljbGVUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxpZmVjeWNsZVRyYW5zaXRpb24gPSB0aGlzLl9saWZlY3ljbGVUcmFuc2l0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uYW1lID0gdGhpcy5fbmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25vdGlmaWNhdGlvbk1ldGFkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5vdGlmaWNhdGlvbk1ldGFkYXRhID0gdGhpcy5fbm90aWZpY2F0aW9uTWV0YWRhdGE7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ub3RpZmljYXRpb25UYXJnZXRBcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubm90aWZpY2F0aW9uVGFyZ2V0QXJuID0gdGhpcy5fbm90aWZpY2F0aW9uVGFyZ2V0QXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcm9sZUFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yb2xlQXJuID0gdGhpcy5fcm9sZUFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBJbml0aWFsTGlmZWN5Y2xlSG9vayB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWZhdWx0UmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faGVhcnRiZWF0VGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xpZmVjeWNsZVRyYW5zaXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbm90aWZpY2F0aW9uTWV0YWRhdGEgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25UYXJnZXRBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yb2xlQXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RlZmF1bHRSZXN1bHQgPSB2YWx1ZS5kZWZhdWx0UmVzdWx0O1xuICAgICAgdGhpcy5faGVhcnRiZWF0VGltZW91dCA9IHZhbHVlLmhlYXJ0YmVhdFRpbWVvdXQ7XG4gICAgICB0aGlzLl9saWZlY3ljbGVUcmFuc2l0aW9uID0gdmFsdWUubGlmZWN5Y2xlVHJhbnNpdGlvbjtcbiAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZS5uYW1lO1xuICAgICAgdGhpcy5fbm90aWZpY2F0aW9uTWV0YWRhdGEgPSB2YWx1ZS5ub3RpZmljYXRpb25NZXRhZGF0YTtcbiAgICAgIHRoaXMuX25vdGlmaWNhdGlvblRhcmdldEFybiA9IHZhbHVlLm5vdGlmaWNhdGlvblRhcmdldEFybjtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZS5yb2xlQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlZmF1bHRfcmVzdWx0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVmYXVsdFJlc3VsdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFJlc3VsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlZmF1bHRfcmVzdWx0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWZhdWx0UmVzdWx0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0UmVzdWx0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVmYXVsdFJlc3VsdCgpIHtcbiAgICB0aGlzLl9kZWZhdWx0UmVzdWx0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0UmVzdWx0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRSZXN1bHQ7XG4gIH1cblxuICAvLyBoZWFydGJlYXRfdGltZW91dCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9oZWFydGJlYXRUaW1lb3V0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBoZWFydGJlYXRUaW1lb3V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaGVhcnRiZWF0X3RpbWVvdXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhlYXJ0YmVhdFRpbWVvdXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2hlYXJ0YmVhdFRpbWVvdXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIZWFydGJlYXRUaW1lb3V0KCkge1xuICAgIHRoaXMuX2hlYXJ0YmVhdFRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlYXJ0YmVhdFRpbWVvdXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhcnRiZWF0VGltZW91dDtcbiAgfVxuXG4gIC8vIGxpZmVjeWNsZV90cmFuc2l0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2xpZmVjeWNsZVRyYW5zaXRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxpZmVjeWNsZVRyYW5zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsaWZlY3ljbGVfdHJhbnNpdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGlmZWN5Y2xlVHJhbnNpdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGlmZWN5Y2xlVHJhbnNpdGlvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsaWZlY3ljbGVUcmFuc2l0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpZmVjeWNsZVRyYW5zaXRpb247XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIG5vdGlmaWNhdGlvbl9tZXRhZGF0YSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ub3RpZmljYXRpb25NZXRhZGF0YT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbm90aWZpY2F0aW9uTWV0YWRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdub3RpZmljYXRpb25fbWV0YWRhdGEnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5vdGlmaWNhdGlvbk1ldGFkYXRhKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25NZXRhZGF0YSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5vdGlmaWNhdGlvbk1ldGFkYXRhKCkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbk1ldGFkYXRhID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBub3RpZmljYXRpb25NZXRhZGF0YUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25NZXRhZGF0YTtcbiAgfVxuXG4gIC8vIG5vdGlmaWNhdGlvbl90YXJnZXRfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vdGlmaWNhdGlvblRhcmdldEFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbm90aWZpY2F0aW9uVGFyZ2V0QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbm90aWZpY2F0aW9uX3RhcmdldF9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5vdGlmaWNhdGlvblRhcmdldEFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uVGFyZ2V0QXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Tm90aWZpY2F0aW9uVGFyZ2V0QXJuKCkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvblRhcmdldEFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbm90aWZpY2F0aW9uVGFyZ2V0QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvblRhcmdldEFybjtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJvbGVBcm4oKSB7XG4gICAgdGhpcy5fcm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb2xlQXJuO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ0dyb3VwSW5pdGlhbExpZmVjeWNsZUhvb2tMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBBdXRvc2NhbGluZ0dyb3VwSW5pdGlhbExpZmVjeWNsZUhvb2tbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogQXV0b3NjYWxpbmdHcm91cEluaXRpYWxMaWZlY3ljbGVIb29rT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IEF1dG9zY2FsaW5nR3JvdXBJbml0aWFsTGlmZWN5Y2xlSG9va091dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2hQcmVmZXJlbmNlcyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI2NoZWNrcG9pbnRfZGVsYXkgQXV0b3NjYWxpbmdHcm91cCNjaGVja3BvaW50X2RlbGF5fVxuICAqL1xuICByZWFkb25seSBjaGVja3BvaW50RGVsYXk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI2NoZWNrcG9pbnRfcGVyY2VudGFnZXMgQXV0b3NjYWxpbmdHcm91cCNjaGVja3BvaW50X3BlcmNlbnRhZ2VzfVxuICAqL1xuICByZWFkb25seSBjaGVja3BvaW50UGVyY2VudGFnZXM/OiBudW1iZXJbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjaW5zdGFuY2Vfd2FybXVwIEF1dG9zY2FsaW5nR3JvdXAjaW5zdGFuY2Vfd2FybXVwfVxuICAqL1xuICByZWFkb25seSBpbnN0YW5jZVdhcm11cD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjbWluX2hlYWx0aHlfcGVyY2VudGFnZSBBdXRvc2NhbGluZ0dyb3VwI21pbl9oZWFsdGh5X3BlcmNlbnRhZ2V9XG4gICovXG4gIHJlYWRvbmx5IG1pbkhlYWx0aHlQZXJjZW50YWdlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFByZWZlcmVuY2VzVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFByZWZlcmVuY2VzT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFByZWZlcmVuY2VzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNoZWNrcG9pbnRfZGVsYXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2hlY2twb2ludERlbGF5KSxcbiAgICBjaGVja3BvaW50X3BlcmNlbnRhZ2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLm51bWJlclRvVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5jaGVja3BvaW50UGVyY2VudGFnZXMpLFxuICAgIGluc3RhbmNlX3dhcm11cDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVdhcm11cCksXG4gICAgbWluX2hlYWx0aHlfcGVyY2VudGFnZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5IZWFsdGh5UGVyY2VudGFnZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFByZWZlcmVuY2VzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFByZWZlcmVuY2VzT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFByZWZlcmVuY2VzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjaGVja3BvaW50X2RlbGF5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jaGVja3BvaW50RGVsYXkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNoZWNrcG9pbnRfcGVyY2VudGFnZXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5jaGVja3BvaW50UGVyY2VudGFnZXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyTGlzdFwiLFxuICAgIH0sXG4gICAgaW5zdGFuY2Vfd2FybXVwOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVdhcm11cCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbWluX2hlYWx0aHlfcGVyY2VudGFnZToge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEubWluSGVhbHRoeVBlcmNlbnRhZ2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFByZWZlcmVuY2VzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ0dyb3VwSW5zdGFuY2VSZWZyZXNoUHJlZmVyZW5jZXMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NoZWNrcG9pbnREZWxheSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jaGVja3BvaW50RGVsYXkgPSB0aGlzLl9jaGVja3BvaW50RGVsYXk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jaGVja3BvaW50UGVyY2VudGFnZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2hlY2twb2ludFBlcmNlbnRhZ2VzID0gdGhpcy5fY2hlY2twb2ludFBlcmNlbnRhZ2VzO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5zdGFuY2VXYXJtdXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VXYXJtdXAgPSB0aGlzLl9pbnN0YW5jZVdhcm11cDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21pbkhlYWx0aHlQZXJjZW50YWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1pbkhlYWx0aHlQZXJjZW50YWdlID0gdGhpcy5fbWluSGVhbHRoeVBlcmNlbnRhZ2U7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwSW5zdGFuY2VSZWZyZXNoUHJlZmVyZW5jZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jaGVja3BvaW50RGVsYXkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jaGVja3BvaW50UGVyY2VudGFnZXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnN0YW5jZVdhcm11cCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21pbkhlYWx0aHlQZXJjZW50YWdlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jaGVja3BvaW50RGVsYXkgPSB2YWx1ZS5jaGVja3BvaW50RGVsYXk7XG4gICAgICB0aGlzLl9jaGVja3BvaW50UGVyY2VudGFnZXMgPSB2YWx1ZS5jaGVja3BvaW50UGVyY2VudGFnZXM7XG4gICAgICB0aGlzLl9pbnN0YW5jZVdhcm11cCA9IHZhbHVlLmluc3RhbmNlV2FybXVwO1xuICAgICAgdGhpcy5fbWluSGVhbHRoeVBlcmNlbnRhZ2UgPSB2YWx1ZS5taW5IZWFsdGh5UGVyY2VudGFnZTtcbiAgICB9XG4gIH1cblxuICAvLyBjaGVja3BvaW50X2RlbGF5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NoZWNrcG9pbnREZWxheT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2hlY2twb2ludERlbGF5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2hlY2twb2ludF9kZWxheScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2hlY2twb2ludERlbGF5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jaGVja3BvaW50RGVsYXkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDaGVja3BvaW50RGVsYXkoKSB7XG4gICAgdGhpcy5fY2hlY2twb2ludERlbGF5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjaGVja3BvaW50RGVsYXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2twb2ludERlbGF5O1xuICB9XG5cbiAgLy8gY2hlY2twb2ludF9wZXJjZW50YWdlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jaGVja3BvaW50UGVyY2VudGFnZXM/OiBudW1iZXJbXTsgXG4gIHB1YmxpYyBnZXQgY2hlY2twb2ludFBlcmNlbnRhZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckxpc3RBdHRyaWJ1dGUoJ2NoZWNrcG9pbnRfcGVyY2VudGFnZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNoZWNrcG9pbnRQZXJjZW50YWdlcyh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICB0aGlzLl9jaGVja3BvaW50UGVyY2VudGFnZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDaGVja3BvaW50UGVyY2VudGFnZXMoKSB7XG4gICAgdGhpcy5fY2hlY2twb2ludFBlcmNlbnRhZ2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjaGVja3BvaW50UGVyY2VudGFnZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2twb2ludFBlcmNlbnRhZ2VzO1xuICB9XG5cbiAgLy8gaW5zdGFuY2Vfd2FybXVwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlV2FybXVwPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVdhcm11cCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3dhcm11cCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VXYXJtdXAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luc3RhbmNlV2FybXVwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VXYXJtdXAoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VXYXJtdXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlV2FybXVwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlV2FybXVwO1xuICB9XG5cbiAgLy8gbWluX2hlYWx0aHlfcGVyY2VudGFnZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9taW5IZWFsdGh5UGVyY2VudGFnZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWluSGVhbHRoeVBlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5faGVhbHRoeV9wZXJjZW50YWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5IZWFsdGh5UGVyY2VudGFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluSGVhbHRoeVBlcmNlbnRhZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNaW5IZWFsdGh5UGVyY2VudGFnZSgpIHtcbiAgICB0aGlzLl9taW5IZWFsdGh5UGVyY2VudGFnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluSGVhbHRoeVBlcmNlbnRhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluSGVhbHRoeVBlcmNlbnRhZ2U7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaCB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI3N0cmF0ZWd5IEF1dG9zY2FsaW5nR3JvdXAjc3RyYXRlZ3l9XG4gICovXG4gIHJlYWRvbmx5IHN0cmF0ZWd5OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI3RyaWdnZXJzIEF1dG9zY2FsaW5nR3JvdXAjdHJpZ2dlcnN9XG4gICovXG4gIHJlYWRvbmx5IHRyaWdnZXJzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIHByZWZlcmVuY2VzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCNwcmVmZXJlbmNlcyBBdXRvc2NhbGluZ0dyb3VwI3ByZWZlcmVuY2VzfVxuICAqL1xuICByZWFkb25seSBwcmVmZXJlbmNlcz86IEF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2hQcmVmZXJlbmNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2hUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ0dyb3VwSW5zdGFuY2VSZWZyZXNoT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzdHJhdGVneTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdHJhdGVneSksXG4gICAgdHJpZ2dlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLnRyaWdnZXJzKSxcbiAgICBwcmVmZXJlbmNlczogYXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFByZWZlcmVuY2VzVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmZXJlbmNlcyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2hPdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ0dyb3VwSW5zdGFuY2VSZWZyZXNoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBzdHJhdGVneToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3RyYXRlZ3kpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHRyaWdnZXJzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEudHJpZ2dlcnMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgICBwcmVmZXJlbmNlczoge1xuICAgICAgdmFsdWU6IGF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2hQcmVmZXJlbmNlc1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucHJlZmVyZW5jZXMpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBdXRvc2NhbGluZ0dyb3VwSW5zdGFuY2VSZWZyZXNoUHJlZmVyZW5jZXNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2hPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2ggfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3N0cmF0ZWd5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0cmF0ZWd5ID0gdGhpcy5fc3RyYXRlZ3k7XG4gICAgfVxuICAgIGlmICh0aGlzLl90cmlnZ2VycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50cmlnZ2VycyA9IHRoaXMuX3RyaWdnZXJzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJlZmVyZW5jZXM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZmVyZW5jZXMgPSB0aGlzLl9wcmVmZXJlbmNlcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2ggfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9zdHJhdGVneSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RyaWdnZXJzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJlZmVyZW5jZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fc3RyYXRlZ3kgPSB2YWx1ZS5zdHJhdGVneTtcbiAgICAgIHRoaXMuX3RyaWdnZXJzID0gdmFsdWUudHJpZ2dlcnM7XG4gICAgICB0aGlzLl9wcmVmZXJlbmNlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUucHJlZmVyZW5jZXM7XG4gICAgfVxuICB9XG5cbiAgLy8gc3RyYXRlZ3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3RyYXRlZ3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RyYXRlZ3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0cmF0ZWd5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdHJhdGVneSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdHJhdGVneUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdHJhdGVneTtcbiAgfVxuXG4gIC8vIHRyaWdnZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RyaWdnZXJzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHRyaWdnZXJzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0cmlnZ2VycycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRyaWdnZXJzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3RyaWdnZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHJpZ2dlcnMoKSB7XG4gICAgdGhpcy5fdHJpZ2dlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRyaWdnZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXJzO1xuICB9XG5cbiAgLy8gcHJlZmVyZW5jZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZmVyZW5jZXMgPSBuZXcgQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFByZWZlcmVuY2VzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwicHJlZmVyZW5jZXNcIik7XG4gIHB1YmxpYyBnZXQgcHJlZmVyZW5jZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZlcmVuY2VzO1xuICB9XG4gIHB1YmxpYyBwdXRQcmVmZXJlbmNlcyh2YWx1ZTogQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFByZWZlcmVuY2VzKSB7XG4gICAgdGhpcy5fcHJlZmVyZW5jZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWZlcmVuY2VzKCkge1xuICAgIHRoaXMuX3ByZWZlcmVuY2VzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWZlcmVuY2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZlcmVuY2VzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cExhdW5jaFRlbXBsYXRlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjaWQgQXV0b3NjYWxpbmdHcm91cCNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjbmFtZSBBdXRvc2NhbGluZ0dyb3VwI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI3ZlcnNpb24gQXV0b3NjYWxpbmdHcm91cCN2ZXJzaW9ufVxuICAqL1xuICByZWFkb25seSB2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cExhdW5jaFRlbXBsYXRlVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cExhdW5jaFRlbXBsYXRlT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdHcm91cExhdW5jaFRlbXBsYXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmVyc2lvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cExhdW5jaFRlbXBsYXRlVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cExhdW5jaFRlbXBsYXRlT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdHcm91cExhdW5jaFRlbXBsYXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBpZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHZlcnNpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnZlcnNpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdHcm91cExhdW5jaFRlbXBsYXRlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ0dyb3VwTGF1bmNoVGVtcGxhdGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2lkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlkID0gdGhpcy5faWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5hbWUgPSB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52ZXJzaW9uID0gdGhpcy5fdmVyc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBMYXVuY2hUZW1wbGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZlcnNpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2lkID0gdmFsdWUuaWQ7XG4gICAgICB0aGlzLl9uYW1lID0gdmFsdWUubmFtZTtcbiAgICAgIHRoaXMuX3ZlcnNpb24gPSB2YWx1ZS52ZXJzaW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92ZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZlcnNpb24oKSB7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJzaW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUluc3RhbmNlc0Rpc3RyaWJ1dGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI29uX2RlbWFuZF9hbGxvY2F0aW9uX3N0cmF0ZWd5IEF1dG9zY2FsaW5nR3JvdXAjb25fZGVtYW5kX2FsbG9jYXRpb25fc3RyYXRlZ3l9XG4gICovXG4gIHJlYWRvbmx5IG9uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCNvbl9kZW1hbmRfYmFzZV9jYXBhY2l0eSBBdXRvc2NhbGluZ0dyb3VwI29uX2RlbWFuZF9iYXNlX2NhcGFjaXR5fVxuICAqL1xuICByZWFkb25seSBvbkRlbWFuZEJhc2VDYXBhY2l0eT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjb25fZGVtYW5kX3BlcmNlbnRhZ2VfYWJvdmVfYmFzZV9jYXBhY2l0eSBBdXRvc2NhbGluZ0dyb3VwI29uX2RlbWFuZF9wZXJjZW50YWdlX2Fib3ZlX2Jhc2VfY2FwYWNpdHl9XG4gICovXG4gIHJlYWRvbmx5IG9uRGVtYW5kUGVyY2VudGFnZUFib3ZlQmFzZUNhcGFjaXR5PzogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCNzcG90X2FsbG9jYXRpb25fc3RyYXRlZ3kgQXV0b3NjYWxpbmdHcm91cCNzcG90X2FsbG9jYXRpb25fc3RyYXRlZ3l9XG4gICovXG4gIHJlYWRvbmx5IHNwb3RBbGxvY2F0aW9uU3RyYXRlZ3k/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI3Nwb3RfaW5zdGFuY2VfcG9vbHMgQXV0b3NjYWxpbmdHcm91cCNzcG90X2luc3RhbmNlX3Bvb2xzfVxuICAqL1xuICByZWFkb25seSBzcG90SW5zdGFuY2VQb29scz86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjc3BvdF9tYXhfcHJpY2UgQXV0b3NjYWxpbmdHcm91cCNzcG90X21heF9wcmljZX1cbiAgKi9cbiAgcmVhZG9ubHkgc3BvdE1heFByaWNlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5SW5zdGFuY2VzRGlzdHJpYnV0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5SW5zdGFuY2VzRGlzdHJpYnV0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5SW5zdGFuY2VzRGlzdHJpYnV0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG9uX2RlbWFuZF9hbGxvY2F0aW9uX3N0cmF0ZWd5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5KSxcbiAgICBvbl9kZW1hbmRfYmFzZV9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5vbkRlbWFuZEJhc2VDYXBhY2l0eSksXG4gICAgb25fZGVtYW5kX3BlcmNlbnRhZ2VfYWJvdmVfYmFzZV9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5vbkRlbWFuZFBlcmNlbnRhZ2VBYm92ZUJhc2VDYXBhY2l0eSksXG4gICAgc3BvdF9hbGxvY2F0aW9uX3N0cmF0ZWd5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNwb3RBbGxvY2F0aW9uU3RyYXRlZ3kpLFxuICAgIHNwb3RfaW5zdGFuY2VfcG9vbHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc3BvdEluc3RhbmNlUG9vbHMpLFxuICAgIHNwb3RfbWF4X3ByaWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNwb3RNYXhQcmljZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5SW5zdGFuY2VzRGlzdHJpYnV0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5SW5zdGFuY2VzRGlzdHJpYnV0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5SW5zdGFuY2VzRGlzdHJpYnV0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBvbl9kZW1hbmRfYWxsb2NhdGlvbl9zdHJhdGVneToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEub25EZW1hbmRBbGxvY2F0aW9uU3RyYXRlZ3kpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIG9uX2RlbWFuZF9iYXNlX2NhcGFjaXR5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5vbkRlbWFuZEJhc2VDYXBhY2l0eSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgb25fZGVtYW5kX3BlcmNlbnRhZ2VfYWJvdmVfYmFzZV9jYXBhY2l0eToge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEub25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHNwb3RfYWxsb2NhdGlvbl9zdHJhdGVneToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3BvdEFsbG9jYXRpb25TdHJhdGVneSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc3BvdF9pbnN0YW5jZV9wb29sczoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuc3BvdEluc3RhbmNlUG9vbHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHNwb3RfbWF4X3ByaWNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zcG90TWF4UHJpY2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5SW5zdGFuY2VzRGlzdHJpYnV0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lJbnN0YW5jZXNEaXN0cmlidXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX29uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm9uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5ID0gdGhpcy5fb25EZW1hbmRBbGxvY2F0aW9uU3RyYXRlZ3k7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vbkRlbWFuZEJhc2VDYXBhY2l0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vbkRlbWFuZEJhc2VDYXBhY2l0eSA9IHRoaXMuX29uRGVtYW5kQmFzZUNhcGFjaXR5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fb25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHkgPSB0aGlzLl9vbkRlbWFuZFBlcmNlbnRhZ2VBYm92ZUJhc2VDYXBhY2l0eTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Nwb3RBbGxvY2F0aW9uU3RyYXRlZ3kgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3BvdEFsbG9jYXRpb25TdHJhdGVneSA9IHRoaXMuX3Nwb3RBbGxvY2F0aW9uU3RyYXRlZ3k7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zcG90SW5zdGFuY2VQb29scyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zcG90SW5zdGFuY2VQb29scyA9IHRoaXMuX3Nwb3RJbnN0YW5jZVBvb2xzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3BvdE1heFByaWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNwb3RNYXhQcmljZSA9IHRoaXMuX3Nwb3RNYXhQcmljZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUluc3RhbmNlc0Rpc3RyaWJ1dGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX29uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb25EZW1hbmRCYXNlQ2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vbkRlbWFuZFBlcmNlbnRhZ2VBYm92ZUJhc2VDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nwb3RBbGxvY2F0aW9uU3RyYXRlZ3kgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zcG90SW5zdGFuY2VQb29scyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nwb3RNYXhQcmljZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fb25EZW1hbmRBbGxvY2F0aW9uU3RyYXRlZ3kgPSB2YWx1ZS5vbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneTtcbiAgICAgIHRoaXMuX29uRGVtYW5kQmFzZUNhcGFjaXR5ID0gdmFsdWUub25EZW1hbmRCYXNlQ2FwYWNpdHk7XG4gICAgICB0aGlzLl9vbkRlbWFuZFBlcmNlbnRhZ2VBYm92ZUJhc2VDYXBhY2l0eSA9IHZhbHVlLm9uRGVtYW5kUGVyY2VudGFnZUFib3ZlQmFzZUNhcGFjaXR5O1xuICAgICAgdGhpcy5fc3BvdEFsbG9jYXRpb25TdHJhdGVneSA9IHZhbHVlLnNwb3RBbGxvY2F0aW9uU3RyYXRlZ3k7XG4gICAgICB0aGlzLl9zcG90SW5zdGFuY2VQb29scyA9IHZhbHVlLnNwb3RJbnN0YW5jZVBvb2xzO1xuICAgICAgdGhpcy5fc3BvdE1heFByaWNlID0gdmFsdWUuc3BvdE1heFByaWNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG9uX2RlbWFuZF9hbGxvY2F0aW9uX3N0cmF0ZWd5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb25EZW1hbmRBbGxvY2F0aW9uU3RyYXRlZ3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG9uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb25fZGVtYW5kX2FsbG9jYXRpb25fc3RyYXRlZ3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5KCkge1xuICAgIHRoaXMuX29uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneTtcbiAgfVxuXG4gIC8vIG9uX2RlbWFuZF9iYXNlX2NhcGFjaXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb25EZW1hbmRCYXNlQ2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG9uRGVtYW5kQmFzZUNhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnb25fZGVtYW5kX2Jhc2VfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9uRGVtYW5kQmFzZUNhcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vbkRlbWFuZEJhc2VDYXBhY2l0eSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9uRGVtYW5kQmFzZUNhcGFjaXR5KCkge1xuICAgIHRoaXMuX29uRGVtYW5kQmFzZUNhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvbkRlbWFuZEJhc2VDYXBhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vbkRlbWFuZEJhc2VDYXBhY2l0eTtcbiAgfVxuXG4gIC8vIG9uX2RlbWFuZF9wZXJjZW50YWdlX2Fib3ZlX2Jhc2VfY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vbkRlbWFuZFBlcmNlbnRhZ2VBYm92ZUJhc2VDYXBhY2l0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgb25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdvbl9kZW1hbmRfcGVyY2VudGFnZV9hYm92ZV9iYXNlX2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBvbkRlbWFuZFBlcmNlbnRhZ2VBYm92ZUJhc2VDYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fb25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPbkRlbWFuZFBlcmNlbnRhZ2VBYm92ZUJhc2VDYXBhY2l0eSgpIHtcbiAgICB0aGlzLl9vbkRlbWFuZFBlcmNlbnRhZ2VBYm92ZUJhc2VDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHk7XG4gIH1cblxuICAvLyBzcG90X2FsbG9jYXRpb25fc3RyYXRlZ3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zcG90QWxsb2NhdGlvblN0cmF0ZWd5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzcG90QWxsb2NhdGlvblN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3BvdF9hbGxvY2F0aW9uX3N0cmF0ZWd5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzcG90QWxsb2NhdGlvblN0cmF0ZWd5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcG90QWxsb2NhdGlvblN0cmF0ZWd5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3BvdEFsbG9jYXRpb25TdHJhdGVneSgpIHtcbiAgICB0aGlzLl9zcG90QWxsb2NhdGlvblN0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcG90QWxsb2NhdGlvblN0cmF0ZWd5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nwb3RBbGxvY2F0aW9uU3RyYXRlZ3k7XG4gIH1cblxuICAvLyBzcG90X2luc3RhbmNlX3Bvb2xzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3BvdEluc3RhbmNlUG9vbHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHNwb3RJbnN0YW5jZVBvb2xzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc3BvdF9pbnN0YW5jZV9wb29scycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3BvdEluc3RhbmNlUG9vbHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3Nwb3RJbnN0YW5jZVBvb2xzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3BvdEluc3RhbmNlUG9vbHMoKSB7XG4gICAgdGhpcy5fc3BvdEluc3RhbmNlUG9vbHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNwb3RJbnN0YW5jZVBvb2xzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nwb3RJbnN0YW5jZVBvb2xzO1xuICB9XG5cbiAgLy8gc3BvdF9tYXhfcHJpY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3BvdE1heFByaWNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzcG90TWF4UHJpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzcG90X21heF9wcmljZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3BvdE1heFByaWNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcG90TWF4UHJpY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcG90TWF4UHJpY2UoKSB7XG4gICAgdGhpcy5fc3BvdE1heFByaWNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcG90TWF4UHJpY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BvdE1heFByaWNlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjbGF1bmNoX3RlbXBsYXRlX2lkIEF1dG9zY2FsaW5nR3JvdXAjbGF1bmNoX3RlbXBsYXRlX2lkfVxuICAqL1xuICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCNsYXVuY2hfdGVtcGxhdGVfbmFtZSBBdXRvc2NhbGluZ0dyb3VwI2xhdW5jaF90ZW1wbGF0ZV9uYW1lfVxuICAqL1xuICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZU5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI3ZlcnNpb24gQXV0b3NjYWxpbmdHcm91cCN2ZXJzaW9ufVxuICAqL1xuICByZWFkb25seSB2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxhdW5jaF90ZW1wbGF0ZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hUZW1wbGF0ZUlkKSxcbiAgICBsYXVuY2hfdGVtcGxhdGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hUZW1wbGF0ZU5hbWUpLFxuICAgIHZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmVyc2lvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBsYXVuY2hfdGVtcGxhdGVfaWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFRlbXBsYXRlSWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGxhdW5jaF90ZW1wbGF0ZV9uYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hUZW1wbGF0ZU5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHZlcnNpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnZlcnNpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9sYXVuY2hUZW1wbGF0ZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxhdW5jaFRlbXBsYXRlSWQgPSB0aGlzLl9sYXVuY2hUZW1wbGF0ZUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxhdW5jaFRlbXBsYXRlTmFtZSA9IHRoaXMuX2xhdW5jaFRlbXBsYXRlTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmVyc2lvbiA9IHRoaXMuX3ZlcnNpb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlSWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92ZXJzaW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZUlkID0gdmFsdWUubGF1bmNoVGVtcGxhdGVJZDtcbiAgICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlTmFtZSA9IHZhbHVlLmxhdW5jaFRlbXBsYXRlTmFtZTtcbiAgICAgIHRoaXMuX3ZlcnNpb24gPSB2YWx1ZS52ZXJzaW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxhdW5jaF90ZW1wbGF0ZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhdW5jaFRlbXBsYXRlSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXVuY2hfdGVtcGxhdGVfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhdW5jaFRlbXBsYXRlSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXVuY2hUZW1wbGF0ZUlkKCkge1xuICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGVJZDtcbiAgfVxuXG4gIC8vIGxhdW5jaF90ZW1wbGF0ZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGF1bmNoVGVtcGxhdGVOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXVuY2hfdGVtcGxhdGVfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGF1bmNoVGVtcGxhdGVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXVuY2hUZW1wbGF0ZU5hbWUoKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lO1xuICB9XG5cbiAgLy8gdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92ZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZlcnNpb24oKSB7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJzaW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCNsYXVuY2hfdGVtcGxhdGVfaWQgQXV0b3NjYWxpbmdHcm91cCNsYXVuY2hfdGVtcGxhdGVfaWR9XG4gICovXG4gIHJlYWRvbmx5IGxhdW5jaFRlbXBsYXRlSWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI2xhdW5jaF90ZW1wbGF0ZV9uYW1lIEF1dG9zY2FsaW5nR3JvdXAjbGF1bmNoX3RlbXBsYXRlX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IGxhdW5jaFRlbXBsYXRlTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjdmVyc2lvbiBBdXRvc2NhbGluZ0dyb3VwI3ZlcnNpb259XG4gICovXG4gIHJlYWRvbmx5IHZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdmVycmlkZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGF1bmNoX3RlbXBsYXRlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFRlbXBsYXRlSWQpLFxuICAgIGxhdW5jaF90ZW1wbGF0ZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFRlbXBsYXRlTmFtZSksXG4gICAgdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52ZXJzaW9uKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdmVycmlkZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGxhdW5jaF90ZW1wbGF0ZV9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubGF1bmNoVGVtcGxhdGVJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbGF1bmNoX3RlbXBsYXRlX25hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFRlbXBsYXRlTmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdmVyc2lvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudmVyc2lvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9sYXVuY2hUZW1wbGF0ZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxhdW5jaFRlbXBsYXRlSWQgPSB0aGlzLl9sYXVuY2hUZW1wbGF0ZUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxhdW5jaFRlbXBsYXRlTmFtZSA9IHRoaXMuX2xhdW5jaFRlbXBsYXRlTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmVyc2lvbiA9IHRoaXMuX3ZlcnNpb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZlcnNpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlSWQgPSB2YWx1ZS5sYXVuY2hUZW1wbGF0ZUlkO1xuICAgICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lID0gdmFsdWUubGF1bmNoVGVtcGxhdGVOYW1lO1xuICAgICAgdGhpcy5fdmVyc2lvbiA9IHZhbHVlLnZlcnNpb247XG4gICAgfVxuICB9XG5cbiAgLy8gbGF1bmNoX3RlbXBsYXRlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGF1bmNoVGVtcGxhdGVJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhdW5jaF90ZW1wbGF0ZV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGF1bmNoVGVtcGxhdGVJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhdW5jaFRlbXBsYXRlSWQoKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hUZW1wbGF0ZUlkO1xuICB9XG5cbiAgLy8gbGF1bmNoX3RlbXBsYXRlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYXVuY2hUZW1wbGF0ZU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhdW5jaF90ZW1wbGF0ZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYXVuY2hUZW1wbGF0ZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhdW5jaFRlbXBsYXRlTmFtZSgpIHtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZU5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hUZW1wbGF0ZU5hbWU7XG4gIH1cblxuICAvLyB2ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZlcnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCB2ZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92ZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmVyc2lvbigpIHtcbiAgICB0aGlzLl92ZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2ZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnNpb247XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdmVycmlkZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI2luc3RhbmNlX3R5cGUgQXV0b3NjYWxpbmdHcm91cCNpbnN0YW5jZV90eXBlfVxuICAqL1xuICByZWFkb25seSBpbnN0YW5jZVR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI3dlaWdodGVkX2NhcGFjaXR5IEF1dG9zY2FsaW5nR3JvdXAjd2VpZ2h0ZWRfY2FwYWNpdHl9XG4gICovXG4gIHJlYWRvbmx5IHdlaWdodGVkQ2FwYWNpdHk/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGxhdW5jaF90ZW1wbGF0ZV9zcGVjaWZpY2F0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCNsYXVuY2hfdGVtcGxhdGVfc3BlY2lmaWNhdGlvbiBBdXRvc2NhbGluZ0dyb3VwI2xhdW5jaF90ZW1wbGF0ZV9zcGVjaWZpY2F0aW9ufVxuICAqL1xuICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24/OiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdmVycmlkZVRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGUgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVHlwZSksXG4gICAgd2VpZ2h0ZWRfY2FwYWNpdHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0ZWRDYXBhY2l0eSksXG4gICAgbGF1bmNoX3RlbXBsYXRlX3NwZWNpZmljYXRpb246IGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdmVycmlkZVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGUgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgaW5zdGFuY2VfdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB3ZWlnaHRlZF9jYXBhY2l0eToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0ZWRDYXBhY2l0eSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbGF1bmNoX3RlbXBsYXRlX3NwZWNpZmljYXRpb246IHtcbiAgICAgIHZhbHVlOiBhdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGUgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnN0YW5jZVR5cGUgPSB0aGlzLl9pbnN0YW5jZVR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl93ZWlnaHRlZENhcGFjaXR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LndlaWdodGVkQ2FwYWNpdHkgPSB0aGlzLl93ZWlnaHRlZENhcGFjaXR5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbiA9IHRoaXMuX2xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGUgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fd2VpZ2h0ZWRDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHZhbHVlLmluc3RhbmNlVHlwZTtcbiAgICAgIHRoaXMuX3dlaWdodGVkQ2FwYWNpdHkgPSB2YWx1ZS53ZWlnaHRlZENhcGFjaXR5O1xuICAgICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gaW5zdGFuY2VfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VUeXBlKCkge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlVHlwZTtcbiAgfVxuXG4gIC8vIHdlaWdodGVkX2NhcGFjaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3dlaWdodGVkQ2FwYWNpdHk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHdlaWdodGVkQ2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3ZWlnaHRlZF9jYXBhY2l0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgd2VpZ2h0ZWRDYXBhY2l0eSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fd2VpZ2h0ZWRDYXBhY2l0eSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFdlaWdodGVkQ2FwYWNpdHkoKSB7XG4gICAgdGhpcy5fd2VpZ2h0ZWRDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2VpZ2h0ZWRDYXBhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl93ZWlnaHRlZENhcGFjaXR5O1xuICB9XG5cbiAgLy8gbGF1bmNoX3RlbXBsYXRlX3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uID0gbmV3IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJsYXVuY2hfdGVtcGxhdGVfc3BlY2lmaWNhdGlvblwiKTtcbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0TGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24oKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdmVycmlkZUxpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGVbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdmVycmlkZU91dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGUge1xuICAvKipcbiAgKiBsYXVuY2hfdGVtcGxhdGVfc3BlY2lmaWNhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjbGF1bmNoX3RlbXBsYXRlX3NwZWNpZmljYXRpb24gQXV0b3NjYWxpbmdHcm91cCNsYXVuY2hfdGVtcGxhdGVfc3BlY2lmaWNhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uOiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbjtcbiAgLyoqXG4gICogb3ZlcnJpZGUgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI292ZXJyaWRlIEF1dG9zY2FsaW5nR3JvdXAjb3ZlcnJpZGV9XG4gICovXG4gIHJlYWRvbmx5IG92ZXJyaWRlPzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdmVycmlkZVtdIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZVRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGF1bmNoX3RlbXBsYXRlX3NwZWNpZmljYXRpb246IGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24pLFxuICAgIG92ZXJyaWRlOiBjZGt0Zi5saXN0TWFwcGVyKGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGVUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5vdmVycmlkZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBsYXVuY2hfdGVtcGxhdGVfc3BlY2lmaWNhdGlvbjoge1xuICAgICAgdmFsdWU6IGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbkxpc3RcIixcbiAgICB9LFxuICAgIG92ZXJyaWRlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChhdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlVG9IY2xUZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEub3ZlcnJpZGUpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24gPSB0aGlzLl9sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vdmVycmlkZT8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vdmVycmlkZSA9IHRoaXMuX292ZXJyaWRlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX292ZXJyaWRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUubGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uO1xuICAgICAgdGhpcy5fb3ZlcnJpZGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLm92ZXJyaWRlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxhdW5jaF90ZW1wbGF0ZV9zcGVjaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbiA9IG5ldyBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImxhdW5jaF90ZW1wbGF0ZV9zcGVjaWZpY2F0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24odmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3ZlcnJpZGUgPSBuZXcgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdmVycmlkZUxpc3QodGhpcywgXCJvdmVycmlkZVwiLCBmYWxzZSk7XG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJyaWRlO1xuICB9XG4gIHB1YmxpYyBwdXRPdmVycmlkZSh2YWx1ZTogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdmVycmlkZVtdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9vdmVycmlkZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3ZlcnJpZGUoKSB7XG4gICAgdGhpcy5fb3ZlcnJpZGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcnJpZGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3kge1xuICAvKipcbiAgKiBpbnN0YW5jZXNfZGlzdHJpYnV0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCNpbnN0YW5jZXNfZGlzdHJpYnV0aW9uIEF1dG9zY2FsaW5nR3JvdXAjaW5zdGFuY2VzX2Rpc3RyaWJ1dGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgaW5zdGFuY2VzRGlzdHJpYnV0aW9uPzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5SW5zdGFuY2VzRGlzdHJpYnV0aW9uO1xuICAvKipcbiAgKiBsYXVuY2hfdGVtcGxhdGUgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI2xhdW5jaF90ZW1wbGF0ZSBBdXRvc2NhbGluZ0dyb3VwI2xhdW5jaF90ZW1wbGF0ZX1cbiAgKi9cbiAgcmVhZG9ubHkgbGF1bmNoVGVtcGxhdGU6IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5VG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5T3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGluc3RhbmNlc19kaXN0cmlidXRpb246IGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUluc3RhbmNlc0Rpc3RyaWJ1dGlvblRvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VzRGlzdHJpYnV0aW9uKSxcbiAgICBsYXVuY2hfdGVtcGxhdGU6IGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlVG9UZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hUZW1wbGF0ZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5VG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5T3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBpbnN0YW5jZXNfZGlzdHJpYnV0aW9uOiB7XG4gICAgICB2YWx1ZTogYXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5SW5zdGFuY2VzRGlzdHJpYnV0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZXNEaXN0cmlidXRpb24pLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lJbnN0YW5jZXNEaXN0cmlidXRpb25MaXN0XCIsXG4gICAgfSxcbiAgICBsYXVuY2hfdGVtcGxhdGU6IHtcbiAgICAgIHZhbHVlOiBhdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZVRvSGNsVGVycmFmb3JtKHN0cnVjdCEubGF1bmNoVGVtcGxhdGUpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZUxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3kgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlc0Rpc3RyaWJ1dGlvbj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnN0YW5jZXNEaXN0cmlidXRpb24gPSB0aGlzLl9pbnN0YW5jZXNEaXN0cmlidXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sYXVuY2hUZW1wbGF0ZT8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sYXVuY2hUZW1wbGF0ZSA9IHRoaXMuX2xhdW5jaFRlbXBsYXRlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faW5zdGFuY2VzRGlzdHJpYnV0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pbnN0YW5jZXNEaXN0cmlidXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmluc3RhbmNlc0Rpc3RyaWJ1dGlvbjtcbiAgICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5sYXVuY2hUZW1wbGF0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBpbnN0YW5jZXNfZGlzdHJpYnV0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlc0Rpc3RyaWJ1dGlvbiA9IG5ldyBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lJbnN0YW5jZXNEaXN0cmlidXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcywgXCJpbnN0YW5jZXNfZGlzdHJpYnV0aW9uXCIpO1xuICBwdWJsaWMgZ2V0IGluc3RhbmNlc0Rpc3RyaWJ1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VzRGlzdHJpYnV0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRJbnN0YW5jZXNEaXN0cmlidXRpb24odmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUluc3RhbmNlc0Rpc3RyaWJ1dGlvbikge1xuICAgIHRoaXMuX2luc3RhbmNlc0Rpc3RyaWJ1dGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VzRGlzdHJpYnV0aW9uKCkge1xuICAgIHRoaXMuX2luc3RhbmNlc0Rpc3RyaWJ1dGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZXNEaXN0cmlidXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VzRGlzdHJpYnV0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBsYXVuY2hfdGVtcGxhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbGF1bmNoVGVtcGxhdGUgPSBuZXcgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJsYXVuY2hfdGVtcGxhdGVcIik7XG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaFRlbXBsYXRlO1xuICB9XG4gIHB1YmxpYyBwdXRMYXVuY2hUZW1wbGF0ZSh2YWx1ZTogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGUpIHtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaFRlbXBsYXRlLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cFRhZyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI2tleSBBdXRvc2NhbGluZ0dyb3VwI2tleX1cbiAgKi9cbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwI3Byb3BhZ2F0ZV9hdF9sYXVuY2ggQXV0b3NjYWxpbmdHcm91cCNwcm9wYWdhdGVfYXRfbGF1bmNofVxuICAqL1xuICByZWFkb25seSBwcm9wYWdhdGVBdExhdW5jaDogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCN2YWx1ZSBBdXRvc2NhbGluZ0dyb3VwI3ZhbHVlfVxuICAqL1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cFRhZ1RvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nR3JvdXBUYWcgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICBwcm9wYWdhdGVfYXRfbGF1bmNoOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9wYWdhdGVBdExhdW5jaCksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nR3JvdXBUYWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ0dyb3VwVGFnIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGtleToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwcm9wYWdhdGVfYXRfbGF1bmNoOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEucHJvcGFnYXRlQXRMYXVuY2gpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdHcm91cFRhZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ0dyb3VwVGFnIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9rZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua2V5ID0gdGhpcy5fa2V5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvcGFnYXRlQXRMYXVuY2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvcGFnYXRlQXRMYXVuY2ggPSB0aGlzLl9wcm9wYWdhdGVBdExhdW5jaDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwVGFnIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2tleSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Byb3BhZ2F0ZUF0TGF1bmNoID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2V5ID0gdmFsdWUua2V5O1xuICAgICAgdGhpcy5fcHJvcGFnYXRlQXRMYXVuY2ggPSB2YWx1ZS5wcm9wYWdhdGVBdExhdW5jaDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2tleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBrZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2tleSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5O1xuICB9XG5cbiAgLy8gcHJvcGFnYXRlX2F0X2xhdW5jaCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcm9wYWdhdGVBdExhdW5jaD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcHJvcGFnYXRlQXRMYXVuY2goKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncHJvcGFnYXRlX2F0X2xhdW5jaCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvcGFnYXRlQXRMYXVuY2godmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3Byb3BhZ2F0ZUF0TGF1bmNoID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3BhZ2F0ZUF0TGF1bmNoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3BhZ2F0ZUF0TGF1bmNoO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdHcm91cFRhZ0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IEF1dG9zY2FsaW5nR3JvdXBUYWdbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogQXV0b3NjYWxpbmdHcm91cFRhZ091dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBBdXRvc2NhbGluZ0dyb3VwVGFnT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cFRpbWVvdXRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjZGVsZXRlIEF1dG9zY2FsaW5nR3JvdXAjZGVsZXRlfVxuICAqL1xuICByZWFkb25seSBkZWxldGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ0dyb3VwVGltZW91dHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ0dyb3VwVGltZW91dHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZWxldGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVsZXRlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ0dyb3VwVGltZW91dHNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ0dyb3VwVGltZW91dHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZGVsZXRlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kZWxldGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdHcm91cFRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ0dyb3VwVGltZW91dHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RlbGV0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWxldGUgPSB0aGlzLl9kZWxldGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwVGltZW91dHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHZhbHVlLmRlbGV0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBkZWxldGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVsZXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWxldGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlbGV0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsZXRlKCkge1xuICAgIHRoaXMuX2RlbGV0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsZXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ0dyb3VwV2FybVBvb2wge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCNtYXhfZ3JvdXBfcHJlcGFyZWRfY2FwYWNpdHkgQXV0b3NjYWxpbmdHcm91cCNtYXhfZ3JvdXBfcHJlcGFyZWRfY2FwYWNpdHl9XG4gICovXG4gIHJlYWRvbmx5IG1heEdyb3VwUHJlcGFyZWRDYXBhY2l0eT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjbWluX3NpemUgQXV0b3NjYWxpbmdHcm91cCNtaW5fc2l6ZX1cbiAgKi9cbiAgcmVhZG9ubHkgbWluU2l6ZT86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvYXV0b3NjYWxpbmdfZ3JvdXAjcG9vbF9zdGF0ZSBBdXRvc2NhbGluZ0dyb3VwI3Bvb2xfc3RhdGV9XG4gICovXG4gIHJlYWRvbmx5IHBvb2xTdGF0ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nR3JvdXBXYXJtUG9vbFRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nR3JvdXBXYXJtUG9vbE91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5nR3JvdXBXYXJtUG9vbCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfZ3JvdXBfcHJlcGFyZWRfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4R3JvdXBQcmVwYXJlZENhcGFjaXR5KSxcbiAgICBtaW5fc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5TaXplKSxcbiAgICBwb29sX3N0YXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvb2xTdGF0ZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cFdhcm1Qb29sVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cFdhcm1Qb29sT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdHcm91cFdhcm1Qb29sKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBtYXhfZ3JvdXBfcHJlcGFyZWRfY2FwYWNpdHk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1heEdyb3VwUHJlcGFyZWRDYXBhY2l0eSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgbWluX3NpemU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1pblNpemUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHBvb2xfc3RhdGU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnBvb2xTdGF0ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ0dyb3VwV2FybVBvb2xPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEF1dG9zY2FsaW5nR3JvdXBXYXJtUG9vbCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWF4R3JvdXBQcmVwYXJlZENhcGFjaXR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heEdyb3VwUHJlcGFyZWRDYXBhY2l0eSA9IHRoaXMuX21heEdyb3VwUHJlcGFyZWRDYXBhY2l0eTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21pblNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWluU2l6ZSA9IHRoaXMuX21pblNpemU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wb29sU3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9vbFN0YXRlID0gdGhpcy5fcG9vbFN0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdHcm91cFdhcm1Qb29sIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWF4R3JvdXBQcmVwYXJlZENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWluU2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Bvb2xTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWF4R3JvdXBQcmVwYXJlZENhcGFjaXR5ID0gdmFsdWUubWF4R3JvdXBQcmVwYXJlZENhcGFjaXR5O1xuICAgICAgdGhpcy5fbWluU2l6ZSA9IHZhbHVlLm1pblNpemU7XG4gICAgICB0aGlzLl9wb29sU3RhdGUgPSB2YWx1ZS5wb29sU3RhdGU7XG4gICAgfVxuICB9XG5cbiAgLy8gbWF4X2dyb3VwX3ByZXBhcmVkX2NhcGFjaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heEdyb3VwUHJlcGFyZWRDYXBhY2l0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4R3JvdXBQcmVwYXJlZENhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X2dyb3VwX3ByZXBhcmVkX2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhHcm91cFByZXBhcmVkQ2FwYWNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heEdyb3VwUHJlcGFyZWRDYXBhY2l0eSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heEdyb3VwUHJlcGFyZWRDYXBhY2l0eSgpIHtcbiAgICB0aGlzLl9tYXhHcm91cFByZXBhcmVkQ2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heEdyb3VwUHJlcGFyZWRDYXBhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhHcm91cFByZXBhcmVkQ2FwYWNpdHk7XG4gIH1cblxuICAvLyBtaW5fc2l6ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9taW5TaXplPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtaW5TaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1pblNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21pblNpemUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNaW5TaXplKCkge1xuICAgIHRoaXMuX21pblNpemUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1pblNpemVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluU2l6ZTtcbiAgfVxuXG4gIC8vIHBvb2xfc3RhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9vbFN0YXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwb29sU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwb29sX3N0YXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBwb29sU3RhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Bvb2xTdGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBvb2xTdGF0ZSgpIHtcbiAgICB0aGlzLl9wb29sU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvb2xTdGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb29sU3RhdGU7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2F1dG9zY2FsaW5nX2dyb3VwIGF3c19hdXRvc2NhbGluZ19ncm91cH1cbiovXG5leHBvcnQgY2xhc3MgQXV0b3NjYWxpbmdHcm91cCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlID0gXCJhd3NfYXV0b3NjYWxpbmdfZ3JvdXBcIjtcblxuICAvLyA9PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PVxuICAvKipcbiAgKiBHZW5lcmF0ZXMgQ0RLVEYgY29kZSBmb3IgaW1wb3J0aW5nIGEgQXV0b3NjYWxpbmdHcm91cCByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBBdXRvc2NhbGluZ0dyb3VwIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBBdXRvc2NhbGluZ0dyb3VwIHRoYXQgc2hvdWxkIGJlIGltcG9ydGVkLiBSZWZlciB0byB0aGUge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCNpbXBvcnQgaW1wb3J0IHNlY3Rpb259IGluIHRoZSBkb2N1bWVudGF0aW9uIG9mIHRoaXMgcmVzb3VyY2UgZm9yIHRoZSBpZCB0byB1c2VcbiAgKiBAcGFyYW0gcHJvdmlkZXI/IE9wdGlvbmFsIGluc3RhbmNlIG9mIHRoZSBwcm92aWRlciB3aGVyZSB0aGUgQXV0b3NjYWxpbmdHcm91cCB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfYXV0b3NjYWxpbmdfZ3JvdXBcIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9hdXRvc2NhbGluZ19ncm91cCBhd3NfYXV0b3NjYWxpbmdfZ3JvdXB9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIEF1dG9zY2FsaW5nR3JvdXBDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQXV0b3NjYWxpbmdHcm91cENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2F1dG9zY2FsaW5nX2dyb3VwJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cycsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNzYuMScsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbkNvbnN0cmFpbnQ6ICd+PiAzLjAnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGUsXG4gICAgICBwcm92aXNpb25lcnM6IGNvbmZpZy5wcm92aXNpb25lcnMsXG4gICAgICBjb25uZWN0aW9uOiBjb25maWcuY29ubmVjdGlvbixcbiAgICAgIGZvckVhY2g6IGNvbmZpZy5mb3JFYWNoXG4gICAgfSk7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZXMgPSBjb25maWcuYXZhaWxhYmlsaXR5Wm9uZXM7XG4gICAgdGhpcy5fY2FwYWNpdHlSZWJhbGFuY2UgPSBjb25maWcuY2FwYWNpdHlSZWJhbGFuY2U7XG4gICAgdGhpcy5fZGVmYXVsdENvb2xkb3duID0gY29uZmlnLmRlZmF1bHRDb29sZG93bjtcbiAgICB0aGlzLl9kZXNpcmVkQ2FwYWNpdHkgPSBjb25maWcuZGVzaXJlZENhcGFjaXR5O1xuICAgIHRoaXMuX2VuYWJsZWRNZXRyaWNzID0gY29uZmlnLmVuYWJsZWRNZXRyaWNzO1xuICAgIHRoaXMuX2ZvcmNlRGVsZXRlID0gY29uZmlnLmZvcmNlRGVsZXRlO1xuICAgIHRoaXMuX2ZvcmNlRGVsZXRlV2FybVBvb2wgPSBjb25maWcuZm9yY2VEZWxldGVXYXJtUG9vbDtcbiAgICB0aGlzLl9oZWFsdGhDaGVja0dyYWNlUGVyaW9kID0gY29uZmlnLmhlYWx0aENoZWNrR3JhY2VQZXJpb2Q7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tUeXBlID0gY29uZmlnLmhlYWx0aENoZWNrVHlwZTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9sYXVuY2hDb25maWd1cmF0aW9uID0gY29uZmlnLmxhdW5jaENvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VycyA9IGNvbmZpZy5sb2FkQmFsYW5jZXJzO1xuICAgIHRoaXMuX21heEluc3RhbmNlTGlmZXRpbWUgPSBjb25maWcubWF4SW5zdGFuY2VMaWZldGltZTtcbiAgICB0aGlzLl9tYXhTaXplID0gY29uZmlnLm1heFNpemU7XG4gICAgdGhpcy5fbWV0cmljc0dyYW51bGFyaXR5ID0gY29uZmlnLm1ldHJpY3NHcmFudWxhcml0eTtcbiAgICB0aGlzLl9taW5FbGJDYXBhY2l0eSA9IGNvbmZpZy5taW5FbGJDYXBhY2l0eTtcbiAgICB0aGlzLl9taW5TaXplID0gY29uZmlnLm1pblNpemU7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX25hbWVQcmVmaXggPSBjb25maWcubmFtZVByZWZpeDtcbiAgICB0aGlzLl9wbGFjZW1lbnRHcm91cCA9IGNvbmZpZy5wbGFjZW1lbnRHcm91cDtcbiAgICB0aGlzLl9wcm90ZWN0RnJvbVNjYWxlSW4gPSBjb25maWcucHJvdGVjdEZyb21TY2FsZUluO1xuICAgIHRoaXMuX3NlcnZpY2VMaW5rZWRSb2xlQXJuID0gY29uZmlnLnNlcnZpY2VMaW5rZWRSb2xlQXJuO1xuICAgIHRoaXMuX3N1c3BlbmRlZFByb2Nlc3NlcyA9IGNvbmZpZy5zdXNwZW5kZWRQcm9jZXNzZXM7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhcmdldEdyb3VwQXJucyA9IGNvbmZpZy50YXJnZXRHcm91cEFybnM7XG4gICAgdGhpcy5fdGVybWluYXRpb25Qb2xpY2llcyA9IGNvbmZpZy50ZXJtaW5hdGlvblBvbGljaWVzO1xuICAgIHRoaXMuX3ZwY1pvbmVJZGVudGlmaWVyID0gY29uZmlnLnZwY1pvbmVJZGVudGlmaWVyO1xuICAgIHRoaXMuX3dhaXRGb3JDYXBhY2l0eVRpbWVvdXQgPSBjb25maWcud2FpdEZvckNhcGFjaXR5VGltZW91dDtcbiAgICB0aGlzLl93YWl0Rm9yRWxiQ2FwYWNpdHkgPSBjb25maWcud2FpdEZvckVsYkNhcGFjaXR5O1xuICAgIHRoaXMuX2luaXRpYWxMaWZlY3ljbGVIb29rLmludGVybmFsVmFsdWUgPSBjb25maWcuaW5pdGlhbExpZmVjeWNsZUhvb2s7XG4gICAgdGhpcy5faW5zdGFuY2VSZWZyZXNoLmludGVybmFsVmFsdWUgPSBjb25maWcuaW5zdGFuY2VSZWZyZXNoO1xuICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlLmludGVybmFsVmFsdWUgPSBjb25maWcubGF1bmNoVGVtcGxhdGU7XG4gICAgdGhpcy5fbWl4ZWRJbnN0YW5jZXNQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5taXhlZEluc3RhbmNlc1BvbGljeTtcbiAgICB0aGlzLl90YWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy50YWc7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy50aW1lb3V0cztcbiAgICB0aGlzLl93YXJtUG9vbC5pbnRlcm5hbFZhbHVlID0gY29uZmlnLndhcm1Qb29sO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF2YWlsYWJpbGl0eV96b25lcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F2YWlsYWJpbGl0eVpvbmVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGF2YWlsYWJpbGl0eVpvbmVzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhdmFpbGFiaWxpdHlfem9uZXMnKSk7XG4gIH1cbiAgcHVibGljIHNldCBhdmFpbGFiaWxpdHlab25lcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF2YWlsYWJpbGl0eVpvbmVzKCkge1xuICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdmFpbGFiaWxpdHlab25lcztcbiAgfVxuXG4gIC8vIGNhcGFjaXR5X3JlYmFsYW5jZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYXBhY2l0eVJlYmFsYW5jZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgY2FwYWNpdHlSZWJhbGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY2FwYWNpdHlfcmViYWxhbmNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjYXBhY2l0eVJlYmFsYW5jZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY2FwYWNpdHlSZWJhbGFuY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYXBhY2l0eVJlYmFsYW5jZSgpIHtcbiAgICB0aGlzLl9jYXBhY2l0eVJlYmFsYW5jZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2FwYWNpdHlSZWJhbGFuY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FwYWNpdHlSZWJhbGFuY2U7XG4gIH1cblxuICAvLyBkZWZhdWx0X2Nvb2xkb3duIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVmYXVsdENvb2xkb3duPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBkZWZhdWx0Q29vbGRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkZWZhdWx0X2Nvb2xkb3duJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWZhdWx0Q29vbGRvd24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2RlZmF1bHRDb29sZG93biA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRDb29sZG93bigpIHtcbiAgICB0aGlzLl9kZWZhdWx0Q29vbGRvd24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmF1bHRDb29sZG93bklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q29vbGRvd247XG4gIH1cblxuICAvLyBkZXNpcmVkX2NhcGFjaXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzaXJlZENhcGFjaXR5PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBkZXNpcmVkQ2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkZXNpcmVkX2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXNpcmVkQ2FwYWNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2Rlc2lyZWRDYXBhY2l0eSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2lyZWRDYXBhY2l0eSgpIHtcbiAgICB0aGlzLl9kZXNpcmVkQ2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc2lyZWRDYXBhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNpcmVkQ2FwYWNpdHk7XG4gIH1cblxuICAvLyBlbmFibGVkX21ldHJpY3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlZE1ldHJpY3M/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlZE1ldHJpY3MoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2VuYWJsZWRfbWV0cmljcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWRNZXRyaWNzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2VuYWJsZWRNZXRyaWNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlZE1ldHJpY3MoKSB7XG4gICAgdGhpcy5fZW5hYmxlZE1ldHJpY3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRNZXRyaWNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWRNZXRyaWNzO1xuICB9XG5cbiAgLy8gZm9yY2VfZGVsZXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZvcmNlRGVsZXRlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBmb3JjZURlbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdmb3JjZV9kZWxldGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZvcmNlRGVsZXRlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9mb3JjZURlbGV0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZvcmNlRGVsZXRlKCkge1xuICAgIHRoaXMuX2ZvcmNlRGVsZXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmb3JjZURlbGV0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JjZURlbGV0ZTtcbiAgfVxuXG4gIC8vIGZvcmNlX2RlbGV0ZV93YXJtX3Bvb2wgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZm9yY2VEZWxldGVXYXJtUG9vbD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZm9yY2VEZWxldGVXYXJtUG9vbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdmb3JjZV9kZWxldGVfd2FybV9wb29sJyk7XG4gIH1cbiAgcHVibGljIHNldCBmb3JjZURlbGV0ZVdhcm1Qb29sKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9mb3JjZURlbGV0ZVdhcm1Qb29sID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Rm9yY2VEZWxldGVXYXJtUG9vbCgpIHtcbiAgICB0aGlzLl9mb3JjZURlbGV0ZVdhcm1Qb29sID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmb3JjZURlbGV0ZVdhcm1Qb29sSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcmNlRGVsZXRlV2FybVBvb2w7XG4gIH1cblxuICAvLyBoZWFsdGhfY2hlY2tfZ3JhY2VfcGVyaW9kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hlYWx0aENoZWNrR3JhY2VQZXJpb2Q/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGhlYWx0aENoZWNrR3JhY2VQZXJpb2QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdoZWFsdGhfY2hlY2tfZ3JhY2VfcGVyaW9kJyk7XG4gIH1cbiAgcHVibGljIHNldCBoZWFsdGhDaGVja0dyYWNlUGVyaW9kKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9oZWFsdGhDaGVja0dyYWNlUGVyaW9kID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SGVhbHRoQ2hlY2tHcmFjZVBlcmlvZCgpIHtcbiAgICB0aGlzLl9oZWFsdGhDaGVja0dyYWNlUGVyaW9kID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBoZWFsdGhDaGVja0dyYWNlUGVyaW9kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWx0aENoZWNrR3JhY2VQZXJpb2Q7XG4gIH1cblxuICAvLyBoZWFsdGhfY2hlY2tfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hlYWx0aENoZWNrVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaGVhbHRoQ2hlY2tUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaGVhbHRoX2NoZWNrX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhlYWx0aENoZWNrVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SGVhbHRoQ2hlY2tUeXBlKCkge1xuICAgIHRoaXMuX2hlYWx0aENoZWNrVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGVhbHRoQ2hlY2tUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWx0aENoZWNrVHlwZTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkKCkge1xuICAgIHRoaXMuX2lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIC8vIGxhdW5jaF9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhdW5jaENvbmZpZ3VyYXRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxhdW5jaENvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXVuY2hfY29uZmlndXJhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGF1bmNoQ29uZmlndXJhdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGF1bmNoQ29uZmlndXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhdW5jaENvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fbGF1bmNoQ29uZmlndXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGF1bmNoQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgLy8gbG9hZF9iYWxhbmNlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9hZEJhbGFuY2Vycz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBsb2FkQmFsYW5jZXJzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdsb2FkX2JhbGFuY2VycycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvYWRCYWxhbmNlcnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvYWRCYWxhbmNlcnMoKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2Vyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2FkQmFsYW5jZXJzO1xuICB9XG5cbiAgLy8gbWF4X2luc3RhbmNlX2xpZmV0aW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heEluc3RhbmNlTGlmZXRpbWU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heEluc3RhbmNlTGlmZXRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfaW5zdGFuY2VfbGlmZXRpbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heEluc3RhbmNlTGlmZXRpbWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heEluc3RhbmNlTGlmZXRpbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhJbnN0YW5jZUxpZmV0aW1lKCkge1xuICAgIHRoaXMuX21heEluc3RhbmNlTGlmZXRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heEluc3RhbmNlTGlmZXRpbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4SW5zdGFuY2VMaWZldGltZTtcbiAgfVxuXG4gIC8vIG1heF9zaXplIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21heFNpemU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfc2l6ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4U2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4U2l6ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhTaXplSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heFNpemU7XG4gIH1cblxuICAvLyBtZXRyaWNzX2dyYW51bGFyaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldHJpY3NHcmFudWxhcml0eT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWV0cmljc0dyYW51bGFyaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWV0cmljc19ncmFudWxhcml0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0cmljc0dyYW51bGFyaXR5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXRyaWNzR3JhbnVsYXJpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXRyaWNzR3JhbnVsYXJpdHkoKSB7XG4gICAgdGhpcy5fbWV0cmljc0dyYW51bGFyaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRyaWNzR3JhbnVsYXJpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljc0dyYW51bGFyaXR5O1xuICB9XG5cbiAgLy8gbWluX2VsYl9jYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9taW5FbGJDYXBhY2l0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWluRWxiQ2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5fZWxiX2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5FbGJDYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluRWxiQ2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNaW5FbGJDYXBhY2l0eSgpIHtcbiAgICB0aGlzLl9taW5FbGJDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluRWxiQ2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluRWxiQ2FwYWNpdHk7XG4gIH1cblxuICAvLyBtaW5fc2l6ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9taW5TaXplPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtaW5TaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1pblNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21pblNpemUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluU2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9taW5TaXplO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBuYW1lX3ByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWVQcmVmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWVQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lX3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZVByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZVByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWVQcmVmaXgoKSB7XG4gICAgdGhpcy5fbmFtZVByZWZpeCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZVByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lUHJlZml4O1xuICB9XG5cbiAgLy8gcGxhY2VtZW50X2dyb3VwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BsYWNlbWVudEdyb3VwPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwbGFjZW1lbnRHcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BsYWNlbWVudF9ncm91cCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGxhY2VtZW50R3JvdXAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlbWVudEdyb3VwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGxhY2VtZW50R3JvdXAoKSB7XG4gICAgdGhpcy5fcGxhY2VtZW50R3JvdXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBsYWNlbWVudEdyb3VwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudEdyb3VwO1xuICB9XG5cbiAgLy8gcHJvdGVjdF9mcm9tX3NjYWxlX2luIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb3RlY3RGcm9tU2NhbGVJbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcHJvdGVjdEZyb21TY2FsZUluKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3Byb3RlY3RfZnJvbV9zY2FsZV9pbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvdGVjdEZyb21TY2FsZUluKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9wcm90ZWN0RnJvbVNjYWxlSW4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcm90ZWN0RnJvbVNjYWxlSW4oKSB7XG4gICAgdGhpcy5fcHJvdGVjdEZyb21TY2FsZUluID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm90ZWN0RnJvbVNjYWxlSW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvdGVjdEZyb21TY2FsZUluO1xuICB9XG5cbiAgLy8gc2VydmljZV9saW5rZWRfcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJ2aWNlTGlua2VkUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmljZUxpbmtlZFJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX2xpbmtlZF9yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VydmljZUxpbmtlZFJvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcnZpY2VMaW5rZWRSb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VydmljZUxpbmtlZFJvbGVBcm4oKSB7XG4gICAgdGhpcy5fc2VydmljZUxpbmtlZFJvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZpY2VMaW5rZWRSb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZpY2VMaW5rZWRSb2xlQXJuO1xuICB9XG5cbiAgLy8gc3VzcGVuZGVkX3Byb2Nlc3NlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdXNwZW5kZWRQcm9jZXNzZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc3VzcGVuZGVkUHJvY2Vzc2VzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdXNwZW5kZWRfcHJvY2Vzc2VzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VzcGVuZGVkUHJvY2Vzc2VzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3N1c3BlbmRlZFByb2Nlc3NlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1c3BlbmRlZFByb2Nlc3NlcygpIHtcbiAgICB0aGlzLl9zdXNwZW5kZWRQcm9jZXNzZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1c3BlbmRlZFByb2Nlc3Nlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdXNwZW5kZWRQcm9jZXNzZXM7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9W10gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gY2RrdGYuVG9rZW4uYXNBbnkoY2RrdGYuRm4udG9saXN0KHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpKSk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9W10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhcmdldF9ncm91cF9hcm5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhcmdldEdyb3VwQXJucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB0YXJnZXRHcm91cEFybnMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3RhcmdldF9ncm91cF9hcm5zJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFyZ2V0R3JvdXBBcm5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3RhcmdldEdyb3VwQXJucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhcmdldEdyb3VwQXJucygpIHtcbiAgICB0aGlzLl90YXJnZXRHcm91cEFybnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldEdyb3VwQXJuc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRHcm91cEFybnM7XG4gIH1cblxuICAvLyB0ZXJtaW5hdGlvbl9wb2xpY2llcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90ZXJtaW5hdGlvblBvbGljaWVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHRlcm1pbmF0aW9uUG9saWNpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndGVybWluYXRpb25fcG9saWNpZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRlcm1pbmF0aW9uUG9saWNpZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdGVybWluYXRpb25Qb2xpY2llcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRlcm1pbmF0aW9uUG9saWNpZXMoKSB7XG4gICAgdGhpcy5fdGVybWluYXRpb25Qb2xpY2llcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGVybWluYXRpb25Qb2xpY2llc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZXJtaW5hdGlvblBvbGljaWVzO1xuICB9XG5cbiAgLy8gdnBjX3pvbmVfaWRlbnRpZmllciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZwY1pvbmVJZGVudGlmaWVyPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHZwY1pvbmVJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCd2cGNfem9uZV9pZGVudGlmaWVyJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgdnBjWm9uZUlkZW50aWZpZXIodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdnBjWm9uZUlkZW50aWZpZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWcGNab25lSWRlbnRpZmllcigpIHtcbiAgICB0aGlzLl92cGNab25lSWRlbnRpZmllciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdnBjWm9uZUlkZW50aWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjWm9uZUlkZW50aWZpZXI7XG4gIH1cblxuICAvLyB3YWl0X2Zvcl9jYXBhY2l0eV90aW1lb3V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3dhaXRGb3JDYXBhY2l0eVRpbWVvdXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHdhaXRGb3JDYXBhY2l0eVRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3YWl0X2Zvcl9jYXBhY2l0eV90aW1lb3V0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB3YWl0Rm9yQ2FwYWNpdHlUaW1lb3V0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93YWl0Rm9yQ2FwYWNpdHlUaW1lb3V0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2FpdEZvckNhcGFjaXR5VGltZW91dCgpIHtcbiAgICB0aGlzLl93YWl0Rm9yQ2FwYWNpdHlUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3YWl0Rm9yQ2FwYWNpdHlUaW1lb3V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dhaXRGb3JDYXBhY2l0eVRpbWVvdXQ7XG4gIH1cblxuICAvLyB3YWl0X2Zvcl9lbGJfY2FwYWNpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd2FpdEZvckVsYkNhcGFjaXR5PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB3YWl0Rm9yRWxiQ2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd3YWl0X2Zvcl9lbGJfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHdhaXRGb3JFbGJDYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fd2FpdEZvckVsYkNhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2FpdEZvckVsYkNhcGFjaXR5KCkge1xuICAgIHRoaXMuX3dhaXRGb3JFbGJDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2FpdEZvckVsYkNhcGFjaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dhaXRGb3JFbGJDYXBhY2l0eTtcbiAgfVxuXG4gIC8vIGluaXRpYWxfbGlmZWN5Y2xlX2hvb2sgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5pdGlhbExpZmVjeWNsZUhvb2sgPSBuZXcgQXV0b3NjYWxpbmdHcm91cEluaXRpYWxMaWZlY3ljbGVIb29rTGlzdCh0aGlzLCBcImluaXRpYWxfbGlmZWN5Y2xlX2hvb2tcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgaW5pdGlhbExpZmVjeWNsZUhvb2soKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luaXRpYWxMaWZlY3ljbGVIb29rO1xuICB9XG4gIHB1YmxpYyBwdXRJbml0aWFsTGlmZWN5Y2xlSG9vayh2YWx1ZTogQXV0b3NjYWxpbmdHcm91cEluaXRpYWxMaWZlY3ljbGVIb29rW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luaXRpYWxMaWZlY3ljbGVIb29rLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbml0aWFsTGlmZWN5Y2xlSG9vaygpIHtcbiAgICB0aGlzLl9pbml0aWFsTGlmZWN5Y2xlSG9vay5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbml0aWFsTGlmZWN5Y2xlSG9va0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbml0aWFsTGlmZWN5Y2xlSG9vay5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfcmVmcmVzaCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVJlZnJlc2ggPSBuZXcgQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaE91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImluc3RhbmNlX3JlZnJlc2hcIik7XG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VSZWZyZXNoKCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVJlZnJlc2g7XG4gIH1cbiAgcHVibGljIHB1dEluc3RhbmNlUmVmcmVzaCh2YWx1ZTogQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaCkge1xuICAgIHRoaXMuX2luc3RhbmNlUmVmcmVzaC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VSZWZyZXNoKCkge1xuICAgIHRoaXMuX2luc3RhbmNlUmVmcmVzaC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVJlZnJlc2hJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VSZWZyZXNoLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBsYXVuY2hfdGVtcGxhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGF1bmNoVGVtcGxhdGUgPSBuZXcgQXV0b3NjYWxpbmdHcm91cExhdW5jaFRlbXBsYXRlT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwibGF1bmNoX3RlbXBsYXRlXCIpO1xuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hUZW1wbGF0ZTtcbiAgfVxuICBwdWJsaWMgcHV0TGF1bmNoVGVtcGxhdGUodmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBMYXVuY2hUZW1wbGF0ZSkge1xuICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXVuY2hUZW1wbGF0ZSgpIHtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbWl4ZWRfaW5zdGFuY2VzX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9taXhlZEluc3RhbmNlc1BvbGljeSA9IG5ldyBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJtaXhlZF9pbnN0YW5jZXNfcG9saWN5XCIpO1xuICBwdWJsaWMgZ2V0IG1peGVkSW5zdGFuY2VzUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLl9taXhlZEluc3RhbmNlc1BvbGljeTtcbiAgfVxuICBwdWJsaWMgcHV0TWl4ZWRJbnN0YW5jZXNQb2xpY3kodmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeSkge1xuICAgIHRoaXMuX21peGVkSW5zdGFuY2VzUG9saWN5LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNaXhlZEluc3RhbmNlc1BvbGljeSgpIHtcbiAgICB0aGlzLl9taXhlZEluc3RhbmNlc1BvbGljeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtaXhlZEluc3RhbmNlc1BvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9taXhlZEluc3RhbmNlc1BvbGljeS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGFnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZyA9IG5ldyBBdXRvc2NhbGluZ0dyb3VwVGFnTGlzdCh0aGlzLCBcInRhZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0YWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZztcbiAgfVxuICBwdWJsaWMgcHV0VGFnKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwVGFnW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnKCkge1xuICAgIHRoaXMuX3RhZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0aW1lb3V0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lb3V0cyA9IG5ldyBBdXRvc2NhbGluZ0dyb3VwVGltZW91dHNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJ0aW1lb3V0c1wiKTtcbiAgcHVibGljIGdldCB0aW1lb3V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHM7XG4gIH1cbiAgcHVibGljIHB1dFRpbWVvdXRzKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwVGltZW91dHMpIHtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGltZW91dHMoKSB7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHdhcm1fcG9vbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93YXJtUG9vbCA9IG5ldyBBdXRvc2NhbGluZ0dyb3VwV2FybVBvb2xPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJ3YXJtX3Bvb2xcIik7XG4gIHB1YmxpYyBnZXQgd2FybVBvb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dhcm1Qb29sO1xuICB9XG4gIHB1YmxpYyBwdXRXYXJtUG9vbCh2YWx1ZTogQXV0b3NjYWxpbmdHcm91cFdhcm1Qb29sKSB7XG4gICAgdGhpcy5fd2FybVBvb2wuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFdhcm1Qb29sKCkge1xuICAgIHRoaXMuX3dhcm1Qb29sLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdhcm1Qb29sSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dhcm1Qb29sLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF2YWlsYWJpbGl0eV96b25lczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2F2YWlsYWJpbGl0eVpvbmVzKSxcbiAgICAgIGNhcGFjaXR5X3JlYmFsYW5jZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2NhcGFjaXR5UmViYWxhbmNlKSxcbiAgICAgIGRlZmF1bHRfY29vbGRvd246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2RlZmF1bHRDb29sZG93biksXG4gICAgICBkZXNpcmVkX2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9kZXNpcmVkQ2FwYWNpdHkpLFxuICAgICAgZW5hYmxlZF9tZXRyaWNzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fZW5hYmxlZE1ldHJpY3MpLFxuICAgICAgZm9yY2VfZGVsZXRlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZm9yY2VEZWxldGUpLFxuICAgICAgZm9yY2VfZGVsZXRlX3dhcm1fcG9vbDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2ZvcmNlRGVsZXRlV2FybVBvb2wpLFxuICAgICAgaGVhbHRoX2NoZWNrX2dyYWNlX3BlcmlvZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5faGVhbHRoQ2hlY2tHcmFjZVBlcmlvZCksXG4gICAgICBoZWFsdGhfY2hlY2tfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faGVhbHRoQ2hlY2tUeXBlKSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBsYXVuY2hfY29uZmlndXJhdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbGF1bmNoQ29uZmlndXJhdGlvbiksXG4gICAgICBsb2FkX2JhbGFuY2VyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2xvYWRCYWxhbmNlcnMpLFxuICAgICAgbWF4X2luc3RhbmNlX2xpZmV0aW1lOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9tYXhJbnN0YW5jZUxpZmV0aW1lKSxcbiAgICAgIG1heF9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9tYXhTaXplKSxcbiAgICAgIG1ldHJpY3NfZ3JhbnVsYXJpdHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21ldHJpY3NHcmFudWxhcml0eSksXG4gICAgICBtaW5fZWxiX2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9taW5FbGJDYXBhY2l0eSksXG4gICAgICBtaW5fc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWluU2l6ZSksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIG5hbWVfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lUHJlZml4KSxcbiAgICAgIHBsYWNlbWVudF9ncm91cDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGxhY2VtZW50R3JvdXApLFxuICAgICAgcHJvdGVjdF9mcm9tX3NjYWxlX2luOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fcHJvdGVjdEZyb21TY2FsZUluKSxcbiAgICAgIHNlcnZpY2VfbGlua2VkX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zZXJ2aWNlTGlua2VkUm9sZUFybiksXG4gICAgICBzdXNwZW5kZWRfcHJvY2Vzc2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fc3VzcGVuZGVkUHJvY2Vzc2VzKSxcbiAgICAgIHRhZ3M6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSksIGZhbHNlKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhcmdldF9ncm91cF9hcm5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fdGFyZ2V0R3JvdXBBcm5zKSxcbiAgICAgIHRlcm1pbmF0aW9uX3BvbGljaWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fdGVybWluYXRpb25Qb2xpY2llcyksXG4gICAgICB2cGNfem9uZV9pZGVudGlmaWVyOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fdnBjWm9uZUlkZW50aWZpZXIpLFxuICAgICAgd2FpdF9mb3JfY2FwYWNpdHlfdGltZW91dDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fd2FpdEZvckNhcGFjaXR5VGltZW91dCksXG4gICAgICB3YWl0X2Zvcl9lbGJfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3dhaXRGb3JFbGJDYXBhY2l0eSksXG4gICAgICBpbml0aWFsX2xpZmVjeWNsZV9ob29rOiBjZGt0Zi5saXN0TWFwcGVyKGF1dG9zY2FsaW5nR3JvdXBJbml0aWFsTGlmZWN5Y2xlSG9va1RvVGVycmFmb3JtLCB0cnVlKSh0aGlzLl9pbml0aWFsTGlmZWN5Y2xlSG9vay5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGluc3RhbmNlX3JlZnJlc2g6IGF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2hUb1RlcnJhZm9ybSh0aGlzLl9pbnN0YW5jZVJlZnJlc2guaW50ZXJuYWxWYWx1ZSksXG4gICAgICBsYXVuY2hfdGVtcGxhdGU6IGF1dG9zY2FsaW5nR3JvdXBMYXVuY2hUZW1wbGF0ZVRvVGVycmFmb3JtKHRoaXMuX2xhdW5jaFRlbXBsYXRlLmludGVybmFsVmFsdWUpLFxuICAgICAgbWl4ZWRfaW5zdGFuY2VzX3BvbGljeTogYXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5VG9UZXJyYWZvcm0odGhpcy5fbWl4ZWRJbnN0YW5jZXNQb2xpY3kuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0YWc6IGNka3RmLmxpc3RNYXBwZXIoYXV0b3NjYWxpbmdHcm91cFRhZ1RvVGVycmFmb3JtLCB0cnVlKSh0aGlzLl90YWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0aW1lb3V0czogYXV0b3NjYWxpbmdHcm91cFRpbWVvdXRzVG9UZXJyYWZvcm0odGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB3YXJtX3Bvb2w6IGF1dG9zY2FsaW5nR3JvdXBXYXJtUG9vbFRvVGVycmFmb3JtKHRoaXMuX3dhcm1Qb29sLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgYXZhaWxhYmlsaXR5X3pvbmVzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fYXZhaWxhYmlsaXR5Wm9uZXMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgY2FwYWNpdHlfcmViYWxhbmNlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fY2FwYWNpdHlSZWJhbGFuY2UpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgZGVmYXVsdF9jb29sZG93bjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fZGVmYXVsdENvb2xkb3duKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgZGVzaXJlZF9jYXBhY2l0eToge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fZGVzaXJlZENhcGFjaXR5KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgZW5hYmxlZF9tZXRyaWNzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fZW5hYmxlZE1ldHJpY3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgZm9yY2VfZGVsZXRlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fZm9yY2VEZWxldGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgZm9yY2VfZGVsZXRlX3dhcm1fcG9vbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHRoaXMuX2ZvcmNlRGVsZXRlV2FybVBvb2wpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgaGVhbHRoX2NoZWNrX2dyYWNlX3BlcmlvZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5faGVhbHRoQ2hlY2tHcmFjZVBlcmlvZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIGhlYWx0aF9jaGVja190eXBlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9oZWFsdGhDaGVja1R5cGUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBpZDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBsYXVuY2hfY29uZmlndXJhdGlvbjoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fbGF1bmNoQ29uZmlndXJhdGlvbiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGxvYWRfYmFsYW5jZXJzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fbG9hZEJhbGFuY2VycyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBtYXhfaW5zdGFuY2VfbGlmZXRpbWU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX21heEluc3RhbmNlTGlmZXRpbWUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBtYXhfc2l6ZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fbWF4U2l6ZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIG1ldHJpY3NfZ3JhbnVsYXJpdHk6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX21ldHJpY3NHcmFudWxhcml0eSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIG1pbl9lbGJfY2FwYWNpdHk6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX21pbkVsYkNhcGFjaXR5KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgbWluX3NpemU6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHRoaXMuX21pblNpemUpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbmFtZV9wcmVmaXg6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX25hbWVQcmVmaXgpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBwbGFjZW1lbnRfZ3JvdXA6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3BsYWNlbWVudEdyb3VwKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgcHJvdGVjdF9mcm9tX3NjYWxlX2luOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0odGhpcy5fcHJvdGVjdEZyb21TY2FsZUluKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgfSxcbiAgICAgIHNlcnZpY2VfbGlua2VkX3JvbGVfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9zZXJ2aWNlTGlua2VkUm9sZUFybiksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHN1c3BlbmRlZF9wcm9jZXNzZXM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9zdXNwZW5kZWRQcm9jZXNzZXMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgdGFnczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSwgZmFsc2UpKHRoaXMuX3RhZ3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBMaXN0XCIsXG4gICAgICB9LFxuICAgICAgdGFyZ2V0X2dyb3VwX2FybnM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl90YXJnZXRHcm91cEFybnMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgdGVybWluYXRpb25fcG9saWNpZXM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl90ZXJtaW5hdGlvblBvbGljaWVzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICB2cGNfem9uZV9pZGVudGlmaWVyOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fdnBjWm9uZUlkZW50aWZpZXIpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgd2FpdF9mb3JfY2FwYWNpdHlfdGltZW91dDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fd2FpdEZvckNhcGFjaXR5VGltZW91dCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHdhaXRfZm9yX2VsYl9jYXBhY2l0eToge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fd2FpdEZvckVsYkNhcGFjaXR5KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgaW5pdGlhbF9saWZlY3ljbGVfaG9vazoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChhdXRvc2NhbGluZ0dyb3VwSW5pdGlhbExpZmVjeWNsZUhvb2tUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5faW5pdGlhbExpZmVjeWNsZUhvb2suaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXV0b3NjYWxpbmdHcm91cEluaXRpYWxMaWZlY3ljbGVIb29rTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGluc3RhbmNlX3JlZnJlc2g6IHtcbiAgICAgICAgdmFsdWU6IGF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2hUb0hjbFRlcnJhZm9ybSh0aGlzLl9pbnN0YW5jZVJlZnJlc2guaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2hMaXN0XCIsXG4gICAgICB9LFxuICAgICAgbGF1bmNoX3RlbXBsYXRlOiB7XG4gICAgICAgIHZhbHVlOiBhdXRvc2NhbGluZ0dyb3VwTGF1bmNoVGVtcGxhdGVUb0hjbFRlcnJhZm9ybSh0aGlzLl9sYXVuY2hUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQXV0b3NjYWxpbmdHcm91cExhdW5jaFRlbXBsYXRlTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIG1peGVkX2luc3RhbmNlc19wb2xpY3k6IHtcbiAgICAgICAgdmFsdWU6IGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeVRvSGNsVGVycmFmb3JtKHRoaXMuX21peGVkSW5zdGFuY2VzUG9saWN5LmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMaXN0XCIsXG4gICAgICB9LFxuICAgICAgdGFnOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGF1dG9zY2FsaW5nR3JvdXBUYWdUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fdGFnLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkF1dG9zY2FsaW5nR3JvdXBUYWdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgdGltZW91dHM6IHtcbiAgICAgICAgdmFsdWU6IGF1dG9zY2FsaW5nR3JvdXBUaW1lb3V0c1RvSGNsVGVycmFmb3JtKHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcInN0cnVjdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkF1dG9zY2FsaW5nR3JvdXBUaW1lb3V0c1wiLFxuICAgICAgfSxcbiAgICAgIHdhcm1fcG9vbDoge1xuICAgICAgICB2YWx1ZTogYXV0b3NjYWxpbmdHcm91cFdhcm1Qb29sVG9IY2xUZXJyYWZvcm0odGhpcy5fd2FybVBvb2wuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkF1dG9zY2FsaW5nR3JvdXBXYXJtUG9vbExpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==