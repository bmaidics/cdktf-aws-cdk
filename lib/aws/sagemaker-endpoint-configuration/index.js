"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SagemakerEndpointConfiguration = exports.SagemakerEndpointConfigurationProductionVariantsList = exports.SagemakerEndpointConfigurationProductionVariantsOutputReference = exports.sagemakerEndpointConfigurationProductionVariantsToHclTerraform = exports.sagemakerEndpointConfigurationProductionVariantsToTerraform = exports.SagemakerEndpointConfigurationDataCaptureConfigOutputReference = exports.sagemakerEndpointConfigurationDataCaptureConfigToHclTerraform = exports.sagemakerEndpointConfigurationDataCaptureConfigToTerraform = exports.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList = exports.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference = exports.sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToHclTerraform = exports.sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform = exports.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference = exports.sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToHclTerraform = exports.sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform = exports.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference = exports.sagemakerEndpointConfigurationAsyncInferenceConfigToHclTerraform = exports.sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform = exports.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference = exports.sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToHclTerraform = exports.sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform = exports.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference = exports.sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToHclTerraform = exports.sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform = exports.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference = exports.sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToHclTerraform = exports.sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_concurrent_invocations_per_instance: cdktf.numberToTerraform(struct.maxConcurrentInvocationsPerInstance),
    };
}
exports.sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform = sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform;
function sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        max_concurrent_invocations_per_instance: {
            value: cdktf.numberToHclTerraform(struct.maxConcurrentInvocationsPerInstance),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToHclTerraform = sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToHclTerraform;
class SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._maxConcurrentInvocationsPerInstance !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConcurrentInvocationsPerInstance = this._maxConcurrentInvocationsPerInstance;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxConcurrentInvocationsPerInstance = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxConcurrentInvocationsPerInstance = value.maxConcurrentInvocationsPerInstance;
        }
    }
    get maxConcurrentInvocationsPerInstance() {
        return this.getNumberAttribute('max_concurrent_invocations_per_instance');
    }
    set maxConcurrentInvocationsPerInstance(value) {
        this._maxConcurrentInvocationsPerInstance = value;
    }
    resetMaxConcurrentInvocationsPerInstance() {
        this._maxConcurrentInvocationsPerInstance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxConcurrentInvocationsPerInstanceInput() {
        return this._maxConcurrentInvocationsPerInstance;
    }
}
exports.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference = SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference;
_a = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference[_a] = { fqn: "@cdktf/aws-cdk.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference", version: "0.0.0" };
function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        error_topic: cdktf.stringToTerraform(struct.errorTopic),
        success_topic: cdktf.stringToTerraform(struct.successTopic),
    };
}
exports.sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform = sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform;
function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        error_topic: {
            value: cdktf.stringToHclTerraform(struct.errorTopic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        success_topic: {
            value: cdktf.stringToHclTerraform(struct.successTopic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToHclTerraform = sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToHclTerraform;
class SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._errorTopic !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorTopic = this._errorTopic;
        }
        if (this._successTopic !== undefined) {
            hasAnyValues = true;
            internalValueResult.successTopic = this._successTopic;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._errorTopic = undefined;
            this._successTopic = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._errorTopic = value.errorTopic;
            this._successTopic = value.successTopic;
        }
    }
    get errorTopic() {
        return this.getStringAttribute('error_topic');
    }
    set errorTopic(value) {
        this._errorTopic = value;
    }
    resetErrorTopic() {
        this._errorTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get errorTopicInput() {
        return this._errorTopic;
    }
    get successTopic() {
        return this.getStringAttribute('success_topic');
    }
    set successTopic(value) {
        this._successTopic = value;
    }
    resetSuccessTopic() {
        this._successTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get successTopicInput() {
        return this._successTopic;
    }
}
exports.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference = SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference;
_b = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference[_b] = { fqn: "@cdktf/aws-cdk.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference", version: "0.0.0" };
function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        s3_output_path: cdktf.stringToTerraform(struct.s3OutputPath),
        notification_config: sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform(struct.notificationConfig),
    };
}
exports.sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform = sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform;
function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToHclTerraform(struct) {
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
        notification_config: {
            value: sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToHclTerraform(struct.notificationConfig),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToHclTerraform = sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToHclTerraform;
class SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // notification_config - computed: false, optional: true, required: false
        this._notificationConfig = new SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(this, "notification_config");
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
        if (this._notificationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationConfig = this._notificationConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._kmsKeyId = undefined;
            this._s3OutputPath = undefined;
            this._notificationConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._kmsKeyId = value.kmsKeyId;
            this._s3OutputPath = value.s3OutputPath;
            this._notificationConfig.internalValue = value.notificationConfig;
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
}
exports.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference = SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference;
_c = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference[_c] = { fqn: "@cdktf/aws-cdk.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference", version: "0.0.0" };
function sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        client_config: sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform(struct.clientConfig),
        output_config: sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform(struct.outputConfig),
    };
}
exports.sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform = sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform;
function sagemakerEndpointConfigurationAsyncInferenceConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        client_config: {
            value: sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToHclTerraform(struct.clientConfig),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigList",
        },
        output_config: {
            value: sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToHclTerraform(struct.outputConfig),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerEndpointConfigurationAsyncInferenceConfigToHclTerraform = sagemakerEndpointConfigurationAsyncInferenceConfigToHclTerraform;
class SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // client_config - computed: false, optional: true, required: false
        this._clientConfig = new SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference(this, "client_config");
        // output_config - computed: false, optional: false, required: true
        this._outputConfig = new SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference(this, "output_config");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._clientConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientConfig = this._clientConfig?.internalValue;
        }
        if (this._outputConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputConfig = this._outputConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._clientConfig.internalValue = undefined;
            this._outputConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._clientConfig.internalValue = value.clientConfig;
            this._outputConfig.internalValue = value.outputConfig;
        }
    }
    get clientConfig() {
        return this._clientConfig;
    }
    putClientConfig(value) {
        this._clientConfig.internalValue = value;
    }
    resetClientConfig() {
        this._clientConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientConfigInput() {
        return this._clientConfig.internalValue;
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
}
exports.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference = SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference;
_d = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference[_d] = { fqn: "@cdktf/aws-cdk.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference", version: "0.0.0" };
function sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        csv_content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.csvContentTypes),
        json_content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.jsonContentTypes),
    };
}
exports.sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform = sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform;
function sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        csv_content_types: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.csvContentTypes),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        json_content_types: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.jsonContentTypes),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToHclTerraform = sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToHclTerraform;
class SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._csvContentTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.csvContentTypes = this._csvContentTypes;
        }
        if (this._jsonContentTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.jsonContentTypes = this._jsonContentTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._csvContentTypes = undefined;
            this._jsonContentTypes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._csvContentTypes = value.csvContentTypes;
            this._jsonContentTypes = value.jsonContentTypes;
        }
    }
    get csvContentTypes() {
        return cdktf.Fn.tolist(this.getListAttribute('csv_content_types'));
    }
    set csvContentTypes(value) {
        this._csvContentTypes = value;
    }
    resetCsvContentTypes() {
        this._csvContentTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get csvContentTypesInput() {
        return this._csvContentTypes;
    }
    get jsonContentTypes() {
        return cdktf.Fn.tolist(this.getListAttribute('json_content_types'));
    }
    set jsonContentTypes(value) {
        this._jsonContentTypes = value;
    }
    resetJsonContentTypes() {
        this._jsonContentTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jsonContentTypesInput() {
        return this._jsonContentTypes;
    }
}
exports.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference = SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference;
_e = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference[_e] = { fqn: "@cdktf/aws-cdk.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference", version: "0.0.0" };
function sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        capture_mode: cdktf.stringToTerraform(struct.captureMode),
    };
}
exports.sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform = sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform;
function sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        capture_mode: {
            value: cdktf.stringToHclTerraform(struct.captureMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToHclTerraform = sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToHclTerraform;
class SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._captureMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.captureMode = this._captureMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._captureMode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._captureMode = value.captureMode;
        }
    }
    get captureMode() {
        return this.getStringAttribute('capture_mode');
    }
    set captureMode(value) {
        this._captureMode = value;
    }
    // Temporarily expose input value. Use with caution.
    get captureModeInput() {
        return this._captureMode;
    }
}
exports.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference = SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference;
_f = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference[_f] = { fqn: "@cdktf/aws-cdk.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference", version: "0.0.0" };
class SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList extends cdktf.ComplexList {
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
        return new SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList = SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList;
_g = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList[_g] = { fqn: "@cdktf/aws-cdk.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList", version: "0.0.0" };
function sagemakerEndpointConfigurationDataCaptureConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destination_s3_uri: cdktf.stringToTerraform(struct.destinationS3Uri),
        enable_capture: cdktf.booleanToTerraform(struct.enableCapture),
        initial_sampling_percentage: cdktf.numberToTerraform(struct.initialSamplingPercentage),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        capture_content_type_header: sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform(struct.captureContentTypeHeader),
        capture_options: cdktf.listMapper(sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform, true)(struct.captureOptions),
    };
}
exports.sagemakerEndpointConfigurationDataCaptureConfigToTerraform = sagemakerEndpointConfigurationDataCaptureConfigToTerraform;
function sagemakerEndpointConfigurationDataCaptureConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        destination_s3_uri: {
            value: cdktf.stringToHclTerraform(struct.destinationS3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enable_capture: {
            value: cdktf.booleanToHclTerraform(struct.enableCapture),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        initial_sampling_percentage: {
            value: cdktf.numberToHclTerraform(struct.initialSamplingPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        kms_key_id: {
            value: cdktf.stringToHclTerraform(struct.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        capture_content_type_header: {
            value: sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToHclTerraform(struct.captureContentTypeHeader),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderList",
        },
        capture_options: {
            value: cdktf.listMapperHcl(sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToHclTerraform, true)(struct.captureOptions),
            isBlock: true,
            type: "list",
            storageClassType: "SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerEndpointConfigurationDataCaptureConfigToHclTerraform = sagemakerEndpointConfigurationDataCaptureConfigToHclTerraform;
class SagemakerEndpointConfigurationDataCaptureConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // capture_content_type_header - computed: false, optional: true, required: false
        this._captureContentTypeHeader = new SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference(this, "capture_content_type_header");
        // capture_options - computed: false, optional: false, required: true
        this._captureOptions = new SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList(this, "capture_options", false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._destinationS3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationS3Uri = this._destinationS3Uri;
        }
        if (this._enableCapture !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableCapture = this._enableCapture;
        }
        if (this._initialSamplingPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.initialSamplingPercentage = this._initialSamplingPercentage;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._captureContentTypeHeader?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.captureContentTypeHeader = this._captureContentTypeHeader?.internalValue;
        }
        if (this._captureOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.captureOptions = this._captureOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._destinationS3Uri = undefined;
            this._enableCapture = undefined;
            this._initialSamplingPercentage = undefined;
            this._kmsKeyId = undefined;
            this._captureContentTypeHeader.internalValue = undefined;
            this._captureOptions.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._destinationS3Uri = value.destinationS3Uri;
            this._enableCapture = value.enableCapture;
            this._initialSamplingPercentage = value.initialSamplingPercentage;
            this._kmsKeyId = value.kmsKeyId;
            this._captureContentTypeHeader.internalValue = value.captureContentTypeHeader;
            this._captureOptions.internalValue = value.captureOptions;
        }
    }
    get destinationS3Uri() {
        return this.getStringAttribute('destination_s3_uri');
    }
    set destinationS3Uri(value) {
        this._destinationS3Uri = value;
    }
    // Temporarily expose input value. Use with caution.
    get destinationS3UriInput() {
        return this._destinationS3Uri;
    }
    get enableCapture() {
        return this.getBooleanAttribute('enable_capture');
    }
    set enableCapture(value) {
        this._enableCapture = value;
    }
    resetEnableCapture() {
        this._enableCapture = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableCaptureInput() {
        return this._enableCapture;
    }
    get initialSamplingPercentage() {
        return this.getNumberAttribute('initial_sampling_percentage');
    }
    set initialSamplingPercentage(value) {
        this._initialSamplingPercentage = value;
    }
    // Temporarily expose input value. Use with caution.
    get initialSamplingPercentageInput() {
        return this._initialSamplingPercentage;
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
    get captureContentTypeHeader() {
        return this._captureContentTypeHeader;
    }
    putCaptureContentTypeHeader(value) {
        this._captureContentTypeHeader.internalValue = value;
    }
    resetCaptureContentTypeHeader() {
        this._captureContentTypeHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get captureContentTypeHeaderInput() {
        return this._captureContentTypeHeader.internalValue;
    }
    get captureOptions() {
        return this._captureOptions;
    }
    putCaptureOptions(value) {
        this._captureOptions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get captureOptionsInput() {
        return this._captureOptions.internalValue;
    }
}
exports.SagemakerEndpointConfigurationDataCaptureConfigOutputReference = SagemakerEndpointConfigurationDataCaptureConfigOutputReference;
_h = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfigurationDataCaptureConfigOutputReference[_h] = { fqn: "@cdktf/aws-cdk.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference", version: "0.0.0" };
function sagemakerEndpointConfigurationProductionVariantsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        accelerator_type: cdktf.stringToTerraform(struct.acceleratorType),
        initial_instance_count: cdktf.numberToTerraform(struct.initialInstanceCount),
        initial_variant_weight: cdktf.numberToTerraform(struct.initialVariantWeight),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        model_name: cdktf.stringToTerraform(struct.modelName),
        variant_name: cdktf.stringToTerraform(struct.variantName),
    };
}
exports.sagemakerEndpointConfigurationProductionVariantsToTerraform = sagemakerEndpointConfigurationProductionVariantsToTerraform;
function sagemakerEndpointConfigurationProductionVariantsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        accelerator_type: {
            value: cdktf.stringToHclTerraform(struct.acceleratorType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        initial_instance_count: {
            value: cdktf.numberToHclTerraform(struct.initialInstanceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        initial_variant_weight: {
            value: cdktf.numberToHclTerraform(struct.initialVariantWeight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        instance_type: {
            value: cdktf.stringToHclTerraform(struct.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_name: {
            value: cdktf.stringToHclTerraform(struct.modelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        variant_name: {
            value: cdktf.stringToHclTerraform(struct.variantName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.sagemakerEndpointConfigurationProductionVariantsToHclTerraform = sagemakerEndpointConfigurationProductionVariantsToHclTerraform;
class SagemakerEndpointConfigurationProductionVariantsOutputReference extends cdktf.ComplexObject {
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
        if (this._acceleratorType !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceleratorType = this._acceleratorType;
        }
        if (this._initialInstanceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.initialInstanceCount = this._initialInstanceCount;
        }
        if (this._initialVariantWeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.initialVariantWeight = this._initialVariantWeight;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._modelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelName = this._modelName;
        }
        if (this._variantName !== undefined) {
            hasAnyValues = true;
            internalValueResult.variantName = this._variantName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acceleratorType = undefined;
            this._initialInstanceCount = undefined;
            this._initialVariantWeight = undefined;
            this._instanceType = undefined;
            this._modelName = undefined;
            this._variantName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acceleratorType = value.acceleratorType;
            this._initialInstanceCount = value.initialInstanceCount;
            this._initialVariantWeight = value.initialVariantWeight;
            this._instanceType = value.instanceType;
            this._modelName = value.modelName;
            this._variantName = value.variantName;
        }
    }
    get acceleratorType() {
        return this.getStringAttribute('accelerator_type');
    }
    set acceleratorType(value) {
        this._acceleratorType = value;
    }
    resetAcceleratorType() {
        this._acceleratorType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get acceleratorTypeInput() {
        return this._acceleratorType;
    }
    get initialInstanceCount() {
        return this.getNumberAttribute('initial_instance_count');
    }
    set initialInstanceCount(value) {
        this._initialInstanceCount = value;
    }
    // Temporarily expose input value. Use with caution.
    get initialInstanceCountInput() {
        return this._initialInstanceCount;
    }
    get initialVariantWeight() {
        return this.getNumberAttribute('initial_variant_weight');
    }
    set initialVariantWeight(value) {
        this._initialVariantWeight = value;
    }
    resetInitialVariantWeight() {
        this._initialVariantWeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get initialVariantWeightInput() {
        return this._initialVariantWeight;
    }
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    set instanceType(value) {
        this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    get instanceTypeInput() {
        return this._instanceType;
    }
    get modelName() {
        return this.getStringAttribute('model_name');
    }
    set modelName(value) {
        this._modelName = value;
    }
    // Temporarily expose input value. Use with caution.
    get modelNameInput() {
        return this._modelName;
    }
    get variantName() {
        return this.getStringAttribute('variant_name');
    }
    set variantName(value) {
        this._variantName = value;
    }
    resetVariantName() {
        this._variantName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get variantNameInput() {
        return this._variantName;
    }
}
exports.SagemakerEndpointConfigurationProductionVariantsOutputReference = SagemakerEndpointConfigurationProductionVariantsOutputReference;
_j = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfigurationProductionVariantsOutputReference[_j] = { fqn: "@cdktf/aws-cdk.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference", version: "0.0.0" };
class SagemakerEndpointConfigurationProductionVariantsList extends cdktf.ComplexList {
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
        return new SagemakerEndpointConfigurationProductionVariantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
exports.SagemakerEndpointConfigurationProductionVariantsList = SagemakerEndpointConfigurationProductionVariantsList;
_k = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfigurationProductionVariantsList[_k] = { fqn: "@cdktf/aws-cdk.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint_configuration aws_sagemaker_endpoint_configuration}
*/
class SagemakerEndpointConfiguration extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SagemakerEndpointConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerEndpointConfiguration to import
    * @param importFromId The id of the existing SagemakerEndpointConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerEndpointConfiguration to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_endpoint_configuration", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint_configuration aws_sagemaker_endpoint_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerEndpointConfigurationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_sagemaker_endpoint_configuration',
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
        // async_inference_config - computed: false, optional: true, required: false
        this._asyncInferenceConfig = new SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference(this, "async_inference_config");
        // data_capture_config - computed: false, optional: true, required: false
        this._dataCaptureConfig = new SagemakerEndpointConfigurationDataCaptureConfigOutputReference(this, "data_capture_config");
        // production_variants - computed: false, optional: false, required: true
        this._productionVariants = new SagemakerEndpointConfigurationProductionVariantsList(this, "production_variants", false);
        this._id = config.id;
        this._kmsKeyArn = config.kmsKeyArn;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._asyncInferenceConfig.internalValue = config.asyncInferenceConfig;
        this._dataCaptureConfig.internalValue = config.dataCaptureConfig;
        this._productionVariants.internalValue = config.productionVariants;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
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
    get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    set kmsKeyArn(value) {
        this._kmsKeyArn = value;
    }
    resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyArnInput() {
        return this._kmsKeyArn;
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
    get asyncInferenceConfig() {
        return this._asyncInferenceConfig;
    }
    putAsyncInferenceConfig(value) {
        this._asyncInferenceConfig.internalValue = value;
    }
    resetAsyncInferenceConfig() {
        this._asyncInferenceConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get asyncInferenceConfigInput() {
        return this._asyncInferenceConfig.internalValue;
    }
    get dataCaptureConfig() {
        return this._dataCaptureConfig;
    }
    putDataCaptureConfig(value) {
        this._dataCaptureConfig.internalValue = value;
    }
    resetDataCaptureConfig() {
        this._dataCaptureConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dataCaptureConfigInput() {
        return this._dataCaptureConfig.internalValue;
    }
    get productionVariants() {
        return this._productionVariants;
    }
    putProductionVariants(value) {
        this._productionVariants.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get productionVariantsInput() {
        return this._productionVariants.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
            async_inference_config: sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform(this._asyncInferenceConfig.internalValue),
            data_capture_config: sagemakerEndpointConfigurationDataCaptureConfigToTerraform(this._dataCaptureConfig.internalValue),
            production_variants: cdktf.listMapper(sagemakerEndpointConfigurationProductionVariantsToTerraform, true)(this._productionVariants.internalValue),
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
            kms_key_arn: {
                value: cdktf.stringToHclTerraform(this._kmsKeyArn),
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
            async_inference_config: {
                value: sagemakerEndpointConfigurationAsyncInferenceConfigToHclTerraform(this._asyncInferenceConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "SagemakerEndpointConfigurationAsyncInferenceConfigList",
            },
            data_capture_config: {
                value: sagemakerEndpointConfigurationDataCaptureConfigToHclTerraform(this._dataCaptureConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "SagemakerEndpointConfigurationDataCaptureConfigList",
            },
            production_variants: {
                value: cdktf.listMapperHcl(sagemakerEndpointConfigurationProductionVariantsToHclTerraform, true)(this._productionVariants.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "SagemakerEndpointConfigurationProductionVariantsList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.SagemakerEndpointConfiguration = SagemakerEndpointConfiguration;
_l = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfiguration[_l] = { fqn: "@cdktf/aws-cdk.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
SagemakerEndpointConfiguration.tfResourceType = "aws_sagemaker_endpoint_configuration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL3NhZ2VtYWtlci1lbmRwb2ludC1jb25maWd1cmF0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBc0QvQixTQUFnQix5RUFBeUUsQ0FBQyxNQUF1SjtJQUMvTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsdUNBQXVDLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxtQ0FBbUMsQ0FBQztLQUM5RyxDQUFBO0FBQ0gsQ0FBQztBQVJELDhKQVFDO0FBR0QsU0FBZ0IsNEVBQTRFLENBQUMsTUFBdUo7SUFDbFAsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUFDLE9BQU8sTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUM1RixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUc7UUFDWix1Q0FBdUMsRUFBRTtZQUN2QyxLQUFLLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU8sQ0FBQyxtQ0FBbUMsQ0FBQztZQUM5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LENBQUUsQ0FBQyxDQUFBO0lBQzVILENBQUM7O0FBdlFILHdFQXdRQzs7O0FBdFFDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csNkNBQWMsR0FBRyxzQ0FBc0MsQUFBekMsQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgSGFzaGlDb3JwLCBJbmMuXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTVBMLTIuMFxuICovXG5cbi8vIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZW5kcG9pbnRfY29uZmlndXJhdGlvblxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZW5kcG9pbnRfY29uZmlndXJhdGlvbiNpZCBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb24jaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludF9jb25maWd1cmF0aW9uI2ttc19rZXlfYXJuIFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbiNrbXNfa2V5X2Fybn1cbiAgKi9cbiAgcmVhZG9ubHkga21zS2V5QXJuPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZW5kcG9pbnRfY29uZmlndXJhdGlvbiNuYW1lIFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbiNuYW1lfVxuICAqL1xuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZW5kcG9pbnRfY29uZmlndXJhdGlvbiN0YWdzIFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbiN0YWdzfVxuICAqL1xuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50X2NvbmZpZ3VyYXRpb24jdGFnc19hbGwgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uI3RhZ3NfYWxsfVxuICAqL1xuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICogYXN5bmNfaW5mZXJlbmNlX2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50X2NvbmZpZ3VyYXRpb24jYXN5bmNfaW5mZXJlbmNlX2NvbmZpZyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb24jYXN5bmNfaW5mZXJlbmNlX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgYXN5bmNJbmZlcmVuY2VDb25maWc/OiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZztcbiAgLyoqXG4gICogZGF0YV9jYXB0dXJlX2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50X2NvbmZpZ3VyYXRpb24jZGF0YV9jYXB0dXJlX2NvbmZpZyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb24jZGF0YV9jYXB0dXJlX2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgZGF0YUNhcHR1cmVDb25maWc/OiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZztcbiAgLyoqXG4gICogcHJvZHVjdGlvbl92YXJpYW50cyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50X2NvbmZpZ3VyYXRpb24jcHJvZHVjdGlvbl92YXJpYW50cyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb24jcHJvZHVjdGlvbl92YXJpYW50c31cbiAgKi9cbiAgcmVhZG9ubHkgcHJvZHVjdGlvblZhcmlhbnRzOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9kdWN0aW9uVmFyaWFudHNbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ0NsaWVudENvbmZpZyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludF9jb25maWd1cmF0aW9uI21heF9jb25jdXJyZW50X2ludm9jYXRpb25zX3Blcl9pbnN0YW5jZSBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb24jbWF4X2NvbmN1cnJlbnRfaW52b2NhdGlvbnNfcGVyX2luc3RhbmNlfVxuICAqL1xuICByZWFkb25seSBtYXhDb25jdXJyZW50SW52b2NhdGlvbnNQZXJJbnN0YW5jZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnQ2xpZW50Q29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdDbGllbnRDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ0NsaWVudENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfY29uY3VycmVudF9pbnZvY2F0aW9uc19wZXJfaW5zdGFuY2U6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4Q29uY3VycmVudEludm9jYXRpb25zUGVySW5zdGFuY2UpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnQ2xpZW50Q29uZmlnVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdDbGllbnRDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ0NsaWVudENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgbWF4X2NvbmN1cnJlbnRfaW52b2NhdGlvbnNfcGVyX2luc3RhbmNlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tYXhDb25jdXJyZW50SW52b2NhdGlvbnNQZXJJbnN0YW5jZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ0NsaWVudENvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdDbGllbnRDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21heENvbmN1cnJlbnRJbnZvY2F0aW9uc1Blckluc3RhbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heENvbmN1cnJlbnRJbnZvY2F0aW9uc1Blckluc3RhbmNlID0gdGhpcy5fbWF4Q29uY3VycmVudEludm9jYXRpb25zUGVySW5zdGFuY2U7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ0NsaWVudENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21heENvbmN1cnJlbnRJbnZvY2F0aW9uc1Blckluc3RhbmNlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXhDb25jdXJyZW50SW52b2NhdGlvbnNQZXJJbnN0YW5jZSA9IHZhbHVlLm1heENvbmN1cnJlbnRJbnZvY2F0aW9uc1Blckluc3RhbmNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1heF9jb25jdXJyZW50X2ludm9jYXRpb25zX3Blcl9pbnN0YW5jZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhDb25jdXJyZW50SW52b2NhdGlvbnNQZXJJbnN0YW5jZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4Q29uY3VycmVudEludm9jYXRpb25zUGVySW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfY29uY3VycmVudF9pbnZvY2F0aW9uc19wZXJfaW5zdGFuY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heENvbmN1cnJlbnRJbnZvY2F0aW9uc1Blckluc3RhbmNlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhDb25jdXJyZW50SW52b2NhdGlvbnNQZXJJbnN0YW5jZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heENvbmN1cnJlbnRJbnZvY2F0aW9uc1Blckluc3RhbmNlKCkge1xuICAgIHRoaXMuX21heENvbmN1cnJlbnRJbnZvY2F0aW9uc1Blckluc3RhbmNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhDb25jdXJyZW50SW52b2NhdGlvbnNQZXJJbnN0YW5jZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhDb25jdXJyZW50SW52b2NhdGlvbnNQZXJJbnN0YW5jZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZ05vdGlmaWNhdGlvbkNvbmZpZyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludF9jb25maWd1cmF0aW9uI2Vycm9yX3RvcGljIFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbiNlcnJvcl90b3BpY31cbiAgKi9cbiAgcmVhZG9ubHkgZXJyb3JUb3BpYz86IHN0cmluZztcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50X2NvbmZpZ3VyYXRpb24jc3VjY2Vzc190b3BpYyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb24jc3VjY2Vzc190b3BpY31cbiAgKi9cbiAgcmVhZG9ubHkgc3VjY2Vzc1RvcGljPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRDb25maWdOb3RpZmljYXRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZ05vdGlmaWNhdGlvbkNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnTm90aWZpY2F0aW9uQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVycm9yX3RvcGljOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVycm9yVG9waWMpLFxuICAgIHN1Y2Nlc3NfdG9waWM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3VjY2Vzc1RvcGljKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZ05vdGlmaWNhdGlvbkNvbmZpZ1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnTm90aWZpY2F0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRDb25maWdOb3RpZmljYXRpb25Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGVycm9yX3RvcGljOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5lcnJvclRvcGljKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBzdWNjZXNzX3RvcGljOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5zdWNjZXNzVG9waWMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRDb25maWdOb3RpZmljYXRpb25Db25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnTm90aWZpY2F0aW9uQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lcnJvclRvcGljICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVycm9yVG9waWMgPSB0aGlzLl9lcnJvclRvcGljO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3VjY2Vzc1RvcGljICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN1Y2Nlc3NUb3BpYyA9IHRoaXMuX3N1Y2Nlc3NUb3BpYztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnTm90aWZpY2F0aW9uQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZXJyb3JUb3BpYyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N1Y2Nlc3NUb3BpYyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZXJyb3JUb3BpYyA9IHZhbHVlLmVycm9yVG9waWM7XG4gICAgICB0aGlzLl9zdWNjZXNzVG9waWMgPSB2YWx1ZS5zdWNjZXNzVG9waWM7XG4gICAgfVxuICB9XG5cbiAgLy8gZXJyb3JfdG9waWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXJyb3JUb3BpYz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXJyb3JUb3BpYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Vycm9yX3RvcGljJyk7XG4gIH1cbiAgcHVibGljIHNldCBlcnJvclRvcGljKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lcnJvclRvcGljID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXJyb3JUb3BpYygpIHtcbiAgICB0aGlzLl9lcnJvclRvcGljID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlcnJvclRvcGljSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yVG9waWM7XG4gIH1cblxuICAvLyBzdWNjZXNzX3RvcGljIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1Y2Nlc3NUb3BpYz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3VjY2Vzc1RvcGljKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3VjY2Vzc190b3BpYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VjY2Vzc1RvcGljKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdWNjZXNzVG9waWMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdWNjZXNzVG9waWMoKSB7XG4gICAgdGhpcy5fc3VjY2Vzc1RvcGljID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWNjZXNzVG9waWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VjY2Vzc1RvcGljO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50X2NvbmZpZ3VyYXRpb24ja21zX2tleV9pZCBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb24ja21zX2tleV9pZH1cbiAgKi9cbiAgcmVhZG9ubHkga21zS2V5SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludF9jb25maWd1cmF0aW9uI3MzX291dHB1dF9wYXRoIFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbiNzM19vdXRwdXRfcGF0aH1cbiAgKi9cbiAgcmVhZG9ubHkgczNPdXRwdXRQYXRoOiBzdHJpbmc7XG4gIC8qKlxuICAqIG5vdGlmaWNhdGlvbl9jb25maWcgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludF9jb25maWd1cmF0aW9uI25vdGlmaWNhdGlvbl9jb25maWcgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uI25vdGlmaWNhdGlvbl9jb25maWd9XG4gICovXG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvbkNvbmZpZz86IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnTm90aWZpY2F0aW9uQ29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZ091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICAgIHMzX291dHB1dF9wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzT3V0cHV0UGF0aCksXG4gICAgbm90aWZpY2F0aW9uX2NvbmZpZzogc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRDb25maWdOb3RpZmljYXRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5vdGlmaWNhdGlvbkNvbmZpZyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZ091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBrbXNfa2V5X2lkOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5rbXNLZXlJZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgczNfb3V0cHV0X3BhdGg6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnMzT3V0cHV0UGF0aCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgbm90aWZpY2F0aW9uX2NvbmZpZzoge1xuICAgICAgdmFsdWU6IHNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnTm90aWZpY2F0aW9uQ29uZmlnVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5ub3RpZmljYXRpb25Db25maWcpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZ05vdGlmaWNhdGlvbkNvbmZpZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9rbXNLZXlJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rbXNLZXlJZCA9IHRoaXMuX2ttc0tleUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fczNPdXRwdXRQYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnMzT3V0cHV0UGF0aCA9IHRoaXMuX3MzT3V0cHV0UGF0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25vdGlmaWNhdGlvbkNvbmZpZz8uaW50ZXJuYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ub3RpZmljYXRpb25Db25maWcgPSB0aGlzLl9ub3RpZmljYXRpb25Db25maWc/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ttc0tleUlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fczNPdXRwdXRQYXRoID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbm90aWZpY2F0aW9uQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2ttc0tleUlkID0gdmFsdWUua21zS2V5SWQ7XG4gICAgICB0aGlzLl9zM091dHB1dFBhdGggPSB2YWx1ZS5zM091dHB1dFBhdGg7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLm5vdGlmaWNhdGlvbkNvbmZpZztcbiAgICB9XG4gIH1cblxuICAvLyBrbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc0tleUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEttc0tleUlkKCkge1xuICAgIHRoaXMuX2ttc0tleUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rbXNLZXlJZDtcbiAgfVxuXG4gIC8vIHMzX291dHB1dF9wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3MzT3V0cHV0UGF0aD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgczNPdXRwdXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfb3V0cHV0X3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHMzT3V0cHV0UGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fczNPdXRwdXRQYXRoID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzT3V0cHV0UGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zM091dHB1dFBhdGg7XG4gIH1cblxuICAvLyBub3RpZmljYXRpb25fY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbkNvbmZpZyA9IG5ldyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZ05vdGlmaWNhdGlvbkNvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzLCBcIm5vdGlmaWNhdGlvbl9jb25maWdcIik7XG4gIHB1YmxpYyBnZXQgbm90aWZpY2F0aW9uQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25Db25maWc7XG4gIH1cbiAgcHVibGljIHB1dE5vdGlmaWNhdGlvbkNvbmZpZyh2YWx1ZTogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRDb25maWdOb3RpZmljYXRpb25Db25maWcpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5vdGlmaWNhdGlvbkNvbmZpZygpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbm90aWZpY2F0aW9uQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnIHtcbiAgLyoqXG4gICogY2xpZW50X2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50X2NvbmZpZ3VyYXRpb24jY2xpZW50X2NvbmZpZyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb24jY2xpZW50X2NvbmZpZ31cbiAgKi9cbiAgcmVhZG9ubHkgY2xpZW50Q29uZmlnPzogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdDbGllbnRDb25maWc7XG4gIC8qKlxuICAqIG91dHB1dF9jb25maWcgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludF9jb25maWd1cmF0aW9uI291dHB1dF9jb25maWcgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uI291dHB1dF9jb25maWd9XG4gICovXG4gIHJlYWRvbmx5IG91dHB1dENvbmZpZzogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRDb25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2xpZW50X2NvbmZpZzogc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdDbGllbnRDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsaWVudENvbmZpZyksXG4gICAgb3V0cHV0X2NvbmZpZzogc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLm91dHB1dENvbmZpZyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBjbGllbnRfY29uZmlnOiB7XG4gICAgICB2YWx1ZTogc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdDbGllbnRDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmNsaWVudENvbmZpZyksXG4gICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIlNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnQ2xpZW50Q29uZmlnTGlzdFwiLFxuICAgIH0sXG4gICAgb3V0cHV0X2NvbmZpZzoge1xuICAgICAgdmFsdWU6IHNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5vdXRwdXRDb25maWcpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZ0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jbGllbnRDb25maWc/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xpZW50Q29uZmlnID0gdGhpcy5fY2xpZW50Q29uZmlnPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3V0cHV0Q29uZmlnPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm91dHB1dENvbmZpZyA9IHRoaXMuX291dHB1dENvbmZpZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2xpZW50Q29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vdXRwdXRDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2xpZW50Q29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jbGllbnRDb25maWc7XG4gICAgICB0aGlzLl9vdXRwdXRDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLm91dHB1dENvbmZpZztcbiAgICB9XG4gIH1cblxuICAvLyBjbGllbnRfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NsaWVudENvbmZpZyA9IG5ldyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ0NsaWVudENvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzLCBcImNsaWVudF9jb25maWdcIik7XG4gIHB1YmxpYyBnZXQgY2xpZW50Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dENsaWVudENvbmZpZyh2YWx1ZTogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdDbGllbnRDb25maWcpIHtcbiAgICB0aGlzLl9jbGllbnRDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENsaWVudENvbmZpZygpIHtcbiAgICB0aGlzLl9jbGllbnRDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xpZW50Q29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudENvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gb3V0cHV0X2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9vdXRwdXRDb25maWcgPSBuZXcgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJvdXRwdXRfY29uZmlnXCIpO1xuICBwdWJsaWMgZ2V0IG91dHB1dENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fb3V0cHV0Q29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRPdXRwdXRDb25maWcodmFsdWU6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnKSB7XG4gICAgdGhpcy5fb3V0cHV0Q29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3V0cHV0Q29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX291dHB1dENvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50X2NvbmZpZ3VyYXRpb24jY3N2X2NvbnRlbnRfdHlwZXMgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uI2Nzdl9jb250ZW50X3R5cGVzfVxuICAqL1xuICByZWFkb25seSBjc3ZDb250ZW50VHlwZXM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50X2NvbmZpZ3VyYXRpb24janNvbl9jb250ZW50X3R5cGVzIFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbiNqc29uX2NvbnRlbnRfdHlwZXN9XG4gICovXG4gIHJlYWRvbmx5IGpzb25Db250ZW50VHlwZXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlQ29udGVudFR5cGVIZWFkZXJPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ0NhcHR1cmVDb250ZW50VHlwZUhlYWRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjc3ZfY29udGVudF90eXBlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHN0cnVjdCEuY3N2Q29udGVudFR5cGVzKSxcbiAgICBqc29uX2NvbnRlbnRfdHlwZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0sIGZhbHNlKShzdHJ1Y3QhLmpzb25Db250ZW50VHlwZXMpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlQ29udGVudFR5cGVIZWFkZXJPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ0NhcHR1cmVDb250ZW50VHlwZUhlYWRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgY3N2X2NvbnRlbnRfdHlwZXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5jc3ZDb250ZW50VHlwZXMpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdMaXN0XCIsXG4gICAgfSxcbiAgICBqc29uX2NvbnRlbnRfdHlwZXM6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5saXN0TWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtLCBmYWxzZSkoc3RydWN0IS5qc29uQ29udGVudFR5cGVzKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gcmVtb3ZlIHVuZGVmaW5lZCBhdHRyaWJ1dGVzXG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ0NhcHR1cmVDb250ZW50VHlwZUhlYWRlck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlQ29udGVudFR5cGVIZWFkZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NzdkNvbnRlbnRUeXBlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jc3ZDb250ZW50VHlwZXMgPSB0aGlzLl9jc3ZDb250ZW50VHlwZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9qc29uQ29udGVudFR5cGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmpzb25Db250ZW50VHlwZXMgPSB0aGlzLl9qc29uQ29udGVudFR5cGVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlQ29udGVudFR5cGVIZWFkZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jc3ZDb250ZW50VHlwZXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9qc29uQ29udGVudFR5cGVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jc3ZDb250ZW50VHlwZXMgPSB2YWx1ZS5jc3ZDb250ZW50VHlwZXM7XG4gICAgICB0aGlzLl9qc29uQ29udGVudFR5cGVzID0gdmFsdWUuanNvbkNvbnRlbnRUeXBlcztcbiAgICB9XG4gIH1cblxuICAvLyBjc3ZfY29udGVudF90eXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jc3ZDb250ZW50VHlwZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY3N2Q29udGVudFR5cGVzKCkge1xuICAgIHJldHVybiBjZGt0Zi5Gbi50b2xpc3QodGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjc3ZfY29udGVudF90eXBlcycpKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNzdkNvbnRlbnRUeXBlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jc3ZDb250ZW50VHlwZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDc3ZDb250ZW50VHlwZXMoKSB7XG4gICAgdGhpcy5fY3N2Q29udGVudFR5cGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjc3ZDb250ZW50VHlwZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3N2Q29udGVudFR5cGVzO1xuICB9XG5cbiAgLy8ganNvbl9jb250ZW50X3R5cGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2pzb25Db250ZW50VHlwZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQganNvbkNvbnRlbnRUeXBlcygpIHtcbiAgICByZXR1cm4gY2RrdGYuRm4udG9saXN0KHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnanNvbl9jb250ZW50X3R5cGVzJykpO1xuICB9XG4gIHB1YmxpYyBzZXQganNvbkNvbnRlbnRUeXBlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9qc29uQ29udGVudFR5cGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SnNvbkNvbnRlbnRUeXBlcygpIHtcbiAgICB0aGlzLl9qc29uQ29udGVudFR5cGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBqc29uQ29udGVudFR5cGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2pzb25Db250ZW50VHlwZXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlT3B0aW9ucyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludF9jb25maWd1cmF0aW9uI2NhcHR1cmVfbW9kZSBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb24jY2FwdHVyZV9tb2RlfVxuICAqL1xuICByZWFkb25seSBjYXB0dXJlTW9kZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZU9wdGlvbnMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjYXB0dXJlX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2FwdHVyZU1vZGUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZU9wdGlvbnNUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ0NhcHR1cmVPcHRpb25zIHwgY2RrdGYuSVJlc29sdmFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNvbnN0IGF0dHJzID0ge1xuICAgIGNhcHR1cmVfbW9kZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuY2FwdHVyZU1vZGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlT3B0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNvbHZhYmxlVmFsdWU/OiBjZGt0Zi5JUmVzb2x2YWJsZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdEluZGV4IHRoZSBpbmRleCBvZiB0aGlzIGl0ZW0gaW4gdGhlIGxpc3RcbiAgKiBAcGFyYW0gY29tcGxleE9iamVjdElzRnJvbVNldCB3aGV0aGVyIHRoZSBsaXN0IGlzIHdyYXBwaW5nIGEgc2V0ICh3aWxsIGFkZCB0b2xpc3QoKSB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbiBpdGVtIHZpYSBhbiBpbmRleClcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGNvbXBsZXhPYmplY3RJbmRleDogbnVtYmVyLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgY29tcGxleE9iamVjdElzRnJvbVNldCwgY29tcGxleE9iamVjdEluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ0NhcHR1cmVPcHRpb25zIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnJlc29sdmFibGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2YWJsZVZhbHVlO1xuICAgIH1cbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jYXB0dXJlTW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jYXB0dXJlTW9kZSA9IHRoaXMuX2NhcHR1cmVNb2RlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlT3B0aW9ucyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jYXB0dXJlTW9kZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jYXB0dXJlTW9kZSA9IHZhbHVlLmNhcHR1cmVNb2RlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNhcHR1cmVfbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jYXB0dXJlTW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2FwdHVyZU1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjYXB0dXJlX21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhcHR1cmVNb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jYXB0dXJlTW9kZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXB0dXJlTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXB0dXJlTW9kZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlT3B0aW9uc0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZU9wdGlvbnNbXSB8IGNka3RmLklSZXNvbHZhYmxlXG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICogQHBhcmFtIHdyYXBzU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCBwcm90ZWN0ZWQgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIHByb3RlY3RlZCB3cmFwc1NldDogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIHdyYXBzU2V0KVxuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIGluZGV4IHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byByZXR1cm5cbiAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlT3B0aW9uc091dHB1dFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ0NhcHR1cmVPcHRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWcge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZW5kcG9pbnRfY29uZmlndXJhdGlvbiNkZXN0aW5hdGlvbl9zM191cmkgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uI2Rlc3RpbmF0aW9uX3MzX3VyaX1cbiAgKi9cbiAgcmVhZG9ubHkgZGVzdGluYXRpb25TM1VyaTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZW5kcG9pbnRfY29uZmlndXJhdGlvbiNlbmFibGVfY2FwdHVyZSBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb24jZW5hYmxlX2NhcHR1cmV9XG4gICovXG4gIHJlYWRvbmx5IGVuYWJsZUNhcHR1cmU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludF9jb25maWd1cmF0aW9uI2luaXRpYWxfc2FtcGxpbmdfcGVyY2VudGFnZSBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb24jaW5pdGlhbF9zYW1wbGluZ19wZXJjZW50YWdlfVxuICAqL1xuICByZWFkb25seSBpbml0aWFsU2FtcGxpbmdQZXJjZW50YWdlOiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludF9jb25maWd1cmF0aW9uI2ttc19rZXlfaWQgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uI2ttc19rZXlfaWR9XG4gICovXG4gIHJlYWRvbmx5IGttc0tleUlkPzogc3RyaW5nO1xuICAvKipcbiAgKiBjYXB0dXJlX2NvbnRlbnRfdHlwZV9oZWFkZXIgYmxvY2tcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludF9jb25maWd1cmF0aW9uI2NhcHR1cmVfY29udGVudF90eXBlX2hlYWRlciBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb24jY2FwdHVyZV9jb250ZW50X3R5cGVfaGVhZGVyfVxuICAqL1xuICByZWFkb25seSBjYXB0dXJlQ29udGVudFR5cGVIZWFkZXI/OiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ0NhcHR1cmVDb250ZW50VHlwZUhlYWRlcjtcbiAgLyoqXG4gICogY2FwdHVyZV9vcHRpb25zIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZW5kcG9pbnRfY29uZmlndXJhdGlvbiNjYXB0dXJlX29wdGlvbnMgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uI2NhcHR1cmVfb3B0aW9uc31cbiAgKi9cbiAgcmVhZG9ubHkgY2FwdHVyZU9wdGlvbnM6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZU9wdGlvbnNbXSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRlc3RpbmF0aW9uX3MzX3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXN0aW5hdGlvblMzVXJpKSxcbiAgICBlbmFibGVfY2FwdHVyZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlQ2FwdHVyZSksXG4gICAgaW5pdGlhbF9zYW1wbGluZ19wZXJjZW50YWdlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmluaXRpYWxTYW1wbGluZ1BlcmNlbnRhZ2UpLFxuICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICAgIGNhcHR1cmVfY29udGVudF90eXBlX2hlYWRlcjogc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlQ29udGVudFR5cGVIZWFkZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmNhcHR1cmVDb250ZW50VHlwZUhlYWRlciksXG4gICAgY2FwdHVyZV9vcHRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKHNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZU9wdGlvbnNUb1RlcnJhZm9ybSwgdHJ1ZSkoc3RydWN0IS5jYXB0dXJlT3B0aW9ucyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdUb0hjbFRlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBkZXN0aW5hdGlvbl9zM191cmk6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uUzNVcmkpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGVuYWJsZV9jYXB0dXJlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuYm9vbGVhblRvSGNsVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlQ2FwdHVyZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIGluaXRpYWxfc2FtcGxpbmdfcGVyY2VudGFnZToge1xuICAgICAgdmFsdWU6IGNka3RmLm51bWJlclRvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5pdGlhbFNhbXBsaW5nUGVyY2VudGFnZSksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAga21zX2tleV9pZDoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGNhcHR1cmVfY29udGVudF90eXBlX2hlYWRlcjoge1xuICAgICAgdmFsdWU6IHNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jYXB0dXJlQ29udGVudFR5cGVIZWFkZXIpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ0NhcHR1cmVDb250ZW50VHlwZUhlYWRlckxpc3RcIixcbiAgICB9LFxuICAgIGNhcHR1cmVfb3B0aW9uczoge1xuICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlT3B0aW9uc1RvSGNsVGVycmFmb3JtLCB0cnVlKShzdHJ1Y3QhLmNhcHR1cmVPcHRpb25zKSxcbiAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlT3B0aW9uc0xpc3RcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICogQHBhcmFtIHRlcnJhZm9ybVJlc291cmNlIFRoZSBwYXJlbnQgcmVzb3VyY2VcbiAgKiBAcGFyYW0gdGVycmFmb3JtQXR0cmlidXRlIFRoZSBhdHRyaWJ1dGUgb24gdGhlIHBhcmVudCByZXNvdXJjZSB0aGlzIGNsYXNzIGlzIHJlZmVyZW5jaW5nXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgZmFsc2UsIDApO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kZXN0aW5hdGlvblMzVXJpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlc3RpbmF0aW9uUzNVcmkgPSB0aGlzLl9kZXN0aW5hdGlvblMzVXJpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW5hYmxlQ2FwdHVyZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVDYXB0dXJlID0gdGhpcy5fZW5hYmxlQ2FwdHVyZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luaXRpYWxTYW1wbGluZ1BlcmNlbnRhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5pdGlhbFNhbXBsaW5nUGVyY2VudGFnZSA9IHRoaXMuX2luaXRpYWxTYW1wbGluZ1BlcmNlbnRhZ2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9rbXNLZXlJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rbXNLZXlJZCA9IHRoaXMuX2ttc0tleUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhcHR1cmVDb250ZW50VHlwZUhlYWRlciA9IHRoaXMuX2NhcHR1cmVDb250ZW50VHlwZUhlYWRlcj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NhcHR1cmVPcHRpb25zPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhcHR1cmVPcHRpb25zID0gdGhpcy5fY2FwdHVyZU9wdGlvbnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uUzNVcmkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmFibGVDYXB0dXJlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5pdGlhbFNhbXBsaW5nUGVyY2VudGFnZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ttc0tleUlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jYXB0dXJlT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kZXN0aW5hdGlvblMzVXJpID0gdmFsdWUuZGVzdGluYXRpb25TM1VyaTtcbiAgICAgIHRoaXMuX2VuYWJsZUNhcHR1cmUgPSB2YWx1ZS5lbmFibGVDYXB0dXJlO1xuICAgICAgdGhpcy5faW5pdGlhbFNhbXBsaW5nUGVyY2VudGFnZSA9IHZhbHVlLmluaXRpYWxTYW1wbGluZ1BlcmNlbnRhZ2U7XG4gICAgICB0aGlzLl9rbXNLZXlJZCA9IHZhbHVlLmttc0tleUlkO1xuICAgICAgdGhpcy5fY2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jYXB0dXJlQ29udGVudFR5cGVIZWFkZXI7XG4gICAgICB0aGlzLl9jYXB0dXJlT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY2FwdHVyZU9wdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgLy8gZGVzdGluYXRpb25fczNfdXJpIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Rlc3RpbmF0aW9uUzNVcmk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uUzNVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXN0aW5hdGlvbl9zM191cmknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc3RpbmF0aW9uUzNVcmkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uUzNVcmkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25TM1VyaUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0aW5hdGlvblMzVXJpO1xuICB9XG5cbiAgLy8gZW5hYmxlX2NhcHR1cmUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlQ2FwdHVyZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlQ2FwdHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfY2FwdHVyZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlQ2FwdHVyZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlQ2FwdHVyZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZUNhcHR1cmUoKSB7XG4gICAgdGhpcy5fZW5hYmxlQ2FwdHVyZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlQ2FwdHVyZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVDYXB0dXJlO1xuICB9XG5cbiAgLy8gaW5pdGlhbF9zYW1wbGluZ19wZXJjZW50YWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2luaXRpYWxTYW1wbGluZ1BlcmNlbnRhZ2U/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGluaXRpYWxTYW1wbGluZ1BlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpbml0aWFsX3NhbXBsaW5nX3BlcmNlbnRhZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluaXRpYWxTYW1wbGluZ1BlcmNlbnRhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2luaXRpYWxTYW1wbGluZ1BlcmNlbnRhZ2UgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5pdGlhbFNhbXBsaW5nUGVyY2VudGFnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbml0aWFsU2FtcGxpbmdQZXJjZW50YWdlO1xuICB9XG5cbiAgLy8ga21zX2tleV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNLZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlJZCgpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5SWQ7XG4gIH1cblxuICAvLyBjYXB0dXJlX2NvbnRlbnRfdHlwZV9oZWFkZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyID0gbmV3IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiY2FwdHVyZV9jb250ZW50X3R5cGVfaGVhZGVyXCIpO1xuICBwdWJsaWMgZ2V0IGNhcHR1cmVDb250ZW50VHlwZUhlYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyO1xuICB9XG4gIHB1YmxpYyBwdXRDYXB0dXJlQ29udGVudFR5cGVIZWFkZXIodmFsdWU6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyKSB7XG4gICAgdGhpcy5fY2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYXB0dXJlQ29udGVudFR5cGVIZWFkZXIoKSB7XG4gICAgdGhpcy5fY2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhcHR1cmVDb250ZW50VHlwZUhlYWRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXB0dXJlQ29udGVudFR5cGVIZWFkZXIuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGNhcHR1cmVfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jYXB0dXJlT3B0aW9ucyA9IG5ldyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ0NhcHR1cmVPcHRpb25zTGlzdCh0aGlzLCBcImNhcHR1cmVfb3B0aW9uc1wiLCBmYWxzZSk7XG4gIHB1YmxpYyBnZXQgY2FwdHVyZU9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcHR1cmVPcHRpb25zO1xuICB9XG4gIHB1YmxpYyBwdXRDYXB0dXJlT3B0aW9ucyh2YWx1ZTogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlT3B0aW9uc1tdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9jYXB0dXJlT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhcHR1cmVPcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcHR1cmVPcHRpb25zLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uUHJvZHVjdGlvblZhcmlhbnRzIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50X2NvbmZpZ3VyYXRpb24jYWNjZWxlcmF0b3JfdHlwZSBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb24jYWNjZWxlcmF0b3JfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgYWNjZWxlcmF0b3JUeXBlPzogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZW5kcG9pbnRfY29uZmlndXJhdGlvbiNpbml0aWFsX2luc3RhbmNlX2NvdW50IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbiNpbml0aWFsX2luc3RhbmNlX2NvdW50fVxuICAqL1xuICByZWFkb25seSBpbml0aWFsSW5zdGFuY2VDb3VudDogbnVtYmVyO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZW5kcG9pbnRfY29uZmlndXJhdGlvbiNpbml0aWFsX3ZhcmlhbnRfd2VpZ2h0IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbiNpbml0aWFsX3ZhcmlhbnRfd2VpZ2h0fVxuICAqL1xuICByZWFkb25seSBpbml0aWFsVmFyaWFudFdlaWdodD86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50X2NvbmZpZ3VyYXRpb24jaW5zdGFuY2VfdHlwZSBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb24jaW5zdGFuY2VfdHlwZX1cbiAgKi9cbiAgcmVhZG9ubHkgaW5zdGFuY2VUeXBlOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludF9jb25maWd1cmF0aW9uI21vZGVsX25hbWUgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uI21vZGVsX25hbWV9XG4gICovXG4gIHJlYWRvbmx5IG1vZGVsTmFtZTogc3RyaW5nO1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9zYWdlbWFrZXJfZW5kcG9pbnRfY29uZmlndXJhdGlvbiN2YXJpYW50X25hbWUgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uI3ZhcmlhbnRfbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgdmFyaWFudE5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9kdWN0aW9uVmFyaWFudHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9kdWN0aW9uVmFyaWFudHMgfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY2NlbGVyYXRvcl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY2VsZXJhdG9yVHlwZSksXG4gICAgaW5pdGlhbF9pbnN0YW5jZV9jb3VudDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pbml0aWFsSW5zdGFuY2VDb3VudCksXG4gICAgaW5pdGlhbF92YXJpYW50X3dlaWdodDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pbml0aWFsVmFyaWFudFdlaWdodCksXG4gICAgaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVR5cGUpLFxuICAgIG1vZGVsX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubW9kZWxOYW1lKSxcbiAgICB2YXJpYW50X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFyaWFudE5hbWUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvblByb2R1Y3Rpb25WYXJpYW50c1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvblByb2R1Y3Rpb25WYXJpYW50cyB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBhY2NlbGVyYXRvcl90eXBlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5hY2NlbGVyYXRvclR5cGUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIGluaXRpYWxfaW5zdGFuY2VfY291bnQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmluaXRpYWxJbnN0YW5jZUNvdW50KSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgfSxcbiAgICBpbml0aWFsX3ZhcmlhbnRfd2VpZ2h0OiB7XG4gICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5pbml0aWFsVmFyaWFudFdlaWdodCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIm51bWJlclwiLFxuICAgIH0sXG4gICAgaW5zdGFuY2VfdHlwZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBtb2RlbF9uYW1lOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5tb2RlbE5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICAgIHZhcmlhbnRfbmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudmFyaWFudE5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uUHJvZHVjdGlvblZhcmlhbnRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHJlc29sdmFibGVWYWx1ZT86IGNka3RmLklSZXNvbHZhYmxlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SW5kZXggdGhlIGluZGV4IG9mIHRoaXMgaXRlbSBpbiB0aGUgbGlzdFxuICAqIEBwYXJhbSBjb21wbGV4T2JqZWN0SXNGcm9tU2V0IHdoZXRoZXIgdGhlIGxpc3QgaXMgd3JhcHBpbmcgYSBzZXQgKHdpbGwgYWRkIHRvbGlzdCgpIHRvIGJlIGFibGUgdG8gYWNjZXNzIGFuIGl0ZW0gdmlhIGFuIGluZGV4KVxuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgY29tcGxleE9iamVjdEluZGV4OiBudW1iZXIsIGNvbXBsZXhPYmplY3RJc0Zyb21TZXQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBjb21wbGV4T2JqZWN0SXNGcm9tU2V0LCBjb21wbGV4T2JqZWN0SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvblByb2R1Y3Rpb25WYXJpYW50cyB8IGNka3RmLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5yZXNvbHZhYmxlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmFibGVWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWNjZWxlcmF0b3JUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjY2VsZXJhdG9yVHlwZSA9IHRoaXMuX2FjY2VsZXJhdG9yVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luaXRpYWxJbnN0YW5jZUNvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluaXRpYWxJbnN0YW5jZUNvdW50ID0gdGhpcy5faW5pdGlhbEluc3RhbmNlQ291bnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbml0aWFsVmFyaWFudFdlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbml0aWFsVmFyaWFudFdlaWdodCA9IHRoaXMuX2luaXRpYWxWYXJpYW50V2VpZ2h0O1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5zdGFuY2VUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmluc3RhbmNlVHlwZSA9IHRoaXMuX2luc3RhbmNlVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21vZGVsTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tb2RlbE5hbWUgPSB0aGlzLl9tb2RlbE5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YXJpYW50TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52YXJpYW50TmFtZSA9IHRoaXMuX3ZhcmlhbnROYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uUHJvZHVjdGlvblZhcmlhbnRzIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc29sdmFibGVWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FjY2VsZXJhdG9yVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luaXRpYWxJbnN0YW5jZUNvdW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5pdGlhbFZhcmlhbnRXZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tb2RlbE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YXJpYW50TmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5yZXNvbHZhYmxlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hY2NlbGVyYXRvclR5cGUgPSB2YWx1ZS5hY2NlbGVyYXRvclR5cGU7XG4gICAgICB0aGlzLl9pbml0aWFsSW5zdGFuY2VDb3VudCA9IHZhbHVlLmluaXRpYWxJbnN0YW5jZUNvdW50O1xuICAgICAgdGhpcy5faW5pdGlhbFZhcmlhbnRXZWlnaHQgPSB2YWx1ZS5pbml0aWFsVmFyaWFudFdlaWdodDtcbiAgICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHZhbHVlLmluc3RhbmNlVHlwZTtcbiAgICAgIHRoaXMuX21vZGVsTmFtZSA9IHZhbHVlLm1vZGVsTmFtZTtcbiAgICAgIHRoaXMuX3ZhcmlhbnROYW1lID0gdmFsdWUudmFyaWFudE5hbWU7XG4gICAgfVxuICB9XG5cbiAgLy8gYWNjZWxlcmF0b3JfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2NlbGVyYXRvclR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFjY2VsZXJhdG9yVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjY2VsZXJhdG9yX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjY2VsZXJhdG9yVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWNjZWxlcmF0b3JUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjZWxlcmF0b3JUeXBlKCkge1xuICAgIHRoaXMuX2FjY2VsZXJhdG9yVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjZWxlcmF0b3JUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2VsZXJhdG9yVHlwZTtcbiAgfVxuXG4gIC8vIGluaXRpYWxfaW5zdGFuY2VfY291bnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW5pdGlhbEluc3RhbmNlQ291bnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGluaXRpYWxJbnN0YW5jZUNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW5pdGlhbF9pbnN0YW5jZV9jb3VudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5pdGlhbEluc3RhbmNlQ291bnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2luaXRpYWxJbnN0YW5jZUNvdW50ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluaXRpYWxJbnN0YW5jZUNvdW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luaXRpYWxJbnN0YW5jZUNvdW50O1xuICB9XG5cbiAgLy8gaW5pdGlhbF92YXJpYW50X3dlaWdodCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbml0aWFsVmFyaWFudFdlaWdodD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgaW5pdGlhbFZhcmlhbnRXZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpbml0aWFsX3ZhcmlhbnRfd2VpZ2h0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBpbml0aWFsVmFyaWFudFdlaWdodCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW5pdGlhbFZhcmlhbnRXZWlnaHQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbml0aWFsVmFyaWFudFdlaWdodCgpIHtcbiAgICB0aGlzLl9pbml0aWFsVmFyaWFudFdlaWdodCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5pdGlhbFZhcmlhbnRXZWlnaHRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5pdGlhbFZhcmlhbnRXZWlnaHQ7XG4gIH1cblxuICAvLyBpbnN0YW5jZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2luc3RhbmNlVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlVHlwZTtcbiAgfVxuXG4gIC8vIG1vZGVsX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbW9kZWxOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtb2RlbE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtb2RlbF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBtb2RlbE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGVsTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtb2RlbE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxOYW1lO1xuICB9XG5cbiAgLy8gdmFyaWFudF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmFyaWFudE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZhcmlhbnROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFyaWFudF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YXJpYW50TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFyaWFudE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWYXJpYW50TmFtZSgpIHtcbiAgICB0aGlzLl92YXJpYW50TmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFyaWFudE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFyaWFudE5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvblByb2R1Y3Rpb25WYXJpYW50c0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4TGlzdCB7XG4gIHB1YmxpYyBpbnRlcm5hbFZhbHVlPyA6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvblByb2R1Y3Rpb25WYXJpYW50c1tdIHwgY2RrdGYuSVJlc29sdmFibGVcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKiBAcGFyYW0gd3JhcHNTZXQgd2hldGhlciB0aGUgbGlzdCBpcyB3cmFwcGluZyBhIHNldCAod2lsbCBhZGQgdG9saXN0KCkgdG8gYmUgYWJsZSB0byBhY2Nlc3MgYW4gaXRlbSB2aWEgYW4gaW5kZXgpXG4gICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSUludGVycG9sYXRpbmdQYXJlbnQsIHByb3RlY3RlZCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgcHJvdGVjdGVkIHdyYXBzU2V0OiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgd3JhcHNTZXQpXG4gIH1cblxuICAvKipcbiAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJldHVyblxuICAqL1xuICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9kdWN0aW9uVmFyaWFudHNPdXRwdXRSZWZlcmVuY2Uge1xuICAgIHJldHVybiBuZXcgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uUHJvZHVjdGlvblZhcmlhbnRzT3V0cHV0UmVmZXJlbmNlKHRoaXMudGVycmFmb3JtUmVzb3VyY2UsIHRoaXMudGVycmFmb3JtQXR0cmlidXRlLCBpbmRleCwgdGhpcy53cmFwc1NldCk7XG4gIH1cbn1cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludF9jb25maWd1cmF0aW9uIGF3c19zYWdlbWFrZXJfZW5kcG9pbnRfY29uZmlndXJhdGlvbn1cbiovXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImF3c19zYWdlbWFrZXJfZW5kcG9pbnRfY29uZmlndXJhdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb24gcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uIHRvIGltcG9ydFxuICAqIEBwYXJhbSBpbXBvcnRGcm9tSWQgVGhlIGlkIG9mIHRoZSBleGlzdGluZyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb24gdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL3NhZ2VtYWtlcl9lbmRwb2ludF9jb25maWd1cmF0aW9uI2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb24gdG8gaW1wb3J0IGlzIGZvdW5kXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVDb25maWdGb3JJbXBvcnQoc2NvcGU6IENvbnN0cnVjdCwgaW1wb3J0VG9JZDogc3RyaW5nLCBpbXBvcnRGcm9tSWQ6IHN0cmluZywgcHJvdmlkZXI/OiBjZGt0Zi5UZXJyYWZvcm1Qcm92aWRlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNka3RmLkltcG9ydGFibGVSZXNvdXJjZShzY29wZSwgaW1wb3J0VG9JZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwiYXdzX3NhZ2VtYWtlcl9lbmRwb2ludF9jb25maWd1cmF0aW9uXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvc2FnZW1ha2VyX2VuZHBvaW50X2NvbmZpZ3VyYXRpb24gYXdzX3NhZ2VtYWtlcl9lbmRwb2ludF9jb25maWd1cmF0aW9ufSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Db25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfc2FnZW1ha2VyX2VuZHBvaW50X2NvbmZpZ3VyYXRpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uOiAnMy43Ni4xJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZSxcbiAgICAgIHByb3Zpc2lvbmVyczogY29uZmlnLnByb3Zpc2lvbmVycyxcbiAgICAgIGNvbm5lY3Rpb246IGNvbmZpZy5jb25uZWN0aW9uLFxuICAgICAgZm9yRWFjaDogY29uZmlnLmZvckVhY2hcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSBjb25maWcua21zS2V5QXJuO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX2FzeW5jSW5mZXJlbmNlQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcuYXN5bmNJbmZlcmVuY2VDb25maWc7XG4gICAgdGhpcy5fZGF0YUNhcHR1cmVDb25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5kYXRhQ2FwdHVyZUNvbmZpZztcbiAgICB0aGlzLl9wcm9kdWN0aW9uVmFyaWFudHMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5wcm9kdWN0aW9uVmFyaWFudHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8ga21zX2tleV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zS2V5QXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrbXNLZXlBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zS2V5QXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlBcm4oKSB7XG4gICAgdGhpcy5fa21zS2V5QXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5QXJuO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ01hcEF0dHJpYnV0ZSgndGFncycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nTWFwQXR0cmlidXRlKCd0YWdzX2FsbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIGFzeW5jX2luZmVyZW5jZV9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXN5bmNJbmZlcmVuY2VDb25maWcgPSBuZXcgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcywgXCJhc3luY19pbmZlcmVuY2VfY29uZmlnXCIpO1xuICBwdWJsaWMgZ2V0IGFzeW5jSW5mZXJlbmNlQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9hc3luY0luZmVyZW5jZUNvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0QXN5bmNJbmZlcmVuY2VDb25maWcodmFsdWU6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnKSB7XG4gICAgdGhpcy5fYXN5bmNJbmZlcmVuY2VDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFzeW5jSW5mZXJlbmNlQ29uZmlnKCkge1xuICAgIHRoaXMuX2FzeW5jSW5mZXJlbmNlQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFzeW5jSW5mZXJlbmNlQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FzeW5jSW5mZXJlbmNlQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBkYXRhX2NhcHR1cmVfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RhdGFDYXB0dXJlQ29uZmlnID0gbmV3IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZGF0YV9jYXB0dXJlX2NvbmZpZ1wiKTtcbiAgcHVibGljIGdldCBkYXRhQ2FwdHVyZUNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YUNhcHR1cmVDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dERhdGFDYXB0dXJlQ29uZmlnKHZhbHVlOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZykge1xuICAgIHRoaXMuX2RhdGFDYXB0dXJlQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYXRhQ2FwdHVyZUNvbmZpZygpIHtcbiAgICB0aGlzLl9kYXRhQ2FwdHVyZUNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhQ2FwdHVyZUNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhQ2FwdHVyZUNvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcHJvZHVjdGlvbl92YXJpYW50cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcm9kdWN0aW9uVmFyaWFudHMgPSBuZXcgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uUHJvZHVjdGlvblZhcmlhbnRzTGlzdCh0aGlzLCBcInByb2R1Y3Rpb25fdmFyaWFudHNcIiwgZmFsc2UpO1xuICBwdWJsaWMgZ2V0IHByb2R1Y3Rpb25WYXJpYW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZHVjdGlvblZhcmlhbnRzO1xuICB9XG4gIHB1YmxpYyBwdXRQcm9kdWN0aW9uVmFyaWFudHModmFsdWU6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvblByb2R1Y3Rpb25WYXJpYW50c1tdIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9wcm9kdWN0aW9uVmFyaWFudHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm9kdWN0aW9uVmFyaWFudHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZHVjdGlvblZhcmlhbnRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICBrbXNfa2V5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fa21zS2V5QXJuKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBhc3luY19pbmZlcmVuY2VfY29uZmlnOiBzYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2FzeW5jSW5mZXJlbmNlQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgZGF0YV9jYXB0dXJlX2NvbmZpZzogc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9kYXRhQ2FwdHVyZUNvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHByb2R1Y3Rpb25fdmFyaWFudHM6IGNka3RmLmxpc3RNYXBwZXIoc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uUHJvZHVjdGlvblZhcmlhbnRzVG9UZXJyYWZvcm0sIHRydWUpKHRoaXMuX3Byb2R1Y3Rpb25WYXJpYW50cy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGlkOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGttc19rZXlfYXJuOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9rbXNLZXlBcm4pLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgdGFnczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuaGFzaE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcIm1hcFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ01hcFwiLFxuICAgICAgfSxcbiAgICAgIHRhZ3NfYWxsOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5oYXNoTWFwcGVySGNsKGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwibWFwXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTWFwXCIsXG4gICAgICB9LFxuICAgICAgYXN5bmNfaW5mZXJlbmNlX2NvbmZpZzoge1xuICAgICAgICB2YWx1ZTogc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdUb0hjbFRlcnJhZm9ybSh0aGlzLl9hc3luY0luZmVyZW5jZUNvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgZGF0YV9jYXB0dXJlX2NvbmZpZzoge1xuICAgICAgICB2YWx1ZTogc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdUb0hjbFRlcnJhZm9ybSh0aGlzLl9kYXRhQ2FwdHVyZUNvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwiU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdMaXN0XCIsXG4gICAgICB9LFxuICAgICAgcHJvZHVjdGlvbl92YXJpYW50czoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChzYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9kdWN0aW9uVmFyaWFudHNUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fcHJvZHVjdGlvblZhcmlhbnRzLmludGVybmFsVmFsdWUpLFxuICAgICAgICBpc0Jsb2NrOiB0cnVlLFxuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9kdWN0aW9uVmFyaWFudHNMaXN0XCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCApKVxuICB9XG59XG4iXX0=