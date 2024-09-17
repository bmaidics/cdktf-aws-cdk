"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LambdaFunctionEventInvokeConfig = exports.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference = exports.lambdaFunctionEventInvokeConfigDestinationConfigToHclTerraform = exports.lambdaFunctionEventInvokeConfigDestinationConfigToTerraform = exports.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference = exports.lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToHclTerraform = exports.lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform = exports.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference = exports.lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToHclTerraform = exports.lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destination: cdktf.stringToTerraform(struct.destination),
    };
}
exports.lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform = lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform;
function lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToHclTerraform = lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToHclTerraform;
class LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._destination = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._destination = value.destination;
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
}
exports.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference = LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference;
_a = JSII_RTTI_SYMBOL_1;
LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference[_a] = { fqn: "@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference", version: "0.0.0" };
function lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destination: cdktf.stringToTerraform(struct.destination),
    };
}
exports.lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform = lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform;
function lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToHclTerraform = lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToHclTerraform;
class LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._destination = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._destination = value.destination;
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
}
exports.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference = LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference;
_b = JSII_RTTI_SYMBOL_1;
LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference[_b] = { fqn: "@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference", version: "0.0.0" };
function lambdaFunctionEventInvokeConfigDestinationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        on_failure: lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform(struct.onFailure),
        on_success: lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform(struct.onSuccess),
    };
}
exports.lambdaFunctionEventInvokeConfigDestinationConfigToTerraform = lambdaFunctionEventInvokeConfigDestinationConfigToTerraform;
function lambdaFunctionEventInvokeConfigDestinationConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        on_failure: {
            value: lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToHclTerraform(struct.onFailure),
            isBlock: true,
            type: "list",
            storageClassType: "LambdaFunctionEventInvokeConfigDestinationConfigOnFailureList",
        },
        on_success: {
            value: lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToHclTerraform(struct.onSuccess),
            isBlock: true,
            type: "list",
            storageClassType: "LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
exports.lambdaFunctionEventInvokeConfigDestinationConfigToHclTerraform = lambdaFunctionEventInvokeConfigDestinationConfigToHclTerraform;
class LambdaFunctionEventInvokeConfigDestinationConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
        this.isEmptyObject = false;
        // on_failure - computed: false, optional: true, required: false
        this._onFailure = new LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference(this, "on_failure");
        // on_success - computed: false, optional: true, required: false
        this._onSuccess = new LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference(this, "on_success");
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._onFailure?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onFailure = this._onFailure?.internalValue;
        }
        if (this._onSuccess?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onSuccess = this._onSuccess?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._onFailure.internalValue = undefined;
            this._onSuccess.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._onFailure.internalValue = value.onFailure;
            this._onSuccess.internalValue = value.onSuccess;
        }
    }
    get onFailure() {
        return this._onFailure;
    }
    putOnFailure(value) {
        this._onFailure.internalValue = value;
    }
    resetOnFailure() {
        this._onFailure.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onFailureInput() {
        return this._onFailure.internalValue;
    }
    get onSuccess() {
        return this._onSuccess;
    }
    putOnSuccess(value) {
        this._onSuccess.internalValue = value;
    }
    resetOnSuccess() {
        this._onSuccess.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onSuccessInput() {
        return this._onSuccess.internalValue;
    }
}
exports.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference = LambdaFunctionEventInvokeConfigDestinationConfigOutputReference;
_c = JSII_RTTI_SYMBOL_1;
LambdaFunctionEventInvokeConfigDestinationConfigOutputReference[_c] = { fqn: "@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference", version: "0.0.0" };
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config aws_lambda_function_event_invoke_config}
*/
class LambdaFunctionEventInvokeConfig extends cdktf.TerraformResource {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a LambdaFunctionEventInvokeConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LambdaFunctionEventInvokeConfig to import
    * @param importFromId The id of the existing LambdaFunctionEventInvokeConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LambdaFunctionEventInvokeConfig to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambda_function_event_invoke_config", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_function_event_invoke_config aws_lambda_function_event_invoke_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaFunctionEventInvokeConfigConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_lambda_function_event_invoke_config',
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
        // destination_config - computed: false, optional: true, required: false
        this._destinationConfig = new LambdaFunctionEventInvokeConfigDestinationConfigOutputReference(this, "destination_config");
        this._functionName = config.functionName;
        this._id = config.id;
        this._maximumEventAgeInSeconds = config.maximumEventAgeInSeconds;
        this._maximumRetryAttempts = config.maximumRetryAttempts;
        this._qualifier = config.qualifier;
        this._destinationConfig.internalValue = config.destinationConfig;
    }
    get functionName() {
        return this.getStringAttribute('function_name');
    }
    set functionName(value) {
        this._functionName = value;
    }
    // Temporarily expose input value. Use with caution.
    get functionNameInput() {
        return this._functionName;
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
    get maximumEventAgeInSeconds() {
        return this.getNumberAttribute('maximum_event_age_in_seconds');
    }
    set maximumEventAgeInSeconds(value) {
        this._maximumEventAgeInSeconds = value;
    }
    resetMaximumEventAgeInSeconds() {
        this._maximumEventAgeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maximumEventAgeInSecondsInput() {
        return this._maximumEventAgeInSeconds;
    }
    get maximumRetryAttempts() {
        return this.getNumberAttribute('maximum_retry_attempts');
    }
    set maximumRetryAttempts(value) {
        this._maximumRetryAttempts = value;
    }
    resetMaximumRetryAttempts() {
        this._maximumRetryAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maximumRetryAttemptsInput() {
        return this._maximumRetryAttempts;
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
    get destinationConfig() {
        return this._destinationConfig;
    }
    putDestinationConfig(value) {
        this._destinationConfig.internalValue = value;
    }
    resetDestinationConfig() {
        this._destinationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationConfigInput() {
        return this._destinationConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            function_name: cdktf.stringToTerraform(this._functionName),
            id: cdktf.stringToTerraform(this._id),
            maximum_event_age_in_seconds: cdktf.numberToTerraform(this._maximumEventAgeInSeconds),
            maximum_retry_attempts: cdktf.numberToTerraform(this._maximumRetryAttempts),
            qualifier: cdktf.stringToTerraform(this._qualifier),
            destination_config: lambdaFunctionEventInvokeConfigDestinationConfigToTerraform(this._destinationConfig.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            function_name: {
                value: cdktf.stringToHclTerraform(this._functionName),
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
            maximum_event_age_in_seconds: {
                value: cdktf.numberToHclTerraform(this._maximumEventAgeInSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            maximum_retry_attempts: {
                value: cdktf.numberToHclTerraform(this._maximumRetryAttempts),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            qualifier: {
                value: cdktf.stringToHclTerraform(this._qualifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_config: {
                value: lambdaFunctionEventInvokeConfigDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LambdaFunctionEventInvokeConfigDestinationConfigList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.LambdaFunctionEventInvokeConfig = LambdaFunctionEventInvokeConfig;
_d = JSII_RTTI_SYMBOL_1;
LambdaFunctionEventInvokeConfig[_d] = { fqn: "@cdktf/aws-cdk.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig", version: "0.0.0" };
// =================
// STATIC PROPERTIES
// =================
LambdaFunctionEventInvokeConfig.tfResourceType = "aws_lambda_function_event_invoke_config";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXdzL2xhbWJkYS1mdW5jdGlvbi1ldmVudC1pbnZva2UtY29uZmlnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsK0JBQStCO0FBMEMvQixTQUFnQixvRUFBb0UsQ0FBQyxNQUE2STtJQUNoTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO0tBQzFELENBQUE7QUFDSCxDQUFDO0FBUkQsb0pBUUM7QUFHRCxTQUFnQix1RUFBdUUsQ0FBQyxNQUE2STtJQUNuTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsT0FBTyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQzVGLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCxNQUFNLEtBQUssR0FBRztRQUNaLFdBQVcsRUFBRTtZQUNYLEtBQUssRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztZQUN0RCxPQUFP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Z2h0IChjKSBIYXNoaUNvcnAsIEluYy5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNUEwtMi4wXG4gKi9cblxuLy8gaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhbWJkYV9mdW5jdGlvbl9ldmVudF9pbnZva2VfY29uZmlnXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0NvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYW1iZGFfZnVuY3Rpb25fZXZlbnRfaW52b2tlX2NvbmZpZyNmdW5jdGlvbl9uYW1lIExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWcjZnVuY3Rpb25fbmFtZX1cbiAgKi9cbiAgcmVhZG9ubHkgZnVuY3Rpb25OYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhbWJkYV9mdW5jdGlvbl9ldmVudF9pbnZva2VfY29uZmlnI2lkIExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWcjaWR9XG4gICpcbiAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCB0aGUgaWQgZmllbGQgaXMgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgcmVzb3VyY2VzIGluIFRlcnJhZm9ybSBwcm92aWRlcnMgdXNpbmcgYSBUZXJyYWZvcm0gcHJvdmlkZXIgU0RLIHZlcnNpb24gYmVsb3cgMi5cbiAgKiBJZiB5b3UgZXhwZXJpZW5jZSBwcm9ibGVtcyBzZXR0aW5nIHRoaXMgdmFsdWUgaXQgbWlnaHQgbm90IGJlIHNldHRhYmxlLiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgdGhlIHByb3ZpZGVyIGRvY3VtZW50YXRpb24gdG8gZW5zdXJlIGl0IHNob3VsZCBiZSBzZXR0YWJsZS5cbiAgKi9cbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhbWJkYV9mdW5jdGlvbl9ldmVudF9pbnZva2VfY29uZmlnI21heGltdW1fZXZlbnRfYWdlX2luX3NlY29uZHMgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZyNtYXhpbXVtX2V2ZW50X2FnZV9pbl9zZWNvbmRzfVxuICAqL1xuICByZWFkb25seSBtYXhpbXVtRXZlbnRBZ2VJblNlY29uZHM/OiBudW1iZXI7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhbWJkYV9mdW5jdGlvbl9ldmVudF9pbnZva2VfY29uZmlnI21heGltdW1fcmV0cnlfYXR0ZW1wdHMgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZyNtYXhpbXVtX3JldHJ5X2F0dGVtcHRzfVxuICAqL1xuICByZWFkb25seSBtYXhpbXVtUmV0cnlBdHRlbXB0cz86IG51bWJlcjtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGFtYmRhX2Z1bmN0aW9uX2V2ZW50X2ludm9rZV9jb25maWcjcXVhbGlmaWVyIExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWcjcXVhbGlmaWVyfVxuICAqL1xuICByZWFkb25seSBxdWFsaWZpZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAqIGRlc3RpbmF0aW9uX2NvbmZpZyBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGFtYmRhX2Z1bmN0aW9uX2V2ZW50X2ludm9rZV9jb25maWcjZGVzdGluYXRpb25fY29uZmlnIExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWcjZGVzdGluYXRpb25fY29uZmlnfVxuICAqL1xuICByZWFkb25seSBkZXN0aW5hdGlvbkNvbmZpZz86IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlIHtcbiAgLyoqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGFtYmRhX2Z1bmN0aW9uX2V2ZW50X2ludm9rZV9jb25maWcjZGVzdGluYXRpb24gTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZyNkZXN0aW5hdGlvbn1cbiAgKi9cbiAgcmVhZG9ubHkgZGVzdGluYXRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uRmFpbHVyZVRvVGVycmFmb3JtKHN0cnVjdD86IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uRmFpbHVyZU91dHB1dFJlZmVyZW5jZSB8IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uRmFpbHVyZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZXN0aW5hdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXN0aW5hdGlvbiksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlT3V0cHV0UmVmZXJlbmNlIHwgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBkZXN0aW5hdGlvbjoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb24pLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gIC8qKlxuICAqIEBwYXJhbSB0ZXJyYWZvcm1SZXNvdXJjZSBUaGUgcGFyZW50IHJlc291cmNlXG4gICogQHBhcmFtIHRlcnJhZm9ybUF0dHJpYnV0ZSBUaGUgYXR0cmlidXRlIG9uIHRoZSBwYXJlbnQgcmVzb3VyY2UgdGhpcyBjbGFzcyBpcyByZWZlcmVuY2luZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklJbnRlcnBvbGF0aW5nUGFyZW50LCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZykge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGZhbHNlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMYW1iZGFGdW5jdGlvbkV2ZW50SW52b2tlQ29uZmlnRGVzdGluYXRpb25Db25maWdPbkZhaWx1cmUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Rlc3RpbmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlc3RpbmF0aW9uID0gdGhpcy5fZGVzdGluYXRpb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMYW1iZGFGdW5jdGlvbkV2ZW50SW52b2tlQ29uZmlnRGVzdGluYXRpb25Db25maWdPbkZhaWx1cmUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kZXN0aW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGVzdGluYXRpb24gPSB2YWx1ZS5kZXN0aW5hdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZXN0aW5hdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXN0aW5hdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzdGluYXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uU3VjY2VzcyB7XG4gIC8qKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2hhc2hpY29ycC9hd3MvMy43Ni4xL2RvY3MvcmVzb3VyY2VzL2xhbWJkYV9mdW5jdGlvbl9ldmVudF9pbnZva2VfY29uZmlnI2Rlc3RpbmF0aW9uIExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWcjZGVzdGluYXRpb259XG4gICovXG4gIHJlYWRvbmx5IGRlc3RpbmF0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYW1iZGFGdW5jdGlvbkV2ZW50SW52b2tlQ29uZmlnRGVzdGluYXRpb25Db25maWdPblN1Y2Nlc3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYW1iZGFGdW5jdGlvbkV2ZW50SW52b2tlQ29uZmlnRGVzdGluYXRpb25Db25maWdPblN1Y2Nlc3NPdXRwdXRSZWZlcmVuY2UgfCBMYW1iZGFGdW5jdGlvbkV2ZW50SW52b2tlQ29uZmlnRGVzdGluYXRpb25Db25maWdPblN1Y2Nlc3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSB8fCBjZGt0Zi5Ub2tlbml6YXRpb24uaXNSZXNvbHZhYmxlKHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGVzdGluYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb24pLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uU3VjY2Vzc1RvSGNsVGVycmFmb3JtKHN0cnVjdD86IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uU3VjY2Vzc091dHB1dFJlZmVyZW5jZSB8IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uU3VjY2Vzcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgZGVzdGluYXRpb246IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uU3VjY2Vzc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25TdWNjZXNzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kZXN0aW5hdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXN0aW5hdGlvbiA9IHRoaXMuX2Rlc3RpbmF0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25TdWNjZXNzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGVzdGluYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uID0gdmFsdWUuZGVzdGluYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gZGVzdGluYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGVzdGluYXRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzdGluYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc3RpbmF0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXN0aW5hdGlvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXN0aW5hdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0aW5hdGlvbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBMYW1iZGFGdW5jdGlvbkV2ZW50SW52b2tlQ29uZmlnRGVzdGluYXRpb25Db25maWcge1xuICAvKipcbiAgKiBvbl9mYWlsdXJlIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYW1iZGFfZnVuY3Rpb25fZXZlbnRfaW52b2tlX2NvbmZpZyNvbl9mYWlsdXJlIExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWcjb25fZmFpbHVyZX1cbiAgKi9cbiAgcmVhZG9ubHkgb25GYWlsdXJlPzogTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlO1xuICAvKipcbiAgKiBvbl9zdWNjZXNzIGJsb2NrXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYW1iZGFfZnVuY3Rpb25fZXZlbnRfaW52b2tlX2NvbmZpZyNvbl9zdWNjZXNzIExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWcjb25fc3VjY2Vzc31cbiAgKi9cbiAgcmVhZG9ubHkgb25TdWNjZXNzPzogTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25TdWNjZXNzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG9uX2ZhaWx1cmU6IGxhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uRmFpbHVyZVRvVGVycmFmb3JtKHN0cnVjdCEub25GYWlsdXJlKSxcbiAgICBvbl9zdWNjZXNzOiBsYW1iZGFGdW5jdGlvbkV2ZW50SW52b2tlQ29uZmlnRGVzdGluYXRpb25Db25maWdPblN1Y2Nlc3NUb1RlcnJhZm9ybShzdHJ1Y3QhLm9uU3VjY2VzcyksXG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICBjb25zdCBhdHRycyA9IHtcbiAgICBvbl9mYWlsdXJlOiB7XG4gICAgICB2YWx1ZTogbGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5vbkZhaWx1cmUpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJMYW1iZGFGdW5jdGlvbkV2ZW50SW52b2tlQ29uZmlnRGVzdGluYXRpb25Db25maWdPbkZhaWx1cmVMaXN0XCIsXG4gICAgfSxcbiAgICBvbl9zdWNjZXNzOiB7XG4gICAgICB2YWx1ZTogbGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25TdWNjZXNzVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5vblN1Y2Nlc3MpLFxuICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJMYW1iZGFGdW5jdGlvbkV2ZW50SW52b2tlQ29uZmlnRGVzdGluYXRpb25Db25maWdPblN1Y2Nlc3NMaXN0XCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyByZW1vdmUgdW5kZWZpbmVkIGF0dHJpYnV0ZXNcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhhdHRycykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAvKipcbiAgKiBAcGFyYW0gdGVycmFmb3JtUmVzb3VyY2UgVGhlIHBhcmVudCByZXNvdXJjZVxuICAqIEBwYXJhbSB0ZXJyYWZvcm1BdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZSBvbiB0aGUgcGFyZW50IHJlc291cmNlIHRoaXMgY2xhc3MgaXMgcmVmZXJlbmNpbmdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JSW50ZXJwb2xhdGluZ1BhcmVudCwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBmYWxzZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9vbkZhaWx1cmU/LmludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub25GYWlsdXJlID0gdGhpcy5fb25GYWlsdXJlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb25TdWNjZXNzPy5pbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm9uU3VjY2VzcyA9IHRoaXMuX29uU3VjY2Vzcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX29uRmFpbHVyZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb25TdWNjZXNzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX29uRmFpbHVyZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUub25GYWlsdXJlO1xuICAgICAgdGhpcy5fb25TdWNjZXNzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5vblN1Y2Nlc3M7XG4gICAgfVxuICB9XG5cbiAgLy8gb25fZmFpbHVyZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vbkZhaWx1cmUgPSBuZXcgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwib25fZmFpbHVyZVwiKTtcbiAgcHVibGljIGdldCBvbkZhaWx1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uRmFpbHVyZTtcbiAgfVxuICBwdWJsaWMgcHV0T25GYWlsdXJlKHZhbHVlOiBMYW1iZGFGdW5jdGlvbkV2ZW50SW52b2tlQ29uZmlnRGVzdGluYXRpb25Db25maWdPbkZhaWx1cmUpIHtcbiAgICB0aGlzLl9vbkZhaWx1cmUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9uRmFpbHVyZSgpIHtcbiAgICB0aGlzLl9vbkZhaWx1cmUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb25GYWlsdXJlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uRmFpbHVyZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gb25fc3VjY2VzcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vblN1Y2Nlc3MgPSBuZXcgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25TdWNjZXNzT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwib25fc3VjY2Vzc1wiKTtcbiAgcHVibGljIGdldCBvblN1Y2Nlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uU3VjY2VzcztcbiAgfVxuICBwdWJsaWMgcHV0T25TdWNjZXNzKHZhbHVlOiBMYW1iZGFGdW5jdGlvbkV2ZW50SW52b2tlQ29uZmlnRGVzdGluYXRpb25Db25maWdPblN1Y2Nlc3MpIHtcbiAgICB0aGlzLl9vblN1Y2Nlc3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9uU3VjY2VzcygpIHtcbiAgICB0aGlzLl9vblN1Y2Nlc3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb25TdWNjZXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uU3VjY2Vzcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9oYXNoaWNvcnAvYXdzLzMuNzYuMS9kb2NzL3Jlc291cmNlcy9sYW1iZGFfZnVuY3Rpb25fZXZlbnRfaW52b2tlX2NvbmZpZyBhd3NfbGFtYmRhX2Z1bmN0aW9uX2V2ZW50X2ludm9rZV9jb25maWd9XG4qL1xuZXhwb3J0IGNsYXNzIExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZSA9IFwiYXdzX2xhbWJkYV9mdW5jdGlvbl9ldmVudF9pbnZva2VfY29uZmlnXCI7XG5cbiAgLy8gPT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT1cbiAgLyoqXG4gICogR2VuZXJhdGVzIENES1RGIGNvZGUgZm9yIGltcG9ydGluZyBhIExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWcgcmVzb3VyY2UgdXBvbiBydW5uaW5nIFwiY2RrdGYgcGxhbiA8c3RhY2stbmFtZT5cIlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGltcG9ydFRvSWQgVGhlIGNvbnN0cnVjdCBpZCB1c2VkIGluIHRoZSBnZW5lcmF0ZWQgY29uZmlnIGZvciB0aGUgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZyB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZyB0aGF0IHNob3VsZCBiZSBpbXBvcnRlZC4gUmVmZXIgdG8gdGhlIHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGFtYmRhX2Z1bmN0aW9uX2V2ZW50X2ludm9rZV9jb25maWcjaW1wb3J0IGltcG9ydCBzZWN0aW9ufSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBvZiB0aGlzIHJlc291cmNlIGZvciB0aGUgaWQgdG8gdXNlXG4gICogQHBhcmFtIHByb3ZpZGVyPyBPcHRpb25hbCBpbnN0YW5jZSBvZiB0aGUgcHJvdmlkZXIgd2hlcmUgdGhlIExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWcgdG8gaW1wb3J0IGlzIGZvdW5kXG4gICovXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVDb25maWdGb3JJbXBvcnQoc2NvcGU6IENvbnN0cnVjdCwgaW1wb3J0VG9JZDogc3RyaW5nLCBpbXBvcnRGcm9tSWQ6IHN0cmluZywgcHJvdmlkZXI/OiBjZGt0Zi5UZXJyYWZvcm1Qcm92aWRlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNka3RmLkltcG9ydGFibGVSZXNvdXJjZShzY29wZSwgaW1wb3J0VG9JZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwiYXdzX2xhbWJkYV9mdW5jdGlvbl9ldmVudF9pbnZva2VfY29uZmlnXCIsIGltcG9ydElkOiBpbXBvcnRGcm9tSWQsIHByb3ZpZGVyIH0pO1xuICAgICAgfVxuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMvaGFzaGljb3JwL2F3cy8zLjc2LjEvZG9jcy9yZXNvdXJjZXMvbGFtYmRhX2Z1bmN0aW9uX2V2ZW50X2ludm9rZV9jb25maWcgYXdzX2xhbWJkYV9mdW5jdGlvbl9ldmVudF9pbnZva2VfY29uZmlnfSBSZXNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBMYW1iZGFGdW5jdGlvbkV2ZW50SW52b2tlQ29uZmlnQ29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19sYW1iZGFfZnVuY3Rpb25fZXZlbnRfaW52b2tlX2NvbmZpZycsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnLFxuICAgICAgICBwcm92aWRlclZlcnNpb246ICczLjc2LjEnLFxuICAgICAgICBwcm92aWRlclZlcnNpb25Db25zdHJhaW50OiAnfj4gMy4wJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlLFxuICAgICAgcHJvdmlzaW9uZXJzOiBjb25maWcucHJvdmlzaW9uZXJzLFxuICAgICAgY29ubmVjdGlvbjogY29uZmlnLmNvbm5lY3Rpb24sXG4gICAgICBmb3JFYWNoOiBjb25maWcuZm9yRWFjaFxuICAgIH0pO1xuICAgIHRoaXMuX2Z1bmN0aW9uTmFtZSA9IGNvbmZpZy5mdW5jdGlvbk5hbWU7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gICAgdGhpcy5fbWF4aW11bUV2ZW50QWdlSW5TZWNvbmRzID0gY29uZmlnLm1heGltdW1FdmVudEFnZUluU2Vjb25kcztcbiAgICB0aGlzLl9tYXhpbXVtUmV0cnlBdHRlbXB0cyA9IGNvbmZpZy5tYXhpbXVtUmV0cnlBdHRlbXB0cztcbiAgICB0aGlzLl9xdWFsaWZpZXIgPSBjb25maWcucXVhbGlmaWVyO1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcuZGVzdGluYXRpb25Db25maWc7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGZ1bmN0aW9uX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZnVuY3Rpb25OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmdW5jdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmdW5jdGlvbl9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBmdW5jdGlvbk5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Z1bmN0aW9uTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmdW5jdGlvbk5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnVuY3Rpb25OYW1lO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gbWF4aW11bV9ldmVudF9hZ2VfaW5fc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhpbXVtRXZlbnRBZ2VJblNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heGltdW1FdmVudEFnZUluU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heGltdW1fZXZlbnRfYWdlX2luX3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heGltdW1FdmVudEFnZUluU2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4aW11bUV2ZW50QWdlSW5TZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4aW11bUV2ZW50QWdlSW5TZWNvbmRzKCkge1xuICAgIHRoaXMuX21heGltdW1FdmVudEFnZUluU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4aW11bUV2ZW50QWdlSW5TZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heGltdW1FdmVudEFnZUluU2Vjb25kcztcbiAgfVxuXG4gIC8vIG1heGltdW1fcmV0cnlfYXR0ZW1wdHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4aW11bVJldHJ5QXR0ZW1wdHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heGltdW1SZXRyeUF0dGVtcHRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4aW11bV9yZXRyeV9hdHRlbXB0cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4aW11bVJldHJ5QXR0ZW1wdHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heGltdW1SZXRyeUF0dGVtcHRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4aW11bVJldHJ5QXR0ZW1wdHMoKSB7XG4gICAgdGhpcy5fbWF4aW11bVJldHJ5QXR0ZW1wdHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heGltdW1SZXRyeUF0dGVtcHRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heGltdW1SZXRyeUF0dGVtcHRzO1xuICB9XG5cbiAgLy8gcXVhbGlmaWVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3F1YWxpZmllcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcXVhbGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncXVhbGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBxdWFsaWZpZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3F1YWxpZmllciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFF1YWxpZmllcigpIHtcbiAgICB0aGlzLl9xdWFsaWZpZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHF1YWxpZmllcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9xdWFsaWZpZXI7XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbl9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzdGluYXRpb25Db25maWcgPSBuZXcgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMsIFwiZGVzdGluYXRpb25fY29uZmlnXCIpO1xuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0aW5hdGlvbkNvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0RGVzdGluYXRpb25Db25maWcodmFsdWU6IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZykge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXN0aW5hdGlvbkNvbmZpZygpIHtcbiAgICB0aGlzLl9kZXN0aW5hdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXN0aW5hdGlvbkNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0aW5hdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBmdW5jdGlvbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9mdW5jdGlvbk5hbWUpLFxuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIG1heGltdW1fZXZlbnRfYWdlX2luX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21heGltdW1FdmVudEFnZUluU2Vjb25kcyksXG4gICAgICBtYXhpbXVtX3JldHJ5X2F0dGVtcHRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9tYXhpbXVtUmV0cnlBdHRlbXB0cyksXG4gICAgICBxdWFsaWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3F1YWxpZmllciksXG4gICAgICBkZXN0aW5hdGlvbl9jb25maWc6IGxhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc3RpbmF0aW9uQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUhjbEF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgZnVuY3Rpb25fbmFtZToge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fZnVuY3Rpb25OYW1lKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgaWQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgbWF4aW11bV9ldmVudF9hZ2VfaW5fc2Vjb25kczoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fbWF4aW11bUV2ZW50QWdlSW5TZWNvbmRzKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAgbWF4aW11bV9yZXRyeV9hdHRlbXB0czoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9IY2xUZXJyYWZvcm0odGhpcy5fbWF4aW11bVJldHJ5QXR0ZW1wdHMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICBxdWFsaWZpZXI6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX3F1YWxpZmllciksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGRlc3RpbmF0aW9uX2NvbmZpZzoge1xuICAgICAgICB2YWx1ZTogbGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnVG9IY2xUZXJyYWZvcm0odGhpcy5fZGVzdGluYXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICAgIGlzQmxvY2s6IHRydWUsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcIkxhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ0xpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==