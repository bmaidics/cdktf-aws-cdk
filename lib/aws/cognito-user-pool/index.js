"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CognitoUserPoolUserPoolAddOnsOutputReference = exports.cognitoUserPoolUserPoolAddOnsToHclTerraform = exports.cognitoUserPoolUserPoolAddOnsToTerraform = exports.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference = exports.cognitoUserPoolSoftwareTokenMfaConfigurationToHclTerraform = exports.cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform = exports.CognitoUserPoolSmsConfigurationOutputReference = exports.cognitoUserPoolSmsConfigurationToHclTerraform = exports.cognitoUserPoolSmsConfigurationToTerraform = exports.CognitoUserPoolSchemaList = exports.CognitoUserPoolSchemaOutputReference = exports.cognitoUserPoolSchemaToHclTerraform = exports.cognitoUserPoolSchemaToTerraform = exports.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference = exports.cognitoUserPoolSchemaStringAttributeConstraintsToHclTerraform = exports.cognitoUserPoolSchemaStringAttributeConstraintsToTerraform = exports.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference = exports.cognitoUserPoolSchemaNumberAttributeConstraintsToHclTerraform = exports.cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform = exports.CognitoUserPoolPasswordPolicyOutputReference = exports.cognitoUserPoolPasswordPolicyToHclTerraform = exports.cognitoUserPoolPasswordPolicyToTerraform = exports.CognitoUserPoolLambdaConfigOutputReference = exports.cognitoUserPoolLambdaConfigToHclTerraform = exports.cognitoUserPoolLambdaConfigToTerraform = exports.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference = exports.cognitoUserPoolLambdaConfigCustomSmsSenderToHclTerraform = exports.cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform = exports.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference = exports.cognitoUserPoolLambdaConfigCustomEmailSenderToHclTerraform = exports.cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform = exports.CognitoUserPoolEmailConfigurationOutputReference = exports.cognitoUserPoolEmailConfigurationToHclTerraform = exports.cognitoUserPoolEmailConfigurationToTerraform = exports.CognitoUserPoolDeviceConfigurationOutputReference = exports.cognitoUserPoolDeviceConfigurationToHclTerraform = exports.cognitoUserPoolDeviceConfigurationToTerraform = exports.CognitoUserPoolAdminCreateUserConfigOutputReference = exports.cognitoUserPoolAdminCreateUserConfigToHclTerraform = exports.cognitoUserPoolAdminCreateUserConfigToTerraform = exports.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference = exports.cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToHclTerraform = exports.cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform = exports.CognitoUserPoolAccountRecoverySettingOutputReference = exports.cognitoUserPoolAccountRecoverySettingToHclTerraform = exports.cognitoUserPoolAccountRecoverySettingToTerraform = exports.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList = exports.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference = exports.cognitoUserPoolAccountRecoverySettingRecoveryMechanismToHclTerraform = exports.cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform = void 0;
exports.CognitoUserPool = exports.CognitoUserPoolVerificationMessageTemplateOutputReference = exports.cognitoUserPoolVerificationMessageTemplateToHclTerraform = exports.cognitoUserPoolVerificationMessageTemplateToTerraform = exports.CognitoUserPoolUsernameConfigurationOutputReference = exports.cognitoUserPoolUsernameConfigurationToHclTerraform = exports.cognitoUserPoolUsernameConfigurationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        priority: cdktf.numberToTerraform(struct.priority),
    };
}
exports.cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform = cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform;
function cognitoUserPoolAccountRecoverySettingRecoveryMechanismToHclTerraform(struct) {
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
        priority: {
            value: cdktf.numberToHclTerraform(struct.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolAccountRecoverySettingRecoveryMechanismToHclTerraform = cognitoUserPoolAccountRecoverySettingRecoveryMechanismToHclTerraform;
class CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference extends cdktf.ComplexObject {
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
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._priority = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._priority = value.priority;
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
}
exports.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference = CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference;
_a = JSII_RTTI_SYMBOL_1;
CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference[_a] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference", version: "0.0.0" };
class CognitoUserPoolAccountRecoverySettingRecoveryMechanismList extends cdktf.ComplexList {
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
        return new CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList = CognitoUserPoolAccountRecoverySettingRecoveryMechanismList;
_b = JSII_RTTI_SYMBOL_1;
CognitoUserPoolAccountRecoverySettingRecoveryMechanismList[_b] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList", version: "0.0.0" };
function cognitoUserPoolAccountRecoverySettingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        recovery_mechanism: cdktf.listMapper(cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform, true)(struct.recoveryMechanism),
    };
}
exports.cognitoUserPoolAccountRecoverySettingToTerraform = cognitoUserPoolAccountRecoverySettingToTerraform;
function cognitoUserPoolAccountRecoverySettingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        recovery_mechanism: {
            value: cdktf.listMapperHcl(cognitoUserPoolAccountRecoverySettingRecoveryMechanismToHclTerraform, true)(struct.recoveryMechanism),
            isBlock: true,
            type: "set",
            storageClassType: "CognitoUserPoolAccountRecoverySettingRecoveryMechanismList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolAccountRecoverySettingToHclTerraform = cognitoUserPoolAccountRecoverySettingToHclTerraform;
class CognitoUserPoolAccountRecoverySettingOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // recovery_mechanism - computed: false, optional: false, required: true
        this._recoveryMechanism = new CognitoUserPoolAccountRecoverySettingRecoveryMechanismList(this, "recovery_mechanism", true);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._recoveryMechanism?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.recoveryMechanism = this._recoveryMechanism?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recoveryMechanism.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recoveryMechanism.internalValue = value.recoveryMechanism;
        }
    }
    get recoveryMechanism() {
        return this._recoveryMechanism;
    }
    putRecoveryMechanism(value) {
        this._recoveryMechanism.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get recoveryMechanismInput() {
        return this._recoveryMechanism.internalValue;
    }
}
exports.CognitoUserPoolAccountRecoverySettingOutputReference = CognitoUserPoolAccountRecoverySettingOutputReference;
_c = JSII_RTTI_SYMBOL_1;
CognitoUserPoolAccountRecoverySettingOutputReference[_c] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference", version: "0.0.0" };
function cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email_message: cdktf.stringToTerraform(struct.emailMessage),
        email_subject: cdktf.stringToTerraform(struct.emailSubject),
        sms_message: cdktf.stringToTerraform(struct.smsMessage),
    };
}
exports.cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform = cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform;
function cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        email_message: {
            value: cdktf.stringToHclTerraform(struct.emailMessage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email_subject: {
            value: cdktf.stringToHclTerraform(struct.emailSubject),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sms_message: {
            value: cdktf.stringToHclTerraform(struct.smsMessage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToHclTerraform = cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToHclTerraform;
class CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference extends cdktf.ComplexObject {
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
        if (this._emailMessage !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailMessage = this._emailMessage;
        }
        if (this._emailSubject !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailSubject = this._emailSubject;
        }
        if (this._smsMessage !== undefined) {
            hasAnyValues = true;
            internalValueResult.smsMessage = this._smsMessage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._emailMessage = undefined;
            this._emailSubject = undefined;
            this._smsMessage = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._emailMessage = value.emailMessage;
            this._emailSubject = value.emailSubject;
            this._smsMessage = value.smsMessage;
        }
    }
    get emailMessage() {
        return this.getStringAttribute('email_message');
    }
    set emailMessage(value) {
        this._emailMessage = value;
    }
    resetEmailMessage() {
        this._emailMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailMessageInput() {
        return this._emailMessage;
    }
    get emailSubject() {
        return this.getStringAttribute('email_subject');
    }
    set emailSubject(value) {
        this._emailSubject = value;
    }
    resetEmailSubject() {
        this._emailSubject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailSubjectInput() {
        return this._emailSubject;
    }
    get smsMessage() {
        return this.getStringAttribute('sms_message');
    }
    set smsMessage(value) {
        this._smsMessage = value;
    }
    resetSmsMessage() {
        this._smsMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get smsMessageInput() {
        return this._smsMessage;
    }
}
exports.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference = CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference;
_d = JSII_RTTI_SYMBOL_1;
CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference[_d] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference", version: "0.0.0" };
function cognitoUserPoolAdminCreateUserConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allow_admin_create_user_only: cdktf.booleanToTerraform(struct.allowAdminCreateUserOnly),
        invite_message_template: cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform(struct.inviteMessageTemplate),
    };
}
exports.cognitoUserPoolAdminCreateUserConfigToTerraform = cognitoUserPoolAdminCreateUserConfigToTerraform;
function cognitoUserPoolAdminCreateUserConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allow_admin_create_user_only: {
            value: cdktf.booleanToHclTerraform(struct.allowAdminCreateUserOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        invite_message_template: {
            value: cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToHclTerraform(struct.inviteMessageTemplate),
            isBlock: true,
            type: "list",
            storageClassType: "CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolAdminCreateUserConfigToHclTerraform = cognitoUserPoolAdminCreateUserConfigToHclTerraform;
class CognitoUserPoolAdminCreateUserConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // invite_message_template - computed: false, optional: true, required: false
        this._inviteMessageTemplate = new CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference(this, "invite_message_template");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allowAdminCreateUserOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowAdminCreateUserOnly = this._allowAdminCreateUserOnly;
        }
        if (this._inviteMessageTemplate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inviteMessageTemplate = this._inviteMessageTemplate?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allowAdminCreateUserOnly = undefined;
            this._inviteMessageTemplate.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allowAdminCreateUserOnly = value.allowAdminCreateUserOnly;
            this._inviteMessageTemplate.internalValue = value.inviteMessageTemplate;
        }
    }
    get allowAdminCreateUserOnly() {
        return this.getBooleanAttribute('allow_admin_create_user_only');
    }
    set allowAdminCreateUserOnly(value) {
        this._allowAdminCreateUserOnly = value;
    }
    resetAllowAdminCreateUserOnly() {
        this._allowAdminCreateUserOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowAdminCreateUserOnlyInput() {
        return this._allowAdminCreateUserOnly;
    }
    get inviteMessageTemplate() {
        return this._inviteMessageTemplate;
    }
    putInviteMessageTemplate(value) {
        this._inviteMessageTemplate.internalValue = value;
    }
    resetInviteMessageTemplate() {
        this._inviteMessageTemplate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inviteMessageTemplateInput() {
        return this._inviteMessageTemplate.internalValue;
    }
}
exports.CognitoUserPoolAdminCreateUserConfigOutputReference = CognitoUserPoolAdminCreateUserConfigOutputReference;
_e = JSII_RTTI_SYMBOL_1;
CognitoUserPoolAdminCreateUserConfigOutputReference[_e] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference", version: "0.0.0" };
function cognitoUserPoolDeviceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        challenge_required_on_new_device: cdktf.booleanToTerraform(struct.challengeRequiredOnNewDevice),
        device_only_remembered_on_user_prompt: cdktf.booleanToTerraform(struct.deviceOnlyRememberedOnUserPrompt),
    };
}
exports.cognitoUserPoolDeviceConfigurationToTerraform = cognitoUserPoolDeviceConfigurationToTerraform;
function cognitoUserPoolDeviceConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        challenge_required_on_new_device: {
            value: cdktf.booleanToHclTerraform(struct.challengeRequiredOnNewDevice),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        device_only_remembered_on_user_prompt: {
            value: cdktf.booleanToHclTerraform(struct.deviceOnlyRememberedOnUserPrompt),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolDeviceConfigurationToHclTerraform = cognitoUserPoolDeviceConfigurationToHclTerraform;
class CognitoUserPoolDeviceConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._challengeRequiredOnNewDevice !== undefined) {
            hasAnyValues = true;
            internalValueResult.challengeRequiredOnNewDevice = this._challengeRequiredOnNewDevice;
        }
        if (this._deviceOnlyRememberedOnUserPrompt !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceOnlyRememberedOnUserPrompt = this._deviceOnlyRememberedOnUserPrompt;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._challengeRequiredOnNewDevice = undefined;
            this._deviceOnlyRememberedOnUserPrompt = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._challengeRequiredOnNewDevice = value.challengeRequiredOnNewDevice;
            this._deviceOnlyRememberedOnUserPrompt = value.deviceOnlyRememberedOnUserPrompt;
        }
    }
    get challengeRequiredOnNewDevice() {
        return this.getBooleanAttribute('challenge_required_on_new_device');
    }
    set challengeRequiredOnNewDevice(value) {
        this._challengeRequiredOnNewDevice = value;
    }
    resetChallengeRequiredOnNewDevice() {
        this._challengeRequiredOnNewDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get challengeRequiredOnNewDeviceInput() {
        return this._challengeRequiredOnNewDevice;
    }
    get deviceOnlyRememberedOnUserPrompt() {
        return this.getBooleanAttribute('device_only_remembered_on_user_prompt');
    }
    set deviceOnlyRememberedOnUserPrompt(value) {
        this._deviceOnlyRememberedOnUserPrompt = value;
    }
    resetDeviceOnlyRememberedOnUserPrompt() {
        this._deviceOnlyRememberedOnUserPrompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceOnlyRememberedOnUserPromptInput() {
        return this._deviceOnlyRememberedOnUserPrompt;
    }
}
exports.CognitoUserPoolDeviceConfigurationOutputReference = CognitoUserPoolDeviceConfigurationOutputReference;
_f = JSII_RTTI_SYMBOL_1;
CognitoUserPoolDeviceConfigurationOutputReference[_f] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference", version: "0.0.0" };
function cognitoUserPoolEmailConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        configuration_set: cdktf.stringToTerraform(struct.configurationSet),
        email_sending_account: cdktf.stringToTerraform(struct.emailSendingAccount),
        from_email_address: cdktf.stringToTerraform(struct.fromEmailAddress),
        reply_to_email_address: cdktf.stringToTerraform(struct.replyToEmailAddress),
        source_arn: cdktf.stringToTerraform(struct.sourceArn),
    };
}
exports.cognitoUserPoolEmailConfigurationToTerraform = cognitoUserPoolEmailConfigurationToTerraform;
function cognitoUserPoolEmailConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        configuration_set: {
            value: cdktf.stringToHclTerraform(struct.configurationSet),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email_sending_account: {
            value: cdktf.stringToHclTerraform(struct.emailSendingAccount),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        from_email_address: {
            value: cdktf.stringToHclTerraform(struct.fromEmailAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        reply_to_email_address: {
            value: cdktf.stringToHclTerraform(struct.replyToEmailAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_arn: {
            value: cdktf.stringToHclTerraform(struct.sourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolEmailConfigurationToHclTerraform = cognitoUserPoolEmailConfigurationToHclTerraform;
class CognitoUserPoolEmailConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._configurationSet !== undefined) {
            hasAnyValues = true;
            internalValueResult.configurationSet = this._configurationSet;
        }
        if (this._emailSendingAccount !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailSendingAccount = this._emailSendingAccount;
        }
        if (this._fromEmailAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromEmailAddress = this._fromEmailAddress;
        }
        if (this._replyToEmailAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.replyToEmailAddress = this._replyToEmailAddress;
        }
        if (this._sourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceArn = this._sourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._configurationSet = undefined;
            this._emailSendingAccount = undefined;
            this._fromEmailAddress = undefined;
            this._replyToEmailAddress = undefined;
            this._sourceArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._configurationSet = value.configurationSet;
            this._emailSendingAccount = value.emailSendingAccount;
            this._fromEmailAddress = value.fromEmailAddress;
            this._replyToEmailAddress = value.replyToEmailAddress;
            this._sourceArn = value.sourceArn;
        }
    }
    get configurationSet() {
        return this.getStringAttribute('configuration_set');
    }
    set configurationSet(value) {
        this._configurationSet = value;
    }
    resetConfigurationSet() {
        this._configurationSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get configurationSetInput() {
        return this._configurationSet;
    }
    get emailSendingAccount() {
        return this.getStringAttribute('email_sending_account');
    }
    set emailSendingAccount(value) {
        this._emailSendingAccount = value;
    }
    resetEmailSendingAccount() {
        this._emailSendingAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailSendingAccountInput() {
        return this._emailSendingAccount;
    }
    get fromEmailAddress() {
        return this.getStringAttribute('from_email_address');
    }
    set fromEmailAddress(value) {
        this._fromEmailAddress = value;
    }
    resetFromEmailAddress() {
        this._fromEmailAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fromEmailAddressInput() {
        return this._fromEmailAddress;
    }
    get replyToEmailAddress() {
        return this.getStringAttribute('reply_to_email_address');
    }
    set replyToEmailAddress(value) {
        this._replyToEmailAddress = value;
    }
    resetReplyToEmailAddress() {
        this._replyToEmailAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get replyToEmailAddressInput() {
        return this._replyToEmailAddress;
    }
    get sourceArn() {
        return this.getStringAttribute('source_arn');
    }
    set sourceArn(value) {
        this._sourceArn = value;
    }
    resetSourceArn() {
        this._sourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceArnInput() {
        return this._sourceArn;
    }
}
exports.CognitoUserPoolEmailConfigurationOutputReference = CognitoUserPoolEmailConfigurationOutputReference;
_g = JSII_RTTI_SYMBOL_1;
CognitoUserPoolEmailConfigurationOutputReference[_g] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference", version: "0.0.0" };
function cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lambda_arn: cdktf.stringToTerraform(struct.lambdaArn),
        lambda_version: cdktf.stringToTerraform(struct.lambdaVersion),
    };
}
exports.cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform = cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform;
function cognitoUserPoolLambdaConfigCustomEmailSenderToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        lambda_arn: {
            value: cdktf.stringToHclTerraform(struct.lambdaArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lambda_version: {
            value: cdktf.stringToHclTerraform(struct.lambdaVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolLambdaConfigCustomEmailSenderToHclTerraform = cognitoUserPoolLambdaConfigCustomEmailSenderToHclTerraform;
class CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference extends cdktf.ComplexObject {
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
        if (this._lambdaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaArn = this._lambdaArn;
        }
        if (this._lambdaVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaVersion = this._lambdaVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._lambdaArn = undefined;
            this._lambdaVersion = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._lambdaArn = value.lambdaArn;
            this._lambdaVersion = value.lambdaVersion;
        }
    }
    get lambdaArn() {
        return this.getStringAttribute('lambda_arn');
    }
    set lambdaArn(value) {
        this._lambdaArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaArnInput() {
        return this._lambdaArn;
    }
    get lambdaVersion() {
        return this.getStringAttribute('lambda_version');
    }
    set lambdaVersion(value) {
        this._lambdaVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaVersionInput() {
        return this._lambdaVersion;
    }
}
exports.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference = CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference;
_h = JSII_RTTI_SYMBOL_1;
CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference[_h] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference", version: "0.0.0" };
function cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lambda_arn: cdktf.stringToTerraform(struct.lambdaArn),
        lambda_version: cdktf.stringToTerraform(struct.lambdaVersion),
    };
}
exports.cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform = cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform;
function cognitoUserPoolLambdaConfigCustomSmsSenderToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        lambda_arn: {
            value: cdktf.stringToHclTerraform(struct.lambdaArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lambda_version: {
            value: cdktf.stringToHclTerraform(struct.lambdaVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolLambdaConfigCustomSmsSenderToHclTerraform = cognitoUserPoolLambdaConfigCustomSmsSenderToHclTerraform;
class CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference extends cdktf.ComplexObject {
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
        if (this._lambdaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaArn = this._lambdaArn;
        }
        if (this._lambdaVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaVersion = this._lambdaVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._lambdaArn = undefined;
            this._lambdaVersion = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._lambdaArn = value.lambdaArn;
            this._lambdaVersion = value.lambdaVersion;
        }
    }
    get lambdaArn() {
        return this.getStringAttribute('lambda_arn');
    }
    set lambdaArn(value) {
        this._lambdaArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaArnInput() {
        return this._lambdaArn;
    }
    get lambdaVersion() {
        return this.getStringAttribute('lambda_version');
    }
    set lambdaVersion(value) {
        this._lambdaVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaVersionInput() {
        return this._lambdaVersion;
    }
}
exports.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference = CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference;
_j = JSII_RTTI_SYMBOL_1;
CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference[_j] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference", version: "0.0.0" };
function cognitoUserPoolLambdaConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create_auth_challenge: cdktf.stringToTerraform(struct.createAuthChallenge),
        custom_message: cdktf.stringToTerraform(struct.customMessage),
        define_auth_challenge: cdktf.stringToTerraform(struct.defineAuthChallenge),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        post_authentication: cdktf.stringToTerraform(struct.postAuthentication),
        post_confirmation: cdktf.stringToTerraform(struct.postConfirmation),
        pre_authentication: cdktf.stringToTerraform(struct.preAuthentication),
        pre_sign_up: cdktf.stringToTerraform(struct.preSignUp),
        pre_token_generation: cdktf.stringToTerraform(struct.preTokenGeneration),
        user_migration: cdktf.stringToTerraform(struct.userMigration),
        verify_auth_challenge_response: cdktf.stringToTerraform(struct.verifyAuthChallengeResponse),
        custom_email_sender: cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform(struct.customEmailSender),
        custom_sms_sender: cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform(struct.customSmsSender),
    };
}
exports.cognitoUserPoolLambdaConfigToTerraform = cognitoUserPoolLambdaConfigToTerraform;
function cognitoUserPoolLambdaConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        create_auth_challenge: {
            value: cdktf.stringToHclTerraform(struct.createAuthChallenge),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_message: {
            value: cdktf.stringToHclTerraform(struct.customMessage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        define_auth_challenge: {
            value: cdktf.stringToHclTerraform(struct.defineAuthChallenge),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key_id: {
            value: cdktf.stringToHclTerraform(struct.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        post_authentication: {
            value: cdktf.stringToHclTerraform(struct.postAuthentication),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        post_confirmation: {
            value: cdktf.stringToHclTerraform(struct.postConfirmation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pre_authentication: {
            value: cdktf.stringToHclTerraform(struct.preAuthentication),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pre_sign_up: {
            value: cdktf.stringToHclTerraform(struct.preSignUp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pre_token_generation: {
            value: cdktf.stringToHclTerraform(struct.preTokenGeneration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_migration: {
            value: cdktf.stringToHclTerraform(struct.userMigration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        verify_auth_challenge_response: {
            value: cdktf.stringToHclTerraform(struct.verifyAuthChallengeResponse),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_email_sender: {
            value: cognitoUserPoolLambdaConfigCustomEmailSenderToHclTerraform(struct.customEmailSender),
            isBlock: true,
            type: "list",
            storageClassType: "CognitoUserPoolLambdaConfigCustomEmailSenderList",
        },
        custom_sms_sender: {
            value: cognitoUserPoolLambdaConfigCustomSmsSenderToHclTerraform(struct.customSmsSender),
            isBlock: true,
            type: "list",
            storageClassType: "CognitoUserPoolLambdaConfigCustomSmsSenderList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolLambdaConfigToHclTerraform = cognitoUserPoolLambdaConfigToHclTerraform;
class CognitoUserPoolLambdaConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // custom_email_sender - computed: false, optional: true, required: false
        this._customEmailSender = new CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference(this, "custom_email_sender");
        // custom_sms_sender - computed: false, optional: true, required: false
        this._customSmsSender = new CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference(this, "custom_sms_sender");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._createAuthChallenge !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAuthChallenge = this._createAuthChallenge;
        }
        if (this._customMessage !== undefined) {
            hasAnyValues = true;
            internalValueResult.customMessage = this._customMessage;
        }
        if (this._defineAuthChallenge !== undefined) {
            hasAnyValues = true;
            internalValueResult.defineAuthChallenge = this._defineAuthChallenge;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._postAuthentication !== undefined) {
            hasAnyValues = true;
            internalValueResult.postAuthentication = this._postAuthentication;
        }
        if (this._postConfirmation !== undefined) {
            hasAnyValues = true;
            internalValueResult.postConfirmation = this._postConfirmation;
        }
        if (this._preAuthentication !== undefined) {
            hasAnyValues = true;
            internalValueResult.preAuthentication = this._preAuthentication;
        }
        if (this._preSignUp !== undefined) {
            hasAnyValues = true;
            internalValueResult.preSignUp = this._preSignUp;
        }
        if (this._preTokenGeneration !== undefined) {
            hasAnyValues = true;
            internalValueResult.preTokenGeneration = this._preTokenGeneration;
        }
        if (this._userMigration !== undefined) {
            hasAnyValues = true;
            internalValueResult.userMigration = this._userMigration;
        }
        if (this._verifyAuthChallengeResponse !== undefined) {
            hasAnyValues = true;
            internalValueResult.verifyAuthChallengeResponse = this._verifyAuthChallengeResponse;
        }
        if (this._customEmailSender?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customEmailSender = this._customEmailSender?.internalValue;
        }
        if (this._customSmsSender?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customSmsSender = this._customSmsSender?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._createAuthChallenge = undefined;
            this._customMessage = undefined;
            this._defineAuthChallenge = undefined;
            this._kmsKeyId = undefined;
            this._postAuthentication = undefined;
            this._postConfirmation = undefined;
            this._preAuthentication = undefined;
            this._preSignUp = undefined;
            this._preTokenGeneration = undefined;
            this._userMigration = undefined;
            this._verifyAuthChallengeResponse = undefined;
            this._customEmailSender.internalValue = undefined;
            this._customSmsSender.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._createAuthChallenge = value.createAuthChallenge;
            this._customMessage = value.customMessage;
            this._defineAuthChallenge = value.defineAuthChallenge;
            this._kmsKeyId = value.kmsKeyId;
            this._postAuthentication = value.postAuthentication;
            this._postConfirmation = value.postConfirmation;
            this._preAuthentication = value.preAuthentication;
            this._preSignUp = value.preSignUp;
            this._preTokenGeneration = value.preTokenGeneration;
            this._userMigration = value.userMigration;
            this._verifyAuthChallengeResponse = value.verifyAuthChallengeResponse;
            this._customEmailSender.internalValue = value.customEmailSender;
            this._customSmsSender.internalValue = value.customSmsSender;
        }
    }
    get createAuthChallenge() {
        return this.getStringAttribute('create_auth_challenge');
    }
    set createAuthChallenge(value) {
        this._createAuthChallenge = value;
    }
    resetCreateAuthChallenge() {
        this._createAuthChallenge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createAuthChallengeInput() {
        return this._createAuthChallenge;
    }
    get customMessage() {
        return this.getStringAttribute('custom_message');
    }
    set customMessage(value) {
        this._customMessage = value;
    }
    resetCustomMessage() {
        this._customMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customMessageInput() {
        return this._customMessage;
    }
    get defineAuthChallenge() {
        return this.getStringAttribute('define_auth_challenge');
    }
    set defineAuthChallenge(value) {
        this._defineAuthChallenge = value;
    }
    resetDefineAuthChallenge() {
        this._defineAuthChallenge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defineAuthChallengeInput() {
        return this._defineAuthChallenge;
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
    get postAuthentication() {
        return this.getStringAttribute('post_authentication');
    }
    set postAuthentication(value) {
        this._postAuthentication = value;
    }
    resetPostAuthentication() {
        this._postAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get postAuthenticationInput() {
        return this._postAuthentication;
    }
    get postConfirmation() {
        return this.getStringAttribute('post_confirmation');
    }
    set postConfirmation(value) {
        this._postConfirmation = value;
    }
    resetPostConfirmation() {
        this._postConfirmation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get postConfirmationInput() {
        return this._postConfirmation;
    }
    get preAuthentication() {
        return this.getStringAttribute('pre_authentication');
    }
    set preAuthentication(value) {
        this._preAuthentication = value;
    }
    resetPreAuthentication() {
        this._preAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preAuthenticationInput() {
        return this._preAuthentication;
    }
    get preSignUp() {
        return this.getStringAttribute('pre_sign_up');
    }
    set preSignUp(value) {
        this._preSignUp = value;
    }
    resetPreSignUp() {
        this._preSignUp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preSignUpInput() {
        return this._preSignUp;
    }
    get preTokenGeneration() {
        return this.getStringAttribute('pre_token_generation');
    }
    set preTokenGeneration(value) {
        this._preTokenGeneration = value;
    }
    resetPreTokenGeneration() {
        this._preTokenGeneration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preTokenGenerationInput() {
        return this._preTokenGeneration;
    }
    get userMigration() {
        return this.getStringAttribute('user_migration');
    }
    set userMigration(value) {
        this._userMigration = value;
    }
    resetUserMigration() {
        this._userMigration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userMigrationInput() {
        return this._userMigration;
    }
    get verifyAuthChallengeResponse() {
        return this.getStringAttribute('verify_auth_challenge_response');
    }
    set verifyAuthChallengeResponse(value) {
        this._verifyAuthChallengeResponse = value;
    }
    resetVerifyAuthChallengeResponse() {
        this._verifyAuthChallengeResponse = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get verifyAuthChallengeResponseInput() {
        return this._verifyAuthChallengeResponse;
    }
    get customEmailSender() {
        return this._customEmailSender;
    }
    putCustomEmailSender(value) {
        this._customEmailSender.internalValue = value;
    }
    resetCustomEmailSender() {
        this._customEmailSender.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customEmailSenderInput() {
        return this._customEmailSender.internalValue;
    }
    get customSmsSender() {
        return this._customSmsSender;
    }
    putCustomSmsSender(value) {
        this._customSmsSender.internalValue = value;
    }
    resetCustomSmsSender() {
        this._customSmsSender.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customSmsSenderInput() {
        return this._customSmsSender.internalValue;
    }
}
exports.CognitoUserPoolLambdaConfigOutputReference = CognitoUserPoolLambdaConfigOutputReference;
_k = JSII_RTTI_SYMBOL_1;
CognitoUserPoolLambdaConfigOutputReference[_k] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference", version: "0.0.0" };
function cognitoUserPoolPasswordPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        minimum_length: cdktf.numberToTerraform(struct.minimumLength),
        require_lowercase: cdktf.booleanToTerraform(struct.requireLowercase),
        require_numbers: cdktf.booleanToTerraform(struct.requireNumbers),
        require_symbols: cdktf.booleanToTerraform(struct.requireSymbols),
        require_uppercase: cdktf.booleanToTerraform(struct.requireUppercase),
        temporary_password_validity_days: cdktf.numberToTerraform(struct.temporaryPasswordValidityDays),
    };
}
exports.cognitoUserPoolPasswordPolicyToTerraform = cognitoUserPoolPasswordPolicyToTerraform;
function cognitoUserPoolPasswordPolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        minimum_length: {
            value: cdktf.numberToHclTerraform(struct.minimumLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        require_lowercase: {
            value: cdktf.booleanToHclTerraform(struct.requireLowercase),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_numbers: {
            value: cdktf.booleanToHclTerraform(struct.requireNumbers),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_symbols: {
            value: cdktf.booleanToHclTerraform(struct.requireSymbols),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_uppercase: {
            value: cdktf.booleanToHclTerraform(struct.requireUppercase),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        temporary_password_validity_days: {
            value: cdktf.numberToHclTerraform(struct.temporaryPasswordValidityDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolPasswordPolicyToHclTerraform = cognitoUserPoolPasswordPolicyToHclTerraform;
class CognitoUserPoolPasswordPolicyOutputReference extends cdktf.ComplexObject {
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
        if (this._minimumLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumLength = this._minimumLength;
        }
        if (this._requireLowercase !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireLowercase = this._requireLowercase;
        }
        if (this._requireNumbers !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireNumbers = this._requireNumbers;
        }
        if (this._requireSymbols !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireSymbols = this._requireSymbols;
        }
        if (this._requireUppercase !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireUppercase = this._requireUppercase;
        }
        if (this._temporaryPasswordValidityDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.temporaryPasswordValidityDays = this._temporaryPasswordValidityDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._minimumLength = undefined;
            this._requireLowercase = undefined;
            this._requireNumbers = undefined;
            this._requireSymbols = undefined;
            this._requireUppercase = undefined;
            this._temporaryPasswordValidityDays = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._minimumLength = value.minimumLength;
            this._requireLowercase = value.requireLowercase;
            this._requireNumbers = value.requireNumbers;
            this._requireSymbols = value.requireSymbols;
            this._requireUppercase = value.requireUppercase;
            this._temporaryPasswordValidityDays = value.temporaryPasswordValidityDays;
        }
    }
    get minimumLength() {
        return this.getNumberAttribute('minimum_length');
    }
    set minimumLength(value) {
        this._minimumLength = value;
    }
    resetMinimumLength() {
        this._minimumLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minimumLengthInput() {
        return this._minimumLength;
    }
    get requireLowercase() {
        return this.getBooleanAttribute('require_lowercase');
    }
    set requireLowercase(value) {
        this._requireLowercase = value;
    }
    resetRequireLowercase() {
        this._requireLowercase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireLowercaseInput() {
        return this._requireLowercase;
    }
    get requireNumbers() {
        return this.getBooleanAttribute('require_numbers');
    }
    set requireNumbers(value) {
        this._requireNumbers = value;
    }
    resetRequireNumbers() {
        this._requireNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireNumbersInput() {
        return this._requireNumbers;
    }
    get requireSymbols() {
        return this.getBooleanAttribute('require_symbols');
    }
    set requireSymbols(value) {
        this._requireSymbols = value;
    }
    resetRequireSymbols() {
        this._requireSymbols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireSymbolsInput() {
        return this._requireSymbols;
    }
    get requireUppercase() {
        return this.getBooleanAttribute('require_uppercase');
    }
    set requireUppercase(value) {
        this._requireUppercase = value;
    }
    resetRequireUppercase() {
        this._requireUppercase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireUppercaseInput() {
        return this._requireUppercase;
    }
    get temporaryPasswordValidityDays() {
        return this.getNumberAttribute('temporary_password_validity_days');
    }
    set temporaryPasswordValidityDays(value) {
        this._temporaryPasswordValidityDays = value;
    }
    resetTemporaryPasswordValidityDays() {
        this._temporaryPasswordValidityDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get temporaryPasswordValidityDaysInput() {
        return this._temporaryPasswordValidityDays;
    }
}
exports.CognitoUserPoolPasswordPolicyOutputReference = CognitoUserPoolPasswordPolicyOutputReference;
_l = JSII_RTTI_SYMBOL_1;
CognitoUserPoolPasswordPolicyOutputReference[_l] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference", version: "0.0.0" };
function cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_value: cdktf.stringToTerraform(struct.maxValue),
        min_value: cdktf.stringToTerraform(struct.minValue),
    };
}
exports.cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform = cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform;
function cognitoUserPoolSchemaNumberAttributeConstraintsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        max_value: {
            value: cdktf.stringToHclTerraform(struct.maxValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        min_value: {
            value: cdktf.stringToHclTerraform(struct.minValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolSchemaNumberAttributeConstraintsToHclTerraform = cognitoUserPoolSchemaNumberAttributeConstraintsToHclTerraform;
class CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference extends cdktf.ComplexObject {
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
        if (this._maxValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxValue = this._maxValue;
        }
        if (this._minValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.minValue = this._minValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxValue = undefined;
            this._minValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxValue = value.maxValue;
            this._minValue = value.minValue;
        }
    }
    get maxValue() {
        return this.getStringAttribute('max_value');
    }
    set maxValue(value) {
        this._maxValue = value;
    }
    resetMaxValue() {
        this._maxValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxValueInput() {
        return this._maxValue;
    }
    get minValue() {
        return this.getStringAttribute('min_value');
    }
    set minValue(value) {
        this._minValue = value;
    }
    resetMinValue() {
        this._minValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minValueInput() {
        return this._minValue;
    }
}
exports.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference = CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference;
_m = JSII_RTTI_SYMBOL_1;
CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference[_m] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference", version: "0.0.0" };
function cognitoUserPoolSchemaStringAttributeConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_length: cdktf.stringToTerraform(struct.maxLength),
        min_length: cdktf.stringToTerraform(struct.minLength),
    };
}
exports.cognitoUserPoolSchemaStringAttributeConstraintsToTerraform = cognitoUserPoolSchemaStringAttributeConstraintsToTerraform;
function cognitoUserPoolSchemaStringAttributeConstraintsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        max_length: {
            value: cdktf.stringToHclTerraform(struct.maxLength),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        min_length: {
            value: cdktf.stringToHclTerraform(struct.minLength),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolSchemaStringAttributeConstraintsToHclTerraform = cognitoUserPoolSchemaStringAttributeConstraintsToHclTerraform;
class CognitoUserPoolSchemaStringAttributeConstraintsOutputReference extends cdktf.ComplexObject {
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
        if (this._maxLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxLength = this._maxLength;
        }
        if (this._minLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.minLength = this._minLength;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxLength = undefined;
            this._minLength = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxLength = value.maxLength;
            this._minLength = value.minLength;
        }
    }
    get maxLength() {
        return this.getStringAttribute('max_length');
    }
    set maxLength(value) {
        this._maxLength = value;
    }
    resetMaxLength() {
        this._maxLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxLengthInput() {
        return this._maxLength;
    }
    get minLength() {
        return this.getStringAttribute('min_length');
    }
    set minLength(value) {
        this._minLength = value;
    }
    resetMinLength() {
        this._minLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minLengthInput() {
        return this._minLength;
    }
}
exports.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference = CognitoUserPoolSchemaStringAttributeConstraintsOutputReference;
_o = JSII_RTTI_SYMBOL_1;
CognitoUserPoolSchemaStringAttributeConstraintsOutputReference[_o] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference", version: "0.0.0" };
function cognitoUserPoolSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        attribute_data_type: cdktf.stringToTerraform(struct.attributeDataType),
        developer_only_attribute: cdktf.booleanToTerraform(struct.developerOnlyAttribute),
        mutable: cdktf.booleanToTerraform(struct.mutable),
        name: cdktf.stringToTerraform(struct.name),
        required: cdktf.booleanToTerraform(struct.required),
        number_attribute_constraints: cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform(struct.numberAttributeConstraints),
        string_attribute_constraints: cognitoUserPoolSchemaStringAttributeConstraintsToTerraform(struct.stringAttributeConstraints),
    };
}
exports.cognitoUserPoolSchemaToTerraform = cognitoUserPoolSchemaToTerraform;
function cognitoUserPoolSchemaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        attribute_data_type: {
            value: cdktf.stringToHclTerraform(struct.attributeDataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        developer_only_attribute: {
            value: cdktf.booleanToHclTerraform(struct.developerOnlyAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        mutable: {
            value: cdktf.booleanToHclTerraform(struct.mutable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        required: {
            value: cdktf.booleanToHclTerraform(struct.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        number_attribute_constraints: {
            value: cognitoUserPoolSchemaNumberAttributeConstraintsToHclTerraform(struct.numberAttributeConstraints),
            isBlock: true,
            type: "list",
            storageClassType: "CognitoUserPoolSchemaNumberAttributeConstraintsList",
        },
        string_attribute_constraints: {
            value: cognitoUserPoolSchemaStringAttributeConstraintsToHclTerraform(struct.stringAttributeConstraints),
            isBlock: true,
            type: "list",
            storageClassType: "CognitoUserPoolSchemaStringAttributeConstraintsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolSchemaToHclTerraform = cognitoUserPoolSchemaToHclTerraform;
class CognitoUserPoolSchemaOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
        this.isEmptyObject = false;
        // number_attribute_constraints - computed: false, optional: true, required: false
        this._numberAttributeConstraints = new CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference(this, "number_attribute_constraints");
        // string_attribute_constraints - computed: false, optional: true, required: false
        this._stringAttributeConstraints = new CognitoUserPoolSchemaStringAttributeConstraintsOutputReference(this, "string_attribute_constraints");
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._attributeDataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributeDataType = this._attributeDataType;
        }
        if (this._developerOnlyAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.developerOnlyAttribute = this._developerOnlyAttribute;
        }
        if (this._mutable !== undefined) {
            hasAnyValues = true;
            internalValueResult.mutable = this._mutable;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        if (this._numberAttributeConstraints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberAttributeConstraints = this._numberAttributeConstraints?.internalValue;
        }
        if (this._stringAttributeConstraints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringAttributeConstraints = this._stringAttributeConstraints?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributeDataType = undefined;
            this._developerOnlyAttribute = undefined;
            this._mutable = undefined;
            this._name = undefined;
            this._required = undefined;
            this._numberAttributeConstraints.internalValue = undefined;
            this._stringAttributeConstraints.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributeDataType = value.attributeDataType;
            this._developerOnlyAttribute = value.developerOnlyAttribute;
            this._mutable = value.mutable;
            this._name = value.name;
            this._required = value.required;
            this._numberAttributeConstraints.internalValue = value.numberAttributeConstraints;
            this._stringAttributeConstraints.internalValue = value.stringAttributeConstraints;
        }
    }
    get attributeDataType() {
        return this.getStringAttribute('attribute_data_type');
    }
    set attributeDataType(value) {
        this._attributeDataType = value;
    }
    // Temporarily expose input value. Use with caution.
    get attributeDataTypeInput() {
        return this._attributeDataType;
    }
    get developerOnlyAttribute() {
        return this.getBooleanAttribute('developer_only_attribute');
    }
    set developerOnlyAttribute(value) {
        this._developerOnlyAttribute = value;
    }
    resetDeveloperOnlyAttribute() {
        this._developerOnlyAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get developerOnlyAttributeInput() {
        return this._developerOnlyAttribute;
    }
    get mutable() {
        return this.getBooleanAttribute('mutable');
    }
    set mutable(value) {
        this._mutable = value;
    }
    resetMutable() {
        this._mutable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mutableInput() {
        return this._mutable;
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
    get required() {
        return this.getBooleanAttribute('required');
    }
    set required(value) {
        this._required = value;
    }
    resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredInput() {
        return this._required;
    }
    get numberAttributeConstraints() {
        return this._numberAttributeConstraints;
    }
    putNumberAttributeConstraints(value) {
        this._numberAttributeConstraints.internalValue = value;
    }
    resetNumberAttributeConstraints() {
        this._numberAttributeConstraints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get numberAttributeConstraintsInput() {
        return this._numberAttributeConstraints.internalValue;
    }
    get stringAttributeConstraints() {
        return this._stringAttributeConstraints;
    }
    putStringAttributeConstraints(value) {
        this._stringAttributeConstraints.internalValue = value;
    }
    resetStringAttributeConstraints() {
        this._stringAttributeConstraints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stringAttributeConstraintsInput() {
        return this._stringAttributeConstraints.internalValue;
    }
}
exports.CognitoUserPoolSchemaOutputReference = CognitoUserPoolSchemaOutputReference;
_p = JSII_RTTI_SYMBOL_1;
CognitoUserPoolSchemaOutputReference[_p] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolSchemaOutputReference", version: "0.0.0" };
class CognitoUserPoolSchemaList extends cdktf.ComplexList {
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
        return new CognitoUserPoolSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.CognitoUserPoolSchemaList = CognitoUserPoolSchemaList;
_q = JSII_RTTI_SYMBOL_1;
CognitoUserPoolSchemaList[_q] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolSchemaList", version: "0.0.0" };
function cognitoUserPoolSmsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        external_id: cdktf.stringToTerraform(struct.externalId),
        sns_caller_arn: cdktf.stringToTerraform(struct.snsCallerArn),
    };
}
exports.cognitoUserPoolSmsConfigurationToTerraform = cognitoUserPoolSmsConfigurationToTerraform;
function cognitoUserPoolSmsConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        external_id: {
            value: cdktf.stringToHclTerraform(struct.externalId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sns_caller_arn: {
            value: cdktf.stringToHclTerraform(struct.snsCallerArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolSmsConfigurationToHclTerraform = cognitoUserPoolSmsConfigurationToHclTerraform;
class CognitoUserPoolSmsConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._externalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalId = this._externalId;
        }
        if (this._snsCallerArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.snsCallerArn = this._snsCallerArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._externalId = undefined;
            this._snsCallerArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._externalId = value.externalId;
            this._snsCallerArn = value.snsCallerArn;
        }
    }
    get externalId() {
        return this.getStringAttribute('external_id');
    }
    set externalId(value) {
        this._externalId = value;
    }
    // Temporarily expose input value. Use with caution.
    get externalIdInput() {
        return this._externalId;
    }
    get snsCallerArn() {
        return this.getStringAttribute('sns_caller_arn');
    }
    set snsCallerArn(value) {
        this._snsCallerArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get snsCallerArnInput() {
        return this._snsCallerArn;
    }
}
exports.CognitoUserPoolSmsConfigurationOutputReference = CognitoUserPoolSmsConfigurationOutputReference;
_r = JSII_RTTI_SYMBOL_1;
CognitoUserPoolSmsConfigurationOutputReference[_r] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference", version: "0.0.0" };
function cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform = cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform;
function cognitoUserPoolSoftwareTokenMfaConfigurationToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolSoftwareTokenMfaConfigurationToHclTerraform = cognitoUserPoolSoftwareTokenMfaConfigurationToHclTerraform;
class CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
        }
    }
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
}
exports.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference = CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference;
_s = JSII_RTTI_SYMBOL_1;
CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference[_s] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference", version: "0.0.0" };
function cognitoUserPoolUserPoolAddOnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        advanced_security_mode: cdktf.stringToTerraform(struct.advancedSecurityMode),
    };
}
exports.cognitoUserPoolUserPoolAddOnsToTerraform = cognitoUserPoolUserPoolAddOnsToTerraform;
function cognitoUserPoolUserPoolAddOnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        advanced_security_mode: {
            value: cdktf.stringToHclTerraform(struct.advancedSecurityMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolUserPoolAddOnsToHclTerraform = cognitoUserPoolUserPoolAddOnsToHclTerraform;
class CognitoUserPoolUserPoolAddOnsOutputReference extends cdktf.ComplexObject {
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
        if (this._advancedSecurityMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.advancedSecurityMode = this._advancedSecurityMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._advancedSecurityMode = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._advancedSecurityMode = value.advancedSecurityMode;
        }
    }
    get advancedSecurityMode() {
        return this.getStringAttribute('advanced_security_mode');
    }
    set advancedSecurityMode(value) {
        this._advancedSecurityMode = value;
    }
    // Temporarily expose input value. Use with caution.
    get advancedSecurityModeInput() {
        return this._advancedSecurityMode;
    }
}
exports.CognitoUserPoolUserPoolAddOnsOutputReference = CognitoUserPoolUserPoolAddOnsOutputReference;
_t = JSII_RTTI_SYMBOL_1;
CognitoUserPoolUserPoolAddOnsOutputReference[_t] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference", version: "0.0.0" };
function cognitoUserPoolUsernameConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        case_sensitive: cdktf.booleanToTerraform(struct.caseSensitive),
    };
}
exports.cognitoUserPoolUsernameConfigurationToTerraform = cognitoUserPoolUsernameConfigurationToTerraform;
function cognitoUserPoolUsernameConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        case_sensitive: {
            value: cdktf.booleanToHclTerraform(struct.caseSensitive),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolUsernameConfigurationToHclTerraform = cognitoUserPoolUsernameConfigurationToHclTerraform;
class CognitoUserPoolUsernameConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._caseSensitive !== undefined) {
            hasAnyValues = true;
            internalValueResult.caseSensitive = this._caseSensitive;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._caseSensitive = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._caseSensitive = value.caseSensitive;
        }
    }
    get caseSensitive() {
        return this.getBooleanAttribute('case_sensitive');
    }
    set caseSensitive(value) {
        this._caseSensitive = value;
    }
    // Temporarily expose input value. Use with caution.
    get caseSensitiveInput() {
        return this._caseSensitive;
    }
}
exports.CognitoUserPoolUsernameConfigurationOutputReference = CognitoUserPoolUsernameConfigurationOutputReference;
_u = JSII_RTTI_SYMBOL_1;
CognitoUserPoolUsernameConfigurationOutputReference[_u] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference", version: "0.0.0" };
function cognitoUserPoolVerificationMessageTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_email_option: cdktf.stringToTerraform(struct.defaultEmailOption),
        email_message: cdktf.stringToTerraform(struct.emailMessage),
        email_message_by_link: cdktf.stringToTerraform(struct.emailMessageByLink),
        email_subject: cdktf.stringToTerraform(struct.emailSubject),
        email_subject_by_link: cdktf.stringToTerraform(struct.emailSubjectByLink),
        sms_message: cdktf.stringToTerraform(struct.smsMessage),
    };
}
exports.cognitoUserPoolVerificationMessageTemplateToTerraform = cognitoUserPoolVerificationMessageTemplateToTerraform;
function cognitoUserPoolVerificationMessageTemplateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        default_email_option: {
            value: cdktf.stringToHclTerraform(struct.defaultEmailOption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email_message: {
            value: cdktf.stringToHclTerraform(struct.emailMessage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email_message_by_link: {
            value: cdktf.stringToHclTerraform(struct.emailMessageByLink),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email_subject: {
            value: cdktf.stringToHclTerraform(struct.emailSubject),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email_subject_by_link: {
            value: cdktf.stringToHclTerraform(struct.emailSubjectByLink),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sms_message: {
            value: cdktf.stringToHclTerraform(struct.smsMessage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.cognitoUserPoolVerificationMessageTemplateToHclTerraform = cognitoUserPoolVerificationMessageTemplateToHclTerraform;
class CognitoUserPoolVerificationMessageTemplateOutputReference extends cdktf.ComplexObject {
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
        if (this._defaultEmailOption !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultEmailOption = this._defaultEmailOption;
        }
        if (this._emailMessage !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailMessage = this._emailMessage;
        }
        if (this._emailMessageByLink !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailMessageByLink = this._emailMessageByLink;
        }
        if (this._emailSubject !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailSubject = this._emailSubject;
        }
        if (this._emailSubjectByLink !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailSubjectByLink = this._emailSubjectByLink;
        }
        if (this._smsMessage !== undefined) {
            hasAnyValues = true;
            internalValueResult.smsMessage = this._smsMessage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._defaultEmailOption = undefined;
            this._emailMessage = undefined;
            this._emailMessageByLink = undefined;
            this._emailSubject = undefined;
            this._emailSubjectByLink = undefined;
            this._smsMessage = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._defaultEmailOption = value.defaultEmailOption;
            this._emailMessage = value.emailMessage;
            this._emailMessageByLink = value.emailMessageByLink;
            this._emailSubject = value.emailSubject;
            this._emailSubjectByLink = value.emailSubjectByLink;
            this._smsMessage = value.smsMessage;
        }
    }
    get defaultEmailOption() {
        return this.getStringAttribute('default_email_option');
    }
    set defaultEmailOption(value) {
        this._defaultEmailOption = value;
    }
    resetDefaultEmailOption() {
        this._defaultEmailOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultEmailOptionInput() {
        return this._defaultEmailOption;
    }
    get emailMessage() {
        return this.getStringAttribute('email_message');
    }
    set emailMessage(value) {
        this._emailMessage = value;
    }
    resetEmailMessage() {
        this._emailMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailMessageInput() {
        return this._emailMessage;
    }
    get emailMessageByLink() {
        return this.getStringAttribute('email_message_by_link');
    }
    set emailMessageByLink(value) {
        this._emailMessageByLink = value;
    }
    resetEmailMessageByLink() {
        this._emailMessageByLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailMessageByLinkInput() {
        return this._emailMessageByLink;
    }
    get emailSubject() {
        return this.getStringAttribute('email_subject');
    }
    set emailSubject(value) {
        this._emailSubject = value;
    }
    resetEmailSubject() {
        this._emailSubject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailSubjectInput() {
        return this._emailSubject;
    }
    get emailSubjectByLink() {
        return this.getStringAttribute('email_subject_by_link');
    }
    set emailSubjectByLink(value) {
        this._emailSubjectByLink = value;
    }
    resetEmailSubjectByLink() {
        this._emailSubjectByLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailSubjectByLinkInput() {
        return this._emailSubjectByLink;
    }
    get smsMessage() {
        return this.getStringAttribute('sms_message');
    }
    set smsMessage(value) {
        this._smsMessage = value;
    }
    resetSmsMessage() {
        this._smsMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get smsMessageInput() {
        return this._smsMessage;
    }
}
exports.CognitoUserPoolVerificationMessageTemplateOutputReference = CognitoUserPoolVerificationMessageTemplateOutputReference;
_v = JSII_RTTI_SYMBOL_1;
CognitoUserPoolVerificationMessageTemplateOutputReference[_v] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool aws_cognito_user_pool}
*/
class CognitoUserPool extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CognitoUserPool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CognitoUserPool to import
    * @param importFromId The id of the existing CognitoUserPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CognitoUserPool to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cognito_user_pool", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool aws_cognito_user_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserPoolConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cognito_user_pool',
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
        // account_recovery_setting - computed: false, optional: true, required: false
        this._accountRecoverySetting = new CognitoUserPoolAccountRecoverySettingOutputReference(this, "account_recovery_setting");
        // admin_create_user_config - computed: false, optional: true, required: false
        this._adminCreateUserConfig = new CognitoUserPoolAdminCreateUserConfigOutputReference(this, "admin_create_user_config");
        // device_configuration - computed: false, optional: true, required: false
        this._deviceConfiguration = new CognitoUserPoolDeviceConfigurationOutputReference(this, "device_configuration");
        // email_configuration - computed: false, optional: true, required: false
        this._emailConfiguration = new CognitoUserPoolEmailConfigurationOutputReference(this, "email_configuration");
        // lambda_config - computed: false, optional: true, required: false
        this._lambdaConfig = new CognitoUserPoolLambdaConfigOutputReference(this, "lambda_config");
        // password_policy - computed: false, optional: true, required: false
        this._passwordPolicy = new CognitoUserPoolPasswordPolicyOutputReference(this, "password_policy");
        // schema - computed: false, optional: true, required: false
        this._schema = new CognitoUserPoolSchemaList(this, "schema", true);
        // sms_configuration - computed: false, optional: true, required: false
        this._smsConfiguration = new CognitoUserPoolSmsConfigurationOutputReference(this, "sms_configuration");
        // software_token_mfa_configuration - computed: false, optional: true, required: false
        this._softwareTokenMfaConfiguration = new CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference(this, "software_token_mfa_configuration");
        // user_pool_add_ons - computed: false, optional: true, required: false
        this._userPoolAddOns = new CognitoUserPoolUserPoolAddOnsOutputReference(this, "user_pool_add_ons");
        // username_configuration - computed: false, optional: true, required: false
        this._usernameConfiguration = new CognitoUserPoolUsernameConfigurationOutputReference(this, "username_configuration");
        // verification_message_template - computed: false, optional: true, required: false
        this._verificationMessageTemplate = new CognitoUserPoolVerificationMessageTemplateOutputReference(this, "verification_message_template");
        this._aliasAttributes = config.aliasAttributes;
        this._autoVerifiedAttributes = config.autoVerifiedAttributes;
        this._emailVerificationMessage = config.emailVerificationMessage;
        this._emailVerificationSubject = config.emailVerificationSubject;
        this._id = config.id;
        this._mfaConfiguration = config.mfaConfiguration;
        this._name = config.name;
        this._smsAuthenticationMessage = config.smsAuthenticationMessage;
        this._smsVerificationMessage = config.smsVerificationMessage;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._usernameAttributes = config.usernameAttributes;
        this._accountRecoverySetting.internalValue = config.accountRecoverySetting;
        this._adminCreateUserConfig.internalValue = config.adminCreateUserConfig;
        this._deviceConfiguration.internalValue = config.deviceConfiguration;
        this._emailConfiguration.internalValue = config.emailConfiguration;
        this._lambdaConfig.internalValue = config.lambdaConfig;
        this._passwordPolicy.internalValue = config.passwordPolicy;
        this._schema.internalValue = config.schema;
        this._smsConfiguration.internalValue = config.smsConfiguration;
        this._softwareTokenMfaConfiguration.internalValue = config.softwareTokenMfaConfiguration;
        this._userPoolAddOns.internalValue = config.userPoolAddOns;
        this._usernameConfiguration.internalValue = config.usernameConfiguration;
        this._verificationMessageTemplate.internalValue = config.verificationMessageTemplate;
    }
    get aliasAttributes() {
        return cdktf.Fn.tolist(this.getListAttribute('alias_attributes'));
    }
    set aliasAttributes(value) {
        this._aliasAttributes = value;
    }
    resetAliasAttributes() {
        this._aliasAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aliasAttributesInput() {
        return this._aliasAttributes;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get autoVerifiedAttributes() {
        return cdktf.Fn.tolist(this.getListAttribute('auto_verified_attributes'));
    }
    set autoVerifiedAttributes(value) {
        this._autoVerifiedAttributes = value;
    }
    resetAutoVerifiedAttributes() {
        this._autoVerifiedAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoVerifiedAttributesInput() {
        return this._autoVerifiedAttributes;
    }
    // creation_date - computed: true, optional: false, required: false
    get creationDate() {
        return this.getStringAttribute('creation_date');
    }
    // custom_domain - computed: true, optional: false, required: false
    get customDomain() {
        return this.getStringAttribute('custom_domain');
    }
    // domain - computed: true, optional: false, required: false
    get domain() {
        return this.getStringAttribute('domain');
    }
    get emailVerificationMessage() {
        return this.getStringAttribute('email_verification_message');
    }
    set emailVerificationMessage(value) {
        this._emailVerificationMessage = value;
    }
    resetEmailVerificationMessage() {
        this._emailVerificationMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailVerificationMessageInput() {
        return this._emailVerificationMessage;
    }
    get emailVerificationSubject() {
        return this.getStringAttribute('email_verification_subject');
    }
    set emailVerificationSubject(value) {
        this._emailVerificationSubject = value;
    }
    resetEmailVerificationSubject() {
        this._emailVerificationSubject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailVerificationSubjectInput() {
        return this._emailVerificationSubject;
    }
    // endpoint - computed: true, optional: false, required: false
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    // estimated_number_of_users - computed: true, optional: false, required: false
    get estimatedNumberOfUsers() {
        return this.getNumberAttribute('estimated_number_of_users');
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
    // last_modified_date - computed: true, optional: false, required: false
    get lastModifiedDate() {
        return this.getStringAttribute('last_modified_date');
    }
    get mfaConfiguration() {
        return this.getStringAttribute('mfa_configuration');
    }
    set mfaConfiguration(value) {
        this._mfaConfiguration = value;
    }
    resetMfaConfiguration() {
        this._mfaConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mfaConfigurationInput() {
        return this._mfaConfiguration;
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
    get smsAuthenticationMessage() {
        return this.getStringAttribute('sms_authentication_message');
    }
    set smsAuthenticationMessage(value) {
        this._smsAuthenticationMessage = value;
    }
    resetSmsAuthenticationMessage() {
        this._smsAuthenticationMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get smsAuthenticationMessageInput() {
        return this._smsAuthenticationMessage;
    }
    get smsVerificationMessage() {
        return this.getStringAttribute('sms_verification_message');
    }
    set smsVerificationMessage(value) {
        this._smsVerificationMessage = value;
    }
    resetSmsVerificationMessage() {
        this._smsVerificationMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get smsVerificationMessageInput() {
        return this._smsVerificationMessage;
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
    get usernameAttributes() {
        return cdktf.Fn.tolist(this.getListAttribute('username_attributes'));
    }
    set usernameAttributes(value) {
        this._usernameAttributes = value;
    }
    resetUsernameAttributes() {
        this._usernameAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usernameAttributesInput() {
        return this._usernameAttributes;
    }
    get accountRecoverySetting() {
        return this._accountRecoverySetting;
    }
    putAccountRecoverySetting(value) {
        this._accountRecoverySetting.internalValue = value;
    }
    resetAccountRecoverySetting() {
        this._accountRecoverySetting.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountRecoverySettingInput() {
        return this._accountRecoverySetting.internalValue;
    }
    get adminCreateUserConfig() {
        return this._adminCreateUserConfig;
    }
    putAdminCreateUserConfig(value) {
        this._adminCreateUserConfig.internalValue = value;
    }
    resetAdminCreateUserConfig() {
        this._adminCreateUserConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get adminCreateUserConfigInput() {
        return this._adminCreateUserConfig.internalValue;
    }
    get deviceConfiguration() {
        return this._deviceConfiguration;
    }
    putDeviceConfiguration(value) {
        this._deviceConfiguration.internalValue = value;
    }
    resetDeviceConfiguration() {
        this._deviceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceConfigurationInput() {
        return this._deviceConfiguration.internalValue;
    }
    get emailConfiguration() {
        return this._emailConfiguration;
    }
    putEmailConfiguration(value) {
        this._emailConfiguration.internalValue = value;
    }
    resetEmailConfiguration() {
        this._emailConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailConfigurationInput() {
        return this._emailConfiguration.internalValue;
    }
    get lambdaConfig() {
        return this._lambdaConfig;
    }
    putLambdaConfig(value) {
        this._lambdaConfig.internalValue = value;
    }
    resetLambdaConfig() {
        this._lambdaConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaConfigInput() {
        return this._lambdaConfig.internalValue;
    }
    get passwordPolicy() {
        return this._passwordPolicy;
    }
    putPasswordPolicy(value) {
        this._passwordPolicy.internalValue = value;
    }
    resetPasswordPolicy() {
        this._passwordPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get passwordPolicyInput() {
        return this._passwordPolicy.internalValue;
    }
    get schema() {
        return this._schema;
    }
    putSchema(value) {
        this._schema.internalValue = value;
    }
    resetSchema() {
        this._schema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get schemaInput() {
        return this._schema.internalValue;
    }
    get smsConfiguration() {
        return this._smsConfiguration;
    }
    putSmsConfiguration(value) {
        this._smsConfiguration.internalValue = value;
    }
    resetSmsConfiguration() {
        this._smsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get smsConfigurationInput() {
        return this._smsConfiguration.internalValue;
    }
    get softwareTokenMfaConfiguration() {
        return this._softwareTokenMfaConfiguration;
    }
    putSoftwareTokenMfaConfiguration(value) {
        this._softwareTokenMfaConfiguration.internalValue = value;
    }
    resetSoftwareTokenMfaConfiguration() {
        this._softwareTokenMfaConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get softwareTokenMfaConfigurationInput() {
        return this._softwareTokenMfaConfiguration.internalValue;
    }
    get userPoolAddOns() {
        return this._userPoolAddOns;
    }
    putUserPoolAddOns(value) {
        this._userPoolAddOns.internalValue = value;
    }
    resetUserPoolAddOns() {
        this._userPoolAddOns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userPoolAddOnsInput() {
        return this._userPoolAddOns.internalValue;
    }
    get usernameConfiguration() {
        return this._usernameConfiguration;
    }
    putUsernameConfiguration(value) {
        this._usernameConfiguration.internalValue = value;
    }
    resetUsernameConfiguration() {
        this._usernameConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usernameConfigurationInput() {
        return this._usernameConfiguration.internalValue;
    }
    get verificationMessageTemplate() {
        return this._verificationMessageTemplate;
    }
    putVerificationMessageTemplate(value) {
        this._verificationMessageTemplate.internalValue = value;
    }
    resetVerificationMessageTemplate() {
        this._verificationMessageTemplate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get verificationMessageTemplateInput() {
        return this._verificationMessageTemplate.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            alias_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aliasAttributes),
            auto_verified_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._autoVerifiedAttributes),
            email_verification_message: cdktf.stringToTerraform(this._emailVerificationMessage),
            email_verification_subject: cdktf.stringToTerraform(this._emailVerificationSubject),
            id: cdktf.stringToTerraform(this._id),
            mfa_configuration: cdktf.stringToTerraform(this._mfaConfiguration),
            name: cdktf.stringToTerraform(this._name),
            sms_authentication_message: cdktf.stringToTerraform(this._smsAuthenticationMessage),
            sms_verification_message: cdktf.stringToTerraform(this._smsVerificationMessage),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            username_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usernameAttributes),
            account_recovery_setting: cognitoUserPoolAccountRecoverySettingToTerraform(this._accountRecoverySetting.internalValue),
            admin_create_user_config: cognitoUserPoolAdminCreateUserConfigToTerraform(this._adminCreateUserConfig.internalValue),
            device_configuration: cognitoUserPoolDeviceConfigurationToTerraform(this._deviceConfiguration.internalValue),
            email_configuration: cognitoUserPoolEmailConfigurationToTerraform(this._emailConfiguration.internalValue),
            lambda_config: cognitoUserPoolLambdaConfigToTerraform(this._lambdaConfig.internalValue),
            password_policy: cognitoUserPoolPasswordPolicyToTerraform(this._passwordPolicy.internalValue),
            schema: cdktf.listMapper(cognitoUserPoolSchemaToTerraform, true)(this._schema.internalValue),
            sms_configuration: cognitoUserPoolSmsConfigurationToTerraform(this._smsConfiguration.internalValue),
            software_token_mfa_configuration: cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform(this._softwareTokenMfaConfiguration.internalValue),
            user_pool_add_ons: cognitoUserPoolUserPoolAddOnsToTerraform(this._userPoolAddOns.internalValue),
            username_configuration: cognitoUserPoolUsernameConfigurationToTerraform(this._usernameConfiguration.internalValue),
            verification_message_template: cognitoUserPoolVerificationMessageTemplateToTerraform(this._verificationMessageTemplate.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            alias_attributes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aliasAttributes),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            auto_verified_attributes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._autoVerifiedAttributes),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            email_verification_message: {
                value: cdktf.stringToHclTerraform(this._emailVerificationMessage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            email_verification_subject: {
                value: cdktf.stringToHclTerraform(this._emailVerificationSubject),
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
            mfa_configuration: {
                value: cdktf.stringToHclTerraform(this._mfaConfiguration),
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
            sms_authentication_message: {
                value: cdktf.stringToHclTerraform(this._smsAuthenticationMessage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sms_verification_message: {
                value: cdktf.stringToHclTerraform(this._smsVerificationMessage),
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
            username_attributes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._usernameAttributes),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            account_recovery_setting: {
                value: cognitoUserPoolAccountRecoverySettingToHclTerraform(this._accountRecoverySetting.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CognitoUserPoolAccountRecoverySettingList",
            },
            admin_create_user_config: {
                value: cognitoUserPoolAdminCreateUserConfigToHclTerraform(this._adminCreateUserConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CognitoUserPoolAdminCreateUserConfigList",
            },
            device_configuration: {
                value: cognitoUserPoolDeviceConfigurationToHclTerraform(this._deviceConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CognitoUserPoolDeviceConfigurationList",
            },
            email_configuration: {
                value: cognitoUserPoolEmailConfigurationToHclTerraform(this._emailConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CognitoUserPoolEmailConfigurationList",
            },
            lambda_config: {
                value: cognitoUserPoolLambdaConfigToHclTerraform(this._lambdaConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CognitoUserPoolLambdaConfigList",
            },
            password_policy: {
                value: cognitoUserPoolPasswordPolicyToHclTerraform(this._passwordPolicy.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CognitoUserPoolPasswordPolicyList",
            },
            schema: {
                value: cdktf.listMapperHcl(cognitoUserPoolSchemaToHclTerraform, true)(this._schema.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CognitoUserPoolSchemaList",
            },
            sms_configuration: {
                value: cognitoUserPoolSmsConfigurationToHclTerraform(this._smsConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CognitoUserPoolSmsConfigurationList",
            },
            software_token_mfa_configuration: {
                value: cognitoUserPoolSoftwareTokenMfaConfigurationToHclTerraform(this._softwareTokenMfaConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CognitoUserPoolSoftwareTokenMfaConfigurationList",
            },
            user_pool_add_ons: {
                value: cognitoUserPoolUserPoolAddOnsToHclTerraform(this._userPoolAddOns.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CognitoUserPoolUserPoolAddOnsList",
            },
            username_configuration: {
                value: cognitoUserPoolUsernameConfigurationToHclTerraform(this._usernameConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CognitoUserPoolUsernameConfigurationList",
            },
            verification_message_template: {
                value: cognitoUserPoolVerificationMessageTemplateToHclTerraform(this._verificationMessageTemplate.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CognitoUserPoolVerificationMessageTemplateList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.CognitoUserPool = CognitoUserPool;
_w = JSII_RTTI_SYMBOL_1;
CognitoUserPool[_w] = { fqn: "@cdktf/aws-cdk.cognitoUserPool.CognitoUserPool", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
CognitoUserPool.tfResourceType = "aws_cognito_user_pool";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2NvZ25pdG8tdXNlci1wb29sL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQVNBLCtCQUErQjtBQTRJL0IsU0FBZ0IsaUVBQWlFLENBQUMsTUFBbUY7SUFDbkssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7S0FDcEQsQ0FBQTtBQUNILENBQUM7QUFURCw4SUFTQztBQUdELFNBQWdCLG9FQUFvRSxDQUFDLE1BQW1GO0lBQ3RLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE1BQU0sS0FBSyxHQUFHO1FBQ1osSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLEtBQUssQ0FBQyxv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a0Q7YUFDckU7WUFDRCxpQkFBaUIsRUFBRTtnQkFDakIsS0FBSyxFQUFFLDJDQUEyQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO2dCQUN0RixPQUFPLEVBQUUsSUFBSTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixnQkFBZ0IsRUFBRSxtQ0FBbUM7YUFDdEQ7WUFDRCxzQkFBc0IsRUFBRTtnQkFDdEIsS0FBSyxFQUFFLGtEQUFrRCxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7Z0JBQ3BHLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLGdCQUFnQixFQUFFLDBDQUEwQzthQUM3RDtZQUNELDZCQUE2QixFQUFFO2dCQUM3QixLQUFLLEVBQUUsd0RBQXdELENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsQ0FBQztnQkFDaEgsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osZ0JBQWdCLEVBQUUsZ0RBQWdEO2FBQ25FO1NBQ0YsQ0FBQztRQUVGLDhCQUE4QjtRQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBRSxDQUFDLENBQUE7SUFDNUgsQ0FBQzs7QUFycUJILDBDQXNxQkM7OztBQXBxQkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRyw4QkFBYyxHQUFHLHVCQUF1QixBQUExQixDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI2FsaWFzX2F0dHJpYnV0ZXMgQ29nbml0b1VzZXJQb29sI2FsaWFzX2F0dHJpYnV0ZXN9XG4gICovXG4gIHJlYWRvbmx5IGFsaWFzQXR0cmlidXRlcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNhdXRvX3ZlcmlmaWVkX2F0dHJpYnV0ZXMgQ29nbml0b1VzZXJQb29sI2F1dG9fdmVyaWZpZWRfYXR0cmlidXRlc31cbiAgKi9cbiAgcmVhZG9ubHkgYXV0b1ZlcmlmaWVkQXR0cmlidXRlcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNlbWFpbF92ZXJpZmljYXRpb25fbWVzc2FnZSBDb2duaXRvVXNlclBvb2wjZW1haWxfdmVyaWZpY2F0aW9uX21lc3NhZ2V9XG4gICovXG4gIHJlYWRvbmx5IGVtYWlsVmVyaWZpY2F0aW9uTWVzc2FnZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjZW1haWxfdmVyaWZpY2F0aW9uX3N1YmplY3QgQ29nbml0b1VzZXJQb29sI2VtYWlsX3ZlcmlmaWNhdGlvbl9zdWJqZWN0fVxuICAqL1xuICByZWFkb25seSBlbWFpbFZlcmlmaWNhdGlvblN1YmplY3Q/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI2lkIENvZ25pdG9Vc2VyUG9vbCNpZH1cbiAgKlxuICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHRoZSBpZCBmaWVsZCBpcyBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCByZXNvdXJjZXMgaW4gVGVycmFmb3JtIHByb3ZpZGVycyB1c2luZyBhIFRlcnJhZm9ybSBwcm92aWRlciBTREsgdmVyc2lvbiBiZWxvdyAyLlxuICAqIElmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zIHNldHRpbmcgdGhpcyB2YWx1ZSBpdCBtaWdodCBub3QgYmUgc2V0dGFibGUuIFBsZWFzZSB0YWtlIGEgbG9vayBhdCB0aGUgcHJvdmlkZXIgZG9jdW1lbnRhdGlvbiB0byBlbnN1cmUgaXQgc2hvdWxkIGJlIHNldHRhYmxlLlxuICAqL1xuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjbWZhX2NvbmZpZ3VyYXRpb24gQ29nbml0b1VzZXJQb29sI21mYV9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBtZmFDb25maWd1cmF0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNuYW1lIENvZ25pdG9Vc2VyUG9vbCNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI3Ntc19hdXRoZW50aWNhdGlvbl9tZXNzYWdlIENvZ25pdG9Vc2VyUG9vbCNzbXNfYXV0aGVudGljYXRpb25fbWVzc2FnZX1cbiAgKi9cbiAgcmVhZG9ubHkgc21zQXV0aGVudGljYXRpb25NZXNzYWdlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNzbXNfdmVyaWZpY2F0aW9uX21lc3NhZ2UgQ29nbml0b1VzZXJQb29sI3Ntc192ZXJpZmljYXRpb25fbWVzc2FnZX1cbiAgKi9cbiAgcmVhZG9ubHkgc21zVmVyaWZpY2F0aW9uTWVzc2FnZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjdGFncyBDb2duaXRvVXNlclBvb2wjdGFnc31cbiAgKi9cbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI3RhZ3NfYWxsIENvZ25pdG9Vc2VyUG9vbCN0YWdzX2FsbH1cbiAgKi9cbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI3VzZXJuYW1lX2F0dHJpYnV0ZXMgQ29nbml0b1VzZXJQb29sI3VzZXJuYW1lX2F0dHJpYnV0ZXN9XG4gICovXG4gIHJlYWRvbmx5IHVzZXJuYW1lQXR0cmlidXRlcz86IHN0cmluZ1tdO1xuICAvKipcbiAgKiBhY2NvdW50X3JlY292ZXJ5X3NldHRpbmcgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI2FjY291bnRfcmVjb3Zlcnlfc2V0dGluZyBDb2duaXRvVXNlclBvb2wjYWNjb3VudF9yZWNvdmVyeV9zZXR0aW5nfVxuICAqL1xuICByZWFkb25seSBhY2NvdW50UmVjb3ZlcnlTZXR0aW5nPzogQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZztcbiAgLyoqXG4gICogYWRtaW5fY3JlYXRlX3VzZXJfY29uZmlnIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNhZG1pbl9jcmVhdGVfdXNlcl9jb25maWcgQ29nbml0b1VzZXJQb29sI2FkbWluX2NyZWF0ZV91c2VyX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgYWRtaW5DcmVhdGVVc2VyQ29uZmlnPzogQ29nbml0b1VzZXJQb29sQWRtaW5DcmVhdGVVc2VyQ29uZmlnO1xuICAvKipcbiAgKiBkZXZpY2VfY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjZGV2aWNlX2NvbmZpZ3VyYXRpb24gQ29nbml0b1VzZXJQb29sI2RldmljZV9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBkZXZpY2VDb25maWd1cmF0aW9uPzogQ29nbml0b1VzZXJQb29sRGV2aWNlQ29uZmlndXJhdGlvbjtcbiAgLyoqXG4gICogZW1haWxfY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjZW1haWxfY29uZmlndXJhdGlvbiBDb2duaXRvVXNlclBvb2wjZW1haWxfY29uZmlndXJhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZW1haWxDb25maWd1cmF0aW9uPzogQ29nbml0b1VzZXJQb29sRW1haWxDb25maWd1cmF0aW9uO1xuICAvKipcbiAgKiBsYW1iZGFfY29uZmlnIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNsYW1iZGFfY29uZmlnIENvZ25pdG9Vc2VyUG9vbCNsYW1iZGFfY29uZmlnfVxuICAqL1xuICByZWFkb25seSBsYW1iZGFDb25maWc/OiBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWc7XG4gIC8qKlxuICAqIHBhc3N3b3JkX3BvbGljeSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjcGFzc3dvcmRfcG9saWN5IENvZ25pdG9Vc2VyUG9vbCNwYXNzd29yZF9wb2xpY3l9XG4gICovXG4gIHJlYWRvbmx5IHBhc3N3b3JkUG9saWN5PzogQ29nbml0b1VzZXJQb29sUGFzc3dvcmRQb2xpY3k7XG4gIC8qKlxuICAqIHNjaGVtYSBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjc2NoZW1hIENvZ25pdG9Vc2VyUG9vbCNzY2hlbWF9XG4gICovXG4gIHJlYWRvbmx5IHNjaGVtYT86IENvZ25pdG9Vc2VyUG9vbFNjaGVtYVtdIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIHNtc19jb25maWd1cmF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNzbXNfY29uZmlndXJhdGlvbiBDb2duaXRvVXNlclBvb2wjc21zX2NvbmZpZ3VyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IHNtc0NvbmZpZ3VyYXRpb24/OiBDb2duaXRvVXNlclBvb2xTbXNDb25maWd1cmF0aW9uO1xuICAvKipcbiAgKiBzb2Z0d2FyZV90b2tlbl9tZmFfY29uZmlndXJhdGlvbiBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjc29mdHdhcmVfdG9rZW5fbWZhX2NvbmZpZ3VyYXRpb24gQ29nbml0b1VzZXJQb29sI3NvZnR3YXJlX3Rva2VuX21mYV9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSBzb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvbj86IENvZ25pdG9Vc2VyUG9vbFNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uO1xuICAvKipcbiAgKiB1c2VyX3Bvb2xfYWRkX29ucyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjdXNlcl9wb29sX2FkZF9vbnMgQ29nbml0b1VzZXJQb29sI3VzZXJfcG9vbF9hZGRfb25zfVxuICAqL1xuICByZWFkb25seSB1c2VyUG9vbEFkZE9ucz86IENvZ25pdG9Vc2VyUG9vbFVzZXJQb29sQWRkT25zO1xuICAvKipcbiAgKiB1c2VybmFtZV9jb25maWd1cmF0aW9uIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCN1c2VybmFtZV9jb25maWd1cmF0aW9uIENvZ25pdG9Vc2VyUG9vbCN1c2VybmFtZV9jb25maWd1cmF0aW9ufVxuICAqL1xuICByZWFkb25seSB1c2VybmFtZUNvbmZpZ3VyYXRpb24/OiBDb2duaXRvVXNlclBvb2xVc2VybmFtZUNvbmZpZ3VyYXRpb247XG4gIC8qKlxuICAqIHZlcmlmaWNhdGlvbl9tZXNzYWdlX3RlbXBsYXRlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCN2ZXJpZmljYXRpb25fbWVzc2FnZV90ZW1wbGF0ZSBDb2duaXRvVXNlclBvb2wjdmVyaWZpY2F0aW9uX21lc3NhZ2VfdGVtcGxhdGV9XG4gICovXG4gIHJlYWRvbmx5IHZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZT86IENvZ25pdG9Vc2VyUG9vbFZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ1JlY292ZXJ5TWVjaGFuaXNtIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjbmFtZSBDb2duaXRvVXNlclBvb2wjbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNwcmlvcml0eSBDb2duaXRvVXNlclBvb2wjcHJpb3JpdHl9XG4gICovXG4gIHJlYWRvbmx5IHByaW9yaXR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nUmVjb3ZlcnlNZWNoYW5pc21Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nUmVjb3ZlcnlNZWNoYW5pc20gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHByaW9yaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW9yaXR5KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nUmVjb3ZlcnlNZWNoYW5pc21Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nUmVjb3ZlcnlNZWNoYW5pc20gfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcHJpb3JpdHk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByaW9yaXR5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENvZ25pdG9Vc2VyUG9vbEFjY291bnRSZWNvdmVyeVNldHRpbmdSZWNvdmVyeU1lY2hhbmlzbU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nUmVjb3ZlcnlNZWNoYW5pc20gfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX25hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmlvcml0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmlvcml0eSA9IHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ1JlY292ZXJ5TWVjaGFuaXNtIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcmlvcml0eSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uYW1lID0gdmFsdWUubmFtZTtcbiAgICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWUucHJpb3JpdHk7XG4gICAgfVxuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBwcmlvcml0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcmlvcml0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwcmlvcml0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJpb3JpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByaW9yaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nUmVjb3ZlcnlNZWNoYW5pc21MaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBDb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nUmVjb3ZlcnlNZWNoYW5pc21bXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ1JlY292ZXJ5TWVjaGFuaXNtT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IENvZ25pdG9Vc2VyUG9vbEFjY291bnRSZWNvdmVyeVNldHRpbmdSZWNvdmVyeU1lY2hhbmlzbU91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZ25pdG9Vc2VyUG9vbEFjY291bnRSZWNvdmVyeVNldHRpbmcge1xuICAvKipcbiAgKiByZWNvdmVyeV9tZWNoYW5pc20gYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI3JlY292ZXJ5X21lY2hhbmlzbSBDb2duaXRvVXNlclBvb2wjcmVjb3ZlcnlfbWVjaGFuaXNtfVxuICAqL1xuICByZWFkb25seSByZWNvdmVyeU1lY2hhbmlzbTogQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ1JlY292ZXJ5TWVjaGFuaXNtW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbEFjY291bnRSZWNvdmVyeVNldHRpbmdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nT3V0cHV0UmVmZXJlbmNlIHwgQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWNvdmVyeV9tZWNoYW5pc206IGNka3RmLmxpc3RNYXBwZXIoY29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ1JlY292ZXJ5TWVjaGFuaXNtVG9UZXJyYWZvcm0sIHRydWUpKHN0cnVjdCEucmVjb3ZlcnlNZWNoYW5pc20pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbEFjY291bnRSZWNvdmVyeVNldHRpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nT3V0cHV0UmVmZXJlbmNlIHwgQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgcmVjb3ZlcnlfbWVjaGFuaXNtOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nUmVjb3ZlcnlNZWNoYW5pc21Ub0hjbFRlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5yZWNvdmVyeU1lY2hhbmlzbSksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ1JlY292ZXJ5TWVjaGFuaXNtTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZWNvdmVyeU1lY2hhbmlzbT8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvdmVyeU1lY2hhbmlzbSA9IHRoaXMuX3JlY292ZXJ5TWVjaGFuaXNtPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlY292ZXJ5TWVjaGFuaXNtLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3JlY292ZXJ5TWVjaGFuaXNtLmludGVybmFsVmFsdWUgPSB2YWx1ZS5yZWNvdmVyeU1lY2hhbmlzbTtcbiAgICB9XG4gIH1cblxuICAvLyByZWNvdmVyeV9tZWNoYW5pc20gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVjb3ZlcnlNZWNoYW5pc20gPSBuZXcgQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ1JlY292ZXJ5TWVjaGFuaXNtTGlzdCh0aGlzLCBcInJlY292ZXJ5X21lY2hhbmlzbVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCByZWNvdmVyeU1lY2hhbmlzbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3ZlcnlNZWNoYW5pc207XG4gIH1cbiAgcHVibGljIHB1dFJlY292ZXJ5TWVjaGFuaXNtKHZhbHVlOiBDb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nUmVjb3ZlcnlNZWNoYW5pc21bXSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVjb3ZlcnlNZWNoYW5pc20uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNvdmVyeU1lY2hhbmlzbUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvdmVyeU1lY2hhbmlzbS5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ0ludml0ZU1lc3NhZ2VUZW1wbGF0ZSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI2VtYWlsX21lc3NhZ2UgQ29nbml0b1VzZXJQb29sI2VtYWlsX21lc3NhZ2V9XG4gICovXG4gIHJlYWRvbmx5IGVtYWlsTWVzc2FnZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjZW1haWxfc3ViamVjdCBDb2duaXRvVXNlclBvb2wjZW1haWxfc3ViamVjdH1cbiAgKi9cbiAgcmVhZG9ubHkgZW1haWxTdWJqZWN0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNzbXNfbWVzc2FnZSBDb2duaXRvVXNlclBvb2wjc21zX21lc3NhZ2V9XG4gICovXG4gIHJlYWRvbmx5IHNtc01lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWdJbnZpdGVNZXNzYWdlVGVtcGxhdGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWdJbnZpdGVNZXNzYWdlVGVtcGxhdGVPdXRwdXRSZWZlcmVuY2UgfCBDb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWdJbnZpdGVNZXNzYWdlVGVtcGxhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW1haWxfbWVzc2FnZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbWFpbE1lc3NhZ2UpLFxuICAgIGVtYWlsX3N1YmplY3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW1haWxTdWJqZWN0KSxcbiAgICBzbXNfbWVzc2FnZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zbXNNZXNzYWdlKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWdJbnZpdGVNZXNzYWdlVGVtcGxhdGVUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWdJbnZpdGVNZXNzYWdlVGVtcGxhdGVPdXRwdXRSZWZlcmVuY2UgfCBDb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWdJbnZpdGVNZXNzYWdlVGVtcGxhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGVtYWlsX21lc3NhZ2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmVtYWlsTWVzc2FnZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZW1haWxfc3ViamVjdDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZW1haWxTdWJqZWN0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzbXNfbWVzc2FnZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc21zTWVzc2FnZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWdJbnZpdGVNZXNzYWdlVGVtcGxhdGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ0ludml0ZU1lc3NhZ2VUZW1wbGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZW1haWxNZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVtYWlsTWVzc2FnZSA9IHRoaXMuX2VtYWlsTWVzc2FnZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VtYWlsU3ViamVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbWFpbFN1YmplY3QgPSB0aGlzLl9lbWFpbFN1YmplY3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zbXNNZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNtc01lc3NhZ2UgPSB0aGlzLl9zbXNNZXNzYWdlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29nbml0b1VzZXJQb29sQWRtaW5DcmVhdGVVc2VyQ29uZmlnSW52aXRlTWVzc2FnZVRlbXBsYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW1haWxNZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW1haWxTdWJqZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc21zTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZW1haWxNZXNzYWdlID0gdmFsdWUuZW1haWxNZXNzYWdlO1xuICAgICAgdGhpcy5fZW1haWxTdWJqZWN0ID0gdmFsdWUuZW1haWxTdWJqZWN0O1xuICAgICAgdGhpcy5fc21zTWVzc2FnZSA9IHZhbHVlLnNtc01lc3NhZ2U7XG4gICAgfVxuICB9XG5cbiAgLy8gZW1haWxfbWVzc2FnZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbWFpbE1lc3NhZ2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVtYWlsTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VtYWlsX21lc3NhZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVtYWlsTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW1haWxNZXNzYWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW1haWxNZXNzYWdlKCkge1xuICAgIHRoaXMuX2VtYWlsTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW1haWxNZXNzYWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VtYWlsTWVzc2FnZTtcbiAgfVxuXG4gIC8vIGVtYWlsX3N1YmplY3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW1haWxTdWJqZWN0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbWFpbFN1YmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbWFpbF9zdWJqZWN0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBlbWFpbFN1YmplY3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VtYWlsU3ViamVjdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVtYWlsU3ViamVjdCgpIHtcbiAgICB0aGlzLl9lbWFpbFN1YmplY3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVtYWlsU3ViamVjdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbFN1YmplY3Q7XG4gIH1cblxuICAvLyBzbXNfbWVzc2FnZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zbXNNZXNzYWdlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzbXNNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc21zX21lc3NhZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNtc01lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Ntc01lc3NhZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTbXNNZXNzYWdlKCkge1xuICAgIHRoaXMuX3Ntc01lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNtc01lc3NhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc21zTWVzc2FnZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNhbGxvd19hZG1pbl9jcmVhdGVfdXNlcl9vbmx5IENvZ25pdG9Vc2VyUG9vbCNhbGxvd19hZG1pbl9jcmVhdGVfdXNlcl9vbmx5fVxuICAqL1xuICByZWFkb25seSBhbGxvd0FkbWluQ3JlYXRlVXNlck9ubHk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIGludml0ZV9tZXNzYWdlX3RlbXBsYXRlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNpbnZpdGVfbWVzc2FnZV90ZW1wbGF0ZSBDb2duaXRvVXNlclBvb2wjaW52aXRlX21lc3NhZ2VfdGVtcGxhdGV9XG4gICovXG4gIHJlYWRvbmx5IGludml0ZU1lc3NhZ2VUZW1wbGF0ZT86IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ0ludml0ZU1lc3NhZ2VUZW1wbGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbGxvd19hZG1pbl9jcmVhdGVfdXNlcl9vbmx5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hbGxvd0FkbWluQ3JlYXRlVXNlck9ubHkpLFxuICAgIGludml0ZV9tZXNzYWdlX3RlbXBsYXRlOiBjb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWdJbnZpdGVNZXNzYWdlVGVtcGxhdGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmludml0ZU1lc3NhZ2VUZW1wbGF0ZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY29nbml0b1VzZXJQb29sQWRtaW5DcmVhdGVVc2VyQ29uZmlnVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sQWRtaW5DcmVhdGVVc2VyQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgQ29nbml0b1VzZXJQb29sQWRtaW5DcmVhdGVVc2VyQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhbGxvd19hZG1pbl9jcmVhdGVfdXNlcl9vbmx5OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWxsb3dBZG1pbkNyZWF0ZVVzZXJPbmx5KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgaW52aXRlX21lc3NhZ2VfdGVtcGxhdGU6IHtcbiAgICAgIHZhbHVlOiBjb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWdJbnZpdGVNZXNzYWdlVGVtcGxhdGVUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmludml0ZU1lc3NhZ2VUZW1wbGF0ZSksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ0ludml0ZU1lc3NhZ2VUZW1wbGF0ZUxpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29nbml0b1VzZXJQb29sQWRtaW5DcmVhdGVVc2VyQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FsbG93QWRtaW5DcmVhdGVVc2VyT25seSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hbGxvd0FkbWluQ3JlYXRlVXNlck9ubHkgPSB0aGlzLl9hbGxvd0FkbWluQ3JlYXRlVXNlck9ubHk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnZpdGVNZXNzYWdlVGVtcGxhdGU/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW52aXRlTWVzc2FnZVRlbXBsYXRlID0gdGhpcy5faW52aXRlTWVzc2FnZVRlbXBsYXRlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29nbml0b1VzZXJQb29sQWRtaW5DcmVhdGVVc2VyQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWxsb3dBZG1pbkNyZWF0ZVVzZXJPbmx5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW52aXRlTWVzc2FnZVRlbXBsYXRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FsbG93QWRtaW5DcmVhdGVVc2VyT25seSA9IHZhbHVlLmFsbG93QWRtaW5DcmVhdGVVc2VyT25seTtcbiAgICAgIHRoaXMuX2ludml0ZU1lc3NhZ2VUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuaW52aXRlTWVzc2FnZVRlbXBsYXRlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFsbG93X2FkbWluX2NyZWF0ZV91c2VyX29ubHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dBZG1pbkNyZWF0ZVVzZXJPbmx5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhbGxvd0FkbWluQ3JlYXRlVXNlck9ubHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWxsb3dfYWRtaW5fY3JlYXRlX3VzZXJfb25seScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb3dBZG1pbkNyZWF0ZVVzZXJPbmx5KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hbGxvd0FkbWluQ3JlYXRlVXNlck9ubHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvd0FkbWluQ3JlYXRlVXNlck9ubHkoKSB7XG4gICAgdGhpcy5fYWxsb3dBZG1pbkNyZWF0ZVVzZXJPbmx5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd0FkbWluQ3JlYXRlVXNlck9ubHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dBZG1pbkNyZWF0ZVVzZXJPbmx5O1xuICB9XG5cbiAgLy8gaW52aXRlX21lc3NhZ2VfdGVtcGxhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW52aXRlTWVzc2FnZVRlbXBsYXRlID0gbmV3IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ0ludml0ZU1lc3NhZ2VUZW1wbGF0ZU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImludml0ZV9tZXNzYWdlX3RlbXBsYXRlXCIpO1xuICBwdWJsaWMgZ2V0IGludml0ZU1lc3NhZ2VUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW52aXRlTWVzc2FnZVRlbXBsYXRlO1xuICB9XG4gIHB1YmxpYyBwdXRJbnZpdGVNZXNzYWdlVGVtcGxhdGUodmFsdWU6IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ0ludml0ZU1lc3NhZ2VUZW1wbGF0ZSkge1xuICAgIHRoaXMuX2ludml0ZU1lc3NhZ2VUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW52aXRlTWVzc2FnZVRlbXBsYXRlKCkge1xuICAgIHRoaXMuX2ludml0ZU1lc3NhZ2VUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnZpdGVNZXNzYWdlVGVtcGxhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW52aXRlTWVzc2FnZVRlbXBsYXRlLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sRGV2aWNlQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI2NoYWxsZW5nZV9yZXF1aXJlZF9vbl9uZXdfZGV2aWNlIENvZ25pdG9Vc2VyUG9vbCNjaGFsbGVuZ2VfcmVxdWlyZWRfb25fbmV3X2RldmljZX1cbiAgKi9cbiAgcmVhZG9ubHkgY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjZGV2aWNlX29ubHlfcmVtZW1iZXJlZF9vbl91c2VyX3Byb21wdCBDb2duaXRvVXNlclBvb2wjZGV2aWNlX29ubHlfcmVtZW1iZXJlZF9vbl91c2VyX3Byb21wdH1cbiAgKi9cbiAgcmVhZG9ubHkgZGV2aWNlT25seVJlbWVtYmVyZWRPblVzZXJQcm9tcHQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xEZXZpY2VDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sRGV2aWNlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbERldmljZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2hhbGxlbmdlX3JlcXVpcmVkX29uX25ld19kZXZpY2U6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNoYWxsZW5nZVJlcXVpcmVkT25OZXdEZXZpY2UpLFxuICAgIGRldmljZV9vbmx5X3JlbWVtYmVyZWRfb25fdXNlcl9wcm9tcHQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZU9ubHlSZW1lbWJlcmVkT25Vc2VyUHJvbXB0KSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xEZXZpY2VDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sRGV2aWNlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbERldmljZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNoYWxsZW5nZV9yZXF1aXJlZF9vbl9uZXdfZGV2aWNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIGRldmljZV9vbmx5X3JlbWVtYmVyZWRfb25fdXNlcl9wcm9tcHQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5ib29sZWFuVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VPbmx5UmVtZW1iZXJlZE9uVXNlclByb21wdCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29nbml0b1VzZXJQb29sRGV2aWNlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29nbml0b1VzZXJQb29sRGV2aWNlQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jaGFsbGVuZ2VSZXF1aXJlZE9uTmV3RGV2aWNlID0gdGhpcy5fY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RldmljZU9ubHlSZW1lbWJlcmVkT25Vc2VyUHJvbXB0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRldmljZU9ubHlSZW1lbWJlcmVkT25Vc2VyUHJvbXB0ID0gdGhpcy5fZGV2aWNlT25seVJlbWVtYmVyZWRPblVzZXJQcm9tcHQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2duaXRvVXNlclBvb2xEZXZpY2VDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RldmljZU9ubHlSZW1lbWJlcmVkT25Vc2VyUHJvbXB0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jaGFsbGVuZ2VSZXF1aXJlZE9uTmV3RGV2aWNlID0gdmFsdWUuY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZTtcbiAgICAgIHRoaXMuX2RldmljZU9ubHlSZW1lbWJlcmVkT25Vc2VyUHJvbXB0ID0gdmFsdWUuZGV2aWNlT25seVJlbWVtYmVyZWRPblVzZXJQcm9tcHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gY2hhbGxlbmdlX3JlcXVpcmVkX29uX25ld19kZXZpY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjaGFsbGVuZ2VfcmVxdWlyZWRfb25fbmV3X2RldmljZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENoYWxsZW5nZVJlcXVpcmVkT25OZXdEZXZpY2UoKSB7XG4gICAgdGhpcy5fY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jaGFsbGVuZ2VSZXF1aXJlZE9uTmV3RGV2aWNlO1xuICB9XG5cbiAgLy8gZGV2aWNlX29ubHlfcmVtZW1iZXJlZF9vbl91c2VyX3Byb21wdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXZpY2VPbmx5UmVtZW1iZXJlZE9uVXNlclByb21wdD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZGV2aWNlT25seVJlbWVtYmVyZWRPblVzZXJQcm9tcHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGV2aWNlX29ubHlfcmVtZW1iZXJlZF9vbl91c2VyX3Byb21wdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGV2aWNlT25seVJlbWVtYmVyZWRPblVzZXJQcm9tcHQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2RldmljZU9ubHlSZW1lbWJlcmVkT25Vc2VyUHJvbXB0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGV2aWNlT25seVJlbWVtYmVyZWRPblVzZXJQcm9tcHQoKSB7XG4gICAgdGhpcy5fZGV2aWNlT25seVJlbWVtYmVyZWRPblVzZXJQcm9tcHQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRldmljZU9ubHlSZW1lbWJlcmVkT25Vc2VyUHJvbXB0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZU9ubHlSZW1lbWJlcmVkT25Vc2VyUHJvbXB0O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZ25pdG9Vc2VyUG9vbEVtYWlsQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI2NvbmZpZ3VyYXRpb25fc2V0IENvZ25pdG9Vc2VyUG9vbCNjb25maWd1cmF0aW9uX3NldH1cbiAgKi9cbiAgcmVhZG9ubHkgY29uZmlndXJhdGlvblNldD86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjZW1haWxfc2VuZGluZ19hY2NvdW50IENvZ25pdG9Vc2VyUG9vbCNlbWFpbF9zZW5kaW5nX2FjY291bnR9XG4gICovXG4gIHJlYWRvbmx5IGVtYWlsU2VuZGluZ0FjY291bnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI2Zyb21fZW1haWxfYWRkcmVzcyBDb2duaXRvVXNlclBvb2wjZnJvbV9lbWFpbF9hZGRyZXNzfVxuICAqL1xuICByZWFkb25seSBmcm9tRW1haWxBZGRyZXNzPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNyZXBseV90b19lbWFpbF9hZGRyZXNzIENvZ25pdG9Vc2VyUG9vbCNyZXBseV90b19lbWFpbF9hZGRyZXNzfVxuICAqL1xuICByZWFkb25seSByZXBseVRvRW1haWxBZGRyZXNzPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNzb3VyY2VfYXJuIENvZ25pdG9Vc2VyUG9vbCNzb3VyY2VfYXJufVxuICAqL1xuICByZWFkb25seSBzb3VyY2VBcm4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xFbWFpbENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xFbWFpbENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBDb2duaXRvVXNlclBvb2xFbWFpbENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29uZmlndXJhdGlvbl9zZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29uZmlndXJhdGlvblNldCksXG4gICAgZW1haWxfc2VuZGluZ19hY2NvdW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVtYWlsU2VuZGluZ0FjY291bnQpLFxuICAgIGZyb21fZW1haWxfYWRkcmVzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5mcm9tRW1haWxBZGRyZXNzKSxcbiAgICByZXBseV90b19lbWFpbF9hZGRyZXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlcGx5VG9FbWFpbEFkZHJlc3MpLFxuICAgIHNvdXJjZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc291cmNlQXJuKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xFbWFpbENvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xFbWFpbENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBDb2duaXRvVXNlclBvb2xFbWFpbENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNvbmZpZ3VyYXRpb25fc2V0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb25maWd1cmF0aW9uU2V0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBlbWFpbF9zZW5kaW5nX2FjY291bnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmVtYWlsU2VuZGluZ0FjY291bnQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGZyb21fZW1haWxfYWRkcmVzczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZnJvbUVtYWlsQWRkcmVzcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcmVwbHlfdG9fZW1haWxfYWRkcmVzczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVwbHlUb0VtYWlsQWRkcmVzcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc291cmNlX2Fybjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuc291cmNlQXJuKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENvZ25pdG9Vc2VyUG9vbEVtYWlsQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29nbml0b1VzZXJQb29sRW1haWxDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb25maWd1cmF0aW9uU2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbmZpZ3VyYXRpb25TZXQgPSB0aGlzLl9jb25maWd1cmF0aW9uU2V0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW1haWxTZW5kaW5nQWNjb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbWFpbFNlbmRpbmdBY2NvdW50ID0gdGhpcy5fZW1haWxTZW5kaW5nQWNjb3VudDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Zyb21FbWFpbEFkZHJlc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZnJvbUVtYWlsQWRkcmVzcyA9IHRoaXMuX2Zyb21FbWFpbEFkZHJlc3M7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXBseVRvRW1haWxBZGRyZXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlcGx5VG9FbWFpbEFkZHJlc3MgPSB0aGlzLl9yZXBseVRvRW1haWxBZGRyZXNzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc291cmNlQXJuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNvdXJjZUFybiA9IHRoaXMuX3NvdXJjZUFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZ25pdG9Vc2VyUG9vbEVtYWlsQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25TZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbWFpbFNlbmRpbmdBY2NvdW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZnJvbUVtYWlsQWRkcmVzcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlcGx5VG9FbWFpbEFkZHJlc3MgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zb3VyY2VBcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25TZXQgPSB2YWx1ZS5jb25maWd1cmF0aW9uU2V0O1xuICAgICAgdGhpcy5fZW1haWxTZW5kaW5nQWNjb3VudCA9IHZhbHVlLmVtYWlsU2VuZGluZ0FjY291bnQ7XG4gICAgICB0aGlzLl9mcm9tRW1haWxBZGRyZXNzID0gdmFsdWUuZnJvbUVtYWlsQWRkcmVzcztcbiAgICAgIHRoaXMuX3JlcGx5VG9FbWFpbEFkZHJlc3MgPSB2YWx1ZS5yZXBseVRvRW1haWxBZGRyZXNzO1xuICAgICAgdGhpcy5fc291cmNlQXJuID0gdmFsdWUuc291cmNlQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbmZpZ3VyYXRpb25fc2V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbmZpZ3VyYXRpb25TZXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25TZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25maWd1cmF0aW9uX3NldCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29uZmlndXJhdGlvblNldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvblNldCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbmZpZ3VyYXRpb25TZXQoKSB7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvblNldCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvblNldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWd1cmF0aW9uU2V0O1xuICB9XG5cbiAgLy8gZW1haWxfc2VuZGluZ19hY2NvdW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VtYWlsU2VuZGluZ0FjY291bnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVtYWlsU2VuZGluZ0FjY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbWFpbF9zZW5kaW5nX2FjY291bnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVtYWlsU2VuZGluZ0FjY291bnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VtYWlsU2VuZGluZ0FjY291bnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbWFpbFNlbmRpbmdBY2NvdW50KCkge1xuICAgIHRoaXMuX2VtYWlsU2VuZGluZ0FjY291bnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVtYWlsU2VuZGluZ0FjY291bnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW1haWxTZW5kaW5nQWNjb3VudDtcbiAgfVxuXG4gIC8vIGZyb21fZW1haWxfYWRkcmVzcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mcm9tRW1haWxBZGRyZXNzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmcm9tRW1haWxBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZnJvbV9lbWFpbF9hZGRyZXNzJyk7XG4gIH1cbiAgcHVibGljIHNldCBmcm9tRW1haWxBZGRyZXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mcm9tRW1haWxBZGRyZXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RnJvbUVtYWlsQWRkcmVzcygpIHtcbiAgICB0aGlzLl9mcm9tRW1haWxBZGRyZXNzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmcm9tRW1haWxBZGRyZXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb21FbWFpbEFkZHJlc3M7XG4gIH1cblxuICAvLyByZXBseV90b19lbWFpbF9hZGRyZXNzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcGx5VG9FbWFpbEFkZHJlc3M/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlcGx5VG9FbWFpbEFkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXBseV90b19lbWFpbF9hZGRyZXNzJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXBseVRvRW1haWxBZGRyZXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXBseVRvRW1haWxBZGRyZXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVwbHlUb0VtYWlsQWRkcmVzcygpIHtcbiAgICB0aGlzLl9yZXBseVRvRW1haWxBZGRyZXNzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXBseVRvRW1haWxBZGRyZXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGx5VG9FbWFpbEFkZHJlc3M7XG4gIH1cblxuICAvLyBzb3VyY2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvdXJjZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc291cmNlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc291cmNlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3VyY2VBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTb3VyY2VBcm4oKSB7XG4gICAgdGhpcy5fc291cmNlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlQXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbUVtYWlsU2VuZGVyIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjbGFtYmRhX2FybiBDb2duaXRvVXNlclBvb2wjbGFtYmRhX2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkgbGFtYmRhQXJuOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI2xhbWJkYV92ZXJzaW9uIENvZ25pdG9Vc2VyUG9vbCNsYW1iZGFfdmVyc2lvbn1cbiAgKi9cbiAgcmVhZG9ubHkgbGFtYmRhVmVyc2lvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tRW1haWxTZW5kZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdDdXN0b21FbWFpbFNlbmRlck91dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbUVtYWlsU2VuZGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxhbWJkYV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGFtYmRhQXJuKSxcbiAgICBsYW1iZGFfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sYW1iZGFWZXJzaW9uKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdDdXN0b21FbWFpbFNlbmRlclRvSGNsVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbUVtYWlsU2VuZGVyT3V0cHV0UmVmZXJlbmNlIHwgQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tRW1haWxTZW5kZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGxhbWJkYV9hcm46IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxhbWJkYUFybiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbGFtYmRhX3ZlcnNpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmxhbWJkYVZlcnNpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tRW1haWxTZW5kZXJPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbUVtYWlsU2VuZGVyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9sYW1iZGFBcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGFtYmRhQXJuID0gdGhpcy5fbGFtYmRhQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGFtYmRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sYW1iZGFWZXJzaW9uID0gdGhpcy5fbGFtYmRhVmVyc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbUVtYWlsU2VuZGVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbGFtYmRhQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbGFtYmRhVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbGFtYmRhQXJuID0gdmFsdWUubGFtYmRhQXJuO1xuICAgICAgdGhpcy5fbGFtYmRhVmVyc2lvbiA9IHZhbHVlLmxhbWJkYVZlcnNpb247XG4gICAgfVxuICB9XG5cbiAgLy8gbGFtYmRhX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9sYW1iZGFBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxhbWJkYUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhbWJkYV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhbWJkYUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGFtYmRhQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhbWJkYUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYW1iZGFBcm47XG4gIH1cblxuICAvLyBsYW1iZGFfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9sYW1iZGFWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsYW1iZGFWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFtYmRhX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhbWJkYVZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhbWJkYVZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGFtYmRhVmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYW1iZGFWZXJzaW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbVNtc1NlbmRlciB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI2xhbWJkYV9hcm4gQ29nbml0b1VzZXJQb29sI2xhbWJkYV9hcm59XG4gICovXG4gIHJlYWRvbmx5IGxhbWJkYUFybjogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNsYW1iZGFfdmVyc2lvbiBDb2duaXRvVXNlclBvb2wjbGFtYmRhX3ZlcnNpb259XG4gICovXG4gIHJlYWRvbmx5IGxhbWJkYVZlcnNpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbVNtc1NlbmRlclRvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbVNtc1NlbmRlck91dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbVNtc1NlbmRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsYW1iZGFfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhbWJkYUFybiksXG4gICAgbGFtYmRhX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGFtYmRhVmVyc2lvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tU21zU2VuZGVyVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tU21zU2VuZGVyT3V0cHV0UmVmZXJlbmNlIHwgQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tU21zU2VuZGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBsYW1iZGFfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sYW1iZGFBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGxhbWJkYV92ZXJzaW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5sYW1iZGFWZXJzaW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbVNtc1NlbmRlck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tU21zU2VuZGVyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9sYW1iZGFBcm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGFtYmRhQXJuID0gdGhpcy5fbGFtYmRhQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGFtYmRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sYW1iZGFWZXJzaW9uID0gdGhpcy5fbGFtYmRhVmVyc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbVNtc1NlbmRlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xhbWJkYUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xhbWJkYVZlcnNpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2xhbWJkYUFybiA9IHZhbHVlLmxhbWJkYUFybjtcbiAgICAgIHRoaXMuX2xhbWJkYVZlcnNpb24gPSB2YWx1ZS5sYW1iZGFWZXJzaW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxhbWJkYV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbGFtYmRhQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsYW1iZGFBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYW1iZGFfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYW1iZGFBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhbWJkYUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYW1iZGFBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFtYmRhQXJuO1xuICB9XG5cbiAgLy8gbGFtYmRhX3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbGFtYmRhVmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbGFtYmRhVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhbWJkYV92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYW1iZGFWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYW1iZGFWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhbWJkYVZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFtYmRhVmVyc2lvbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNjcmVhdGVfYXV0aF9jaGFsbGVuZ2UgQ29nbml0b1VzZXJQb29sI2NyZWF0ZV9hdXRoX2NoYWxsZW5nZX1cbiAgKi9cbiAgcmVhZG9ubHkgY3JlYXRlQXV0aENoYWxsZW5nZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjY3VzdG9tX21lc3NhZ2UgQ29nbml0b1VzZXJQb29sI2N1c3RvbV9tZXNzYWdlfVxuICAqL1xuICByZWFkb25seSBjdXN0b21NZXNzYWdlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNkZWZpbmVfYXV0aF9jaGFsbGVuZ2UgQ29nbml0b1VzZXJQb29sI2RlZmluZV9hdXRoX2NoYWxsZW5nZX1cbiAgKi9cbiAgcmVhZG9ubHkgZGVmaW5lQXV0aENoYWxsZW5nZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wja21zX2tleV9pZCBDb2duaXRvVXNlclBvb2wja21zX2tleV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkga21zS2V5SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI3Bvc3RfYXV0aGVudGljYXRpb24gQ29nbml0b1VzZXJQb29sI3Bvc3RfYXV0aGVudGljYXRpb259XG4gICovXG4gIHJlYWRvbmx5IHBvc3RBdXRoZW50aWNhdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjcG9zdF9jb25maXJtYXRpb24gQ29nbml0b1VzZXJQb29sI3Bvc3RfY29uZmlybWF0aW9ufVxuICAqL1xuICByZWFkb25seSBwb3N0Q29uZmlybWF0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNwcmVfYXV0aGVudGljYXRpb24gQ29nbml0b1VzZXJQb29sI3ByZV9hdXRoZW50aWNhdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgcHJlQXV0aGVudGljYXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI3ByZV9zaWduX3VwIENvZ25pdG9Vc2VyUG9vbCNwcmVfc2lnbl91cH1cbiAgKi9cbiAgcmVhZG9ubHkgcHJlU2lnblVwPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNwcmVfdG9rZW5fZ2VuZXJhdGlvbiBDb2duaXRvVXNlclBvb2wjcHJlX3Rva2VuX2dlbmVyYXRpb259XG4gICovXG4gIHJlYWRvbmx5IHByZVRva2VuR2VuZXJhdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjdXNlcl9taWdyYXRpb24gQ29nbml0b1VzZXJQb29sI3VzZXJfbWlncmF0aW9ufVxuICAqL1xuICByZWFkb25seSB1c2VyTWlncmF0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCN2ZXJpZnlfYXV0aF9jaGFsbGVuZ2VfcmVzcG9uc2UgQ29nbml0b1VzZXJQb29sI3ZlcmlmeV9hdXRoX2NoYWxsZW5nZV9yZXNwb25zZX1cbiAgKi9cbiAgcmVhZG9ubHkgdmVyaWZ5QXV0aENoYWxsZW5nZVJlc3BvbnNlPzogc3RyaW5nO1xuICAvKipcbiAgKiBjdXN0b21fZW1haWxfc2VuZGVyIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNjdXN0b21fZW1haWxfc2VuZGVyIENvZ25pdG9Vc2VyUG9vbCNjdXN0b21fZW1haWxfc2VuZGVyfVxuICAqL1xuICByZWFkb25seSBjdXN0b21FbWFpbFNlbmRlcj86IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbUVtYWlsU2VuZGVyO1xuICAvKipcbiAgKiBjdXN0b21fc21zX3NlbmRlciBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjY3VzdG9tX3Ntc19zZW5kZXIgQ29nbml0b1VzZXJQb29sI2N1c3RvbV9zbXNfc2VuZGVyfVxuICAqL1xuICByZWFkb25seSBjdXN0b21TbXNTZW5kZXI/OiBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdDdXN0b21TbXNTZW5kZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY3JlYXRlX2F1dGhfY2hhbGxlbmdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNyZWF0ZUF1dGhDaGFsbGVuZ2UpLFxuICAgIGN1c3RvbV9tZXNzYWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbU1lc3NhZ2UpLFxuICAgIGRlZmluZV9hdXRoX2NoYWxsZW5nZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWZpbmVBdXRoQ2hhbGxlbmdlKSxcbiAgICBrbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUlkKSxcbiAgICBwb3N0X2F1dGhlbnRpY2F0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvc3RBdXRoZW50aWNhdGlvbiksXG4gICAgcG9zdF9jb25maXJtYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucG9zdENvbmZpcm1hdGlvbiksXG4gICAgcHJlX2F1dGhlbnRpY2F0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZUF1dGhlbnRpY2F0aW9uKSxcbiAgICBwcmVfc2lnbl91cDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVTaWduVXApLFxuICAgIHByZV90b2tlbl9nZW5lcmF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZVRva2VuR2VuZXJhdGlvbiksXG4gICAgdXNlcl9taWdyYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlck1pZ3JhdGlvbiksXG4gICAgdmVyaWZ5X2F1dGhfY2hhbGxlbmdlX3Jlc3BvbnNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZlcmlmeUF1dGhDaGFsbGVuZ2VSZXNwb25zZSksXG4gICAgY3VzdG9tX2VtYWlsX3NlbmRlcjogY29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tRW1haWxTZW5kZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbUVtYWlsU2VuZGVyKSxcbiAgICBjdXN0b21fc21zX3NlbmRlcjogY29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tU21zU2VuZGVyVG9UZXJyYWZvcm0oc3RydWN0IS5jdXN0b21TbXNTZW5kZXIpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgY3JlYXRlX2F1dGhfY2hhbGxlbmdlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jcmVhdGVBdXRoQ2hhbGxlbmdlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjdXN0b21fbWVzc2FnZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY3VzdG9tTWVzc2FnZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZGVmaW5lX2F1dGhfY2hhbGxlbmdlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5kZWZpbmVBdXRoQ2hhbGxlbmdlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBrbXNfa2V5X2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5rbXNLZXlJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcG9zdF9hdXRoZW50aWNhdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucG9zdEF1dGhlbnRpY2F0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBwb3N0X2NvbmZpcm1hdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEucG9zdENvbmZpcm1hdGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcHJlX2F1dGhlbnRpY2F0aW9uOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5wcmVBdXRoZW50aWNhdGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcHJlX3NpZ25fdXA6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByZVNpZ25VcCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcHJlX3Rva2VuX2dlbmVyYXRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnByZVRva2VuR2VuZXJhdGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgdXNlcl9taWdyYXRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnVzZXJNaWdyYXRpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHZlcmlmeV9hdXRoX2NoYWxsZW5nZV9yZXNwb25zZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudmVyaWZ5QXV0aENoYWxsZW5nZVJlc3BvbnNlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjdXN0b21fZW1haWxfc2VuZGVyOiB7XG4gICAgICB2YWx1ZTogY29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tRW1haWxTZW5kZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbUVtYWlsU2VuZGVyKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tRW1haWxTZW5kZXJMaXN0XCIsXG4gICAgfSxcbiAgICBjdXN0b21fc21zX3NlbmRlcjoge1xuICAgICAgdmFsdWU6IGNvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbVNtc1NlbmRlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuY3VzdG9tU21zU2VuZGVyKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tU21zU2VuZGVyTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3JlYXRlQXV0aENoYWxsZW5nZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jcmVhdGVBdXRoQ2hhbGxlbmdlID0gdGhpcy5fY3JlYXRlQXV0aENoYWxsZW5nZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2N1c3RvbU1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3VzdG9tTWVzc2FnZSA9IHRoaXMuX2N1c3RvbU1lc3NhZ2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZWZpbmVBdXRoQ2hhbGxlbmdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlZmluZUF1dGhDaGFsbGVuZ2UgPSB0aGlzLl9kZWZpbmVBdXRoQ2hhbGxlbmdlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fa21zS2V5SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua21zS2V5SWQgPSB0aGlzLl9rbXNLZXlJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Bvc3RBdXRoZW50aWNhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wb3N0QXV0aGVudGljYXRpb24gPSB0aGlzLl9wb3N0QXV0aGVudGljYXRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9wb3N0Q29uZmlybWF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBvc3RDb25maXJtYXRpb24gPSB0aGlzLl9wb3N0Q29uZmlybWF0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJlQXV0aGVudGljYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlQXV0aGVudGljYXRpb24gPSB0aGlzLl9wcmVBdXRoZW50aWNhdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZVNpZ25VcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmVTaWduVXAgPSB0aGlzLl9wcmVTaWduVXA7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmVUb2tlbkdlbmVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlVG9rZW5HZW5lcmF0aW9uID0gdGhpcy5fcHJlVG9rZW5HZW5lcmF0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlck1pZ3JhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51c2VyTWlncmF0aW9uID0gdGhpcy5fdXNlck1pZ3JhdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZlcmlmeUF1dGhDaGFsbGVuZ2VSZXNwb25zZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52ZXJpZnlBdXRoQ2hhbGxlbmdlUmVzcG9uc2UgPSB0aGlzLl92ZXJpZnlBdXRoQ2hhbGxlbmdlUmVzcG9uc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jdXN0b21FbWFpbFNlbmRlcj8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jdXN0b21FbWFpbFNlbmRlciA9IHRoaXMuX2N1c3RvbUVtYWlsU2VuZGVyPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3VzdG9tU21zU2VuZGVyPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmN1c3RvbVNtc1NlbmRlciA9IHRoaXMuX2N1c3RvbVNtc1NlbmRlcj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NyZWF0ZUF1dGhDaGFsbGVuZ2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jdXN0b21NZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGVmaW5lQXV0aENoYWxsZW5nZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ttc0tleUlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcG9zdEF1dGhlbnRpY2F0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcG9zdENvbmZpcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByZUF1dGhlbnRpY2F0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJlU2lnblVwID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJlVG9rZW5HZW5lcmF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXNlck1pZ3JhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZlcmlmeUF1dGhDaGFsbGVuZ2VSZXNwb25zZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2N1c3RvbUVtYWlsU2VuZGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jdXN0b21TbXNTZW5kZXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY3JlYXRlQXV0aENoYWxsZW5nZSA9IHZhbHVlLmNyZWF0ZUF1dGhDaGFsbGVuZ2U7XG4gICAgICB0aGlzLl9jdXN0b21NZXNzYWdlID0gdmFsdWUuY3VzdG9tTWVzc2FnZTtcbiAgICAgIHRoaXMuX2RlZmluZUF1dGhDaGFsbGVuZ2UgPSB2YWx1ZS5kZWZpbmVBdXRoQ2hhbGxlbmdlO1xuICAgICAgdGhpcy5fa21zS2V5SWQgPSB2YWx1ZS5rbXNLZXlJZDtcbiAgICAgIHRoaXMuX3Bvc3RBdXRoZW50aWNhdGlvbiA9IHZhbHVlLnBvc3RBdXRoZW50aWNhdGlvbjtcbiAgICAgIHRoaXMuX3Bvc3RDb25maXJtYXRpb24gPSB2YWx1ZS5wb3N0Q29uZmlybWF0aW9uO1xuICAgICAgdGhpcy5fcHJlQXV0aGVudGljYXRpb24gPSB2YWx1ZS5wcmVBdXRoZW50aWNhdGlvbjtcbiAgICAgIHRoaXMuX3ByZVNpZ25VcCA9IHZhbHVlLnByZVNpZ25VcDtcbiAgICAgIHRoaXMuX3ByZVRva2VuR2VuZXJhdGlvbiA9IHZhbHVlLnByZVRva2VuR2VuZXJhdGlvbjtcbiAgICAgIHRoaXMuX3VzZXJNaWdyYXRpb24gPSB2YWx1ZS51c2VyTWlncmF0aW9uO1xuICAgICAgdGhpcy5fdmVyaWZ5QXV0aENoYWxsZW5nZVJlc3BvbnNlID0gdmFsdWUudmVyaWZ5QXV0aENoYWxsZW5nZVJlc3BvbnNlO1xuICAgICAgdGhpcy5fY3VzdG9tRW1haWxTZW5kZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmN1c3RvbUVtYWlsU2VuZGVyO1xuICAgICAgdGhpcy5fY3VzdG9tU21zU2VuZGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jdXN0b21TbXNTZW5kZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gY3JlYXRlX2F1dGhfY2hhbGxlbmdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NyZWF0ZUF1dGhDaGFsbGVuZ2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNyZWF0ZUF1dGhDaGFsbGVuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGVfYXV0aF9jaGFsbGVuZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0ZUF1dGhDaGFsbGVuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NyZWF0ZUF1dGhDaGFsbGVuZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcmVhdGVBdXRoQ2hhbGxlbmdlKCkge1xuICAgIHRoaXMuX2NyZWF0ZUF1dGhDaGFsbGVuZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyZWF0ZUF1dGhDaGFsbGVuZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlQXV0aENoYWxsZW5nZTtcbiAgfVxuXG4gIC8vIGN1c3RvbV9tZXNzYWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbU1lc3NhZ2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGN1c3RvbU1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjdXN0b21fbWVzc2FnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3VzdG9tTWVzc2FnZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbU1lc3NhZ2UoKSB7XG4gICAgdGhpcy5fY3VzdG9tTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tTWVzc2FnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21NZXNzYWdlO1xuICB9XG5cbiAgLy8gZGVmaW5lX2F1dGhfY2hhbGxlbmdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlZmluZUF1dGhDaGFsbGVuZ2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlZmluZUF1dGhDaGFsbGVuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWZpbmVfYXV0aF9jaGFsbGVuZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmluZUF1dGhDaGFsbGVuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmluZUF1dGhDaGFsbGVuZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWZpbmVBdXRoQ2hhbGxlbmdlKCkge1xuICAgIHRoaXMuX2RlZmluZUF1dGhDaGFsbGVuZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmluZUF1dGhDaGFsbGVuZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmaW5lQXV0aENoYWxsZW5nZTtcbiAgfVxuXG4gIC8vIGttc19rZXlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zS2V5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGttc0tleUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2tleV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zS2V5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ttc0tleUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zS2V5SWQoKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGttc0tleUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0tleUlkO1xuICB9XG5cbiAgLy8gcG9zdF9hdXRoZW50aWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wb3N0QXV0aGVudGljYXRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBvc3RBdXRoZW50aWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Bvc3RfYXV0aGVudGljYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvc3RBdXRoZW50aWNhdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcG9zdEF1dGhlbnRpY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UG9zdEF1dGhlbnRpY2F0aW9uKCkge1xuICAgIHRoaXMuX3Bvc3RBdXRoZW50aWNhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9zdEF1dGhlbnRpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc3RBdXRoZW50aWNhdGlvbjtcbiAgfVxuXG4gIC8vIHBvc3RfY29uZmlybWF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Bvc3RDb25maXJtYXRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBvc3RDb25maXJtYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwb3N0X2NvbmZpcm1hdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9zdENvbmZpcm1hdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcG9zdENvbmZpcm1hdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBvc3RDb25maXJtYXRpb24oKSB7XG4gICAgdGhpcy5fcG9zdENvbmZpcm1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9zdENvbmZpcm1hdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb3N0Q29uZmlybWF0aW9uO1xuICB9XG5cbiAgLy8gcHJlX2F1dGhlbnRpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZUF1dGhlbnRpY2F0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVBdXRoZW50aWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZV9hdXRoZW50aWNhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlQXV0aGVudGljYXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZUF1dGhlbnRpY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlQXV0aGVudGljYXRpb24oKSB7XG4gICAgdGhpcy5fcHJlQXV0aGVudGljYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZUF1dGhlbnRpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZUF1dGhlbnRpY2F0aW9uO1xuICB9XG5cbiAgLy8gcHJlX3NpZ25fdXAgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlU2lnblVwPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVTaWduVXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVfc2lnbl91cCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlU2lnblVwKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVTaWduVXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVTaWduVXAoKSB7XG4gICAgdGhpcy5fcHJlU2lnblVwID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVTaWduVXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlU2lnblVwO1xuICB9XG5cbiAgLy8gcHJlX3Rva2VuX2dlbmVyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlVG9rZW5HZW5lcmF0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVUb2tlbkdlbmVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVfdG9rZW5fZ2VuZXJhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlVG9rZW5HZW5lcmF0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVUb2tlbkdlbmVyYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVUb2tlbkdlbmVyYXRpb24oKSB7XG4gICAgdGhpcy5fcHJlVG9rZW5HZW5lcmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVUb2tlbkdlbmVyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlVG9rZW5HZW5lcmF0aW9uO1xuICB9XG5cbiAgLy8gdXNlcl9taWdyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlck1pZ3JhdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXNlck1pZ3JhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzZXJfbWlncmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VyTWlncmF0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91c2VyTWlncmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VXNlck1pZ3JhdGlvbigpIHtcbiAgICB0aGlzLl91c2VyTWlncmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VyTWlncmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJNaWdyYXRpb247XG4gIH1cblxuICAvLyB2ZXJpZnlfYXV0aF9jaGFsbGVuZ2VfcmVzcG9uc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmVyaWZ5QXV0aENoYWxsZW5nZVJlc3BvbnNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2ZXJpZnlBdXRoQ2hhbGxlbmdlUmVzcG9uc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2ZXJpZnlfYXV0aF9jaGFsbGVuZ2VfcmVzcG9uc2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZlcmlmeUF1dGhDaGFsbGVuZ2VSZXNwb25zZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmVyaWZ5QXV0aENoYWxsZW5nZVJlc3BvbnNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmVyaWZ5QXV0aENoYWxsZW5nZVJlc3BvbnNlKCkge1xuICAgIHRoaXMuX3ZlcmlmeUF1dGhDaGFsbGVuZ2VSZXNwb25zZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmVyaWZ5QXV0aENoYWxsZW5nZVJlc3BvbnNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcmlmeUF1dGhDaGFsbGVuZ2VSZXNwb25zZTtcbiAgfVxuXG4gIC8vIGN1c3RvbV9lbWFpbF9zZW5kZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tRW1haWxTZW5kZXIgPSBuZXcgQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tRW1haWxTZW5kZXJPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJjdXN0b21fZW1haWxfc2VuZGVyXCIpO1xuICBwdWJsaWMgZ2V0IGN1c3RvbUVtYWlsU2VuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21FbWFpbFNlbmRlcjtcbiAgfVxuICBwdWJsaWMgcHV0Q3VzdG9tRW1haWxTZW5kZXIodmFsdWU6IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbUVtYWlsU2VuZGVyKSB7XG4gICAgdGhpcy5fY3VzdG9tRW1haWxTZW5kZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbUVtYWlsU2VuZGVyKCkge1xuICAgIHRoaXMuX2N1c3RvbUVtYWlsU2VuZGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbUVtYWlsU2VuZGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUVtYWlsU2VuZGVyLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBjdXN0b21fc21zX3NlbmRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21TbXNTZW5kZXIgPSBuZXcgQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tU21zU2VuZGVyT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiY3VzdG9tX3Ntc19zZW5kZXJcIik7XG4gIHB1YmxpYyBnZXQgY3VzdG9tU21zU2VuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21TbXNTZW5kZXI7XG4gIH1cbiAgcHVibGljIHB1dEN1c3RvbVNtc1NlbmRlcih2YWx1ZTogQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tU21zU2VuZGVyKSB7XG4gICAgdGhpcy5fY3VzdG9tU21zU2VuZGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21TbXNTZW5kZXIoKSB7XG4gICAgdGhpcy5fY3VzdG9tU21zU2VuZGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbVNtc1NlbmRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21TbXNTZW5kZXIuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2duaXRvVXNlclBvb2xQYXNzd29yZFBvbGljeSB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI21pbmltdW1fbGVuZ3RoIENvZ25pdG9Vc2VyUG9vbCNtaW5pbXVtX2xlbmd0aH1cbiAgKi9cbiAgcmVhZG9ubHkgbWluaW11bUxlbmd0aD86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjcmVxdWlyZV9sb3dlcmNhc2UgQ29nbml0b1VzZXJQb29sI3JlcXVpcmVfbG93ZXJjYXNlfVxuICAqL1xuICByZWFkb25seSByZXF1aXJlTG93ZXJjYXNlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNyZXF1aXJlX251bWJlcnMgQ29nbml0b1VzZXJQb29sI3JlcXVpcmVfbnVtYmVyc31cbiAgKi9cbiAgcmVhZG9ubHkgcmVxdWlyZU51bWJlcnM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI3JlcXVpcmVfc3ltYm9scyBDb2duaXRvVXNlclBvb2wjcmVxdWlyZV9zeW1ib2xzfVxuICAqL1xuICByZWFkb25seSByZXF1aXJlU3ltYm9scz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjcmVxdWlyZV91cHBlcmNhc2UgQ29nbml0b1VzZXJQb29sI3JlcXVpcmVfdXBwZXJjYXNlfVxuICAqL1xuICByZWFkb25seSByZXF1aXJlVXBwZXJjYXNlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCN0ZW1wb3JhcnlfcGFzc3dvcmRfdmFsaWRpdHlfZGF5cyBDb2duaXRvVXNlclBvb2wjdGVtcG9yYXJ5X3Bhc3N3b3JkX3ZhbGlkaXR5X2RheXN9XG4gICovXG4gIHJlYWRvbmx5IHRlbXBvcmFyeVBhc3N3b3JkVmFsaWRpdHlEYXlzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29nbml0b1VzZXJQb29sUGFzc3dvcmRQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xQYXNzd29yZFBvbGljeU91dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbFBhc3N3b3JkUG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1pbmltdW1fbGVuZ3RoOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1pbmltdW1MZW5ndGgpLFxuICAgIHJlcXVpcmVfbG93ZXJjYXNlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5yZXF1aXJlTG93ZXJjYXNlKSxcbiAgICByZXF1aXJlX251bWJlcnM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJlcXVpcmVOdW1iZXJzKSxcbiAgICByZXF1aXJlX3N5bWJvbHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJlcXVpcmVTeW1ib2xzKSxcbiAgICByZXF1aXJlX3VwcGVyY2FzZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucmVxdWlyZVVwcGVyY2FzZSksXG4gICAgdGVtcG9yYXJ5X3Bhc3N3b3JkX3ZhbGlkaXR5X2RheXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGVtcG9yYXJ5UGFzc3dvcmRWYWxpZGl0eURheXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbFBhc3N3b3JkUG9saWN5VG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sUGFzc3dvcmRQb2xpY3lPdXRwdXRSZWZlcmVuY2UgfCBDb2duaXRvVXNlclBvb2xQYXNzd29yZFBvbGljeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbWluaW11bV9sZW5ndGg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm1pbmltdW1MZW5ndGgpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICAgIHJlcXVpcmVfbG93ZXJjYXNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVxdWlyZUxvd2VyY2FzZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIHJlcXVpcmVfbnVtYmVyczoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlcXVpcmVOdW1iZXJzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiYm9vbGVhblwiLFxuICAgIH0sXG4gICAgcmVxdWlyZV9zeW1ib2xzOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVxdWlyZVN5bWJvbHMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICByZXF1aXJlX3VwcGVyY2FzZToge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnJlcXVpcmVVcHBlcmNhc2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICB0ZW1wb3JhcnlfcGFzc3dvcmRfdmFsaWRpdHlfZGF5czoge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEudGVtcG9yYXJ5UGFzc3dvcmRWYWxpZGl0eURheXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29nbml0b1VzZXJQb29sUGFzc3dvcmRQb2xpY3lPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZ25pdG9Vc2VyUG9vbFBhc3N3b3JkUG9saWN5IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9taW5pbXVtTGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1pbmltdW1MZW5ndGggPSB0aGlzLl9taW5pbXVtTGVuZ3RoO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVxdWlyZUxvd2VyY2FzZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXF1aXJlTG93ZXJjYXNlID0gdGhpcy5fcmVxdWlyZUxvd2VyY2FzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlcXVpcmVOdW1iZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlcXVpcmVOdW1iZXJzID0gdGhpcy5fcmVxdWlyZU51bWJlcnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXF1aXJlU3ltYm9scyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXF1aXJlU3ltYm9scyA9IHRoaXMuX3JlcXVpcmVTeW1ib2xzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVxdWlyZVVwcGVyY2FzZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXF1aXJlVXBwZXJjYXNlID0gdGhpcy5fcmVxdWlyZVVwcGVyY2FzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RlbXBvcmFyeVBhc3N3b3JkVmFsaWRpdHlEYXlzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRlbXBvcmFyeVBhc3N3b3JkVmFsaWRpdHlEYXlzID0gdGhpcy5fdGVtcG9yYXJ5UGFzc3dvcmRWYWxpZGl0eURheXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2duaXRvVXNlclBvb2xQYXNzd29yZFBvbGljeSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21pbmltdW1MZW5ndGggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXF1aXJlTG93ZXJjYXNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVxdWlyZU51bWJlcnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXF1aXJlU3ltYm9scyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlcXVpcmVVcHBlcmNhc2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90ZW1wb3JhcnlQYXNzd29yZFZhbGlkaXR5RGF5cyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWluaW11bUxlbmd0aCA9IHZhbHVlLm1pbmltdW1MZW5ndGg7XG4gICAgICB0aGlzLl9yZXF1aXJlTG93ZXJjYXNlID0gdmFsdWUucmVxdWlyZUxvd2VyY2FzZTtcbiAgICAgIHRoaXMuX3JlcXVpcmVOdW1iZXJzID0gdmFsdWUucmVxdWlyZU51bWJlcnM7XG4gICAgICB0aGlzLl9yZXF1aXJlU3ltYm9scyA9IHZhbHVlLnJlcXVpcmVTeW1ib2xzO1xuICAgICAgdGhpcy5fcmVxdWlyZVVwcGVyY2FzZSA9IHZhbHVlLnJlcXVpcmVVcHBlcmNhc2U7XG4gICAgICB0aGlzLl90ZW1wb3JhcnlQYXNzd29yZFZhbGlkaXR5RGF5cyA9IHZhbHVlLnRlbXBvcmFyeVBhc3N3b3JkVmFsaWRpdHlEYXlzO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1pbmltdW1fbGVuZ3RoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21pbmltdW1MZW5ndGg/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1pbmltdW1MZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5pbXVtX2xlbmd0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWluaW11bUxlbmd0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluaW11bUxlbmd0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1pbmltdW1MZW5ndGgoKSB7XG4gICAgdGhpcy5fbWluaW11bUxlbmd0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluaW11bUxlbmd0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9taW5pbXVtTGVuZ3RoO1xuICB9XG5cbiAgLy8gcmVxdWlyZV9sb3dlcmNhc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVxdWlyZUxvd2VyY2FzZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVxdWlyZUxvd2VyY2FzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXF1aXJlX2xvd2VyY2FzZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWlyZUxvd2VyY2FzZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVxdWlyZUxvd2VyY2FzZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcXVpcmVMb3dlcmNhc2UoKSB7XG4gICAgdGhpcy5fcmVxdWlyZUxvd2VyY2FzZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWlyZUxvd2VyY2FzZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlTG93ZXJjYXNlO1xuICB9XG5cbiAgLy8gcmVxdWlyZV9udW1iZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcXVpcmVOdW1iZXJzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByZXF1aXJlTnVtYmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXF1aXJlX251bWJlcnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcXVpcmVOdW1iZXJzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9yZXF1aXJlTnVtYmVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcXVpcmVOdW1iZXJzKCkge1xuICAgIHRoaXMuX3JlcXVpcmVOdW1iZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1aXJlTnVtYmVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlTnVtYmVycztcbiAgfVxuXG4gIC8vIHJlcXVpcmVfc3ltYm9scyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1aXJlU3ltYm9scz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVxdWlyZVN5bWJvbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncmVxdWlyZV9zeW1ib2xzJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXF1aXJlU3ltYm9scyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVxdWlyZVN5bWJvbHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1aXJlU3ltYm9scygpIHtcbiAgICB0aGlzLl9yZXF1aXJlU3ltYm9scyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWlyZVN5bWJvbHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZVN5bWJvbHM7XG4gIH1cblxuICAvLyByZXF1aXJlX3VwcGVyY2FzZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1aXJlVXBwZXJjYXNlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByZXF1aXJlVXBwZXJjYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlcXVpcmVfdXBwZXJjYXNlJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXF1aXJlVXBwZXJjYXNlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9yZXF1aXJlVXBwZXJjYXNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVxdWlyZVVwcGVyY2FzZSgpIHtcbiAgICB0aGlzLl9yZXF1aXJlVXBwZXJjYXNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1aXJlVXBwZXJjYXNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVVcHBlcmNhc2U7XG4gIH1cblxuICAvLyB0ZW1wb3JhcnlfcGFzc3dvcmRfdmFsaWRpdHlfZGF5cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90ZW1wb3JhcnlQYXNzd29yZFZhbGlkaXR5RGF5cz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGVtcG9yYXJ5UGFzc3dvcmRWYWxpZGl0eURheXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0ZW1wb3JhcnlfcGFzc3dvcmRfdmFsaWRpdHlfZGF5cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGVtcG9yYXJ5UGFzc3dvcmRWYWxpZGl0eURheXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RlbXBvcmFyeVBhc3N3b3JkVmFsaWRpdHlEYXlzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGVtcG9yYXJ5UGFzc3dvcmRWYWxpZGl0eURheXMoKSB7XG4gICAgdGhpcy5fdGVtcG9yYXJ5UGFzc3dvcmRWYWxpZGl0eURheXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRlbXBvcmFyeVBhc3N3b3JkVmFsaWRpdHlEYXlzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBvcmFyeVBhc3N3b3JkVmFsaWRpdHlEYXlzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZ25pdG9Vc2VyUG9vbFNjaGVtYU51bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjbWF4X3ZhbHVlIENvZ25pdG9Vc2VyUG9vbCNtYXhfdmFsdWV9XG4gICovXG4gIHJlYWRvbmx5IG1heFZhbHVlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNtaW5fdmFsdWUgQ29nbml0b1VzZXJQb29sI21pbl92YWx1ZX1cbiAgKi9cbiAgcmVhZG9ubHkgbWluVmFsdWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xTY2hlbWFOdW1iZXJBdHRyaWJ1dGVDb25zdHJhaW50c1RvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbFNjaGVtYU51bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzT3V0cHV0UmVmZXJlbmNlIHwgQ29nbml0b1VzZXJQb29sU2NoZW1hTnVtYmVyQXR0cmlidXRlQ29uc3RyYWludHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWF4X3ZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFZhbHVlKSxcbiAgICBtaW5fdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWluVmFsdWUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbFNjaGVtYU51bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sU2NoZW1hTnVtYmVyQXR0cmlidXRlQ29uc3RyYWludHNPdXRwdXRSZWZlcmVuY2UgfCBDb2duaXRvVXNlclBvb2xTY2hlbWFOdW1iZXJBdHRyaWJ1dGVDb25zdHJhaW50cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbWF4X3ZhbHVlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tYXhWYWx1ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbWluX3ZhbHVlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5taW5WYWx1ZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2xTY2hlbWFOdW1iZXJBdHRyaWJ1dGVDb25zdHJhaW50c091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29nbml0b1VzZXJQb29sU2NoZW1hTnVtYmVyQXR0cmlidXRlQ29uc3RyYWludHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21heFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heFZhbHVlID0gdGhpcy5fbWF4VmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9taW5WYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5taW5WYWx1ZSA9IHRoaXMuX21pblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29nbml0b1VzZXJQb29sU2NoZW1hTnVtYmVyQXR0cmlidXRlQ29uc3RyYWludHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9tYXhWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21pblZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXhWYWx1ZSA9IHZhbHVlLm1heFZhbHVlO1xuICAgICAgdGhpcy5fbWluVmFsdWUgPSB2YWx1ZS5taW5WYWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBtYXhfdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4VmFsdWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1heFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWF4X3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWF4VmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhWYWx1ZSgpIHtcbiAgICB0aGlzLl9tYXhWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4VmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4VmFsdWU7XG4gIH1cblxuICAvLyBtaW5fdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWluVmFsdWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1pblZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWluX3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5WYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWluVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNaW5WYWx1ZSgpIHtcbiAgICB0aGlzLl9taW5WYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluVmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sU2NoZW1hU3RyaW5nQXR0cmlidXRlQ29uc3RyYWludHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNtYXhfbGVuZ3RoIENvZ25pdG9Vc2VyUG9vbCNtYXhfbGVuZ3RofVxuICAqL1xuICByZWFkb25seSBtYXhMZW5ndGg/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI21pbl9sZW5ndGggQ29nbml0b1VzZXJQb29sI21pbl9sZW5ndGh9XG4gICovXG4gIHJlYWRvbmx5IG1pbkxlbmd0aD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbFNjaGVtYVN0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sU2NoZW1hU3RyaW5nQXR0cmlidXRlQ29uc3RyYWludHNPdXRwdXRSZWZlcmVuY2UgfCBDb2duaXRvVXNlclBvb2xTY2hlbWFTdHJpbmdBdHRyaWJ1dGVDb25zdHJhaW50cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfbGVuZ3RoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heExlbmd0aCksXG4gICAgbWluX2xlbmd0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5taW5MZW5ndGgpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbFNjaGVtYVN0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sU2NoZW1hU3RyaW5nQXR0cmlidXRlQ29uc3RyYWludHNPdXRwdXRSZWZlcmVuY2UgfCBDb2duaXRvVXNlclBvb2xTY2hlbWFTdHJpbmdBdHRyaWJ1dGVDb25zdHJhaW50cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbWF4X2xlbmd0aDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEubWF4TGVuZ3RoKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtaW5fbGVuZ3RoOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5taW5MZW5ndGgpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29nbml0b1VzZXJQb29sU2NoZW1hU3RyaW5nQXR0cmlidXRlQ29uc3RyYWludHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZ25pdG9Vc2VyUG9vbFNjaGVtYVN0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tYXhMZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4TGVuZ3RoID0gdGhpcy5fbWF4TGVuZ3RoO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWluTGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1pbkxlbmd0aCA9IHRoaXMuX21pbkxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZ25pdG9Vc2VyUG9vbFNjaGVtYVN0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWF4TGVuZ3RoID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWluTGVuZ3RoID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXhMZW5ndGggPSB2YWx1ZS5tYXhMZW5ndGg7XG4gICAgICB0aGlzLl9taW5MZW5ndGggPSB2YWx1ZS5taW5MZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgLy8gbWF4X2xlbmd0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhMZW5ndGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1heExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21heF9sZW5ndGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heExlbmd0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWF4TGVuZ3RoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4TGVuZ3RoKCkge1xuICAgIHRoaXMuX21heExlbmd0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4TGVuZ3RoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heExlbmd0aDtcbiAgfVxuXG4gIC8vIG1pbl9sZW5ndGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWluTGVuZ3RoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtaW5MZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtaW5fbGVuZ3RoJyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5MZW5ndGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21pbkxlbmd0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1pbkxlbmd0aCgpIHtcbiAgICB0aGlzLl9taW5MZW5ndGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1pbkxlbmd0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9taW5MZW5ndGg7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sU2NoZW1hIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjYXR0cmlidXRlX2RhdGFfdHlwZSBDb2duaXRvVXNlclBvb2wjYXR0cmlidXRlX2RhdGFfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgYXR0cmlidXRlRGF0YVR5cGU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjZGV2ZWxvcGVyX29ubHlfYXR0cmlidXRlIENvZ25pdG9Vc2VyUG9vbCNkZXZlbG9wZXJfb25seV9hdHRyaWJ1dGV9XG4gICovXG4gIHJlYWRvbmx5IGRldmVsb3Blck9ubHlBdHRyaWJ1dGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI211dGFibGUgQ29nbml0b1VzZXJQb29sI211dGFibGV9XG4gICovXG4gIHJlYWRvbmx5IG11dGFibGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI25hbWUgQ29nbml0b1VzZXJQb29sI25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjcmVxdWlyZWQgQ29nbml0b1VzZXJQb29sI3JlcXVpcmVkfVxuICAqL1xuICByZWFkb25seSByZXF1aXJlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogbnVtYmVyX2F0dHJpYnV0ZV9jb25zdHJhaW50cyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjbnVtYmVyX2F0dHJpYnV0ZV9jb25zdHJhaW50cyBDb2duaXRvVXNlclBvb2wjbnVtYmVyX2F0dHJpYnV0ZV9jb25zdHJhaW50c31cbiAgKi9cbiAgcmVhZG9ubHkgbnVtYmVyQXR0cmlidXRlQ29uc3RyYWludHM/OiBDb2duaXRvVXNlclBvb2xTY2hlbWFOdW1iZXJBdHRyaWJ1dGVDb25zdHJhaW50cztcbiAgLyoqXG4gICogc3RyaW5nX2F0dHJpYnV0ZV9jb25zdHJhaW50cyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjc3RyaW5nX2F0dHJpYnV0ZV9jb25zdHJhaW50cyBDb2duaXRvVXNlclBvb2wjc3RyaW5nX2F0dHJpYnV0ZV9jb25zdHJhaW50c31cbiAgKi9cbiAgcmVhZG9ubHkgc3RyaW5nQXR0cmlidXRlQ29uc3RyYWludHM/OiBDb2duaXRvVXNlclBvb2xTY2hlbWFTdHJpbmdBdHRyaWJ1dGVDb25zdHJhaW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbFNjaGVtYVRvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbFNjaGVtYSB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGF0dHJpYnV0ZV9kYXRhX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXR0cmlidXRlRGF0YVR5cGUpLFxuICAgIGRldmVsb3Blcl9vbmx5X2F0dHJpYnV0ZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZGV2ZWxvcGVyT25seUF0dHJpYnV0ZSksXG4gICAgbXV0YWJsZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEubXV0YWJsZSksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICByZXF1aXJlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucmVxdWlyZWQpLFxuICAgIG51bWJlcl9hdHRyaWJ1dGVfY29uc3RyYWludHM6IGNvZ25pdG9Vc2VyUG9vbFNjaGVtYU51bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzVG9UZXJyYWZvcm0oc3RydWN0IS5udW1iZXJBdHRyaWJ1dGVDb25zdHJhaW50cyksXG4gICAgc3RyaW5nX2F0dHJpYnV0ZV9jb25zdHJhaW50czogY29nbml0b1VzZXJQb29sU2NoZW1hU3RyaW5nQXR0cmlidXRlQ29uc3RyYWludHNUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xTY2hlbWFUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xTY2hlbWEgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYXR0cmlidXRlX2RhdGFfdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYXR0cmlidXRlRGF0YVR5cGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGRldmVsb3Blcl9vbmx5X2F0dHJpYnV0ZToge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRldmVsb3Blck9ubHlBdHRyaWJ1dGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBtdXRhYmxlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEubXV0YWJsZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHJlcXVpcmVkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEucmVxdWlyZWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgICBudW1iZXJfYXR0cmlidXRlX2NvbnN0cmFpbnRzOiB7XG4gICAgICB2YWx1ZTogY29nbml0b1VzZXJQb29sU2NoZW1hTnVtYmVyQXR0cmlidXRlQ29uc3RyYWludHNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLm51bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ29nbml0b1VzZXJQb29sU2NoZW1hTnVtYmVyQXR0cmlidXRlQ29uc3RyYWludHNMaXN0XCIsXG4gICAgfSxcbiAgICBzdHJpbmdfYXR0cmlidXRlX2NvbnN0cmFpbnRzOiB7XG4gICAgICB2YWx1ZTogY29nbml0b1VzZXJQb29sU2NoZW1hU3RyaW5nQXR0cmlidXRlQ29uc3RyYWludHNUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnN0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ29nbml0b1VzZXJQb29sU2NoZW1hU3RyaW5nQXR0cmlidXRlQ29uc3RyYWludHNMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENvZ25pdG9Vc2VyUG9vbFNjaGVtYU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2duaXRvVXNlclBvb2xTY2hlbWEgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMucmVzb2x2YWJsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvbHZhYmxlVmFsdWU7XG4gICAgfVxuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2F0dHJpYnV0ZURhdGFUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF0dHJpYnV0ZURhdGFUeXBlID0gdGhpcy5fYXR0cmlidXRlRGF0YVR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZXZlbG9wZXJPbmx5QXR0cmlidXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRldmVsb3Blck9ubHlBdHRyaWJ1dGUgPSB0aGlzLl9kZXZlbG9wZXJPbmx5QXR0cmlidXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbXV0YWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tdXRhYmxlID0gdGhpcy5fbXV0YWJsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXF1aXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXF1aXJlZCA9IHRoaXMuX3JlcXVpcmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbnVtYmVyQXR0cmlidXRlQ29uc3RyYWludHM/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubnVtYmVyQXR0cmlidXRlQ29uc3RyYWludHMgPSB0aGlzLl9udW1iZXJBdHRyaWJ1dGVDb25zdHJhaW50cz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzID0gdGhpcy5fc3RyaW5nQXR0cmlidXRlQ29uc3RyYWludHM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2duaXRvVXNlclBvb2xTY2hlbWEgfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzb2x2YWJsZVZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXR0cmlidXRlRGF0YVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZXZlbG9wZXJPbmx5QXR0cmlidXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbXV0YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXF1aXJlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX251bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdHJpbmdBdHRyaWJ1dGVDb25zdHJhaW50cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2F0dHJpYnV0ZURhdGFUeXBlID0gdmFsdWUuYXR0cmlidXRlRGF0YVR5cGU7XG4gICAgICB0aGlzLl9kZXZlbG9wZXJPbmx5QXR0cmlidXRlID0gdmFsdWUuZGV2ZWxvcGVyT25seUF0dHJpYnV0ZTtcbiAgICAgIHRoaXMuX211dGFibGUgPSB2YWx1ZS5tdXRhYmxlO1xuICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgICB0aGlzLl9yZXF1aXJlZCA9IHZhbHVlLnJlcXVpcmVkO1xuICAgICAgdGhpcy5fbnVtYmVyQXR0cmlidXRlQ29uc3RyYWludHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLm51bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzO1xuICAgICAgdGhpcy5fc3RyaW5nQXR0cmlidXRlQ29uc3RyYWludHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnN0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGF0dHJpYnV0ZV9kYXRhX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXR0cmlidXRlRGF0YVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF0dHJpYnV0ZURhdGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXR0cmlidXRlX2RhdGFfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXR0cmlidXRlRGF0YVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F0dHJpYnV0ZURhdGFUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF0dHJpYnV0ZURhdGFUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHJpYnV0ZURhdGFUeXBlO1xuICB9XG5cbiAgLy8gZGV2ZWxvcGVyX29ubHlfYXR0cmlidXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RldmVsb3Blck9ubHlBdHRyaWJ1dGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGRldmVsb3Blck9ubHlBdHRyaWJ1dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGV2ZWxvcGVyX29ubHlfYXR0cmlidXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXZlbG9wZXJPbmx5QXR0cmlidXRlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9kZXZlbG9wZXJPbmx5QXR0cmlidXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGV2ZWxvcGVyT25seUF0dHJpYnV0ZSgpIHtcbiAgICB0aGlzLl9kZXZlbG9wZXJPbmx5QXR0cmlidXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXZlbG9wZXJPbmx5QXR0cmlidXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmVsb3Blck9ubHlBdHRyaWJ1dGU7XG4gIH1cblxuICAvLyBtdXRhYmxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX211dGFibGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IG11dGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnbXV0YWJsZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbXV0YWJsZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fbXV0YWJsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE11dGFibGUoKSB7XG4gICAgdGhpcy5fbXV0YWJsZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbXV0YWJsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tdXRhYmxlO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyByZXF1aXJlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1aXJlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVxdWlyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcXVpcmVkKCkge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1aXJlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuXG4gIC8vIG51bWJlcl9hdHRyaWJ1dGVfY29uc3RyYWludHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbnVtYmVyQXR0cmlidXRlQ29uc3RyYWludHMgPSBuZXcgQ29nbml0b1VzZXJQb29sU2NoZW1hTnVtYmVyQXR0cmlidXRlQ29uc3RyYWludHNPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJudW1iZXJfYXR0cmlidXRlX2NvbnN0cmFpbnRzXCIpO1xuICBwdWJsaWMgZ2V0IG51bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9udW1iZXJBdHRyaWJ1dGVDb25zdHJhaW50cztcbiAgfVxuICBwdWJsaWMgcHV0TnVtYmVyQXR0cmlidXRlQ29uc3RyYWludHModmFsdWU6IENvZ25pdG9Vc2VyUG9vbFNjaGVtYU51bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzKSB7XG4gICAgdGhpcy5fbnVtYmVyQXR0cmlidXRlQ29uc3RyYWludHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE51bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzKCkge1xuICAgIHRoaXMuX251bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG51bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzdHJpbmdfYXR0cmlidXRlX2NvbnN0cmFpbnRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzID0gbmV3IENvZ25pdG9Vc2VyUG9vbFNjaGVtYVN0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwic3RyaW5nX2F0dHJpYnV0ZV9jb25zdHJhaW50c1wiKTtcbiAgcHVibGljIGdldCBzdHJpbmdBdHRyaWJ1dGVDb25zdHJhaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyaW5nQXR0cmlidXRlQ29uc3RyYWludHM7XG4gIH1cbiAgcHVibGljIHB1dFN0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzKHZhbHVlOiBDb2duaXRvVXNlclBvb2xTY2hlbWFTdHJpbmdBdHRyaWJ1dGVDb25zdHJhaW50cykge1xuICAgIHRoaXMuX3N0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdHJpbmdBdHRyaWJ1dGVDb25zdHJhaW50cygpIHtcbiAgICB0aGlzLl9zdHJpbmdBdHRyaWJ1dGVDb25zdHJhaW50cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdHJpbmdBdHRyaWJ1dGVDb25zdHJhaW50c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdHJpbmdBdHRyaWJ1dGVDb25zdHJhaW50cy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2xTY2hlbWFMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleExpc3Qge1xuICBwdWJsaWMgaW50ZXJuYWxWYWx1ZT8gOiBDb2duaXRvVXNlclBvb2xTY2hlbWFbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogQ29nbml0b1VzZXJQb29sU2NoZW1hT3V0cHV0UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IENvZ25pdG9Vc2VyUG9vbFNjaGVtYU91dHB1dFJlZmVyZW5jZSh0aGlzLnRlcnJhZm9ybVJlc291cmNlLCB0aGlzLnRlcnJhZm9ybUF0dHJpYnV0ZSwgaW5kZXgsIHRoaXMud3JhcHNTZXQpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZ25pdG9Vc2VyUG9vbFNtc0NvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNleHRlcm5hbF9pZCBDb2duaXRvVXNlclBvb2wjZXh0ZXJuYWxfaWR9XG4gICovXG4gIHJlYWRvbmx5IGV4dGVybmFsSWQ6IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjc25zX2NhbGxlcl9hcm4gQ29nbml0b1VzZXJQb29sI3Nuc19jYWxsZXJfYXJufVxuICAqL1xuICByZWFkb25seSBzbnNDYWxsZXJBcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbFNtc0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xTbXNDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQ29nbml0b1VzZXJQb29sU21zQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBleHRlcm5hbF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5leHRlcm5hbElkKSxcbiAgICBzbnNfY2FsbGVyX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zbnNDYWxsZXJBcm4pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbFNtc0NvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xTbXNDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQ29nbml0b1VzZXJQb29sU21zQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZXh0ZXJuYWxfaWQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmV4dGVybmFsSWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHNuc19jYWxsZXJfYXJuOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zbnNDYWxsZXJBcm4pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29nbml0b1VzZXJQb29sU21zQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29nbml0b1VzZXJQb29sU21zQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZXh0ZXJuYWxJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5leHRlcm5hbElkID0gdGhpcy5fZXh0ZXJuYWxJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Nuc0NhbGxlckFybiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zbnNDYWxsZXJBcm4gPSB0aGlzLl9zbnNDYWxsZXJBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2duaXRvVXNlclBvb2xTbXNDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZXh0ZXJuYWxJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nuc0NhbGxlckFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZXh0ZXJuYWxJZCA9IHZhbHVlLmV4dGVybmFsSWQ7XG4gICAgICB0aGlzLl9zbnNDYWxsZXJBcm4gPSB2YWx1ZS5zbnNDYWxsZXJBcm47XG4gICAgfVxuICB9XG5cbiAgLy8gZXh0ZXJuYWxfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZXh0ZXJuYWxJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXh0ZXJuYWxJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4dGVybmFsX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBleHRlcm5hbElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9leHRlcm5hbElkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4dGVybmFsSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZXJuYWxJZDtcbiAgfVxuXG4gIC8vIHNuc19jYWxsZXJfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Nuc0NhbGxlckFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc25zQ2FsbGVyQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc25zX2NhbGxlcl9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNuc0NhbGxlckFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc25zQ2FsbGVyQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNuc0NhbGxlckFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zbnNDYWxsZXJBcm47XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sU29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNlbmFibGVkIENvZ25pdG9Vc2VyUG9vbCNlbmFibGVkfVxuICAqL1xuICByZWFkb25seSBlbmFibGVkOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xTb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbFNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQ29nbml0b1VzZXJQb29sU29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY29nbml0b1VzZXJQb29sU29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xTb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbFNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBlbmFibGVkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29nbml0b1VzZXJQb29sU29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZ25pdG9Vc2VyUG9vbFNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZWQgPSB0aGlzLl9lbmFibGVkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29nbml0b1VzZXJQb29sU29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdmFsdWUuZW5hYmxlZDtcbiAgICB9XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sVXNlclBvb2xBZGRPbnMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNhZHZhbmNlZF9zZWN1cml0eV9tb2RlIENvZ25pdG9Vc2VyUG9vbCNhZHZhbmNlZF9zZWN1cml0eV9tb2RlfVxuICAqL1xuICByZWFkb25seSBhZHZhbmNlZFNlY3VyaXR5TW9kZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29nbml0b1VzZXJQb29sVXNlclBvb2xBZGRPbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xVc2VyUG9vbEFkZE9uc091dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbFVzZXJQb29sQWRkT25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFkdmFuY2VkX3NlY3VyaXR5X21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWR2YW5jZWRTZWN1cml0eU1vZGUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbFVzZXJQb29sQWRkT25zVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sVXNlclBvb2xBZGRPbnNPdXRwdXRSZWZlcmVuY2UgfCBDb2duaXRvVXNlclBvb2xVc2VyUG9vbEFkZE9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYWR2YW5jZWRfc2VjdXJpdHlfbW9kZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWR2YW5jZWRTZWN1cml0eU1vZGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29nbml0b1VzZXJQb29sVXNlclBvb2xBZGRPbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZ25pdG9Vc2VyUG9vbFVzZXJQb29sQWRkT25zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hZHZhbmNlZFNlY3VyaXR5TW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hZHZhbmNlZFNlY3VyaXR5TW9kZSA9IHRoaXMuX2FkdmFuY2VkU2VjdXJpdHlNb2RlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29nbml0b1VzZXJQb29sVXNlclBvb2xBZGRPbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hZHZhbmNlZFNlY3VyaXR5TW9kZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYWR2YW5jZWRTZWN1cml0eU1vZGUgPSB2YWx1ZS5hZHZhbmNlZFNlY3VyaXR5TW9kZTtcbiAgICB9XG4gIH1cblxuICAvLyBhZHZhbmNlZF9zZWN1cml0eV9tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FkdmFuY2VkU2VjdXJpdHlNb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhZHZhbmNlZFNlY3VyaXR5TW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FkdmFuY2VkX3NlY3VyaXR5X21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFkdmFuY2VkU2VjdXJpdHlNb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hZHZhbmNlZFNlY3VyaXR5TW9kZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhZHZhbmNlZFNlY3VyaXR5TW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hZHZhbmNlZFNlY3VyaXR5TW9kZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2duaXRvVXNlclBvb2xVc2VybmFtZUNvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNjYXNlX3NlbnNpdGl2ZSBDb2duaXRvVXNlclBvb2wjY2FzZV9zZW5zaXRpdmV9XG4gICovXG4gIHJlYWRvbmx5IGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbFVzZXJuYW1lQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbFVzZXJuYW1lQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbFVzZXJuYW1lQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjYXNlX3NlbnNpdGl2ZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuY2FzZVNlbnNpdGl2ZSksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY29nbml0b1VzZXJQb29sVXNlcm5hbWVDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sVXNlcm5hbWVDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQ29nbml0b1VzZXJQb29sVXNlcm5hbWVDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjYXNlX3NlbnNpdGl2ZToge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNhc2VTZW5zaXRpdmUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIENvZ25pdG9Vc2VyUG9vbFVzZXJuYW1lQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29nbml0b1VzZXJQb29sVXNlcm5hbWVDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jYXNlU2Vuc2l0aXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhc2VTZW5zaXRpdmUgPSB0aGlzLl9jYXNlU2Vuc2l0aXZlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29nbml0b1VzZXJQb29sVXNlcm5hbWVDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2FzZVNlbnNpdGl2ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2FzZVNlbnNpdGl2ZSA9IHZhbHVlLmNhc2VTZW5zaXRpdmU7XG4gICAgfVxuICB9XG5cbiAgLy8gY2FzZV9zZW5zaXRpdmUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY2FzZVNlbnNpdGl2ZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgY2FzZVNlbnNpdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjYXNlX3NlbnNpdGl2ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2FzZVNlbnNpdGl2ZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY2FzZVNlbnNpdGl2ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXNlU2Vuc2l0aXZlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nhc2VTZW5zaXRpdmU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sVmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjZGVmYXVsdF9lbWFpbF9vcHRpb24gQ29nbml0b1VzZXJQb29sI2RlZmF1bHRfZW1haWxfb3B0aW9ufVxuICAqL1xuICByZWFkb25seSBkZWZhdWx0RW1haWxPcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2NvZ25pdG9fdXNlcl9wb29sI2VtYWlsX21lc3NhZ2UgQ29nbml0b1VzZXJQb29sI2VtYWlsX21lc3NhZ2V9XG4gICovXG4gIHJlYWRvbmx5IGVtYWlsTWVzc2FnZT86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjZW1haWxfbWVzc2FnZV9ieV9saW5rIENvZ25pdG9Vc2VyUG9vbCNlbWFpbF9tZXNzYWdlX2J5X2xpbmt9XG4gICovXG4gIHJlYWRvbmx5IGVtYWlsTWVzc2FnZUJ5TGluaz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjZW1haWxfc3ViamVjdCBDb2duaXRvVXNlclBvb2wjZW1haWxfc3ViamVjdH1cbiAgKi9cbiAgcmVhZG9ubHkgZW1haWxTdWJqZWN0Pzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNlbWFpbF9zdWJqZWN0X2J5X2xpbmsgQ29nbml0b1VzZXJQb29sI2VtYWlsX3N1YmplY3RfYnlfbGlua31cbiAgKi9cbiAgcmVhZG9ubHkgZW1haWxTdWJqZWN0QnlMaW5rPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCNzbXNfbWVzc2FnZSBDb2duaXRvVXNlclBvb2wjc21zX21lc3NhZ2V9XG4gICovXG4gIHJlYWRvbmx5IHNtc01lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xWZXJpZmljYXRpb25NZXNzYWdlVGVtcGxhdGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xWZXJpZmljYXRpb25NZXNzYWdlVGVtcGxhdGVPdXRwdXRSZWZlcmVuY2UgfCBDb2duaXRvVXNlclBvb2xWZXJpZmljYXRpb25NZXNzYWdlVGVtcGxhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGVmYXVsdF9lbWFpbF9vcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVmYXVsdEVtYWlsT3B0aW9uKSxcbiAgICBlbWFpbF9tZXNzYWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVtYWlsTWVzc2FnZSksXG4gICAgZW1haWxfbWVzc2FnZV9ieV9saW5rOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVtYWlsTWVzc2FnZUJ5TGluayksXG4gICAgZW1haWxfc3ViamVjdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbWFpbFN1YmplY3QpLFxuICAgIGVtYWlsX3N1YmplY3RfYnlfbGluazogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbWFpbFN1YmplY3RCeUxpbmspLFxuICAgIHNtc19tZXNzYWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNtc01lc3NhZ2UpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbFZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZVRvSGNsVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbFZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZU91dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbFZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZGVmYXVsdF9lbWFpbF9vcHRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRFbWFpbE9wdGlvbiksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZW1haWxfbWVzc2FnZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZW1haWxNZXNzYWdlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBlbWFpbF9tZXNzYWdlX2J5X2xpbms6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmVtYWlsTWVzc2FnZUJ5TGluayksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgZW1haWxfc3ViamVjdDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZW1haWxTdWJqZWN0KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBlbWFpbF9zdWJqZWN0X2J5X2xpbms6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmVtYWlsU3ViamVjdEJ5TGluayksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgc21zX21lc3NhZ2U6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnNtc01lc3NhZ2UpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29nbml0b1VzZXJQb29sVmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2duaXRvVXNlclBvb2xWZXJpZmljYXRpb25NZXNzYWdlVGVtcGxhdGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RlZmF1bHRFbWFpbE9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWZhdWx0RW1haWxPcHRpb24gPSB0aGlzLl9kZWZhdWx0RW1haWxPcHRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbWFpbE1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW1haWxNZXNzYWdlID0gdGhpcy5fZW1haWxNZXNzYWdlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW1haWxNZXNzYWdlQnlMaW5rICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVtYWlsTWVzc2FnZUJ5TGluayA9IHRoaXMuX2VtYWlsTWVzc2FnZUJ5TGluaztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VtYWlsU3ViamVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbWFpbFN1YmplY3QgPSB0aGlzLl9lbWFpbFN1YmplY3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbWFpbFN1YmplY3RCeUxpbmsgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW1haWxTdWJqZWN0QnlMaW5rID0gdGhpcy5fZW1haWxTdWJqZWN0QnlMaW5rO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc21zTWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zbXNNZXNzYWdlID0gdGhpcy5fc21zTWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZ25pdG9Vc2VyUG9vbFZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RlZmF1bHRFbWFpbE9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2VtYWlsTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2VtYWlsTWVzc2FnZUJ5TGluayA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2VtYWlsU3ViamVjdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2VtYWlsU3ViamVjdEJ5TGluayA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Ntc01lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RlZmF1bHRFbWFpbE9wdGlvbiA9IHZhbHVlLmRlZmF1bHRFbWFpbE9wdGlvbjtcbiAgICAgIHRoaXMuX2VtYWlsTWVzc2FnZSA9IHZhbHVlLmVtYWlsTWVzc2FnZTtcbiAgICAgIHRoaXMuX2VtYWlsTWVzc2FnZUJ5TGluayA9IHZhbHVlLmVtYWlsTWVzc2FnZUJ5TGluaztcbiAgICAgIHRoaXMuX2VtYWlsU3ViamVjdCA9IHZhbHVlLmVtYWlsU3ViamVjdDtcbiAgICAgIHRoaXMuX2VtYWlsU3ViamVjdEJ5TGluayA9IHZhbHVlLmVtYWlsU3ViamVjdEJ5TGluaztcbiAgICAgIHRoaXMuX3Ntc01lc3NhZ2UgPSB2YWx1ZS5zbXNNZXNzYWdlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlZmF1bHRfZW1haWxfb3B0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlZmF1bHRFbWFpbE9wdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVmYXVsdEVtYWlsT3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVmYXVsdF9lbWFpbF9vcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmF1bHRFbWFpbE9wdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdEVtYWlsT3B0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVmYXVsdEVtYWlsT3B0aW9uKCkge1xuICAgIHRoaXMuX2RlZmF1bHRFbWFpbE9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdEVtYWlsT3B0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRFbWFpbE9wdGlvbjtcbiAgfVxuXG4gIC8vIGVtYWlsX21lc3NhZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbWFpbE1lc3NhZ2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVtYWlsTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VtYWlsX21lc3NhZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVtYWlsTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW1haWxNZXNzYWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW1haWxNZXNzYWdlKCkge1xuICAgIHRoaXMuX2VtYWlsTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW1haWxNZXNzYWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VtYWlsTWVzc2FnZTtcbiAgfVxuXG4gIC8vIGVtYWlsX21lc3NhZ2VfYnlfbGluayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VtYWlsTWVzc2FnZUJ5TGluaz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZW1haWxNZXNzYWdlQnlMaW5rKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW1haWxfbWVzc2FnZV9ieV9saW5rJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbWFpbE1lc3NhZ2VCeUxpbmsodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VtYWlsTWVzc2FnZUJ5TGluayA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVtYWlsTWVzc2FnZUJ5TGluaygpIHtcbiAgICB0aGlzLl9lbWFpbE1lc3NhZ2VCeUxpbmsgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVtYWlsTWVzc2FnZUJ5TGlua0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbE1lc3NhZ2VCeUxpbms7XG4gIH1cblxuICAvLyBlbWFpbF9zdWJqZWN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW1haWxTdWJqZWN0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbWFpbFN1YmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbWFpbF9zdWJqZWN0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBlbWFpbFN1YmplY3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VtYWlsU3ViamVjdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVtYWlsU3ViamVjdCgpIHtcbiAgICB0aGlzLl9lbWFpbFN1YmplY3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVtYWlsU3ViamVjdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbFN1YmplY3Q7XG4gIH1cblxuICAvLyBlbWFpbF9zdWJqZWN0X2J5X2xpbmsgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbWFpbFN1YmplY3RCeUxpbms/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVtYWlsU3ViamVjdEJ5TGluaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VtYWlsX3N1YmplY3RfYnlfbGluaycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW1haWxTdWJqZWN0QnlMaW5rKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbWFpbFN1YmplY3RCeUxpbmsgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbWFpbFN1YmplY3RCeUxpbmsoKSB7XG4gICAgdGhpcy5fZW1haWxTdWJqZWN0QnlMaW5rID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbWFpbFN1YmplY3RCeUxpbmtJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW1haWxTdWJqZWN0QnlMaW5rO1xuICB9XG5cbiAgLy8gc21zX21lc3NhZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zbXNNZXNzYWdlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzbXNNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc21zX21lc3NhZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNtc01lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Ntc01lc3NhZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTbXNNZXNzYWdlKCkge1xuICAgIHRoaXMuX3Ntc01lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNtc01lc3NhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc21zTWVzc2FnZTtcbiAgfVxufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wgYXdzX2NvZ25pdG9fdXNlcl9wb29sfVxuKi9cbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2wgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiYXdzX2NvZ25pdG9fdXNlcl9wb29sXCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIENvZ25pdG9Vc2VyUG9vbCByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBDb2duaXRvVXNlclBvb2wgdG8gaW1wb3J0XG4gICogQHBhcmFtIGltcG9ydEZyb21JZCBUaGUgaWQgb2YgdGhlIGV4aXN0aW5nIENvZ25pdG9Vc2VyUG9vbCB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvY29nbml0b191c2VyX3Bvb2wjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIENvZ25pdG9Vc2VyUG9vbCB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJhd3NfY29nbml0b191c2VyX3Bvb2xcIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9jb2duaXRvX3VzZXJfcG9vbCBhd3NfY29nbml0b191c2VyX3Bvb2x9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIENvZ25pdG9Vc2VyUG9vbENvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBDb2duaXRvVXNlclBvb2xDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19jb2duaXRvX3VzZXJfcG9vbCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnLFxuICAgICAgICBwcm92aWRlclZlcnNpb246ICczLjc2LjEnLFxuICAgICAgICBwcm92aWRlclZlcnNpb25Db25zdHJhaW50OiAnfj4gMy4wJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlLFxuICAgICAgcHJvdmlzaW9uZXJzOiBjb25maWcucHJvdmlzaW9uZXJzLFxuICAgICAgY29ubmVjdGlvbjogY29uZmlnLmNvbm5lY3Rpb24sXG4gICAgICBmb3JFYWNoOiBjb25maWcuZm9yRWFjaFxuICAgIH0pO1xuICAgIHRoaXMuX2FsaWFzQXR0cmlidXRlcyA9IGNvbmZpZy5hbGlhc0F0dHJpYnV0ZXM7XG4gICAgdGhpcy5fYXV0b1ZlcmlmaWVkQXR0cmlidXRlcyA9IGNvbmZpZy5hdXRvVmVyaWZpZWRBdHRyaWJ1dGVzO1xuICAgIHRoaXMuX2VtYWlsVmVyaWZpY2F0aW9uTWVzc2FnZSA9IGNvbmZpZy5lbWFpbFZlcmlmaWNhdGlvbk1lc3NhZ2U7XG4gICAgdGhpcy5fZW1haWxWZXJpZmljYXRpb25TdWJqZWN0ID0gY29uZmlnLmVtYWlsVmVyaWZpY2F0aW9uU3ViamVjdDtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9tZmFDb25maWd1cmF0aW9uID0gY29uZmlnLm1mYUNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3Ntc0F1dGhlbnRpY2F0aW9uTWVzc2FnZSA9IGNvbmZpZy5zbXNBdXRoZW50aWNhdGlvbk1lc3NhZ2U7XG4gICAgdGhpcy5fc21zVmVyaWZpY2F0aW9uTWVzc2FnZSA9IGNvbmZpZy5zbXNWZXJpZmljYXRpb25NZXNzYWdlO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdXNlcm5hbWVBdHRyaWJ1dGVzID0gY29uZmlnLnVzZXJuYW1lQXR0cmlidXRlcztcbiAgICB0aGlzLl9hY2NvdW50UmVjb3ZlcnlTZXR0aW5nLmludGVybmFsVmFsdWUgPSBjb25maWcuYWNjb3VudFJlY292ZXJ5U2V0dGluZztcbiAgICB0aGlzLl9hZG1pbkNyZWF0ZVVzZXJDb25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5hZG1pbkNyZWF0ZVVzZXJDb25maWc7XG4gICAgdGhpcy5fZGV2aWNlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmRldmljZUNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fZW1haWxDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuZW1haWxDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX2xhbWJkYUNvbmZpZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmxhbWJkYUNvbmZpZztcbiAgICB0aGlzLl9wYXNzd29yZFBvbGljeS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnBhc3N3b3JkUG9saWN5O1xuICAgIHRoaXMuX3NjaGVtYS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnNjaGVtYTtcbiAgICB0aGlzLl9zbXNDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuc21zQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9zb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3VzZXJQb29sQWRkT25zLmludGVybmFsVmFsdWUgPSBjb25maWcudXNlclBvb2xBZGRPbnM7XG4gICAgdGhpcy5fdXNlcm5hbWVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcudXNlcm5hbWVDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3ZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWxpYXNfYXR0cmlidXRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGlhc0F0dHJpYnV0ZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgYWxpYXNBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhbGlhc19hdHRyaWJ1dGVzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxpYXNBdHRyaWJ1dGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2FsaWFzQXR0cmlidXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsaWFzQXR0cmlidXRlcygpIHtcbiAgICB0aGlzLl9hbGlhc0F0dHJpYnV0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsaWFzQXR0cmlidXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlhc0F0dHJpYnV0ZXM7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF1dG9fdmVyaWZpZWRfYXR0cmlidXRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRvVmVyaWZpZWRBdHRyaWJ1dGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGF1dG9WZXJpZmllZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIGNka3RmLkZuLnRvbGlzdCh0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2F1dG9fdmVyaWZpZWRfYXR0cmlidXRlcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dG9WZXJpZmllZEF0dHJpYnV0ZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYXV0b1ZlcmlmaWVkQXR0cmlidXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dG9WZXJpZmllZEF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5fYXV0b1ZlcmlmaWVkQXR0cmlidXRlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b1ZlcmlmaWVkQXR0cmlidXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvVmVyaWZpZWRBdHRyaWJ1dGVzO1xuICB9XG5cbiAgLy8gY3JlYXRpb25fZGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0aW9uRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0aW9uX2RhdGUnKTtcbiAgfVxuXG4gIC8vIGN1c3RvbV9kb21haW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjdXN0b21Eb21haW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjdXN0b21fZG9tYWluJyk7XG4gIH1cblxuICAvLyBkb21haW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkb21haW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb21haW4nKTtcbiAgfVxuXG4gIC8vIGVtYWlsX3ZlcmlmaWNhdGlvbl9tZXNzYWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW1haWxWZXJpZmljYXRpb25NZXNzYWdlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbWFpbFZlcmlmaWNhdGlvbk1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbWFpbF92ZXJpZmljYXRpb25fbWVzc2FnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW1haWxWZXJpZmljYXRpb25NZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbWFpbFZlcmlmaWNhdGlvbk1lc3NhZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbWFpbFZlcmlmaWNhdGlvbk1lc3NhZ2UoKSB7XG4gICAgdGhpcy5fZW1haWxWZXJpZmljYXRpb25NZXNzYWdlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbWFpbFZlcmlmaWNhdGlvbk1lc3NhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW1haWxWZXJpZmljYXRpb25NZXNzYWdlO1xuICB9XG5cbiAgLy8gZW1haWxfdmVyaWZpY2F0aW9uX3N1YmplY3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbWFpbFZlcmlmaWNhdGlvblN1YmplY3Q/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVtYWlsVmVyaWZpY2F0aW9uU3ViamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VtYWlsX3ZlcmlmaWNhdGlvbl9zdWJqZWN0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBlbWFpbFZlcmlmaWNhdGlvblN1YmplY3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VtYWlsVmVyaWZpY2F0aW9uU3ViamVjdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVtYWlsVmVyaWZpY2F0aW9uU3ViamVjdCgpIHtcbiAgICB0aGlzLl9lbWFpbFZlcmlmaWNhdGlvblN1YmplY3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVtYWlsVmVyaWZpY2F0aW9uU3ViamVjdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbFZlcmlmaWNhdGlvblN1YmplY3Q7XG4gIH1cblxuICAvLyBlbmRwb2ludCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5kcG9pbnQnKTtcbiAgfVxuXG4gIC8vIGVzdGltYXRlZF9udW1iZXJfb2ZfdXNlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlc3RpbWF0ZWROdW1iZXJPZlVzZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZXN0aW1hdGVkX251bWJlcl9vZl91c2VycycpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gbGFzdF9tb2RpZmllZF9kYXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFzdE1vZGlmaWVkRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhc3RfbW9kaWZpZWRfZGF0ZScpO1xuICB9XG5cbiAgLy8gbWZhX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWZhQ29uZmlndXJhdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWZhQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21mYV9jb25maWd1cmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZmFDb25maWd1cmF0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZmFDb25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWZhQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9tZmFDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZmFDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21mYUNvbmZpZ3VyYXRpb247XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHNtc19hdXRoZW50aWNhdGlvbl9tZXNzYWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Ntc0F1dGhlbnRpY2F0aW9uTWVzc2FnZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc21zQXV0aGVudGljYXRpb25NZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc21zX2F1dGhlbnRpY2F0aW9uX21lc3NhZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNtc0F1dGhlbnRpY2F0aW9uTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc21zQXV0aGVudGljYXRpb25NZXNzYWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U21zQXV0aGVudGljYXRpb25NZXNzYWdlKCkge1xuICAgIHRoaXMuX3Ntc0F1dGhlbnRpY2F0aW9uTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc21zQXV0aGVudGljYXRpb25NZXNzYWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Ntc0F1dGhlbnRpY2F0aW9uTWVzc2FnZTtcbiAgfVxuXG4gIC8vIHNtc192ZXJpZmljYXRpb25fbWVzc2FnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Ntc1ZlcmlmaWNhdGlvbk1lc3NhZ2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNtc1ZlcmlmaWNhdGlvbk1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzbXNfdmVyaWZpY2F0aW9uX21lc3NhZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNtc1ZlcmlmaWNhdGlvbk1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Ntc1ZlcmlmaWNhdGlvbk1lc3NhZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTbXNWZXJpZmljYXRpb25NZXNzYWdlKCkge1xuICAgIHRoaXMuX3Ntc1ZlcmlmaWNhdGlvbk1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNtc1ZlcmlmaWNhdGlvbk1lc3NhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc21zVmVyaWZpY2F0aW9uTWVzc2FnZTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdNYXBBdHRyaWJ1dGUoJ3RhZ3NfYWxsJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gdXNlcm5hbWVfYXR0cmlidXRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91c2VybmFtZUF0dHJpYnV0ZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdXNlcm5hbWVBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCd1c2VybmFtZV9hdHRyaWJ1dGVzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlcm5hbWVBdHRyaWJ1dGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3VzZXJuYW1lQXR0cmlidXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJuYW1lQXR0cmlidXRlcygpIHtcbiAgICB0aGlzLl91c2VybmFtZUF0dHJpYnV0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lQXR0cmlidXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VybmFtZUF0dHJpYnV0ZXM7XG4gIH1cblxuICAvLyBhY2NvdW50X3JlY292ZXJ5X3NldHRpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNjb3VudFJlY292ZXJ5U2V0dGluZyA9IG5ldyBDb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiYWNjb3VudF9yZWNvdmVyeV9zZXR0aW5nXCIpO1xuICBwdWJsaWMgZ2V0IGFjY291bnRSZWNvdmVyeVNldHRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY291bnRSZWNvdmVyeVNldHRpbmc7XG4gIH1cbiAgcHVibGljIHB1dEFjY291bnRSZWNvdmVyeVNldHRpbmcodmFsdWU6IENvZ25pdG9Vc2VyUG9vbEFjY291bnRSZWNvdmVyeVNldHRpbmcpIHtcbiAgICB0aGlzLl9hY2NvdW50UmVjb3ZlcnlTZXR0aW5nLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2NvdW50UmVjb3ZlcnlTZXR0aW5nKCkge1xuICAgIHRoaXMuX2FjY291bnRSZWNvdmVyeVNldHRpbmcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjb3VudFJlY292ZXJ5U2V0dGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2NvdW50UmVjb3ZlcnlTZXR0aW5nLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBhZG1pbl9jcmVhdGVfdXNlcl9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWRtaW5DcmVhdGVVc2VyQ29uZmlnID0gbmV3IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImFkbWluX2NyZWF0ZV91c2VyX2NvbmZpZ1wiKTtcbiAgcHVibGljIGdldCBhZG1pbkNyZWF0ZVVzZXJDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FkbWluQ3JlYXRlVXNlckNvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0QWRtaW5DcmVhdGVVc2VyQ29uZmlnKHZhbHVlOiBDb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWcpIHtcbiAgICB0aGlzLl9hZG1pbkNyZWF0ZVVzZXJDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFkbWluQ3JlYXRlVXNlckNvbmZpZygpIHtcbiAgICB0aGlzLl9hZG1pbkNyZWF0ZVVzZXJDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWRtaW5DcmVhdGVVc2VyQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FkbWluQ3JlYXRlVXNlckNvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZGV2aWNlX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGV2aWNlQ29uZmlndXJhdGlvbiA9IG5ldyBDb2duaXRvVXNlclBvb2xEZXZpY2VDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZGV2aWNlX2NvbmZpZ3VyYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgZGV2aWNlQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0RGV2aWNlQ29uZmlndXJhdGlvbih2YWx1ZTogQ29nbml0b1VzZXJQb29sRGV2aWNlQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2RldmljZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERldmljZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fZGV2aWNlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXZpY2VDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGVtYWlsX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW1haWxDb25maWd1cmF0aW9uID0gbmV3IENvZ25pdG9Vc2VyUG9vbEVtYWlsQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcImVtYWlsX2NvbmZpZ3VyYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgZW1haWxDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbENvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEVtYWlsQ29uZmlndXJhdGlvbih2YWx1ZTogQ29nbml0b1VzZXJQb29sRW1haWxDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fZW1haWxDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbWFpbENvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fZW1haWxDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVtYWlsQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGxhbWJkYV9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGFtYmRhQ29uZmlnID0gbmV3IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImxhbWJkYV9jb25maWdcIik7XG4gIHB1YmxpYyBnZXQgbGFtYmRhQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9sYW1iZGFDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dExhbWJkYUNvbmZpZyh2YWx1ZTogQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnKSB7XG4gICAgdGhpcy5fbGFtYmRhQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYW1iZGFDb25maWcoKSB7XG4gICAgdGhpcy5fbGFtYmRhQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhbWJkYUNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYW1iZGFDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHBhc3N3b3JkX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXNzd29yZFBvbGljeSA9IG5ldyBDb2duaXRvVXNlclBvb2xQYXNzd29yZFBvbGljeU91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInBhc3N3b3JkX3BvbGljeVwiKTtcbiAgcHVibGljIGdldCBwYXNzd29yZFBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmRQb2xpY3k7XG4gIH1cbiAgcHVibGljIHB1dFBhc3N3b3JkUG9saWN5KHZhbHVlOiBDb2duaXRvVXNlclBvb2xQYXNzd29yZFBvbGljeSkge1xuICAgIHRoaXMuX3Bhc3N3b3JkUG9saWN5LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXNzd29yZFBvbGljeSgpIHtcbiAgICB0aGlzLl9wYXNzd29yZFBvbGljeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXNzd29yZFBvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXNzd29yZFBvbGljeS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc2NoZW1hIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NjaGVtYSA9IG5ldyBDb2duaXRvVXNlclBvb2xTY2hlbWFMaXN0KHRoaXMsIFwic2NoZW1hXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNjaGVtYSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NoZW1hO1xuICB9XG4gIHB1YmxpYyBwdXRTY2hlbWEodmFsdWU6IENvZ25pdG9Vc2VyUG9vbFNjaGVtYVtdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zY2hlbWEuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNjaGVtYSgpIHtcbiAgICB0aGlzLl9zY2hlbWEuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NoZW1hSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjaGVtYS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc21zX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc21zQ29uZmlndXJhdGlvbiA9IG5ldyBDb2duaXRvVXNlclBvb2xTbXNDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwic21zX2NvbmZpZ3VyYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgc21zQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc21zQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0U21zQ29uZmlndXJhdGlvbih2YWx1ZTogQ29nbml0b1VzZXJQb29sU21zQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX3Ntc0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNtc0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fc21zQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbXNDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Ntc0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNvZnR3YXJlX3Rva2VuX21mYV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uID0gbmV3IENvZ25pdG9Vc2VyUG9vbFNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwic29mdHdhcmVfdG9rZW5fbWZhX2NvbmZpZ3VyYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgc29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRTb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvbih2YWx1ZTogQ29nbml0b1VzZXJQb29sU29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9zb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fc29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHVzZXJfcG9vbF9hZGRfb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZXJQb29sQWRkT25zID0gbmV3IENvZ25pdG9Vc2VyUG9vbFVzZXJQb29sQWRkT25zT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwidXNlcl9wb29sX2FkZF9vbnNcIik7XG4gIHB1YmxpYyBnZXQgdXNlclBvb2xBZGRPbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJQb29sQWRkT25zO1xuICB9XG4gIHB1YmxpYyBwdXRVc2VyUG9vbEFkZE9ucyh2YWx1ZTogQ29nbml0b1VzZXJQb29sVXNlclBvb2xBZGRPbnMpIHtcbiAgICB0aGlzLl91c2VyUG9vbEFkZE9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VXNlclBvb2xBZGRPbnMoKSB7XG4gICAgdGhpcy5fdXNlclBvb2xBZGRPbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlclBvb2xBZGRPbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlclBvb2xBZGRPbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHVzZXJuYW1lX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlcm5hbWVDb25maWd1cmF0aW9uID0gbmV3IENvZ25pdG9Vc2VyUG9vbFVzZXJuYW1lQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzLCBcInVzZXJuYW1lX2NvbmZpZ3VyYXRpb25cIik7XG4gIHB1YmxpYyBnZXQgdXNlcm5hbWVDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl91c2VybmFtZUNvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFVzZXJuYW1lQ29uZmlndXJhdGlvbih2YWx1ZTogQ29nbml0b1VzZXJQb29sVXNlcm5hbWVDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fdXNlcm5hbWVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVc2VybmFtZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fdXNlcm5hbWVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VybmFtZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHZlcmlmaWNhdGlvbl9tZXNzYWdlX3RlbXBsYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZSA9IG5ldyBDb2duaXRvVXNlclBvb2xWZXJpZmljYXRpb25NZXNzYWdlVGVtcGxhdGVPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJ2ZXJpZmljYXRpb25fbWVzc2FnZV90ZW1wbGF0ZVwiKTtcbiAgcHVibGljIGdldCB2ZXJpZmljYXRpb25NZXNzYWdlVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZTtcbiAgfVxuICBwdWJsaWMgcHV0VmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlKHZhbHVlOiBDb2duaXRvVXNlclBvb2xWZXJpZmljYXRpb25NZXNzYWdlVGVtcGxhdGUpIHtcbiAgICB0aGlzLl92ZXJpZmljYXRpb25NZXNzYWdlVGVtcGxhdGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZSgpIHtcbiAgICB0aGlzLl92ZXJpZmljYXRpb25NZXNzYWdlVGVtcGxhdGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhbGlhc19hdHRyaWJ1dGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtLCBmYWxzZSkodGhpcy5fYWxpYXNBdHRyaWJ1dGVzKSxcbiAgICAgIGF1dG9fdmVyaWZpZWRfYXR0cmlidXRlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2F1dG9WZXJpZmllZEF0dHJpYnV0ZXMpLFxuICAgICAgZW1haWxfdmVyaWZpY2F0aW9uX21lc3NhZ2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2VtYWlsVmVyaWZpY2F0aW9uTWVzc2FnZSksXG4gICAgICBlbWFpbF92ZXJpZmljYXRpb25fc3ViamVjdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZW1haWxWZXJpZmljYXRpb25TdWJqZWN0KSxcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBtZmFfY29uZmlndXJhdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbWZhQ29uZmlndXJhdGlvbiksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHNtc19hdXRoZW50aWNhdGlvbl9tZXNzYWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zbXNBdXRoZW50aWNhdGlvbk1lc3NhZ2UpLFxuICAgICAgc21zX3ZlcmlmaWNhdGlvbl9tZXNzYWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zbXNWZXJpZmljYXRpb25NZXNzYWdlKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdXNlcm5hbWVfYXR0cmlidXRlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3VzZXJuYW1lQXR0cmlidXRlcyksXG4gICAgICBhY2NvdW50X3JlY292ZXJ5X3NldHRpbmc6IGNvZ25pdG9Vc2VyUG9vbEFjY291bnRSZWNvdmVyeVNldHRpbmdUb1RlcnJhZm9ybSh0aGlzLl9hY2NvdW50UmVjb3ZlcnlTZXR0aW5nLmludGVybmFsVmFsdWUpLFxuICAgICAgYWRtaW5fY3JlYXRlX3VzZXJfY29uZmlnOiBjb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9hZG1pbkNyZWF0ZVVzZXJDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBkZXZpY2VfY29uZmlndXJhdGlvbjogY29nbml0b1VzZXJQb29sRGV2aWNlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2RldmljZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICBlbWFpbF9jb25maWd1cmF0aW9uOiBjb2duaXRvVXNlclBvb2xFbWFpbENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9lbWFpbENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICBsYW1iZGFfY29uZmlnOiBjb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9sYW1iZGFDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBwYXNzd29yZF9wb2xpY3k6IGNvZ25pdG9Vc2VyUG9vbFBhc3N3b3JkUG9saWN5VG9UZXJyYWZvcm0odGhpcy5fcGFzc3dvcmRQb2xpY3kuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBzY2hlbWE6IGNka3RmLmxpc3RNYXBwZXIoY29nbml0b1VzZXJQb29sU2NoZW1hVG9UZXJyYWZvcm0sIHRydWUpKHRoaXMuX3NjaGVtYS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHNtc19jb25maWd1cmF0aW9uOiBjb2duaXRvVXNlclBvb2xTbXNDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fc21zQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHNvZnR3YXJlX3Rva2VuX21mYV9jb25maWd1cmF0aW9uOiBjb2duaXRvVXNlclBvb2xTb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX3NvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgdXNlcl9wb29sX2FkZF9vbnM6IGNvZ25pdG9Vc2VyUG9vbFVzZXJQb29sQWRkT25zVG9UZXJyYWZvcm0odGhpcy5fdXNlclBvb2xBZGRPbnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB1c2VybmFtZV9jb25maWd1cmF0aW9uOiBjb2duaXRvVXNlclBvb2xVc2VybmFtZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl91c2VybmFtZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICB2ZXJpZmljYXRpb25fbWVzc2FnZV90ZW1wbGF0ZTogY29nbml0b1VzZXJQb29sVmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlVG9UZXJyYWZvcm0odGhpcy5fdmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgYWxpYXNfYXR0cmlidXRlczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX2FsaWFzQXR0cmlidXRlcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBhdXRvX3ZlcmlmaWVkX2F0dHJpYnV0ZXM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl9hdXRvVmVyaWZpZWRBdHRyaWJ1dGVzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2V0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGVtYWlsX3ZlcmlmaWNhdGlvbl9tZXNzYWdlOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9lbWFpbFZlcmlmaWNhdGlvbk1lc3NhZ2UpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBlbWFpbF92ZXJpZmljYXRpb25fc3ViamVjdDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZW1haWxWZXJpZmljYXRpb25TdWJqZWN0KSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbWZhX2NvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX21mYUNvbmZpZ3VyYXRpb24pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgc21zX2F1dGhlbnRpY2F0aW9uX21lc3NhZ2U6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3Ntc0F1dGhlbnRpY2F0aW9uTWVzc2FnZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHNtc192ZXJpZmljYXRpb25fbWVzc2FnZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fc21zVmVyaWZpY2F0aW9uTWVzc2FnZSksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHRhZ3M6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmhhc2hNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJtYXBcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdNYXBcIixcbiAgICAgIH0sXG4gICAgICB0YWdzX2FsbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHVzZXJuYW1lX2F0dHJpYnV0ZXM6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0sIGZhbHNlKSh0aGlzLl91c2VybmFtZUF0dHJpYnV0ZXMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgYWNjb3VudF9yZWNvdmVyeV9zZXR0aW5nOiB7XG4gICAgICAgIHZhbHVlOiBjb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fYWNjb3VudFJlY292ZXJ5U2V0dGluZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBhZG1pbl9jcmVhdGVfdXNlcl9jb25maWc6IHtcbiAgICAgICAgdmFsdWU6IGNvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2FkbWluQ3JlYXRlVXNlckNvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ29nbml0b1VzZXJQb29sQWRtaW5DcmVhdGVVc2VyQ29uZmlnTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGRldmljZV9jb25maWd1cmF0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBjb2duaXRvVXNlclBvb2xEZXZpY2VDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0odGhpcy5fZGV2aWNlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiQ29nbml0b1VzZXJQb29sRGV2aWNlQ29uZmlndXJhdGlvbkxpc3RcIixcbiAgICAgIH0sXG4gICAgICBlbWFpbF9jb25maWd1cmF0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBjb2duaXRvVXNlclBvb2xFbWFpbENvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybSh0aGlzLl9lbWFpbENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNvZ25pdG9Vc2VyUG9vbEVtYWlsQ29uZmlndXJhdGlvbkxpc3RcIixcbiAgICAgIH0sXG4gICAgICBsYW1iZGFfY29uZmlnOiB7XG4gICAgICAgIHZhbHVlOiBjb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdUb0hjbFRlcnJhZm9ybSh0aGlzLl9sYW1iZGFDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgICBwYXNzd29yZF9wb2xpY3k6IHtcbiAgICAgICAgdmFsdWU6IGNvZ25pdG9Vc2VyUG9vbFBhc3N3b3JkUG9saWN5VG9IY2xUZXJyYWZvcm0odGhpcy5fcGFzc3dvcmRQb2xpY3kuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNvZ25pdG9Vc2VyUG9vbFBhc3N3b3JkUG9saWN5TGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjb2duaXRvVXNlclBvb2xTY2hlbWFUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fc2NoZW1hLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNvZ25pdG9Vc2VyUG9vbFNjaGVtYUxpc3RcIixcbiAgICAgIH0sXG4gICAgICBzbXNfY29uZmlndXJhdGlvbjoge1xuICAgICAgICB2YWx1ZTogY29nbml0b1VzZXJQb29sU21zQ29uZmlndXJhdGlvblRvSGNsVGVycmFmb3JtKHRoaXMuX3Ntc0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNvZ25pdG9Vc2VyUG9vbFNtc0NvbmZpZ3VyYXRpb25MaXN0XCIsXG4gICAgICB9LFxuICAgICAgc29mdHdhcmVfdG9rZW5fbWZhX2NvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgdmFsdWU6IGNvZ25pdG9Vc2VyUG9vbFNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uVG9IY2xUZXJyYWZvcm0odGhpcy5fc29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNvZ25pdG9Vc2VyUG9vbFNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIHVzZXJfcG9vbF9hZGRfb25zOiB7XG4gICAgICAgIHZhbHVlOiBjb2duaXRvVXNlclBvb2xVc2VyUG9vbEFkZE9uc1RvSGNsVGVycmFmb3JtKHRoaXMuX3VzZXJQb29sQWRkT25zLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDb2duaXRvVXNlclBvb2xVc2VyUG9vbEFkZE9uc0xpc3RcIixcbiAgICAgIH0sXG4gICAgICB1c2VybmFtZV9jb25maWd1cmF0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBjb2duaXRvVXNlclBvb2xVc2VybmFtZUNvbmZpZ3VyYXRpb25Ub0hjbFRlcnJhZm9ybSh0aGlzLl91c2VybmFtZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkNvZ25pdG9Vc2VyUG9vbFVzZXJuYW1lQ29uZmlndXJhdGlvbkxpc3RcIixcbiAgICAgIH0sXG4gICAgICB2ZXJpZmljYXRpb25fbWVzc2FnZV90ZW1wbGF0ZToge1xuICAgICAgICB2YWx1ZTogY29nbml0b1VzZXJQb29sVmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlVG9IY2xUZXJyYWZvcm0odGhpcy5fdmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJDb2duaXRvVXNlclBvb2xWZXJpZmljYXRpb25NZXNzYWdlVGVtcGxhdGVMaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=